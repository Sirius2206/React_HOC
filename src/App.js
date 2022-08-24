import React, {useState} from 'react';
import { VideoList } from './components/Video';
import List from './components/Views';

import "./App.css"




export default function App() {
    const [list1, setList1] = useState([
        {
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2023-08-23 23:24:00'
        },
        {
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2022-08-23 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2022-02-03 23:16:00'
        },
        {
            url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-01 16:17:00'
        },
        {
            url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2015-12-02 05:24:00'
        },
    ]);
    const [list2, setList2] = useState([
      {
          type: 'video',
          url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
          views: 50
      },
      {
          type: 'video',
          url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
          views: 12
      },
      {
          type: 'article',
          title: 'Невероятные события в неизвестном поселке...',
          views: 175
      },
      {
          type: 'article',
          title: 'Секретные данные были раскрыты!',
          views: 1532
      },
      {
          type: 'video',
          url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
          views: 4253
      },
      {
          type: 'article',
          title: 'Кот Бегемот обладает невероятной...',
          views: 12,
      },
  ]);
    const [app, setApp] = useState(<VideoList list={list1} />);
    const [currentClass, setCurrentClass] = useState("videoList");
    const apps = [
      {
        name: "videoList",
        component: <VideoList list={list1} />
      },
      {
        name: "views",
        component: <List list={list2} />
      },
      {
        name: "",
        component: ""
      }
    ]
    
  
    const handleClick = e => {
      const curApp = apps.find(item => item.name === e.target.className);
      setApp(curApp.component);
      setCurrentClass(curApp.name);
    }
    return (
        <div>
      <header className="header_main">
        <button className='videoList' onClick={handleClick}>Задание №1(Список видео)</button>
        <button className='views' onClick={handleClick}>Задание №2(Просмотры)</button>
        <button className="" onClick={handleClick}>Задание №3()</button>
      </header>
      <div className={"app_" + currentClass}>{app}</div>
    </div>
        
    );
}