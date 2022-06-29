var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i246 = root || request.c( 'UnityEngine.JointSpring' )
  var i247 = data
  i246.spring = i247[0]
  i246.damper = i247[1]
  i246.targetPosition = i247[2]
  return i246
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i248 = root || request.c( 'UnityEngine.JointMotor' )
  var i249 = data
  i248.m_TargetVelocity = i249[0]
  i248.m_Force = i249[1]
  i248.m_FreeSpin = i249[2]
  return i248
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i250 = root || request.c( 'UnityEngine.JointLimits' )
  var i251 = data
  i250.m_Min = i251[0]
  i250.m_Max = i251[1]
  i250.m_Bounciness = i251[2]
  i250.m_BounceMinVelocity = i251[3]
  i250.m_ContactDistance = i251[4]
  i250.minBounce = i251[5]
  i250.maxBounce = i251[6]
  return i250
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i252 = root || request.c( 'UnityEngine.JointDrive' )
  var i253 = data
  i252.m_PositionSpring = i253[0]
  i252.m_PositionDamper = i253[1]
  i252.m_MaximumForce = i253[2]
  return i252
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i254 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i255 = data
  i254.m_Spring = i255[0]
  i254.m_Damper = i255[1]
  return i254
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i256 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i257 = data
  i256.m_Limit = i257[0]
  i256.m_Bounciness = i257[1]
  i256.m_ContactDistance = i257[2]
  return i256
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i258 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i259 = data
  i258.m_ExtremumSlip = i259[0]
  i258.m_ExtremumValue = i259[1]
  i258.m_AsymptoteSlip = i259[2]
  i258.m_AsymptoteValue = i259[3]
  i258.m_Stiffness = i259[4]
  return i258
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i260 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i261 = data
  i260.m_LowerAngle = i261[0]
  i260.m_UpperAngle = i261[1]
  return i260
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i262 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i263 = data
  i262.m_MotorSpeed = i263[0]
  i262.m_MaximumMotorTorque = i263[1]
  return i262
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i264 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i265 = data
  i264.m_DampingRatio = i265[0]
  i264.m_Frequency = i265[1]
  i264.m_Angle = i265[2]
  return i264
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i266 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i267 = data
  i266.m_LowerTranslation = i267[0]
  i266.m_UpperTranslation = i267[1]
  return i266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i268 = root || new pc.UnityMaterial()
  var i269 = data
  i268.name = i269[0]
  request.r(i269[1], i269[2], 0, i268, 'shader')
  i268.renderQueue = i269[3]
  i268.enableInstancing = !!i269[4]
  var i271 = i269[5]
  var i270 = []
  for(var i = 0; i < i271.length; i += 1) {
    i270.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i271[i + 0]) );
  }
  i268.floatParameters = i270
  var i273 = i269[6]
  var i272 = []
  for(var i = 0; i < i273.length; i += 1) {
    i272.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i273[i + 0]) );
  }
  i268.colorParameters = i272
  var i275 = i269[7]
  var i274 = []
  for(var i = 0; i < i275.length; i += 1) {
    i274.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i275[i + 0]) );
  }
  i268.vectorParameters = i274
  var i277 = i269[8]
  var i276 = []
  for(var i = 0; i < i277.length; i += 1) {
    i276.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i277[i + 0]) );
  }
  i268.textureParameters = i276
  var i279 = i269[9]
  var i278 = []
  for(var i = 0; i < i279.length; i += 1) {
    i278.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i279[i + 0]) );
  }
  i268.materialFlags = i278
  return i268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i283 = data
  i282.name = i283[0]
  i282.value = i283[1]
  return i282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i287 = data
  i286.name = i287[0]
  i286.value = new pc.Color(i287[1], i287[2], i287[3], i287[4])
  return i286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i291 = data
  i290.name = i291[0]
  i290.value = new pc.Vec4( i291[1], i291[2], i291[3], i291[4] )
  return i290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i295 = data
  i294.name = i295[0]
  request.r(i295[1], i295[2], 0, i294, 'value')
  return i294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i299 = data
  i298.name = i299[0]
  i298.enabled = !!i299[1]
  return i298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i301 = data
  i300.position = new pc.Vec3( i301[0], i301[1], i301[2] )
  i300.scale = new pc.Vec3( i301[3], i301[4], i301[5] )
  i300.rotation = new pc.Quat(i301[6], i301[7], i301[8], i301[9])
  return i300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i303 = data
  request.r(i303[0], i303[1], 0, i302, 'sharedMesh')
  return i302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i305 = data
  i304.center = new pc.Vec3( i305[0], i305[1], i305[2] )
  i304.radius = i305[3]
  i304.height = i305[4]
  i304.direction = i305[5]
  i304.enabled = !!i305[6]
  i304.isTrigger = !!i305[7]
  request.r(i305[8], i305[9], 0, i304, 'material')
  return i304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i307 = data
  request.r(i307[0], i307[1], 0, i306, 'additionalVertexStreams')
  i306.enabled = !!i307[2]
  request.r(i307[3], i307[4], 0, i306, 'sharedMaterial')
  var i309 = i307[5]
  var i308 = []
  for(var i = 0; i < i309.length; i += 2) {
  request.r(i309[i + 0], i309[i + 1], 2, i308, '')
  }
  i306.sharedMaterials = i308
  i306.receiveShadows = !!i307[6]
  i306.shadowCastingMode = i307[7]
  i306.sortingLayerID = i307[8]
  i306.sortingOrder = i307[9]
  i306.lightmapIndex = i307[10]
  i306.lightmapSceneIndex = i307[11]
  i306.lightmapScaleOffset = new pc.Vec4( i307[12], i307[13], i307[14], i307[15] )
  i306.lightProbeUsage = i307[16]
  i306.reflectionProbeUsage = i307[17]
  return i306
}

