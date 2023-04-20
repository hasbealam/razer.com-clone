import React from 'react';
import { Navbar } from './Navbar';
import { Box, Center, Heading } from '@chakra-ui/react';

function Signup(props) {
    return (
        <div style={{backgroundImage:"url(https://razerid-assets.razerzone.com/static/media/serpents-eye-v2-20220906.dae1e41f.jpg)",
        backgroundPosition: "center top -150px" // move image 50px up from the center
        }}>
            <Center>
            <Box mt="20px" w="412px" h="1390px" bg="#000000">
                <Heading size="lg">
                    CREATE RAZER ID ACCOUNT
                </Heading>
            </Box>
            </Center>
        </div>
    );
}

export default Signup;