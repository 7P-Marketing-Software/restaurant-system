export default function Box({name, value, icon}) {

  return <>
    <div className="p-4 mb-2 capitalize w-full h-28 bg-base-200 text-slate-300 flex flex-col justify-evenly items-center">
      <span className="text-2xl mb-2">{icon}</span>
      <span>{name}</span>
      <span>{value}</span>
    </div>
  </>
}