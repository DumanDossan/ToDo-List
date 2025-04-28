import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getPost } from "../../features/post.slice"; 
import { Col, Row, Space, Typography } from "antd"; 
import CustomCard from "../../components/UI/CustomCard";

const { Title } = Typography; 

const Post = () => { 
    const { inProgress, completed, loading, error } = useAppSelector(state => state.post);
    const dispatch = useAppDispatch(); 
    useEffect(() => { 
        dispatch(getPost()) 
    },[dispatch]); 

    if (loading) {
        return <div>Loading...</div>;
    }
    
    if (error) {
        return <div>Error: {error}</div>;
    }

    return ( 
        <Row 
            gutter={16} 
            style={{ maxWidth: '1000px', margin: '0 auto', width: '100%' }} 
        > 
            <Col span={12}> 
                <Title level={1}>In progress</Title> 
                <Space direction="vertical" size="middle" style={{ display: 'flex' }} className="container"> 
                    {inProgress?.map((item) => ( 
                        <CustomCard key={item.id} title={item.todo} /> 
                    ))} 
                </Space> 
            </Col> 
            <Col span={12}>
                <Title level={1}>Completed</Title>
                <Space direction="vertical" size="middle" style={{ display: 'flex' }} className="container"> 
                    {completed?.map((item) => ( 
                        <CustomCard key={item.id} title={item.todo} /> 
                    ))} 
                </Space> 
            </Col> 
        </Row> 
    );
};

export default Post;