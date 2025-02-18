import { login } from '../src/auth';
import { orders } from '../src';


export async function loginAndGetAllOrders() {
    try {
        await login();
        console.log('Login feito com sucesso!');
    } catch (error) {
        console.log('Erro ao efetuar tentativa de login');
        console.error(error);
    }
    try {
        console.log(await orders.get(0, 10));
    } catch (error) {
        console.error(error);
    }
}

loginAndGetAllOrders();
