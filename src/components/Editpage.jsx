import { Typography, Box, makeStyles, Grid, TextField} from "@material-ui/core"
import { deepPurple, green } from '@material-ui/core/colors';
import axios from "axios";
import { useState } from "react";
import { Card } from 'antd';
import {
   Button,
   Cascader,
   DatePicker,
   Form,
   Input,
   InputNumber,
   Radio,
   Select,
   Switch,
   TreeSelect,
 } from 'antd';
const useStyles = makeStyles({
 headingColor: {
  backgroundColor: deepPurple[400],
  color: "white"
 },
 addStuColor: {
  backgroundColor: green[400],
  color: "white"
 },
})

const Home = () => {
 const classes = useStyles();
 const [student, setStudent] = useState({
  stuname: "",
  email: ""
 });
 const [status, setStatus] = useState();

 function onTextFieldChange(e) {
  setStudent({
   ...student,
   [e.target.name]: e.target.value
  })
 }

 async function onFormSubmit(e) {
  e.preventDefault()
  try {
   await axios.post(`http://localhost:3333/students`, student)
   setStatus(true);
  } catch (error) {
   console.log("Something is Wrong");
  }
 }
 if (status) {
  return <Home />
 }
 

 const onFormLayoutChange = ({ size }) => {
   setComponentSize(size);
 };
 // eslint-disable-next-line react-hooks/rules-of-hooks
 const [componentSize, setComponentSize] = useState("default");
 return (
  
   <Card title="Card title" bordered={false} style={{ width: 800 }}>
   <Form
   labelCol={{
     span: 4,
   }}
   wrapperCol={{
     span: 14,
   }}
   layout="horizontal"
   initialValues={{
     size: componentSize,
   }}
   onValuesChange={onFormLayoutChange}
   size={componentSize}
 >
   <Form.Item label="Form Size" name="size">
     <Radio.Group>
       <Radio.Button value="small">Small</Radio.Button>
       <Radio.Button value="default">Default</Radio.Button>
       <Radio.Button value="large">Large</Radio.Button>
     </Radio.Group>
   </Form.Item>
   <Form.Item label="Input">
     <Input />
   </Form.Item>
   <Form.Item label="Select">
     <Select>
       <Select.Option value="demo">Demo</Select.Option>
     </Select>
   </Form.Item>
   <Form.Item label="TreeSelect">
     <TreeSelect
       treeData={[
         {
           title: 'Light',
           value: 'light',
           children: [
             {
               title: 'Bamboo',
               value: 'bamboo',
             },
           ],
         },
       ]}
     />
   </Form.Item>
   <Form.Item label="Cascader">
     <Cascader
       options={[
         {
           value: 'zhejiang',
           label: 'Zhejiang',
           children: [
             {
               value: 'hangzhou',
               label: 'Hangzhou',
             },
           ],
         },
       ]}
     />
   </Form.Item>
   <Form.Item label="DatePicker">
     <DatePicker />
   </Form.Item>
   <Form.Item label="InputNumber">
     <InputNumber />
   </Form.Item>
   <Form.Item label="Switch" valuePropName="checked">
     <Switch />
   </Form.Item>
   <Form.Item label="Button">
     <Button>Button</Button>
   </Form.Item>
 </Form>
   </Card>
)
}

export default Home;