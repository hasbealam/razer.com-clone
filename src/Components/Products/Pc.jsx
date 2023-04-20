import { Box,Grid,GridItem,Image,Text,ListItem,UnorderedList,Link,Button, Select, Flex,Center,Heading} from "@chakra-ui/react"

function Pc() {
const data = [
    {
        id:1,
        img:"https://assets3.razerzone.com/i2PBf4q2oVCxNc8u1jSUBs70CWc=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh05%2Fh90%2F9453354024990%2Fblade-14-p8-mercury-fhd-qhd-2-500x500.png",
        title:"Razer Blade 14 - Full HD 144Hz - GeForce RTX 3060 - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :14,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:54999,
        cprice:59999
    },
    {
        id:2,
        img:"https://assets3.razerzone.com/i2PBf4q2oVCxNc8u1jSUBs70CWc=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh05%2Fh90%2F9453354024990%2Fblade-14-p8-mercury-fhd-qhd-2-500x500.png",
        title:"Razer Blade 14 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :14,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:55999,
        cprice:59999
    },
    {
        id:3,
        img:"https://assets3.razerzone.com/zStdp4z65eHbNaNUG-wHlRp9lzc=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhbd%2Fh06%2F9286402375710%2Fblade14-p8-fhd-500x500.png",
        title:"Razer Blade 15 - QHD 165Hz - GeForce RTX 3070 Ti - Quartz",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :15,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:51999,
        cprice:57999
    },
    {
        id:4,
        img:"https://assets3.razerzone.com/zStdp4z65eHbNaNUG-wHlRp9lzc=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhbd%2Fh06%2F9286402375710%2Fblade14-p8-fhd-500x500.png",
        title:"Razer Blade 15 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :15,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:52999,
        cprice:57999
    },
    {
        id:5,
        img:"https://assets3.razerzone.com/zStdp4z65eHbNaNUG-wHlRp9lzc=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhbd%2Fh06%2F9286402375710%2Fblade14-p8-fhd-500x500.png",
        title:"Razer Blade 15 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :15,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:52999,
        cprice:57999
    },
    {
        id:6,
        img:"https://assets3.razerzone.com/yL3eY4r4-glSWYBqawDX37ijWWU=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh5c%2Fh90%2F9453354057758%2Fblade-14-p8-quartz-fhd-qhd-2-500x500.png",
        title:"Razer Blade 16 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :16,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:57999,
        cprice:64999
    },
    {
        id:7,
        img:"https://assets3.razerzone.com/yL3eY4r4-glSWYBqawDX37ijWWU=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh5c%2Fh90%2F9453354057758%2Fblade-14-p8-quartz-fhd-qhd-2-500x500.png",
        title:"Razer Blade 16 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :16,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:57999,
        cprice:64999
    },
    {
        id:8,
        img:"https://assets3.razerzone.com/yL3eY4r4-glSWYBqawDX37ijWWU=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh5c%2Fh90%2F9453354057758%2Fblade-14-p8-quartz-fhd-qhd-2-500x500.png",
        title:"Razer Blade 16 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :16,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:58999,
        cprice:64999
    },
    {
        id:9,
        img:"https://assets3.razerzone.com/yL3eY4r4-glSWYBqawDX37ijWWU=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh5c%2Fh90%2F9453354057758%2Fblade-14-p8-quartz-fhd-qhd-2-500x500.png",
        title:"Razer Blade 15 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :15,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:59999,
        cprice:65999
    },
    {
        id:10,
        img:"https://assets3.razerzone.com/i2PBf4q2oVCxNc8u1jSUBs70CWc=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh05%2Fh90%2F9453354024990%2Fblade-14-p8-mercury-fhd-qhd-2-500x500.png",
        title:"Razer Blade 15 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :15,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:54999,
        cprice:56999
    },
    {
        id:11,
        img:"https://assets3.razerzone.com/i2PBf4q2oVCxNc8u1jSUBs70CWc=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh05%2Fh90%2F9453354024990%2Fblade-14-p8-mercury-fhd-qhd-2-500x500.png",
        title:"Razer Blade 13 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :13,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:55999,
        cprice:58999
    },
    {
        id:12,
        img:"https://assets3.razerzone.com/i2PBf4q2oVCxNc8u1jSUBs70CWc=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh05%2Fh90%2F9453354024990%2Fblade-14-p8-mercury-fhd-qhd-2-500x500.png",
        title:"Razer Blade 13 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :13,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:54999,
        cprice:58999
    },
    {
        id:13,
        img:"https://assets3.razerzone.com/i2PBf4q2oVCxNc8u1jSUBs70CWc=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh05%2Fh90%2F9453354024990%2Fblade-14-p8-mercury-fhd-qhd-2-500x500.png",
        title:"Razer Blade 13 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :13,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:54999,
        cprice:58999
    },
    {
        id:14,
        img:"https://assets3.razerzone.com/i2PBf4q2oVCxNc8u1jSUBs70CWc=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh05%2Fh90%2F9453354024990%2Fblade-14-p8-mercury-fhd-qhd-2-500x500.png",
        title:"Razer Blade 17 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :17,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:57999,
        cprice:60999
    },
    {
        id:15,
        img:"https://assets3.razerzone.com/i2PBf4q2oVCxNc8u1jSUBs70CWc=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh05%2Fh90%2F9453354024990%2Fblade-14-p8-mercury-fhd-qhd-2-500x500.png",
        title:"Razer Blade 17 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :17,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:56999,
        cprice:60999
    },
    {
        id:16,
        img:"https://assets3.razerzone.com/i2PBf4q2oVCxNc8u1jSUBs70CWc=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh05%2Fh90%2F9453354024990%2Fblade-14-p8-mercury-fhd-qhd-2-500x500.png",
        title:"Razer Blade 17 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :17,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:56999,
        cprice:60999
    },
    {
        id:17,
        img:"https://assets3.razerzone.com/i2PBf4q2oVCxNc8u1jSUBs70CWc=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh05%2Fh90%2F9453354024990%2Fblade-14-p8-mercury-fhd-qhd-2-500x500.png",
        title:"Razer Blade 16 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :16,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:55999,
        cprice:59999
    },
    {
        id:18,
        img:"https://assets3.razerzone.com/i2PBf4q2oVCxNc8u1jSUBs70CWc=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh05%2Fh90%2F9453354024990%2Fblade-14-p8-mercury-fhd-qhd-2-500x500.png",
        title:"Razer Blade 15 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :15,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:52999,
        cprice:58999
    },
    {
        id:19,
        img:"https://assets3.razerzone.com/i2PBf4q2oVCxNc8u1jSUBs70CWc=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh05%2Fh90%2F9453354024990%2Fblade-14-p8-mercury-fhd-qhd-2-500x500.png",
        title:"Razer Blade 13 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :13,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:58999,
        cprice:69999
    },
    {
        id:20,
        img:"https://assets3.razerzone.com/i2PBf4q2oVCxNc8u1jSUBs70CWc=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh05%2Fh90%2F9453354024990%2Fblade-14-p8-mercury-fhd-qhd-2-500x500.png",
        title:"Razer Blade 14 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :14,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:53999,
        cprice:59999
    },
    {
        id:21,
        img:"https://assets3.razerzone.com/i2PBf4q2oVCxNc8u1jSUBs70CWc=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh05%2Fh90%2F9453354024990%2Fblade-14-p8-mercury-fhd-qhd-2-500x500.png",
        title:"Razer Blade 14 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :14,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:50999,
        cprice:55999
    },
    {
        id:22,
        img:"https://assets3.razerzone.com/i2PBf4q2oVCxNc8u1jSUBs70CWc=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh05%2Fh90%2F9453354024990%2Fblade-14-p8-mercury-fhd-qhd-2-500x500.png",
        title:"Razer Blade 14 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :14,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:51999,
        cprice:56999
    },
    {
        id:23,
        img:"https://assets3.razerzone.com/i2PBf4q2oVCxNc8u1jSUBs70CWc=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh05%2Fh90%2F9453354024990%2Fblade-14-p8-mercury-fhd-qhd-2-500x500.png",
        title:"Razer Blade 14 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :14,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:55999,
        cprice:59999
    },
    {
        id:24,
        img:"https://assets3.razerzone.com/i2PBf4q2oVCxNc8u1jSUBs70CWc=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh05%2Fh90%2F9453354024990%2Fblade-14-p8-mercury-fhd-qhd-2-500x500.png",
        title:"Razer Blade 17 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :17,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:57999,
        cprice:65999
    },
    {
        id:25,
        img:"https://assets3.razerzone.com/i2PBf4q2oVCxNc8u1jSUBs70CWc=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh05%2Fh90%2F9453354024990%2Fblade-14-p8-mercury-fhd-qhd-2-500x500.png",
        title:"Razer Blade 15 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :15,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:50999,
        cprice:55999
    },
    {
        id:26,
        img:"https://assets3.razerzone.com/i2PBf4q2oVCxNc8u1jSUBs70CWc=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh05%2Fh90%2F9453354024990%2Fblade-14-p8-mercury-fhd-qhd-2-500x500.png",
        title:"Razer Blade 14 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :14,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:55999,
        cprice:59999
    },
    {
        id:27,
        img:"https://assets3.razerzone.com/i2PBf4q2oVCxNc8u1jSUBs70CWc=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh05%2Fh90%2F9453354024990%2Fblade-14-p8-mercury-fhd-qhd-2-500x500.png",
        title:"Razer Blade 16 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :16,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:55999,
        cprice:60999
    },
    {
        id:28,
        img:"https://assets3.razerzone.com/i2PBf4q2oVCxNc8u1jSUBs70CWc=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh05%2Fh90%2F9453354024990%2Fblade-14-p8-mercury-fhd-qhd-2-500x500.png",
        title:"Razer Blade 16 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :16,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:54999,
        cprice:59999
    },
    {
        id:29,
        img:"https://assets3.razerzone.com/i2PBf4q2oVCxNc8u1jSUBs70CWc=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh05%2Fh90%2F9453354024990%2Fblade-14-p8-mercury-fhd-qhd-2-500x500.png",
        title:"Razer Blade 13 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :13,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:56999,
        cprice:59999
    },
    {
        id:30,
        img:"https://assets3.razerzone.com/i2PBf4q2oVCxNc8u1jSUBs70CWc=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh05%2Fh90%2F9453354024990%2Fblade-14-p8-mercury-fhd-qhd-2-500x500.png",
        title:"Razer Blade 15 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :15,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:52999,
        cprice:59999
    }

]

    return (
        <Box bg="#555555">
            <Center color="white" fontSize={15} bg="#999999" h={10} >Unleash a new age of technology with an arsenal of cutting-edge innovations that will keep you ahead of the game. Shop Now ></Center>
            <Box bg="black" textAlign="center" p={10}>
                <Heading fontSize={20} color="white" mt={10}>PC</Heading>
                <Flex justifyContent="space-evenly" w="60%" m="auto" mt={5}>
                    <Heading fontSize={12} color="#44d62c">LAPTOPS</Heading>
                    <Heading fontSize={12} color="#999999">MONITORS</Heading>
                    <Heading fontSize={12} color="#999999">DESKTOPS & CASES</Heading>
                    <Heading fontSize={12} color="#999999">EGPUS</Heading>
                    <Heading fontSize={12} color="#999999">ACCESSORIES</Heading>
                    <Heading fontSize={12} color="#999999">ACCESSORIES</Heading>
                    <Heading fontSize={12} color="#999999">COOLING</Heading>
                </Flex>
            </Box>
            
            <Flex  justifyContent="space-evenly" mt="20px">
            <Box w="20%" position="fixed" mr="80%" h="200px" textAlign="center">
                <Heading fontSize={25} color="white">Screen Sizes</Heading>
                <Select placeholder='Filter By Screen Size'color="white" w="70%" m="auto" mt={10}>
                    <option value='13'style={{color:"black"}}>13 inch</option>
                    <option value='14'style={{color:"black"}}>14 inch</option>
                    <option value='15'style={{color:"black"}}>15 inch</option>
                    <option value='16'style={{color:"black"}}>16 inch</option>
                    <option value='17'style={{color:"black"}}>17 inch</option>
                </Select>
                <Heading fontSize={25} color="white" mt={10}>Price</Heading>
                <Select placeholder='Filter By Price'color="white" w="70%"m="auto" mt={10} >
                    <option value='asc'style={{color:"black"}}>Low To High</option>
                    <option value='dsc'style={{color:"black"}}>High To Low</option>
                </Select>

                <Heading fontSize={25} color="white" mt={10}>Colors</Heading>
                <Select placeholder='Filter By Color'color="white" w="70%" m="auto" mt={10} >
                    <option value='asc'style={{color:"black"}}>Gray</option>
                    <option value='dsc'style={{color:"black"}}>Black Murcury</option>
                    <option value='asc'style={{color:"black"}}>WhiteSmoke</option>
                    <option value='dsc'style={{color:"black"}}>Black</option>
                    <option value='asc'style={{color:"black"}}>Blue</option>
                    <option value='dsc'style={{color:"black"}}>Green</option>
                </Select>

            </Box>
            <Grid w="70%"gridTemplateColumns="repeat(3,1fr)" gap="20px" ml="10%">
                {
                    data.map((e)=>{
                        return <GridItem alignItems="center" bg = "#252525" color="white">
                            <Image src={e.img} w="70%" m="auto"></Image>
                            <Box bg="black" p={5}>
                            <Text>{e.title}</Text>
                            <UnorderedList color="#999999">
                                <ListItem>{e.specifications.processor}</ListItem>
                                <ListItem>{e.specifications.screen}&nbsp;inch Full HD</ListItem>
                                <ListItem>{e.specifications.force}</ListItem>
                                <ListItem>{e.specifications.windows}</ListItem>
                                <ListItem>{e.specifications.force}</ListItem>
                            </UnorderedList>
                            <Link color="#44d62c">View Details ></Link><br></br>
                            <Text>{e.price} RS/-</Text>
                            <Text textDecor="line-through" color="#999999">{e.cprice} RS/-</Text>
                            <Button bg="#44d62c" mt="20px">Add To Cart</Button>
                            </Box>

                        </GridItem>
                    })
                }
            </Grid>

        </Flex>
        </Box>
    )
}

export default Pc