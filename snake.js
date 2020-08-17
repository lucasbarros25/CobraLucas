function Snake ()
{
	this.x = 0;
	this.y = 0;
	this.xSpeed = scale * 1;
	this.ySpeed = 0;
 
	this.draw = function()
	{
		ctx.fillStyle = "#FFFFFF";
		ctx.fillRect(this.x, this.y, scale, scale);
	}
	
	this.update = function()
	{
		this.x += this.xSpeed;
		this.y =+ this.ySpeed;
		if (this.x > canvas.width) 
		{
			this.x=0;	
		}
	}
	this.changeDirection = function (direction)
	{
		switch(direction)
		{ 	
			case 'W':
			case 'w':
			case 'Up':
			this.xSpeed = 0;
			this.ySpeed = -scale * 1;	
			break;
			case 'S':
			case 's':
			case 'Down':
			this.xSpeed = 0;
			this.ySpeed = scale * 1;
			break;
			case 'A':
			case 'a':
			case 'Left':
			this.xSpeed = -scale * 1;
			this.ySpeed = 0;
			break;
			case 'D':
			case 'd':
			case 'Right':
			this.xSpeed = scale * 1;
			this.ySpeed = 0;
			break;
		}


	}
}