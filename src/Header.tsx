import React, { ChangeEvent, useState } from 'react'

const initialState = {
  No: '',
}
const today = new Date()
let year = today.getFullYear() // 년도
let month = today.getMonth() + 1 // 월
let date = today.getDate() // 날짜
let day = today.getDay()
const receiptDate = `${year}.${month}.${date}`
interface IHeaderProps {
  totalPrice: number
}
const Header = ({ totalPrice }: IHeaderProps) => {
  const [state, setState] = useState(initialState)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setState((prev) => ({ ...state, [name]: value }))
  }
  return (
    <div className="header">
      <div className="header__title">
        <div className="header__lineNo">
          <span>No.</span>
          <input name="No" value={state.No} onChange={handleChange} />
        </div>
        <span className="header__name">영 수 증</span>
        <span className="header__supp">(공급자용)</span>
      </div>
      <div className="header__receiver">
        <input />
        <span>귀하</span>
      </div>

      <table className="supp__info">
        <tr>
          <td rowSpan={4} colSpan={1}>
            공
            <br />
            급
            <br />자
          </td>
          <td colSpan={3}>
            사업자 <br />
            등록번호
          </td>
          <td colSpan={12}>116-06-16997</td>
        </tr>
        <tr>
          <td colSpan={3}>상 호</td>
          <td colSpan={6}>21세기메디칼약국</td>
          <td colSpan={1}>
            성<br />명
          </td>
          <td colSpan={4}>윤미영</td>
        </tr>
        <tr>
          <td colSpan={3}>
            사업장 <br />
            주&nbsp;&nbsp;소
          </td>
          <td colSpan={12}>서울시 성동구 무수막길 97</td>
        </tr>
        <tr>
          <td colSpan={3}>
            업&nbsp;&nbsp;&nbsp;태
            <br />
          </td>
          <td colSpan={5}>소매</td>
          <td colSpan={1} style={{ width: '28px' }}>
            종<br />목
          </td>
          <td colSpan={6}>의약품</td>
        </tr>
        <tr>
          <td colSpan={4}>작성년월일</td>
          <td colSpan={7}>금액</td>
          <td colSpan={5}>비고</td>
        </tr>
        <tr>
          <td colSpan={4} style={{ height: '44px' }}>
            {receiptDate}
          </td>
          <td colSpan={7} style={{ textAlign: 'left', height: '44px' }}>
            <span style={{ marginLeft: '10px' }}>₩ {totalPrice} 원</span>
          </td>
          <td colSpan={5} style={{ height: '44px' }}></td>
        </tr>
        <tr>
          <td colSpan={13}>위 금액을 영수(청구) 함</td>
        </tr>
      </table>
    </div>
  )
}

export default Header
