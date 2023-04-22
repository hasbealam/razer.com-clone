import React from 'react';
import { Stack, Input, InputGroup, InputLeftElement,   } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons'

function HmBurgerSearch(props) {
    return (
        <div>
            <Stack spacing={4}>
  <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<Search2Icon color='gray.300' />}
    />
    <Input focusBorderColor="rgb(69,214,43)" color={"white"} type='Search' placeholder='Search Razer.com' />
  </InputGroup>

  <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      color='gray.300'
      fontSize='1.2em'
    />
  </InputGroup>
</Stack>
        </div>
    );
}

export {HmBurgerSearch};