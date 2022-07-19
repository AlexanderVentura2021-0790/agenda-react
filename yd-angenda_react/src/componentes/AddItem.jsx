import { useState } from 'react'


const AddItem = ({addItem}) => {

  const [title, setTitle] = useState('')
  const [categoria, setCategoria] = useState('')
  const [day, setDay] = useState('')
  const [time, setTime] = useState('')
  const onSubmitItem = (e) => {

    e.preventDefault()

    if (!title){
        alert("por favor completar los campos")
        return
    }
    if (!categoria){
        alert("por favor completar los campos")
        return
    }

    addItem({title, categoria, day,time})

    setTitle('')
    setCategoria('')
    setDay('')
    setTime('')



    
  }

  return (
    <div className="col-sm-10">
    <div className="card bg-form-dark">
        <div className="card-header">
            <h2 className="text-muted">Agendar</h2>
        </div>
        <div className="card-body"> 
            <form onSubmit={onSubmitItem}>
                <div className='form-group'>
                    <label>Título</label>
                    <input
                        type='text'
                        placeholder='nombre'
                        className="form-control"
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <select
                        name="category"
                        className="form-control"
                        value={categoria}
                        onChange={(e)=> setCategoria(e.target.value)}
                    >
                        <option value="">numero</option>
                            <option value="nombre">nombre</option>
                            <option value="numero">numero</option>
                            
                    </select>
                </div>
                <div className="form-group">
                    <select
                        name="day"
                        className="form-control"
                        value={day}
                        onChange={(e)=> setDay(e.target.value)}

                    >
                        <option value="">-- Elegir Día --</option>
                        <option value="Lunes">Lunes</option>
                        <option value="Martes">Martes</option>
                        <option value="Miércoles">Miércoles</option>
                        <option value="Jueves">Jueves</option>
                        <option value="Viernes">Viernes</option>
                        <option value="Sábado">Sábado</option>
                        <option value="Domingo">Domingo</option>
                    </select>
                </div>
                <div className='form-group'>
                    <input
                        type='time'
                        className="form-control" 
                        value={time}
                        onChange={(e)=> setTime(e.target.value)}

                    />
                </div>
                <div className="form-group">
                    <input
                        type="submit"
                        className="btn btn-primary btn-add-item"
                        value="Añadir contacto"
                    />
                </div>
            </form>
        </div>
    </div>
</div>
  )
}


export default AddItem
