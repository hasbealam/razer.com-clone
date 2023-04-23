import { Box,Grid,GridItem,Image,Text,ListItem,UnorderedList,Link,Button, Select, Flex,Center,Heading} from "@chakra-ui/react"
import {ChevronRightIcon} from "@chakra-ui/icons"
function Pc() {
const data = [
    {
        id:1,
        img:{img1:"https://assets3.razerzone.com/uVlIiPdbHQF-baAX2aghIVukYVA=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh00%2Fh3f%2F9481464348702%2F230222-blade15-ch9-1500x1000-1.jpg",
        img2:"https://assets3.razerzone.com/ay1dL2V-aCXmjk2p9nArviCUMKw=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh6a%2Fh3f%2F9481464381470%2F230222-blade15-ch9-1500x1000-2.jpg",
        img3:"https://assets3.razerzone.com/A1v1qrutzap6dYba9B0BCoeagEE=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fha8%2Fh3e%2F9481464315934%2F230222-blade15-ch9-1500x1000-3.jpg",
        img4:"https://assets3.razerzone.com/S8pG_WTNYcKMTj5UDaWvy-TCIWk=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh11%2Fh42%2F9481464414238%2F230222-blade15-ch9-1500x1000-4.jpg",
        img5:"https://assets3.razerzone.com/_KY2w8pfZYKbx3I3zNzYFVUuR_Y=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh02%2Fh3c%2F9481464283166%2F230222-blade15-ch9-1500x1000-6.jpg"
        },
        title:"Razer Blade 14 - Full HD 144Hz - GeForce RTX 3060 - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :14,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:54999,
        cprice:59999,
        color:"Green"
    },
    {
        id:2,
        img:{img1:"https://assets3.razerzone.com/Y9fv8qRtbhHgeb5h7pV3EMKBl5o=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh5c%2Fhd3%2F9286405095454%2F210104-blade-15-ch8-fhd-1500x1000-1.jpg",
        img2:"https://assets3.razerzone.com/tJNNh3NyKKk_w5_lgBJvVWBl-Zc=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh11%2Fhda%2F9286404735006%2F210104-blade-15-ch8-fhd-1500x1000-2.jpg",
        img3:"https://assets3.razerzone.com/a8yIzF2KCqYUj6lWX_CChLroGKU=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh38%2Fhe1%2F9286404964382%2F210104-blade-15-ch8-fhd-1500x1000-3.jpg",
        img4:"https://assets3.razerzone.com/VlndQT5gcH2aQsNxsWeyZtAbiXU=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh8f%2Fhe1%2F9286404997150%2F210104-blade-15-ch8-fhd-1500x1000-5.jpg",
        img5:"https://assets3.razerzone.com/vy3EuAsw67aJ675RMs74OS90cHs=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh22%2Fhdd%2F9286404800542%2F210104-blade-15-ch8-fhd-1500x1000-6.jpg"
        },
        title:"Razer Blade 14 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :14,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:55999,
        cprice:59999,
        color:"Black"
    },
    {
        id:3,
        img:{img1:"https://assets3.razerzone.com/myXdrb7BXOdaNvDuGpM2WbIXRjM=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhe5%2Fh8e%2F9135864676382%2Frazer-blade-15-advanced-gallery-20210112-01.jpg",
        img2:"https://assets3.razerzone.com/Pl86QzBoGEyfU50jdp4NhgVuuYM=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh8d%2Fh91%2F9135864709150%2Frazer-blade-15-advanced-gallery-20210112-02.jpg",
        img3:"https://assets3.razerzone.com/w9cKzgaTNKjO3y3tbpJg6lJuEv8=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh5f%2Fh95%2F9135864840222%2Frazer-blade-15-advanced-gallery-20210112-03.jpg",
        img4:"https://assets3.razerzone.com/3hOpYCyDtT84TvBIhqf1oRb39DM=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh4d%2Fh92%2F9135864774686%2Frazer-blade-15-advanced-gallery-20210112-04.jpg",
        img5:"https://assets3.razerzone.com/HBRzj8Ygs6lXukJoLQUZJc9atzI=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhf4%2Fh94%2F9135864807454%2Frazer-blade-15-advanced-gallery-20210112-06.jpg"
        },
        title:"Razer Blade 15 - QHD 165Hz - GeForce RTX 3070 Ti - Quartz",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :15,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:51999,
        cprice:57999,
        color:"Black"
    },
    {
        id:4,
        img:{img1:"https://assets3.razerzone.com/uVlIiPdbHQF-baAX2aghIVukYVA=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh00%2Fh3f%2F9481464348702%2F230222-blade15-ch9-1500x1000-1.jpg",
        img2:"https://assets3.razerzone.com/ay1dL2V-aCXmjk2p9nArviCUMKw=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh6a%2Fh3f%2F9481464381470%2F230222-blade15-ch9-1500x1000-2.jpg",
        img3:"https://assets3.razerzone.com/A1v1qrutzap6dYba9B0BCoeagEE=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fha8%2Fh3e%2F9481464315934%2F230222-blade15-ch9-1500x1000-3.jpg",
        img4:"https://assets3.razerzone.com/S8pG_WTNYcKMTj5UDaWvy-TCIWk=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh11%2Fh42%2F9481464414238%2F230222-blade15-ch9-1500x1000-4.jpg",
        img5:"https://assets3.razerzone.com/_KY2w8pfZYKbx3I3zNzYFVUuR_Y=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh02%2Fh3c%2F9481464283166%2F230222-blade15-ch9-1500x1000-6.jpg"
        },
        title:"Razer Blade 15 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :15,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:52999,
        cprice:57999,
        color:"Black"
    },
    {
        id:5,
        img:{img1:"https://assets3.razerzone.com/IzqBioL_3Bfv68S_BxofXEzeQz0=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhb5%2Fh95%2F9135864872990%2Frazer-blade-15-advanced-gallery-20210112-05.jpg",
        img2:"https://assets3.razerzone.com/ay1dL2V-aCXmjk2p9nArviCUMKw=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh6a%2Fh3f%2F9481464381470%2F230222-blade15-ch9-1500x1000-2.jpg",
        img3:"https://assets3.razerzone.com/A1v1qrutzap6dYba9B0BCoeagEE=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fha8%2Fh3e%2F9481464315934%2F230222-blade15-ch9-1500x1000-3.jpg",
        img4:"https://assets3.razerzone.com/S8pG_WTNYcKMTj5UDaWvy-TCIWk=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh11%2Fh42%2F9481464414238%2F230222-blade15-ch9-1500x1000-4.jpg",
        img5:"https://assets3.razerzone.com/_KY2w8pfZYKbx3I3zNzYFVUuR_Y=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh02%2Fh3c%2F9481464283166%2F230222-blade15-ch9-1500x1000-6.jpg"
        },
        title:"Razer Blade 15 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :15,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:52999,
        cprice:57999,
        color: "Green"
    },
    {
        id:6,
        img:{img1:"https://assets3.razerzone.com/Pl86QzBoGEyfU50jdp4NhgVuuYM=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh8d%2Fh91%2F9135864709150%2Frazer-blade-15-advanced-gallery-20210112-02.jpg",
        img2:"https://assets3.razerzone.com/ay1dL2V-aCXmjk2p9nArviCUMKw=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh6a%2Fh3f%2F9481464381470%2F230222-blade15-ch9-1500x1000-2.jpg",
        img3:"https://assets3.razerzone.com/A1v1qrutzap6dYba9B0BCoeagEE=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fha8%2Fh3e%2F9481464315934%2F230222-blade15-ch9-1500x1000-3.jpg",
        img4:"https://assets3.razerzone.com/S8pG_WTNYcKMTj5UDaWvy-TCIWk=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh11%2Fh42%2F9481464414238%2F230222-blade15-ch9-1500x1000-4.jpg",
        img5:"https://assets3.razerzone.com/_KY2w8pfZYKbx3I3zNzYFVUuR_Y=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh02%2Fh3c%2F9481464283166%2F230222-blade15-ch9-1500x1000-6.jpg"
        },
        title:"Razer Blade 16 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :16,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:57999,
        cprice:64999,
        color:"Black Murcury"
    },
    {
        id:7,
        img:{img1:"https://assets3.razerzone.com/uVlIiPdbHQF-baAX2aghIVukYVA=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh00%2Fh3f%2F9481464348702%2F230222-blade15-ch9-1500x1000-1.jpg",
        img2:"https://assets3.razerzone.com/ay1dL2V-aCXmjk2p9nArviCUMKw=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh6a%2Fh3f%2F9481464381470%2F230222-blade15-ch9-1500x1000-2.jpg",
        img3:"https://assets3.razerzone.com/A1v1qrutzap6dYba9B0BCoeagEE=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fha8%2Fh3e%2F9481464315934%2F230222-blade15-ch9-1500x1000-3.jpg",
        img4:"https://assets3.razerzone.com/S8pG_WTNYcKMTj5UDaWvy-TCIWk=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh11%2Fh42%2F9481464414238%2F230222-blade15-ch9-1500x1000-4.jpg",
        img5:"https://assets3.razerzone.com/_KY2w8pfZYKbx3I3zNzYFVUuR_Y=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh02%2Fh3c%2F9481464283166%2F230222-blade15-ch9-1500x1000-6.jpg"
        },
        title:"Razer Blade 16 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :16,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:57999,
        cprice:64999,
        color:"Black Murcury"
    },
    {
        id:8,
        img:{img1:"https://assets3.razerzone.com/myXdrb7BXOdaNvDuGpM2WbIXRjM=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhe5%2Fh8e%2F9135864676382%2Frazer-blade-15-advanced-gallery-20210112-01.jpg",
        img2:"https://assets3.razerzone.com/ay1dL2V-aCXmjk2p9nArviCUMKw=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh6a%2Fh3f%2F9481464381470%2F230222-blade15-ch9-1500x1000-2.jpg",
        img3:"https://assets3.razerzone.com/A1v1qrutzap6dYba9B0BCoeagEE=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fha8%2Fh3e%2F9481464315934%2F230222-blade15-ch9-1500x1000-3.jpg",
        img4:"https://assets3.razerzone.com/S8pG_WTNYcKMTj5UDaWvy-TCIWk=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh11%2Fh42%2F9481464414238%2F230222-blade15-ch9-1500x1000-4.jpg",
        img5:"https://assets3.razerzone.com/_KY2w8pfZYKbx3I3zNzYFVUuR_Y=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh02%2Fh3c%2F9481464283166%2F230222-blade15-ch9-1500x1000-6.jpg"
        },
        title:"Razer Blade 16 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :16,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:58999,
        cprice:64999,
        color:"Black Murcury"
    },
    {
        id:9,
        img:{img1:"https://assets3.razerzone.com/uVlIiPdbHQF-baAX2aghIVukYVA=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh00%2Fh3f%2F9481464348702%2F230222-blade15-ch9-1500x1000-1.jpg",
        img2:"https://assets3.razerzone.com/ay1dL2V-aCXmjk2p9nArviCUMKw=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh6a%2Fh3f%2F9481464381470%2F230222-blade15-ch9-1500x1000-2.jpg",
        img3:"https://assets3.razerzone.com/A1v1qrutzap6dYba9B0BCoeagEE=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fha8%2Fh3e%2F9481464315934%2F230222-blade15-ch9-1500x1000-3.jpg",
        img4:"https://assets3.razerzone.com/S8pG_WTNYcKMTj5UDaWvy-TCIWk=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh11%2Fh42%2F9481464414238%2F230222-blade15-ch9-1500x1000-4.jpg",
        img5:"https://assets3.razerzone.com/_KY2w8pfZYKbx3I3zNzYFVUuR_Y=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh02%2Fh3c%2F9481464283166%2F230222-blade15-ch9-1500x1000-6.jpg"
        },
        title:"Razer Blade 15 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :15,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:59999,
        cprice:65999,
        color:"Black Murcury"
    },
    {
        id:10,
        img:{img1:"https://assets3.razerzone.com/uVlIiPdbHQF-baAX2aghIVukYVA=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh00%2Fh3f%2F9481464348702%2F230222-blade15-ch9-1500x1000-1.jpg",
        img2:"https://assets3.razerzone.com/ay1dL2V-aCXmjk2p9nArviCUMKw=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh6a%2Fh3f%2F9481464381470%2F230222-blade15-ch9-1500x1000-2.jpg",
        img3:"https://assets3.razerzone.com/A1v1qrutzap6dYba9B0BCoeagEE=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fha8%2Fh3e%2F9481464315934%2F230222-blade15-ch9-1500x1000-3.jpg",
        img4:"https://assets3.razerzone.com/S8pG_WTNYcKMTj5UDaWvy-TCIWk=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh11%2Fh42%2F9481464414238%2F230222-blade15-ch9-1500x1000-4.jpg",
        img5:"https://assets3.razerzone.com/_KY2w8pfZYKbx3I3zNzYFVUuR_Y=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh02%2Fh3c%2F9481464283166%2F230222-blade15-ch9-1500x1000-6.jpg"
        },
        title:"Razer Blade 15 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :15,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:54999,
        cprice:56999,
        color:"Black Murcury"
    },
    {
        id:11,
        img:{img1:"https://assets3.razerzone.com/uVlIiPdbHQF-baAX2aghIVukYVA=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh00%2Fh3f%2F9481464348702%2F230222-blade15-ch9-1500x1000-1.jpg",
        img2:"https://assets3.razerzone.com/ay1dL2V-aCXmjk2p9nArviCUMKw=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh6a%2Fh3f%2F9481464381470%2F230222-blade15-ch9-1500x1000-2.jpg",
        img3:"https://assets3.razerzone.com/A1v1qrutzap6dYba9B0BCoeagEE=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fha8%2Fh3e%2F9481464315934%2F230222-blade15-ch9-1500x1000-3.jpg",
        img4:"https://assets3.razerzone.com/S8pG_WTNYcKMTj5UDaWvy-TCIWk=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh11%2Fh42%2F9481464414238%2F230222-blade15-ch9-1500x1000-4.jpg",
        img5:"https://assets3.razerzone.com/_KY2w8pfZYKbx3I3zNzYFVUuR_Y=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh02%2Fh3c%2F9481464283166%2F230222-blade15-ch9-1500x1000-6.jpg"
        },
        title:"Razer Blade 13 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :13,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:55999,
        cprice:58999,
        color: "Green"
    },
    {
        id:12,
        img:{img1:"https://assets3.razerzone.com/uVlIiPdbHQF-baAX2aghIVukYVA=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh00%2Fh3f%2F9481464348702%2F230222-blade15-ch9-1500x1000-1.jpg",
        img2:"https://assets3.razerzone.com/ay1dL2V-aCXmjk2p9nArviCUMKw=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh6a%2Fh3f%2F9481464381470%2F230222-blade15-ch9-1500x1000-2.jpg",
        img3:"https://assets3.razerzone.com/A1v1qrutzap6dYba9B0BCoeagEE=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fha8%2Fh3e%2F9481464315934%2F230222-blade15-ch9-1500x1000-3.jpg",
        img4:"https://assets3.razerzone.com/S8pG_WTNYcKMTj5UDaWvy-TCIWk=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh11%2Fh42%2F9481464414238%2F230222-blade15-ch9-1500x1000-4.jpg",
        img5:"https://assets3.razerzone.com/_KY2w8pfZYKbx3I3zNzYFVUuR_Y=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh02%2Fh3c%2F9481464283166%2F230222-blade15-ch9-1500x1000-6.jpg"
        },
        title:"Razer Blade 13 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :13,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:54999,
        cprice:58999,
        color: "Green"
    },
    {
        id:13,
        img:{img1:"https://assets3.razerzone.com/uVlIiPdbHQF-baAX2aghIVukYVA=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh00%2Fh3f%2F9481464348702%2F230222-blade15-ch9-1500x1000-1.jpg",
        img2:"https://assets3.razerzone.com/ay1dL2V-aCXmjk2p9nArviCUMKw=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh6a%2Fh3f%2F9481464381470%2F230222-blade15-ch9-1500x1000-2.jpg",
        img3:"https://assets3.razerzone.com/A1v1qrutzap6dYba9B0BCoeagEE=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fha8%2Fh3e%2F9481464315934%2F230222-blade15-ch9-1500x1000-3.jpg",
        img4:"https://assets3.razerzone.com/S8pG_WTNYcKMTj5UDaWvy-TCIWk=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh11%2Fh42%2F9481464414238%2F230222-blade15-ch9-1500x1000-4.jpg",
        img5:"https://assets3.razerzone.com/_KY2w8pfZYKbx3I3zNzYFVUuR_Y=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh02%2Fh3c%2F9481464283166%2F230222-blade15-ch9-1500x1000-6.jpg"
        },
        title:"Razer Blade 13 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :13,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:54999,
        cprice:58999,
        color: "Blue"
    },
    {
        id:14,
        img:{img1:"https://assets3.razerzone.com/uVlIiPdbHQF-baAX2aghIVukYVA=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh00%2Fh3f%2F9481464348702%2F230222-blade15-ch9-1500x1000-1.jpg",
        img2:"https://assets3.razerzone.com/ay1dL2V-aCXmjk2p9nArviCUMKw=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh6a%2Fh3f%2F9481464381470%2F230222-blade15-ch9-1500x1000-2.jpg",
        img3:"https://assets3.razerzone.com/A1v1qrutzap6dYba9B0BCoeagEE=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fha8%2Fh3e%2F9481464315934%2F230222-blade15-ch9-1500x1000-3.jpg",
        img4:"https://assets3.razerzone.com/S8pG_WTNYcKMTj5UDaWvy-TCIWk=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh11%2Fh42%2F9481464414238%2F230222-blade15-ch9-1500x1000-4.jpg",
        img5:"https://assets3.razerzone.com/_KY2w8pfZYKbx3I3zNzYFVUuR_Y=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh02%2Fh3c%2F9481464283166%2F230222-blade15-ch9-1500x1000-6.jpg"
        },
        title:"Razer Blade 17 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :17,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:57999,
        cprice:60999,
        color: "Blue"
    },
    {
        id:15,
        img:{img1:"https://assets3.razerzone.com/uVlIiPdbHQF-baAX2aghIVukYVA=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh00%2Fh3f%2F9481464348702%2F230222-blade15-ch9-1500x1000-1.jpg",
        img2:"https://assets3.razerzone.com/ay1dL2V-aCXmjk2p9nArviCUMKw=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh6a%2Fh3f%2F9481464381470%2F230222-blade15-ch9-1500x1000-2.jpg",
        img3:"https://assets3.razerzone.com/A1v1qrutzap6dYba9B0BCoeagEE=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fha8%2Fh3e%2F9481464315934%2F230222-blade15-ch9-1500x1000-3.jpg",
        img4:"https://assets3.razerzone.com/S8pG_WTNYcKMTj5UDaWvy-TCIWk=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh11%2Fh42%2F9481464414238%2F230222-blade15-ch9-1500x1000-4.jpg",
        img5:"https://assets3.razerzone.com/_KY2w8pfZYKbx3I3zNzYFVUuR_Y=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh02%2Fh3c%2F9481464283166%2F230222-blade15-ch9-1500x1000-6.jpg"
        },
        title:"Razer Blade 17 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :17,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:56999,
        cprice:60999,
        color: "Blue"
    },
    {
        id:16,
        img:{img1:"https://assets3.razerzone.com/uVlIiPdbHQF-baAX2aghIVukYVA=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh00%2Fh3f%2F9481464348702%2F230222-blade15-ch9-1500x1000-1.jpg",
        img2:"https://assets3.razerzone.com/ay1dL2V-aCXmjk2p9nArviCUMKw=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh6a%2Fh3f%2F9481464381470%2F230222-blade15-ch9-1500x1000-2.jpg",
        img3:"https://assets3.razerzone.com/A1v1qrutzap6dYba9B0BCoeagEE=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fha8%2Fh3e%2F9481464315934%2F230222-blade15-ch9-1500x1000-3.jpg",
        img4:"https://assets3.razerzone.com/S8pG_WTNYcKMTj5UDaWvy-TCIWk=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh11%2Fh42%2F9481464414238%2F230222-blade15-ch9-1500x1000-4.jpg",
        img5:"https://assets3.razerzone.com/_KY2w8pfZYKbx3I3zNzYFVUuR_Y=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh02%2Fh3c%2F9481464283166%2F230222-blade15-ch9-1500x1000-6.jpg"
        },
        title:"Razer Blade 17 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :17,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:56999,
        cprice:60999
    },
    {
        id:17,
        img:{img1:"https://assets3.razerzone.com/uVlIiPdbHQF-baAX2aghIVukYVA=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh00%2Fh3f%2F9481464348702%2F230222-blade15-ch9-1500x1000-1.jpg",
        img2:"https://assets3.razerzone.com/ay1dL2V-aCXmjk2p9nArviCUMKw=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh6a%2Fh3f%2F9481464381470%2F230222-blade15-ch9-1500x1000-2.jpg",
        img3:"https://assets3.razerzone.com/A1v1qrutzap6dYba9B0BCoeagEE=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fha8%2Fh3e%2F9481464315934%2F230222-blade15-ch9-1500x1000-3.jpg",
        img4:"https://assets3.razerzone.com/S8pG_WTNYcKMTj5UDaWvy-TCIWk=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh11%2Fh42%2F9481464414238%2F230222-blade15-ch9-1500x1000-4.jpg",
        img5:"https://assets3.razerzone.com/_KY2w8pfZYKbx3I3zNzYFVUuR_Y=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh02%2Fh3c%2F9481464283166%2F230222-blade15-ch9-1500x1000-6.jpg"
        },
        title:"Razer Blade 16 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :16,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:55999,
        cprice:59999,
        color: "Blue"
    },
    {
        id:18,
        img:{img1:"https://assets3.razerzone.com/uVlIiPdbHQF-baAX2aghIVukYVA=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh00%2Fh3f%2F9481464348702%2F230222-blade15-ch9-1500x1000-1.jpg",
        img2:"https://assets3.razerzone.com/ay1dL2V-aCXmjk2p9nArviCUMKw=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh6a%2Fh3f%2F9481464381470%2F230222-blade15-ch9-1500x1000-2.jpg",
        img3:"https://assets3.razerzone.com/A1v1qrutzap6dYba9B0BCoeagEE=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fha8%2Fh3e%2F9481464315934%2F230222-blade15-ch9-1500x1000-3.jpg",
        img4:"https://assets3.razerzone.com/S8pG_WTNYcKMTj5UDaWvy-TCIWk=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh11%2Fh42%2F9481464414238%2F230222-blade15-ch9-1500x1000-4.jpg",
        img5:"https://assets3.razerzone.com/_KY2w8pfZYKbx3I3zNzYFVUuR_Y=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh02%2Fh3c%2F9481464283166%2F230222-blade15-ch9-1500x1000-6.jpg"
        },
        title:"Razer Blade 15 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :15,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:52999,
        cprice:58999,
        color: "Blue"
    },
    {
        id:19,
        img:{img1:"https://assets3.razerzone.com/uVlIiPdbHQF-baAX2aghIVukYVA=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh00%2Fh3f%2F9481464348702%2F230222-blade15-ch9-1500x1000-1.jpg",
        img2:"https://assets3.razerzone.com/ay1dL2V-aCXmjk2p9nArviCUMKw=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh6a%2Fh3f%2F9481464381470%2F230222-blade15-ch9-1500x1000-2.jpg",
        img3:"https://assets3.razerzone.com/A1v1qrutzap6dYba9B0BCoeagEE=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fha8%2Fh3e%2F9481464315934%2F230222-blade15-ch9-1500x1000-3.jpg",
        img4:"https://assets3.razerzone.com/S8pG_WTNYcKMTj5UDaWvy-TCIWk=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh11%2Fh42%2F9481464414238%2F230222-blade15-ch9-1500x1000-4.jpg",
        img5:"https://assets3.razerzone.com/_KY2w8pfZYKbx3I3zNzYFVUuR_Y=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh02%2Fh3c%2F9481464283166%2F230222-blade15-ch9-1500x1000-6.jpg"
        },
        title:"Razer Blade 13 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :13,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:58999,
        cprice:69999,
        color: "WhiteSmoke"
    },
    {
        id:20,
        img:{img1:"https://assets3.razerzone.com/uVlIiPdbHQF-baAX2aghIVukYVA=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh00%2Fh3f%2F9481464348702%2F230222-blade15-ch9-1500x1000-1.jpg",
        img2:"https://assets3.razerzone.com/ay1dL2V-aCXmjk2p9nArviCUMKw=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh6a%2Fh3f%2F9481464381470%2F230222-blade15-ch9-1500x1000-2.jpg",
        img3:"https://assets3.razerzone.com/A1v1qrutzap6dYba9B0BCoeagEE=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fha8%2Fh3e%2F9481464315934%2F230222-blade15-ch9-1500x1000-3.jpg",
        img4:"https://assets3.razerzone.com/S8pG_WTNYcKMTj5UDaWvy-TCIWk=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh11%2Fh42%2F9481464414238%2F230222-blade15-ch9-1500x1000-4.jpg",
        img5:"https://assets3.razerzone.com/_KY2w8pfZYKbx3I3zNzYFVUuR_Y=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh02%2Fh3c%2F9481464283166%2F230222-blade15-ch9-1500x1000-6.jpg"
        },
        title:"Razer Blade 14 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :14,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:53999,
        cprice:59999,
        color: "WhiteSmoke"
    },
    {
        id:21,
        img:{img1:"https://assets3.razerzone.com/uVlIiPdbHQF-baAX2aghIVukYVA=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh00%2Fh3f%2F9481464348702%2F230222-blade15-ch9-1500x1000-1.jpg",
        img2:"https://assets3.razerzone.com/ay1dL2V-aCXmjk2p9nArviCUMKw=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh6a%2Fh3f%2F9481464381470%2F230222-blade15-ch9-1500x1000-2.jpg",
        img3:"https://assets3.razerzone.com/A1v1qrutzap6dYba9B0BCoeagEE=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fha8%2Fh3e%2F9481464315934%2F230222-blade15-ch9-1500x1000-3.jpg",
        img4:"https://assets3.razerzone.com/S8pG_WTNYcKMTj5UDaWvy-TCIWk=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh11%2Fh42%2F9481464414238%2F230222-blade15-ch9-1500x1000-4.jpg",
        img5:"https://assets3.razerzone.com/_KY2w8pfZYKbx3I3zNzYFVUuR_Y=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh02%2Fh3c%2F9481464283166%2F230222-blade15-ch9-1500x1000-6.jpg"
        },
        title:"Razer Blade 14 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :14,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:50999,
        cprice:55999,
        color: "WhiteSmoke"
    },
    {
        id:22,
        img:{img1:"https://assets3.razerzone.com/uVlIiPdbHQF-baAX2aghIVukYVA=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh00%2Fh3f%2F9481464348702%2F230222-blade15-ch9-1500x1000-1.jpg",
        img2:"https://assets3.razerzone.com/ay1dL2V-aCXmjk2p9nArviCUMKw=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh6a%2Fh3f%2F9481464381470%2F230222-blade15-ch9-1500x1000-2.jpg",
        img3:"https://assets3.razerzone.com/A1v1qrutzap6dYba9B0BCoeagEE=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fha8%2Fh3e%2F9481464315934%2F230222-blade15-ch9-1500x1000-3.jpg",
        img4:"https://assets3.razerzone.com/S8pG_WTNYcKMTj5UDaWvy-TCIWk=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh11%2Fh42%2F9481464414238%2F230222-blade15-ch9-1500x1000-4.jpg",
        img5:"https://assets3.razerzone.com/_KY2w8pfZYKbx3I3zNzYFVUuR_Y=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh02%2Fh3c%2F9481464283166%2F230222-blade15-ch9-1500x1000-6.jpg"
        },
        title:"Razer Blade 14 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :14,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:51999,
        cprice:56999,
        color: "WhiteSmoke"
    },
    {
        id:23,
        img:{img1:"https://assets3.razerzone.com/uVlIiPdbHQF-baAX2aghIVukYVA=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh00%2Fh3f%2F9481464348702%2F230222-blade15-ch9-1500x1000-1.jpg",
        img2:"https://assets3.razerzone.com/ay1dL2V-aCXmjk2p9nArviCUMKw=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh6a%2Fh3f%2F9481464381470%2F230222-blade15-ch9-1500x1000-2.jpg",
        img3:"https://assets3.razerzone.com/A1v1qrutzap6dYba9B0BCoeagEE=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fha8%2Fh3e%2F9481464315934%2F230222-blade15-ch9-1500x1000-3.jpg",
        img4:"https://assets3.razerzone.com/S8pG_WTNYcKMTj5UDaWvy-TCIWk=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh11%2Fh42%2F9481464414238%2F230222-blade15-ch9-1500x1000-4.jpg",
        img5:"https://assets3.razerzone.com/_KY2w8pfZYKbx3I3zNzYFVUuR_Y=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh02%2Fh3c%2F9481464283166%2F230222-blade15-ch9-1500x1000-6.jpg"
        },
        title:"Razer Blade 14 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :14,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:55999,
        cprice:59999,
        color: "Gray"
    },
    {
        id:24,
        img:{img1:"https://assets3.razerzone.com/uVlIiPdbHQF-baAX2aghIVukYVA=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh00%2Fh3f%2F9481464348702%2F230222-blade15-ch9-1500x1000-1.jpg",
        img2:"https://assets3.razerzone.com/ay1dL2V-aCXmjk2p9nArviCUMKw=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh6a%2Fh3f%2F9481464381470%2F230222-blade15-ch9-1500x1000-2.jpg",
        img3:"https://assets3.razerzone.com/A1v1qrutzap6dYba9B0BCoeagEE=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fha8%2Fh3e%2F9481464315934%2F230222-blade15-ch9-1500x1000-3.jpg",
        img4:"https://assets3.razerzone.com/S8pG_WTNYcKMTj5UDaWvy-TCIWk=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh11%2Fh42%2F9481464414238%2F230222-blade15-ch9-1500x1000-4.jpg",
        img5:"https://assets3.razerzone.com/_KY2w8pfZYKbx3I3zNzYFVUuR_Y=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh02%2Fh3c%2F9481464283166%2F230222-blade15-ch9-1500x1000-6.jpg"
        },
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :17,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:57999,
        cprice:65999,
        color: "Gray"
    },
    {
        id:25,
        img:{img1:"https://assets3.razerzone.com/uVlIiPdbHQF-baAX2aghIVukYVA=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh00%2Fh3f%2F9481464348702%2F230222-blade15-ch9-1500x1000-1.jpg",
        img2:"https://assets3.razerzone.com/ay1dL2V-aCXmjk2p9nArviCUMKw=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh6a%2Fh3f%2F9481464381470%2F230222-blade15-ch9-1500x1000-2.jpg",
        img3:"https://assets3.razerzone.com/A1v1qrutzap6dYba9B0BCoeagEE=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fha8%2Fh3e%2F9481464315934%2F230222-blade15-ch9-1500x1000-3.jpg",
        img4:"https://assets3.razerzone.com/S8pG_WTNYcKMTj5UDaWvy-TCIWk=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh11%2Fh42%2F9481464414238%2F230222-blade15-ch9-1500x1000-4.jpg",
        img5:"https://assets3.razerzone.com/_KY2w8pfZYKbx3I3zNzYFVUuR_Y=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh02%2Fh3c%2F9481464283166%2F230222-blade15-ch9-1500x1000-6.jpg"
        },
        title:"Razer Blade 15 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :15,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:50999,
        cprice:55999,
        color: "Gray"
    },
    {
        id:26,
        img:{img1:"https://assets3.razerzone.com/uVlIiPdbHQF-baAX2aghIVukYVA=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh00%2Fh3f%2F9481464348702%2F230222-blade15-ch9-1500x1000-1.jpg",
        img2:"https://assets3.razerzone.com/ay1dL2V-aCXmjk2p9nArviCUMKw=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh6a%2Fh3f%2F9481464381470%2F230222-blade15-ch9-1500x1000-2.jpg",
        img3:"https://assets3.razerzone.com/A1v1qrutzap6dYba9B0BCoeagEE=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fha8%2Fh3e%2F9481464315934%2F230222-blade15-ch9-1500x1000-3.jpg",
        img4:"https://assets3.razerzone.com/S8pG_WTNYcKMTj5UDaWvy-TCIWk=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh11%2Fh42%2F9481464414238%2F230222-blade15-ch9-1500x1000-4.jpg",
        img5:"https://assets3.razerzone.com/_KY2w8pfZYKbx3I3zNzYFVUuR_Y=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh02%2Fh3c%2F9481464283166%2F230222-blade15-ch9-1500x1000-6.jpg"
        },
        title:"Razer Blade 14 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :14,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:55999,
        cprice:59999,
        color: "Gray"
    },
    {
        id:27,
        img:{img1:"https://assets3.razerzone.com/uVlIiPdbHQF-baAX2aghIVukYVA=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh00%2Fh3f%2F9481464348702%2F230222-blade15-ch9-1500x1000-1.jpg",
        img2:"https://assets3.razerzone.com/ay1dL2V-aCXmjk2p9nArviCUMKw=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh6a%2Fh3f%2F9481464381470%2F230222-blade15-ch9-1500x1000-2.jpg",
        img3:"https://assets3.razerzone.com/A1v1qrutzap6dYba9B0BCoeagEE=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fha8%2Fh3e%2F9481464315934%2F230222-blade15-ch9-1500x1000-3.jpg",
        img4:"https://assets3.razerzone.com/S8pG_WTNYcKMTj5UDaWvy-TCIWk=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh11%2Fh42%2F9481464414238%2F230222-blade15-ch9-1500x1000-4.jpg",
        img5:"https://assets3.razerzone.com/_KY2w8pfZYKbx3I3zNzYFVUuR_Y=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh02%2Fh3c%2F9481464283166%2F230222-blade15-ch9-1500x1000-6.jpg"
        },
        title:"Razer Blade 16 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :16,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:55999,
        cprice:60999,
        color: "Gray"
    },
    {
        id:28,
        img:{img1:"https://assets3.razerzone.com/uVlIiPdbHQF-baAX2aghIVukYVA=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh00%2Fh3f%2F9481464348702%2F230222-blade15-ch9-1500x1000-1.jpg",
        img2:"https://assets3.razerzone.com/ay1dL2V-aCXmjk2p9nArviCUMKw=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh6a%2Fh3f%2F9481464381470%2F230222-blade15-ch9-1500x1000-2.jpg",
        img3:"https://assets3.razerzone.com/A1v1qrutzap6dYba9B0BCoeagEE=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fha8%2Fh3e%2F9481464315934%2F230222-blade15-ch9-1500x1000-3.jpg",
        img4:"https://assets3.razerzone.com/S8pG_WTNYcKMTj5UDaWvy-TCIWk=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh11%2Fh42%2F9481464414238%2F230222-blade15-ch9-1500x1000-4.jpg",
        img5:"https://assets3.razerzone.com/_KY2w8pfZYKbx3I3zNzYFVUuR_Y=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh02%2Fh3c%2F9481464283166%2F230222-blade15-ch9-1500x1000-6.jpg"
        },
        title:"Razer Blade 16 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :16,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:54999,
        cprice:59999,
        color: "Gray"
    },
    {
        id:29,
        img:{img1:"https://assets3.razerzone.com/uVlIiPdbHQF-baAX2aghIVukYVA=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh00%2Fh3f%2F9481464348702%2F230222-blade15-ch9-1500x1000-1.jpg",
        img2:"https://assets3.razerzone.com/ay1dL2V-aCXmjk2p9nArviCUMKw=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh6a%2Fh3f%2F9481464381470%2F230222-blade15-ch9-1500x1000-2.jpg",
        img3:"https://assets3.razerzone.com/A1v1qrutzap6dYba9B0BCoeagEE=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fha8%2Fh3e%2F9481464315934%2F230222-blade15-ch9-1500x1000-3.jpg",
        img4:"https://assets3.razerzone.com/S8pG_WTNYcKMTj5UDaWvy-TCIWk=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh11%2Fh42%2F9481464414238%2F230222-blade15-ch9-1500x1000-4.jpg",
        img5:"https://assets3.razerzone.com/_KY2w8pfZYKbx3I3zNzYFVUuR_Y=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh02%2Fh3c%2F9481464283166%2F230222-blade15-ch9-1500x1000-6.jpg"
        },
        title:"Razer Blade 13 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :13,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:56999,
        cprice:59999,
        color:"Black Murcury"
    },
    {
        id:30,
        img:{img1:"https://assets3.razerzone.com/uVlIiPdbHQF-baAX2aghIVukYVA=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh00%2Fh3f%2F9481464348702%2F230222-blade15-ch9-1500x1000-1.jpg",
        img2:"https://assets3.razerzone.com/ay1dL2V-aCXmjk2p9nArviCUMKw=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh6a%2Fh3f%2F9481464381470%2F230222-blade15-ch9-1500x1000-2.jpg",
        img3:"https://assets3.razerzone.com/A1v1qrutzap6dYba9B0BCoeagEE=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fha8%2Fh3e%2F9481464315934%2F230222-blade15-ch9-1500x1000-3.jpg",
        img4:"https://assets3.razerzone.com/S8pG_WTNYcKMTj5UDaWvy-TCIWk=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh11%2Fh42%2F9481464414238%2F230222-blade15-ch9-1500x1000-4.jpg",
        img5:"https://assets3.razerzone.com/_KY2w8pfZYKbx3I3zNzYFVUuR_Y=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh02%2Fh3c%2F9481464283166%2F230222-blade15-ch9-1500x1000-6.jpg"
        },
        title:"Razer Blade 15 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury",
        specifications : {processor:"AMD Ryzen™ 9 6900HX",windows:"Windows 11 Home",screen :15,force:"GeForce RTX 3060",storage:"16GB 4800MHz RAM, 1TB SSD"},
        price:52999,
        cprice:59999,
        color:"Black Murcury"
    }

]

    return (
        <Box bg="#555555">
            <Center color="white" fontSize={15} bg="#999999" h={10} >Unleash a new age of technology with an arsenal of cutting-edge innovations that will keep you ahead of the game. Shop Now <ChevronRightIcon></ChevronRightIcon></Center>
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
                    <option value='Gray'style={{color:"black"}}>Gray</option>
                    <option value='Black Murcury'style={{color:"black"}}>Black Murcury</option>
                    <option value='WhiteSmoke'style={{color:"black"}}>WhiteSmoke</option>
                    <option value='Black'style={{color:"black"}}>Black</option>
                    <option value='Blue'style={{color:"black"}}>Blue</option>
                    <option value='Green'style={{color:"black"}}>Green</option>
                </Select>

            </Box>
            <Grid w="70%"gridTemplateColumns="repeat(3,1fr)" gap="20px" ml="10%">
                {
                    data.map((e)=>{
                        return <GridItem alignItems="center" bg = "#252525" color="white">
                            <Image src={e.img.img1} w="70%" m="auto"></Image>
                            <Box bg="black" p={5}>
                            <Text>{e.title}</Text>
                            <UnorderedList color="#999999">
                                <ListItem>{e.specifications.processor}</ListItem>
                                <ListItem>{e.specifications.screen}&nbsp;inch Full HD</ListItem>
                                <ListItem>{e.specifications.force}</ListItem>
                                <ListItem>{e.specifications.windows}</ListItem>
                                <ListItem>{e.specifications.force}</ListItem>
                            </UnorderedList>
                            <Link color="#44d62c">View Details <ChevronRightIcon></ChevronRightIcon></Link><br></br>
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