Deserializers["Obstacle"] = function (request, data, root) {
  var i312 = root || request.c( 'Obstacle' )
  var i313 = data
  return i312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i315 = data
  i314.mass = i315[0]
  i314.drag = i315[1]
  i314.angularDrag = i315[2]
  i314.useGravity = !!i315[3]
  i314.isKinematic = !!i315[4]
  i314.constraints = i315[5]
  i314.maxAngularVelocity = i315[6]
  i314.collisionDetectionMode = i315[7]
  i314.interpolation = i315[8]
  return i314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i317 = data
  i316.center = new pc.Vec3( i317[0], i317[1], i317[2] )
  i316.size = new pc.Vec3( i317[3], i317[4], i317[5] )
  i316.enabled = !!i317[6]
  i316.isTrigger = !!i317[7]
  request.r(i317[8], i317[9], 0, i316, 'material')
  return i316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i319 = data
  i318.name = i319[0]
  i318.tag = i319[1]
  i318.enabled = !!i319[2]
  i318.isStatic = !!i319[3]
  i318.layer = i319[4]
  return i318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i321 = data
  i320.name = i321[0]
  i320.halfPrecision = !!i321[1]
  i320.vertexCount = i321[2]
  i320.aabb = i321[3]
  var i323 = i321[4]
  var i322 = []
  for(var i = 0; i < i323.length; i += 1) {
    i322.push( !!i323[i + 0] );
  }
  i320.streams = i322
  i320.vertices = i321[5]
  var i325 = i321[6]
  var i324 = []
  for(var i = 0; i < i325.length; i += 1) {
    i324.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i325[i + 0]) );
  }
  i320.subMeshes = i324
  var i327 = i321[7]
  var i326 = []
  for(var i = 0; i < i327.length; i += 16) {
    i326.push( new pc.Mat4().setData(i327[i + 0], i327[i + 1], i327[i + 2], i327[i + 3],  i327[i + 4], i327[i + 5], i327[i + 6], i327[i + 7],  i327[i + 8], i327[i + 9], i327[i + 10], i327[i + 11],  i327[i + 12], i327[i + 13], i327[i + 14], i327[i + 15]) );
  }
  i320.bindposes = i326
  var i329 = i321[8]
  var i328 = []
  for(var i = 0; i < i329.length; i += 1) {
    i328.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i329[i + 0]) );
  }
  i320.blendShapes = i328
  return i320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i335 = data
  i334.triangles = i335[0]
  return i334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i341 = data
  i340.name = i341[0]
  var i343 = i341[1]
  var i342 = []
  for(var i = 0; i < i343.length; i += 1) {
    i342.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i343[i + 0]) );
  }
  i340.frames = i342
  return i340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i345 = data
  i344.enabled = !!i345[0]
  i344.isTrigger = !!i345[1]
  request.r(i345[2], i345[3], 0, i344, 'material')
  request.r(i345[4], i345[5], 0, i344, 'sharedMesh')
  i344.convex = !!i345[6]
  return i344
}

