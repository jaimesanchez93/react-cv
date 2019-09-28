import React, { useState, useEffect} from "react";

// class ChangingProgressProvider extends React.Component {
//     static defaultProps = {
//         interval: 1000
//     };

//     state = {
//         valuesIndex: 0
//     };

//     componentDidMount() {
//         setInterval(() => {
//             this.setState({
//                 valuesIndex: (this.state.valuesIndex + 1) % this.props.values.length
//             });
//         }, this.props.interval);
//     }

//     render() {
//         return this.props.children(this.props.values[this.state.valuesIndex]);
//     }
// }

// export default ChangingProgressProvider;


export default function ChangingProgressProvider (props) {

    const minValue = 0;
    const currentValue = 0;
    const [maxValue, setMaxValue] = useState(props.value)
    useEffect(() => {
        for(let i=0; i<maxValue;i++){
           this.currentValue = i;
        }

    })
    return currentValue;
}