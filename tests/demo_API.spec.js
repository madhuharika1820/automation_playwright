import{test,expect} from '@playwright/test'
import { request } from 'node:http'

test.only('demo_api_test',async({request})=>{
    const response =await request.get('https://reqres.in/api/users/2',{
        headers:{
            "x-api-key":`reqres_23f07a574b424b10a0a5cb97077d0e63`
        }})

        expect(response.status()).toBe(200);
        const text =await response.text();
        expect(text).toContain('Janet');
        console.log(await response.json());
})