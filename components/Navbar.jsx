import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey} from 'react-icons/fi'
import { FaBluetooth } from 'react-icons/fa';

const Navbar = () => (
    <Flex p="2" borderBottom = "1px" borderColor="gray.100">
        <Box fontSize="3xl" color="Blue.400" fontWeight="bold">
            <Link href ="/" paddingLeft = "2">Modern Real</Link>
        </Box>
        <Spacer />
        <Box>
            <Menu>
                <MenuButton as = {IconButton} icon = {<FcMenu />} variant = "oulined" color = "red.400" />
                <MenuList>
                    <Link href ="/" passHref>
                        <MenuItem icon ={<FcHome />}>Home</MenuItem>
                    </Link>
                    <Link href ="/search" passHref>
                        <MenuItem icon ={<BsSearch />}>search</MenuItem>
                    </Link>
                    <Link href ="/search?purpose=for-sale" passHref>
                        <MenuItem icon ={<FcAbout />}>Sale Property</MenuItem>
                    </Link>
                    <Link href ="/search?purpose=for-rent" passHref>
                        <MenuItem icon ={<FiKey />}>Rent Property</MenuItem>
                    </Link>
                </MenuList>
            </Menu>
        </Box>

    </Flex>
);

export default Navbar;