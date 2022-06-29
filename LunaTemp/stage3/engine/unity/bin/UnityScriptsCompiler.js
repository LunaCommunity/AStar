if ( TRACE ) { TRACE( JSON.parse( '["Cell#init","Cell#Awake","Cell#Start","Cell#Reset","Cell#FixedUpdate","Cell#OnTriggerStay","Cell#OnTriggerExit","Cell#SetToClosedList","Cell#SetToOpenList","Cell#CalculateH","Cell#SetToStart","Cell#SetToTarget","Cell#GetAdjacentCells","Cell#IsCellInvalid","Cell#IsCellValid","Cell#IsInBounds","Grid#init","Grid#Start","Grid#CreateCells","Grid#CalculatePathExternal","Grid#CalculatePath","Grid#GetAdjacentCells","Grid#AddCellToClosedList","Grid#AddCellToOpenList","Grid#CreateStart","Grid#CreateTarget","Obstacle#Start","Obstacle#OnMouseOver","ZeroLayer#Start","ZeroLayer#Update","ZeroLayer#FindClosestCell"]' ) ); }
/**
 * @version 1.0.8152.21547
 * @copyright anton
 * @compiler Bridge.NET 17.9.13-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*Cell start.*/
    Bridge.define("Cell", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            id: 0,
            isValid: false,
            onOpenList: false,
            onClosedList: false,
            parent: null,
            F: 0,
            G: 0,
            H: 0,
            displayF: null,
            displayG: null,
            displayH: null,
            displayID: null,
            indicator: null,
            indicatorDisplay: null,
            materialInvalid: null,
            materialStart: null,
            materialTarget: null,
            materialOnClosedList: null,
            materialOnOpenList: null,
            materialValid: null,
            currentRenderer: null,
            grid: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Cell#init", this ); }

                this.id = 0;
                this.isValid = true;
                this.onOpenList = false;
                this.onClosedList = false;
            }
        },
        methods: {
            /*Cell.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Cell#Awake", this ); }

                this.currentRenderer = this.GetComponent(UnityEngine.Renderer);
            },
            /*Cell.Awake end.*/

            /*Cell.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Cell#Start", this ); }

                this.materialValid = this.currentRenderer.material;
                this.grid = UnityEngine.Object.FindObjectOfType(Grid);
            },
            /*Cell.Start end.*/

            /*Cell.Reset start.*/
            Reset: function () {
if ( TRACE ) { TRACE( "Cell#Reset", this ); }

                this.parent = null;

                this.F = 0.0;
                this.G = 0.0;
                this.H = 0.0;

                this.onOpenList = false;
                this.onClosedList = false;

                if (this.isValid) {
                    this.currentRenderer.material = this.materialValid;
                } else {
                    this.currentRenderer.material = this.materialInvalid;
                }
            },
            /*Cell.Reset end.*/

            /*Cell.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "Cell#FixedUpdate", this ); }

                // Display Cell Information
                if (this.isValid) {
                    if (this.F === 0.0) {
                        this.displayF.text = "";
                    } else {
                        this.displayF.text = "F: " + (System.Single.format(this.F, "F2") || "");
                    }

                    if (this.G === 0.0) {
                        this.displayG.text = "";
                    } else {
                        this.displayG.text = "G: " + (System.Single.format(this.G, "F2") || "");
                    }

                    if (this.H === 0.0) {
                        this.displayH.text = "";
                    } else {
                        this.displayH.text = "H: " + (System.Single.format(this.H, "F2") || "");
                    }
                } else {
                    this.displayF.text = "";
                    this.displayG.text = "";
                    this.displayH.text = "";
                }

                this.displayID.text = "" + this.id;

                var indicatorRenderer = this.indicatorDisplay.GetComponent(UnityEngine.Renderer);
                if (UnityEngine.MonoBehaviour.op_Inequality(this.parent, null)) {
                    indicatorRenderer.enabled = true;
                    this.indicator.transform.LookAt$2(this.parent.transform.position.$clone());
                } else {
                    indicatorRenderer.enabled = false;
                }
            },
            /*Cell.FixedUpdate end.*/

            /*Cell.OnTriggerStay start.*/
            OnTriggerStay: function (other) {
if ( TRACE ) { TRACE( "Cell#OnTriggerStay", this ); }

                if (Bridge.referenceEquals(other.tag, "Obstacle")) {
                    if (this.isValid) {
                        this.isValid = false;
                        this.currentRenderer.material = this.materialInvalid;
                    }
                } else if (Bridge.referenceEquals(other.tag, "Start")) {
                    this.grid.startID = this.id;
                } else {
                    if (Bridge.referenceEquals(other.tag, "Target")) {
                        this.grid.targetID = this.id;
                    }
                }
            },
            /*Cell.OnTriggerStay end.*/

            /*Cell.OnTriggerExit start.*/
            OnTriggerExit: function (other) {
if ( TRACE ) { TRACE( "Cell#OnTriggerExit", this ); }

                if (Bridge.referenceEquals(other.tag, "Obstacle")) {
                    if (!this.isValid) {
                        this.isValid = true;
                        this.currentRenderer.material = this.materialValid;
                    }
                }
            },
            /*Cell.OnTriggerExit end.*/

            /*Cell.SetToClosedList start.*/
            SetToClosedList: function () {
if ( TRACE ) { TRACE( "Cell#SetToClosedList", this ); }

                this.onClosedList = true;
                this.onOpenList = false;
                this.currentRenderer.material = this.materialOnClosedList;
            },
            /*Cell.SetToClosedList end.*/

            /*Cell.SetToOpenList start.*/
            SetToOpenList: function () {
if ( TRACE ) { TRACE( "Cell#SetToOpenList", this ); }

                this.onOpenList = true;
                this.currentRenderer.material = this.materialOnOpenList;
            },
            /*Cell.SetToOpenList end.*/

            /*Cell.CalculateH start.*/
            CalculateH: function (targetCell) {
if ( TRACE ) { TRACE( "Cell#CalculateH", this ); }

                this.H = Math.abs(targetCell.transform.position.x - this.transform.position.x) + Math.abs(targetCell.transform.position.z - this.transform.position.z);
            },
            /*Cell.CalculateH end.*/

            /*Cell.SetToStart start.*/
            SetToStart: function () {
if ( TRACE ) { TRACE( "Cell#SetToStart", this ); }

                this.currentRenderer.material = this.materialStart;
            },
            /*Cell.SetToStart end.*/

            /*Cell.SetToTarget start.*/
            SetToTarget: function () {
if ( TRACE ) { TRACE( "Cell#SetToTarget", this ); }

                //currentRenderer.material = materialTarget;
            },
            /*Cell.SetToTarget end.*/

            /*Cell.GetAdjacentCells start.*/
            GetAdjacentCells: function (allCells, cellsPerRow) {
if ( TRACE ) { TRACE( "Cell#GetAdjacentCells", this ); }

                var adjacentCells = new System.Collections.ArrayList();

                var neighbourUpperLeft = null;
                var neighbourUpper = null;
                var neighbourUpperRight = null;
                var neighbourLeft = null;
                var neighbourRight = null;
                var neighbourLowerLeft = null;
                var neighbourLower = null;
                var neighbourLowerRight = null;

                //check each neighbour
                if (this.id % cellsPerRow !== 0 && this.IsInBounds(((((this.id + cellsPerRow) | 0) - 1) | 0), allCells)) {
                    neighbourUpperLeft = Bridge.cast(allCells.getItem(((((this.id + cellsPerRow) | 0) - 1) | 0)), UnityEngine.GameObject).GetComponent(Cell);
                }

                if (this.IsInBounds(((this.id + cellsPerRow) | 0), allCells)) {
                    neighbourUpper = Bridge.cast(allCells.getItem(((this.id + cellsPerRow) | 0)), UnityEngine.GameObject).GetComponent(Cell);
                }

                if ((((this.id + 1) | 0)) % cellsPerRow !== 0 && this.IsInBounds(((((this.id + cellsPerRow) | 0) + 1) | 0), allCells)) {
                    neighbourUpperRight = Bridge.cast(allCells.getItem(((((this.id + cellsPerRow) | 0) + 1) | 0)), UnityEngine.GameObject).GetComponent(Cell);
                }

                if (this.id % cellsPerRow !== 0) {
                    neighbourLeft = Bridge.cast(allCells.getItem(((this.id - 1) | 0)), UnityEngine.GameObject).GetComponent(Cell);
                }

                if ((((this.id + 1) | 0)) % cellsPerRow !== 0) {
                    neighbourRight = Bridge.cast(allCells.getItem(((this.id + 1) | 0)), UnityEngine.GameObject).GetComponent(Cell);
                }

                if (this.id % cellsPerRow !== 0 && this.IsInBounds(((((this.id - cellsPerRow) | 0) - 1) | 0), allCells)) {
                    neighbourLowerLeft = Bridge.cast(allCells.getItem(((((this.id - cellsPerRow) | 0) - 1) | 0)), UnityEngine.GameObject).GetComponent(Cell);
                }

                if (this.IsInBounds(((this.id - cellsPerRow) | 0), allCells)) {
                    neighbourLower = Bridge.cast(allCells.getItem(((this.id - cellsPerRow) | 0)), UnityEngine.GameObject).GetComponent(Cell);
                }

                if ((((this.id + 1) | 0)) % cellsPerRow !== 0 && this.IsInBounds(((((this.id - cellsPerRow) | 0) + 1) | 0), allCells)) {
                    neighbourLowerRight = Bridge.cast(allCells.getItem(((((this.id - cellsPerRow) | 0) + 1) | 0)), UnityEngine.GameObject).GetComponent(Cell);
                }

                //if neighbor exists and is valid, add to neighbour-array
                if (this.IsCellValid(neighbourUpperLeft)) {
                    adjacentCells.add(neighbourUpperLeft);
                }

                if (this.IsCellValid(neighbourUpper)) {
                    adjacentCells.add(neighbourUpper);
                }

                if (this.IsCellValid(neighbourUpperRight)) {
                    adjacentCells.add(neighbourUpperRight);
                }

                if (this.IsCellValid(neighbourLeft)) {
                    adjacentCells.add(neighbourLeft);
                }

                if (this.IsCellValid(neighbourRight)) {
                    adjacentCells.add(neighbourRight);
                }

                if (this.IsCellValid(neighbourLowerLeft)) {
                    adjacentCells.add(neighbourLowerLeft);
                }

                if (this.IsCellValid(neighbourLower)) {
                    adjacentCells.add(neighbourLower);
                }

                if (this.IsCellValid(neighbourLowerRight)) {
                    adjacentCells.add(neighbourLowerRight);
                }

                //diagonal-edge-detection. if at an edge, remove from neighbour-array
                if (this.IsCellInvalid(neighbourRight)) {
                    adjacentCells.remove(neighbourUpperRight);
                    adjacentCells.remove(neighbourLowerRight);
                }

                if (this.IsCellInvalid(neighbourLeft)) {
                    adjacentCells.remove(neighbourUpperLeft);
                    adjacentCells.remove(neighbourLowerLeft);
                }

                if (this.IsCellInvalid(neighbourUpper)) {
                    adjacentCells.remove(neighbourUpperRight);
                    adjacentCells.remove(neighbourUpperLeft);
                }

                if (this.IsCellInvalid(neighbourLower)) {
                    adjacentCells.remove(neighbourLowerRight);
                    adjacentCells.remove(neighbourLowerLeft);
                }

                return adjacentCells;
            },
            /*Cell.GetAdjacentCells end.*/

            /*Cell.IsCellInvalid start.*/
            IsCellInvalid: function (inputCell) {
if ( TRACE ) { TRACE( "Cell#IsCellInvalid", this ); }

                return (UnityEngine.MonoBehaviour.op_Inequality(inputCell, null) && !inputCell.isValid);
            },
            /*Cell.IsCellInvalid end.*/

            /*Cell.IsCellValid start.*/
            IsCellValid: function (inputCell) {
if ( TRACE ) { TRACE( "Cell#IsCellValid", this ); }

                return (UnityEngine.MonoBehaviour.op_Inequality(inputCell, null) && inputCell.isValid);
            },
            /*Cell.IsCellValid end.*/

            /*Cell.IsInBounds start.*/
            IsInBounds: function (i, array) {
if ( TRACE ) { TRACE( "Cell#IsInBounds", this ); }

                return (i >= 0 && i < array.Count);
            },
            /*Cell.IsInBounds end.*/


        }
    });
    /*Cell end.*/

    /*Grid start.*/
    Bridge.define("Grid", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            cellPrefab: null,
            numberOfCells: 0,
            cellsPerRow: 0,
            startID: 0,
            targetID: 0,
            isCalculating: false,
            allCells: null,
            openList: null,
            closedList: null,
            startCell: null,
            targetCell: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Grid#init", this ); }

                this.numberOfCells = 100;
                this.cellsPerRow = 10;
                this.startID = 12;
                this.targetID = 87;
                this.isCalculating = false;
            }
        },
        methods: {
            /*Grid.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Grid#Start", this ); }

                this.CreateCells();
            },
            /*Grid.Start end.*/

            /*Grid.CreateCells start.*/
            CreateCells: function () {
if ( TRACE ) { TRACE( "Grid#CreateCells", this ); }

                this.allCells = new System.Collections.ArrayList();

                var zOffset = 0;
                var xOffset = 0;
                var counter = 0;

                for (var i = 0; i < this.numberOfCells; i = (i + 1) | 0) {
                    counter = (counter + 1) | 0;
                    xOffset = (xOffset + 1) | 0;
                    var newCell = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.cellPrefab, new pc.Vec3( this.transform.position.x + xOffset, this.transform.position.y, this.transform.position.z + zOffset ), this.transform.rotation.$clone());
                    newCell.GetComponent(Cell).id = i;
                    this.allCells.add(newCell);

                    if (counter >= this.cellsPerRow) {
                        counter = 0;
                        xOffset = 0;
                        zOffset = (zOffset + 1) | 0;
                    }
                }
            },
            /*Grid.CreateCells end.*/

            /*Grid.CalculatePathExternal start.*/
            CalculatePathExternal: function () {
if ( TRACE ) { TRACE( "Grid#CalculatePathExternal", this ); }

                var $t;
                // Reset all cells
                $t = Bridge.getEnumerator(this.allCells);
                try {
                    while ($t.moveNext()) {
                        var gameObject = Bridge.cast($t.Current, UnityEngine.GameObject);
                        gameObject.GetComponent(Cell).Reset();
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                this.StartCoroutine$1(this.CalculatePath());
            },
            /*Grid.CalculatePathExternal end.*/

            /*Grid.CalculatePath start.*/
            CalculatePath: function () {
if ( TRACE ) { TRACE( "Grid#CalculatePath", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    currentCell,
                    cycleDelay,
                    cycleCounter,
                    $t,
                    cell,
                    tentativeG,
                    lowestFValue,
                    $t1,
                    cell1,
                    path,
                    lineRenderer,
                    i,
                    $t2,
                    cell2,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.isCalculating = true;

                                        this.CreateStart(this.startID);
                                        this.CreateTarget(this.targetID);

                                        this.openList = new System.Collections.ArrayList();
                                        this.closedList = new System.Collections.ArrayList();

                                        currentCell = this.startCell;
                                        this.AddCellToClosedList(currentCell);

                                        cycleDelay = 0.0;
                                        cycleCounter = 0;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( currentCell.id !== this.targetCell.id ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 5;
                                        continue;
                                }
                                case 2: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(cycleDelay);
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    //safety-abort in case of endless loop
                                        cycleCounter = (cycleCounter + 1) | 0;
                                        if (cycleCounter >= this.numberOfCells) {
                                            UnityEngine.Debug.Log$1("No Path Found");
                                            $step = 5;
                                            continue;
                                        }

                                        //add all cells adjacent to currentCell to openList
                                        $t = Bridge.getEnumerator(this.GetAdjacentCells(currentCell));
                                        try {
                                            while ($t.moveNext()) {
                                                cell = Bridge.cast($t.Current, Cell);
                                                tentativeG = currentCell.G + pc.Vec3.distance( currentCell.transform.position, cell.transform.position );
                                                //if cell is on closed list skip to next cycle
                                                if (cell.onClosedList && tentativeG > cell.G) {
                                                    continue;
                                                }

                                                if (!cell.onOpenList || tentativeG < cell.G) {
                                                    cell.CalculateH(this.targetCell);
                                                    cell.G = tentativeG;
                                                    cell.F = cell.G + cell.H;
                                                    cell.parent = currentCell;

                                                    if (!cell.onClosedList) {
                                                        this.AddCellToOpenList(cell);
                                                    }
                                                }
                                            }
                                        } finally {
                                            if (Bridge.is($t, System.IDisposable)) {
                                                $t.System$IDisposable$Dispose();
                                            }
                                        }

                                        $enumerator.current = new UnityEngine.WaitForSeconds(cycleDelay);
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    //get cell with lowest F value from openList, set it to currentCell
                                        lowestFValue = 99999.9;
                                        $t1 = Bridge.getEnumerator(this.openList);
                                        try {
                                            while ($t1.moveNext()) {
                                                cell1 = Bridge.cast($t1.Current, Cell);
                                                if (cell1.F < lowestFValue) {
                                                    lowestFValue = cell1.F;
                                                    currentCell = cell1;
                                                }
                                            }
                                        } finally {
                                            if (Bridge.is($t1, System.IDisposable)) {
                                                $t1.System$IDisposable$Dispose();
                                            }
                                        }

                                        //remove currentCell from openList, add to closedList
                                        this.openList.remove(currentCell);
                                        this.AddCellToClosedList(currentCell);

                                        $step = 1;
                                        continue;
                                }
                                case 5: {
                                    //get path
                                        path = new System.Collections.ArrayList();
                                        currentCell = this.targetCell;
                                        while (currentCell.id !== this.startCell.id) {
                                            path.add(currentCell);
                                            currentCell = currentCell.parent;
                                        }
                                        path.add(currentCell);
                                        path.Reverse();

                                        //draw path
                                        lineRenderer = this.GetComponent(UnityEngine.LineRenderer);
                                        lineRenderer.SetVertexCount(path.Count);
                                        i = 0;
                                        $t2 = Bridge.getEnumerator(path);
                                        try {
                                            while ($t2.moveNext()) {
                                                cell2 = Bridge.cast($t2.Current, Cell);
                                                lineRenderer.SetPosition(i, cell2.transform.position.$clone().add( new pc.Vec3( 0, 1, 0 ) ));
                                                i = (i + 1) | 0;
                                            }
                                        } finally {
                                            if (Bridge.is($t2, System.IDisposable)) {
                                                $t2.System$IDisposable$Dispose();
                                            }
                                        }

                                        this.isCalculating = false;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Grid.CalculatePath end.*/

            /*Grid.GetAdjacentCells start.*/
            GetAdjacentCells: function (currentCell) {
if ( TRACE ) { TRACE( "Grid#GetAdjacentCells", this ); }

                return currentCell.GetAdjacentCells(this.allCells, this.cellsPerRow);
            },
            /*Grid.GetAdjacentCells end.*/

            /*Grid.AddCellToClosedList start.*/
            AddCellToClosedList: function (currentCell) {
if ( TRACE ) { TRACE( "Grid#AddCellToClosedList", this ); }

                this.closedList.add(currentCell);
                currentCell.SetToClosedList();
            },
            /*Grid.AddCellToClosedList end.*/

            /*Grid.AddCellToOpenList start.*/
            AddCellToOpenList: function (currentCell) {
if ( TRACE ) { TRACE( "Grid#AddCellToOpenList", this ); }

                this.openList.add(currentCell);
                currentCell.SetToOpenList();
            },
            /*Grid.AddCellToOpenList end.*/

            /*Grid.CreateStart start.*/
            CreateStart: function (id) {
if ( TRACE ) { TRACE( "Grid#CreateStart", this ); }

                var tempStartCell = Bridge.cast(this.allCells.getItem(id), UnityEngine.GameObject);
                this.startCell = tempStartCell.GetComponent(Cell);
                this.startCell.SetToStart();
            },
            /*Grid.CreateStart end.*/

            /*Grid.CreateTarget start.*/
            CreateTarget: function (id) {
if ( TRACE ) { TRACE( "Grid#CreateTarget", this ); }

                var tempTargetCell = Bridge.cast(this.allCells.getItem(id), UnityEngine.GameObject);
                this.targetCell = tempTargetCell.GetComponent(Cell);
                this.targetCell.SetToTarget();
            },
            /*Grid.CreateTarget end.*/


        }
    });
    /*Grid end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*Obstacle start.*/
    Bridge.define("Obstacle", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            zeroLayer: null
        },
        methods: {
            /*Obstacle.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Obstacle#Start", this ); }

                this.zeroLayer = UnityEngine.Object.FindObjectOfType(ZeroLayer);
            },
            /*Obstacle.Start end.*/

            /*Obstacle.OnMouseOver start.*/
            OnMouseOver: function () {
if ( TRACE ) { TRACE( "Obstacle#OnMouseOver", this ); }

                if (UnityEngine.Input.GetMouseButton(0)) {
                    this.zeroLayer.otherCube = this.gameObject;
                }
            },
            /*Obstacle.OnMouseOver end.*/


        }
    });
    /*Obstacle end.*/

    /*ZeroLayer start.*/
    Bridge.define("ZeroLayer", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            otherCube: null,
            grid: null
        },
        methods: {
            /*ZeroLayer.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "ZeroLayer#Start", this ); }

                this.grid = UnityEngine.Object.FindObjectOfType(Grid);
            },
            /*ZeroLayer.Start end.*/

            /*ZeroLayer.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "ZeroLayer#Update", this ); }

                if (!this.grid.isCalculating) {
                    if (UnityEngine.Input.GetMouseButton(0)) {
                        var ray = UnityEngine.Camera.main.ScreenPointToRay(UnityEngine.Input.mousePosition.$clone());
                        var hit = { v : new UnityEngine.RaycastHit() };

                        if (UnityEngine.Physics.Raycast$1(ray, hit, 100)) {
                            if (UnityEngine.Object.op_Implicit(this.otherCube)) {
                                this.otherCube.GetComponent(UnityEngine.Collider).enabled = false;
                                this.otherCube.transform.position = this.FindClosestCell(hit.v.point.$clone()).add( new pc.Vec3( 0, 1, 0 ) );
                            }
                        }
                    } else if (UnityEngine.Input.GetMouseButtonUp(0)) {
                        if (UnityEngine.Object.op_Implicit(this.otherCube)) {
                            this.otherCube.GetComponent(UnityEngine.Collider).enabled = true;
                            this.otherCube = null;

                            this.grid.CalculatePathExternal();
                        }
                    }
                }
            },
            /*ZeroLayer.Update end.*/

            /*ZeroLayer.FindClosestCell start.*/
            FindClosestCell: function (startPosition) {
if ( TRACE ) { TRACE( "ZeroLayer#FindClosestCell", this ); }

                var $t;
                var closest = null;
                var distance = window.Infinity;
                var position = startPosition.$clone();
                $t = Bridge.getEnumerator(this.grid.allCells);
                try {
                    while ($t.moveNext()) {
                        var gameObject = Bridge.cast($t.Current, UnityEngine.GameObject);
                        var diff = gameObject.transform.position.$clone().sub( position );
                        var curDistance = diff.lengthSq();
                        if (curDistance < distance) {
                            closest = gameObject;
                            distance = curDistance;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return closest.transform.position.$clone();
            },
            /*ZeroLayer.FindClosestCell end.*/


        }
    });
    /*ZeroLayer end.*/

    var $m = Bridge.setMetadata,
        $n = ["System","System.Collections","UnityEngine"];

    /*Cell start.*/
    $m("Cell", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"CalculateH","t":8,"pi":[{"n":"targetCell","pt":Cell,"ps":0}],"sn":"CalculateH","rt":$n[0].Void,"p":[Cell]},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":2,"n":"GetAdjacentCells","t":8,"pi":[{"n":"allCells","pt":$n[1].ArrayList,"ps":0},{"n":"cellsPerRow","pt":$n[0].Int32,"ps":1}],"sn":"GetAdjacentCells","rt":$n[1].ArrayList,"p":[$n[1].ArrayList,$n[0].Int32]},{"a":1,"n":"IsCellInvalid","t":8,"pi":[{"n":"inputCell","pt":Cell,"ps":0}],"sn":"IsCellInvalid","rt":$n[0].Boolean,"p":[Cell],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"IsCellValid","t":8,"pi":[{"n":"inputCell","pt":Cell,"ps":0}],"sn":"IsCellValid","rt":$n[0].Boolean,"p":[Cell],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"IsInBounds","t":8,"pi":[{"n":"i","pt":$n[0].Int32,"ps":0},{"n":"array","pt":$n[1].ArrayList,"ps":1}],"sn":"IsInBounds","rt":$n[0].Boolean,"p":[$n[0].Int32,$n[1].ArrayList],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"OnTriggerExit","t":8,"pi":[{"n":"other","pt":$n[2].Collider,"ps":0}],"sn":"OnTriggerExit","rt":$n[0].Void,"p":[$n[2].Collider]},{"a":1,"n":"OnTriggerStay","t":8,"pi":[{"n":"other","pt":$n[2].Collider,"ps":0}],"sn":"OnTriggerStay","rt":$n[0].Void,"p":[$n[2].Collider]},{"a":2,"n":"Reset","t":8,"sn":"Reset","rt":$n[0].Void},{"a":2,"n":"SetToClosedList","t":8,"sn":"SetToClosedList","rt":$n[0].Void},{"a":2,"n":"SetToOpenList","t":8,"sn":"SetToOpenList","rt":$n[0].Void},{"a":2,"n":"SetToStart","t":8,"sn":"SetToStart","rt":$n[0].Void},{"a":2,"n":"SetToTarget","t":8,"sn":"SetToTarget","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"F","t":4,"rt":$n[0].Single,"sn":"F","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"G","t":4,"rt":$n[0].Single,"sn":"G","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"H","t":4,"rt":$n[0].Single,"sn":"H","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"currentRenderer","t":4,"rt":$n[2].Renderer,"sn":"currentRenderer"},{"a":2,"n":"displayF","t":4,"rt":$n[2].TextMesh,"sn":"displayF"},{"a":2,"n":"displayG","t":4,"rt":$n[2].TextMesh,"sn":"displayG"},{"a":2,"n":"displayH","t":4,"rt":$n[2].TextMesh,"sn":"displayH"},{"a":2,"n":"displayID","t":4,"rt":$n[2].TextMesh,"sn":"displayID"},{"a":1,"n":"grid","t":4,"rt":Grid,"sn":"grid"},{"a":2,"n":"id","t":4,"rt":$n[0].Int32,"sn":"id","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"indicator","t":4,"rt":$n[2].GameObject,"sn":"indicator"},{"a":2,"n":"indicatorDisplay","t":4,"rt":$n[2].GameObject,"sn":"indicatorDisplay"},{"a":2,"n":"isValid","t":4,"rt":$n[0].Boolean,"sn":"isValid","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"materialInvalid","t":4,"rt":$n[2].Material,"sn":"materialInvalid"},{"a":2,"n":"materialOnClosedList","t":4,"rt":$n[2].Material,"sn":"materialOnClosedList"},{"a":2,"n":"materialOnOpenList","t":4,"rt":$n[2].Material,"sn":"materialOnOpenList"},{"a":2,"n":"materialStart","t":4,"rt":$n[2].Material,"sn":"materialStart"},{"a":2,"n":"materialTarget","t":4,"rt":$n[2].Material,"sn":"materialTarget"},{"a":1,"n":"materialValid","t":4,"rt":$n[2].Material,"sn":"materialValid"},{"a":2,"n":"onClosedList","t":4,"rt":$n[0].Boolean,"sn":"onClosedList","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"onOpenList","t":4,"rt":$n[0].Boolean,"sn":"onOpenList","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"parent","t":4,"rt":Cell,"sn":"parent"}]}; }, $n);
    /*Cell end.*/

    /*Grid start.*/
    $m("Grid", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AddCellToClosedList","t":8,"pi":[{"n":"currentCell","pt":Cell,"ps":0}],"sn":"AddCellToClosedList","rt":$n[0].Void,"p":[Cell]},{"a":1,"n":"AddCellToOpenList","t":8,"pi":[{"n":"currentCell","pt":Cell,"ps":0}],"sn":"AddCellToOpenList","rt":$n[0].Void,"p":[Cell]},{"a":1,"n":"CalculatePath","t":8,"sn":"CalculatePath","rt":$n[1].IEnumerator},{"a":2,"n":"CalculatePathExternal","t":8,"sn":"CalculatePathExternal","rt":$n[0].Void},{"a":1,"n":"CreateCells","t":8,"sn":"CreateCells","rt":$n[0].Void},{"a":1,"n":"CreateStart","t":8,"pi":[{"n":"id","pt":$n[0].Int32,"ps":0}],"sn":"CreateStart","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"CreateTarget","t":8,"pi":[{"n":"id","pt":$n[0].Int32,"ps":0}],"sn":"CreateTarget","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"GetAdjacentCells","t":8,"pi":[{"n":"currentCell","pt":Cell,"ps":0}],"sn":"GetAdjacentCells","rt":$n[1].ArrayList,"p":[Cell]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"allCells","t":4,"rt":$n[1].ArrayList,"sn":"allCells"},{"a":2,"n":"cellPrefab","t":4,"rt":$n[2].GameObject,"sn":"cellPrefab"},{"a":2,"n":"cellsPerRow","t":4,"rt":$n[0].Int32,"sn":"cellsPerRow","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"closedList","t":4,"rt":$n[1].ArrayList,"sn":"closedList"},{"a":2,"n":"isCalculating","t":4,"rt":$n[0].Boolean,"sn":"isCalculating","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"numberOfCells","t":4,"rt":$n[0].Int32,"sn":"numberOfCells","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"openList","t":4,"rt":$n[1].ArrayList,"sn":"openList"},{"a":1,"n":"startCell","t":4,"rt":Cell,"sn":"startCell"},{"a":2,"n":"startID","t":4,"rt":$n[0].Int32,"sn":"startID","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"targetCell","t":4,"rt":Cell,"sn":"targetCell"},{"a":2,"n":"targetID","t":4,"rt":$n[0].Int32,"sn":"targetID","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*Grid end.*/

    /*Obstacle start.*/
    $m("Obstacle", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnMouseOver","t":8,"sn":"OnMouseOver","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"zeroLayer","t":4,"rt":ZeroLayer,"sn":"zeroLayer"}]}; }, $n);
    /*Obstacle end.*/

    /*ZeroLayer start.*/
    $m("ZeroLayer", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"FindClosestCell","t":8,"pi":[{"n":"startPosition","pt":$n[2].Vector3,"ps":0}],"sn":"FindClosestCell","rt":$n[2].Vector3,"p":[$n[2].Vector3]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"grid","t":4,"rt":Grid,"sn":"grid"},{"a":2,"n":"otherCube","t":4,"rt":$n[2].GameObject,"sn":"otherCube"}]}; }, $n);
    /*ZeroLayer end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

});