Deserializers["ZeroLayer"] = function (request, data, root) {
  var i346 = root || request.c( 'ZeroLayer' )
  var i347 = data
  request.r(i347[0], i347[1], 0, i346, 'otherCube')
  return i346
}

Deserializers["Grid"] = function (request, data, root) {
  var i348 = root || request.c( 'Grid' )
  var i349 = data
  request.r(i349[0], i349[1], 0, i348, 'cellPrefab')
  i348.numberOfCells = i349[2]
  i348.cellsPerRow = i349[3]
  i348.startID = i349[4]
  i348.targetID = i349[5]
  i348.isCalculating = !!i349[6]
  return i348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i351 = data
  i350.textureMode = i351[0]
  i350.alignment = i351[1]
  i350.widthCurve = new pc.AnimationCurve( { keys_flow: i351[2] } )
  i350.colorGradient = i351[3] ? new pc.ColorGradient(i351[3][0], i351[3][1], i351[3][2]) : null
  var i353 = i351[4]
  var i352 = []
  for(var i = 0; i < i353.length; i += 3) {
    i352.push( new pc.Vec3( i353[i + 0], i353[i + 1], i353[i + 2] ) );
  }
  i350.positions = i352
  i350.positionCount = i351[5]
  i350.widthMultiplier = i351[6]
  i350.startWidth = i351[7]
  i350.endWidth = i351[8]
  i350.numCornerVertices = i351[9]
  i350.numCapVertices = i351[10]
  i350.useWorldSpace = !!i351[11]
  i350.loop = !!i351[12]
  i350.startColor = new pc.Color(i351[13], i351[14], i351[15], i351[16])
  i350.endColor = new pc.Color(i351[17], i351[18], i351[19], i351[20])
  i350.generateLightingData = !!i351[21]
  i350.enabled = !!i351[22]
  request.r(i351[23], i351[24], 0, i350, 'sharedMaterial')
  var i355 = i351[25]
  var i354 = []
  for(var i = 0; i < i355.length; i += 2) {
  request.r(i355[i + 0], i355[i + 1], 2, i354, '')
  }
  i350.sharedMaterials = i354
  i350.receiveShadows = !!i351[26]
  i350.shadowCastingMode = i351[27]
  i350.sortingLayerID = i351[28]
  i350.sortingOrder = i351[29]
  i350.lightmapIndex = i351[30]
  i350.lightmapSceneIndex = i351[31]
  i350.lightmapScaleOffset = new pc.Vec4( i351[32], i351[33], i351[34], i351[35] )
  i350.lightProbeUsage = i351[36]
  i350.reflectionProbeUsage = i351[37]
  return i350
}

