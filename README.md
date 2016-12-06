<h1> ECommerce RestApi</h1><br/>
ECommerce Website with JWT Auth. Technologies: NodeJS + ExpressJS + MongoDB<br/>
<br/>
<h2>ECommerce Rest Endpoints </h2><br/>
baseuri <b>/api/v1</b><br/>
<br/>
<b>POST</b> 	/register<br/>
<b>POST</b> 	/authenticate<br/>
<br/>
<b>POST</b> 	/categories<br/>
<b>GET</b> 		/categories<br/>
<b>GET</b>  	/categories/{id}<br/>
<b>PUT</b>     	/categories/{id}<br/>
<b>DELETE</b>   /categories/{id}<br/>
<br/>
<b>POST</b>     /categories/{id}/makers<br/>
<b>GET</b>      /categories/{id}/makers<br/>
<b>GET</b>      /categories/{id}/makers/{id}<br/>
<b>PUT</b>      /categories/{id}/makers/{id}<br/>
<b>DELETE</b>   /categories/{id}/makers/{id}<br/>
<br/>
<b>POST</b>     /categories/{id}/makers/{id}/products<br/>
<b>GET</b>      /categories/{id}/makers/{id}/products<br/>
<b>GET</b>      /categories/{id}/makers/{id}/products/{id}<br/>
<b>PUT</b>      /categories/{id}/makers/{id}/products/{id}<br/>
<b>DELETE</b>   /categories/{id}/makers/{id}/products/{id}<br/>
<br/>
Move the above endpoints to <b>swagger-ui</b>
