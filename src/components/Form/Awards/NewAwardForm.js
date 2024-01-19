import React, { useState } from "react";
import { connect } from "react-redux";
import { createAward } from "./actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const NewAwardForm = ({ awards=[], onCreatePressed }) =>{

    const [award, setAward] = useState('');

    return(
        <div className='shadow'>
    <div className="border rounded p-3 m-0">
            <input 
                className="form-control form-control-sm mb-2"
                type="text"
                placeholder="Award/Achievement/Certification"
                value={award}
                onChange={e => setAward(e.target.value)}
            />          
        <div className="text-right">
            <button style={{background:'#126ccc'}}
                className="btn btn-success btn-sm rounded-circle"
                disabled={award === ''}
                onClick={()=>{
                    onCreatePressed({award});
                    setAward('');
                }}
            >
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    </div>
    </div>
    )
}

const mapStateToProps = state =>({
    awards: state.awards,
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: award => dispatch(createAward(award)),
});

export default connect(mapStateToProps,mapDispatchToProps)(NewAwardForm);