Deserializers["Cell"] = function (request, data, root) {
  var i358 = root || request.c( 'Cell' )
  var i359 = data
  i358.id = i359[0]
  i358.isValid = !!i359[1]
  i358.onOpenList = !!i359[2]
  i358.onClosedList = !!i359[3]
  request.r(i359[4], i359[5], 0, i358, 'parent')
  i358.F = i359[6]
  i358.G = i359[7]
  i358.H = i359[8]
  request.r(i359[9], i359[10], 0, i358, 'displayF')
  request.r(i359[11], i359[12], 0, i358, 'displayG')
  request.r(i359[13], i359[14], 0, i358, 'displayH')
  request.r(i359[15], i359[16], 0, i358, 'displayID')
  request.r(i359[17], i359[18], 0, i358, 'indicator')
  request.r(i359[19], i359[20], 0, i358, 'indicatorDisplay')
  request.r(i359[21], i359[22], 0, i358, 'materialInvalid')
  request.r(i359[23], i359[24], 0, i358, 'materialStart')
  request.r(i359[25], i359[26], 0, i358, 'materialTarget')
  request.r(i359[27], i359[28], 0, i358, 'materialOnClosedList')
  request.r(i359[29], i359[30], 0, i358, 'materialOnOpenList')
  return i358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TextMesh"] = function (request, data, root) {
  var i360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TextMesh' )
  var i361 = data
  i360.m_Alignment = i361[0]
  i360.m_Anchor = i361[1]
  i360.m_CharacterSize = i361[2]
  request.r(i361[3], i361[4], 0, i360, 'm_Font')
  i360.m_FontSize = i361[5]
  i360.m_FontStyle = i361[6]
  i360.m_LineSpacing = i361[7]
  i360.m_OffsetZ = i361[8]
  i360.m_RichText = !!i361[9]
  i360.m_TabSize = i361[10]
  i360.m_Text = i361[11]
  return i360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i363 = data
  i362.name = i363[0]
  i362.width = i363[1]
  i362.height = i363[2]
  i362.mipmapCount = i363[3]
  i362.anisoLevel = i363[4]
  i362.filterMode = i363[5]
  i362.hdr = !!i363[6]
  i362.format = i363[7]
  i362.wrapMode = i363[8]
  i362.alphaIsTransparency = !!i363[9]
  i362.alphaSource = i363[10]
  return i362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i365 = data
  i364.name = i365[0]
  i364.atlasId = i365[1]
  i364.mipmapCount = i365[2]
  i364.hdr = !!i365[3]
  i364.size = i365[4]
  i364.anisoLevel = i365[5]
  i364.filterMode = i365[6]
  i364.wrapMode = i365[7]
  var i367 = i365[8]
  var i366 = []
  for(var i = 0; i < i367.length; i += 4) {
    i366.push( UnityEngine.Rect.MinMaxRect(i367[i + 0], i367[i + 1], i367[i + 2], i367[i + 3]) );
  }
  i364.rects = i366
  return i364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i371 = data
  i370.name = i371[0]
  i370.index = i371[1]
  i370.startup = !!i371[2]
  return i370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i373 = data
  i372.enabled = !!i373[0]
  i372.aspect = i373[1]
  i372.orthographic = !!i373[2]
  i372.orthographicSize = i373[3]
  i372.backgroundColor = new pc.Color(i373[4], i373[5], i373[6], i373[7])
  i372.nearClipPlane = i373[8]
  i372.farClipPlane = i373[9]
  i372.fieldOfView = i373[10]
  i372.depth = i373[11]
  i372.clearFlags = i373[12]
  i372.cullingMask = i373[13]
  i372.rect = i373[14]
  request.r(i373[15], i373[16], 0, i372, 'targetTexture')
  return i372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i375 = data
  i374.enabled = !!i375[0]
  i374.type = i375[1]
  i374.color = new pc.Color(i375[2], i375[3], i375[4], i375[5])
  i374.cullingMask = i375[6]
  i374.intensity = i375[7]
  i374.range = i375[8]
  i374.spotAngle = i375[9]
  i374.shadows = i375[10]
  i374.shadowNormalBias = i375[11]
  i374.shadowBias = i375[12]
  i374.shadowStrength = i375[13]
  i374.lightmapBakeType = i375[14]
  i374.renderMode = i375[15]
  request.r(i375[16], i375[17], 0, i374, 'cookie')
  i374.cookieSize = i375[18]
  return i374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i377 = data
  i376.ambientIntensity = i377[0]
  i376.reflectionIntensity = i377[1]
  i376.ambientMode = i377[2]
  i376.ambientLight = new pc.Color(i377[3], i377[4], i377[5], i377[6])
  i376.ambientSkyColor = new pc.Color(i377[7], i377[8], i377[9], i377[10])
  i376.ambientGroundColor = new pc.Color(i377[11], i377[12], i377[13], i377[14])
  i376.ambientEquatorColor = new pc.Color(i377[15], i377[16], i377[17], i377[18])
  i376.fogColor = new pc.Color(i377[19], i377[20], i377[21], i377[22])
  i376.fogEndDistance = i377[23]
  i376.fogStartDistance = i377[24]
  i376.fogDensity = i377[25]
  i376.fog = !!i377[26]
  request.r(i377[27], i377[28], 0, i376, 'skybox')
  i376.fogMode = i377[29]
  var i379 = i377[30]
  var i378 = []
  for(var i = 0; i < i379.length; i += 1) {
    i378.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i379[i + 0]) );
  }
  i376.lightmaps = i378
  i376.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i377[31], i376.lightProbes)
  i376.lightmapsMode = i377[32]
  i376.environmentLightingMode = i377[33]
  i376.ambientProbe = new pc.SphericalHarmonicsL2(i377[34])
  request.r(i377[35], i377[36], 0, i376, 'customReflection')
  request.r(i377[37], i377[38], 0, i376, 'defaultReflection')
  i376.defaultReflectionMode = i377[39]
  i376.defaultReflectionResolution = i377[40]
  i376.sunLightObjectId = i377[41]
  i376.pixelLightCount = i377[42]
  i376.defaultReflectionHDR = !!i377[43]
  i376.hasLightDataAsset = !!i377[44]
  i376.hasManualGenerate = !!i377[45]
  return i376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i383 = data
  request.r(i383[0], i383[1], 0, i382, 'lightmapColor')
  request.r(i383[2], i383[3], 0, i382, 'lightmapDirection')
  return i382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i384 = root || new UnityEngine.LightProbes()
  var i385 = data
  return i384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i391 = data
  var i393 = i391[0]
  var i392 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i393.length; i += 1) {
    i392.add(i393[i + 0]);
  }
  i390.invalidShaderVariants = i392
  i390.name = i391[1]
  i390.guid = i391[2]
  var i395 = i391[3]
  var i394 = []
  for(var i = 0; i < i395.length; i += 1) {
    i394.push( i395[i + 0] );
  }
  i390.shaderDefinedKeywords = i394
  var i397 = i391[4]
  var i396 = []
  for(var i = 0; i < i397.length; i += 1) {
    i396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i397[i + 0]) );
  }
  i390.passes = i396
  var i399 = i391[5]
  var i398 = []
  for(var i = 0; i < i399.length; i += 1) {
    i398.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i399[i + 0]) );
  }
  i390.defaultParameterValues = i398
  request.r(i391[6], i391[7], 0, i390, 'unityFallbackShader')
  i390.readDepth = !!i391[8]
  i390.isCreatedByShaderGraph = !!i391[9]
  return i390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i406 = root || new pc.UnityShaderPass()
  var i407 = data
  i406.passType = i407[0]
  i406.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i407[1], i406.zTest)
  i406.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i407[2], i406.zWrite)
  i406.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i407[3], i406.culling)
  i406.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i407[4], i406.blending)
  i406.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i407[5], i406.alphaBlending)
  i406.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i407[6], i406.colorWriteMask)
  i406.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i407[7], i406.offsetUnits)
  i406.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i407[8], i406.offsetFactor)
  i406.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i407[9], i406.stencilRef)
  i406.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i407[10], i406.stencilReadMask)
  i406.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i407[11], i406.stencilWriteMask)
  i406.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i407[12], i406.stencilOp)
  i406.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i407[13], i406.stencilOpFront)
  i406.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i407[14], i406.stencilOpBack)
  var i409 = i407[15]
  var i408 = []
  for(var i = 0; i < i409.length; i += 1) {
    i408.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i409[i + 0]) );
  }
  i406.tags = i408
  var i411 = i407[16]
  var i410 = []
  for(var i = 0; i < i411.length; i += 1) {
    i410.push( i411[i + 0] );
  }
  i406.passDefinedKeywords = i410
  var i413 = i407[17]
  var i412 = []
  for(var i = 0; i < i413.length; i += 1) {
    i412.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i413[i + 0]) );
  }
  i406.variants = i412
  i406.readDepth = !!i407[18]
  return i406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i415 = data
  i414.val = i415[0]
  i414.name = i415[1]
  return i414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i417 = data
  i416.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i417[0], i416.src)
  i416.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i417[1], i416.dst)
  i416.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i417[2], i416.op)
  return i416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i419 = data
  i418.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i419[0], i418.pass)
  i418.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i419[1], i418.fail)
  i418.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i419[2], i418.zFail)
  i418.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i419[3], i418.comp)
  return i418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i423 = data
  i422.name = i423[0]
  i422.value = i423[1]
  return i422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i427 = data
  var i429 = i427[0]
  var i428 = []
  for(var i = 0; i < i429.length; i += 1) {
    i428.push( i429[i + 0] );
  }
  i426.keywords = i428
  i426.vertexProgram = i427[1]
  i426.fragmentProgram = i427[2]
  i426.readDepth = !!i427[3]
  return i426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i433 = data
  i432.name = i433[0]
  i432.type = i433[1]
  i432.value = new pc.Vec4( i433[2], i433[3], i433[4], i433[5] )
  i432.textureValue = i433[6]
  return i432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i435 = data
  var i437 = i435[0]
  var i436 = []
  for(var i = 0; i < i437.length; i += 1) {
    i436.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i437[i + 0]) );
  }
  i434.files = i436
  i434.componentToPrefabIds = i435[1]
  return i434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i441 = data
  i440.path = i441[0]
  request.r(i441[1], i441[2], 0, i440, 'unityObject')
  return i440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i443 = data
  var i445 = i443[0]
  var i444 = []
  for(var i = 0; i < i445.length; i += 1) {
    i444.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i445[i + 0]) );
  }
  i442.scriptsExecutionOrder = i444
  var i447 = i443[1]
  var i446 = []
  for(var i = 0; i < i447.length; i += 1) {
    i446.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i447[i + 0]) );
  }
  i442.sortingLayers = i446
  var i449 = i443[2]
  var i448 = []
  for(var i = 0; i < i449.length; i += 1) {
    i448.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i449[i + 0]) );
  }
  i442.cullingLayers = i448
  i442.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i443[3], i442.timeSettings)
  i442.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i443[4], i442.physicsSettings)
  i442.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i443[5], i442.physics2DSettings)
  i442.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i443[6], i442.qualitySettings)
  i442.removeShadows = !!i443[7]
  i442.autoInstantiatePrefabs = !!i443[8]
  i442.enableAutoInstancing = !!i443[9]
  i442.lightmapEncodingQuality = i443[10]
  i442.desiredColorSpace = i443[11]
  return i442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i453 = data
  i452.name = i453[0]
  i452.value = i453[1]
  return i452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i457 = data
  i456.id = i457[0]
  i456.name = i457[1]
  i456.value = i457[2]
  return i456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i461 = data
  i460.id = i461[0]
  i460.name = i461[1]
  return i460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i463 = data
  i462.fixedDeltaTime = i463[0]
  i462.maximumDeltaTime = i463[1]
  i462.timeScale = i463[2]
  i462.maximumParticleTimestep = i463[3]
  return i462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i465 = data
  i464.gravity = new pc.Vec3( i465[0], i465[1], i465[2] )
  i464.defaultSolverIterations = i465[3]
  i464.bounceThreshold = i465[4]
  i464.autoSyncTransforms = !!i465[5]
  i464.autoSimulation = !!i465[6]
  var i467 = i465[7]
  var i466 = []
  for(var i = 0; i < i467.length; i += 1) {
    i466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i467[i + 0]) );
  }
  i464.collisionMatrix = i466
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i471 = data
  i470.enabled = !!i471[0]
  i470.layerId = i471[1]
  i470.otherLayerId = i471[2]
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i473 = data
  request.r(i473[0], i473[1], 0, i472, 'material')
  i472.gravity = new pc.Vec2( i473[2], i473[3] )
  i472.positionIterations = i473[4]
  i472.velocityIterations = i473[5]
  i472.velocityThreshold = i473[6]
  i472.maxLinearCorrection = i473[7]
  i472.maxAngularCorrection = i473[8]
  i472.maxTranslationSpeed = i473[9]
  i472.maxRotationSpeed = i473[10]
  i472.timeToSleep = i473[11]
  i472.linearSleepTolerance = i473[12]
  i472.angularSleepTolerance = i473[13]
  i472.defaultContactOffset = i473[14]
  i472.autoSimulation = !!i473[15]
  i472.queriesHitTriggers = !!i473[16]
  i472.queriesStartInColliders = !!i473[17]
  i472.callbacksOnDisable = !!i473[18]
  i472.reuseCollisionCallbacks = !!i473[19]
  i472.autoSyncTransforms = !!i473[20]
  var i475 = i473[21]
  var i474 = []
  for(var i = 0; i < i475.length; i += 1) {
    i474.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i475[i + 0]) );
  }
  i472.collisionMatrix = i474
  return i472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i479 = data
  i478.enabled = !!i479[0]
  i478.layerId = i479[1]
  i478.otherLayerId = i479[2]
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i481 = data
  var i483 = i481[0]
  var i482 = []
  for(var i = 0; i < i483.length; i += 1) {
    i482.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i483[i + 0]) );
  }
  i480.qualityLevels = i482
  var i485 = i481[1]
  var i484 = []
  for(var i = 0; i < i485.length; i += 1) {
    i484.push( i485[i + 0] );
  }
  i480.names = i484
  i480.shadows = i481[2]
  i480.anisotropicFiltering = i481[3]
  i480.antiAliasing = i481[4]
  i480.lodBias = i481[5]
  i480.shadowCascades = i481[6]
  i480.shadowDistance = i481[7]
  i480.shadowmaskMode = i481[8]
  i480.shadowProjection = i481[9]
  i480.shadowResolution = i481[10]
  i480.softParticles = !!i481[11]
  i480.softVegetation = !!i481[12]
  i480.activeColorSpace = i481[13]
  i480.desiredColorSpace = i481[14]
  i480.masterTextureLimit = i481[15]
  i480.maxQueuedFrames = i481[16]
  i480.particleRaycastBudget = i481[17]
  i480.pixelLightCount = i481[18]
  i480.realtimeReflectionProbes = !!i481[19]
  i480.shadowCascade2Split = i481[20]
  i480.shadowCascade4Split = new pc.Vec3( i481[21], i481[22], i481[23] )
  i480.streamingMipmapsActive = !!i481[24]
  i480.vSyncCount = i481[25]
  i480.asyncUploadBufferSize = i481[26]
  i480.asyncUploadTimeSlice = i481[27]
  i480.billboardsFaceCameraPosition = !!i481[28]
  i480.shadowNearPlaneOffset = i481[29]
  i480.streamingMipmapsMemoryBudget = i481[30]
  i480.maximumLODLevel = i481[31]
  i480.streamingMipmapsAddAllCameras = !!i481[32]
  i480.streamingMipmapsMaxLevelReduction = i481[33]
  i480.streamingMipmapsRenderersPerFrame = i481[34]
  i480.resolutionScalingFixedDPIFactor = i481[35]
  i480.streamingMipmapsMaxFileIORequests = i481[36]
  i480.currentQualityLevel = i481[37]
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i491 = data
  i490.weight = i491[0]
  i490.vertices = i491[1]
  i490.normals = i491[2]
  i490.tangents = i491[3]
  return i490
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.TextMesh":{"m_Alignment":0,"m_Anchor":1,"m_CharacterSize":2,"m_Font":3,"m_FontSize":5,"m_FontStyle":6,"m_LineSpacing":7,"m_OffsetZ":8,"m_RichText":9,"m_TabSize":10,"m_Text":11},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"customReflection":35,"defaultReflection":37,"defaultReflectionMode":39,"defaultReflectionResolution":40,"sunLightObjectId":41,"pixelLightCount":42,"defaultReflectionHDR":43,"hasLightDataAsset":44,"hasManualGenerate":45},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"defaultParameterValues":5,"unityFallbackShader":6,"readDepth":8,"isCreatedByShaderGraph":9},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"passType":0,"zTest":1,"zWrite":2,"culling":3,"blending":4,"alphaBlending":5,"colorWriteMask":6,"offsetUnits":7,"offsetFactor":8,"stencilRef":9,"stencilReadMask":10,"stencilWriteMask":11,"stencilOp":12,"stencilOpFront":13,"stencilOpBack":14,"tags":15,"passDefinedKeywords":16,"variants":17,"readDepth":18},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"keywords":0,"vertexProgram":1,"fragmentProgram":2,"readDepth":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"removeShadows":7,"autoInstantiatePrefabs":8,"enableAutoInstancing":9,"lightmapEncodingQuality":10,"desiredColorSpace":11},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"25":[26],"27":[26],"28":[26],"29":[26],"30":[26],"31":[26],"32":[33],"21":[20],"34":[9],"35":[9],"36":[9],"37":[9],"38":[9],"39":[9],"40":[9],"41":[42],"43":[42],"44":[42],"45":[42],"46":[42],"47":[42],"48":[42],"49":[42],"50":[42],"51":[42],"52":[42],"53":[42],"54":[42],"55":[20],"17":[5],"56":[57],"58":[57],"59":[60],"61":[60],"62":[63,60],"64":[59],"65":[63,60],"66":[60],"67":[59],"68":[60],"69":[60],"70":[60],"71":[60],"72":[60],"73":[60],"74":[60],"75":[60],"76":[63,60],"77":[63,60],"78":[60],"79":[60],"80":[60],"81":[60],"82":[63,60],"83":[60],"84":[85],"86":[85],"87":[85],"88":[85],"89":[20],"90":[20],"91":[60],"92":[63,60],"93":[5],"94":[63,60],"95":[63,60],"96":[5,63,60],"97":[60,63],"98":[60]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.CapsuleCollider","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","Obstacle","UnityEngine.Rigidbody","UnityEngine.BoxCollider","UnityEngine.MeshCollider","ZeroLayer","Grid","UnityEngine.GameObject","UnityEngine.LineRenderer","Cell","UnityEngine.TextMesh","UnityEngine.Font","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.FlareLayer","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","UnityEngine.RectTransform","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.CanvasRenderer","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TextContainer"]

