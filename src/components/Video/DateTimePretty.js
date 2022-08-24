import React from "react";

function DateTimePretty(Component) {
  class DateTimePretty extends React.Component {
    render() {
      return <Component date={formatTimeStamp(this.props.date)} />;
    }
  }
  DateTimePretty.displayName = `DateTimePretty(${getDisplayName(Component)})`;
  return DateTimePretty;
}

function formatTimeStamp(date) {
  let result = "не определено";
  const minutesCase = [`минуту`, `минуты`, `минут`];
  const hoursCase = [`час`, `часа`, `часов`];
  const daysCase = [`день`, `дня`, `дней`];
  const monthsCase = [`месяц`, `месяца`, `месяцев`];
  const yearsCase = [`год`, `года`, `лет`];
  const oneHour = 1000 * 60 * 60;
  const oneDay = oneHour * 24;
  const oneMonth = oneDay * 31;
  const oneYear = oneMonth * 12;
  const eternity = oneYear + 1;
  const timeDif = new Date() - new Date(date);
  //На случай, если в результате неизвестной ошибки разница в датах окажется отрицательной
  if (timeDif < 0) return result;

  if (timeDif < oneHour) {
    const minutes = Math.floor(timeDif / 60000);
    if (minutes % 10 === 1 && minutes !== 11) {
      result = `${minutes} ${minutesCase[0]} назад`;
      return result;
    }
    if (
      (minutes % 10 === 2 && minutes !== 12) ||
      (minutes % 10 === 3 && minutes !== 13) ||
      (minutes % 10 === 4 && minutes !== 14)
    ) {
      result = `${minutes} ${minutesCase[1]} назад`;
      return result;
    }
    result = `${minutes} ${minutesCase[2]} назад`;
    return result;
  }

  if (timeDif < oneDay) {
    const hours = Math.floor(timeDif / oneHour);
    if (hours % 10 === 1 && hours !== 11) {
      result = `${hours} ${hoursCase[0]} назад`;
      return result;
    }
    if (
      (hours % 10 === 2 && hours !== 12) ||
      (hours % 10 === 3 && hours !== 13) ||
      (hours % 10 === 4 && hours !== 14)
    ) {
      result = `${hours} ${hoursCase[1]} назад`;
      return result;
    }
    result = `${hours} ${hoursCase[2]} назад`;
    return result;
  }

  if (timeDif < oneMonth) {
    const days = Math.floor(timeDif / oneDay);
    if (days % 10 === 1 && days !== 11) {
      result = `${days} ${daysCase[0]} назад`;
      return result;
    }
    if (
      (days % 10 === 2 && days !== 12) ||
      (days % 10 === 3 && days !== 13) ||
      (days % 10 === 4 && days !== 14)
    ) {
      result = `${days} ${daysCase[1]} назад`;
      return result;
    }
    result = `${days} ${daysCase[2]} назад`;
    return result;
  }

  if (timeDif < oneYear) {
    const months = Math.floor(timeDif / oneMonth);
    if (months % 10 === 1 && months !== 11) {
      result = `${months} ${monthsCase[0]} назад`;
      return result;
    }
    if (months % 10 === 2 && months !== 12) {
      result = `${months} ${monthsCase[1]} назад`;
      return result;
    }
    result = `${months} ${monthsCase[2]} назад`;
    return result;
  }

  //Во всех остальных случаях, но для читабельности оставил if
  if (timeDif >= eternity) {
    const years = Math.floor(timeDif / oneYear);
    if (years % 10 === 1 && years !== 11) {
      result = `${years} ${yearsCase[0]} назад`;
      return result;
    }
    if (
      (years % 10 === 2 && years !== 12) ||
      (years % 10 === 3 && years !== 13) ||
      (years % 10 === 4 && years !== 14)
    ) {
      result = `${years} ${yearsCase[1]} назад`;
      return result;
    }
    result = `${years} ${yearsCase[2]} назад`;
    return result;
  }
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}


export default DateTimePretty;
