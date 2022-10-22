import {connect} from 'react-redux';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Summ = ({summ}) => {
    return (
        <div style={{display: "flex", justifyContent: "flex-end", marginTop: "10px"}}><div><AddShoppingCartIcon/></div><div>: {summ} руб.</div></div>)
}

const mapStateToProps = ({summ}) => {
    return {summ}
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Summ);