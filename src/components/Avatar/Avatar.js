import './Avatar.css'
import MaterialAvatar from '@mui/material/Avatar'

const Avatar = () => <div className = 'avatar' >
      <MaterialAvatar alt = "Sandro Machado" src = "/static/images/avatar/sandro.webp"
        sx = {
          {
            width: 120,
            height: 120
          }
        }
      /> 
    </div>


export default Avatar