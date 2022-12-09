import React,{useId} from 'react'

function UseIdSample() {
    const generateId = useId()

  return (<>
<div>UseIdSample</div>
<label htmlFor={`${generateId}-email`}>Email</label>
<input type="email" id={`${generateId}-email`} name="Email"/>
<br/>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor orci eu lobortis elementum nibh tellus. Iaculis urna id volutpat lacus laoreet non. Magna etiam tempor orci eu lobortis elementum. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Pharetra sit amet aliquam id diam. Ut porttitor leo a diam sollicitudin tempor id eu nisl. Senectus et netus et malesuada fames ac turpis egestas. Hendrerit dolor magna eget est lorem. Commodo nulla facilisi nullam vehicula ipsum. Nulla at volutpat diam ut venenatis tellus. Felis bibendum ut tristique et egestas. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit. At lectus urna duis convallis convallis tellus. Neque aliquam vestibulum morbi blandit cursus risus. Eu volutpat odio facilisis mauris. Sed turpis tincidunt id aliquet risus feugiat. Pellentesque diam volutpat commodo sed egestas egestas.

    Non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus. Pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Libero nunc consequat interdum varius sit amet mattis vulputate enim. Ultricies tristique nulla aliquet enim tortor at auctor urna. Vestibulum sed arcu non odio euismod lacinia at quis. Adipiscing at in tellus integer feugiat scelerisque varius. In metus vulputate eu scelerisque. Faucibus purus in massa tempor. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in. Pharetra diam sit amet nisl suscipit adipiscing. In fermentum posuere urna nec tincidunt praesent semper. Sapien eget mi proin sed libero. Egestas quis ipsum suspendisse ultrices gravida. Elit pellentesque habitant morbi tristique senectus et netus et. Sed enim ut sem viverra aliquet. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Mi bibendum neque egestas congue quisque egestas diam in arcu. Pellentesque diam volutpat commodo sed. Maecenas volutpat blandit aliquam etiam.

    Maecenas ultricies mi eget mauris pharetra et ultrices. Sed lectus vestibulum mattis ullamcorper velit sed. Enim eu turpis egestas pretium. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Vel risus commodo viverra maecenas accumsan lacus vel. Tellus molestie nunc non blandit massa enim nec dui nunc. Lacinia quis vel eros donec ac odio tempor orci. Integer vitae justo eget magna fermentum. Augue eget arcu dictum varius duis. Elementum integer enim neque volutpat ac tincidunt vitae semper quis. Urna duis convallis convallis tellus id interdum velit laoreet. A diam maecenas sed enim.

    Volutpat odio facilisis mauris sit amet massa vitae tortor. Commodo sed egestas egestas fringilla phasellus. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Blandit libero volutpat sed cras ornare arcu dui vivamus. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Donec ac odio tempor orci. Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Sed sed risus pretium quam vulputate dignissim suspendisse in. Et leo duis ut diam quam. Facilisis volutpat est velit egestas dui id ornare arcu odio. Nulla pharetra diam sit amet nisl. Et odio pellentesque diam volutpat commodo sed egestas. Velit laoreet id donec ultrices tincidunt. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Nibh ipsum consequat nisl vel. Rhoncus dolor purus non enim. Laoreet id donec ultrices tincidunt arcu.

    Leo integer malesuada nunc vel. Massa sapien faucibus et molestie ac feugiat sed lectus vestibulum. Nulla porttitor massa id neque. Nisi lacus sed viverra tellus in hac habitasse. Suscipit adipiscing bibendum est ultricies integer quis auctor elit. Fermentum posuere urna nec tincidunt praesent semper feugiat. At quis risus sed vulputate odio ut enim blandit. Nisi lacus sed viverra tellus in hac habitasse platea dictumst. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Nibh venenatis cras sed felis eget velit aliquet sagittis id. Risus sed vulputate odio ut enim blandit volutpat maecenas. Justo nec ultrices dui sapien. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Egestas diam in arcu cursus. Congue eu consequat ac felis donec et. Sed egestas egestas fringilla phasellus. Libero id faucibus nisl tincidunt eget nullam non. Diam in arcu cursus euismod quis viverra nibh cras pulvinar. Id semper risus in hendrerit gravida rutrum quisque non.
<br/>
<label htmlFor={`${generateId}-secondemail`}>Email</label>
<input type="email" id={`${generateId}-secondemail`} name="secondEmail"/>

<label htmlFor={`${generateId}-name`}>Name</label>
<input type="text" id={`${generateId}-name`} name="Name"/>

<button id={`${generateId}-submit`} name="submit">Submit</button>
</>)
}

export default UseIdSample