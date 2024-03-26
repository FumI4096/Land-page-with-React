# First React Project 

## Description: 
This project is structured only as a landing page constructed by our mentor to make improvement of our given skills for the ongoing startup project (Groupings).

## Explanation:
    The primarily focus of this project is the loading animation. The following information discussed the codes including CSS:

### ReactJS
```js
import { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa6";
import style from '../../styles/loading.module.css';

function Loading() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);  
        }, 2000);

        return () => clearTimeout(timeout);
    }, []); 

    useEffect(() => {
        if (loading) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
    }, [loading]);

    return (
        <>
            {loading && (
                <div className={style.LoadingBar}>
                    <div className={style.LoadingWrap}>
                        <FaCheck className={style.loadingIcon} />
                    </div>
                </div>
            )}
        </>
    );
    
}

export default Loading;
```

### CSS
```css
.LoadingBar{
    position: fixed;
    top:0;
    height: 100%;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    overflow: hidden;
}

.LoadingWrap{
    height: 150px;
    width: 150px; 
    border-radius: 50%;
    border: 5px dotted black;
    display: flex;
    justify-content: center;
    align-items: center;
    filter: drop-shadow(0 0 4px rgb(34, 34, 34));
    animation: ColorLoad 2s ease-in-out infinite alternate, RotateCircle 1.5s ease-in-out infinite alternate;
    
}

.loadingIcon{
    font-size: 3.5rem;
}

@keyframes ColorLoad {
    0%{ filter: drop-shadow(0 0 4px rgb(255, 158, 158))};
    25%{ filter: drop-shadow(0 0 4px rgb(158, 224, 255))};
    50%{ filter: drop-shadow(0 0 4px rgb(242, 255, 126))};
    75%{ filter: drop-shadow(0 0 4px rgb(78, 65, 255))};
    100%{ filter: drop-shadow(0 0 4px rgb(255, 158, 158))};
    
}

@keyframes RotateCircle {
    from{
        transform: rotate(-10deg);
    }
    to{
        transform: rotate(40deg);
    }
}
```
## Code Explanations:
### 1.
```js
const [loading, setLoading] = useState(true);

useEffect(() => {
    const timeout = setTimeout(() => {
        setLoading(false);  
    }, 2000);
    return () => clearTimeout(timeout);
}, []); 
```
__The ```timeout``` variable holds the value that is returned by the ```setTimeout``` which is 2000. With the help of the return keyword as an essential tool for clean ups.__
+ Additionally, it allows to re-render the contents to disappear as the ```loading``` variable was directly by the ```setLoading``` after the expiration.

### 2.
```js
useEffect(() => {
    if(loading){
        document.body.style.overflow = 'hidden';
    } 
    else{
        document.body.style.overflow = 'visible';
    }
}, [loading]);
```
__The ```useEffect``` is dependent unto the ```loading``` variable, leading to a reaction to execute this particular compound code logically. This causes a side effect that allows the overflow of the body ```hidden``` if true otherwise ```hidden```.__

### 3.
```js
return (
    <>
        {loading && (
            <div className={style.LoadingBar}>
                <div className={style.LoadingWrap}>
                    <FaCheck className={style.loadingIcon} />
                </div>
            </div>
        )}
    </>
);
```
__This displays the structure of the loading animation__

### 4.
```css
.LoadingWrap{
    height: 150px;
    width: 150px; 
    border-radius: 50%;
    border: 5px dotted black;
    display: flex;
    justify-content: center;
    align-items: center;
    filter: drop-shadow(0 0 4px rgb(34, 34, 34));
    animation: ColorLoad 2s ease-in-out infinite alternate,RotateCircle 1.5s ease-in-out infinite alternate;
}
.loadingIcon{
    font-size: 3.5rem;
}
```
__Displays the style of the wrapper of ```.loadingIcon```. In addition, the font size is added as well.__
+ We can see that there is a css property called ```animation``` that is use to control the flow of the specific animation by its animation name, which includes the delay, time, number of animation, start of animation and more.

### 5.
```css
@keyframes ColorLoad {
    0%{ filter: drop-shadow(0 0 4px rgb(255, 158, 158))};
    25%{ filter: drop-shadow(0 0 4px rgb(158, 224, 255))};
    50%{ filter: drop-shadow(0 0 4px rgb(242, 255, 126))};
    75%{ filter: drop-shadow(0 0 4px rgb(78, 65, 255))};
    100%{ filter: drop-shadow(0 0 4px rgb(255, 158, 158))};
    
}

@keyframes RotateCircle {
    from{
        transform: rotate(-10deg);
    }
    to{
        transform: rotate(40deg);
    }
}
```
__As stated from the ```.LoadingWrap``` selector, the names that is _ColorLoad_ and _RotateCircle_ are indication that an animation is made specifically. The given animations are done through ```@keyframes``` which provides the overall flow ofthe animation.__
+ The **_ColorLoad_** is used to change he shadow color sequentially.
+ The **_RotateCircle_** is used to change the rotation of the icon.
