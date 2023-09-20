import React from 'react';
import Menu from './Menu';


function home(): JSX.Element {
	return (
		<div className="container">
			<Menu />
			<div className="content">
				<h1>home</h1>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue scelerisque neque tincidunt dapibus. Vestibulum porta metus ac eros dapibus ornare. Mauris ex nulla, posuere sit amet sem a, egestas tempor justo. Sed convallis tempus ligula, ac molestie ex aliquam sit amet. Phasellus placerat est pellentesque, ornare nunc eu, sagittis mauris. In vestibulum lectus sit amet tortor dapibus ornare. Aliquam justo nunc, pharetra et urna eu, vehicula vehicula diam. Mauris ac elit in purus commodo pellentesque.
				Pellentesque accumsan laoreet diam fermentum elementum. Suspendisse potenti. Maecenas consequat pharetra enim, vel imperdiet sem bibendum blandit. Nulla facilisi. Vestibulum tempus vulputate ultricies. Donec at est a erat feugiat molestie eget nec quam. Mauris id dolor metus. Curabitur quis suscipit sem, quis tempus urna. Morbi blandit malesuada mi vel placerat. Phasellus ultrices ipsum nec ultrices scelerisque.
			</div>
		</div>
	);
}

export default home;
