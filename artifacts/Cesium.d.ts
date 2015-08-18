declare module "Cesium" {
module Cesium {
export class Animation 
{
	constructor(container : Element|string, viewModel : Cesium.AnimationViewModel);
	//Members
	container: Element
	viewModel: Cesium.AnimationViewModel

	//Methods
	applyThemeChanges() : void
	destroy() : void
	isDestroyed() : boolean
	resize() : void
}
export class AnimationViewModel 
{
	constructor(clockViewModel : Cesium.ClockViewModel);
	//Members
	static defaultDateFormatter: any
	static defaultTicks: any
	static defaultTimeFormatter: any
	clockViewModel: Cesium.ClockViewModel
	dateFormatter: any
	dateLabel: string
	faster: Cesium.Command
	multiplierLabel: string
	pauseViewModel: Cesium.ToggleButtonViewModel
	playForwardViewModel: Cesium.ToggleButtonViewModel
	playRealtimeViewModel: Cesium.ToggleButtonViewModel
	playReverseViewModel: Cesium.ToggleButtonViewModel
	shuttleRingAngle: number
	shuttleRingDragging: boolean
	slower: Cesium.Command
	snapToTicks: boolean
	timeFormatter: any
	timeLabel: string

	//Methods
	getShuttleRingTicks() : void
	setShuttleRingTicks(positiveTicks : Array<number>) : void
}
export class BaseLayerPicker 
{
	constructor(container : Element, options? : Cesium.opt_B8D03D985A09AF859D62809B0CE4ABF7);
	//Members
	container: Element
	viewModel: Cesium.BaseLayerPickerViewModel

	//Methods
	destroy() : void
	isDestroyed() : boolean
}
export class BaseLayerPickerViewModel 
{
	constructor(options? : Cesium.opt_B8D03D985A09AF859D62809B0CE4ABF7);
	//Members
	buttonImageUrl: string
	buttonTooltip: string
	dropDownVisible: boolean
	globe: Cesium.Globe
	imageryProviderViewModels: Cesium.ProviderViewModel
	selectedImagery: Cesium.ProviderViewModel
	selectedTerrain: Cesium.ProviderViewModel
	terrainProviderViewModels: Cesium.ProviderViewModel
	toggleDropDown: Cesium.Command

	//Methods
}
export class BillboardGraphics 
{
	constructor(options? : Cesium.opt_C6B7855FB535816AD88063AEAE1FBE4F);
	//Members
	alignedAxis: Cesium.Property
	color: Cesium.Property
	definitionChanged: Cesium.Event
	eyeOffset: Cesium.Property
	height: Cesium.Property
	horizontalOrigin: Cesium.Property
	image: Cesium.Property
	imageSubRegion: Cesium.Property
	pixelOffset: Cesium.Property
	pixelOffsetScaleByDistance: Cesium.Property
	rotation: Cesium.Property
	scale: Cesium.Property
	scaleByDistance: Cesium.Property
	show: Cesium.Property
	translucencyByDistance: Cesium.Property
	verticalOrigin: Cesium.Property
	width: Cesium.Property

	//Methods
	clone(result? : Cesium.BillboardGraphics) : Cesium.BillboardGraphics
	merge(source : Cesium.BillboardGraphics) : void
}
  export module BingMapsApi {
  var defaultKey;
}
export class BoundingSphere 
{
	constructor(center? : Cesium.Cartesian3, radius? : number);
	//Members
	static packedLength: number
	center: Cesium.Cartesian3
	radius: number

	//Methods
	static clone(sphere : Cesium.BoundingSphere, result? : Cesium.BoundingSphere) : Cesium.BoundingSphere
	static computePlaneDistances(sphere : Cesium.BoundingSphere, position : Cesium.Cartesian3, direction : Cesium.Cartesian3, result? : Cesium.Cartesian2) : Cesium.Interval
	static distanceSquaredTo(sphere : Cesium.BoundingSphere, cartesian : Cesium.Cartesian3) : number
	static equals(left? : Cesium.BoundingSphere, right? : Cesium.BoundingSphere) : boolean
	static expand(sphere : Cesium.BoundingSphere, point : Cesium.Cartesian3, result? : Cesium.BoundingSphere) : Cesium.BoundingSphere
	static fromBoundingSpheres(boundingSpheres : Cesium.BoundingSphere, result? : Cesium.BoundingSphere) : Cesium.BoundingSphere
	static fromCornerPoints(corner? : number, oppositeCorner? : number, result? : Cesium.BoundingSphere) : Cesium.BoundingSphere
	static fromEllipsoid(ellipsoid : Cesium.Ellipsoid, result? : Cesium.BoundingSphere) : Cesium.BoundingSphere
	static fromPoints(positions : Cesium.Cartesian3, result? : Cesium.BoundingSphere) : Cesium.BoundingSphere
	static fromRectangle2D(rectangle : Cesium.Rectangle, projection? : any, result? : Cesium.BoundingSphere) : Cesium.BoundingSphere
	static fromRectangle3D(rectangle : Cesium.Rectangle, ellipsoid? : Cesium.Ellipsoid, surfaceHeight? : number, result? : Cesium.BoundingSphere) : Cesium.BoundingSphere
	static fromRectangleWithHeights2D(rectangle : Cesium.Rectangle, projection? : any, minimumHeight? : number, maximumHeight? : number, result? : Cesium.BoundingSphere) : Cesium.BoundingSphere
	static fromVertices(positions : Cesium.Cartesian3, center? : Cesium.Cartesian3, stride? : number, result? : Cesium.BoundingSphere) : Cesium.BoundingSphere
	static intersect(sphere : Cesium.BoundingSphere, plane : Cesium.Cartesian4) : Cesium.Intersect
	static intersectPlane(sphere : Cesium.BoundingSphere, plane : Cesium.Plane) : Cesium.Intersect
	static pack(value : Cesium.BoundingSphere, array : Array<number>, startingIndex? : number) : void
	static projectTo2D(sphere : Cesium.BoundingSphere, projection? : any, result? : Cesium.BoundingSphere) : Cesium.BoundingSphere
	static transform(sphere : Cesium.BoundingSphere, transform : Cesium.Matrix4, result? : Cesium.BoundingSphere) : Cesium.BoundingSphere
	static transformWithoutScale(sphere : Cesium.BoundingSphere, transform : Cesium.Matrix4, result? : Cesium.BoundingSphere) : Cesium.BoundingSphere
	static union(left : Cesium.BoundingSphere, right : Cesium.BoundingSphere, result? : Cesium.BoundingSphere) : Cesium.BoundingSphere
	static unpack(array : Array<number>, startingIndex? : number, result? : Cesium.BoundingSphere) : void
	clone(result? : Cesium.BoundingSphere) : Cesium.BoundingSphere
	equals(right? : Cesium.BoundingSphere) : boolean
	intersect(plane : Cesium.Cartesian4) : Cesium.Intersect
	intersectPlane(plane : Cesium.Plane) : Cesium.Intersect
}
export class BoxGraphics 
{
	constructor(options? : Cesium.opt_AA5894D1007D32CB5133712D28869EBC);
	//Members
	definitionChanged: Cesium.Event
	dimensions: Cesium.Property
	fill: Cesium.Property
	material: Cesium.MaterialProperty
	outline: Cesium.Property
	outlineColor: Cesium.Property
	outlineWidth: Cesium.Property
	show: Cesium.Property

	//Methods
	clone(result? : Cesium.BoxGraphics) : Cesium.BoxGraphics
	merge(source : Cesium.BoxGraphics) : void
}
export class Camera 
{
	constructor();
	//Members
	static DEFAULT_VIEW_FACTOR: number
	static DEFAULT_VIEW_RECTANGLE: Cesium.Rectangle
	constrainedAxis: Cesium.Cartesian3
	defaultLookAmount: number
	defaultMoveAmount: number
	defaultRotateAmount: number
	defaultZoomAmount: number
	direction: Cesium.Cartesian3
	directionWC: Cesium.Cartesian3
	frustum: Cesium.PerspectiveFrustum
	heading: number
	inverseTransform: Cesium.Matrix4
	inverseViewMatrix: Cesium.Matrix4
	maximumTranslateFactor: number
	maximumZoomFactor: number
	moveEnd: Cesium.Event
	moveStart: Cesium.Event
	pitch: number
	position: Cesium.Cartesian3
	positionCartographic: Cesium.Cartographic
	positionWC: Cesium.Cartesian3
	right: Cesium.Cartesian3
	rightWC: Cesium.Cartesian3
	roll: number
	transform: Cesium.Matrix4
	up: Cesium.Cartesian3
	upWC: Cesium.Cartesian3
	viewMatrix: Cesium.Matrix4

	//Methods
	cameraToWorldCoordinates(cartesian : Cesium.Cartesian4, result? : Cesium.Cartesian4) : Cesium.Cartesian4
	cameraToWorldCoordinatesPoint(cartesian : Cesium.Cartesian3, result? : Cesium.Cartesian3) : Cesium.Cartesian3
	cameraToWorldCoordinatesVector(cartesian : Cesium.Cartesian3, result? : Cesium.Cartesian3) : Cesium.Cartesian3
	flyTo(options? : Cesium.opt_0B8B63B15718BE5CC931DB3EBF47E4A9) : void
	flyToBoundingSphere(boundingSphere : Cesium.BoundingSphere, options? : Cesium.opt_F9B28DCE03158A277CE9D5952DAE2590) : void
	getMagnitude() : number
	getPickRay(windowPosition : Cesium.Cartesian2, result? : Cesium.Ray) : Object
	getRectangleCameraCoordinates(rectangle : Cesium.Rectangle, result? : Cesium.Cartesian3) : Cesium.Cartesian3
	look(axis : Cesium.Cartesian3, angle? : number) : void
	lookAt(target : Cesium.Cartesian3, offset : Cesium.Cartesian3|Cesium.HeadingPitchRange) : void
	lookAtTransform(transform : Cesium.Matrix4, offset? : Cesium.Cartesian3|Cesium.HeadingPitchRange) : void
	lookDown(amount? : number) : void
	lookLeft(amount? : number) : void
	lookRight(amount? : number) : void
	lookUp(amount? : number) : void
	move(direction : Cesium.Cartesian3, amount? : number) : void
	moveBackward(amount? : number) : void
	moveDown(amount? : number) : void
	moveForward(amount? : number) : void
	moveLeft(amount? : number) : void
	moveRight(amount? : number) : void
	moveUp(amount? : number) : void
	pickEllipsoid(windowPosition : Cesium.Cartesian2, ellipsoid? : Cesium.Ellipsoid, result? : Cesium.Cartesian3) : Cesium.Cartesian3
	rotate(axis : Cesium.Cartesian3, angle? : number) : void
	rotateDown(angle? : number) : void
	rotateLeft(angle? : number) : void
	rotateRight(angle? : number) : void
	rotateUp(angle? : number) : void
	setView() : void
	twistLeft(amount? : number) : void
	twistRight(amount? : number) : void
	viewBoundingSphere(boundingSphere : Cesium.BoundingSphere, offset? : Cesium.HeadingPitchRange) : void
	viewRectangle(rectangle : Cesium.Rectangle, ellipsoid? : Cesium.Ellipsoid) : void
	worldToCameraCoordinates(cartesian : Cesium.Cartesian4, result? : Cesium.Cartesian4) : Cesium.Cartesian4
	worldToCameraCoordinatesPoint(cartesian : Cesium.Cartesian3, result? : Cesium.Cartesian3) : Cesium.Cartesian3
	worldToCameraCoordinatesVector(cartesian : Cesium.Cartesian3, result? : Cesium.Cartesian3) : Cesium.Cartesian3
	zoomIn(amount? : number) : void
	zoomOut(amount? : number) : void
}
export class CameraEventType 
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
export class Cartesian2 
{
	constructor(x? : number, y? : number);
	//Members
	x: number
	y: number
	static packedLength: number
	static UNIT_X: Cesium.Cartesian2
	static UNIT_Y: Cesium.Cartesian2
	static ZERO: Cesium.Cartesian2

	//Methods
	clone(result? : Cesium.Cartesian2) : Cesium.Cartesian2
	equals(right? : Cesium.Cartesian2) : boolean
	equalsEpsilon(right? : Cesium.Cartesian2, relativeEpsilon? : number, absoluteEpsilon? : number) : boolean
	toString() : string
	static abs(cartesian : Cesium.Cartesian2, result : Cesium.Cartesian2) : Cesium.Cartesian2
	static add(left : Cesium.Cartesian2, right : Cesium.Cartesian2, result : Cesium.Cartesian2) : Cesium.Cartesian2
	static angleBetween(left : Cesium.Cartesian2, right : Cesium.Cartesian2) : number
	static clone(cartesian : Cesium.Cartesian2, result? : Cesium.Cartesian2) : Cesium.Cartesian2
	static distance(left : Cesium.Cartesian2, right : Cesium.Cartesian2) : number
	static distanceSquared(left : Cesium.Cartesian2, right : Cesium.Cartesian2) : number
	static divideByScalar(cartesian : Cesium.Cartesian2, scalar : number, result : Cesium.Cartesian2) : Cesium.Cartesian2
	static dot(left : Cesium.Cartesian2, right : Cesium.Cartesian2) : number
	static equals(left? : Cesium.Cartesian2, right? : Cesium.Cartesian2) : boolean
	static equalsEpsilon(left? : Cesium.Cartesian2, right? : Cesium.Cartesian2, relativeEpsilon? : number, absoluteEpsilon? : number) : boolean
	static fromArray(array : Array<number>, startingIndex? : number, result? : Cesium.Cartesian2) : Cesium.Cartesian2
	static fromCartesian3(cartesian : Cesium.Cartesian3, result? : Cesium.Cartesian2) : Cesium.Cartesian2
	static fromCartesian4(cartesian : Cesium.Cartesian4, result? : Cesium.Cartesian2) : Cesium.Cartesian2
	static fromElements(x : number, y : number, result? : Cesium.Cartesian2) : Cesium.Cartesian2
	static lerp(start : Cesium.Cartesian2, end : Cesium.Cartesian2, t : number, result : Cesium.Cartesian2) : Cesium.Cartesian2
	static magnitude(cartesian : Cesium.Cartesian2) : number
	static magnitudeSquared(cartesian : Cesium.Cartesian2) : number
	static maximumByComponent(first : Cesium.Cartesian2, second : Cesium.Cartesian2, result : Cesium.Cartesian2) : Cesium.Cartesian2
	static maximumComponent(cartesian : Cesium.Cartesian2) : number
	static minimumByComponent(first : Cesium.Cartesian2, second : Cesium.Cartesian2, result : Cesium.Cartesian2) : Cesium.Cartesian2
	static minimumComponent(cartesian : Cesium.Cartesian2) : number
	static mostOrthogonalAxis(cartesian : Cesium.Cartesian2, result : Cesium.Cartesian2) : Cesium.Cartesian2
	static multiplyByScalar(cartesian : Cesium.Cartesian2, scalar : number, result : Cesium.Cartesian2) : Cesium.Cartesian2
	static multiplyComponents(left : Cesium.Cartesian2, right : Cesium.Cartesian2, result : Cesium.Cartesian2) : Cesium.Cartesian2
	static negate(cartesian : Cesium.Cartesian2, result : Cesium.Cartesian2) : Cesium.Cartesian2
	static normalize(cartesian : Cesium.Cartesian2, result : Cesium.Cartesian2) : Cesium.Cartesian2
	static pack(value : Cesium.Cartesian2, array : Array<number>, startingIndex? : number) : void
	static subtract(left : Cesium.Cartesian2, right : Cesium.Cartesian2, result : Cesium.Cartesian2) : Cesium.Cartesian2
	static unpack(array : Array<number>, startingIndex? : number, result? : Cesium.Cartesian2) : void
}
export class Cartesian3 
{
	constructor(x? : number, y? : number, z? : number);
	//Members
	x: number
	y: number
	z: number
	static packedLength: number
	static UNIT_X: Cesium.Cartesian3
	static UNIT_Y: Cesium.Cartesian3
	static UNIT_Z: Cesium.Cartesian3
	static ZERO: Cesium.Cartesian3

	//Methods
	clone(result? : Cesium.Cartesian3) : Cesium.Cartesian3
	equals(right? : Cesium.Cartesian3) : boolean
	equalsEpsilon(right? : Cesium.Cartesian3, relativeEpsilon? : number, absoluteEpsilon? : number) : boolean
	toString() : string
	static abs(cartesian : Cesium.Cartesian3, result : Cesium.Cartesian3) : Cesium.Cartesian3
	static add(left : Cesium.Cartesian3, right : Cesium.Cartesian3, result : Cesium.Cartesian3) : Cesium.Cartesian3
	static angleBetween(left : Cesium.Cartesian3, right : Cesium.Cartesian3) : number
	static clone(cartesian : Cesium.Cartesian3, result? : Cesium.Cartesian3) : Cesium.Cartesian3
	static cross(left : Cesium.Cartesian3, right : Cesium.Cartesian3, result : Cesium.Cartesian3) : Cesium.Cartesian3
	static distance(left : Cesium.Cartesian3, right : Cesium.Cartesian3) : number
	static distanceSquared(left : Cesium.Cartesian3, right : Cesium.Cartesian3) : number
	static divideByScalar(cartesian : Cesium.Cartesian3, scalar : number, result : Cesium.Cartesian3) : Cesium.Cartesian3
	static dot(left : Cesium.Cartesian3, right : Cesium.Cartesian3) : number
	static equals(left? : Cesium.Cartesian3, right? : Cesium.Cartesian3) : boolean
	static equalsEpsilon(left? : Cesium.Cartesian3, right? : Cesium.Cartesian3, relativeEpsilon? : number, absoluteEpsilon? : number) : boolean
	static fromArray(array : Array<number>, startingIndex? : number, result? : Cesium.Cartesian3) : Cesium.Cartesian3
	static fromCartesian4(cartesian : Cesium.Cartesian4, result? : Cesium.Cartesian3) : Cesium.Cartesian3
	static fromDegrees(longitude : number, latitude : number, height? : number, ellipsoid? : Cesium.Ellipsoid, result? : Cesium.Cartesian3) : Cesium.Cartesian3
	static fromDegreesArray(coordinates : Array<number>, ellipsoid? : Cesium.Ellipsoid, result? : Cesium.Cartesian3) : Cesium.Cartesian3
	static fromDegreesArrayHeights(coordinates : Array<number>, ellipsoid? : Cesium.Ellipsoid, result? : Cesium.Cartesian3) : Cesium.Cartesian3
	static fromElements(x : number, y : number, z : number, result? : Cesium.Cartesian3) : Cesium.Cartesian3
	static fromRadians(longitude : number, latitude : number, height? : number, ellipsoid? : Cesium.Ellipsoid, result? : Cesium.Cartesian3) : Cesium.Cartesian3
	static fromRadiansArray(coordinates : Array<number>, ellipsoid? : Cesium.Ellipsoid, result? : Cesium.Cartesian3) : Cesium.Cartesian3
	static fromRadiansArrayHeights(coordinates : Array<number>, ellipsoid? : Cesium.Ellipsoid, result? : Cesium.Cartesian3) : Cesium.Cartesian3
	static fromSpherical(spherical : Cesium.Spherical, result? : Cesium.Cartesian3) : Cesium.Cartesian3
	static lerp(start : Cesium.Cartesian3, end : Cesium.Cartesian3, t : number, result : Cesium.Cartesian3) : Cesium.Cartesian3
	static magnitude(cartesian : Cesium.Cartesian3) : number
	static magnitudeSquared(cartesian : Cesium.Cartesian3) : number
	static maximumByComponent(first : Cesium.Cartesian3, second : Cesium.Cartesian3, result : Cesium.Cartesian3) : Cesium.Cartesian3
	static maximumComponent(cartesian : Cesium.Cartesian3) : number
	static minimumByComponent(first : Cesium.Cartesian3, second : Cesium.Cartesian3, result : Cesium.Cartesian3) : Cesium.Cartesian3
	static minimumComponent(cartesian : Cesium.Cartesian3) : number
	static mostOrthogonalAxis(cartesian : Cesium.Cartesian3, result : Cesium.Cartesian3) : Cesium.Cartesian3
	static multiplyByScalar(cartesian : Cesium.Cartesian3, scalar : number, result : Cesium.Cartesian3) : Cesium.Cartesian3
	static multiplyComponents(left : Cesium.Cartesian3, right : Cesium.Cartesian3, result : Cesium.Cartesian3) : Cesium.Cartesian3
	static negate(cartesian : Cesium.Cartesian3, result : Cesium.Cartesian3) : Cesium.Cartesian3
	static normalize(cartesian : Cesium.Cartesian3, result : Cesium.Cartesian3) : Cesium.Cartesian3
	static pack(value : Cesium.Cartesian3, array : Array<number>, startingIndex? : number) : void
	static subtract(left : Cesium.Cartesian3, right : Cesium.Cartesian3, result : Cesium.Cartesian3) : Cesium.Cartesian3
	static unpack(array : Array<number>, startingIndex? : number, result? : Cesium.Cartesian3) : void
}
export class Cartesian4 
{
	constructor(x? : number, y? : number, z? : number, w? : number);
	//Members
	w: number
	x: number
	y: number
	z: number
	static packedLength: number
	static UNIT_W: Cesium.Cartesian4
	static UNIT_X: Cesium.Cartesian4
	static UNIT_Y: Cesium.Cartesian4
	static UNIT_Z: Cesium.Cartesian4
	static ZERO: Cesium.Cartesian4

	//Methods
	clone(result? : Cesium.Cartesian4) : Cesium.Cartesian4
	equals(right? : Cesium.Cartesian4) : boolean
	equalsEpsilon(right? : Cesium.Cartesian4, relativeEpsilon? : number, absoluteEpsilon? : number) : boolean
	toString() : string
	static abs(cartesian : Cesium.Cartesian4, result : Cesium.Cartesian4) : Cesium.Cartesian4
	static add(left : Cesium.Cartesian4, right : Cesium.Cartesian4, result : Cesium.Cartesian4) : Cesium.Cartesian4
	static clone(cartesian : Cesium.Cartesian4, result? : Cesium.Cartesian4) : Cesium.Cartesian4
	static distance(left : Cesium.Cartesian4, right : Cesium.Cartesian4) : number
	static distanceSquared(left : Cesium.Cartesian4, right : Cesium.Cartesian4) : number
	static divideByScalar(cartesian : Cesium.Cartesian4, scalar : number, result : Cesium.Cartesian4) : Cesium.Cartesian4
	static dot(left : Cesium.Cartesian4, right : Cesium.Cartesian4) : number
	static equals(left? : Cesium.Cartesian4, right? : Cesium.Cartesian4) : boolean
	static equalsEpsilon(left? : Cesium.Cartesian4, right? : Cesium.Cartesian4, relativeEpsilon? : number, absoluteEpsilon? : number) : boolean
	static fromArray(array : Array<number>, startingIndex? : number, result? : Cesium.Cartesian4) : Cesium.Cartesian4
	static fromColor(color : Cesium.Color, result? : Cesium.Cartesian4) : Cesium.Cartesian4
	static fromElements(x : number, y : number, z : number, w : number, result? : Cesium.Cartesian4) : Cesium.Cartesian4
	static lerp(start : Cesium.Cartesian4, end : Cesium.Cartesian4, t : number, result : Cesium.Cartesian4) : Cesium.Cartesian4
	static magnitude(cartesian : Cesium.Cartesian4) : number
	static magnitudeSquared(cartesian : Cesium.Cartesian4) : number
	static maximumByComponent(first : Cesium.Cartesian4, second : Cesium.Cartesian4, result : Cesium.Cartesian4) : Cesium.Cartesian4
	static maximumComponent(cartesian : Cesium.Cartesian4) : number
	static minimumByComponent(first : Cesium.Cartesian4, second : Cesium.Cartesian4, result : Cesium.Cartesian4) : Cesium.Cartesian4
	static minimumComponent(cartesian : Cesium.Cartesian4) : number
	static mostOrthogonalAxis(cartesian : Cesium.Cartesian4, result : Cesium.Cartesian4) : Cesium.Cartesian4
	static multiplyByScalar(cartesian : Cesium.Cartesian4, scalar : number, result : Cesium.Cartesian4) : Cesium.Cartesian4
	static multiplyComponents(left : Cesium.Cartesian4, right : Cesium.Cartesian4, result : Cesium.Cartesian4) : Cesium.Cartesian4
	static negate(cartesian : Cesium.Cartesian4, result : Cesium.Cartesian4) : Cesium.Cartesian4
	static normalize(cartesian : Cesium.Cartesian4, result : Cesium.Cartesian4) : Cesium.Cartesian4
	static pack(value : Cesium.Cartesian4, array : Array<number>, startingIndex? : number) : void
	static subtract(left : Cesium.Cartesian4, right : Cesium.Cartesian4, result : Cesium.Cartesian4) : Cesium.Cartesian4
	static unpack(array : Array<number>, startingIndex? : number, result? : Cesium.Cartesian4) : Cesium.Cartesian4
}
export class Cartographic 
{
	constructor(longitude? : number, latitude? : number, height? : number);
	//Members
	static ZERO: Cesium.Cartographic
	height: number
	latitude: number
	longitude: number

	//Methods
	static clone(cartographic : Cesium.Cartographic, result? : Cesium.Cartographic) : Cesium.Cartographic
	static equals(left? : Cesium.Cartographic, right? : Cesium.Cartographic) : boolean
	static equalsEpsilon(left? : Cesium.Cartographic, right? : Cesium.Cartographic, epsilon? : number) : boolean
	static fromDegrees(longitude : number, latitude : number, height? : number, result? : Cesium.Cartographic) : Cesium.Cartographic
	static fromRadians(longitude : number, latitude : number, height? : number, result? : Cesium.Cartographic) : Cesium.Cartographic
	clone(result? : Cesium.Cartographic) : Cesium.Cartographic
	equals(right? : Cesium.Cartographic) : boolean
	equalsEpsilon(right? : Cesium.Cartographic, epsilon? : number) : boolean
	toString() : string
}
export class CesiumTerrainProvider 
{
	constructor(options? : Cesium.opt_8D840651454F14ED5A6C3D62308AA5C0);
	//Members
	credit: Cesium.Credit
	errorEvent: Cesium.Event
	hasVertexNormals: boolean
	hasWaterMask: boolean
	ready: boolean
	requestVertexNormals: boolean
	requestWaterMask: boolean
	tilingScheme: Cesium.GeographicTilingScheme

	//Methods
	getLevelMaximumGeometricError(level : number) : number
	getTileDataAvailable(x : number, y : number, level : number) : boolean
	requestTileGeometry(x : number, y : number, level : number, throttleRequests? : boolean) : Cesium.TerrainData
}
export class CesiumWidget 
{
	constructor(container : Element|string, options? : Cesium.opt_6FCEAB521F89730E09ACCE7DD0D9C9DC);
	//Members
	camera: Cesium.Camera
	canvas: HTMLCanvasElement
	clock: Cesium.Clock
	container: Element
	creditContainer: Element
	imageryLayers: Cesium.ImageryLayerCollection
	resolutionScale: number
	scene: Cesium.Scene
	screenSpaceEventHandler: Cesium.ScreenSpaceEventHandler
	targetFrameRate: number
	terrainProvider: Cesium.TerrainProvider
	useDefaultRenderLoop: boolean

	//Methods
	destroy() : void
	isDestroyed() : boolean
	render() : void
	resize() : void
	showErrorPanel(title : string, message : string, error? : string) : void
}
export class Clock 
{
	constructor(options? : Cesium.opt_02B7F71AF9DA9AAE0EB12AAC901EE9FF);
	//Members
	canAnimate: boolean
	clockRange: Cesium.ClockRange
	clockStep: Cesium.ClockStep
	currentTime: Cesium.JulianDate
	multiplier: number
	onTick: any
	shouldAnimate: boolean
	startTime: Cesium.JulianDate
	stopTime: Cesium.JulianDate

	//Methods
	tick() : Cesium.JulianDate
}
export class ClockRange 
{
	constructor();
	//Members
	static CLAMPED: number
	static LOOP_STOP: number
	static UNBOUNDED: number

	//Methods
}
export class ClockStep 
{
	constructor();
	//Members
	static SYSTEM_CLOCK: number
	static SYSTEM_CLOCK_MULTIPLIER: number
	static TICK_DEPENDENT: number

	//Methods
}
export class ClockViewModel 
{
	constructor(clock? : Cesium.Clock);
	//Members
	canAnimate: boolean
	clock: Cesium.Clock
	clockRange: Cesium.ClockRange
	clockStep: Cesium.ClockStep
	currentTime: Cesium.JulianDate
	multiplier: number
	shouldAnimate: boolean
	startTime: Cesium.JulianDate
	stopTime: Cesium.JulianDate
	systemTime: Cesium.JulianDate

	//Methods
	destroy() : void
	isDestroyed() : boolean
	synchronize() : void
}
export class Color 
{
	constructor(red? : number, green? : number, blue? : number, alpha? : number);
	//Members
	static ALICEBLUE: Cesium.Color
	static ANTIQUEWHITE: Cesium.Color
	static AQUA: Cesium.Color
	static AQUAMARINE: Cesium.Color
	static AZURE: Cesium.Color
	static BEIGE: Cesium.Color
	static BISQUE: Cesium.Color
	static BLACK: Cesium.Color
	static BLANCHEDALMOND: Cesium.Color
	static BLUE: Cesium.Color
	static BLUEVIOLET: Cesium.Color
	static BROWN: Cesium.Color
	static BURLYWOOD: Cesium.Color
	static CADETBLUE: Cesium.Color
	static CHARTREUSE: Cesium.Color
	static CHOCOLATE: Cesium.Color
	static CORAL: Cesium.Color
	static CORNFLOWERBLUE: Cesium.Color
	static CORNSILK: Cesium.Color
	static CRIMSON: Cesium.Color
	static CYAN: Cesium.Color
	static DARKBLUE: Cesium.Color
	static DARKCYAN: Cesium.Color
	static DARKGOLDENROD: Cesium.Color
	static DARKGRAY: Cesium.Color
	static DARKGREEN: Cesium.Color
	static DARKGREY: Cesium.Color
	static DARKKHAKI: Cesium.Color
	static DARKMAGENTA: Cesium.Color
	static DARKOLIVEGREEN: Cesium.Color
	static DARKORANGE: Cesium.Color
	static DARKORCHID: Cesium.Color
	static DARKRED: Cesium.Color
	static DARKSALMON: Cesium.Color
	static DARKSEAGREEN: Cesium.Color
	static DARKSLATEBLUE: Cesium.Color
	static DARKSLATEGRAY: Cesium.Color
	static DARKSLATEGREY: Cesium.Color
	static DARKTURQUOISE: Cesium.Color
	static DARKVIOLET: Cesium.Color
	static DEEPPINK: Cesium.Color
	static DEEPSKYBLUE: Cesium.Color
	static DIMGRAY: Cesium.Color
	static DIMGREY: Cesium.Color
	static DODGERBLUE: Cesium.Color
	static FIREBRICK: Cesium.Color
	static FLORALWHITE: Cesium.Color
	static FORESTGREEN: Cesium.Color
	static FUSCHIA: Cesium.Color
	static GAINSBORO: Cesium.Color
	static GHOSTWHITE: Cesium.Color
	static GOLD: Cesium.Color
	static GOLDENROD: Cesium.Color
	static GRAY: Cesium.Color
	static GREEN: Cesium.Color
	static GREENYELLOW: Cesium.Color
	static GREY: Cesium.Color
	static HONEYDEW: Cesium.Color
	static HOTPINK: Cesium.Color
	static INDIANRED: Cesium.Color
	static INDIGO: Cesium.Color
	static IVORY: Cesium.Color
	static KHAKI: Cesium.Color
	static LAVENDAR_BLUSH: Cesium.Color
	static LAVENDER: Cesium.Color
	static LAWNGREEN: Cesium.Color
	static LEMONCHIFFON: Cesium.Color
	static LIGHTBLUE: Cesium.Color
	static LIGHTCORAL: Cesium.Color
	static LIGHTCYAN: Cesium.Color
	static LIGHTGOLDENRODYELLOW: Cesium.Color
	static LIGHTGRAY: Cesium.Color
	static LIGHTGREEN: Cesium.Color
	static LIGHTGREY: Cesium.Color
	static LIGHTPINK: Cesium.Color
	static LIGHTSEAGREEN: Cesium.Color
	static LIGHTSKYBLUE: Cesium.Color
	static LIGHTSLATEGRAY: Cesium.Color
	static LIGHTSLATEGREY: Cesium.Color
	static LIGHTSTEELBLUE: Cesium.Color
	static LIGHTYELLOW: Cesium.Color
	static LIME: Cesium.Color
	static LIMEGREEN: Cesium.Color
	static LINEN: Cesium.Color
	static MAGENTA: Cesium.Color
	static MAROON: Cesium.Color
	static MEDIUMAQUAMARINE: Cesium.Color
	static MEDIUMBLUE: Cesium.Color
	static MEDIUMORCHID: Cesium.Color
	static MEDIUMPURPLE: Cesium.Color
	static MEDIUMSEAGREEN: Cesium.Color
	static MEDIUMSLATEBLUE: Cesium.Color
	static MEDIUMSPRINGGREEN: Cesium.Color
	static MEDIUMTURQUOISE: Cesium.Color
	static MEDIUMVIOLETRED: Cesium.Color
	static MIDNIGHTBLUE: Cesium.Color
	static MINTCREAM: Cesium.Color
	static MISTYROSE: Cesium.Color
	static MOCCASIN: Cesium.Color
	static NAVAJOWHITE: Cesium.Color
	static NAVY: Cesium.Color
	static OLDLACE: Cesium.Color
	static OLIVE: Cesium.Color
	static OLIVEDRAB: Cesium.Color
	static ORANGE: Cesium.Color
	static ORANGERED: Cesium.Color
	static ORCHID: Cesium.Color
	static packedLength: number
	static PALEGOLDENROD: Cesium.Color
	static PALEGREEN: Cesium.Color
	static PALETURQUOISE: Cesium.Color
	static PALEVIOLETRED: Cesium.Color
	static PAPAYAWHIP: Cesium.Color
	static PEACHPUFF: Cesium.Color
	static PERU: Cesium.Color
	static PINK: Cesium.Color
	static PLUM: Cesium.Color
	static POWDERBLUE: Cesium.Color
	static PURPLE: Cesium.Color
	static RED: Cesium.Color
	static ROSYBROWN: Cesium.Color
	static ROYALBLUE: Cesium.Color
	static SADDLEBROWN: Cesium.Color
	static SALMON: Cesium.Color
	static SANDYBROWN: Cesium.Color
	static SEAGREEN: Cesium.Color
	static SEASHELL: Cesium.Color
	static SIENNA: Cesium.Color
	static SILVER: Cesium.Color
	static SKYBLUE: Cesium.Color
	static SLATEBLUE: Cesium.Color
	static SLATEGRAY: Cesium.Color
	static SLATEGREY: Cesium.Color
	static SNOW: Cesium.Color
	static SPRINGGREEN: Cesium.Color
	static STEELBLUE: Cesium.Color
	static TAN: Cesium.Color
	static TEAL: Cesium.Color
	static THISTLE: Cesium.Color
	static TOMATO: Cesium.Color
	static TRANSPARENT: Cesium.Color
	static TURQUOISE: Cesium.Color
	static VIOLET: Cesium.Color
	static WHEAT: Cesium.Color
	static WHITE: Cesium.Color
	static WHITESMOKE: Cesium.Color
	static YELLOW: Cesium.Color
	static YELLOWGREEN: Cesium.Color
	alpha: number
	blue: number
	green: number
	red: number

	//Methods
	static byteToFloat(number : number) : number
	static clone(color : Cesium.Color, result? : Cesium.Color) : Cesium.Color
	static equals(left : Cesium.Color, right : Cesium.Color) : boolean
	static floatToByte(number : number) : number
	static fromAlpha(color : Cesium.Color, alpha : number, result? : Cesium.Color) : Cesium.Color
	static fromBytes(red? : number, green? : number, blue? : number, alpha? : number, result? : Cesium.Color) : Cesium.Color
	static fromCartesian4(cartesian : Cesium.Cartesian4, result? : Cesium.Color) : Cesium.Color
	static fromCssColorString(color : string) : Cesium.Color
	static fromHsl(hue? : number, saturation? : number, lightness? : number, alpha? : number) : Cesium.Color
	static fromRandom(options? : Cesium.opt_301F742D5CC2E3407481D2C4C1ED626B, result? : Cesium.Color) : Cesium.Color
	static fromRgba(rgba : number) : Cesium.Color
	static pack(value : Cesium.Color, array : Array<number>, startingIndex? : number) : void
	static unpack(array : Array<number>, startingIndex? : number, result? : Cesium.Color) : void
	brighten(magnitude : number, result : Cesium.Color) : Cesium.Color
	clone(result? : Cesium.Color) : Cesium.Color
	darken(magnitude : number, result : Cesium.Color) : Cesium.Color
	equals(other : Cesium.Color) : boolean
	equalsEpsilon(other : Cesium.Color, epsilon? : number) : boolean
	toBytes(result? : Array<number>) : Array<number>
	toCssColorString() : string
	toRgba() : number
	toString() : string
	withAlpha(alpha : number, result? : Cesium.Color) : Cesium.Color
}
export class Command 
{
	constructor();
	//Members
	afterExecute: Cesium.Event
	beforeExecute: Cesium.Event
	canExecute: boolean

	//Methods
}
export class CorridorGraphics 
{
	constructor(options? : Cesium.opt_F228E63F58053786929CCEF109E67598);
	//Members
	cornerType: Cesium.Property
	definitionChanged: Cesium.Event
	extrudedHeight: Cesium.Property
	fill: Cesium.Property
	granularity: Cesium.Property
	height: Cesium.Property
	material: Cesium.MaterialProperty
	outline: Cesium.Property
	outlineColor: Cesium.Property
	outlineWidth: Cesium.Property
	positions: Cesium.Property
	show: Cesium.Property
	width: Cesium.Property

	//Methods
	clone(result? : Cesium.CorridorGraphics) : Cesium.CorridorGraphics
	merge(source : Cesium.CorridorGraphics) : void
}
export class Credit 
{
	constructor(text? : string, imageUrl? : string, link? : string);
	//Members
	imageUrl: string
	link: string
	text: string

	//Methods
	static equals(left : Cesium.Credit, right : Cesium.Credit) : boolean
	equals(credits : Cesium.Credit) : boolean
	hasImage() : boolean
	hasLink() : boolean
}
export class CullingVolume 
{
	constructor(planes : Cesium.Cartesian4);
	//Members
	planes: Cesium.Cartesian4

	//Methods
	computeVisibility(boundingVolume : any) : Cesium.Intersect
}
export class CustomDataSource 
{
	constructor(name? : string);
	//Members
	changedEvent: Cesium.Event
	clock: Cesium.DataSourceClock
	entities: Cesium.EntityCollection
	errorEvent: Cesium.Event
	isLoading: boolean
	loadingEvent: Cesium.Event
	name: string

	//Methods
}
export class CylinderGraphics 
{
	constructor(options? : Cesium.opt_A444AEB6BB096D01587551B4B024892D);
	//Members
	bottomRadius: Cesium.Property
	definitionChanged: Cesium.Event
	fill: Cesium.Property
	length: Cesium.Property
	material: Cesium.MaterialProperty
	numberOfVerticalLines: Cesium.Property
	outline: Cesium.Property
	outlineColor: Cesium.Property
	outlineWidth: Cesium.Property
	show: Cesium.Property
	slices: Cesium.Property
	topRadius: Cesium.Property

	//Methods
	clone(result? : Cesium.CylinderGraphics) : Cesium.CylinderGraphics
	merge(source : Cesium.CylinderGraphics) : void
}
export class CzmlDataSource extends Cesium.DataSource
{
	constructor(name? : string);
	//Members
	static updaters: Array<any>
	changedEvent: Cesium.Event
	clock: Cesium.DataSourceClock
	entities: Cesium.EntityCollection
	errorEvent: Cesium.Event
	isLoading: boolean
	loadingEvent: Cesium.Event
	name: string

	//Methods
	static load(data : string|any, options? : Cesium.opt_1E6F460399A507385DB1742988F88CFC) : Cesium.CzmlDataSource
	static processMaterialPacketData(object : any, propertyName : string, packetData : any, interval : Cesium.TimeInterval, sourceUri : string, entityCollection : Cesium.EntityCollection) : void
	static processPacketData(type : (()=>void), object : any, propertyName : string, packetData : any, interval : Cesium.TimeInterval, sourceUri : string, entityCollection : Cesium.EntityCollection) : void
	static processPositionPacketData(object : any, propertyName : string, packetData : any, interval : Cesium.TimeInterval, sourceUri : string, entityCollection : Cesium.EntityCollection) : void
	load(czml : string|any, options? : Cesium.opt_1E6F460399A507385DB1742988F88CFC) : Cesium.CzmlDataSource
	process(czml : string|any, options? : Cesium.opt_1E6F460399A507385DB1742988F88CFC) : Cesium.CzmlDataSource
}
export class DataSource 
{
	constructor();
	//Members
	changedEvent: Cesium.Event
	clock: Cesium.DataSourceClock
	entities: Cesium.EntityCollection
	errorEvent: Cesium.Event
	isLoading: boolean
	loadingEvent: Cesium.Event
	name: string

	//Methods
	update(time : Cesium.JulianDate) : boolean
}
export class DataSourceClock 
{
	constructor();
	//Members
	clockRange: Cesium.ClockRange
	clockStep: Cesium.ClockStep
	currentTime: Cesium.JulianDate
	definitionChanged: Cesium.Event
	multiplier: number
	startTime: Cesium.JulianDate
	stopTime: Cesium.JulianDate

	//Methods
	clone(result? : Cesium.DataSourceClock) : Cesium.DataSourceClock
	equals(other : Cesium.DataSourceClock) : boolean
	getValue() : Cesium.Clock
	merge(source : Cesium.DataSourceClock) : void
}
export class DataSourceCollection 
{
	constructor();
	//Members
	dataSourceAdded: Cesium.Event
	dataSourceRemoved: Cesium.Event
	length: number

	//Methods
	add(dataSource : Cesium.DataSource) : Cesium.DataSource
	contains(dataSource : Cesium.DataSource) : boolean
	destroy() : void
	get(index : number) : void
	indexOf(dataSource : Cesium.DataSource) : number
	isDestroyed() : boolean
	remove(dataSource : Cesium.DataSource, destroy? : boolean) : boolean
	removeAll(destroy? : boolean) : void
}
export class DataSourceDisplay 
{
	constructor(options? : Cesium.opt_3D8966987E325B295510138398254B4B);
	//Members
	static defaultVisualizersCallback: any
	dataSources: Cesium.DataSourceCollection
	defaultDataSource: Cesium.CustomDataSource
	scene: Cesium.Scene

	//Methods
	destroy() : void
	isDestroyed() : boolean
	update(time : Cesium.JulianDate) : boolean
}
export class DefaultProxy 
{
	constructor(proxy : string);
	//Members

	//Methods
	getURL(resource : string) : string
}
export class EasingFunction 
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
export class EllipseGraphics 
{
	constructor(options? : Cesium.opt_3D592E223CD3B002177AA10538CD3407);
	//Members
	definitionChanged: Cesium.Event
	extrudedHeight: Cesium.Property
	fill: Cesium.Property
	granularity: Cesium.Property
	height: Cesium.Property
	material: Cesium.MaterialProperty
	numberOfVerticalLines: Cesium.Property
	outline: Cesium.Property
	outlineColor: Cesium.Property
	outlineWidth: Cesium.Property
	rotation: Cesium.Property
	semiMajorAxis: Cesium.Property
	semiMinorAxis: Cesium.Property
	show: Cesium.Property
	stRotation: Cesium.Property

	//Methods
	clone(result? : Cesium.EllipseGraphics) : Cesium.EllipseGraphics
	merge(source : Cesium.EllipseGraphics) : void
}
export class Ellipsoid 
{
	constructor(x? : number, y? : number, z? : number);
	//Members
	static MOON: Cesium.Ellipsoid
	static packedLength: number
	static UNIT_SPHERE: Cesium.Ellipsoid
	static WGS84: Cesium.Ellipsoid
	maximumRadius: number
	minimumRadius: number
	oneOverRadii: Cesium.Cartesian3
	oneOverRadiiSquared: Cesium.Cartesian3
	radii: Cesium.Cartesian3
	radiiSquared: Cesium.Cartesian3
	radiiToTheFourth: Cesium.Cartesian3

	//Methods
	static clone(ellipsoid : Cesium.Ellipsoid, result? : Cesium.Ellipsoid) : Cesium.Ellipsoid
	static fromCartesian3(radii? : Cesium.Cartesian3) : Cesium.Ellipsoid
	static pack(value : any, array : Array<number>, startingIndex? : number) : void
	static unpack(array : Array<number>, startingIndex? : number, result? : Cesium.Ellipsoid) : void
	cartesianArrayToCartographicArray(cartesians : Cesium.Cartesian3, result? : Cesium.Cartographic) : Cesium.Cartographic
	cartesianToCartographic(cartesian : Cesium.Cartesian3, result? : Cesium.Cartographic) : Cesium.Cartographic
	cartographicArrayToCartesianArray(cartographics : Cesium.Cartographic, result? : Cesium.Cartesian3) : Cesium.Cartesian3
	cartographicToCartesian(cartographic : Cesium.Cartographic, result? : Cesium.Cartesian3) : Cesium.Cartesian3
	clone(result? : Cesium.Ellipsoid) : Cesium.Ellipsoid
	equals(right? : Cesium.Ellipsoid) : boolean
	geocentricSurfaceNormal(cartesian : Cesium.Cartesian3, result? : Cesium.Cartesian3) : Cesium.Cartesian3
	geodeticSurfaceNormal(cartesian : Cesium.Cartesian3, result? : Cesium.Cartesian3) : Cesium.Cartesian3
	geodeticSurfaceNormalCartographic(cartographic : Cesium.Cartographic, result? : Cesium.Cartesian3) : Cesium.Cartesian3
	scaleToGeocentricSurface(cartesian : Cesium.Cartesian3, result? : Cesium.Cartesian3) : Cesium.Cartesian3
	scaleToGeodeticSurface(cartesian : Cesium.Cartesian3, result? : Cesium.Cartesian3) : Cesium.Cartesian3
	toString() : string
	transformPositionFromScaledSpace(position : Cesium.Cartesian3, result? : Cesium.Cartesian3) : Cesium.Cartesian3
	transformPositionToScaledSpace(position : Cesium.Cartesian3, result? : Cesium.Cartesian3) : Cesium.Cartesian3
}
export class EllipsoidGraphics 
{
	constructor(options? : Cesium.opt_A905EC4E50A27EFD8AC1EC310C13A92E);
	//Members
	definitionChanged: Cesium.Event
	fill: Cesium.Property
	material: Cesium.MaterialProperty
	outline: Cesium.Property
	outlineColor: Cesium.Property
	outlineWidth: Cesium.Property
	radii: Cesium.Property
	show: Cesium.Property
	slicePartitions: Cesium.Property
	stackPartitions: Cesium.Property
	subdivisions: Cesium.Property

	//Methods
	clone(result? : Cesium.EllipsoidGraphics) : Cesium.EllipsoidGraphics
	merge(source : Cesium.EllipsoidGraphics) : void
}
export class Entity 
{
	constructor(options? : Cesium.opt_216F735AA66E2BAA494F20B79B6B303C);
	//Members
	availability: Cesium.TimeIntervalCollection
	billboard: Cesium.BillboardGraphics
	box: Cesium.BoxGraphics
	corridor: Cesium.CorridorGraphics
	cylinder: Cesium.CylinderGraphics
	definitionChanged: Cesium.Event
	description: Cesium.Property
	ellipse: Cesium.EllipseGraphics
	ellipsoid: Cesium.EllipsoidGraphics
	id: string
	isShowing: boolean
	label: Cesium.LabelGraphics
	model: Cesium.ModelGraphics
	name: string
	orientation: Cesium.Property
	parent: Cesium.Entity
	path: Cesium.PathGraphics
	point: Cesium.PointGraphics
	polygon: Cesium.PolygonGraphics
	polyline: Cesium.PolylineGraphics
	polylineVolume: Cesium.PolylineVolumeGraphics
	position: Cesium.PositionProperty
	propertyNames: Cesium.Event
	rectangle: Cesium.RectangleGraphics
	show: boolean
	viewFrom: Cesium.Property
	wall: Cesium.WallGraphics

	//Methods
	addProperty(propertyName : string) : void
	isAvailable(time : Cesium.JulianDate) : void
	merge(source : Cesium.Entity) : void
	removeProperty(propertyName : string) : void
}
export class EntityCollection 
{
	constructor();
	//Members
	collectionChanged: Cesium.Event
	id: string
	values: Cesium.Entity

	//Methods
	static collectionChangedEventCallback(collection : Cesium.EntityCollection, added : Cesium.Entity, removed : Cesium.Entity, changed : Cesium.Entity) : void
	add(entity : Cesium.Entity) : void
	computeAvailability() : Cesium.TimeInterval
	contains(entity : any) : boolean
	getById(id : any) : Cesium.Entity
	getOrCreateEntity(id : any) : Cesium.Entity
	remove(entity : Cesium.Entity) : boolean
	removeAll() : void
	removeById(id : any) : boolean
	resumeEvents() : void
	suspendEvents() : void
}
export class EntityView 
{
	constructor(entity : Cesium.Entity, scene : Cesium.Scene, ellipsoid? : Cesium.Ellipsoid, boundingSphere? : Cesium.BoundingSphere);
	//Members
	static defaultOffset3D: Cesium.Cartesian3
	boundingSphere: Cesium.Entity
	ellipsoid: Cesium.Ellipsoid
	entity: Cesium.Entity
	scene: Cesium.Scene

	//Methods
	update(time : Cesium.JulianDate) : void
}
export class Event 
{
	constructor();
	//Members
	numberOfListeners: number

	//Methods
	addEventListener(listener : (()=>void), scope? : any) : any
	raiseEvent(args : any) : void
	removeEventListener(listener : (()=>void), scope? : any) : boolean
}
export class FullscreenButton 
{
	constructor(container : Element|string, fullscreenElement? : Element|string);
	//Members
	container: Element
	viewModel: Cesium.FullscreenButtonViewModel

	//Methods
	destroy() : void
	isDestroyed() : boolean
}
export class FullscreenButtonViewModel 
{
	constructor(fullscreenElement? : Element|string);
	//Members
	command: Cesium.Command
	fullscreenElement: Element
	isFullscreen: boolean
	isFullscreenEnabled: boolean
	tooltip: string

	//Methods
	destroy() : void
	isDestroyed() : boolean
}
export class Geocoder 
{
	constructor(options? : Cesium.opt_51F3BC99AEE4A2AB4C7B94373CF79B24);
	//Members
	container: Element
	viewModel: Cesium.GeocoderViewModel

	//Methods
	destroy() : void
	isDestroyed() : boolean
}
export class GeocoderViewModel 
{
	constructor(options? : Cesium.opt_D1C4A6A76ACE9F7C1F49CDEC954DC769);
	//Members
	complete: Cesium.Event
	flightDuration: number|void
	isSearchInProgress: boolean
	key: string
	scene: Cesium.Scene
	search: Cesium.Command
	searchText: string
	url: string

	//Methods
}
export class GeographicTilingScheme 
{
	constructor(options? : Cesium.opt_6B7AF50D95DDE212D2A568A3C2C91491);
	//Members
	ellipsoid: Cesium.Ellipsoid
	projection: Cesium.MapProjection
	rectangle: Cesium.Rectangle

	//Methods
	getNumberOfXTilesAtLevel(level : number) : number
	getNumberOfYTilesAtLevel(level : number) : number
	positionToTileXY(position : Cesium.Cartographic, level : number, result? : Cesium.Cartesian2) : Cesium.Cartesian2
	rectangleToNativeRectangle(rectangle : Cesium.Rectangle, result? : Cesium.Rectangle) : Cesium.Rectangle
	tileXYToNativeRectangle(x : number, y : number, level : number, result? : any) : Cesium.Rectangle
	tileXYToRectangle(x : number, y : number, level : number, result? : any) : Cesium.Rectangle
}
export class Globe 
{
	constructor(ellipsoid? : Cesium.Ellipsoid);
	//Members
	baseColor: Cesium.Color
	depthTestAgainstTerrain: boolean
	ellipsoid: Cesium.Ellipsoid
	enableLighting: boolean
	imageryLayers: Cesium.ImageryLayerCollection
	lightingFadeInDistance: number
	lightingFadeOutDistance: number
	maximumScreenSpaceError: number
	northPoleColor: Cesium.Cartesian3
	oceanNormalMapUrl: string
	show: boolean
	showWaterEffect: boolean
	southPoleColor: Cesium.Cartesian3
	terrainProvider: Cesium.TerrainProvider
	tileCacheSize: number

	//Methods
	destroy() : void
	getHeight(cartographic : Cesium.Cartographic) : number|void
	isDestroyed() : boolean
	pick(ray : Cesium.Ray, scene : Cesium.Scene, result? : Cesium.Cartesian3) : Cesium.Cartesian3
}
export class GregorianDate 
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
export class HeadingPitchRange 
{
	constructor(heading? : number, pitch? : number, range? : number);
	//Members
	heading: number
	pitch: number
	range: number

	//Methods
	static clone(hpr : Cesium.HeadingPitchRange, result? : Cesium.HeadingPitchRange) : Cesium.HeadingPitchRange
}
export class HomeButton 
{
	constructor(container : Element|string, scene : Cesium.Scene, duration? : number);
	//Members
	container: Element
	viewModel: Cesium.HomeButtonViewModel

	//Methods
	destroy() : void
	isDestroyed() : boolean
}
export class HomeButtonViewModel 
{
	constructor(scene : Cesium.Scene, duration? : number);
	//Members
	command: Cesium.Command
	duration: number|void
	scene: Cesium.Scene
	tooltip: string

	//Methods
}
export class ImageryLayer 
{
	constructor(imageryProvider : Cesium.ImageryProvider, options? : Cesium.opt_45327A5E5E71DF7BCD39621DA3516E71);
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
	imageryProvider: Cesium.ImageryProvider
	rectangle: Cesium.Rectangle
	saturation: number
	show: boolean

	//Methods
	destroy() : void
	isBaseLayer() : boolean
	isDestroyed() : boolean
}
export class ImageryLayerCollection 
{
	constructor();
	//Members
	layerAdded: Cesium.Event
	layerMoved: Cesium.Event
	layerRemoved: Cesium.Event
	layerShownOrHidden: Cesium.Event
	length: number

	//Methods
	add(layer : Cesium.ImageryLayer, index? : number) : void
	addImageryProvider(imageryProvider : Cesium.ImageryProvider, index? : number) : Cesium.ImageryLayer
	contains(layer : Cesium.ImageryLayer) : boolean
	destroy() : void
	get(index : number) : void
	indexOf(layer : Cesium.ImageryLayer) : number
	isDestroyed() : boolean
	lower(layer : Cesium.ImageryLayer) : void
	lowerToBottom(layer : Cesium.ImageryLayer) : void
	pickImageryLayerFeatures(ray : Cesium.Ray, scene : Cesium.Scene) : Cesium.ImageryLayerFeatureInfo
	raise(layer : Cesium.ImageryLayer) : void
	raiseToTop(layer : Cesium.ImageryLayer) : void
	remove(layer : Cesium.ImageryLayer, destroy? : boolean) : boolean
	removeAll(destroy? : boolean) : void
}
export class ImageryLayerFeatureInfo 
{
	constructor();
	//Members
	data: Object
	description: string
	name: string
	position: Cesium.Cartographic

	//Methods
	configureDescriptionFromProperties(properties : any) : void
	configureNameFromProperties(properties : any) : void
}
export class ImageryProvider 
{
	constructor();
	//Members
	credit: Cesium.Credit
	defaultAlpha: number
	defaultBrightness: number
	defaultContrast: number
	defaultGamma: number
	defaultHue: number
	defaultSaturation: number
	errorEvent: Cesium.Event
	hasAlphaChannel: boolean
	maximumLevel: number
	minimumLevel: number
	proxy: Cesium.DefaultProxy
	ready: boolean
	rectangle: Cesium.Rectangle
	tileDiscardPolicy: Cesium.TileDiscardPolicy
	tileHeight: number
	tileWidth: number
	tilingScheme: Cesium.TilingScheme

	//Methods
	static loadImage(url : string) : Promise<HTMLImageElement|HTMLCanvasElement>|void
	getTileCredits(x : number, y : number, level : number) : Cesium.Credit
	pickFeatures(x : number, y : number, level : number, longitude : number, latitude : number) : Cesium.ImageryLayerFeatureInfo
	requestImage(x : number, y : number, level : number) : Promise<HTMLImageElement|HTMLCanvasElement>|void
}
export class InfoBox 
{
	constructor(container : Element|string);
	//Members
	container: Element
	frame: HTMLIFrameElement
	viewModel: Cesium.InfoBoxViewModel

	//Methods
	destroy() : void
	isDestroyed() : boolean
}
export class InfoBoxViewModel 
{
	constructor();
	//Members
	cameraClicked: Cesium.Event
	cameraIconPath: string
	closeClicked: Cesium.Event
	description: string
	enableCamera: boolean
	isCameraTracking: boolean
	maxHeight: number
	showInfo: boolean
	titleText: string

	//Methods
	maxHeightOffset(offset : number) : string
}
export class Intersect 
{
	constructor();
	//Members
	static INSIDE: number
	static INTERSECTING: number
	static OUTSIDE: number

	//Methods
}
export class Interval 
{
	constructor(start? : number, stop? : number);
	//Members
	start: number
	stop: number

	//Methods
}
export class JulianDate 
{
	constructor(julianDayNumber : number, secondsOfDay : number, timeStandard? : Cesium.TimeStandard);
	//Members
	static leapSeconds: Cesium.LeapSecond
	dayNumber: number
	secondsOfDay: number

	//Methods
	static addDays(julianDate : Cesium.JulianDate, days : number, result : Cesium.JulianDate) : Cesium.JulianDate
	static addHours(julianDate : Cesium.JulianDate, hours : number, result : Cesium.JulianDate) : Cesium.JulianDate
	static addMinutes(julianDate : Cesium.JulianDate, minutes : number, result : Cesium.JulianDate) : Cesium.JulianDate
	static addSeconds(julianDate : Cesium.JulianDate, seconds : number, result : Cesium.JulianDate) : Cesium.JulianDate
	static clone(julianDate : Cesium.JulianDate, result? : Cesium.JulianDate) : Cesium.JulianDate
	static compare(left : Cesium.JulianDate, right : Cesium.JulianDate) : number
	static computeTaiMinusUtc(julianDate : Cesium.JulianDate) : number
	static daysDifference(left : Cesium.JulianDate, right : Cesium.JulianDate) : number
	static equals(left? : Cesium.JulianDate, right? : Cesium.JulianDate) : boolean
	static equalsEpsilon(left? : Cesium.JulianDate, right? : Cesium.JulianDate, epsilon? : number) : boolean
	static fromDate(date : Date, result? : Cesium.JulianDate) : Cesium.JulianDate
	static fromIso8601(iso8601String : string, result? : Cesium.JulianDate) : Cesium.JulianDate
	static greaterThan(left : Cesium.JulianDate, right : Cesium.JulianDate) : boolean
	static greaterThanOrEquals(left : Cesium.JulianDate, right : Cesium.JulianDate) : boolean
	static lessThan(left : Cesium.JulianDate, right : Cesium.JulianDate) : boolean
	static lessThanOrEquals(left : Cesium.JulianDate, right : Cesium.JulianDate) : boolean
	static now(result? : Cesium.JulianDate) : Cesium.JulianDate
	static secondsDifference(left : Cesium.JulianDate, right : Cesium.JulianDate) : number
	static toDate(julianDate : Cesium.JulianDate) : Date
	static toGregorianDate(julianDate : Cesium.JulianDate, result? : Cesium.GregorianDate) : Cesium.GregorianDate
	static toIso8601(julianDate : Cesium.JulianDate, precision? : number) : string
	static totalDays(julianDate : Cesium.JulianDate) : number
	clone(result? : Cesium.JulianDate) : Cesium.JulianDate
	equals(right? : Cesium.JulianDate) : boolean
	equalsEpsilon(right? : Cesium.JulianDate, epsilon? : number) : boolean
	toString() : string
}
export class LabelGraphics 
{
	constructor(options? : Cesium.opt_585E4F9FAD4A63D014B10AE64ADC67DA);
	//Members
	definitionChanged: Cesium.Event
	eyeOffset: Cesium.Property
	fillColor: Cesium.Property
	font: Cesium.Property
	horizontalOrigin: Cesium.Property
	outlineColor: Cesium.Property
	outlineWidth: Cesium.Property
	pixelOffset: Cesium.Property
	pixelOffsetScaleByDistance: Cesium.Property
	scale: Cesium.Property
	show: Cesium.Property
	style: Cesium.Property
	text: Cesium.Property
	translucencyByDistance: Cesium.Property
	verticalOrigin: Cesium.Property

	//Methods
	clone(result? : Cesium.LabelGraphics) : Cesium.LabelGraphics
	merge(source : Cesium.LabelGraphics) : void
}
export class LeapSecond 
{
	constructor(date? : Cesium.JulianDate, offset? : number);
	//Members
	julianDate: Cesium.JulianDate
	offset: number

	//Methods
}
export class MapProjection 
{
	constructor();
	//Members
	ellipsoid: Cesium.Ellipsoid

	//Methods
	project(cartographic : Cesium.Cartographic, result? : Cesium.Cartesian3) : Cesium.Cartesian3
	unproject(cartesian : Cesium.Cartesian3, result? : Cesium.Cartographic) : Cesium.Cartographic
}
export class MaterialProperty 
{
	constructor();
	//Members
	definitionChanged: Cesium.Event
	equals: any
	isConstant: boolean

	//Methods
	getType(time : Cesium.JulianDate) : string
	getValue(time : Cesium.JulianDate, result? : any) : Object
}
export class Matrix3 
{
	constructor(column0Row0? : number, column1Row0? : number, column2Row0? : number, column0Row1? : number, column1Row1? : number, column2Row1? : number, column0Row2? : number, column1Row2? : number, column2Row2? : number);
	//Members
	static COLUMN0ROW0: number
	static COLUMN0ROW1: number
	static COLUMN0ROW2: number
	static COLUMN1ROW0: number
	static COLUMN1ROW1: number
	static COLUMN1ROW2: number
	static COLUMN2ROW0: number
	static COLUMN2ROW1: number
	static COLUMN2ROW2: number
	static IDENTITY: Cesium.Matrix3
	static packedLength: number
	static ZERO: Cesium.Matrix3

	//Methods
	clone(result? : Cesium.Matrix3) : Cesium.Matrix3
	equals(right? : Cesium.Matrix3) : boolean
	equalsEpsilon(right? : Cesium.Matrix3, epsilon? : number) : boolean
	toString() : string
	static abs(matrix : Cesium.Matrix3, result : Cesium.Matrix3) : Cesium.Matrix3
	static add(left : Cesium.Matrix3, right : Cesium.Matrix3, result : Cesium.Matrix3) : Cesium.Matrix3
	static clone(matrix : Cesium.Matrix3, result? : Cesium.Matrix3) : Cesium.Matrix3
	static computeEigenDecomposition(matrix : Cesium.Matrix3, result? : any) : Object
	static determinant(matrix : Cesium.Matrix3) : number
	static equals(left? : Cesium.Matrix3, right? : Cesium.Matrix3) : boolean
	static equalsEpsilon(left? : Cesium.Matrix3, right? : Cesium.Matrix3, epsilon? : number) : boolean
	static fromArray(array : Array<number>, startingIndex? : number, result? : Cesium.Matrix3) : Cesium.Matrix3
	static fromColumnMajorArray(values : Array<number>, result? : Cesium.Matrix3) : Cesium.Matrix3
	static fromCrossProduct(the : Cesium.Cartesian3, result? : Cesium.Matrix3) : Cesium.Matrix3
	static fromQuaternion(quaternion : Cesium.Quaternion) : Cesium.Matrix3
	static fromRotationX(angle : number, result? : Cesium.Matrix3) : Cesium.Matrix3
	static fromRotationY(angle : number, result? : Cesium.Matrix3) : Cesium.Matrix3
	static fromRotationZ(angle : number, result? : Cesium.Matrix3) : Cesium.Matrix3
	static fromRowMajorArray(values : Array<number>, result? : Cesium.Matrix3) : Cesium.Matrix3
	static fromScale(scale : Cesium.Cartesian3, result? : Cesium.Matrix3) : Cesium.Matrix3
	static fromUniformScale(scale : number, result? : Cesium.Matrix3) : Cesium.Matrix3
	static getColumn(matrix : Cesium.Matrix3, index : number, result : Cesium.Cartesian3) : Cesium.Cartesian3
	static getElementIndex(row : number, column : number) : number
	static getMaximumScale(matrix : Cesium.Matrix3) : number
	static getRow(matrix : Cesium.Matrix3, index : number, result : Cesium.Cartesian3) : Cesium.Cartesian3
	static getScale(matrix : Cesium.Matrix3, result : Cesium.Cartesian3) : Cesium.Cartesian3
	static inverse(matrix : Cesium.Matrix3, result : Cesium.Matrix3) : Cesium.Matrix3
	static multiply(left : Cesium.Matrix3, right : Cesium.Matrix3, result : Cesium.Matrix3) : Cesium.Matrix3
	static multiplyByScalar(matrix : Cesium.Matrix3, scalar : number, result : Cesium.Matrix3) : Cesium.Matrix3
	static multiplyByScale(matrix : Cesium.Matrix3, scale : Cesium.Cartesian3, result : Cesium.Matrix3) : Cesium.Matrix3
	static multiplyByVector(matrix : Cesium.Matrix3, cartesian : Cesium.Cartesian3, result : Cesium.Cartesian3) : Cesium.Cartesian3
	static negate(matrix : Cesium.Matrix3, result : Cesium.Matrix3) : Cesium.Matrix3
	static pack(value : Cesium.Matrix3, array : Array<number>, startingIndex? : number) : void
	static setColumn(matrix : Cesium.Matrix3, index : number, cartesian : Cesium.Cartesian3, result : Cesium.Matrix3) : Cesium.Matrix3
	static setRow(matrix : Cesium.Matrix3, index : number, cartesian : Cesium.Cartesian3, result : Cesium.Matrix3) : Cesium.Matrix3
	static subtract(left : Cesium.Matrix3, right : Cesium.Matrix3, result : Cesium.Matrix3) : Cesium.Matrix3
	static toArray(matrix : Cesium.Matrix3, result? : Array<number>) : Array<number>
	static transpose(matrix : Cesium.Matrix3, result : Cesium.Matrix3) : Cesium.Matrix3
	static unpack(array : Array<number>, startingIndex? : number, result? : Cesium.Matrix3) : void
}
export class Matrix4 
{
	constructor(column0Row0? : number, column1Row0? : number, column2Row0? : number, column3Row0? : number, column0Row1? : number, column1Row1? : number, column2Row1? : number, column3Row1? : number, column0Row2? : number, column1Row2? : number, column2Row2? : number, column3Row2? : number, column0Row3? : number, column1Row3? : number, column2Row3? : number, column3Row3? : number);
	//Members
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
	static IDENTITY: Cesium.Matrix4
	static packedLength: number
	static ZERO: Cesium.Matrix4

	//Methods
	clone(result? : Cesium.Matrix4) : Cesium.Matrix4
	equals(right? : Cesium.Matrix4) : boolean
	equalsEpsilon(right? : Cesium.Matrix4, epsilon? : number) : boolean
	toString() : string
	static abs(matrix : Cesium.Matrix4, result : Cesium.Matrix4) : Cesium.Matrix4
	static add(left : Cesium.Matrix4, right : Cesium.Matrix4, result : Cesium.Matrix4) : Cesium.Matrix4
	static clone(matrix : Cesium.Matrix4, result? : Cesium.Matrix4) : Cesium.Matrix4
	static computeInfinitePerspectiveOffCenter(left : number, right : number, bottom : number, top : number, near : number, far : number, result : Cesium.Matrix4) : void
	static computeOrthographicOffCenter(left : number, right : number, bottom : number, top : number, near : number, far : number, result : Cesium.Matrix4) : void
	static computePerspectiveFieldOfView(fovY : number, aspectRatio : number, near : number, far : number, result : Cesium.Matrix4) : void
	static computePerspectiveOffCenter(left : number, right : number, bottom : number, top : number, near : number, far : number, result : Cesium.Matrix4) : void
	static computeViewportTransformation(viewport? : any, nearDepthRange? : number, farDepthRange? : number, result? : Cesium.Matrix4) : void
	static equals(left? : Cesium.Matrix4, right? : Cesium.Matrix4) : boolean
	static equalsEpsilon(left? : Cesium.Matrix4, right? : Cesium.Matrix4, epsilon? : number) : boolean
	static fromArray(array : Array<number>, startingIndex? : number, result? : Cesium.Matrix4) : Cesium.Matrix4
	static fromCamera(camera : Cesium.Camera, result? : Cesium.Matrix4) : void
	static fromColumnMajorArray(values : Array<number>, result? : Cesium.Matrix4) : void
	static fromRotationTranslation(rotation : Cesium.Matrix3, translation? : Cesium.Cartesian3, result? : Cesium.Matrix4) : void
	static fromRowMajorArray(values : Array<number>, result? : Cesium.Matrix4) : void
	static fromScale(scale : Cesium.Cartesian3, result? : Cesium.Matrix4) : void
	static fromTranslation(translation : Cesium.Cartesian3, result? : Cesium.Matrix4) : void
	static fromTranslationQuaternionRotationScale(translation : Cesium.Cartesian3, rotation : Cesium.Quaternion, scale : Cesium.Cartesian3, result? : Cesium.Matrix4) : void
	static fromUniformScale(scale : number, result? : Cesium.Matrix4) : void
	static getColumn(matrix : Cesium.Matrix4, index : number, result : Cesium.Cartesian4) : Cesium.Cartesian4
	static getElementIndex(row : number, column : number) : number
	static getMaximumScale(matrix : Cesium.Matrix4) : number
	static getRotation(matrix : Cesium.Matrix4, result : Cesium.Matrix3) : Cesium.Matrix3
	static getRow(matrix : Cesium.Matrix4, index : number, result : Cesium.Cartesian4) : Cesium.Cartesian4
	static getScale(matrix : Cesium.Matrix4, result : Cesium.Cartesian3) : Cesium.Cartesian3
	static getTranslation(matrix : Cesium.Matrix4, result : Cesium.Cartesian3) : Cesium.Cartesian3
	static inverse(matrix : Cesium.Matrix4, result : Cesium.Matrix4) : Cesium.Matrix4
	static inverseTransformation(matrix : Cesium.Matrix4, result : Cesium.Matrix4) : Cesium.Matrix4
	static multiply(left : Cesium.Matrix4, right : Cesium.Matrix4, result : Cesium.Matrix4) : Cesium.Matrix4
	static multiplyByMatrix3(matrix : Cesium.Matrix4, rotation : Cesium.Matrix3, result : Cesium.Matrix4) : Cesium.Matrix4
	static multiplyByPoint(matrix : Cesium.Matrix4, cartesian : Cesium.Cartesian3, result : Cesium.Cartesian3) : Cesium.Cartesian3
	static multiplyByPointAsVector(matrix : Cesium.Matrix4, cartesian : Cesium.Cartesian3, result : Cesium.Cartesian3) : Cesium.Cartesian3
	static multiplyByScalar(matrix : Cesium.Matrix4, scalar : number, result : Cesium.Matrix4) : Cesium.Matrix4
	static multiplyByScale(matrix : Cesium.Matrix4, scale : Cesium.Cartesian3, result : Cesium.Matrix4) : Cesium.Matrix4
	static multiplyByTranslation(matrix : Cesium.Matrix4, translation : Cesium.Cartesian3, result : Cesium.Matrix4) : Cesium.Matrix4
	static multiplyByUniformScale(matrix : Cesium.Matrix4, scale : number, result : Cesium.Matrix4) : Cesium.Matrix4
	static multiplyByVector(matrix : Cesium.Matrix4, cartesian : Cesium.Cartesian4, result : Cesium.Cartesian4) : Cesium.Cartesian4
	static multiplyTransformation(left : Cesium.Matrix4, right : Cesium.Matrix4, result : Cesium.Matrix4) : Cesium.Matrix4
	static negate(matrix : Cesium.Matrix4, result : Cesium.Matrix4) : Cesium.Matrix4
	static pack(value : Cesium.Matrix4, array : Array<number>, startingIndex? : number) : void
	static setColumn(matrix : Cesium.Matrix4, index : number, cartesian : Cesium.Cartesian4, result : Cesium.Matrix4) : Cesium.Matrix4
	static setRow(matrix : Cesium.Matrix4, index : number, cartesian : Cesium.Cartesian4, result : Cesium.Matrix4) : Cesium.Matrix4
	static setTranslation(matrix : Cesium.Matrix4, translation : Cesium.Cartesian3, result : Cesium.Cartesian4) : Cesium.Matrix4
	static subtract(left : Cesium.Matrix4, right : Cesium.Matrix4, result : Cesium.Matrix4) : Cesium.Matrix4
	static toArray(matrix : Cesium.Matrix4, result? : Array<number>) : Array<number>
	static transpose(matrix : Cesium.Matrix4, result : Cesium.Matrix4) : Cesium.Matrix4
	static unpack(array : Array<number>, startingIndex? : number, result? : Cesium.Matrix4) : void
}
export class ModelGraphics 
{
	constructor(options? : Cesium.opt_675528B90FC8A54396B7B438C4D2381F);
	//Members
	definitionChanged: Cesium.Event
	minimumPixelSize: Cesium.Property
	scale: Cesium.Property
	show: Cesium.Property
	uri: Cesium.Property

	//Methods
	clone(result? : Cesium.ModelGraphics) : Cesium.ModelGraphics
	merge(source : Cesium.ModelGraphics) : void
}
export class Moon 
{
	constructor(options? : Cesium.opt_FF0ACAA9508983CF30A394C5B97F3262);
	//Members
	ellipsoid: Cesium.Ellipsoid
	onlySunLighting: boolean
	show: boolean
	textureUrl: string

	//Methods
	destroy() : void
	isDestroyed() : boolean
}
export interface opt_02B7F71AF9DA9AAE0EB12AAC901EE9FF
{
	startTime?: Cesium.JulianDate;
	stopTime?: Cesium.JulianDate;
	currentTime?: Cesium.JulianDate;
	multiplier?: number;
	clockStep?: Cesium.ClockStep;
	clockRange?: Cesium.ClockRange;
	canAnimate?: boolean;
	shouldAnimate?: boolean;
}
export interface opt_0778B2D6CBE512175B63FDA341FDDF36
{
	positions?: Cesium.Property;
	shape?: Cesium.Property;
	cornerType?: Cesium.Property;
	show?: Cesium.Property;
	fill?: Cesium.Property;
	material?: Cesium.MaterialProperty;
	outline?: Cesium.Property;
	outlineColor?: Cesium.Property;
	outlineWidth?: Cesium.Property;
	granularity?: Cesium.Property;
}
export interface opt_0954AF407EE73C7A8721A57E6F269CA6
{
	duration?: number;
	maximumHeight?: number;
	offset?: Cesium.HeadingPitchRange;
}
export interface opt_0B8B63B15718BE5CC931DB3EBF47E4A9
{
	destination: Cesium.Cartesian3|Cesium.Rectangle;
	orientation?: Object;
	duration?: number;
	complete?: any;
	cancel?: any;
	endTransform?: Cesium.Matrix4;
	convert?: boolean;
	maximumHeight?: number;
	easingFunction?: Cesium.EasingFunction|any;
}
export interface opt_1E6F460399A507385DB1742988F88CFC
{
	sourceUri?: string;
}
export interface opt_20D66C65BF742E28485BDA3EFE9DCA30
{
	canvas: HTMLCanvasElement;
	contextOptions?: Object;
	creditContainer?: Element;
	mapProjection?: Cesium.MapProjection;
	orderIndependentTranslucency?: boolean;
	scene3DOnly?: boolean;
}
export interface opt_216F735AA66E2BAA494F20B79B6B303C
{
	id?: string;
	name?: string;
	show?: boolean;
	description?: Cesium.Property;
	position?: Cesium.PositionProperty;
	orientation?: Cesium.Property;
	viewFrom?: Cesium.Property;
	parent?: Cesium.Entity;
	billboard?: Cesium.BillboardGraphics;
	box?: Cesium.BoxGraphics;
	corridor?: Cesium.CorridorGraphics;
	cylinder?: Cesium.CylinderGraphics;
	ellipse?: Cesium.EllipseGraphics;
	ellipsoid?: Cesium.EllipsoidGraphics;
	label?: Cesium.LabelGraphics;
	model?: Cesium.ModelGraphics;
	path?: Cesium.PathGraphics;
	point?: Cesium.PointGraphics;
	polygon?: Cesium.PolygonGraphics;
	polyline?: Cesium.PolylineGraphics;
	polylineVolume?: Cesium.PolylineVolumeGraphics;
	rectangle?: Cesium.RectangleGraphics;
	wall?: Cesium.WallGraphics;
}
export interface opt_28FBAF68DC227F9F1CD834400AA86AD6
{
	name: string;
	tooltip: string;
	iconUrl: string;
	creationFunction: any|Cesium.Command;
}
export interface opt_301F742D5CC2E3407481D2C4C1ED626B
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
export interface opt_383C9CA7D89889B284E7519E995E701B
{
	positions?: Cesium.Property;
	maximumHeights?: Cesium.Property;
	minimumHeights?: Cesium.Property;
	show?: Cesium.Property;
	fill?: Cesium.Property;
	material?: Cesium.MaterialProperty;
	outline?: Cesium.Property;
	outlineColor?: Cesium.Property;
	outlineWidth?: Cesium.Property;
	granularity?: Cesium.Property;
}
export interface opt_3D592E223CD3B002177AA10538CD3407
{
	semiMajorAxis?: Cesium.Property;
	semiMinorAxis?: Cesium.Property;
	height?: Cesium.Property;
	extrudedHeight?: Cesium.Property;
	show?: Cesium.Property;
	fill?: Cesium.Property;
	material?: Cesium.MaterialProperty;
	outline?: Cesium.Property;
	outlineColor?: Cesium.Property;
	outlineWidth?: Cesium.Property;
	numberOfVerticalLines?: Cesium.Property;
	rotation?: Cesium.Property;
	stRotation?: Cesium.Property;
	granularity?: Cesium.Property;
}
export interface opt_3D8966987E325B295510138398254B4B
{
	scene: Cesium.Scene;
	dataSourceCollection: Cesium.DataSourceCollection;
	visualizersCallback?: any;
}
export interface opt_3DDB2410B4354AF0867610FF724ECDAB
{
	iso8601: string;
	isStartIncluded?: boolean;
	isStopIncluded?: boolean;
	data?: Object;
}
export interface opt_45327A5E5E71DF7BCD39621DA3516E71
{
	rectangle?: Cesium.Rectangle;
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
export interface opt_51F3BC99AEE4A2AB4C7B94373CF79B24
{
	container: Element|string;
	scene: Cesium.Scene;
	url?: string;
	key?: string;
	flightDuration?: number;
}
export interface opt_585E4F9FAD4A63D014B10AE64ADC67DA
{
	text?: Cesium.Property;
	font?: Cesium.Property;
	style?: Cesium.Property;
	fillColor?: Cesium.Property;
	outlineColor?: Cesium.Property;
	outlineWidth?: Cesium.Property;
	show?: Cesium.Property;
	scale?: Cesium.Property;
	horizontalOrigin?: Cesium.Property;
	verticalOrigin?: Cesium.Property;
	eyeOffset?: Cesium.Property;
	pixelOffset?: Cesium.Property;
	translucencyByDistance?: Cesium.Property;
	pixelOffsetScaleByDistance?: Cesium.Property;
}
export interface opt_5AB72C8DED52491679EF171E11D9F8C0
{
	positions?: Cesium.Property;
	followSurface?: Cesium.Property;
	width?: Cesium.Property;
	show?: Cesium.Property;
	material?: Cesium.MaterialProperty;
	granularity?: Cesium.Property;
}
export interface opt_668EAE9A6FF160B8B1DF40D19C65BD53
{
	start?: Cesium.JulianDate;
	stop?: Cesium.JulianDate;
	isStartIncluded?: boolean;
	isStopIncluded?: boolean;
}
export interface opt_675528B90FC8A54396B7B438C4D2381F
{
	uri?: Cesium.Property;
	show?: Cesium.Property;
	scale?: Cesium.Property;
	minimumPixelSize?: Cesium.Property;
}
export interface opt_6B7AF50D95DDE212D2A568A3C2C91491
{
	ellipsoid?: Cesium.Ellipsoid;
	rectangle?: Cesium.Rectangle;
	numberOfLevelZeroTilesX?: number;
	numberOfLevelZeroTilesY?: number;
}
export interface opt_6FCEAB521F89730E09ACCE7DD0D9C9DC
{
	clock?: Cesium.Clock;
	imageryProvider?: Cesium.ImageryProvider;
	terrainProvider?: Cesium.TerrainProvider;
	skyBox?: Cesium.SkyBox;
	skyAtmosphere?: Cesium.SkyAtmosphere;
	sceneMode?: Cesium.SceneMode;
	scene3DOnly?: boolean;
	orderIndependentTranslucency?: boolean;
	mapProjection?: Cesium.MapProjection;
	globe?: Cesium.Globe;
	useDefaultRenderLoop?: boolean;
	targetFrameRate?: number;
	showRenderLoopErrors?: boolean;
	contextOptions?: Object;
	creditContainer?: Element|string;
}
export interface opt_6FF28F43D12D4CD466537F85AB5B36A5
{
	hierarchy?: Cesium.Property;
	height?: Cesium.Property;
	extrudedHeight?: Cesium.Property;
	show?: Cesium.Property;
	fill?: Cesium.Property;
	material?: Cesium.MaterialProperty;
	outline?: Cesium.Property;
	outlineColor?: Cesium.Property;
	outlineWidth?: Cesium.Property;
	stRotation?: Cesium.Property;
	granularity?: Cesium.Property;
	perPositionHeight?: Cesium.Property;
}
export interface opt_7003FA613CC6FB0E69B99AD8F9BB4964
{
	show?: boolean;
	destroyPrimitives?: boolean;
}
export interface opt_8A5B308DE3606AB1648C8F225914595B
{
	start?: Cesium.JulianDate;
	stop?: Cesium.JulianDate;
	isStartIncluded?: boolean;
	isStopIncluded?: boolean;
	data?: Object;
}
export interface opt_8D840651454F14ED5A6C3D62308AA5C0
{
	url: string;
	proxy?: Cesium.DefaultProxy;
	requestVertexNormals?: boolean;
	requestWaterMask?: boolean;
	ellipsoid?: Cesium.Ellipsoid;
	credit?: Cesium.Credit|string;
}
export interface opt_94492F5952F1E067243EBFC581E797E3
{
	coordinates?: Cesium.Property;
	height?: Cesium.Property;
	extrudedHeight?: Cesium.Property;
	closeTop?: Cesium.Property;
	closeBottom?: Cesium.Property;
	show?: Cesium.Property;
	fill?: Cesium.Property;
	material?: Cesium.MaterialProperty;
	outline?: Cesium.Property;
	outlineColor?: Cesium.Property;
	outlineWidth?: Cesium.Property;
	rotation?: Cesium.Property;
	stRotation?: Cesium.Property;
	granularity?: Cesium.Property;
}
export interface opt_94B56FE6C322670F291E5B04D16C46EB
{
	animation?: boolean;
	baseLayerPicker?: boolean;
	fullscreenButton?: boolean;
	geocoder?: boolean;
	homeButton?: boolean;
	infoBox?: boolean;
	sceneModePicker?: boolean;
	selectionIndicator?: boolean;
	timeline?: boolean;
	navigationHelpButton?: boolean;
	navigationInstructionsInitiallyVisible?: boolean;
	scene3DOnly?: boolean;
	clock?: Cesium.Clock;
	selectedImageryProviderViewModel?: Cesium.ProviderViewModel;
	imageryProviderViewModels?: Cesium.ProviderViewModel;
	selectedTerrainProviderViewModel?: Cesium.ProviderViewModel;
	terrainProviderViewModels?: Cesium.ProviderViewModel;
	imageryProvider?: Cesium.ImageryProvider;
	terrainProvider?: Cesium.TerrainProvider;
	skyBox?: Cesium.SkyBox;
	skyAtmosphere?: Cesium.SkyAtmosphere;
	fullscreenElement?: Element|string;
	useDefaultRenderLoop?: boolean;
	targetFrameRate?: number;
	showRenderLoopErrors?: boolean;
	automaticallyTrackDataSourceClocks?: boolean;
	contextOptions?: Object;
	sceneMode?: Cesium.SceneMode;
	mapProjection?: Cesium.MapProjection;
	globe?: Cesium.Globe;
	orderIndependentTranslucency?: boolean;
	creditContainer?: Element|string;
	dataSources?: Cesium.DataSourceCollection;
}
export interface opt_A444AEB6BB096D01587551B4B024892D
{
	length?: Cesium.Property;
	topRadius?: Cesium.Property;
	bottomRadius?: Cesium.Property;
	show?: Cesium.Property;
	fill?: Cesium.Property;
	material?: Cesium.MaterialProperty;
	outline?: Cesium.Property;
	outlineColor?: Cesium.Property;
	outlineWidth?: Cesium.Property;
	numberOfVerticalLines?: Cesium.Property;
	slices?: Cesium.Property;
}
export interface opt_A905EC4E50A27EFD8AC1EC310C13A92E
{
	radii?: Cesium.Property;
	show?: Cesium.Property;
	fill?: Cesium.Property;
	material?: Cesium.MaterialProperty;
	outline?: Cesium.Property;
	outlineColor?: Cesium.Property;
	outlineWidth?: Cesium.Property;
	subdivisions?: Cesium.Property;
	stackPartitions?: Cesium.Property;
	slicePartitions?: Cesium.Property;
}
export interface opt_AA5894D1007D32CB5133712D28869EBC
{
	dimensions?: Cesium.Property;
	show?: Cesium.Property;
	fill?: Cesium.Property;
	material?: Cesium.MaterialProperty;
	outline?: Cesium.Property;
	outlineColor?: Cesium.Property;
	outlineWidth?: Cesium.Property;
}
export interface opt_B8D03D985A09AF859D62809B0CE4ABF7
{
	globe: Cesium.Globe;
	imageryProviderViewModels?: Cesium.ProviderViewModel;
	selectedImageryProviderViewModel?: Cesium.ProviderViewModel;
	terrainProviderViewModels?: Cesium.ProviderViewModel;
	selectedTerrainProviderViewModel?: Cesium.ProviderViewModel;
}
export interface opt_C6B7855FB535816AD88063AEAE1FBE4F
{
	image?: Cesium.Property;
	show?: Cesium.Property;
	scale?: Cesium.Property;
	horizontalOrigin?: Cesium.Property;
	verticalOrigin?: Cesium.Property;
	eyeOffset?: Cesium.Property;
	pixelOffset?: Cesium.Property;
	rotation?: Cesium.Property;
	alignedAxis?: Cesium.Property;
	width?: Cesium.Property;
	height?: Cesium.Property;
	color?: Cesium.Property;
	scaleByDistance?: Cesium.Property;
	translucencyByDistance?: Cesium.Property;
	pixelOffsetScaleByDistance?: Cesium.Property;
	imageSubRegion?: Cesium.Property;
}
export interface opt_D1C4A6A76ACE9F7C1F49CDEC954DC769
{
	scene: Cesium.Scene;
	url?: string;
	key?: string;
	flightDuration?: number;
}
export interface opt_D22938CB03787B3154879C3A00690549
{
	toggled?: boolean;
	tooltip?: string;
}
export interface opt_F228E63F58053786929CCEF109E67598
{
	positions?: Cesium.Property;
	width?: Cesium.Property;
	cornerType?: Cesium.Property;
	height?: Cesium.Property;
	extrudedHeight?: Cesium.Property;
	show?: Cesium.Property;
	fill?: Cesium.Property;
	material?: Cesium.MaterialProperty;
	outline?: Cesium.Property;
	outlineColor?: Cesium.Property;
	outlineWidth?: Cesium.Property;
	granularity?: Cesium.Property;
}
export interface opt_F75B71504E45777C05D5E5664B176033
{
	sources?: Object;
	show?: boolean;
}
export interface opt_F9B28DCE03158A277CE9D5952DAE2590
{
	duration?: number;
	offset?: Cesium.HeadingPitchRange;
	complete?: any;
	cancel?: any;
	endTransform?: Cesium.Matrix4;
	maximumHeight?: number;
	easingFunction?: Cesium.EasingFunction|any;
}
export interface opt_FA81D2DDAF994D67CF254A412441B626
{
	leadTime?: Cesium.Property;
	trailTime?: Cesium.Property;
	show?: Cesium.Property;
	width?: Cesium.Property;
	material?: Cesium.MaterialProperty;
	resolution?: Cesium.Property;
}
export interface opt_FEB73A6723D60ECDAEBDB19D397FA2F2
{
	color?: Cesium.Property;
	pixelSize?: Cesium.Property;
	outlineColor?: Cesium.Property;
	outlineWidth?: Cesium.Property;
	show?: Cesium.Property;
	scaleByDistance?: Cesium.Property;
	translucencyByDistance?: Cesium.Property;
}
export interface opt_FF0ACAA9508983CF30A394C5B97F3262
{
	show?: boolean;
	textureUrl?: string;
	ellipsoid?: Cesium.Ellipsoid;
	onlySunLighting?: boolean;
}
export class OrientedBoundingBox 
{
	constructor(center? : Cesium.Cartesian3, halfAxes? : Cesium.Matrix3);
	//Members
	center: Cesium.Cartesian3
	halfAxes: Cesium.Matrix3

	//Methods
	static clone(box : Cesium.OrientedBoundingBox, result? : Cesium.OrientedBoundingBox) : Cesium.OrientedBoundingBox
	static equals(left : Cesium.OrientedBoundingBox, right : Cesium.OrientedBoundingBox) : boolean
	static fromRectangle(rectangle : Cesium.Rectangle, minimumHeight? : number, maximumHeight? : number, ellipsoid? : Cesium.Ellipsoid, result? : Cesium.OrientedBoundingBox) : Cesium.OrientedBoundingBox
	static intersectPlane(box : Cesium.OrientedBoundingBox, plane : Cesium.Plane) : Cesium.Intersect
	clone(result? : Cesium.OrientedBoundingBox) : Cesium.OrientedBoundingBox
	equals(right? : Cesium.OrientedBoundingBox) : boolean
	intersectPlane(plane : Cesium.Plane) : Cesium.Intersect
}
export class PathGraphics 
{
	constructor(options? : Cesium.opt_FA81D2DDAF994D67CF254A412441B626);
	//Members
	definitionChanged: Cesium.Event
	leadTime: Cesium.Property
	material: Cesium.MaterialProperty
	resolution: Cesium.Property
	show: Cesium.Property
	trailTime: Cesium.Property
	width: Cesium.Property

	//Methods
	clone(result? : Cesium.PathGraphics) : Cesium.PathGraphics
	merge(source : Cesium.PathGraphics) : void
}
export class PerspectiveFrustum 
{
	constructor();
	//Members
	aspectRatio: number
	far: number
	fov: number
	fovy: number
	infiniteProjectionMatrix: Cesium.Matrix4
	near: number
	projectionMatrix: Cesium.Matrix4

	//Methods
	clone(result? : Cesium.PerspectiveFrustum) : Cesium.PerspectiveFrustum
	computeCullingVolume(position : Cesium.Cartesian3, direction : Cesium.Cartesian3, up : Cesium.Cartesian3) : Cesium.CullingVolume
	equals(other? : Cesium.PerspectiveFrustum) : boolean
	getPixelSize(drawingBufferDimensions : Cesium.Cartesian2, distance? : number, result? : Cesium.Cartesian2) : Cesium.Cartesian2
}
export class Plane 
{
	constructor(normal : Cesium.Cartesian3, distance : number);
	//Members
	static ORIGIN_XY_PLANE: Cesium.Plane
	static ORIGIN_YZ_PLANE: Cesium.Plane
	static ORIGIN_ZX_PLANE: Cesium.Plane
	distance: number
	normal: Cesium.Cartesian3

	//Methods
	static fromCartesian4(coefficients : Cesium.Cartesian4, result? : Cesium.Plane) : Cesium.Plane
	static fromPointNormal(point : Cesium.Cartesian3, normal : Cesium.Cartesian3, result? : Cesium.Plane) : Cesium.Plane
	static getPointDistance(plane : Cesium.Plane, point : Cesium.Cartesian3) : number
}
export class PointGraphics 
{
	constructor(options? : Cesium.opt_FEB73A6723D60ECDAEBDB19D397FA2F2);
	//Members
	color: Cesium.Property
	definitionChanged: Cesium.Event
	outlineColor: Cesium.Property
	outlineWidth: Cesium.Property
	pixelSize: Cesium.Property
	scaleByDistance: Cesium.Property
	show: Cesium.Property
	translucencyByDistance: Cesium.Property

	//Methods
	clone(result? : Cesium.PointGraphics) : Cesium.PointGraphics
	merge(source : Cesium.PointGraphics) : void
}
export class PolygonGraphics 
{
	constructor(options? : Cesium.opt_6FF28F43D12D4CD466537F85AB5B36A5);
	//Members
	definitionChanged: Cesium.Event
	extrudedHeight: Cesium.Property
	fill: Cesium.Property
	granularity: Cesium.Property
	height: Cesium.Property
	hierarchy: Cesium.Property
	material: Cesium.MaterialProperty
	outline: Cesium.Property
	outlineColor: Cesium.Property
	outlineWidth: Cesium.Property
	perPositionHeight: Cesium.Property
	show: Cesium.Property
	stRotation: Cesium.Property

	//Methods
	clone(result? : Cesium.PolygonGraphics) : Cesium.PolygonGraphics
	merge(source : Cesium.PolygonGraphics) : void
}
export class PolylineGraphics 
{
	constructor(options? : Cesium.opt_5AB72C8DED52491679EF171E11D9F8C0);
	//Members
	definitionChanged: Cesium.Event
	followSurface: Cesium.Property
	granularity: Cesium.Property
	material: Cesium.MaterialProperty
	positions: Cesium.Property
	show: Cesium.Property
	width: Cesium.Property

	//Methods
	clone(result? : Cesium.PolylineGraphics) : Cesium.PolylineGraphics
	merge(source : Cesium.PolylineGraphics) : void
}
export class PolylineVolumeGraphics 
{
	constructor(options? : Cesium.opt_0778B2D6CBE512175B63FDA341FDDF36);
	//Members
	cornerType: Cesium.Property
	definitionChanged: Cesium.Event
	fill: Cesium.Property
	granularity: Cesium.Property
	material: Cesium.MaterialProperty
	outline: Cesium.Property
	outlineColor: Cesium.Property
	outlineWidth: Cesium.Property
	positions: Cesium.Property
	shape: Cesium.Property
	show: Cesium.Property

	//Methods
	clone(result? : Cesium.PolylineVolumeGraphics) : Cesium.PolylineVolumeGraphics
	merge(source : Cesium.PolylineVolumeGraphics) : void
}
export class PositionProperty 
{
	constructor();
	//Members
	definitionChanged: Cesium.Event
	equals: any
	isConstant: boolean
	referenceFrame: Cesium.ReferenceFrame

	//Methods
	getValue(time : Cesium.JulianDate, result? : Cesium.Cartesian3) : Cesium.Cartesian3
	getValueInReferenceFrame(time : Cesium.JulianDate, referenceFrame : Cesium.ReferenceFrame, result? : Cesium.Cartesian3) : Cesium.Cartesian3
}
export class PrimitiveCollection 
{
	constructor(options? : Cesium.opt_7003FA613CC6FB0E69B99AD8F9BB4964);
	//Members
	destroyPrimitives: boolean
	length: number
	show: boolean

	//Methods
	add(primitive : any) : Object
	contains(primitive? : any) : boolean
	destroy() : void
	get(index : number) : Object
	isDestroyed() : boolean
	lower(primitive? : any) : void
	lowerToBottom(primitive? : any) : void
	raise(primitive? : any) : void
	raiseToTop(primitive? : any) : void
	remove(primitive? : any) : boolean
	removeAll() : void
}
export class Promise<T>
{
constructor(doneHandler?:(obj:T)=>void,errorHandler?:(obj:any)=>void)
then(result:T);
}
export class Property 
{
	constructor();
	//Members
	definitionChanged: Cesium.Event
	isConstant: boolean

	//Methods
	equals(other? : Cesium.Property) : boolean
	getValue(time : Cesium.JulianDate, result? : any) : Object
}
export class ProviderViewModel 
{
	constructor(options : Cesium.opt_28FBAF68DC227F9F1CD834400AA86AD6);
	//Members
	creationCommand: Cesium.Command
	iconUrl: string
	name: string
	tooltip: string

	//Methods
}
export class Quaternion 
{
	constructor(x? : number, y? : number, z? : number, w? : number);
	//Members
	static IDENTITY: Cesium.Quaternion
	static packedInterpolationLength: number
	static packedLength: number
	static ZERO: Cesium.Quaternion
	w: number
	x: number
	y: number
	z: number

	//Methods
	static add(left : Cesium.Quaternion, right : Cesium.Quaternion, result : Cesium.Quaternion) : Cesium.Quaternion
	static clone(quaternion : Cesium.Quaternion, result? : Cesium.Quaternion) : Cesium.Quaternion
	static computeAngle(quaternion : Cesium.Quaternion) : number
	static computeAxis(quaternion : Cesium.Quaternion, result : Cesium.Cartesian3) : Cesium.Cartesian3
	static computeInnerQuadrangle(q0 : Cesium.Quaternion, q1 : Cesium.Quaternion, q2 : Cesium.Quaternion, result : Cesium.Quaternion) : Cesium.Quaternion
	static conjugate(quaternion : Cesium.Quaternion, result : Cesium.Quaternion) : Cesium.Quaternion
	static convertPackedArrayForInterpolation(packedArray : Array<number>, startingIndex? : number, lastIndex? : number, result? : Array<number>) : void
	static divideByScalar(quaternion : Cesium.Quaternion, scalar : number, result : Cesium.Quaternion) : Cesium.Quaternion
	static dot(left : Cesium.Quaternion, right : Cesium.Quaternion) : number
	static equals(left? : Cesium.Quaternion, right? : Cesium.Quaternion) : boolean
	static equalsEpsilon(left? : Cesium.Quaternion, right? : Cesium.Quaternion, epsilon? : number) : boolean
	static exp(cartesian : Cesium.Cartesian3, result : Cesium.Quaternion) : Cesium.Quaternion
	static fastSlerp(start : Cesium.Quaternion, end : Cesium.Quaternion, t : number, result : Cesium.Quaternion) : Cesium.Quaternion
	static fastSquad(q0 : Cesium.Quaternion, q1 : Cesium.Quaternion, s0 : Cesium.Quaternion, s1 : Cesium.Quaternion, t : number, result? : Cesium.Quaternion) : Cesium.Quaternion
	static fromAxisAngle(axis : Cesium.Cartesian3, angle : number, result? : Cesium.Quaternion) : Cesium.Quaternion
	static fromHeadingPitchRoll(heading : number, pitch : number, roll : number, result : Cesium.Quaternion) : Cesium.Quaternion
	static fromRotationMatrix(matrix : Cesium.Matrix3, result? : Cesium.Quaternion) : Cesium.Quaternion
	static inverse(quaternion : Cesium.Quaternion, result : Cesium.Quaternion) : Cesium.Quaternion
	static lerp(start : Cesium.Quaternion, end : Cesium.Quaternion, t : number, result : Cesium.Quaternion) : Cesium.Quaternion
	static log(quaternion : Cesium.Quaternion, result : Cesium.Cartesian3) : Cesium.Cartesian3
	static magnitude(quaternion : Cesium.Quaternion) : number
	static magnitudeSquared(quaternion : Cesium.Quaternion) : number
	static multiply(left : Cesium.Quaternion, right : Cesium.Quaternion, result : Cesium.Quaternion) : Cesium.Quaternion
	static multiplyByScalar(quaternion : Cesium.Quaternion, scalar : number, result : Cesium.Quaternion) : Cesium.Quaternion
	static negate(quaternion : Cesium.Quaternion, result : Cesium.Quaternion) : Cesium.Quaternion
	static normalize(quaternion : Cesium.Quaternion, result : Cesium.Quaternion) : Cesium.Quaternion
	static pack(value : Cesium.Quaternion, array : Array<number>, startingIndex? : number) : void
	static slerp(start : Cesium.Quaternion, end : Cesium.Quaternion, t : number, result : Cesium.Quaternion) : Cesium.Quaternion
	static squad(q0 : Cesium.Quaternion, q1 : Cesium.Quaternion, s0 : Cesium.Quaternion, s1 : Cesium.Quaternion, t : number, result : Cesium.Quaternion) : Cesium.Quaternion
	static subtract(left : Cesium.Quaternion, right : Cesium.Quaternion, result : Cesium.Quaternion) : Cesium.Quaternion
	static unpack(array : Array<number>, startingIndex? : number, result? : Cesium.Quaternion) : void
	static unpackInterpolationResult(array : Array<number>, sourceArray : Array<number>, startingIndex? : number, lastIndex? : number, result? : Cesium.Quaternion) : void
	clone(result? : Cesium.Quaternion) : Cesium.Quaternion
	equals(right? : Cesium.Quaternion) : boolean
	equalsEpsilon(right? : Cesium.Quaternion, epsilon? : number) : boolean
	toString() : string
}
export class Ray 
{
	constructor(origin? : Cesium.Cartesian3, direction? : Cesium.Cartesian3);
	//Members
	direction: Cesium.Cartesian3
	origin: Cesium.Cartesian3

	//Methods
	static getPoint(t : number, result? : Cesium.Cartesian3) : void
}
export class Rectangle 
{
	constructor(west? : number, south? : number, east? : number, north? : number);
	//Members
	static MAX_VALUE: Cesium.Rectangle
	static packedLength: number
	east: number
	height: number
	north: number
	south: number
	west: number
	width: number

	//Methods
	static center(rectangle : Cesium.Rectangle, result? : Cesium.Cartographic) : Cesium.Cartographic
	static clone(rectangle : Cesium.Rectangle, result? : Cesium.Rectangle) : Cesium.Rectangle
	static computeHeight(rectangle : Cesium.Rectangle) : number
	static computeWidth(rectangle : Cesium.Rectangle) : number
	static contains(rectangle : Cesium.Rectangle, cartographic : Cesium.Cartographic) : boolean
	static equals(left? : Cesium.Rectangle, right? : Cesium.Rectangle) : boolean
	static fromCartographicArray(cartographics : Cesium.Cartographic, result? : Cesium.Rectangle) : Cesium.Rectangle
	static fromDegrees(west? : number, south? : number, east? : number, north? : number, result? : Cesium.Rectangle) : Cesium.Rectangle
	static intersection(rectangle : Cesium.Rectangle, otherRectangle : Cesium.Rectangle, result? : Cesium.Rectangle) : Cesium.Rectangle
	static northeast(rectangle : Cesium.Rectangle, result? : Cesium.Cartographic) : Cesium.Cartographic
	static northwest(rectangle : Cesium.Rectangle, result? : Cesium.Cartographic) : Cesium.Cartographic
	static pack(value : Cesium.Rectangle, array : Array<number>, startingIndex? : number) : void
	static southeast(rectangle : Cesium.Rectangle, result? : Cesium.Cartographic) : Cesium.Cartographic
	static southwest(rectangle : Cesium.Rectangle, result? : Cesium.Cartographic) : Cesium.Cartographic
	static subsample(rectangle : Cesium.Rectangle, ellipsoid? : Cesium.Ellipsoid, surfaceHeight? : number, result? : Cesium.Cartesian3) : Cesium.Cartesian3
	static unpack(array : Array<number>, startingIndex? : number, result? : Cesium.Rectangle) : void
	static validate(rectangle : Cesium.Rectangle) : void
	clone(result? : Cesium.Rectangle) : Cesium.Rectangle
	equals(other? : Cesium.Rectangle) : boolean
	equalsEpsilon(other? : Cesium.Rectangle, epsilon? : number) : boolean
}
export class RectangleGraphics 
{
	constructor(options? : Cesium.opt_94492F5952F1E067243EBFC581E797E3);
	//Members
	closeBottom: Cesium.Property
	closeTop: Cesium.Property
	coordinates: Cesium.Property
	definitionChanged: Cesium.Event
	extrudedHeight: Cesium.Property
	fill: Cesium.Property
	granularity: Cesium.Property
	height: Cesium.Property
	material: Cesium.MaterialProperty
	outline: Cesium.Property
	outlineColor: Cesium.Property
	outlineWidth: Cesium.Property
	rotation: Cesium.Property
	show: Cesium.Property
	stRotation: Cesium.Property

	//Methods
	clone(result? : Cesium.RectangleGraphics) : Cesium.RectangleGraphics
	merge(source : Cesium.RectangleGraphics) : void
}
export class ReferenceFrame 
{
	constructor();
	//Members
	static FIXED: number
	static INERTIAL: number

	//Methods
}
export class Scene 
{
	constructor(options? : Cesium.opt_20D66C65BF742E28485BDA3EFE9DCA30);
	//Members
	backgroundColor: Cesium.Color
	camera: Cesium.Camera
	canvas: Element
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
	fxaa: boolean
	globe: Cesium.Globe
	id: string
	imageryLayers: Cesium.ImageryLayerCollection
	mapProjection: Cesium.MapProjection
	maximumAliasedLineWidth: number
	maximumCubeMapSize: number
	mode: Cesium.SceneMode
	moon: Cesium.Moon
	morphComplete: Cesium.Event
	morphStart: Cesium.Event
	morphTime: number
	orderIndependentTranslucency: boolean
	postRender: Cesium.Event
	preRender: Cesium.Event
	primitives: Cesium.PrimitiveCollection
	renderError: Cesium.Event
	rethrowRenderErrors: boolean
	scene3DOnly: boolean
	screenSpaceCameraController: Cesium.ScreenSpaceCameraController
	skyAtmosphere: Cesium.SkyAtmosphere
	skyBox: Cesium.SkyBox
	sun: Cesium.Sun
	sunBloom: boolean
	terrainProvider: Cesium.TerrainProvider

	//Methods
	completeMorph() : void
	destroy() : void
	drillPick(windowPosition : Cesium.Cartesian2, limit? : number) : Array<Object>
	isDestroyed() : boolean
	morphTo2D(duration? : number) : void
	morphTo3D(duration? : number) : void
	morphToColumbusView(duration? : number) : void
	pick(windowPosition : Cesium.Cartesian2) : Object
	pickPosition(windowPosition : Cesium.Cartesian2, result? : Cesium.Cartesian3) : Cesium.Cartesian3
}
export class SceneMode 
{
	constructor();
	//Members
	static COLUMBUS_VIEW: number
	static MORPHING: number
	static SCENE2D: number
	static SCENE3D: number

	//Methods
	static getMorphTime(value : Cesium.SceneMode) : number
}
export class SceneModePicker 
{
	constructor(container : Element|string, scene : Cesium.Scene, duration? : number);
	//Members
	container: Element
	viewModel: Cesium.SceneModePickerViewModel

	//Methods
	destroy() : void
	isDestroyed() : boolean
}
export class SceneModePickerViewModel 
{
	constructor(scene : Cesium.Scene, duration? : number);
	//Members
	dropDownVisible: boolean
	duration: number
	morphTo2D: Cesium.Command
	morphTo3D: Cesium.Command
	morphToColumbusView: Cesium.Command
	scene: Cesium.Scene
	sceneMode: Cesium.SceneMode
	selectedTooltip: string
	toggleDropDown: Cesium.Command
	tooltip2D: string
	tooltip3D: string
	tooltipColumbusView: string

	//Methods
	destroy() : void
	isDestroyed() : boolean
}
export class ScreenSpaceCameraController 
{
	constructor(scene : Cesium.Scene);
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
	lookEventTypes: Cesium.CameraEventType
	maximumMovementRatio: number
	maximumZoomDistance: number
	minimumCollisionTerrainHeight: number
	minimumPickingTerrainHeight: number
	minimumTrackBallHeight: number
	minimumZoomDistance: number
	rotateEventTypes: Cesium.CameraEventType
	tiltEventTypes: Cesium.CameraEventType
	translateEventTypes: Cesium.CameraEventType
	zoomEventTypes: Cesium.CameraEventType

	//Methods
	destroy() : void
	isDestroyed() : boolean
}
export class ScreenSpaceEventHandler 
{
	constructor(element? : HTMLCanvasElement);
	//Members

	//Methods
	destroy() : void
	getInputAction(type : number, modifier? : number) : void
	isDestroyed() : boolean
	removeInputAction(type : number, modifier? : number) : void
	setInputAction(action : (()=>void), type : number, modifier? : number) : void
}
export class SelectionIndicator 
{
	constructor(container : Element|string, scene : Cesium.Scene);
	//Members
	container: Element
	viewModel: Cesium.SelectionIndicatorViewModel

	//Methods
	destroy() : void
	isDestroyed() : boolean
}
export class SelectionIndicatorViewModel 
{
	constructor(scene : Cesium.Scene, selectionIndicatorElement : Element, container : Element);
	//Members
	computeScreenSpacePosition: any
	container: Element
	isVisible: boolean
	position: Cesium.Cartesian3
	scene: Cesium.Scene
	selectionIndicatorElement: Element
	showSelection: boolean

	//Methods
	animateAppear() : void
	animateDepart() : void
	update() : void
}
export class SkyAtmosphere 
{
	constructor(ellipsoid? : Cesium.Ellipsoid);
	//Members
	ellipsoid: Cesium.Ellipsoid
	show: boolean

	//Methods
	destroy() : void
	isDestroyed() : boolean
}
export class SkyBox 
{
	constructor(options? : Cesium.opt_F75B71504E45777C05D5E5664B176033);
	//Members
	show: boolean
	sources: Object

	//Methods
	destroy() : void
	isDestroyed() : boolean
	update() : void
}
export class Spherical 
{
	constructor(clock? : number, cone? : number, magnitude? : number);
	//Members

	//Methods
	static clone(spherical : Cesium.Spherical, result? : Cesium.Spherical) : void
	static equals(left : Cesium.Spherical, right : Cesium.Spherical) : void
	static equalsEpsilon(left : Cesium.Spherical, right : Cesium.Spherical, epsilon? : number) : void
	static fromCartesian3(cartesian3 : Cesium.Cartesian3, spherical? : Cesium.Spherical) : void
	static normalize(spherical : Cesium.Spherical, result? : Cesium.Spherical) : void
	clone(result? : Cesium.Spherical) : void
	equals(other : Cesium.Spherical) : void
	equalsEpsilon(other : Cesium.Spherical, epsilon : number) : void
	toString() : void
}
export class Sun 
{
	constructor();
	//Members
	glowFactor: number
	show: boolean

	//Methods
	destroy() : void
	isDestroyed() : boolean
}
export class TerrainData 
{
	constructor();
	//Members
	waterMask: Uint8Array|HTMLImageElement|HTMLCanvasElement

	//Methods
	createMesh(tilingScheme : Cesium.TilingScheme, x : number, y : number, level : number) : Cesium.TerrainMesh
	interpolateHeight(rectangle : Cesium.Rectangle, longitude : number, latitude : number) : number
	isChildAvailable(thisX : number, thisY : number, childX : number, childY : number) : boolean
	upsample(tilingScheme : Cesium.TilingScheme, thisX : number, thisY : number, thisLevel : number, descendantX : number, descendantY : number, descendantLevel : number) : Cesium.TerrainData
	wasCreatedByUpsampling() : boolean
}
export class TerrainMesh 
{
	constructor(center : Cesium.Cartesian3, vertices : Float32Array, indices : Uint16Array|Uint32Array, minimumHeight : number, maximumHeight : number, boundingSphere3D : Cesium.BoundingSphere, occludeePointInScaledSpace : Cesium.Cartesian3, vertexStride? : number, orientedBoundingBox? : Cesium.OrientedBoundingBox);
	//Members
	boundingSphere3D: Cesium.BoundingSphere
	center: Cesium.Cartesian3
	indices: Uint16Array|Uint32Array
	maximumHeight: number
	minimumHeight: number
	occludeePointInScaledSpace: Cesium.Cartesian3
	orientedBoundingBox: Cesium.OrientedBoundingBox
	stride: number
	vertices: Float32Array

	//Methods
}
export class TerrainProvider 
{
	constructor();
	//Members
	static heightmapTerrainQuality: any
	credit: Cesium.Credit
	errorEvent: Cesium.Event
	hasVertexNormals: boolean
	hasWaterMask: boolean
	ready: boolean
	tilingScheme: Cesium.TilingScheme

	//Methods
	static getEstimatedLevelZeroGeometricErrorForAHeightmap(ellipsoid : Cesium.Ellipsoid, tileImageWidth : number, numberOfTilesAtLevelZero : number) : number
	static getRegularGridIndices(width : number, height : number) : Uint16Array
	getLevelMaximumGeometricError(level : number) : number
	getTileDataAvailable(x : number, y : number, level : number) : boolean
	requestTileGeometry(x : number, y : number, level : number, throttleRequests? : boolean) : Cesium.TerrainData
}
export class TileDiscardPolicy 
{
	constructor();
	//Members

	//Methods
	isReady() : boolean
	shouldDiscardImage(image : HTMLImageElement|Promise<HTMLImageElement>) : Promise<boolean>
}
export class TilingScheme 
{
	constructor();
	//Members
	ellipsoid: Cesium.Ellipsoid
	projection: Cesium.MapProjection
	rectangle: Cesium.Rectangle

	//Methods
	getNumberOfXTilesAtLevel(level : number) : number
	getNumberOfYTilesAtLevel(level : number) : number
	positionToTileXY(position : Cesium.Cartographic, level : number, result? : Cesium.Cartesian2) : Cesium.Cartesian2
	rectangleToNativeRectangle(rectangle : Cesium.Rectangle, result? : Cesium.Rectangle) : Cesium.Rectangle
	tileXYToNativeRectangle(x : number, y : number, level : number, result? : any) : Cesium.Rectangle
	tileXYToRectangle(x : number, y : number, level : number, result? : any) : Cesium.Rectangle
}
export class TimeInterval 
{
	constructor(options? : Cesium.opt_8A5B308DE3606AB1648C8F225914595B);
	//Members
	static EMPTY: Cesium.TimeInterval
	data: Object
	isEmpty: boolean
	isStartIncluded: boolean
	isStopIncluded: boolean
	start: Cesium.JulianDate
	stop: Cesium.JulianDate

	//Methods
	static clone(timeInterval? : Cesium.TimeInterval, result? : Cesium.TimeInterval) : Cesium.TimeInterval
	static contains(timeInterval : Cesium.TimeInterval, julianDate : Cesium.JulianDate) : boolean
	static equals(left? : Cesium.TimeInterval, right? : Cesium.TimeInterval, dataComparer? : any) : boolean
	static equalsEpsilon(left? : Cesium.TimeInterval, right? : Cesium.TimeInterval, epsilon? : number, dataComparer? : any) : boolean
	static fromIso8601(options? : Cesium.opt_3DDB2410B4354AF0867610FF724ECDAB, result? : Cesium.TimeInterval) : Cesium.TimeInterval
	static intersect(left : Cesium.TimeInterval, right? : Cesium.TimeInterval, result? : Cesium.TimeInterval, mergeCallback? : any) : Cesium.TimeInterval
	static toIso8601(timeInterval : Cesium.TimeInterval, precision? : number) : string
	clone(result? : Cesium.TimeInterval) : Cesium.TimeInterval
	equals(right? : Cesium.TimeInterval, dataComparer? : any) : boolean
	equalsEpsilon(right? : Cesium.TimeInterval, epsilon? : number, dataComparer? : any) : boolean
	toString() : string
}
export class TimeIntervalCollection 
{
	constructor(intervals? : Cesium.TimeInterval);
	//Members
	changedEvent: Cesium.Event
	isEmpty: boolean
	isStartIncluded: boolean
	isStopIncluded: boolean
	length: number
	start: Cesium.JulianDate
	stop: Cesium.JulianDate

	//Methods
	addInterval(interval : Cesium.TimeInterval, dataComparer? : any) : void
	contains(julianDate : Cesium.JulianDate) : boolean
	equals(right? : Cesium.TimeIntervalCollection, dataComparer? : any) : boolean
	findDataForIntervalContainingDate(date : Cesium.JulianDate) : void
	findInterval(options? : Cesium.opt_668EAE9A6FF160B8B1DF40D19C65BD53) : void
	findIntervalContainingDate(date : Cesium.JulianDate) : void
	get(index : number) : Cesium.TimeInterval
	indexOf(date : Cesium.JulianDate) : void
	intersect(other : Cesium.TimeIntervalCollection, dataComparer? : any, mergeCallback? : any) : void
	removeAll() : void
	removeInterval(interval : Cesium.TimeInterval) : void
}
export class Timeline 
{
	constructor(container : Element, clock : Cesium.Clock);
	//Members
	container: Element

	//Methods
	destroy() : void
	isDestroyed() : boolean
	resize() : void
	zoomTo(startTime : Cesium.JulianDate, stopTime : Cesium.JulianDate) : void
}
export class TimeStandard 
{
	constructor();
	//Members
	static TAI: any
	static UTC: any

	//Methods
}
export class ToggleButtonViewModel 
{
	constructor(command : Cesium.Command, options? : Cesium.opt_D22938CB03787B3154879C3A00690549);
	//Members
	command: Cesium.Command
	toggled: boolean
	tooltip: string

	//Methods
}
export class Viewer 
{
	constructor(container : Element|string, options? : Cesium.opt_94B56FE6C322670F291E5B04D16C46EB);
	//Members
	allowDataSourcesToSuspendAnimation: boolean
	animation: Cesium.Animation
	baseLayerPicker: Cesium.BaseLayerPicker
	bottomContainer: Element
	camera: Cesium.Camera
	canvas: HTMLCanvasElement
	cesiumLogo: Element
	cesiumWidget: Cesium.CesiumWidget
	clock: Cesium.Clock
	container: Element
	dataSourceDisplay: Cesium.DataSourceDisplay
	dataSources: Cesium.DataSourceCollection
	entities: Cesium.EntityCollection
	fullscreenButton: Cesium.FullscreenButton
	geocoder: Cesium.Geocoder
	homeButton: Cesium.HomeButton
	imageryLayers: Cesium.ImageryLayerCollection
	infoBox: Cesium.InfoBox
	resolutionScale: number
	scene: Cesium.Scene
	sceneModePicker: Cesium.SceneModePicker
	screenSpaceEventHandler: Cesium.ScreenSpaceEventHandler
	selectedEntity: Cesium.Entity
	selectionIndicator: Cesium.SelectionIndicator
	targetFrameRate: number
	terrainProvider: Cesium.TerrainProvider
	timeline: Cesium.Timeline
	trackedEntity: Cesium.Entity
	useDefaultRenderLoop: boolean

	//Methods
	destroy() : void
	extend(mixin : any, options : any) : void
	flyTo(target : Cesium.Entity|Cesium.EntityCollection|Cesium.DataSource, options? : Cesium.opt_0954AF407EE73C7A8721A57E6F269CA6) : Promise<boolean>
	forceResize() : void
	isDestroyed() : boolean
	render() : void
	resize() : void
	zoomTo(target : Cesium.Entity|Cesium.EntityCollection|Cesium.DataSource, offset? : Cesium.HeadingPitchRange) : Promise<boolean>
}
export class WallGraphics 
{
	constructor(options? : Cesium.opt_383C9CA7D89889B284E7519E995E701B);
	//Members
	definitionChanged: Cesium.Event
	fill: Cesium.Property
	granularity: Cesium.Property
	material: Cesium.MaterialProperty
	maximumHeights: Cesium.Property
	minimumHeights: Cesium.Property
	outline: Cesium.Property
	outlineColor: Cesium.Property
	outlineWidth: Cesium.Property
	positions: Cesium.Property
	show: Cesium.Property

	//Methods
	clone(result? : Cesium.WallGraphics) : Cesium.WallGraphics
	merge(source : Cesium.WallGraphics) : void
}
}
 export = Cesium;
 }