Deserializers.unityVersion = "2019.4.33f1";

Deserializers.productName = "astUnity";

Deserializers.lunaInitializationTime = "04/27/2022 02:47:45";

Deserializers.lunaVersion = "3.5.0";

Deserializers.lunaSHA = "f283be8b232a5bd7524cb0e77356fb4ce9255eb3";

Deserializers.packagesInfo = "com.unity.collab-proxy: 1.14.1,com.unity.ide.rider: 1.2.1,com.unity.ide.visualstudio: 2.0.11,com.unity.ide.vscode: 1.2.4,com.unity.test-framework: 1.1.29,com.unity.textmeshpro: 2.1.4,com.unity.timeline: 1.2.18,com.unity.ugui: 1.0.0,uk.lunalabs.luna: file:../../../../Projects/Luna/packages/3.5.0/scripts,com.unity.modules.ai: 1.0.0,com.unity.modules.androidjni: 1.0.0,com.unity.modules.animation: 1.0.0,com.unity.modules.assetbundle: 1.0.0,com.unity.modules.audio: 1.0.0,com.unity.modules.cloth: 1.0.0,com.unity.modules.director: 1.0.0,com.unity.modules.imageconversion: 1.0.0,com.unity.modules.imgui: 1.0.0,com.unity.modules.jsonserialize: 1.0.0,com.unity.modules.particlesystem: 1.0.0,com.unity.modules.physics: 1.0.0,com.unity.modules.physics2d: 1.0.0,com.unity.modules.screencapture: 1.0.0,com.unity.modules.terrain: 1.0.0,com.unity.modules.terrainphysics: 1.0.0,com.unity.modules.tilemap: 1.0.0,com.unity.modules.ui: 1.0.0,com.unity.modules.uielements: 1.0.0,com.unity.modules.umbra: 1.0.0,com.unity.modules.unityanalytics: 1.0.0,com.unity.modules.unitywebrequest: 1.0.0,com.unity.modules.unitywebrequestassetbundle: 1.0.0,com.unity.modules.unitywebrequestaudio: 1.0.0,com.unity.modules.unitywebrequesttexture: 1.0.0,com.unity.modules.unitywebrequestwww: 1.0.0,com.unity.modules.vehicles: 1.0.0,com.unity.modules.video: 1.0.0,com.unity.modules.vr: 1.0.0,com.unity.modules.wind: 1.0.0,com.unity.modules.xr: 1.0.0";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows";

Deserializers.applicationIdentifier = "unity.DefaultCompany.astUnity";

Deserializers.disableAntiAliasing = true;

Deserializers.buildID = "736e179c-96f9-41c3-a92b-12401b0870fb";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

