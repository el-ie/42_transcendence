// import React from 'react';
import Menu from './Menu';
import React, { useRef, useEffect } from 'react';



function Play() {


	const canvasRef = useRef(null);


	let x = 0;
	const speed = 2;

	useEffect(() => {

		const canvas: HTMLCanvasElement = canvasRef.current!;

		const menu_height: number = document.getElementsByClassName("menu")[0].clientHeight;
		const container_height: number = document.getElementsByClassName("container")[0].clientHeight;

		canvas.height = container_height - menu_height;
		canvas.width = window.innerWidth;

		const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;


		 const draw = () => {
			// Effacer le canvas précédent
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			// Dessiner un cercle
			ctx.beginPath();
			ctx.arc(x, canvas.height / 2, 50, 0, Math.PI * 2);
			ctx.fill();
			ctx.closePath();

			// Déplacer le cercle
			x += speed;
			if (x > canvas.width + 50) x = -50;

			requestAnimationFrame(draw);
		 };

		// ctx.fillStyle = 'purple';
		// // draw a horizontal line at bottom of canvas
		// ctx.fillRect(0, canvas.height - 10, canvas.width, 10);
		// ctx.fillStyle = 'green';
		// // draw a vertical line at left of canvas
		// ctx.fillRect(0, 0, 10, canvas.height);
		// ctx.fillStyle = 'blue';
		// // draw a horizontal line at top of canvas
		// ctx.fillRect(0, 0, canvas.width, 10);
		// ctx.fillStyle = 'red';
		// // draw a vertical line at right of canvas
		// ctx.fillRect(canvas.width - 10, 0, 10, canvas.height);
		draw();

	}, []);

	return (
		<div className="container">
			<Menu />
			<canvas ref={canvasRef} className="canvas" />
		</div>
  );
}




export default Play;
