import {rest} from 'msw'

export const handlers=[
    
    rest.get(`https://pokeapi.co/api/v2/pokemon/ditto`,(req,res,ctx)=>{
       return res(
            ctx.json({
                author: {"name":"Rafael","lastname":"Dimatz"},
                categories: ["Computación","Periféricos de PC","Mouses y Teclados","Mouses"],
                productList: [{"id":"MLA923657002","title":"Mouse Inalámbrico Logitech  M170 Negro","price":{"currency":"ARS","amount":"6275","decimals":"0"},"thumbnail":"http://http2.mlstatic.com/D_744609-MLA32854739285_112019-I.jpg","picture":"http://http2.mlstatic.com/D_744609-MLA32854739285_112019-L.jpg","condition":"new","free_shipping":false,"address":{"state_id":"AR-C","state_name":"Capital Federal","city_id":"TUxBQkJBUjM0MDha","city_name":"Barracas"}}]
            })
        )
    })
]