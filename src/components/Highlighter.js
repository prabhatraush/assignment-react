import React, {useRef, useEffect, useState} from 'react'

function Highlighter(){

    const [IsDrawing, setIsDrawing] = useState(false);
    const canvasContainer = useRef(null);
    const contextRef = useRef(null);

    useEffect(()=>{
        const canvas = canvasContainer.current;
        
       // canvas.style.margin = "30px auto";
        //canvas.style.width = `${window.innerWidth}px`;
        //canvas.style.height = `${window.innerHeight}px`;
        //canvas.style.padding = "20px 10px";
        // canvas.style.background = "#45002314";
        canvas.style.position = "absolute"; 
        // canvas.width = window.innerWidth;
        // canvas.height = window.innerHeight;
        canvas.width = window.innerWidth * 2;
        canvas.height = window.innerHeight * 2;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;
        canvas.style.zIndex = 1;

        const context = canvas.getContext("2d")
        context.scale(2, 2);
        context.lineCap = "butt";
        context.strokeStyle = "#FFFF2E12";
        context.lineWidth = 5;
        contextRef.current = context;
    },[])

    const startDraw = ({nativeEvent})=> {
        console.log("start draw");
        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX, offsetY);
        setIsDrawing(true);
    }

    const Draw = ({nativeEvent}) => {
        console.log("draw continue");
        if (!IsDrawing) {
            return;
          }
          const { offsetX, offsetY } = nativeEvent;
          contextRef.current.lineTo(offsetX, offsetY);
          contextRef.current.stroke();
    }

    const stopDraw = () =>{
        console.log('stopped draw');
        contextRef.current.closePath();
        setIsDrawing(false);
    }

    return (
        <div className="container">
             <canvas
                onMouseDown={startDraw}
                onMouseMove={Draw}
                onMouseUp={stopDraw}
                ref = {canvasContainer}
            />
        </div>
    );
}

export default Highlighter;
