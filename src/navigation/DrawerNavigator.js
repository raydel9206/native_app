import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { Box, NativeBaseProvider, Text, Image, StatusBar } from 'native-base';
import styleDrawer from '../styles/styleDrawer';
import { colors } from '../styles/styleGuides';
import BottomTabNavigator from "./TabNavigator"

function CustomDrawerContent(props) {
    return (
        <NativeBaseProvider>
            <StatusBar barStyle="light-content" />
            <Box
                style={styleDrawer.header}
            >

                <Box>
                    <Text style={styleDrawer.textheader} >John Doe</Text>
                    <Text style={styleDrawer.textheader}>example@email.com</Text>
                </Box>
                <Image
                    source={{
                        uri: 'https://images.unsplash.com/photo-1624243225303-261cc3cd2fbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
                    }}
                    alt="Header"
                    style={{ width: 60, height: 60, borderRadius: 30 }}
                />
            </Box>

            <DrawerContentScrollView {...props} >
                <DrawerItemList {...props} />
                <DrawerItem
                    label="Close drawer"
                    onPress={() => props.navigation.closeDrawer()}
                />
                <DrawerItem
                    label="Toggle drawer"
                    onPress={() => props.navigation.toggleDrawer()}
                />
            </DrawerContentScrollView>

        </NativeBaseProvider >
    );
}

const Drawer = createDrawerNavigator();

const DrawerNavigation = ({ navigation, route, rootStore }) => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: colors.DARKBLUE,
                    elevation: 0,
                    shadowOpacity: 0,
                },
                headerTitle: 'Arandela',
                drawerLabel:{
                    color:"green"
                }              
            }}
            drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="MainTab" component={BottomTabNavigator} />
        </Drawer.Navigator>
    );
};
export default DrawerNavigation;
