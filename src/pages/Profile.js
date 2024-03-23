import { React, useState, useContext } from "react";
import Layout from "../components/Layout";
import { Flex, Image, Input, Button, } from "@chakra-ui/react";
import defaultProfileImg from '../assets/profile_img.png';
import UserContext from '../contexts/userContext';

const Profile = () => {

    // access user context
    const { user } = useContext(UserContext);

    // handle inputs
    const [ selectedImg, setSelectedImg ] = useState(null);
    const [ inputFullName, setInputFullName ] = useState('');
    const [ inputClassName, setInputClassName ] = useState('');

    const onChangeFullName = (e) => {
        setInputFullName(e.target.value);
    };
    const onChangeClassName = (e) => {
        setInputClassName(e.target.value);
    };

    const handleImgChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            setSelectedImg(reader.result);
          };
          reader.readAsDataURL(file);
        }
      };


    // handle save changes
    const handleSaveChange = () => {

    };

    return (
        <Layout>
            <Flex
            direction='column'
            w='100vw'
            p={4}
            gap={4}
            >
                <Flex
                direction='column'
                borderWidth={1}
                borderColor='gray.200'
                borderRadius={10}
                alignItems='center'
                >
                    { selectedImg 
                    ? <Image alt='Profile Image' src={selectedImg} w='200px' h='200px' objectFit='contain' /> 
                    : <Image alt='Profile Image' src={defaultProfileImg} w='200px' h='200px' />}
                    <input
                        type="file"
                        accept=".jpg, .jpeg, .png"
                        style={{ display: 'none' }}
                        onChange={handleImgChange}
                        id="fileInput"
                    />
                    <Button 
                    variant='ghost' 
                    onClick={() => document.getElementById('fileInput').click()}
                    size='sm'
                    fontWeight='light'
                    >
                        Change Profile Image
                    </Button>
                </Flex>
                <Input 
                placeholder='Full Name'
                value={inputFullName}
                onChange={onChangeFullName}
                />
                <Input 
                placeholder='Class Name' 
                value={inputClassName}
                onChange={onChangeClassName}
                />
                <Button bgColor='black' textColor='white' onClick={handleSaveChange}>
                    Save Changes
                </Button>
            </Flex>
        </Layout>
    );
};

export default Profile;