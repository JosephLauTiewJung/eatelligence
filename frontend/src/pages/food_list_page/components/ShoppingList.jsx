import { Minus, X } from "lucide-react";

const ShoppingList = ({items, onDeleteItem, onClose}) => {
    return (
        <div className='bg-white rounded-3xl p-4'>
            <X onClick={onClose}/>
            {items.map((item, index) => (
               <div key={item.id || index} className="flex items-center space-x-4 py-2 border-b last:border-0">
                   <img src={item.imageUrl} alt={item.name} className="w-10 h-10 rounded-full object-cover" />
                   <div>
                       <div className="font-bold text-black">{item.name}</div>
                       <div className="text-xs text-gray-500">{item.vendor}</div>
                   </div>
                   <Minus className='ml-auto mr-4' onClick={(e) => onDeleteItem(e, item)}/>
               </div>
            ))}
        </div>
    )
}

export default ShoppingList;