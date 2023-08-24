export default function CommonSection({title}:{title:string}) {
  return (
    <section className="common-section">
        <div className="container">
            <div className="grid grid-flow-col">
                <h1 className='text-slate-800 text-3xl font-[500]'>{title}</h1>
            </div>
        </div>
    </section>
  )
}
