'use strict';
var $p;
var $fileLevelThis = this;
function $Char(c) {
  this.c = c;
}
$p = $Char.prototype;
$p.toString = (function() {
  return String.fromCharCode(this.c);
});
function $Long(lo, hi) {
  this.l = lo;
  this.h = hi;
}
$p = $Long.prototype;
$p.toString = (function() {
  return $s_RTLong__toString__I__I__T(this.l, this.h);
});
function $noIsInstance(arg0) {
  throw new TypeError("Cannot call isInstance() on a Class representing a JS trait/object");
}
function $objectClone(arg0) {
  return Object.create(Object.getPrototypeOf(arg0), Object.getOwnPropertyDescriptors(arg0));
}
function $objectOrArrayClone(arg0) {
  return (arg0.$classData.Z ? arg0.N() : $objectClone(arg0));
}
function $objectGetClass(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return $d_T.l();
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return $d_jl_Byte.l();
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return $d_jl_Short.l();
        } else {
          return $d_jl_Integer.l();
        }
      } else if ($isFloat(arg0)) {
        return $d_jl_Float.l();
      } else {
        return $d_jl_Double.l();
      }
    }
    case "boolean": {
      return $d_jl_Boolean.l();
    }
    case "undefined": {
      return $d_jl_Void.l();
    }
    default: {
      if ((arg0 instanceof $Long)) {
        return $d_jl_Long.l();
      } else if ((arg0 instanceof $Char)) {
        return $d_jl_Character.l();
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.l();
      } else {
        return null;
      }
    }
  }
}
function $objectClassName(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return "java.lang.String";
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return "java.lang.Byte";
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return "java.lang.Short";
        } else {
          return "java.lang.Integer";
        }
      } else if ($isFloat(arg0)) {
        return "java.lang.Float";
      } else {
        return "java.lang.Double";
      }
    }
    case "boolean": {
      return "java.lang.Boolean";
    }
    case "undefined": {
      return "java.lang.Void";
    }
    default: {
      if ((arg0 instanceof $Long)) {
        return "java.lang.Long";
      } else if ((arg0 instanceof $Char)) {
        return "java.lang.Character";
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.N;
      } else {
        return null.lB();
      }
    }
  }
}
function $dp_hashCode__I(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__hashCode__I(instance);
    }
    case "number": {
      return $f_jl_Double__hashCode__I(instance);
    }
    case "boolean": {
      return $f_jl_Boolean__hashCode__I(instance);
    }
    case "undefined": {
      return $f_jl_Void__hashCode__I(instance);
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.g();
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__hashCode__I(instance.l, instance.h);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I(instance.c);
      } else {
        return $c_O.prototype.g.call(instance);
      }
    }
  }
}
function $dp_indexOf__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__indexOf__I__I(instance, x0);
  } else {
    return instance.lC(x0);
  }
}
function $dp_toString__T(instance) {
  return ((instance === (void 0)) ? "undefined" : instance.toString());
}
function $checkIntDivisor(arg0) {
  if ((arg0 === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  } else {
    return arg0;
  }
}
function $doubleToInt(arg0) {
  return ((arg0 > 2147483647) ? 2147483647 : ((arg0 < (-2147483648)) ? (-2147483648) : (arg0 | 0)));
}
function $cToS(arg0) {
  return String.fromCharCode(arg0);
}
var $fpBitsDataView = new DataView(new ArrayBuffer(8));
function $floatToBits(arg0) {
  var dataView = $fpBitsDataView;
  dataView.setFloat32(0, arg0, true);
  return dataView.getInt32(0, true);
}
function $floatFromBits(arg0) {
  var dataView = $fpBitsDataView;
  dataView.setInt32(0, arg0, true);
  return dataView.getFloat32(0, true);
}
function $doubleToBits(arg0) {
  var dataView = $fpBitsDataView;
  return $s_RTLong__fromDoubleBits__D__O__J(arg0, dataView);
}
function $doubleFromBits(arg0) {
  var dataView = $fpBitsDataView;
  return $s_RTLong__bitsToDouble__I__I__O__D(arg0.l, arg0.h, dataView);
}
function $resolveSuperRef(arg0, arg1) {
  var getPrototypeOf = Object.getPrototyeOf;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var superProto = arg0.prototype;
  while ((superProto !== null)) {
    var desc = getOwnPropertyDescriptor(superProto, arg1);
    if ((desc !== (void 0))) {
      return desc;
    }
    superProto = getPrototypeOf(superProto);
  }
}
function $superGet(arg0, arg1, arg2) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var getter = desc.get;
    return ((getter !== (void 0)) ? getter.call(arg1) : getter.value);
  }
}
function $superSet(arg0, arg1, arg2, arg3) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var setter = desc.set;
    if ((setter !== (void 0))) {
      setter.call(arg1, arg3);
      return (void 0);
    }
  }
  throw new TypeError((("super has no setter '" + arg2) + "'."));
}
function $arraycopyGeneric(arg0, arg1, arg2, arg3, arg4) {
  if (((arg0 !== arg2) || (((arg3 - arg1) >>> 0) > (arg4 >>> 0)))) {
    for (var i = 0; (i < arg4); i = ((i + 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)];
    }
  } else {
    for (var i = ((arg4 - 1) | 0); (i >= 0); i = ((i - 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)];
    }
  }
}
var $lastIDHash = 0;
var $idHashCodeMap = new WeakMap();
function $systemIdentityHashCode(obj) {
  switch ((typeof obj)) {
    case "string": {
      return $f_T__hashCode__I(obj);
    }
    case "number": {
      return $f_jl_Double__hashCode__I(obj);
    }
    case "bigint": {
      var biHash = 0;
      if ((obj < BigInt(0))) {
        obj = (~obj);
      }
      while ((obj !== BigInt(0))) {
        biHash = (biHash ^ Number(BigInt.asIntN(32, obj)));
        obj = (obj >> BigInt(32));
      }
      return biHash;
    }
    case "boolean": {
      return (obj ? 1231 : 1237);
    }
    case "undefined": {
      return 0;
    }
    case "symbol": {
      var description = obj.description;
      return ((description === (void 0)) ? 0 : $f_T__hashCode__I(description));
    }
    default: {
      if ((obj === null)) {
        return 0;
      } else {
        var hash = $idHashCodeMap.get(obj);
        if ((hash === (void 0))) {
          hash = (($lastIDHash + 1) | 0);
          $lastIDHash = hash;
          $idHashCodeMap.set(obj, hash);
        }
        return hash;
      }
    }
  }
}
function $isByte(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 24) >> 24) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isShort(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 16) >> 16) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isInt(arg0) {
  return ((((typeof arg0) === "number") && ((arg0 | 0) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isFloat(arg0) {
  return (((typeof arg0) === "number") && ((arg0 !== arg0) || (Math.fround(arg0) === arg0)));
}
function $bC(arg0) {
  return new $Char(arg0);
}
var $bC0 = $bC(0);
function $bL(arg0, arg1) {
  return new $Long(arg0, arg1);
}
var $bL0 = $bL(0, 0);
function $uC(arg0) {
  return ((arg0 === null) ? 0 : arg0.c);
}
function $uJ(arg0) {
  return ((arg0 === null) ? $bL0 : arg0);
}
/** @constructor */
function $c_O() {
}
$p = $c_O.prototype;
$p.constructor = $c_O;
/** @constructor */
function $h_O() {
}
$h_O.prototype = $p;
$p.g = (function() {
  return $systemIdentityHashCode(this);
});
$p.f = (function() {
  var i = this.g();
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.toString = (function() {
  return this.f();
});
function $ac_O(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.a[i] = null;
    }
  } else {
    this.a = arg;
  }
}
$p = $ac_O.prototype = new $h_O();
$p.constructor = $ac_O;
$p.H = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.N = (function() {
  return new $ac_O(this.a.slice());
});
function $ah_O() {
}
$ah_O.prototype = $p;
function $ac_Z(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.a[i] = false;
    }
  } else {
    this.a = arg;
  }
}
$p = $ac_Z.prototype = new $h_O();
$p.constructor = $ac_Z;
$p.H = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.N = (function() {
  return new $ac_Z(this.a.slice());
});
function $ac_C(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Uint16Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_C.prototype = new $h_O();
$p.constructor = $ac_C;
$p.H = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.N = (function() {
  return new $ac_C(this.a.slice());
});
function $ac_B(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Int8Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_B.prototype = new $h_O();
$p.constructor = $ac_B;
$p.H = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.N = (function() {
  return new $ac_B(this.a.slice());
});
function $ac_S(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Int16Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_S.prototype = new $h_O();
$p.constructor = $ac_S;
$p.H = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.N = (function() {
  return new $ac_S(this.a.slice());
});
function $ac_I(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Int32Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_I.prototype = new $h_O();
$p.constructor = $ac_I;
$p.H = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.N = (function() {
  return new $ac_I(this.a.slice());
});
function $ac_J(arg) {
  if (((typeof arg) === "number")) {
    arg = (arg << 1);
    this.a = new Int32Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_J.prototype = new $h_O();
$p.constructor = $ac_J;
$p.H = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray((srcPos << 1), (((srcPos + length) | 0) << 1)), (destPos << 1));
});
$p.N = (function() {
  return new $ac_J(this.a.slice());
});
function $ac_F(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Float32Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_F.prototype = new $h_O();
$p.constructor = $ac_F;
$p.H = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.N = (function() {
  return new $ac_F(this.a.slice());
});
function $ac_D(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Float64Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_D.prototype = new $h_O();
$p.constructor = $ac_D;
$p.H = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.N = (function() {
  return new $ac_D(this.a.slice());
});
function $TypeData() {
  this.C = (void 0);
  this.n = null;
  this.O = null;
  this.B = null;
  this.D = 0;
  this.z = null;
  this.E = "";
  this.L = (void 0);
  this.A = (void 0);
  this.F = (void 0);
  this.w = (void 0);
  this.J = false;
  this.N = "";
  this.X = false;
  this.Y = false;
  this.Z = false;
  this.I = (void 0);
}
$p = $TypeData.prototype;
$p.p = (function(zero, arrayEncodedName, displayName, arrayClass, typedArrayClass) {
  this.n = ({});
  this.z = zero;
  this.E = arrayEncodedName;
  var self = this;
  this.F = ((that) => (that === self));
  this.N = displayName;
  this.X = true;
  this.I = ((obj) => false);
  if ((arrayClass !== (void 0))) {
    this.A = new $TypeData().y(this, arrayClass, typedArrayClass, (arrayEncodedName === "J"));
  }
  return this;
});
$p.i = (function(kindOrCtor, fullName, ancestors, isInstance) {
  var internalName = Object.getOwnPropertyNames(ancestors)[0];
  this.n = ancestors;
  this.E = (("L" + fullName) + ";");
  this.F = ((that) => (!(!that.n[internalName])));
  this.J = (kindOrCtor === 2);
  this.N = fullName;
  this.Y = (kindOrCtor === 1);
  this.I = (isInstance || ((obj) => (!(!((obj && obj.$classData) && obj.$classData.n[internalName])))));
  if (((typeof kindOrCtor) !== "number")) {
    kindOrCtor.prototype.$classData = this;
  }
  return this;
});
$p.y = (function(componentData, arrayClass, typedArrayClass, isLongArray, isAssignableFromFun) {
  arrayClass.prototype.$classData = this;
  var name = ("[" + componentData.E);
  this.C = arrayClass;
  this.n = ({
    v: 1,
    a: 1
  });
  this.O = componentData;
  this.B = componentData;
  this.D = 1;
  this.E = name;
  this.N = name;
  this.Z = true;
  var self = this;
  this.F = (isAssignableFromFun || ((that) => (self === that)));
  this.w = (isLongArray ? ((array) => {
    var len = (array.length | 0);
    var result = new arrayClass(len);
    var u = result.a;
    for (var i = 0; (i < len); i = ((i + 1) | 0)) {
      var srcElem = array[i];
      u[(i << 1)] = srcElem.l;
      u[(((i << 1) + 1) | 0)] = srcElem.h;
    }
    return result;
  }) : (typedArrayClass ? ((array) => new arrayClass(new typedArrayClass(array))) : ((array) => new arrayClass(array))));
  this.I = ((obj) => (obj instanceof arrayClass));
  return this;
});
$p.a = (function(componentData) {
  function ArrayClass(arg) {
    if (((typeof arg) === "number")) {
      this.a = new Array(arg);
      for (var i = 0; (i < arg); (i++)) {
        this.a[i] = null;
      }
    } else {
      this.a = arg;
    }
  }
  var $p = ArrayClass.prototype = new $ah_O();
  $p.constructor = ArrayClass;
  $p.H = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
  });
  $p.N = (function() {
    return new ArrayClass(this.a.slice());
  });
  $p.$classData = this;
  var arrayBase = (componentData.B || componentData);
  var arrayDepth = (componentData.D + 1);
  var name = ("[" + componentData.E);
  this.C = ArrayClass;
  this.n = ({
    v: 1,
    a: 1
  });
  this.O = componentData;
  this.B = arrayBase;
  this.D = arrayDepth;
  this.E = name;
  this.N = name;
  this.Z = true;
  var isAssignableFromFun = ((that) => {
    var thatDepth = that.D;
    return ((thatDepth === arrayDepth) ? arrayBase.F(that.B) : ((thatDepth > arrayDepth) && (arrayBase === $d_O)));
  });
  this.F = isAssignableFromFun;
  this.w = ((array) => new ArrayClass(array));
  var self = this;
  this.I = ((obj) => {
    var data = (obj && obj.$classData);
    return ((!(!data)) && ((data === self) || isAssignableFromFun(data)));
  });
  return this;
});
$p.r = (function() {
  if ((!this.A)) {
    this.A = new $TypeData().a(this);
  }
  return this.A;
});
$p.l = (function() {
  if ((!this.L)) {
    this.L = new $c_jl_Class(this);
  }
  return this.L;
});
$p.R = (function(that) {
  return ((this === that) || this.F(that));
});
$p.S = (function() {
  return (this.P ? this.P.l() : null);
});
$p.Q = (function() {
  return (this.O ? this.O.l() : null);
});
$p.U = (function(length) {
  if ((this === $d_V)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return new (this.r().C)(length);
});
function $isArrayOf_O(obj, depth) {
  var data = (obj && obj.$classData);
  if ((!data)) {
    return false;
  } else {
    var arrayDepth = data.D;
    return ((arrayDepth === depth) ? (!data.B.X) : (arrayDepth > depth));
  }
}
function $isArrayOf_Z(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_Z))));
}
function $isArrayOf_C(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_C))));
}
function $isArrayOf_B(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_B))));
}
function $isArrayOf_S(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_S))));
}
function $isArrayOf_I(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_I))));
}
function $isArrayOf_J(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_J))));
}
function $isArrayOf_F(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_F))));
}
function $isArrayOf_D(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_D))));
}
var $d_O = new $TypeData();
$d_O.n = ({});
$d_O.E = "Ljava.lang.Object;";
$d_O.F = ((that) => (!that.X));
$d_O.N = "java.lang.Object";
$d_O.I = ((obj) => (obj !== null));
$d_O.A = new $TypeData().y($d_O, $ac_O, (void 0), false, ((that) => {
  var thatDepth = that.D;
  return ((thatDepth === 1) ? (!that.B.X) : (thatDepth > 1));
}));
$c_O.prototype.$classData = $d_O;
var $d_V = new $TypeData().p((void 0), "V", "void", (void 0), (void 0));
var $d_Z = new $TypeData().p(false, "Z", "boolean", $ac_Z, (void 0));
var $d_C = new $TypeData().p(0, "C", "char", $ac_C, Uint16Array);
var $d_B = new $TypeData().p(0, "B", "byte", $ac_B, Int8Array);
var $d_S = new $TypeData().p(0, "S", "short", $ac_S, Int16Array);
var $d_I = new $TypeData().p(0, "I", "int", $ac_I, Int32Array);
var $d_J = new $TypeData().p($bL0, "J", "long", $ac_J, Int32Array);
var $d_F = new $TypeData().p(0.0, "F", "float", $ac_F, Float32Array);
var $d_D = new $TypeData().p(0.0, "D", "double", $ac_D, Float64Array);
/** @constructor */
function $c_jl_System$Streams$() {
  this.hc = null;
  this.jc = null;
  $n_jl_System$Streams$ = this;
  this.hc = new $c_jl_JSConsoleBasedPrintStream(false);
  this.jc = new $c_jl_JSConsoleBasedPrintStream(true);
}
$p = $c_jl_System$Streams$.prototype = new $h_O();
$p.constructor = $c_jl_System$Streams$;
/** @constructor */
function $h_jl_System$Streams$() {
}
$h_jl_System$Streams$.prototype = $p;
var $d_jl_System$Streams$ = new $TypeData().i($c_jl_System$Streams$, "java.lang.System$Streams$", ({
  b3: 1
}));
var $n_jl_System$Streams$;
function $m_jl_System$Streams$() {
  if ((!$n_jl_System$Streams$)) {
    $n_jl_System$Streams$ = new $c_jl_System$Streams$();
  }
  return $n_jl_System$Streams$;
}
function $f_jl_Void__hashCode__I($thiz) {
  return 0;
}
function $f_jl_Void__toString__T($thiz) {
  return "undefined";
}
var $d_jl_Void = new $TypeData().i(0, "java.lang.Void", ({
  b5: 1
}), ((x) => (x === (void 0))));
function $p_jl_reflect_Array$__mismatch__O__E($thiz, array) {
  throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "argument type mismatch");
}
/** @constructor */
function $c_jl_reflect_Array$() {
}
$p = $c_jl_reflect_Array$.prototype = new $h_O();
$p.constructor = $c_jl_reflect_Array$;
/** @constructor */
function $h_jl_reflect_Array$() {
}
$h_jl_reflect_Array$.prototype = $p;
$p.eO = (function(array) {
  return ((array instanceof $ac_O) ? array.a.length : ((array instanceof $ac_Z) ? array.a.length : ((array instanceof $ac_C) ? array.a.length : ((array instanceof $ac_B) ? array.a.length : ((array instanceof $ac_S) ? array.a.length : ((array instanceof $ac_I) ? array.a.length : ((array instanceof $ac_J) ? ((array.a.length >>> 1) | 0) : ((array instanceof $ac_F) ? array.a.length : ((array instanceof $ac_D) ? array.a.length : $p_jl_reflect_Array$__mismatch__O__E(this, array))))))))));
});
var $d_jl_reflect_Array$ = new $TypeData().i($c_jl_reflect_Array$, "java.lang.reflect.Array$", ({
  b6: 1
}));
var $n_jl_reflect_Array$;
function $m_jl_reflect_Array$() {
  if ((!$n_jl_reflect_Array$)) {
    $n_jl_reflect_Array$ = new $c_jl_reflect_Array$();
  }
  return $n_jl_reflect_Array$;
}
function $s_RTLong__remainderUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().l6(alo, ahi, blo, bhi);
}
function $s_RTLong__remainder__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().l5(alo, ahi, blo, bhi);
}
function $s_RTLong__divideUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().jQ(alo, ahi, blo, bhi);
}
function $s_RTLong__divide__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().jP(alo, ahi, blo, bhi);
}
function $s_RTLong__fromDoubleBits__D__O__J(value, fpBitsDataView) {
  fpBitsDataView.setFloat64(0, value, true);
  var lo = (fpBitsDataView.getInt32(0, true) | 0);
  var hi = (fpBitsDataView.getInt32(4, true) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__fromDouble__D__J(value) {
  return $m_RTLong$().iy(value);
}
function $s_RTLong__fromUnsignedInt__I__J(value) {
  return $bL(value, 0);
}
function $s_RTLong__fromInt__I__J(value) {
  var hi = (value >> 31);
  return $bL(value, hi);
}
function $s_RTLong__clz__I__I__I(lo, hi) {
  return ((hi !== 0) ? Math.clz32(hi) : ((32 + Math.clz32(lo)) | 0));
}
function $s_RTLong__toFloat__I__I__F(lo, hi) {
  return Math.fround(((4.294967296E9 * hi) + ((((((-2097152) & (hi ^ (hi >> 10))) === 0) || ((65535 & lo) === 0)) ? lo : (32768 | ((-32768) & lo))) >>> 0.0)));
}
function $s_RTLong__toDouble__I__I__D(lo, hi) {
  return ((4.294967296E9 * hi) + (lo >>> 0.0));
}
function $s_RTLong__toInt__I__I__I(lo, hi) {
  return lo;
}
function $s_RTLong__toString__I__I__T(lo, hi) {
  return $m_RTLong$().j4(lo, hi);
}
function $s_RTLong__bitsToDouble__I__I__O__D(lo, hi, fpBitsDataView) {
  fpBitsDataView.setInt32(0, lo, true);
  fpBitsDataView.setInt32(4, hi, true);
  return (+fpBitsDataView.getFloat64(0, true));
}
function $s_RTLong__mul__I__I__I__I__J(alo, ahi, blo, bhi) {
  var a0 = (65535 & alo);
  var a1 = ((alo >>> 16) | 0);
  var b0 = (65535 & blo);
  var b1 = ((blo >>> 16) | 0);
  var a0b0 = Math.imul(a0, b0);
  var a1b0 = Math.imul(a1, b0);
  var a0b1 = Math.imul(a0, b1);
  var lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  var hi = ((((((((Math.imul(alo, bhi) + Math.imul(ahi, blo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__sub__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = ((alo - blo) | 0);
  var hi = ((((ahi - bhi) | 0) + ((((~alo) & blo) | ((~(alo ^ blo)) & lo)) >> 31)) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__add__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = ((alo + blo) | 0);
  var hi = ((((ahi + bhi) | 0) + ((((alo & blo) | ((alo | blo) & (~lo))) >>> 31) | 0)) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__sar__I__I__I__J(lo, hi, n) {
  var lo$1 = (((32 & n) === 0) ? (((lo >>> n) | 0) | ((hi << 1) << (~n))) : (hi >> n));
  var hi$1 = (((32 & n) === 0) ? (hi >> n) : (hi >> 31));
  return $bL(lo$1, hi$1);
}
function $s_RTLong__shr__I__I__I__J(lo, hi, n) {
  var lo$1 = (((32 & n) === 0) ? (((lo >>> n) | 0) | ((hi << 1) << (~n))) : ((hi >>> n) | 0));
  var hi$1 = (((32 & n) === 0) ? ((hi >>> n) | 0) : 0);
  return $bL(lo$1, hi$1);
}
function $s_RTLong__shl__I__I__I__J(lo, hi, n) {
  var lo$1 = (((32 & n) === 0) ? (lo << n) : 0);
  var hi$1 = (((32 & n) === 0) ? (((((lo >>> 1) | 0) >>> (~n)) | 0) | (hi << n)) : (lo << n));
  return $bL(lo$1, hi$1);
}
function $s_RTLong__xor__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = (alo ^ blo);
  var hi = (ahi ^ bhi);
  return $bL(lo, hi);
}
function $s_RTLong__and__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = (alo & blo);
  var hi = (ahi & bhi);
  return $bL(lo, hi);
}
function $s_RTLong__or__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = (alo | blo);
  var hi = (ahi | bhi);
  return $bL(lo, hi);
}
function $s_RTLong__geu__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) >= (blo >>> 0)) : ((ahi >>> 0) > (bhi >>> 0)));
}
function $s_RTLong__gtu__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) > (blo >>> 0)) : ((ahi >>> 0) > (bhi >>> 0)));
}
function $s_RTLong__leu__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) <= (blo >>> 0)) : ((ahi >>> 0) < (bhi >>> 0)));
}
function $s_RTLong__ltu__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) < (blo >>> 0)) : ((ahi >>> 0) < (bhi >>> 0)));
}
function $s_RTLong__ge__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) >= (blo >>> 0)) : (ahi > bhi));
}
function $s_RTLong__gt__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) > (blo >>> 0)) : (ahi > bhi));
}
function $s_RTLong__le__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) <= (blo >>> 0)) : (ahi < bhi));
}
function $s_RTLong__lt__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) < (blo >>> 0)) : (ahi < bhi));
}
function $s_RTLong__notEquals__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return (((alo ^ blo) | (ahi ^ bhi)) !== 0);
}
function $s_RTLong__equals__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return (((alo ^ blo) | (ahi ^ bhi)) === 0);
}
/** @constructor */
function $c_RTLong$() {
}
$p = $c_RTLong$.prototype = new $h_O();
$p.constructor = $c_RTLong$;
/** @constructor */
function $h_RTLong$() {
}
$h_RTLong$.prototype = $p;
$p.j4 = (function(lo, hi) {
  if ((hi === (lo >> 31))) {
    return ("" + lo);
  } else if ((((-2097152) & (hi ^ (hi >> 10))) === 0)) {
    return ("" + ((4.294967296E9 * hi) + (lo >>> 0.0)));
  } else {
    var sign = (hi >> 31);
    var xlo = (lo ^ sign);
    var rlo = ((xlo - sign) | 0);
    var rhi = (((hi ^ sign) + (((xlo & (~rlo)) >>> 31) | 0)) | 0);
    var approxNum = ((4.294967296E9 * (rhi >>> 0.0)) + (rlo >>> 0.0));
    var approxQuot = (+Math.floor((1.0E-9 * approxNum)));
    var approxRem = ((rlo - Math.imul(1000000000, (approxQuot | 0.0))) | 0);
    if ((approxRem < 0)) {
      approxQuot = (approxQuot - 1.0);
      approxRem = ((1000000000 + approxRem) | 0);
    } else if ((approxRem >= 1000000000)) {
      approxQuot = (approxQuot + 1.0);
      approxRem = ((approxRem - 1000000000) | 0);
    }
    var this$7 = approxRem;
    var remStr = ("" + this$7);
    var $x_1 = approxQuot;
    var start = remStr.length;
    var s = ((("" + $x_1) + "000000000".substring(start)) + remStr);
    return ((hi < 0) ? ("-" + s) : s);
  }
});
$p.iy = (function(value) {
  if ((value < (-9.223372036854776E18))) {
    return $bL(0, (-2147483648));
  } else if ((value >= 9.223372036854776E18)) {
    return $bL((-1), 2147483647);
  } else {
    var rawLo = (value | 0.0);
    var rawHi = ((2.3283064365386963E-10 * value) | 0.0);
    var hi = (((value < 0.0) && (rawLo !== 0)) ? ((rawHi - 1) | 0) : rawHi);
    return $bL(rawLo, hi);
  }
});
$p.jP = (function(alo, ahi, blo, bhi) {
  var sign = (ahi >> 31);
  var xlo = (alo ^ sign);
  var rlo = ((xlo - sign) | 0);
  var rhi = (((ahi ^ sign) + (((xlo & (~rlo)) >>> 31) | 0)) | 0);
  var sign$1 = (bhi >> 31);
  var xlo$1 = (blo ^ sign$1);
  var rlo$1 = ((xlo$1 - sign$1) | 0);
  var rhi$1 = (((bhi ^ sign$1) + (((xlo$1 & (~rlo$1)) >>> 31) | 0)) | 0);
  if (((rhi$1 | ((-2097152) & rlo$1)) === 0)) {
    var quotHi = (((rhi >>> 0) / ($checkIntDivisor(rlo$1) >>> 0)) | 0);
    var k = ((rhi - Math.imul(rlo$1, quotHi)) | 0);
    var quotLo = ((((4.294967296E9 * k) + (rlo >>> 0.0)) / rlo$1) | 0.0);
    var absR_$_lo = quotLo;
    var absR_$_hi = quotHi;
  } else if ((((-1073741824) & rhi$1) === 0)) {
    var aHat = ((4.294967296E9 * (rhi >>> 0.0)) + (rlo >>> 0.0));
    var bHat = ((4.294967296E9 * (rhi$1 >>> 0.0)) + (rlo$1 >>> 0.0));
    var x$1 = (aHat / bHat);
    var lo = (x$1 | 0.0);
    var hi = ((2.3283064365386963E-10 * x$1) | 0.0);
    var a0 = (65535 & rlo$1);
    var a1 = ((rlo$1 >>> 16) | 0);
    var b0 = (65535 & lo);
    var b1 = ((lo >>> 16) | 0);
    var a0b0 = Math.imul(a0, b0);
    var a1b0 = Math.imul(a1, b0);
    var a0b1 = Math.imul(a0, b1);
    var lo$1 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    var hi$1 = ((((((((Math.imul(rlo$1, hi) + Math.imul(rhi$1, lo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
    var lo$2 = ((rlo - lo$1) | 0);
    var hi$2 = ((((rhi - hi$1) | 0) + ((((~rlo) & lo$1) | ((~(rlo ^ lo$1)) & lo$2)) >> 31)) | 0);
    if ((hi$2 < 0)) {
      var lo$3 = ((lo - 1) | 0);
      var hi$3 = ((((hi - 1) | 0) + (((lo | (~lo$3)) >>> 31) | 0)) | 0);
      var absR_$_lo = lo$3;
      var absR_$_hi = hi$3;
    } else if (((hi$2 === rhi$1) ? ((lo$2 >>> 0) >= (rlo$1 >>> 0)) : ((hi$2 >>> 0) > (rhi$1 >>> 0)))) {
      var lo$4 = ((1 + lo) | 0);
      var hi$4 = ((hi + (((lo & (~lo$4)) >>> 31) | 0)) | 0);
      var absR_$_lo = lo$4;
      var absR_$_hi = hi$4;
    } else {
      var absR_$_lo = lo;
      var absR_$_hi = hi;
    }
  } else {
    var $x_1 = this.gd(rlo, rhi, rlo$1, rhi$1, true);
    var absR_$_lo = $x_1.l;
    var absR_$_hi = $x_1.h;
  }
  if (((ahi ^ bhi) >= 0)) {
    return $bL(absR_$_lo, absR_$_hi);
  } else {
    var lo$5 = ((-absR_$_lo) | 0);
    var hi$5 = ((((-absR_$_hi) | 0) + ((absR_$_lo | lo$5) >> 31)) | 0);
    return $bL(lo$5, hi$5);
  }
});
$p.jQ = (function(alo, ahi, blo, bhi) {
  if (((bhi | ((-2097152) & blo)) === 0)) {
    var quotHi = (((ahi >>> 0) / ($checkIntDivisor(blo) >>> 0)) | 0);
    var k = ((ahi - Math.imul(blo, quotHi)) | 0);
    var quotLo = ((((4.294967296E9 * k) + (alo >>> 0.0)) / blo) | 0.0);
    return $bL(quotLo, quotHi);
  } else if ((((-1073741824) & bhi) === 0)) {
    var aHat = ((4.294967296E9 * (ahi >>> 0.0)) + (alo >>> 0.0));
    var bHat = ((4.294967296E9 * (bhi >>> 0.0)) + (blo >>> 0.0));
    var x$1 = (aHat / bHat);
    var lo = (x$1 | 0.0);
    var hi = ((2.3283064365386963E-10 * x$1) | 0.0);
    var a0 = (65535 & blo);
    var a1 = ((blo >>> 16) | 0);
    var b0 = (65535 & lo);
    var b1 = ((lo >>> 16) | 0);
    var a0b0 = Math.imul(a0, b0);
    var a1b0 = Math.imul(a1, b0);
    var a0b1 = Math.imul(a0, b1);
    var lo$1 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    var hi$1 = ((((((((Math.imul(blo, hi) + Math.imul(bhi, lo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
    var lo$2 = ((alo - lo$1) | 0);
    var hi$2 = ((((ahi - hi$1) | 0) + ((((~alo) & lo$1) | ((~(alo ^ lo$1)) & lo$2)) >> 31)) | 0);
    if ((hi$2 < 0)) {
      var lo$3 = ((lo - 1) | 0);
      var hi$3 = ((((hi - 1) | 0) + (((lo | (~lo$3)) >>> 31) | 0)) | 0);
      return $bL(lo$3, hi$3);
    } else if (((hi$2 === bhi) ? ((lo$2 >>> 0) >= (blo >>> 0)) : ((hi$2 >>> 0) > (bhi >>> 0)))) {
      var lo$4 = ((1 + lo) | 0);
      var hi$4 = ((hi + (((lo & (~lo$4)) >>> 31) | 0)) | 0);
      return $bL(lo$4, hi$4);
    } else {
      return $bL(lo, hi);
    }
  } else {
    return this.gd(alo, ahi, blo, bhi, true);
  }
});
$p.l5 = (function(alo, ahi, blo, bhi) {
  var sign = (ahi >> 31);
  var xlo = (alo ^ sign);
  var rlo = ((xlo - sign) | 0);
  var rhi = (((ahi ^ sign) + (((xlo & (~rlo)) >>> 31) | 0)) | 0);
  var sign$1 = (bhi >> 31);
  var xlo$1 = (blo ^ sign$1);
  var rlo$1 = ((xlo$1 - sign$1) | 0);
  var rhi$1 = (((bhi ^ sign$1) + (((xlo$1 & (~rlo$1)) >>> 31) | 0)) | 0);
  if (((rhi$1 | ((-2097152) & rlo$1)) === 0)) {
    var k$2 = (((rhi >>> 0) % ($checkIntDivisor(rlo$1) >>> 0)) | 0);
    var quotLo$2 = ((((4.294967296E9 * k$2) + (rlo >>> 0.0)) / rlo$1) | 0.0);
    var remLo = ((rlo - Math.imul(rlo$1, quotLo$2)) | 0);
    var absR_$_lo = remLo;
    var absR_$_hi = 0;
  } else if ((((-1073741824) & rhi$1) === 0)) {
    var aHat = ((4.294967296E9 * (rhi >>> 0.0)) + (rlo >>> 0.0));
    var bHat = ((4.294967296E9 * (rhi$1 >>> 0.0)) + (rlo$1 >>> 0.0));
    var x$1 = (aHat / bHat);
    var lo = (x$1 | 0.0);
    var hi = ((2.3283064365386963E-10 * x$1) | 0.0);
    var a0 = (65535 & rlo$1);
    var a1 = ((rlo$1 >>> 16) | 0);
    var b0 = (65535 & lo);
    var b1 = ((lo >>> 16) | 0);
    var a0b0 = Math.imul(a0, b0);
    var a1b0 = Math.imul(a1, b0);
    var a0b1 = Math.imul(a0, b1);
    var lo$1 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    var hi$1 = ((((((((Math.imul(rlo$1, hi) + Math.imul(rhi$1, lo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
    var lo$2 = ((rlo - lo$1) | 0);
    var hi$2 = ((((rhi - hi$1) | 0) + ((((~rlo) & lo$1) | ((~(rlo ^ lo$1)) & lo$2)) >> 31)) | 0);
    if ((hi$2 < 0)) {
      var lo$3 = ((lo$2 + rlo$1) | 0);
      var hi$3 = ((((hi$2 + rhi$1) | 0) + ((((lo$2 & rlo$1) | ((lo$2 | rlo$1) & (~lo$3))) >>> 31) | 0)) | 0);
      var absR_$_lo = lo$3;
      var absR_$_hi = hi$3;
    } else if (((hi$2 === rhi$1) ? ((lo$2 >>> 0) >= (rlo$1 >>> 0)) : ((hi$2 >>> 0) > (rhi$1 >>> 0)))) {
      var lo$4 = ((lo$2 - rlo$1) | 0);
      var hi$4 = ((((hi$2 - rhi$1) | 0) + ((((~lo$2) & rlo$1) | ((~(lo$2 ^ rlo$1)) & lo$4)) >> 31)) | 0);
      var absR_$_lo = lo$4;
      var absR_$_hi = hi$4;
    } else {
      var absR_$_lo = lo$2;
      var absR_$_hi = hi$2;
    }
  } else {
    var $x_1 = this.gd(rlo, rhi, rlo$1, rhi$1, false);
    var absR_$_lo = $x_1.l;
    var absR_$_hi = $x_1.h;
  }
  if ((ahi < 0)) {
    var lo$5 = ((-absR_$_lo) | 0);
    var hi$5 = ((((-absR_$_hi) | 0) + ((absR_$_lo | lo$5) >> 31)) | 0);
    return $bL(lo$5, hi$5);
  } else {
    return $bL(absR_$_lo, absR_$_hi);
  }
});
$p.l6 = (function(alo, ahi, blo, bhi) {
  if (((bhi | ((-2097152) & blo)) === 0)) {
    var k$2 = (((ahi >>> 0) % ($checkIntDivisor(blo) >>> 0)) | 0);
    var quotLo$2 = ((((4.294967296E9 * k$2) + (alo >>> 0.0)) / blo) | 0.0);
    var remLo = ((alo - Math.imul(blo, quotLo$2)) | 0);
    return $bL(remLo, 0);
  } else if ((((-1073741824) & bhi) === 0)) {
    var aHat = ((4.294967296E9 * (ahi >>> 0.0)) + (alo >>> 0.0));
    var bHat = ((4.294967296E9 * (bhi >>> 0.0)) + (blo >>> 0.0));
    var x$1 = (aHat / bHat);
    var lo = (x$1 | 0.0);
    var hi = ((2.3283064365386963E-10 * x$1) | 0.0);
    var a0 = (65535 & blo);
    var a1 = ((blo >>> 16) | 0);
    var b0 = (65535 & lo);
    var b1 = ((lo >>> 16) | 0);
    var a0b0 = Math.imul(a0, b0);
    var a1b0 = Math.imul(a1, b0);
    var a0b1 = Math.imul(a0, b1);
    var lo$1 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    var hi$1 = ((((((((Math.imul(blo, hi) + Math.imul(bhi, lo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
    var lo$2 = ((alo - lo$1) | 0);
    var hi$2 = ((((ahi - hi$1) | 0) + ((((~alo) & lo$1) | ((~(alo ^ lo$1)) & lo$2)) >> 31)) | 0);
    if ((hi$2 < 0)) {
      var lo$3 = ((lo$2 + blo) | 0);
      var hi$3 = ((((hi$2 + bhi) | 0) + ((((lo$2 & blo) | ((lo$2 | blo) & (~lo$3))) >>> 31) | 0)) | 0);
      return $bL(lo$3, hi$3);
    } else if (((hi$2 === bhi) ? ((lo$2 >>> 0) >= (blo >>> 0)) : ((hi$2 >>> 0) > (bhi >>> 0)))) {
      var lo$4 = ((lo$2 - blo) | 0);
      var hi$4 = ((((hi$2 - bhi) | 0) + ((((~lo$2) & blo) | ((~(lo$2 ^ blo)) & lo$4)) >> 31)) | 0);
      return $bL(lo$4, hi$4);
    } else {
      return $bL(lo$2, hi$2);
    }
  } else {
    return this.gd(alo, ahi, blo, bhi, false);
  }
});
$p.gd = (function(alo, ahi, blo, bhi, askQuotient) {
  var quot1 = 0;
  if ((bhi >= 0)) {
    var lo = (blo << 1);
    var hi = (((blo >>> 31) | 0) | (bhi << 1));
    if (((ahi === hi) ? ((alo >>> 0) >= (lo >>> 0)) : ((ahi >>> 0) > (hi >>> 0)))) {
      quot1 = 2;
      var lo$1 = ((alo - lo) | 0);
      var hi$1 = ((((ahi - hi) | 0) + ((((~alo) & lo) | ((~(alo ^ lo)) & lo$1)) >> 31)) | 0);
      var rem1_$_lo = lo$1;
      var rem1_$_hi = hi$1;
    } else {
      var rem1_$_lo = alo;
      var rem1_$_hi = ahi;
    }
  } else {
    var rem1_$_lo = alo;
    var rem1_$_hi = ahi;
  }
  var rem1LTUb = ((rem1_$_hi === bhi) ? ((rem1_$_lo >>> 0) < (blo >>> 0)) : ((rem1_$_hi >>> 0) < (bhi >>> 0)));
  if (askQuotient) {
    if (rem1LTUb) {
      var lo$2 = quot1;
      return $bL(lo$2, 0);
    } else {
      var lo$3 = ((1 + quot1) | 0);
      return $bL(lo$3, 0);
    }
  } else if (rem1LTUb) {
    return $bL(rem1_$_lo, rem1_$_hi);
  } else {
    var lo$4 = ((rem1_$_lo - blo) | 0);
    var hi$2 = ((((rem1_$_hi - bhi) | 0) + ((((~rem1_$_lo) & blo) | ((~(rem1_$_lo ^ blo)) & lo$4)) >> 31)) | 0);
    return $bL(lo$4, hi$2);
  }
});
var $d_RTLong$ = new $TypeData().i($c_RTLong$, "org.scalajs.linker.runtime.RuntimeLong$", ({
  b8: 1
}));
var $n_RTLong$;
function $m_RTLong$() {
  if ((!$n_RTLong$)) {
    $n_RTLong$ = new $c_RTLong$();
  }
  return $n_RTLong$;
}
/** @constructor */
function $c_s_LowPriorityImplicits2() {
}
$p = $c_s_LowPriorityImplicits2.prototype = new $h_O();
$p.constructor = $c_s_LowPriorityImplicits2;
/** @constructor */
function $h_s_LowPriorityImplicits2() {
}
$h_s_LowPriorityImplicits2.prototype = $p;
function $f_sc_IterableOnceOps__foreach__F1__V($thiz, f) {
  var it = $thiz.F();
  while (it.z()) {
    f.l(it.w());
  }
}
function $f_sc_IterableOnceOps__copyToArray__O__I__I__I($thiz, dest, start, n) {
  var it = $thiz.F();
  var i = start;
  matchResult18: {
    var srclen;
    var x31 = $thiz.K();
    if ((x31 === (-1))) {
      var srclen = $m_jl_reflect_Array$().eO(dest);
      break matchResult18;
    }
    var srclen = x31;
  }
  var destLen = $m_jl_reflect_Array$().eO(dest);
  var limit = ((n < srclen) ? n : srclen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var end = ((start + ((total < 0) ? 0 : total)) | 0);
  while (((i < end) && it.z())) {
    $m_sr_ScalaRunTime$().jG(dest, i, it.w());
    i = ((1 + i) | 0);
  }
  return ((i - start) | 0);
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  return (($thiz.K() === 0) ? (("" + start) + end) : $thiz.gY($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).Z.u);
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.Z;
  if ((start.length !== 0)) {
    jsb.u = (("" + jsb.u) + start);
  }
  var it = $thiz.F();
  if (it.z()) {
    var obj = it.w();
    jsb.u = (("" + jsb.u) + obj);
    while (it.z()) {
      if ((sep.length !== 0)) {
        jsb.u = (("" + jsb.u) + sep);
      }
      var obj$1 = it.w();
      jsb.u = (("" + jsb.u) + obj$1);
    }
  }
  if ((end.length !== 0)) {
    jsb.u = (("" + jsb.u) + end);
  }
  return b;
}
/** @constructor */
function $c_sr_Scala3RunTime$() {
}
$p = $c_sr_Scala3RunTime$.prototype = new $h_O();
$p.constructor = $c_sr_Scala3RunTime$;
/** @constructor */
function $h_sr_Scala3RunTime$() {
}
$h_sr_Scala3RunTime$.prototype = $p;
$p.jH = (function() {
  throw new $c_jl_AssertionError("assertion failed");
});
var $d_sr_Scala3RunTime$ = new $TypeData().i($c_sr_Scala3RunTime$, "scala.runtime.Scala3RunTime$", ({
  cs: 1
}));
var $n_sr_Scala3RunTime$;
function $m_sr_Scala3RunTime$() {
  if ((!$n_sr_Scala3RunTime$)) {
    $n_sr_Scala3RunTime$ = new $c_sr_Scala3RunTime$();
  }
  return $n_sr_Scala3RunTime$;
}
/** @constructor */
function $c_sr_ScalaRunTime$() {
}
$p = $c_sr_ScalaRunTime$.prototype = new $h_O();
$p.constructor = $c_sr_ScalaRunTime$;
/** @constructor */
function $h_sr_ScalaRunTime$() {
}
$h_sr_ScalaRunTime$.prototype = $p;
$p.aA = (function(xs, idx) {
  if ((xs instanceof $ac_O)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_I)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_D)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_J)) {
    var $x_1 = xs.a;
    var $x_2 = (idx << 1);
    return $bL($x_1[$x_2], $x_1[(($x_2 + 1) | 0)]);
  }
  if ((xs instanceof $ac_F)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_C)) {
    return $bC(xs.a[idx]);
  }
  if ((xs instanceof $ac_B)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_S)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_Z)) {
    return xs.a[idx];
  }
  if ((xs === null)) {
    throw new $c_jl_NullPointerException();
  }
  throw new $c_s_MatchError(xs);
});
$p.jG = (function(xs, idx, value) {
  if ((xs instanceof $ac_O)) {
    xs.a[idx] = value;
    return (void 0);
  }
  if ((xs instanceof $ac_I)) {
    xs.a[idx] = (value | 0);
    return (void 0);
  }
  if ((xs instanceof $ac_D)) {
    xs.a[idx] = (+value);
    return (void 0);
  }
  if ((xs instanceof $ac_J)) {
    var $x_1 = $uJ(value);
    var $x_2 = xs.a;
    var $x_3 = (idx << 1);
    $x_2[$x_3] = $x_1.l;
    $x_2[(($x_3 + 1) | 0)] = $x_1.h;
    return (void 0);
  }
  if ((xs instanceof $ac_F)) {
    xs.a[idx] = Math.fround(value);
    return (void 0);
  }
  if ((xs instanceof $ac_C)) {
    xs.a[idx] = $uC(value);
    return (void 0);
  }
  if ((xs instanceof $ac_B)) {
    xs.a[idx] = (value | 0);
    return (void 0);
  }
  if ((xs instanceof $ac_S)) {
    xs.a[idx] = (value | 0);
    return (void 0);
  }
  if ((xs instanceof $ac_Z)) {
    xs.a[idx] = (!(!value));
    return (void 0);
  }
  if ((xs === null)) {
    throw new $c_jl_NullPointerException();
  }
  throw new $c_s_MatchError(xs);
});
$p.ju = (function(x) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(x.k(), (x.j() + "("), ",", ")");
});
$p.ha = (function(xs) {
  if ((xs === null)) {
    return null;
  } else if ((xs.a.length === 0)) {
    var this$2 = $m_sci_ArraySeq$();
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    return $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef(this$2);
  } else {
    return new $c_sci_ArraySeq$ofRef(xs);
  }
});
var $d_sr_ScalaRunTime$ = new $TypeData().i($c_sr_ScalaRunTime$, "scala.runtime.ScalaRunTime$", ({
  ct: 1
}));
var $n_sr_ScalaRunTime$;
function $m_sr_ScalaRunTime$() {
  if ((!$n_sr_ScalaRunTime$)) {
    $n_sr_ScalaRunTime$ = new $c_sr_ScalaRunTime$();
  }
  return $n_sr_ScalaRunTime$;
}
/** @constructor */
function $c_sr_Statics$() {
}
$p = $c_sr_Statics$.prototype = new $h_O();
$p.constructor = $c_sr_Statics$;
/** @constructor */
function $h_sr_Statics$() {
}
$h_sr_Statics$.prototype = $p;
$p.kk = (function(lv_$_lo, lv_$_hi) {
  return ((lv_$_hi === (lv_$_lo >> 31)) ? lv_$_lo : (lv_$_lo ^ lv_$_hi));
});
$p.jR = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var $x_1 = $m_RTLong$().iy(dv);
    var lv_$_lo = $x_1.l;
    var lv_$_hi = $x_1.h;
    if ((((4.294967296E9 * lv_$_hi) + (lv_$_lo >>> 0.0)) === dv)) {
      return (lv_$_lo ^ lv_$_hi);
    } else {
      var valueInt = (dv | 0);
      if (((valueInt === dv) && ((1.0 / dv) !== (-Infinity)))) {
        return valueInt;
      } else if ((dv !== dv)) {
        return 2146959360;
      } else {
        var fpBitsDataView = $fpBitsDataView;
        fpBitsDataView.setFloat64(0, dv, true);
        return ((fpBitsDataView.getInt32(0, true) | 0) ^ (fpBitsDataView.getInt32(4, true) | 0));
      }
    }
  }
});
$p.q = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    return this.jR((+x));
  } else if ((x instanceof $Long)) {
    var $x_1 = $uJ(x);
    return this.kk($x_1.l, $x_1.h);
  } else {
    return $dp_hashCode__I(x);
  }
});
$p.kh = (function(n) {
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
var $d_sr_Statics$ = new $TypeData().i($c_sr_Statics$, "scala.runtime.Statics$", ({
  cv: 1
}));
var $n_sr_Statics$;
function $m_sr_Statics$() {
  if ((!$n_sr_Statics$)) {
    $n_sr_Statics$ = new $c_sr_Statics$();
  }
  return $n_sr_Statics$;
}
function $p_sr_Tuples$__specialCaseCons__O__s_Product__s_Product($thiz, x, self) {
  if (($m_T$package$EmptyTuple$() === self)) {
    return new $c_T1(x);
  }
  if ((self instanceof $c_T1)) {
    return new $c_T2(x, self.f8);
  }
  if ((self instanceof $c_T2)) {
    return new $c_T3(x, self.V, self.W);
  }
  if ((self instanceof $c_T3)) {
    return new $c_T4(x, self.ag, self.a2, self.a3);
  }
  if ((self instanceof $c_T4)) {
    return new $c_T5(x, self.dQ, self.ah, self.ai, self.aj);
  }
  if ((self instanceof $c_T5)) {
    return new $c_T6(x, self.fm, self.dR, self.dS, self.dT, self.dU);
  }
  if ((self instanceof $c_T6)) {
    return new $c_T7(x, self.fn, self.dV, self.dW, self.dX, self.dY, self.dZ);
  }
  if ((self instanceof $c_T7)) {
    return new $c_T8(x, self.fo, self.e0, self.e1, self.e2, self.e3, self.e4, self.e5);
  }
  if ((self instanceof $c_T8)) {
    return new $c_T9(x, self.fp, self.e6, self.e7, self.e8, self.e9, self.ea, self.eb, self.ec);
  }
  if ((self instanceof $c_T9)) {
    return new $c_T10(x, self.fq, self.ed, self.ee, self.ef, self.eg, self.eh, self.ei, self.ej, self.ek);
  }
  if ((self instanceof $c_T10)) {
    return new $c_T11(x, self.f9, self.aH, self.aI, self.aJ, self.aK, self.aL, self.aM, self.aN, self.aO, self.aG);
  }
  if ((self instanceof $c_T11)) {
    return new $c_T12(x, self.fa, self.aR, self.aS, self.aT, self.aU, self.aV, self.aW, self.aX, self.aY, self.aP, self.aQ);
  }
  if ((self instanceof $c_T12)) {
    return new $c_T13(x, self.fb, self.b2, self.b3, self.b4, self.b5, self.b6, self.b7, self.b8, self.b9, self.aZ, self.b0, self.b1);
  }
  if ((self instanceof $c_T13)) {
    return new $c_T14(x, self.fc, self.be, self.bf, self.bg, self.bh, self.bi, self.bj, self.bk, self.bl, self.ba, self.bb, self.bc, self.bd);
  }
  if ((self instanceof $c_T14)) {
    return new $c_T15(x, self.fd, self.br, self.bs, self.bt, self.bu, self.bv, self.bw, self.bx, self.by, self.bm, self.bn, self.bo, self.bp, self.bq);
  }
  if ((self instanceof $c_T15)) {
    return new $c_T16(x, self.fe, self.bF, self.bG, self.bH, self.bI, self.bJ, self.bK, self.bL, self.bM, self.bz, self.bA, self.bB, self.bC, self.bD, self.bE);
  }
  if ((self instanceof $c_T16)) {
    return new $c_T17(x, self.ff, self.bU, self.bV, self.bW, self.bX, self.bY, self.bZ, self.c0, self.c1, self.bN, self.bO, self.bP, self.bQ, self.bR, self.bS, self.bT);
  }
  if ((self instanceof $c_T17)) {
    return new $c_T18(x, self.fg, self.ca, self.cb, self.cc, self.cd, self.ce, self.cf, self.cg, self.ch, self.c2, self.c3, self.c4, self.c5, self.c6, self.c7, self.c8, self.c9);
  }
  if ((self instanceof $c_T18)) {
    return new $c_T19(x, self.fh, self.cr, self.cs, self.ct, self.cu, self.cv, self.cw, self.cx, self.cy, self.ci, self.cj, self.ck, self.cl, self.cm, self.cn, self.co, self.cp, self.cq);
  }
  if ((self instanceof $c_T19)) {
    return new $c_T20(x, self.fi, self.cJ, self.cK, self.cL, self.cM, self.cN, self.cO, self.cP, self.cQ, self.cz, self.cA, self.cB, self.cC, self.cD, self.cE, self.cF, self.cG, self.cH, self.cI);
  }
  if ((self instanceof $c_T20)) {
    return new $c_T21(x, self.fj, self.d1, self.d3, self.d4, self.d5, self.d6, self.d7, self.d8, self.d9, self.cR, self.cS, self.cT, self.cU, self.cV, self.cW, self.cX, self.cY, self.cZ, self.d0, self.d2);
  }
  if ((self instanceof $c_T21)) {
    return new $c_T22(x, self.fk, self.dk, self.dn, self.dp, self.dq, self.dr, self.ds, self.dt, self.du, self.da, self.db, self.dc, self.dd, self.de, self.df, self.dg, self.dh, self.di, self.dj, self.dl, self.dm);
  }
  if ((self instanceof $c_T22)) {
    return new $c_sr_TupleXXL(new $ac_O([x, self.fl, self.dF, self.dJ, self.dK, self.dL, self.dM, self.dN, self.dO, self.dP, self.dv, self.dw, self.dx, self.dy, self.dz, self.dA, self.dB, self.dC, self.dD, self.dE, self.dG, self.dH, self.dI]));
  }
  throw new $c_s_MatchError(self);
}
function $p_sr_Tuples$__xxlCons__O__sr_TupleXXL__sr_TupleXXL($thiz, x, xxl) {
  var arr = new $ac_O(((1 + xxl.h()) | 0));
  arr.a[0] = x;
  var src = xxl.L;
  var length = xxl.h();
  src.H(0, arr, 1, length);
  return new $c_sr_TupleXXL(arr);
}
function $p_sr_Tuples$__specialCaseTail__s_Product__s_Product($thiz, self) {
  matchResult34$1: {
    var $x_1;
    if ((self instanceof $c_T1)) {
      var $x_1 = $m_T$package$EmptyTuple$();
      break matchResult34$1;
    }
    if ((self instanceof $c_T2)) {
      var $x_1 = new $c_T1(self.W);
      break matchResult34$1;
    }
    if ((self instanceof $c_T3)) {
      var $x_1 = new $c_T2(self.a2, self.a3);
      break matchResult34$1;
    }
    if ((self instanceof $c_T4)) {
      var $x_1 = new $c_T3(self.ah, self.ai, self.aj);
      break matchResult34$1;
    }
    if ((self instanceof $c_T5)) {
      var $x_1 = new $c_T4(self.dR, self.dS, self.dT, self.dU);
      break matchResult34$1;
    }
    if ((self instanceof $c_T6)) {
      var $x_1 = new $c_T5(self.dV, self.dW, self.dX, self.dY, self.dZ);
      break matchResult34$1;
    }
    if ((self instanceof $c_T7)) {
      var $x_1 = new $c_T6(self.e0, self.e1, self.e2, self.e3, self.e4, self.e5);
      break matchResult34$1;
    }
    if ((self instanceof $c_T8)) {
      var $x_1 = new $c_T7(self.e6, self.e7, self.e8, self.e9, self.ea, self.eb, self.ec);
      break matchResult34$1;
    }
    if ((self instanceof $c_T9)) {
      var $x_1 = new $c_T8(self.ed, self.ee, self.ef, self.eg, self.eh, self.ei, self.ej, self.ek);
      break matchResult34$1;
    }
    if ((self instanceof $c_T10)) {
      var $x_1 = new $c_T9(self.aH, self.aI, self.aJ, self.aK, self.aL, self.aM, self.aN, self.aO, self.aG);
      break matchResult34$1;
    }
    if ((self instanceof $c_T11)) {
      var $x_1 = new $c_T10(self.aR, self.aS, self.aT, self.aU, self.aV, self.aW, self.aX, self.aY, self.aP, self.aQ);
      break matchResult34$1;
    }
    if ((self instanceof $c_T12)) {
      var $x_1 = new $c_T11(self.b2, self.b3, self.b4, self.b5, self.b6, self.b7, self.b8, self.b9, self.aZ, self.b0, self.b1);
      break matchResult34$1;
    }
    if ((self instanceof $c_T13)) {
      var $x_1 = new $c_T12(self.be, self.bf, self.bg, self.bh, self.bi, self.bj, self.bk, self.bl, self.ba, self.bb, self.bc, self.bd);
      break matchResult34$1;
    }
    if ((self instanceof $c_T14)) {
      var $x_1 = new $c_T13(self.br, self.bs, self.bt, self.bu, self.bv, self.bw, self.bx, self.by, self.bm, self.bn, self.bo, self.bp, self.bq);
      break matchResult34$1;
    }
    if ((self instanceof $c_T15)) {
      var $x_1 = new $c_T14(self.bF, self.bG, self.bH, self.bI, self.bJ, self.bK, self.bL, self.bM, self.bz, self.bA, self.bB, self.bC, self.bD, self.bE);
      break matchResult34$1;
    }
    if ((self instanceof $c_T16)) {
      var $x_1 = new $c_T15(self.bU, self.bV, self.bW, self.bX, self.bY, self.bZ, self.c0, self.c1, self.bN, self.bO, self.bP, self.bQ, self.bR, self.bS, self.bT);
      break matchResult34$1;
    }
    if ((self instanceof $c_T17)) {
      var $x_1 = new $c_T16(self.ca, self.cb, self.cc, self.cd, self.ce, self.cf, self.cg, self.ch, self.c2, self.c3, self.c4, self.c5, self.c6, self.c7, self.c8, self.c9);
      break matchResult34$1;
    }
    if ((self instanceof $c_T18)) {
      var $x_1 = new $c_T17(self.cr, self.cs, self.ct, self.cu, self.cv, self.cw, self.cx, self.cy, self.ci, self.cj, self.ck, self.cl, self.cm, self.cn, self.co, self.cp, self.cq);
      break matchResult34$1;
    }
    if ((self instanceof $c_T19)) {
      var $x_1 = new $c_T18(self.cJ, self.cK, self.cL, self.cM, self.cN, self.cO, self.cP, self.cQ, self.cz, self.cA, self.cB, self.cC, self.cD, self.cE, self.cF, self.cG, self.cH, self.cI);
      break matchResult34$1;
    }
    if ((self instanceof $c_T20)) {
      var $x_1 = new $c_T19(self.d1, self.d3, self.d4, self.d5, self.d6, self.d7, self.d8, self.d9, self.cR, self.cS, self.cT, self.cU, self.cV, self.cW, self.cX, self.cY, self.cZ, self.d0, self.d2);
      break matchResult34$1;
    }
    if ((self instanceof $c_T21)) {
      var $x_1 = new $c_T20(self.dk, self.dn, self.dp, self.dq, self.dr, self.ds, self.dt, self.du, self.da, self.db, self.dc, self.dd, self.de, self.df, self.dg, self.dh, self.di, self.dj, self.dl, self.dm);
      break matchResult34$1;
    }
    if ((self instanceof $c_T22)) {
      var $x_1 = new $c_T21(self.dF, self.dJ, self.dK, self.dL, self.dM, self.dN, self.dO, self.dP, self.dv, self.dw, self.dx, self.dy, self.dz, self.dA, self.dB, self.dC, self.dD, self.dE, self.dG, self.dH, self.dI);
      break matchResult34$1;
    }
    throw new $c_s_MatchError(self);
  }
  return $x_1;
}
function $p_sr_Tuples$__xxlTail__sr_TupleXXL__s_Product($thiz, xxl) {
  if ((xxl.h() === 23)) {
    var elems = xxl.L;
    return new $c_T22(elems.a[1], elems.a[2], elems.a[3], elems.a[4], elems.a[5], elems.a[6], elems.a[7], elems.a[8], elems.a[9], elems.a[10], elems.a[11], elems.a[12], elems.a[13], elems.a[14], elems.a[15], elems.a[16], elems.a[17], elems.a[18], elems.a[19], elems.a[20], elems.a[21], elems.a[22]);
  } else {
    var arr$1 = new $ac_O(((xxl.L.a.length - 1) | 0));
    var src = xxl.L;
    var length = ((xxl.L.a.length - 1) | 0);
    src.H(1, arr$1, 0, length);
    return new $c_sr_TupleXXL(arr$1);
  }
}
/** @constructor */
function $c_sr_Tuples$() {
}
$p = $c_sr_Tuples$.prototype = new $h_O();
$p.constructor = $c_sr_Tuples$;
/** @constructor */
function $h_sr_Tuples$() {
}
$h_sr_Tuples$.prototype = $p;
$p.k3 = (function(xs) {
  switch (xs.a.length) {
    case 0: {
      return $m_T$package$EmptyTuple$();
      break;
    }
    case 1: {
      return new $c_T1(xs.a[0]);
      break;
    }
    case 2: {
      return new $c_T2(xs.a[0], xs.a[1]);
      break;
    }
    case 3: {
      return new $c_T3(xs.a[0], xs.a[1], xs.a[2]);
      break;
    }
    case 4: {
      return new $c_T4(xs.a[0], xs.a[1], xs.a[2], xs.a[3]);
      break;
    }
    case 5: {
      return new $c_T5(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4]);
      break;
    }
    case 6: {
      return new $c_T6(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5]);
      break;
    }
    case 7: {
      return new $c_T7(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6]);
      break;
    }
    case 8: {
      return new $c_T8(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7]);
      break;
    }
    case 9: {
      return new $c_T9(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8]);
      break;
    }
    case 10: {
      return new $c_T10(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8], xs.a[9]);
      break;
    }
    case 11: {
      return new $c_T11(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8], xs.a[9], xs.a[10]);
      break;
    }
    case 12: {
      return new $c_T12(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8], xs.a[9], xs.a[10], xs.a[11]);
      break;
    }
    case 13: {
      return new $c_T13(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8], xs.a[9], xs.a[10], xs.a[11], xs.a[12]);
      break;
    }
    case 14: {
      return new $c_T14(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8], xs.a[9], xs.a[10], xs.a[11], xs.a[12], xs.a[13]);
      break;
    }
    case 15: {
      return new $c_T15(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8], xs.a[9], xs.a[10], xs.a[11], xs.a[12], xs.a[13], xs.a[14]);
      break;
    }
    case 16: {
      return new $c_T16(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8], xs.a[9], xs.a[10], xs.a[11], xs.a[12], xs.a[13], xs.a[14], xs.a[15]);
      break;
    }
    case 17: {
      return new $c_T17(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8], xs.a[9], xs.a[10], xs.a[11], xs.a[12], xs.a[13], xs.a[14], xs.a[15], xs.a[16]);
      break;
    }
    case 18: {
      return new $c_T18(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8], xs.a[9], xs.a[10], xs.a[11], xs.a[12], xs.a[13], xs.a[14], xs.a[15], xs.a[16], xs.a[17]);
      break;
    }
    case 19: {
      return new $c_T19(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8], xs.a[9], xs.a[10], xs.a[11], xs.a[12], xs.a[13], xs.a[14], xs.a[15], xs.a[16], xs.a[17], xs.a[18]);
      break;
    }
    case 20: {
      return new $c_T20(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8], xs.a[9], xs.a[10], xs.a[11], xs.a[12], xs.a[13], xs.a[14], xs.a[15], xs.a[16], xs.a[17], xs.a[18], xs.a[19]);
      break;
    }
    case 21: {
      return new $c_T21(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8], xs.a[9], xs.a[10], xs.a[11], xs.a[12], xs.a[13], xs.a[14], xs.a[15], xs.a[16], xs.a[17], xs.a[18], xs.a[19], xs.a[20]);
      break;
    }
    case 22: {
      return new $c_T22(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8], xs.a[9], xs.a[10], xs.a[11], xs.a[12], xs.a[13], xs.a[14], xs.a[15], xs.a[16], xs.a[17], xs.a[18], xs.a[19], xs.a[20], xs.a[21]);
      break;
    }
    default: {
      return new $c_sr_TupleXXL(xs.N());
    }
  }
});
$p.k4 = (function(xs) {
  return ((xs.a.length <= 22) ? this.k3(xs) : new $c_sr_TupleXXL(xs));
});
$p.iu = (function(x, self) {
  return ((self instanceof $c_sr_TupleXXL) ? $p_sr_Tuples$__xxlCons__O__sr_TupleXXL__sr_TupleXXL(this, x, self) : $p_sr_Tuples$__specialCaseCons__O__s_Product__s_Product(this, x, self));
});
$p.jN = (function(self, that) {
  var selfSize = $m_sr_Tuples$().j3(self);
  if ((selfSize === 0)) {
    return that;
  }
  var thatSize = $m_sr_Tuples$().j3(that);
  if ((thatSize === 0)) {
    return self;
  }
  var arr = new $ac_O(((selfSize + thatSize) | 0));
  if ((self instanceof $c_sr_TupleXXL)) {
    var src = self.L;
    src.H(0, arr, 0, selfSize);
  } else {
    self.k().iv(arr, 0, selfSize);
  }
  if ((that instanceof $c_sr_TupleXXL)) {
    var src$1 = that.L;
    src$1.H(0, arr, selfSize, thatSize);
  } else {
    that.k().iv(arr, selfSize, thatSize);
  }
  return this.k4(arr);
});
$p.j3 = (function(self) {
  if (($m_T$package$EmptyTuple$() === self)) {
    return 0;
  }
  if ((self !== null)) {
    return self.h();
  }
  throw new $c_s_MatchError(self);
});
$p.li = (function(self) {
  return ((self instanceof $c_sr_TupleXXL) ? $p_sr_Tuples$__xxlTail__sr_TupleXXL__s_Product(this, self) : $p_sr_Tuples$__specialCaseTail__s_Product__s_Product(this, self));
});
var $d_sr_Tuples$ = new $TypeData().i($c_sr_Tuples$, "scala.runtime.Tuples$", ({
  cw: 1
}));
var $n_sr_Tuples$;
function $m_sr_Tuples$() {
  if ((!$n_sr_Tuples$)) {
    $n_sr_Tuples$ = new $c_sr_Tuples$();
  }
  return $n_sr_Tuples$;
}
var $d_sjs_js_Any = new $TypeData().i(2, "scala.scalajs.js.Any", ({
  ay: 1
}), $noIsInstance);
/** @constructor */
function $c_sjs_js_Any$ObjectCompanionOps$() {
}
$p = $c_sjs_js_Any$ObjectCompanionOps$.prototype = new $h_O();
$p.constructor = $c_sjs_js_Any$ObjectCompanionOps$;
/** @constructor */
function $h_sjs_js_Any$ObjectCompanionOps$() {
}
$h_sjs_js_Any$ObjectCompanionOps$.prototype = $p;
$p.ka = (function(this$, o, p) {
  return (!(!(p in o)));
});
var $d_sjs_js_Any$ObjectCompanionOps$ = new $TypeData().i($c_sjs_js_Any$ObjectCompanionOps$, "scala.scalajs.js.Any$ObjectCompanionOps$", ({
  cy: 1
}));
var $n_sjs_js_Any$ObjectCompanionOps$;
function $m_sjs_js_Any$ObjectCompanionOps$() {
  if ((!$n_sjs_js_Any$ObjectCompanionOps$)) {
    $n_sjs_js_Any$ObjectCompanionOps$ = new $c_sjs_js_Any$ObjectCompanionOps$();
  }
  return $n_sjs_js_Any$ObjectCompanionOps$;
}
/** @constructor */
function $c_sjs_js_ArrayOps$() {
}
$p = $c_sjs_js_ArrayOps$.prototype = new $h_O();
$p.constructor = $c_sjs_js_ArrayOps$;
/** @constructor */
function $h_sjs_js_ArrayOps$() {
}
$h_sjs_js_ArrayOps$.prototype = $p;
$p.j9 = (function(this$, that) {
  var b = [];
  var len = (this$.length | 0);
  var i = 0;
  var it = that.F();
  while (((i < len) && it.z())) {
    b.push(new $c_T2(this$[i], it.w()));
    i = ((1 + i) | 0);
  }
  return b;
});
$p.ja = (function(this$) {
  var len = (this$.length | 0);
  var b = new Array(len);
  var i = 0;
  while ((i < len)) {
    b[i] = new $c_T2(this$[i], i);
    i = ((1 + i) | 0);
  }
  return b;
});
var $d_sjs_js_ArrayOps$ = new $TypeData().i($c_sjs_js_ArrayOps$, "scala.scalajs.js.ArrayOps$", ({
  cz: 1
}));
var $n_sjs_js_ArrayOps$;
function $m_sjs_js_ArrayOps$() {
  if ((!$n_sjs_js_ArrayOps$)) {
    $n_sjs_js_ArrayOps$ = new $c_sjs_js_ArrayOps$();
  }
  return $n_sjs_js_ArrayOps$;
}
/** @constructor */
function $c_sjs_js_ArrayOpsCommon$() {
}
$p = $c_sjs_js_ArrayOpsCommon$.prototype = new $h_O();
$p.constructor = $c_sjs_js_ArrayOpsCommon$;
/** @constructor */
function $h_sjs_js_ArrayOpsCommon$() {
}
$h_sjs_js_ArrayOpsCommon$.prototype = $p;
$p.b = (function(left, right) {
  var leftLength = (left.length | 0);
  var rightLength = (right.length | 0);
  var result = new Array(((leftLength + rightLength) | 0));
  var i = 0;
  while (true) {
    if ((i !== leftLength)) {
      result[i] = left[i];
      i = ((1 + i) | 0);
      continue;
    }
    break;
  }
  var i$1 = 0;
  while (true) {
    if ((i$1 !== rightLength)) {
      result[((i$1 + leftLength) | 0)] = right[i$1];
      i$1 = ((1 + i$1) | 0);
      continue;
    }
    break;
  }
  return result;
});
var $d_sjs_js_ArrayOpsCommon$ = new $TypeData().i($c_sjs_js_ArrayOpsCommon$, "scala.scalajs.js.ArrayOpsCommon$", ({
  cA: 1
}));
var $n_sjs_js_ArrayOpsCommon$;
function $m_sjs_js_ArrayOpsCommon$() {
  if ((!$n_sjs_js_ArrayOpsCommon$)) {
    $n_sjs_js_ArrayOpsCommon$ = new $c_sjs_js_ArrayOpsCommon$();
  }
  return $n_sjs_js_ArrayOpsCommon$;
}
/** @constructor */
function $c_sjs_js_WrappedDictionary$Cache$() {
  this.hr = null;
  $n_sjs_js_WrappedDictionary$Cache$ = this;
  this.hr = Object.prototype.hasOwnProperty;
}
$p = $c_sjs_js_WrappedDictionary$Cache$.prototype = new $h_O();
$p.constructor = $c_sjs_js_WrappedDictionary$Cache$;
/** @constructor */
function $h_sjs_js_WrappedDictionary$Cache$() {
}
$h_sjs_js_WrappedDictionary$Cache$.prototype = $p;
var $d_sjs_js_WrappedDictionary$Cache$ = new $TypeData().i($c_sjs_js_WrappedDictionary$Cache$, "scala.scalajs.js.WrappedDictionary$Cache$", ({
  cF: 1
}));
var $n_sjs_js_WrappedDictionary$Cache$;
function $m_sjs_js_WrappedDictionary$Cache$() {
  if ((!$n_sjs_js_WrappedDictionary$Cache$)) {
    $n_sjs_js_WrappedDictionary$Cache$ = new $c_sjs_js_WrappedDictionary$Cache$();
  }
  return $n_sjs_js_WrappedDictionary$Cache$;
}
/** @constructor */
function $c_sjsr_Compat$() {
}
$p = $c_sjsr_Compat$.prototype = new $h_O();
$p.constructor = $c_sjsr_Compat$;
/** @constructor */
function $h_sjsr_Compat$() {
}
$h_sjsr_Compat$.prototype = $p;
$p.h8 = (function(seq) {
  if ((seq instanceof $c_sjsr_WrappedVarArgs)) {
    return seq.fv;
  } else {
    var result = [];
    seq.ga(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2$2) => (result.push(x$2$2) | 0))));
    return result;
  }
});
var $d_sjsr_Compat$ = new $TypeData().i($c_sjsr_Compat$, "scala.scalajs.runtime.Compat$", ({
  cG: 1
}));
var $n_sjsr_Compat$;
function $m_sjsr_Compat$() {
  if ((!$n_sjsr_Compat$)) {
    $n_sjsr_Compat$ = new $c_sjsr_Compat$();
  }
  return $n_sjsr_Compat$;
}
/** @constructor */
function $c_sjsr_package$() {
}
$p = $c_sjsr_package$.prototype = new $h_O();
$p.constructor = $c_sjsr_package$;
/** @constructor */
function $h_sjsr_package$() {
}
$h_sjsr_package$.prototype = $p;
$p.O = (function(array) {
  var len = array.a.length;
  var result = [];
  var i = 0;
  while ((i !== len)) {
    var x1 = i;
    result.push(array.a[x1]);
    i = ((1 + i) | 0);
  }
  return result;
});
var $d_sjsr_package$ = new $TypeData().i($c_sjsr_package$, "scala.scalajs.runtime.package$", ({
  cH: 1
}));
var $n_sjsr_package$;
function $m_sjsr_package$() {
  if ((!$n_sjsr_package$)) {
    $n_sjsr_package$ = new $c_sjsr_package$();
  }
  return $n_sjsr_package$;
}
/** @constructor */
function $c_s_util_CommandLineParser$() {
}
$p = $c_s_util_CommandLineParser$.prototype = new $h_O();
$p.constructor = $c_s_util_CommandLineParser$;
/** @constructor */
function $h_s_util_CommandLineParser$() {
}
$h_s_util_CommandLineParser$.prototype = $p;
$p.lf = (function(err) {
  var where = ((err.iE() === 0) ? "" : ((err.iE() === 1) ? " after first argument" : ((" after " + err.iE()) + " arguments")));
  var x = ((("Illegal command line" + where) + ": ") + err.lD());
  $m_s_Console$().kZ().ki((x + "\n"));
});
var $d_s_util_CommandLineParser$ = new $TypeData().i($c_s_util_CommandLineParser$, "scala.util.CommandLineParser$", ({
  cI: 1
}));
var $n_s_util_CommandLineParser$;
function $m_s_util_CommandLineParser$() {
  if ((!$n_s_util_CommandLineParser$)) {
    $n_s_util_CommandLineParser$ = new $c_s_util_CommandLineParser$();
  }
  return $n_s_util_CommandLineParser$;
}
/** @constructor */
function $c_s_util_DynamicVariable(init) {
  this.gh = null;
  this.gh = init;
}
$p = $c_s_util_DynamicVariable.prototype = new $h_O();
$p.constructor = $c_s_util_DynamicVariable;
/** @constructor */
function $h_s_util_DynamicVariable() {
}
$h_s_util_DynamicVariable.prototype = $p;
$p.f = (function() {
  return (("DynamicVariable(" + this.gh) + ")");
});
var $d_s_util_DynamicVariable = new $TypeData().i($c_s_util_DynamicVariable, "scala.util.DynamicVariable", ({
  cK: 1
}));
/** @constructor */
function $c_s_util_hashing_MurmurHash3() {
}
$p = $c_s_util_hashing_MurmurHash3.prototype = new $h_O();
$p.constructor = $c_s_util_hashing_MurmurHash3;
/** @constructor */
function $h_s_util_hashing_MurmurHash3() {
}
$h_s_util_hashing_MurmurHash3.prototype = $p;
$p.i = (function(hash, data) {
  var h = this.iW(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.iW = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.E = (function(hash, length) {
  return this.f6((hash ^ length));
});
$p.f6 = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.p = (function(x, seed, ignorePrefix) {
  var arr = x.h();
  if ((arr === 0)) {
    return ((!ignorePrefix) ? $f_T__hashCode__I(x.j()) : seed);
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.i(h, $f_T__hashCode__I(x.j()));
    }
    var i = 0;
    while ((i < arr)) {
      h = this.i(h, $m_sr_Statics$().q(x.e(i)));
      i = ((1 + i) | 0);
    }
    return this.E(h, arr);
  }
});
$p.jM = (function(x, seed, caseClassName) {
  var arr = x.h();
  var aye = $f_T__hashCode__I(((caseClassName !== null) ? caseClassName : x.j()));
  if ((arr === 0)) {
    return aye;
  } else {
    var h = seed;
    h = this.i(h, aye);
    var i = 0;
    while ((i < arr)) {
      h = this.i(h, $m_sr_Statics$().q(x.e(i)));
      i = ((1 + i) | 0);
    }
    return this.E(h, arr);
  }
});
$p.ls = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.F();
  while (iterator.z()) {
    var x = iterator.w();
    var h = $m_sr_Statics$().q(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.i(h$2, a);
  h$2 = this.i(h$2, b);
  h$2 = this.iW(h$2, c);
  return this.E(h$2, n);
});
$p.kY = (function(xs, seed) {
  var it = xs.F();
  var h = seed;
  if ((!it.z())) {
    return this.E(h, 0);
  }
  var x0 = it.w();
  if ((!it.z())) {
    return this.E(this.i(h, $m_sr_Statics$().q(x0)), 1);
  }
  var x1 = it.w();
  var initial = $m_sr_Statics$().q(x0);
  h = this.i(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().q(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.z()) {
    h = this.i(h, prev);
    var hash = $m_sr_Statics$().q(it.w());
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.i(h, hash);
      i = ((1 + i) | 0);
      while (it.z()) {
        h = this.i(h, $m_sr_Statics$().q(it.w()));
        i = ((1 + i) | 0);
      }
      return this.E(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.f6(this.i(this.i(h0, rangeDiff), prev));
});
$p.is = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().eO(a);
  switch (l) {
    case 0: {
      return this.E(h, 0);
      break;
    }
    case 1: {
      return this.E(this.i(h, $m_sr_Statics$().q($m_sr_ScalaRunTime$().aA(a, 0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().q($m_sr_ScalaRunTime$().aA(a, 0));
      h = this.i(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().q($m_sr_ScalaRunTime$().aA(a, 1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.i(h, prev);
        var hash = $m_sr_Statics$().q($m_sr_ScalaRunTime$().aA(a, i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.i(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.i(h, $m_sr_Statics$().q($m_sr_ScalaRunTime$().aA(a, i)));
            i = ((1 + i) | 0);
          }
          return this.E(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.f6(this.i(this.i(h0, rangeDiff), prev));
    }
  }
});
$p.l4 = (function(start, step, last, seed) {
  return this.f6(this.i(this.i(this.i(seed, start), step), last));
});
$p.kd = (function(a, seed) {
  var h = seed;
  var l = a.t();
  switch (l) {
    case 0: {
      return this.E(h, 0);
      break;
    }
    case 1: {
      return this.E(this.i(h, $m_sr_Statics$().q(a.v(0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().q(a.v(0));
      h = this.i(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().q(a.v(1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.i(h, prev);
        var hash = $m_sr_Statics$().q(a.v(i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.i(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.i(h, $m_sr_Statics$().q(a.v(i)));
            i = ((1 + i) | 0);
          }
          return this.E(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.f6(this.i(this.i(h0, rangeDiff), prev));
    }
  }
});
$p.kj = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.eP())) {
    elems.h4();
  }
  return ((rangeState === 2) ? this.l4(initial, rangeDiff, prev, seed) : this.E(h, n));
});
function $p_Lsketches_tests_texture\uff3fbake_TextureBake$package$__v$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2($thiz, pos, u, w) {
  return new $c_T2(pos, new $c_Ltrivalibs_graphics_math_cpu_Vec2(u, w));
}
function $p_Lsketches_tests_texture\uff3fbake_TextureBake$package$__faceForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form($thiz, p$1, q) {
  var face = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().ac($p_Lsketches_tests_texture\uff3fbake_TextureBake$package$__v$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2($thiz, q[0], 0.0, 0.0), $p_Lsketches_tests_texture\uff3fbake_TextureBake$package$__v$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2($thiz, q[1], 0.0, 1.0), $p_Lsketches_tests_texture\uff3fbake_TextureBake$package$__v$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2($thiz, q[2], 1.0, 1.0), $p_Lsketches_tests_texture\uff3fbake_TextureBake$package$__v$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2($thiz, q[3], 1.0, 0.0));
  var mesh$proxy1 = $m_Ltrivalibs_graphics_geometry_Mesh$().jB([face], null, 0, new $c_Ltrivalibs_graphics_geometry_package$package$$anon$1(0));
  var vl = new $c_Ltrivalibs_graphics_geometry_VertexLayout$named(new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$(), new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$(), $m_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$())));
  var f = ((v$3, n$3, ref$3) => {
    var nVal = new $c_T3(n$3.m, n$3.n, n$3.o);
    var values$proxy1 = $m_sr_Tuples$().jN(vl.hv.aD(v$3), $m_sr_Tuples$().iu(nVal, $m_T$package$EmptyTuple$()));
    var baseOffset$proxy1 = (ref$3.off | 0);
    var nestedValues = values$proxy1.e(0);
    var value = nestedValues.e(0);
    ref$3.dv.setFloat32(baseOffset$proxy1, Math.fround(value), true);
    var tailOffset = ((4 + baseOffset$proxy1) | 0);
    var value$2 = nestedValues.e(1);
    ref$3.dv.setFloat32(tailOffset, Math.fround(value$2), true);
    var tailOffset$2 = ((4 + tailOffset) | 0);
    var value$3 = nestedValues.e(2);
    ref$3.dv.setFloat32(tailOffset$2, Math.fround(value$3), true);
    var tailOffset$4 = ((12 + baseOffset$proxy1) | 0);
    var nestedValues$2 = values$proxy1.e(1);
    var value$4 = nestedValues$2.e(0);
    ref$3.dv.setFloat32(tailOffset$4, Math.fround(value$4), true);
    var tailOffset$5 = ((4 + tailOffset$4) | 0);
    var value$5 = nestedValues$2.e(1);
    ref$3.dv.setFloat32(tailOffset$5, Math.fround(value$5), true);
    var tailOffset$7 = ((8 + tailOffset$4) | 0);
    var nestedValues$3 = values$proxy1.e(2);
    var value$6 = nestedValues$3.e(0);
    ref$3.dv.setFloat32(tailOffset$7, Math.fround(value$6), true);
    var tailOffset$8 = ((4 + tailOffset$7) | 0);
    var value$7 = nestedValues$3.e(1);
    ref$3.dv.setFloat32(tailOffset$8, Math.fround(value$7), true);
    var tailOffset$9 = ((4 + tailOffset$8) | 0);
    var value$8 = nestedValues$3.e(2);
    ref$3.dv.setFloat32(tailOffset$9, Math.fround(value$8), true);
  });
  var \u03b4proxy2 = $m_Ltrivalibs_graphics_geometry_buffers$package$();
  mesh$proxy1.jT();
  var vertexCount = 0;
  var hasQuads = false;
  var fi = 0;
  while ((fi < (mesh$proxy1.A.length | 0))) {
    var n = (mesh$proxy1.A[fi].length | 0);
    vertexCount = ((vertexCount + n) | 0);
    if ((n === 4)) {
      hasQuads = true;
    }
    fi = ((1 + fi) | 0);
  }
  var count$proxy1 = vertexCount;
  var buffer = new ArrayBuffer((count$proxy1 << 5));
  var verts = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), count$proxy1);
  var vi = 0;
  if ((!hasQuads)) {
    fi = 0;
    while ((fi < (mesh$proxy1.A.length | 0))) {
      var arr = mesh$proxy1.A[fi];
      var opt$proxy1 = mesh$proxy1.ap[fi].eq;
      var si = 0;
      while ((si < (arr.length | 0))) {
        var x0 = arr[si];
        var index$proxy1 = vi;
        var offset$proxy9 = (index$proxy1 << 5);
        var x2 = new ($a_Ltrivalibs_bufferdata_BufferView())(verts.dv, offset$proxy9);
        f(x0, opt$proxy1, x2);
        vi = ((1 + vi) | 0);
        si = ((1 + si) | 0);
      }
      fi = ((1 + fi) | 0);
    }
    var $x_1 = new $c_Ltrivalibs_graphics_geometry_BufferedGeometry(verts, null);
  } else {
    var idxBuf = [];
    var base = 0;
    fi = 0;
    while ((fi < (mesh$proxy1.A.length | 0))) {
      var arr$2 = mesh$proxy1.A[fi];
      var n$2 = (arr$2.length | 0);
      var opt$proxy2 = mesh$proxy1.ap[fi].eq;
      var si$2 = 0;
      while ((si$2 < n$2)) {
        var x0$1 = arr$2[si$2];
        var index$proxy2 = vi;
        var offset$proxy10 = (index$proxy2 << 5);
        var x2$1 = new ($a_Ltrivalibs_bufferdata_BufferView())(verts.dv, offset$proxy10);
        f(x0$1, opt$proxy2, x2$1);
        vi = ((1 + vi) | 0);
        si$2 = ((1 + si$2) | 0);
      }
      if ((n$2 === 3)) {
        idxBuf.push(base, ((1 + base) | 0), ((2 + base) | 0));
      } else {
        idxBuf.push(base, ((1 + base) | 0), ((2 + base) | 0));
        idxBuf.push(base, ((2 + base) | 0), ((3 + base) | 0));
      }
      base = ((base + n$2) | 0);
      fi = ((1 + fi) | 0);
    }
    var $x_1 = new $c_Ltrivalibs_graphics_geometry_BufferedGeometry(verts, \u03b4proxy2.kR(idxBuf, vertexCount));
  }
  return p$1.k2($x_1, (void 0), (void 0), (void 0));
}
/** @constructor */
function $c_Lsketches_tests_texture\uff3fbake_TextureBake$package$() {
  this.je = 0.0;
  this.jg = 0;
  this.jf = 0.0;
  this.je = 2.0;
  this.jg = 256;
  this.jf = 1.4;
}
$p = $c_Lsketches_tests_texture\uff3fbake_TextureBake$package$.prototype = new $h_O();
$p.constructor = $c_Lsketches_tests_texture\uff3fbake_TextureBake$package$;
/** @constructor */
function $h_Lsketches_tests_texture\uff3fbake_TextureBake$package$() {
}
$h_Lsketches_tests_texture\uff3fbake_TextureBake$package$.prototype = $p;
$p.ll = (function() {
  $m_Ltrivalibs_graphics_painter_Painter$().ke(document.getElementById("canvas"), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((p$4) => {
    var this$2 = $m_Lsketchlib_utils_bake_TextureBaker$();
    var program = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    $p_Lsketchlib_utils_bake_TextureBaker$__buildVert__Ltrivalibs_graphics_shader_dsl_Program__V(this$2, program);
    var d = ({});
    var ctx = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().y;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().y = reg;
    try {
      var x0 = ctx.eH.G("worldPos");
      var x1 = ctx.eH.G("normal");
      ctx.eH.G("uv");
      var x3 = ctx.gP.ae("color");
      var n = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("n");
      var x0$1 = n.jn($m_Lsketchlib_shaders_Noise$().jW($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().iq(x0, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aC(), 1.4), 3, 2.0, 0.5, $m_Ltrivalibs_graphics_math_gpu_vec3$().jE($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().k8().l(70))));
      var value$proxy1 = $m_Ltrivalibs_graphics_math_gpu_vec4$().az($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().iY($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().k0(x1, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aC()), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aC(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().kT($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().J().l(0.45), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().J().l(1.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().k1(n))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().J().l(1.0));
      var $x_1 = $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs([x0$1, (((("  " + x3.X) + " = ") + value$proxy1.c) + ";")]), "", "\n", "");
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().y = prev;
    }
    program.eI = $x_1;
    var array$1 = reg.ax;
    var len = (array$1.length | 0);
    var i = 0;
    while ((i < len)) {
      $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$1[i]);
      i = ((1 + i) | 0);
    }
    var b$1 = program.eJ;
    var b$2 = program.eI;
    var helperFns$proxy2 = program.iD();
    var id = p$4.a5;
    p$4.a5 = ((1 + p$4.a5) | 0);
    var names = $m_sjs_js_ArrayOpsCommon$().b(["model"], []);
    var dict = ({});
    var i$1 = 0;
    while ((i$1 < (names.length | 0))) {
      dict[names[i$1]] = i$1;
      i$1 = ((1 + i$1) | 0);
    }
    var names$2 = [];
    var dict$2 = ({});
    var i$2 = 0;
    while ((i$2 < (names$2.length | 0))) {
      dict$2[names$2[i$2]] = i$2;
      i$2 = ((1 + i$2) | 0);
    }
    var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$1, b$2, helperFns$proxy2);
    var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().b(["position"], $m_sjs_js_ArrayOpsCommon$().b(["uv"], $m_sjs_js_ArrayOpsCommon$().b(["normal"], []))), $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().b(["worldPos"], $m_sjs_js_ArrayOpsCommon$().b(["normal"], $m_sjs_js_ArrayOpsCommon$().b(["uv"], []))), $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().b(["color"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec4<f32>"], []), []);
    var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().b(["model"], []), $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).g2.a1()], []));
    var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.g1, sd.g0, fragBuiltinParams);
    var args$proxy2 = $m_sr_ScalaRunTime$().ha(new ($d_sjs_js_Any.r().C)([baseWgsl]));
    console.log(...$m_sjsr_Compat$().h8(args$proxy2));
    var module = p$4.d.createShaderModule(({
      "code": baseWgsl
    }));
    var formats = $m_sjs_js_ArrayOpsCommon$().b(["float32x3"], $m_sjs_js_ArrayOpsCommon$().b(["float32x2"], $m_sjs_js_ArrayOpsCommon$().b(["float32x3"], [])));
    var sizes = $m_sjs_js_ArrayOpsCommon$().b([12], $m_sjs_js_ArrayOpsCommon$().b([8], $m_sjs_js_ArrayOpsCommon$().b([12], [])));
    var offsets = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes);
    var stride = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes);
    var attributes = [];
    var i$3 = 0;
    while ((i$3 < (formats.length | 0))) {
      var value$2 = i$3;
      var value$3 = (offsets[i$3] | 0);
      var s = formats[i$3];
      attributes.push(({
        "shaderLocation": value$2,
        "offset": value$3,
        "format": s
      }));
      i$3 = ((1 + i$3) | 0);
    }
    var vbl = ({
      "arrayStride": stride,
      "attributes": attributes
    });
    var $x_3 = $m_sjs_js_ArrayOpsCommon$();
    var $x_2 = $m_sjs_js_ArrayOpsCommon$();
    var _2 = ({
      "type": "uniform"
    });
    var descriptors = $x_3.b([$x_2.b([({
      "binding": 0,
      "visibility": 1,
      "buffer": _2
    })], [])], []);
    var result = [];
    var len$1 = (descriptors.length | 0);
    var i$4 = 0;
    while ((i$4 < len$1)) {
      var x0$3 = descriptors[i$4];
      (result.push(p$4.d.createBindGroupLayout(({
        "entries": x0$3
      }))) | 0);
      i$4 = ((1 + i$4) | 0);
    }
    var \u03b42$___1 = result;
    var \u03b42$___2 = $m_Ltrivalibs_graphics_shader_layouts$().g9(p$4.d, result);
    var bgls$2 = \u03b42$___1;
    var pl = $m_Ltrivalibs_graphics_shader_layouts$().g9(p$4.d, bgls$2);
    var baker = new $c_Lsketchlib_utils_bake_TextureBaker(p$4, new $c_Ltrivalibs_graphics_painter_Shade(id, module, vbl, bgls$2[0], null, pl, false, dict, dict$2));
    var program$1 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    var d$1 = ({});
    var ctx$1 = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$1), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().y;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().y = reg$1;
    try {
      var AssignTarget_this = ctx$1.ab.ae("uv");
      var value$proxy2 = ctx$1.ay.G("uv");
      var x0$4 = (((("  " + AssignTarget_this.X) + " = ") + value$proxy2.c) + ";");
      var AssignTarget_this$2 = ctx$1.ab.gU;
      var value$proxy3 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().h9(ctx$1.g3.G("mvp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h0(), $m_Ltrivalibs_graphics_math_gpu_vec4$().az(ctx$1.ay.G("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().J().l(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h3(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$());
      var $x_4 = $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs([x0$4, (((("  " + AssignTarget_this$2.X) + " = ") + value$proxy3.c) + ";")]), "", "\n", "");
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().y = prev$1;
    }
    program$1.eJ = $x_4;
    var array$32 = reg$1.ax;
    var len$2 = (array$32.length | 0);
    var i$5 = 0;
    while ((i$5 < len$2)) {
      $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program$1, array$32[i$5]);
      i$5 = ((1 + i$5) | 0);
    }
    var d$2 = ({});
    var ctx$2 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().y;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().y = reg$2;
    try {
      var $x_6 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().k9();
      var AssignTarget_this$1 = ctx$2.gP.ae("color");
      var value$proxy4 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().l8($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), ctx$2.eH.G("uv"), ctx$2.ii.G("samp"));
      var $x_5 = $x_6.l((((("  " + AssignTarget_this$1.X) + " = ") + value$proxy4.c) + ";"));
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().y = prev$2;
    }
    program$1.eI = $x_5;
    var array$33 = reg$2.ax;
    var len$3 = (array$33.length | 0);
    var i$6 = 0;
    while ((i$6 < len$3)) {
      $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program$1, array$33[i$6]);
      i$6 = ((1 + i$6) | 0);
    }
    var b$3 = program$1.eJ;
    var b$4 = program$1.eI;
    var helperFns$proxy1 = program$1.iD();
    var id$1 = p$4.a5;
    p$4.a5 = ((1 + p$4.a5) | 0);
    var names$1 = $m_sjs_js_ArrayOpsCommon$().b(["mvp"], $m_sjs_js_ArrayOpsCommon$().b(["samp"], []));
    var dict$1 = ({});
    var i$7 = 0;
    while ((i$7 < (names$1.length | 0))) {
      dict$1[names$1[i$7]] = i$7;
      i$7 = ((1 + i$7) | 0);
    }
    var names$2$1 = $m_sjs_js_ArrayOpsCommon$().b(["tex"], []);
    var dict$2$1 = ({});
    var i$2$1 = 0;
    while ((i$2$1 < (names$2$1.length | 0))) {
      dict$2$1[names$2$1[i$2$1]] = i$2$1;
      i$2$1 = ((1 + i$2$1) | 0);
    }
    var sd$1 = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$3, b$4, helperFns$proxy1);
    var vertexInputStruct$1 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().b(["position"], $m_sjs_js_ArrayOpsCommon$().b(["uv"], $m_sjs_js_ArrayOpsCommon$().b(["normal"], []))), $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct$1 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().b(["uv"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$1 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().b(["color"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec4<f32>"], []), []);
    var groupDecls$1 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().b(["mvp"], $m_sjs_js_ArrayOpsCommon$().b(["samp"], [])), $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).g2.a1()], $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).gM.a1()], [])));
    var fragBuiltinParams$1 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$1 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$1, vertexInputStruct$1, vertexOutputStruct$1, fragmentOutputStruct$1, groupDecls$1, sd$1.g1, sd$1.g0, fragBuiltinParams$1);
    var wgsl = (baseWgsl$1 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
    var args$proxy1 = $m_sr_ScalaRunTime$().ha(new ($d_sjs_js_Any.r().C)([wgsl]));
    console.log(...$m_sjsr_Compat$().h8(args$proxy1));
    var module$1 = p$4.d.createShaderModule(({
      "code": wgsl
    }));
    var formats$1 = $m_sjs_js_ArrayOpsCommon$().b(["float32x3"], $m_sjs_js_ArrayOpsCommon$().b(["float32x2"], $m_sjs_js_ArrayOpsCommon$().b(["float32x3"], [])));
    var sizes$1 = $m_sjs_js_ArrayOpsCommon$().b([12], $m_sjs_js_ArrayOpsCommon$().b([8], $m_sjs_js_ArrayOpsCommon$().b([12], [])));
    var offsets$1 = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes$1);
    var stride$1 = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes$1);
    var attributes$1 = [];
    var i$3$1 = 0;
    while ((i$3$1 < (formats$1.length | 0))) {
      var value$6 = i$3$1;
      var value$7 = (offsets$1[i$3$1] | 0);
      var s$1 = formats$1[i$3$1];
      attributes$1.push(({
        "shaderLocation": value$6,
        "offset": value$7,
        "format": s$1
      }));
      i$3$1 = ((1 + i$3$1) | 0);
    }
    var vbl$1 = ({
      "arrayStride": stride$1,
      "attributes": attributes$1
    });
    var $x_9 = $m_sjs_js_ArrayOpsCommon$();
    var $x_8 = $m_sjs_js_ArrayOpsCommon$();
    var _2$1 = ({
      "type": "uniform"
    });
    var $x_7 = $m_sjs_js_ArrayOpsCommon$();
    var _2$2 = ({});
    var descriptors$1 = $x_9.b([$x_8.b([({
      "binding": 0,
      "visibility": 1,
      "buffer": _2$1
    })], $x_7.b([({
      "binding": 1,
      "visibility": 2,
      "sampler": _2$2
    })], []))], []);
    var result$1 = [];
    var len$4 = (descriptors$1.length | 0);
    var i$8 = 0;
    while ((i$8 < len$4)) {
      var x0$7 = descriptors$1[i$8];
      (result$1.push(p$4.d.createBindGroupLayout(({
        "entries": x0$7
      }))) | 0);
      i$8 = ((1 + i$8) | 0);
    }
    var \u03b42$$1___1 = result$1;
    var \u03b42$$1___2 = $m_Ltrivalibs_graphics_shader_layouts$().g9(p$4.d, result$1);
    var bgls$2$1 = \u03b42$$1___1;
    var $x_10 = $m_sjs_js_ArrayOpsCommon$();
    var _2$3 = ({});
    var entries = $x_10.b([({
      "binding": 0,
      "visibility": 2,
      "texture": _2$3
    })], []);
    var panelBgl = p$4.d.createBindGroupLayout(({
      "entries": entries
    }));
    var allBgls = ((panelBgl !== null) ? $m_sjs_js_ArrayOpsCommon$().b(bgls$2$1, [panelBgl]) : bgls$2$1);
    var pl$1 = $m_Ltrivalibs_graphics_shader_layouts$().g9(p$4.d, allBgls);
    var sceneShade = new $c_Ltrivalibs_graphics_painter_Shade(id$1, module$1, vbl$1, bgls$2$1[0], panelBgl, pl$1, false, dict$1, dict$2$1);
    var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
    var uv$proxy1 = ul$proxy1.gj;
    var buffer = new ArrayBuffer(64);
    var arr$proxy6 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
    var mvp = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy6.dv, 0), p$4.d, uv$proxy1);
    var sampler = p$4.l9("linear", "linear", "linear", "clamp-to-edge", (void 0), (void 0));
    var box = $m_Ltrivalibs_graphics_geometry_Box$().jC(new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0), 2.0, 2.0, 2.0);
    var faces = box.jV();
    var shapes = [];
    var fi = 0;
    while ((fi < (faces.length | 0))) {
      var form = $p_Lsketches_tests_texture\uff3fbake_TextureBake$package$__faceForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$4, faces[fi].V);
      var tex = baker.jF(form, 256, 256, (void 0), (void 0), true);
      var Bindable_this = p$4.j2(form, sceneShade, "back", (void 0));
      var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("mvp", mvp);
      var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
      var e3$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", tex);
      var \u03b4scrutinee113 = e1$proxy1.es;
      var idx = (Bindable_this.x.aw.mvp | 0);
      while (((Bindable_this.C.length | 0) <= idx)) {
        Bindable_this.C.push(null);
      }
      Bindable_this.C[idx] = \u03b4scrutinee113;
      var \u03b4scrutinee123 = e2$proxy1.es;
      var idx$2 = (Bindable_this.x.aw.samp | 0);
      while (((Bindable_this.C.length | 0) <= idx$2)) {
        Bindable_this.C.push(null);
      }
      Bindable_this.C[idx$2] = \u03b4scrutinee123;
      var \u03b4scrutinee139 = e3$proxy1.es;
      var idx$3 = (Bindable_this.x.fU.tex | 0);
      while (((Bindable_this.aa.length | 0) <= idx$3)) {
        Bindable_this.aa.push(null);
      }
      Bindable_this.aa[idx$3] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee139);
      shapes.push(Bindable_this);
      fi = ((1 + fi) | 0);
    }
    var scenePanel = p$4.iZ((void 0), (void 0), new $c_T4(0.05, 0.06, 0.1, 1.0), true, true, (void 0), (void 0), (void 0), (void 0), (void 0), shapes, (void 0), (void 0));
    var cam = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().jA(0.9, 1.0, 0.1, 100.0, 0.0, 0.0, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 6.0));
    p$4.kX(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((v1$2, v2$2) => {
      var w = (+v1$2);
      var h = (+v2$2);
      var aspect$2 = (w / h);
      var fov$1 = cam.fX;
      var near$1 = cam.fY;
      var far$1 = cam.fW;
      var rotH$2 = cam.eF;
      var rotV$2 = cam.eG;
      var pos$3 = cam.fZ;
      cam.la(fov$1, aspect$2, near$1, far$1, rotH$2, rotV$2, pos$3);
    })));
    $m_Ltrivalibs_utils_animation_animate$package$().jz(((t$1, p$3) => ((arg1$2) => {
      var tpf = (+arg1$2);
      t$1.an = (t$1.an + (0.001 * tpf));
      var rot = $f_Ltrivalibs_graphics_math_cpu_QuatImmutableOps__quatMul__O__Ltrivalibs_graphics_math_Vec4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$(), $m_Ltrivalibs_graphics_math_cpu_Quat$().iA(t$1.an), $m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$(), $m_Ltrivalibs_graphics_math_cpu_Quat$().iz((0.5 * t$1.an)));
      var model = $m_Ltrivalibs_graphics_math_cpu_Mat4$().iB(new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0), rot, new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0));
      var value$proxy5 = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().h1(), $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().h1(), cam.gL, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), cam.lu()), $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), model);
      var ref = mvp.ep;
      $f_Ltrivalibs_graphics_math_Mat4MutableOps__set__O__Ltrivalibs_graphics_math_Mat4Mutable__O__Ltrivalibs_graphics_math_Mat4Base__V($m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$().iC(), ref, $m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$(), value$proxy5, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
      var $x_12 = mvp.gi.queue;
      var $x_11 = mvp.fw;
      var s$proxy2 = mvp.ep;
      $x_12.writeBuffer($x_11, 0.0, s$proxy2.dv.buffer);
      $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$3, scenePanel);
      p$3.le(scenePanel);
    }))(new $c_sr_DoubleRef(0.0), p$4));
  })));
});
var $d_Lsketches_tests_texture\uff3fbake_TextureBake$package$ = new $TypeData().i($c_Lsketches_tests_texture\uff3fbake_TextureBake$package$, "sketches.tests.texture_bake.TextureBake$package$", ({
  cN: 1
}));
var $n_Lsketches_tests_texture\uff3fbake_TextureBake$package$;
function $m_Lsketches_tests_texture\uff3fbake_TextureBake$package$() {
  if ((!$n_Lsketches_tests_texture\uff3fbake_TextureBake$package$)) {
    $n_Lsketches_tests_texture\uff3fbake_TextureBake$package$ = new $c_Lsketches_tests_texture\uff3fbake_TextureBake$package$();
  }
  return $n_Lsketches_tests_texture\uff3fbake_TextureBake$package$;
}
function $s_Lsketches_tests_texture\uff3fbake_textureBake__main__AT__V(args) {
  try {
    $m_Lsketches_tests_texture\uff3fbake_TextureBake$package$().ll();
  } catch (e) {
    if (false) {
      $m_s_util_CommandLineParser$().lf(e);
    } else {
      throw e;
    }
  }
}
/** @constructor */
function $c_Lsketchlib_shaders_Noise$() {
}
$p = $c_Lsketchlib_shaders_Noise$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_shaders_Noise$;
/** @constructor */
function $h_Lsketchlib_shaders_Noise$() {
}
$h_Lsketchlib_shaders_Noise$.prototype = $p;
$p.jW = (function(pos, octaves, freqMul, ampMul, seed) {
  var acc = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().J().l(0.0);
  var freq = 1.0;
  var amp = 1.0;
  var total = 0.0;
  var i = 0;
  while ((i < octaves)) {
    var $x_3 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
    var $x_2 = acc;
    var $x_1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
    var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy1 = $m_Ltrivalibs_graphics_shader_lib_random_Simplex$().gV;
    var a1$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().jy($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().iq(pos, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aC(), freq), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aC(), seed);
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().lq(fn$proxy1);
    acc = $x_3.jr($x_2, $x_1.js($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((WgslFn$_this.kU(fn$proxy1) + "(") + a1$proxy1) + ")")), amp));
    total = (total + amp);
    freq = (freq * freqMul);
    amp = (amp * ampMul);
    i = ((1 + i) | 0);
  }
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().jo(acc, total);
});
var $d_Lsketchlib_shaders_Noise$ = new $TypeData().i($c_Lsketchlib_shaders_Noise$, "sketchlib.shaders.Noise$", ({
  cO: 1
}));
var $n_Lsketchlib_shaders_Noise$;
function $m_Lsketchlib_shaders_Noise$() {
  if ((!$n_Lsketchlib_shaders_Noise$)) {
    $n_Lsketchlib_shaders_Noise$ = new $c_Lsketchlib_shaders_Noise$();
  }
  return $n_Lsketchlib_shaders_Noise$;
}
/** @constructor */
function $c_Lsketchlib_utils_bake_TextureBaker(p, shade) {
  this.eo = null;
  this.ht = null;
  this.eo = p;
  this.ht = shade;
}
$p = $c_Lsketchlib_utils_bake_TextureBaker.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_bake_TextureBaker;
/** @constructor */
function $h_Lsketchlib_utils_bake_TextureBaker() {
}
$h_Lsketchlib_utils_bake_TextureBaker.prototype = $p;
$p.l3 = (function(form, width, height, transform, format, mips) {
  var Painter_this = this.eo;
  var value$proxy1 = ((transform === (void 0)) ? new $c_Ltrivalibs_graphics_math_cpu_Mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0) : transform);
  var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
  var uv$proxy1 = ul$proxy1.gj;
  var buffer = new ArrayBuffer(64);
  var arr$proxy1 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
  var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy1.dv, 0), Painter_this.d, uv$proxy1);
  var ref = b.ep;
  $f_Ltrivalibs_graphics_math_Mat4MutableOps__set__O__Ltrivalibs_graphics_math_Mat4Mutable__O__Ltrivalibs_graphics_math_Mat4Base__V($m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$().iC(), ref, $m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$(), value$proxy1, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
  var $x_2 = b.gi.queue;
  var $x_1 = b.fw;
  var s$proxy1 = b.ep;
  $x_2.writeBuffer($x_1, 0.0, s$proxy1.dv.buffer);
  var Bindable_this = this.eo.j2(form, this.ht, "none", (void 0));
  var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("model", b);
  var \u03b4scrutinee4 = e1$proxy1.es;
  var idx = (Bindable_this.x.aw.model | 0);
  while (((Bindable_this.C.length | 0) <= idx)) {
    Bindable_this.C.push(null);
  }
  Bindable_this.C[idx] = \u03b4scrutinee4;
  var format$1 = ((format === (void 0)) ? "rgba8unorm" : format);
  return this.eo.iZ(width, height, (void 0), (void 0), (void 0), (void 0), mips, format$1, (void 0), Bindable_this, (void 0), (void 0), (void 0));
});
$p.jF = (function(form, width, height, transform, format, mips) {
  var panel = this.l3(form, width, height, transform, format, mips);
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(this.eo, panel);
  return panel;
});
var $d_Lsketchlib_utils_bake_TextureBaker = new $TypeData().i($c_Lsketchlib_utils_bake_TextureBaker, "sketchlib.utils.bake.TextureBaker", ({
  cP: 1
}));
function $p_Lsketchlib_utils_bake_TextureBaker$__buildVert__Ltrivalibs_graphics_shader_dsl_Program__V($thiz, program) {
  var d = ({});
  var ctx = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().y;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().y = reg;
  try {
    var uv = ctx.ay.G("uv");
    var AssignTarget_this = ctx.ab.ae("worldPos");
    var value$proxy2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j8($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().h9(ctx.g3.G("model"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h0(), $m_Ltrivalibs_graphics_math_gpu_vec4$().az(ctx.ay.G("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().J().l(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h3(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$()));
    var x0 = (((("  " + AssignTarget_this.X) + " = ") + value$proxy2.c) + ";");
    var AssignTarget_this$2 = ctx.ab.ae("normal");
    var value$proxy3 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().kW($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j8($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().h9(ctx.g3.G("model"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h0(), $m_Ltrivalibs_graphics_math_gpu_vec4$().az(ctx.ay.G("normal"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().J().l(0.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h3(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$())), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aC());
    var x1 = (((("  " + AssignTarget_this$2.X) + " = ") + value$proxy3.c) + ";");
    var AssignTarget_this$3 = ctx.ab.ae("uv");
    var x2 = (((("  " + AssignTarget_this$3.X) + " = ") + uv.c) + ";");
    var AssignTarget_this$4 = ctx.ab.gU;
    var $x_5 = $m_Ltrivalibs_graphics_math_gpu_vec4$();
    var $x_4 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$();
    var $x_3 = $m_Ltrivalibs_graphics_math_gpu_vec2$();
    var $x_2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h2().ly(uv);
    var e$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h2().lz(uv);
    var value$proxy4 = $x_5.jD($x_4.jZ($x_3.az($x_2, $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().k7().lw((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ix(1.0)) + " - ") + e$proxy1.c) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h2()), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().J().l(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().J().l(1.0));
    var $x_1 = $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs([x0, x1, x2, (((("  " + AssignTarget_this$4.X) + " = ") + value$proxy4.c) + ";")]), "", "\n", "");
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().y = prev;
  }
  program.eJ = $x_1;
  var array$1 = reg.ax;
  var len = (array$1.length | 0);
  var i = 0;
  while ((i < len)) {
    $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$1[i]);
    i = ((1 + i) | 0);
  }
}
/** @constructor */
function $c_Lsketchlib_utils_bake_TextureBaker$() {
}
$p = $c_Lsketchlib_utils_bake_TextureBaker$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_bake_TextureBaker$;
/** @constructor */
function $h_Lsketchlib_utils_bake_TextureBaker$() {
}
$h_Lsketchlib_utils_bake_TextureBaker$.prototype = $p;
var $d_Lsketchlib_utils_bake_TextureBaker$ = new $TypeData().i($c_Lsketchlib_utils_bake_TextureBaker$, "sketchlib.utils.bake.TextureBaker$", ({
  cQ: 1
}));
var $n_Lsketchlib_utils_bake_TextureBaker$;
function $m_Lsketchlib_utils_bake_TextureBaker$() {
  if ((!$n_Lsketchlib_utils_bake_TextureBaker$)) {
    $n_Lsketchlib_utils_bake_TextureBaker$ = new $c_Lsketchlib_utils_bake_TextureBaker$();
  }
  return $n_Lsketchlib_utils_bake_TextureBaker$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_BufferBinding(buffer, device, uv) {
  this.ep = null;
  this.gi = null;
  this.jh = null;
  this.fw = null;
  this.ep = buffer;
  this.gi = device;
  this.jh = uv;
  var b = (buffer.dv.byteLength | 0);
  var value = ((b < 16) ? 16 : b);
  var $x_1 = device.createBuffer(({
    "size": value,
    "usage": 72
  }));
  this.fw = $x_1;
}
$p = $c_Ltrivalibs_graphics_buffers_BufferBinding.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_BufferBinding;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_BufferBinding() {
}
$h_Ltrivalibs_graphics_buffers_BufferBinding.prototype = $p;
function $isArrayOf_Ltrivalibs_graphics_buffers_BufferBinding(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aB)));
}
var $d_Ltrivalibs_graphics_buffers_BufferBinding = new $TypeData().i($c_Ltrivalibs_graphics_buffers_BufferBinding, "trivalibs.graphics.buffers.BufferBinding", ({
  aB: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Box(center, size, frontTopLeft, frontTopRight, frontBottomLeft, frontBottomRight, backTopLeft, backTopRight, backBottomLeft, backBottomRight) {
  this.fD = null;
  this.fE = null;
  this.fB = null;
  this.fC = null;
  this.fz = null;
  this.fA = null;
  this.fx = null;
  this.fy = null;
  this.fD = frontTopLeft;
  this.fE = frontTopRight;
  this.fB = frontBottomLeft;
  this.fC = frontBottomRight;
  this.fz = backTopLeft;
  this.fA = backTopRight;
  this.fx = backBottomLeft;
  this.fy = backBottomRight;
}
$p = $c_Ltrivalibs_graphics_geometry_Box.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Box;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Box() {
}
$h_Ltrivalibs_graphics_geometry_Box.prototype = $p;
$p.jV = (function() {
  return [new $c_T2($m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().ac(this.fD, this.fB, this.fC, this.fE), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0)), new $c_T2($m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().ac(this.fA, this.fy, this.fx, this.fz), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, (-1.0))), new $c_T2($m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().ac(this.fz, this.fx, this.fB, this.fD), new $c_Ltrivalibs_graphics_math_cpu_Vec3((-1.0), 0.0, 0.0)), new $c_T2($m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().ac(this.fE, this.fC, this.fy, this.fA), new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0)), new $c_T2($m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().ac(this.fz, this.fD, this.fE, this.fA), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0)), new $c_T2($m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().ac(this.fB, this.fx, this.fy, this.fC), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, (-1.0), 0.0))];
});
var $d_Ltrivalibs_graphics_geometry_Box = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Box, "trivalibs.graphics.geometry.Box", ({
  cV: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Box$() {
}
$p = $c_Ltrivalibs_graphics_geometry_Box$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Box$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Box$() {
}
$h_Ltrivalibs_graphics_geometry_Box$.prototype = $p;
$p.jC = (function(center, width, height, depth) {
  var hw = (0.5 * width);
  var hh = (0.5 * height);
  var hd = (0.5 * depth);
  var cx = center.m;
  var cy = center.n;
  var cz = center.o;
  return new $c_Ltrivalibs_graphics_geometry_Box(center, new $c_Ltrivalibs_graphics_math_cpu_Vec3(width, height, depth), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy + hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy + hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy - hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy - hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy + hh), (cz - hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy + hh), (cz - hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy - hh), (cz - hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy - hh), (cz - hd)));
});
var $d_Ltrivalibs_graphics_geometry_Box$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Box$, "trivalibs.graphics.geometry.Box$", ({
  cW: 1
}));
var $n_Ltrivalibs_graphics_geometry_Box$;
function $m_Ltrivalibs_graphics_geometry_Box$() {
  if ((!$n_Ltrivalibs_graphics_geometry_Box$)) {
    $n_Ltrivalibs_graphics_geometry_Box$ = new $c_Ltrivalibs_graphics_geometry_Box$();
  }
  return $n_Ltrivalibs_graphics_geometry_Box$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_BufferedGeometry(vertices, indices) {
  this.hu = null;
  this.gk = null;
  this.hu = vertices;
  this.gk = indices;
}
$p = $c_Ltrivalibs_graphics_geometry_BufferedGeometry.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_BufferedGeometry;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_BufferedGeometry() {
}
$h_Ltrivalibs_graphics_geometry_BufferedGeometry.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_BufferedGeometry = new $TypeData().i($c_Ltrivalibs_graphics_geometry_BufferedGeometry, "trivalibs.graphics.geometry.BufferedGeometry", ({
  cX: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_FaceData(normal, section) {
  this.eq = null;
  this.ji = 0;
  this.eq = normal;
  this.ji = section;
}
$p = $c_Ltrivalibs_graphics_geometry_FaceData.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_FaceData;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_FaceData() {
}
$h_Ltrivalibs_graphics_geometry_FaceData.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_FaceData = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FaceData, "trivalibs.graphics.geometry.FaceData", ({
  cY: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Mesh(evidence$1) {
  this.er = null;
  this.A = null;
  this.ap = null;
  this.fG = null;
  this.fF = null;
  this.er = evidence$1;
  this.A = [];
  this.ap = [];
  this.fG = [];
  this.fF = ({});
}
$p = $c_Ltrivalibs_graphics_geometry_Mesh.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Mesh;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Mesh() {
}
$h_Ltrivalibs_graphics_geometry_Mesh.prototype = $p;
$p.jw = (function(face, normal, section) {
  var faceIdx = (this.A.length | 0);
  this.A.push(face);
  this.ap.push(new $c_Ltrivalibs_graphics_geometry_FaceData(normal, section));
  var n = (face.length | 0);
  var slot = 0;
  while ((slot < n)) {
    var v = face[slot];
    var key = $m_Ltrivalibs_graphics_geometry_package$package$().l2(this.er.Y(v));
    if ($m_sjs_js_Any$ObjectCompanionOps$().ka(Object, this.fF, key)) {
      var $x_2 = this.fG;
      var dict = this.fF;
      if ((!(!(!$m_sjs_js_WrappedDictionary$Cache$().hr.call(dict, key))))) {
        throw new $c_ju_NoSuchElementException(("key not found: " + key));
      }
      var $x_1 = $x_2[(dict[key] | 0)];
      $x_1.hy.push(new $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIdx, slot));
    } else {
      var idx = (this.fG.length | 0);
      var dict$1 = this.fF;
      dict$1[key] = idx;
      this.fG.push(new $c_Ltrivalibs_graphics_geometry_VertexPosition(this.er.Y(v), [new $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIdx, slot)]));
    }
    slot = ((1 + slot) | 0);
  }
});
$p.jT = (function() {
  var hasQuads = false;
  var i = 0;
  while ((i < (this.A.length | 0))) {
    var arr = this.A[i];
    if ((this.ap[i].eq === null)) {
      var $x_2 = this.ap[i];
      if (((arr.length | 0) === 3)) {
        var $x_1 = $m_Ltrivalibs_graphics_geometry_polygon$package$Triangle$().h6(this.A[i], this.er);
      } else {
        hasQuads = true;
        var $x_1 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().h6(this.A[i], this.er);
      }
      $x_2.eq = $x_1;
    }
    i = ((1 + i) | 0);
  }
  return hasQuads;
});
var $d_Ltrivalibs_graphics_geometry_Mesh = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Mesh, "trivalibs.graphics.geometry.Mesh", ({
  d1: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Mesh$() {
}
$p = $c_Ltrivalibs_graphics_geometry_Mesh$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Mesh$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Mesh$() {
}
$h_Ltrivalibs_graphics_geometry_Mesh$.prototype = $p;
$p.jB = (function(faces, normal, section, evidence$1) {
  var m = new $c_Ltrivalibs_graphics_geometry_Mesh(evidence$1);
  $m_Ltrivalibs_graphics_geometry_mesh$package$().jx(m, faces, normal, section, evidence$1);
  return m;
});
var $d_Ltrivalibs_graphics_geometry_Mesh$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Mesh$, "trivalibs.graphics.geometry.Mesh$", ({
  d2: 1
}));
var $n_Ltrivalibs_graphics_geometry_Mesh$;
function $m_Ltrivalibs_graphics_geometry_Mesh$() {
  if ((!$n_Ltrivalibs_graphics_geometry_Mesh$)) {
    $n_Ltrivalibs_graphics_geometry_Mesh$ = new $c_Ltrivalibs_graphics_geometry_Mesh$();
  }
  return $n_Ltrivalibs_graphics_geometry_Mesh$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIndex, vertexSlot) {
  this.jj = 0;
  this.jk = 0;
  this.jj = faceIndex;
  this.jk = vertexSlot;
}
$p = $c_Ltrivalibs_graphics_geometry_PositionFaceRef.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_PositionFaceRef;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_PositionFaceRef() {
}
$h_Ltrivalibs_graphics_geometry_PositionFaceRef.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_PositionFaceRef = new $TypeData().i($c_Ltrivalibs_graphics_geometry_PositionFaceRef, "trivalibs.graphics.geometry.PositionFaceRef", ({
  d4: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexPosition(position, faces) {
  this.jl = null;
  this.hy = null;
  this.jl = position;
  this.hy = faces;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexPosition.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexPosition;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexPosition() {
}
$h_Ltrivalibs_graphics_geometry_VertexPosition.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_VertexPosition = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexPosition, "trivalibs.graphics.geometry.VertexPosition", ({
  d9: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_buffers$package$() {
}
$p = $c_Ltrivalibs_graphics_geometry_buffers$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_buffers$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_buffers$package$() {
}
$h_Ltrivalibs_graphics_geometry_buffers$package$.prototype = $p;
$p.kR = (function(idxBuf, vertexCount) {
  if (((idxBuf.length | 0) === 0)) {
    return null;
  } else if ((vertexCount <= 65535)) {
    var ua = new Uint16Array((idxBuf.length | 0));
    var i = 0;
    while ((i < (idxBuf.length | 0))) {
      ua[i] = idxBuf[i];
      i = ((1 + i) | 0);
    }
    return ua;
  } else {
    var ua$2 = new Uint32Array((idxBuf.length | 0));
    var i$2 = 0;
    while ((i$2 < (idxBuf.length | 0))) {
      ua$2[i$2] = (idxBuf[i$2] | 0);
      i$2 = ((1 + i$2) | 0);
    }
    return ua$2;
  }
});
var $d_Ltrivalibs_graphics_geometry_buffers$package$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_buffers$package$, "trivalibs.graphics.geometry.buffers$package$", ({
  da: 1
}));
var $n_Ltrivalibs_graphics_geometry_buffers$package$;
function $m_Ltrivalibs_graphics_geometry_buffers$package$() {
  if ((!$n_Ltrivalibs_graphics_geometry_buffers$package$)) {
    $n_Ltrivalibs_graphics_geometry_buffers$package$ = new $c_Ltrivalibs_graphics_geometry_buffers$package$();
  }
  return $n_Ltrivalibs_graphics_geometry_buffers$package$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_mesh$package$() {
}
$p = $c_Ltrivalibs_graphics_geometry_mesh$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_mesh$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_mesh$package$() {
}
$h_Ltrivalibs_graphics_geometry_mesh$package$.prototype = $p;
$p.jx = (function(m, faces, normal, section, evidence$1) {
  var i = 0;
  while ((i < (faces.length | 0))) {
    m.jw(faces[i], normal, section);
    i = ((1 + i) | 0);
  }
});
var $d_Ltrivalibs_graphics_geometry_mesh$package$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_mesh$package$, "trivalibs.graphics.geometry.mesh$package$", ({
  db: 1
}));
var $n_Ltrivalibs_graphics_geometry_mesh$package$;
function $m_Ltrivalibs_graphics_geometry_mesh$package$() {
  if ((!$n_Ltrivalibs_graphics_geometry_mesh$package$)) {
    $n_Ltrivalibs_graphics_geometry_mesh$package$ = new $c_Ltrivalibs_graphics_geometry_mesh$package$();
  }
  return $n_Ltrivalibs_graphics_geometry_mesh$package$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_package$package$() {
}
$p = $c_Ltrivalibs_graphics_geometry_package$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_package$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_package$package$() {
}
$h_Ltrivalibs_graphics_geometry_package$package$.prototype = $p;
$p.l2 = (function(v) {
  return (((($doubleToInt((10000.0 * v.m)) + ",") + $doubleToInt((10000.0 * v.n))) + ",") + $doubleToInt((10000.0 * v.o)));
});
var $d_Ltrivalibs_graphics_geometry_package$package$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_package$package$, "trivalibs.graphics.geometry.package$package$", ({
  dc: 1
}));
var $n_Ltrivalibs_graphics_geometry_package$package$;
function $m_Ltrivalibs_graphics_geometry_package$package$() {
  if ((!$n_Ltrivalibs_graphics_geometry_package$package$)) {
    $n_Ltrivalibs_graphics_geometry_package$package$ = new $c_Ltrivalibs_graphics_geometry_package$package$();
  }
  return $n_Ltrivalibs_graphics_geometry_package$package$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_polygon$package$Quad$() {
}
$p = $c_Ltrivalibs_graphics_geometry_polygon$package$Quad$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_polygon$package$Quad$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_polygon$package$Quad$() {
}
$h_Ltrivalibs_graphics_geometry_polygon$package$Quad$.prototype = $p;
$p.ac = (function(tl, bl, br, tr) {
  return [tl, bl, br, tr];
});
$p.ln = (function(q, evidence$1) {
  return q[0];
});
$p.jJ = (function(q, evidence$1) {
  return q[1];
});
$p.jK = (function(q, evidence$1) {
  return q[2];
});
$p.lp = (function(q, evidence$1) {
  return q[3];
});
$p.h6 = (function(q, evidence$1) {
  var a = evidence$1.Y(this.ln(q, evidence$1));
  var b = evidence$1.Y(this.jJ(q, evidence$1));
  var c = evidence$1.Y(this.jK(q, evidence$1));
  var d = evidence$1.Y(this.lp(q, evidence$1));
  var d1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((c.m - a.m), (c.n - a.n), (c.o - a.o));
  var d2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((d.m - b.m), (d.n - b.n), (d.o - b.o));
  return $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().gc(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().gc(), d1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), d2), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
});
var $d_Ltrivalibs_graphics_geometry_polygon$package$Quad$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_polygon$package$Quad$, "trivalibs.graphics.geometry.polygon$package$Quad$", ({
  de: 1
}));
var $n_Ltrivalibs_graphics_geometry_polygon$package$Quad$;
function $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$() {
  if ((!$n_Ltrivalibs_graphics_geometry_polygon$package$Quad$)) {
    $n_Ltrivalibs_graphics_geometry_polygon$package$Quad$ = new $c_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  }
  return $n_Ltrivalibs_graphics_geometry_polygon$package$Quad$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_polygon$package$Triangle$() {
}
$p = $c_Ltrivalibs_graphics_geometry_polygon$package$Triangle$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_polygon$package$Triangle$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_polygon$package$Triangle$() {
}
$h_Ltrivalibs_graphics_geometry_polygon$package$Triangle$.prototype = $p;
$p.jv = (function(tri, evidence$1) {
  return tri[0];
});
$p.jI = (function(tri, evidence$1) {
  return tri[1];
});
$p.jL = (function(tri, evidence$1) {
  return tri[2];
});
$p.h6 = (function(tri, evidence$1) {
  var pa = evidence$1.Y(this.jv(tri, evidence$1));
  var pb = evidence$1.Y(this.jI(tri, evidence$1));
  var pc = evidence$1.Y(this.jL(tri, evidence$1));
  var e1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((pb.m - pa.m), (pb.n - pa.n), (pb.o - pa.o));
  var e2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((pc.m - pa.m), (pc.n - pa.n), (pc.o - pa.o));
  return $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().gc(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().gc(), e1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), e2), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
});
var $d_Ltrivalibs_graphics_geometry_polygon$package$Triangle$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_polygon$package$Triangle$, "trivalibs.graphics.geometry.polygon$package$Triangle$", ({
  df: 1
}));
var $n_Ltrivalibs_graphics_geometry_polygon$package$Triangle$;
function $m_Ltrivalibs_graphics_geometry_polygon$package$Triangle$() {
  if ((!$n_Ltrivalibs_graphics_geometry_polygon$package$Triangle$)) {
    $n_Ltrivalibs_graphics_geometry_polygon$package$Triangle$ = new $c_Ltrivalibs_graphics_geometry_polygon$package$Triangle$();
  }
  return $n_Ltrivalibs_graphics_geometry_polygon$package$Triangle$;
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($thiz, fovY, aspect, near, far) {
  var x = (0.5 * fovY);
  var f = (1.0 / (+Math.tan(x)));
  var rInv = (1.0 / (near - far));
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4((f / aspect), 0.0, 0.0, 0.0, 0.0, f, 0.0, 0.0, 0.0, 0.0, (far * rInv), (-1.0), 0.0, 0.0, ((near * far) * rInv), 0.0);
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($thiz, m, x$2, other) {
  var a00 = (+x$2.eQ(m));
  var a01 = (+x$2.eR(m));
  var a02 = (+x$2.eS(m));
  var a03 = (+x$2.eT(m));
  var a10 = (+x$2.eU(m));
  var a11 = (+x$2.eV(m));
  var a12 = (+x$2.eW(m));
  var a13 = (+x$2.eX(m));
  var a20 = (+x$2.eY(m));
  var a21 = (+x$2.eZ(m));
  var a22 = (+x$2.f0(m));
  var a23 = (+x$2.f1(m));
  var a30 = (+x$2.f2(m));
  var a31 = (+x$2.f3(m));
  var a32 = (+x$2.f4(m));
  var a33 = (+x$2.f5(m));
  var b00 = (+x$2.eQ(other));
  var b01 = (+x$2.eR(other));
  var b02 = (+x$2.eS(other));
  var b03 = (+x$2.eT(other));
  var b10 = (+x$2.eU(other));
  var b11 = (+x$2.eV(other));
  var b12 = (+x$2.eW(other));
  var b13 = (+x$2.eX(other));
  var b20 = (+x$2.eY(other));
  var b21 = (+x$2.eZ(other));
  var b22 = (+x$2.f0(other));
  var b23 = (+x$2.f1(other));
  var b30 = (+x$2.f2(other));
  var b31 = (+x$2.f3(other));
  var b32 = (+x$2.f4(other));
  var b33 = (+x$2.f5(other));
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4(((((a00 * b00) + (a10 * b01)) + (a20 * b02)) + (a30 * b03)), ((((a01 * b00) + (a11 * b01)) + (a21 * b02)) + (a31 * b03)), ((((a02 * b00) + (a12 * b01)) + (a22 * b02)) + (a32 * b03)), ((((a03 * b00) + (a13 * b01)) + (a23 * b02)) + (a33 * b03)), ((((a00 * b10) + (a10 * b11)) + (a20 * b12)) + (a30 * b13)), ((((a01 * b10) + (a11 * b11)) + (a21 * b12)) + (a31 * b13)), ((((a02 * b10) + (a12 * b11)) + (a22 * b12)) + (a32 * b13)), ((((a03 * b10) + (a13 * b11)) + (a23 * b12)) + (a33 * b13)), ((((a00 * b20) + (a10 * b21)) + (a20 * b22)) + (a30 * b23)), ((((a01 * b20) + (a11 * b21)) + (a21 * b22)) + (a31 * b23)), ((((a02 * b20) + (a12 * b21)) + (a22 * b22)) + (a32 * b23)), ((((a03 * b20) + (a13 * b21)) + (a23 * b22)) + (a33 * b23)), ((((a00 * b30) + (a10 * b31)) + (a20 * b32)) + (a30 * b33)), ((((a01 * b30) + (a11 * b31)) + (a21 * b32)) + (a31 * b33)), ((((a02 * b30) + (a12 * b31)) + (a22 * b32)) + (a32 * b33)), ((((a03 * b30) + (a13 * b31)) + (a23 * b32)) + (a33 * b33)));
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($thiz, m, x$2) {
  var a00 = (+x$2.eQ(m));
  var a01 = (+x$2.eR(m));
  var a02 = (+x$2.eS(m));
  var a03 = (+x$2.eT(m));
  var a10 = (+x$2.eU(m));
  var a11 = (+x$2.eV(m));
  var a12 = (+x$2.eW(m));
  var a13 = (+x$2.eX(m));
  var a20 = (+x$2.eY(m));
  var a21 = (+x$2.eZ(m));
  var a22 = (+x$2.f0(m));
  var a23 = (+x$2.f1(m));
  var a30 = (+x$2.f2(m));
  var a31 = (+x$2.f3(m));
  var a32 = (+x$2.f4(m));
  var a33 = (+x$2.f5(m));
  var b00 = ((a00 * a11) - (a01 * a10));
  var b01 = ((a00 * a12) - (a02 * a10));
  var b02 = ((a00 * a13) - (a03 * a10));
  var b03 = ((a01 * a12) - (a02 * a11));
  var b04 = ((a01 * a13) - (a03 * a11));
  var b05 = ((a02 * a13) - (a03 * a12));
  var b06 = ((a20 * a31) - (a21 * a30));
  var b07 = ((a20 * a32) - (a22 * a30));
  var b08 = ((a20 * a33) - (a23 * a30));
  var b09 = ((a21 * a32) - (a22 * a31));
  var b10 = ((a21 * a33) - (a23 * a31));
  var b11 = ((a22 * a33) - (a23 * a32));
  var det = ((((((b00 * b11) - (b01 * b10)) + (b02 * b09)) + (b03 * b08)) - (b04 * b07)) + (b05 * b06));
  var invDet = (1.0 / det);
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4(((((a11 * b11) - (a12 * b10)) + (a13 * b09)) * invDet), (((((-a01) * b11) + (a02 * b10)) - (a03 * b09)) * invDet), ((((a31 * b05) - (a32 * b04)) + (a33 * b03)) * invDet), (((((-a21) * b05) + (a22 * b04)) - (a23 * b03)) * invDet), (((((-a10) * b11) + (a12 * b08)) - (a13 * b07)) * invDet), ((((a00 * b11) - (a02 * b08)) + (a03 * b07)) * invDet), (((((-a30) * b05) + (a32 * b02)) - (a33 * b01)) * invDet), ((((a20 * b05) - (a22 * b02)) + (a23 * b01)) * invDet), ((((a10 * b10) - (a11 * b08)) + (a13 * b06)) * invDet), (((((-a00) * b10) + (a01 * b08)) - (a03 * b06)) * invDet), ((((a30 * b04) - (a31 * b02)) + (a33 * b00)) * invDet), (((((-a20) * b04) + (a21 * b02)) - (a23 * b00)) * invDet), (((((-a10) * b09) + (a11 * b07)) - (a12 * b06)) * invDet), ((((a00 * b09) - (a01 * b07)) + (a02 * b06)) * invDet), (((((-a30) * b03) + (a31 * b01)) - (a32 * b00)) * invDet), ((((a20 * b03) - (a21 * b01)) + (a22 * b00)) * invDet));
}
function $f_Ltrivalibs_graphics_math_Mat4MutableOps__set__O__Ltrivalibs_graphics_math_Mat4Mutable__O__Ltrivalibs_graphics_math_Mat4Base__V($thiz, m, mb, other, x$4) {
  mb.iF(m, (+x$4.eQ(other)));
  mb.iG(m, (+x$4.eR(other)));
  mb.iH(m, (+x$4.eS(other)));
  mb.iI(m, (+x$4.eT(other)));
  mb.iJ(m, (+x$4.eU(other)));
  mb.iK(m, (+x$4.eV(other)));
  mb.iL(m, (+x$4.eW(other)));
  mb.iM(m, (+x$4.eX(other)));
  mb.iN(m, (+x$4.eY(other)));
  mb.iO(m, (+x$4.eZ(other)));
  mb.iP(m, (+x$4.f0(other)));
  mb.iQ(m, (+x$4.f1(other)));
  mb.iR(m, (+x$4.f2(other)));
  mb.iS(m, (+x$4.f3(other)));
  mb.iT(m, (+x$4.f4(other)));
  mb.iU(m, (+x$4.f5(other)));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__divScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, scalar) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.m / scalar), (v.n / scalar), (v.o / scalar));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3(((v.n * other.o) - (v.o * other.n)), ((v.o * other.m) - (v.m * other.o)), ((v.m * other.n) - (v.n * other.m)));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($thiz, v, x$2) {
  return $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__divScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, $f_Ltrivalibs_graphics_math_Vec3Base__length__O__D(x$2, v));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat4(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  this.gl = 0.0;
  this.gm = 0.0;
  this.gn = 0.0;
  this.go = 0.0;
  this.gp = 0.0;
  this.gq = 0.0;
  this.gr = 0.0;
  this.gs = 0.0;
  this.gt = 0.0;
  this.gu = 0.0;
  this.gv = 0.0;
  this.gw = 0.0;
  this.gx = 0.0;
  this.gy = 0.0;
  this.gz = 0.0;
  this.gA = 0.0;
  this.gl = m00;
  this.gm = m01;
  this.gn = m02;
  this.go = m03;
  this.gp = m10;
  this.gq = m11;
  this.gr = m12;
  this.gs = m13;
  this.gt = m20;
  this.gu = m21;
  this.gv = m22;
  this.gw = m23;
  this.gx = m30;
  this.gy = m31;
  this.gz = m32;
  this.gA = m33;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Mat4 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4, "trivalibs.graphics.math.cpu.Mat4", ({
  dt: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Quat(x, y, z, w) {
  this.R = 0.0;
  this.S = 0.0;
  this.T = 0.0;
  this.Q = 0.0;
  this.R = x;
  this.S = y;
  this.T = z;
  this.Q = w;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Quat.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Quat;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Quat() {
}
$h_Ltrivalibs_graphics_math_cpu_Quat.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Quat = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat, "trivalibs.graphics.math.cpu.Quat", ({
  dw: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Quat$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Quat$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Quat$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Quat$() {
}
$h_Ltrivalibs_graphics_math_cpu_Quat$.prototype = $p;
$p.iz = (function(angle) {
  var h = (0.5 * angle);
  return new $c_Ltrivalibs_graphics_math_cpu_Quat((+Math.sin(h)), 0.0, 0.0, (+Math.cos(h)));
});
$p.iA = (function(angle) {
  var h = (0.5 * angle);
  return new $c_Ltrivalibs_graphics_math_cpu_Quat(0.0, (+Math.sin(h)), 0.0, (+Math.cos(h)));
});
var $d_Ltrivalibs_graphics_math_cpu_Quat$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat$, "trivalibs.graphics.math.cpu.Quat$", ({
  dx: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Quat$;
function $m_Ltrivalibs_graphics_math_cpu_Quat$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Quat$)) {
    $n_Ltrivalibs_graphics_math_cpu_Quat$ = new $c_Ltrivalibs_graphics_math_cpu_Quat$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Quat$;
}
function $f_Ltrivalibs_graphics_math_cpu_QuatImmutableOps__quatMul__O__Ltrivalibs_graphics_math_Vec4Base__O__O($thiz, q, x$2, p) {
  return new $c_Ltrivalibs_graphics_math_cpu_Quat(((((q.Q * p.R) + (q.R * p.Q)) + (q.S * p.T)) - (q.T * p.S)), ((((q.Q * p.S) - (q.R * p.T)) + (q.S * p.Q)) + (q.T * p.R)), ((((q.Q * p.T) + (q.R * p.S)) - (q.S * p.R)) + (q.T * p.Q)), ((((q.Q * p.Q) - (q.R * p.R)) - (q.S * p.S)) - (q.T * p.T)));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec2(x, y) {
  this.hC = 0.0;
  this.hD = 0.0;
  this.hC = x;
  this.hD = y;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec2.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec2;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec2() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec2.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec2 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec2, "trivalibs.graphics.math.cpu.Vec2", ({
  dB: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec3(x, y, z) {
  this.m = 0.0;
  this.n = 0.0;
  this.o = 0.0;
  this.m = x;
  this.n = y;
  this.o = z;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec3.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec3;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec3() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec3.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec3 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3, "trivalibs.graphics.math.cpu.Vec3", ({
  dC: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
  this.hG = null;
  this.hH = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$.prototype = $p;
$p.iC = (function() {
  if ((!this.hH)) {
    this.hG = new $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18();
    this.hH = true;
  }
  return this.hG;
});
var $d_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$, "trivalibs.graphics.math.cpu.mat4$package$Mat4Buffer$", ({
  dF: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
function $m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$ = new $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
}
function $ct_Ltrivalibs_graphics_math_gpu_Expr__T__($thiz, wgsl) {
  $thiz.c = wgsl;
  return $thiz;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_Expr() {
  this.c = null;
}
$p = $c_Ltrivalibs_graphics_math_gpu_Expr.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_Expr;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_Expr() {
}
$h_Ltrivalibs_graphics_math_gpu_Expr.prototype = $p;
$p.f = (function() {
  return this.c;
});
var $d_Ltrivalibs_graphics_math_gpu_Expr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_Expr, "trivalibs.graphics.math.gpu.Expr", ({
  aI: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_LeftScalar$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_LeftScalar$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_LeftScalar$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_LeftScalar$() {
}
$h_Ltrivalibs_graphics_math_gpu_LeftScalar$.prototype = $p;
$p.k7 = (function() {
  return new $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), _$1$2))));
});
var $d_Ltrivalibs_graphics_math_gpu_LeftScalar$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LeftScalar$, "trivalibs.graphics.math.gpu.LeftScalar$", ({
  dJ: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_LeftScalar$;
function $m_Ltrivalibs_graphics_math_gpu_LeftScalar$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_LeftScalar$)) {
    $n_Ltrivalibs_graphics_math_gpu_LeftScalar$ = new $c_Ltrivalibs_graphics_math_gpu_LeftScalar$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_LeftScalar$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_expr$package$() {
  this.hK = null;
  this.hL = false;
}
$p = $c_Ltrivalibs_graphics_math_gpu_expr$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_expr$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_expr$package$() {
}
$h_Ltrivalibs_graphics_math_gpu_expr$package$.prototype = $p;
$p.l8 = (function(tex, uv, sampler) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("textureSample(" + tex.c) + ", ") + sampler.c) + ", ") + uv.c) + ")"));
});
$p.k9 = (function() {
  if ((!this.hL)) {
    this.hK = new $c_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2();
    this.hL = true;
  }
  return this.hK;
});
var $d_Ltrivalibs_graphics_math_gpu_expr$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_expr$package$, "trivalibs.graphics.math.gpu.expr$package$", ({
  dM: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_expr$package$;
function $m_Ltrivalibs_graphics_math_gpu_expr$package$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_expr$package$)) {
    $n_Ltrivalibs_graphics_math_gpu_expr$package$ = new $c_Ltrivalibs_graphics_math_gpu_expr$package$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_expr$package$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$() {
  this.hM = null;
  this.hN = false;
  this.hO = null;
  this.hP = false;
  this.hS = null;
  this.hT = false;
  this.hU = null;
  this.hV = false;
  this.hW = null;
  this.hX = false;
  this.hQ = null;
  this.hR = false;
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$.prototype = $p;
$p.ix = (function(v) {
  var s = ("" + v);
  return (((($f_T__indexOf__I__I(s, 46) >= 0) || ($f_T__indexOf__I__I(s, 69) >= 0)) || ($f_T__indexOf__I__I(s, 101) >= 0)) ? s : (s + ".0"));
});
$p.J = (function() {
  if ((!this.hN)) {
    this.hM = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1();
    this.hN = true;
  }
  return this.hM;
});
$p.k8 = (function() {
  if ((!this.hP)) {
    this.hO = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3();
    this.hP = true;
  }
  return this.hO;
});
$p.h2 = (function() {
  if ((!this.hT)) {
    this.hS = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4();
    this.hT = true;
  }
  return this.hS;
});
$p.aC = (function() {
  if ((!this.hV)) {
    this.hU = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5();
    this.hV = true;
  }
  return this.hU;
});
$p.h3 = (function() {
  if ((!this.hX)) {
    this.hW = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6();
    this.hX = true;
  }
  return this.hW;
});
$p.h0 = (function() {
  if ((!this.hR)) {
    this.hQ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$9();
    this.hR = true;
  }
  return this.hQ;
});
$p.j8 = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.c + ".xyz"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$, "trivalibs.graphics.math.gpu.float_expr$package$", ({
  dO: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_vec2$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_vec2$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_vec2$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_vec2$() {
}
$h_Ltrivalibs_graphics_math_gpu_vec2$.prototype = $p;
$p.az = (function(x, y) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("vec2<f32>(" + x.c) + ", ") + y.c) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_vec2$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec2$, "trivalibs.graphics.math.gpu.vec2$", ({
  e1: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_vec2$;
function $m_Ltrivalibs_graphics_math_gpu_vec2$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_vec2$)) {
    $n_Ltrivalibs_graphics_math_gpu_vec2$ = new $c_Ltrivalibs_graphics_math_gpu_vec2$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_vec2$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_vec3$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_vec3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_vec3$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_vec3$() {
}
$h_Ltrivalibs_graphics_math_gpu_vec3$.prototype = $p;
$p.jE = (function(scalar) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("vec3<f32>(" + scalar.c) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_vec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec3$, "trivalibs.graphics.math.gpu.vec3$", ({
  e2: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_vec3$;
function $m_Ltrivalibs_graphics_math_gpu_vec3$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_vec3$)) {
    $n_Ltrivalibs_graphics_math_gpu_vec3$ = new $c_Ltrivalibs_graphics_math_gpu_vec3$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_vec3$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_vec4$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_vec4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_vec4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_vec4$() {
}
$h_Ltrivalibs_graphics_math_gpu_vec4$.prototype = $p;
$p.az = (function(xyz, w) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("vec4<f32>(" + xyz.c) + ", ") + w.c) + ")"));
});
$p.jD = (function(xy, z, w) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("vec4<f32>(" + xy.c) + ", ") + z.c) + ", ") + w.c) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_vec4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec4$, "trivalibs.graphics.math.gpu.vec4$", ({
  e3: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_vec4$;
function $m_Ltrivalibs_graphics_math_gpu_vec4$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_vec4$)) {
    $n_Ltrivalibs_graphics_math_gpu_vec4$ = new $c_Ltrivalibs_graphics_math_gpu_vec4$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_vec4$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_BindPair(name, value) {
  this.es = null;
  this.es = value;
}
$p = $c_Ltrivalibs_graphics_painter_BindPair.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_BindPair;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_BindPair() {
}
$h_Ltrivalibs_graphics_painter_BindPair.prototype = $p;
var $d_Ltrivalibs_graphics_painter_BindPair = new $TypeData().i($c_Ltrivalibs_graphics_painter_BindPair, "trivalibs.graphics.painter.BindPair", ({
  e4: 1
}));
function $p_Ltrivalibs_graphics_painter_Form__uploadIndices__sjs_js_typedarray_TypedArray__V($thiz, raw) {
  if ((!(!(raw instanceof Uint16Array)))) {
    var \u03b41$___1 = raw.buffer;
    var \u03b41$___2 = (raw.length | 0);
    var \u03b41$___3 = "uint16";
  } else {
    var \u03b41$___1 = raw.buffer;
    var \u03b41$___2 = (raw.length | 0);
    var \u03b41$___3 = "uint32";
  }
  var ab = \u03b41$___1;
  var count = (\u03b41$___2 | 0);
  var fmt = \u03b41$___3;
  var $x_1 = $thiz.et.d;
  var value = (ab.byteLength | 0);
  var buf = $x_1.createBuffer(({
    "size": value,
    "usage": 24
  }));
  $thiz.et.I.writeBuffer(buf, 0.0, ab);
  if (($thiz.aq !== null)) {
    var opt$proxy2 = $thiz.aq;
    opt$proxy2.destroy();
  }
  $thiz.aq = buf;
  $thiz.fH = count;
  $thiz.gC = fmt;
}
function $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_bufferdata_BufferView__V($thiz, verts) {
  var $x_1 = $thiz.et.d;
  var value = (verts.dv.buffer.byteLength | 0);
  var buf = $x_1.createBuffer(({
    "size": value,
    "usage": 40
  }));
  $thiz.et.I.writeBuffer(buf, 0.0, verts.dv.buffer);
  if (($thiz.eu !== null)) {
    var opt$proxy4 = $thiz.eu;
    opt$proxy4.destroy();
  }
  $thiz.eu = buf;
  $thiz.fI = (verts.off | 0);
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Form(painter) {
  this.et = null;
  this.eu = null;
  this.fI = 0;
  this.aq = null;
  this.fH = 0;
  this.gC = null;
  this.gD = null;
  this.gB = null;
  this.et = painter;
  this.eu = null;
  this.fI = 0;
  this.aq = null;
  this.fH = 0;
  this.gC = "uint16";
  this.gD = "triangle-list";
  this.gB = "ccw";
}
$p = $c_Ltrivalibs_graphics_painter_Form.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Form;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Form() {
}
$h_Ltrivalibs_graphics_painter_Form.prototype = $p;
$p.lc = (function(geometry, vertices, topology, frontFace) {
  if ((topology !== (void 0))) {
    this.gD = topology;
  }
  if ((frontFace !== (void 0))) {
    this.gB = frontFace;
  }
  if ((geometry !== (void 0))) {
    $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_bufferdata_BufferView__V(this, geometry.hu);
    if ((geometry.gk !== null)) {
      $p_Ltrivalibs_graphics_painter_Form__uploadIndices__sjs_js_typedarray_TypedArray__V(this, geometry.gk);
    }
  }
  if ((vertices !== (void 0))) {
    $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_bufferdata_BufferView__V(this, vertices);
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Form = new $TypeData().i($c_Ltrivalibs_graphics_painter_Form, "trivalibs.graphics.painter.Form", ({
  e6: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter) {
  this.fJ = null;
  this.fJ = [];
}
$p = $c_Ltrivalibs_graphics_painter_InstanceList.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_InstanceList;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_InstanceList() {
}
$h_Ltrivalibs_graphics_painter_InstanceList.prototype = $p;
$p.t = (function() {
  return (this.fJ.length | 0);
});
var $d_Ltrivalibs_graphics_painter_InstanceList = new $TypeData().i($c_Ltrivalibs_graphics_painter_InstanceList, "trivalibs.graphics.painter.InstanceList", ({
  e7: 1
}));
function $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var w = $thiz.lv();
  var h = $thiz.kc();
  panel.jU(w, h);
  var msaa = panel.av;
  var encoder = $thiz.d.createCommandEncoder();
  var panelFormats = panel.gZ();
  var colorAttachments = [];
  var t = 0;
  while ((t < panel.lk())) {
    if ((panel.fQ !== null)) {
      matchResult6: {
        var \u03b412$;
        var x18 = panel.fQ;
        if ((x18 !== null)) {
          var x19 = $f_s_Product4__productElement__I__O(x18, 0);
          var x20 = $f_s_Product4__productElement__I__O(x18, 1);
          var x21 = $f_s_Product4__productElement__I__O(x18, 2);
          var x22 = $f_s_Product4__productElement__I__O(x18, 3);
          var \u03b412$ = x18;
          break matchResult6;
        }
        throw new $c_s_MatchError(x18);
      }
      var r$2 = (+\u03b412$.dQ);
      var g$2 = (+\u03b412$.ah);
      var b$2 = (+\u03b412$.ai);
      var a$2 = (+\u03b412$.aj);
      if (msaa) {
        var _2 = panel.iX(t);
        var SlotViews_this = panel.s[t];
        var _2$1 = SlotViews_this.D[0];
        var _2$2 = ({
          "r": r$2,
          "g": g$2,
          "b": b$2,
          "a": a$2
        });
        var attachment = ({
          "view": _2,
          "resolveTarget": _2$1,
          "loadOp": "clear",
          "storeOp": "discard",
          "clearValue": _2$2
        });
      } else {
        var SlotViews_this$2 = panel.s[t];
        var _2$3 = SlotViews_this$2.D[0];
        var _2$4 = ({
          "r": r$2,
          "g": g$2,
          "b": b$2,
          "a": a$2
        });
        var attachment = ({
          "view": _2$3,
          "loadOp": "clear",
          "storeOp": "store",
          "clearValue": _2$4
        });
      }
    } else if (msaa) {
      var _2$5 = panel.iX(t);
      var SlotViews_this$3 = panel.s[t];
      var _2$6 = SlotViews_this$3.D[0];
      var attachment = ({
        "view": _2$5,
        "resolveTarget": _2$6,
        "loadOp": "load",
        "storeOp": "store"
      });
    } else {
      var SlotViews_this$4 = panel.s[t];
      var _2$7 = SlotViews_this$4.D[0];
      var attachment = ({
        "view": _2$7,
        "loadOp": "load",
        "storeOp": "store"
      });
    }
    colorAttachments.push(attachment);
    t = ((1 + t) | 0);
  }
  var passDesc = ({
    "colorAttachments": colorAttachments
  });
  if (panel.eC) {
    var _2$8 = panel.iw();
    passDesc.depthStencilAttachment = ({
      "view": _2$8,
      "depthLoadOp": "clear",
      "depthStoreOp": "store",
      "depthClearValue": 1.0
    });
  }
  var shapePass = encoder.beginRenderPass(passDesc);
  var i = 0;
  while ((i < (panel.fR.length | 0))) {
    $p_Ltrivalibs_graphics_painter_Painter__renderShapeOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shape__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_Panel__V($thiz, shapePass, panel.fR[i], panel.eC, msaa, panelFormats, panel);
    i = ((1 + i) | 0);
  }
  shapePass.end();
  $thiz.I.submit([encoder.finish()]);
  if (panel.ez) {
    $p_Ltrivalibs_graphics_painter_Painter__resolvePanelDepth__Ltrivalibs_graphics_painter_Panel__V($thiz, panel);
  }
  var srcView = panel.lm();
  var dstView = panel.l1();
  var hasPongLayers = false;
  var curEncoder = null;
  var curPass = null;
  var j = 0;
  while ((j < (panel.a0.length | 0))) {
    var layer = panel.a0[j];
    var hasPanelLayout = (layer.U().eE !== null);
    var slot0Manual = ((hasPanelLayout && ((layer.ad().length | 0) > 0)) && (layer.ad()[0] !== null));
    var needsPingPong = (hasPanelLayout && (!slot0Manual));
    if ((layer.iV() >= 0)) {
      if ((curPass !== null)) {
        curPass.end();
        $thiz.I.submit([curEncoder.finish()]);
        curPass = null;
      }
      var mipDstView = panel.s[0].D[layer.iV()];
      var mipSrcView = ((layer.kS() >= 0) ? panel.s[0].D[layer.kS()] : srcView);
      var enc = $thiz.d.createCommandEncoder();
      var _2$9 = [({
        "view": mipDstView,
        "loadOp": "load",
        "storeOp": "store"
      })];
      var mipPass = enc.beginRenderPass(({
        "colorAttachments": _2$9
      }));
      $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V($thiz, mipPass, layer, false, false, panelFormats, mipSrcView, panel);
      mipPass.end();
      $thiz.I.submit([enc.finish()]);
    } else if (needsPingPong) {
      hasPongLayers = true;
      if ((curPass !== null)) {
        curPass.end();
        $thiz.I.submit([curEncoder.finish()]);
        curPass = null;
      }
      var enc$2 = $thiz.d.createCommandEncoder();
      var _2$10 = dstView;
      var _2$11 = [({
        "view": _2$10,
        "loadOp": "load",
        "storeOp": "store"
      })];
      var ppPass = enc$2.beginRenderPass(({
        "colorAttachments": _2$11
      }));
      $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V($thiz, ppPass, layer, false, false, panelFormats, srcView, panel);
      ppPass.end();
      $thiz.I.submit([enc$2.finish()]);
      var tmp = srcView;
      srcView = dstView;
      dstView = tmp;
    } else {
      if ((curPass === null)) {
        curEncoder = $thiz.d.createCommandEncoder();
        var $x_1 = curEncoder;
        var _2$12 = srcView;
        var _2$13 = [({
          "view": _2$12,
          "loadOp": "load",
          "storeOp": "store"
        })];
        curPass = $x_1.beginRenderPass(({
          "colorAttachments": _2$13
        }));
      }
      $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V($thiz, curPass, layer, false, false, panelFormats, null, panel);
    }
    j = ((1 + j) | 0);
  }
  if ((curPass !== null)) {
    curPass.end();
    $thiz.I.submit([curEncoder.finish()]);
  }
  if (hasPongLayers) {
    panel.lh();
  }
  panel.fP = null;
  var hasMipTargetLayers = false;
  var mi = 0;
  while ((mi < (panel.a0.length | 0))) {
    if ((panel.a0[mi].iV() >= 0)) {
      hasMipTargetLayers = true;
    }
    mi = ((1 + mi) | 0);
  }
  if (((panel.h5() > 1) && (!hasMipTargetLayers))) {
    $p_Ltrivalibs_graphics_painter_Painter__generateMipmaps__Ltrivalibs_graphics_painter_Panel__V($thiz, panel);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__blitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz) {
  if ((!$thiz.i3)) {
    $thiz.i2 = $thiz.d.createSampler(({
      "magFilter": "nearest",
      "minFilter": "nearest"
    }));
    $thiz.i3 = true;
  }
  return $thiz.i2;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz) {
  if ((!$thiz.hZ)) {
    var $x_2 = $thiz.d;
    var _2 = ({});
    var _2$1 = ({});
    var _2$2 = [({
      "binding": 0,
      "visibility": 2,
      "texture": _2
    }), ({
      "binding": 1,
      "visibility": 2,
      "sampler": _2$1
    })];
    var $x_1 = $x_2.createBindGroupLayout(({
      "entries": _2$2
    }));
    $thiz.hY = $x_1;
    $thiz.hZ = true;
  }
  return $thiz.hY;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitPipeline__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz) {
  if ((!$thiz.i1)) {
    var module = $thiz.d.createShaderModule(({
      "code": "\nstruct VsOut {\n  @builtin(position) pos: vec4f,\n  @location(0) uv: vec2f,\n}\n\n@vertex\nfn vs_main(@builtin(vertex_index) vi: u32) -> VsOut {\n  let x = f32((vi << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(vi & 2u) * 2.0 - 1.0;\n  var out: VsOut;\n  out.pos = vec4f(x, y, 0.0, 1.0);\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  return out;\n}\n\n@group(0) @binding(0) var blit_texture: texture_2d<f32>;\n@group(0) @binding(1) var blit_sampler: sampler;\n\n@fragment\nfn fs_main(in: VsOut) -> @location(0) vec4f {\n  return textureSample(blit_texture, blit_sampler, in.uv);\n}\n"
    }));
    var $x_1 = $thiz.d;
    var _2 = [$p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz)];
    var pipelineLayout = $x_1.createPipelineLayout(({
      "bindGroupLayouts": _2
    }));
    var $x_3 = $thiz.d;
    var _2$1 = ({
      "module": module,
      "entryPoint": "vs_main"
    });
    var f$proxy4 = $thiz.ar;
    var _2$2 = [({
      "format": f$proxy4
    })];
    var _2$3 = ({
      "module": module,
      "entryPoint": "fs_main",
      "targets": _2$2
    });
    var _2$4 = ({
      "topology": "triangle-list"
    });
    var $x_2 = $x_3.createRenderPipeline(({
      "layout": pipelineLayout,
      "vertex": _2$1,
      "fragment": _2$3,
      "primitive": _2$4
    }));
    $thiz.i0 = $x_2;
    $thiz.i1 = true;
  }
  return $thiz.i0;
}
function $p_Ltrivalibs_graphics_painter_Painter__depthResolveBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz) {
  if ((!$thiz.i6)) {
    var $x_2 = $thiz.d;
    var _2 = ({
      "sampleType": "depth",
      "multisampled": true
    });
    var _2$1 = [({
      "binding": 0,
      "visibility": 2,
      "texture": _2
    })];
    var $x_1 = $x_2.createBindGroupLayout(({
      "entries": _2$1
    }));
    $thiz.i5 = $x_1;
    $thiz.i6 = true;
  }
  return $thiz.i5;
}
function $p_Ltrivalibs_graphics_painter_Painter__depthResolvePipeline__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz) {
  if ((!$thiz.i8)) {
    var module = $thiz.d.createShaderModule(({
      "code": "\n@group(0) @binding(0) var ms_depth: texture_depth_multisampled_2d;\n\n@vertex\nfn vs_main(@builtin(vertex_index) vi: u32) -> @builtin(position) vec4f {\n  let x = f32((vi << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(vi & 2u) * 2.0 - 1.0;\n  return vec4f(x, y, 0.0, 1.0);\n}\n\n@fragment\nfn fs_main(@builtin(position) pos: vec4f) -> @builtin(frag_depth) f32 {\n  return textureLoad(ms_depth, vec2i(pos.xy), 0);\n}\n"
    }));
    var $x_1 = $thiz.d;
    var _2 = [$p_Ltrivalibs_graphics_painter_Painter__depthResolveBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz)];
    var pl = $x_1.createPipelineLayout(({
      "bindGroupLayouts": _2
    }));
    var $x_3 = $thiz.d;
    var _2$1 = ({
      "module": module,
      "entryPoint": "vs_main"
    });
    var _2$2 = [];
    var _2$3 = ({
      "module": module,
      "entryPoint": "fs_main",
      "targets": _2$2
    });
    var _2$4 = ({
      "topology": "triangle-list"
    });
    var _2$5 = ({
      "format": "depth24plus",
      "depthWriteEnabled": true,
      "depthCompare": "always"
    });
    var $x_2 = $x_3.createRenderPipeline(({
      "layout": pl,
      "vertex": _2$1,
      "fragment": _2$3,
      "primitive": _2$4,
      "depthStencil": _2$5
    }));
    $thiz.i7 = $x_2;
    $thiz.i8 = true;
  }
  return $thiz.i7;
}
function $p_Ltrivalibs_graphics_painter_Painter__resolvePanelDepth__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var encoder = $thiz.d.createCommandEncoder();
  var _2 = [];
  var _2$1 = panel.l7();
  var _2$2 = ({
    "view": _2$1,
    "depthLoadOp": "clear",
    "depthStoreOp": "store",
    "depthClearValue": 1.0
  });
  var pass = encoder.beginRenderPass(({
    "colorAttachments": _2,
    "depthStencilAttachment": _2$2
  }));
  var $x_1 = $thiz.d;
  var _2$3 = $p_Ltrivalibs_graphics_painter_Painter__depthResolveBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz);
  var _2$4 = panel.iw();
  var _2$5 = [({
    "binding": 0,
    "resource": _2$4
  })];
  var bindGroup = $x_1.createBindGroup(({
    "layout": _2$3,
    "entries": _2$5
  }));
  pass.setPipeline($p_Ltrivalibs_graphics_painter_Painter__depthResolvePipeline__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz));
  pass.setBindGroup(0, bindGroup);
  pass.draw(3);
  pass.end();
  $thiz.I.submit([encoder.finish()]);
}
function $p_Ltrivalibs_graphics_painter_Painter__mipBlitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz) {
  if ((!$thiz.ia)) {
    $thiz.i9 = $thiz.d.createSampler(({
      "magFilter": "linear",
      "minFilter": "linear"
    }));
    $thiz.ia = true;
  }
  return $thiz.i9;
}
function $p_Ltrivalibs_graphics_painter_Painter__getMipBlitPipeline__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, format) {
  if ((!(!(!(!$thiz.fK.hasOwnProperty(format)))))) {
    return $thiz.fK[format];
  } else {
    var module = $thiz.d.createShaderModule(({
      "code": "\nstruct VsOut {\n  @builtin(position) pos: vec4f,\n  @location(0) uv: vec2f,\n}\n\n@vertex\nfn vs_main(@builtin(vertex_index) vi: u32) -> VsOut {\n  let x = f32((vi << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(vi & 2u) * 2.0 - 1.0;\n  var out: VsOut;\n  out.pos = vec4f(x, y, 0.0, 1.0);\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  return out;\n}\n\n@group(0) @binding(0) var blit_texture: texture_2d<f32>;\n@group(0) @binding(1) var blit_sampler: sampler;\n\n@fragment\nfn fs_main(in: VsOut) -> @location(0) vec4f {\n  return textureSample(blit_texture, blit_sampler, in.uv);\n}\n"
    }));
    var $x_1 = $thiz.d;
    var _2 = [$p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz)];
    var pl = $x_1.createPipelineLayout(({
      "bindGroupLayouts": _2
    }));
    var $x_2 = $thiz.d;
    var _2$1 = ({
      "module": module,
      "entryPoint": "vs_main"
    });
    var _2$2 = [({
      "format": format
    })];
    var _2$3 = ({
      "module": module,
      "entryPoint": "fs_main",
      "targets": _2$2
    });
    var _2$4 = ({
      "topology": "triangle-list"
    });
    var p = $x_2.createRenderPipeline(({
      "layout": pl,
      "vertex": _2$1,
      "fragment": _2$3,
      "primitive": _2$4
    }));
    $thiz.fK[format] = p;
    return p;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__generateMipmaps__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var mipCount = panel.h5();
  if ((mipCount <= 1)) {
    return (void 0);
  }
  var fmt = (((panel.au.length | 0) > 0) ? panel.au[0] : $thiz.ar);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getMipBlitPipeline__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, fmt);
  var i = 1;
  while ((i < mipCount)) {
    var srcView = panel.s[0].D[((i - 1) | 0)];
    var dstView = panel.s[0].D[i];
    var encoder = $thiz.d.createCommandEncoder();
    var _2 = ({
      "r": 0,
      "g": 0,
      "b": 0,
      "a": 0
    });
    var _2$1 = [({
      "view": dstView,
      "loadOp": "clear",
      "storeOp": "store",
      "clearValue": _2
    })];
    var pass = encoder.beginRenderPass(({
      "colorAttachments": _2$1
    }));
    var $x_1 = $thiz.d;
    var _2$2 = $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz);
    var _2$3 = $p_Ltrivalibs_graphics_painter_Painter__mipBlitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz);
    var _2$4 = [({
      "binding": 0,
      "resource": srcView
    }), ({
      "binding": 1,
      "resource": _2$3
    })];
    var bindGroup = $x_1.createBindGroup(({
      "layout": _2$2,
      "entries": _2$4
    }));
    pass.setPipeline(pipeline);
    pass.setBindGroup(0, bindGroup);
    pass.draw(3);
    pass.end();
    $thiz.I.submit([encoder.finish()]);
    i = ((1 + i) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, bindings, panelBindings) {
  $thiz.B.length = (bindings.length | 0);
  var i = 0;
  while ((i < (bindings.length | 0))) {
    $thiz.B[i] = bindings[i];
    i = ((1 + i) | 0);
  }
  $thiz.r.length = (panelBindings.length | 0);
  var j = 0;
  while ((j < (panelBindings.length | 0))) {
    $thiz.r[j] = panelBindings[j];
    j = ((1 + j) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shade, workBindings, workPanelBindings) {
  var dict = panel.gE;
  var keys = Object.keys(dict);
  var i = 0;
  while ((i < (keys.length | 0))) {
    var name = keys[i];
    var value = dict[name];
    if ((!(!(!(!shade.aw.hasOwnProperty(name)))))) {
      var idx = (shade.aw[name] | 0);
      if (((idx >= (workBindings.length | 0)) || (workBindings[idx] === null))) {
        while (((workBindings.length | 0) <= idx)) {
          workBindings.push(null);
        }
        workBindings[idx] = value;
      }
    } else if ((!(!(!(!shade.fU.hasOwnProperty(name)))))) {
      var idx$2 = (shade.fU[name] | 0);
      if (((idx$2 >= (workPanelBindings.length | 0)) || (workPanelBindings[idx$2] === null))) {
        while (((workPanelBindings.length | 0) <= idx$2)) {
          workPanelBindings.push(null);
        }
        var pb = ((!(!(value instanceof $a_Ltrivalibs_graphics_painter_PanelBinding()))) ? value : new ($a_Ltrivalibs_graphics_painter_PanelBinding())(value));
        workPanelBindings[idx$2] = pb;
      }
    }
    i = ((1 + i) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__applyInstanceBindings__Ltrivalibs_graphics_painter_Instance__sjs_js_Array__sjs_js_Array__V($thiz, inst, workBindings, workPanelBindings) {
  var i = 0;
  while ((i < (inst.eM().length | 0))) {
    if ((inst.eM()[i] !== null)) {
      while (((workBindings.length | 0) <= i)) {
        workBindings.push(null);
      }
      workBindings[i] = inst.eM()[i];
    }
    i = ((1 + i) | 0);
  }
  var j = 0;
  while ((j < (inst.ad().length | 0))) {
    if ((inst.ad()[j] !== null)) {
      while (((workPanelBindings.length | 0) <= j)) {
        workPanelBindings.push(null);
      }
      workPanelBindings[j] = inst.ad()[j];
    }
    j = ((1 + j) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel) {
  return ((panel !== null) && ((Object.keys(panel.gE).length | 0) > 0));
}
function $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shade, bindings) {
  if ((((bindings.length | 0) > 0) && (shade.gF !== null))) {
    var entries = [];
    var i = 0;
    while ((i < (bindings.length | 0))) {
      var b = bindings[i];
      if ((b !== null)) {
        entries.push($p_Ltrivalibs_graphics_painter_Painter__bindingEntry__I__O__sjs_js_Dynamic($thiz, i, b));
      }
      i = ((1 + i) | 0);
    }
    var $x_1 = $thiz.d;
    var _2 = shade.gF;
    var bg = $x_1.createBindGroup(({
      "layout": _2,
      "entries": entries
    }));
    pass.setBindGroup(0, bg);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shade, panelBindings, srcView) {
  if ((shade.eE !== null)) {
    var entries = [];
    if ((srcView !== null)) {
      entries.push(({
        "binding": 0,
        "resource": srcView
      }));
    }
    var startIdx = ((srcView !== null) ? 1 : 0);
    var k = startIdx;
    while ((k < (panelBindings.length | 0))) {
      var pb = panelBindings[k];
      if ((pb !== null)) {
        var view = ((!(!pb.depth)) ? pb.panel.jO() : (((pb.mipLevel | 0) < 0) ? pb.panel.s[(pb.index | 0)].id : pb.panel.s[(pb.index | 0)].D[(pb.mipLevel | 0)]));
        var value = k;
        entries.push(({
          "binding": value,
          "resource": view
        }));
      }
      k = ((1 + k) | 0);
    }
    if (((entries.length | 0) > 0)) {
      var $x_1 = $thiz.d;
      var _2 = shade.eE;
      var pg = $x_1.createBindGroup(({
        "layout": _2,
        "entries": entries
      }));
      pass.setBindGroup(1, pg);
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__renderShapeOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shape__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_Panel__V($thiz, pass, shape, depthTest, multisample, formats, panel) {
  var fmts = ((formats !== null) ? formats : [$thiz.ar]);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, shape.x, shape.gH, fmts, depthTest, multisample, shape.M.gD, shape.gI, shape.M.gB);
  pass.setPipeline(pipeline);
  pass.setVertexBuffer(0, shape.M.eu);
  var opt$proxy9 = shape.M.aq;
  var hasIndex = (opt$proxy9 !== null);
  if (hasIndex) {
    pass.setIndexBuffer(shape.M.aq, shape.M.gC);
  }
  var instanceCount = shape.gJ.t();
  var hasPanelBinds = $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel);
  if ((instanceCount === 0)) {
    if (hasPanelBinds) {
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, shape.C, shape.aa);
      $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shape.x, $thiz.B, $thiz.r);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.x, $thiz.B);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.x, $thiz.r, null);
    } else {
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.x, shape.C);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.x, shape.aa, null);
    }
    if (hasIndex) {
      pass.drawIndexed(shape.M.fH);
    } else {
      pass.draw(shape.M.fI);
    }
  } else {
    var i = 0;
    while ((i < instanceCount)) {
      var inst = shape.gJ.fJ[i];
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, shape.C, shape.aa);
      if (hasPanelBinds) {
        $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shape.x, $thiz.B, $thiz.r);
      }
      $p_Ltrivalibs_graphics_painter_Painter__applyInstanceBindings__Ltrivalibs_graphics_painter_Instance__sjs_js_Array__sjs_js_Array__V($thiz, inst, $thiz.B, $thiz.r);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.x, $thiz.B);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.x, $thiz.r, null);
      if (hasIndex) {
        pass.drawIndexed(shape.M.fH);
      } else {
        pass.draw(shape.M.fI);
      }
      i = ((1 + i) | 0);
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V($thiz, pass, layer, depthTest, multisample, formats, srcView, panel) {
  var fmts = ((formats !== null) ? formats : [$thiz.ar]);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, layer.U(), layer.lA(), fmts, depthTest, multisample, "triangle-list", "none", "ccw");
  pass.setPipeline(pipeline);
  var instanceCount = layer.kg().t();
  var hasPanelBinds = $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel);
  if ((instanceCount === 0)) {
    if (hasPanelBinds) {
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, layer.eM(), layer.ad());
      $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, layer.U(), $thiz.B, $thiz.r);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, layer.U(), $thiz.B);
      var effectiveSrcView = (((($thiz.r.length | 0) > 0) && ($thiz.r[0] !== null)) ? null : srcView);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.U(), $thiz.r, effectiveSrcView);
    } else {
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, layer.U(), layer.eM());
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.U(), layer.ad(), srcView);
    }
    pass.draw(3);
  } else {
    var i = 0;
    while ((i < instanceCount)) {
      var inst = layer.kg().fJ[i];
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, layer.eM(), layer.ad());
      if (hasPanelBinds) {
        $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, layer.U(), $thiz.B, $thiz.r);
      }
      $p_Ltrivalibs_graphics_painter_Painter__applyInstanceBindings__Ltrivalibs_graphics_painter_Instance__sjs_js_Array__sjs_js_Array__V($thiz, inst, $thiz.B, $thiz.r);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, layer.U(), $thiz.B);
      var effectiveSrcView$2 = (((($thiz.r.length | 0) > 0) && ($thiz.r[0] !== null)) ? null : srcView);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.U(), $thiz.r, effectiveSrcView$2);
      pass.draw(3);
      i = ((1 + i) | 0);
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__blendKeyStr__Ltrivalibs_graphics_painter_BlendState__T($thiz, bs) {
  if ((bs === null)) {
    return "n";
  } else {
    var c = bs.color;
    var a = bs.alpha;
    return ((((((((((c.srcFactor + ".") + c.dstFactor) + ".") + c.operation) + "|") + a.srcFactor) + ".") + a.dstFactor) + ".") + a.operation);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, shade, blendState, formats, depthTest, multisample, topology, cullMode, frontFace) {
  var key = ((((((((((((((shade.ib + "|") + $p_Ltrivalibs_graphics_painter_Painter__blendKeyStr__Ltrivalibs_graphics_painter_BlendState__T($thiz, blendState)) + "|") + formats.join(",")) + "|") + depthTest) + "|") + multisample) + "|") + topology) + "|") + cullMode) + "|") + frontFace);
  if ((!(!(!(!$thiz.fL.hasOwnProperty(key)))))) {
    return $thiz.fL[key];
  } else {
    var targets = [];
    var ti = 0;
    while ((ti < (formats.length | 0))) {
      if ((blendState === null)) {
        var f$proxy7 = formats[ti];
        var target = ({
          "format": f$proxy7
        });
      } else {
        var f$proxy8 = formats[ti];
        var target = ({
          "format": f$proxy8,
          "blend": blendState
        });
      }
      targets.push(target);
      ti = ((1 + ti) | 0);
    }
    if ((shade.gG !== null)) {
      var _2 = shade.fV;
      var _2$1 = [shade.gG];
      var vertexDescriptor = ({
        "module": _2,
        "entryPoint": "vs_main",
        "buffers": _2$1
      });
    } else {
      var _2$2 = shade.fV;
      var vertexDescriptor = ({
        "module": _2$2,
        "entryPoint": "vs_main"
      });
    }
    var _2$3 = shade.ic;
    var _2$4 = shade.fV;
    var _2$5 = ({
      "module": _2$4,
      "entryPoint": "fs_main",
      "targets": targets
    });
    var _2$6 = ({
      "topology": topology,
      "cullMode": cullMode,
      "frontFace": frontFace
    });
    var desc = ({
      "layout": _2$3,
      "vertex": vertexDescriptor,
      "fragment": _2$5,
      "primitive": _2$6
    });
    if (depthTest) {
      desc.depthStencil = ({
        "format": "depth24plus",
        "depthWriteEnabled": true,
        "depthCompare": "less"
      });
    }
    if (multisample) {
      desc.multisample = ({
        "count": 4
      });
    }
    var p = $thiz.d.createRenderPipeline(desc);
    $thiz.fL[key] = p;
    return p;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__bindingEntry__I__O__sjs_js_Dynamic($thiz, i, b) {
  if ((b instanceof $c_Ltrivalibs_graphics_buffers_BufferBinding)) {
    var _2 = b.fw;
    var _2$1 = ({
      "buffer": _2
    });
    return ({
      "binding": i,
      "resource": _2$1
    });
  } else {
    return ({
      "binding": i,
      "resource": b
    });
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Painter(device, queue, canvas, context, preferredFormat) {
  this.d = null;
  this.I = null;
  this.ev = null;
  this.i4 = null;
  this.ar = null;
  this.fL = null;
  this.a5 = 0;
  this.fM = null;
  this.i2 = null;
  this.i3 = false;
  this.hY = null;
  this.hZ = false;
  this.i0 = null;
  this.i1 = false;
  this.i5 = null;
  this.i6 = false;
  this.i7 = null;
  this.i8 = false;
  this.i9 = null;
  this.ia = false;
  this.fK = null;
  this.B = null;
  this.r = null;
  this.d = device;
  this.I = queue;
  this.ev = canvas;
  this.i4 = context;
  this.ar = preferredFormat;
  this.fL = ({});
  this.a5 = 0;
  this.fM = [];
  this.fK = ({});
  this.B = [];
  this.r = [];
}
$p = $c_Ltrivalibs_graphics_painter_Painter.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Painter;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Painter() {
}
$h_Ltrivalibs_graphics_painter_Painter.prototype = $p;
$p.kX = (function(cb) {
  this.fM.push(cb);
  cb.ir((this.ev.width | 0), (this.ev.height | 0));
});
$p.jY = (function(w, h) {
  var k = 0;
  while ((k < (this.fM.length | 0))) {
    this.fM[k].ir(w, h);
    k = ((1 + k) | 0);
  }
});
$p.lv = (function() {
  return (this.ev.width | 0);
});
$p.kc = (function() {
  return (this.ev.height | 0);
});
$p.l9 = (function(magFilter, minFilter, mipmapFilter, addressMode, addressModeU, addressModeV) {
  var $x_1 = this.d;
  var a$proxy1 = ((addressModeU === (void 0)) ? addressMode : addressModeU);
  var a$proxy2 = ((addressModeV === (void 0)) ? addressMode : addressModeV);
  return $x_1.createSampler(({
    "magFilter": magFilter,
    "minFilter": minFilter,
    "mipmapFilter": mipmapFilter,
    "addressModeU": a$proxy1,
    "addressModeV": a$proxy2
  }));
});
$p.k2 = (function(geometry, vertices, topology, frontFace) {
  return new $c_Ltrivalibs_graphics_painter_Form(this).lc(geometry, vertices, topology, frontFace);
});
$p.j2 = (function(form, shade, cullMode, blendState) {
  return new $c_Ltrivalibs_graphics_painter_Shape(this, form, shade).ld(cullMode, blendState);
});
$p.iZ = (function(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers) {
  return new $c_Ltrivalibs_graphics_painter_Panel(this).lb(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers);
});
$p.le = (function(panel) {
  var encoder = this.d.createCommandEncoder();
  var swapChainView = this.i4.getCurrentTexture().createView();
  var _2 = [({
    "view": swapChainView,
    "loadOp": "load",
    "storeOp": "store"
  })];
  var pass = encoder.beginRenderPass(({
    "colorAttachments": _2
  }));
  var $x_1 = this.d;
  var _2$1 = $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout(this);
  var _2$2 = panel.l0();
  var _2$3 = $p_Ltrivalibs_graphics_painter_Painter__blitSampler__Ltrivalibs_graphics_painter_GPUSampler(this);
  var _2$4 = [({
    "binding": 0,
    "resource": _2$2
  }), ({
    "binding": 1,
    "resource": _2$3
  })];
  var bindGroup = $x_1.createBindGroup(({
    "layout": _2$1,
    "entries": _2$4
  }));
  pass.setPipeline($p_Ltrivalibs_graphics_painter_Painter__blitPipeline__Ltrivalibs_graphics_painter_GPURenderPipeline(this));
  pass.setBindGroup(0, bindGroup);
  pass.draw(3);
  pass.end();
  this.I.submit([encoder.finish()]);
});
var $d_Ltrivalibs_graphics_painter_Painter = new $TypeData().i($c_Ltrivalibs_graphics_painter_Painter, "trivalibs.graphics.painter.Painter", ({
  e8: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Painter$() {
}
$p = $c_Ltrivalibs_graphics_painter_Painter$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Painter$;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Painter$() {
}
$h_Ltrivalibs_graphics_painter_Painter$.prototype = $p;
$p.kf = (function(canvas) {
  var maybeGpu = $m_Ltrivalibs_graphics_painter_WebGPU$().k6();
  if ((maybeGpu === (void 0))) {
    return Promise.reject(Error("WebGPU is not supported"));
  } else {
    var promise$proxy1 = maybeGpu.requestAdapter();
    var promise$proxy3 = promise$proxy1.then(((value$2) => {
      if ((value$2 === null)) {
        throw new $c_sjs_js_JavaScriptException(Error("Failed to get WebGPU adapter")).em;
      } else {
        return value$2;
      }
    }));
    var f$proxy11 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((adapter$2) => {
      var promise$proxy2 = adapter$2.requestDevice();
      var f$proxy10 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((device$2) => {
        var queue = device$2.queue;
        var context = $m_Ltrivalibs_graphics_painter_WebGPU$().k5(canvas);
        var format = maybeGpu.getPreferredCanvasFormat();
        context.configure(({
          "device": device$2,
          "format": format
        }));
        var painter = new $c_Ltrivalibs_graphics_painter_Painter(device$2, queue, canvas, context, format);
        var w = (canvas.clientWidth | 0);
        var h = (canvas.clientHeight | 0);
        canvas.width = w;
        canvas.height = h;
        var observer = new ResizeObserver(((entries$3) => {
          var entry = entries$3[0];
          var rw = (+entry.contentRect.width);
          var rh = (+entry.contentRect.height);
          if (((rw > 0.0) && (rh > 0.0))) {
            canvas.width = $doubleToInt(rw);
            canvas.height = $doubleToInt(rh);
            painter.jY(rw, rh);
          }
        }));
        observer.observe(canvas);
        return painter;
      }));
      return promise$proxy2.then($m_sjs_js_Any$().eN(f$proxy10));
    }));
    return promise$proxy3.then($m_sjs_js_Any$().eN(f$proxy11));
  }
});
$p.ke = (function(canvas, setup) {
  var promise$proxy4 = this.kf(canvas);
  return promise$proxy4.then($m_sjs_js_Any$().eN(setup));
});
var $d_Ltrivalibs_graphics_painter_Painter$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_Painter$, "trivalibs.graphics.painter.Painter$", ({
  e9: 1
}));
var $n_Ltrivalibs_graphics_painter_Painter$;
function $m_Ltrivalibs_graphics_painter_Painter$() {
  if ((!$n_Ltrivalibs_graphics_painter_Painter$)) {
    $n_Ltrivalibs_graphics_painter_Painter$ = new $c_Ltrivalibs_graphics_painter_Painter$();
  }
  return $n_Ltrivalibs_graphics_painter_Painter$;
}
function $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V($thiz) {
  if (($thiz.ex !== null)) {
    var opt$proxy6 = $thiz.ex;
    opt$proxy6.destroy();
  }
  if (($thiz.eA !== null)) {
    var opt$proxy8 = $thiz.eA;
    opt$proxy8.destroy();
  }
  var depthUsage = ($thiz.ew ? 20 : 16);
  var $x_1 = $thiz.a9.d;
  var value = $thiz.at;
  var value$1 = $thiz.as;
  var _2 = ({
    "width": value,
    "height": value$1
  });
  var _2$1 = ($thiz.av ? 4 : 1);
  var depthTex = $x_1.createTexture(({
    "size": _2,
    "format": "depth24plus",
    "usage": depthUsage,
    "sampleCount": _2$1
  }));
  $thiz.ex = depthTex;
  $thiz.fN = depthTex.createView();
  if (($thiz.ew && $thiz.av)) {
    var $x_2 = $thiz.a9.d;
    var value$2 = $thiz.at;
    var value$3 = $thiz.as;
    var _2$2 = ({
      "width": value$2,
      "height": value$3
    });
    var resTex = $x_2.createTexture(({
      "size": _2$2,
      "format": "depth24plus",
      "usage": 20,
      "sampleCount": 1
    }));
    $thiz.eA = resTex;
    $thiz.eB = resTex.createView();
    $thiz.ez = true;
  } else {
    $thiz.eA = null;
    $thiz.eB = null;
    $thiz.ez = false;
  }
}
function $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z($thiz) {
  var i = 0;
  while ((i < ($thiz.a0.length | 0))) {
    if (($thiz.a0[i].U().eE !== null)) {
      return true;
    }
    i = ((1 + i) | 0);
  }
  return false;
}
function $p_Ltrivalibs_graphics_painter_Panel__buildSlotViews__Ltrivalibs_graphics_painter_GPUTexture__I__Ltrivalibs_graphics_painter_SlotViews($thiz, tex, mipCount) {
  var perMip = [];
  var m = 0;
  while ((m < mipCount)) {
    var value = m;
    var $x_1 = tex.createView(({
      "baseMipLevel": value,
      "mipLevelCount": 1
    }));
    perMip.push($x_1);
    m = ((1 + m) | 0);
  }
  return new $c_Ltrivalibs_graphics_painter_SlotViews(perMip, tex.createView());
}
function $p_Ltrivalibs_graphics_painter_Panel__default$proxy1$1__O__O($thiz, format$1) {
  return ((format$1 === (void 0)) ? (void 0) : [format$1]);
}
function $p_Ltrivalibs_graphics_painter_Panel__default$proxy2$1__O__O($thiz, shape$1) {
  return ((shape$1 === (void 0)) ? (void 0) : [shape$1]);
}
function $p_Ltrivalibs_graphics_painter_Panel__default$proxy3$1__O__O($thiz, layer$1) {
  return ((layer$1 === (void 0)) ? (void 0) : [layer$1]);
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Panel(painter) {
  this.a9 = null;
  this.fT = 0;
  this.fS = 0;
  this.fQ = null;
  this.eC = false;
  this.av = false;
  this.eD = 0;
  this.au = null;
  this.fR = null;
  this.a0 = null;
  this.gE = null;
  this.a8 = null;
  this.s = null;
  this.a7 = null;
  this.a6 = null;
  this.ex = null;
  this.fN = null;
  this.ew = false;
  this.eA = null;
  this.eB = null;
  this.ez = false;
  this.ey = null;
  this.fO = null;
  this.fP = null;
  this.at = 0;
  this.as = 0;
  this.a9 = painter;
  this.fT = 0;
  this.fS = 0;
  this.fQ = null;
  this.eC = false;
  this.av = false;
  this.eD = 1;
  this.au = [];
  this.fR = [];
  this.a0 = [];
  this.gE = ({});
  this.a8 = [];
  this.s = [];
  this.a7 = [];
  this.a6 = [];
  this.ex = null;
  this.fN = null;
  this.ew = false;
  this.eA = null;
  this.eB = null;
  this.ez = false;
  this.ey = [];
  this.fO = [];
  this.fP = null;
  this.at = 0;
  this.as = 0;
}
$p = $c_Ltrivalibs_graphics_painter_Panel.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Panel;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Panel() {
}
$h_Ltrivalibs_graphics_painter_Panel.prototype = $p;
$p.h5 = (function() {
  if ((this.eD === 0)) {
    var a = this.at;
    var b = this.as;
    var maxDim = ((a > b) ? a : b);
    if ((maxDim <= 0)) {
      return 1;
    } else {
      var a$1 = maxDim;
      return ((1 + $doubleToInt(((+Math.log(a$1)) / (+Math.log(2.0))))) | 0);
    }
  } else {
    return this.eD;
  }
});
$p.gZ = (function() {
  return (((this.au.length | 0) === 0) ? [this.a9.ar] : this.au);
});
$p.lk = (function() {
  return (this.gZ().length | 0);
});
$p.lm = (function() {
  var SlotViews_this = this.s[0];
  return SlotViews_this.D[0];
});
$p.l1 = (function() {
  if (((this.a6.length | 0) > 0)) {
    var SlotViews_this = this.a6[0];
    return SlotViews_this.D[0];
  } else {
    return null;
  }
});
$p.iw = (function() {
  return this.fN;
});
$p.l7 = (function() {
  return this.eB;
});
$p.l0 = (function() {
  if ((this.fP !== null)) {
    return this.fP;
  } else {
    var SlotViews_this = this.s[0];
    return SlotViews_this.D[0];
  }
});
$p.lh = (function() {
  var t = this.a8[0];
  this.a8[0] = this.a7[0];
  this.a7[0] = t;
  var sv = this.s[0];
  this.s[0] = this.a6[0];
  this.a6[0] = sv;
});
$p.iX = (function(index) {
  return this.fO[index];
});
$p.jO = (function() {
  if (((!this.ew) && (this.ex !== null))) {
    this.ew = true;
    $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V(this);
  }
  return (this.ez ? this.eB : this.fN);
});
$p.lb = (function(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers) {
  if ((width !== (void 0))) {
    var v = (width | 0);
    this.fT = v;
  }
  if ((height !== (void 0))) {
    var v$1 = (height | 0);
    this.fS = v$1;
  }
  if ((clearColor !== (void 0))) {
    this.fQ = clearColor;
  }
  if ((depthTest !== (void 0))) {
    var v$2 = (!(!depthTest));
    this.eC = v$2;
  }
  if ((multisample !== (void 0))) {
    var v$3 = (!(!multisample));
    this.av = v$3;
  }
  if ((mips !== (void 0))) {
    if ((!(!mips))) {
      this.eD = 0;
    }
  }
  if ((mipLevels !== (void 0))) {
    var v$5 = (mipLevels | 0);
    if ((v$5 > 0)) {
      this.eD = v$5;
    }
  }
  var x = ((formats === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy1$1__O__O(this, format) : formats);
  if ((x !== (void 0))) {
    this.au = x;
  }
  var x$1 = ((shapes === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy2$1__O__O(this, shape) : shapes);
  if ((x$1 !== (void 0))) {
    this.fR = x$1;
  }
  var x$2 = ((layers === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy3$1__O__O(this, layer) : layers);
  if ((x$2 !== (void 0))) {
    this.a0 = x$2;
  }
  return this;
});
$p.jU = (function(canvasW, canvasH) {
  var targetW = ((this.fT === 0) ? canvasW : this.fT);
  var targetH = ((this.fS === 0) ? canvasH : this.fS);
  if (((targetW !== this.at) || (targetH !== this.as))) {
    var d = 0;
    while ((d < (this.a8.length | 0))) {
      this.a8[d].destroy();
      d = ((1 + d) | 0);
    }
    d = 0;
    while ((d < (this.a7.length | 0))) {
      this.a7[d].destroy();
      d = ((1 + d) | 0);
    }
    d = 0;
    while ((d < (this.ey.length | 0))) {
      this.ey[d].destroy();
      d = ((1 + d) | 0);
    }
    this.at = targetW;
    this.as = targetH;
    var mipCount = this.h5();
    var fmts = this.gZ();
    var hasPong = $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z(this);
    this.a8 = [];
    this.s = [];
    this.a7 = [];
    this.a6 = [];
    this.ey = [];
    this.fO = [];
    var i = 0;
    while ((i < (fmts.length | 0))) {
      var fmt = fmts[i];
      var $x_1 = this.a9.d;
      var _2 = ({
        "width": targetW,
        "height": targetH
      });
      var tex = $x_1.createTexture(({
        "size": _2,
        "format": fmt,
        "usage": 20,
        "mipLevelCount": mipCount
      }));
      this.a8.push(tex);
      this.s.push($p_Ltrivalibs_graphics_painter_Panel__buildSlotViews__Ltrivalibs_graphics_painter_GPUTexture__I__Ltrivalibs_graphics_painter_SlotViews(this, tex, mipCount));
      if (hasPong) {
        var $x_2 = this.a9.d;
        var _2$1 = ({
          "width": targetW,
          "height": targetH
        });
        var pongTex = $x_2.createTexture(({
          "size": _2$1,
          "format": fmt,
          "usage": 20,
          "mipLevelCount": mipCount
        }));
        this.a7.push(pongTex);
        this.a6.push($p_Ltrivalibs_graphics_painter_Panel__buildSlotViews__Ltrivalibs_graphics_painter_GPUTexture__I__Ltrivalibs_graphics_painter_SlotViews(this, pongTex, mipCount));
      }
      if (this.av) {
        var $x_3 = this.a9.d;
        var _2$2 = ({
          "width": targetW,
          "height": targetH
        });
        var msaaTex = $x_3.createTexture(({
          "size": _2$2,
          "format": fmt,
          "sampleCount": 4,
          "usage": 16
        }));
        this.ey.push(msaaTex);
        this.fO.push(msaaTex.createView());
      }
      i = ((1 + i) | 0);
    }
    if (this.eC) {
      $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V(this);
    }
  }
});
var $d_Ltrivalibs_graphics_painter_Panel = new $TypeData().i($c_Ltrivalibs_graphics_painter_Panel, "trivalibs.graphics.painter.Panel", ({
  ea: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Shade(id, shaderModule, vertexBufferLayout, valueBindGroupLayout, panelBindGroupLayout, pipelineLayout, isLayer, uniformIndices, panelIndices) {
  this.ib = 0;
  this.fV = null;
  this.gG = null;
  this.gF = null;
  this.eE = null;
  this.ic = null;
  this.aw = null;
  this.fU = null;
  this.ib = id;
  this.fV = shaderModule;
  this.gG = vertexBufferLayout;
  this.gF = valueBindGroupLayout;
  this.eE = panelBindGroupLayout;
  this.ic = pipelineLayout;
  this.aw = uniformIndices;
  this.fU = panelIndices;
}
$p = $c_Ltrivalibs_graphics_painter_Shade.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Shade;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Shade() {
}
$h_Ltrivalibs_graphics_painter_Shade.prototype = $p;
var $d_Ltrivalibs_graphics_painter_Shade = new $TypeData().i($c_Ltrivalibs_graphics_painter_Shade, "trivalibs.graphics.painter.Shade", ({
  eb: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_SlotViews(perMip, sampling) {
  this.D = null;
  this.id = null;
  this.D = perMip;
  this.id = sampling;
}
$p = $c_Ltrivalibs_graphics_painter_SlotViews.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_SlotViews;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_SlotViews() {
}
$h_Ltrivalibs_graphics_painter_SlotViews.prototype = $p;
var $d_Ltrivalibs_graphics_painter_SlotViews = new $TypeData().i($c_Ltrivalibs_graphics_painter_SlotViews, "trivalibs.graphics.painter.SlotViews", ({
  ed: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_WebGPU$() {
}
$p = $c_Ltrivalibs_graphics_painter_WebGPU$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_WebGPU$;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_WebGPU$() {
}
$h_Ltrivalibs_graphics_painter_WebGPU$.prototype = $p;
$p.k6 = (function() {
  return window.navigator.gpu;
});
$p.k5 = (function(canvas) {
  return canvas.getContext("webgpu");
});
var $d_Ltrivalibs_graphics_painter_WebGPU$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_WebGPU$, "trivalibs.graphics.painter.WebGPU$", ({
  ee: 1
}));
var $n_Ltrivalibs_graphics_painter_WebGPU$;
function $m_Ltrivalibs_graphics_painter_WebGPU$() {
  if ((!$n_Ltrivalibs_graphics_painter_WebGPU$)) {
    $n_Ltrivalibs_graphics_painter_WebGPU$ = new $c_Ltrivalibs_graphics_painter_WebGPU$();
  }
  return $n_Ltrivalibs_graphics_painter_WebGPU$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_scene_PerspectiveCamera(fov, aspect, near, far, rotH, rotV, pos, proj) {
  this.fX = 0.0;
  this.gK = 0.0;
  this.fY = 0.0;
  this.fW = 0.0;
  this.eF = 0.0;
  this.eG = 0.0;
  this.fZ = null;
  this.gL = null;
  this.fX = fov;
  this.gK = aspect;
  this.fY = near;
  this.fW = far;
  this.eF = rotH;
  this.eG = rotV;
  this.fZ = pos;
  this.gL = proj;
}
$p = $c_Ltrivalibs_graphics_scene_PerspectiveCamera.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_PerspectiveCamera;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_PerspectiveCamera() {
}
$h_Ltrivalibs_graphics_scene_PerspectiveCamera.prototype = $p;
$p.la = (function(fov, aspect, near, far, rotH, rotV, pos) {
  var needsProj = ((((fov !== this.fX) || (aspect !== this.gK)) || (near !== this.fY)) || (far !== this.fW));
  this.fX = fov;
  this.gK = aspect;
  this.fY = near;
  this.fW = far;
  if ((rotH !== this.eF)) {
    this.eF = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().j6(rotH);
  }
  if ((rotV !== this.eG)) {
    this.eG = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().j5(rotV);
  }
  this.fZ = pos;
  if (needsProj) {
    this.gL = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($m_Ltrivalibs_graphics_math_cpu_Mat4$(), fov, aspect, near, far);
  }
});
$p.lr = (function() {
  return new $c_Ltrivalibs_graphics_scene_Transform(this.fZ, $f_Ltrivalibs_graphics_math_cpu_QuatImmutableOps__quatMul__O__Ltrivalibs_graphics_math_Vec4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$(), $m_Ltrivalibs_graphics_math_cpu_Quat$().iA(this.eF), $m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$(), $m_Ltrivalibs_graphics_math_cpu_Quat$().iz(this.eG)), new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0));
});
$p.lu = (function() {
  var $x_1 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().h1();
  var t = this.lr();
  return $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($x_1, $m_Ltrivalibs_graphics_math_cpu_Mat4$().iB(t.ih, t.ie, t.ig), $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
});
var $d_Ltrivalibs_graphics_scene_PerspectiveCamera = new $TypeData().i($c_Ltrivalibs_graphics_scene_PerspectiveCamera, "trivalibs.graphics.scene.PerspectiveCamera", ({
  ef: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_scene_PerspectiveCamera$() {
}
$p = $c_Ltrivalibs_graphics_scene_PerspectiveCamera$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_PerspectiveCamera$;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_PerspectiveCamera$() {
}
$h_Ltrivalibs_graphics_scene_PerspectiveCamera$.prototype = $p;
$p.j6 = (function(a) {
  var r = (a % 6.283185307179586);
  return ((r < 0.0) ? (r + 6.283185307179586) : r);
});
$p.j5 = (function(a) {
  return ((a < (-1.5707963267948966)) ? (-1.5707963267948966) : ((a > 1.5707963267948966) ? 1.5707963267948966 : a));
});
$p.jA = (function(fov, aspect, near, far, rotH, rotV, pos) {
  var proj = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($m_Ltrivalibs_graphics_math_cpu_Mat4$(), fov, aspect, near, far);
  return new $c_Ltrivalibs_graphics_scene_PerspectiveCamera(fov, aspect, near, far, this.j6(rotH), this.j5(rotV), pos, proj);
});
var $d_Ltrivalibs_graphics_scene_PerspectiveCamera$ = new $TypeData().i($c_Ltrivalibs_graphics_scene_PerspectiveCamera$, "trivalibs.graphics.scene.PerspectiveCamera$", ({
  eg: 1
}));
var $n_Ltrivalibs_graphics_scene_PerspectiveCamera$;
function $m_Ltrivalibs_graphics_scene_PerspectiveCamera$() {
  if ((!$n_Ltrivalibs_graphics_scene_PerspectiveCamera$)) {
    $n_Ltrivalibs_graphics_scene_PerspectiveCamera$ = new $c_Ltrivalibs_graphics_scene_PerspectiveCamera$();
  }
  return $n_Ltrivalibs_graphics_scene_PerspectiveCamera$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_scene_Transform(translation, rotation, scale) {
  this.ih = null;
  this.ie = null;
  this.ig = null;
  this.ih = translation;
  this.ie = rotation;
  this.ig = scale;
}
$p = $c_Ltrivalibs_graphics_scene_Transform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_Transform;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_Transform() {
}
$h_Ltrivalibs_graphics_scene_Transform.prototype = $p;
var $d_Ltrivalibs_graphics_scene_Transform = new $TypeData().i($c_Ltrivalibs_graphics_scene_Transform, "trivalibs.graphics.scene.Transform", ({
  eh: 1
}));
function $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($thiz, builtins) {
  var s = "";
  var i = 0;
  while ((i < (builtins.length | 0))) {
    var b = builtins[i];
    s = ((s + ((((", @builtin(" + b.a2) + ") ") + b.ag) + ": ")) + b.a3);
    i = ((1 + i) | 0);
  }
  return s;
}
function $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($thiz, structName, locNames, locTypes, builtins) {
  var array$1 = $m_sjs_js_ArrayOps$().ja($m_sjs_js_ArrayOps$().j9(locNames, new $c_sjs_js_WrappedArray(locTypes)));
  var len = (array$1.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    var $x_2 = i;
    var x0 = array$1[i];
    matchResult3: {
      var $x_1;
      if ((x0 !== null)) {
        var x11 = x0.V;
        if ((x11 !== null)) {
          var name = x11.V;
          var typ = x11.W;
          var $x_1 = (((((("  @location(" + (x0.W | 0)) + ") ") + name) + ": ") + typ) + ",");
          break matchResult3;
        }
      }
      throw new $c_s_MatchError(x0);
    }
    res[$x_2] = $x_1;
    i = ((1 + i) | 0);
  }
  var len$1 = (builtins.length | 0);
  var res$1 = new Array(len$1);
  var i$1 = 0;
  while ((i$1 < len$1)) {
    var $x_4 = i$1;
    var x0$1 = builtins[i$1];
    matchResult4: {
      var $x_3;
      if ((x0$1 !== null)) {
        var name$1 = x0$1.ag;
        var builtin = x0$1.a2;
        var typ$1 = x0$1.a3;
        var $x_3 = (((((("  @builtin(" + builtin) + ") ") + name$1) + ": ") + typ$1) + ",");
        break matchResult4;
      }
      throw new $c_s_MatchError(x0$1);
    }
    res$1[$x_4] = $x_3;
    i$1 = ((1 + i$1) | 0);
  }
  var allFields = $m_sjs_js_ArrayOpsCommon$().b(res, res$1);
  return (((allFields.length | 0) === 0) ? "" : (((("struct " + structName) + " {\n") + allFields.join("\n")) + "\n}"));
}
function $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($thiz, groupIdx, names, types) {
  var array$1 = $m_sjs_js_ArrayOps$().ja($m_sjs_js_ArrayOps$().j9(names, new $c_sjs_js_WrappedArray(types)));
  var len = (array$1.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    var $x_3 = i;
    var x0 = array$1[i];
    matchResult5: {
      var $x_2;
      if ((x0 !== null)) {
        var x20 = x0.V;
        if ((x20 !== null)) {
          var name = x20.V;
          var typ = x20.W;
          var bindingIdx = (x0.W | 0);
          var $x_2 = ((typ === "sampler") ? (((((("@group(" + groupIdx) + ") @binding(") + bindingIdx) + ") var ") + name) + ": sampler;") : (((((((("@group(" + groupIdx) + ") @binding(") + bindingIdx) + ") var<uniform> ") + name) + ": ") + typ) + ";"));
          break matchResult5;
        }
      }
      throw new $c_s_MatchError(x0);
    }
    res[$x_3] = $x_2;
    i = ((1 + i) | 0);
  }
  var $x_1 = res.join("\n");
  return $x_1;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_derive$() {
}
$p = $c_Ltrivalibs_graphics_shader_derive$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_derive$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_derive$() {
}
$h_Ltrivalibs_graphics_shader_derive$.prototype = $p;
var $d_Ltrivalibs_graphics_shader_derive$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_derive$, "trivalibs.graphics.shader.derive$", ({
  el: 1
}));
var $n_Ltrivalibs_graphics_shader_derive$;
function $m_Ltrivalibs_graphics_shader_derive$() {
  if ((!$n_Ltrivalibs_graphics_shader_derive$)) {
    $n_Ltrivalibs_graphics_shader_derive$ = new $c_Ltrivalibs_graphics_shader_derive$();
  }
  return $n_Ltrivalibs_graphics_shader_derive$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(target) {
  this.X = null;
  this.X = target;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_AssignTarget.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_AssignTarget;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_AssignTarget() {
}
$h_Ltrivalibs_graphics_shader_dsl_AssignTarget.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_AssignTarget = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_AssignTarget, "trivalibs.graphics.shader.dsl.AssignTarget", ({
  em: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_FnRegistry() {
  this.gO = null;
  this.ax = null;
  this.gO = ({});
  this.ax = [];
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FnRegistry() {
}
$h_Ltrivalibs_graphics_shader_dsl_FnRegistry.prototype = $p;
$p.j7 = (function(d) {
  if ((!(!(!(!(!this.gO.hasOwnProperty(d.name))))))) {
    this.gO[d.name] = true;
    var array = d.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      this.j7(array[i]);
      i = ((1 + i) | 0);
    }
    this.ax.push(d);
  }
});
var $d_Ltrivalibs_graphics_shader_dsl_FnRegistry = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FnRegistry, "trivalibs.graphics.shader.dsl.FnRegistry", ({
  en: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$() {
  this.y = null;
  this.y = null;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FnRegistry$() {
}
$h_Ltrivalibs_graphics_shader_dsl_FnRegistry$.prototype = $p;
$p.lq = (function(d) {
  var r = this.y;
  if ((r !== null)) {
    r.j7(d);
  }
});
var $d_Ltrivalibs_graphics_shader_dsl_FnRegistry$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FnRegistry$, "trivalibs.graphics.shader.dsl.FnRegistry$", ({
  eo: 1
}));
var $n_Ltrivalibs_graphics_shader_dsl_FnRegistry$;
function $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$() {
  if ((!$n_Ltrivalibs_graphics_shader_dsl_FnRegistry$)) {
    $n_Ltrivalibs_graphics_shader_dsl_FnRegistry$ = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$();
  }
  return $n_Ltrivalibs_graphics_shader_dsl_FnRegistry$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(in$1, out, bindings, locals, textures) {
  this.eH = null;
  this.gP = null;
  this.ii = null;
  this.jm = null;
  this.eH = in$1;
  this.gP = out;
  this.ii = bindings;
  this.jm = textures;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FragmentCtx() {
}
$h_Ltrivalibs_graphics_shader_dsl_FragmentCtx.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_FragmentCtx = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FragmentCtx, "trivalibs.graphics.shader.dsl.FragmentCtx", ({
  ep: 1
}));
function $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, data) {
  if ((!(!(!(!(!$thiz.gQ.hasOwnProperty(data.name))))))) {
    var dict = $thiz.gQ;
    var key = data.name;
    dict[key] = true;
    var array = data.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, array[i]);
      i = ((1 + i) | 0);
    }
    $thiz.gR.push(data.src);
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_Program() {
  this.eJ = null;
  this.eI = null;
  this.gR = null;
  this.gQ = null;
  this.eJ = "";
  this.eI = "";
  this.gR = [];
  this.gQ = ({});
}
$p = $c_Ltrivalibs_graphics_shader_dsl_Program.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_Program;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_Program() {
}
$h_Ltrivalibs_graphics_shader_dsl_Program.prototype = $p;
$p.iD = (function() {
  return this.gR.join("\n\n");
});
var $d_Ltrivalibs_graphics_shader_dsl_Program = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_Program, "trivalibs.graphics.shader.dsl.Program", ({
  eq: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(in$1, out, bindings, locals, textures) {
  this.ay = null;
  this.ab = null;
  this.g3 = null;
  this.ay = in$1;
  this.ab = out;
  this.g3 = bindings;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_VertexCtx.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_VertexCtx;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_VertexCtx() {
}
$h_Ltrivalibs_graphics_shader_dsl_VertexCtx.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_VertexCtx = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_VertexCtx, "trivalibs.graphics.shader.dsl.VertexCtx", ({
  ev: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_WgslFnData$() {
}
$p = $c_Ltrivalibs_graphics_shader_dsl_WgslFnData$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_WgslFnData$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_WgslFnData$() {
}
$h_Ltrivalibs_graphics_shader_dsl_WgslFnData$.prototype = $p;
$p.jq = (function() {
  return [];
});
var $d_Ltrivalibs_graphics_shader_dsl_WgslFnData$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_WgslFnData$, "trivalibs.graphics.shader.dsl.WgslFnData$", ({
  ey: 1
}));
var $n_Ltrivalibs_graphics_shader_dsl_WgslFnData$;
function $m_Ltrivalibs_graphics_shader_dsl_WgslFnData$() {
  if ((!$n_Ltrivalibs_graphics_shader_dsl_WgslFnData$)) {
    $n_Ltrivalibs_graphics_shader_dsl_WgslFnData$ = new $c_Ltrivalibs_graphics_shader_dsl_WgslFnData$();
  }
  return $n_Ltrivalibs_graphics_shader_dsl_WgslFnData$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$() {
}
$p = $c_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$() {
}
$h_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$.prototype = $p;
$p.kU = (function(fn) {
  return fn.name;
});
$p.P = (function(fn, ds) {
  var seen = ({});
  var merged = [];
  var i = 0;
  while ((i < (fn.deps.length | 0))) {
    var d = fn.deps[i];
    if ((!(!(!(!(!seen.hasOwnProperty(d.name))))))) {
      seen[d.name] = true;
      merged.push(d);
    }
    i = ((1 + i) | 0);
  }
  ds.ga(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((d$3) => {
    if ((!(!(!(!(!seen.hasOwnProperty(d$3.name))))))) {
      seen[d$3.name] = true;
      merged.push(d$3);
    }
  })));
  return new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())(fn.name, fn.src, merged);
});
var $d_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$, "trivalibs.graphics.shader.dsl.fn$package$WgslFn$", ({
  ez: 1
}));
var $n_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$;
function $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$() {
  if ((!$n_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$)) {
    $n_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$ = new $c_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  }
  return $n_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$;
}
function $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($thiz, sizes) {
  var offsets = [];
  var elem = 0;
  elem = 0;
  var len = (sizes.length | 0);
  var i = 0;
  while ((i < len)) {
    var x0 = sizes[i];
    var size = (x0 | 0);
    offsets.push(elem);
    elem = ((elem + size) | 0);
    i = ((1 + i) | 0);
  }
  return offsets;
}
function $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($thiz, sizes) {
  var elem = 0;
  elem = 0;
  var len = (sizes.length | 0);
  var i = 0;
  while ((i < len)) {
    var x0 = sizes[i];
    var size = (x0 | 0);
    elem = ((elem + size) | 0);
    i = ((1 + i) | 0);
  }
  return elem;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_layouts$() {
}
$p = $c_Ltrivalibs_graphics_shader_layouts$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_layouts$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_layouts$() {
}
$h_Ltrivalibs_graphics_shader_layouts$.prototype = $p;
$p.g9 = (function(device, bindGroupLayouts) {
  return device.createPipelineLayout(({
    "bindGroupLayouts": bindGroupLayouts
  }));
});
var $d_Ltrivalibs_graphics_shader_layouts$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_layouts$, "trivalibs.graphics.shader.layouts$", ({
  eA: 1
}));
var $n_Ltrivalibs_graphics_shader_layouts$;
function $m_Ltrivalibs_graphics_shader_layouts$() {
  if ((!$n_Ltrivalibs_graphics_shader_layouts$)) {
    $n_Ltrivalibs_graphics_shader_layouts$ = new $c_Ltrivalibs_graphics_shader_layouts$();
  }
  return $n_Ltrivalibs_graphics_shader_layouts$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_lib_random_Simplex$() {
  this.g4 = null;
  this.g5 = null;
  this.g6 = null;
  this.ik = null;
  this.il = null;
  this.gV = null;
  this.im = null;
  this.io = null;
  $n_Ltrivalibs_graphics_shader_lib_random_Simplex$ = this;
  var names = $m_sjs_js_ArrayOpsCommon$().b(["x"], []);
  var types = $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], []);
  var parts = [];
  var i = 0;
  while ((i < (names.length | 0))) {
    parts.push(((names[i] + ": ") + types[i]));
    i = ((1 + i) | 0);
  }
  var paramList = parts.join(", ");
  var src = (("fn permute_3_(" + paramList) + ") -> vec3<f32> {\n  return (((x * 34.) + 1.) * x) % vec3(289.);\n}");
  this.g4 = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("permute_3_", src);
  var names$2 = $m_sjs_js_ArrayOpsCommon$().b(["x"], []);
  var types$2 = $m_sjs_js_ArrayOpsCommon$().b(["vec4<f32>"], []);
  var parts$2 = [];
  var i$2 = 0;
  while ((i$2 < (names$2.length | 0))) {
    parts$2.push(((names$2[i$2] + ": ") + types$2[i$2]));
    i$2 = ((1 + i$2) | 0);
  }
  var paramList$2 = parts$2.join(", ");
  var src$2 = (("fn permute_4_(" + paramList$2) + ") -> vec4<f32> {\n  return ((x * 34. + 1.) * x) % vec4<f32>(289.);\n}");
  this.g5 = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("permute_4_", src$2);
  var names$3 = $m_sjs_js_ArrayOpsCommon$().b(["r"], []);
  var types$3 = $m_sjs_js_ArrayOpsCommon$().b(["vec4<f32>"], []);
  var parts$3 = [];
  var i$3 = 0;
  while ((i$3 < (names$3.length | 0))) {
    parts$3.push(((names$3[i$3] + ": ") + types$3[i$3]));
    i$3 = ((1 + i$3) | 0);
  }
  var paramList$3 = parts$3.join(", ");
  var src$3 = (("fn taylor_inv_sqrt_4_(" + paramList$3) + ") -> vec4<f32> {\n  return 1.79284291400159 - 0.85373472095314 * r;\n}");
  this.g6 = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("taylor_inv_sqrt_4_", src$3);
  var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$4 = $m_sjs_js_ArrayOpsCommon$().b(["v"], []);
  var types$4 = $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], []);
  var parts$4 = [];
  var i$4 = 0;
  while ((i$4 < (names$4.length | 0))) {
    parts$4.push(((names$4[i$4] + ": ") + types$4[i$4]));
    i$4 = ((1 + i$4) | 0);
  }
  var paramList$4 = parts$4.join(", ");
  var src$4 = (("fn simplex_noise_2d(" + paramList$4) + ") -> f32 {\n\n    let C = vec4(\n        0.211324865405187,\n        0.366025403784439,\n        -0.577350269189626,\n        0.024390243902439\n    );\n    // first corner\n    var i = floor(v + dot(v, C.yy));\n    let x0 = v - i + dot(i, C.xx);\n    // other corners\n    var i1 = select(vec2(0., 1.), vec2(1., 0.), x0.x > x0.y);\n    var x12 = x0.xyxy + C.xxzz - vec4(i1, 0., 0.);\n    // permutations\n    i = i % vec2(289.);\n    let p = permute_3_(permute_3_(i.y + vec3(0., i1.y, 1.)) + i.x + vec3(0., i1.x, 1.));\n    var m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), vec3(0.));\n    m *= m;\n    m *= m;\n    // gradients: 41 points uniformly over a line, mapped onto a diamond\n    let x = 2. * fract(p * C.www) - 1.;\n    let h = abs(x) - 0.5;\n    let ox = floor(x + 0.5);\n    let a0 = x - ox;\n    m = m * (1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h));\n    let g = vec3(a0.x * x0.x + h.x * x0.y, a0.yz * x12.xz + h.yz * x12.yw);\n    return 130. * dot(m, g);\n}");
  this.ik = $x_1.P(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_noise_2d", src$4), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().O(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.g4]))));
  var $x_2 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$5 = $m_sjs_js_ArrayOpsCommon$().b(["v"], $m_sjs_js_ArrayOpsCommon$().b(["seed"], []));
  var types$5 = $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["f32"], []));
  var parts$5 = [];
  var i$5 = 0;
  while ((i$5 < (names$5.length | 0))) {
    parts$5.push(((names$5[i$5] + ": ") + types$5[i$5]));
    i$5 = ((1 + i$5) | 0);
  }
  var paramList$5 = parts$5.join(", ");
  var src$5 = (("fn simplex_noise_2d_seeded(" + paramList$5) + ") -> f32 {\n\n    let C = vec4(\n        0.211324865405187,\n        0.366025403784439,\n        -0.577350269189626,\n        0.024390243902439\n    );\n    // first corner\n    var i = floor(v + dot(v, C.yy));\n    let x0 = v - i + dot(i, C.xx);\n    // other corners\n    var i1 = select(vec2(0., 1.), vec2(1., 0.), x0.x > x0.y);\n    var x12 = x0.xyxy + C.xxzz - vec4(i1, 0., 0.);\n    // permutations\n    i = i % vec2(289.);\n    var p = permute_3_(permute_3_(i.y + vec3(0., i1.y, 1.)) + i.x + vec3(0., i1.x, 1.));\n    p = permute_3_(p + vec3(seed));\n    var m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), vec3(0.));\n    m *= m;\n    m *= m;\n    let x = 2. * fract(p * C.www) - 1.;\n    let h = abs(x) - 0.5;\n    let ox = floor(x + 0.5);\n    let a0 = x - ox;\n    m = m * (1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h));\n    let g = vec3(a0.x * x0.x + h.x * x0.y, a0.yz * x12.xz + h.yz * x12.yw);\n    return 130. * dot(m, g);\n}");
  this.il = $x_2.P(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_noise_2d_seeded", src$5), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().O(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.g4]))));
  var $x_3 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$6 = $m_sjs_js_ArrayOpsCommon$().b(["v"], []);
  var types$6 = $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], []);
  var parts$6 = [];
  var i$6 = 0;
  while ((i$6 < (names$6.length | 0))) {
    parts$6.push(((names$6[i$6] + ": ") + types$6[i$6]));
    i$6 = ((1 + i$6) | 0);
  }
  var paramList$6 = parts$6.join(", ");
  var src$6 = (("fn simplex_noise_3d(" + paramList$6) + ") -> f32 {\n\n    let C = vec2(1. / 6., 1. / 3.);\n    let D = vec4(0., 0.5, 1., 2.);\n    // first corner\n    var i = floor(v + dot(v, C.yyy));\n    let x0 = v - i + dot(i, C.xxx);\n    // other corners\n    let g = step(x0.yzx, x0.xyz);\n    let l = 1. - g;\n    let i1 = min(g.xyz, l.zxy);\n    let i2 = max(g.xyz, l.zxy);\n    let x1 = x0 - i1 + 1. * C.xxx;\n    let x2 = x0 - i2 + 2. * C.xxx;\n    let x3 = x0 - 1. + 3. * C.xxx;\n    // permutations\n    i = i % vec3(289.);\n    let p = permute_4_(permute_4_(permute_4_(\n        i.z + vec4(0., i1.z, i2.z, 1.)) +\n        i.y + vec4(0., i1.y, i2.y, 1.)) +\n        i.x + vec4(0., i1.x, i2.x, 1.)\n    );\n    // gradients (NxN points uniformly over a square, mapped onto an octahedron)\n    let n_ = 1. / 7.;\n    let ns = n_ * D.wyz - D.xzx;\n    let j = p - 49. * floor(p * ns.z * ns.z);\n    let x_ = floor(j * ns.z);\n    let y_ = floor(j - 7. * x_);\n    let x = x_ * ns.x + ns.yyyy;\n    let y = y_ * ns.x + ns.yyyy;\n    let h = 1. - abs(x) - abs(y);\n    let b0 = vec4(x.xy, y.xy);\n    let b1 = vec4(x.zw, y.zw);\n    let s0 = floor(b0) * 2. + 1.;\n    let s1 = floor(b1) * 2. + 1.;\n    let sh = -step(h, vec4(0.));\n    let a0 = b0.xzyw + s0.xzyw * sh.xxyy;\n    let a1 = b1.xzyw + s1.xzyw * sh.zzww;\n    var p0 = vec3(a0.xy, h.x);\n    var p1 = vec3(a0.zw, h.y);\n    var p2 = vec3(a1.xy, h.z);\n    var p3 = vec3(a1.zw, h.w);\n    // normalize gradients\n    let norm = taylor_inv_sqrt_4_(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));\n    p0 = p0 * norm.x;\n    p1 = p1 * norm.y;\n    p2 = p2 * norm.z;\n    p3 = p3 * norm.w;\n    // mix final noise value\n    var m = 0.5 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3));\n    m = max(m, vec4(0.));\n    m *= m;\n    return 105. * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));\n}");
  this.gV = $x_3.P(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_noise_3d", src$6), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().O(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.g5, this.g6]))));
  var $x_4 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$7 = $m_sjs_js_ArrayOpsCommon$().b(["v"], $m_sjs_js_ArrayOpsCommon$().b(["seed"], []));
  var types$7 = $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], []));
  var parts$7 = [];
  var i$7 = 0;
  while ((i$7 < (names$7.length | 0))) {
    parts$7.push(((names$7[i$7] + ": ") + types$7[i$7]));
    i$7 = ((1 + i$7) | 0);
  }
  var paramList$7 = parts$7.join(", ");
  var src$7 = (("fn simplex_noise_3d_seeded(" + paramList$7) + ") -> f32 {\n\n    let C = vec2(1. / 6., 1. / 3.);\n    let D = vec4(0., 0.5, 1., 2.);\n    // first corner\n    var i = floor(v + dot(v, C.yyy));\n    let x0 = v - i + dot(i, C.xxx);\n    // other corners\n    let g = step(x0.yzx, x0.xyz);\n    let l = 1. - g;\n    let i1 = min(g.xyz, l.zxy);\n    let i2 = max(g.xyz, l.zxy);\n    let x1 = x0 - i1 + 1. * C.xxx;\n    let x2 = x0 - i2 + 2. * C.xxx;\n    let x3 = x0 - 1. + 3. * C.xxx;\n    // permutations\n    i = i % vec3(289.);\n    let s = floor(seed + vec3(0.5));\n    let p = permute_4_(permute_4_(permute_4_(\n        i.z + vec4(0., i1.z, i2.z, 1.) + s.z) +\n        i.y + vec4(0., i1.y, i2.y, 1.) + s.y) +\n        i.x + vec4(0., i1.x, i2.x, 1.) + s.x\n    );\n    // gradients (NxN points uniformly over a square, mapped onto an octahedron)\n    let n_ = 1. / 7.;\n    let ns = n_ * D.wyz - D.xzx;\n    let j = p - 49. * floor(p * ns.z * ns.z);\n    let x_ = floor(j * ns.z);\n    let y_ = floor(j - 7. * x_);\n    let x = x_ * ns.x + ns.yyyy;\n    let y = y_ * ns.x + ns.yyyy;\n    let h = 1. - abs(x) - abs(y);\n    let b0 = vec4(x.xy, y.xy);\n    let b1 = vec4(x.zw, y.zw);\n    let s0 = floor(b0) * 2. + 1.;\n    let s1 = floor(b1) * 2. + 1.;\n    let sh = -step(h, vec4(0.));\n    let a0 = b0.xzyw + s0.xzyw * sh.xxyy;\n    let a1 = b1.xzyw + s1.xzyw * sh.zzww;\n    var p0 = vec3(a0.xy, h.x);\n    var p1 = vec3(a0.zw, h.y);\n    var p2 = vec3(a1.xy, h.z);\n    var p3 = vec3(a1.zw, h.w);\n    // normalize gradients\n    let norm = taylor_inv_sqrt_4_(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));\n    p0 = p0 * norm.x;\n    p1 = p1 * norm.y;\n    p2 = p2 * norm.z;\n    p3 = p3 * norm.w;\n    // mix final noise value\n    var m = 0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3));\n    m = max(m, vec4(0.));\n    m *= m;\n    return 42. * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));\n}");
  this.im = $x_4.P(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_noise_3d_seeded", src$7), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().O(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.g5, this.g6]))));
  var $x_5 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$8 = $m_sjs_js_ArrayOpsCommon$().b(["pos"], $m_sjs_js_ArrayOpsCommon$().b(["octaves"], $m_sjs_js_ArrayOpsCommon$().b(["lacunarity"], $m_sjs_js_ArrayOpsCommon$().b(["gain"], []))));
  var types$8 = $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["i32"], $m_sjs_js_ArrayOpsCommon$().b(["f32"], $m_sjs_js_ArrayOpsCommon$().b(["f32"], []))));
  var parts$8 = [];
  var i$8 = 0;
  while ((i$8 < (names$8.length | 0))) {
    parts$8.push(((names$8[i$8] + ": ") + types$8[i$8]));
    i$8 = ((1 + i$8) | 0);
  }
  var paramList$8 = parts$8.join(", ");
  var src$8 = (("fn fbm_simplex_2d(" + paramList$8) + ") -> f32 {\n\n    var sum = 0.;\n    var amplitude = 1.;\n    var frequency = 1.;\n    for (var i = 0; i < octaves; i += 1) {\n        sum += simplex_noise_2d(pos * frequency) * amplitude;\n        amplitude *= gain;\n        frequency *= lacunarity;\n    }\n    return sum;\n}");
  $x_5.P(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("fbm_simplex_2d", src$8), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().O(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.ik]))));
  var $x_6 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$9 = $m_sjs_js_ArrayOpsCommon$().b(["pos"], $m_sjs_js_ArrayOpsCommon$().b(["octaves"], $m_sjs_js_ArrayOpsCommon$().b(["lacunarity"], $m_sjs_js_ArrayOpsCommon$().b(["gain"], $m_sjs_js_ArrayOpsCommon$().b(["seed"], [])))));
  var types$9 = $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["i32"], $m_sjs_js_ArrayOpsCommon$().b(["f32"], $m_sjs_js_ArrayOpsCommon$().b(["f32"], $m_sjs_js_ArrayOpsCommon$().b(["f32"], [])))));
  var parts$9 = [];
  var i$9 = 0;
  while ((i$9 < (names$9.length | 0))) {
    parts$9.push(((names$9[i$9] + ": ") + types$9[i$9]));
    i$9 = ((1 + i$9) | 0);
  }
  var paramList$9 = parts$9.join(", ");
  var src$9 = (("fn fbm_simplex_2d_seeded(" + paramList$9) + ") -> f32 {\n\n    var sum = 0.;\n    var amplitude = 1.;\n    var frequency = 1.;\n    for (var i = 0; i < octaves; i += 1) {\n        sum += simplex_noise_2d_seeded(pos * frequency, seed) * amplitude;\n        amplitude *= gain;\n        frequency *= lacunarity;\n    }\n    return sum;\n}");
  $x_6.P(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("fbm_simplex_2d_seeded", src$9), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().O(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.il]))));
  var $x_7 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$10 = $m_sjs_js_ArrayOpsCommon$().b(["pos"], $m_sjs_js_ArrayOpsCommon$().b(["octaves"], $m_sjs_js_ArrayOpsCommon$().b(["lacunarity"], $m_sjs_js_ArrayOpsCommon$().b(["gain"], []))));
  var types$10 = $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["i32"], $m_sjs_js_ArrayOpsCommon$().b(["f32"], $m_sjs_js_ArrayOpsCommon$().b(["f32"], []))));
  var parts$10 = [];
  var i$10 = 0;
  while ((i$10 < (names$10.length | 0))) {
    parts$10.push(((names$10[i$10] + ": ") + types$10[i$10]));
    i$10 = ((1 + i$10) | 0);
  }
  var paramList$10 = parts$10.join(", ");
  var src$10 = (("fn fbm_simplex_3d(" + paramList$10) + ") -> f32 {\n\n    var sum = 0.;\n    var amplitude = 1.;\n    var frequency = 1.;\n    for (var i = 0; i < octaves; i += 1) {\n        sum += simplex_noise_3d(pos * frequency) * amplitude;\n        amplitude *= gain;\n        frequency *= lacunarity;\n    }\n    return sum;\n}");
  $x_7.P(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("fbm_simplex_3d", src$10), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().O(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.gV]))));
  var $x_8 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$11 = $m_sjs_js_ArrayOpsCommon$().b(["pos"], $m_sjs_js_ArrayOpsCommon$().b(["octaves"], $m_sjs_js_ArrayOpsCommon$().b(["lacunarity"], $m_sjs_js_ArrayOpsCommon$().b(["gain"], $m_sjs_js_ArrayOpsCommon$().b(["seed"], [])))));
  var types$11 = $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["i32"], $m_sjs_js_ArrayOpsCommon$().b(["f32"], $m_sjs_js_ArrayOpsCommon$().b(["f32"], $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], [])))));
  var parts$11 = [];
  var i$11 = 0;
  while ((i$11 < (names$11.length | 0))) {
    parts$11.push(((names$11[i$11] + ": ") + types$11[i$11]));
    i$11 = ((1 + i$11) | 0);
  }
  var paramList$11 = parts$11.join(", ");
  var src$11 = (("fn fbm_simplex_3d_seeded(" + paramList$11) + ") -> f32 {\n\n    var sum = 0.;\n    var amplitude = 1.;\n    var frequency = 1.;\n    for (var i = 0; i < octaves; i += 1) {\n        sum += simplex_noise_3d_seeded(pos * frequency, seed) * amplitude;\n        amplitude *= gain;\n        frequency *= lacunarity;\n    }\n    return sum;\n}");
  $x_8.P(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("fbm_simplex_3d_seeded", src$11), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().O(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.im]))));
  var $x_9 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$12 = $m_sjs_js_ArrayOpsCommon$().b(["pos"], $m_sjs_js_ArrayOpsCommon$().b(["jitter"], []));
  var types$12 = $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["f32"], []));
  var parts$12 = [];
  var i$12 = 0;
  while ((i$12 < (names$12.length | 0))) {
    parts$12.push(((names$12[i$12] + ": ") + types$12[i$12]));
    i$12 = ((1 + i$12) | 0);
  }
  var paramList$12 = parts$12.join(", ");
  var src$12 = (("fn worley_2d(" + paramList$12) + ") -> vec2<f32> {\n\n    let k = 0.142857142857;\n    let ko = 0.428571428571;\n    let pi = floor(pos);\n    let pf = fract(pos);\n    let oi = vec3(-1.0, 0.0, 1.0);\n    let of_ = vec3(-0.5, 0.5, 1.5);\n    let px = permute_3_(pi.x + oi);\n    var p = permute_3_(px.x + pi.y + oi);\n    var ox = fract(p * k) - ko;\n    var oy = (floor(p * k) % 7.0) * k - ko;\n    var dx = pf.x + 0.5 + jitter * ox;\n    var dy = pf.y - of_ + jitter * oy;\n    var d1 = dx * dx + dy * dy;\n    p = permute_3_(px.y + pi.y + oi);\n    ox = fract(p * k) - ko;\n    oy = (floor(p * k) % 7.0) * k - ko;\n    dx = pf.x - 0.5 + jitter * ox;\n    dy = pf.y - of_ + jitter * oy;\n    var d2 = dx * dx + dy * dy;\n    p = permute_3_(px.z + pi.y + oi);\n    ox = fract(p * k) - ko;\n    oy = (floor(p * k) % 7.0) * k - ko;\n    dx = pf.x - 1.5 + jitter * ox;\n    dy = pf.y - of_ + jitter * oy;\n    let d3 = dx * dx + dy * dy;\n    let d1a = min(d1, d2);\n    d2 = max(d1, d2);\n    d2 = min(d2, d3);\n    d1 = min(d1a, d2);\n    d2 = max(d1a, d2);\n    if d1.x > d1.y {\n        let tmp = d1.x;\n        d1.x = d1.y;\n        d1.y = tmp;\n    }\n    if d1.x > d1.z {\n        let tmp = d1.x;\n        d1.x = d1.z;\n        d1.z = tmp;\n    }\n    d1.y = min(d1.y, d2.y);\n    d1.z = min(d1.z, d2.z);\n    d1.y = min(d1.y, d1.z);\n    d1.y = min(d1.y, d2.x);\n    return sqrt(d1.xy);\n}");
  $x_9.P(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("worley_2d", src$12), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().O(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.g4]))));
  var names$13 = $m_sjs_js_ArrayOpsCommon$().b(["x"], []);
  var types$13 = $m_sjs_js_ArrayOpsCommon$().b(["f32"], []);
  var parts$13 = [];
  var i$13 = 0;
  while ((i$13 < (names$13.length | 0))) {
    parts$13.push(((names$13[i$13] + ": ") + types$13[i$13]));
    i$13 = ((1 + i$13) | 0);
  }
  var paramList$13 = parts$13.join(", ");
  var src$13 = (("fn permute_1_(" + paramList$13) + ") -> f32 {\n  return ((x * 34.0) + 1.0) * x % 289.0;\n}");
  var permute1 = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("permute_1_", src$13);
  var names$14 = $m_sjs_js_ArrayOpsCommon$().b(["r"], []);
  var types$14 = $m_sjs_js_ArrayOpsCommon$().b(["f32"], []);
  var parts$14 = [];
  var i$14 = 0;
  while ((i$14 < (names$14.length | 0))) {
    parts$14.push(((names$14[i$14] + ": ") + types$14[i$14]));
    i$14 = ((1 + i$14) | 0);
  }
  var paramList$14 = parts$14.join(", ");
  var src$14 = (("fn taylor_inv_sqrt_1_(" + paramList$14) + ") -> f32 {\n  return 1.79284291400159 - 0.85373472095314 * r;\n}");
  var taylorInvSqrt1 = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("taylor_inv_sqrt_1_", src$14);
  var names$15 = $m_sjs_js_ArrayOpsCommon$().b(["j"], $m_sjs_js_ArrayOpsCommon$().b(["ip"], []));
  var types$15 = $m_sjs_js_ArrayOpsCommon$().b(["f32"], $m_sjs_js_ArrayOpsCommon$().b(["vec4<f32>"], []));
  var parts$15 = [];
  var i$15 = 0;
  while ((i$15 < (names$15.length | 0))) {
    parts$15.push(((names$15[i$15] + ": ") + types$15[i$15]));
    i$15 = ((1 + i$15) | 0);
  }
  var paramList$15 = parts$15.join(", ");
  var src$15 = (("fn grad_4_(" + paramList$15) + ") -> vec4<f32> {\n\n    let gj = floor(fract(j * ip.xyz) * 7.0) * ip.z - 1.0;\n    var p = vec4<f32>(gj.x, gj.y, gj.z, 1.5 - dot(abs(gj), vec3<f32>(1.0, 1.0, 1.0)));\n    // s = (p < 0) ? 1 : 0  \u2014 canonical Stegu lessThan(p, 0)\n    let s = vec4<f32>(1.0) - step(vec4<f32>(0.0, 0.0, 0.0, 0.0), p);\n    let dp = (s.xyz * 2.0 - 1.0) * s.www;\n    p.x = p.x + dp.x;\n    p.y = p.y + dp.y;\n    p.z = p.z + dp.z;\n    return p;\n}");
  var grad4 = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("grad_4_", src$15);
  var $x_10 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$16 = $m_sjs_js_ArrayOpsCommon$().b(["pos"], []);
  var types$16 = $m_sjs_js_ArrayOpsCommon$().b(["vec4<f32>"], []);
  var parts$16 = [];
  var i$16 = 0;
  while ((i$16 < (names$16.length | 0))) {
    parts$16.push(((names$16[i$16] + ": ") + types$16[i$16]));
    i$16 = ((1 + i$16) | 0);
  }
  var paramList$16 = parts$16.join(", ");
  var src$16 = (("fn simplex_noise_4d(" + paramList$16) + ") -> f32 {\n\n    let c = vec4<f32>(\n        0.138196601125011,\n        0.276393202250021,\n        0.414589803375032,\n        -0.447213595499958\n    );\n    let F4 = 0.309016994374947451;\n    var i = floor(pos + dot(pos, vec4<f32>(F4, F4, F4, F4)));\n    let x0 = pos - i + dot(i, c.xxxx);\n    let is_x = step(x0.yzw, x0.xxx);\n    let is_yz = step(x0.zww, x0.yyz);\n    var i0 = vec4<f32>(is_x.x + is_x.y + is_x.z, 1.0 - is_x.x, 1.0 - is_x.y, 1.0 - is_x.z);\n    i0.y = i0.y + is_yz.x + is_yz.y;\n    i0.z = i0.z + (1.0 - is_yz.x) + is_yz.z;\n    i0.w = i0.w + (1.0 - is_yz.y) + (1.0 - is_yz.z);\n    let i3 = clamp(i0, vec4<f32>(0.0, 0.0, 0.0, 0.0), vec4<f32>(1.0, 1.0, 1.0, 1.0));\n    let i2 = clamp(i0 - 1.0, vec4<f32>(0.0, 0.0, 0.0, 0.0), vec4<f32>(1.0, 1.0, 1.0, 1.0));\n    let i1 = clamp(i0 - 2.0, vec4<f32>(0.0, 0.0, 0.0, 0.0), vec4<f32>(1.0, 1.0, 1.0, 1.0));\n    let x1 = x0 - i1 + c.xxxx;\n    let x2 = x0 - i2 + c.yyyy;\n    let x3 = x0 - i3 + c.zzzz;\n    let x4 = x0 + c.wwww;\n    i = i % vec4<f32>(289.0, 289.0, 289.0, 289.0);\n    let j0 = permute_1_(permute_1_(permute_1_(permute_1_(i.w) + i.z) + i.y) + i.x);\n    let j1 = permute_4_(\n        permute_4_(\n            permute_4_(\n                permute_4_(i.w + vec4<f32>(i1.w, i2.w, i3.w, 1.0)) + i.z + vec4<f32>(i1.z, i2.z, i3.z, 1.0)\n            ) + i.y + vec4<f32>(i1.y, i2.y, i3.y, 1.0)\n        ) + i.x + vec4<f32>(i1.x, i2.x, i3.x, 1.0)\n    );\n    let ip = vec4<f32>(1.0 / 294.0, 1.0 / 49.0, 1.0 / 7.0, 0.0);\n    var p0 = grad_4_(j0, ip);\n    var p1 = grad_4_(j1.x, ip);\n    var p2 = grad_4_(j1.y, ip);\n    var p3 = grad_4_(j1.z, ip);\n    var p4 = grad_4_(j1.w, ip);\n    let norm = taylor_inv_sqrt_4_(vec4<f32>(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));\n    p0 = p0 * norm.x;\n    p1 = p1 * norm.y;\n    p2 = p2 * norm.z;\n    p3 = p3 * norm.w;\n    p4 = p4 * taylor_inv_sqrt_1_(dot(p4, p4));\n    var m0 = max(0.6 - vec3<f32>(dot(x0, x0), dot(x1, x1), dot(x2, x2)), vec3<f32>(0.0, 0.0, 0.0));\n    var m1 = max(0.6 - vec2<f32>(dot(x3, x3), dot(x4, x4)), vec2<f32>(0.0, 0.0));\n    m0 = m0 * m0;\n    m1 = m1 * m1;\n    return 49.0 * (dot(m0 * m0, vec3<f32>(dot(p0, x0), dot(p1, x1), dot(p2, x2))) + dot(m1 * m1, vec2<f32>(dot(p3, x3), dot(p4, x4))));\n}");
  this.io = $x_10.P(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_noise_4d", src$16), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().O(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([permute1, this.g5, taylorInvSqrt1, this.g6, grad4]))));
  var $x_11 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$17 = $m_sjs_js_ArrayOpsCommon$().b(["pos"], $m_sjs_js_ArrayOpsCommon$().b(["scale"], []));
  var types$17 = $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["f32"], []));
  var parts$17 = [];
  var i$17 = 0;
  while ((i$17 < (names$17.length | 0))) {
    parts$17.push(((names$17[i$17] + ": ") + types$17[i$17]));
    i$17 = ((1 + i$17) | 0);
  }
  var paramList$17 = parts$17.join(", ");
  var src$17 = (("fn tiling_simplex_noise_2d(" + paramList$17) + ") -> f32 {\n\n    let angle_x = pos.x * 6.28318530718;\n    let angle_y = pos.y * 6.28318530718;\n    let nx = cos(angle_x) * scale;\n    let ny = sin(angle_x) * scale;\n    let nz = cos(angle_y) * scale;\n    let nw = sin(angle_y) * scale;\n    return simplex_noise_4d(vec4<f32>(nx, ny, nz, nw));\n}");
  $x_11.P(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("tiling_simplex_noise_2d", src$17), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().O(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.io]))));
}
$p = $c_Ltrivalibs_graphics_shader_lib_random_Simplex$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_random_Simplex$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_random_Simplex$() {
}
$h_Ltrivalibs_graphics_shader_lib_random_Simplex$.prototype = $p;
var $d_Ltrivalibs_graphics_shader_lib_random_Simplex$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_random_Simplex$, "trivalibs.graphics.shader.lib.random.Simplex$", ({
  eB: 1
}));
var $n_Ltrivalibs_graphics_shader_lib_random_Simplex$;
function $m_Ltrivalibs_graphics_shader_lib_random_Simplex$() {
  if ((!$n_Ltrivalibs_graphics_shader_lib_random_Simplex$)) {
    $n_Ltrivalibs_graphics_shader_lib_random_Simplex$ = new $c_Ltrivalibs_graphics_shader_lib_random_Simplex$();
  }
  return $n_Ltrivalibs_graphics_shader_lib_random_Simplex$;
}
/** @constructor */
function $c_Ltrivalibs_utils_animation_Animator(frame, onFpsCallback) {
  this.ip = null;
  this.gW = null;
  this.eK = 0;
  this.eL = 0.0;
  this.g7 = 0.0;
  this.g8 = 0.0;
  this.gX = false;
  this.ip = frame;
  this.gW = onFpsCallback;
  this.eK = 0;
  this.eL = 0.0;
  this.g7 = 0.0;
  this.g8 = (-1.0);
  this.gX = false;
}
$p = $c_Ltrivalibs_utils_animation_Animator.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_animation_Animator;
/** @constructor */
function $h_Ltrivalibs_utils_animation_Animator() {
}
$h_Ltrivalibs_utils_animation_Animator.prototype = $p;
$p.j0 = (function(time) {
  this.eK = ((1 + this.eK) | 0);
  if ((this.eL === 0.0)) {
    this.eL = time;
    this.g7 = time;
  }
  var fpsElapsed = (time - this.eL);
  if ((fpsElapsed >= 1000.0)) {
    var fps = ((1000.0 * this.eK) / fpsElapsed);
    if (((time - this.g7) >= 1000.0)) {
      var args$proxy1 = $m_sr_ScalaRunTime$().ha(new ($d_sjs_js_Any.r().C)([(fps.toFixed(1) + " FPS")]));
      console.log(...$m_sjsr_Compat$().h8(args$proxy1));
      this.g7 = time;
      if ((this.gW !== null)) {
        (0, this.gW)(fps);
      }
    }
    this.eK = 0;
    this.eL = time;
  }
  var delta = ((this.g8 < 0.0) ? 0.0 : (time - this.g8));
  this.g8 = time;
  (0, this.ip)(delta);
  if (this.gX) {
    requestAnimationFrame($m_sjs_js_Any$().eN(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
      this.j0((+v1$2));
    }))));
  }
});
$p.lg = (function() {
  this.gX = true;
  return requestAnimationFrame($m_sjs_js_Any$().eN(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
    this.j0((+v1$2));
  }))));
});
var $d_Ltrivalibs_utils_animation_Animator = new $TypeData().i($c_Ltrivalibs_utils_animation_Animator, "trivalibs.utils.animation.Animator", ({
  eE: 1
}));
/** @constructor */
function $c_Ltrivalibs_utils_animation_animate$package$() {
}
$p = $c_Ltrivalibs_utils_animation_animate$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_animation_animate$package$;
/** @constructor */
function $h_Ltrivalibs_utils_animation_animate$package$() {
}
$h_Ltrivalibs_utils_animation_animate$package$.prototype = $p;
$p.jz = (function(frame) {
  var animator = new $c_Ltrivalibs_utils_animation_Animator(frame, null);
  animator.lg();
  return animator;
});
var $d_Ltrivalibs_utils_animation_animate$package$ = new $TypeData().i($c_Ltrivalibs_utils_animation_animate$package$, "trivalibs.utils.animation.animate$package$", ({
  eF: 1
}));
var $n_Ltrivalibs_utils_animation_animate$package$;
function $m_Ltrivalibs_utils_animation_animate$package$() {
  if ((!$n_Ltrivalibs_utils_animation_animate$package$)) {
    $n_Ltrivalibs_utils_animation_animate$package$ = new $c_Ltrivalibs_utils_animation_animate$package$();
  }
  return $n_Ltrivalibs_utils_animation_animate$package$;
}
/** @constructor */
function $c_jl_Character$() {
  this.jb = null;
  $n_jl_Character$ = this;
  this.jb = new $ac_I(new Int32Array([1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3558, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43504, 43600, 44016, 65296, 66720, 68912, 69734, 69872, 69942, 70096, 70384, 70736, 70864, 71248, 71360, 71472, 71904, 72016, 72784, 73040, 73120, 73552, 92768, 92864, 93008, 120782, 120792, 120802, 120812, 120822, 123200, 123632, 124144, 125264, 130032]));
}
$p = $c_jl_Character$.prototype = new $h_O();
$p.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
}
$h_jl_Character$.prototype = $p;
$p.lo = (function(codePoint) {
  if (((codePoint >>> 0) > 1114111)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return String.fromCodePoint(codePoint);
});
var $d_jl_Character$ = new $TypeData().i($c_jl_Character$, "java.lang.Character$", ({
  aQ: 1,
  a: 1
}));
var $n_jl_Character$;
function $m_jl_Character$() {
  if ((!$n_jl_Character$)) {
    $n_jl_Character$ = new $c_jl_Character$();
  }
  return $n_jl_Character$;
}
/** @constructor */
function $c_jl_Number() {
}
$p = $c_jl_Number.prototype = new $h_O();
$p.constructor = $c_jl_Number;
/** @constructor */
function $h_jl_Number() {
}
$h_jl_Number.prototype = $p;
function $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.hd = s;
  if (writableStackTrace) {
    $thiz.jX();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.hd = null;
  }
  gb() {
    return this.hd;
  }
  jX() {
    var reference = ((this instanceof $c_sjs_js_JavaScriptException) ? this.em : this);
    if ((Object.prototype.toString.call(reference) !== "[object Error]")) {
      if (((Error.captureStackTrace === (void 0)) || (!(!Object.isSealed(this))))) {
        new Error();
      } else {
        Error.captureStackTrace(this);
      }
    }
    return this;
  }
  f() {
    var className = $objectClassName(this);
    var message = this.gb();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  g() {
    return $c_O.prototype.g.call(this);
  }
  get "message"() {
    var m = this.gb();
    return ((m === null) ? "" : m);
  }
  get "name"() {
    return $objectClassName(this);
  }
  "toString"() {
    return this.f();
  }
}
function $isArrayOf_jl_Throwable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.f)));
}
/** @constructor */
function $c_s_Console$() {
  this.he = null;
  $n_s_Console$ = this;
  this.he = new $c_s_util_DynamicVariable($m_jl_System$Streams$().hc);
}
$p = $c_s_Console$.prototype = new $h_O();
$p.constructor = $c_s_Console$;
/** @constructor */
function $h_s_Console$() {
}
$h_s_Console$.prototype = $p;
$p.kZ = (function() {
  return this.he.gh;
});
var $d_s_Console$ = new $TypeData().i($c_s_Console$, "scala.Console$", ({
  b9: 1,
  ce: 1
}));
var $n_s_Console$;
function $m_s_Console$() {
  if ((!$n_s_Console$)) {
    $n_s_Console$ = new $c_s_Console$();
  }
  return $n_s_Console$;
}
/** @constructor */
function $c_s_Conversion() {
}
$p = $c_s_Conversion.prototype = new $h_O();
$p.constructor = $c_s_Conversion;
/** @constructor */
function $h_s_Conversion() {
}
$h_s_Conversion.prototype = $p;
$p.f = (function() {
  return "<function1>";
});
/** @constructor */
function $c_s_LowPriorityImplicits() {
}
$p = $c_s_LowPriorityImplicits.prototype = new $h_s_LowPriorityImplicits2();
$p.constructor = $c_s_LowPriorityImplicits;
/** @constructor */
function $h_s_LowPriorityImplicits() {
}
$h_s_LowPriorityImplicits.prototype = $p;
$p.lx = (function(xs) {
  if ((xs === null)) {
    return null;
  } else if ((xs.a.length === 0)) {
    var this$2 = $m_scm_ArraySeq$();
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    return this$2.hm;
  } else {
    return new $c_scm_ArraySeq$ofRef(xs);
  }
});
/** @constructor */
function $c_sr_AbstractFunction1() {
}
$p = $c_sr_AbstractFunction1.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction1;
/** @constructor */
function $h_sr_AbstractFunction1() {
}
$h_sr_AbstractFunction1.prototype = $p;
$p.f = (function() {
  return "<function1>";
});
/** @constructor */
function $c_sr_AbstractFunction2() {
}
$p = $c_sr_AbstractFunction2.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction2;
/** @constructor */
function $h_sr_AbstractFunction2() {
}
$h_sr_AbstractFunction2.prototype = $p;
$p.f = (function() {
  return "<function2>";
});
/** @constructor */
function $c_sr_DoubleRef(elem) {
  this.an = 0.0;
  this.an = elem;
}
$p = $c_sr_DoubleRef.prototype = new $h_O();
$p.constructor = $c_sr_DoubleRef;
/** @constructor */
function $h_sr_DoubleRef() {
}
$h_sr_DoubleRef.prototype = $p;
$p.f = (function() {
  return ("" + this.an);
});
var $d_sr_DoubleRef = new $TypeData().i($c_sr_DoubleRef, "scala.runtime.DoubleRef", ({
  cq: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.ao = 0;
  this.hs = 0;
  this.jd = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.ao = $f_T__hashCode__I("Seq");
  this.hs = $f_T__hashCode__I("Map");
  $f_T__hashCode__I("Set");
  this.jd = this.ls($m_sci_Nil$(), this.hs);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.j1 = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.kd(xs, this.ao) : ((xs instanceof $c_sci_List) ? this.kj(xs, this.ao) : this.kY(xs, this.ao)));
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().i($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  cM: 1,
  cL: 1
}));
var $n_s_util_hashing_MurmurHash3$;
function $m_s_util_hashing_MurmurHash3$() {
  if ((!$n_s_util_hashing_MurmurHash3$)) {
    $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$();
  }
  return $n_s_util_hashing_MurmurHash3$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT(uv) {
  this.gj = null;
  this.gj = uv;
}
$p = $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT() {
}
$h_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT.prototype = $p;
var $d_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT, "trivalibs.graphics.buffers.UniformLayout$given_UniformLayout_T", ({
  cS: 1,
  cR: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$() {
}
$p = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$() {
}
$h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$.prototype = $p;
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Mat4_Mat4Buffer$", ({
  cU: 1,
  cT: 1
}));
var $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$;
function $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$() {
  if ((!$n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$)) {
    $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$ = new $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
  }
  return $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$() {
}
$p = $c_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$() {
}
$h_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$.prototype = $p;
$p.aD = (function(t) {
  return new $c_T2(t.hC, t.hD);
});
var $d_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$, "trivalibs.graphics.geometry.FieldWriter$vec2Writer$", ({
  cZ: 1,
  aC: 1
}));
var $n_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$;
function $m_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$() {
  if ((!$n_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$)) {
    $n_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$ = new $c_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$();
  }
  return $n_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$() {
}
$p = $c_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$() {
}
$h_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$.prototype = $p;
$p.aD = (function(t) {
  return new $c_T3(t.m, t.n, t.o);
});
var $d_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$, "trivalibs.graphics.geometry.FieldWriter$vec3Writer$", ({
  d0: 1,
  aC: 1
}));
var $n_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$;
function $m_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$() {
  if ((!$n_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$)) {
    $n_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$ = new $c_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$();
  }
  return $n_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexLayout$named(x$1) {
  this.hv = null;
  this.hv = x$1;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexLayout$named.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexLayout$named;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexLayout$named() {
}
$h_Ltrivalibs_graphics_geometry_VertexLayout$named.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_VertexLayout$named = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayout$named, "trivalibs.graphics.geometry.VertexLayout$named", ({
  d6: 1,
  d5: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons(x$1, x$2) {
  this.hw = null;
  this.hx = null;
  this.hw = x$1;
  this.hx = x$2;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons() {
}
$h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons.prototype = $p;
$p.lt = (function(t) {
  return $m_sr_Tuples$().iu(this.hw.aD(t.e(0)), this.hx.aD($m_sr_Tuples$().li(t)));
});
$p.aD = (function(t) {
  return this.lt(t);
});
var $d_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons, "trivalibs.graphics.geometry.VertexLayoutHelper$cons", ({
  d7: 1,
  aD: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$() {
}
$p = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$() {
}
$h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$.prototype = $p;
$p.aD = (function(t) {
  return $m_T$package$EmptyTuple$();
});
var $d_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$, "trivalibs.graphics.geometry.VertexLayoutHelper$nil$", ({
  d8: 1,
  aD: 1
}));
var $n_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$;
function $m_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$() {
  if ((!$n_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$)) {
    $n_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$ = new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$();
  }
  return $n_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_package$package$$anon$1(idx$2) {
  this.hz = 0;
  this.hz = idx$2;
}
$p = $c_Ltrivalibs_graphics_geometry_package$package$$anon$1.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_package$package$$anon$1;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_package$package$$anon$1() {
}
$h_Ltrivalibs_graphics_geometry_package$package$$anon$1.prototype = $p;
$p.Y = (function(t) {
  return t.e(this.hz);
});
var $d_Ltrivalibs_graphics_geometry_package$package$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_geometry_package$package$$anon$1, "trivalibs.graphics.geometry.package$package$$anon$1", ({
  dd: 1,
  d3: 1
}));
function $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D($thiz, v, other) {
  return (((v.m * other.m) + (v.n * other.n)) + (v.o * other.o));
}
function $f_Ltrivalibs_graphics_math_Vec3Base__length__O__D($thiz, v) {
  var p$proxy1 = $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D($thiz, v, v);
  return (+Math.sqrt(p$proxy1));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat4$() {
  this.hA = null;
  this.hB = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4$() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4$.prototype = $p;
$p.h1 = (function() {
  if ((!this.hB)) {
    this.hA = $m_Ltrivalibs_graphics_math_cpu_Mat4$();
    this.hB = true;
  }
  return this.hA;
});
$p.iB = (function(t, r, s) {
  var x = r.R;
  var y = r.S;
  var z = r.T;
  var w = r.Q;
  var x2 = (x + x);
  var y2 = (y + y);
  var z2 = (z + z);
  var xx = (x * x2);
  var xy = (x * y2);
  var xz = (x * z2);
  var yy = (y * y2);
  var yz = (y * z2);
  var zz = (z * z2);
  var wx = (w * x2);
  var wy = (w * y2);
  var wz = (w * z2);
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4(((1.0 - (yy + zz)) * s.m), ((xy + wz) * s.m), ((xz - wy) * s.m), 0.0, ((xy - wz) * s.n), ((1.0 - (xx + zz)) * s.n), ((yz + wx) * s.n), 0.0, ((xz + wy) * s.o), ((yz - wx) * s.o), ((1.0 - (xx + yy)) * s.o), 0.0, t.m, t.n, t.o, 1.0);
});
var $d_Ltrivalibs_graphics_math_cpu_Mat4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4$, "trivalibs.graphics.math.cpu.Mat4$", ({
  du: 1,
  dg: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Mat4$;
function $m_Ltrivalibs_graphics_math_cpu_Mat4$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Mat4$)) {
    $n_Ltrivalibs_graphics_math_cpu_Mat4$ = new $c_Ltrivalibs_graphics_math_cpu_Mat4$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Mat4$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$() {
}
$h_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$, "trivalibs.graphics.math.cpu.Quat$given_QuatImmutableOps_Quat$", ({
  dy: 1,
  dA: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$;
function $m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$)) {
    $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$ = new $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec3$() {
  this.hE = null;
  this.hF = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec3$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec3$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec3$.prototype = $p;
$p.gc = (function() {
  if ((!this.hF)) {
    this.hE = $m_Ltrivalibs_graphics_math_cpu_Vec3$();
    this.hF = true;
  }
  return this.hE;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3$, "trivalibs.graphics.math.cpu.Vec3$", ({
  dD: 1,
  dm: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Vec3$;
function $m_Ltrivalibs_graphics_math_cpu_Vec3$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Vec3$)) {
    $n_Ltrivalibs_graphics_math_cpu_Vec3$ = new $c_Ltrivalibs_graphics_math_cpu_Vec3$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Vec3$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18() {
}
$h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18, "trivalibs.graphics.math.cpu.mat4$package$Mat4Buffer$$anon$18", ({
  dG: 1,
  di: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1(f$2) {
  this.hI = null;
  this.hI = f$2;
}
$p = $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1() {
}
$h_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1.prototype = $p;
$p.lw = (function(s) {
  return this.hI.l(s);
});
var $d_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1, "trivalibs.graphics.math.gpu.LeftScalar$$anon$1", ({
  dK: 1,
  dI: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_LetExpr(name) {
  this.c = null;
  this.hJ = null;
  this.hJ = name;
  $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(this, name);
}
$p = $c_Ltrivalibs_graphics_math_gpu_LetExpr.prototype = new $h_Ltrivalibs_graphics_math_gpu_Expr();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_LetExpr;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_LetExpr() {
}
$h_Ltrivalibs_graphics_math_gpu_LetExpr.prototype = $p;
$p.jn = (function(value) {
  return (((("  let " + this.hJ) + " = ") + value.c) + ";");
});
var $d_Ltrivalibs_graphics_math_gpu_LetExpr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LetExpr, "trivalibs.graphics.math.gpu.LetExpr", ({
  dL: 1,
  aI: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4.prototype = $p;
$p.ly = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.c + ".x"));
});
$p.lz = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.c + ".y"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4, "trivalibs.graphics.math.gpu.float_expr$package$$anon$4", ({
  dR: 1,
  dj: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5.prototype = $p;
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5, "trivalibs.graphics.math.gpu.float_expr$package$$anon$5", ({
  dS: 1,
  aG: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6.prototype = $p;
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6, "trivalibs.graphics.math.gpu.float_expr$package$$anon$6", ({
  dT: 1,
  aH: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$9() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$9.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$9;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$9() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$9.prototype = $p;
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$9 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$9, "trivalibs.graphics.math.gpu.float_expr$package$$anon$9", ({
  dU: 1,
  R: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$.prototype = $p;
$p.h9 = (function(m, x$2, v, x$4, x$5) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + m.c) + " * ") + v.c) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Mat4ImmutableOpsG_FloatExpr_Mat4Expr$", ({
  dV: 1,
  dh: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$.prototype = $p;
$p.k1 = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(" + a.c) + " * 0.5 + 0.5)"));
});
$p.kT = (function(a, b, t) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("mix(" + a.c) + ", ") + b.c) + ", ") + t.c) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$, "trivalibs.graphics.math.gpu.float_expr$package$given_NumExt_FloatExpr$", ({
  dW: 1,
  eG: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$.prototype = $p;
$p.jr = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.c) + " + ") + b.c) + ")"));
});
$p.jt = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.c) + " * ") + b.c) + ")"));
});
$p.jp = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.c) + " / ") + b.c) + ")"));
});
$p.js = (function(a, b) {
  return this.jt(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().J().l(b));
});
$p.jo = (function(a, b) {
  return this.jp(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().J().l(b));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$, "trivalibs.graphics.math.gpu.float_expr$package$given_NumOps_FloatExpr$", ({
  dX: 1,
  eH: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$.prototype = $p;
$p.jZ = (function(v, x$2) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(" + v.c) + " * 2.0 - 1.0)"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec2ImmutableOpsG_FloatExpr_Vec2Expr$", ({
  dY: 1,
  dk: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$.prototype = $p;
$p.jy = (function(v, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.c) + " + ") + other.c) + ")"));
});
$p.iY = (function(v, x$2, scalar) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.c) + " * ") + scalar.c) + ")"));
});
$p.iq = (function(v, x$2, scalar) {
  return this.iY(v, x$2, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().J().l(scalar));
});
$p.kW = (function(v, x$2) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("normalize(" + v.c) + ")"));
});
$p.k0 = (function(v, x$2) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(" + v.c) + " * 0.5 + 0.5)"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec3ImmutableOpsG_FloatExpr_Vec3Expr$", ({
  dZ: 1,
  dn: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$.prototype = $p;
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec4ImmutableOpsG_FloatExpr_Vec4Expr$", ({
  e0: 1,
  dr: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Shape(painter, form, shade) {
  this.M = null;
  this.x = null;
  this.gI = null;
  this.gH = null;
  this.C = null;
  this.aa = null;
  this.gJ = null;
  this.M = form;
  this.x = shade;
  this.gI = "none";
  this.gH = null;
  this.C = [];
  this.aa = [];
  this.gJ = new $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter);
}
$p = $c_Ltrivalibs_graphics_painter_Shape.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Shape;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Shape() {
}
$h_Ltrivalibs_graphics_painter_Shape.prototype = $p;
$p.ld = (function(cullMode, blendState) {
  if ((cullMode !== (void 0))) {
    this.gI = cullMode;
  }
  if ((blendState !== (void 0))) {
    this.gH = blendState;
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Shape = new $TypeData().i($c_Ltrivalibs_graphics_painter_Shape, "trivalibs.graphics.painter.Shape", ({
  ec: 1,
  e5: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform(inner) {
  this.gM = null;
  this.gM = inner;
}
$p = $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform() {
}
$h_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform.prototype = $p;
$p.a1 = (function() {
  return this.gM.a1();
});
var $d_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform = new $TypeData().i($c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform, "trivalibs.graphics.shader.FragmentUniform$given_WGSLType_FragmentUniform", ({
  ei: 1,
  D: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform(inner) {
  this.g2 = null;
  this.g2 = inner;
}
$p = $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform() {
}
$h_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform.prototype = $p;
$p.a1 = (function() {
  return this.g2.a1();
});
var $d_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform = new $TypeData().i($c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform, "trivalibs.graphics.shader.VertexUniform$given_WGSLType_VertexUniform", ({
  ek: 1,
  D: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor(prefix) {
  this.gS = null;
  this.gS = prefix;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor.prototype = $p;
$p.ae = (function(name) {
  return new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(((this.gS === "") ? name : ((this.gS + ".") + name)));
});
var $d_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor, "trivalibs.graphics.shader.dsl.TypedAssignAccessor", ({
  er: 1,
  x: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(prefix) {
  this.gT = null;
  this.gT = prefix;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor.prototype = $p;
$p.G = (function(name) {
  return ((this.gT === "") ? $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), name) : $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), ((this.gT + ".") + name)));
});
var $d_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor, "trivalibs.graphics.shader.dsl.TypedExprAccessor", ({
  es: 1,
  x: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(kinds) {
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor, "trivalibs.graphics.shader.dsl.TypedLocalAccessor", ({
  et: 1,
  x: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor() {
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor, "trivalibs.graphics.shader.dsl.TypedPanelAccessor", ({
  eu: 1,
  x: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_VertexOut(prefix) {
  this.ij = null;
  this.gU = null;
  this.ij = prefix;
  this.gU = new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget((prefix + ".position"));
}
$p = $c_Ltrivalibs_graphics_shader_dsl_VertexOut.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_VertexOut;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_VertexOut() {
}
$h_Ltrivalibs_graphics_shader_dsl_VertexOut.prototype = $p;
$p.ae = (function(name) {
  return new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(((this.ij + ".") + name));
});
var $d_Ltrivalibs_graphics_shader_dsl_VertexOut = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_VertexOut, "trivalibs.graphics.shader.dsl.VertexOut", ({
  ew: 1,
  x: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$() {
}
$p = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$() {
}
$h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$.prototype = $p;
$p.a1 = (function() {
  return "mat4x4<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$, "trivalibs.graphics.shader.types$package$given_WGSLType_Mat4$", ({
  eC: 1,
  D: 1
}));
var $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$;
function $m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$() {
  if ((!$n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$)) {
    $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$ = new $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$();
  }
  return $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$() {
}
$p = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$() {
}
$h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$.prototype = $p;
$p.a1 = (function() {
  return "sampler";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$, "trivalibs.graphics.shader.types$package$given_WGSLType_Sampler$", ({
  eD: 1,
  D: 1
}));
var $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$;
function $m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$() {
  if ((!$n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$)) {
    $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$ = new $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$();
  }
  return $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$;
}
/** @constructor */
function $c_jl_Class($data) {
  this.ge = $data;
}
$p = $c_jl_Class.prototype = new $h_O();
$p.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
}
$h_jl_Class.prototype = $p;
$p.f = (function() {
  return ((this.ge.Y ? "interface " : (this.ge.X ? "" : "class ")) + this.ge.N);
});
var $d_jl_Class = new $TypeData().i($c_jl_Class, "java.lang.Class", ({
  aR: 1,
  a: 1,
  g: 1
}));
class $c_jl_Error extends $c_jl_Throwable {
}
class $c_jl_Exception extends $c_jl_Throwable {
}
/** @constructor */
function $c_s_Predef$() {
  $n_s_Predef$ = this;
  $m_sci_List$();
}
$p = $c_s_Predef$.prototype = new $h_s_LowPriorityImplicits();
$p.constructor = $c_s_Predef$;
/** @constructor */
function $h_s_Predef$() {
}
$h_s_Predef$.prototype = $p;
var $d_s_Predef$ = new $TypeData().i($c_s_Predef$, "scala.Predef$", ({
  be: 1,
  bb: 1,
  bc: 1
}));
var $n_s_Predef$;
function $m_s_Predef$() {
  if ((!$n_s_Predef$)) {
    $n_s_Predef$ = new $c_s_Predef$();
  }
  return $n_s_Predef$;
}
function $f_s_Product1__productElement__I__O($thiz, n) {
  if ((n === 0)) {
    return $thiz.f8;
  } else {
    throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 0)"));
  }
}
function $f_s_Product10__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.f9;
      break;
    }
    case 1: {
      return $thiz.aH;
      break;
    }
    case 2: {
      return $thiz.aI;
      break;
    }
    case 3: {
      return $thiz.aJ;
      break;
    }
    case 4: {
      return $thiz.aK;
      break;
    }
    case 5: {
      return $thiz.aL;
      break;
    }
    case 6: {
      return $thiz.aM;
      break;
    }
    case 7: {
      return $thiz.aN;
      break;
    }
    case 8: {
      return $thiz.aO;
      break;
    }
    case 9: {
      return $thiz.aG;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 9)"));
    }
  }
}
function $f_s_Product11__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fa;
      break;
    }
    case 1: {
      return $thiz.aR;
      break;
    }
    case 2: {
      return $thiz.aS;
      break;
    }
    case 3: {
      return $thiz.aT;
      break;
    }
    case 4: {
      return $thiz.aU;
      break;
    }
    case 5: {
      return $thiz.aV;
      break;
    }
    case 6: {
      return $thiz.aW;
      break;
    }
    case 7: {
      return $thiz.aX;
      break;
    }
    case 8: {
      return $thiz.aY;
      break;
    }
    case 9: {
      return $thiz.aP;
      break;
    }
    case 10: {
      return $thiz.aQ;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 10)"));
    }
  }
}
function $f_s_Product12__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fb;
      break;
    }
    case 1: {
      return $thiz.b2;
      break;
    }
    case 2: {
      return $thiz.b3;
      break;
    }
    case 3: {
      return $thiz.b4;
      break;
    }
    case 4: {
      return $thiz.b5;
      break;
    }
    case 5: {
      return $thiz.b6;
      break;
    }
    case 6: {
      return $thiz.b7;
      break;
    }
    case 7: {
      return $thiz.b8;
      break;
    }
    case 8: {
      return $thiz.b9;
      break;
    }
    case 9: {
      return $thiz.aZ;
      break;
    }
    case 10: {
      return $thiz.b0;
      break;
    }
    case 11: {
      return $thiz.b1;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 11)"));
    }
  }
}
function $f_s_Product13__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fc;
      break;
    }
    case 1: {
      return $thiz.be;
      break;
    }
    case 2: {
      return $thiz.bf;
      break;
    }
    case 3: {
      return $thiz.bg;
      break;
    }
    case 4: {
      return $thiz.bh;
      break;
    }
    case 5: {
      return $thiz.bi;
      break;
    }
    case 6: {
      return $thiz.bj;
      break;
    }
    case 7: {
      return $thiz.bk;
      break;
    }
    case 8: {
      return $thiz.bl;
      break;
    }
    case 9: {
      return $thiz.ba;
      break;
    }
    case 10: {
      return $thiz.bb;
      break;
    }
    case 11: {
      return $thiz.bc;
      break;
    }
    case 12: {
      return $thiz.bd;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 12)"));
    }
  }
}
function $f_s_Product14__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fd;
      break;
    }
    case 1: {
      return $thiz.br;
      break;
    }
    case 2: {
      return $thiz.bs;
      break;
    }
    case 3: {
      return $thiz.bt;
      break;
    }
    case 4: {
      return $thiz.bu;
      break;
    }
    case 5: {
      return $thiz.bv;
      break;
    }
    case 6: {
      return $thiz.bw;
      break;
    }
    case 7: {
      return $thiz.bx;
      break;
    }
    case 8: {
      return $thiz.by;
      break;
    }
    case 9: {
      return $thiz.bm;
      break;
    }
    case 10: {
      return $thiz.bn;
      break;
    }
    case 11: {
      return $thiz.bo;
      break;
    }
    case 12: {
      return $thiz.bp;
      break;
    }
    case 13: {
      return $thiz.bq;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 13)"));
    }
  }
}
function $f_s_Product15__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fe;
      break;
    }
    case 1: {
      return $thiz.bF;
      break;
    }
    case 2: {
      return $thiz.bG;
      break;
    }
    case 3: {
      return $thiz.bH;
      break;
    }
    case 4: {
      return $thiz.bI;
      break;
    }
    case 5: {
      return $thiz.bJ;
      break;
    }
    case 6: {
      return $thiz.bK;
      break;
    }
    case 7: {
      return $thiz.bL;
      break;
    }
    case 8: {
      return $thiz.bM;
      break;
    }
    case 9: {
      return $thiz.bz;
      break;
    }
    case 10: {
      return $thiz.bA;
      break;
    }
    case 11: {
      return $thiz.bB;
      break;
    }
    case 12: {
      return $thiz.bC;
      break;
    }
    case 13: {
      return $thiz.bD;
      break;
    }
    case 14: {
      return $thiz.bE;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 14)"));
    }
  }
}
function $f_s_Product16__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.ff;
      break;
    }
    case 1: {
      return $thiz.bU;
      break;
    }
    case 2: {
      return $thiz.bV;
      break;
    }
    case 3: {
      return $thiz.bW;
      break;
    }
    case 4: {
      return $thiz.bX;
      break;
    }
    case 5: {
      return $thiz.bY;
      break;
    }
    case 6: {
      return $thiz.bZ;
      break;
    }
    case 7: {
      return $thiz.c0;
      break;
    }
    case 8: {
      return $thiz.c1;
      break;
    }
    case 9: {
      return $thiz.bN;
      break;
    }
    case 10: {
      return $thiz.bO;
      break;
    }
    case 11: {
      return $thiz.bP;
      break;
    }
    case 12: {
      return $thiz.bQ;
      break;
    }
    case 13: {
      return $thiz.bR;
      break;
    }
    case 14: {
      return $thiz.bS;
      break;
    }
    case 15: {
      return $thiz.bT;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 15)"));
    }
  }
}
function $f_s_Product17__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fg;
      break;
    }
    case 1: {
      return $thiz.ca;
      break;
    }
    case 2: {
      return $thiz.cb;
      break;
    }
    case 3: {
      return $thiz.cc;
      break;
    }
    case 4: {
      return $thiz.cd;
      break;
    }
    case 5: {
      return $thiz.ce;
      break;
    }
    case 6: {
      return $thiz.cf;
      break;
    }
    case 7: {
      return $thiz.cg;
      break;
    }
    case 8: {
      return $thiz.ch;
      break;
    }
    case 9: {
      return $thiz.c2;
      break;
    }
    case 10: {
      return $thiz.c3;
      break;
    }
    case 11: {
      return $thiz.c4;
      break;
    }
    case 12: {
      return $thiz.c5;
      break;
    }
    case 13: {
      return $thiz.c6;
      break;
    }
    case 14: {
      return $thiz.c7;
      break;
    }
    case 15: {
      return $thiz.c8;
      break;
    }
    case 16: {
      return $thiz.c9;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 16)"));
    }
  }
}
function $f_s_Product18__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fh;
      break;
    }
    case 1: {
      return $thiz.cr;
      break;
    }
    case 2: {
      return $thiz.cs;
      break;
    }
    case 3: {
      return $thiz.ct;
      break;
    }
    case 4: {
      return $thiz.cu;
      break;
    }
    case 5: {
      return $thiz.cv;
      break;
    }
    case 6: {
      return $thiz.cw;
      break;
    }
    case 7: {
      return $thiz.cx;
      break;
    }
    case 8: {
      return $thiz.cy;
      break;
    }
    case 9: {
      return $thiz.ci;
      break;
    }
    case 10: {
      return $thiz.cj;
      break;
    }
    case 11: {
      return $thiz.ck;
      break;
    }
    case 12: {
      return $thiz.cl;
      break;
    }
    case 13: {
      return $thiz.cm;
      break;
    }
    case 14: {
      return $thiz.cn;
      break;
    }
    case 15: {
      return $thiz.co;
      break;
    }
    case 16: {
      return $thiz.cp;
      break;
    }
    case 17: {
      return $thiz.cq;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 17)"));
    }
  }
}
function $f_s_Product19__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fi;
      break;
    }
    case 1: {
      return $thiz.cJ;
      break;
    }
    case 2: {
      return $thiz.cK;
      break;
    }
    case 3: {
      return $thiz.cL;
      break;
    }
    case 4: {
      return $thiz.cM;
      break;
    }
    case 5: {
      return $thiz.cN;
      break;
    }
    case 6: {
      return $thiz.cO;
      break;
    }
    case 7: {
      return $thiz.cP;
      break;
    }
    case 8: {
      return $thiz.cQ;
      break;
    }
    case 9: {
      return $thiz.cz;
      break;
    }
    case 10: {
      return $thiz.cA;
      break;
    }
    case 11: {
      return $thiz.cB;
      break;
    }
    case 12: {
      return $thiz.cC;
      break;
    }
    case 13: {
      return $thiz.cD;
      break;
    }
    case 14: {
      return $thiz.cE;
      break;
    }
    case 15: {
      return $thiz.cF;
      break;
    }
    case 16: {
      return $thiz.cG;
      break;
    }
    case 17: {
      return $thiz.cH;
      break;
    }
    case 18: {
      return $thiz.cI;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 18)"));
    }
  }
}
function $f_s_Product2__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.V;
      break;
    }
    case 1: {
      return $thiz.W;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 1)"));
    }
  }
}
function $f_s_Product20__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fj;
      break;
    }
    case 1: {
      return $thiz.d1;
      break;
    }
    case 2: {
      return $thiz.d3;
      break;
    }
    case 3: {
      return $thiz.d4;
      break;
    }
    case 4: {
      return $thiz.d5;
      break;
    }
    case 5: {
      return $thiz.d6;
      break;
    }
    case 6: {
      return $thiz.d7;
      break;
    }
    case 7: {
      return $thiz.d8;
      break;
    }
    case 8: {
      return $thiz.d9;
      break;
    }
    case 9: {
      return $thiz.cR;
      break;
    }
    case 10: {
      return $thiz.cS;
      break;
    }
    case 11: {
      return $thiz.cT;
      break;
    }
    case 12: {
      return $thiz.cU;
      break;
    }
    case 13: {
      return $thiz.cV;
      break;
    }
    case 14: {
      return $thiz.cW;
      break;
    }
    case 15: {
      return $thiz.cX;
      break;
    }
    case 16: {
      return $thiz.cY;
      break;
    }
    case 17: {
      return $thiz.cZ;
      break;
    }
    case 18: {
      return $thiz.d0;
      break;
    }
    case 19: {
      return $thiz.d2;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 19)"));
    }
  }
}
function $f_s_Product21__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fk;
      break;
    }
    case 1: {
      return $thiz.dk;
      break;
    }
    case 2: {
      return $thiz.dn;
      break;
    }
    case 3: {
      return $thiz.dp;
      break;
    }
    case 4: {
      return $thiz.dq;
      break;
    }
    case 5: {
      return $thiz.dr;
      break;
    }
    case 6: {
      return $thiz.ds;
      break;
    }
    case 7: {
      return $thiz.dt;
      break;
    }
    case 8: {
      return $thiz.du;
      break;
    }
    case 9: {
      return $thiz.da;
      break;
    }
    case 10: {
      return $thiz.db;
      break;
    }
    case 11: {
      return $thiz.dc;
      break;
    }
    case 12: {
      return $thiz.dd;
      break;
    }
    case 13: {
      return $thiz.de;
      break;
    }
    case 14: {
      return $thiz.df;
      break;
    }
    case 15: {
      return $thiz.dg;
      break;
    }
    case 16: {
      return $thiz.dh;
      break;
    }
    case 17: {
      return $thiz.di;
      break;
    }
    case 18: {
      return $thiz.dj;
      break;
    }
    case 19: {
      return $thiz.dl;
      break;
    }
    case 20: {
      return $thiz.dm;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 20)"));
    }
  }
}
function $f_s_Product22__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fl;
      break;
    }
    case 1: {
      return $thiz.dF;
      break;
    }
    case 2: {
      return $thiz.dJ;
      break;
    }
    case 3: {
      return $thiz.dK;
      break;
    }
    case 4: {
      return $thiz.dL;
      break;
    }
    case 5: {
      return $thiz.dM;
      break;
    }
    case 6: {
      return $thiz.dN;
      break;
    }
    case 7: {
      return $thiz.dO;
      break;
    }
    case 8: {
      return $thiz.dP;
      break;
    }
    case 9: {
      return $thiz.dv;
      break;
    }
    case 10: {
      return $thiz.dw;
      break;
    }
    case 11: {
      return $thiz.dx;
      break;
    }
    case 12: {
      return $thiz.dy;
      break;
    }
    case 13: {
      return $thiz.dz;
      break;
    }
    case 14: {
      return $thiz.dA;
      break;
    }
    case 15: {
      return $thiz.dB;
      break;
    }
    case 16: {
      return $thiz.dC;
      break;
    }
    case 17: {
      return $thiz.dD;
      break;
    }
    case 18: {
      return $thiz.dE;
      break;
    }
    case 19: {
      return $thiz.dG;
      break;
    }
    case 20: {
      return $thiz.dH;
      break;
    }
    case 21: {
      return $thiz.dI;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 21)"));
    }
  }
}
function $f_s_Product3__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.ag;
      break;
    }
    case 1: {
      return $thiz.a2;
      break;
    }
    case 2: {
      return $thiz.a3;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 2)"));
    }
  }
}
function $f_s_Product4__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.dQ;
      break;
    }
    case 1: {
      return $thiz.ah;
      break;
    }
    case 2: {
      return $thiz.ai;
      break;
    }
    case 3: {
      return $thiz.aj;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 3)"));
    }
  }
}
function $f_s_Product5__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fm;
      break;
    }
    case 1: {
      return $thiz.dR;
      break;
    }
    case 2: {
      return $thiz.dS;
      break;
    }
    case 3: {
      return $thiz.dT;
      break;
    }
    case 4: {
      return $thiz.dU;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 4)"));
    }
  }
}
function $f_s_Product6__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fn;
      break;
    }
    case 1: {
      return $thiz.dV;
      break;
    }
    case 2: {
      return $thiz.dW;
      break;
    }
    case 3: {
      return $thiz.dX;
      break;
    }
    case 4: {
      return $thiz.dY;
      break;
    }
    case 5: {
      return $thiz.dZ;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 5)"));
    }
  }
}
function $f_s_Product7__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fo;
      break;
    }
    case 1: {
      return $thiz.e0;
      break;
    }
    case 2: {
      return $thiz.e1;
      break;
    }
    case 3: {
      return $thiz.e2;
      break;
    }
    case 4: {
      return $thiz.e3;
      break;
    }
    case 5: {
      return $thiz.e4;
      break;
    }
    case 6: {
      return $thiz.e5;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 6)"));
    }
  }
}
function $f_s_Product8__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fp;
      break;
    }
    case 1: {
      return $thiz.e6;
      break;
    }
    case 2: {
      return $thiz.e7;
      break;
    }
    case 3: {
      return $thiz.e8;
      break;
    }
    case 4: {
      return $thiz.e9;
      break;
    }
    case 5: {
      return $thiz.ea;
      break;
    }
    case 6: {
      return $thiz.eb;
      break;
    }
    case 7: {
      return $thiz.ec;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 7)"));
    }
  }
}
function $f_s_Product9__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fq;
      break;
    }
    case 1: {
      return $thiz.ed;
      break;
    }
    case 2: {
      return $thiz.ee;
      break;
    }
    case 3: {
      return $thiz.ef;
      break;
    }
    case 4: {
      return $thiz.eg;
      break;
    }
    case 5: {
      return $thiz.eh;
      break;
    }
    case 6: {
      return $thiz.ei;
      break;
    }
    case 7: {
      return $thiz.ej;
      break;
    }
    case 8: {
      return $thiz.ek;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 8)"));
    }
  }
}
/** @constructor */
function $c_sc_Iterator$() {
  this.ft = null;
  $n_sc_Iterator$ = this;
  this.ft = new $c_sc_Iterator$$anon$19();
}
$p = $c_sc_Iterator$.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
}
$h_sc_Iterator$.prototype = $p;
var $d_sc_Iterator$ = new $TypeData().i($c_sc_Iterator$, "scala.collection.Iterator$", ({
  bK: 1,
  a: 1,
  ao: 1
}));
var $n_sc_Iterator$;
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$();
  }
  return $n_sc_Iterator$;
}
/** @constructor */
function $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(f) {
  this.hn = null;
  this.hn = f;
}
$p = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919;
/** @constructor */
function $h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919() {
}
$h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = $p;
$p.l = (function(x0) {
  return (0, this.hn)(x0);
});
var $d_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919 = new $TypeData().i($c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919, "scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919", ({
  cn: 1,
  cm: 1,
  h: 1
}));
/** @constructor */
function $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(f) {
  this.ho = null;
  this.ho = f;
}
$p = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = new $h_sr_AbstractFunction2();
$p.constructor = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8;
/** @constructor */
function $h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8() {
}
$h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = $p;
$p.ir = (function(x0, x1) {
  return (0, this.ho)(x0, x1);
});
var $d_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8 = new $TypeData().i($c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8, "scala.runtime.AbstractFunction2.$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8", ({
  cp: 1,
  co: 1,
  ba: 1
}));
var $d_sr_Nothing$ = new $TypeData().i(0, "scala.runtime.Nothing$", ({
  cr: 1,
  f: 1,
  a: 1
}));
/** @constructor */
function $c_sr_TupleXXL(es) {
  this.L = null;
  this.L = es;
  if ((es.a.length <= 22)) {
    $m_sr_Scala3RunTime$().jH();
  }
}
$p = $c_sr_TupleXXL.prototype = new $h_O();
$p.constructor = $c_sr_TupleXXL;
/** @constructor */
function $h_sr_TupleXXL() {
}
$h_sr_TupleXXL.prototype = $p;
$p.k = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.e = (function(n) {
  return this.L.a[n];
});
$p.h = (function() {
  return this.L.a.length;
});
$p.j = (function() {
  return "Tuple";
});
$p.f = (function() {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($m_s_Predef$().lx(this.L), "(", ",", ")");
});
$p.g = (function() {
  return $m_s_util_hashing_MurmurHash3$().jM(this, (-889275714), null);
});
function $isArrayOf_sr_TupleXXL(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ax)));
}
var $d_sr_TupleXXL = new $TypeData().i($c_sr_TupleXXL, "scala.runtime.TupleXXL", ({
  ax: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sjs_js_Any$() {
}
$p = $c_sjs_js_Any$.prototype = new $h_O();
$p.constructor = $c_sjs_js_Any$;
/** @constructor */
function $h_sjs_js_Any$() {
}
$h_sjs_js_Any$.prototype = $p;
$p.eN = (function(f) {
  return ((arg1$2) => f.l(arg1$2));
});
var $d_sjs_js_Any$ = new $TypeData().i($c_sjs_js_Any$, "scala.scalajs.js.Any$", ({
  cx: 1,
  cB: 1,
  cC: 1
}));
var $n_sjs_js_Any$;
function $m_sjs_js_Any$() {
  if ((!$n_sjs_js_Any$)) {
    $n_sjs_js_Any$ = new $c_sjs_js_Any$();
  }
  return $n_sjs_js_Any$;
}
var $b_Ltrivalibs_bufferdata_BufferView;
function $a_Ltrivalibs_bufferdata_BufferView() {
  if ((!$b_Ltrivalibs_bufferdata_BufferView)) {
    $b_Ltrivalibs_bufferdata_BufferView = class $b_Ltrivalibs_bufferdata_BufferView extends Object {
      constructor(arg, arg$2) {
        var dv = null;
        var off = 0;
        dv = arg;
        off = (arg$2 | 0);
        super();
        Object.defineProperty(this, "dv", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        Object.defineProperty(this, "off", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": 0
        }));
        this.dv = dv;
        this.off = off;
      }
    };
  }
  return $b_Ltrivalibs_bufferdata_BufferView;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2.prototype = new $h_s_Conversion();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2() {
}
$h_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2.prototype = $p;
$p.l = (function(x) {
  return x;
});
var $d_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2, "trivalibs.graphics.math.gpu.expr$package$$anon$2", ({
  dN: 1,
  F: 1,
  h: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1.prototype = new $h_s_Conversion();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1.prototype = $p;
$p.l = (function(x) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ix((+x)));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1, "trivalibs.graphics.math.gpu.float_expr$package$$anon$1", ({
  dP: 1,
  F: 1,
  h: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3.prototype = new $h_s_Conversion();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3.prototype = $p;
$p.l = (function(x) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("f32(" + (x | 0)) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3, "trivalibs.graphics.math.gpu.float_expr$package$$anon$3", ({
  dQ: 1,
  F: 1,
  h: 1
}));
var $b_Ltrivalibs_graphics_painter_PanelBinding;
function $a_Ltrivalibs_graphics_painter_PanelBinding() {
  if ((!$b_Ltrivalibs_graphics_painter_PanelBinding)) {
    $b_Ltrivalibs_graphics_painter_PanelBinding = class $b_Ltrivalibs_graphics_painter_PanelBinding extends Object {
      constructor(arg, ...rest) {
        var panel = null;
        var index = 0;
        var mipLevel = 0;
        var depth = false;
        panel = arg;
        index = ((rest[0] === (void 0)) ? 0 : (rest[0] | 0));
        mipLevel = ((rest[1] === (void 0)) ? (-1) : (rest[1] | 0));
        depth = ((rest[2] !== (void 0)) && (!(!rest[2])));
        super();
        Object.defineProperty(this, "panel", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        Object.defineProperty(this, "index", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": 0
        }));
        Object.defineProperty(this, "mipLevel", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": 0
        }));
        Object.defineProperty(this, "depth", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": false
        }));
        this.panel = panel;
        this.index = index;
        this.mipLevel = mipLevel;
        this.depth = depth;
      }
    };
  }
  return $b_Ltrivalibs_graphics_painter_PanelBinding;
}
var $b_Ltrivalibs_graphics_shader_dsl_WgslFnData;
function $a_Ltrivalibs_graphics_shader_dsl_WgslFnData() {
  if ((!$b_Ltrivalibs_graphics_shader_dsl_WgslFnData)) {
    $b_Ltrivalibs_graphics_shader_dsl_WgslFnData = class $b_Ltrivalibs_graphics_shader_dsl_WgslFnData extends Object {
      constructor(arg, arg$2, ...rest) {
        var name = null;
        var src = null;
        var deps = null;
        name = arg;
        src = arg$2;
        deps = ((rest[0] === (void 0)) ? $m_Ltrivalibs_graphics_shader_dsl_WgslFnData$().jq() : rest[0]);
        super();
        Object.defineProperty(this, "name", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        Object.defineProperty(this, "src", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        Object.defineProperty(this, "deps", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        this.name = name;
        this.src = src;
        this.deps = deps;
      }
    };
  }
  return $b_Ltrivalibs_graphics_shader_dsl_WgslFnData;
}
var $d_Ltrivalibs_graphics_shader_dsl_WgslFnData = new $TypeData().i(2, "trivalibs.graphics.shader.dsl.WgslFnData", ({
  ex: 1,
  cD: 1,
  ay: 1
}), ((x) => (x instanceof $a_Ltrivalibs_graphics_shader_dsl_WgslFnData())));
/** @constructor */
function $c_Ljava_io_OutputStream() {
}
$p = $c_Ljava_io_OutputStream.prototype = new $h_O();
$p.constructor = $c_Ljava_io_OutputStream;
/** @constructor */
function $h_Ljava_io_OutputStream() {
}
$h_Ljava_io_OutputStream.prototype = $p;
class $c_jl_AssertionError extends $c_jl_Error {
  constructor(detailMessage) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ("" + detailMessage), ((detailMessage instanceof $c_jl_Throwable) ? detailMessage : null), true, true);
  }
}
var $d_jl_AssertionError = new $TypeData().i($c_jl_AssertionError, "java.lang.AssertionError", ({
  aM: 1,
  aS: 1,
  f: 1,
  a: 1
}));
function $f_jl_Boolean__hashCode__I($thiz) {
  return ($thiz ? 1231 : 1237);
}
function $f_jl_Boolean__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Boolean = new $TypeData().i(0, "java.lang.Boolean", ({
  aN: 1,
  a: 1,
  i: 1,
  g: 1
}), ((x) => ((typeof x) === "boolean")));
function $f_jl_Character__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Character__toString__T($thiz) {
  return ("" + $cToS($thiz));
}
var $d_jl_Character = new $TypeData().i(0, "java.lang.Character", ({
  aP: 1,
  a: 1,
  i: 1,
  g: 1
}), ((x) => (x instanceof $Char)));
class $c_jl_RuntimeException extends $c_jl_Exception {
}
/** @constructor */
function $c_jl_StringBuilder() {
  this.u = null;
  this.u = "";
}
$p = $c_jl_StringBuilder.prototype = new $h_O();
$p.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
}
$h_jl_StringBuilder.prototype = $p;
$p.f = (function() {
  return this.u;
});
$p.t = (function() {
  return this.u.length;
});
$p.it = (function(index) {
  return this.u.charCodeAt(index);
});
var $d_jl_StringBuilder = new $TypeData().i($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  b2: 1,
  E: 1,
  V: 1,
  a: 1
}));
/** @constructor */
function $c_sc_AbstractIterator() {
}
$p = $c_sc_AbstractIterator.prototype = new $h_O();
$p.constructor = $c_sc_AbstractIterator;
/** @constructor */
function $h_sc_AbstractIterator() {
}
$h_sc_AbstractIterator.prototype = $p;
$p.K = (function() {
  return (-1);
});
$p.iv = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.gY = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.F = (function() {
  return this;
});
$p.f = (function() {
  return "<iterator>";
});
function $isArrayOf_s_util_CommandLineParser$ParseError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cJ)));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$.prototype = $p;
$p.eQ = (function(m) {
  return m.gl;
});
$p.eR = (function(m) {
  return m.gm;
});
$p.eS = (function(m) {
  return m.gn;
});
$p.eT = (function(m) {
  return m.go;
});
$p.eU = (function(m) {
  return m.gp;
});
$p.eV = (function(m) {
  return m.gq;
});
$p.eW = (function(m) {
  return m.gr;
});
$p.eX = (function(m) {
  return m.gs;
});
$p.eY = (function(m) {
  return m.gt;
});
$p.eZ = (function(m) {
  return m.gu;
});
$p.f0 = (function(m) {
  return m.gv;
});
$p.f1 = (function(m) {
  return m.gw;
});
$p.f2 = (function(m) {
  return m.gx;
});
$p.f3 = (function(m) {
  return m.gy;
});
$p.f4 = (function(m) {
  return m.gz;
});
$p.f5 = (function(m) {
  return m.gA;
});
$p.iF = (function(m, v) {
  m.gl = v;
});
$p.iG = (function(m, v) {
  m.gm = v;
});
$p.iH = (function(m, v) {
  m.gn = v;
});
$p.iI = (function(m, v) {
  m.go = v;
});
$p.iJ = (function(m, v) {
  m.gp = v;
});
$p.iK = (function(m, v) {
  m.gq = v;
});
$p.iL = (function(m, v) {
  m.gr = v;
});
$p.iM = (function(m, v) {
  m.gs = v;
});
$p.iN = (function(m, v) {
  m.gt = v;
});
$p.iO = (function(m, v) {
  m.gu = v;
});
$p.iP = (function(m, v) {
  m.gv = v;
});
$p.iQ = (function(m, v) {
  m.gw = v;
});
$p.iR = (function(m, v) {
  m.gx = v;
});
$p.iS = (function(m, v) {
  m.gy = v;
});
$p.iT = (function(m, v) {
  m.gz = v;
});
$p.iU = (function(m, v) {
  m.gA = v;
});
var $d_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$, "trivalibs.graphics.math.cpu.Mat4$given_Mat4Mutable_Mat4$", ({
  dv: 1,
  R: 1,
  aE: 1,
  aF: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$;
function $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$)) {
    $n_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$ = new $c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$() {
}
$h_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$, "trivalibs.graphics.math.cpu.Quat$given_Vec4Mutable_Quat$", ({
  dz: 1,
  aH: 1,
  dq: 1,
  ds: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$;
function $m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$)) {
    $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$ = new $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$, "trivalibs.graphics.math.cpu.Vec3$given_Vec3Mutable_Vec3$", ({
  dE: 1,
  aG: 1,
  dl: 1,
  dp: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$;
function $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$)) {
    $n_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$ = new $c_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$() {
}
$h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$.prototype = $p;
$p.kl = (function(m) {
  var offset$proxy1 = (m.off | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy1, true));
});
$p.kn = (function(m) {
  var offset$proxy2 = ((4 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy2, true));
});
$p.kp = (function(m) {
  var offset$proxy3 = ((8 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy3, true));
});
$p.kr = (function(m) {
  var offset$proxy4 = ((12 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy4, true));
});
$p.kt = (function(m) {
  var offset$proxy5 = ((16 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy5, true));
});
$p.kv = (function(m) {
  var offset$proxy6 = ((20 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy6, true));
});
$p.kx = (function(m) {
  var offset$proxy7 = ((24 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy7, true));
});
$p.kz = (function(m) {
  var offset$proxy8 = ((28 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy8, true));
});
$p.kB = (function(m) {
  var offset$proxy9 = ((32 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy9, true));
});
$p.kD = (function(m) {
  var offset$proxy10 = ((36 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy10, true));
});
$p.kF = (function(m) {
  var offset$proxy11 = ((40 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy11, true));
});
$p.kH = (function(m) {
  var offset$proxy12 = ((44 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy12, true));
});
$p.kJ = (function(m) {
  var offset$proxy13 = ((48 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy13, true));
});
$p.kL = (function(m) {
  var offset$proxy14 = ((52 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy14, true));
});
$p.kN = (function(m) {
  var offset$proxy15 = ((56 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy15, true));
});
$p.kP = (function(m) {
  var offset$proxy16 = ((60 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy16, true));
});
$p.km = (function(m, v) {
  var value$proxy1 = Math.fround(v);
  var offset$proxy17 = (m.off | 0);
  m.dv.setFloat32(offset$proxy17, value$proxy1, true);
});
$p.ko = (function(m, v) {
  var value$proxy2 = Math.fround(v);
  var offset$proxy18 = ((4 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy18, value$proxy2, true);
});
$p.kq = (function(m, v) {
  var value$proxy3 = Math.fround(v);
  var offset$proxy19 = ((8 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy19, value$proxy3, true);
});
$p.ks = (function(m, v) {
  var value$proxy4 = Math.fround(v);
  var offset$proxy20 = ((12 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy20, value$proxy4, true);
});
$p.ku = (function(m, v) {
  var value$proxy5 = Math.fround(v);
  var offset$proxy21 = ((16 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy21, value$proxy5, true);
});
$p.kw = (function(m, v) {
  var value$proxy6 = Math.fround(v);
  var offset$proxy22 = ((20 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy22, value$proxy6, true);
});
$p.ky = (function(m, v) {
  var value$proxy7 = Math.fround(v);
  var offset$proxy23 = ((24 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy23, value$proxy7, true);
});
$p.kA = (function(m, v) {
  var value$proxy8 = Math.fround(v);
  var offset$proxy24 = ((28 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy24, value$proxy8, true);
});
$p.kC = (function(m, v) {
  var value$proxy9 = Math.fround(v);
  var offset$proxy25 = ((32 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy25, value$proxy9, true);
});
$p.kE = (function(m, v) {
  var value$proxy10 = Math.fround(v);
  var offset$proxy26 = ((36 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy26, value$proxy10, true);
});
$p.kG = (function(m, v) {
  var value$proxy11 = Math.fround(v);
  var offset$proxy27 = ((40 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy27, value$proxy11, true);
});
$p.kI = (function(m, v) {
  var value$proxy12 = Math.fround(v);
  var offset$proxy28 = ((44 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy28, value$proxy12, true);
});
$p.kK = (function(m, v) {
  var value$proxy13 = Math.fround(v);
  var offset$proxy29 = ((48 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy29, value$proxy13, true);
});
$p.kM = (function(m, v) {
  var value$proxy14 = Math.fround(v);
  var offset$proxy30 = ((52 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy30, value$proxy14, true);
});
$p.kO = (function(m, v) {
  var value$proxy15 = Math.fround(v);
  var offset$proxy31 = ((56 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy31, value$proxy15, true);
});
$p.kQ = (function(m, v) {
  var value$proxy16 = Math.fround(v);
  var offset$proxy32 = ((60 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy32, value$proxy16, true);
});
$p.eQ = (function(m) {
  return this.kl(m);
});
$p.eR = (function(m) {
  return this.kn(m);
});
$p.eS = (function(m) {
  return this.kp(m);
});
$p.eT = (function(m) {
  return this.kr(m);
});
$p.eU = (function(m) {
  return this.kt(m);
});
$p.eV = (function(m) {
  return this.kv(m);
});
$p.eW = (function(m) {
  return this.kx(m);
});
$p.eX = (function(m) {
  return this.kz(m);
});
$p.eY = (function(m) {
  return this.kB(m);
});
$p.eZ = (function(m) {
  return this.kD(m);
});
$p.f0 = (function(m) {
  return this.kF(m);
});
$p.f1 = (function(m) {
  return this.kH(m);
});
$p.f2 = (function(m) {
  return this.kJ(m);
});
$p.f3 = (function(m) {
  return this.kL(m);
});
$p.f4 = (function(m) {
  return this.kN(m);
});
$p.f5 = (function(m) {
  return this.kP(m);
});
$p.iF = (function(m, v) {
  this.km(m, v);
});
$p.iG = (function(m, v) {
  this.ko(m, v);
});
$p.iH = (function(m, v) {
  this.kq(m, v);
});
$p.iI = (function(m, v) {
  this.ks(m, v);
});
$p.iJ = (function(m, v) {
  this.ku(m, v);
});
$p.iK = (function(m, v) {
  this.kw(m, v);
});
$p.iL = (function(m, v) {
  this.ky(m, v);
});
$p.iM = (function(m, v) {
  this.kA(m, v);
});
$p.iN = (function(m, v) {
  this.kC(m, v);
});
$p.iO = (function(m, v) {
  this.kE(m, v);
});
$p.iP = (function(m, v) {
  this.kG(m, v);
});
$p.iQ = (function(m, v) {
  this.kI(m, v);
});
$p.iR = (function(m, v) {
  this.kK(m, v);
});
$p.iS = (function(m, v) {
  this.kM(m, v);
});
$p.iT = (function(m, v) {
  this.kO(m, v);
});
$p.iU = (function(m, v) {
  this.kQ(m, v);
});
var $d_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$, "trivalibs.graphics.math.cpu.mat4$package$Mat4Buffer$given_Mat4Mutable_StructRef$", ({
  dH: 1,
  R: 1,
  aE: 1,
  aF: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$;
function $m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$)) {
    $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$ = new $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$;
}
function $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T($thiz, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, uniformDecls, vertexBody, fragmentBody, fragBuiltinParams) {
  var f$proxy1 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildVertexMain__T__T($thiz, vertexBody);
  var g$proxy1 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildFragmentMain__T__T__T($thiz, fragmentBody, fragBuiltinParams);
  var all = [vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, uniformDecls, $thiz.gN, f$proxy1, g$proxy1];
  var parts = [];
  var i = 0;
  while ((i < (all.length | 0))) {
    if ((all[i].length > 0)) {
      parts.push(all[i]);
    }
    i = ((1 + i) | 0);
  }
  return parts.join("\n\n");
}
function $p_Ltrivalibs_graphics_shader_ShaderDef__buildVertexMain__T__T($thiz, body) {
  return (("@vertex\nfn vs_main(in: VertexInput) -> VertexOutput {\n  var out: VertexOutput;\n" + body) + "\n  return out;\n}");
}
function $p_Ltrivalibs_graphics_shader_ShaderDef__buildFragmentMain__T__T__T($thiz, body, builtinParams) {
  return (((("@fragment\nfn fs_main(in: VertexOutput" + builtinParams) + ") -> FragmentOutput {\n  var out: FragmentOutput;\n") + body) + "\n  return out;\n}");
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_ShaderDef(vertexBody, fragmentBody, helperFns) {
  this.g1 = null;
  this.g0 = null;
  this.gN = null;
  this.g1 = vertexBody;
  this.g0 = fragmentBody;
  this.gN = helperFns;
}
$p = $c_Ltrivalibs_graphics_shader_ShaderDef.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_ShaderDef;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_ShaderDef() {
}
$h_Ltrivalibs_graphics_shader_ShaderDef.prototype = $p;
$p.k = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.g = (function() {
  return $m_s_util_hashing_MurmurHash3$().p(this, (-1488826029), true);
});
$p.f = (function() {
  return $m_sr_ScalaRunTime$().ju(this);
});
$p.h = (function() {
  return 3;
});
$p.j = (function() {
  return "ShaderDef";
});
$p.e = (function(n) {
  switch (n) {
    case 0: {
      return this.g1;
      break;
    }
    case 1: {
      return this.g0;
      break;
    }
    case 2: {
      return this.gN;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException(("" + n));
    }
  }
});
var $d_Ltrivalibs_graphics_shader_ShaderDef = new $TypeData().i($c_Ltrivalibs_graphics_shader_ShaderDef, "trivalibs.graphics.shader.ShaderDef", ({
  ej: 1,
  b: 1,
  c: 1,
  a: 1
}));
function $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__($thiz, out) {
  return $thiz;
}
/** @constructor */
function $c_Ljava_io_FilterOutputStream() {
}
$p = $c_Ljava_io_FilterOutputStream.prototype = new $h_Ljava_io_OutputStream();
$p.constructor = $c_Ljava_io_FilterOutputStream;
/** @constructor */
function $h_Ljava_io_FilterOutputStream() {
}
$h_Ljava_io_FilterOutputStream.prototype = $p;
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ArithmeticException = new $TypeData().i($c_jl_ArithmeticException, "java.lang.ArithmeticException", ({
  aL: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
function $f_jl_Byte__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Byte__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Byte = new $TypeData().i(0, "java.lang.Byte", ({
  aO: 1,
  q: 1,
  a: 1,
  i: 1,
  g: 1
}), ((x) => $isByte(x)));
function $ct_jl_IllegalArgumentException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_IllegalArgumentException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
class $c_jl_IllegalArgumentException extends $c_jl_RuntimeException {
}
var $d_jl_IllegalArgumentException = new $TypeData().i($c_jl_IllegalArgumentException, "java.lang.IllegalArgumentException", ({
  aU: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_IndexOutOfBoundsException = new $TypeData().i($c_jl_IndexOutOfBoundsException, "java.lang.IndexOutOfBoundsException", ({
  aV: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream$DummyOutputStream() {
}
$p = $c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype = new $h_Ljava_io_OutputStream();
$p.constructor = $c_jl_JSConsoleBasedPrintStream$DummyOutputStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream$DummyOutputStream() {
}
$h_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype = $p;
var $d_jl_JSConsoleBasedPrintStream$DummyOutputStream = new $TypeData().i($c_jl_JSConsoleBasedPrintStream$DummyOutputStream, "java.lang.JSConsoleBasedPrintStream$DummyOutputStream", ({
  aY: 1,
  U: 1,
  S: 1,
  W: 1,
  T: 1
}));
class $c_jl_NullPointerException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
var $d_jl_NullPointerException = new $TypeData().i($c_jl_NullPointerException, "java.lang.NullPointerException", ({
  aZ: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
function $f_jl_Short__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Short__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Short = new $TypeData().i(0, "java.lang.Short", ({
  b0: 1,
  q: 1,
  a: 1,
  i: 1,
  g: 1
}), ((x) => $isShort(x)));
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_UnsupportedOperationException = new $TypeData().i($c_jl_UnsupportedOperationException, "java.lang.UnsupportedOperationException", ({
  b4: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_ju_NoSuchElementException = new $TypeData().i($c_ju_NoSuchElementException, "java.util.NoSuchElementException", ({
  b7: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
function $p_s_MatchError__objString__T($thiz) {
  if ((!$thiz.hg)) {
    if (($thiz.f7 === null)) {
      var $x_1 = "null";
    } else {
      var this$1 = $thiz.f7;
      var cls = $objectGetClass(this$1);
      var ofClass = ((cls === null) ? "of a JS class" : ("of class " + cls.ge.N));
      try {
        var $x_1 = ((($thiz.f7 + " (") + ofClass) + ")");
      } catch (e) {
        var $x_1 = ("an instance " + ofClass);
      }
    }
    $thiz.hf = $x_1;
    $thiz.hg = true;
  }
  return $thiz.hf;
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.f7 = null;
    this.hf = null;
    this.hg = false;
    this.f7 = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  gb() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().i($c_s_MatchError, "scala.MatchError", ({
  bd: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.aF = 0;
  this.hi = 0;
  this.hh = null;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.hh = outer;
  this.aF = 0;
  this.hi = outer.h();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $p;
$p.z = (function() {
  return (this.aF < this.hi);
});
$p.w = (function() {
  var result = this.hh.e(this.aF);
  this.aF = ((1 + this.aF) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().i($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  bf: 1,
  y: 1,
  d: 1,
  e: 1,
  A: 1
}));
/** @constructor */
function $c_T1(_1) {
  this.f8 = null;
  this.f8 = _1;
}
$p = $c_T1.prototype = new $h_O();
$p.constructor = $c_T1;
/** @constructor */
function $h_T1() {
}
$h_T1.prototype = $p;
$p.h = (function() {
  return 1;
});
$p.e = (function(n) {
  return $f_s_Product1__productElement__I__O(this, n);
});
$p.f = (function() {
  return (("(" + this.f8) + ")");
});
$p.j = (function() {
  return "Tuple1";
});
$p.k = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.g = (function() {
  return $m_s_util_hashing_MurmurHash3$().p(this, 1228477340, true);
});
function $isArrayOf_T1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.Z)));
}
var $d_T1 = new $TypeData().i($c_T1, "scala.Tuple1", ({
  Z: 1,
  bg: 1,
  c: 1,
  b: 1,
  a: 1
}));
/** @constructor */
function $c_T10(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10) {
  this.f9 = null;
  this.aH = null;
  this.aI = null;
  this.aJ = null;
  this.aK = null;
  this.aL = null;
  this.aM = null;
  this.aN = null;
  this.aO = null;
  this.aG = null;
  this.f9 = _1;
  this.aH = _2;
  this.aI = _3;
  this.aJ = _4;
  this.aK = _5;
  this.aL = _6;
  this.aM = _7;
  this.aN = _8;
  this.aO = _9;
  this.aG = _10;
}
$p = $c_T10.prototype = new $h_O();
$p.constructor = $c_T10;
/** @constructor */
function $h_T10() {
}
$h_T10.prototype = $p;
$p.k = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.h = (function() {
  return 10;
});
$p.e = (function(n) {
  return $f_s_Product10__productElement__I__O(this, n);
});
$p.g = (function() {
  return $m_s_util_hashing_MurmurHash3$().p(this, 2104595240, true);
});
$p.j = (function() {
  return "Tuple10";
});
$p.f = (function() {
  return (((((((((((((((((((("(" + this.f9) + ",") + this.aH) + ",") + this.aI) + ",") + this.aJ) + ",") + this.aK) + ",") + this.aL) + ",") + this.aM) + ",") + this.aN) + ",") + this.aO) + ",") + this.aG) + ")");
});
function $isArrayOf_T10(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a0)));
}
var $d_T10 = new $TypeData().i($c_T10, "scala.Tuple10", ({
  a0: 1,
  b: 1,
  c: 1,
  bh: 1,
  a: 1
}));
/** @constructor */
function $c_T11(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11) {
  this.fa = null;
  this.aR = null;
  this.aS = null;
  this.aT = null;
  this.aU = null;
  this.aV = null;
  this.aW = null;
  this.aX = null;
  this.aY = null;
  this.aP = null;
  this.aQ = null;
  this.fa = _1;
  this.aR = _2;
  this.aS = _3;
  this.aT = _4;
  this.aU = _5;
  this.aV = _6;
  this.aW = _7;
  this.aX = _8;
  this.aY = _9;
  this.aP = _10;
  this.aQ = _11;
}
$p = $c_T11.prototype = new $h_O();
$p.constructor = $c_T11;
/** @constructor */
function $h_T11() {
}
$h_T11.prototype = $p;
$p.k = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.h = (function() {
  return 11;
});
$p.e = (function(n) {
  return $f_s_Product11__productElement__I__O(this, n);
});
$p.g = (function() {
  return $m_s_util_hashing_MurmurHash3$().p(this, 838406606, true);
});
$p.j = (function() {
  return "Tuple11";
});
$p.f = (function() {
  return (((((((((((((((((((((("(" + this.fa) + ",") + this.aR) + ",") + this.aS) + ",") + this.aT) + ",") + this.aU) + ",") + this.aV) + ",") + this.aW) + ",") + this.aX) + ",") + this.aY) + ",") + this.aP) + ",") + this.aQ) + ")");
});
function $isArrayOf_T11(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a1)));
}
var $d_T11 = new $TypeData().i($c_T11, "scala.Tuple11", ({
  a1: 1,
  b: 1,
  c: 1,
  bi: 1,
  a: 1
}));
/** @constructor */
function $c_T12(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12) {
  this.fb = null;
  this.b2 = null;
  this.b3 = null;
  this.b4 = null;
  this.b5 = null;
  this.b6 = null;
  this.b7 = null;
  this.b8 = null;
  this.b9 = null;
  this.aZ = null;
  this.b0 = null;
  this.b1 = null;
  this.fb = _1;
  this.b2 = _2;
  this.b3 = _3;
  this.b4 = _4;
  this.b5 = _5;
  this.b6 = _6;
  this.b7 = _7;
  this.b8 = _8;
  this.b9 = _9;
  this.aZ = _10;
  this.b0 = _11;
  this.b1 = _12;
}
$p = $c_T12.prototype = new $h_O();
$p.constructor = $c_T12;
/** @constructor */
function $h_T12() {
}
$h_T12.prototype = $p;
$p.k = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.h = (function() {
  return 12;
});
$p.e = (function(n) {
  return $f_s_Product12__productElement__I__O(this, n);
});
$p.g = (function() {
  return $m_s_util_hashing_MurmurHash3$().p(this, (-1964145863), true);
});
$p.j = (function() {
  return "Tuple12";
});
$p.f = (function() {
  return (((((((((((((((((((((((("(" + this.fb) + ",") + this.b2) + ",") + this.b3) + ",") + this.b4) + ",") + this.b5) + ",") + this.b6) + ",") + this.b7) + ",") + this.b8) + ",") + this.b9) + ",") + this.aZ) + ",") + this.b0) + ",") + this.b1) + ")");
});
function $isArrayOf_T12(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a2)));
}
var $d_T12 = new $TypeData().i($c_T12, "scala.Tuple12", ({
  a2: 1,
  b: 1,
  c: 1,
  bj: 1,
  a: 1
}));
/** @constructor */
function $c_T13(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13) {
  this.fc = null;
  this.be = null;
  this.bf = null;
  this.bg = null;
  this.bh = null;
  this.bi = null;
  this.bj = null;
  this.bk = null;
  this.bl = null;
  this.ba = null;
  this.bb = null;
  this.bc = null;
  this.bd = null;
  this.fc = _1;
  this.be = _2;
  this.bf = _3;
  this.bg = _4;
  this.bh = _5;
  this.bi = _6;
  this.bj = _7;
  this.bk = _8;
  this.bl = _9;
  this.ba = _10;
  this.bb = _11;
  this.bc = _12;
  this.bd = _13;
}
$p = $c_T13.prototype = new $h_O();
$p.constructor = $c_T13;
/** @constructor */
function $h_T13() {
}
$h_T13.prototype = $p;
$p.k = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.h = (function() {
  return 13;
});
$p.e = (function(n) {
  return $f_s_Product13__productElement__I__O(this, n);
});
$p.g = (function() {
  return $m_s_util_hashing_MurmurHash3$().p(this, 1224168367, true);
});
$p.j = (function() {
  return "Tuple13";
});
$p.f = (function() {
  return (((((((((((((((((((((((((("(" + this.fc) + ",") + this.be) + ",") + this.bf) + ",") + this.bg) + ",") + this.bh) + ",") + this.bi) + ",") + this.bj) + ",") + this.bk) + ",") + this.bl) + ",") + this.ba) + ",") + this.bb) + ",") + this.bc) + ",") + this.bd) + ")");
});
function $isArrayOf_T13(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a3)));
}
var $d_T13 = new $TypeData().i($c_T13, "scala.Tuple13", ({
  a3: 1,
  b: 1,
  c: 1,
  bk: 1,
  a: 1
}));
/** @constructor */
function $c_T14(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14) {
  this.fd = null;
  this.br = null;
  this.bs = null;
  this.bt = null;
  this.bu = null;
  this.bv = null;
  this.bw = null;
  this.bx = null;
  this.by = null;
  this.bm = null;
  this.bn = null;
  this.bo = null;
  this.bp = null;
  this.bq = null;
  this.fd = _1;
  this.br = _2;
  this.bs = _3;
  this.bt = _4;
  this.bu = _5;
  this.bv = _6;
  this.bw = _7;
  this.bx = _8;
  this.by = _9;
  this.bm = _10;
  this.bn = _11;
  this.bo = _12;
  this.bp = _13;
  this.bq = _14;
}
$p = $c_T14.prototype = new $h_O();
$p.constructor = $c_T14;
/** @constructor */
function $h_T14() {
}
$h_T14.prototype = $p;
$p.k = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.h = (function() {
  return 14;
});
$p.e = (function(n) {
  return $f_s_Product14__productElement__I__O(this, n);
});
$p.g = (function() {
  return $m_s_util_hashing_MurmurHash3$().p(this, 147759069, true);
});
$p.j = (function() {
  return "Tuple14";
});
$p.f = (function() {
  return (((((((((((((((((((((((((((("(" + this.fd) + ",") + this.br) + ",") + this.bs) + ",") + this.bt) + ",") + this.bu) + ",") + this.bv) + ",") + this.bw) + ",") + this.bx) + ",") + this.by) + ",") + this.bm) + ",") + this.bn) + ",") + this.bo) + ",") + this.bp) + ",") + this.bq) + ")");
});
function $isArrayOf_T14(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a4)));
}
var $d_T14 = new $TypeData().i($c_T14, "scala.Tuple14", ({
  a4: 1,
  b: 1,
  c: 1,
  bl: 1,
  a: 1
}));
/** @constructor */
function $c_T15(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15) {
  this.fe = null;
  this.bF = null;
  this.bG = null;
  this.bH = null;
  this.bI = null;
  this.bJ = null;
  this.bK = null;
  this.bL = null;
  this.bM = null;
  this.bz = null;
  this.bA = null;
  this.bB = null;
  this.bC = null;
  this.bD = null;
  this.bE = null;
  this.fe = _1;
  this.bF = _2;
  this.bG = _3;
  this.bH = _4;
  this.bI = _5;
  this.bJ = _6;
  this.bK = _7;
  this.bL = _8;
  this.bM = _9;
  this.bz = _10;
  this.bA = _11;
  this.bB = _12;
  this.bC = _13;
  this.bD = _14;
  this.bE = _15;
}
$p = $c_T15.prototype = new $h_O();
$p.constructor = $c_T15;
/** @constructor */
function $h_T15() {
}
$h_T15.prototype = $p;
$p.k = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.h = (function() {
  return 15;
});
$p.e = (function(n) {
  return $f_s_Product15__productElement__I__O(this, n);
});
$p.g = (function() {
  return $m_s_util_hashing_MurmurHash3$().p(this, 1834180931, true);
});
$p.j = (function() {
  return "Tuple15";
});
$p.f = (function() {
  return (((((((((((((((((((((((((((((("(" + this.fe) + ",") + this.bF) + ",") + this.bG) + ",") + this.bH) + ",") + this.bI) + ",") + this.bJ) + ",") + this.bK) + ",") + this.bL) + ",") + this.bM) + ",") + this.bz) + ",") + this.bA) + ",") + this.bB) + ",") + this.bC) + ",") + this.bD) + ",") + this.bE) + ")");
});
function $isArrayOf_T15(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a5)));
}
var $d_T15 = new $TypeData().i($c_T15, "scala.Tuple15", ({
  a5: 1,
  b: 1,
  c: 1,
  bm: 1,
  a: 1
}));
/** @constructor */
function $c_T16(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16) {
  this.ff = null;
  this.bU = null;
  this.bV = null;
  this.bW = null;
  this.bX = null;
  this.bY = null;
  this.bZ = null;
  this.c0 = null;
  this.c1 = null;
  this.bN = null;
  this.bO = null;
  this.bP = null;
  this.bQ = null;
  this.bR = null;
  this.bS = null;
  this.bT = null;
  this.ff = _1;
  this.bU = _2;
  this.bV = _3;
  this.bW = _4;
  this.bX = _5;
  this.bY = _6;
  this.bZ = _7;
  this.c0 = _8;
  this.c1 = _9;
  this.bN = _10;
  this.bO = _11;
  this.bP = _12;
  this.bQ = _13;
  this.bR = _14;
  this.bS = _15;
  this.bT = _16;
}
$p = $c_T16.prototype = new $h_O();
$p.constructor = $c_T16;
/** @constructor */
function $h_T16() {
}
$h_T16.prototype = $p;
$p.k = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.h = (function() {
  return 16;
});
$p.e = (function(n) {
  return $f_s_Product16__productElement__I__O(this, n);
});
$p.g = (function() {
  return $m_s_util_hashing_MurmurHash3$().p(this, 499793902, true);
});
$p.j = (function() {
  return "Tuple16";
});
$p.f = (function() {
  return (((((((((((((((((((((((((((((((("(" + this.ff) + ",") + this.bU) + ",") + this.bV) + ",") + this.bW) + ",") + this.bX) + ",") + this.bY) + ",") + this.bZ) + ",") + this.c0) + ",") + this.c1) + ",") + this.bN) + ",") + this.bO) + ",") + this.bP) + ",") + this.bQ) + ",") + this.bR) + ",") + this.bS) + ",") + this.bT) + ")");
});
function $isArrayOf_T16(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a6)));
}
var $d_T16 = new $TypeData().i($c_T16, "scala.Tuple16", ({
  a6: 1,
  b: 1,
  c: 1,
  bn: 1,
  a: 1
}));
/** @constructor */
function $c_T17(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17) {
  this.fg = null;
  this.ca = null;
  this.cb = null;
  this.cc = null;
  this.cd = null;
  this.ce = null;
  this.cf = null;
  this.cg = null;
  this.ch = null;
  this.c2 = null;
  this.c3 = null;
  this.c4 = null;
  this.c5 = null;
  this.c6 = null;
  this.c7 = null;
  this.c8 = null;
  this.c9 = null;
  this.fg = _1;
  this.ca = _2;
  this.cb = _3;
  this.cc = _4;
  this.cd = _5;
  this.ce = _6;
  this.cf = _7;
  this.cg = _8;
  this.ch = _9;
  this.c2 = _10;
  this.c3 = _11;
  this.c4 = _12;
  this.c5 = _13;
  this.c6 = _14;
  this.c7 = _15;
  this.c8 = _16;
  this.c9 = _17;
}
$p = $c_T17.prototype = new $h_O();
$p.constructor = $c_T17;
/** @constructor */
function $h_T17() {
}
$h_T17.prototype = $p;
$p.k = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.h = (function() {
  return 17;
});
$p.e = (function(n) {
  return $f_s_Product17__productElement__I__O(this, n);
});
$p.g = (function() {
  return $m_s_util_hashing_MurmurHash3$().p(this, (-934366247), true);
});
$p.j = (function() {
  return "Tuple17";
});
$p.f = (function() {
  return (((((((((((((((((((((((((((((((((("(" + this.fg) + ",") + this.ca) + ",") + this.cb) + ",") + this.cc) + ",") + this.cd) + ",") + this.ce) + ",") + this.cf) + ",") + this.cg) + ",") + this.ch) + ",") + this.c2) + ",") + this.c3) + ",") + this.c4) + ",") + this.c5) + ",") + this.c6) + ",") + this.c7) + ",") + this.c8) + ",") + this.c9) + ")");
});
function $isArrayOf_T17(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a7)));
}
var $d_T17 = new $TypeData().i($c_T17, "scala.Tuple17", ({
  a7: 1,
  b: 1,
  c: 1,
  bo: 1,
  a: 1
}));
/** @constructor */
function $c_T18(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18) {
  this.fh = null;
  this.cr = null;
  this.cs = null;
  this.ct = null;
  this.cu = null;
  this.cv = null;
  this.cw = null;
  this.cx = null;
  this.cy = null;
  this.ci = null;
  this.cj = null;
  this.ck = null;
  this.cl = null;
  this.cm = null;
  this.cn = null;
  this.co = null;
  this.cp = null;
  this.cq = null;
  this.fh = _1;
  this.cr = _2;
  this.cs = _3;
  this.ct = _4;
  this.cu = _5;
  this.cv = _6;
  this.cw = _7;
  this.cx = _8;
  this.cy = _9;
  this.ci = _10;
  this.cj = _11;
  this.ck = _12;
  this.cl = _13;
  this.cm = _14;
  this.cn = _15;
  this.co = _16;
  this.cp = _17;
  this.cq = _18;
}
$p = $c_T18.prototype = new $h_O();
$p.constructor = $c_T18;
/** @constructor */
function $h_T18() {
}
$h_T18.prototype = $p;
$p.k = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.h = (function() {
  return 18;
});
$p.e = (function(n) {
  return $f_s_Product18__productElement__I__O(this, n);
});
$p.g = (function() {
  return $m_s_util_hashing_MurmurHash3$().p(this, (-937041276), true);
});
$p.j = (function() {
  return "Tuple18";
});
$p.f = (function() {
  return (((((((((((((((((((((((((((((((((((("(" + this.fh) + ",") + this.cr) + ",") + this.cs) + ",") + this.ct) + ",") + this.cu) + ",") + this.cv) + ",") + this.cw) + ",") + this.cx) + ",") + this.cy) + ",") + this.ci) + ",") + this.cj) + ",") + this.ck) + ",") + this.cl) + ",") + this.cm) + ",") + this.cn) + ",") + this.co) + ",") + this.cp) + ",") + this.cq) + ")");
});
function $isArrayOf_T18(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a8)));
}
var $d_T18 = new $TypeData().i($c_T18, "scala.Tuple18", ({
  a8: 1,
  b: 1,
  c: 1,
  bp: 1,
  a: 1
}));
/** @constructor */
function $c_T19(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19) {
  this.fi = null;
  this.cJ = null;
  this.cK = null;
  this.cL = null;
  this.cM = null;
  this.cN = null;
  this.cO = null;
  this.cP = null;
  this.cQ = null;
  this.cz = null;
  this.cA = null;
  this.cB = null;
  this.cC = null;
  this.cD = null;
  this.cE = null;
  this.cF = null;
  this.cG = null;
  this.cH = null;
  this.cI = null;
  this.fi = _1;
  this.cJ = _2;
  this.cK = _3;
  this.cL = _4;
  this.cM = _5;
  this.cN = _6;
  this.cO = _7;
  this.cP = _8;
  this.cQ = _9;
  this.cz = _10;
  this.cA = _11;
  this.cB = _12;
  this.cC = _13;
  this.cD = _14;
  this.cE = _15;
  this.cF = _16;
  this.cG = _17;
  this.cH = _18;
  this.cI = _19;
}
$p = $c_T19.prototype = new $h_O();
$p.constructor = $c_T19;
/** @constructor */
function $h_T19() {
}
$h_T19.prototype = $p;
$p.k = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.h = (function() {
  return 19;
});
$p.e = (function(n) {
  return $f_s_Product19__productElement__I__O(this, n);
});
$p.g = (function() {
  return $m_s_util_hashing_MurmurHash3$().p(this, (-1955940499), true);
});
$p.j = (function() {
  return "Tuple19";
});
$p.f = (function() {
  return (((((((((((((((((((((((((((((((((((((("(" + this.fi) + ",") + this.cJ) + ",") + this.cK) + ",") + this.cL) + ",") + this.cM) + ",") + this.cN) + ",") + this.cO) + ",") + this.cP) + ",") + this.cQ) + ",") + this.cz) + ",") + this.cA) + ",") + this.cB) + ",") + this.cC) + ",") + this.cD) + ",") + this.cE) + ",") + this.cF) + ",") + this.cG) + ",") + this.cH) + ",") + this.cI) + ")");
});
function $isArrayOf_T19(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a9)));
}
var $d_T19 = new $TypeData().i($c_T19, "scala.Tuple19", ({
  a9: 1,
  b: 1,
  c: 1,
  bq: 1,
  a: 1
}));
/** @constructor */
function $c_T2(_1, _2) {
  this.V = null;
  this.W = null;
  this.V = _1;
  this.W = _2;
}
$p = $c_T2.prototype = new $h_O();
$p.constructor = $c_T2;
/** @constructor */
function $h_T2() {
}
$h_T2.prototype = $p;
$p.h = (function() {
  return 2;
});
$p.e = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n);
});
$p.f = (function() {
  return (((("(" + this.V) + ",") + this.W) + ")");
});
$p.j = (function() {
  return "Tuple2";
});
$p.k = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.g = (function() {
  return $m_s_util_hashing_MurmurHash3$().p(this, (-116390334), true);
});
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aa)));
}
var $d_T2 = new $TypeData().i($c_T2, "scala.Tuple2", ({
  aa: 1,
  br: 1,
  c: 1,
  b: 1,
  a: 1
}));
/** @constructor */
function $c_T20(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20) {
  this.fj = null;
  this.d1 = null;
  this.d3 = null;
  this.d4 = null;
  this.d5 = null;
  this.d6 = null;
  this.d7 = null;
  this.d8 = null;
  this.d9 = null;
  this.cR = null;
  this.cS = null;
  this.cT = null;
  this.cU = null;
  this.cV = null;
  this.cW = null;
  this.cX = null;
  this.cY = null;
  this.cZ = null;
  this.d0 = null;
  this.d2 = null;
  this.fj = _1;
  this.d1 = _2;
  this.d3 = _3;
  this.d4 = _4;
  this.d5 = _5;
  this.d6 = _6;
  this.d7 = _7;
  this.d8 = _8;
  this.d9 = _9;
  this.cR = _10;
  this.cS = _11;
  this.cT = _12;
  this.cU = _13;
  this.cV = _14;
  this.cW = _15;
  this.cX = _16;
  this.cY = _17;
  this.cZ = _18;
  this.d0 = _19;
  this.d2 = _20;
}
$p = $c_T20.prototype = new $h_O();
$p.constructor = $c_T20;
/** @constructor */
function $h_T20() {
}
$h_T20.prototype = $p;
$p.k = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.h = (function() {
  return 20;
});
$p.e = (function(n) {
  return $f_s_Product20__productElement__I__O(this, n);
});
$p.g = (function() {
  return $m_s_util_hashing_MurmurHash3$().p(this, 1328807075, true);
});
$p.j = (function() {
  return "Tuple20";
});
$p.f = (function() {
  return (((((((((((((((((((((((((((((((((((((((("(" + this.fj) + ",") + this.d1) + ",") + this.d3) + ",") + this.d4) + ",") + this.d5) + ",") + this.d6) + ",") + this.d7) + ",") + this.d8) + ",") + this.d9) + ",") + this.cR) + ",") + this.cS) + ",") + this.cT) + ",") + this.cU) + ",") + this.cV) + ",") + this.cW) + ",") + this.cX) + ",") + this.cY) + ",") + this.cZ) + ",") + this.d0) + ",") + this.d2) + ")");
});
function $isArrayOf_T20(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ab)));
}
var $d_T20 = new $TypeData().i($c_T20, "scala.Tuple20", ({
  ab: 1,
  b: 1,
  c: 1,
  bs: 1,
  a: 1
}));
/** @constructor */
function $c_T21(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21) {
  this.fk = null;
  this.dk = null;
  this.dn = null;
  this.dp = null;
  this.dq = null;
  this.dr = null;
  this.ds = null;
  this.dt = null;
  this.du = null;
  this.da = null;
  this.db = null;
  this.dc = null;
  this.dd = null;
  this.de = null;
  this.df = null;
  this.dg = null;
  this.dh = null;
  this.di = null;
  this.dj = null;
  this.dl = null;
  this.dm = null;
  this.fk = _1;
  this.dk = _2;
  this.dn = _3;
  this.dp = _4;
  this.dq = _5;
  this.dr = _6;
  this.ds = _7;
  this.dt = _8;
  this.du = _9;
  this.da = _10;
  this.db = _11;
  this.dc = _12;
  this.dd = _13;
  this.de = _14;
  this.df = _15;
  this.dg = _16;
  this.dh = _17;
  this.di = _18;
  this.dj = _19;
  this.dl = _20;
  this.dm = _21;
}
$p = $c_T21.prototype = new $h_O();
$p.constructor = $c_T21;
/** @constructor */
function $h_T21() {
}
$h_T21.prototype = $p;
$p.k = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.h = (function() {
  return 21;
});
$p.e = (function(n) {
  return $f_s_Product21__productElement__I__O(this, n);
});
$p.g = (function() {
  return $m_s_util_hashing_MurmurHash3$().p(this, (-21288119), true);
});
$p.j = (function() {
  return "Tuple21";
});
$p.f = (function() {
  return (((((((((((((((((((((((((((((((((((((((((("(" + this.fk) + ",") + this.dk) + ",") + this.dn) + ",") + this.dp) + ",") + this.dq) + ",") + this.dr) + ",") + this.ds) + ",") + this.dt) + ",") + this.du) + ",") + this.da) + ",") + this.db) + ",") + this.dc) + ",") + this.dd) + ",") + this.de) + ",") + this.df) + ",") + this.dg) + ",") + this.dh) + ",") + this.di) + ",") + this.dj) + ",") + this.dl) + ",") + this.dm) + ")");
});
function $isArrayOf_T21(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ac)));
}
var $d_T21 = new $TypeData().i($c_T21, "scala.Tuple21", ({
  ac: 1,
  b: 1,
  c: 1,
  bt: 1,
  a: 1
}));
/** @constructor */
function $c_T22(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22) {
  this.fl = null;
  this.dF = null;
  this.dJ = null;
  this.dK = null;
  this.dL = null;
  this.dM = null;
  this.dN = null;
  this.dO = null;
  this.dP = null;
  this.dv = null;
  this.dw = null;
  this.dx = null;
  this.dy = null;
  this.dz = null;
  this.dA = null;
  this.dB = null;
  this.dC = null;
  this.dD = null;
  this.dE = null;
  this.dG = null;
  this.dH = null;
  this.dI = null;
  this.fl = _1;
  this.dF = _2;
  this.dJ = _3;
  this.dK = _4;
  this.dL = _5;
  this.dM = _6;
  this.dN = _7;
  this.dO = _8;
  this.dP = _9;
  this.dv = _10;
  this.dw = _11;
  this.dx = _12;
  this.dy = _13;
  this.dz = _14;
  this.dA = _15;
  this.dB = _16;
  this.dC = _17;
  this.dD = _18;
  this.dE = _19;
  this.dG = _20;
  this.dH = _21;
  this.dI = _22;
}
$p = $c_T22.prototype = new $h_O();
$p.constructor = $c_T22;
/** @constructor */
function $h_T22() {
}
$h_T22.prototype = $p;
$p.k = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.h = (function() {
  return 22;
});
$p.e = (function(n) {
  return $f_s_Product22__productElement__I__O(this, n);
});
$p.g = (function() {
  return $m_s_util_hashing_MurmurHash3$().p(this, (-139445068), true);
});
$p.j = (function() {
  return "Tuple22";
});
$p.f = (function() {
  return (((((((((((((((((((((((((((((((((((((((((((("(" + this.fl) + ",") + this.dF) + ",") + this.dJ) + ",") + this.dK) + ",") + this.dL) + ",") + this.dM) + ",") + this.dN) + ",") + this.dO) + ",") + this.dP) + ",") + this.dv) + ",") + this.dw) + ",") + this.dx) + ",") + this.dy) + ",") + this.dz) + ",") + this.dA) + ",") + this.dB) + ",") + this.dC) + ",") + this.dD) + ",") + this.dE) + ",") + this.dG) + ",") + this.dH) + ",") + this.dI) + ")");
});
function $isArrayOf_T22(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ad)));
}
var $d_T22 = new $TypeData().i($c_T22, "scala.Tuple22", ({
  ad: 1,
  b: 1,
  c: 1,
  bu: 1,
  a: 1
}));
/** @constructor */
function $c_T3(_1, _2, _3) {
  this.ag = null;
  this.a2 = null;
  this.a3 = null;
  this.ag = _1;
  this.a2 = _2;
  this.a3 = _3;
}
$p = $c_T3.prototype = new $h_O();
$p.constructor = $c_T3;
/** @constructor */
function $h_T3() {
}
$h_T3.prototype = $p;
$p.k = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.h = (function() {
  return 3;
});
$p.e = (function(n) {
  return $f_s_Product3__productElement__I__O(this, n);
});
$p.g = (function() {
  return $m_s_util_hashing_MurmurHash3$().p(this, (-192629203), true);
});
$p.j = (function() {
  return "Tuple3";
});
$p.f = (function() {
  return (((((("(" + this.ag) + ",") + this.a2) + ",") + this.a3) + ")");
});
function $isArrayOf_T3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ae)));
}
var $d_T3 = new $TypeData().i($c_T3, "scala.Tuple3", ({
  ae: 1,
  b: 1,
  c: 1,
  bv: 1,
  a: 1
}));
/** @constructor */
function $c_T4(_1, _2, _3, _4) {
  this.dQ = null;
  this.ah = null;
  this.ai = null;
  this.aj = null;
  this.dQ = _1;
  this.ah = _2;
  this.ai = _3;
  this.aj = _4;
}
$p = $c_T4.prototype = new $h_O();
$p.constructor = $c_T4;
/** @constructor */
function $h_T4() {
}
$h_T4.prototype = $p;
$p.k = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.h = (function() {
  return 4;
});
$p.e = (function(n) {
  return $f_s_Product4__productElement__I__O(this, n);
});
$p.g = (function() {
  return $m_s_util_hashing_MurmurHash3$().p(this, (-1542739752), true);
});
$p.j = (function() {
  return "Tuple4";
});
$p.f = (function() {
  return (((((((("(" + this.dQ) + ",") + this.ah) + ",") + this.ai) + ",") + this.aj) + ")");
});
function $isArrayOf_T4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.af)));
}
var $d_T4 = new $TypeData().i($c_T4, "scala.Tuple4", ({
  af: 1,
  b: 1,
  c: 1,
  bw: 1,
  a: 1
}));
/** @constructor */
function $c_T5(_1, _2, _3, _4, _5) {
  this.fm = null;
  this.dR = null;
  this.dS = null;
  this.dT = null;
  this.dU = null;
  this.fm = _1;
  this.dR = _2;
  this.dS = _3;
  this.dT = _4;
  this.dU = _5;
}
$p = $c_T5.prototype = new $h_O();
$p.constructor = $c_T5;
/** @constructor */
function $h_T5() {
}
$h_T5.prototype = $p;
$p.k = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.h = (function() {
  return 5;
});
$p.e = (function(n) {
  return $f_s_Product5__productElement__I__O(this, n);
});
$p.g = (function() {
  return $m_s_util_hashing_MurmurHash3$().p(this, 417360321, true);
});
$p.j = (function() {
  return "Tuple5";
});
$p.f = (function() {
  return (((((((((("(" + this.fm) + ",") + this.dR) + ",") + this.dS) + ",") + this.dT) + ",") + this.dU) + ")");
});
function $isArrayOf_T5(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ag)));
}
var $d_T5 = new $TypeData().i($c_T5, "scala.Tuple5", ({
  ag: 1,
  b: 1,
  c: 1,
  bx: 1,
  a: 1
}));
/** @constructor */
function $c_T6(_1, _2, _3, _4, _5, _6) {
  this.fn = null;
  this.dV = null;
  this.dW = null;
  this.dX = null;
  this.dY = null;
  this.dZ = null;
  this.fn = _1;
  this.dV = _2;
  this.dW = _3;
  this.dX = _4;
  this.dY = _5;
  this.dZ = _6;
}
$p = $c_T6.prototype = new $h_O();
$p.constructor = $c_T6;
/** @constructor */
function $h_T6() {
}
$h_T6.prototype = $p;
$p.k = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.h = (function() {
  return 6;
});
$p.e = (function(n) {
  return $f_s_Product6__productElement__I__O(this, n);
});
$p.g = (function() {
  return $m_s_util_hashing_MurmurHash3$().p(this, (-1037607828), true);
});
$p.j = (function() {
  return "Tuple6";
});
$p.f = (function() {
  return (((((((((((("(" + this.fn) + ",") + this.dV) + ",") + this.dW) + ",") + this.dX) + ",") + this.dY) + ",") + this.dZ) + ")");
});
function $isArrayOf_T6(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ah)));
}
var $d_T6 = new $TypeData().i($c_T6, "scala.Tuple6", ({
  ah: 1,
  b: 1,
  c: 1,
  by: 1,
  a: 1
}));
/** @constructor */
function $c_T7(_1, _2, _3, _4, _5, _6, _7) {
  this.fo = null;
  this.e0 = null;
  this.e1 = null;
  this.e2 = null;
  this.e3 = null;
  this.e4 = null;
  this.e5 = null;
  this.fo = _1;
  this.e0 = _2;
  this.e1 = _3;
  this.e2 = _4;
  this.e3 = _5;
  this.e4 = _6;
  this.e5 = _7;
}
$p = $c_T7.prototype = new $h_O();
$p.constructor = $c_T7;
/** @constructor */
function $h_T7() {
}
$h_T7.prototype = $p;
$p.k = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.h = (function() {
  return 7;
});
$p.e = (function(n) {
  return $f_s_Product7__productElement__I__O(this, n);
});
$p.g = (function() {
  return $m_s_util_hashing_MurmurHash3$().p(this, (-1050932777), true);
});
$p.j = (function() {
  return "Tuple7";
});
$p.f = (function() {
  return (((((((((((((("(" + this.fo) + ",") + this.e0) + ",") + this.e1) + ",") + this.e2) + ",") + this.e3) + ",") + this.e4) + ",") + this.e5) + ")");
});
function $isArrayOf_T7(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ai)));
}
var $d_T7 = new $TypeData().i($c_T7, "scala.Tuple7", ({
  ai: 1,
  b: 1,
  c: 1,
  bz: 1,
  a: 1
}));
/** @constructor */
function $c_T8(_1, _2, _3, _4, _5, _6, _7, _8) {
  this.fp = null;
  this.e6 = null;
  this.e7 = null;
  this.e8 = null;
  this.e9 = null;
  this.ea = null;
  this.eb = null;
  this.ec = null;
  this.fp = _1;
  this.e6 = _2;
  this.e7 = _3;
  this.e8 = _4;
  this.e9 = _5;
  this.ea = _6;
  this.eb = _7;
  this.ec = _8;
}
$p = $c_T8.prototype = new $h_O();
$p.constructor = $c_T8;
/** @constructor */
function $h_T8() {
}
$h_T8.prototype = $p;
$p.k = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.h = (function() {
  return 8;
});
$p.e = (function(n) {
  return $f_s_Product8__productElement__I__O(this, n);
});
$p.g = (function() {
  return $m_s_util_hashing_MurmurHash3$().p(this, 1998822530, true);
});
$p.j = (function() {
  return "Tuple8";
});
$p.f = (function() {
  return (((((((((((((((("(" + this.fp) + ",") + this.e6) + ",") + this.e7) + ",") + this.e8) + ",") + this.e9) + ",") + this.ea) + ",") + this.eb) + ",") + this.ec) + ")");
});
function $isArrayOf_T8(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aj)));
}
var $d_T8 = new $TypeData().i($c_T8, "scala.Tuple8", ({
  aj: 1,
  b: 1,
  c: 1,
  bA: 1,
  a: 1
}));
/** @constructor */
function $c_T9(_1, _2, _3, _4, _5, _6, _7, _8, _9) {
  this.fq = null;
  this.ed = null;
  this.ee = null;
  this.ef = null;
  this.eg = null;
  this.eh = null;
  this.ei = null;
  this.ej = null;
  this.ek = null;
  this.fq = _1;
  this.ed = _2;
  this.ee = _3;
  this.ef = _4;
  this.eg = _5;
  this.eh = _6;
  this.ei = _7;
  this.ej = _8;
  this.ek = _9;
}
$p = $c_T9.prototype = new $h_O();
$p.constructor = $c_T9;
/** @constructor */
function $h_T9() {
}
$h_T9.prototype = $p;
$p.k = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.h = (function() {
  return 9;
});
$p.e = (function(n) {
  return $f_s_Product9__productElement__I__O(this, n);
});
$p.g = (function() {
  return $m_s_util_hashing_MurmurHash3$().p(this, (-1807911176), true);
});
$p.j = (function() {
  return "Tuple9";
});
$p.f = (function() {
  return (((((((((((((((((("(" + this.fq) + ",") + this.ed) + ",") + this.ee) + ",") + this.ef) + ",") + this.eg) + ",") + this.eh) + ",") + this.ei) + ",") + this.ej) + ",") + this.ek) + ")");
});
function $isArrayOf_T9(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ak)));
}
var $d_T9 = new $TypeData().i($c_T9, "scala.Tuple9", ({
  ak: 1,
  b: 1,
  c: 1,
  bB: 1,
  a: 1
}));
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.aB() + "("), ", ", ")");
}
/** @constructor */
function $c_sc_Iterator$$anon$19() {
}
$p = $c_sc_Iterator$$anon$19.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$19;
/** @constructor */
function $h_sc_Iterator$$anon$19() {
}
$h_sc_Iterator$$anon$19.prototype = $p;
$p.z = (function() {
  return false;
});
$p.kV = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
});
$p.K = (function() {
  return 0;
});
$p.w = (function() {
  this.kV();
});
var $d_sc_Iterator$$anon$19 = new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  bL: 1,
  y: 1,
  d: 1,
  e: 1,
  A: 1
}));
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw new $c_jl_IndexOutOfBoundsException(("" + n));
  }
  var skipped = $thiz.jS(n);
  if (skipped.eP()) {
    throw new $c_jl_IndexOutOfBoundsException(("" + n));
  }
  return skipped.kb();
}
/** @constructor */
function $c_sci_List$() {
  $n_sci_List$ = this;
  var _1 = $m_sci_Nil$();
  $m_sci_Nil$();
}
$p = $c_sci_List$.prototype = new $h_O();
$p.constructor = $c_sci_List$;
/** @constructor */
function $h_sci_List$() {
}
$h_sci_List$.prototype = $p;
var $d_sci_List$ = new $TypeData().i($c_sci_List$, "scala.collection.immutable.List$", ({
  c0: 1,
  a: 1,
  ao: 1,
  bO: 1,
  bS: 1
}));
var $n_sci_List$;
function $m_sci_List$() {
  if ((!$n_sci_List$)) {
    $n_sci_List$ = new $c_sci_List$();
  }
  return $n_sci_List$;
}
/** @constructor */
function $c_sr_ScalaRunTime$$anon$1(x$1) {
  this.hq = null;
  this.el = 0;
  this.hp = 0;
  this.hq = x$1;
  this.el = 0;
  this.hp = x$1.h();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.z = (function() {
  return (this.el < this.hp);
});
$p.w = (function() {
  var result = this.hq.e(this.el);
  this.el = ((1 + this.el) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().i($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  cu: 1,
  y: 1,
  d: 1,
  e: 1,
  A: 1
}));
function $f_jl_Double__hashCode__I($thiz) {
  var valueInt = ($thiz | 0);
  if (((valueInt === $thiz) && ((1.0 / $thiz) !== (-Infinity)))) {
    return valueInt;
  } else if (($thiz !== $thiz)) {
    return 2146959360;
  } else {
    var fpBitsDataView = $fpBitsDataView;
    fpBitsDataView.setFloat64(0, $thiz, true);
    return ((fpBitsDataView.getInt32(0, true) | 0) ^ (fpBitsDataView.getInt32(4, true) | 0));
  }
}
function $f_jl_Double__toString__T($thiz) {
  return ("" + $thiz);
}
function $isArrayOf_jl_Double(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.X)));
}
var $d_jl_Double = new $TypeData().i(0, "java.lang.Double", ({
  X: 1,
  q: 1,
  a: 1,
  i: 1,
  g: 1,
  w: 1
}), ((x) => ((typeof x) === "number")));
function $f_jl_Float__hashCode__I($thiz) {
  var value = $thiz;
  var valueInt = (value | 0);
  if (((valueInt === value) && ((1.0 / value) !== (-Infinity)))) {
    return valueInt;
  } else if ((value !== value)) {
    return 2146959360;
  } else {
    var fpBitsDataView = $fpBitsDataView;
    fpBitsDataView.setFloat64(0, value, true);
    return ((fpBitsDataView.getInt32(0, true) | 0) ^ (fpBitsDataView.getInt32(4, true) | 0));
  }
}
function $f_jl_Float__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Float = new $TypeData().i(0, "java.lang.Float", ({
  aT: 1,
  q: 1,
  a: 1,
  i: 1,
  g: 1,
  w: 1
}), ((x) => $isFloat(x)));
function $f_jl_Integer__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Integer__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Integer = new $TypeData().i(0, "java.lang.Integer", ({
  aW: 1,
  q: 1,
  a: 1,
  i: 1,
  g: 1,
  w: 1
}), ((x) => $isInt(x)));
function $f_jl_Long__hashCode__I($thiz, $thizhi) {
  return ($thiz ^ $thizhi);
}
function $f_jl_Long__toString__T($thiz, $thizhi) {
  return $m_RTLong$().j4($thiz, $thizhi);
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.Y)));
}
var $d_jl_Long = new $TypeData().i(0, "java.lang.Long", ({
  Y: 1,
  q: 1,
  a: 1,
  i: 1,
  g: 1,
  w: 1
}), ((x) => (x instanceof $Long)));
function $f_T__hashCode__I($thiz) {
  var n = $thiz.length;
  var h = 0;
  var i = 0;
  while ((i !== n)) {
    h = (((((h << 5) - h) | 0) + $thiz.charCodeAt(i)) | 0);
    i = ((1 + i) | 0);
  }
  return h;
}
function $f_T__indexOf__I__I($thiz, ch) {
  var str = $m_jl_Character$().lo(ch);
  return ($thiz.indexOf(str) | 0);
}
function $f_T__toString__T($thiz) {
  return $thiz;
}
var $d_T = new $TypeData().i(0, "java.lang.String", ({
  b1: 1,
  a: 1,
  i: 1,
  E: 1,
  g: 1,
  w: 1
}), ((x) => ((typeof x) === "string")));
/** @constructor */
function $c_sc_AbstractIterable() {
}
$p = $c_sc_AbstractIterable.prototype = new $h_O();
$p.constructor = $c_sc_AbstractIterable;
/** @constructor */
function $h_sc_AbstractIterable() {
}
$h_sc_AbstractIterable.prototype = $p;
$p.ga = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.gY = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.aB = (function() {
  return this.af();
});
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator(xs) {
  this.fr = null;
  this.a4 = 0;
  this.gf = 0;
  this.fr = xs;
  this.a4 = 0;
  this.gf = $m_jl_reflect_Array$().eO(this.fr);
}
$p = $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $p;
$p.K = (function() {
  return ((this.gf - this.a4) | 0);
});
$p.z = (function() {
  return (this.a4 < this.gf);
});
$p.w = (function() {
  if ((this.a4 >= $m_jl_reflect_Array$().eO(this.fr))) {
    $m_sc_Iterator$().ft.w();
  }
  var r = $m_sr_ScalaRunTime$().aA(this.fr, this.a4);
  this.a4 = ((1 + this.a4) | 0);
  return r;
});
var $d_sc_ArrayOps$ArrayIterator = new $TypeData().i($c_sc_ArrayOps$ArrayIterator, "scala.collection.ArrayOps$ArrayIterator", ({
  bF: 1,
  y: 1,
  d: 1,
  e: 1,
  A: 1,
  a: 1
}));
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator(self) {
  this.hj = null;
  this.fs = 0;
  this.ak = 0;
  this.hj = self;
  this.fs = 0;
  this.ak = self.t();
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $p;
$p.K = (function() {
  return this.ak;
});
$p.z = (function() {
  return (this.ak > 0);
});
$p.w = (function() {
  if ((this.ak > 0)) {
    var r = this.hj.v(this.fs);
    this.fs = ((1 + this.fs) | 0);
    this.ak = ((this.ak - 1) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().ft.w();
  }
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  bJ: 1,
  y: 1,
  d: 1,
  e: 1,
  A: 1,
  a: 1
}));
function $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($thiz) {
  if ((!$thiz.hl)) {
    $thiz.hk = new $c_sci_ArraySeq$ofRef(new ($d_sr_Nothing$.r().C)(0));
    $thiz.hl = true;
  }
  return $thiz.hk;
}
/** @constructor */
function $c_sci_ArraySeq$() {
  this.hk = null;
  this.hl = false;
}
$p = $c_sci_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_sci_ArraySeq$;
/** @constructor */
function $h_sci_ArraySeq$() {
}
$h_sci_ArraySeq$.prototype = $p;
var $d_sci_ArraySeq$ = new $TypeData().i($c_sci_ArraySeq$, "scala.collection.immutable.ArraySeq$", ({
  bW: 1,
  a: 1,
  an: 1,
  al: 1,
  am: 1,
  ap: 1
}));
var $n_sci_ArraySeq$;
function $m_sci_ArraySeq$() {
  if ((!$n_sci_ArraySeq$)) {
    $n_sci_ArraySeq$ = new $c_sci_ArraySeq$();
  }
  return $n_sci_ArraySeq$;
}
/** @constructor */
function $c_scm_ArraySeq$() {
  this.hm = null;
  $n_scm_ArraySeq$ = this;
  this.hm = new $c_scm_ArraySeq$ofRef(new $ac_O(0));
}
$p = $c_scm_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_scm_ArraySeq$;
/** @constructor */
function $h_scm_ArraySeq$() {
}
$h_scm_ArraySeq$.prototype = $p;
var $d_scm_ArraySeq$ = new $TypeData().i($c_scm_ArraySeq$, "scala.collection.mutable.ArraySeq$", ({
  c4: 1,
  a: 1,
  an: 1,
  al: 1,
  am: 1,
  ap: 1
}));
var $n_scm_ArraySeq$;
function $m_scm_ArraySeq$() {
  if ((!$n_scm_ArraySeq$)) {
    $n_scm_ArraySeq$ = new $c_scm_ArraySeq$();
  }
  return $n_scm_ArraySeq$;
}
function $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__($thiz, _out, autoFlush, charset) {
  $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__($thiz, _out);
  return $thiz;
}
/** @constructor */
function $c_Ljava_io_PrintStream() {
}
$p = $c_Ljava_io_PrintStream.prototype = new $h_Ljava_io_FilterOutputStream();
$p.constructor = $c_Ljava_io_PrintStream;
/** @constructor */
function $h_Ljava_io_PrintStream() {
}
$h_Ljava_io_PrintStream.prototype = $p;
/** @constructor */
function $c_T$package$EmptyTuple$() {
}
$p = $c_T$package$EmptyTuple$.prototype = new $h_O();
$p.constructor = $c_T$package$EmptyTuple$;
/** @constructor */
function $h_T$package$EmptyTuple$() {
}
$h_T$package$EmptyTuple$.prototype = $p;
$p.k = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.g = (function() {
  return 924202651;
});
$p.h = (function() {
  return 0;
});
$p.j = (function() {
  return "EmptyTuple";
});
$p.e = (function(n) {
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
$p.f = (function() {
  return "()";
});
var $d_T$package$EmptyTuple$ = new $TypeData().i($c_T$package$EmptyTuple$, "scala.Tuple$package$EmptyTuple$", ({
  bC: 1,
  b: 1,
  c: 1,
  a: 1,
  cb: 1,
  cc: 1,
  cd: 1
}));
var $n_T$package$EmptyTuple$;
function $m_T$package$EmptyTuple$() {
  if ((!$n_T$package$EmptyTuple$)) {
    $n_T$package$EmptyTuple$ = new $c_T$package$EmptyTuple$();
  }
  return $n_T$package$EmptyTuple$;
}
function $f_sc_View__toString__T($thiz) {
  return ($thiz.af() + "(<not computed>)");
}
/** @constructor */
function $c_s_reflect_ManifestFactory$ClassTypeManifest() {
}
$p = $c_s_reflect_ManifestFactory$ClassTypeManifest.prototype = new $h_O();
$p.constructor = $c_s_reflect_ManifestFactory$ClassTypeManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ClassTypeManifest() {
}
$h_s_reflect_ManifestFactory$ClassTypeManifest.prototype = $p;
class $c_sjs_js_JavaScriptException extends $c_jl_RuntimeException {
  constructor(exception) {
    super();
    this.em = null;
    this.em = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  gb() {
    return $dp_toString__T(this.em);
  }
  j() {
    return "JavaScriptException";
  }
  h() {
    return 1;
  }
  e(x$1) {
    return ((x$1 === 0) ? this.em : $m_sr_Statics$().kh(x$1));
  }
  k() {
    return new $c_sr_ScalaRunTime$$anon$1(this);
  }
  g() {
    return $m_s_util_hashing_MurmurHash3$().p(this, 1744042595, true);
  }
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.az)));
}
var $d_sjs_js_JavaScriptException = new $TypeData().i($c_sjs_js_JavaScriptException, "scala.scalajs.js.JavaScriptException", ({
  az: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1,
  c: 1,
  b: 1
}));
function $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V($thiz, line) {
  if (((typeof console) !== "undefined")) {
    if (($thiz.hb && (!(!(!(!console.error)))))) {
      console.error(line);
    } else {
      console.log(line);
    }
  }
}
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream(isErr) {
  this.hb = false;
  this.aE = null;
  this.hb = isErr;
  $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__(this, new $c_jl_JSConsoleBasedPrintStream$DummyOutputStream(), false, null);
  this.aE = "";
}
$p = $c_jl_JSConsoleBasedPrintStream.prototype = new $h_Ljava_io_PrintStream();
$p.constructor = $c_jl_JSConsoleBasedPrintStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream() {
}
$h_jl_JSConsoleBasedPrintStream.prototype = $p;
$p.ki = (function(s) {
  var rest = s;
  while ((rest !== "")) {
    var this$1 = rest;
    var nlPos = (this$1.indexOf("\n") | 0);
    if ((nlPos < 0)) {
      this.aE = (("" + this.aE) + rest);
      rest = "";
    } else {
      var $x_1 = this.aE;
      var this$2 = rest;
      $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V(this, (("" + $x_1) + this$2.substring(0, nlPos)));
      this.aE = "";
      var this$3 = rest;
      var beginIndex = ((1 + nlPos) | 0);
      rest = this$3.substring(beginIndex);
    }
  }
});
var $d_jl_JSConsoleBasedPrintStream = new $TypeData().i($c_jl_JSConsoleBasedPrintStream, "java.lang.JSConsoleBasedPrintStream", ({
  aX: 1,
  aK: 1,
  aJ: 1,
  U: 1,
  S: 1,
  W: 1,
  T: 1,
  V: 1
}));
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  var s$tailLocal1 = s;
  var n$tailLocal1 = n;
  while (true) {
    if (((n$tailLocal1 <= 0) || s$tailLocal1.eP())) {
      return s$tailLocal1;
    } else {
      var n$tailLocal1$tmp1 = ((n$tailLocal1 - 1) | 0);
      var s$tailLocal1$tmp1 = s$tailLocal1.lj();
      n$tailLocal1 = n$tailLocal1$tmp1;
      s$tailLocal1 = s$tailLocal1$tmp1;
    }
  }
}
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.gg = null;
}
$p = $c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$p.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $p;
$p.f = (function() {
  return this.gg;
});
$p.g = (function() {
  return $systemIdentityHashCode(this);
});
/** @constructor */
function $c_sc_AbstractView() {
}
$p = $c_sc_AbstractView.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractView;
/** @constructor */
function $h_sc_AbstractView() {
}
$h_sc_AbstractView.prototype = $p;
$p.f = (function() {
  return $f_sc_View__toString__T(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ObjectManifest$() {
  this.gg = null;
  this.gg = "Object";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ObjectManifest$, "scala.reflect.ManifestFactory$ObjectManifest$", ({
  cj: 1,
  ck: 1,
  ci: 1,
  a: 1,
  cl: 1,
  cf: 1,
  b: 1,
  cg: 1,
  ch: 1
}));
var $n_s_reflect_ManifestFactory$ObjectManifest$;
function $m_s_reflect_ManifestFactory$ObjectManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ObjectManifest$)) {
    $n_s_reflect_ManifestFactory$ObjectManifest$ = new $c_s_reflect_ManifestFactory$ObjectManifest$();
  }
  return $n_s_reflect_ManifestFactory$ObjectManifest$;
}
/** @constructor */
function $c_sc_AbstractSeq() {
}
$p = $c_sc_AbstractSeq.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractSeq;
/** @constructor */
function $h_sc_AbstractSeq() {
}
$h_sc_AbstractSeq.prototype = $p;
$p.g = (function() {
  return $m_s_util_hashing_MurmurHash3$().j1(this);
});
$p.f = (function() {
  return $f_sc_Iterable__toString__T(this);
});
/** @constructor */
function $c_sc_AbstractSeqView() {
}
$p = $c_sc_AbstractSeqView.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_AbstractSeqView;
/** @constructor */
function $h_sc_AbstractSeqView() {
}
$h_sc_AbstractSeqView.prototype = $p;
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.l)));
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.l)));
}
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.fu = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.fu = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $p;
$p.v = (function(idx) {
  return this.fu.v(idx);
});
$p.t = (function() {
  return this.fu.t();
});
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.fu = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$p.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $p;
$p.K = (function() {
  return this.t();
});
$p.F = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this);
});
$p.af = (function() {
  return "IndexedSeqView";
});
var $d_sc_IndexedSeqView$Id = new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  bI: 1,
  bQ: 1,
  bD: 1,
  bE: 1,
  s: 1,
  d: 1,
  e: 1,
  o: 1,
  n: 1,
  m: 1,
  a: 1,
  bT: 1,
  p: 1,
  bP: 1,
  t: 1,
  bH: 1
}));
/** @constructor */
function $c_sci_AbstractSeq() {
}
$p = $c_sci_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$p.constructor = $c_sci_AbstractSeq;
/** @constructor */
function $h_sci_AbstractSeq() {
}
$h_sci_AbstractSeq.prototype = $p;
/** @constructor */
function $c_scm_AbstractSeq() {
}
$p = $c_scm_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$p.constructor = $c_scm_AbstractSeq;
/** @constructor */
function $h_scm_AbstractSeq() {
}
$h_scm_AbstractSeq.prototype = $p;
/** @constructor */
function $c_sjsr_WrappedVarArgs(array) {
  this.fv = null;
  this.fv = array;
}
$p = $c_sjsr_WrappedVarArgs.prototype = new $h_O();
$p.constructor = $c_sjsr_WrappedVarArgs;
/** @constructor */
function $h_sjsr_WrappedVarArgs() {
}
$h_sjsr_WrappedVarArgs.prototype = $p;
$p.F = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.K = (function() {
  return this.t();
});
$p.g = (function() {
  return $m_s_util_hashing_MurmurHash3$().j1(this);
});
$p.f = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.ga = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.gY = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.t = (function() {
  return (this.fv.length | 0);
});
$p.v = (function(idx) {
  return this.fv[idx];
});
$p.aB = (function() {
  return "WrappedVarArgs";
});
$p.l = (function(v1) {
  return this.v((v1 | 0));
});
function $isArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aA)));
}
var $d_sjsr_WrappedVarArgs = new $TypeData().i($c_sjsr_WrappedVarArgs, "scala.scalajs.runtime.WrappedVarArgs", ({
  aA: 1,
  ar: 1,
  d: 1,
  e: 1,
  o: 1,
  n: 1,
  m: 1,
  G: 1,
  h: 1,
  r: 1,
  p: 1,
  b: 1,
  u: 1,
  I: 1,
  H: 1,
  t: 1,
  l: 1,
  as: 1,
  J: 1,
  B: 1,
  C: 1,
  a: 1
}));
/** @constructor */
function $c_scm_AbstractBuffer() {
}
$p = $c_scm_AbstractBuffer.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_AbstractBuffer;
/** @constructor */
function $h_scm_AbstractBuffer() {
}
$h_scm_AbstractBuffer.prototype = $p;
/** @constructor */
function $c_sci_ArraySeq() {
}
$p = $c_sci_ArraySeq.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_ArraySeq;
/** @constructor */
function $h_sci_ArraySeq() {
}
$h_sci_ArraySeq.prototype = $p;
$p.K = (function() {
  return this.al.a.length;
});
$p.af = (function() {
  return "IndexedSeq";
});
$p.aB = (function() {
  return "ArraySeq";
});
/** @constructor */
function $c_scm_ArraySeq() {
}
$p = $c_scm_ArraySeq.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_ArraySeq;
/** @constructor */
function $h_scm_ArraySeq() {
}
$h_scm_ArraySeq.prototype = $p;
$p.K = (function() {
  return this.am.a.length;
});
$p.af = (function() {
  return "IndexedSeq";
});
$p.aB = (function() {
  return "ArraySeq";
});
/** @constructor */
function $c_sci_ArraySeq$ofRef(unsafeArray) {
  this.al = null;
  this.al = unsafeArray;
}
$p = $c_sci_ArraySeq$ofRef.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofRef;
/** @constructor */
function $h_sci_ArraySeq$ofRef() {
}
$h_sci_ArraySeq$ofRef.prototype = $p;
$p.t = (function() {
  return this.al.a.length;
});
$p.v = (function(i) {
  return this.al.a[i];
});
$p.g = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.is(this.al, this$1.ao);
});
$p.F = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.al);
});
$p.l = (function(v1) {
  return this.v((v1 | 0));
});
var $d_sci_ArraySeq$ofRef = new $TypeData().i($c_sci_ArraySeq$ofRef, "scala.collection.immutable.ArraySeq$ofRef", ({
  bX: 1,
  bV: 1,
  aq: 1,
  z: 1,
  s: 1,
  d: 1,
  e: 1,
  o: 1,
  n: 1,
  m: 1,
  h: 1,
  r: 1,
  p: 1,
  b: 1,
  u: 1,
  G: 1,
  I: 1,
  H: 1,
  t: 1,
  l: 1,
  as: 1,
  ar: 1,
  B: 1,
  C: 1,
  J: 1,
  bG: 1,
  a: 1
}));
/** @constructor */
function $c_sci_List() {
}
$p = $c_sci_List.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_List;
/** @constructor */
function $h_sci_List() {
}
$h_sci_List.prototype = $p;
$p.v = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.af = (function() {
  return "LinearSeq";
});
$p.eP = (function() {
  return (this === $m_sci_Nil$());
});
$p.ga = (function(f) {
  var these = this;
  while ((!these.eP())) {
    f.l(these.h4());
    these.h7();
  }
});
$p.t = (function() {
  var these = this;
  var len = 0;
  while ((!these.eP())) {
    len = ((1 + len) | 0);
    these.h7();
  }
  return len;
});
$p.aB = (function() {
  return "List";
});
$p.jS = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$p.l = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.at)));
}
/** @constructor */
function $c_scm_ArraySeq$ofRef(array) {
  this.am = null;
  this.am = array;
}
$p = $c_scm_ArraySeq$ofRef.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofRef;
/** @constructor */
function $h_scm_ArraySeq$ofRef() {
}
$h_scm_ArraySeq$ofRef.prototype = $p;
$p.t = (function() {
  return this.am.a.length;
});
$p.v = (function(index) {
  return this.am.a[index];
});
$p.g = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.is(this.am, this$1.ao);
});
$p.F = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.am);
});
$p.l = (function(v1) {
  return this.v((v1 | 0));
});
var $d_scm_ArraySeq$ofRef = new $TypeData().i($c_scm_ArraySeq$ofRef, "scala.collection.mutable.ArraySeq$ofRef", ({
  c5: 1,
  c3: 1,
  K: 1,
  z: 1,
  s: 1,
  d: 1,
  e: 1,
  o: 1,
  n: 1,
  m: 1,
  h: 1,
  r: 1,
  p: 1,
  b: 1,
  u: 1,
  O: 1,
  v: 1,
  L: 1,
  Q: 1,
  P: 1,
  t: 1,
  l: 1,
  N: 1,
  M: 1,
  B: 1,
  C: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Nil$() {
  $n_sci_Nil$ = this;
  var _1 = $m_sci_Nil$();
  $m_sci_Nil$();
}
$p = $c_sci_Nil$.prototype = new $h_sci_List();
$p.constructor = $c_sci_Nil$;
/** @constructor */
function $h_sci_Nil$() {
}
$h_sci_Nil$.prototype = $p;
$p.k = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.h = (function() {
  return 0;
});
$p.j = (function() {
  return "Nil";
});
$p.e = (function(n) {
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
$p.h4 = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list");
});
$p.h7 = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$p.K = (function() {
  return 0;
});
$p.F = (function() {
  return $m_sc_Iterator$().ft;
});
$p.kb = (function() {
  this.h4();
});
$p.lj = (function() {
  this.h7();
});
var $d_sci_Nil$ = new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  c1: 1,
  at: 1,
  aq: 1,
  z: 1,
  s: 1,
  d: 1,
  e: 1,
  o: 1,
  n: 1,
  m: 1,
  h: 1,
  r: 1,
  p: 1,
  b: 1,
  u: 1,
  G: 1,
  I: 1,
  H: 1,
  bN: 1,
  bM: 1,
  bZ: 1,
  bY: 1,
  B: 1,
  C: 1,
  bR: 1,
  J: 1,
  a: 1,
  bU: 1,
  c: 1
}));
var $n_sci_Nil$;
function $m_sci_Nil$() {
  if ((!$n_sci_Nil$)) {
    $n_sci_Nil$ = new $c_sci_Nil$();
  }
  return $n_sci_Nil$;
}
function $ct_scm_StringBuilder__jl_StringBuilder__($thiz, underlying) {
  $thiz.Z = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, new $c_jl_StringBuilder());
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.Z = null;
}
$p = $c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
$h_scm_StringBuilder.prototype = $p;
$p.F = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.af = (function() {
  return "IndexedSeq";
});
$p.t = (function() {
  return this.Z.t();
});
$p.K = (function() {
  return this.Z.t();
});
$p.f = (function() {
  return this.Z.u;
});
$p.v = (function(i) {
  return $bC(this.Z.it(i));
});
$p.l = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.Z.it(i));
});
var $d_scm_StringBuilder = new $TypeData().i($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  ca: 1,
  K: 1,
  z: 1,
  s: 1,
  d: 1,
  e: 1,
  o: 1,
  n: 1,
  m: 1,
  h: 1,
  r: 1,
  p: 1,
  b: 1,
  u: 1,
  O: 1,
  v: 1,
  L: 1,
  Q: 1,
  P: 1,
  av: 1,
  aw: 1,
  au: 1,
  c8: 1,
  t: 1,
  l: 1,
  N: 1,
  M: 1,
  E: 1,
  a: 1
}));
/** @constructor */
function $c_sjs_js_WrappedArray(array) {
  this.en = null;
  this.en = array;
}
$p = $c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
}
$h_sjs_js_WrappedArray.prototype = $p;
$p.af = (function() {
  return "IndexedSeq";
});
$p.F = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.v = (function(index) {
  return this.en[index];
});
$p.t = (function() {
  return (this.en.length | 0);
});
$p.K = (function() {
  return (this.en.length | 0);
});
$p.aB = (function() {
  return "WrappedArray";
});
$p.l = (function(v1) {
  var index = (v1 | 0);
  return this.en[index];
});
var $d_sjs_js_WrappedArray = new $TypeData().i($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
  cE: 1,
  c2: 1,
  K: 1,
  z: 1,
  s: 1,
  d: 1,
  e: 1,
  o: 1,
  n: 1,
  m: 1,
  h: 1,
  r: 1,
  p: 1,
  b: 1,
  u: 1,
  O: 1,
  v: 1,
  L: 1,
  Q: 1,
  P: 1,
  av: 1,
  aw: 1,
  c9: 1,
  c6: 1,
  C: 1,
  B: 1,
  M: 1,
  t: 1,
  l: 1,
  N: 1,
  c7: 1,
  au: 1,
  a: 1
}));
$s_Lsketches_tests_texture\uff3fbake_textureBake__main__AT__V(new ($d_T.r().C)([]));
