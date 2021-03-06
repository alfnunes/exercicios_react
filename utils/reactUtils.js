import React from 'react'


function ChildrenWithProps(children, props){
return  React.Children.map(props.children, 
            child => React.cloneElement(child, {...props})           
        )
}


export { ChildrenWithProps }