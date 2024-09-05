import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import onclickURLAgreedV from '../../../lib/onclickURL/onclickURLAgreedV'
import { BiChevronRight } from "react-icons/bi";
import onclickURLTermsV1 from '../../../lib/onclickURL/onclickURLTermsV1';
import onclickURLTermsV2 from '../../../lib/onclickURL/onclickURLTermsV2';
function TermsV(props) {
    const data = [
        {id: 0, column: 'usage_policy', click:onclickURLTermsV1,           title: '이용약관 동의 (필수)',                 body:'제1조(목적) 이 약관은 OO 회사(전자상거래 사업자)가 운영하는 OO 사이버 몰(이하 “몰”이라 한다)에서 제공하는 인터넷 관련 서비스(이하 “서비스”라 한다)를 이용함에 있어 사이버 몰과 이용자의 권리․의무 및 책임사항을 규정함을 목적으로 합니다.2021. 5. 16. — 여러 방법이 있지만, useState를 활용하여 상태관리를 하는 방법을 남겨보고자 한다. 체크박스가 하나라도 선택되지 않은 상태: 확인 버튼 비활성 체크 ...이 페이지를 23. 1. 10에 방문했습니다.'},
        {id: 1, column: 'personal_information', click:onclickURLTermsV2,   title: '개인정보 수집 및 이용 동의(필수)',      body:''},
        // {id: 2, title: '개인정보 제3자 제공 동의(필수)',body:''},
        // {id: 3, title: '개인정보 개인정보 처리 위탁 동의(필수)',body:''},
        // {id: 4, title: '개인정보 수집 및 이용 동의(선택)',body:''},
    ];
    const [checkItems, setCheckItems] = useState([]);
    const [buttonColor, setButtonColor] = useState(false)

    const handleSingleCheck = (checked, column) => {
        if (checked) {
        // 단일 선택 시 체크된 아이템을 배열에 추가
        setCheckItems(prev => [...prev, column]);

        } else {
        // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
        setCheckItems(checkItems.filter((el) => el !== column));
        }
    };
    
    const handleAllCheck = (checked) => {
        if(checked) {
        // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
        const columnArray = [];
        data.forEach((el) => columnArray.push(el.column));
        setCheckItems(columnArray);
        }
        else {
        // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
        setCheckItems([]);
        }
    }

    useEffect(()=>{
        if(checkItems.includes('usage_policy')
         && checkItems.includes('personal_information')
        //  && checkItems.includes(2)
        //  && checkItems.includes(3)
        ){
            setButtonColor(true);
        } else {
            setButtonColor(false)
        }
    },[checkItems])
    

    return (
        <>
        <StyledTable>
            <thead>
                <tr>
                    <th className='second-row' >
                    <input type='checkbox' className='select'
                        onChange={(e) => handleAllCheck(e.target.checked)}
                        // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
                        checked={checkItems.length === data.length ? true : false} />
                        
                        이용약관 전체동의</th>
                </tr>
            </thead>
            <tbody>
            {data?.map((data, key) => (
                <tr key={key}>
                    <td>
                        <input type='checkbox' className={`select`}
                        onChange={(e) => handleSingleCheck(e.target.checked, data.column)}
                        // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
                        checked={checkItems.includes(data.column) ? true : false} />
                        {data.title}
                        <button onClick={data.click}>약관보기<BiChevronRight/></button>
                    </td>
                </tr>
                
            ))}
            </tbody>
        </StyledTable>
            <Nextbutton onClick={()=>onclickURLAgreedV(checkItems)} state={buttonColor} disabled={!buttonColor}>약관동의</Nextbutton>
        </>
    );
}

export default TermsV;

const StyledTable = styled.table`
  /* border: 1px solid red; */
    text-align: left;
    display: flex;
    flex-direction: column;

    input[type=checkbox] {

    transform : scale(1.5);

    }
    thead{
        /* border: 1px solid red; */
        padding: 10px 0 10px;
        tr{
            th{
                padding: 10px 15px;
                background-color: #ffffff;
                color: #000000;
                width: 600px;
                @media only screen and (max-width: 600px) {
                    font-size: 13px;
                }
                @media only screen and (min-width: 600px) {
                    font-size: 15px;
                }
                @media only screen and (min-width: 768px) {
                    font-size: 17px;
                }
                @media only screen and (min-width: 992px) {
                    font-size: 17px;
                }
                @media only screen and (min-width: 1200px) {
                    font-size: 17px;
                }

            }
        }
    }
    tbody{
        color: #000000;
        padding: 10px 0 10px;
        @media only screen and (max-width: 600px) {
            font-size: 12px;
        }
        @media only screen and (min-width: 600px) {
            font-size: 15px;
        }
        @media only screen and (min-width: 768px) {
            font-size: 17px;
        }
        @media only screen and (min-width: 992px) {
            font-size: 17px;
        }
        @media only screen and (min-width: 1200px) {
            font-size: 17px;
        }
        tr{
            
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;

            td{
                width: 600px;
                /* border: 1px solid red; */
                color: white;
                background-color: #1a1a30;
                padding: 7px 15px;
                border-bottom: 1px solid white;
                
            }
        }
    }
    .select{
        margin: 0 15px 0 0;
    }
    .second-row{

    }
    .third-row{

    }
    button{
        float: right;
        background-color: #1a1a30;
        border: 0;
        color: white;
    }
    @media only screen and (max-width: 600px) {
        width: 90vw;
    }
    @media only screen and (min-width: 600px) {
        width: 90vw;
    }
    @media only screen and (min-width: 768px) {
        width: 600px;
    }
    @media only screen and (min-width: 992px) {
        width: 600px;
    }
    @media only screen and (min-width: 1200px) {
        width: 600px;
    }
`;


const Nextbutton= styled.button`
        /* border: 2px solid white; */

    color: ${(props) => (props.state ? "white" : "gray")};
    background: ${(props) => (props.state ? "Blue" : "lightgrey")};
    border-radius: 24px;
    font-family: 'NotoSansKR-Bold';
    font-size: 25px;
    &:hover{

    }
    @media only screen and (max-width: 600px) {
        width: 200px;
        height: 50px;
        margin: 35px 0;
    }
    @media only screen and (min-width: 600px) {
        width: 300px;
        height: 50px;
        margin: 35px 0;
    }
    @media only screen and (min-width: 768px) {
        width: 400px;
        height: 50px;
        margin: 35px 0;
    }
    @media only screen and (min-width: 992px) {
        width: 400px;
        height: 50px;
        margin: 35px 0;
    }
    @media only screen and (min-width: 1200px) {
        width: 400px;
        height: 50px;
        margin: 35px 0;
    }
`
