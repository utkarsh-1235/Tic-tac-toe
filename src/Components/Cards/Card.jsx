import Icon from '../Icons/Icons';
import './Card.css'

function Card({player}){
    let icon = <Icon/>
    if(player === 'X'){
        icon = <Icon name="cross"/>
    }
    else if(player === 'O'){
        icon = <Icon name='circle'/>
    }
    return(
          <div className="card">
            {icon}
          </div>
    )
}

export default Card;