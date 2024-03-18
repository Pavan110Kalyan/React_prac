import React, { useState } from 'react'
import med from '../images/med.webp';
import { Row ,Col, Input, Checkbox, Radio, Switch, DatePicker, Select, Button, Table} from 'antd';
import './Task1.scss';

const handleChange = (value) => {
    console.log(`selected ${value}`);
  };


const Task1 = () => {

    const [inputarr,setInputarr]=useState([])

    const [inputdata,SetInputdata]=useState({
      name:"",
      medicine:"",
      dosage:"",
      generic :"",
      staus : true,
      brand:""
    })
      
    function changehandle(e){
      SetInputdata({...inputdata,[e.target.name]:e.target.value})
    }

    const [editIndex, setEditIndex] = useState(null);

    function submitHandle() {

        if (editIndex !== null) {
          const updatedInputarr = [...inputarr];
          updatedInputarr[editIndex] = { ...inputdata };
          setInputarr(updatedInputarr);
          setEditIndex(null);
        } 
        else {
          setInputarr([...inputarr, { ...inputdata }]);
        }
        SetInputdata({ name: "", medicine: "", dosage: "", generic: "", brand: "" });
      }

      const handleEdit = (index) => {
        SetInputdata({ ...inputarr[index] });
        setEditIndex(index);
      };
    
      const handleDelete = (index) => {
        const updatedInputarr = [...inputarr];
        updatedInputarr.splice(index, 1);
        setInputarr(updatedInputarr);
      };

    const [value, setValue] = useState(1);
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
      };

  return (
    <Row>
        <Col span={24}>
            <div className='med_manage'>
                <div className='manage_header'>
                    <img src={med} />
                    <h2>Medication Management</h2>
                </div>
                <div className='manage_body'>
                    <div className='inputs'>
                        <label>Patient Name :</label>
                        <Input type='text' name="name" value={inputdata.name} onChange={((event) => SetInputdata({...inputdata, name : event.target.value}))} placeholder='Patient name'></Input>
                    </div>
                    <div className='inputs'>
                        <label>Medication :</label>
                        <Input type='text' name="medicine" value={inputdata.medicine} onChange={((event) => SetInputdata({...inputdata, medicine : event.target.value}))} placeholder='Medication'></Input>
                    </div>
                    <div className='inputs'>
                        <label>Dosage :</label>
                        <Input type='text' name='dosage' value={inputdata.dosage} onChange={((event) => SetInputdata({...inputdata, dosage : event.target.value}))} placeholder='Dosage Instructions'></Input>
                    </div>
                    <div className='check'>
                        <div>
                            <h3>Medicine Brand :</h3>
                        </div>
                        <div>
                            <Checkbox>Generic</Checkbox>
                            <Checkbox>Brand</Checkbox>
                        </div>
                    </div>
                    <div className='radio'>
                        <div>
                            <h3> Medicine Type</h3>
                        </div>
                        <div>
                            <Radio.Group onChange={onChange} value={value}>
                                <Radio value={1}>Pill</Radio>
                                <Radio value={2}>Liquid</Radio>
                                <Radio value={3}>Injection</Radio>
                            </Radio.Group>
                        </div>
                    </div>
                    <div className='switch'>
                        <h3>Prescription Status :</h3>
                        <Switch checkedChildren="Required" unCheckedChildren="Not Required" defaultChecked/>
                    </div>
                    <div className='exp_date'>
                        <h3>Expiratrion Date :</h3>
                        <DatePicker/>
                    </div>
                    <div className='select'>
                       <div className='select_title'>
                            <h3>Prescribing Doctor :</h3>
                       </div>
                       <div className='select_drop'>
                       <Select
                                defaultValue="lucy"
                                onChange={handleChange}
                                options={[
                                    {
                                    value: 'jack',
                                    label: 'Jack',
                                    },
                                    {
                                    value: 'lucy',
                                    label: 'Lucy',
                                    },
                                    {
                                    value: 'Yiminghe',
                                    label: 'yiminghe',
                                    }
                                ]}
                                />
                       </div>
                    </div>
                    <div className='submit'>
                        <Button type='primary' onClick={submitHandle}>Submit</Button>
                    </div>
                </div>
            </div>
            <div className='table'>
                <table border={1} width="100%">
                <tr>
                            <th>Patient Name</th>
                            <th>Medication</th>
                            <th>Dosage</th>
                            <th>Medicine Brand</th>
                            <th>Medicine Type</th>
                            <th>Prescription Status</th>
                            <th>Exp Date</th>
                            <th>Recommended Doctor</th>
                            <th>Action</th>
                        </tr>

                        {inputarr.map((info, ind) => (
                <tr key={ind}>
                  <td>{info.name}</td>
                  <td>{info.medicine}</td>
                  <td>{info.dosage}</td>
                  <td>{info.brand}</td>
                  <td>{info.type}</td>
                  <td>{info.status ? "Required" : "Not Required" }</td>
                  <td>{info.exp}</td>
                  <td>{info.recom}</td>
                  <td className='action'>
                    <Button type='primary' onClick={() => handleEdit(ind)} >Edit</Button>
                    <Button type='primary' onClick={() => handleDelete(ind)} >Delete</Button>
                  </td>
                </tr>
                   ))}

                </table>
            </div>
        </Col>
    </Row>
  )
}

export default Task1;
