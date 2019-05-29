import React, {Component} from 'react';
import styled from 'styled-components';
import { colors } from '../../template/colors';
import { connect } from 'react-redux';

const CompBlock = styled.div`
    width: 300px;
    height: 300px;
    margin: 0 auto 20px auto;
    border: 2px solid ${colors.white};
    @media (min-width: 768px) {
        width: 400px;
    }
`;
const FormBlock = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15px;
    position: relative;
`;
const InputTitle = styled.input`
    width: 220px;
    height: 40px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid ${colors.white};
    text-align: center;
    font-size: 1.8rem;
    color: ${colors.white};
    margin-bottom: 20px;
    ::placeholder {
        color: rgba(245,245,245 ,0.7);
    }
    @media (min-width: 768px) {
        width: 240px;
    }
`;
const InputBody = styled.textarea`
    width: 220px;
    height: 140px;
    background-color: transparent;
    border: 1px solid ${colors.white};
    color: ${colors.white};
    text-align: center;
    font-size: 1.4rem;
    padding: 10px;
    ::placeholder {
        color: rgba(245,245,245 ,0.7);
    }
    @media (min-width: 768px) {
        width: 340px;
    }
`;
const Button = styled.button`
    width: 145px;
    height: auto;
    margin-top: 12px;
    background-color: transparent;
    color: ${colors.white};
    border: 2px solid ${colors.white};
    border-radius: 12px 12px;
    font-size: 1.6rem;
    padding: 10px;
    cursor: pointer;
    transition: .3s;
    :hover {
        box-shadow: 0 0 7px 0 ${colors.white};
    }
`;

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            id: 0,
        };

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.addNote = this.addNote.bind(this);
    }

    addNote = e => {
        e.preventDefault();
        if ( this.state.title !== '' && this.state.description !== '') {
            let itemsObject = {
                title: this.state.title,
                description: this.state.description,
                id: this.state.id,
            };
            this.props.dispatch({
                type: "ADD NOTE",
                item: itemsObject,
            });
        }
        this.setState({
            title: '',
            description: '',
            id: this.state.id + 1,
        });
    };

    handleChangeTitle = e => {
        this.setState({ title: e.target.value });
    };
    handleChangeDescription = e => {
        this.setState({ description: e.target.value });
    };


    render() {
        return (
            <CompBlock>
                <FormBlock onSubmit={this.addNote}>
                    <InputTitle value={this.state.title} onChange={this.handleChangeTitle} placeholder="Title..." />
                    <InputBody value={this.state.description} onChange={this.handleChangeDescription} id="inputBody" placeholder="Description..." />
                    <Button type="submit">Add Note</Button>
                </FormBlock>
            </CompBlock>
        );
    }
}

function mapStateToProps(state){
    return {
        items: state.items,
    }
}

export default connect(mapStateToProps)(Form);
