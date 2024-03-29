import React from 'react'
import { useAllPartiesStore } from '../../../store/all-parties'
import EventCard from '../../EventCard'
import MemberCard from '../../MemberCard'
import { NotFoundGroup } from '../../utils'

type Props = {
  resetFilter: Function
}


const DATA = [
  { person: "กนกวรรณ วิลาวัลย์", total_event: 213, category: "ศาล & องค์กรอิสระ" },
  { person: "กรณ์ จาติกวณิช", total_event: 213, category: "ศาล & องค์กรอิสระ" },
  { person: "กวินนาถ ตาคีย์", total_event: 213, category: "ศาล & องค์กรอิสระ" },
  { person: "คณะกรรมการการเลือกตั้ง", total_event: 213, category: "ศาล & องค์กรอิสระ" },
  { person: "คณะกรรมการตรวจเงินแผ่นดิน", total_event: 213, category: "ศาล & องค์กรอิสระ" },
  { person: "คณะกรรมการป้องกันและปราบปรามการทุจริตแห่งชาติ", total_event: 213, category: "ศาล & องค์กรอิสระ" },
  { person: "คารม พลพรกลาง", total_event: 213, category: "ศาล & องค์กรอิสระ" },
  { person: "คำนูณ สิทธิสมาน", total_event: 213, category: "ศาล & องค์กรอิสระ" },
  { person: "จารึก ศรีอ่อน", total_event: 213, category: "ศาล & องค์กรอิสระ" },
  { person: "จิรวัฒน์ อรัณยกานนท์", total_event: 213, category: "ศาล & องค์กรอิสระ" },
]

const AllPartiesDataTable = ({ resetFilter }: Props) => {
  const numItemsPerPage = 50;

  const [currentPage, setCurrentPage] = React.useState(0)
  const [numPage, setNumPage] = React.useState(Math.ceil(DATA.length / numItemsPerPage))
  const renderPagination = React.useCallback(() => {
    let content = [];
    for (let i = 0; i < numPage; i++) {
      content.push(<button key={`page-${i}`} className={`border-black border-[1px] rounded-[2px] w-[24px] h-[24px]
      inline-flex justify-center items-center
      wv-ibmplex wv-semibold wv-u5 ${currentPage === i ? 'opacity-100' : 'opacity-50'}`}
        onClick={() => setCurrentPage(i)}>{i + 1}</button>);
    }
    return content;
  }, [currentPage, numPage])

  const { filteredPersonList } = useAllPartiesStore((state) => state)

  React.useEffect(() => {
    if (filteredPersonList.length)
      setNumPage(Math.ceil(filteredPersonList.length / numItemsPerPage))
  }, [filteredPersonList])


  return (
    <div className='w-full'>
      <div className='flex flex-row-reverse justify-between items-center p-[10px] mb-[6px]'>
        <div className='wv-ibmplex wv-b4'>{`- ${filteredPersonList.length} คน -`}</div>
        <div className='flex flex-row  gap-x-[2px]'>
          <button className='border-black border-[1px] rounded-[2px] w-[24px] h-[24px]
            inline-flex justify-center items-center disabled:opacity-20' disabled={currentPage === 0}
            onClick={() => setCurrentPage((prev) => prev - 1)}>
            <svg width={9} height={12} viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.15991 1.41L3.57991 6L8.15991 10.59L6.74991 12L0.749912 6L6.74991 0L8.15991 1.41Z" fill="black" />
            </svg>
          </button>
          {renderPagination()}
          <button className='border-black border-[1px] rounded-[2px] w-[24px] h-[24px]
          inline-flex justify-center items-center disabled:opacity-20' disabled={currentPage === numPage - 1}
            onClick={() => setCurrentPage((prev) => prev + 1)}>
            <svg width={9} height={12} viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.840088 1.41L5.42009 6L0.840088 10.59L2.25009 12L8.25009 6L2.25009 0L0.840088 1.41Z" fill="black" />
            </svg>
          </button>
        </div>
      </div>
      <div className='flex flex-col gap-y-[6px] max-h-[45vh] overflow-y-scroll'>
        {filteredPersonList.slice(numItemsPerPage * currentPage, numItemsPerPage * currentPage + numItemsPerPage).map((data, index) => (
          <div key={`filter-data-${index}`}><MemberCard {...data} /></div>
        ))}
        {filteredPersonList.length <= 0 &&
          <div className='border-[1px] border-black rounded-[4px]'>
            <div className='flex flex-col justify-center items-center p-2 gap-y-2'>
              <div className='wv-kondolar wv-bold wv-h8'>ไม่พบบุคคลที่คุณค้นหา</div>
              <div className='w-[210px] h-[118px]'>
                <NotFoundGroup />
              </div>
              <button className='border-[1px] border-black py-[10px] text-center w-full wv-ibmplex wv-semibold wv-u1'
                onClick={() => resetFilter()}>
                ยกเลิกการค้นหา
              </button>
            </div>

          </div>
        }
      </div>
    </div>
  )
}

export default AllPartiesDataTable