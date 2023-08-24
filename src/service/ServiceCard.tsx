export default function ServiceCard({items}:any) {
    const {imgurl,title,desc}=items
  return (
    <div className='p-[1rem] border  border-l-0 rounded mx-2 border-t-0 border-orange-300' >
        <div className="img w-[50px] h-[50px] p-[0.5rem] mb-[1rem] m-auto flex items-center justify-center rounded-[50px] bg-orange-400 leading-[50px]">
            <img src={imgurl} alt="" className='w-full' />
        </div>
        <h5 className='text-[1.1rem] font-semibold my-1'>{title}</h5>
        <p className='text-[.9rem]'>{desc}</p>
    </div>
  )
}
