declare module 'cesium/Promise' {
	class Promise<T>
	{
	constructor(doneHandler?:(obj:T)=>void,errorHandler?:(obj:any)=>void)
	then(result:T);
	}
	export = Promise

}
declare module 'cesium/when' {
	import Promise = require('cesium/Promise');
	function when<T>(promise:Promise<T>, succes:(result)=>void, fail:(result)=>void) : void
	export = when;

}
declare module 'cesium/Core/fromRandomOptions' {
	interface fromRandomOptions
	{
		red?: number;
		minimumRed?: number;
		maximumRed?: number;
		green?: number;
		minimumGreen?: number;
		maximumGreen?: number;
		blue?: number;
		minimumBlue?: number;
		maximumBlue?: number;
		alpha?: number;
		minimumAlpha?: number;
		maximumAlpha?: number;
	}
	export = fromRandomOptions

}
declare module 'cesium/Core/Color' {
	import Cartesian4 = require('cesium/Core/Cartesian4')
	import fromRandomOptions = require('cesium/Core/fromRandomOptions')
	class Color 
	{
		constructor(red? : number, green? : number, blue? : number, alpha? : number);
		//Members
		static ALICEBLUE: Color
		static ANTIQUEWHITE: Color
		static AQUA: Color
		static AQUAMARINE: Color
		static AZURE: Color
		static BEIGE: Color
		static BISQUE: Color
		static BLACK: Color
		static BLANCHEDALMOND: Color
		static BLUE: Color
		static BLUEVIOLET: Color
		static BROWN: Color
		static BURLYWOOD: Color
		static CADETBLUE: Color
		static CHARTREUSE: Color
		static CHOCOLATE: Color
		static CORAL: Color
		static CORNFLOWERBLUE: Color
		static CORNSILK: Color
		static CRIMSON: Color
		static CYAN: Color
		static DARKBLUE: Color
		static DARKCYAN: Color
		static DARKGOLDENROD: Color
		static DARKGRAY: Color
		static DARKGREEN: Color
		static DARKGREY: Color
		static DARKKHAKI: Color
		static DARKMAGENTA: Color
		static DARKOLIVEGREEN: Color
		static DARKORANGE: Color
		static DARKORCHID: Color
		static DARKRED: Color
		static DARKSALMON: Color
		static DARKSEAGREEN: Color
		static DARKSLATEBLUE: Color
		static DARKSLATEGRAY: Color
		static DARKSLATEGREY: Color
		static DARKTURQUOISE: Color
		static DARKVIOLET: Color
		static DEEPPINK: Color
		static DEEPSKYBLUE: Color
		static DIMGRAY: Color
		static DIMGREY: Color
		static DODGERBLUE: Color
		static FIREBRICK: Color
		static FLORALWHITE: Color
		static FORESTGREEN: Color
		static FUSCHIA: Color
		static GAINSBORO: Color
		static GHOSTWHITE: Color
		static GOLD: Color
		static GOLDENROD: Color
		static GRAY: Color
		static GREEN: Color
		static GREENYELLOW: Color
		static GREY: Color
		static HONEYDEW: Color
		static HOTPINK: Color
		static INDIANRED: Color
		static INDIGO: Color
		static IVORY: Color
		static KHAKI: Color
		static LAVENDAR_BLUSH: Color
		static LAVENDER: Color
		static LAWNGREEN: Color
		static LEMONCHIFFON: Color
		static LIGHTBLUE: Color
		static LIGHTCORAL: Color
		static LIGHTCYAN: Color
		static LIGHTGOLDENRODYELLOW: Color
		static LIGHTGRAY: Color
		static LIGHTGREEN: Color
		static LIGHTGREY: Color
		static LIGHTPINK: Color
		static LIGHTSEAGREEN: Color
		static LIGHTSKYBLUE: Color
		static LIGHTSLATEGRAY: Color
		static LIGHTSLATEGREY: Color
		static LIGHTSTEELBLUE: Color
		static LIGHTYELLOW: Color
		static LIME: Color
		static LIMEGREEN: Color
		static LINEN: Color
		static MAGENTA: Color
		static MAROON: Color
		static MEDIUMAQUAMARINE: Color
		static MEDIUMBLUE: Color
		static MEDIUMORCHID: Color
		static MEDIUMPURPLE: Color
		static MEDIUMSEAGREEN: Color
		static MEDIUMSLATEBLUE: Color
		static MEDIUMSPRINGGREEN: Color
		static MEDIUMTURQUOISE: Color
		static MEDIUMVIOLETRED: Color
		static MIDNIGHTBLUE: Color
		static MINTCREAM: Color
		static MISTYROSE: Color
		static MOCCASIN: Color
		static NAVAJOWHITE: Color
		static NAVY: Color
		static OLDLACE: Color
		static OLIVE: Color
		static OLIVEDRAB: Color
		static ORANGE: Color
		static ORANGERED: Color
		static ORCHID: Color
		static packedLength: number
		static PALEGOLDENROD: Color
		static PALEGREEN: Color
		static PALETURQUOISE: Color
		static PALEVIOLETRED: Color
		static PAPAYAWHIP: Color
		static PEACHPUFF: Color
		static PERU: Color
		static PINK: Color
		static PLUM: Color
		static POWDERBLUE: Color
		static PURPLE: Color
		static RED: Color
		static ROSYBROWN: Color
		static ROYALBLUE: Color
		static SADDLEBROWN: Color
		static SALMON: Color
		static SANDYBROWN: Color
		static SEAGREEN: Color
		static SEASHELL: Color
		static SIENNA: Color
		static SILVER: Color
		static SKYBLUE: Color
		static SLATEBLUE: Color
		static SLATEGRAY: Color
		static SLATEGREY: Color
		static SNOW: Color
		static SPRINGGREEN: Color
		static STEELBLUE: Color
		static TAN: Color
		static TEAL: Color
		static THISTLE: Color
		static TOMATO: Color
		static TRANSPARENT: Color
		static TURQUOISE: Color
		static VIOLET: Color
		static WHEAT: Color
		static WHITE: Color
		static WHITESMOKE: Color
		static YELLOW: Color
		static YELLOWGREEN: Color
		alpha: number
		blue: number
		green: number
		red: number


		//Methods
		static add(left : Color, right : Color, result : Color) : Color
		static byteToFloat(number : number) : number
		static clone(color : Color, result : Color) : Color
		static divide(left : Color, right : Color, result : Color) : Color
		static divideByScalar(color : Color, scalar : number, result : Color) : Color
		static equals(left : Color, right : Color) : boolean
		static floatToByte(number : number) : number
		static fromAlpha(color : Color, alpha : number, result : Color) : Color
		static fromBytes(red : number, green : number, blue : number, alpha : number, result : Color) : Color
		static fromCartesian4(cartesian : Cartesian4, result : Color) : Color
		static fromCssColorString(color : string, result : Color) : Color
		static fromHsl(hue : number, saturation : number, lightness : number, alpha : number, result : Color) : Color
		static fromRandom(options : fromRandomOptions, result : Color) : Color
		static fromRgba(rgba : number, result : Color) : Color
		static mod(left : Color, right : Color, result : Color) : Color
		static multiply(left : Color, right : Color, result : Color) : Color
		static multiplyByScalar(color : Color, scalar : number, result : Color) : Color
		static pack(value : Color, array : Array<number>, startingIndex : number) : Array<number>
		static subtract(left : Color, right : Color, result : Color) : Color
		static unpack(array : Array<number>, startingIndex : number, result : Color) : Color
		brighten(magnitude : number, result : Color) : Color
		clone(result : Color) : Color
		darken(magnitude : number, result : Color) : Color
		equals(other : Color) : boolean
		equalsEpsilon(other : Color, epsilon : number) : boolean
		toBytes(result : Array<number>) : Array<number>
		toCssColorString() : string
		toRgba() : number
		toString() : string
		withAlpha(alpha : number, result : Color) : Color

	}
	export = Color

}
declare module 'cesium/Core/Cartesian4' {
	import Color = require('cesium/Core/Color')
	class Cartesian4 
	{
		constructor(x? : number, y? : number, z? : number, w? : number);
		//Members
		w: number
		x: number
		y: number
		z: number
		static packedLength: number
		static UNIT_W: Cartesian4
		static UNIT_X: Cartesian4
		static UNIT_Y: Cartesian4
		static UNIT_Z: Cartesian4
		static ZERO: Cartesian4


		//Methods
		clone(result : Cartesian4) : Cartesian4
		equals(right : Cartesian4) : boolean
		equalsEpsilon(right : Cartesian4, relativeEpsilon? : number, absoluteEpsilon : number) : boolean
		toString() : string
		static abs(cartesian : Cartesian4, result : Cartesian4) : Cartesian4
		static add(left : Cartesian4, right : Cartesian4, result : Cartesian4) : Cartesian4
		static clone(cartesian : Cartesian4, result : Cartesian4) : Cartesian4
		static distance(left : Cartesian4, right : Cartesian4) : number
		static distanceSquared(left : Cartesian4, right : Cartesian4) : number
		static divideByScalar(cartesian : Cartesian4, scalar : number, result : Cartesian4) : Cartesian4
		static dot(left : Cartesian4, right : Cartesian4) : number
		static equals(left : Cartesian4, right : Cartesian4) : boolean
		static equalsEpsilon(left : Cartesian4, right : Cartesian4, relativeEpsilon? : number, absoluteEpsilon : number) : boolean
		static fromArray(array : Array<number>, startingIndex : number, result : Cartesian4) : Cartesian4
		static fromColor(color : Color, result : Cartesian4) : Cartesian4
		static fromElements(x : number, y : number, z : number, w : number, result : Cartesian4) : Cartesian4
		static lerp(start : Cartesian4, end : Cartesian4, t : number, result : Cartesian4) : Cartesian4
		static magnitude(cartesian : Cartesian4) : number
		static magnitudeSquared(cartesian : Cartesian4) : number
		static maximumByComponent(first : Cartesian4, second : Cartesian4, result : Cartesian4) : Cartesian4
		static maximumComponent(cartesian : Cartesian4) : number
		static minimumByComponent(first : Cartesian4, second : Cartesian4, result : Cartesian4) : Cartesian4
		static minimumComponent(cartesian : Cartesian4) : number
		static mostOrthogonalAxis(cartesian : Cartesian4, result : Cartesian4) : Cartesian4
		static multiplyByScalar(cartesian : Cartesian4, scalar : number, result : Cartesian4) : Cartesian4
		static multiplyComponents(left : Cartesian4, right : Cartesian4, result : Cartesian4) : Cartesian4
		static negate(cartesian : Cartesian4, result : Cartesian4) : Cartesian4
		static normalize(cartesian : Cartesian4, result : Cartesian4) : Cartesian4
		static pack(value : Cartesian4, array : Array<number>, startingIndex : number) : Array<number>
		static packArray(array : Array<Cartesian4>, result : Array<number>) : Array<number>
		static subtract(left : Cartesian4, right : Cartesian4, result : Cartesian4) : Cartesian4
		static unpack(array : Array<number>, startingIndex : number, result : Cartesian4) : Cartesian4
		static unpackArray(array : Array<number>, result : Array<Cartesian4>) : Array<Cartesian4>

	}
	export = Cartesian4

}
declare module 'cesium/Core/Spherical' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	class Spherical 
	{
		constructor(clock? : number, cone? : number, magnitude? : number);
		//Members


		//Methods
		static clone(spherical : Spherical, result : Spherical) : Spherical
		static equals(left : Spherical, right : Spherical) : boolean
		static equalsEpsilon(left : Spherical, right : Spherical, epsilon : number) : boolean
		static fromCartesian3(cartesian3 : Cartesian3, spherical : Spherical) : Spherical
		static normalize(spherical : Spherical, result : Spherical) : Spherical
		clone(result : Spherical) : Spherical
		equals(other : Spherical) : boolean
		equalsEpsilon(other : Spherical, epsilon : number) : boolean
		toString() : string

	}
	export = Spherical

}
declare module 'cesium/Core/Cartesian3' {
	import Cartesian4 = require('cesium/Core/Cartesian4')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import Spherical = require('cesium/Core/Spherical')
	class Cartesian3 
	{
		constructor(x? : number, y? : number, z? : number);
		//Members
		x: number
		y: number
		z: number
		static packedLength: number
		static UNIT_X: Cartesian3
		static UNIT_Y: Cartesian3
		static UNIT_Z: Cartesian3
		static ZERO: Cartesian3


		//Methods
		clone(result : Cartesian3) : Cartesian3
		equals(right : Cartesian3) : boolean
		equalsEpsilon(right : Cartesian3, relativeEpsilon? : number, absoluteEpsilon : number) : boolean
		toString() : string
		static abs(cartesian : Cartesian3, result : Cartesian3) : Cartesian3
		static add(left : Cartesian3, right : Cartesian3, result : Cartesian3) : Cartesian3
		static angleBetween(left : Cartesian3, right : Cartesian3) : number
		static clone(cartesian : Cartesian3, result : Cartesian3) : Cartesian3
		static cross(left : Cartesian3, right : Cartesian3, result : Cartesian3) : Cartesian3
		static distance(left : Cartesian3, right : Cartesian3) : number
		static distanceSquared(left : Cartesian3, right : Cartesian3) : number
		static divideByScalar(cartesian : Cartesian3, scalar : number, result : Cartesian3) : Cartesian3
		static dot(left : Cartesian3, right : Cartesian3) : number
		static equals(left : Cartesian3, right : Cartesian3) : boolean
		static equalsEpsilon(left : Cartesian3, right : Cartesian3, relativeEpsilon? : number, absoluteEpsilon : number) : boolean
		static fromArray(array : Array<number>, startingIndex : number, result : Cartesian3) : Cartesian3
		static fromCartesian4(cartesian : Cartesian4, result : Cartesian3) : Cartesian3
		static fromDegrees(longitude : number, latitude : number, height : number, ellipsoid : Ellipsoid, result : Cartesian3) : Cartesian3
		static fromDegreesArray(coordinates : Array<number>, ellipsoid : Ellipsoid, result : Array<Cartesian3>) : Array<Cartesian3>
		static fromDegreesArrayHeights(coordinates : Array<number>, ellipsoid : Ellipsoid, result : Array<Cartesian3>) : Array<Cartesian3>
		static fromElements(x : number, y : number, z : number, result : Cartesian3) : Cartesian3
		static fromRadians(longitude : number, latitude : number, height : number, ellipsoid : Ellipsoid, result : Cartesian3) : Cartesian3
		static fromRadiansArray(coordinates : Array<number>, ellipsoid : Ellipsoid, result : Array<Cartesian3>) : Array<Cartesian3>
		static fromRadiansArrayHeights(coordinates : Array<number>, ellipsoid : Ellipsoid, result : Array<Cartesian3>) : Array<Cartesian3>
		static fromSpherical(spherical : Spherical, result : Cartesian3) : Cartesian3
		static lerp(start : Cartesian3, end : Cartesian3, t : number, result : Cartesian3) : Cartesian3
		static magnitude(cartesian : Cartesian3) : number
		static magnitudeSquared(cartesian : Cartesian3) : number
		static maximumByComponent(first : Cartesian3, second : Cartesian3, result : Cartesian3) : Cartesian3
		static maximumComponent(cartesian : Cartesian3) : number
		static minimumByComponent(first : Cartesian3, second : Cartesian3, result : Cartesian3) : Cartesian3
		static minimumComponent(cartesian : Cartesian3) : number
		static mostOrthogonalAxis(cartesian : Cartesian3, result : Cartesian3) : Cartesian3
		static multiplyByScalar(cartesian : Cartesian3, scalar : number, result : Cartesian3) : Cartesian3
		static multiplyComponents(left : Cartesian3, right : Cartesian3, result : Cartesian3) : Cartesian3
		static negate(cartesian : Cartesian3, result : Cartesian3) : Cartesian3
		static normalize(cartesian : Cartesian3, result : Cartesian3) : Cartesian3
		static pack(value : Cartesian3, array : Array<number>, startingIndex : number) : Array<number>
		static packArray(array : Array<Cartesian3>, result : Array<number>) : Array<number>
		static subtract(left : Cartesian3, right : Cartesian3, result : Cartesian3) : Cartesian3
		static unpack(array : Array<number>, startingIndex : number, result : Cartesian3) : Cartesian3
		static unpackArray(array : Array<number>, result : Array<Cartesian3>) : Array<Cartesian3>

	}
	export = Cartesian3

}
declare module 'cesium/Core/Cartographic' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	class Cartographic 
	{
		constructor(longitude? : number, latitude? : number, height? : number);
		//Members
		static ZERO: Cartographic
		height: number
		latitude: number
		longitude: number


		//Methods
		static clone(cartographic : Cartographic, result : Cartographic) : Cartographic
		static equals(left : Cartographic, right : Cartographic) : boolean
		static equalsEpsilon(left : Cartographic, right : Cartographic, epsilon? : number) : boolean
		static fromCartesian(cartesian : Cartesian3, ellipsoid : Ellipsoid, result : Cartographic) : Cartographic
		static fromDegrees(longitude : number, latitude : number, height : number, result : Cartographic) : Cartographic
		static fromRadians(longitude : number, latitude : number, height : number, result : Cartographic) : Cartographic
		clone(result : Cartographic) : Cartographic
		equals(right : Cartographic) : boolean
		equalsEpsilon(right : Cartographic, epsilon? : number) : boolean
		toString() : string

	}
	export = Cartographic

}
declare module 'cesium/Core/Ellipsoid' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Cartographic = require('cesium/Core/Cartographic')
	class Ellipsoid 
	{
		constructor(x? : number, y? : number, z? : number);
		//Members
		static MOON: Ellipsoid
		static packedLength: number
		static UNIT_SPHERE: Ellipsoid
		static WGS84: Ellipsoid
		maximumRadius: number
		minimumRadius: number
		oneOverRadii: Cartesian3
		oneOverRadiiSquared: Cartesian3
		radii: Cartesian3
		radiiSquared: Cartesian3
		radiiToTheFourth: Cartesian3


		//Methods
		static clone(ellipsoid : Ellipsoid, result : Ellipsoid) : Ellipsoid
		static fromCartesian3(radii : Cartesian3) : Ellipsoid
		static pack(value : Ellipsoid, array : Array<number>, startingIndex : number) : Array<number>
		static unpack(array : Array<number>, startingIndex : number, result : Ellipsoid) : Ellipsoid
		cartesianArrayToCartographicArray(cartesians : Array<Cartesian3>, result : Array<Cartographic>) : Array<Cartographic>
		cartesianToCartographic(cartesian : Cartesian3, result : Cartographic) : Cartographic
		cartographicArrayToCartesianArray(cartographics : Array<Cartographic>, result : Array<Cartesian3>) : Array<Cartesian3>
		cartographicToCartesian(cartographic : Cartographic, result : Cartesian3) : Cartesian3
		clone(result : Ellipsoid) : Ellipsoid
		equals(right : Ellipsoid) : boolean
		geocentricSurfaceNormal(cartesian : Cartesian3, result : Cartesian3) : Cartesian3
		geodeticSurfaceNormal(cartesian : Cartesian3, result : Cartesian3) : Cartesian3
		geodeticSurfaceNormalCartographic(cartographic : Cartographic, result : Cartesian3) : Cartesian3
		scaleToGeocentricSurface(cartesian : Cartesian3, result : Cartesian3) : Cartesian3
		scaleToGeodeticSurface(cartesian : Cartesian3, result : Cartesian3) : Cartesian3
		toString() : string
		transformPositionFromScaledSpace(position : Cartesian3, result : Cartesian3) : Cartesian3
		transformPositionToScaledSpace(position : Cartesian3, result : Cartesian3) : Cartesian3

	}
	export = Ellipsoid

}
declare module 'cesium/Core/MapProjection' {
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Cartographic = require('cesium/Core/Cartographic')
	class MapProjection 
	{
		constructor();
		//Members
		ellipsoid: Ellipsoid


		//Methods
		project(cartographic : Cartographic, result : Cartesian3) : Cartesian3
		unproject(cartesian : Cartesian3, result : Cartographic) : Cartographic

	}
	export = MapProjection

}
declare module 'cesium/Core/Rectangle' {
	import Cartographic = require('cesium/Core/Cartographic')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import Cartesian3 = require('cesium/Core/Cartesian3')
	class Rectangle 
	{
		constructor(west? : number, south? : number, east? : number, north? : number);
		//Members
		static MAX_VALUE: Rectangle
		static packedLength: number
		east: number
		height: number
		north: number
		south: number
		west: number
		width: number


		//Methods
		static center(rectangle : Rectangle, result : Cartographic) : Cartographic
		static clone(rectangle : Rectangle, result : Rectangle) : Rectangle
		static computeHeight(rectangle : Rectangle) : number
		static computeWidth(rectangle : Rectangle) : number
		static contains(rectangle : Rectangle, cartographic : Cartographic) : boolean
		static equals(left : Rectangle, right : Rectangle) : boolean
		static expand(rectangle : Rectangle, cartographic : Cartographic, result : Rectangle) : Rectangle
		static fromCartesianArray(cartesians : Array<Cartesian>, ellipsoid : Ellipsoid, result : Rectangle) : Rectangle
		static fromCartographicArray(cartographics : Array<Cartographic>, result : Rectangle) : Rectangle
		static fromDegrees(west : number, south : number, east : number, north : number, result : Rectangle) : Rectangle
		static intersection(rectangle : Rectangle, otherRectangle : Rectangle, result : Rectangle) : Rectangle|void
		static northeast(rectangle : Rectangle, result : Cartographic) : Cartographic
		static northwest(rectangle : Rectangle, result : Cartographic) : Cartographic
		static pack(value : Rectangle, array : Array<number>, startingIndex : number) : Array<number>
		static southeast(rectangle : Rectangle, result : Cartographic) : Cartographic
		static southwest(rectangle : Rectangle, result : Cartographic) : Cartographic
		static subsample(rectangle : Rectangle, ellipsoid : Ellipsoid, surfaceHeight : number, result : Array<Cartesian3>) : Array<Cartesian3>
		static union(rectangle : Rectangle, otherRectangle : Rectangle, result : Rectangle) : Rectangle
		static unpack(array : Array<number>, startingIndex : number, result : Rectangle) : Rectangle
		static validate(rectangle : Rectangle) : void
		clone(result : Rectangle) : Rectangle
		equals(other : Rectangle) : boolean
		equalsEpsilon(other : Rectangle, epsilon? : number) : boolean

	}
	export = Rectangle

}
declare module 'cesium/Core/Cartesian2' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Cartesian4 = require('cesium/Core/Cartesian4')
	class Cartesian2 
	{
		constructor(x? : number, y? : number);
		//Members
		x: number
		y: number
		static packedLength: number
		static UNIT_X: Cartesian2
		static UNIT_Y: Cartesian2
		static ZERO: Cartesian2


		//Methods
		clone(result : Cartesian2) : Cartesian2
		equals(right : Cartesian2) : boolean
		equalsEpsilon(right : Cartesian2, relativeEpsilon? : number, absoluteEpsilon : number) : boolean
		toString() : string
		static abs(cartesian : Cartesian2, result : Cartesian2) : Cartesian2
		static add(left : Cartesian2, right : Cartesian2, result : Cartesian2) : Cartesian2
		static angleBetween(left : Cartesian2, right : Cartesian2) : number
		static clone(cartesian : Cartesian2, result : Cartesian2) : Cartesian2
		static distance(left : Cartesian2, right : Cartesian2) : number
		static distanceSquared(left : Cartesian2, right : Cartesian2) : number
		static divideByScalar(cartesian : Cartesian2, scalar : number, result : Cartesian2) : Cartesian2
		static dot(left : Cartesian2, right : Cartesian2) : number
		static equals(left : Cartesian2, right : Cartesian2) : boolean
		static equalsEpsilon(left : Cartesian2, right : Cartesian2, relativeEpsilon? : number, absoluteEpsilon : number) : boolean
		static fromArray(array : Array<number>, startingIndex : number, result : Cartesian2) : Cartesian2
		static fromCartesian3(cartesian : Cartesian3, result : Cartesian2) : Cartesian2
		static fromCartesian4(cartesian : Cartesian4, result : Cartesian2) : Cartesian2
		static fromElements(x : number, y : number, result : Cartesian2) : Cartesian2
		static lerp(start : Cartesian2, end : Cartesian2, t : number, result : Cartesian2) : Cartesian2
		static magnitude(cartesian : Cartesian2) : number
		static magnitudeSquared(cartesian : Cartesian2) : number
		static maximumByComponent(first : Cartesian2, second : Cartesian2, result : Cartesian2) : Cartesian2
		static maximumComponent(cartesian : Cartesian2) : number
		static minimumByComponent(first : Cartesian2, second : Cartesian2, result : Cartesian2) : Cartesian2
		static minimumComponent(cartesian : Cartesian2) : number
		static mostOrthogonalAxis(cartesian : Cartesian2, result : Cartesian2) : Cartesian2
		static multiplyByScalar(cartesian : Cartesian2, scalar : number, result : Cartesian2) : Cartesian2
		static multiplyComponents(left : Cartesian2, right : Cartesian2, result : Cartesian2) : Cartesian2
		static negate(cartesian : Cartesian2, result : Cartesian2) : Cartesian2
		static normalize(cartesian : Cartesian2, result : Cartesian2) : Cartesian2
		static pack(value : Cartesian2, array : Array<number>, startingIndex : number) : Array<number>
		static packArray(array : Array<Cartesian2>, result : Array<number>) : Array<number>
		static subtract(left : Cartesian2, right : Cartesian2, result : Cartesian2) : Cartesian2
		static unpack(array : Array<number>, startingIndex : number, result : Cartesian2) : Cartesian2
		static unpackArray(array : Array<number>, result : Array<Cartesian2>) : Array<Cartesian2>

	}
	export = Cartesian2

}
declare module 'cesium/Core/TilingScheme' {
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import MapProjection = require('cesium/Core/MapProjection')
	import Rectangle = require('cesium/Core/Rectangle')
	import Cartesian2 = require('cesium/Core/Cartesian2')
	import Cartographic = require('cesium/Core/Cartographic')
	class TilingScheme 
	{
		constructor();
		//Members
		ellipsoid: Ellipsoid
		projection: MapProjection
		rectangle: Rectangle


		//Methods
		getNumberOfXTilesAtLevel(level : number) : number
		getNumberOfYTilesAtLevel(level : number) : number
		positionToTileXY(position : Cartographic, level : number, result : Cartesian2) : Cartesian2
		rectangleToNativeRectangle(rectangle : Rectangle, result : Rectangle) : Rectangle
		tileXYToNativeRectangle(x : number, y : number, level : number, result : any) : Rectangle
		tileXYToRectangle(x : number, y : number, level : number, result : any) : Rectangle

	}
	export = TilingScheme

}
declare module 'cesium/Core/Credit' {
	class Credit 
	{
		constructor(text? : string, imageUrl? : string, link? : string);
		//Members
		imageUrl: string
		link: string
		text: string


		//Methods
		static equals(left : Credit, right : Credit) : boolean
		equals(credits : Credit) : boolean
		hasImage() : boolean
		hasLink() : boolean

	}
	export = Credit

}
declare module 'cesium/Core/ArcGisImageServerTerrainProviderOptions' {
	import TilingScheme = require('cesium/Core/TilingScheme')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import Credit = require('cesium/Core/Credit')
	interface ArcGisImageServerTerrainProviderOptions
	{
		url: string;
		token?: string;
		proxy?: Object;
		tilingScheme?: TilingScheme;
		ellipsoid?: Ellipsoid;
		credit?: Credit|string;
	}
	export = ArcGisImageServerTerrainProviderOptions

}
declare module 'cesium/Core/Event' {
	class Event 
	{
		constructor();
		//Members
		numberOfListeners: number


		//Methods
		addEventListener(listener : (()=>void), scope : any) : any
		raiseEvent(args : any) : void
		removeEventListener(listener : (()=>void), scope : any) : boolean

	}
	export = Event

}
declare module 'cesium/Core/GeographicTilingSchemeOptions' {
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import Rectangle = require('cesium/Core/Rectangle')
	interface GeographicTilingSchemeOptions
	{
		ellipsoid?: Ellipsoid;
		rectangle?: Rectangle;
		numberOfLevelZeroTilesX?: number;
		numberOfLevelZeroTilesY?: number;
	}
	export = GeographicTilingSchemeOptions

}
declare module 'cesium/Core/GeographicTilingScheme' {
	import GeographicTilingSchemeOptions = require('cesium/Core/GeographicTilingSchemeOptions')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import MapProjection = require('cesium/Core/MapProjection')
	import Rectangle = require('cesium/Core/Rectangle')
	import Cartesian2 = require('cesium/Core/Cartesian2')
	import Cartographic = require('cesium/Core/Cartographic')
	class GeographicTilingScheme 
	{
		constructor(options? : GeographicTilingSchemeOptions);
		//Members
		ellipsoid: Ellipsoid
		projection: MapProjection
		rectangle: Rectangle


		//Methods
		getNumberOfXTilesAtLevel(level : number) : number
		getNumberOfYTilesAtLevel(level : number) : number
		positionToTileXY(position : Cartographic, level : number, result : Cartesian2) : Cartesian2
		rectangleToNativeRectangle(rectangle : Rectangle, result : Rectangle) : Rectangle
		tileXYToNativeRectangle(x : number, y : number, level : number, result : any) : Rectangle
		tileXYToRectangle(x : number, y : number, level : number, result : any) : Rectangle

	}
	export = GeographicTilingScheme

}
declare module 'cesium/Core/TerrainData' {
	import Rectangle = require('cesium/Core/Rectangle')
	import Promise = require('cesium/Promise')
	import TilingScheme = require('cesium/Core/TilingScheme')
	class TerrainData 
	{
		constructor();
		//Members
		waterMask: Uint8Array|HTMLImageElement|HTMLCanvasElement


		//Methods
		interpolateHeight(rectangle : Rectangle, longitude : number, latitude : number) : number
		isChildAvailable(thisX : number, thisY : number, childX : number, childY : number) : boolean
		upsample(tilingScheme : TilingScheme, thisX : number, thisY : number, thisLevel : number, descendantX : number, descendantY : number, descendantLevel : number) : Promise<TerrainData>|void
		wasCreatedByUpsampling() : boolean

	}
	export = TerrainData

}
declare module 'cesium/Core/ArcGisImageServerTerrainProvider' {
	import ArcGisImageServerTerrainProviderOptions = require('cesium/Core/ArcGisImageServerTerrainProviderOptions')
	import Credit = require('cesium/Core/Credit')
	import Event = require('cesium/Core/Event')
	import Promise = require('cesium/Promise')
	import GeographicTilingScheme = require('cesium/Core/GeographicTilingScheme')
	import TerrainData = require('cesium/Core/TerrainData')
	class ArcGisImageServerTerrainProvider 
	{
		constructor(options? : ArcGisImageServerTerrainProviderOptions);
		//Members
		credit: Credit
		errorEvent: Event
		hasVertexNormals: boolean
		hasWaterMask: boolean
		ready: boolean
		readyPromise: Promise<boolean>
		tilingScheme: GeographicTilingScheme


		//Methods
		getLevelMaximumGeometricError(level : number) : number
		getTileDataAvailable(x : number, y : number, level : number) : boolean
		requestTileGeometry(x : number, y : number, level : number) : Promise<TerrainData>|void

	}
	export = ArcGisImageServerTerrainProvider

}
declare module 'cesium/Core/AssociativeArray' {
	class AssociativeArray 
	{
		constructor();
		//Members
		length: number
		values: Array<any>


		//Methods
		contains(key : string|number) : boolean
		get(key : string|number) : Object
		remove(key : string|number) : boolean
		removeAll() : void
		set(key : string|number, value : any) : void

	}
	export = AssociativeArray

}
declare module 'cesium/Core/Intersect' {
	class Intersect 
	{
		constructor();
		//Members
		static INSIDE: number
		static INTERSECTING: number
		static OUTSIDE: number


		//Methods

	}
	export = Intersect

}
declare module 'cesium/Core/Plane' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Cartesian4 = require('cesium/Core/Cartesian4')
	class Plane 
	{
		constructor(normal : Cartesian3, distance : number);
		//Members
		static ORIGIN_XY_PLANE: Plane
		static ORIGIN_YZ_PLANE: Plane
		static ORIGIN_ZX_PLANE: Plane
		distance: number
		normal: Cartesian3


		//Methods
		static fromCartesian4(coefficients : Cartesian4, result : Plane) : Plane
		static fromPointNormal(point : Cartesian3, normal : Cartesian3, result : Plane) : Plane
		static getPointDistance(plane : Plane, point : Cartesian3) : number

	}
	export = Plane

}
declare module 'cesium/Core/AxisAlignedBoundingBox' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Intersect = require('cesium/Core/Intersect')
	import Plane = require('cesium/Core/Plane')
	class AxisAlignedBoundingBox 
	{
		constructor(minimum? : Cartesian3, maximum? : Cartesian3, center? : Cartesian3);
		//Members
		center: Cartesian3
		maximum: Cartesian3
		minimum: Cartesian3


		//Methods
		static clone(box : AxisAlignedBoundingBox, result : AxisAlignedBoundingBox) : AxisAlignedBoundingBox
		static equals(left : AxisAlignedBoundingBox, right : AxisAlignedBoundingBox) : boolean
		static fromPoints(positions : Array<Cartesian3>, result : AxisAlignedBoundingBox) : AxisAlignedBoundingBox
		static intersectPlane(box : AxisAlignedBoundingBox, plane : Plane) : Intersect
		clone(result : AxisAlignedBoundingBox) : AxisAlignedBoundingBox
		equals(right : AxisAlignedBoundingBox) : boolean
		intersectPlane(plane : Plane) : Intersect

	}
	export = AxisAlignedBoundingBox

}
declare module 'cesium/Core/BingMapsApi' {
	class BingMapsApi 
	{
		constructor();
		//Members
		static defaultKey: string


		//Methods

	}
	export = BingMapsApi

}
declare module 'cesium/Core/BoundingRectangle' {
	import Cartesian2 = require('cesium/Core/Cartesian2')
	import Rectangle = require('cesium/Core/Rectangle')
	import Intersect = require('cesium/Core/Intersect')
	class BoundingRectangle 
	{
		constructor(x? : number, y? : number, width? : number, height? : number);
		//Members
		static packedLength: number
		height: number
		width: number
		x: number
		y: number


		//Methods
		static clone(rectangle : BoundingRectangle, result : BoundingRectangle) : BoundingRectangle
		static equals(left : BoundingRectangle, right : BoundingRectangle) : boolean
		static expand(rectangle : BoundingRectangle, point : Cartesian2, result : BoundingRectangle) : BoundingRectangle
		static fromPoints(positions : Array<Cartesian2>, result : BoundingRectangle) : BoundingRectangle
		static fromRectangle(rectangle : Rectangle, projection : any, result : BoundingRectangle) : BoundingRectangle
		static intersect(left : BoundingRectangle, right : BoundingRectangle) : Intersect
		static pack(value : BoundingRectangle, array : Array<number>, startingIndex : number) : Array<number>
		static union(left : BoundingRectangle, right : BoundingRectangle, result : BoundingRectangle) : BoundingRectangle
		static unpack(array : Array<number>, startingIndex : number, result : BoundingRectangle) : BoundingRectangle
		clone(result : BoundingRectangle) : BoundingRectangle
		equals(right : BoundingRectangle) : boolean
		intersect(right : BoundingRectangle) : Intersect

	}
	export = BoundingRectangle

}
declare module 'cesium/Core/Interval' {
	class Interval 
	{
		constructor(start? : number, stop? : number);
		//Members
		start: number
		stop: number


		//Methods

	}
	export = Interval

}
declare module 'cesium/Core/Quaternion' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Matrix3 = require('cesium/Core/Matrix3')
	class Quaternion 
	{
		constructor(x? : number, y? : number, z? : number, w? : number);
		//Members
		static IDENTITY: Quaternion
		static packedInterpolationLength: number
		static packedLength: number
		static ZERO: Quaternion
		w: number
		x: number
		y: number
		z: number


		//Methods
		static add(left : Quaternion, right : Quaternion, result : Quaternion) : Quaternion
		static clone(quaternion : Quaternion, result : Quaternion) : Quaternion
		static computeAngle(quaternion : Quaternion) : number
		static computeAxis(quaternion : Quaternion, result : Cartesian3) : Cartesian3
		static computeInnerQuadrangle(q0 : Quaternion, q1 : Quaternion, q2 : Quaternion, result : Quaternion) : Quaternion
		static conjugate(quaternion : Quaternion, result : Quaternion) : Quaternion
		static convertPackedArrayForInterpolation(packedArray : Array<number>, startingIndex : number, lastIndex : number, result? : Array<number>) : void
		static divideByScalar(quaternion : Quaternion, scalar : number, result : Quaternion) : Quaternion
		static dot(left : Quaternion, right : Quaternion) : number
		static equals(left : Quaternion, right : Quaternion) : boolean
		static equalsEpsilon(left : Quaternion, right : Quaternion, epsilon? : number) : boolean
		static exp(cartesian : Cartesian3, result : Quaternion) : Quaternion
		static fastSlerp(start : Quaternion, end : Quaternion, t : number, result : Quaternion) : Quaternion
		static fastSquad(q0 : Quaternion, q1 : Quaternion, s0 : Quaternion, s1 : Quaternion, t : number, result : Quaternion) : Quaternion
		static fromAxisAngle(axis : Cartesian3, angle : number, result : Quaternion) : Quaternion
		static fromHeadingPitchRoll(heading : number, pitch : number, roll : number, result : Quaternion) : Quaternion
		static fromRotationMatrix(matrix : Matrix3, result : Quaternion) : Quaternion
		static inverse(quaternion : Quaternion, result : Quaternion) : Quaternion
		static lerp(start : Quaternion, end : Quaternion, t : number, result : Quaternion) : Quaternion
		static log(quaternion : Quaternion, result : Cartesian3) : Cartesian3
		static magnitude(quaternion : Quaternion) : number
		static magnitudeSquared(quaternion : Quaternion) : number
		static multiply(left : Quaternion, right : Quaternion, result : Quaternion) : Quaternion
		static multiplyByScalar(quaternion : Quaternion, scalar : number, result : Quaternion) : Quaternion
		static negate(quaternion : Quaternion, result : Quaternion) : Quaternion
		static normalize(quaternion : Quaternion, result : Quaternion) : Quaternion
		static pack(value : Quaternion, array : Array<number>, startingIndex : number) : Array<number>
		static slerp(start : Quaternion, end : Quaternion, t : number, result : Quaternion) : Quaternion
		static squad(q0 : Quaternion, q1 : Quaternion, s0 : Quaternion, s1 : Quaternion, t : number, result : Quaternion) : Quaternion
		static subtract(left : Quaternion, right : Quaternion, result : Quaternion) : Quaternion
		static unpack(array : Array<number>, startingIndex : number, result : Quaternion) : Quaternion
		static unpackInterpolationResult(array : Array<number>, sourceArray : Array<number>, startingIndex : number, lastIndex : number, result : Quaternion) : Quaternion
		clone(result : Quaternion) : Quaternion
		equals(right : Quaternion) : boolean
		equalsEpsilon(right : Quaternion, epsilon? : number) : boolean
		toString() : string

	}
	export = Quaternion

}
declare module 'cesium/Core/Matrix3' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Quaternion = require('cesium/Core/Quaternion')
	class Matrix3 
	{
		constructor(column0Row0? : number, column1Row0? : number, column2Row0? : number, column0Row1? : number, column1Row1? : number, column2Row1? : number, column0Row2? : number, column1Row2? : number, column2Row2? : number);
		//Members
		length: number
		static COLUMN0ROW0: number
		static COLUMN0ROW1: number
		static COLUMN0ROW2: number
		static COLUMN1ROW0: number
		static COLUMN1ROW1: number
		static COLUMN1ROW2: number
		static COLUMN2ROW0: number
		static COLUMN2ROW1: number
		static COLUMN2ROW2: number
		static IDENTITY: Matrix3
		static packedLength: number
		static ZERO: Matrix3


		//Methods
		clone(result : Matrix3) : Matrix3
		equals(right : Matrix3) : boolean
		equalsEpsilon(right : Matrix3, epsilon? : number) : boolean
		toString() : string
		static abs(matrix : Matrix3, result : Matrix3) : Matrix3
		static add(left : Matrix3, right : Matrix3, result : Matrix3) : Matrix3
		static clone(matrix : Matrix3, result : Matrix3) : Matrix3
		static computeEigenDecomposition(matrix : Matrix3, result : any) : Object
		static determinant(matrix : Matrix3) : number
		static equals(left : Matrix3, right : Matrix3) : boolean
		static equalsEpsilon(left : Matrix3, right : Matrix3, epsilon? : number) : boolean
		static fromArray(array : Array<number>, startingIndex : number, result : Matrix3) : Matrix3
		static fromColumnMajorArray(values : Array<number>, result : Matrix3) : Matrix3
		static fromCrossProduct(the : Cartesian3, result : Matrix3) : Matrix3
		static fromQuaternion(quaternion : Quaternion, result : Matrix3) : Matrix3
		static fromRotationX(angle : number, result : Matrix3) : Matrix3
		static fromRotationY(angle : number, result : Matrix3) : Matrix3
		static fromRotationZ(angle : number, result : Matrix3) : Matrix3
		static fromRowMajorArray(values : Array<number>, result : Matrix3) : Matrix3
		static fromScale(scale : Cartesian3, result : Matrix3) : Matrix3
		static fromUniformScale(scale : number, result : Matrix3) : Matrix3
		static getColumn(matrix : Matrix3, index : number, result : Cartesian3) : Cartesian3
		static getElementIndex(row : number, column : number) : number
		static getMaximumScale(matrix : Matrix3) : number
		static getRow(matrix : Matrix3, index : number, result : Cartesian3) : Cartesian3
		static getScale(matrix : Matrix3, result : Cartesian3) : Cartesian3
		static inverse(matrix : Matrix3, result : Matrix3) : Matrix3
		static multiply(left : Matrix3, right : Matrix3, result : Matrix3) : Matrix3
		static multiplyByScalar(matrix : Matrix3, scalar : number, result : Matrix3) : Matrix3
		static multiplyByScale(matrix : Matrix3, scale : Cartesian3, result : Matrix3) : Matrix3
		static multiplyByVector(matrix : Matrix3, cartesian : Cartesian3, result : Cartesian3) : Cartesian3
		static negate(matrix : Matrix3, result : Matrix3) : Matrix3
		static pack(value : Matrix3, array : Array<number>, startingIndex : number) : Array<number>
		static setColumn(matrix : Matrix3, index : number, cartesian : Cartesian3, result : Matrix3) : Matrix3
		static setRow(matrix : Matrix3, index : number, cartesian : Cartesian3, result : Matrix3) : Matrix3
		static subtract(left : Matrix3, right : Matrix3, result : Matrix3) : Matrix3
		static toArray(matrix : Matrix3, result : Array<number>) : Array<number>
		static transpose(matrix : Matrix3, result : Matrix3) : Matrix3
		static unpack(array : Array<number>, startingIndex : number, result : Matrix3) : Matrix3

	}
	export = Matrix3

}
declare module 'cesium/Core/Occluder' {
	import BoundingSphere = require('cesium/Core/BoundingSphere')
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Rectangle = require('cesium/Core/Rectangle')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	class Occluder 
	{
		constructor(occluderBoundingSphere : BoundingSphere, cameraPosition : Cartesian3);
		//Members
		cameraPosition: Cartesian3
		position: Cartesian3
		radius: number


		//Methods
		static computeOccludeePoint(occluderBoundingSphere : BoundingSphere, occludeePosition : Cartesian3, positions : Array<Cartesian3>) : Object
		static computeOccludeePointFromRectangle(rectangle : Rectangle, ellipsoid : Ellipsoid) : Object
		static fromBoundingSphere(occluderBoundingSphere : BoundingSphere, cameraPosition : Cartesian3, result : Occluder) : Occluder
		computeVisibility(occludeeBS : BoundingSphere) : number
		isBoundingSphereVisible(occludee : BoundingSphere) : boolean
		isPointVisible(occludee : Cartesian3) : boolean

	}
	export = Occluder

}
declare module 'cesium/Core/OrientedBoundingBox' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Matrix3 = require('cesium/Core/Matrix3')
	import Interval = require('cesium/Core/Interval')
	import Rectangle = require('cesium/Core/Rectangle')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import Intersect = require('cesium/Core/Intersect')
	import Plane = require('cesium/Core/Plane')
	import Occluder = require('cesium/Core/Occluder')
	class OrientedBoundingBox 
	{
		constructor(center? : Cartesian3, halfAxes? : Matrix3);
		//Members
		center: Cartesian3
		halfAxes: Matrix3


		//Methods
		static clone(box : OrientedBoundingBox, result : OrientedBoundingBox) : OrientedBoundingBox
		static computePlaneDistances(box : OrientedBoundingBox, position : Cartesian3, direction : Cartesian3, result : Interval) : Interval
		static distanceSquaredTo(box : OrientedBoundingBox, cartesian : Cartesian3) : number
		static equals(left : OrientedBoundingBox, right : OrientedBoundingBox) : boolean
		static fromPoints(positions : Array<Cartesian3>, result : OrientedBoundingBox) : OrientedBoundingBox
		static fromRectangle(rectangle : Rectangle, minimumHeight : number, maximumHeight : number, ellipsoid : Ellipsoid, result : OrientedBoundingBox) : OrientedBoundingBox
		static intersectPlane(box : OrientedBoundingBox, plane : Plane) : Intersect
		static isOccluded(box : OrientedBoundingBox, occluder : Occluder) : boolean
		clone(result : OrientedBoundingBox) : OrientedBoundingBox
		computePlaneDistances(position : Cartesian3, direction : Cartesian3, result : Interval) : Interval
		distanceSquaredTo(cartesian : Cartesian3) : number
		equals(right : OrientedBoundingBox) : boolean
		intersectPlane(plane : Plane) : Intersect
		isOccluded(occluder : Occluder) : boolean

	}
	export = OrientedBoundingBox

}
declare module 'cesium/Scene/MapMode2D' {
	class MapMode2D 
	{
		constructor();
		//Members
		static INFINITE_SCROLL: number
		static ROTATE: number


		//Methods

	}
	export = MapMode2D

}
declare module 'cesium/Scene/SceneOptions' {
	import MapProjection = require('cesium/Core/MapProjection')
	import MapMode2D = require('cesium/Scene/MapMode2D')
	interface SceneOptions
	{
		canvas: HTMLCanvasElement;
		contextOptions?: Object;
		creditContainer?: Element;
		mapProjection?: MapProjection;
		orderIndependentTranslucency?: boolean;
		scene3DOnly?: boolean;
		terrainExaggeration?: number;
		shadows?: boolean;
		mapMode2D?: MapMode2D;
	}
	export = SceneOptions

}
declare module 'cesium/Scene/Fog' {
	class Fog 
	{
		constructor();
		//Members
		density: number
		enabled: boolean
		screenSpaceErrorFactor: number


		//Methods

	}
	export = Fog

}
declare module 'cesium/Core/DefaultProxy' {
	class DefaultProxy 
	{
		constructor(proxy : string);
		//Members


		//Methods
		getURL(resource : string) : string

	}
	export = DefaultProxy

}
declare module 'cesium/Scene/TileDiscardPolicy' {
	class TileDiscardPolicy 
	{
		constructor();
		//Members


		//Methods
		isReady() : boolean
		shouldDiscardImage(image : HTMLImageElement) : boolean

	}
	export = TileDiscardPolicy

}
declare module 'cesium/Scene/ImageryLayerFeatureInfo' {
	import Cartographic = require('cesium/Core/Cartographic')
	class ImageryLayerFeatureInfo 
	{
		constructor();
		//Members
		data: Object
		description: string
		imageryLayer: Object
		name: string
		position: Cartographic


		//Methods
		configureDescriptionFromProperties(properties : any) : void
		configureNameFromProperties(properties : any) : void

	}
	export = ImageryLayerFeatureInfo

}
declare module 'cesium/Scene/ImageryProvider' {
	import Credit = require('cesium/Core/Credit')
	import Event = require('cesium/Core/Event')
	import DefaultProxy = require('cesium/Core/DefaultProxy')
	import Promise = require('cesium/Promise')
	import Rectangle = require('cesium/Core/Rectangle')
	import TileDiscardPolicy = require('cesium/Scene/TileDiscardPolicy')
	import TilingScheme = require('cesium/Core/TilingScheme')
	import ImageryLayerFeatureInfo = require('cesium/Scene/ImageryLayerFeatureInfo')
	class ImageryProvider 
	{
		constructor();
		//Members
		credit: Credit
		defaultAlpha: number
		defaultBrightness: number
		defaultContrast: number
		defaultGamma: number
		defaultHue: number
		defaultSaturation: number
		errorEvent: Event
		hasAlphaChannel: boolean
		maximumLevel: number
		minimumLevel: number
		proxy: DefaultProxy
		ready: boolean
		readyPromise: Promise<boolean>
		rectangle: Rectangle
		tileDiscardPolicy: TileDiscardPolicy
		tileHeight: number
		tileWidth: number
		tilingScheme: TilingScheme


		//Methods
		static loadImage(url : string) : Promise<HTMLImageElement|HTMLCanvasElement>|void
		getTileCredits(x : number, y : number, level : number) : Array<Credit>
		pickFeatures(x : number, y : number, level : number, longitude : number, latitude : number) : Promise<Array<ImageryLayerFeatureInfo>>|void
		requestImage(x : number, y : number, level : number) : Promise<HTMLImageElement|HTMLCanvasElement>|void

	}
	export = ImageryProvider

}
declare module 'cesium/Scene/ImageryLayerOptions' {
	import Rectangle = require('cesium/Core/Rectangle')
	interface ImageryLayerOptions
	{
		rectangle?: Rectangle;
		alpha?: number|(()=>void);
		brightness?: number|(()=>void);
		contrast?: number|(()=>void);
		hue?: number|(()=>void);
		saturation?: number|(()=>void);
		gamma?: number|(()=>void);
		show?: boolean;
		maximumAnisotropy?: number;
		minimumTerrainLevel?: number;
		maximumTerrainLevel?: number;
	}
	export = ImageryLayerOptions

}
declare module 'cesium/Scene/ImageryLayer' {
	import ImageryProvider = require('cesium/Scene/ImageryProvider')
	import ImageryLayerOptions = require('cesium/Scene/ImageryLayerOptions')
	import Rectangle = require('cesium/Core/Rectangle')
	import Promise = require('cesium/Promise')
	class ImageryLayer 
	{
		constructor(imageryProvider : ImageryProvider, options? : ImageryLayerOptions);
		//Members
		static DEFAULT_BRIGHTNESS: number
		static DEFAULT_CONTRAST: number
		static DEFAULT_GAMMA: number
		static DEFAULT_HUE: number
		static DEFAULT_SATURATION: number
		alpha: number
		brightness: number
		contrast: number
		gamma: number
		hue: number
		imageryProvider: ImageryProvider
		rectangle: Rectangle
		saturation: number
		show: boolean


		//Methods
		destroy() : void
		getViewableRectangle() : Promise<Rectangle>
		isBaseLayer() : boolean
		isDestroyed() : boolean

	}
	export = ImageryLayer

}
declare module 'cesium/Core/Ray' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	class Ray 
	{
		constructor(origin? : Cartesian3, direction? : Cartesian3);
		//Members
		direction: Cartesian3
		origin: Cartesian3


		//Methods
		static getPoint(ray : Ray, t : number, result : Cartesian3) : Cartesian3

	}
	export = Ray

}
declare module 'cesium/Scene/ImageryLayerCollection' {
	import Event = require('cesium/Core/Event')
	import ImageryLayer = require('cesium/Scene/ImageryLayer')
	import ImageryProvider = require('cesium/Scene/ImageryProvider')
	import ImageryLayerFeatureInfo = require('cesium/Scene/ImageryLayerFeatureInfo')
	import Promise = require('cesium/Promise')
	import Ray = require('cesium/Core/Ray')
	import Scene = require('cesium/Scene/Scene')
	class ImageryLayerCollection 
	{
		constructor();
		//Members
		layerAdded: Event
		layerMoved: Event
		layerRemoved: Event
		layerShownOrHidden: Event
		length: number


		//Methods
		add(layer : ImageryLayer, index : number) : void
		addImageryProvider(imageryProvider : ImageryProvider, index : number) : ImageryLayer
		contains(layer : ImageryLayer) : boolean
		destroy() : void
		get(index : number) : ImageryLayer
		indexOf(layer : ImageryLayer) : number
		isDestroyed() : boolean
		lower(layer : ImageryLayer) : void
		lowerToBottom(layer : ImageryLayer) : void
		pickImageryLayerFeatures(ray : Ray, scene : Scene) : Promise<Array<ImageryLayerFeatureInfo>>|void
		raise(layer : ImageryLayer) : void
		raiseToTop(layer : ImageryLayer) : void
		remove(layer : ImageryLayer, destroy : boolean) : boolean
		removeAll(destroy : boolean) : void

	}
	export = ImageryLayerCollection

}
declare module 'cesium/Scene/ShadowMode' {
	class ShadowMode 
	{
		constructor();
		//Members
		static CAST_ONLY: number
		static DISABLED: number
		static ENABLED: number
		static RECEIVE_ONLY: number


		//Methods

	}
	export = ShadowMode

}
declare module 'cesium/Core/TerrainProvider' {
	import Credit = require('cesium/Core/Credit')
	import Event = require('cesium/Core/Event')
	import Promise = require('cesium/Promise')
	import TilingScheme = require('cesium/Core/TilingScheme')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import TerrainData = require('cesium/Core/TerrainData')
	class TerrainProvider 
	{
		constructor();
		//Members
		static heightmapTerrainQuality: number
		credit: Credit
		errorEvent: Event
		hasVertexNormals: boolean
		hasWaterMask: boolean
		ready: boolean
		readyPromise: Promise<boolean>
		tilingScheme: TilingScheme


		//Methods
		static getEstimatedLevelZeroGeometricErrorForAHeightmap(ellipsoid : Ellipsoid, tileImageWidth : number, numberOfTilesAtLevelZero : number) : number
		static getRegularGridIndices(width : number, height : number) : Uint16Array
		getLevelMaximumGeometricError(level : number) : number
		getTileDataAvailable(x : number, y : number, level : number) : boolean
		requestTileGeometry(x : number, y : number, level : number, throttleRequests : boolean) : Promise<TerrainData>|void

	}
	export = TerrainProvider

}
declare module 'cesium/Scene/Globe' {
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import Color = require('cesium/Core/Color')
	import ImageryLayerCollection = require('cesium/Scene/ImageryLayerCollection')
	import ShadowMode = require('cesium/Scene/ShadowMode')
	import TerrainProvider = require('cesium/Core/TerrainProvider')
	import Event = require('cesium/Core/Event')
	import Cartographic = require('cesium/Core/Cartographic')
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Ray = require('cesium/Core/Ray')
	import Scene = require('cesium/Scene/Scene')
	class Globe 
	{
		constructor(ellipsoid? : Ellipsoid);
		//Members
		baseColor: Color
		castShadows: boolean
		depthTestAgainstTerrain: boolean
		ellipsoid: Ellipsoid
		enableLighting: boolean
		imageryLayers: ImageryLayerCollection
		lightingFadeInDistance: number
		lightingFadeOutDistance: number
		maximumScreenSpaceError: number
		oceanNormalMapUrl: string
		receiveShadows: boolean
		shadows: ShadowMode
		show: boolean
		showWaterEffect: boolean
		terrainProvider: TerrainProvider
		terrainProviderChanged: Event
		tileCacheSize: number
		tileLoadProgressEvent: Event


		//Methods
		destroy() : void
		getHeight(cartographic : Cartographic) : number|void
		isDestroyed() : boolean
		pick(ray : Ray, scene : Scene, result : Cartesian3) : Cartesian3|void

	}
	export = Globe

}
declare module 'cesium/Scene/PrimitiveCollectionOptions' {
	interface PrimitiveCollectionOptions
	{
		show?: boolean;
		destroyPrimitives?: boolean;
	}
	export = PrimitiveCollectionOptions

}
declare module 'cesium/Scene/PrimitiveCollection' {
	import PrimitiveCollectionOptions = require('cesium/Scene/PrimitiveCollectionOptions')
	class PrimitiveCollection 
	{
		constructor(options? : PrimitiveCollectionOptions);
		//Members
		destroyPrimitives: boolean
		length: number
		show: boolean


		//Methods
		add(primitive : any) : Object
		contains(primitive : any) : boolean
		destroy() : void
		get(index : number) : Object
		isDestroyed() : boolean
		lower(primitive : any) : void
		lowerToBottom(primitive : any) : void
		raise(primitive : any) : void
		raiseToTop(primitive : any) : void
		remove(primitive : any) : boolean
		removeAll() : void

	}
	export = PrimitiveCollection

}
declare module 'cesium/Scene/SceneMode' {
	class SceneMode 
	{
		constructor();
		//Members
		static COLUMBUS_VIEW: number
		static MORPHING: number
		static SCENE2D: number
		static SCENE3D: number


		//Methods
		static getMorphTime(value : SceneMode) : number

	}
	export = SceneMode

}
declare module 'cesium/Scene/MoonOptions' {
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	interface MoonOptions
	{
		show?: boolean;
		textureUrl?: string;
		ellipsoid?: Ellipsoid;
		onlySunLighting?: boolean;
	}
	export = MoonOptions

}
declare module 'cesium/Scene/Moon' {
	import MoonOptions = require('cesium/Scene/MoonOptions')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	class Moon 
	{
		constructor(options? : MoonOptions);
		//Members
		ellipsoid: Ellipsoid
		onlySunLighting: boolean
		show: boolean
		textureUrl: string


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = Moon

}
declare module 'cesium/Scene/CameraEventType' {
	class CameraEventType 
	{
		constructor();
		//Members
		static LEFT_DRAG: number
		static MIDDLE_DRAG: number
		static PINCH: number
		static RIGHT_DRAG: number
		static WHEEL: number


		//Methods

	}
	export = CameraEventType

}
declare module 'cesium/Scene/ScreenSpaceCameraController' {
	import Scene = require('cesium/Scene/Scene')
	import CameraEventType = require('cesium/Scene/CameraEventType')
	class ScreenSpaceCameraController 
	{
		constructor(scene : Scene);
		//Members
		bounceAnimationTime: number
		enableCollisionDetection: boolean
		enableInputs: boolean
		enableLook: boolean
		enableRotate: boolean
		enableTilt: boolean
		enableTranslate: boolean
		enableZoom: boolean
		inertiaSpin: number
		inertiaTranslate: number
		inertiaZoom: number
		lookEventTypes: CameraEventType|Array<any>|void
		maximumMovementRatio: number
		maximumZoomDistance: number
		minimumCollisionTerrainHeight: number
		minimumPickingTerrainHeight: number
		minimumTrackBallHeight: number
		minimumZoomDistance: number
		rotateEventTypes: CameraEventType|Array<any>|void
		tiltEventTypes: CameraEventType|Array<any>|void
		translateEventTypes: CameraEventType|Array<any>|void
		zoomEventTypes: CameraEventType|Array<any>|void


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = ScreenSpaceCameraController

}
declare module 'cesium/Scene/ShadowMapOptions' {
	import Camera = require('cesium/Scene/Camera')
	interface ShadowMapOptions
	{
		context: any;
		lightCamera: Camera;
		enabled?: boolean;
		isPointLight?: boolean;
		pointLightRadius?: boolean;
		cascadesEnabled?: boolean;
		numberOfCascades?: number;
		maximumDistance?: number;
		size?: number;
		softShadows?: boolean;
		darkness?: number;
	}
	export = ShadowMapOptions

}
declare module 'cesium/Scene/ShadowMap' {
	import ShadowMapOptions = require('cesium/Scene/ShadowMapOptions')
	class ShadowMap 
	{
		constructor(options? : ShadowMapOptions);
		//Members
		darkness: number
		enabled: boolean
		maximumDistance: number
		size: number
		softShadows: boolean


		//Methods

	}
	export = ShadowMap

}
declare module 'cesium/Scene/SkyAtmosphere' {
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	class SkyAtmosphere 
	{
		constructor(ellipsoid? : Ellipsoid);
		//Members
		brightnessShift: number
		ellipsoid: Ellipsoid
		hueShift: number
		saturationShift: number
		show: boolean


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = SkyAtmosphere

}
declare module 'cesium/Scene/SkyBoxOptions' {
	interface SkyBoxOptions
	{
		sources?: Object;
		show?: boolean;
	}
	export = SkyBoxOptions

}
declare module 'cesium/Scene/SkyBox' {
	import SkyBoxOptions = require('cesium/Scene/SkyBoxOptions')
	class SkyBox 
	{
		constructor(options? : SkyBoxOptions);
		//Members
		show: boolean
		sources: Object


		//Methods
		destroy() : void
		isDestroyed() : boolean
		update() : void

	}
	export = SkyBox

}
declare module 'cesium/Scene/Sun' {
	class Sun 
	{
		constructor();
		//Members
		glowFactor: number
		show: boolean


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = Sun

}
declare module 'cesium/Scene/Scene' {
	import SceneOptions = require('cesium/Scene/SceneOptions')
	import Color = require('cesium/Core/Color')
	import Camera = require('cesium/Scene/Camera')
	import Fog = require('cesium/Scene/Fog')
	import Globe = require('cesium/Scene/Globe')
	import PrimitiveCollection = require('cesium/Scene/PrimitiveCollection')
	import ImageryLayerCollection = require('cesium/Scene/ImageryLayerCollection')
	import MapProjection = require('cesium/Core/MapProjection')
	import SceneMode = require('cesium/Scene/SceneMode')
	import Moon = require('cesium/Scene/Moon')
	import Event = require('cesium/Core/Event')
	import ScreenSpaceCameraController = require('cesium/Scene/ScreenSpaceCameraController')
	import ShadowMap = require('cesium/Scene/ShadowMap')
	import SkyAtmosphere = require('cesium/Scene/SkyAtmosphere')
	import SkyBox = require('cesium/Scene/SkyBox')
	import Sun = require('cesium/Scene/Sun')
	import TerrainProvider = require('cesium/Core/TerrainProvider')
	import Cartesian2 = require('cesium/Core/Cartesian2')
	import Cartesian3 = require('cesium/Core/Cartesian3')
	class Scene 
	{
		constructor(options? : SceneOptions);
		//Members
		backgroundColor: Color
		camera: Camera
		canvas: HTMLCanvasElement
		completeMorphOnUserInput: boolean
		debugCommandFilter: (()=>void)
		debugFrustumStatistics: Object
		debugShowCommands: boolean
		debugShowDepthFrustum: number
		debugShowFramesPerSecond: boolean
		debugShowFrustums: boolean
		debugShowGlobeDepth: boolean
		drawingBufferHeight: number
		drawingBufferWidth: number
		farToNearRatio: number
		fog: Fog
		fxaa: boolean
		globe: Globe
		groundPrimitives: PrimitiveCollection
		id: string
		imageryLayers: ImageryLayerCollection
		mapMode2D: boolean
		mapProjection: MapProjection
		maximumAliasedLineWidth: number
		maximumCubeMapSize: number
		mode: SceneMode
		moon: Moon
		morphComplete: Event
		morphStart: Event
		morphTime: number
		nearToFarDistance2D: number
		orderIndependentTranslucency: boolean
		pickPositionSupported: boolean
		postRender: Event
		preRender: Event
		primitives: PrimitiveCollection
		renderError: Event
		rethrowRenderErrors: boolean
		scene3DOnly: boolean
		screenSpaceCameraController: ScreenSpaceCameraController
		shadowMap: ShadowMap
		skyAtmosphere: SkyAtmosphere
		skyBox: SkyBox
		sun: Sun
		sunBloom: boolean
		terrainExaggeration: number
		terrainProvider: TerrainProvider
		terrainProviderChanged: Event
		useDepthPicking: boolean
		useWebVR: boolean


		//Methods
		completeMorph() : void
		destroy() : void
		drillPick(windowPosition : Cartesian2, limit : number) : Array<Object>
		isDestroyed() : boolean
		morphTo2D(duration : number) : void
		morphTo3D(duration : number) : void
		morphToColumbusView(duration : number) : void
		pick(windowPosition : Cartesian2) : Object
		pickPosition(windowPosition : Cartesian2, result : Cartesian3) : Cartesian3

	}
	export = Scene

}
declare module 'cesium/Scene/CullingVolume' {
	import Cartesian4 = require('cesium/Core/Cartesian4')
	import BoundingSphere = require('cesium/Core/BoundingSphere')
	import Intersect = require('cesium/Core/Intersect')
	class CullingVolume 
	{
		constructor(planes? : Array<Cartesian4>);
		//Members
		planes: Array<Cartesian4>


		//Methods
		static fromBoundingSphere(boundingSphere : BoundingSphere, result : CullingVolume) : CullingVolume
		computeVisibility(boundingVolume : any) : Intersect

	}
	export = CullingVolume

}
declare module 'cesium/Scene/PerspectiveFrustum' {
	import Matrix4 = require('cesium/Core/Matrix4')
	import CullingVolume = require('cesium/Scene/CullingVolume')
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Cartesian2 = require('cesium/Core/Cartesian2')
	class PerspectiveFrustum 
	{
		constructor();
		//Members
		aspectRatio: number
		far: number
		fov: number
		fovy: number
		infiniteProjectionMatrix: Matrix4
		near: number
		projectionMatrix: Matrix4
		xOffset: number
		yOffset: number


		//Methods
		clone(result : PerspectiveFrustum) : PerspectiveFrustum
		computeCullingVolume(position : Cartesian3, direction : Cartesian3, up : Cartesian3) : CullingVolume
		equals(other : PerspectiveFrustum) : boolean
		getPixelDimensions(drawingBufferWidth : number, drawingBufferHeight : number, distance : number, result : Cartesian2) : Cartesian2

	}
	export = PerspectiveFrustum

}
declare module 'cesium/Core/EasingFunction' {
	class EasingFunction 
	{
		constructor();
		//Members
		static BACK_IN: any
		static BACK_IN_OUT: any
		static BACK_OUT: any
		static BOUNCE_IN: any
		static BOUNCE_IN_OUT: any
		static BOUNCE_OUT: any
		static CIRCULAR_IN: any
		static CIRCULAR_IN_OUT: any
		static CIRCULAR_OUT: any
		static CUBIC_IN: any
		static CUBIC_IN_OUT: any
		static CUBIC_OUT: any
		static ELASTIC_IN: any
		static ELASTIC_IN_OUT: any
		static ELASTIC_OUT: any
		static EXPONENTIAL_IN: any
		static EXPONENTIAL_IN_OUT: any
		static EXPONENTIAL_OUT: any
		static LINEAR_NONE: any
		static QUADRACTIC_IN: any
		static QUADRACTIC_IN_OUT: any
		static QUADRACTIC_OUT: any
		static QUARTIC_IN: any
		static QUARTIC_IN_OUT: any
		static QUARTIC_OUT: any
		static QUINTIC_IN: any
		static QUINTIC_IN_OUT: any
		static QUINTIC_OUT: any
		static SINUSOIDAL_IN: any
		static SINUSOIDAL_IN_OUT: any
		static SINUSOIDAL_OUT: any


		//Methods

	}
	export = EasingFunction

}
declare module 'cesium/Scene/flyToOptions' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Rectangle = require('cesium/Core/Rectangle')
	import Matrix4 = require('cesium/Core/Matrix4')
	import EasingFunction = require('cesium/Core/EasingFunction')
	interface flyToOptions
	{
		destination: Cartesian3|Rectangle;
		orientation?: Object;
		duration?: number;
		complete?: any;
		cancel?: any;
		endTransform?: Matrix4;
		maximumHeight?: number;
		easingFunction?: EasingFunction|any;
	}
	export = flyToOptions

}
declare module 'cesium/Core/HeadingPitchRange' {
	class HeadingPitchRange 
	{
		constructor(heading? : number, pitch? : number, range? : number);
		//Members
		heading: number
		pitch: number
		range: number


		//Methods
		static clone(hpr : HeadingPitchRange, result : HeadingPitchRange) : HeadingPitchRange

	}
	export = HeadingPitchRange

}
declare module 'cesium/Scene/flyToBoundingSphereOptions' {
	import HeadingPitchRange = require('cesium/Core/HeadingPitchRange')
	import Matrix4 = require('cesium/Core/Matrix4')
	import EasingFunction = require('cesium/Core/EasingFunction')
	interface flyToBoundingSphereOptions
	{
		duration?: number;
		offset?: HeadingPitchRange;
		complete?: any;
		cancel?: any;
		endTransform?: Matrix4;
		maximumHeight?: number;
		easingFunction?: EasingFunction|any;
	}
	export = flyToBoundingSphereOptions

}
declare module 'cesium/Scene/setViewOptions' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Rectangle = require('cesium/Core/Rectangle')
	import Matrix4 = require('cesium/Core/Matrix4')
	interface setViewOptions
	{
		destination?: Cartesian3|Rectangle;
		orientation?: Object;
		endTransform?: Matrix4;
	}
	export = setViewOptions

}
declare module 'cesium/Scene/Camera' {
	import Scene = require('cesium/Scene/Scene')
	import Rectangle = require('cesium/Core/Rectangle')
	import Event = require('cesium/Core/Event')
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import PerspectiveFrustum = require('cesium/Scene/PerspectiveFrustum')
	import Matrix4 = require('cesium/Core/Matrix4')
	import Cartographic = require('cesium/Core/Cartographic')
	import Cartesian4 = require('cesium/Core/Cartesian4')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import BoundingSphere = require('cesium/Core/BoundingSphere')
	import flyToOptions = require('cesium/Scene/flyToOptions')
	import flyToBoundingSphereOptions = require('cesium/Scene/flyToBoundingSphereOptions')
	import Ray = require('cesium/Core/Ray')
	import Cartesian2 = require('cesium/Core/Cartesian2')
	import HeadingPitchRange = require('cesium/Core/HeadingPitchRange')
	import setViewOptions = require('cesium/Scene/setViewOptions')
	class Camera 
	{
		constructor(scene : Scene);
		//Members
		static DEFAULT_VIEW_FACTOR: number
		static DEFAULT_VIEW_RECTANGLE: Rectangle
		changed: Event
		constrainedAxis: Cartesian3
		defaultLookAmount: number
		defaultMoveAmount: number
		defaultRotateAmount: number
		defaultZoomAmount: number
		direction: Cartesian3
		directionWC: Cartesian3
		frustum: PerspectiveFrustum
		heading: number
		inverseTransform: Matrix4
		inverseViewMatrix: Matrix4
		maximumZoomFactor: number
		moveEnd: Event
		moveStart: Event
		percentageChanged: number
		pitch: number
		position: Cartesian3
		positionCartographic: Cartographic
		positionWC: Cartesian3
		right: Cartesian3
		rightWC: Cartesian3
		roll: number
		transform: Matrix4
		up: Cartesian3
		upWC: Cartesian3
		viewMatrix: Matrix4


		//Methods
		cameraToWorldCoordinates(cartesian : Cartesian4, result : Cartesian4) : Cartesian4
		cameraToWorldCoordinatesPoint(cartesian : Cartesian3, result : Cartesian3) : Cartesian3
		cameraToWorldCoordinatesVector(cartesian : Cartesian3, result : Cartesian3) : Cartesian3
		cancelFlight() : void
		computeViewRectangle(ellipsoid : Ellipsoid, result : Rectangle) : Rectangle|void
		distanceToBoundingSphere(boundingSphere : BoundingSphere) : number
		flyHome(duration : number) : void
		flyTo(options : flyToOptions) : void
		flyToBoundingSphere(boundingSphere : BoundingSphere, options : flyToBoundingSphereOptions) : void
		getMagnitude() : number
		getPickRay(windowPosition : Cartesian2, result : Ray) : Ray
		getPixelSize(boundingSphere : BoundingSphere, drawingBufferWidth : number, drawingBufferHeight : number) : number
		getRectangleCameraCoordinates(rectangle : Rectangle, result : Cartesian3) : Cartesian3
		look(axis : Cartesian3, angle : number) : void
		lookAt(target : Cartesian3, offset : Cartesian3|HeadingPitchRange) : void
		lookAtTransform(transform : Matrix4, offset : Cartesian3|HeadingPitchRange) : void
		lookDown(amount : number) : void
		lookLeft(amount : number) : void
		lookRight(amount : number) : void
		lookUp(amount : number) : void
		move(direction : Cartesian3, amount : number) : void
		moveBackward(amount : number) : void
		moveDown(amount : number) : void
		moveForward(amount : number) : void
		moveLeft(amount : number) : void
		moveRight(amount : number) : void
		moveUp(amount : number) : void
		pickEllipsoid(windowPosition : Cartesian2, ellipsoid : Ellipsoid, result : Cartesian3) : Cartesian3
		rotate(axis : Cartesian3, angle : number) : void
		rotateDown(angle : number) : void
		rotateLeft(angle : number) : void
		rotateRight(angle : number) : void
		rotateUp(angle : number) : void
		setView(options : setViewOptions) : void
		twistLeft(amount : number) : void
		twistRight(amount : number) : void
		viewBoundingSphere(boundingSphere : BoundingSphere, offset : HeadingPitchRange) : void
		worldToCameraCoordinates(cartesian : Cartesian4, result : Cartesian4) : Cartesian4
		worldToCameraCoordinatesPoint(cartesian : Cartesian3, result : Cartesian3) : Cartesian3
		worldToCameraCoordinatesVector(cartesian : Cartesian3, result : Cartesian3) : Cartesian3
		zoomIn(amount : number) : void
		zoomOut(amount : number) : void

	}
	export = Camera

}
declare module 'cesium/Core/TranslationRotationScale' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Quaternion = require('cesium/Core/Quaternion')
	class TranslationRotationScale 
	{
		constructor(translation? : Cartesian3, rotation? : Quaternion, scale? : Cartesian3);
		//Members
		rotation: Quaternion
		scale: Cartesian3
		translation: Cartesian3


		//Methods
		equals(right : TranslationRotationScale) : boolean

	}
	export = TranslationRotationScale

}
declare module 'cesium/Core/Matrix4' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Camera = require('cesium/Scene/Camera')
	import Matrix3 = require('cesium/Core/Matrix3')
	import Quaternion = require('cesium/Core/Quaternion')
	import TranslationRotationScale = require('cesium/Core/TranslationRotationScale')
	import Cartesian4 = require('cesium/Core/Cartesian4')
	class Matrix4 
	{
		constructor(column0Row0? : number, column1Row0? : number, column2Row0? : number, column3Row0? : number, column0Row1? : number, column1Row1? : number, column2Row1? : number, column3Row1? : number, column0Row2? : number, column1Row2? : number, column2Row2? : number, column3Row2? : number, column0Row3? : number, column1Row3? : number, column2Row3? : number, column3Row3? : number);
		//Members
		length: number
		static COLUMN0ROW0: number
		static COLUMN0ROW1: number
		static COLUMN0ROW2: number
		static COLUMN0ROW3: number
		static COLUMN1ROW0: number
		static COLUMN1ROW1: number
		static COLUMN1ROW2: number
		static COLUMN1ROW3: number
		static COLUMN2ROW0: number
		static COLUMN2ROW1: number
		static COLUMN2ROW2: number
		static COLUMN2ROW3: number
		static COLUMN3ROW0: number
		static COLUMN3ROW1: number
		static COLUMN3ROW2: number
		static COLUMN3ROW3: number
		static IDENTITY: Matrix4
		static packedLength: number
		static ZERO: Matrix4


		//Methods
		clone(result : Matrix4) : Matrix4
		equals(right : Matrix4) : boolean
		equalsEpsilon(right : Matrix4, epsilon? : number) : boolean
		toString() : string
		static abs(matrix : Matrix4, result : Matrix4) : Matrix4
		static add(left : Matrix4, right : Matrix4, result : Matrix4) : Matrix4
		static clone(matrix : Matrix4, result : Matrix4) : Matrix4
		static computeInfinitePerspectiveOffCenter(left : number, right : number, bottom : number, top : number, near : number, result : Matrix4) : Matrix4
		static computeOrthographicOffCenter(left : number, right : number, bottom : number, top : number, near : number, far : number, result : Matrix4) : Matrix4
		static computePerspectiveFieldOfView(fovY : number, aspectRatio : number, near : number, far : number, result : Matrix4) : Matrix4
		static computePerspectiveOffCenter(left : number, right : number, bottom : number, top : number, near : number, far : number, result : Matrix4) : Matrix4
		static computeView(position : Cartesian3, direction : Cartesian3, up : Cartesian3, right : Cartesian3, result : Matrix4) : Matrix4
		static computeViewportTransformation(viewport : any, nearDepthRange : number, farDepthRange : number, result? : Matrix4) : Matrix4
		static equals(left : Matrix4, right : Matrix4) : boolean
		static equalsEpsilon(left : Matrix4, right : Matrix4, epsilon? : number) : boolean
		static fromArray(array : Array<number>, startingIndex : number, result : Matrix4) : Matrix4
		static fromCamera(camera : Camera, result : Matrix4) : Matrix4
		static fromColumnMajorArray(values : Array<number>, result : Matrix4) : Matrix4
		static fromRotationTranslation(rotation : Matrix3, translation : Cartesian3, result : Matrix4) : Matrix4
		static fromRowMajorArray(values : Array<number>, result : Matrix4) : Matrix4
		static fromScale(scale : Cartesian3, result : Matrix4) : Matrix4
		static fromTranslation(translation : Cartesian3, result : Matrix4) : Matrix4
		static fromTranslationQuaternionRotationScale(translation : Cartesian3, rotation : Quaternion, scale : Cartesian3, result : Matrix4) : Matrix4
		static fromTranslationRotationScale(translationRotationScale : TranslationRotationScale, result : Matrix4) : Matrix4
		static fromUniformScale(scale : number, result : Matrix4) : Matrix4
		static getColumn(matrix : Matrix4, index : number, result : Cartesian4) : Cartesian4
		static getElementIndex(row : number, column : number) : number
		static getMaximumScale(matrix : Matrix4) : number
		static getRotation(matrix : Matrix4, result : Matrix3) : Matrix3
		static getRow(matrix : Matrix4, index : number, result : Cartesian4) : Cartesian4
		static getScale(matrix : Matrix4, result : Cartesian3) : Cartesian3
		static getTranslation(matrix : Matrix4, result : Cartesian3) : Cartesian3
		static inverse(matrix : Matrix4, result : Matrix4) : Matrix4
		static inverseTransformation(matrix : Matrix4, result : Matrix4) : Matrix4
		static multiply(left : Matrix4, right : Matrix4, result : Matrix4) : Matrix4
		static multiplyByMatrix3(matrix : Matrix4, rotation : Matrix3, result : Matrix4) : Matrix4
		static multiplyByPoint(matrix : Matrix4, cartesian : Cartesian3, result : Cartesian3) : Cartesian3
		static multiplyByPointAsVector(matrix : Matrix4, cartesian : Cartesian3, result : Cartesian3) : Cartesian3
		static multiplyByScalar(matrix : Matrix4, scalar : number, result : Matrix4) : Matrix4
		static multiplyByScale(matrix : Matrix4, scale : Cartesian3, result : Matrix4) : Matrix4
		static multiplyByTranslation(matrix : Matrix4, translation : Cartesian3, result : Matrix4) : Matrix4
		static multiplyByUniformScale(matrix : Matrix4, scale : number, result : Matrix4) : Matrix4
		static multiplyByVector(matrix : Matrix4, cartesian : Cartesian4, result : Cartesian4) : Cartesian4
		static multiplyTransformation(left : Matrix4, right : Matrix4, result : Matrix4) : Matrix4
		static negate(matrix : Matrix4, result : Matrix4) : Matrix4
		static pack(value : Matrix4, array : Array<number>, startingIndex : number) : Array<number>
		static setColumn(matrix : Matrix4, index : number, cartesian : Cartesian4, result : Matrix4) : Matrix4
		static setRow(matrix : Matrix4, index : number, cartesian : Cartesian4, result : Matrix4) : Matrix4
		static setTranslation(matrix : Matrix4, translation : Cartesian3, result : Cartesian4) : Matrix4
		static subtract(left : Matrix4, right : Matrix4, result : Matrix4) : Matrix4
		static toArray(matrix : Matrix4, result : Array<number>) : Array<number>
		static transpose(matrix : Matrix4, result : Matrix4) : Matrix4
		static unpack(array : Array<number>, startingIndex : number, result : Matrix4) : Matrix4

	}
	export = Matrix4

}
declare module 'cesium/Core/BoundingSphere' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Interval = require('cesium/Core/Interval')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import OrientedBoundingBox = require('cesium/Core/OrientedBoundingBox')
	import Rectangle = require('cesium/Core/Rectangle')
	import Intersect = require('cesium/Core/Intersect')
	import Plane = require('cesium/Core/Plane')
	import Occluder = require('cesium/Core/Occluder')
	import Matrix4 = require('cesium/Core/Matrix4')
	class BoundingSphere 
	{
		constructor(center? : Cartesian3, radius? : number);
		//Members
		static packedLength: number
		center: Cartesian3
		radius: number


		//Methods
		static clone(sphere : BoundingSphere, result : BoundingSphere) : BoundingSphere
		static computePlaneDistances(sphere : BoundingSphere, position : Cartesian3, direction : Cartesian3, result : Interval) : Interval
		static distanceSquaredTo(sphere : BoundingSphere, cartesian : Cartesian3) : number
		static equals(left : BoundingSphere, right : BoundingSphere) : boolean
		static expand(sphere : BoundingSphere, point : Cartesian3, result : BoundingSphere) : BoundingSphere
		static fromBoundingSpheres(boundingSpheres : Array<BoundingSphere>, result : BoundingSphere) : BoundingSphere
		static fromCornerPoints(corner : Cartesian3, oppositeCorner : Cartesian3, result : BoundingSphere) : BoundingSphere
		static fromEllipsoid(ellipsoid : Ellipsoid, result : BoundingSphere) : BoundingSphere
		static fromEncodedCartesianVertices(positionsHigh : Array<number>, positionsLow : Array<number>, result : BoundingSphere) : BoundingSphere
		static fromOrientedBoundingBox(orientedBoundingBox : OrientedBoundingBox, result : BoundingSphere) : BoundingSphere
		static fromPoints(positions : Array<Cartesian3>, result : BoundingSphere) : BoundingSphere
		static fromRectangle2D(rectangle : Rectangle, projection : any, result : BoundingSphere) : BoundingSphere
		static fromRectangle3D(rectangle : Rectangle, ellipsoid : Ellipsoid, surfaceHeight : number, result : BoundingSphere) : BoundingSphere
		static fromRectangleWithHeights2D(rectangle : Rectangle, projection : any, minimumHeight : number, maximumHeight : number, result : BoundingSphere) : BoundingSphere
		static fromVertices(positions : Array<number>, center : Cartesian3, stride : number, result : BoundingSphere) : BoundingSphere
		static intersectPlane(sphere : BoundingSphere, plane : Plane) : Intersect
		static isOccluded(sphere : BoundingSphere, occluder : Occluder) : boolean
		static pack(value : BoundingSphere, array : Array<number>, startingIndex : number) : Array<number>
		static projectTo2D(sphere : BoundingSphere, projection : any, result : BoundingSphere) : BoundingSphere
		static transform(sphere : BoundingSphere, transform : Matrix4, result : BoundingSphere) : BoundingSphere
		static transformWithoutScale(sphere : BoundingSphere, transform : Matrix4, result : BoundingSphere) : BoundingSphere
		static union(left : BoundingSphere, right : BoundingSphere, result : BoundingSphere) : BoundingSphere
		static unpack(array : Array<number>, startingIndex : number, result : BoundingSphere) : BoundingSphere
		clone(result : BoundingSphere) : BoundingSphere
		computePlaneDistances(position : Cartesian3, direction : Cartesian3, result : Interval) : Interval
		distanceSquaredTo(cartesian : Cartesian3) : number
		equals(right : BoundingSphere) : boolean
		intersectPlane(plane : Plane) : Intersect
		isOccluded(occluder : Occluder) : boolean

	}
	export = BoundingSphere

}
declare module 'cesium/Core/VertexFormat' {
	class VertexFormat 
	{
		constructor(options? : any);
		//Members
		static ALL: VertexFormat
		static DEFAULT: VertexFormat
		static packedLength: number
		static POSITION_AND_COLOR: VertexFormat
		static POSITION_AND_NORMAL: VertexFormat
		static POSITION_AND_ST: VertexFormat
		static POSITION_NORMAL_AND_ST: VertexFormat
		static POSITION_ONLY: VertexFormat
		binormal: boolean
		color: boolean
		normal: boolean
		position: boolean
		st: boolean
		tangent: boolean


		//Methods
		static clone(cartesian : VertexFormat, result : VertexFormat) : VertexFormat
		static pack(value : VertexFormat, array : Array<number>, startingIndex : number) : Array<number>
		static unpack(array : Array<number>, startingIndex : number, result : VertexFormat) : VertexFormat

	}
	export = VertexFormat

}
declare module 'cesium/Core/BoxGeometryOptions' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import VertexFormat = require('cesium/Core/VertexFormat')
	interface BoxGeometryOptions
	{
		minimum: Cartesian3;
		maximum: Cartesian3;
		vertexFormat?: VertexFormat;
	}
	export = BoxGeometryOptions

}
declare module 'cesium/Core/ComponentDatatype' {
	class ComponentDatatype 
	{
		constructor();
		//Members
		static DOUBLE: number
		static INT: number
		static UNSIGNED_INT: number
		static BYTE: number
		static FLOAT: number
		static SHORT: number
		static UNSIGNED_BYTE: number
		static UNSIGNED_SHORT: number


		//Methods
		static createArrayBufferView(componentDatatype : ComponentDatatype, buffer : ArrayBuffer, byteOffset : number, length : number) : Int8Array|Uint8Array|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array
		static createTypedArray(componentDatatype : ComponentDatatype, valuesOrLength : number|Array<any>) : Int8Array|Uint8Array|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array
		static fromName(name : string) : ComponentDatatype
		static fromTypedArray(array : TypedArray) : ComponentDatatype
		static getSizeInBytes(componentDatatype : ComponentDatatype) : number
		static validate(componentDatatype : ComponentDatatype) : boolean

	}
	export = ComponentDatatype

}
declare module 'cesium/Core/GeometryAttributeOptions' {
	import ComponentDatatype = require('cesium/Core/ComponentDatatype')
	interface GeometryAttributeOptions
	{
		componentDatatype?: ComponentDatatype;
		componentsPerAttribute?: number;
		normalize?: boolean;
		values?: TypedArray;
	}
	export = GeometryAttributeOptions

}
declare module 'cesium/Core/GeometryAttribute' {
	import GeometryAttributeOptions = require('cesium/Core/GeometryAttributeOptions')
	import ComponentDatatype = require('cesium/Core/ComponentDatatype')
	class GeometryAttribute 
	{
		constructor(options? : GeometryAttributeOptions);
		//Members
		componentDatatype: ComponentDatatype
		componentsPerAttribute: number
		normalize: boolean
		values: TypedArray


		//Methods

	}
	export = GeometryAttribute

}
declare module 'cesium/Core/GeometryAttributes' {
	import GeometryAttribute = require('cesium/Core/GeometryAttribute')
	class GeometryAttributes 
	{
		constructor();
		//Members
		binormal: GeometryAttribute
		color: GeometryAttribute
		normal: GeometryAttribute
		position: GeometryAttribute
		st: GeometryAttribute
		tangent: GeometryAttribute


		//Methods

	}
	export = GeometryAttributes

}
declare module 'cesium/Core/PrimitiveType' {
	class PrimitiveType 
	{
		constructor();
		//Members
		static LINE_LOOP: number
		static LINE_STRIP: number
		static LINES: number
		static POINTS: number
		static TRIANGLE_FAN: number
		static TRIANGLE_STRIP: number
		static TRIANGLES: number


		//Methods

	}
	export = PrimitiveType

}
declare module 'cesium/Core/GeometryOptions' {
	import GeometryAttributes = require('cesium/Core/GeometryAttributes')
	import PrimitiveType = require('cesium/Core/PrimitiveType')
	import BoundingSphere = require('cesium/Core/BoundingSphere')
	interface GeometryOptions
	{
		attributes: GeometryAttributes;
		primitiveType?: PrimitiveType;
		indices?: Uint16Array|Uint32Array;
		boundingSphere?: BoundingSphere;
	}
	export = GeometryOptions

}
declare module 'cesium/Core/Geometry' {
	import GeometryOptions = require('cesium/Core/GeometryOptions')
	import GeometryAttributes = require('cesium/Core/GeometryAttributes')
	import BoundingSphere = require('cesium/Core/BoundingSphere')
	import PrimitiveType = require('cesium/Core/PrimitiveType')
	class Geometry 
	{
		constructor(options? : GeometryOptions);
		//Members
		attributes: GeometryAttributes
		boundingSphere: BoundingSphere
		indices: Array<any>
		primitiveType: PrimitiveType


		//Methods
		static computeNumberOfVertices(geometry : Geometry) : number

	}
	export = Geometry

}
declare module 'cesium/Core/fromDimensionsOptions' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import VertexFormat = require('cesium/Core/VertexFormat')
	interface fromDimensionsOptions
	{
		dimensions: Cartesian3;
		vertexFormat?: VertexFormat;
	}
	export = fromDimensionsOptions

}
declare module 'cesium/Core/BoxGeometry' {
	import BoxGeometryOptions = require('cesium/Core/BoxGeometryOptions')
	import Geometry = require('cesium/Core/Geometry')
	import AxisAlignedBoundingBox = require('cesium/Core/AxisAlignedBoundingBox')
	import fromDimensionsOptions = require('cesium/Core/fromDimensionsOptions')
	class BoxGeometry 
	{
		constructor(options? : BoxGeometryOptions);
		//Members
		static packedLength: number


		//Methods
		static createGeometry(boxGeometry : BoxGeometry) : Geometry|void
		static fromAxisAlignedBoundingBox(boundingBox : AxisAlignedBoundingBox) : BoxGeometry
		static fromDimensions(options : fromDimensionsOptions) : BoxGeometry
		static pack(value : BoxGeometry, array : Array<number>, startingIndex : number) : Array<number>
		static unpack(array : Array<number>, startingIndex : number, result : BoxGeometry) : BoxGeometry

	}
	export = BoxGeometry

}
declare module 'cesium/Core/BoxOutlineGeometryOptions' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	interface BoxOutlineGeometryOptions
	{
		minimum: Cartesian3;
		maximum: Cartesian3;
	}
	export = BoxOutlineGeometryOptions

}
declare module 'cesium/Core/BoxOutlineGeometry' {
	import BoxOutlineGeometryOptions = require('cesium/Core/BoxOutlineGeometryOptions')
	import Geometry = require('cesium/Core/Geometry')
	import AxisAlignedBoundingBox = require('cesium/Core/AxisAlignedBoundingBox')
	import fromDimensionsOptions = require('cesium/Core/fromDimensionsOptions')
	class BoxOutlineGeometry 
	{
		constructor(options : BoxOutlineGeometryOptions);
		//Members
		static packedLength: number


		//Methods
		static createGeometry(boxGeometry : BoxOutlineGeometry) : Geometry|void
		static fromAxisAlignedBoundingBox(boundingBox : AxisAlignedBoundingBox) : BoxOutlineGeometry
		static fromDimensions(options : fromDimensionsOptions) : BoxOutlineGeometry
		static pack(value : BoxOutlineGeometry, array : Array<number>, startingIndex : number) : Array<number>
		static unpack(array : Array<number>, startingIndex : number, result : BoxOutlineGeometry) : BoxOutlineGeometry

	}
	export = BoxOutlineGeometry

}
declare module 'cesium/Core/CatmullRomSplineOptions' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	interface CatmullRomSplineOptions
	{
		times: Array<number>;
		points: Array<Cartesian3>;
		firstTangent?: Cartesian3;
		lastTangent?: Cartesian3;
	}
	export = CatmullRomSplineOptions

}
declare module 'cesium/Core/CatmullRomSpline' {
	import CatmullRomSplineOptions = require('cesium/Core/CatmullRomSplineOptions')
	import Cartesian3 = require('cesium/Core/Cartesian3')
	class CatmullRomSpline 
	{
		constructor(options? : CatmullRomSplineOptions);
		//Members
		firstTangent: Cartesian3
		lastTangent: Cartesian3
		points: Array<Cartesian3>
		times: Array<number>


		//Methods
		evaluate(time : number, result : Cartesian3) : Cartesian3
		findTimeInterval(time : number) : number

	}
	export = CatmullRomSpline

}
declare module 'cesium/Core/CesiumTerrainProviderOptions' {
	import DefaultProxy = require('cesium/Core/DefaultProxy')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import Credit = require('cesium/Core/Credit')
	interface CesiumTerrainProviderOptions
	{
		url: string;
		proxy?: DefaultProxy;
		requestVertexNormals?: boolean;
		requestWaterMask?: boolean;
		ellipsoid?: Ellipsoid;
		credit?: Credit|string;
	}
	export = CesiumTerrainProviderOptions

}
declare module 'cesium/Core/CesiumTerrainProvider' {
	import CesiumTerrainProviderOptions = require('cesium/Core/CesiumTerrainProviderOptions')
	import Credit = require('cesium/Core/Credit')
	import Event = require('cesium/Core/Event')
	import Promise = require('cesium/Promise')
	import GeographicTilingScheme = require('cesium/Core/GeographicTilingScheme')
	import TerrainData = require('cesium/Core/TerrainData')
	class CesiumTerrainProvider 
	{
		constructor(options? : CesiumTerrainProviderOptions);
		//Members
		credit: Credit
		errorEvent: Event
		hasVertexNormals: boolean
		hasWaterMask: boolean
		ready: boolean
		readyPromise: Promise<boolean>
		requestVertexNormals: boolean
		requestWaterMask: boolean
		tilingScheme: GeographicTilingScheme


		//Methods
		getLevelMaximumGeometricError(level : number) : number
		getTileDataAvailable(x : number, y : number, level : number) : boolean
		requestTileGeometry(x : number, y : number, level : number, throttleRequests : boolean) : Promise<TerrainData>|void

	}
	export = CesiumTerrainProvider

}
declare module 'cesium/Core/CircleGeometryOptions' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import VertexFormat = require('cesium/Core/VertexFormat')
	interface CircleGeometryOptions
	{
		center: Cartesian3;
		radius: number;
		ellipsoid?: Ellipsoid;
		height?: number;
		granularity?: number;
		vertexFormat?: VertexFormat;
		extrudedHeight?: number;
		stRotation?: number;
	}
	export = CircleGeometryOptions

}
declare module 'cesium/Core/CircleGeometry' {
	import CircleGeometryOptions = require('cesium/Core/CircleGeometryOptions')
	import Geometry = require('cesium/Core/Geometry')
	class CircleGeometry 
	{
		constructor(options? : CircleGeometryOptions);
		//Members
		static packedLength: number


		//Methods
		static createGeometry(circleGeometry : CircleGeometry) : Geometry|void
		static pack(value : CircleGeometry, array : Array<number>, startingIndex : number) : Array<number>
		static unpack(array : Array<number>, startingIndex : number, result : CircleGeometry) : CircleGeometry

	}
	export = CircleGeometry

}
declare module 'cesium/Core/CircleOutlineGeometryOptions' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	interface CircleOutlineGeometryOptions
	{
		center: Cartesian3;
		radius: number;
		ellipsoid?: Ellipsoid;
		height?: number;
		granularity?: number;
		extrudedHeight?: number;
		numberOfVerticalLines?: number;
	}
	export = CircleOutlineGeometryOptions

}
declare module 'cesium/Core/CircleOutlineGeometry' {
	import CircleOutlineGeometryOptions = require('cesium/Core/CircleOutlineGeometryOptions')
	import Geometry = require('cesium/Core/Geometry')
	class CircleOutlineGeometry 
	{
		constructor(options? : CircleOutlineGeometryOptions);
		//Members
		static packedLength: number


		//Methods
		static createGeometry(circleGeometry : CircleOutlineGeometry) : Geometry|void
		static pack(value : CircleOutlineGeometry, array : Array<number>, startingIndex : number) : Array<number>
		static unpack(array : Array<number>, startingIndex : number, result : CircleOutlineGeometry) : CircleOutlineGeometry

	}
	export = CircleOutlineGeometry

}
declare module 'cesium/Core/TimeStandard' {
	class TimeStandard 
	{
		constructor();
		//Members
		static TAI: any
		static UTC: any


		//Methods

	}
	export = TimeStandard

}
declare module 'cesium/Core/LeapSecond' {
	import JulianDate = require('cesium/Core/JulianDate')
	class LeapSecond 
	{
		constructor(date? : JulianDate, offset? : number);
		//Members
		julianDate: JulianDate
		offset: number


		//Methods

	}
	export = LeapSecond

}
declare module 'cesium/Core/GregorianDate' {
	class GregorianDate 
	{
		constructor();
		//Members
		day: number
		hour: number
		isLeapSecond: boolean
		millisecond: number
		minute: number
		month: number
		second: number
		year: number


		//Methods

	}
	export = GregorianDate

}
declare module 'cesium/Core/JulianDate' {
	import TimeStandard = require('cesium/Core/TimeStandard')
	import LeapSecond = require('cesium/Core/LeapSecond')
	import GregorianDate = require('cesium/Core/GregorianDate')
	class JulianDate 
	{
		constructor(julianDayNumber? : number, secondsOfDay? : number, timeStandard? : TimeStandard);
		//Members
		static leapSeconds: Array<LeapSecond>
		dayNumber: number
		secondsOfDay: number


		//Methods
		static addDays(julianDate : JulianDate, days : number, result : JulianDate) : JulianDate
		static addHours(julianDate : JulianDate, hours : number, result : JulianDate) : JulianDate
		static addMinutes(julianDate : JulianDate, minutes : number, result : JulianDate) : JulianDate
		static addSeconds(julianDate : JulianDate, seconds : number, result : JulianDate) : JulianDate
		static clone(julianDate : JulianDate, result : JulianDate) : JulianDate
		static compare(left : JulianDate, right : JulianDate) : number
		static computeTaiMinusUtc(julianDate : JulianDate) : number
		static daysDifference(left : JulianDate, right : JulianDate) : number
		static equals(left : JulianDate, right : JulianDate) : boolean
		static equalsEpsilon(left : JulianDate, right : JulianDate, epsilon? : number) : boolean
		static fromDate(date : Date, result : JulianDate) : JulianDate
		static fromIso8601(iso8601String : string, result : JulianDate) : JulianDate
		static greaterThan(left : JulianDate, right : JulianDate) : boolean
		static greaterThanOrEquals(left : JulianDate, right : JulianDate) : boolean
		static lessThan(left : JulianDate, right : JulianDate) : boolean
		static lessThanOrEquals(left : JulianDate, right : JulianDate) : boolean
		static now(result : JulianDate) : JulianDate
		static secondsDifference(left : JulianDate, right : JulianDate) : number
		static toDate(julianDate : JulianDate) : Date
		static toGregorianDate(julianDate : JulianDate, result : GregorianDate) : GregorianDate
		static toIso8601(julianDate : JulianDate, precision : number) : string
		static totalDays(julianDate : JulianDate) : number
		clone(result : JulianDate) : JulianDate
		equals(right : JulianDate) : boolean
		equalsEpsilon(right : JulianDate, epsilon? : number) : boolean
		toString() : string

	}
	export = JulianDate

}
declare module 'cesium/Core/ClockStep' {
	class ClockStep 
	{
		constructor();
		//Members
		static SYSTEM_CLOCK: number
		static SYSTEM_CLOCK_MULTIPLIER: number
		static TICK_DEPENDENT: number


		//Methods

	}
	export = ClockStep

}
declare module 'cesium/Core/ClockRange' {
	class ClockRange 
	{
		constructor();
		//Members
		static CLAMPED: number
		static LOOP_STOP: number
		static UNBOUNDED: number


		//Methods

	}
	export = ClockRange

}
declare module 'cesium/Core/ClockOptions' {
	import JulianDate = require('cesium/Core/JulianDate')
	import ClockStep = require('cesium/Core/ClockStep')
	import ClockRange = require('cesium/Core/ClockRange')
	interface ClockOptions
	{
		startTime?: JulianDate;
		stopTime?: JulianDate;
		currentTime?: JulianDate;
		multiplier?: number;
		clockStep?: ClockStep;
		clockRange?: ClockRange;
		canAnimate?: boolean;
		shouldAnimate?: boolean;
	}
	export = ClockOptions

}
declare module 'cesium/Core/Clock' {
	import ClockOptions = require('cesium/Core/ClockOptions')
	import ClockRange = require('cesium/Core/ClockRange')
	import ClockStep = require('cesium/Core/ClockStep')
	import JulianDate = require('cesium/Core/JulianDate')
	import Event = require('cesium/Core/Event')
	class Clock 
	{
		constructor(options? : ClockOptions);
		//Members
		canAnimate: boolean
		clockRange: ClockRange
		clockStep: ClockStep
		currentTime: JulianDate
		multiplier: number
		onTick: Event
		shouldAnimate: boolean
		startTime: JulianDate
		stopTime: JulianDate


		//Methods
		tick() : JulianDate

	}
	export = Clock

}
declare module 'cesium/Core/ColorGeometryInstanceAttribute' {
	import ComponentDatatype = require('cesium/Core/ComponentDatatype')
	import Color = require('cesium/Core/Color')
	class ColorGeometryInstanceAttribute 
	{
		constructor(red? : number, green? : number, blue? : number, alpha? : number);
		//Members
		componentDatatype: ComponentDatatype
		componentsPerAttribute: number
		normalize: boolean
		value: Uint8Array


		//Methods
		static equals(left : ColorGeometryInstanceAttribute, right : ColorGeometryInstanceAttribute) : boolean
		static fromColor(color : Color) : ColorGeometryInstanceAttribute
		static toValue(color : Color, result : Uint8Array) : Uint8Array

	}
	export = ColorGeometryInstanceAttribute

}
declare module 'cesium/Core/CornerType' {
	class CornerType 
	{
		constructor();
		//Members
		static BEVELED: number
		static MITERED: number
		static ROUNDED: number


		//Methods

	}
	export = CornerType

}
declare module 'cesium/Core/CorridorGeometryOptions' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import VertexFormat = require('cesium/Core/VertexFormat')
	import CornerType = require('cesium/Core/CornerType')
	interface CorridorGeometryOptions
	{
		positions: Array<Cartesian3>;
		width: number;
		ellipsoid?: Ellipsoid;
		granularity?: number;
		height?: number;
		extrudedHeight?: number;
		vertexFormat?: VertexFormat;
		cornerType?: CornerType;
	}
	export = CorridorGeometryOptions

}
declare module 'cesium/Core/CorridorGeometry' {
	import CorridorGeometryOptions = require('cesium/Core/CorridorGeometryOptions')
	import Geometry = require('cesium/Core/Geometry')
	class CorridorGeometry 
	{
		constructor(options? : CorridorGeometryOptions);
		//Members
		packedLength: number


		//Methods
		static createGeometry(corridorGeometry : CorridorGeometry) : Geometry|void
		static pack(value : CorridorGeometry, array : Array<number>, startingIndex : number) : Array<number>
		static unpack(array : Array<number>, startingIndex : number, result : CorridorGeometry) : CorridorGeometry

	}
	export = CorridorGeometry

}
declare module 'cesium/Core/CorridorOutlineGeometryOptions' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import CornerType = require('cesium/Core/CornerType')
	interface CorridorOutlineGeometryOptions
	{
		positions: Array<Cartesian3>;
		width: number;
		ellipsoid?: Ellipsoid;
		granularity?: number;
		height?: number;
		extrudedHeight?: number;
		cornerType?: CornerType;
	}
	export = CorridorOutlineGeometryOptions

}
declare module 'cesium/Core/CorridorOutlineGeometry' {
	import CorridorOutlineGeometryOptions = require('cesium/Core/CorridorOutlineGeometryOptions')
	import Geometry = require('cesium/Core/Geometry')
	class CorridorOutlineGeometry 
	{
		constructor(options? : CorridorOutlineGeometryOptions);
		//Members
		packedLength: number


		//Methods
		static createGeometry(corridorOutlineGeometry : CorridorOutlineGeometry) : Geometry|void
		static pack(value : CorridorOutlineGeometry, array : Array<number>, startingIndex : number) : Array<number>
		static unpack(array : Array<number>, startingIndex : number, result : CorridorOutlineGeometry) : CorridorOutlineGeometry

	}
	export = CorridorOutlineGeometry

}
declare module 'cesium/Core/CubicRealPolynomial' {
	class CubicRealPolynomial 
	{
		constructor();
		//Members


		//Methods
		static computeDiscriminant(a : number, b : number, c : number, d : number) : number
		static computeRealRoots(a : number, b : number, c : number, d : number) : Array<number>

	}
	export = CubicRealPolynomial

}
declare module 'cesium/Core/CylinderGeometryOptions' {
	import VertexFormat = require('cesium/Core/VertexFormat')
	interface CylinderGeometryOptions
	{
		length: number;
		topRadius: number;
		bottomRadius: number;
		slices?: number;
		vertexFormat?: VertexFormat;
	}
	export = CylinderGeometryOptions

}
declare module 'cesium/Core/CylinderGeometry' {
	import CylinderGeometryOptions = require('cesium/Core/CylinderGeometryOptions')
	import Geometry = require('cesium/Core/Geometry')
	class CylinderGeometry 
	{
		constructor(options? : CylinderGeometryOptions);
		//Members
		static packedLength: number


		//Methods
		static createGeometry(cylinderGeometry : CylinderGeometry) : Geometry|void
		static pack(value : CylinderGeometry, array : Array<number>, startingIndex : number) : Array<number>
		static unpack(array : Array<number>, startingIndex : number, result : CylinderGeometry) : CylinderGeometry

	}
	export = CylinderGeometry

}
declare module 'cesium/Core/CylinderOutlineGeometryOptions' {
	interface CylinderOutlineGeometryOptions
	{
		length: number;
		topRadius: number;
		bottomRadius: number;
		slices?: number;
		numberOfVerticalLines?: number;
	}
	export = CylinderOutlineGeometryOptions

}
declare module 'cesium/Core/CylinderOutlineGeometry' {
	import CylinderOutlineGeometryOptions = require('cesium/Core/CylinderOutlineGeometryOptions')
	import Geometry = require('cesium/Core/Geometry')
	class CylinderOutlineGeometry 
	{
		constructor(options? : CylinderOutlineGeometryOptions);
		//Members
		static packedLength: number


		//Methods
		static createGeometry(cylinderGeometry : CylinderOutlineGeometry) : Geometry|void
		static pack(value : CylinderOutlineGeometry, array : Array<number>, startingIndex : number) : Array<number>
		static unpack(array : Array<number>, startingIndex : number, result : CylinderOutlineGeometry) : CylinderOutlineGeometry

	}
	export = CylinderOutlineGeometry

}
declare module 'cesium/Core/DeveloperError' {
	class DeveloperError 
	{
		constructor(message? : string);
		//Members
		message: string
		name: string
		stack: string


		//Methods

	}
	export = DeveloperError

}
declare module 'cesium/Core/EllipseGeometryOptions' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import VertexFormat = require('cesium/Core/VertexFormat')
	interface EllipseGeometryOptions
	{
		center: Cartesian3;
		semiMajorAxis: number;
		semiMinorAxis: number;
		ellipsoid?: Ellipsoid;
		height?: number;
		extrudedHeight?: number;
		rotation?: number;
		stRotation?: number;
		granularity?: number;
		vertexFormat?: VertexFormat;
	}
	export = EllipseGeometryOptions

}
declare module 'cesium/Core/EllipseGeometry' {
	import EllipseGeometryOptions = require('cesium/Core/EllipseGeometryOptions')
	import Geometry = require('cesium/Core/Geometry')
	class EllipseGeometry 
	{
		constructor(options? : EllipseGeometryOptions);
		//Members
		static packedLength: number


		//Methods
		static createGeometry(ellipseGeometry : EllipseGeometry) : Geometry|void
		static pack(value : EllipseGeometry, array : Array<number>, startingIndex : number) : Array<number>
		static unpack(array : Array<number>, startingIndex : number, result : EllipseGeometry) : EllipseGeometry

	}
	export = EllipseGeometry

}
declare module 'cesium/Core/EllipseOutlineGeometryOptions' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	interface EllipseOutlineGeometryOptions
	{
		center: Cartesian3;
		semiMajorAxis: number;
		semiMinorAxis: number;
		ellipsoid?: Ellipsoid;
		height?: number;
		extrudedHeight?: number;
		rotation?: number;
		granularity?: number;
		numberOfVerticalLines?: number;
	}
	export = EllipseOutlineGeometryOptions

}
declare module 'cesium/Core/EllipseOutlineGeometry' {
	import EllipseOutlineGeometryOptions = require('cesium/Core/EllipseOutlineGeometryOptions')
	import Geometry = require('cesium/Core/Geometry')
	class EllipseOutlineGeometry 
	{
		constructor(options? : EllipseOutlineGeometryOptions);
		//Members
		static packedLength: number


		//Methods
		static createGeometry(ellipseGeometry : EllipseOutlineGeometry) : Geometry|void
		static pack(value : EllipseOutlineGeometry, array : Array<number>, startingIndex : number) : Array<number>
		static unpack(array : Array<number>, startingIndex : number, result : EllipseOutlineGeometry) : EllipseOutlineGeometry

	}
	export = EllipseOutlineGeometry

}
declare module 'cesium/Core/EllipsoidGeodesic' {
	import Cartographic = require('cesium/Core/Cartographic')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	class EllipsoidGeodesic 
	{
		constructor(start? : Cartographic, end? : Cartographic, ellipsoid? : Ellipsoid);
		//Members
		ellipsoid: Ellipsoid
		end: Cartographic
		endHeading: number
		start: Cartographic
		startHeading: number
		surfaceDistance: number


		//Methods
		interpolateUsingFraction(fraction : number) : Cartographic
		interpolateUsingSurfaceDistance(distance : number) : Cartographic
		setEndPoints(start : Cartographic, end : Cartographic) : void

	}
	export = EllipsoidGeodesic

}
declare module 'cesium/Core/EllipsoidGeometryOptions' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import VertexFormat = require('cesium/Core/VertexFormat')
	interface EllipsoidGeometryOptions
	{
		radii?: Cartesian3;
		stackPartitions?: number;
		slicePartitions?: number;
		vertexFormat?: VertexFormat;
	}
	export = EllipsoidGeometryOptions

}
declare module 'cesium/Core/EllipsoidGeometry' {
	import EllipsoidGeometryOptions = require('cesium/Core/EllipsoidGeometryOptions')
	import Geometry = require('cesium/Core/Geometry')
	class EllipsoidGeometry 
	{
		constructor(options? : EllipsoidGeometryOptions);
		//Members
		static packedLength: number


		//Methods
		static createGeometry(ellipsoidGeometry : EllipsoidGeometry) : Geometry|void
		static pack(value : EllipsoidGeometry, array : Array<number>, startingIndex : number) : Array<number>
		static unpack(array : Array<number>, startingIndex : number, result : EllipsoidGeometry) : EllipsoidGeometry

	}
	export = EllipsoidGeometry

}
declare module 'cesium/Core/EllipsoidOutlineGeometryOptions' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	interface EllipsoidOutlineGeometryOptions
	{
		radii?: Cartesian3;
		stackPartitions?: number;
		slicePartitions?: number;
		subdivisions?: number;
	}
	export = EllipsoidOutlineGeometryOptions

}
declare module 'cesium/Core/EllipsoidOutlineGeometry' {
	import EllipsoidOutlineGeometryOptions = require('cesium/Core/EllipsoidOutlineGeometryOptions')
	import Geometry = require('cesium/Core/Geometry')
	class EllipsoidOutlineGeometry 
	{
		constructor(options? : EllipsoidOutlineGeometryOptions);
		//Members
		static packedLength: number


		//Methods
		static createGeometry(ellipsoidGeometry : EllipsoidOutlineGeometry) : Geometry|void
		static pack(value : EllipsoidOutlineGeometry, array : Array<number>, startingIndex : number) : Array<number>
		static unpack(array : Array<number>, startingIndex : number, result : EllipsoidOutlineGeometry) : EllipsoidOutlineGeometry

	}
	export = EllipsoidOutlineGeometry

}
declare module 'cesium/Core/EllipsoidTangentPlane' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import Plane = require('cesium/Core/Plane')
	import Cartesian2 = require('cesium/Core/Cartesian2')
	class EllipsoidTangentPlane 
	{
		constructor(origin : Cartesian3, ellipsoid? : Ellipsoid);
		//Members
		ellipsoid: Ellipsoid
		origin: Cartesian3
		plane: Plane
		xAxis: Cartesian3
		yAxis: Cartesian3


		//Methods
		static fromPoints(ellipsoid : Ellipsoid, cartesians : Cartesian3) : void
		projectPointOntoPlane(cartesian : Cartesian3, result : Cartesian2) : Cartesian2
		projectPointsOntoEllipsoid(cartesians : Array<Cartesian2>, result : Array<Cartesian3>) : Array<Cartesian3>
		projectPointsOntoPlane(cartesians : Array<Cartesian3>, result : Array<Cartesian2>) : Array<Cartesian2>
		projectPointsToNearestOnPlane(cartesians : Array<Cartesian3>, result : Array<Cartesian2>) : Array<Cartesian2>
		projectPointToNearestOnPlane(cartesian : Cartesian3, result : Cartesian2) : Cartesian2

	}
	export = EllipsoidTangentPlane

}
declare module 'cesium/Core/EllipsoidTerrainProviderOptions' {
	import TilingScheme = require('cesium/Core/TilingScheme')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	interface EllipsoidTerrainProviderOptions
	{
		tilingScheme?: TilingScheme;
		ellipsoid?: Ellipsoid;
	}
	export = EllipsoidTerrainProviderOptions

}
declare module 'cesium/Core/EllipsoidTerrainProvider' {
	import EllipsoidTerrainProviderOptions = require('cesium/Core/EllipsoidTerrainProviderOptions')
	import Credit = require('cesium/Core/Credit')
	import Event = require('cesium/Core/Event')
	import Promise = require('cesium/Promise')
	import GeographicTilingScheme = require('cesium/Core/GeographicTilingScheme')
	import TerrainData = require('cesium/Core/TerrainData')
	class EllipsoidTerrainProvider 
	{
		constructor(options? : EllipsoidTerrainProviderOptions);
		//Members
		credit: Credit
		errorEvent: Event
		hasVertexNormals: boolean
		hasWaterMask: boolean
		ready: boolean
		readyPromise: Promise<boolean>
		tilingScheme: GeographicTilingScheme


		//Methods
		getLevelMaximumGeometricError(level : number) : number
		getTileDataAvailable(x : number, y : number, level : number) : boolean
		requestTileGeometry(x : number, y : number, level : number, throttleRequests : boolean) : Promise<TerrainData>|void

	}
	export = EllipsoidTerrainProvider

}
declare module 'cesium/Core/EventHelper' {
	import Event = require('cesium/Core/Event')
	class EventHelper 
	{
		constructor();
		//Members


		//Methods
		add(event : Event, listener : (()=>void), scope : any) : any
		removeAll() : void

	}
	export = EventHelper

}
declare module 'cesium/Core/ExtrapolationType' {
	class ExtrapolationType 
	{
		constructor();
		//Members
		static EXTRAPOLATE: number
		static HOLD: number
		static NONE: number


		//Methods

	}
	export = ExtrapolationType

}
declare module 'cesium/Core/FeatureDetection' {
	class FeatureDetection 
	{
		constructor();
		//Members


		//Methods
		static supportsFullscreen() : boolean
		static supportsTypedArrays() : boolean
		static supportsWebWorkers() : boolean

	}
	export = FeatureDetection

}
declare module 'cesium/Core/Fullscreen' {
	class Fullscreen 
	{
		constructor();
		//Members
		static changeEventName: string
		static element: Object
		static enabled: boolean
		static errorEventName: string
		static fullscreen: boolean


		//Methods
		static exitFullscreen() : void
		static requestFullscreen(element : any, vrDevice : HMDVRDevice) : void
		static supportsFullscreen() : boolean

	}
	export = Fullscreen

}
declare module 'cesium/Core/GeographicProjection' {
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Cartographic = require('cesium/Core/Cartographic')
	class GeographicProjection 
	{
		constructor(ellipsoid? : Ellipsoid);
		//Members
		ellipsoid: Ellipsoid


		//Methods
		project(cartographic : Cartographic, result : Cartesian3) : Cartesian3
		unproject(cartesian : Cartesian3, result : Cartographic) : Cartographic

	}
	export = GeographicProjection

}
declare module 'cesium/Core/GeometryInstanceOptions' {
	import Geometry = require('cesium/Core/Geometry')
	import Matrix4 = require('cesium/Core/Matrix4')
	interface GeometryInstanceOptions
	{
		geometry: Geometry;
		modelMatrix?: Matrix4;
		id?: Object;
		attributes?: Object;
	}
	export = GeometryInstanceOptions

}
declare module 'cesium/Core/GeometryInstance' {
	import GeometryInstanceOptions = require('cesium/Core/GeometryInstanceOptions')
	import Geometry = require('cesium/Core/Geometry')
	import Matrix4 = require('cesium/Core/Matrix4')
	class GeometryInstance 
	{
		constructor(options? : GeometryInstanceOptions);
		//Members
		attributes: Object
		geometry: Geometry
		id: Object
		modelMatrix: Matrix4


		//Methods

	}
	export = GeometryInstance

}
declare module 'cesium/Core/GeometryInstanceAttributeOptions' {
	import ComponentDatatype = require('cesium/Core/ComponentDatatype')
	interface GeometryInstanceAttributeOptions
	{
		componentDatatype?: ComponentDatatype;
		componentsPerAttribute?: number;
		normalize?: boolean;
		value?: Array<number>;
	}
	export = GeometryInstanceAttributeOptions

}
declare module 'cesium/Core/GeometryInstanceAttribute' {
	import GeometryInstanceAttributeOptions = require('cesium/Core/GeometryInstanceAttributeOptions')
	import ComponentDatatype = require('cesium/Core/ComponentDatatype')
	class GeometryInstanceAttribute 
	{
		constructor(options? : GeometryInstanceAttributeOptions);
		//Members
		componentDatatype: ComponentDatatype
		componentsPerAttribute: number
		normalize: boolean
		value: Array<number>


		//Methods

	}
	export = GeometryInstanceAttribute

}
declare module 'cesium/Core/GeometryPipeline' {
	import Geometry = require('cesium/Core/Geometry')
	import GeometryInstance = require('cesium/Core/GeometryInstance')
	class GeometryPipeline 
	{
		constructor();
		//Members


		//Methods
		static compressVertices(geometry : Geometry) : Geometry
		static computeBinormalAndTangent(geometry : Geometry) : Geometry
		static computeNormal(geometry : Geometry) : Geometry
		static createAttributeLocations(geometry : Geometry) : Object
		static createLineSegmentsForVectors(geometry : Geometry, attributeName : string, length : number) : Geometry
		static encodeAttribute(geometry : Geometry, attributeName : string, attributeHighName : string, attributeLowName : string) : Geometry
		static fitToUnsignedShortIndices(geometry : Geometry) : Array<Geometry>
		static projectTo2D(geometry : Geometry, attributeName : string, attributeName3D : string, attributeName2D : string, projection : any) : Geometry
		static reorderForPostVertexCache(geometry : Geometry, cacheCapacity : number) : Geometry
		static reorderForPreVertexCache(geometry : Geometry) : Geometry
		static toWireframe(geometry : Geometry) : Geometry
		static transformToWorldCoordinates(instance : GeometryInstance) : GeometryInstance

	}
	export = GeometryPipeline

}
declare module 'cesium/Core/HeightmapTerrainDataOptions' {
	interface HeightmapTerrainDataOptions
	{
		heightScale?: number;
		heightOffset?: number;
		elementsPerHeight?: number;
		stride?: number;
		elementMultiplier?: number;
		isBigEndian?: boolean;
	}
	export = HeightmapTerrainDataOptions

}
declare module 'cesium/Core/HeightmapTerrainData' {
	import HeightmapTerrainDataOptions = require('cesium/Core/HeightmapTerrainDataOptions')
	import Rectangle = require('cesium/Core/Rectangle')
	import Promise = require('cesium/Promise')
	import TilingScheme = require('cesium/Core/TilingScheme')
	class HeightmapTerrainData 
	{
		constructor(options? : HeightmapTerrainDataOptions);
		//Members
		waterMask: Uint8Array|HTMLImageElement|HTMLCanvasElement


		//Methods
		interpolateHeight(rectangle : Rectangle, longitude : number, latitude : number) : number
		isChildAvailable(thisX : number, thisY : number, childX : number, childY : number) : boolean
		upsample(tilingScheme : TilingScheme, thisX : number, thisY : number, thisLevel : number, descendantX : number, descendantY : number, descendantLevel : number) : Promise<HeightmapTerrainData>|void
		wasCreatedByUpsampling() : boolean

	}
	export = HeightmapTerrainData

}
declare module 'cesium/Core/HermitePolynomialApproximation' {
	class HermitePolynomialApproximation 
	{
		constructor();
		//Members


		//Methods
		static getRequiredDataPoints(degree : number, inputOrder : number) : number
		static interpolate(x : number, xTable : Array<number>, yTable : Array<number>, yStride : number, inputOrder : number, outputOrder : number, result : Array<number>) : Array<number>
		static interpolateOrderZero(x : number, xTable : Array<number>, yTable : Array<number>, yStride : number, result : Array<number>) : Array<number>

	}
	export = HermitePolynomialApproximation

}
declare module 'cesium/Core/HermiteSplineOptions' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	interface HermiteSplineOptions
	{
		times: Array<number>;
		points: Array<Cartesian3>;
		inTangents: Array<Cartesian3>;
		outTangents: Array<Cartesian3>;
	}
	export = HermiteSplineOptions

}
declare module 'cesium/Core/createC1Options' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	interface createC1Options
	{
		times: Array<number>;
		points: Array<Cartesian3>;
		tangents: Array<Cartesian3>;
	}
	export = createC1Options

}
declare module 'cesium/Core/LinearSplineOptions' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	interface LinearSplineOptions
	{
		times: Array<number>;
		points: Array<Cartesian3>;
	}
	export = LinearSplineOptions

}
declare module 'cesium/Core/LinearSpline' {
	import LinearSplineOptions = require('cesium/Core/LinearSplineOptions')
	import Cartesian3 = require('cesium/Core/Cartesian3')
	class LinearSpline 
	{
		constructor(options : LinearSplineOptions);
		//Members
		points: Array<Cartesian3>
		times: Array<number>


		//Methods
		evaluate(time : number, result : Cartesian3) : Cartesian3
		findTimeInterval(time : number) : number

	}
	export = LinearSpline

}
declare module 'cesium/Core/createClampedCubicOptions' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	interface createClampedCubicOptions
	{
		times: Array<number>;
		points: Array<Cartesian3>;
		firstTangent: Cartesian3;
		lastTangent: Cartesian3;
	}
	export = createClampedCubicOptions

}
declare module 'cesium/Core/createNaturalCubicOptions' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	interface createNaturalCubicOptions
	{
		times: Array<number>;
		points: Array<Cartesian3>;
	}
	export = createNaturalCubicOptions

}
declare module 'cesium/Core/HermiteSpline' {
	import HermiteSplineOptions = require('cesium/Core/HermiteSplineOptions')
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import createC1Options = require('cesium/Core/createC1Options')
	import LinearSpline = require('cesium/Core/LinearSpline')
	import createClampedCubicOptions = require('cesium/Core/createClampedCubicOptions')
	import createNaturalCubicOptions = require('cesium/Core/createNaturalCubicOptions')
	class HermiteSpline 
	{
		constructor(options : HermiteSplineOptions);
		//Members
		inTangents: Array<Cartesian3>
		outTangents: Array<Cartesian3>
		points: Array<Cartesian3>
		times: Array<number>


		//Methods
		static createC1(options : createC1Options) : HermiteSpline
		static createClampedCubic(options : createClampedCubicOptions) : HermiteSpline|LinearSpline
		static createNaturalCubic(options : createNaturalCubicOptions) : HermiteSpline|LinearSpline
		evaluate(time : number, result : Cartesian3) : Cartesian3
		findTimeInterval(time : number) : number

	}
	export = HermiteSpline

}
declare module 'cesium/Core/IndexDatatype' {
	class IndexDatatype 
	{
		constructor();
		//Members
		static UNSIGNED_BYTE: number
		static UNSIGNED_INT: number
		static UNSIGNED_SHORT: number


		//Methods
		static createTypedArray(numberOfVertices : number, indicesLengthOrArray : Any) : Uint16Array|Uint32Array
		static createTypedArrayFromArrayBuffer(numberOfVertices : number, sourceArray : ArrayBuffer, byteOffset : number, length : number) : Uint16Array|Uint32Array
		static getSizeInBytes(indexDatatype : IndexDatatype) : number
		static validate(indexDatatype : IndexDatatype) : boolean

	}
	export = IndexDatatype

}
declare module 'cesium/Core/InterpolationAlgorithm' {
	class InterpolationAlgorithm 
	{
		constructor();
		//Members
		static type: string


		//Methods
		static getRequiredDataPoints(degree : number) : number
		static interpolate(x : number, xTable : Array<number>, yTable : Array<number>, yStride : number, inputOrder : number, outputOrder : number, result : Array<number>) : Array<number>
		static interpolateOrderZero(x : number, xTable : Array<number>, yTable : Array<number>, yStride : number, result : Array<number>) : Array<number>

	}
	export = InterpolationAlgorithm

}
declare module 'cesium/Core/IntersectionTests' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import BoundingSphere = require('cesium/Core/BoundingSphere')
	import Ray = require('cesium/Core/Ray')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import Plane = require('cesium/Core/Plane')
	class IntersectionTests 
	{
		constructor();
		//Members


		//Methods
		static lineSegmentSphere(p0 : Cartesian3, p1 : Cartesian3, sphere : BoundingSphere, result : any) : Object
		static lineSegmentTriangle(v0 : Cartesian3, v1 : Cartesian3, p0 : Cartesian3, p1 : Cartesian3, p2 : Cartesian3, cullBackFaces : boolean, result : Cartesian3) : Cartesian3
		static raySphere(ray : Ray, sphere : BoundingSphere, result : any) : Object
		static rayTriangle(ray : Ray, p0 : Cartesian3, p1 : Cartesian3, p2 : Cartesian3, cullBackFaces : boolean, result : Cartesian3) : Cartesian3
		static rayTriangleParametric(ray : Ray, p0 : Cartesian3, p1 : Cartesian3, p2 : Cartesian3, cullBackFaces : boolean) : number
		static grazingAltitudeLocation(ray : Ray, ellipsoid : Ellipsoid) : Cartesian3
		static lineSegmentPlane(endPoint0 : Cartesian3, endPoint1 : Cartesian3, plane : Plane, result : Cartesian3) : Cartesian3
		static rayEllipsoid(ray : Ray, ellipsoid : Ellipsoid) : Object
		static rayPlane(ray : Ray, plane : Plane, result : Cartesian3) : Cartesian3
		static trianglePlaneIntersection(p0 : Cartesian3, p1 : Cartesian3, p2 : Cartesian3, plane : Plane) : Object

	}
	export = IntersectionTests

}
declare module 'cesium/Core/Intersections2D' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	class Intersections2D 
	{
		constructor();
		//Members


		//Methods
		static clipTriangleAtAxisAlignedThreshold(threshold : number, keepAbove : boolean, u0 : number, u1 : number, u2 : number, result : Array<number>) : Array<number>
		static computeBarycentricCoordinates(x : number, y : number, x1 : number, y1 : number, x2 : number, y2 : number, x3 : number, y3 : number, result : Cartesian3) : Cartesian3

	}
	export = Intersections2D

}
declare module 'cesium/Core/Iso8601' {
	class Iso8601 
	{
		constructor();
		//Members
		static MAXIMUM_INTERVAL: any
		static MAXIMUM_VALUE: any
		static MINIMUM_VALUE: any


		//Methods

	}
	export = Iso8601

}
declare module 'cesium/Core/KeyboardEventModifier' {
	class KeyboardEventModifier 
	{
		constructor();
		//Members
		static ALT: number
		static CTRL: number
		static SHIFT: number


		//Methods

	}
	export = KeyboardEventModifier

}
declare module 'cesium/Core/LagrangePolynomialApproximation' {
	class LagrangePolynomialApproximation 
	{
		constructor();
		//Members


		//Methods
		static getRequiredDataPoints(degree : number) : number
		static interpolateOrderZero(x : number, xTable : Array<number>, yTable : Array<number>, yStride : number, result : Array<number>) : Array<number>

	}
	export = LagrangePolynomialApproximation

}
declare module 'cesium/Core/LinearApproximation' {
	class LinearApproximation 
	{
		constructor();
		//Members


		//Methods
		static getRequiredDataPoints(degree : number) : number
		static interpolateOrderZero(x : number, xTable : Array<number>, yTable : Array<number>, yStride : number, result : Array<number>) : Array<number>

	}
	export = LinearApproximation

}
declare module 'cesium/Core/Math' {
	class Math 
	{
		constructor();
		//Members
		static DEGREES_PER_RADIAN: number
		static EPSILON1: number
		static EPSILON2: number
		static EPSILON3: number
		static EPSILON4: number
		static EPSILON5: number
		static EPSILON6: number
		static EPSILON7: number
		static EPSILON8: number
		static EPSILON9: number
		static EPSILON10: number
		static EPSILON11: number
		static EPSILON12: number
		static EPSILON13: number
		static EPSILON14: number
		static EPSILON15: number
		static EPSILON16: number
		static EPSILON17: number
		static EPSILON18: number
		static EPSILON19: number
		static EPSILON20: number
		static GRAVITATIONALPARAMETER: number
		static LUNAR_RADIUS: number
		static ONE_OVER_PI: number
		static ONE_OVER_TWO_PI: number
		static PI: number
		static PI_OVER_FOUR: number
		static PI_OVER_SIX: number
		static PI_OVER_THREE: number
		static PI_OVER_TWO: number
		static RADIANS_PER_ARCSECOND: number
		static RADIANS_PER_DEGREE: number
		static SIXTY_FOUR_KILOBYTES: number
		static SOLAR_RADIUS: number
		static THREE_PI_OVER_TWO: number
		static TWO_PI: number


		//Methods
		static acosClamped(value : number) : number
		static asinClamped(value : number) : number
		static chordLength(angle : number, radius : number) : number
		static clamp(value : number, min : number, max : number) : number
		static convertLongitudeRange(angle : number) : number
		static cosh(value : number) : number
		static equalsEpsilon(left : number, right : number, relativeEpsilon : number, absoluteEpsilon : number) : boolean
		static factorial(n : number) : number
		static fromSNorm(value : number, rangeMax : number) : number
		static incrementWrap(n : number, maximumValue : number, minimumValue : number) : number
		static isPowerOfTwo(n : number) : boolean
		static lerp(p : number, q : number, time : number) : number
		static logBase(number : number, base : number) : number
		static mod(m : number, n : number) : number
		static negativePiToPi(angle : number) : number
		static nextPowerOfTwo(n : number) : number
		static nextRandomNumber() : number
		static setRandomNumberSeed(seed : number) : void
		static sign(value : number) : number
		static signNotZero(value : number) : number
		static sinh(value : number) : number
		static toDegrees(radians : number) : number
		static toRadians(degrees : number) : number
		static toSNorm(value : number, rangeMax : number) : number
		static zeroToTwoPi(angle : number) : number

	}
	export = Math

}
declare module 'cesium/Core/Matrix2' {
	import Cartesian2 = require('cesium/Core/Cartesian2')
	class Matrix2 
	{
		constructor(column0Row0? : number, column1Row0? : number, column0Row1? : number, column1Row1? : number);
		//Members
		length: number
		static COLUMN0ROW0: number
		static COLUMN0ROW1: number
		static COLUMN1ROW0: number
		static COLUMN1ROW1: number
		static IDENTITY: Matrix2
		static packedLength: number
		static ZERO: Matrix2


		//Methods
		clone(result : Matrix2) : Matrix2
		equals(right : Matrix2) : boolean
		equalsEpsilon(right : Matrix2, epsilon? : number) : boolean
		toString() : string
		static abs(matrix : Matrix2, result : Matrix2) : Matrix2
		static add(left : Matrix2, right : Matrix2, result : Matrix2) : Matrix2
		static clone(matrix : Matrix2, result : Matrix2) : Matrix2
		static equals(left : Matrix2, right : Matrix2) : boolean
		static equalsEpsilon(left : Matrix2, right : Matrix2, epsilon? : number) : boolean
		static fromArray(array : Array<number>, startingIndex : number, result : Matrix2) : Matrix2
		static fromColumnMajorArray(values : Array<number>, result : Matrix2) : Matrix2
		static fromRotation(angle : number, result : Matrix2) : Matrix2
		static fromRowMajorArray(values : Array<number>, result : Matrix2) : Matrix2
		static fromScale(scale : Cartesian2, result : Matrix2) : Matrix2
		static fromUniformScale(scale : number, result : Matrix2) : Matrix2
		static getColumn(matrix : Matrix2, index : number, result : Cartesian2) : Cartesian2
		static getElementIndex(row : number, column : number) : number
		static getMaximumScale(matrix : Matrix2) : number
		static getRow(matrix : Matrix2, index : number, result : Cartesian2) : Cartesian2
		static getScale(matrix : Matrix2, result : Cartesian2) : Cartesian2
		static multiply(left : Matrix2, right : Matrix2, result : Matrix2) : Matrix2
		static multiplyByScalar(matrix : Matrix2, scalar : number, result : Matrix2) : Matrix2
		static multiplyByScale(matrix : Matrix2, scale : Cartesian2, result : Matrix2) : Matrix2
		static multiplyByVector(matrix : Matrix2, cartesian : Cartesian2, result : Cartesian2) : Cartesian2
		static negate(matrix : Matrix2, result : Matrix2) : Matrix2
		static pack(value : Matrix2, array : Array<number>, startingIndex : number) : Array<number>
		static setColumn(matrix : Matrix2, index : number, cartesian : Cartesian2, result : Cartesian2) : Matrix2
		static setRow(matrix : Matrix2, index : number, cartesian : Cartesian2, result : Matrix2) : Matrix2
		static subtract(left : Matrix2, right : Matrix2, result : Matrix2) : Matrix2
		static toArray(matrix : Matrix2, result : Array<number>) : Array<number>
		static transpose(matrix : Matrix2, result : Matrix2) : Matrix2
		static unpack(array : Array<number>, startingIndex : number, result : Matrix2) : Matrix2

	}
	export = Matrix2

}
declare module 'cesium/Core/NearFarScalar' {
	class NearFarScalar 
	{
		constructor(near? : number, near? : numberValue, far? : number, far? : numberValue);
		//Members
		static packedLength: number
		far: number
		farValue: number
		near: number
		nearValue: number


		//Methods
		static clone(nearFarScalar : NearFarScalar, result : NearFarScalar) : NearFarScalar
		static equals(left : NearFarScalar, right : NearFarScalar) : boolean
		static pack(value : NearFarScalar, array : Array<number>, startingIndex : number) : Array<number>
		static unpack(array : Array<number>, startingIndex : number, result : NearFarScalar) : NearFarScalar
		clone(result : NearFarScalar) : NearFarScalar
		equals(right : NearFarScalar) : boolean

	}
	export = NearFarScalar

}
declare module 'cesium/Core/Packable' {
	class Packable 
	{
		constructor();
		//Members
		static packedLength: number


		//Methods
		static pack(value : any, array : Array<number>, startingIndex : number) : void
		static unpack(array : Array<number>, startingIndex : number, result : any) : Object

	}
	export = Packable

}
declare module 'cesium/Core/PackableForInterpolation' {
	class PackableForInterpolation 
	{
		constructor();
		//Members
		static packedInterpolationLength: number


		//Methods
		static convertPackedArrayForInterpolation(packedArray : Array<number>, startingIndex : number, lastIndex : number, result? : Array<number>) : void
		static unpackInterpolationResult(array : Array<number>, sourceArray : Array<number>, startingIndex : number, lastIndex : number, result : any) : Object

	}
	export = PackableForInterpolation

}
declare module 'cesium/Core/PinBuilder' {
	import Color = require('cesium/Core/Color')
	import Promise = require('cesium/Promise')
	class PinBuilder 
	{
		constructor();
		//Members


		//Methods
		fromColor(color : Color, size : number) : HTMLCanvasElement
		fromMakiIconId(id : string, color : Color, size : number) : HTMLCanvasElement|Promise<HTMLCanvasElement>
		fromText(text : string, color : Color, size : number) : HTMLCanvasElement
		fromUrl(url : string, color : Color, size : number) : HTMLCanvasElement|Promise<HTMLCanvasElement>

	}
	export = PinBuilder

}
declare module 'cesium/Core/PixelFormat' {
	class PixelFormat 
	{
		constructor();
		//Members
		static ALPHA: number
		static DEPTH_COMPONENT: number
		static DEPTH_STENCIL: number
		static LUMINANCE: number
		static LUMINANCE_ALPHA: number
		static RGB: number
		static RGBA: number


		//Methods

	}
	export = PixelFormat

}
declare module 'cesium/Core/PolygonHierarchy' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	class PolygonHierarchy 
	{
		constructor(positions? : Array<Cartesian3>, holes? : Array<PolygonHierarchy>);
		//Members
		holes: Array<PolygonHierarchy>
		positions: Array<Cartesian3>


		//Methods

	}
	export = PolygonHierarchy

}
declare module 'cesium/Core/PolygonGeometryOptions' {
	import PolygonHierarchy = require('cesium/Core/PolygonHierarchy')
	import VertexFormat = require('cesium/Core/VertexFormat')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	interface PolygonGeometryOptions
	{
		polygonHierarchy: PolygonHierarchy;
		height?: number;
		extrudedHeight?: number;
		vertexFormat?: VertexFormat;
		stRotation?: number;
		ellipsoid?: Ellipsoid;
		granularity?: number;
		perPositionHeight?: boolean;
		closeTop?: boolean;
		closeBottom?: boolean;
	}
	export = PolygonGeometryOptions

}
declare module 'cesium/Core/fromPositionsOptions' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import VertexFormat = require('cesium/Core/VertexFormat')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	interface fromPositionsOptions
	{
		positions: Array<Cartesian3>;
		height?: number;
		extrudedHeight?: number;
		vertexFormat?: VertexFormat;
		stRotation?: number;
		ellipsoid?: Ellipsoid;
		granularity?: number;
		perPositionHeight?: boolean;
		closeTop?: boolean;
		closeBottom?: boolean;
	}
	export = fromPositionsOptions

}
declare module 'cesium/Core/PolygonGeometry' {
	import PolygonGeometryOptions = require('cesium/Core/PolygonGeometryOptions')
	import Geometry = require('cesium/Core/Geometry')
	import fromPositionsOptions = require('cesium/Core/fromPositionsOptions')
	class PolygonGeometry 
	{
		constructor(options? : PolygonGeometryOptions);
		//Members
		packedLength: number


		//Methods
		static createGeometry(polygonGeometry : PolygonGeometry) : Geometry|void
		static fromPositions(options : fromPositionsOptions) : PolygonGeometry
		static pack(value : PolygonGeometry, array : Array<number>, startingIndex : number) : Array<number>
		static unpack(array : Array<number>, startingIndex : number, result : PolygonGeometry) : void

	}
	export = PolygonGeometry

}
declare module 'cesium/Core/PolygonOutlineGeometryOptions' {
	import PolygonHierarchy = require('cesium/Core/PolygonHierarchy')
	import VertexFormat = require('cesium/Core/VertexFormat')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	interface PolygonOutlineGeometryOptions
	{
		polygonHierarchy: PolygonHierarchy;
		height?: number;
		extrudedHeight?: number;
		vertexFormat?: VertexFormat;
		ellipsoid?: Ellipsoid;
		granularity?: number;
		perPositionHeight?: boolean;
	}
	export = PolygonOutlineGeometryOptions

}
declare module 'cesium/Core/PolygonOutlineGeometry' {
	import PolygonOutlineGeometryOptions = require('cesium/Core/PolygonOutlineGeometryOptions')
	import Geometry = require('cesium/Core/Geometry')
	import fromPositionsOptions = require('cesium/Core/fromPositionsOptions')
	class PolygonOutlineGeometry 
	{
		constructor(options? : PolygonOutlineGeometryOptions);
		//Members
		packedLength: number


		//Methods
		static createGeometry(polygonGeometry : PolygonOutlineGeometry) : Geometry|void
		static fromPositions(options : fromPositionsOptions) : PolygonOutlineGeometry
		static pack(value : PolygonOutlineGeometry, array : Array<number>, startingIndex : number) : Array<number>
		static unpack(array : Array<number>, startingIndex : number, result : PolygonOutlineGeometry) : PolygonOutlineGeometry

	}
	export = PolygonOutlineGeometry

}
declare module 'cesium/Core/PolylineGeometryOptions' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Color = require('cesium/Core/Color')
	import VertexFormat = require('cesium/Core/VertexFormat')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	interface PolylineGeometryOptions
	{
		positions: Array<Cartesian3>;
		width?: number;
		colors?: Array<Color>;
		colorsPerVertex?: boolean;
		followSurface?: boolean;
		granularity?: number;
		vertexFormat?: VertexFormat;
		ellipsoid?: Ellipsoid;
	}
	export = PolylineGeometryOptions

}
declare module 'cesium/Core/PolylineGeometry' {
	import PolylineGeometryOptions = require('cesium/Core/PolylineGeometryOptions')
	import Geometry = require('cesium/Core/Geometry')
	class PolylineGeometry 
	{
		constructor(options? : PolylineGeometryOptions);
		//Members
		packedLength: number


		//Methods
		static createGeometry(polylineGeometry : PolylineGeometry) : Geometry|void
		static pack(value : PolylineGeometry, array : Array<number>, startingIndex : number) : Array<number>
		static unpack(array : Array<number>, startingIndex : number, result : PolylineGeometry) : PolylineGeometry

	}
	export = PolylineGeometry

}
declare module 'cesium/Core/PolylineVolumeGeometryOptions' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Cartesian2 = require('cesium/Core/Cartesian2')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import VertexFormat = require('cesium/Core/VertexFormat')
	import CornerType = require('cesium/Core/CornerType')
	interface PolylineVolumeGeometryOptions
	{
		polylinePositions: Array<Cartesian3>;
		shapePositions: Array<Cartesian2>;
		ellipsoid?: Ellipsoid;
		granularity?: number;
		vertexFormat?: VertexFormat;
		cornerType?: CornerType;
	}
	export = PolylineVolumeGeometryOptions

}
declare module 'cesium/Core/PolylineVolumeGeometry' {
	import PolylineVolumeGeometryOptions = require('cesium/Core/PolylineVolumeGeometryOptions')
	import Geometry = require('cesium/Core/Geometry')
	class PolylineVolumeGeometry 
	{
		constructor(options? : PolylineVolumeGeometryOptions);
		//Members
		packedLength: number


		//Methods
		static createGeometry(polylineVolumeGeometry : PolylineVolumeGeometry) : Geometry|void
		static pack(value : PolylineVolumeGeometry, array : Array<number>, startingIndex : number) : Array<number>
		static unpack(array : Array<number>, startingIndex : number, result : PolylineVolumeGeometry) : PolylineVolumeGeometry

	}
	export = PolylineVolumeGeometry

}
declare module 'cesium/Core/PolylineVolumeOutlineGeometryOptions' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Cartesian2 = require('cesium/Core/Cartesian2')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import CornerType = require('cesium/Core/CornerType')
	interface PolylineVolumeOutlineGeometryOptions
	{
		polylinePositions: Array<Cartesian3>;
		shapePositions: Array<Cartesian2>;
		ellipsoid?: Ellipsoid;
		granularity?: number;
		cornerType?: CornerType;
	}
	export = PolylineVolumeOutlineGeometryOptions

}
declare module 'cesium/Core/PolylineVolumeOutlineGeometry' {
	import PolylineVolumeOutlineGeometryOptions = require('cesium/Core/PolylineVolumeOutlineGeometryOptions')
	import Geometry = require('cesium/Core/Geometry')
	class PolylineVolumeOutlineGeometry 
	{
		constructor(options? : PolylineVolumeOutlineGeometryOptions);
		//Members
		packedLength: number


		//Methods
		static createGeometry(polylineVolumeOutlineGeometry : PolylineVolumeOutlineGeometry) : Geometry|void
		static pack(value : PolylineVolumeOutlineGeometry, array : Array<number>, startingIndex : number) : Array<number>
		static unpack(array : Array<number>, startingIndex : number, result : PolylineVolumeOutlineGeometry) : PolylineVolumeOutlineGeometry

	}
	export = PolylineVolumeOutlineGeometry

}
declare module 'cesium/Core/QuadraticRealPolynomial' {
	class QuadraticRealPolynomial 
	{
		constructor();
		//Members


		//Methods
		static computeDiscriminant(a : number, b : number, c : number) : number
		static computeRealRoots(a : number, b : number, c : number) : Array<number>

	}
	export = QuadraticRealPolynomial

}
declare module 'cesium/Core/QuantizedMeshTerrainDataOptions' {
	import BoundingSphere = require('cesium/Core/BoundingSphere')
	import OrientedBoundingBox = require('cesium/Core/OrientedBoundingBox')
	import Cartesian3 = require('cesium/Core/Cartesian3')
	interface QuantizedMeshTerrainDataOptions
	{
		quantizedVertices: Uint16Array;
		indices: Uint16Array|Uint32Array;
		minimumHeight: number;
		maximumHeight: number;
		boundingSphere: BoundingSphere;
		orientedBoundingBox?: OrientedBoundingBox;
		horizonOcclusionPoint: Cartesian3;
		westIndices: Array<number>;
		southIndices: Array<number>;
		eastIndices: Array<number>;
		northIndices: Array<number>;
		westSkirtHeight: number;
		southSkirtHeight: number;
		eastSkirtHeight: number;
		northSkirtHeight: number;
		childTileMask?: number;
		createdByUpsampling?: boolean;
		encodedNormals?: Uint8Array;
		waterMask?: Uint8Array;
	}
	export = QuantizedMeshTerrainDataOptions

}
declare module 'cesium/Core/QuantizedMeshTerrainData' {
	import QuantizedMeshTerrainDataOptions = require('cesium/Core/QuantizedMeshTerrainDataOptions')
	import Rectangle = require('cesium/Core/Rectangle')
	import Promise = require('cesium/Promise')
	import TilingScheme = require('cesium/Core/TilingScheme')
	class QuantizedMeshTerrainData 
	{
		constructor(options? : QuantizedMeshTerrainDataOptions);
		//Members
		waterMask: Uint8Array|HTMLImageElement|HTMLCanvasElement


		//Methods
		interpolateHeight(rectangle : Rectangle, longitude : number, latitude : number) : number
		isChildAvailable(thisX : number, thisY : number, childX : number, childY : number) : boolean
		upsample(tilingScheme : TilingScheme, thisX : number, thisY : number, thisLevel : number, descendantX : number, descendantY : number, descendantLevel : number) : Promise<QuantizedMeshTerrainData>|void
		wasCreatedByUpsampling() : boolean

	}
	export = QuantizedMeshTerrainData

}
declare module 'cesium/Core/QuarticRealPolynomial' {
	class QuarticRealPolynomial 
	{
		constructor();
		//Members


		//Methods
		static computeDiscriminant(a : number, b : number, c : number, d : number, e : number) : number
		static computeRealRoots(a : number, b : number, c : number, d : number, e : number) : Array<number>

	}
	export = QuarticRealPolynomial

}
declare module 'cesium/Core/QuaternionSplineOptions' {
	import Quaternion = require('cesium/Core/Quaternion')
	interface QuaternionSplineOptions
	{
		times: Array<number>;
		points: Array<Quaternion>;
		firstInnerQuadrangle?: Quaternion;
		lastInnerQuadrangle?: Quaternion;
	}
	export = QuaternionSplineOptions

}
declare module 'cesium/Core/QuaternionSpline' {
	import QuaternionSplineOptions = require('cesium/Core/QuaternionSplineOptions')
	import Quaternion = require('cesium/Core/Quaternion')
	class QuaternionSpline 
	{
		constructor(options? : QuaternionSplineOptions);
		//Members
		innerQuadrangles: Array<Quaternion>
		points: Array<Quaternion>
		times: Array<number>


		//Methods
		evaluate(time : number, result : Quaternion) : Quaternion
		findTimeInterval(time : number) : number

	}
	export = QuaternionSpline

}
declare module 'cesium/Core/Queue' {
	class Queue 
	{
		constructor();
		//Members
		length: number


		//Methods
		clear() : void
		contains(item : any) : void
		dequeue() : Object
		enqueue(item : any) : void
		peek() : Object
		sort(compareFunction : any) : void

	}
	export = Queue

}
declare module 'cesium/Core/RectangleGeometryOptions' {
	import Rectangle = require('cesium/Core/Rectangle')
	import VertexFormat = require('cesium/Core/VertexFormat')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	interface RectangleGeometryOptions
	{
		rectangle: Rectangle;
		vertexFormat?: VertexFormat;
		ellipsoid?: Ellipsoid;
		granularity?: number;
		height?: number;
		rotation?: number;
		stRotation?: number;
		extrudedHeight?: number;
		closeTop?: boolean;
		closeBottom?: boolean;
	}
	export = RectangleGeometryOptions

}
declare module 'cesium/Core/RectangleGeometry' {
	import RectangleGeometryOptions = require('cesium/Core/RectangleGeometryOptions')
	import Geometry = require('cesium/Core/Geometry')
	class RectangleGeometry 
	{
		constructor(options? : RectangleGeometryOptions);
		//Members
		static packedLength: number


		//Methods
		static createGeometry(rectangleGeometry : RectangleGeometry) : Geometry|void
		static pack(value : RectangleGeometry, array : Array<number>, startingIndex : number) : Array<number>
		static unpack(array : Array<number>, startingIndex : number, result : RectangleGeometry) : RectangleGeometry

	}
	export = RectangleGeometry

}
declare module 'cesium/Core/RectangleOutlineGeometryOptions' {
	import Rectangle = require('cesium/Core/Rectangle')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	interface RectangleOutlineGeometryOptions
	{
		rectangle: Rectangle;
		ellipsoid?: Ellipsoid;
		granularity?: number;
		height?: number;
		rotation?: number;
		extrudedHeight?: number;
	}
	export = RectangleOutlineGeometryOptions

}
declare module 'cesium/Core/RectangleOutlineGeometry' {
	import RectangleOutlineGeometryOptions = require('cesium/Core/RectangleOutlineGeometryOptions')
	import Geometry = require('cesium/Core/Geometry')
	class RectangleOutlineGeometry 
	{
		constructor(options? : RectangleOutlineGeometryOptions);
		//Members
		static packedLength: number


		//Methods
		static createGeometry(rectangleGeometry : RectangleOutlineGeometry) : Geometry|void
		static pack(value : RectangleOutlineGeometry, array : Array<number>, startingIndex : number) : Array<number>
		static unpack(array : Array<number>, startingIndex : number, result : RectangleOutlineGeometry) : RectangleOutlineGeometry

	}
	export = RectangleOutlineGeometry

}
declare module 'cesium/Core/ReferenceFrame' {
	class ReferenceFrame 
	{
		constructor();
		//Members
		static FIXED: number
		static INERTIAL: number


		//Methods

	}
	export = ReferenceFrame

}
declare module 'cesium/Core/RequestErrorEvent' {
	class RequestErrorEvent 
	{
		constructor(statusCode? : number, response? : any, response? : anyHeaders);
		//Members
		response: Object
		responseHeaders: Object
		statusCode: number


		//Methods
		toString() : string

	}
	export = RequestErrorEvent

}
declare module 'cesium/Core/RuntimeError' {
	class RuntimeError 
	{
		constructor(message? : string);
		//Members
		message: string
		name: string
		stack: string


		//Methods

	}
	export = RuntimeError

}
declare module 'cesium/Core/ScreenSpaceEventHandler' {
	class ScreenSpaceEventHandler 
	{
		constructor(element? : HTMLCanvasElement);
		//Members
		static mouseEmulationIgnoreMilliseconds: any


		//Methods
		destroy() : void
		getInputAction(type : number, modifier : number) : void
		isDestroyed() : boolean
		removeInputAction(type : number, modifier : number) : void
		setInputAction(action : (()=>void), type : number, modifier : number) : void

	}
	export = ScreenSpaceEventHandler

}
declare module 'cesium/Core/ScreenSpaceEventType' {
	class ScreenSpaceEventType 
	{
		constructor();
		//Members
		static LEFT_CLICK: number
		static LEFT_DOUBLE_CLICK: number
		static LEFT_DOWN: number
		static LEFT_UP: number
		static MIDDLE_CLICK: number
		static MIDDLE_DOUBLE_CLICK: number
		static MIDDLE_DOWN: number
		static MIDDLE_UP: number
		static MOUSE_MOVE: number
		static PINCH_END: number
		static PINCH_MOVE: number
		static PINCH_START: number
		static RIGHT_CLICK: number
		static RIGHT_DOUBLE_CLICK: number
		static RIGHT_DOWN: number
		static RIGHT_UP: number
		static WHEEL: number


		//Methods

	}
	export = ScreenSpaceEventType

}
declare module 'cesium/Core/ShowGeometryInstanceAttribute' {
	import ComponentDatatype = require('cesium/Core/ComponentDatatype')
	class ShowGeometryInstanceAttribute 
	{
		constructor(show? : boolean);
		//Members
		componentDatatype: ComponentDatatype
		componentsPerAttribute: number
		normalize: boolean
		value: Uint8Array


		//Methods
		static toValue(show : boolean, result : Uint8Array) : Uint8Array

	}
	export = ShowGeometryInstanceAttribute

}
declare module 'cesium/Core/Simon1994PlanetaryPositions' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import JulianDate = require('cesium/Core/JulianDate')
	class Simon1994PlanetaryPositions 
	{
		constructor();
		//Members


		//Methods
		static computeMoonPositionInEarthInertialFrame(julianDate : JulianDate, result : Cartesian3) : Cartesian3
		static computeSunPositionInEarthInertialFrame(julianDate : JulianDate, result : Cartesian3) : Cartesian3

	}
	export = Simon1994PlanetaryPositions

}
declare module 'cesium/Core/SimplePolylineGeometryOptions' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Color = require('cesium/Core/Color')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	interface SimplePolylineGeometryOptions
	{
		positions: Array<Cartesian3>;
		colors?: Array<Color>;
		colorsPerVertex?: boolean;
		followSurface?: boolean;
		granularity?: number;
		ellipsoid?: Ellipsoid;
	}
	export = SimplePolylineGeometryOptions

}
declare module 'cesium/Core/SimplePolylineGeometry' {
	import SimplePolylineGeometryOptions = require('cesium/Core/SimplePolylineGeometryOptions')
	import Geometry = require('cesium/Core/Geometry')
	class SimplePolylineGeometry 
	{
		constructor(options? : SimplePolylineGeometryOptions);
		//Members
		packedLength: number


		//Methods
		static createGeometry(simplePolylineGeometry : SimplePolylineGeometry) : Geometry
		static pack(value : SimplePolylineGeometry, array : Array<number>, startingIndex : number) : Array<number>
		static unpack(array : Array<number>, startingIndex : number, result : SimplePolylineGeometry) : SimplePolylineGeometry

	}
	export = SimplePolylineGeometry

}
declare module 'cesium/Core/SphereGeometryOptions' {
	import VertexFormat = require('cesium/Core/VertexFormat')
	interface SphereGeometryOptions
	{
		radius?: number;
		stackPartitions?: number;
		slicePartitions?: number;
		vertexFormat?: VertexFormat;
	}
	export = SphereGeometryOptions

}
declare module 'cesium/Core/SphereGeometry' {
	import SphereGeometryOptions = require('cesium/Core/SphereGeometryOptions')
	import Geometry = require('cesium/Core/Geometry')
	class SphereGeometry 
	{
		constructor(options? : SphereGeometryOptions);
		//Members
		static packedLength: number


		//Methods
		static createGeometry(sphereGeometry : SphereGeometry) : Geometry
		static pack(value : SphereGeometry, array : Array<number>, startingIndex : number) : Array<number>
		static unpack(array : Array<number>, startingIndex : number, result : SphereGeometry) : SphereGeometry

	}
	export = SphereGeometry

}
declare module 'cesium/Core/SphereOutlineGeometryOptions' {
	interface SphereOutlineGeometryOptions
	{
		radius?: number;
		stackPartitions?: number;
		slicePartitions?: number;
		subdivisions?: number;
	}
	export = SphereOutlineGeometryOptions

}
declare module 'cesium/Core/SphereOutlineGeometry' {
	import SphereOutlineGeometryOptions = require('cesium/Core/SphereOutlineGeometryOptions')
	import Geometry = require('cesium/Core/Geometry')
	class SphereOutlineGeometry 
	{
		constructor(options? : SphereOutlineGeometryOptions);
		//Members
		static packedLength: number


		//Methods
		static createGeometry(sphereGeometry : SphereOutlineGeometry) : Geometry
		static pack(value : SphereOutlineGeometry, array : Array<number>, startingIndex : number) : Array<number>
		static unpack(array : Array<number>, startingIndex : number, result : SphereOutlineGeometry) : SphereOutlineGeometry

	}
	export = SphereOutlineGeometry

}
declare module 'cesium/Core/Spline' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Quaternion = require('cesium/Core/Quaternion')
	class Spline 
	{
		constructor();
		//Members
		points: Array<Cartesian3>|Array<Quaternion>
		times: Array<number>


		//Methods
		evaluate(time : number, result : Cartesian3|Quaternion) : Cartesian3|Quaternion
		findTimeInterval(time : number, startIndex : number) : number

	}
	export = Spline

}
declare module 'cesium/Core/TaskProcessor' {
	import Promise = require('cesium/Promise')
	class TaskProcessor 
	{
		constructor(workerName : string, maximumActiveTasks? : number);
		//Members


		//Methods
		destroy() : void
		isDestroyed() : boolean
		scheduleTask(parameters : any, transferableObjects : Array<any>) : Promise<Object>|void

	}
	export = TaskProcessor

}
declare module 'cesium/Core/TileProviderError' {
	import ImageryProvider = require('cesium/Scene/ImageryProvider')
	import TerrainProvider = require('cesium/Core/TerrainProvider')
	import Event = require('cesium/Core/Event')
	class TileProviderError 
	{
		constructor(provider : Imagery? : numberProvider|TerrainProvider, message : string, x? : number, y? : number, level? : number, timesRetried? : number, error? : Error);
		//Members
		error: Error
		level: number
		message: string
		provider: ImageryProvider|TerrainProvider
		retry: boolean
		timesRetried: number
		x: number
		y: number


		//Methods
		static handleError(previousError : TileProviderError, provider : ImageryProvider|TerrainProvider, event : Event, message : string, x : number, y : number, level : number, retryFunction : any, errorDetails : Error) : TileProviderError
		static handleSuccess(previousError : TileProviderError) : void

	}
	export = TileProviderError

}
declare module 'cesium/Core/TimeIntervalOptions' {
	import JulianDate = require('cesium/Core/JulianDate')
	interface TimeIntervalOptions
	{
		start?: JulianDate;
		stop?: JulianDate;
		isStartIncluded?: boolean;
		isStopIncluded?: boolean;
		data?: Object;
	}
	export = TimeIntervalOptions

}
declare module 'cesium/Core/fromIso8601Options' {
	interface fromIso8601Options
	{
		iso8601: string;
		isStartIncluded?: boolean;
		isStopIncluded?: boolean;
		data?: Object;
	}
	export = fromIso8601Options

}
declare module 'cesium/Core/TimeInterval' {
	import TimeIntervalOptions = require('cesium/Core/TimeIntervalOptions')
	import JulianDate = require('cesium/Core/JulianDate')
	import fromIso8601Options = require('cesium/Core/fromIso8601Options')
	class TimeInterval 
	{
		constructor(options? : TimeIntervalOptions);
		//Members
		static EMPTY: TimeInterval
		data: Object
		isEmpty: boolean
		isStartIncluded: boolean
		isStopIncluded: boolean
		start: JulianDate
		stop: JulianDate


		//Methods
		static clone(timeInterval : TimeInterval, result : TimeInterval) : TimeInterval
		static contains(timeInterval : TimeInterval, julianDate : JulianDate) : boolean
		static equals(left : TimeInterval, right : TimeInterval, dataComparer : any) : boolean
		static equalsEpsilon(left : TimeInterval, right : TimeInterval, epsilon? : number, dataComparer : any) : boolean
		static fromIso8601(options : fromIso8601Options, result : TimeInterval) : TimeInterval
		static intersect(left : TimeInterval, right : TimeInterval, result? : TimeInterval, mergeCallback : any) : TimeInterval
		static toIso8601(timeInterval : TimeInterval, precision : number) : string
		clone(result : TimeInterval) : TimeInterval
		equals(right : TimeInterval, dataComparer : any) : boolean
		equalsEpsilon(right : TimeInterval, epsilon? : number, dataComparer : any) : boolean
		toString() : string

	}
	export = TimeInterval

}
declare module 'cesium/Core/findIntervalOptions' {
	import JulianDate = require('cesium/Core/JulianDate')
	interface findIntervalOptions
	{
		start?: JulianDate;
		stop?: JulianDate;
		isStartIncluded?: boolean;
		isStopIncluded?: boolean;
	}
	export = findIntervalOptions

}
declare module 'cesium/Core/TimeIntervalCollection' {
	import TimeInterval = require('cesium/Core/TimeInterval')
	import Event = require('cesium/Core/Event')
	import JulianDate = require('cesium/Core/JulianDate')
	import findIntervalOptions = require('cesium/Core/findIntervalOptions')
	class TimeIntervalCollection 
	{
		constructor(intervals? : Array<TimeInterval>);
		//Members
		changedEvent: Event
		isEmpty: boolean
		isStartIncluded: boolean
		isStopIncluded: boolean
		length: number
		start: JulianDate
		stop: JulianDate


		//Methods
		addInterval(interval : TimeInterval, dataComparer : any) : void
		contains(julianDate : JulianDate) : boolean
		equals(right : TimeIntervalCollection, dataComparer : any) : boolean
		findDataForIntervalContainingDate(date : JulianDate) : Object
		findInterval(options : findIntervalOptions) : TimeInterval
		findIntervalContainingDate(date : JulianDate) : TimeInterval|void
		get(index : number) : TimeInterval
		indexOf(date : JulianDate) : number
		intersect(other : TimeIntervalCollection, dataComparer : any, mergeCallback : any) : TimeIntervalCollection
		removeAll() : void
		removeInterval(interval : TimeInterval) : void

	}
	export = TimeIntervalCollection

}
declare module 'cesium/Core/Transforms' {
	import Matrix3 = require('cesium/Core/Matrix3')
	import JulianDate = require('cesium/Core/JulianDate')
	import Matrix4 = require('cesium/Core/Matrix4')
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import Quaternion = require('cesium/Core/Quaternion')
	import Cartesian2 = require('cesium/Core/Cartesian2')
	import Promise = require('cesium/Promise')
	import TimeInterval = require('cesium/Core/TimeInterval')
	class Transforms 
	{
		constructor();
		//Members


		//Methods
		static computeFixedToIcrfMatrix(date : JulianDate, result : Matrix3) : Matrix3
		static computeIcrfToFixedMatrix(date : JulianDate, result : Matrix3) : Matrix3
		static computeTemeToPseudoFixedMatrix(date : JulianDate, result : Matrix3) : Matrix3
		static eastNorthUpToFixedFrame(origin : Cartesian3, ellipsoid : Ellipsoid, result : Matrix4) : Matrix4
		static headingPitchRollQuaternion(origin : Cartesian3, heading : number, pitch : number, roll : number, ellipsoid : Ellipsoid, result : Quaternion) : Quaternion
		static headingPitchRollToFixedFrame(origin : Cartesian3, heading : number, pitch : number, roll : number, ellipsoid : Ellipsoid, result : Matrix4) : Matrix4
		static northEastDownToFixedFrame(origin : Cartesian3, ellipsoid : Ellipsoid, result : Matrix4) : Matrix4
		static northUpEastToFixedFrame(origin : Cartesian3, ellipsoid : Ellipsoid, result : Matrix4) : Matrix4
		static pointToWindowCoordinates(modelViewProjectionMatrix : Matrix4, viewportTransformation : Matrix4, point : Cartesian3, result : Cartesian2) : Cartesian2
		static preloadIcrfFixed(timeInterval : TimeInterval) : Promise<void>

	}
	export = Transforms

}
declare module 'cesium/Core/TridiagonalSystemSolver' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	class TridiagonalSystemSolver 
	{
		constructor();
		//Members


		//Methods
		static solve(diagonal : Array<number>, lower : Array<number>, upper : Array<number>, right : Array<Cartesian3>) : Array<Cartesian3>

	}
	export = TridiagonalSystemSolver

}
declare module 'cesium/Core/VRTheWorldTerrainProviderOptions' {
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import Credit = require('cesium/Core/Credit')
	interface VRTheWorldTerrainProviderOptions
	{
		url: string;
		proxy?: Object;
		ellipsoid?: Ellipsoid;
		credit?: Credit|string;
	}
	export = VRTheWorldTerrainProviderOptions

}
declare module 'cesium/Core/VRTheWorldTerrainProvider' {
	import VRTheWorldTerrainProviderOptions = require('cesium/Core/VRTheWorldTerrainProviderOptions')
	import Credit = require('cesium/Core/Credit')
	import Event = require('cesium/Core/Event')
	import Promise = require('cesium/Promise')
	import GeographicTilingScheme = require('cesium/Core/GeographicTilingScheme')
	import TerrainData = require('cesium/Core/TerrainData')
	class VRTheWorldTerrainProvider 
	{
		constructor(options? : VRTheWorldTerrainProviderOptions);
		//Members
		credit: Credit
		errorEvent: Event
		hasVertexNormals: boolean
		hasWaterMask: boolean
		ready: boolean
		readyPromise: Promise<boolean>
		tilingScheme: GeographicTilingScheme


		//Methods
		getLevelMaximumGeometricError(level : number) : number
		getTileDataAvailable(x : number, y : number, level : number) : boolean
		requestTileGeometry(x : number, y : number, level : number, throttleRequests : boolean) : Promise<TerrainData>|void

	}
	export = VRTheWorldTerrainProvider

}
declare module 'cesium/Core/VideoSynchronizerOptions' {
	import Clock = require('cesium/Core/Clock')
	import JulianDate = require('cesium/Core/JulianDate')
	interface VideoSynchronizerOptions
	{
		clock?: Clock;
		element?: HTMLVideoElement;
		epoch?: JulianDate;
		tolerance?: number;
	}
	export = VideoSynchronizerOptions

}
declare module 'cesium/Core/VideoSynchronizer' {
	import VideoSynchronizerOptions = require('cesium/Core/VideoSynchronizerOptions')
	import Clock = require('cesium/Core/Clock')
	import JulianDate = require('cesium/Core/JulianDate')
	class VideoSynchronizer 
	{
		constructor(options? : VideoSynchronizerOptions);
		//Members
		clock: Clock
		element: HTMLVideoElement
		epoch: JulianDate
		tolerance: number


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = VideoSynchronizer

}
declare module 'cesium/Core/Visibility' {
	class Visibility 
	{
		constructor();
		//Members
		static FULL: number
		static NONE: number
		static PARTIAL: number


		//Methods

	}
	export = Visibility

}
declare module 'cesium/Core/WallGeometryOptions' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import VertexFormat = require('cesium/Core/VertexFormat')
	interface WallGeometryOptions
	{
		positions: Array<Cartesian3>;
		granularity?: number;
		maximumHeights?: Array<number>;
		minimumHeights?: Array<number>;
		ellipsoid?: Ellipsoid;
		vertexFormat?: VertexFormat;
	}
	export = WallGeometryOptions

}
declare module 'cesium/Core/fromConstantHeightsOptions' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import VertexFormat = require('cesium/Core/VertexFormat')
	interface fromConstantHeightsOptions
	{
		positions: Array<Cartesian3>;
		maximumHeight?: number;
		minimumHeight?: number;
		ellipsoid?: Ellipsoid;
		vertexFormat?: VertexFormat;
	}
	export = fromConstantHeightsOptions

}
declare module 'cesium/Core/WallGeometry' {
	import WallGeometryOptions = require('cesium/Core/WallGeometryOptions')
	import Geometry = require('cesium/Core/Geometry')
	import fromConstantHeightsOptions = require('cesium/Core/fromConstantHeightsOptions')
	class WallGeometry 
	{
		constructor(options? : WallGeometryOptions);
		//Members
		packedLength: number


		//Methods
		static createGeometry(wallGeometry : WallGeometry) : Geometry|void
		static fromConstantHeights(options : fromConstantHeightsOptions) : WallGeometry
		static pack(value : WallGeometry, array : Array<number>, startingIndex : number) : Array<number>
		static unpack(array : Array<number>, startingIndex : number, result : WallGeometry) : WallGeometry

	}
	export = WallGeometry

}
declare module 'cesium/Core/WallOutlineGeometryOptions' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	interface WallOutlineGeometryOptions
	{
		positions: Array<Cartesian3>;
		granularity?: number;
		maximumHeights?: Array<number>;
		minimumHeights?: Array<number>;
		ellipsoid?: Ellipsoid;
	}
	export = WallOutlineGeometryOptions

}
declare module 'cesium/Core/WallOutlineGeometry' {
	import WallOutlineGeometryOptions = require('cesium/Core/WallOutlineGeometryOptions')
	import Geometry = require('cesium/Core/Geometry')
	import fromConstantHeightsOptions = require('cesium/Core/fromConstantHeightsOptions')
	class WallOutlineGeometry 
	{
		constructor(options? : WallOutlineGeometryOptions);
		//Members
		packedLength: number


		//Methods
		static createGeometry(wallGeometry : WallOutlineGeometry) : Geometry|void
		static fromConstantHeights(options : fromConstantHeightsOptions) : WallOutlineGeometry
		static pack(value : WallOutlineGeometry, array : Array<number>, startingIndex : number) : Array<number>
		static unpack(array : Array<number>, startingIndex : number, result : WallOutlineGeometry) : WallOutlineGeometry

	}
	export = WallOutlineGeometry

}
declare module 'cesium/Core/WebMercatorProjection' {
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Cartographic = require('cesium/Core/Cartographic')
	class WebMercatorProjection 
	{
		constructor(ellipsoid? : Ellipsoid);
		//Members
		static MaximumLatitude: number
		ellipsoid: Ellipsoid


		//Methods
		static geodeticLatitudeToMercatorAngle(latitude : number) : number
		static mercatorAngleToGeodeticLatitude(mercatorAngle : number) : number
		project(cartographic : Cartographic, result : Cartesian3) : Cartesian3
		unproject(cartesian : Cartesian3, result : Cartographic) : Cartographic

	}
	export = WebMercatorProjection

}
declare module 'cesium/Core/WebMercatorTilingSchemeOptions' {
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import Cartesian2 = require('cesium/Core/Cartesian2')
	interface WebMercatorTilingSchemeOptions
	{
		ellipsoid?: Ellipsoid;
		numberOfLevelZeroTilesX?: number;
		numberOfLevelZeroTilesY?: number;
		rectangleSouthwestInMeters?: Cartesian2;
		rectangleNortheastInMeters?: Cartesian2;
	}
	export = WebMercatorTilingSchemeOptions

}
declare module 'cesium/Core/WebMercatorTilingScheme' {
	import WebMercatorTilingSchemeOptions = require('cesium/Core/WebMercatorTilingSchemeOptions')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import MapProjection = require('cesium/Core/MapProjection')
	import Rectangle = require('cesium/Core/Rectangle')
	import Cartesian2 = require('cesium/Core/Cartesian2')
	import Cartographic = require('cesium/Core/Cartographic')
	class WebMercatorTilingScheme 
	{
		constructor(options? : WebMercatorTilingSchemeOptions);
		//Members
		ellipsoid: Ellipsoid
		projection: MapProjection
		rectangle: Rectangle


		//Methods
		getNumberOfXTilesAtLevel(level : number) : number
		getNumberOfYTilesAtLevel(level : number) : number
		positionToTileXY(position : Cartographic, level : number, result : Cartesian2) : Cartesian2
		rectangleToNativeRectangle(rectangle : Rectangle, result : Rectangle) : Rectangle
		tileXYToNativeRectangle(x : number, y : number, level : number, result : any) : Rectangle
		tileXYToRectangle(x : number, y : number, level : number, result : any) : Rectangle

	}
	export = WebMercatorTilingScheme

}
declare module 'cesium/Core/WindingOrder' {
	class WindingOrder 
	{
		constructor();
		//Members
		static CLOCKWISE: number
		static COUNTER_CLOCKWISE: number


		//Methods

	}
	export = WindingOrder

}
declare module 'cesium/Core/barycentricCoordinates' {
	import Cartesian2 = require('cesium/Core/Cartesian2')
	import Cartesian3 = require('cesium/Core/Cartesian3')
	function barycentricCoordinates(point : Cartesian2|Cartesian3, p0 : Cartesian2|Cartesian3, p1 : Cartesian2|Cartesian3, p2 : Cartesian2|Cartesian3, result? : Cartesian3) : Cartesian3;
	export = barycentricCoordinates

}
declare module 'cesium/Core/binarySearch' {
	function binarySearch(array : Array<any>, itemToFind : any, comparator : any) : number;
	export = binarySearch

}
declare module 'cesium/Core/cancelAnimationFrame' {
	function cancelAnimationFrame(requestID : number) : void;
	export = cancelAnimationFrame

}
declare module 'cesium/Core/clone' {
	function clone(object : any, deep? : boolean) : Object;
	export = clone

}
declare module 'cesium/Core/combine' {
	function combine(object1? : any, object2? : any, deep? : boolean) : Object;
	export = combine

}
declare module 'cesium/Core/createGuid' {
	function createGuid() : string;
	export = createGuid

}
declare module 'cesium/Core/defaultValue' {
	function defaultValue<T>(a,b:T) : T;
	export = defaultValue

}
declare module 'cesium/Core/defined' {
	function defined(value : any) : boolean;
	export = defined

}
declare module 'cesium/Core/destroyObject' {
	function destroyObject(object : any, message? : string) : void;
	export = destroyObject

}
declare module 'cesium/Core/formatError' {
	function formatError(object : any) : string;
	export = formatError

}
declare module 'cesium/Core/getAbsoluteUri' {
	function getAbsoluteUri(relative : string, base? : string) : string;
	export = getAbsoluteUri

}
declare module 'cesium/Core/getBaseUri' {
	function getBaseUri(uri : string, includeQuery? : boolean) : string;
	export = getBaseUri

}
declare module 'cesium/Core/getExtensionFromUri' {
	function getExtensionFromUri(uri : string) : string;
	export = getExtensionFromUri

}
declare module 'cesium/Core/getFilenameFromUri' {
	function getFilenameFromUri(uri : string) : string;
	export = getFilenameFromUri

}
declare module 'cesium/Core/getImagePixels' {
	function getImagePixels(image : HTMLImageElement) : CanvasPixelArray;
	export = getImagePixels

}
declare module 'cesium/Core/getTimestamp' {
	function getTimestamp() : number;
	export = getTimestamp

}
declare module 'cesium/Core/isArray' {
	function isArray(value : any) : boolean;
	export = isArray

}
declare module 'cesium/Core/isLeapYear' {
	function isLeapYear(year : number) : boolean;
	export = isLeapYear

}
declare module 'cesium/Core/loadArrayBuffer' {
	import Promise = require('cesium/Promise')
	function loadArrayBuffer(url : string|Promise<string>, headers? : any) : Promise<ArrayBuffer>;
	export = loadArrayBuffer

}
declare module 'cesium/Core/loadBlob' {
	import Promise = require('cesium/Promise')
	function loadBlob(url : string|Promise<string>, headers? : any) : Promise<Blob>;
	export = loadBlob

}
declare module 'cesium/Core/loadImage' {
	import Promise = require('cesium/Promise')
	function loadImage(url : string|Promise<string>, allowCrossOrigin? : boolean) : Promise<HTMLImageElement>;
	export = loadImage

}
declare module 'cesium/Core/loadImageViaBlob' {
	import Promise = require('cesium/Promise')
	function loadImageViaBlob(url : string|Promise<string>) : Promise<HTMLImageElement>;
	export = loadImageViaBlob

}
declare module 'cesium/Core/loadJson' {
	import Promise = require('cesium/Promise')
	function loadJson(url : string|Promise<string>, headers? : any) : Promise<Object>;
	export = loadJson

}
declare module 'cesium/Core/loadJsonpOptions' {
	import DefaultProxy = require('cesium/Core/DefaultProxy')
	interface loadJsonpOptions
	{
		parameters?: Object;
		callbackParameterName?: string;
		proxy?: DefaultProxy;
	}
	export = loadJsonpOptions

}
declare module 'cesium/Core/loadJsonp' {
	import loadJsonpOptions = require('cesium/Core/loadJsonpOptions')
	function loadJsonp(url : string, options? : loadJsonpOptions) : Promise<Object>;
	export = loadJsonp

}
declare module 'cesium/Core/loadText' {
	import Promise = require('cesium/Promise')
	function loadText(url : string|Promise<string>, headers? : any) : Promise<string>;
	export = loadText

}
declare module 'cesium/Core/loadWithXhrOptions' {
	import Promise = require('cesium/Promise')
	interface loadWithXhrOptions
	{
		url: string|Promise<string>;
		responseType?: string;
		method?: string;
		data?: string;
		headers?: Object;
		overrideMimeType?: string;
	}
	export = loadWithXhrOptions

}
declare module 'cesium/Core/loadWithXhr' {
	import loadWithXhrOptions = require('cesium/Core/loadWithXhrOptions')
	function loadWithXhr(options? : loadWithXhrOptions) : Promise<Object>;
	export = loadWithXhr

}
declare module 'cesium/Core/loadXML' {
	import Promise = require('cesium/Promise')
	function loadXML(url : string|Promise<string>, headers? : any) : Promise<XMLDocument>;
	export = loadXML

}
declare module 'cesium/Core/mergeSort' {
	function mergeSort(array : Array<any>, comparator : any, userDefinedObject? : any) : void;
	export = mergeSort

}
declare module 'cesium/Core/objectToQuery' {
	function objectToQuery(obj : any) : string;
	export = objectToQuery

}
declare module 'cesium/Core/pointInsideTriangle' {
	import Cartesian2 = require('cesium/Core/Cartesian2')
	import Cartesian3 = require('cesium/Core/Cartesian3')
	function pointInsideTriangle(point : Cartesian2|Cartesian3, p0 : Cartesian2|Cartesian3, p1 : Cartesian2|Cartesian3, p2 : Cartesian2|Cartesian3) : boolean;
	export = pointInsideTriangle

}
declare module 'cesium/Core/queryToObject' {
	function queryToObject(queryString : string) : Object;
	export = queryToObject

}
declare module 'cesium/Core/requestAnimationFrame' {
	function requestAnimationFrame(callback : any) : number;
	export = requestAnimationFrame

}
declare module 'cesium/Core/sampleTerrain' {
	import TerrainProvider = require('cesium/Core/TerrainProvider')
	import Cartographic = require('cesium/Core/Cartographic')
	function sampleTerrain(terrainProvider : TerrainProvider, level : number, positions : Array<Cartographic>) : Promise<Array<Cartographic>>;
	export = sampleTerrain

}
declare module 'cesium/Core/subdivideArray' {
	function subdivideArray(array : Array<any>, numberOfArrays : number) : void;
	export = subdivideArray

}
declare module 'cesium/Core/throttleRequestByServer' {
	function throttleRequestByServer(url : string, requestFunction : any) : Promise<Object>|void>;
	export = throttleRequestByServer

}
declare module 'cesium/DataSources/Property' {
	import Event = require('cesium/Core/Event')
	import JulianDate = require('cesium/Core/JulianDate')
	class Property 
	{
		constructor();
		//Members
		definitionChanged: Event
		isConstant: boolean


		//Methods
		equals(other : Property|string) : boolean
		getValue(time : JulianDate, result : any) : Object

	}
	export = Property

}
declare module 'cesium/DataSources/BillboardGraphicsOptions' {
	import Property = require('cesium/DataSources/Property')
	interface BillboardGraphicsOptions
	{
		image?: Property|string;
		show?: Property|string;
		scale?: Property|string;
		horizontalOrigin?: Property|string;
		verticalOrigin?: Property|string;
		eyeOffset?: Property|string;
		pixelOffset?: Property|string;
		rotation?: Property|string;
		alignedAxis?: Property|string;
		width?: Property|string;
		height?: Property|string;
		color?: Property|string;
		scaleByDistance?: Property|string;
		translucencyByDistance?: Property|string;
		pixelOffsetScaleByDistance?: Property|string;
		imageSubRegion?: Property|string;
		sizeInMeters?: Property|string;
		heightReference?: Property|string;
	}
	export = BillboardGraphicsOptions

}
declare module 'cesium/DataSources/BillboardGraphics' {
	import BillboardGraphicsOptions = require('cesium/DataSources/BillboardGraphicsOptions')
	import Property = require('cesium/DataSources/Property')
	import Event = require('cesium/Core/Event')
	class BillboardGraphics 
	{
		constructor(options? : BillboardGraphicsOptions);
		//Members
		alignedAxis: Property|string
		color: Property|string
		definitionChanged: Event
		eyeOffset: Property|string
		height: Property|string
		heightReference: Property|string
		horizontalOrigin: Property|string
		image: Property|string
		imageSubRegion: Property|string
		pixelOffset: Property|string
		pixelOffsetScaleByDistance: Property|string
		rotation: Property|string
		scale: Property|string
		scaleByDistance: Property|string
		show: Property|string
		sizeInMeters: Property|string
		translucencyByDistance: Property|string
		verticalOrigin: Property|string
		width: Property|string


		//Methods
		clone(result : BillboardGraphics) : BillboardGraphics
		merge(source : BillboardGraphics) : void

	}
	export = BillboardGraphics

}
declare module 'cesium/DataSources/DataSourceClock' {
	import ClockRange = require('cesium/Core/ClockRange')
	import ClockStep = require('cesium/Core/ClockStep')
	import JulianDate = require('cesium/Core/JulianDate')
	import Event = require('cesium/Core/Event')
	import Clock = require('cesium/Core/Clock')
	class DataSourceClock 
	{
		constructor();
		//Members
		clockRange: ClockRange
		clockStep: ClockStep
		currentTime: JulianDate
		definitionChanged: Event
		multiplier: number
		startTime: JulianDate
		stopTime: JulianDate


		//Methods
		clone(result : DataSourceClock) : DataSourceClock
		equals(other : DataSourceClock) : boolean
		getValue() : Clock
		merge(source : DataSourceClock) : void

	}
	export = DataSourceClock

}
declare module 'cesium/DataSources/DataSource' {
	import Event = require('cesium/Core/Event')
	import DataSourceClock = require('cesium/DataSources/DataSourceClock')
	import EntityCollection = require('cesium/DataSources/EntityCollection')
	import JulianDate = require('cesium/Core/JulianDate')
	class DataSource 
	{
		constructor();
		//Members
		changedEvent: Event
		clock: DataSourceClock
		entities: EntityCollection
		errorEvent: Event
		isLoading: boolean
		loadingEvent: Event
		name: string
		show: boolean


		//Methods
		update(time : JulianDate) : boolean

	}
	export = DataSource

}
declare module 'cesium/DataSources/PositionProperty' {
	import Event = require('cesium/Core/Event')
	import ReferenceFrame = require('cesium/Core/ReferenceFrame')
	import Property = require('cesium/DataSources/Property')
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import JulianDate = require('cesium/Core/JulianDate')
	class PositionProperty 
	{
		constructor();
		//Members
		definitionChanged: Event
		isConstant: boolean
		referenceFrame: ReferenceFrame


		//Methods
		equals(other : Property|string) : boolean
		getValue(time : JulianDate, result : Cartesian3) : Cartesian3
		getValueInReferenceFrame(time : JulianDate, referenceFrame : ReferenceFrame, result : Cartesian3) : Cartesian3

	}
	export = PositionProperty

}
declare module 'cesium/DataSources/MaterialProperty' {
	import Event = require('cesium/Core/Event')
	import Property = require('cesium/DataSources/Property')
	import JulianDate = require('cesium/Core/JulianDate')
	class MaterialProperty 
	{
		constructor();
		//Members
		definitionChanged: Event
		isConstant: boolean


		//Methods
		equals(other : Property|string) : boolean
		getType(time : JulianDate) : string
		getValue(time : JulianDate, result : any) : Object

	}
	export = MaterialProperty

}
declare module 'cesium/DataSources/BoxGraphicsOptions' {
	import Property = require('cesium/DataSources/Property')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	interface BoxGraphicsOptions
	{
		dimensions?: Property|string;
		show?: Property|string;
		fill?: Property|string;
		material?: MaterialProperty;
		outline?: Property|string;
		outlineColor?: Property|string;
		outlineWidth?: Property|string;
		shadows?: Property|string;
	}
	export = BoxGraphicsOptions

}
declare module 'cesium/DataSources/BoxGraphics' {
	import BoxGraphicsOptions = require('cesium/DataSources/BoxGraphicsOptions')
	import Event = require('cesium/Core/Event')
	import Property = require('cesium/DataSources/Property')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	class BoxGraphics 
	{
		constructor(options? : BoxGraphicsOptions);
		//Members
		definitionChanged: Event
		dimensions: Property|string
		fill: Property|string
		material: MaterialProperty
		outline: Property|string
		outlineColor: Property|string
		outlineWidth: Property|string
		shadows: Property|string
		show: Property|string


		//Methods
		clone(result : BoxGraphics) : BoxGraphics
		merge(source : BoxGraphics) : void

	}
	export = BoxGraphics

}
declare module 'cesium/DataSources/CorridorGraphicsOptions' {
	import Property = require('cesium/DataSources/Property')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	interface CorridorGraphicsOptions
	{
		positions?: Property|string;
		width?: Property|string;
		cornerType?: Property|string;
		height?: Property|string;
		extrudedHeight?: Property|string;
		show?: Property|string;
		fill?: Property|string;
		material?: MaterialProperty;
		outline?: Property|string;
		outlineColor?: Property|string;
		outlineWidth?: Property|string;
		granularity?: Property|string;
		shadows?: Property|string;
	}
	export = CorridorGraphicsOptions

}
declare module 'cesium/DataSources/CorridorGraphics' {
	import CorridorGraphicsOptions = require('cesium/DataSources/CorridorGraphicsOptions')
	import Property = require('cesium/DataSources/Property')
	import Event = require('cesium/Core/Event')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	class CorridorGraphics 
	{
		constructor(options? : CorridorGraphicsOptions);
		//Members
		cornerType: Property|string
		definitionChanged: Event
		extrudedHeight: Property|string
		fill: Property|string
		granularity: Property|string
		height: Property|string
		material: MaterialProperty
		outline: Property|string
		outlineColor: Property|string
		outlineWidth: Property|string
		positions: Property|string
		shadows: Property|string
		show: Property|string
		width: Property|string


		//Methods
		clone(result : CorridorGraphics) : CorridorGraphics
		merge(source : CorridorGraphics) : void

	}
	export = CorridorGraphics

}
declare module 'cesium/DataSources/CylinderGraphicsOptions' {
	import Property = require('cesium/DataSources/Property')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	interface CylinderGraphicsOptions
	{
		length?: Property|string;
		topRadius?: Property|string;
		bottomRadius?: Property|string;
		show?: Property|string;
		fill?: Property|string;
		material?: MaterialProperty;
		outline?: Property|string;
		outlineColor?: Property|string;
		outlineWidth?: Property|string;
		numberOfVerticalLines?: Property|string;
		slices?: Property|string;
		shadows?: Property|string;
	}
	export = CylinderGraphicsOptions

}
declare module 'cesium/DataSources/CylinderGraphics' {
	import CylinderGraphicsOptions = require('cesium/DataSources/CylinderGraphicsOptions')
	import Property = require('cesium/DataSources/Property')
	import Event = require('cesium/Core/Event')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	class CylinderGraphics 
	{
		constructor(options? : CylinderGraphicsOptions);
		//Members
		bottomRadius: Property|string
		definitionChanged: Event
		fill: Property|string
		length: Property|string
		material: MaterialProperty
		numberOfVerticalLines: Property|string
		outline: Property|string
		outlineColor: Property|string
		outlineWidth: Property|string
		shadows: Property|string
		show: Property|string
		slices: Property|string
		topRadius: Property|string


		//Methods
		clone(result : CylinderGraphics) : CylinderGraphics
		merge(source : CylinderGraphics) : void

	}
	export = CylinderGraphics

}
declare module 'cesium/DataSources/EllipseGraphicsOptions' {
	import Property = require('cesium/DataSources/Property')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	interface EllipseGraphicsOptions
	{
		semiMajorAxis?: Property|string;
		semiMinorAxis?: Property|string;
		height?: Property|string;
		extrudedHeight?: Property|string;
		show?: Property|string;
		fill?: Property|string;
		material?: MaterialProperty;
		outline?: Property|string;
		outlineColor?: Property|string;
		outlineWidth?: Property|string;
		numberOfVerticalLines?: Property|string;
		rotation?: Property|string;
		stRotation?: Property|string;
		granularity?: Property|string;
		shadows?: Property|string;
	}
	export = EllipseGraphicsOptions

}
declare module 'cesium/DataSources/EllipseGraphics' {
	import EllipseGraphicsOptions = require('cesium/DataSources/EllipseGraphicsOptions')
	import Event = require('cesium/Core/Event')
	import Property = require('cesium/DataSources/Property')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	class EllipseGraphics 
	{
		constructor(options? : EllipseGraphicsOptions);
		//Members
		definitionChanged: Event
		extrudedHeight: Property|string
		fill: Property|string
		granularity: Property|string
		height: Property|string
		material: MaterialProperty
		numberOfVerticalLines: Property|string
		outline: Property|string
		outlineColor: Property|string
		outlineWidth: Property|string
		rotation: Property|string
		semiMajorAxis: Property|string
		semiMinorAxis: Property|string
		shadows: Property|string
		show: Property|string
		stRotation: Property|string


		//Methods
		clone(result : EllipseGraphics) : EllipseGraphics
		merge(source : EllipseGraphics) : void

	}
	export = EllipseGraphics

}
declare module 'cesium/DataSources/EllipsoidGraphicsOptions' {
	import Property = require('cesium/DataSources/Property')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	interface EllipsoidGraphicsOptions
	{
		radii?: Property|string;
		show?: Property|string;
		fill?: Property|string;
		material?: MaterialProperty;
		outline?: Property|string;
		outlineColor?: Property|string;
		outlineWidth?: Property|string;
		subdivisions?: Property|string;
		stackPartitions?: Property|string;
		slicePartitions?: Property|string;
		shadows?: Property|string;
	}
	export = EllipsoidGraphicsOptions

}
declare module 'cesium/DataSources/EllipsoidGraphics' {
	import EllipsoidGraphicsOptions = require('cesium/DataSources/EllipsoidGraphicsOptions')
	import Event = require('cesium/Core/Event')
	import Property = require('cesium/DataSources/Property')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	class EllipsoidGraphics 
	{
		constructor(options? : EllipsoidGraphicsOptions);
		//Members
		definitionChanged: Event
		fill: Property|string
		material: MaterialProperty
		outline: Property|string
		outlineColor: Property|string
		outlineWidth: Property|string
		radii: Property|string
		shadows: Property|string
		show: Property|string
		slicePartitions: Property|string
		stackPartitions: Property|string
		subdivisions: Property|string


		//Methods
		clone(result : EllipsoidGraphics) : EllipsoidGraphics
		merge(source : EllipsoidGraphics) : void

	}
	export = EllipsoidGraphics

}
declare module 'cesium/DataSources/LabelGraphicsOptions' {
	import Property = require('cesium/DataSources/Property')
	interface LabelGraphicsOptions
	{
		text?: Property|string;
		font?: Property|string;
		style?: Property|string;
		fillColor?: Property|string;
		outlineColor?: Property|string;
		outlineWidth?: Property|string;
		show?: Property|string;
		scale?: Property|string;
		horizontalOrigin?: Property|string;
		verticalOrigin?: Property|string;
		eyeOffset?: Property|string;
		pixelOffset?: Property|string;
		translucencyByDistance?: Property|string;
		pixelOffsetScaleByDistance?: Property|string;
		heightReference?: Property|string;
	}
	export = LabelGraphicsOptions

}
declare module 'cesium/DataSources/LabelGraphics' {
	import LabelGraphicsOptions = require('cesium/DataSources/LabelGraphicsOptions')
	import Event = require('cesium/Core/Event')
	import Property = require('cesium/DataSources/Property')
	class LabelGraphics 
	{
		constructor(options? : LabelGraphicsOptions);
		//Members
		definitionChanged: Event
		eyeOffset: Property|string
		fillColor: Property|string
		font: Property|string
		heightReference: Property|string
		horizontalOrigin: Property|string
		outlineColor: Property|string
		outlineWidth: Property|string
		pixelOffset: Property|string
		pixelOffsetScaleByDistance: Property|string
		scale: Property|string
		show: Property|string
		style: Property|string
		text: Property|string
		translucencyByDistance: Property|string
		verticalOrigin: Property|string


		//Methods
		clone(result : LabelGraphics) : LabelGraphics
		merge(source : LabelGraphics) : void

	}
	export = LabelGraphics

}
declare module 'cesium/DataSources/ModelGraphicsOptions' {
	import Property = require('cesium/DataSources/Property')
	interface ModelGraphicsOptions
	{
		uri?: Property|string;
		show?: Property|string;
		scale?: Property|string;
		minimumPixelSize?: Property|string;
		maximumScale?: Property|string;
		incrementallyLoadTextures?: Property|string;
		runAnimations?: Property|string;
		nodeTransformations?: Property|string;
		castShadows?: Property|string;
		receiveShadows?: Property|string;
		shadows?: Property|string;
		heightReference?: Property|string;
	}
	export = ModelGraphicsOptions

}
declare module 'cesium/DataSources/PropertyBag' {
	import Event = require('cesium/Core/Event')
	import Property = require('cesium/DataSources/Property')
	import JulianDate = require('cesium/Core/JulianDate')
	class PropertyBag 
	{
		constructor(value? : any, createPropertyCallback? : (()=>void));
		//Members
		definitionChanged: Event
		isConstant: boolean
		propertyNames: Array<any>


		//Methods
		addProperty(propertyName : string, value : Any, createPropertyCallback : (()=>void)) : void
		equals(other : Property|string) : boolean
		getValue(time : JulianDate, result : any) : Object
		hasProperty(propertyName : string) : boolean
		merge(source : any, createPropertyCallback : (()=>void)) : void
		removeProperty(propertyName : string) : void

	}
	export = PropertyBag

}
declare module 'cesium/DataSources/ModelGraphics' {
	import ModelGraphicsOptions = require('cesium/DataSources/ModelGraphicsOptions')
	import Property = require('cesium/DataSources/Property')
	import Event = require('cesium/Core/Event')
	import PropertyBag = require('cesium/DataSources/PropertyBag')
	class ModelGraphics 
	{
		constructor(options? : ModelGraphicsOptions);
		//Members
		castShadows: Property|string
		definitionChanged: Event
		heightReference: Property|string
		incrementallyLoadTextures: Property|string
		maximumScale: Property|string
		minimumPixelSize: Property|string
		nodeTransformations: PropertyBag
		receiveShadows: Property|string
		runAnimations: Property|string
		scale: Property|string
		shadows: Property|string
		show: Property|string
		uri: Property|string


		//Methods
		clone(result : ModelGraphics) : ModelGraphics
		merge(source : ModelGraphics) : void

	}
	export = ModelGraphics

}
declare module 'cesium/DataSources/PathGraphicsOptions' {
	import Property = require('cesium/DataSources/Property')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	interface PathGraphicsOptions
	{
		leadTime?: Property|string;
		trailTime?: Property|string;
		show?: Property|string;
		width?: Property|string;
		material?: MaterialProperty;
		resolution?: Property|string;
	}
	export = PathGraphicsOptions

}
declare module 'cesium/DataSources/PathGraphics' {
	import PathGraphicsOptions = require('cesium/DataSources/PathGraphicsOptions')
	import Event = require('cesium/Core/Event')
	import Property = require('cesium/DataSources/Property')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	class PathGraphics 
	{
		constructor(options? : PathGraphicsOptions);
		//Members
		definitionChanged: Event
		leadTime: Property|string
		material: MaterialProperty
		resolution: Property|string
		show: Property|string
		trailTime: Property|string
		width: Property|string


		//Methods
		clone(result : PathGraphics) : PathGraphics
		merge(source : PathGraphics) : void

	}
	export = PathGraphics

}
declare module 'cesium/DataSources/PointGraphicsOptions' {
	import Property = require('cesium/DataSources/Property')
	interface PointGraphicsOptions
	{
		color?: Property|string;
		pixelSize?: Property|string;
		outlineColor?: Property|string;
		outlineWidth?: Property|string;
		show?: Property|string;
		scaleByDistance?: Property|string;
		translucencyByDistance?: Property|string;
	}
	export = PointGraphicsOptions

}
declare module 'cesium/DataSources/PointGraphics' {
	import PointGraphicsOptions = require('cesium/DataSources/PointGraphicsOptions')
	import Property = require('cesium/DataSources/Property')
	import Event = require('cesium/Core/Event')
	class PointGraphics 
	{
		constructor(options? : PointGraphicsOptions);
		//Members
		color: Property|string
		definitionChanged: Event
		heightReference: Property|string
		outlineColor: Property|string
		outlineWidth: Property|string
		pixelSize: Property|string
		scaleByDistance: Property|string
		show: Property|string
		translucencyByDistance: Property|string


		//Methods
		clone(result : PointGraphics) : PointGraphics
		merge(source : PointGraphics) : void

	}
	export = PointGraphics

}
declare module 'cesium/DataSources/PolygonGraphicsOptions' {
	import Property = require('cesium/DataSources/Property')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	interface PolygonGraphicsOptions
	{
		hierarchy?: Property|string;
		height?: Property|string;
		extrudedHeight?: Property|string;
		show?: Property|string;
		fill?: Property|string;
		material?: MaterialProperty;
		outline?: Property|string;
		outlineColor?: Property|string;
		outlineWidth?: Property|string;
		stRotation?: Property|string;
		granularity?: Property|string;
		perPositionHeight?: Property|string;
		closeTop?: boolean;
		closeBottom?: boolean;
		shadows?: Property|string;
	}
	export = PolygonGraphicsOptions

}
declare module 'cesium/DataSources/PolygonGraphics' {
	import PolygonGraphicsOptions = require('cesium/DataSources/PolygonGraphicsOptions')
	import Property = require('cesium/DataSources/Property')
	import Event = require('cesium/Core/Event')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	class PolygonGraphics 
	{
		constructor(options? : PolygonGraphicsOptions);
		//Members
		closeBottom: Property|string
		closeTop: Property|string
		definitionChanged: Event
		extrudedHeight: Property|string
		fill: Property|string
		granularity: Property|string
		height: Property|string
		hierarchy: Property|string
		material: MaterialProperty
		outline: Property|string
		outlineColor: Property|string
		outlineWidth: Property|string
		perPositionHeight: Property|string
		shadows: Property|string
		show: Property|string
		stRotation: Property|string


		//Methods
		clone(result : PolygonGraphics) : PolygonGraphics
		merge(source : PolygonGraphics) : void

	}
	export = PolygonGraphics

}
declare module 'cesium/DataSources/PolylineGraphicsOptions' {
	import Property = require('cesium/DataSources/Property')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	interface PolylineGraphicsOptions
	{
		positions?: Property|string;
		followSurface?: Property|string;
		width?: Property|string;
		show?: Property|string;
		material?: MaterialProperty;
		granularity?: Property|string;
		shadows?: Property|string;
	}
	export = PolylineGraphicsOptions

}
declare module 'cesium/DataSources/PolylineGraphics' {
	import PolylineGraphicsOptions = require('cesium/DataSources/PolylineGraphicsOptions')
	import Event = require('cesium/Core/Event')
	import Property = require('cesium/DataSources/Property')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	class PolylineGraphics 
	{
		constructor(options? : PolylineGraphicsOptions);
		//Members
		definitionChanged: Event
		followSurface: Property|string
		granularity: Property|string
		material: MaterialProperty
		positions: Property|string
		shadows: Property|string
		show: Property|string
		width: Property|string


		//Methods
		clone(result : PolylineGraphics) : PolylineGraphics
		merge(source : PolylineGraphics) : void

	}
	export = PolylineGraphics

}
declare module 'cesium/DataSources/PolylineVolumeGraphicsOptions' {
	import Property = require('cesium/DataSources/Property')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	interface PolylineVolumeGraphicsOptions
	{
		positions?: Property|string;
		shape?: Property|string;
		cornerType?: Property|string;
		show?: Property|string;
		fill?: Property|string;
		material?: MaterialProperty;
		outline?: Property|string;
		outlineColor?: Property|string;
		outlineWidth?: Property|string;
		granularity?: Property|string;
		shadows?: Property|string;
	}
	export = PolylineVolumeGraphicsOptions

}
declare module 'cesium/DataSources/PolylineVolumeGraphics' {
	import PolylineVolumeGraphicsOptions = require('cesium/DataSources/PolylineVolumeGraphicsOptions')
	import Property = require('cesium/DataSources/Property')
	import Event = require('cesium/Core/Event')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	class PolylineVolumeGraphics 
	{
		constructor(options? : PolylineVolumeGraphicsOptions);
		//Members
		cornerType: Property|string
		definitionChanged: Event
		fill: Property|string
		granularity: Property|string
		material: MaterialProperty
		outline: Property|string
		outlineColor: Property|string
		outlineWidth: Property|string
		positions: Property|string
		shadows: Property|string
		shape: Property|string
		show: Property|string


		//Methods
		clone(result : PolylineVolumeGraphics) : PolylineVolumeGraphics
		merge(source : PolylineVolumeGraphics) : void

	}
	export = PolylineVolumeGraphics

}
declare module 'cesium/DataSources/RectangleGraphicsOptions' {
	import Property = require('cesium/DataSources/Property')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	interface RectangleGraphicsOptions
	{
		coordinates?: Property|string;
		height?: Property|string;
		extrudedHeight?: Property|string;
		closeTop?: Property|string;
		closeBottom?: Property|string;
		show?: Property|string;
		fill?: Property|string;
		material?: MaterialProperty;
		outline?: Property|string;
		outlineColor?: Property|string;
		outlineWidth?: Property|string;
		rotation?: Property|string;
		stRotation?: Property|string;
		granularity?: Property|string;
		shadows?: Property|string;
	}
	export = RectangleGraphicsOptions

}
declare module 'cesium/DataSources/RectangleGraphics' {
	import RectangleGraphicsOptions = require('cesium/DataSources/RectangleGraphicsOptions')
	import Property = require('cesium/DataSources/Property')
	import Event = require('cesium/Core/Event')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	class RectangleGraphics 
	{
		constructor(options? : RectangleGraphicsOptions);
		//Members
		closeBottom: Property|string
		closeTop: Property|string
		coordinates: Property|string
		definitionChanged: Event
		extrudedHeight: Property|string
		fill: Property|string
		granularity: Property|string
		height: Property|string
		material: MaterialProperty
		outline: Property|string
		outlineColor: Property|string
		outlineWidth: Property|string
		rotation: Property|string
		shadows: Property|string
		show: Property|string
		stRotation: Property|string


		//Methods
		clone(result : RectangleGraphics) : RectangleGraphics
		merge(source : RectangleGraphics) : void

	}
	export = RectangleGraphics

}
declare module 'cesium/DataSources/WallGraphicsOptions' {
	import Property = require('cesium/DataSources/Property')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	interface WallGraphicsOptions
	{
		positions?: Property|string;
		maximumHeights?: Property|string;
		minimumHeights?: Property|string;
		show?: Property|string;
		fill?: Property|string;
		material?: MaterialProperty;
		outline?: Property|string;
		outlineColor?: Property|string;
		outlineWidth?: Property|string;
		granularity?: Property|string;
		shadows?: Property|string;
	}
	export = WallGraphicsOptions

}
declare module 'cesium/DataSources/WallGraphics' {
	import WallGraphicsOptions = require('cesium/DataSources/WallGraphicsOptions')
	import Event = require('cesium/Core/Event')
	import Property = require('cesium/DataSources/Property')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	class WallGraphics 
	{
		constructor(options? : WallGraphicsOptions);
		//Members
		definitionChanged: Event
		fill: Property|string
		granularity: Property|string
		material: MaterialProperty
		maximumHeights: Property|string
		minimumHeights: Property|string
		outline: Property|string
		outlineColor: Property|string
		outlineWidth: Property|string
		positions: Property|string
		shadows: Property|string
		show: Property|string


		//Methods
		clone(result : WallGraphics) : WallGraphics
		merge(source : WallGraphics) : void

	}
	export = WallGraphics

}
declare module 'cesium/DataSources/EntityOptions' {
	import TimeIntervalCollection = require('cesium/Core/TimeIntervalCollection')
	import Property = require('cesium/DataSources/Property')
	import PositionProperty = require('cesium/DataSources/PositionProperty')
	import Entity = require('cesium/DataSources/Entity')
	import BillboardGraphics = require('cesium/DataSources/BillboardGraphics')
	import BoxGraphics = require('cesium/DataSources/BoxGraphics')
	import CorridorGraphics = require('cesium/DataSources/CorridorGraphics')
	import CylinderGraphics = require('cesium/DataSources/CylinderGraphics')
	import EllipseGraphics = require('cesium/DataSources/EllipseGraphics')
	import EllipsoidGraphics = require('cesium/DataSources/EllipsoidGraphics')
	import LabelGraphics = require('cesium/DataSources/LabelGraphics')
	import ModelGraphics = require('cesium/DataSources/ModelGraphics')
	import PathGraphics = require('cesium/DataSources/PathGraphics')
	import PointGraphics = require('cesium/DataSources/PointGraphics')
	import PolygonGraphics = require('cesium/DataSources/PolygonGraphics')
	import PolylineGraphics = require('cesium/DataSources/PolylineGraphics')
	import PolylineVolumeGraphics = require('cesium/DataSources/PolylineVolumeGraphics')
	import RectangleGraphics = require('cesium/DataSources/RectangleGraphics')
	import WallGraphics = require('cesium/DataSources/WallGraphics')
	interface EntityOptions
	{
		id?: string;
		name?: string;
		availability?: TimeIntervalCollection;
		show?: boolean;
		description?: Property|string;
		position?: PositionProperty;
		orientation?: Property|string;
		viewFrom?: Property|string;
		parent?: Entity;
		billboard?: BillboardGraphics;
		box?: BoxGraphics;
		corridor?: CorridorGraphics;
		cylinder?: CylinderGraphics;
		ellipse?: EllipseGraphics;
		ellipsoid?: EllipsoidGraphics;
		label?: LabelGraphics;
		model?: ModelGraphics;
		path?: PathGraphics;
		point?: PointGraphics;
		polygon?: PolygonGraphics;
		polyline?: PolylineGraphics;
		polylineVolume?: PolylineVolumeGraphics;
		rectangle?: RectangleGraphics;
		wall?: WallGraphics;
	}
	export = EntityOptions

}
declare module 'cesium/DataSources/Entity' {
	import EntityOptions = require('cesium/DataSources/EntityOptions')
	import TimeIntervalCollection = require('cesium/Core/TimeIntervalCollection')
	import BillboardGraphics = require('cesium/DataSources/BillboardGraphics')
	import BoxGraphics = require('cesium/DataSources/BoxGraphics')
	import CorridorGraphics = require('cesium/DataSources/CorridorGraphics')
	import CylinderGraphics = require('cesium/DataSources/CylinderGraphics')
	import Event = require('cesium/Core/Event')
	import Property = require('cesium/DataSources/Property')
	import EllipseGraphics = require('cesium/DataSources/EllipseGraphics')
	import EllipsoidGraphics = require('cesium/DataSources/EllipsoidGraphics')
	import EntityCollection = require('cesium/DataSources/EntityCollection')
	import LabelGraphics = require('cesium/DataSources/LabelGraphics')
	import ModelGraphics = require('cesium/DataSources/ModelGraphics')
	import PathGraphics = require('cesium/DataSources/PathGraphics')
	import PointGraphics = require('cesium/DataSources/PointGraphics')
	import PolygonGraphics = require('cesium/DataSources/PolygonGraphics')
	import PolylineGraphics = require('cesium/DataSources/PolylineGraphics')
	import PolylineVolumeGraphics = require('cesium/DataSources/PolylineVolumeGraphics')
	import PositionProperty = require('cesium/DataSources/PositionProperty')
	import RectangleGraphics = require('cesium/DataSources/RectangleGraphics')
	import WallGraphics = require('cesium/DataSources/WallGraphics')
	import JulianDate = require('cesium/Core/JulianDate')
	class Entity 
	{
		constructor(options? : EntityOptions);
		//Members
		availability: TimeIntervalCollection
		billboard: BillboardGraphics
		box: BoxGraphics
		corridor: CorridorGraphics
		cylinder: CylinderGraphics
		definitionChanged: Event
		description: Property|string
		ellipse: EllipseGraphics
		ellipsoid: EllipsoidGraphics
		entityCollection: EntityCollection
		id: string
		isShowing: boolean
		label: LabelGraphics
		model: ModelGraphics
		name: string
		orientation: Property|string
		parent: Entity
		path: PathGraphics
		point: PointGraphics
		polygon: PolygonGraphics
		polyline: PolylineGraphics
		polylineVolume: PolylineVolumeGraphics
		position: PositionProperty
		propertyNames: Array<any>
		rectangle: RectangleGraphics
		show: boolean
		viewFrom: Property|string
		wall: WallGraphics


		//Methods
		addProperty(propertyName : string) : void
		isAvailable(time : JulianDate) : boolean
		merge(source : Entity) : void
		removeProperty(propertyName : string) : void

	}
	export = Entity

}
declare module 'cesium/DataSources/CompositeEntityCollection' {
	import EntityCollection = require('cesium/DataSources/EntityCollection')
	import DataSource = require('cesium/DataSources/DataSource')
	import Event = require('cesium/Core/Event')
	import Entity = require('cesium/DataSources/Entity')
	import TimeInterval = require('cesium/Core/TimeInterval')
	class CompositeEntityCollection 
	{
		constructor(collections? : Array<EntityCollection>, owner? : DataSource|CompositeEntityCollection);
		//Members
		collectionChanged: Event
		id: string
		owner: DataSource|CompositeEntityCollection
		values: Array<Entity>


		//Methods
		addCollection(collection : EntityCollection, index : number) : void
		computeAvailability() : TimeInterval
		contains(entity : Entity) : boolean
		containsCollection(collection : EntityCollection) : boolean
		getById(id : any) : Entity
		getCollection(index : number) : void
		getCollectionsLength() : void
		indexOfCollection(collection : EntityCollection) : number
		lowerCollection(collection : EntityCollection) : void
		lowerCollectionToBottom(collection : EntityCollection) : void
		raiseCollection(collection : EntityCollection) : void
		raiseCollectionToTop(collection : EntityCollection) : void
		removeAllCollections() : void
		removeCollection(collection : EntityCollection) : boolean
		resumeEvents() : void
		suspendEvents() : void

	}
	export = CompositeEntityCollection

}
declare module 'cesium/DataSources/EntityCollection' {
	import DataSource = require('cesium/DataSources/DataSource')
	import CompositeEntityCollection = require('cesium/DataSources/CompositeEntityCollection')
	import Event = require('cesium/Core/Event')
	import Entity = require('cesium/DataSources/Entity')
	import TimeInterval = require('cesium/Core/TimeInterval')
	class EntityCollection 
	{
		constructor(owner? : DataSource|CompositeEntityCollection);
		//Members
		collectionChanged: Event
		id: string
		owner: DataSource|CompositeEntityCollection
		show: boolean
		values: Array<Entity>


		//Methods
		static collectionChangedEventCallback(collection : EntityCollection, added : Array<Entity>, removed : Array<Entity>, changed : Array<Entity>) : void
		add(entity : Entity) : Entity
		computeAvailability() : TimeInterval
		contains(entity : Entity) : boolean
		getById(id : any) : Entity
		getOrCreateEntity(id : any) : Entity
		remove(entity : Entity) : boolean
		removeAll() : void
		removeById(id : any) : boolean
		resumeEvents() : void
		suspendEvents() : void

	}
	export = EntityCollection

}
declare module 'cesium/DataSources/BillboardVisualizer' {
	import Scene = require('cesium/Scene/Scene')
	import EntityCollection = require('cesium/DataSources/EntityCollection')
	import JulianDate = require('cesium/Core/JulianDate')
	class BillboardVisualizer 
	{
		constructor(scene : Scene, entityCollection : EntityCollection);
		//Members


		//Methods
		destroy() : void
		isDestroyed() : boolean
		update(time : JulianDate) : boolean

	}
	export = BillboardVisualizer

}
declare module 'cesium/Scene/MaterialOptions' {
	interface MaterialOptions
	{
		strict?: boolean;
		translucent?: boolean|(()=>void);
		fabric: Object;
	}
	export = MaterialOptions

}
declare module 'cesium/Scene/Material' {
	import MaterialOptions = require('cesium/Scene/MaterialOptions')
	class Material 
	{
		constructor(options? : MaterialOptions);
		//Members
		static AlphaMapType: string
		static BumpMapType: string
		static CheckerboardType: string
		static ColorType: string
		static DefaultCubeMapId: string
		static DefaultImageId: string
		static DiffuseMapType: string
		static DotType: string
		static EmissionMapType: string
		static FadeType: string
		static GridType: string
		static ImageType: string
		static NormalMapType: string
		static PolylineArrowType: string
		static PolylineGlowType: string
		static PolylineOutlineType: string
		static RimLightingType: string
		static SpecularMapType: string
		static StripeType: string
		static WaterType: string
		materials: Object
		shaderSource: string
		translucent: boolean|(()=>void)
		type: string
		uniforms: Object


		//Methods
		static fromType(type : string, uniforms : any) : Material
		destroy() : void
		isDestroyed() : boolean
		isTranslucent() : void

	}
	export = Material

}
declare module 'cesium/Scene/AppearanceOptions' {
	import Material = require('cesium/Scene/Material')
	interface AppearanceOptions
	{
		translucent?: boolean;
		closed?: boolean;
		material?: Material;
		vertexShaderSource?: string;
		fragmentShaderSource?: string;
		renderState?: RenderState;
	}
	export = AppearanceOptions

}
declare module 'cesium/Scene/Appearance' {
	import AppearanceOptions = require('cesium/Scene/AppearanceOptions')
	import Material = require('cesium/Scene/Material')
	class Appearance 
	{
		constructor(options? : AppearanceOptions);
		//Members
		closed: boolean
		fragmentShaderSource: string
		material: Material
		renderState: Object
		translucent: boolean
		vertexShaderSource: string


		//Methods
		getFragmentShaderSource() : string
		getRenderState() : Object
		isTranslucent() : boolean

	}
	export = Appearance

}
declare module 'cesium/DataSources/DynamicGeometryUpdater' {
	import JulianDate = require('cesium/Core/JulianDate')
	class DynamicGeometryUpdater 
	{
		constructor();
		//Members


		//Methods
		destroy() : void
		isDestroyed() : boolean
		update(time : JulianDate) : void

	}
	export = DynamicGeometryUpdater

}
declare module 'cesium/DataSources/BoxGeometryUpdater' {
	import Entity = require('cesium/DataSources/Entity')
	import Scene = require('cesium/Scene/Scene')
	import Appearance = require('cesium/Scene/Appearance')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	import Property = require('cesium/DataSources/Property')
	import DynamicGeometryUpdater = require('cesium/DataSources/DynamicGeometryUpdater')
	import PrimitiveCollection = require('cesium/Scene/PrimitiveCollection')
	import GeometryInstance = require('cesium/Core/GeometryInstance')
	import JulianDate = require('cesium/Core/JulianDate')
	class BoxGeometryUpdater 
	{
		constructor(entity : Entity, scene : Scene);
		//Members
		static materialAppearanceType: Appearance
		static perInstanceColorAppearanceType: Appearance
		entity: Entity
		fillEnabled: boolean
		fillMaterialProperty: MaterialProperty
		geometryChanged: boolean
		hasConstantFill: boolean
		hasConstantOutline: boolean
		isClosed: boolean
		isDynamic: boolean
		outlineColorProperty: Property|string
		outlineEnabled: boolean
		outlineWidth: number
		shadowsProperty: Property|string


		//Methods
		createDynamicUpdater(primitives : PrimitiveCollection) : DynamicGeometryUpdater
		createFillGeometryInstance(time : JulianDate) : GeometryInstance
		createOutlineGeometryInstance(time : JulianDate) : GeometryInstance
		destroy() : void
		isDestroyed() : boolean
		isFilled(time : JulianDate) : boolean
		isOutlineVisible(time : JulianDate) : boolean

	}
	export = BoxGeometryUpdater

}
declare module 'cesium/DataSources/CallbackProperty' {
	import Event = require('cesium/Core/Event')
	import Property = require('cesium/DataSources/Property')
	import JulianDate = require('cesium/Core/JulianDate')
	class CallbackProperty 
	{
		constructor(callback : any, isConstant : boolean);
		//Members
		definitionChanged: Event
		isConstant: boolean


		//Methods
		equals(other : Property|string) : boolean
		getValue(time : JulianDate, result : any) : Object
		setCallback(callback : any, isConstant : boolean) : void

	}
	export = CallbackProperty

}
declare module 'cesium/DataSources/CheckerboardMaterialPropertyOptions' {
	import Property = require('cesium/DataSources/Property')
	interface CheckerboardMaterialPropertyOptions
	{
		evenColor?: Property|string;
		oddColor?: Property|string;
		repeat?: Property|string;
	}
	export = CheckerboardMaterialPropertyOptions

}
declare module 'cesium/DataSources/CheckerboardMaterialProperty' {
	import CheckerboardMaterialPropertyOptions = require('cesium/DataSources/CheckerboardMaterialPropertyOptions')
	import Event = require('cesium/Core/Event')
	import Property = require('cesium/DataSources/Property')
	import JulianDate = require('cesium/Core/JulianDate')
	class CheckerboardMaterialProperty 
	{
		constructor(options? : CheckerboardMaterialPropertyOptions);
		//Members
		definitionChanged: Event
		evenColor: Property|string
		isConstant: boolean
		oddColor: Property|string
		repeat: Property|string


		//Methods
		equals(other : Property|string) : boolean
		getType(time : JulianDate) : string
		getValue(time : JulianDate, result : any) : Object

	}
	export = CheckerboardMaterialProperty

}
declare module 'cesium/DataSources/ColorMaterialProperty' {
	import Property = require('cesium/DataSources/Property')
	import Event = require('cesium/Core/Event')
	import JulianDate = require('cesium/Core/JulianDate')
	class ColorMaterialProperty 
	{
		constructor(color? : Property|string);
		//Members
		color: Property|string
		definitionChanged: Event
		isConstant: boolean


		//Methods
		equals(other : Property|string) : boolean
		getType(time : JulianDate) : string
		getValue(time : JulianDate, result : any) : Object

	}
	export = ColorMaterialProperty

}
declare module 'cesium/DataSources/CompositeMaterialProperty' {
	import Event = require('cesium/Core/Event')
	import TimeIntervalCollection = require('cesium/Core/TimeIntervalCollection')
	import Property = require('cesium/DataSources/Property')
	import JulianDate = require('cesium/Core/JulianDate')
	class CompositeMaterialProperty 
	{
		constructor();
		//Members
		definitionChanged: Event
		intervals: TimeIntervalCollection
		isConstant: boolean


		//Methods
		equals(other : Property|string) : boolean
		getType(time : JulianDate) : string
		getValue(time : JulianDate, result : any) : Object

	}
	export = CompositeMaterialProperty

}
declare module 'cesium/DataSources/CompositePositionProperty' {
	import ReferenceFrame = require('cesium/Core/ReferenceFrame')
	import Event = require('cesium/Core/Event')
	import TimeIntervalCollection = require('cesium/Core/TimeIntervalCollection')
	import Property = require('cesium/DataSources/Property')
	import JulianDate = require('cesium/Core/JulianDate')
	import Cartesian3 = require('cesium/Core/Cartesian3')
	class CompositePositionProperty 
	{
		constructor(referenceFrame? : ReferenceFrame);
		//Members
		definitionChanged: Event
		intervals: TimeIntervalCollection
		isConstant: boolean
		referenceFrame: ReferenceFrame


		//Methods
		equals(other : Property|string) : boolean
		getValue(time : JulianDate, result : any) : Object
		getValueInReferenceFrame(time : JulianDate, referenceFrame : ReferenceFrame, result : Cartesian3) : Cartesian3

	}
	export = CompositePositionProperty

}
declare module 'cesium/DataSources/CompositeProperty' {
	import Event = require('cesium/Core/Event')
	import TimeIntervalCollection = require('cesium/Core/TimeIntervalCollection')
	import Property = require('cesium/DataSources/Property')
	import JulianDate = require('cesium/Core/JulianDate')
	class CompositeProperty 
	{
		constructor();
		//Members
		definitionChanged: Event
		intervals: TimeIntervalCollection
		isConstant: boolean


		//Methods
		equals(other : Property|string) : boolean
		getValue(time : JulianDate, result : any) : Object

	}
	export = CompositeProperty

}
declare module 'cesium/DataSources/ConstantPositionProperty' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import ReferenceFrame = require('cesium/Core/ReferenceFrame')
	import Event = require('cesium/Core/Event')
	import Property = require('cesium/DataSources/Property')
	import JulianDate = require('cesium/Core/JulianDate')
	class ConstantPositionProperty 
	{
		constructor(value? : Cartesian3, referenceFrame? : ReferenceFrame);
		//Members
		definitionChanged: Event
		isConstant: boolean
		referenceFrame: ReferenceFrame


		//Methods
		equals(other : Property|string) : boolean
		getValue(time : JulianDate, result : any) : Object
		getValueInReferenceFrame(time : JulianDate, referenceFrame : ReferenceFrame, result : Cartesian3) : Cartesian3
		setValue(value : Cartesian3, referenceFrame : ReferenceFrame) : void

	}
	export = ConstantPositionProperty

}
declare module 'cesium/DataSources/ConstantProperty' {
	import Event = require('cesium/Core/Event')
	import Property = require('cesium/DataSources/Property')
	import JulianDate = require('cesium/Core/JulianDate')
	class ConstantProperty 
	{
		constructor(value? : any);
		//Members
		definitionChanged: Event
		isConstant: boolean


		//Methods
		equals(other : Property|string) : boolean
		getValue(time : JulianDate, result : any) : Object
		setValue(value : any) : void

	}
	export = ConstantProperty

}
declare module 'cesium/DataSources/CorridorGeometryUpdater' {
	import Entity = require('cesium/DataSources/Entity')
	import Scene = require('cesium/Scene/Scene')
	import Appearance = require('cesium/Scene/Appearance')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	import Property = require('cesium/DataSources/Property')
	import DynamicGeometryUpdater = require('cesium/DataSources/DynamicGeometryUpdater')
	import PrimitiveCollection = require('cesium/Scene/PrimitiveCollection')
	import GeometryInstance = require('cesium/Core/GeometryInstance')
	import JulianDate = require('cesium/Core/JulianDate')
	class CorridorGeometryUpdater 
	{
		constructor(entity : Entity, scene : Scene);
		//Members
		static materialAppearanceType: Appearance
		static perInstanceColorAppearanceType: Appearance
		entity: Entity
		fillEnabled: boolean
		fillMaterialProperty: MaterialProperty
		geometryChanged: boolean
		hasConstantFill: boolean
		hasConstantOutline: boolean
		isClosed: boolean
		isDynamic: boolean
		onTerrain: boolean
		outlineColorProperty: Property|string
		outlineEnabled: boolean
		outlineWidth: number
		shadowsProperty: Property|string


		//Methods
		createDynamicUpdater(primitives : PrimitiveCollection) : DynamicGeometryUpdater
		createFillGeometryInstance(time : JulianDate) : GeometryInstance
		createOutlineGeometryInstance(time : JulianDate) : GeometryInstance
		destroy() : void
		isDestroyed() : boolean
		isFilled(time : JulianDate) : boolean
		isOutlineVisible(time : JulianDate) : boolean

	}
	export = CorridorGeometryUpdater

}
declare module 'cesium/DataSources/CustomDataSource' {
	import Event = require('cesium/Core/Event')
	import DataSourceClock = require('cesium/DataSources/DataSourceClock')
	import EntityCollection = require('cesium/DataSources/EntityCollection')
	class CustomDataSource 
	{
		constructor(name? : string);
		//Members
		changedEvent: Event
		clock: DataSourceClock
		entities: EntityCollection
		errorEvent: Event
		isLoading: boolean
		loadingEvent: Event
		name: string
		show: boolean


		//Methods

	}
	export = CustomDataSource

}
declare module 'cesium/DataSources/CylinderGeometryUpdater' {
	import Entity = require('cesium/DataSources/Entity')
	import Scene = require('cesium/Scene/Scene')
	import Appearance = require('cesium/Scene/Appearance')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	import Property = require('cesium/DataSources/Property')
	import DynamicGeometryUpdater = require('cesium/DataSources/DynamicGeometryUpdater')
	import PrimitiveCollection = require('cesium/Scene/PrimitiveCollection')
	import GeometryInstance = require('cesium/Core/GeometryInstance')
	import JulianDate = require('cesium/Core/JulianDate')
	class CylinderGeometryUpdater 
	{
		constructor(entity : Entity, scene : Scene);
		//Members
		static materialAppearanceType: Appearance
		static perInstanceColorAppearanceType: Appearance
		entity: Entity
		fillEnabled: boolean
		fillMaterialProperty: MaterialProperty
		geometryChanged: boolean
		hasConstantFill: boolean
		hasConstantOutline: boolean
		isClosed: boolean
		isDynamic: boolean
		outlineColorProperty: Property|string
		outlineEnabled: boolean
		outlineWidth: number
		shadowsProperty: Property|string


		//Methods
		createDynamicUpdater(primitives : PrimitiveCollection) : DynamicGeometryUpdater
		createFillGeometryInstance(time : JulianDate) : GeometryInstance
		createOutlineGeometryInstance(time : JulianDate) : GeometryInstance
		destroy() : void
		isDestroyed() : boolean
		isFilled(time : JulianDate) : boolean
		isOutlineVisible(time : JulianDate) : boolean

	}
	export = CylinderGeometryUpdater

}
declare module 'cesium/DataSources/loadOptions' {
	interface loadOptions
	{
		sourceUri?: string;
	}
	export = loadOptions

}
declare module 'cesium/DataSources/processOptions' {
	interface processOptions
	{
		sourceUri?: string;
	}
	export = processOptions

}
declare module 'cesium/DataSources/CzmlDataSource' {
	import DataSource = require('cesium/DataSources/DataSource')
	import Event = require('cesium/Core/Event')
	import DataSourceClock = require('cesium/DataSources/DataSourceClock')
	import EntityCollection = require('cesium/DataSources/EntityCollection')
	import Promise = require('cesium/Promise')
	import loadOptions = require('cesium/DataSources/loadOptions')
	import TimeInterval = require('cesium/Core/TimeInterval')
	import processOptions = require('cesium/DataSources/processOptions')
	class CzmlDataSource extends DataSource
	{
		constructor(name? : string);
		//Members
		static updaters: Array<any>
		changedEvent: Event
		clock: DataSourceClock
		entities: EntityCollection
		errorEvent: Event
		isLoading: boolean
		loadingEvent: Event
		name: string
		show: boolean


		//Methods
		static load(data : string|any, options : loadOptions) : Promise<CzmlDataSource>
		static processMaterialPacketData(object : any, propertyName : string, packetData : any, interval : TimeInterval, sourceUri : string, entityCollection : EntityCollection) : void
		static processPacketData(type : (()=>void), object : any, propertyName : string, packetData : any, interval : TimeInterval, sourceUri : string, entityCollection : EntityCollection) : void
		static processPositionPacketData(object : any, propertyName : string, packetData : any, interval : TimeInterval, sourceUri : string, entityCollection : EntityCollection) : void
		load(czml : string|any, options : loadOptions) : Promise<CzmlDataSource>
		process(czml : string|any, options : processOptions) : Promise<CzmlDataSource>

	}
	export = CzmlDataSource

}
declare module 'cesium/DataSources/DataSourceCollection' {
	import Event = require('cesium/Core/Event')
	import DataSource = require('cesium/DataSources/DataSource')
	import Promise = require('cesium/Promise')
	class DataSourceCollection 
	{
		constructor();
		//Members
		dataSourceAdded: Event
		dataSourceRemoved: Event
		length: number


		//Methods
		add(dataSource : DataSource|Promise<DataSource>) : Promise<DataSource>
		contains(dataSource : DataSource) : boolean
		destroy() : void
		get(index : number) : void
		indexOf(dataSource : DataSource) : number
		isDestroyed() : boolean
		remove(dataSource : DataSource, destroy : boolean) : boolean
		removeAll(destroy : boolean) : void

	}
	export = DataSourceCollection

}
declare module 'cesium/DataSources/DataSourceDisplayOptions' {
	import Scene = require('cesium/Scene/Scene')
	import DataSourceCollection = require('cesium/DataSources/DataSourceCollection')
	interface DataSourceDisplayOptions
	{
		scene: Scene;
		dataSourceCollection: DataSourceCollection;
		visualizersCallback?: any;
	}
	export = DataSourceDisplayOptions

}
declare module 'cesium/DataSources/DataSourceDisplay' {
	import DataSourceDisplayOptions = require('cesium/DataSources/DataSourceDisplayOptions')
	import DataSourceCollection = require('cesium/DataSources/DataSourceCollection')
	import CustomDataSource = require('cesium/DataSources/CustomDataSource')
	import Scene = require('cesium/Scene/Scene')
	import JulianDate = require('cesium/Core/JulianDate')
	class DataSourceDisplay 
	{
		constructor(options? : DataSourceDisplayOptions);
		//Members
		static defaultVisualizersCallback: any
		dataSources: DataSourceCollection
		defaultDataSource: CustomDataSource
		ready: boolean
		scene: Scene


		//Methods
		destroy() : void
		isDestroyed() : boolean
		update(time : JulianDate) : boolean

	}
	export = DataSourceDisplay

}
declare module 'cesium/DataSources/EllipseGeometryUpdater' {
	import Entity = require('cesium/DataSources/Entity')
	import Scene = require('cesium/Scene/Scene')
	import Appearance = require('cesium/Scene/Appearance')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	import Property = require('cesium/DataSources/Property')
	import DynamicGeometryUpdater = require('cesium/DataSources/DynamicGeometryUpdater')
	import PrimitiveCollection = require('cesium/Scene/PrimitiveCollection')
	import GeometryInstance = require('cesium/Core/GeometryInstance')
	import JulianDate = require('cesium/Core/JulianDate')
	class EllipseGeometryUpdater 
	{
		constructor(entity : Entity, scene : Scene);
		//Members
		static materialAppearanceType: Appearance
		static perInstanceColorAppearanceType: Appearance
		entity: Entity
		fillEnabled: boolean
		fillMaterialProperty: MaterialProperty
		geometryChanged: boolean
		hasConstantFill: boolean
		hasConstantOutline: boolean
		isClosed: boolean
		isDynamic: boolean
		onTerrain: boolean
		outlineColorProperty: Property|string
		outlineEnabled: boolean
		outlineWidth: number
		shadowsProperty: Property|string


		//Methods
		createDynamicUpdater(primitives : PrimitiveCollection) : DynamicGeometryUpdater
		createFillGeometryInstance(time : JulianDate) : GeometryInstance
		createOutlineGeometryInstance(time : JulianDate) : GeometryInstance
		destroy() : void
		isDestroyed() : boolean
		isFilled(time : JulianDate) : boolean
		isOutlineVisible(time : JulianDate) : boolean

	}
	export = EllipseGeometryUpdater

}
declare module 'cesium/DataSources/EllipsoidGeometryUpdater' {
	import Entity = require('cesium/DataSources/Entity')
	import Scene = require('cesium/Scene/Scene')
	import Appearance = require('cesium/Scene/Appearance')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	import Property = require('cesium/DataSources/Property')
	import DynamicGeometryUpdater = require('cesium/DataSources/DynamicGeometryUpdater')
	import PrimitiveCollection = require('cesium/Scene/PrimitiveCollection')
	import GeometryInstance = require('cesium/Core/GeometryInstance')
	import JulianDate = require('cesium/Core/JulianDate')
	class EllipsoidGeometryUpdater 
	{
		constructor(entity : Entity, scene : Scene);
		//Members
		static materialAppearanceType: Appearance
		static perInstanceColorAppearanceType: Appearance
		entity: Entity
		fillEnabled: boolean
		fillMaterialProperty: MaterialProperty
		geometryChanged: boolean
		hasConstantFill: boolean
		hasConstantOutline: boolean
		isClosed: boolean
		isDynamic: boolean
		outlineColorProperty: Property|string
		outlineEnabled: boolean
		outlineWidth: number
		shadowsProperty: Property|string


		//Methods
		createDynamicUpdater(primitives : PrimitiveCollection) : DynamicGeometryUpdater
		createFillGeometryInstance(time : JulianDate) : GeometryInstance
		createOutlineGeometryInstance(time : JulianDate) : GeometryInstance
		destroy() : void
		isDestroyed() : boolean
		isFilled(time : JulianDate) : boolean
		isOutlineVisible(time : JulianDate) : boolean

	}
	export = EllipsoidGeometryUpdater

}
declare module 'cesium/DataSources/EntityView' {
	import Entity = require('cesium/DataSources/Entity')
	import Scene = require('cesium/Scene/Scene')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import BoundingSphere = require('cesium/Core/BoundingSphere')
	import JulianDate = require('cesium/Core/JulianDate')
	class EntityView 
	{
		constructor(entity : Entity, scene : Scene, ellipsoid? : Ellipsoid);
		//Members
		static defaultOffset3D: Cartesian3
		boundingSphere: BoundingSphere
		ellipsoid: Ellipsoid
		entity: Entity
		scene: Scene


		//Methods
		update(time : JulianDate, current : BoundingSphere) : void

	}
	export = EntityView

}
declare module 'cesium/DataSources/GeoJsonDataSource' {
	import Color = require('cesium/Core/Color')
	import Event = require('cesium/Core/Event')
	import DataSourceClock = require('cesium/DataSources/DataSourceClock')
	import EntityCollection = require('cesium/DataSources/EntityCollection')
	import Promise = require('cesium/Promise')
	import loadOptions = require('cesium/DataSources/loadOptions')
	class GeoJsonDataSource 
	{
		constructor(name? : string);
		//Members
		static clampToGround: boolean
		static crsLinkHrefs: Object
		static crsLinkTypes: Object
		static crsNames: Object
		static fill: Color
		static markerColor: Color
		static markerSize: number
		static markerSymbol: string
		static stroke: Color
		static strokeWidth: number
		changedEvent: Event
		clock: DataSourceClock
		entities: EntityCollection
		errorEvent: Event
		isLoading: boolean
		loadingEvent: Event
		name: string
		show: boolean


		//Methods
		static load(data : string|any, options : loadOptions) : Promise<GeoJsonDataSource>
		load(data : string|any, options : loadOptions) : Promise<GeoJsonDataSource>

	}
	export = GeoJsonDataSource

}
declare module 'cesium/DataSources/GeometryUpdater' {
	import Entity = require('cesium/DataSources/Entity')
	import Scene = require('cesium/Scene/Scene')
	import Appearance = require('cesium/Scene/Appearance')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	import Property = require('cesium/DataSources/Property')
	import DynamicGeometryUpdater = require('cesium/DataSources/DynamicGeometryUpdater')
	import PrimitiveCollection = require('cesium/Scene/PrimitiveCollection')
	import GeometryInstance = require('cesium/Core/GeometryInstance')
	import JulianDate = require('cesium/Core/JulianDate')
	class GeometryUpdater 
	{
		constructor(entity : Entity, scene : Scene);
		//Members
		static materialAppearanceType: Appearance
		static perInstanceColorAppearanceType: Appearance
		entity: Entity
		fillEnabled: boolean
		fillMaterialProperty: MaterialProperty
		geometryChanged: boolean
		hasConstantFill: boolean
		hasConstantOutline: boolean
		isClosed: boolean
		isDynamic: boolean
		outlineColorProperty: Property|string
		outlineEnabled: boolean
		outlineWidth: number


		//Methods
		createDynamicUpdater(primitives : PrimitiveCollection) : DynamicGeometryUpdater
		createFillGeometryInstance(time : JulianDate) : GeometryInstance
		createOutlineGeometryInstance(time : JulianDate) : GeometryInstance
		destroy() : void
		isDestroyed() : boolean
		isFilled(time : JulianDate) : boolean
		isOutlineVisible(time : JulianDate) : boolean

	}
	export = GeometryUpdater

}
declare module 'cesium/DataSources/GeometryVisualizer' {
	import GeometryUpdater = require('cesium/DataSources/GeometryUpdater')
	import Scene = require('cesium/Scene/Scene')
	import EntityCollection = require('cesium/DataSources/EntityCollection')
	import JulianDate = require('cesium/Core/JulianDate')
	class GeometryVisualizer 
	{
		constructor(type : GeometryUpdater, scene : Scene, entityCollection : EntityCollection);
		//Members


		//Methods
		destroy() : void
		isDestroyed() : boolean
		update(time : JulianDate) : boolean

	}
	export = GeometryVisualizer

}
declare module 'cesium/DataSources/GridMaterialPropertyOptions' {
	import Property = require('cesium/DataSources/Property')
	interface GridMaterialPropertyOptions
	{
		color?: Property|string;
		cellAlpha?: Property|string;
		lineCount?: Property|string;
		lineThickness?: Property|string;
		lineOffset?: Property|string;
	}
	export = GridMaterialPropertyOptions

}
declare module 'cesium/DataSources/GridMaterialProperty' {
	import GridMaterialPropertyOptions = require('cesium/DataSources/GridMaterialPropertyOptions')
	import Property = require('cesium/DataSources/Property')
	import Event = require('cesium/Core/Event')
	import JulianDate = require('cesium/Core/JulianDate')
	class GridMaterialProperty 
	{
		constructor(options? : GridMaterialPropertyOptions);
		//Members
		cellAlpha: Property|string
		color: Property|string
		definitionChanged: Event
		isConstant: boolean
		lineCount: Property|string
		lineOffset: Property|string
		lineThickness: Property|string


		//Methods
		equals(other : Property|string) : boolean
		getType(time : JulianDate) : string
		getValue(time : JulianDate, result : any) : Object

	}
	export = GridMaterialProperty

}
declare module 'cesium/DataSources/ImageMaterialPropertyOptions' {
	import Property = require('cesium/DataSources/Property')
	interface ImageMaterialPropertyOptions
	{
		image?: Property|string;
		repeat?: Property|string;
		color?: Property|string;
		transparent?: Property|string;
	}
	export = ImageMaterialPropertyOptions

}
declare module 'cesium/DataSources/ImageMaterialProperty' {
	import ImageMaterialPropertyOptions = require('cesium/DataSources/ImageMaterialPropertyOptions')
	import Property = require('cesium/DataSources/Property')
	import Event = require('cesium/Core/Event')
	import JulianDate = require('cesium/Core/JulianDate')
	class ImageMaterialProperty 
	{
		constructor(options? : ImageMaterialPropertyOptions);
		//Members
		color: Property|string
		definitionChanged: Event
		image: Property|string
		isConstant: boolean
		repeat: Property|string
		transparent: Property|string


		//Methods
		equals(other : Property|string) : boolean
		getType(time : JulianDate) : string
		getValue(time : JulianDate, result : any) : Object

	}
	export = ImageMaterialProperty

}
declare module 'cesium/DataSources/KmlDataSource' {
	import Camera = require('cesium/Scene/Camera')
	import DefaultProxy = require('cesium/Core/DefaultProxy')
	import Event = require('cesium/Core/Event')
	import DataSourceClock = require('cesium/DataSources/DataSourceClock')
	import EntityCollection = require('cesium/DataSources/EntityCollection')
	import Promise = require('cesium/Promise')
	import loadOptions = require('cesium/DataSources/loadOptions')
	import JulianDate = require('cesium/Core/JulianDate')
	class KmlDataSource 
	{
		constructor();
		//Members
		changedEvent: Event
		clock: DataSourceClock
		entities: EntityCollection
		errorEvent: Event
		isLoading: boolean
		loadingEvent: Event
		name: string
		refreshEvent: Event
		show: boolean
		unsupportedNodeEvent: Event


		//Methods
		static load(data : string|Document|Blob, options : loadOptions) : Promise<KmlDataSource>
		load(data : string|Document|Blob, options : loadOptions) : Promise<KmlDataSource>
		update(time : JulianDate) : boolean

	}
	export = KmlDataSource

}
declare module 'cesium/DataSources/KmlFeatureData' {
	class KmlFeatureData 
	{
		constructor();
		//Members
		address: string
		author: Object
		author.email: string
		author.name: string
		author.uri: string
		extendedData: string
		link: Object
		link.href: string
		link.hreflang: string
		link.length: string
		link.rel: string
		link.title: string
		link.type: string
		phoneNumber: string
		snippet: string


		//Methods

	}
	export = KmlFeatureData

}
declare module 'cesium/DataSources/LabelVisualizer' {
	import Scene = require('cesium/Scene/Scene')
	import EntityCollection = require('cesium/DataSources/EntityCollection')
	import JulianDate = require('cesium/Core/JulianDate')
	class LabelVisualizer 
	{
		constructor(scene : Scene, entityCollection : EntityCollection);
		//Members


		//Methods
		destroy() : void
		isDestroyed() : boolean
		update(time : JulianDate) : boolean

	}
	export = LabelVisualizer

}
declare module 'cesium/DataSources/ModelVisualizer' {
	import Scene = require('cesium/Scene/Scene')
	import EntityCollection = require('cesium/DataSources/EntityCollection')
	import JulianDate = require('cesium/Core/JulianDate')
	class ModelVisualizer 
	{
		constructor(scene : Scene, entityCollection : EntityCollection);
		//Members


		//Methods
		destroy() : void
		isDestroyed() : boolean
		update(time : JulianDate) : boolean

	}
	export = ModelVisualizer

}
declare module 'cesium/DataSources/NodeTransformationPropertyOptions' {
	import Property = require('cesium/DataSources/Property')
	interface NodeTransformationPropertyOptions
	{
		translation?: Property|string;
		rotation?: Property|string;
		scale?: Property|string;
	}
	export = NodeTransformationPropertyOptions

}
declare module 'cesium/DataSources/NodeTransformationProperty' {
	import NodeTransformationPropertyOptions = require('cesium/DataSources/NodeTransformationPropertyOptions')
	import Event = require('cesium/Core/Event')
	import Property = require('cesium/DataSources/Property')
	import TranslationRotationScale = require('cesium/Core/TranslationRotationScale')
	import JulianDate = require('cesium/Core/JulianDate')
	class NodeTransformationProperty 
	{
		constructor(options? : NodeTransformationPropertyOptions);
		//Members
		definitionChanged: Event
		isConstant: boolean
		rotation: Property|string
		scale: Property|string
		translation: Property|string


		//Methods
		equals(other : Property|string) : boolean
		getValue(time : JulianDate, result : TranslationRotationScale) : TranslationRotationScale

	}
	export = NodeTransformationProperty

}
declare module 'cesium/DataSources/PathVisualizer' {
	import Scene = require('cesium/Scene/Scene')
	import EntityCollection = require('cesium/DataSources/EntityCollection')
	import JulianDate = require('cesium/Core/JulianDate')
	class PathVisualizer 
	{
		constructor(scene : Scene, entityCollection : EntityCollection);
		//Members


		//Methods
		destroy() : void
		isDestroyed() : boolean
		update(time : JulianDate) : boolean

	}
	export = PathVisualizer

}
declare module 'cesium/DataSources/PointVisualizer' {
	import Scene = require('cesium/Scene/Scene')
	import EntityCollection = require('cesium/DataSources/EntityCollection')
	import JulianDate = require('cesium/Core/JulianDate')
	class PointVisualizer 
	{
		constructor(scene : Scene, entityCollection : EntityCollection);
		//Members


		//Methods
		destroy() : void
		isDestroyed() : boolean
		update(time : JulianDate) : boolean

	}
	export = PointVisualizer

}
declare module 'cesium/DataSources/PolygonGeometryUpdater' {
	import Entity = require('cesium/DataSources/Entity')
	import Scene = require('cesium/Scene/Scene')
	import Appearance = require('cesium/Scene/Appearance')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	import Property = require('cesium/DataSources/Property')
	import DynamicGeometryUpdater = require('cesium/DataSources/DynamicGeometryUpdater')
	import PrimitiveCollection = require('cesium/Scene/PrimitiveCollection')
	import GeometryInstance = require('cesium/Core/GeometryInstance')
	import JulianDate = require('cesium/Core/JulianDate')
	class PolygonGeometryUpdater 
	{
		constructor(entity : Entity, scene : Scene);
		//Members
		static materialAppearanceType: Appearance
		static perInstanceColorAppearanceType: Appearance
		entity: Entity
		fillEnabled: boolean
		fillMaterialProperty: MaterialProperty
		geometryChanged: boolean
		hasConstantFill: boolean
		hasConstantOutline: boolean
		isClosed: boolean
		isDynamic: boolean
		onTerrain: boolean
		outlineColorProperty: Property|string
		outlineEnabled: boolean
		outlineWidth: number
		shadowsProperty: Property|string


		//Methods
		createDynamicUpdater(primitives : PrimitiveCollection) : DynamicGeometryUpdater
		createFillGeometryInstance(time : JulianDate) : GeometryInstance
		createOutlineGeometryInstance(time : JulianDate) : GeometryInstance
		destroy() : void
		isDestroyed() : boolean
		isFilled(time : JulianDate) : boolean
		isOutlineVisible(time : JulianDate) : boolean

	}
	export = PolygonGeometryUpdater

}
declare module 'cesium/DataSources/PolylineArrowMaterialProperty' {
	import Property = require('cesium/DataSources/Property')
	import Event = require('cesium/Core/Event')
	import JulianDate = require('cesium/Core/JulianDate')
	class PolylineArrowMaterialProperty 
	{
		constructor(color? : Property|string);
		//Members
		color: Property|string
		definitionChanged: Event
		isConstant: boolean


		//Methods
		equals(other : Property|string) : boolean
		getType(time : JulianDate) : string
		getValue(time : JulianDate, result : any) : Object

	}
	export = PolylineArrowMaterialProperty

}
declare module 'cesium/DataSources/PolylineGeometryUpdater' {
	import Entity = require('cesium/DataSources/Entity')
	import Scene = require('cesium/Scene/Scene')
	import Appearance = require('cesium/Scene/Appearance')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	import Property = require('cesium/DataSources/Property')
	import DynamicGeometryUpdater = require('cesium/DataSources/DynamicGeometryUpdater')
	import PrimitiveCollection = require('cesium/Scene/PrimitiveCollection')
	import GeometryInstance = require('cesium/Core/GeometryInstance')
	import JulianDate = require('cesium/Core/JulianDate')
	class PolylineGeometryUpdater 
	{
		constructor(entity : Entity, scene : Scene);
		//Members
		static materialAppearanceType: Appearance
		static perInstanceColorAppearanceType: Appearance
		entity: Entity
		fillEnabled: boolean
		fillMaterialProperty: MaterialProperty
		geometryChanged: boolean
		hasConstantFill: boolean
		hasConstantOutline: boolean
		isClosed: boolean
		isDynamic: boolean
		outlineColorProperty: Property|string
		outlineEnabled: boolean
		shadowsProperty: Property|string


		//Methods
		createDynamicUpdater(primitives : PrimitiveCollection) : DynamicGeometryUpdater
		createFillGeometryInstance(time : JulianDate) : GeometryInstance
		createOutlineGeometryInstance(time : JulianDate) : GeometryInstance
		destroy() : void
		isDestroyed() : boolean
		isFilled(time : JulianDate) : boolean
		isOutlineVisible(time : JulianDate) : boolean

	}
	export = PolylineGeometryUpdater

}
declare module 'cesium/DataSources/PolylineGlowMaterialPropertyOptions' {
	import Property = require('cesium/DataSources/Property')
	interface PolylineGlowMaterialPropertyOptions
	{
		color?: Property|string;
		glowPower?: Property|string;
	}
	export = PolylineGlowMaterialPropertyOptions

}
declare module 'cesium/DataSources/PolylineGlowMaterialProperty' {
	import PolylineGlowMaterialPropertyOptions = require('cesium/DataSources/PolylineGlowMaterialPropertyOptions')
	import Property = require('cesium/DataSources/Property')
	import Event = require('cesium/Core/Event')
	import JulianDate = require('cesium/Core/JulianDate')
	class PolylineGlowMaterialProperty 
	{
		constructor(options? : PolylineGlowMaterialPropertyOptions);
		//Members
		color: Property|string
		definitionChanged: Event
		glowPower: Property|string
		isConstant: boolean


		//Methods
		equals(other : Property|string) : boolean
		getType(time : JulianDate) : string
		getValue(time : JulianDate, result : any) : Object

	}
	export = PolylineGlowMaterialProperty

}
declare module 'cesium/DataSources/PolylineOutlineMaterialPropertyOptions' {
	import Property = require('cesium/DataSources/Property')
	interface PolylineOutlineMaterialPropertyOptions
	{
		color?: Property|string;
		outlineColor?: Property|string;
		outlineWidth?: Property|string;
	}
	export = PolylineOutlineMaterialPropertyOptions

}
declare module 'cesium/DataSources/PolylineOutlineMaterialProperty' {
	import PolylineOutlineMaterialPropertyOptions = require('cesium/DataSources/PolylineOutlineMaterialPropertyOptions')
	import Property = require('cesium/DataSources/Property')
	import Event = require('cesium/Core/Event')
	import JulianDate = require('cesium/Core/JulianDate')
	class PolylineOutlineMaterialProperty 
	{
		constructor(options? : PolylineOutlineMaterialPropertyOptions);
		//Members
		color: Property|string
		definitionChanged: Event
		isConstant: boolean
		outlineColor: Property|string
		outlineWidth: Property|string


		//Methods
		equals(other : Property|string) : boolean
		getType(time : JulianDate) : string
		getValue(time : JulianDate, result : any) : Object

	}
	export = PolylineOutlineMaterialProperty

}
declare module 'cesium/DataSources/PolylineVolumeGeometryUpdater' {
	import Entity = require('cesium/DataSources/Entity')
	import Scene = require('cesium/Scene/Scene')
	import Appearance = require('cesium/Scene/Appearance')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	import Property = require('cesium/DataSources/Property')
	import DynamicGeometryUpdater = require('cesium/DataSources/DynamicGeometryUpdater')
	import PrimitiveCollection = require('cesium/Scene/PrimitiveCollection')
	import GeometryInstance = require('cesium/Core/GeometryInstance')
	import JulianDate = require('cesium/Core/JulianDate')
	class PolylineVolumeGeometryUpdater 
	{
		constructor(entity : Entity, scene : Scene);
		//Members
		static materialAppearanceType: Appearance
		static perInstanceColorAppearanceType: Appearance
		entity: Entity
		fillEnabled: boolean
		fillMaterialProperty: MaterialProperty
		geometryChanged: boolean
		hasConstantFill: boolean
		hasConstantOutline: boolean
		isClosed: boolean
		isDynamic: boolean
		outlineColorProperty: Property|string
		outlineEnabled: boolean
		outlineWidth: number
		shadowsProperty: Property|string


		//Methods
		createDynamicUpdater(primitives : PrimitiveCollection) : DynamicGeometryUpdater
		createFillGeometryInstance(time : JulianDate) : GeometryInstance
		createOutlineGeometryInstance(time : JulianDate) : GeometryInstance
		destroy() : void
		isDestroyed() : boolean
		isFilled(time : JulianDate) : boolean
		isOutlineVisible(time : JulianDate) : boolean

	}
	export = PolylineVolumeGeometryUpdater

}
declare module 'cesium/DataSources/PositionPropertyArray' {
	import Property = require('cesium/DataSources/Property')
	import ReferenceFrame = require('cesium/Core/ReferenceFrame')
	import Event = require('cesium/Core/Event')
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import JulianDate = require('cesium/Core/JulianDate')
	class PositionPropertyArray 
	{
		constructor(value? : Array<Property>, referenceFrame? : ReferenceFrame);
		//Members
		definitionChanged: Event
		isConstant: boolean
		referenceFrame: ReferenceFrame


		//Methods
		equals(other : Property|string) : boolean
		getValue(time : JulianDate, result : Array<Cartesian3>) : Array<Cartesian3>
		getValueInReferenceFrame(time : JulianDate, referenceFrame : ReferenceFrame, result : Cartesian3) : Cartesian3
		setValue(value : Array<Property>) : void

	}
	export = PositionPropertyArray

}
declare module 'cesium/DataSources/PropertyArray' {
	import Property = require('cesium/DataSources/Property')
	import Event = require('cesium/Core/Event')
	import JulianDate = require('cesium/Core/JulianDate')
	class PropertyArray 
	{
		constructor(value? : Array<Property>);
		//Members
		definitionChanged: Event
		isConstant: boolean


		//Methods
		equals(other : Property|string) : boolean
		getValue(time : JulianDate, result : Array<any>) : Array<Object>
		setValue(value : Array<Property>) : void

	}
	export = PropertyArray

}
declare module 'cesium/DataSources/RectangleGeometryUpdater' {
	import Entity = require('cesium/DataSources/Entity')
	import Scene = require('cesium/Scene/Scene')
	import Appearance = require('cesium/Scene/Appearance')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	import Property = require('cesium/DataSources/Property')
	import DynamicGeometryUpdater = require('cesium/DataSources/DynamicGeometryUpdater')
	import GeometryInstance = require('cesium/Core/GeometryInstance')
	import JulianDate = require('cesium/Core/JulianDate')
	class RectangleGeometryUpdater 
	{
		constructor(entity : Entity, scene : Scene);
		//Members
		static materialAppearanceType: Appearance
		static perInstanceColorAppearanceType: Appearance
		entity: Entity
		fillEnabled: boolean
		fillMaterialProperty: MaterialProperty
		geometryChanged: boolean
		hasConstantFill: boolean
		hasConstantOutline: boolean
		isClosed: boolean
		isDynamic: boolean
		onTerrain: boolean
		outlineColorProperty: Property|string
		outlineEnabled: boolean
		outlineWidth: number
		shadowsProperty: Property|string


		//Methods
		createDynamicUpdater(primitives, primitives) : DynamicGeometryUpdater
		createFillGeometryInstance(time : JulianDate) : GeometryInstance
		createOutlineGeometryInstance(time : JulianDate) : GeometryInstance
		destroy() : void
		isDestroyed() : boolean
		isFilled(time : JulianDate) : boolean
		isOutlineVisible(time : JulianDate) : boolean

	}
	export = RectangleGeometryUpdater

}
declare module 'cesium/DataSources/ReferenceProperty' {
	import EntityCollection = require('cesium/DataSources/EntityCollection')
	import Event = require('cesium/Core/Event')
	import ReferenceFrame = require('cesium/Core/ReferenceFrame')
	import Property = require('cesium/DataSources/Property')
	import JulianDate = require('cesium/Core/JulianDate')
	import Cartesian3 = require('cesium/Core/Cartesian3')
	class ReferenceProperty 
	{
		constructor(targetCollection : EntityCollection, targetId : string, targetPropertyNames : Array<string>);
		//Members
		definitionChanged: Event
		isConstant: boolean
		referenceFrame: ReferenceFrame
		resolvedProperty: Property|string
		targetCollection: EntityCollection
		targetId: string
		targetPropertyNames: Array<string>


		//Methods
		static fromString(targetCollection : EntityCollection, referenceString : string) : ReferenceProperty
		equals(other : Property|string) : boolean
		getType(time : JulianDate) : string
		getValue(time : JulianDate, result : any) : Object
		getValueInReferenceFrame(time : JulianDate, referenceFrame : ReferenceFrame, result : Cartesian3) : Cartesian3

	}
	export = ReferenceProperty

}
declare module 'cesium/DataSources/Rotation' {
	class Rotation 
	{
		constructor();
		//Members
		static packedLength: number


		//Methods
		static convertPackedArrayForInterpolation(packedArray : Array<number>, startingIndex : number, lastIndex : number, result? : Array<number>) : void
		static pack(value : Rotation, array : Array<number>, startingIndex : number) : Array<number>
		static unpack(array : Array<number>, startingIndex : number, result : Rotation) : Rotation
		static unpackInterpolationResult(array : Array<number>, sourceArray : Array<number>, startingIndex : number, lastIndex : number, result : Rotation) : Rotation

	}
	export = Rotation

}
declare module 'cesium/DataSources/setInterpolationOptionsOptions' {
	import InterpolationAlgorithm = require('cesium/Core/InterpolationAlgorithm')
	interface setInterpolationOptionsOptions
	{
		interpolationAlgorithm?: InterpolationAlgorithm;
		interpolationDegree?: number;
	}
	export = setInterpolationOptionsOptions

}
declare module 'cesium/DataSources/SampledPositionProperty' {
	import ReferenceFrame = require('cesium/Core/ReferenceFrame')
	import ExtrapolationType = require('cesium/Core/ExtrapolationType')
	import Event = require('cesium/Core/Event')
	import InterpolationAlgorithm = require('cesium/Core/InterpolationAlgorithm')
	import JulianDate = require('cesium/Core/JulianDate')
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Property = require('cesium/DataSources/Property')
	import setInterpolationOptionsOptions = require('cesium/DataSources/setInterpolationOptionsOptions')
	class SampledPositionProperty 
	{
		constructor(referenceFrame? : ReferenceFrame, numberOfDerivatives? : number);
		//Members
		backwardExtrapolationDuration: number
		backwardExtrapolationType: ExtrapolationType
		definitionChanged: Event
		forwardExtrapolationDuration: number
		forwardExtrapolationType: ExtrapolationType
		interpolationAlgorithm: InterpolationAlgorithm
		interpolationDegree: number
		isConstant: boolean
		numberOfDerivatives: boolean
		referenceFrame: ReferenceFrame


		//Methods
		addSample(time : JulianDate, position : Cartesian3, derivatives : Array<Cartesian3>) : void
		addSamples(times : Array<JulianDate>, positions : Array<Cartesian3>, derivatives : Array<Array<any>>) : void
		addSamplesPackedArray(packedSamples : Array<number>, epoch : JulianDate) : void
		equals(other : Property|string) : boolean
		getValue(time : JulianDate, result : Cartesian3) : Cartesian3
		getValueInReferenceFrame(time : JulianDate, referenceFrame : ReferenceFrame, result : Cartesian3) : Cartesian3
		setInterpolationOptions(options : setInterpolationOptionsOptions) : void

	}
	export = SampledPositionProperty

}
declare module 'cesium/DataSources/SampledProperty' {
	import Packable = require('cesium/Core/Packable')
	import ExtrapolationType = require('cesium/Core/ExtrapolationType')
	import Event = require('cesium/Core/Event')
	import InterpolationAlgorithm = require('cesium/Core/InterpolationAlgorithm')
	import JulianDate = require('cesium/Core/JulianDate')
	import Property = require('cesium/DataSources/Property')
	import setInterpolationOptionsOptions = require('cesium/DataSources/setInterpolationOptionsOptions')
	class SampledProperty 
	{
		constructor(type : number|Packable, derivativeTypes? : Array<Packable>);
		//Members
		backwardExtrapolationDuration: number
		backwardExtrapolationType: ExtrapolationType
		definitionChanged: Event
		derivativeTypes: Array<Packable>
		forwardExtrapolationDuration: number
		forwardExtrapolationType: ExtrapolationType
		interpolationAlgorithm: InterpolationAlgorithm
		interpolationDegree: number
		isConstant: boolean
		type: Object


		//Methods
		addSample(time : JulianDate, value : Packable, derivatives : Array<Packable>) : void
		addSamples(times : Array<JulianDate>, values : Array<Packable>, derivativeValues : Array<Array<any>>) : void
		addSamplesPackedArray(packedSamples : Array<number>, epoch : JulianDate) : void
		equals(other : Property|string) : boolean
		getValue(time : JulianDate, result : any) : Object
		setInterpolationOptions(options : setInterpolationOptionsOptions) : void

	}
	export = SampledProperty

}
declare module 'cesium/DataSources/StripeMaterialPropertyOptions' {
	import Property = require('cesium/DataSources/Property')
	interface StripeMaterialPropertyOptions
	{
		evenColor?: Property|string;
		oddColor?: Property|string;
		repeat?: Property|string;
		offset?: Property|string;
		orientation?: Property|string;
	}
	export = StripeMaterialPropertyOptions

}
declare module 'cesium/DataSources/StripeMaterialProperty' {
	import StripeMaterialPropertyOptions = require('cesium/DataSources/StripeMaterialPropertyOptions')
	import Event = require('cesium/Core/Event')
	import Property = require('cesium/DataSources/Property')
	import JulianDate = require('cesium/Core/JulianDate')
	class StripeMaterialProperty 
	{
		constructor(options? : StripeMaterialPropertyOptions);
		//Members
		definitionChanged: Event
		evenColor: Property|string
		isConstant: boolean
		oddColor: Property|string
		offset: Property|string
		orientation: Property|string
		repeat: Property|string


		//Methods
		equals(other : Property|string) : boolean
		getType(time : JulianDate) : string
		getValue(time : JulianDate, result : any) : Object

	}
	export = StripeMaterialProperty

}
declare module 'cesium/DataSources/StripeOrientation' {
	class StripeOrientation 
	{
		constructor();
		//Members
		static HORIZONTAL: number
		static VERTICAL: number


		//Methods

	}
	export = StripeOrientation

}
declare module 'cesium/DataSources/TimeIntervalCollectionPositionProperty' {
	import ReferenceFrame = require('cesium/Core/ReferenceFrame')
	import Event = require('cesium/Core/Event')
	import TimeIntervalCollection = require('cesium/Core/TimeIntervalCollection')
	import Property = require('cesium/DataSources/Property')
	import JulianDate = require('cesium/Core/JulianDate')
	import Cartesian3 = require('cesium/Core/Cartesian3')
	class TimeIntervalCollectionPositionProperty 
	{
		constructor(referenceFrame? : ReferenceFrame);
		//Members
		definitionChanged: Event
		intervals: TimeIntervalCollection
		isConstant: boolean
		referenceFrame: ReferenceFrame


		//Methods
		equals(other : Property|string) : boolean
		getValue(time : JulianDate, result : any) : Object
		getValueInReferenceFrame(time : JulianDate, referenceFrame : ReferenceFrame, result : Cartesian3) : Cartesian3

	}
	export = TimeIntervalCollectionPositionProperty

}
declare module 'cesium/DataSources/TimeIntervalCollectionProperty' {
	import Event = require('cesium/Core/Event')
	import TimeIntervalCollection = require('cesium/Core/TimeIntervalCollection')
	import Property = require('cesium/DataSources/Property')
	import JulianDate = require('cesium/Core/JulianDate')
	class TimeIntervalCollectionProperty extends Property
	{
		constructor();
		//Members
		definitionChanged: Event
		intervals: TimeIntervalCollection
		isConstant: boolean


		//Methods
		equals(other : Property|string) : boolean
		getValue(time : JulianDate, result : any) : Object

	}
	export = TimeIntervalCollectionProperty

}
declare module 'cesium/DataSources/VelocityOrientationProperty' {
	import Property = require('cesium/DataSources/Property')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import Event = require('cesium/Core/Event')
	import Quaternion = require('cesium/Core/Quaternion')
	import JulianDate = require('cesium/Core/JulianDate')
	class VelocityOrientationProperty extends Property
	{
		constructor(position? : Property|string, ellipsoid? : Ellipsoid);
		//Members
		definitionChanged: Event
		ellipsoid: Property|string
		isConstant: boolean
		position: Property|string


		//Methods
		equals(other : Property|string) : boolean
		getValue(time : JulianDate, result : Quaternion) : Quaternion

	}
	export = VelocityOrientationProperty

}
declare module 'cesium/DataSources/VelocityVectorProperty' {
	import Property = require('cesium/DataSources/Property')
	import Event = require('cesium/Core/Event')
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import JulianDate = require('cesium/Core/JulianDate')
	class VelocityVectorProperty 
	{
		constructor(position? : Property|string, normalize? : boolean);
		//Members
		definitionChanged: Event
		isConstant: boolean
		normalize: boolean
		position: Property|string


		//Methods
		equals(other : Property|string) : boolean
		getValue(time : JulianDate, result : Cartesian3) : Cartesian3

	}
	export = VelocityVectorProperty

}
declare module 'cesium/DataSources/Visualizer' {
	import JulianDate = require('cesium/Core/JulianDate')
	class Visualizer 
	{
		constructor();
		//Members


		//Methods
		destroy() : void
		isDestroyed() : boolean
		update(time : JulianDate) : boolean

	}
	export = Visualizer

}
declare module 'cesium/DataSources/WallGeometryUpdater' {
	import Entity = require('cesium/DataSources/Entity')
	import Scene = require('cesium/Scene/Scene')
	import Appearance = require('cesium/Scene/Appearance')
	import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	import Property = require('cesium/DataSources/Property')
	import DynamicGeometryUpdater = require('cesium/DataSources/DynamicGeometryUpdater')
	import PrimitiveCollection = require('cesium/Scene/PrimitiveCollection')
	import GeometryInstance = require('cesium/Core/GeometryInstance')
	import JulianDate = require('cesium/Core/JulianDate')
	class WallGeometryUpdater 
	{
		constructor(entity : Entity, scene : Scene);
		//Members
		static materialAppearanceType: Appearance
		static perInstanceColorAppearanceType: Appearance
		entity: Entity
		fillEnabled: boolean
		fillMaterialProperty: MaterialProperty
		geometryChanged: boolean
		hasConstantFill: boolean
		hasConstantOutline: boolean
		isClosed: boolean
		isDynamic: boolean
		outlineColorProperty: Property|string
		outlineEnabled: boolean
		outlineWidth: number
		shadowsProperty: Property|string


		//Methods
		createDynamicUpdater(primitives : PrimitiveCollection) : DynamicGeometryUpdater
		createFillGeometryInstance(time : JulianDate) : GeometryInstance
		createOutlineGeometryInstance(time : JulianDate) : GeometryInstance
		destroy() : void
		isDestroyed() : boolean
		isFilled(time : JulianDate) : boolean
		isOutlineVisible(time : JulianDate) : boolean

	}
	export = WallGeometryUpdater

}
declare module 'cesium/Scene/ArcGisMapServerImageryProviderOptions' {
	import TileDiscardPolicy = require('cesium/Scene/TileDiscardPolicy')
	import DefaultProxy = require('cesium/Core/DefaultProxy')
	import Rectangle = require('cesium/Core/Rectangle')
	import TilingScheme = require('cesium/Core/TilingScheme')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	interface ArcGisMapServerImageryProviderOptions
	{
		url: string;
		token?: string;
		tileDiscardPolicy?: TileDiscardPolicy;
		proxy?: DefaultProxy;
		usePreCachedTilesIfAvailable?: boolean;
		layers?: string;
		enablePickFeatures?: boolean;
		rectangle?: Rectangle;
		tilingScheme?: TilingScheme;
		ellipsoid?: Ellipsoid;
		tileWidth?: number;
		tileHeight?: number;
		maximumLevel?: number;
	}
	export = ArcGisMapServerImageryProviderOptions

}
declare module 'cesium/Scene/ArcGisMapServerImageryProvider' {
	import ArcGisMapServerImageryProviderOptions = require('cesium/Scene/ArcGisMapServerImageryProviderOptions')
	import Credit = require('cesium/Core/Credit')
	import Event = require('cesium/Core/Event')
	import DefaultProxy = require('cesium/Core/DefaultProxy')
	import Promise = require('cesium/Promise')
	import Rectangle = require('cesium/Core/Rectangle')
	import TileDiscardPolicy = require('cesium/Scene/TileDiscardPolicy')
	import TilingScheme = require('cesium/Core/TilingScheme')
	import ImageryLayerFeatureInfo = require('cesium/Scene/ImageryLayerFeatureInfo')
	class ArcGisMapServerImageryProvider 
	{
		constructor(options? : ArcGisMapServerImageryProviderOptions);
		//Members
		credit: Credit
		enablePickFeatures: boolean
		errorEvent: Event
		hasAlphaChannel: boolean
		maximumLevel: number
		minimumLevel: number
		proxy: DefaultProxy
		ready: boolean
		readyPromise: Promise<boolean>
		rectangle: Rectangle
		tileDiscardPolicy: TileDiscardPolicy
		tileHeight: number
		tileWidth: number
		tilingScheme: TilingScheme
		token: string
		url: string
		usingPrecachedTiles: boolean


		//Methods
		getTileCredits(x : number, y : number, level : number) : Array<Credit>
		pickFeatures(x : number, y : number, level : number, longitude : number, latitude : number) : Promise<Array<ImageryLayerFeatureInfo>>|void
		requestImage(x : number, y : number, level : number) : Promise<HTMLImageElement|HTMLCanvasElement>|void

	}
	export = ArcGisMapServerImageryProvider

}
declare module 'cesium/Scene/HeightReference' {
	class HeightReference 
	{
		constructor();
		//Members
		static CLAMP_TO_GROUND: number
		static NONE: number
		static RELATIVE_TO_GROUND: number


		//Methods

	}
	export = HeightReference

}
declare module 'cesium/Scene/HorizontalOrigin' {
	class HorizontalOrigin 
	{
		constructor();
		//Members
		static CENTER: number
		static LEFT: number
		static RIGHT: number


		//Methods

	}
	export = HorizontalOrigin

}
declare module 'cesium/Scene/VerticalOrigin' {
	class VerticalOrigin 
	{
		constructor();
		//Members
		static BOTTOM: number
		static CENTER: number
		static TOP: number


		//Methods

	}
	export = VerticalOrigin

}
declare module 'cesium/Scene/Billboard' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Color = require('cesium/Core/Color')
	import HeightReference = require('cesium/Scene/HeightReference')
	import HorizontalOrigin = require('cesium/Scene/HorizontalOrigin')
	import Cartesian2 = require('cesium/Core/Cartesian2')
	import NearFarScalar = require('cesium/Core/NearFarScalar')
	import VerticalOrigin = require('cesium/Scene/VerticalOrigin')
	import Scene = require('cesium/Scene/Scene')
	import BoundingRectangle = require('cesium/Core/BoundingRectangle')
	class Billboard 
	{
		constructor();
		//Members
		alignedAxis: Cartesian3
		color: Color
		eyeOffset: Cartesian3
		height: number
		heightReference: HeightReference
		horizontalOrigin: HorizontalOrigin
		id: Object
		image: string
		pixelOffset: Cartesian2
		pixelOffsetScaleByDistance: NearFarScalar
		position: Cartesian3
		ready: boolean
		rotation: number
		scale: number
		scaleByDistance: NearFarScalar
		show: boolean
		sizeInMeters: boolean
		translucencyByDistance: NearFarScalar
		verticalOrigin: VerticalOrigin
		width: number


		//Methods
		computeScreenSpacePosition(scene : Scene, result : Cartesian2) : Cartesian2
		equals(other : Billboard) : boolean
		setImage(id : string, image : HTMLImageElement|HTMLCanvasElement|string|any) : void
		setImageSubRegion(id : string, subRegion : BoundingRectangle) : void

	}
	export = Billboard

}
declare module 'cesium/Scene/BillboardCollectionOptions' {
	import Matrix4 = require('cesium/Core/Matrix4')
	import Scene = require('cesium/Scene/Scene')
	interface BillboardCollectionOptions
	{
		modelMatrix?: Matrix4;
		debugShowBoundingVolume?: boolean;
		scene?: Scene;
	}
	export = BillboardCollectionOptions

}
declare module 'cesium/Scene/BillboardCollection' {
	import BillboardCollectionOptions = require('cesium/Scene/BillboardCollectionOptions')
	import Matrix4 = require('cesium/Core/Matrix4')
	import Billboard = require('cesium/Scene/Billboard')
	class BillboardCollection 
	{
		constructor(options? : BillboardCollectionOptions);
		//Members
		debugShowBoundingVolume: boolean
		length: number
		modelMatrix: Matrix4


		//Methods
		add(billboard : any) : Billboard
		contains(billboard : Billboard) : boolean
		destroy() : void
		get(index : number) : Billboard
		isDestroyed() : boolean
		remove(billboard : Billboard) : boolean
		removeAll() : void
		update() : void

	}
	export = BillboardCollection

}
declare module 'cesium/Scene/BingMapsImageryProviderOptions' {
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import TileDiscardPolicy = require('cesium/Scene/TileDiscardPolicy')
	import DefaultProxy = require('cesium/Core/DefaultProxy')
	interface BingMapsImageryProviderOptions
	{
		url: string;
		key?: string;
		tileProtocol?: string;
		mapStyle?: string;
		culture?: string;
		ellipsoid?: Ellipsoid;
		tileDiscardPolicy?: TileDiscardPolicy;
		proxy?: DefaultProxy;
	}
	export = BingMapsImageryProviderOptions

}
declare module 'cesium/Scene/BingMapsStyle' {
	class BingMapsStyle 
	{
		constructor();
		//Members
		static AERIAL: string
		static AERIAL_WITH_LABELS: string
		static COLLINS_BART: string
		static ORDNANCE_SURVEY: string
		static ROAD: string


		//Methods

	}
	export = BingMapsStyle

}
declare module 'cesium/Scene/BingMapsImageryProvider' {
	import BingMapsImageryProviderOptions = require('cesium/Scene/BingMapsImageryProviderOptions')
	import Credit = require('cesium/Core/Credit')
	import Event = require('cesium/Core/Event')
	import BingMapsStyle = require('cesium/Scene/BingMapsStyle')
	import DefaultProxy = require('cesium/Core/DefaultProxy')
	import Promise = require('cesium/Promise')
	import Rectangle = require('cesium/Core/Rectangle')
	import TileDiscardPolicy = require('cesium/Scene/TileDiscardPolicy')
	import TilingScheme = require('cesium/Core/TilingScheme')
	import ImageryLayerFeatureInfo = require('cesium/Scene/ImageryLayerFeatureInfo')
	class BingMapsImageryProvider 
	{
		constructor(options? : BingMapsImageryProviderOptions);
		//Members
		credit: Credit
		culture: string
		defaultGamma: number
		errorEvent: Event
		hasAlphaChannel: boolean
		key: string
		mapStyle: BingMapsStyle
		maximumLevel: number
		minimumLevel: number
		proxy: DefaultProxy
		ready: boolean
		readyPromise: Promise<boolean>
		rectangle: Rectangle
		tileDiscardPolicy: TileDiscardPolicy
		tileHeight: number
		tileWidth: number
		tilingScheme: TilingScheme
		url: string


		//Methods
		static quadKeyToTileXY(quadkey : string) : void
		static tileXYToQuadKey(x : number, y : number, level : number) : void
		getTileCredits(x : number, y : number, level : number) : Array<Credit>
		pickFeatures(x : number, y : number, level : number, longitude : number, latitude : number) : Promise<Array<ImageryLayerFeatureInfo>>|void
		requestImage(x : number, y : number, level : number) : Promise<HTMLImageElement|HTMLCanvasElement>|void

	}
	export = BingMapsImageryProvider

}
declare module 'cesium/Scene/BlendEquation' {
	class BlendEquation 
	{
		constructor();
		//Members
		static ADD: number
		static REVERSE_SUBTRACT: number
		static SUBTRACT: number


		//Methods

	}
	export = BlendEquation

}
declare module 'cesium/Scene/BlendFunction' {
	class BlendFunction 
	{
		constructor();
		//Members
		static CONSTANT_ALPHA: number
		static CONSTANT_COLOR: number
		static DESTINATION_ALPHA: number
		static DESTINATION_COLOR: number
		static ONE: number
		static ONE_MINUS_CONSTANT_ALPHA: number
		static ONE_MINUS_CONSTANT_COLOR: number
		static ONE_MINUS_DESTINATION_ALPHA: number
		static ONE_MINUS_DESTINATION_COLOR: number
		static ONE_MINUS_SOURCE_ALPHA: number
		static ONE_MINUS_SOURCE_COLOR: number
		static SOURCE_ALPHA: number
		static SOURCE_ALPHA_SATURATE: number
		static SOURCE_COLOR: number
		static ZERO: number


		//Methods

	}
	export = BlendFunction

}
declare module 'cesium/Scene/BlendingState' {
	class BlendingState 
	{
		constructor();
		//Members
		static ADDITIVE_BLEND: Object
		static ALPHA_BLEND: Object
		static DISABLED: Object
		static PRE_MULTIPLIED_ALPHA_BLEND: Object


		//Methods

	}
	export = BlendingState

}
declare module 'cesium/Scene/CameraEventAggregator' {
	import Cartesian2 = require('cesium/Core/Cartesian2')
	import CameraEventType = require('cesium/Scene/CameraEventType')
	import KeyboardEventModifier = require('cesium/Core/KeyboardEventModifier')
	class CameraEventAggregator 
	{
		constructor(element? : HTMLCanvasElement);
		//Members
		anyButtonDown: boolean
		currentMousePosition: Cartesian2


		//Methods
		destroy() : void
		getButtonPressTime(type : CameraEventType, modifier : KeyboardEventModifier) : Date
		getButtonReleaseTime(type : CameraEventType, modifier : KeyboardEventModifier) : Date
		getLastMovement(type : CameraEventType, modifier : KeyboardEventModifier) : Object|void
		getMovement(type : CameraEventType, modifier : KeyboardEventModifier) : Object
		getStartMousePosition(type : CameraEventType, modifier : KeyboardEventModifier) : Cartesian2
		isButtonDown(type : CameraEventType, modifier : KeyboardEventModifier) : boolean
		isDestroyed() : boolean
		isMoving(type : CameraEventType, modifier : KeyboardEventModifier) : boolean
		reset() : void

	}
	export = CameraEventAggregator

}
declare module 'cesium/Scene/CreditDisplay' {
	import Credit = require('cesium/Core/Credit')
	class CreditDisplay 
	{
		constructor(container : HTMLElement, delimiter? : string);
		//Members
		container: HTMLElement


		//Methods
		addCredit(credit : Credit) : void
		addDefaultCredit(credit : Credit) : void
		beginFrame(credit : Credit) : void
		destroy() : void
		endFrame(credit : Credit) : void
		isDestroyed() : boolean
		removeDefaultCredit(credit : Credit) : void

	}
	export = CreditDisplay

}
declare module 'cesium/Scene/CullFace' {
	class CullFace 
	{
		constructor();
		//Members
		static BACK: number
		static FRONT: number
		static FRONT_AND_BACK: number


		//Methods

	}
	export = CullFace

}
declare module 'cesium/Scene/DebugAppearanceOptions' {
	interface DebugAppearanceOptions
	{
		attributeName: string;
		glslDatatype?: string;
		vertexShaderSource?: string;
		fragmentShaderSource?: string;
		renderState?: RenderState;
	}
	export = DebugAppearanceOptions

}
declare module 'cesium/Scene/DebugAppearance' {
	import DebugAppearanceOptions = require('cesium/Scene/DebugAppearanceOptions')
	import Material = require('cesium/Scene/Material')
	class DebugAppearance 
	{
		constructor(options? : DebugAppearanceOptions);
		//Members
		attributeName: string
		closed: boolean
		fragmentShaderSource: string
		glslDatatype: string
		material: Material
		renderState: Object
		translucent: boolean
		vertexShaderSource: string


		//Methods
		getFragmentShaderSource() : string
		getRenderState() : Object
		isTranslucent() : boolean

	}
	export = DebugAppearance

}
declare module 'cesium/Scene/DebugModelMatrixPrimitiveOptions' {
	import Matrix4 = require('cesium/Core/Matrix4')
	interface DebugModelMatrixPrimitiveOptions
	{
		length?: number;
		width?: number;
		modelMatrix?: Matrix4;
		show?: boolean;
		id?: Object;
	}
	export = DebugModelMatrixPrimitiveOptions

}
declare module 'cesium/Scene/DebugModelMatrixPrimitive' {
	import DebugModelMatrixPrimitiveOptions = require('cesium/Scene/DebugModelMatrixPrimitiveOptions')
	import Matrix4 = require('cesium/Core/Matrix4')
	class DebugModelMatrixPrimitive 
	{
		constructor(options? : DebugModelMatrixPrimitiveOptions);
		//Members
		id: Object
		length: number
		modelMatrix: Matrix4
		show: boolean
		width: number


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = DebugModelMatrixPrimitive

}
declare module 'cesium/Scene/DepthFunction' {
	class DepthFunction 
	{
		constructor();
		//Members
		static ALWAYS: number
		static EQUAL: number
		static GREATER: number
		static GREATER_OR_EQUAL: number
		static LESS: number
		static LESS_OR_EQUAL: number
		static NEVER: number
		static NOT_EQUAL: number


		//Methods

	}
	export = DepthFunction

}
declare module 'cesium/Scene/DiscardMissingTileImagePolicyOptions' {
	import Cartesian2 = require('cesium/Core/Cartesian2')
	interface DiscardMissingTileImagePolicyOptions
	{
		missingImageUrl: string;
		pixelsToCheck: Array<Cartesian2>;
		disableCheckIfAllPixelsAreTransparent?: boolean;
	}
	export = DiscardMissingTileImagePolicyOptions

}
declare module 'cesium/Scene/DiscardMissingTileImagePolicy' {
	import DiscardMissingTileImagePolicyOptions = require('cesium/Scene/DiscardMissingTileImagePolicyOptions')
	class DiscardMissingTileImagePolicy 
	{
		constructor(options? : DiscardMissingTileImagePolicyOptions);
		//Members


		//Methods
		isReady() : boolean
		shouldDiscardImage(image : HTMLImageElement) : boolean

	}
	export = DiscardMissingTileImagePolicy

}
declare module 'cesium/Scene/EllipsoidSurfaceAppearanceOptions' {
	import Material = require('cesium/Scene/Material')
	interface EllipsoidSurfaceAppearanceOptions
	{
		flat?: boolean;
		faceForward?: boolean;
		translucent?: boolean;
		aboveGround?: boolean;
		material?: Material;
		vertexShaderSource?: string;
		fragmentShaderSource?: string;
		renderState?: RenderState;
	}
	export = EllipsoidSurfaceAppearanceOptions

}
declare module 'cesium/Scene/EllipsoidSurfaceAppearance' {
	import EllipsoidSurfaceAppearanceOptions = require('cesium/Scene/EllipsoidSurfaceAppearanceOptions')
	import VertexFormat = require('cesium/Core/VertexFormat')
	import Material = require('cesium/Scene/Material')
	class EllipsoidSurfaceAppearance 
	{
		constructor(options? : EllipsoidSurfaceAppearanceOptions);
		//Members
		static VERTEX_FORMAT: VertexFormat
		aboveGround: boolean
		closed: boolean
		faceForward: boolean
		flat: boolean
		fragmentShaderSource: string
		material: Material
		renderState: Object
		translucent: boolean
		vertexFormat: VertexFormat
		vertexShaderSource: string


		//Methods
		getFragmentShaderSource() : string
		getRenderState() : Object
		isTranslucent() : boolean

	}
	export = EllipsoidSurfaceAppearance

}
declare module 'cesium/Scene/FrameRateMonitorOptions' {
	import Scene = require('cesium/Scene/Scene')
	interface FrameRateMonitorOptions
	{
		scene: Scene;
		samplingWindow?: number;
		quietPeriod?: number;
		warmupPeriod?: number;
		minimumFrameRateDuringWarmup?: number;
		minimumFrameRateAfterWarmup?: number;
	}
	export = FrameRateMonitorOptions

}
declare module 'cesium/Scene/FrameRateMonitor' {
	import FrameRateMonitorOptions = require('cesium/Scene/FrameRateMonitorOptions')
	import Event = require('cesium/Core/Event')
	import Scene = require('cesium/Scene/Scene')
	class FrameRateMonitor 
	{
		constructor(options? : FrameRateMonitorOptions);
		//Members
		static defaultSettings: Object
		lastFramesPerSecond: number
		lowFrameRate: Event
		minimumFrameRateAfterWarmup: number
		minimumFrameRateDuringWarmup: number
		nominalFrameRate: Event
		quietPeriod: number
		samplingWindow: number
		scene: Scene
		warmupPeriod: number


		//Methods
		static fromScene(scene : Scene) : FrameRateMonitor
		destroy() : void
		isDestroyed() : boolean
		pause() : void
		unpause() : void

	}
	export = FrameRateMonitor

}
declare module 'cesium/Scene/GetFeatureInfoFormat' {
	class GetFeatureInfoFormat 
	{
		constructor(type : string, format? : string, callback? : (()=>void));
		//Members


		//Methods

	}
	export = GetFeatureInfoFormat

}
declare module 'cesium/Scene/GoogleEarthImageryProviderOptions' {
	import TileDiscardPolicy = require('cesium/Scene/TileDiscardPolicy')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import DefaultProxy = require('cesium/Core/DefaultProxy')
	interface GoogleEarthImageryProviderOptions
	{
		url: string;
		channel: number;
		path?: string;
		maximumLevel?: number;
		tileDiscardPolicy?: TileDiscardPolicy;
		ellipsoid?: Ellipsoid;
		proxy?: DefaultProxy;
	}
	export = GoogleEarthImageryProviderOptions

}
declare module 'cesium/Scene/GoogleEarthImageryProvider' {
	import GoogleEarthImageryProviderOptions = require('cesium/Scene/GoogleEarthImageryProviderOptions')
	import Credit = require('cesium/Core/Credit')
	import Event = require('cesium/Core/Event')
	import DefaultProxy = require('cesium/Core/DefaultProxy')
	import Promise = require('cesium/Promise')
	import Rectangle = require('cesium/Core/Rectangle')
	import TileDiscardPolicy = require('cesium/Scene/TileDiscardPolicy')
	import TilingScheme = require('cesium/Core/TilingScheme')
	import ImageryLayerFeatureInfo = require('cesium/Scene/ImageryLayerFeatureInfo')
	class GoogleEarthImageryProvider 
	{
		constructor(options? : GoogleEarthImageryProviderOptions);
		//Members
		channel: number
		credit: Credit
		defaultGamma: number
		errorEvent: Event
		hasAlphaChannel: boolean
		maximumLevel: number
		minimumLevel: number
		path: string
		proxy: DefaultProxy
		ready: boolean
		readyPromise: Promise<boolean>
		rectangle: Rectangle
		requestType: string
		tileDiscardPolicy: TileDiscardPolicy
		tileHeight: number
		tileWidth: number
		tilingScheme: TilingScheme
		url: string
		version: number


		//Methods
		getTileCredits(x : number, y : number, level : number) : Array<Credit>
		pickFeatures(x : number, y : number, level : number, longitude : number, latitude : number) : Promise<Array<ImageryLayerFeatureInfo>>|void
		requestImage(x : number, y : number, level : number) : Promise<HTMLImageElement|HTMLCanvasElement>|void

	}
	export = GoogleEarthImageryProvider

}
declare module 'cesium/Scene/GridImageryProviderOptions' {
	import TilingScheme = require('cesium/Core/TilingScheme')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import Color = require('cesium/Core/Color')
	interface GridImageryProviderOptions
	{
		tilingScheme?: TilingScheme;
		ellipsoid?: Ellipsoid;
		cells?: number;
		color?: Color;
		glowColor?: Color;
		glowWidth?: number;
	}
	export = GridImageryProviderOptions

}
declare module 'cesium/Scene/GridImageryProvider' {
	import GridImageryProviderOptions = require('cesium/Scene/GridImageryProviderOptions')
	import Color = require('cesium/Core/Color')
	import Credit = require('cesium/Core/Credit')
	import Event = require('cesium/Core/Event')
	import DefaultProxy = require('cesium/Core/DefaultProxy')
	import Promise = require('cesium/Promise')
	import Rectangle = require('cesium/Core/Rectangle')
	import TileDiscardPolicy = require('cesium/Scene/TileDiscardPolicy')
	import TilingScheme = require('cesium/Core/TilingScheme')
	import ImageryLayerFeatureInfo = require('cesium/Scene/ImageryLayerFeatureInfo')
	class GridImageryProvider 
	{
		constructor(options? : GridImageryProviderOptions, backgroundColor? : Color);
		//Members
		credit: Credit
		errorEvent: Event
		hasAlphaChannel: boolean
		maximumLevel: number
		minimumLevel: number
		proxy: DefaultProxy
		ready: boolean
		readyPromise: Promise<boolean>
		rectangle: Rectangle
		tileDiscardPolicy: TileDiscardPolicy
		tileHeight: number
		tileWidth: number
		tilingScheme: TilingScheme


		//Methods
		_createGridCanvas() : void
		_drawGrid() : void
		getTileCredits(x : number, y : number, level : number) : Array<Credit>
		pickFeatures(x : number, y : number, level : number, longitude : number, latitude : number) : Promise<Array<ImageryLayerFeatureInfo>>|void
		requestImage(x : number, y : number, level : number) : Promise<HTMLImageElement|HTMLCanvasElement>|void

	}
	export = GridImageryProvider

}
declare module 'cesium/Scene/GroundPrimitiveOptions' {
	import GeometryInstance = require('cesium/Core/GeometryInstance')
	interface GroundPrimitiveOptions
	{
		geometryInstances?: Array<any>|GeometryInstance;
		show?: boolean;
		vertexCacheOptimize?: boolean;
		interleave?: boolean;
		compressVertices?: boolean;
		releaseGeometryInstances?: boolean;
		allowPicking?: boolean;
		asynchronous?: boolean;
		debugShowBoundingVolume?: boolean;
		debugShowShadowVolume?: boolean;
	}
	export = GroundPrimitiveOptions

}
declare module 'cesium/Scene/GroundPrimitive' {
	import GroundPrimitiveOptions = require('cesium/Scene/GroundPrimitiveOptions')
	import GeometryInstance = require('cesium/Core/GeometryInstance')
	import Promise = require('cesium/Promise')
	import Scene = require('cesium/Scene/Scene')
	class GroundPrimitive 
	{
		constructor(options? : GroundPrimitiveOptions);
		//Members
		allowPicking: boolean
		asynchronous: boolean
		compressVertices: boolean
		debugShowBoundingVolume: boolean
		debugShowShadowVolume: boolean
		geometryInstances: Array<any>|GeometryInstance
		interleave: boolean
		ready: boolean
		readyPromise: Promise<GroundPrimitive>
		releaseGeometryInstances: boolean
		show: boolean
		vertexCacheOptimize: boolean


		//Methods
		static initializeTerrainHeights() : Promise
		static isSupported(scene : Scene) : boolean
		destroy() : void
		getGeometryInstanceAttributes(id : any) : Object
		isDestroyed() : boolean
		update() : void

	}
	export = GroundPrimitive

}
declare module 'cesium/Scene/LabelStyle' {
	class LabelStyle 
	{
		constructor();
		//Members
		static FILL: number
		static FILL_AND_OUTLINE: number
		static OUTLINE: number


		//Methods

	}
	export = LabelStyle

}
declare module 'cesium/Scene/Label' {
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Color = require('cesium/Core/Color')
	import HeightReference = require('cesium/Scene/HeightReference')
	import HorizontalOrigin = require('cesium/Scene/HorizontalOrigin')
	import Cartesian2 = require('cesium/Core/Cartesian2')
	import NearFarScalar = require('cesium/Core/NearFarScalar')
	import LabelStyle = require('cesium/Scene/LabelStyle')
	import VerticalOrigin = require('cesium/Scene/VerticalOrigin')
	import Scene = require('cesium/Scene/Scene')
	class Label 
	{
		constructor();
		//Members
		eyeOffset: Cartesian3
		fillColor: Color
		font: string
		heightReference: HeightReference
		horizontalOrigin: HorizontalOrigin
		id: Object
		outlineColor: Color
		outlineWidth: number
		pixelOffset: Cartesian2
		pixelOffsetScaleByDistance: NearFarScalar
		position: Cartesian3
		scale: number
		show: boolean
		style: LabelStyle
		text: string
		translucencyByDistance: NearFarScalar
		verticalOrigin: VerticalOrigin


		//Methods
		computeScreenSpacePosition(scene : Scene, result : Cartesian2) : Cartesian2
		equals(other : Label) : boolean
		isDestroyed() : boolean

	}
	export = Label

}
declare module 'cesium/Scene/LabelCollectionOptions' {
	import Matrix4 = require('cesium/Core/Matrix4')
	import Scene = require('cesium/Scene/Scene')
	interface LabelCollectionOptions
	{
		modelMatrix?: Matrix4;
		debugShowBoundingVolume?: boolean;
		scene?: Scene;
	}
	export = LabelCollectionOptions

}
declare module 'cesium/Scene/LabelCollection' {
	import LabelCollectionOptions = require('cesium/Scene/LabelCollectionOptions')
	import Matrix4 = require('cesium/Core/Matrix4')
	import Label = require('cesium/Scene/Label')
	class LabelCollection 
	{
		constructor(options? : LabelCollectionOptions);
		//Members
		debugShowBoundingVolume: boolean
		length: number
		modelMatrix: Matrix4


		//Methods
		add(options : any) : Label
		contains(label : Label) : boolean
		destroy() : void
		get(index : number) : Label
		isDestroyed() : boolean
		remove(label : Label) : boolean
		removeAll() : void

	}
	export = LabelCollection

}
declare module 'cesium/Scene/MapboxImageryProviderOptions' {
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import Rectangle = require('cesium/Core/Rectangle')
	import Credit = require('cesium/Core/Credit')
	interface MapboxImageryProviderOptions
	{
		url?: string;
		mapId: string;
		accessToken?: string;
		format?: string;
		proxy?: Object;
		ellipsoid?: Ellipsoid;
		minimumLevel?: number;
		maximumLevel?: number;
		rectangle?: Rectangle;
		credit?: Credit|string;
	}
	export = MapboxImageryProviderOptions

}
declare module 'cesium/Scene/MapboxImageryProvider' {
	import MapboxImageryProviderOptions = require('cesium/Scene/MapboxImageryProviderOptions')
	import Credit = require('cesium/Core/Credit')
	import Event = require('cesium/Core/Event')
	import DefaultProxy = require('cesium/Core/DefaultProxy')
	import Promise = require('cesium/Promise')
	import Rectangle = require('cesium/Core/Rectangle')
	import TileDiscardPolicy = require('cesium/Scene/TileDiscardPolicy')
	import TilingScheme = require('cesium/Core/TilingScheme')
	import ImageryLayerFeatureInfo = require('cesium/Scene/ImageryLayerFeatureInfo')
	class MapboxImageryProvider 
	{
		constructor(options? : MapboxImageryProviderOptions);
		//Members
		credit: Credit
		errorEvent: Event
		hasAlphaChannel: boolean
		maximumLevel: number
		minimumLevel: number
		proxy: DefaultProxy
		ready: boolean
		readyPromise: Promise<boolean>
		rectangle: Rectangle
		tileDiscardPolicy: TileDiscardPolicy
		tileHeight: number
		tileWidth: number
		tilingScheme: TilingScheme
		url: string


		//Methods
		getTileCredits(x : number, y : number, level : number) : Array<Credit>
		pickFeatures(x : number, y : number, level : number, longitude : number, latitude : number) : Promise<Array<ImageryLayerFeatureInfo>>|void
		requestImage(x : number, y : number, level : number) : Promise<HTMLImageElement|HTMLCanvasElement>|void

	}
	export = MapboxImageryProvider

}
declare module 'cesium/Scene/MaterialAppearanceOptions' {
	import Material = require('cesium/Scene/Material')
	interface MaterialAppearanceOptions
	{
		flat?: boolean;
		faceForward?: boolean;
		translucent?: boolean;
		closed?: boolean;
		materialSupport?: any;
		material?: Material;
		vertexShaderSource?: string;
		fragmentShaderSource?: string;
		renderState?: RenderState;
	}
	export = MaterialAppearanceOptions

}
declare module 'cesium/Scene/MaterialAppearance' {
	import MaterialAppearanceOptions = require('cesium/Scene/MaterialAppearanceOptions')
	import Material = require('cesium/Scene/Material')
	import VertexFormat = require('cesium/Core/VertexFormat')
	class MaterialAppearance 
	{
		constructor(options? : MaterialAppearanceOptions);
		//Members
		static MaterialSupport: any
		closed: boolean
		faceForward: boolean
		flat: boolean
		fragmentShaderSource: string
		material: Material
		materialSupport: any
		renderState: Object
		translucent: boolean
		vertexFormat: VertexFormat
		vertexShaderSource: string


		//Methods
		getFragmentShaderSource() : string
		getRenderState() : Object
		isTranslucent() : boolean

	}
	export = MaterialAppearance

}
declare module 'cesium/Scene/ModelOptions' {
	import Matrix4 = require('cesium/Core/Matrix4')
	import ShadowMode = require('cesium/Scene/ShadowMode')
	import HeightReference = require('cesium/Scene/HeightReference')
	import Scene = require('cesium/Scene/Scene')
	interface ModelOptions
	{
		gltf?: Object|ArrayBuffer|Uint8Array;
		basePath?: string;
		show?: boolean;
		modelMatrix?: Matrix4;
		scale?: number;
		minimumPixelSize?: number;
		maximumScale?: number;
		id?: Object;
		allowPicking?: boolean;
		incrementallyLoadTextures?: boolean;
		asynchronous?: boolean;
		castShadows?: boolean;
		receiveShadows?: boolean;
		shadows?: ShadowMode;
		debugShowBoundingVolume?: boolean;
		debugWireframe?: boolean;
		heightReference?: HeightReference;
		scene?: Scene;
	}
	export = ModelOptions

}
declare module 'cesium/Scene/ModelAnimationLoop' {
	class ModelAnimationLoop 
	{
		constructor();
		//Members
		static MIRRORED_REPEAT: number
		static NONE: number
		static REPEAT: number


		//Methods

	}
	export = ModelAnimationLoop

}
declare module 'cesium/Scene/ModelAnimation' {
	import ModelAnimationLoop = require('cesium/Scene/ModelAnimationLoop')
	import Event = require('cesium/Core/Event')
	import JulianDate = require('cesium/Core/JulianDate')
	class ModelAnimation 
	{
		constructor();
		//Members
		delay: number
		loop: ModelAnimationLoop
		name: string
		removeOnStop: boolean
		reverse: boolean
		speedup: number
		start: Event
		startTime: JulianDate
		stop: Event
		stopTime: JulianDate
		update: Event


		//Methods

	}
	export = ModelAnimation

}
declare module 'cesium/Scene/addOptions' {
	import JulianDate = require('cesium/Core/JulianDate')
	import ModelAnimationLoop = require('cesium/Scene/ModelAnimationLoop')
	interface addOptions
	{
		name: string;
		startTime?: JulianDate;
		delay?: number;
		stopTime?: JulianDate;
		removeOnStop?: boolean;
		speedup?: number;
		reverse?: boolean;
		loop?: ModelAnimationLoop;
	}
	export = addOptions

}
declare module 'cesium/Scene/addAllOptions' {
	import JulianDate = require('cesium/Core/JulianDate')
	import ModelAnimationLoop = require('cesium/Scene/ModelAnimationLoop')
	interface addAllOptions
	{
		startTime?: JulianDate;
		delay?: number;
		stopTime?: JulianDate;
		removeOnStop?: boolean;
		speedup?: number;
		reverse?: boolean;
		loop?: ModelAnimationLoop;
	}
	export = addAllOptions

}
declare module 'cesium/Scene/ModelAnimationCollection' {
	import Event = require('cesium/Core/Event')
	import ModelAnimation = require('cesium/Scene/ModelAnimation')
	import addOptions = require('cesium/Scene/addOptions')
	import addAllOptions = require('cesium/Scene/addAllOptions')
	class ModelAnimationCollection 
	{
		constructor();
		//Members
		animationAdded: Event
		animationRemoved: Event
		length: number


		//Methods
		add(options : addOptions) : ModelAnimation
		addAll(options : addAllOptions) : Array<ModelAnimation>
		contains(animation : ModelAnimation) : boolean
		get(index : number) : ModelAnimation
		remove(animation : ModelAnimation) : boolean
		removeAll() : void

	}
	export = ModelAnimationCollection

}
declare module 'cesium/Scene/fromGltfOptions' {
	import Matrix4 = require('cesium/Core/Matrix4')
	import ShadowMode = require('cesium/Scene/ShadowMode')
	interface fromGltfOptions
	{
		url: string;
		headers?: Object;
		show?: boolean;
		modelMatrix?: Matrix4;
		scale?: number;
		minimumPixelSize?: number;
		maximumScale?: number;
		id?: Object;
		allowPicking?: boolean;
		incrementallyLoadTextures?: boolean;
		asynchronous?: boolean;
		shadows?: ShadowMode;
		debugShowBoundingVolume?: boolean;
		debugWireframe?: boolean;
	}
	export = fromGltfOptions

}
declare module 'cesium/Scene/ModelMaterial' {
	class ModelMaterial 
	{
		constructor();
		//Members
		id: string
		name: string


		//Methods
		getValue(name : string) : Object
		setValue(name : string, value : any) : void

	}
	export = ModelMaterial

}
declare module 'cesium/Scene/ModelMesh' {
	import ModelMaterial = require('cesium/Scene/ModelMaterial')
	class ModelMesh 
	{
		constructor();
		//Members
		id: string
		materials: Array<ModelMaterial>
		name: string


		//Methods

	}
	export = ModelMesh

}
declare module 'cesium/Scene/ModelNode' {
	import Matrix4 = require('cesium/Core/Matrix4')
	class ModelNode 
	{
		constructor();
		//Members
		id: string
		matrix: Matrix4
		name: string
		show: boolean


		//Methods

	}
	export = ModelNode

}
declare module 'cesium/Scene/Model' {
	import ModelOptions = require('cesium/Scene/ModelOptions')
	import ModelAnimationCollection = require('cesium/Scene/ModelAnimationCollection')
	import BoundingSphere = require('cesium/Core/BoundingSphere')
	import Matrix4 = require('cesium/Core/Matrix4')
	import Promise = require('cesium/Promise')
	import ShadowMode = require('cesium/Scene/ShadowMode')
	import fromGltfOptions = require('cesium/Scene/fromGltfOptions')
	import ModelMaterial = require('cesium/Scene/ModelMaterial')
	import ModelMesh = require('cesium/Scene/ModelMesh')
	import ModelNode = require('cesium/Scene/ModelNode')
	class Model 
	{
		constructor(options? : ModelOptions);
		//Members
		activeAnimations: ModelAnimationCollection
		allowPicking: boolean
		asynchronous: boolean
		basePath: string
		boundingSphere: BoundingSphere
		castShadows: boolean
		debugShowBoundingVolume: boolean
		debugWireframe: boolean
		gltf: Object
		id: Object
		incrementallyLoadTextures: boolean
		maximumScale: number
		minimumPixelSize: number
		modelMatrix: Matrix4
		pendingTextureLoads: number
		ready: boolean
		readyPromise: Promise<Model>
		receiveShadows: boolean
		scale: number
		shadows: ShadowMode
		show: boolean


		//Methods
		static fromGltf(options : fromGltfOptions) : Model
		destroy() : void
		getMaterial(name : string) : ModelMaterial
		getMesh(name : string) : ModelMesh
		getNode(name : string) : ModelNode
		isDestroyed() : boolean
		update() : void

	}
	export = Model

}
declare module 'cesium/Scene/NeverTileDiscardPolicy' {
	class NeverTileDiscardPolicy 
	{
		constructor();
		//Members


		//Methods
		isReady() : boolean
		shouldDiscardImage(image : HTMLImageElement) : boolean

	}
	export = NeverTileDiscardPolicy

}
declare module 'cesium/Scene/OrthographicFrustum' {
	import Matrix4 = require('cesium/Core/Matrix4')
	import CullingVolume = require('cesium/Scene/CullingVolume')
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Cartesian2 = require('cesium/Core/Cartesian2')
	class OrthographicFrustum 
	{
		constructor();
		//Members
		bottom: number
		far: number
		left: number
		near: number
		projectionMatrix: Matrix4
		right: number
		top: number


		//Methods
		clone(result : OrthographicFrustum) : OrthographicFrustum
		computeCullingVolume(position : Cartesian3, direction : Cartesian3, up : Cartesian3) : CullingVolume
		equals(other : OrthographicFrustum) : boolean
		getPixelDimensions(drawingBufferWidth : number, drawingBufferHeight : number, distance : number, result : Cartesian2) : Cartesian2

	}
	export = OrthographicFrustum

}
declare module 'cesium/Scene/PerInstanceColorAppearanceOptions' {
	interface PerInstanceColorAppearanceOptions
	{
		flat?: boolean;
		faceForward?: boolean;
		translucent?: boolean;
		closed?: boolean;
		vertexShaderSource?: string;
		fragmentShaderSource?: string;
		renderState?: RenderState;
	}
	export = PerInstanceColorAppearanceOptions

}
declare module 'cesium/Scene/PerInstanceColorAppearance' {
	import PerInstanceColorAppearanceOptions = require('cesium/Scene/PerInstanceColorAppearanceOptions')
	import VertexFormat = require('cesium/Core/VertexFormat')
	import Material = require('cesium/Scene/Material')
	class PerInstanceColorAppearance 
	{
		constructor(options? : PerInstanceColorAppearanceOptions);
		//Members
		static FLAT_VERTEX_FORMAT: VertexFormat
		static VERTEX_FORMAT: VertexFormat
		closed: boolean
		faceForward: boolean
		flat: boolean
		fragmentShaderSource: string
		material: Material
		renderState: Object
		translucent: boolean
		vertexFormat: VertexFormat
		vertexShaderSource: string


		//Methods
		getFragmentShaderSource() : string
		getRenderState() : Object
		isTranslucent() : boolean

	}
	export = PerInstanceColorAppearance

}
declare module 'cesium/Scene/PerspectiveOffCenterFrustum' {
	import Matrix4 = require('cesium/Core/Matrix4')
	import CullingVolume = require('cesium/Scene/CullingVolume')
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import Cartesian2 = require('cesium/Core/Cartesian2')
	class PerspectiveOffCenterFrustum 
	{
		constructor();
		//Members
		bottom: number
		far: number
		infiniteProjectionMatrix: Matrix4
		left: number
		near: number
		projectionMatrix: Matrix4
		right: number
		top: number


		//Methods
		clone(result : PerspectiveOffCenterFrustum) : PerspectiveOffCenterFrustum
		computeCullingVolume(position : Cartesian3, direction : Cartesian3, up : Cartesian3) : CullingVolume
		equals(other : PerspectiveOffCenterFrustum) : boolean
		getPixelDimensions(drawingBufferWidth : number, drawingBufferHeight : number, distance : number, result : Cartesian2) : Cartesian2

	}
	export = PerspectiveOffCenterFrustum

}
declare module 'cesium/Scene/PointPrimitive' {
	import Color = require('cesium/Core/Color')
	import Cartesian3 = require('cesium/Core/Cartesian3')
	import NearFarScalar = require('cesium/Core/NearFarScalar')
	import Cartesian2 = require('cesium/Core/Cartesian2')
	import Scene = require('cesium/Scene/Scene')
	class PointPrimitive 
	{
		constructor();
		//Members
		color: Color
		id: Object
		outlineColor: Color
		outlineWidth: number
		pixelSize: number
		position: Cartesian3
		scaleByDistance: NearFarScalar
		show: boolean
		translucencyByDistance: NearFarScalar


		//Methods
		computeScreenSpacePosition(scene : Scene, result : Cartesian2) : Cartesian2
		equals(other : PointPrimitive) : boolean

	}
	export = PointPrimitive

}
declare module 'cesium/Scene/PointPrimitiveCollectionOptions' {
	import Matrix4 = require('cesium/Core/Matrix4')
	interface PointPrimitiveCollectionOptions
	{
		modelMatrix?: Matrix4;
		debugShowBoundingVolume?: boolean;
	}
	export = PointPrimitiveCollectionOptions

}
declare module 'cesium/Scene/PointPrimitiveCollection' {
	import PointPrimitiveCollectionOptions = require('cesium/Scene/PointPrimitiveCollectionOptions')
	import Matrix4 = require('cesium/Core/Matrix4')
	import PointPrimitive = require('cesium/Scene/PointPrimitive')
	class PointPrimitiveCollection 
	{
		constructor(options? : PointPrimitiveCollectionOptions);
		//Members
		debugShowBoundingVolume: boolean
		length: number
		modelMatrix: Matrix4


		//Methods
		add(pointPrimitive : any) : PointPrimitive
		contains(pointPrimitive : PointPrimitive) : boolean
		destroy() : void
		get(index : number) : PointPrimitive
		isDestroyed() : boolean
		remove(pointPrimitive : PointPrimitive) : boolean
		removeAll() : void

	}
	export = PointPrimitiveCollection

}
declare module 'cesium/Scene/PolylineOptions' {
	import Material = require('cesium/Scene/Material')
	import Cartesian3 = require('cesium/Core/Cartesian3')
	interface PolylineOptions
	{
		show?: boolean;
		width?: number;
		loop?: boolean;
		material?: Material;
		positions?: Array<Cartesian3>;
		id?: Object;
	}
	export = PolylineOptions

}
declare module 'cesium/Scene/Polyline' {
	import PolylineOptions = require('cesium/Scene/PolylineOptions')
	import Material = require('cesium/Scene/Material')
	import Cartesian3 = require('cesium/Core/Cartesian3')
	class Polyline 
	{
		constructor(options? : PolylineOptions);
		//Members
		id: Object
		loop: boolean
		material: Material
		positions: Array<Cartesian3>
		show: boolean
		width: number


		//Methods

	}
	export = Polyline

}
declare module 'cesium/Scene/PolylineCollectionOptions' {
	import Matrix4 = require('cesium/Core/Matrix4')
	interface PolylineCollectionOptions
	{
		modelMatrix?: Matrix4;
		debugShowBoundingVolume?: boolean;
	}
	export = PolylineCollectionOptions

}
declare module 'cesium/Scene/PolylineCollection' {
	import PolylineCollectionOptions = require('cesium/Scene/PolylineCollectionOptions')
	import Matrix4 = require('cesium/Core/Matrix4')
	import Polyline = require('cesium/Scene/Polyline')
	class PolylineCollection 
	{
		constructor(options? : PolylineCollectionOptions);
		//Members
		debugShowBoundingVolume: boolean
		length: number
		modelMatrix: Matrix4


		//Methods
		add(polyline : any) : Polyline
		contains(polyline : Polyline) : boolean
		destroy() : void
		get(index : number) : Polyline
		isDestroyed() : boolean
		remove(polyline : Polyline) : boolean
		removeAll() : void

	}
	export = PolylineCollection

}
declare module 'cesium/Scene/PolylineColorAppearanceOptions' {
	interface PolylineColorAppearanceOptions
	{
		translucent?: boolean;
		vertexShaderSource?: string;
		fragmentShaderSource?: string;
		renderState?: RenderState;
	}
	export = PolylineColorAppearanceOptions

}
declare module 'cesium/Scene/PolylineColorAppearance' {
	import PolylineColorAppearanceOptions = require('cesium/Scene/PolylineColorAppearanceOptions')
	import VertexFormat = require('cesium/Core/VertexFormat')
	import Material = require('cesium/Scene/Material')
	class PolylineColorAppearance 
	{
		constructor(options? : PolylineColorAppearanceOptions);
		//Members
		static VERTEX_FORMAT: VertexFormat
		closed: boolean
		fragmentShaderSource: string
		material: Material
		renderState: Object
		translucent: boolean
		vertexFormat: VertexFormat
		vertexShaderSource: string


		//Methods
		getFragmentShaderSource() : string
		getRenderState() : Object
		isTranslucent() : boolean

	}
	export = PolylineColorAppearance

}
declare module 'cesium/Scene/PolylineMaterialAppearanceOptions' {
	import Material = require('cesium/Scene/Material')
	interface PolylineMaterialAppearanceOptions
	{
		translucent?: boolean;
		material?: Material;
		vertexShaderSource?: string;
		fragmentShaderSource?: string;
		renderState?: RenderState;
	}
	export = PolylineMaterialAppearanceOptions

}
declare module 'cesium/Scene/PolylineMaterialAppearance' {
	import PolylineMaterialAppearanceOptions = require('cesium/Scene/PolylineMaterialAppearanceOptions')
	import VertexFormat = require('cesium/Core/VertexFormat')
	import Material = require('cesium/Scene/Material')
	class PolylineMaterialAppearance 
	{
		constructor(options? : PolylineMaterialAppearanceOptions);
		//Members
		static VERTEX_FORMAT: VertexFormat
		closed: boolean
		fragmentShaderSource: string
		material: Material
		renderState: Object
		translucent: boolean
		vertexFormat: VertexFormat
		vertexShaderSource: string


		//Methods
		getFragmentShaderSource() : string
		getRenderState() : Object
		isTranslucent() : boolean

	}
	export = PolylineMaterialAppearance

}
declare module 'cesium/Scene/PrimitiveOptions' {
	import GeometryInstance = require('cesium/Core/GeometryInstance')
	import Appearance = require('cesium/Scene/Appearance')
	import Matrix4 = require('cesium/Core/Matrix4')
	import ShadowMode = require('cesium/Scene/ShadowMode')
	interface PrimitiveOptions
	{
		geometryInstances?: Array<GeometryInstance>|GeometryInstance;
		appearance?: Appearance;
		show?: boolean;
		modelMatrix?: Matrix4;
		vertexCacheOptimize?: boolean;
		interleave?: boolean;
		compressVertices?: boolean;
		releaseGeometryInstances?: boolean;
		allowPicking?: boolean;
		cull?: boolean;
		asynchronous?: boolean;
		debugShowBoundingVolume?: boolean;
		castShadows?: boolean;
		receiveShadows?: boolean;
		shadows?: ShadowMode;
	}
	export = PrimitiveOptions

}
declare module 'cesium/Scene/Primitive' {
	import PrimitiveOptions = require('cesium/Scene/PrimitiveOptions')
	import Appearance = require('cesium/Scene/Appearance')
	import GeometryInstance = require('cesium/Core/GeometryInstance')
	import Matrix4 = require('cesium/Core/Matrix4')
	import Promise = require('cesium/Promise')
	import ShadowMode = require('cesium/Scene/ShadowMode')
	class Primitive 
	{
		constructor(options? : PrimitiveOptions);
		//Members
		allowPicking: boolean
		appearance: Appearance
		asynchronous: boolean
		castShadows: boolean
		compressVertices: boolean
		cull: boolean
		debugShowBoundingVolume: boolean
		geometryInstances: Array<GeometryInstance>|GeometryInstance
		interleave: boolean
		modelMatrix: Matrix4
		ready: boolean
		readyPromise: Promise<Primitive>
		receiveShadows: boolean
		releaseGeometryInstances: boolean
		shadows: ShadowMode
		show: boolean
		vertexCacheOptimize: boolean


		//Methods
		destroy() : void
		getGeometryInstanceAttributes(id : any) : Object
		isDestroyed() : boolean
		update() : void

	}
	export = Primitive

}
declare module 'cesium/Scene/SceneTransforms' {
	import Cartesian2 = require('cesium/Core/Cartesian2')
	import Scene = require('cesium/Scene/Scene')
	import Cartesian3 = require('cesium/Core/Cartesian3')
	class SceneTransforms 
	{
		constructor();
		//Members


		//Methods
		static wgs84ToDrawingBufferCoordinates(scene : Scene, position : Cartesian3, result : Cartesian2) : Cartesian2
		static wgs84ToWindowCoordinates(scene : Scene, position : Cartesian3, result : Cartesian2) : Cartesian2

	}
	export = SceneTransforms

}
declare module 'cesium/Scene/SingleTileImageryProviderOptions' {
	import Rectangle = require('cesium/Core/Rectangle')
	import Credit = require('cesium/Core/Credit')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	interface SingleTileImageryProviderOptions
	{
		url: string;
		rectangle?: Rectangle;
		credit?: Credit|string;
		ellipsoid?: Ellipsoid;
		proxy?: Object;
	}
	export = SingleTileImageryProviderOptions

}
declare module 'cesium/Scene/SingleTileImageryProvider' {
	import SingleTileImageryProviderOptions = require('cesium/Scene/SingleTileImageryProviderOptions')
	import Credit = require('cesium/Core/Credit')
	import Event = require('cesium/Core/Event')
	import DefaultProxy = require('cesium/Core/DefaultProxy')
	import Promise = require('cesium/Promise')
	import Rectangle = require('cesium/Core/Rectangle')
	import TileDiscardPolicy = require('cesium/Scene/TileDiscardPolicy')
	import TilingScheme = require('cesium/Core/TilingScheme')
	import ImageryLayerFeatureInfo = require('cesium/Scene/ImageryLayerFeatureInfo')
	class SingleTileImageryProvider 
	{
		constructor(options? : SingleTileImageryProviderOptions);
		//Members
		credit: Credit
		errorEvent: Event
		hasAlphaChannel: boolean
		maximumLevel: number
		minimumLevel: number
		proxy: DefaultProxy
		ready: boolean
		readyPromise: Promise<boolean>
		rectangle: Rectangle
		tileDiscardPolicy: TileDiscardPolicy
		tileHeight: number
		tileWidth: number
		tilingScheme: TilingScheme
		url: string


		//Methods
		getTileCredits(x : number, y : number, level : number) : Array<Credit>
		pickFeatures(x : number, y : number, level : number, longitude : number, latitude : number) : Promise<Array<ImageryLayerFeatureInfo>>|void
		requestImage(x : number, y : number, level : number) : Promise<HTMLImageElement|HTMLCanvasElement>|void

	}
	export = SingleTileImageryProvider

}
declare module 'cesium/Scene/StencilFunction' {
	class StencilFunction 
	{
		constructor();
		//Members
		static ALWAYS: number
		static EQUAL: number
		static GREATER: number
		static GREATER_OR_EQUAL: number
		static LESS: number
		static LESS_OR_EQUAL: number
		static NEVER: number
		static NOT_EQUAL: number


		//Methods

	}
	export = StencilFunction

}
declare module 'cesium/Scene/StencilOperation' {
	class StencilOperation 
	{
		constructor();
		//Members
		static DECREMENT: number
		static DECREMENT_WRAP: number
		static INCREMENT: number
		static INCREMENT_WRAP: number
		static INVERT: number
		static KEEP: number
		static REPLACE: number
		static ZERO: number


		//Methods

	}
	export = StencilOperation

}
declare module 'cesium/Scene/TileCoordinatesImageryProviderOptions' {
	import TilingScheme = require('cesium/Core/TilingScheme')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import Color = require('cesium/Core/Color')
	interface TileCoordinatesImageryProviderOptions
	{
		tilingScheme?: TilingScheme;
		ellipsoid?: Ellipsoid;
		color?: Color;
		tileWidth?: number;
		tileHeight?: number;
	}
	export = TileCoordinatesImageryProviderOptions

}
declare module 'cesium/Scene/TileCoordinatesImageryProvider' {
	import TileCoordinatesImageryProviderOptions = require('cesium/Scene/TileCoordinatesImageryProviderOptions')
	import Credit = require('cesium/Core/Credit')
	import Event = require('cesium/Core/Event')
	import DefaultProxy = require('cesium/Core/DefaultProxy')
	import Promise = require('cesium/Promise')
	import Rectangle = require('cesium/Core/Rectangle')
	import TileDiscardPolicy = require('cesium/Scene/TileDiscardPolicy')
	import TilingScheme = require('cesium/Core/TilingScheme')
	import ImageryLayerFeatureInfo = require('cesium/Scene/ImageryLayerFeatureInfo')
	class TileCoordinatesImageryProvider 
	{
		constructor(options? : TileCoordinatesImageryProviderOptions);
		//Members
		credit: Credit
		errorEvent: Event
		hasAlphaChannel: boolean
		maximumLevel: number
		minimumLevel: number
		proxy: DefaultProxy
		ready: boolean
		readyPromise: Promise<boolean>
		rectangle: Rectangle
		tileDiscardPolicy: TileDiscardPolicy
		tileHeight: number
		tileWidth: number
		tilingScheme: TilingScheme


		//Methods
		getTileCredits(x : number, y : number, level : number) : Array<Credit>
		pickFeatures(x : number, y : number, level : number, longitude : number, latitude : number) : Promise<Array<ImageryLayerFeatureInfo>>|void
		requestImage(x : number, y : number, level : number) : Promise<HTMLImageElement|HTMLCanvasElement>|void

	}
	export = TileCoordinatesImageryProvider

}
declare module 'cesium/Scene/UrlTemplateImageryProvider' {
	import Promise = require('cesium/Promise')
	import Credit = require('cesium/Core/Credit')
	import Event = require('cesium/Core/Event')
	import DefaultProxy = require('cesium/Core/DefaultProxy')
	import Rectangle = require('cesium/Core/Rectangle')
	import TileDiscardPolicy = require('cesium/Scene/TileDiscardPolicy')
	import TilingScheme = require('cesium/Core/TilingScheme')
	import ImageryLayerFeatureInfo = require('cesium/Scene/ImageryLayerFeatureInfo')
	class UrlTemplateImageryProvider 
	{
		constructor(options? : Promise<any>|any);
		//Members
		credit: Credit
		enablePickFeatures: boolean
		errorEvent: Event
		hasAlphaChannel: boolean
		maximumLevel: number
		minimumLevel: number
		proxy: DefaultProxy
		ready: boolean
		readyPromise: Promise<boolean>
		rectangle: Rectangle
		tileDiscardPolicy: TileDiscardPolicy
		tileHeight: number
		tileWidth: number
		tilingScheme: TilingScheme
		url: string
		urlSchemeZeroPadding: Object


		//Methods
		getTileCredits(x : number, y : number, level : number) : Array<Credit>
		pickFeatures(x : number, y : number, level : number, longitude : number, latitude : number) : Promise<Array<ImageryLayerFeatureInfo>>|void
		reinitialize(options : Promise<any>|any) : void
		requestImage(x : number, y : number, level : number) : Promise<HTMLImageElement|HTMLCanvasElement>|void

	}
	export = UrlTemplateImageryProvider

}
declare module 'cesium/Scene/ViewportQuad' {
	import BoundingRectangle = require('cesium/Core/BoundingRectangle')
	import Material = require('cesium/Scene/Material')
	class ViewportQuad 
	{
		constructor(rectangle? : BoundingRectangle, material? : Material);
		//Members
		material: Material
		rectangle: BoundingRectangle
		show: boolean


		//Methods
		destroy() : void
		isDestroyed() : boolean
		update() : void

	}
	export = ViewportQuad

}
declare module 'cesium/Scene/WebMapServiceImageryProviderOptions' {
	import GetFeatureInfoFormat = require('cesium/Scene/GetFeatureInfoFormat')
	import Rectangle = require('cesium/Core/Rectangle')
	import TilingScheme = require('cesium/Core/TilingScheme')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import Credit = require('cesium/Core/Credit')
	interface WebMapServiceImageryProviderOptions
	{
		url: string;
		layers: string;
		parameters?: Object;
		getFeatureInfoParameters?: Object;
		enablePickFeatures?: boolean;
		getFeatureInfoFormats?: Array<GetFeatureInfoFormat>;
		rectangle?: Rectangle;
		tilingScheme?: TilingScheme;
		ellipsoid?: Ellipsoid;
		tileWidth?: number;
		tileHeight?: number;
		minimumLevel?: number;
		maximumLevel?: number;
		credit?: Credit|string;
		proxy?: Object;
		subdomains?: string|Array<string>;
	}
	export = WebMapServiceImageryProviderOptions

}
declare module 'cesium/Scene/WebMapServiceImageryProvider' {
	import WebMapServiceImageryProviderOptions = require('cesium/Scene/WebMapServiceImageryProviderOptions')
	import Credit = require('cesium/Core/Credit')
	import Event = require('cesium/Core/Event')
	import DefaultProxy = require('cesium/Core/DefaultProxy')
	import Promise = require('cesium/Promise')
	import Rectangle = require('cesium/Core/Rectangle')
	import TileDiscardPolicy = require('cesium/Scene/TileDiscardPolicy')
	import TilingScheme = require('cesium/Core/TilingScheme')
	import ImageryLayerFeatureInfo = require('cesium/Scene/ImageryLayerFeatureInfo')
	class WebMapServiceImageryProvider 
	{
		constructor(options? : WebMapServiceImageryProviderOptions);
		//Members
		static DefaultParameters: any
		static GetFeatureInfoDefaultParameters: any
		credit: Credit
		errorEvent: Event
		hasAlphaChannel: boolean
		layers: string
		maximumLevel: number
		minimumLevel: number
		proxy: DefaultProxy
		ready: boolean
		readyPromise: Promise<boolean>
		rectangle: Rectangle
		tileDiscardPolicy: TileDiscardPolicy
		tileHeight: number
		tileWidth: number
		tilingScheme: TilingScheme
		url: string


		//Methods
		getTileCredits(x : number, y : number, level : number) : Array<Credit>
		pickFeatures(x : number, y : number, level : number, longitude : number, latitude : number) : Promise<Array<ImageryLayerFeatureInfo>>|void
		requestImage(x : number, y : number, level : number) : Promise<HTMLImageElement|HTMLCanvasElement>|void

	}
	export = WebMapServiceImageryProvider

}
declare module 'cesium/Scene/WebMapTileServiceImageryProviderOptions' {
	import TilingScheme = require('cesium/Core/TilingScheme')
	import Rectangle = require('cesium/Core/Rectangle')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import Credit = require('cesium/Core/Credit')
	interface WebMapTileServiceImageryProviderOptions
	{
		url: string;
		format?: string;
		layer: string;
		style: string;
		tileMatrixSetID: string;
		tileMatrixLabels?: Array<any>;
		tileWidth?: number;
		tileHeight?: number;
		tilingScheme?: TilingScheme;
		proxy?: Object;
		rectangle?: Rectangle;
		minimumLevel?: number;
		maximumLevel?: number;
		ellipsoid?: Ellipsoid;
		credit?: Credit|string;
		subdomains?: string|Array<string>;
	}
	export = WebMapTileServiceImageryProviderOptions

}
declare module 'cesium/Scene/WebMapTileServiceImageryProvider' {
	import WebMapTileServiceImageryProviderOptions = require('cesium/Scene/WebMapTileServiceImageryProviderOptions')
	import Credit = require('cesium/Core/Credit')
	import Event = require('cesium/Core/Event')
	import DefaultProxy = require('cesium/Core/DefaultProxy')
	import Promise = require('cesium/Promise')
	import Rectangle = require('cesium/Core/Rectangle')
	import TileDiscardPolicy = require('cesium/Scene/TileDiscardPolicy')
	import TilingScheme = require('cesium/Core/TilingScheme')
	import ImageryLayerFeatureInfo = require('cesium/Scene/ImageryLayerFeatureInfo')
	class WebMapTileServiceImageryProvider 
	{
		constructor(options? : WebMapTileServiceImageryProviderOptions);
		//Members
		credit: Credit
		errorEvent: Event
		format: string
		hasAlphaChannel: boolean
		maximumLevel: number
		minimumLevel: number
		proxy: DefaultProxy
		ready: boolean
		readyPromise: Promise<boolean>
		rectangle: Rectangle
		tileDiscardPolicy: TileDiscardPolicy
		tileHeight: number
		tileWidth: number
		tilingScheme: TilingScheme
		url: string


		//Methods
		getTileCredits(x : number, y : number, level : number) : Array<Credit>
		pickFeatures(x : number, y : number, level : number, longitude : number, latitude : number) : Promise<Array<ImageryLayerFeatureInfo>>|void
		requestImage(x : number, y : number, level : number) : Promise<HTMLImageElement|HTMLCanvasElement>|void

	}
	export = WebMapTileServiceImageryProvider

}
declare module 'cesium/Scene/createOpenStreetMapImageryProviderOptions' {
	import Rectangle = require('cesium/Core/Rectangle')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	import Credit = require('cesium/Core/Credit')
	interface createOpenStreetMapImageryProviderOptions
	{
		url?: string;
		fileExtension?: string;
		proxy?: Object;
		rectangle?: Rectangle;
		minimumLevel?: number;
		maximumLevel?: number;
		ellipsoid?: Ellipsoid;
		credit?: Credit|string;
	}
	export = createOpenStreetMapImageryProviderOptions

}
declare module 'cesium/Scene/createOpenStreetMapImageryProvider' {
	import createOpenStreetMapImageryProviderOptions = require('cesium/Scene/createOpenStreetMapImageryProviderOptions')
	function createOpenStreetMapImageryProvider(options? : createOpenStreetMapImageryProviderOptions) : UrlTemplateImageryProvider;
	export = createOpenStreetMapImageryProvider

}
declare module 'cesium/Scene/createTangentSpaceDebugPrimitiveOptions' {
	import Geometry = require('cesium/Core/Geometry')
	import Matrix4 = require('cesium/Core/Matrix4')
	interface createTangentSpaceDebugPrimitiveOptions
	{
		geometry: Geometry;
		length?: number;
		modelMatrix?: Matrix4;
	}
	export = createTangentSpaceDebugPrimitiveOptions

}
declare module 'cesium/Scene/createTangentSpaceDebugPrimitive' {
	import createTangentSpaceDebugPrimitiveOptions = require('cesium/Scene/createTangentSpaceDebugPrimitiveOptions')
	function createTangentSpaceDebugPrimitive(options? : createTangentSpaceDebugPrimitiveOptions) : Primitive;
	export = createTangentSpaceDebugPrimitive

}
declare module 'cesium/Scene/createTileMapServiceImageryProviderOptions' {
	import Credit = require('cesium/Core/Credit')
	import Rectangle = require('cesium/Core/Rectangle')
	import TilingScheme = require('cesium/Core/TilingScheme')
	import Ellipsoid = require('cesium/Core/Ellipsoid')
	interface createTileMapServiceImageryProviderOptions
	{
		url?: string;
		fileExtension?: string;
		proxy?: Object;
		credit?: Credit|string;
		minimumLevel?: number;
		maximumLevel?: number;
		rectangle?: Rectangle;
		tilingScheme?: TilingScheme;
		ellipsoid?: Ellipsoid;
		tileWidth?: number;
		tileHeight?: number;
		flipXY?: boolean;
	}
	export = createTileMapServiceImageryProviderOptions

}
declare module 'cesium/Scene/createTileMapServiceImageryProvider' {
	import createTileMapServiceImageryProviderOptions = require('cesium/Scene/createTileMapServiceImageryProviderOptions')
	function createTileMapServiceImageryProvider(options? : createTileMapServiceImageryProviderOptions) : UrlTemplateImageryProvider;
	export = createTileMapServiceImageryProvider

}
declare module 'cesium/Widgets/ClockViewModel' {
	import Clock = require('cesium/Core/Clock')
	import ClockRange = require('cesium/Core/ClockRange')
	import ClockStep = require('cesium/Core/ClockStep')
	import JulianDate = require('cesium/Core/JulianDate')
	class ClockViewModel 
	{
		constructor(clock? : Clock);
		//Members
		canAnimate: boolean
		clock: Clock
		clockRange: ClockRange
		clockStep: ClockStep
		currentTime: JulianDate
		multiplier: number
		shouldAnimate: boolean
		startTime: JulianDate
		stopTime: JulianDate
		systemTime: JulianDate


		//Methods
		destroy() : void
		isDestroyed() : boolean
		synchronize() : void

	}
	export = ClockViewModel

}
declare module 'cesium/Widgets/Command' {
	import Event = require('cesium/Core/Event')
	class Command 
	{
		constructor();
		//Members
		afterExecute: Event
		beforeExecute: Event
		canExecute: boolean


		//Methods

	}
	export = Command

}
declare module 'cesium/Widgets/SvgPathBindingHandler' {
	class SvgPathBindingHandler 
	{
		constructor();
		//Members


		//Methods

	}
	export = SvgPathBindingHandler

}
declare module 'cesium/Widgets/ToggleButtonViewModelOptions' {
	interface ToggleButtonViewModelOptions
	{
		toggled?: boolean;
		tooltip?: string;
	}
	export = ToggleButtonViewModelOptions

}
declare module 'cesium/Widgets/ToggleButtonViewModel' {
	import Command = require('cesium/Widgets/Command')
	import ToggleButtonViewModelOptions = require('cesium/Widgets/ToggleButtonViewModelOptions')
	class ToggleButtonViewModel 
	{
		constructor(command : Command, options? : ToggleButtonViewModelOptions);
		//Members
		command: Command
		toggled: boolean
		tooltip: string


		//Methods

	}
	export = ToggleButtonViewModel

}
declare module 'cesium/Widgets/createCommand' {
	function createCommand(func : (()=>void), canExecute? : boolean) : void;
	export = createCommand

}
declare module 'cesium/Widgets/Animation/AnimationViewModel' {
	import ClockViewModel = require('cesium/Widgets/ClockViewModel')
	import Command = require('cesium/Widgets/Command')
	import ToggleButtonViewModel = require('cesium/Widgets/ToggleButtonViewModel')
	class AnimationViewModel 
	{
		constructor(clockViewModel : ClockViewModel);
		//Members
		static defaultDateFormatter: any
		static defaultTicks: Array<number>
		static defaultTimeFormatter: any
		clockViewModel: ClockViewModel
		dateFormatter: any
		dateLabel: string
		faster: Command
		multiplierLabel: string
		pauseViewModel: ToggleButtonViewModel
		playForwardViewModel: ToggleButtonViewModel
		playRealtimeViewModel: ToggleButtonViewModel
		playReverseViewModel: ToggleButtonViewModel
		shuttleRingAngle: number
		shuttleRingDragging: boolean
		slower: Command
		snapToTicks: boolean
		timeFormatter: any
		timeLabel: string


		//Methods
		getShuttleRingTicks() : Array<number>
		setShuttleRingTicks(positiveTicks : Array<number>) : void

	}
	export = AnimationViewModel

}
declare module 'cesium/Widgets/Animation/Animation' {
	import AnimationViewModel = require('cesium/Widgets/Animation/AnimationViewModel')
	class Animation 
	{
		constructor(container : Element|string, viewModel : AnimationViewModel);
		//Members
		container: Element
		viewModel: AnimationViewModel


		//Methods
		applyThemeChanges() : void
		destroy() : void
		isDestroyed() : boolean
		resize() : void

	}
	export = Animation

}
declare module 'cesium/Widgets/BaseLayerPicker/ProviderViewModelOptions' {
	import Command = require('cesium/Widgets/Command')
	interface ProviderViewModelOptions
	{
		name: string;
		tooltip: string;
		iconUrl: string;
		creationFunction: any|Command;
	}
	export = ProviderViewModelOptions

}
declare module 'cesium/Widgets/BaseLayerPicker/ProviderViewModel' {
	import ProviderViewModelOptions = require('cesium/Widgets/BaseLayerPicker/ProviderViewModelOptions')
	import Command = require('cesium/Widgets/Command')
	class ProviderViewModel 
	{
		constructor(options : ProviderViewModelOptions);
		//Members
		creationCommand: Command
		iconUrl: string
		name: string
		tooltip: string


		//Methods

	}
	export = ProviderViewModel

}
declare module 'cesium/Widgets/BaseLayerPicker/BaseLayerPickerOptions' {
	import Globe = require('cesium/Scene/Globe')
	import ProviderViewModel = require('cesium/Widgets/BaseLayerPicker/ProviderViewModel')
	interface BaseLayerPickerOptions
	{
		globe: Globe;
		imageryProviderViewModels?: Array<ProviderViewModel>;
		selectedImageryProviderViewModel?: ProviderViewModel;
		terrainProviderViewModels?: Array<ProviderViewModel>;
		selectedTerrainProviderViewModel?: ProviderViewModel;
	}
	export = BaseLayerPickerOptions

}
declare module 'cesium/Widgets/BaseLayerPicker/BaseLayerPickerViewModelOptions' {
	import Globe = require('cesium/Scene/Globe')
	import ProviderViewModel = require('cesium/Widgets/BaseLayerPicker/ProviderViewModel')
	interface BaseLayerPickerViewModelOptions
	{
		globe: Globe;
		imageryProviderViewModels?: Array<ProviderViewModel>;
		selectedImageryProviderViewModel?: ProviderViewModel;
		terrainProviderViewModels?: Array<ProviderViewModel>;
		selectedTerrainProviderViewModel?: ProviderViewModel;
	}
	export = BaseLayerPickerViewModelOptions

}
declare module 'cesium/Widgets/BaseLayerPicker/BaseLayerPickerViewModel' {
	import BaseLayerPickerViewModelOptions = require('cesium/Widgets/BaseLayerPicker/BaseLayerPickerViewModelOptions')
	import Globe = require('cesium/Scene/Globe')
	import ProviderViewModel = require('cesium/Widgets/BaseLayerPicker/ProviderViewModel')
	import Command = require('cesium/Widgets/Command')
	class BaseLayerPickerViewModel 
	{
		constructor(options? : BaseLayerPickerViewModelOptions);
		//Members
		buttonImageUrl: string
		buttonTooltip: string
		dropDownVisible: boolean
		globe: Globe
		imageryProviderViewModels: Array<ProviderViewModel>
		selectedImagery: ProviderViewModel
		selectedTerrain: ProviderViewModel
		terrainProviderViewModels: Array<ProviderViewModel>
		toggleDropDown: Command


		//Methods

	}
	export = BaseLayerPickerViewModel

}
declare module 'cesium/Widgets/BaseLayerPicker/BaseLayerPicker' {
	import BaseLayerPickerOptions = require('cesium/Widgets/BaseLayerPicker/BaseLayerPickerOptions')
	import BaseLayerPickerViewModel = require('cesium/Widgets/BaseLayerPicker/BaseLayerPickerViewModel')
	class BaseLayerPicker 
	{
		constructor(container : Element|string, options? : BaseLayerPickerOptions);
		//Members
		container: Element
		viewModel: BaseLayerPickerViewModel


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = BaseLayerPicker

}
declare module 'cesium/Widgets/CesiumInspector/CesiumInspectorViewModel' {
	import Scene = require('cesium/Scene/Scene')
	import Command = require('cesium/Widgets/Command')
	class CesiumInspectorViewModel 
	{
		constructor(scene : Scene);
		//Members
		decrementDepthFrustum: Command
		depthFrustum: number
		depthFrustumText: string
		doFilterPrimitive: Command
		doFilterTile: Command
		doSuspendUpdates: Command
		dropDownVisible: boolean
		filterPrimitive: boolean
		filterTile: boolean
		frustums: boolean
		frustumStatisticText: string
		generalSwitchText: string
		generalVisible: boolean
		globeDepth: boolean
		hasPickedPrimitive: boolean
		hasPickedTile: boolean
		incrementDepthFrustum: Command
		performance: boolean
		performanceContainer: Element
		pickDepth: boolean
		pickPimitiveActive: boolean
		pickPrimitive: Command
		pickTile: Command
		pickTileActive: boolean
		primitive: Command
		primitiveBoundingSphere: boolean
		primitiveReferenceFrame: boolean
		primitivesSwitchText: string
		primitivesVisible: boolean
		scene: Scene
		selectNE: Command
		selectNW: Command
		selectParent: Command
		selectSE: Command
		selectSW: Command
		shaderCacheText: string
		showFrustums: Command
		showGlobeDepth: Command
		showPerformance: Command
		showPickDepth: Command
		showPrimitiveBoundingSphere: Command
		showPrimitiveReferenceFrame: Command
		showTileBoundingSphere: Command
		showTileCoordinates: Command
		showWireframe: Command
		suspendUpdates: boolean
		terrainSwitchText: string
		terrainVisible: boolean
		tile: Command
		tileBoundingSphere: boolean
		tileCoordinates: boolean
		tileText: string
		toggleDropDown: Command
		toggleGeneral: Command
		togglePrimitives: Command
		toggleTerrain: Command
		wireframe: boolean


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = CesiumInspectorViewModel

}
declare module 'cesium/Widgets/CesiumInspector/CesiumInspector' {
	import Scene = require('cesium/Scene/Scene')
	import CesiumInspectorViewModel = require('cesium/Widgets/CesiumInspector/CesiumInspectorViewModel')
	class CesiumInspector 
	{
		constructor(container : Element|string, scene : Scene);
		//Members
		container: Element
		viewModel: CesiumInspectorViewModel


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = CesiumInspector

}
declare module 'cesium/Widgets/CesiumWidget/CesiumWidgetOptions' {
	import Clock = require('cesium/Core/Clock')
	import ImageryProvider = require('cesium/Scene/ImageryProvider')
	import TerrainProvider = require('cesium/Core/TerrainProvider')
	import SkyBox = require('cesium/Scene/SkyBox')
	import SkyAtmosphere = require('cesium/Scene/SkyAtmosphere')
	import SceneMode = require('cesium/Scene/SceneMode')
	import MapProjection = require('cesium/Core/MapProjection')
	import Globe = require('cesium/Scene/Globe')
	import ShadowMode = require('cesium/Scene/ShadowMode')
	import MapMode2D = require('cesium/Scene/MapMode2D')
	interface CesiumWidgetOptions
	{
		clock?: Clock;
		imageryProvider?: ImageryProvider;
		terrainProvider?: TerrainProvider;
		skyBox?: SkyBox;
		skyAtmosphere?: SkyAtmosphere;
		sceneMode?: SceneMode;
		scene3DOnly?: boolean;
		orderIndependentTranslucency?: boolean;
		mapProjection?: MapProjection;
		globe?: Globe;
		useDefaultRenderLoop?: boolean;
		targetFrameRate?: number;
		showRenderLoopErrors?: boolean;
		contextOptions?: Object;
		creditContainer?: Element|string;
		terrainExaggeration?: number;
		shadows?: boolean;
		terrainShadows?: ShadowMode;
		mapMode2D?: MapMode2D;
	}
	export = CesiumWidgetOptions

}
declare module 'cesium/Widgets/CesiumWidget/CesiumWidget' {
	import CesiumWidgetOptions = require('cesium/Widgets/CesiumWidget/CesiumWidgetOptions')
	import Camera = require('cesium/Scene/Camera')
	import Clock = require('cesium/Core/Clock')
	import ImageryLayerCollection = require('cesium/Scene/ImageryLayerCollection')
	import Scene = require('cesium/Scene/Scene')
	import ScreenSpaceEventHandler = require('cesium/Core/ScreenSpaceEventHandler')
	import TerrainProvider = require('cesium/Core/TerrainProvider')
	class CesiumWidget 
	{
		constructor(container : Element|string, options? : CesiumWidgetOptions);
		//Members
		camera: Camera
		canvas: HTMLCanvasElement
		clock: Clock
		container: Element
		creditContainer: Element
		imageryLayers: ImageryLayerCollection
		resolutionScale: number
		scene: Scene
		screenSpaceEventHandler: ScreenSpaceEventHandler
		targetFrameRate: number
		terrainProvider: TerrainProvider
		useDefaultRenderLoop: boolean


		//Methods
		destroy() : void
		isDestroyed() : boolean
		render() : void
		resize() : void
		showErrorPanel(title : string, message : string, error : string) : void

	}
	export = CesiumWidget

}
declare module 'cesium/Widgets/FullscreenButton/FullscreenButtonViewModel' {
	import Command = require('cesium/Widgets/Command')
	class FullscreenButtonViewModel 
	{
		constructor(fullscreenElement? : Element|string);
		//Members
		command: Command
		fullscreenElement: Element
		isFullscreen: boolean
		isFullscreenEnabled: boolean
		tooltip: string


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = FullscreenButtonViewModel

}
declare module 'cesium/Widgets/FullscreenButton/FullscreenButton' {
	import FullscreenButtonViewModel = require('cesium/Widgets/FullscreenButton/FullscreenButtonViewModel')
	class FullscreenButton 
	{
		constructor(container : Element|string, fullscreenElement? : Element|string);
		//Members
		container: Element
		viewModel: FullscreenButtonViewModel


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = FullscreenButton

}
declare module 'cesium/Widgets/Geocoder/GeocoderOptions' {
	import Scene = require('cesium/Scene/Scene')
	interface GeocoderOptions
	{
		container: Element|string;
		scene: Scene;
		url?: string;
		key?: string;
		flightDuration?: number;
	}
	export = GeocoderOptions

}
declare module 'cesium/Widgets/Geocoder/GeocoderViewModelOptions' {
	import Scene = require('cesium/Scene/Scene')
	interface GeocoderViewModelOptions
	{
		scene: Scene;
		url?: string;
		key?: string;
		flightDuration?: number;
	}
	export = GeocoderViewModelOptions

}
declare module 'cesium/Widgets/Geocoder/GeocoderViewModel' {
	import GeocoderViewModelOptions = require('cesium/Widgets/Geocoder/GeocoderViewModelOptions')
	import Event = require('cesium/Core/Event')
	import Scene = require('cesium/Scene/Scene')
	import Command = require('cesium/Widgets/Command')
	class GeocoderViewModel 
	{
		constructor(options? : GeocoderViewModelOptions);
		//Members
		complete: Event
		flightDuration: number|void
		isSearchInProgress: boolean
		keepExpanded: boolean
		key: string
		scene: Scene
		search: Command
		searchText: string
		url: string


		//Methods

	}
	export = GeocoderViewModel

}
declare module 'cesium/Widgets/Geocoder/Geocoder' {
	import GeocoderOptions = require('cesium/Widgets/Geocoder/GeocoderOptions')
	import GeocoderViewModel = require('cesium/Widgets/Geocoder/GeocoderViewModel')
	class Geocoder 
	{
		constructor(options? : GeocoderOptions);
		//Members
		container: Element
		viewModel: GeocoderViewModel


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = Geocoder

}
declare module 'cesium/Widgets/HomeButton/HomeButtonViewModel' {
	import Scene = require('cesium/Scene/Scene')
	import Command = require('cesium/Widgets/Command')
	class HomeButtonViewModel 
	{
		constructor(scene : Scene, duration? : number);
		//Members
		command: Command
		duration: number|void
		scene: Scene
		tooltip: string


		//Methods

	}
	export = HomeButtonViewModel

}
declare module 'cesium/Widgets/HomeButton/HomeButton' {
	import Scene = require('cesium/Scene/Scene')
	import HomeButtonViewModel = require('cesium/Widgets/HomeButton/HomeButtonViewModel')
	class HomeButton 
	{
		constructor(container : Element|string, scene : Scene, duration? : number);
		//Members
		container: Element
		viewModel: HomeButtonViewModel


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = HomeButton

}
declare module 'cesium/Widgets/InfoBox/InfoBoxViewModel' {
	import Event = require('cesium/Core/Event')
	class InfoBoxViewModel 
	{
		constructor();
		//Members
		cameraClicked: Event
		cameraIconPath: string
		closeClicked: Event
		description: string
		enableCamera: boolean
		isCameraTracking: boolean
		maxHeight: number
		showInfo: boolean
		titleText: string


		//Methods
		maxHeightOffset(offset : number) : string

	}
	export = InfoBoxViewModel

}
declare module 'cesium/Widgets/InfoBox/InfoBox' {
	import InfoBoxViewModel = require('cesium/Widgets/InfoBox/InfoBoxViewModel')
	class InfoBox 
	{
		constructor(container : Element|string);
		//Members
		container: Element
		frame: HTMLIFrameElement
		viewModel: InfoBoxViewModel


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = InfoBox

}
declare module 'cesium/Widgets/NavigationHelpButton/NavigationHelpButtonOptions' {
	interface NavigationHelpButtonOptions
	{
		container: Element|string;
		instructionsInitiallyVisible?: boolean;
	}
	export = NavigationHelpButtonOptions

}
declare module 'cesium/Widgets/NavigationHelpButton/NavigationHelpButtonViewModel' {
	import Command = require('cesium/Widgets/Command')
	class NavigationHelpButtonViewModel 
	{
		constructor();
		//Members
		command: Command
		showClick: Command
		showInstructions: boolean
		showTouch: Command
		tooltip: string


		//Methods

	}
	export = NavigationHelpButtonViewModel

}
declare module 'cesium/Widgets/NavigationHelpButton/NavigationHelpButton' {
	import NavigationHelpButtonOptions = require('cesium/Widgets/NavigationHelpButton/NavigationHelpButtonOptions')
	import NavigationHelpButtonViewModel = require('cesium/Widgets/NavigationHelpButton/NavigationHelpButtonViewModel')
	class NavigationHelpButton 
	{
		constructor(options? : NavigationHelpButtonOptions);
		//Members
		container: Element
		viewModel: NavigationHelpButtonViewModel


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = NavigationHelpButton

}
declare module 'cesium/Widgets/PerformanceWatchdog/PerformanceWatchdogOptions' {
	import Scene = require('cesium/Scene/Scene')
	interface PerformanceWatchdogOptions
	{
		container: Element|string;
		scene: Scene;
		lowFrameRateMessage?: string;
	}
	export = PerformanceWatchdogOptions

}
declare module 'cesium/Widgets/PerformanceWatchdog/PerformanceWatchdogViewModelOptions' {
	import Scene = require('cesium/Scene/Scene')
	interface PerformanceWatchdogViewModelOptions
	{
		scene: Scene;
		lowFrameRateMessage?: string;
	}
	export = PerformanceWatchdogViewModelOptions

}
declare module 'cesium/Widgets/PerformanceWatchdog/PerformanceWatchdogViewModel' {
	import PerformanceWatchdogViewModelOptions = require('cesium/Widgets/PerformanceWatchdog/PerformanceWatchdogViewModelOptions')
	import Command = require('cesium/Widgets/Command')
	import Scene = require('cesium/Scene/Scene')
	class PerformanceWatchdogViewModel 
	{
		constructor(options? : PerformanceWatchdogViewModelOptions);
		//Members
		dismissMessage: Command
		lowFrameRateMessage: string
		lowFrameRateMessageDismissed: boolean
		scene: Scene
		showingLowFrameRateMessage: boolean


		//Methods

	}
	export = PerformanceWatchdogViewModel

}
declare module 'cesium/Widgets/PerformanceWatchdog/PerformanceWatchdog' {
	import PerformanceWatchdogOptions = require('cesium/Widgets/PerformanceWatchdog/PerformanceWatchdogOptions')
	import PerformanceWatchdogViewModel = require('cesium/Widgets/PerformanceWatchdog/PerformanceWatchdogViewModel')
	class PerformanceWatchdog 
	{
		constructor(options? : PerformanceWatchdogOptions);
		//Members
		container: Element
		viewModel: PerformanceWatchdogViewModel


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = PerformanceWatchdog

}
declare module 'cesium/Widgets/SceneModePicker/SceneModePickerViewModel' {
	import Scene = require('cesium/Scene/Scene')
	import Command = require('cesium/Widgets/Command')
	import SceneMode = require('cesium/Scene/SceneMode')
	class SceneModePickerViewModel 
	{
		constructor(scene : Scene, duration? : number);
		//Members
		dropDownVisible: boolean
		duration: number
		morphTo2D: Command
		morphTo3D: Command
		morphToColumbusView: Command
		scene: Scene
		sceneMode: SceneMode
		selectedTooltip: string
		toggleDropDown: Command
		tooltip2D: string
		tooltip3D: string
		tooltipColumbusView: string


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = SceneModePickerViewModel

}
declare module 'cesium/Widgets/SceneModePicker/SceneModePicker' {
	import Scene = require('cesium/Scene/Scene')
	import SceneModePickerViewModel = require('cesium/Widgets/SceneModePicker/SceneModePickerViewModel')
	class SceneModePicker 
	{
		constructor(container : Element|string, scene : Scene, duration? : number);
		//Members
		container: Element
		viewModel: SceneModePickerViewModel


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = SceneModePicker

}
declare module 'cesium/Widgets/SelectionIndicator/SelectionIndicatorViewModel' {
	import Scene = require('cesium/Scene/Scene')
	import Cartesian3 = require('cesium/Core/Cartesian3')
	class SelectionIndicatorViewModel 
	{
		constructor(scene : Scene, selectionIndicatorElement : Element, container : Element);
		//Members
		computeScreenSpacePosition: any
		container: Element
		isVisible: boolean
		position: Cartesian3
		scene: Scene
		selectionIndicatorElement: Element
		showSelection: boolean


		//Methods
		animateAppear() : void
		animateDepart() : void
		update() : void

	}
	export = SelectionIndicatorViewModel

}
declare module 'cesium/Widgets/SelectionIndicator/SelectionIndicator' {
	import Scene = require('cesium/Scene/Scene')
	import SelectionIndicatorViewModel = require('cesium/Widgets/SelectionIndicator/SelectionIndicatorViewModel')
	class SelectionIndicator 
	{
		constructor(container : Element|string, scene : Scene);
		//Members
		container: Element
		viewModel: SelectionIndicatorViewModel


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = SelectionIndicator

}
declare module 'cesium/Widgets/Timeline/Timeline' {
	import Clock = require('cesium/Core/Clock')
	import JulianDate = require('cesium/Core/JulianDate')
	class Timeline 
	{
		constructor(container : Element, clock : Clock);
		//Members
		container: Element


		//Methods
		destroy() : void
		isDestroyed() : boolean
		resize() : void
		zoomTo(startTime : JulianDate, stopTime : JulianDate) : void

	}
	export = Timeline

}
declare module 'cesium/Widgets/VRButton/VRButtonViewModel' {
	import Scene = require('cesium/Scene/Scene')
	import Command = require('cesium/Widgets/Command')
	class VRButtonViewModel 
	{
		constructor(scene : Scene, vrElement? : Element|string);
		//Members
		command: Command
		isVREnabled: boolean
		isVRMode: boolean
		tooltip: string
		vrElement: Element


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = VRButtonViewModel

}
declare module 'cesium/Widgets/VRButton/VRButton' {
	import Scene = require('cesium/Scene/Scene')
	import VRButtonViewModel = require('cesium/Widgets/VRButton/VRButtonViewModel')
	class VRButton 
	{
		constructor(container : Element|string, scene : Scene, vrElement? : Element|string);
		//Members
		container: Element
		viewModel: VRButtonViewModel


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = VRButton

}
declare module 'cesium/Widgets/Viewer/ViewerOptions' {
	import Clock = require('cesium/Core/Clock')
	import ProviderViewModel = require('cesium/Widgets/BaseLayerPicker/ProviderViewModel')
	import ImageryProvider = require('cesium/Scene/ImageryProvider')
	import TerrainProvider = require('cesium/Core/TerrainProvider')
	import SkyBox = require('cesium/Scene/SkyBox')
	import SkyAtmosphere = require('cesium/Scene/SkyAtmosphere')
	import SceneMode = require('cesium/Scene/SceneMode')
	import MapProjection = require('cesium/Core/MapProjection')
	import Globe = require('cesium/Scene/Globe')
	import DataSourceCollection = require('cesium/DataSources/DataSourceCollection')
	import ShadowMode = require('cesium/Scene/ShadowMode')
	import MapMode2D = require('cesium/Scene/MapMode2D')
	interface ViewerOptions
	{
		animation?: boolean;
		baseLayerPicker?: boolean;
		fullscreenButton?: boolean;
		vrButton?: boolean;
		geocoder?: boolean;
		homeButton?: boolean;
		infoBox?: boolean;
		sceneModePicker?: boolean;
		selectionIndicator?: boolean;
		timeline?: boolean;
		navigationHelpButton?: boolean;
		navigationInstructionsInitiallyVisible?: boolean;
		scene3DOnly?: boolean;
		clock?: Clock;
		selectedImageryProviderViewModel?: ProviderViewModel;
		imageryProviderViewModels?: Array<ProviderViewModel>;
		selectedTerrainProviderViewModel?: ProviderViewModel;
		terrainProviderViewModels?: Array<ProviderViewModel>;
		imageryProvider?: ImageryProvider;
		terrainProvider?: TerrainProvider;
		skyBox?: SkyBox;
		skyAtmosphere?: SkyAtmosphere;
		fullscreenElement?: Element|string;
		useDefaultRenderLoop?: boolean;
		targetFrameRate?: number;
		showRenderLoopErrors?: boolean;
		automaticallyTrackDataSourceClocks?: boolean;
		contextOptions?: Object;
		sceneMode?: SceneMode;
		mapProjection?: MapProjection;
		globe?: Globe;
		orderIndependentTranslucency?: boolean;
		creditContainer?: Element|string;
		dataSources?: DataSourceCollection;
		terrainExaggeration?: number;
		shadows?: boolean;
		terrainShadows?: ShadowMode;
		mapMode2D?: MapMode2D;
	}
	export = ViewerOptions

}
declare module 'cesium/Widgets/Viewer/flyToOptions' {
	import HeadingPitchRange = require('cesium/Core/HeadingPitchRange')
	interface flyToOptions
	{
		duration?: number;
		maximumHeight?: number;
		offset?: HeadingPitchRange;
	}
	export = flyToOptions

}
declare module 'cesium/Widgets/Viewer/Viewer' {
	import ViewerOptions = require('cesium/Widgets/Viewer/ViewerOptions')
	import Animation = require('cesium/Widgets/Animation/Animation')
	import BaseLayerPicker = require('cesium/Widgets/BaseLayerPicker/BaseLayerPicker')
	import Camera = require('cesium/Scene/Camera')
	import CesiumWidget = require('cesium/Widgets/CesiumWidget/CesiumWidget')
	import Clock = require('cesium/Core/Clock')
	import DataSourceDisplay = require('cesium/DataSources/DataSourceDisplay')
	import DataSourceCollection = require('cesium/DataSources/DataSourceCollection')
	import EntityCollection = require('cesium/DataSources/EntityCollection')
	import FullscreenButton = require('cesium/Widgets/FullscreenButton/FullscreenButton')
	import Geocoder = require('cesium/Widgets/Geocoder/Geocoder')
	import HomeButton = require('cesium/Widgets/HomeButton/HomeButton')
	import ImageryLayerCollection = require('cesium/Scene/ImageryLayerCollection')
	import InfoBox = require('cesium/Widgets/InfoBox/InfoBox')
	import NavigationHelpButton = require('cesium/Widgets/NavigationHelpButton/NavigationHelpButton')
	import Scene = require('cesium/Scene/Scene')
	import SceneModePicker = require('cesium/Widgets/SceneModePicker/SceneModePicker')
	import ScreenSpaceEventHandler = require('cesium/Core/ScreenSpaceEventHandler')
	import Entity = require('cesium/DataSources/Entity')
	import SelectionIndicator = require('cesium/Widgets/SelectionIndicator/SelectionIndicator')
	import ShadowMap = require('cesium/Scene/ShadowMap')
	import TerrainProvider = require('cesium/Core/TerrainProvider')
	import ShadowMode = require('cesium/Scene/ShadowMode')
	import Timeline = require('cesium/Widgets/Timeline/Timeline')
	import VRButton = require('cesium/Widgets/VRButton/VRButton')
	import Promise = require('cesium/Promise')
	import DataSource = require('cesium/DataSources/DataSource')
	import ImageryLayer = require('cesium/Scene/ImageryLayer')
	import flyToOptions = require('cesium/Widgets/Viewer/flyToOptions')
	import HeadingPitchRange = require('cesium/Core/HeadingPitchRange')
	class Viewer 
	{
		constructor(container : Element|string, options? : ViewerOptions);
		//Members
		allowDataSourcesToSuspendAnimation: boolean
		animation: Animation
		baseLayerPicker: BaseLayerPicker
		bottomContainer: Element
		camera: Camera
		canvas: HTMLCanvasElement
		cesiumLogo: Element
		cesiumWidget: CesiumWidget
		clock: Clock
		container: Element
		dataSourceDisplay: DataSourceDisplay
		dataSources: DataSourceCollection
		entities: EntityCollection
		fullscreenButton: FullscreenButton
		geocoder: Geocoder
		homeButton: HomeButton
		imageryLayers: ImageryLayerCollection
		infoBox: InfoBox
		navigationHelpButton: NavigationHelpButton
		resolutionScale: number
		scene: Scene
		sceneModePicker: SceneModePicker
		screenSpaceEventHandler: ScreenSpaceEventHandler
		selectedEntity: Entity
		selectionIndicator: SelectionIndicator
		shadowMap: ShadowMap
		shadows: boolean
		targetFrameRate: number
		terrainProvider: TerrainProvider
		terrainShadows: ShadowMode
		timeline: Timeline
		trackedEntity: Entity
		useDefaultRenderLoop: boolean
		vrButton: VRButton


		//Methods
		destroy() : void
		extend(mixin : any, options : any) : void
		flyTo(target : Entity|Array<Entity>|EntityCollection|DataSource|ImageryLayer|Promise<Entity|Array<Entity>|EntityCollection|DataSource|ImageryLayer>, options : flyToOptions) : Promise<boolean>
		forceResize() : void
		isDestroyed() : boolean
		render() : void
		resize() : void
		zoomTo(target : Entity|Array<Entity>|EntityCollection|DataSource|ImageryLayer|Promise<Entity|Array<Entity>|EntityCollection|DataSource|ImageryLayer>, offset : HeadingPitchRange) : Promise<boolean>

	}
	export = Viewer

}
declare module 'cesium/Widgets/Viewer/viewerCesiumInspectorMixin' {
	import Viewer = require('cesium/Widgets/Viewer/Viewer')
	function viewerCesiumInspectorMixin(viewer : Viewer) : void;
	export = viewerCesiumInspectorMixin

}
declare module 'cesium/Widgets/Viewer/viewerDragDropMixinOptions' {
	import DefaultProxy = require('cesium/Core/DefaultProxy')
	interface viewerDragDropMixinOptions
	{
		dropTarget?: Element|string;
		clearOnDrop?: boolean;
		flyToOnDrop?: boolean;
		clampToGround?: boolean;
		proxy?: DefaultProxy;
	}
	export = viewerDragDropMixinOptions

}
declare module 'cesium/Widgets/Viewer/viewerDragDropMixin' {
	import Viewer = require('cesium/Widgets/Viewer/Viewer')
	import viewerDragDropMixinOptions = require('cesium/Widgets/Viewer/viewerDragDropMixinOptions')
	import Event = require('cesium/Core/Event')
	import DefaultProxy = require('cesium/Core/DefaultProxy')
	function viewerDragDropMixin(viewer : Viewer, options? : viewerDragDropMixinOptions) : void;
	export = viewerDragDropMixin

}
declare module 'cesium/Widgets/Viewer/viewerPerformanceWatchdogMixin' {
	import Viewer = require('cesium/Widgets/Viewer/Viewer')
	function viewerPerformanceWatchdogMixin(viewer : Viewer) : void;
	export = viewerPerformanceWatchdogMixin

}
declare module 'cesium/Workers/createTaskProcessorWorker' {
	function createTaskProcessorWorker(workerFunction : any) : createTaskProcessorWorker~TaskProcessorWorkerFunction;
	export = createTaskProcessorWorker

}
declare module 'cesium/Cesium' {
	export import Promise = require('cesium/Promise')
	export import when = require('cesium/when')
	export import ArcGisImageServerTerrainProvider = require('cesium/Core/ArcGisImageServerTerrainProvider')
	export import AssociativeArray = require('cesium/Core/AssociativeArray')
	export import AxisAlignedBoundingBox = require('cesium/Core/AxisAlignedBoundingBox')
	export import BingMapsApi = require('cesium/Core/BingMapsApi')
	export import BoundingRectangle = require('cesium/Core/BoundingRectangle')
	export import BoundingSphere = require('cesium/Core/BoundingSphere')
	export import BoxGeometry = require('cesium/Core/BoxGeometry')
	export import BoxOutlineGeometry = require('cesium/Core/BoxOutlineGeometry')
	export import Cartesian2 = require('cesium/Core/Cartesian2')
	export import Cartesian3 = require('cesium/Core/Cartesian3')
	export import Cartesian4 = require('cesium/Core/Cartesian4')
	export import Cartographic = require('cesium/Core/Cartographic')
	export import CatmullRomSpline = require('cesium/Core/CatmullRomSpline')
	export import CesiumTerrainProvider = require('cesium/Core/CesiumTerrainProvider')
	export import CircleGeometry = require('cesium/Core/CircleGeometry')
	export import CircleOutlineGeometry = require('cesium/Core/CircleOutlineGeometry')
	export import Clock = require('cesium/Core/Clock')
	export import ClockRange = require('cesium/Core/ClockRange')
	export import ClockStep = require('cesium/Core/ClockStep')
	export import Color = require('cesium/Core/Color')
	export import ColorGeometryInstanceAttribute = require('cesium/Core/ColorGeometryInstanceAttribute')
	export import ComponentDatatype = require('cesium/Core/ComponentDatatype')
	export import CornerType = require('cesium/Core/CornerType')
	export import CorridorGeometry = require('cesium/Core/CorridorGeometry')
	export import CorridorOutlineGeometry = require('cesium/Core/CorridorOutlineGeometry')
	export import Credit = require('cesium/Core/Credit')
	export import CubicRealPolynomial = require('cesium/Core/CubicRealPolynomial')
	export import CylinderGeometry = require('cesium/Core/CylinderGeometry')
	export import CylinderOutlineGeometry = require('cesium/Core/CylinderOutlineGeometry')
	export import DefaultProxy = require('cesium/Core/DefaultProxy')
	export import DeveloperError = require('cesium/Core/DeveloperError')
	export import EasingFunction = require('cesium/Core/EasingFunction')
	export import EllipseGeometry = require('cesium/Core/EllipseGeometry')
	export import EllipseOutlineGeometry = require('cesium/Core/EllipseOutlineGeometry')
	export import Ellipsoid = require('cesium/Core/Ellipsoid')
	export import EllipsoidGeodesic = require('cesium/Core/EllipsoidGeodesic')
	export import EllipsoidGeometry = require('cesium/Core/EllipsoidGeometry')
	export import EllipsoidOutlineGeometry = require('cesium/Core/EllipsoidOutlineGeometry')
	export import EllipsoidTangentPlane = require('cesium/Core/EllipsoidTangentPlane')
	export import EllipsoidTerrainProvider = require('cesium/Core/EllipsoidTerrainProvider')
	export import Event = require('cesium/Core/Event')
	export import EventHelper = require('cesium/Core/EventHelper')
	export import ExtrapolationType = require('cesium/Core/ExtrapolationType')
	export import FeatureDetection = require('cesium/Core/FeatureDetection')
	export import Fullscreen = require('cesium/Core/Fullscreen')
	export import GeographicProjection = require('cesium/Core/GeographicProjection')
	export import GeographicTilingScheme = require('cesium/Core/GeographicTilingScheme')
	export import Geometry = require('cesium/Core/Geometry')
	export import GeometryAttribute = require('cesium/Core/GeometryAttribute')
	export import GeometryAttributes = require('cesium/Core/GeometryAttributes')
	export import GeometryInstance = require('cesium/Core/GeometryInstance')
	export import GeometryInstanceAttribute = require('cesium/Core/GeometryInstanceAttribute')
	export import GeometryPipeline = require('cesium/Core/GeometryPipeline')
	export import GregorianDate = require('cesium/Core/GregorianDate')
	export import HeadingPitchRange = require('cesium/Core/HeadingPitchRange')
	export import HeightmapTerrainData = require('cesium/Core/HeightmapTerrainData')
	export import HermitePolynomialApproximation = require('cesium/Core/HermitePolynomialApproximation')
	export import HermiteSpline = require('cesium/Core/HermiteSpline')
	export import IndexDatatype = require('cesium/Core/IndexDatatype')
	export import InterpolationAlgorithm = require('cesium/Core/InterpolationAlgorithm')
	export import Intersect = require('cesium/Core/Intersect')
	export import IntersectionTests = require('cesium/Core/IntersectionTests')
	export import Intersections2D = require('cesium/Core/Intersections2D')
	export import Interval = require('cesium/Core/Interval')
	export import Iso8601 = require('cesium/Core/Iso8601')
	export import JulianDate = require('cesium/Core/JulianDate')
	export import KeyboardEventModifier = require('cesium/Core/KeyboardEventModifier')
	export import LagrangePolynomialApproximation = require('cesium/Core/LagrangePolynomialApproximation')
	export import LeapSecond = require('cesium/Core/LeapSecond')
	export import LinearApproximation = require('cesium/Core/LinearApproximation')
	export import LinearSpline = require('cesium/Core/LinearSpline')
	export import MapProjection = require('cesium/Core/MapProjection')
	export import Math = require('cesium/Core/Math')
	export import Matrix2 = require('cesium/Core/Matrix2')
	export import Matrix3 = require('cesium/Core/Matrix3')
	export import Matrix4 = require('cesium/Core/Matrix4')
	export import NearFarScalar = require('cesium/Core/NearFarScalar')
	export import Occluder = require('cesium/Core/Occluder')
	export import OrientedBoundingBox = require('cesium/Core/OrientedBoundingBox')
	export import Packable = require('cesium/Core/Packable')
	export import PackableForInterpolation = require('cesium/Core/PackableForInterpolation')
	export import PinBuilder = require('cesium/Core/PinBuilder')
	export import PixelFormat = require('cesium/Core/PixelFormat')
	export import Plane = require('cesium/Core/Plane')
	export import PolygonGeometry = require('cesium/Core/PolygonGeometry')
	export import PolygonHierarchy = require('cesium/Core/PolygonHierarchy')
	export import PolygonOutlineGeometry = require('cesium/Core/PolygonOutlineGeometry')
	export import PolylineGeometry = require('cesium/Core/PolylineGeometry')
	export import PolylineVolumeGeometry = require('cesium/Core/PolylineVolumeGeometry')
	export import PolylineVolumeOutlineGeometry = require('cesium/Core/PolylineVolumeOutlineGeometry')
	export import PrimitiveType = require('cesium/Core/PrimitiveType')
	export import QuadraticRealPolynomial = require('cesium/Core/QuadraticRealPolynomial')
	export import QuantizedMeshTerrainData = require('cesium/Core/QuantizedMeshTerrainData')
	export import QuarticRealPolynomial = require('cesium/Core/QuarticRealPolynomial')
	export import Quaternion = require('cesium/Core/Quaternion')
	export import QuaternionSpline = require('cesium/Core/QuaternionSpline')
	export import Queue = require('cesium/Core/Queue')
	export import Ray = require('cesium/Core/Ray')
	export import Rectangle = require('cesium/Core/Rectangle')
	export import RectangleGeometry = require('cesium/Core/RectangleGeometry')
	export import RectangleOutlineGeometry = require('cesium/Core/RectangleOutlineGeometry')
	export import ReferenceFrame = require('cesium/Core/ReferenceFrame')
	export import RequestErrorEvent = require('cesium/Core/RequestErrorEvent')
	export import RuntimeError = require('cesium/Core/RuntimeError')
	export import ScreenSpaceEventHandler = require('cesium/Core/ScreenSpaceEventHandler')
	export import ScreenSpaceEventType = require('cesium/Core/ScreenSpaceEventType')
	export import ShowGeometryInstanceAttribute = require('cesium/Core/ShowGeometryInstanceAttribute')
	export import Simon1994PlanetaryPositions = require('cesium/Core/Simon1994PlanetaryPositions')
	export import SimplePolylineGeometry = require('cesium/Core/SimplePolylineGeometry')
	export import SphereGeometry = require('cesium/Core/SphereGeometry')
	export import SphereOutlineGeometry = require('cesium/Core/SphereOutlineGeometry')
	export import Spherical = require('cesium/Core/Spherical')
	export import Spline = require('cesium/Core/Spline')
	export import TaskProcessor = require('cesium/Core/TaskProcessor')
	export import TerrainData = require('cesium/Core/TerrainData')
	export import TerrainProvider = require('cesium/Core/TerrainProvider')
	export import TileProviderError = require('cesium/Core/TileProviderError')
	export import TilingScheme = require('cesium/Core/TilingScheme')
	export import TimeInterval = require('cesium/Core/TimeInterval')
	export import TimeIntervalCollection = require('cesium/Core/TimeIntervalCollection')
	export import TimeStandard = require('cesium/Core/TimeStandard')
	export import Transforms = require('cesium/Core/Transforms')
	export import TranslationRotationScale = require('cesium/Core/TranslationRotationScale')
	export import TridiagonalSystemSolver = require('cesium/Core/TridiagonalSystemSolver')
	export import VRTheWorldTerrainProvider = require('cesium/Core/VRTheWorldTerrainProvider')
	export import VertexFormat = require('cesium/Core/VertexFormat')
	export import VideoSynchronizer = require('cesium/Core/VideoSynchronizer')
	export import Visibility = require('cesium/Core/Visibility')
	export import WallGeometry = require('cesium/Core/WallGeometry')
	export import WallOutlineGeometry = require('cesium/Core/WallOutlineGeometry')
	export import WebMercatorProjection = require('cesium/Core/WebMercatorProjection')
	export import WebMercatorTilingScheme = require('cesium/Core/WebMercatorTilingScheme')
	export import WindingOrder = require('cesium/Core/WindingOrder')
	export import barycentricCoordinates = require('cesium/Core/barycentricCoordinates')
	export import binarySearch = require('cesium/Core/binarySearch')
	export import cancelAnimationFrame = require('cesium/Core/cancelAnimationFrame')
	export import clone = require('cesium/Core/clone')
	export import combine = require('cesium/Core/combine')
	export import createGuid = require('cesium/Core/createGuid')
	export import defaultValue = require('cesium/Core/defaultValue')
	export import defined = require('cesium/Core/defined')
	export import destroyObject = require('cesium/Core/destroyObject')
	export import formatError = require('cesium/Core/formatError')
	export import getAbsoluteUri = require('cesium/Core/getAbsoluteUri')
	export import getBaseUri = require('cesium/Core/getBaseUri')
	export import getExtensionFromUri = require('cesium/Core/getExtensionFromUri')
	export import getFilenameFromUri = require('cesium/Core/getFilenameFromUri')
	export import getImagePixels = require('cesium/Core/getImagePixels')
	export import getTimestamp = require('cesium/Core/getTimestamp')
	export import isArray = require('cesium/Core/isArray')
	export import isLeapYear = require('cesium/Core/isLeapYear')
	export import loadArrayBuffer = require('cesium/Core/loadArrayBuffer')
	export import loadBlob = require('cesium/Core/loadBlob')
	export import loadImage = require('cesium/Core/loadImage')
	export import loadImageViaBlob = require('cesium/Core/loadImageViaBlob')
	export import loadJson = require('cesium/Core/loadJson')
	export import loadJsonp = require('cesium/Core/loadJsonp')
	export import loadText = require('cesium/Core/loadText')
	export import loadWithXhr = require('cesium/Core/loadWithXhr')
	export import loadXML = require('cesium/Core/loadXML')
	export import mergeSort = require('cesium/Core/mergeSort')
	export import objectToQuery = require('cesium/Core/objectToQuery')
	export import pointInsideTriangle = require('cesium/Core/pointInsideTriangle')
	export import queryToObject = require('cesium/Core/queryToObject')
	export import requestAnimationFrame = require('cesium/Core/requestAnimationFrame')
	export import sampleTerrain = require('cesium/Core/sampleTerrain')
	export import subdivideArray = require('cesium/Core/subdivideArray')
	export import throttleRequestByServer = require('cesium/Core/throttleRequestByServer')
	export import BillboardGraphics = require('cesium/DataSources/BillboardGraphics')
	export import BillboardVisualizer = require('cesium/DataSources/BillboardVisualizer')
	export import BoxGeometryUpdater = require('cesium/DataSources/BoxGeometryUpdater')
	export import BoxGraphics = require('cesium/DataSources/BoxGraphics')
	export import CallbackProperty = require('cesium/DataSources/CallbackProperty')
	export import CheckerboardMaterialProperty = require('cesium/DataSources/CheckerboardMaterialProperty')
	export import ColorMaterialProperty = require('cesium/DataSources/ColorMaterialProperty')
	export import CompositeEntityCollection = require('cesium/DataSources/CompositeEntityCollection')
	export import CompositeMaterialProperty = require('cesium/DataSources/CompositeMaterialProperty')
	export import CompositePositionProperty = require('cesium/DataSources/CompositePositionProperty')
	export import CompositeProperty = require('cesium/DataSources/CompositeProperty')
	export import ConstantPositionProperty = require('cesium/DataSources/ConstantPositionProperty')
	export import ConstantProperty = require('cesium/DataSources/ConstantProperty')
	export import CorridorGeometryUpdater = require('cesium/DataSources/CorridorGeometryUpdater')
	export import CorridorGraphics = require('cesium/DataSources/CorridorGraphics')
	export import CustomDataSource = require('cesium/DataSources/CustomDataSource')
	export import CylinderGeometryUpdater = require('cesium/DataSources/CylinderGeometryUpdater')
	export import CylinderGraphics = require('cesium/DataSources/CylinderGraphics')
	export import CzmlDataSource = require('cesium/DataSources/CzmlDataSource')
	export import DataSource = require('cesium/DataSources/DataSource')
	export import DataSourceClock = require('cesium/DataSources/DataSourceClock')
	export import DataSourceCollection = require('cesium/DataSources/DataSourceCollection')
	export import DataSourceDisplay = require('cesium/DataSources/DataSourceDisplay')
	export import DynamicGeometryUpdater = require('cesium/DataSources/DynamicGeometryUpdater')
	export import EllipseGeometryUpdater = require('cesium/DataSources/EllipseGeometryUpdater')
	export import EllipseGraphics = require('cesium/DataSources/EllipseGraphics')
	export import EllipsoidGeometryUpdater = require('cesium/DataSources/EllipsoidGeometryUpdater')
	export import EllipsoidGraphics = require('cesium/DataSources/EllipsoidGraphics')
	export import Entity = require('cesium/DataSources/Entity')
	export import EntityCollection = require('cesium/DataSources/EntityCollection')
	export import EntityView = require('cesium/DataSources/EntityView')
	export import GeoJsonDataSource = require('cesium/DataSources/GeoJsonDataSource')
	export import GeometryUpdater = require('cesium/DataSources/GeometryUpdater')
	export import GeometryVisualizer = require('cesium/DataSources/GeometryVisualizer')
	export import GridMaterialProperty = require('cesium/DataSources/GridMaterialProperty')
	export import ImageMaterialProperty = require('cesium/DataSources/ImageMaterialProperty')
	export import KmlDataSource = require('cesium/DataSources/KmlDataSource')
	export import KmlFeatureData = require('cesium/DataSources/KmlFeatureData')
	export import LabelGraphics = require('cesium/DataSources/LabelGraphics')
	export import LabelVisualizer = require('cesium/DataSources/LabelVisualizer')
	export import MaterialProperty = require('cesium/DataSources/MaterialProperty')
	export import ModelGraphics = require('cesium/DataSources/ModelGraphics')
	export import ModelVisualizer = require('cesium/DataSources/ModelVisualizer')
	export import NodeTransformationProperty = require('cesium/DataSources/NodeTransformationProperty')
	export import PathGraphics = require('cesium/DataSources/PathGraphics')
	export import PathVisualizer = require('cesium/DataSources/PathVisualizer')
	export import PointGraphics = require('cesium/DataSources/PointGraphics')
	export import PointVisualizer = require('cesium/DataSources/PointVisualizer')
	export import PolygonGeometryUpdater = require('cesium/DataSources/PolygonGeometryUpdater')
	export import PolygonGraphics = require('cesium/DataSources/PolygonGraphics')
	export import PolylineArrowMaterialProperty = require('cesium/DataSources/PolylineArrowMaterialProperty')
	export import PolylineGeometryUpdater = require('cesium/DataSources/PolylineGeometryUpdater')
	export import PolylineGlowMaterialProperty = require('cesium/DataSources/PolylineGlowMaterialProperty')
	export import PolylineGraphics = require('cesium/DataSources/PolylineGraphics')
	export import PolylineOutlineMaterialProperty = require('cesium/DataSources/PolylineOutlineMaterialProperty')
	export import PolylineVolumeGeometryUpdater = require('cesium/DataSources/PolylineVolumeGeometryUpdater')
	export import PolylineVolumeGraphics = require('cesium/DataSources/PolylineVolumeGraphics')
	export import PositionProperty = require('cesium/DataSources/PositionProperty')
	export import PositionPropertyArray = require('cesium/DataSources/PositionPropertyArray')
	export import Property = require('cesium/DataSources/Property')
	export import PropertyArray = require('cesium/DataSources/PropertyArray')
	export import PropertyBag = require('cesium/DataSources/PropertyBag')
	export import RectangleGeometryUpdater = require('cesium/DataSources/RectangleGeometryUpdater')
	export import RectangleGraphics = require('cesium/DataSources/RectangleGraphics')
	export import ReferenceProperty = require('cesium/DataSources/ReferenceProperty')
	export import Rotation = require('cesium/DataSources/Rotation')
	export import SampledPositionProperty = require('cesium/DataSources/SampledPositionProperty')
	export import SampledProperty = require('cesium/DataSources/SampledProperty')
	export import StripeMaterialProperty = require('cesium/DataSources/StripeMaterialProperty')
	export import StripeOrientation = require('cesium/DataSources/StripeOrientation')
	export import TimeIntervalCollectionPositionProperty = require('cesium/DataSources/TimeIntervalCollectionPositionProperty')
	export import TimeIntervalCollectionProperty = require('cesium/DataSources/TimeIntervalCollectionProperty')
	export import VelocityOrientationProperty = require('cesium/DataSources/VelocityOrientationProperty')
	export import VelocityVectorProperty = require('cesium/DataSources/VelocityVectorProperty')
	export import Visualizer = require('cesium/DataSources/Visualizer')
	export import WallGeometryUpdater = require('cesium/DataSources/WallGeometryUpdater')
	export import WallGraphics = require('cesium/DataSources/WallGraphics')
	export import Appearance = require('cesium/Scene/Appearance')
	export import ArcGisMapServerImageryProvider = require('cesium/Scene/ArcGisMapServerImageryProvider')
	export import Billboard = require('cesium/Scene/Billboard')
	export import BillboardCollection = require('cesium/Scene/BillboardCollection')
	export import BingMapsImageryProvider = require('cesium/Scene/BingMapsImageryProvider')
	export import BingMapsStyle = require('cesium/Scene/BingMapsStyle')
	export import BlendEquation = require('cesium/Scene/BlendEquation')
	export import BlendFunction = require('cesium/Scene/BlendFunction')
	export import BlendingState = require('cesium/Scene/BlendingState')
	export import Camera = require('cesium/Scene/Camera')
	export import CameraEventAggregator = require('cesium/Scene/CameraEventAggregator')
	export import CameraEventType = require('cesium/Scene/CameraEventType')
	export import CreditDisplay = require('cesium/Scene/CreditDisplay')
	export import CullFace = require('cesium/Scene/CullFace')
	export import CullingVolume = require('cesium/Scene/CullingVolume')
	export import DebugAppearance = require('cesium/Scene/DebugAppearance')
	export import DebugModelMatrixPrimitive = require('cesium/Scene/DebugModelMatrixPrimitive')
	export import DepthFunction = require('cesium/Scene/DepthFunction')
	export import DiscardMissingTileImagePolicy = require('cesium/Scene/DiscardMissingTileImagePolicy')
	export import EllipsoidSurfaceAppearance = require('cesium/Scene/EllipsoidSurfaceAppearance')
	export import Fog = require('cesium/Scene/Fog')
	export import FrameRateMonitor = require('cesium/Scene/FrameRateMonitor')
	export import GetFeatureInfoFormat = require('cesium/Scene/GetFeatureInfoFormat')
	export import Globe = require('cesium/Scene/Globe')
	export import GoogleEarthImageryProvider = require('cesium/Scene/GoogleEarthImageryProvider')
	export import GridImageryProvider = require('cesium/Scene/GridImageryProvider')
	export import GroundPrimitive = require('cesium/Scene/GroundPrimitive')
	export import HeightReference = require('cesium/Scene/HeightReference')
	export import HorizontalOrigin = require('cesium/Scene/HorizontalOrigin')
	export import ImageryLayer = require('cesium/Scene/ImageryLayer')
	export import ImageryLayerCollection = require('cesium/Scene/ImageryLayerCollection')
	export import ImageryLayerFeatureInfo = require('cesium/Scene/ImageryLayerFeatureInfo')
	export import ImageryProvider = require('cesium/Scene/ImageryProvider')
	export import Label = require('cesium/Scene/Label')
	export import LabelCollection = require('cesium/Scene/LabelCollection')
	export import LabelStyle = require('cesium/Scene/LabelStyle')
	export import MapMode2D = require('cesium/Scene/MapMode2D')
	export import MapboxImageryProvider = require('cesium/Scene/MapboxImageryProvider')
	export import Material = require('cesium/Scene/Material')
	export import MaterialAppearance = require('cesium/Scene/MaterialAppearance')
	export import Model = require('cesium/Scene/Model')
	export import ModelAnimation = require('cesium/Scene/ModelAnimation')
	export import ModelAnimationCollection = require('cesium/Scene/ModelAnimationCollection')
	export import ModelAnimationLoop = require('cesium/Scene/ModelAnimationLoop')
	export import ModelMaterial = require('cesium/Scene/ModelMaterial')
	export import ModelMesh = require('cesium/Scene/ModelMesh')
	export import ModelNode = require('cesium/Scene/ModelNode')
	export import Moon = require('cesium/Scene/Moon')
	export import NeverTileDiscardPolicy = require('cesium/Scene/NeverTileDiscardPolicy')
	export import OrthographicFrustum = require('cesium/Scene/OrthographicFrustum')
	export import PerInstanceColorAppearance = require('cesium/Scene/PerInstanceColorAppearance')
	export import PerspectiveFrustum = require('cesium/Scene/PerspectiveFrustum')
	export import PerspectiveOffCenterFrustum = require('cesium/Scene/PerspectiveOffCenterFrustum')
	export import PointPrimitive = require('cesium/Scene/PointPrimitive')
	export import PointPrimitiveCollection = require('cesium/Scene/PointPrimitiveCollection')
	export import Polyline = require('cesium/Scene/Polyline')
	export import PolylineCollection = require('cesium/Scene/PolylineCollection')
	export import PolylineColorAppearance = require('cesium/Scene/PolylineColorAppearance')
	export import PolylineMaterialAppearance = require('cesium/Scene/PolylineMaterialAppearance')
	export import Primitive = require('cesium/Scene/Primitive')
	export import PrimitiveCollection = require('cesium/Scene/PrimitiveCollection')
	export import Scene = require('cesium/Scene/Scene')
	export import SceneMode = require('cesium/Scene/SceneMode')
	export import SceneTransforms = require('cesium/Scene/SceneTransforms')
	export import ScreenSpaceCameraController = require('cesium/Scene/ScreenSpaceCameraController')
	export import ShadowMap = require('cesium/Scene/ShadowMap')
	export import ShadowMode = require('cesium/Scene/ShadowMode')
	export import SingleTileImageryProvider = require('cesium/Scene/SingleTileImageryProvider')
	export import SkyAtmosphere = require('cesium/Scene/SkyAtmosphere')
	export import SkyBox = require('cesium/Scene/SkyBox')
	export import StencilFunction = require('cesium/Scene/StencilFunction')
	export import StencilOperation = require('cesium/Scene/StencilOperation')
	export import Sun = require('cesium/Scene/Sun')
	export import TileCoordinatesImageryProvider = require('cesium/Scene/TileCoordinatesImageryProvider')
	export import TileDiscardPolicy = require('cesium/Scene/TileDiscardPolicy')
	export import UrlTemplateImageryProvider = require('cesium/Scene/UrlTemplateImageryProvider')
	export import VerticalOrigin = require('cesium/Scene/VerticalOrigin')
	export import ViewportQuad = require('cesium/Scene/ViewportQuad')
	export import WebMapServiceImageryProvider = require('cesium/Scene/WebMapServiceImageryProvider')
	export import WebMapTileServiceImageryProvider = require('cesium/Scene/WebMapTileServiceImageryProvider')
	export import createOpenStreetMapImageryProvider = require('cesium/Scene/createOpenStreetMapImageryProvider')
	export import createTangentSpaceDebugPrimitive = require('cesium/Scene/createTangentSpaceDebugPrimitive')
	export import createTileMapServiceImageryProvider = require('cesium/Scene/createTileMapServiceImageryProvider')
	export import ClockViewModel = require('cesium/Widgets/ClockViewModel')
	export import Command = require('cesium/Widgets/Command')
	export import SvgPathBindingHandler = require('cesium/Widgets/SvgPathBindingHandler')
	export import ToggleButtonViewModel = require('cesium/Widgets/ToggleButtonViewModel')
	export import createCommand = require('cesium/Widgets/createCommand')
	export import Animation = require('cesium/Widgets/Animation/Animation')
	export import AnimationViewModel = require('cesium/Widgets/Animation/AnimationViewModel')
	export import BaseLayerPicker = require('cesium/Widgets/BaseLayerPicker/BaseLayerPicker')
	export import BaseLayerPickerViewModel = require('cesium/Widgets/BaseLayerPicker/BaseLayerPickerViewModel')
	export import ProviderViewModel = require('cesium/Widgets/BaseLayerPicker/ProviderViewModel')
	export import CesiumInspector = require('cesium/Widgets/CesiumInspector/CesiumInspector')
	export import CesiumInspectorViewModel = require('cesium/Widgets/CesiumInspector/CesiumInspectorViewModel')
	export import CesiumWidget = require('cesium/Widgets/CesiumWidget/CesiumWidget')
	export import FullscreenButton = require('cesium/Widgets/FullscreenButton/FullscreenButton')
	export import FullscreenButtonViewModel = require('cesium/Widgets/FullscreenButton/FullscreenButtonViewModel')
	export import Geocoder = require('cesium/Widgets/Geocoder/Geocoder')
	export import GeocoderViewModel = require('cesium/Widgets/Geocoder/GeocoderViewModel')
	export import HomeButton = require('cesium/Widgets/HomeButton/HomeButton')
	export import HomeButtonViewModel = require('cesium/Widgets/HomeButton/HomeButtonViewModel')
	export import InfoBox = require('cesium/Widgets/InfoBox/InfoBox')
	export import InfoBoxViewModel = require('cesium/Widgets/InfoBox/InfoBoxViewModel')
	export import NavigationHelpButton = require('cesium/Widgets/NavigationHelpButton/NavigationHelpButton')
	export import NavigationHelpButtonViewModel = require('cesium/Widgets/NavigationHelpButton/NavigationHelpButtonViewModel')
	export import PerformanceWatchdog = require('cesium/Widgets/PerformanceWatchdog/PerformanceWatchdog')
	export import PerformanceWatchdogViewModel = require('cesium/Widgets/PerformanceWatchdog/PerformanceWatchdogViewModel')
	export import SceneModePicker = require('cesium/Widgets/SceneModePicker/SceneModePicker')
	export import SceneModePickerViewModel = require('cesium/Widgets/SceneModePicker/SceneModePickerViewModel')
	export import SelectionIndicator = require('cesium/Widgets/SelectionIndicator/SelectionIndicator')
	export import SelectionIndicatorViewModel = require('cesium/Widgets/SelectionIndicator/SelectionIndicatorViewModel')
	export import Timeline = require('cesium/Widgets/Timeline/Timeline')
	export import VRButton = require('cesium/Widgets/VRButton/VRButton')
	export import VRButtonViewModel = require('cesium/Widgets/VRButton/VRButtonViewModel')
	export import Viewer = require('cesium/Widgets/Viewer/Viewer')
	export import viewerCesiumInspectorMixin = require('cesium/Widgets/Viewer/viewerCesiumInspectorMixin')
	export import viewerDragDropMixin = require('cesium/Widgets/Viewer/viewerDragDropMixin')
	export import viewerPerformanceWatchdogMixin = require('cesium/Widgets/Viewer/viewerPerformanceWatchdogMixin')
	export import createTaskProcessorWorker = require('cesium/Workers/createTaskProcessorWorker')

}
declare module 'cesium' {
	}
