import ImgCategory from './../agenda.jpg'
import {FaTrash} from 'react-icons/fa'

const Item = ({item,deleteItem}) => {
  return (
    <div className="col-sm-10">
                <p>{item.day}</p>
                <div className="row item">
                    <div className="col-sm-3">
                        <img src= {ImgCategory} alt="categoria"className='img-fluid p-0'/>
                    </div>
                    <div className="col-sm-8">
                       {item.title} - {item.category}
                    </div>
                    <div className="col-sm-1">
                        <FaTrash 
                            style={{color: '#efeff1',cursor:'pointer'}}
                            onClick={()=> deleteItem(item.id)}
                        />
                    </div>
                </div>
            </div>
  )
}



export default Item
