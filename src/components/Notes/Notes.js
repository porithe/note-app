import React, {Component} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { colors } from '../../template/colors';

const NotesBlock = styled.div`
    width: 100%;
    display: grid;
    grid-gap: 20px;
    
    @media (min-width: 768px) {
        align-items: center;
        justify-content: center;
    }
    
    @media (min-width: 768px) and (max-width: 1280px) {
        grid-template-columns: 350px 350px;
    }
     @media (min-width: 1281px) and (max-width: 1919px) {
        grid-template-columns: 320px 320px 320px 320px;
    }
    @media (min-width: 1920px) {
        grid-template-columns: 400px 400px 400px 400px;
    }
    
`;

const Note = styled.div`
    width: 300px;
    min-height: 200px;
    background-color: transparent;
    margin: 0 auto;
    overflow-wrap: break-word;
    padding: 5px 15px 5px 15px;
    border: 2px solid ${colors.white};
    position: relative;
    box-shadow: 0 0 5px 0 ${colors.white};
    
    @media (min-width: 1024px) and (max-width: 1280px){
        width: 350px;
        min-height: 250px;
    }
    @media (min-width: 1281px) and (max-width: 1919px) {
        width: 320px;
        min-height: 260px;
    }
    @media (min-width: 1920px) {
        width: 400px;
        min-height: 270px;
    }
`;
const Title = styled.h1`
    margin: 0 auto;
    width: 200px;
    font-size: 1.6rem;
    text-align: center;
    color: ${colors.white};
    font-weight: 300;
    position: relative;
    ::after {
        content: '';
        position: absolute;
        bottom: -7px;
        left: 50%;
        transform: translateX(-50%);
        width: 220px;
        height: 2px;
        background-color: ${colors.white};  
        @media (min-width: 1024px) {
            width: 260px;
        }      
    }
    @media (min-width: 1024px) {
        width: 300px;
        font-size: 2rem;
    }
`;
const ExitButton = styled.div`
    width: 30px;
    height: 30px;
    position: absolute;
    top: 9px;
    right: 15px;
    cursor: pointer;
    ::before {
        position: absolute;
        content: '';
        width: 30px;
        height: 3px;
        background-color: ${colors.white};
        transform: rotate(45deg);
        top: 15px;
        left: 0;
    }
    ::after {
        position: absolute;
        content: '';
        width: 30px;
        height: 3px;
        background-color: ${colors.white};
        transform: rotate(135deg);
        top: 15px;
        left: 0;
    }
`;
const Description = styled.p`
    color: ${colors.white};
    padding: 15px 0 15px 0;
    text-align: center;
    font-size: 1.3rem;
`;


class Notes extends Component {

    delNote = (id) => {
        this.props.dispatch({
           type: "DEL NOTE",
           id: id,
        });
    };

    render() {
        return (
            <NotesBlock>
                {this.props.items.map(item => {
                    return (
                        <Note key={item.id}>
                            <ExitButton onClick={() => this.delNote(item.id)} />
                            <Title>{item.title}</Title>
                            <Description>{item.description}</Description>
                        </Note>
                    )
                })}
            </NotesBlock>
        );
    }
}
function mapStateToProps(state) {
    return {
        items: state.items,
    }
}

export default connect(mapStateToProps)(Notes);
