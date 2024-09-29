import react from 'react'
// import entertainmentLogo from '../assets/icons/entertainment-icon.png'

function CategoryButton(props){
    const imgUrl = "https://images.unsplash.com/photo-1531040630173-7cfb894c8eaa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D"
    const source = "rewards-power-user/public/icons/entertainment-icon.png"
    return (
        <div 
        className="category-button" 
        style={{backgroundColor: props.category.backgroundColor}}>
            <p>{props.category.name}</p>
            <img src={props.category.icon} alt="icon"/>
        </div>
    )
}

export default CategoryButton