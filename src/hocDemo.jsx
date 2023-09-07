import React from "react";

const withHoc = (Wrappedhoc) => {
    class WithHoc extends React.Component {
        constructor(props) {
            super(props)
        }
        render() {
            return <>
                <Wrappedhoc/> 
            </>
        }
    }
    return WithHoc
}

export default withHoc