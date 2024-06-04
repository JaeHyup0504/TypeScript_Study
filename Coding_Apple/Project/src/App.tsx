import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {RootState, increment} from './index'

let a :string = 'Lee'
// let 박스:JSX.Element = <div></div>

// 타입지정하고 싶으면
let 박스1 :JSX.Element = <div>HI</div>;

function App() {

  // useState 사용시 알아서 타입지정 해줌
  let [user, setUser] = useState('Lee')

  // string 또는 number가 들어올 state를 만들고 싶을 때
  let [user1, setUser1] = useState<string | number>('Lee')

  const type = useSelector((state :RootState) => state)
  const dispatch = useDispatch()

  return (
    <div>
     { 박스1 }
     <h4>안녕하십니까</h4>
     {type.counter1.count}
     <button onClick={()=>{dispatch(increment())}}>버튼</button>
     <Profile name="철수" age="20"></Profile>
    </div>
  );
}

function Profile(props : {name:string, age:string}) : JSX.Element {
  return (
    <div>{props.name}입니다. {props.age}살 입니다.</div>
  )
}

export default App;
