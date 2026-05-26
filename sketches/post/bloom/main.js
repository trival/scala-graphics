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
  return (arg0.$classData.Z ? arg0.X() : $objectClone(arg0));
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
        return null.ek();
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
        return instance.L();
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__hashCode__I(instance.l, instance.h);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I(instance.c);
      } else {
        return $c_O.prototype.L.call(instance);
      }
    }
  }
}
function $dp_indexOf__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__indexOf__I__I(instance, x0);
  } else {
    return instance.em(x0);
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
$p.L = (function() {
  return $systemIdentityHashCode(this);
});
$p.n = (function() {
  var i = this.L();
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.toString = (function() {
  return this.n();
});
function $ac_O(arg) {
  if (((typeof arg) === "number")) {
    this.c = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.c[i] = null;
    }
  } else {
    this.c = arg;
  }
}
$p = $ac_O.prototype = new $h_O();
$p.constructor = $ac_O;
$p.a4 = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.c, srcPos, dest.c, destPos, length);
});
$p.X = (function() {
  return new $ac_O(this.c.slice());
});
function $ah_O() {
}
$ah_O.prototype = $p;
function $ac_Z(arg) {
  if (((typeof arg) === "number")) {
    this.c = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.c[i] = false;
    }
  } else {
    this.c = arg;
  }
}
$p = $ac_Z.prototype = new $h_O();
$p.constructor = $ac_Z;
$p.a4 = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.c, srcPos, dest.c, destPos, length);
});
$p.X = (function() {
  return new $ac_Z(this.c.slice());
});
function $ac_C(arg) {
  if (((typeof arg) === "number")) {
    this.c = new Uint16Array(arg);
  } else {
    this.c = arg;
  }
}
$p = $ac_C.prototype = new $h_O();
$p.constructor = $ac_C;
$p.a4 = (function(srcPos, dest, destPos, length) {
  dest.c.set(this.c.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.X = (function() {
  return new $ac_C(this.c.slice());
});
function $ac_B(arg) {
  if (((typeof arg) === "number")) {
    this.c = new Int8Array(arg);
  } else {
    this.c = arg;
  }
}
$p = $ac_B.prototype = new $h_O();
$p.constructor = $ac_B;
$p.a4 = (function(srcPos, dest, destPos, length) {
  dest.c.set(this.c.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.X = (function() {
  return new $ac_B(this.c.slice());
});
function $ac_S(arg) {
  if (((typeof arg) === "number")) {
    this.c = new Int16Array(arg);
  } else {
    this.c = arg;
  }
}
$p = $ac_S.prototype = new $h_O();
$p.constructor = $ac_S;
$p.a4 = (function(srcPos, dest, destPos, length) {
  dest.c.set(this.c.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.X = (function() {
  return new $ac_S(this.c.slice());
});
function $ac_I(arg) {
  if (((typeof arg) === "number")) {
    this.c = new Int32Array(arg);
  } else {
    this.c = arg;
  }
}
$p = $ac_I.prototype = new $h_O();
$p.constructor = $ac_I;
$p.a4 = (function(srcPos, dest, destPos, length) {
  dest.c.set(this.c.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.X = (function() {
  return new $ac_I(this.c.slice());
});
function $ac_J(arg) {
  if (((typeof arg) === "number")) {
    arg = (arg << 1);
    this.c = new Int32Array(arg);
  } else {
    this.c = arg;
  }
}
$p = $ac_J.prototype = new $h_O();
$p.constructor = $ac_J;
$p.a4 = (function(srcPos, dest, destPos, length) {
  dest.c.set(this.c.subarray((srcPos << 1), (((srcPos + length) | 0) << 1)), (destPos << 1));
});
$p.X = (function() {
  return new $ac_J(this.c.slice());
});
function $ac_F(arg) {
  if (((typeof arg) === "number")) {
    this.c = new Float32Array(arg);
  } else {
    this.c = arg;
  }
}
$p = $ac_F.prototype = new $h_O();
$p.constructor = $ac_F;
$p.a4 = (function(srcPos, dest, destPos, length) {
  dest.c.set(this.c.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.X = (function() {
  return new $ac_F(this.c.slice());
});
function $ac_D(arg) {
  if (((typeof arg) === "number")) {
    this.c = new Float64Array(arg);
  } else {
    this.c = arg;
  }
}
$p = $ac_D.prototype = new $h_O();
$p.constructor = $ac_D;
$p.a4 = (function(srcPos, dest, destPos, length) {
  dest.c.set(this.c.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.X = (function() {
  return new $ac_D(this.c.slice());
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
    y: 1,
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
    var u = result.c;
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
      this.c = new Array(arg);
      for (var i = 0; (i < arg); (i++)) {
        this.c[i] = null;
      }
    } else {
      this.c = arg;
    }
  }
  var $p = ArrayClass.prototype = new $ah_O();
  $p.constructor = ArrayClass;
  $p.a4 = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.c, srcPos, dest.c, destPos, length);
  });
  $p.X = (function() {
    return new ArrayClass(this.c.slice());
  });
  $p.$classData = this;
  var arrayBase = (componentData.B || componentData);
  var arrayDepth = (componentData.D + 1);
  var name = ("[" + componentData.E);
  this.C = ArrayClass;
  this.n = ({
    y: 1,
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
  this.ce = null;
  this.dc = null;
  $n_jl_System$Streams$ = this;
  this.ce = new $c_jl_JSConsoleBasedPrintStream(false);
  this.dc = new $c_jl_JSConsoleBasedPrintStream(true);
}
$p = $c_jl_System$Streams$.prototype = new $h_O();
$p.constructor = $c_jl_System$Streams$;
/** @constructor */
function $h_jl_System$Streams$() {
}
$h_jl_System$Streams$.prototype = $p;
var $d_jl_System$Streams$ = new $TypeData().i($c_jl_System$Streams$, "java.lang.System$Streams$", ({
  au: 1
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
  aw: 1
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
$p.c3 = (function(array) {
  return ((array instanceof $ac_O) ? array.c.length : ((array instanceof $ac_Z) ? array.c.length : ((array instanceof $ac_C) ? array.c.length : ((array instanceof $ac_B) ? array.c.length : ((array instanceof $ac_S) ? array.c.length : ((array instanceof $ac_I) ? array.c.length : ((array instanceof $ac_J) ? ((array.c.length >>> 1) | 0) : ((array instanceof $ac_F) ? array.c.length : ((array instanceof $ac_D) ? array.c.length : $p_jl_reflect_Array$__mismatch__O__E(this, array))))))))));
});
var $d_jl_reflect_Array$ = new $TypeData().i($c_jl_reflect_Array$, "java.lang.reflect.Array$", ({
  ax: 1
}));
var $n_jl_reflect_Array$;
function $m_jl_reflect_Array$() {
  if ((!$n_jl_reflect_Array$)) {
    $n_jl_reflect_Array$ = new $c_jl_reflect_Array$();
  }
  return $n_jl_reflect_Array$;
}
function $s_RTLong__remainderUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().dU(alo, ahi, blo, bhi);
}
function $s_RTLong__remainder__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().dT(alo, ahi, blo, bhi);
}
function $s_RTLong__divideUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().dp(alo, ahi, blo, bhi);
}
function $s_RTLong__divide__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().dn(alo, ahi, blo, bhi);
}
function $s_RTLong__fromDoubleBits__D__O__J(value, fpBitsDataView) {
  fpBitsDataView.setFloat64(0, value, true);
  var lo = (fpBitsDataView.getInt32(0, true) | 0);
  var hi = (fpBitsDataView.getInt32(4, true) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__fromDouble__D__J(value) {
  return $m_RTLong$().cY(value);
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
  return $m_RTLong$().d6(lo, hi);
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
$p.d6 = (function(lo, hi) {
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
$p.cY = (function(value) {
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
$p.dn = (function(alo, ahi, blo, bhi) {
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
    var $x_1 = this.bF(rlo, rhi, rlo$1, rhi$1, true);
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
$p.dp = (function(alo, ahi, blo, bhi) {
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
    return this.bF(alo, ahi, blo, bhi, true);
  }
});
$p.dT = (function(alo, ahi, blo, bhi) {
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
    var $x_1 = this.bF(rlo, rhi, rlo$1, rhi$1, false);
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
$p.dU = (function(alo, ahi, blo, bhi) {
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
    return this.bF(alo, ahi, blo, bhi, false);
  }
});
$p.bF = (function(alo, ahi, blo, bhi, askQuotient) {
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
  az: 1
}));
var $n_RTLong$;
function $m_RTLong$() {
  if ((!$n_RTLong$)) {
    $n_RTLong$ = new $c_RTLong$();
  }
  return $n_RTLong$;
}
function $f_sc_IterableOnceOps__foreach__F1__V($thiz, f) {
  var it = $thiz.U();
  while (it.K()) {
    f.b(it.E());
  }
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  return (($thiz.a1() === 0) ? (("" + start) + end) : $thiz.c1($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).a6.v);
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.a6;
  if ((start.length !== 0)) {
    jsb.v = (("" + jsb.v) + start);
  }
  var it = $thiz.U();
  if (it.K()) {
    var obj = it.E();
    jsb.v = (("" + jsb.v) + obj);
    while (it.K()) {
      if ((sep.length !== 0)) {
        jsb.v = (("" + jsb.v) + sep);
      }
      var obj$1 = it.E();
      jsb.v = (("" + jsb.v) + obj$1);
    }
  }
  if ((end.length !== 0)) {
    jsb.v = (("" + jsb.v) + end);
  }
  return b;
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
$p.ay = (function(xs, idx) {
  if ((xs instanceof $ac_O)) {
    return xs.c[idx];
  }
  if ((xs instanceof $ac_I)) {
    return xs.c[idx];
  }
  if ((xs instanceof $ac_D)) {
    return xs.c[idx];
  }
  if ((xs instanceof $ac_J)) {
    var $x_1 = xs.c;
    var $x_2 = (idx << 1);
    return $bL($x_1[$x_2], $x_1[(($x_2 + 1) | 0)]);
  }
  if ((xs instanceof $ac_F)) {
    return xs.c[idx];
  }
  if ((xs instanceof $ac_C)) {
    return $bC(xs.c[idx]);
  }
  if ((xs instanceof $ac_B)) {
    return xs.c[idx];
  }
  if ((xs instanceof $ac_S)) {
    return xs.c[idx];
  }
  if ((xs instanceof $ac_Z)) {
    return xs.c[idx];
  }
  if ((xs === null)) {
    throw new $c_jl_NullPointerException();
  }
  throw new $c_s_MatchError(xs);
});
$p.df = (function(x) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(x.b3(), (x.ak() + "("), ",", ")");
});
$p.aC = (function(xs) {
  if ((xs === null)) {
    return null;
  } else if ((xs.c.length === 0)) {
    var this$2 = $m_sci_ArraySeq$();
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    return $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef(this$2);
  } else {
    return new $c_sci_ArraySeq$ofRef(xs);
  }
});
var $d_sr_ScalaRunTime$ = new $TypeData().i($c_sr_ScalaRunTime$, "scala.runtime.ScalaRunTime$", ({
  bw: 1
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
$p.dK = (function(lv_$_lo, lv_$_hi) {
  return ((lv_$_hi === (lv_$_lo >> 31)) ? lv_$_lo : (lv_$_lo ^ lv_$_hi));
});
$p.dq = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var $x_1 = $m_RTLong$().cY(dv);
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
$p.s = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    return this.dq((+x));
  } else if ((x instanceof $Long)) {
    var $x_1 = $uJ(x);
    return this.dK($x_1.l, $x_1.h);
  } else {
    return $dp_hashCode__I(x);
  }
});
var $d_sr_Statics$ = new $TypeData().i($c_sr_Statics$, "scala.runtime.Statics$", ({
  by: 1
}));
var $n_sr_Statics$;
function $m_sr_Statics$() {
  if ((!$n_sr_Statics$)) {
    $n_sr_Statics$ = new $c_sr_Statics$();
  }
  return $n_sr_Statics$;
}
var $d_sjs_js_Any = new $TypeData().i(2, "scala.scalajs.js.Any", ({
  bz: 1
}), $noIsInstance);
/** @constructor */
function $c_sjs_js_ArrayOps$() {
}
$p = $c_sjs_js_ArrayOps$.prototype = new $h_O();
$p.constructor = $c_sjs_js_ArrayOps$;
/** @constructor */
function $h_sjs_js_ArrayOps$() {
}
$h_sjs_js_ArrayOps$.prototype = $p;
$p.d9 = (function(this$, that) {
  var b = [];
  var len = (this$.length | 0);
  var i = 0;
  var it = that.U();
  while (((i < len) && it.K())) {
    b.push(new $c_T2(this$[i], it.E()));
    i = ((1 + i) | 0);
  }
  return b;
});
$p.da = (function(this$) {
  var len = (this$.length | 0);
  var b = new Array(len);
  var i = 0;
  while ((i < len)) {
    b[i] = new $c_T2(this$[i], i);
    i = ((1 + i) | 0);
  }
  return b;
});
$p.Z = (function(this$, f) {
  var len = (this$.length | 0);
  var i = 0;
  while ((i < len)) {
    f.b(this$[i]);
    i = ((1 + i) | 0);
  }
});
var $d_sjs_js_ArrayOps$ = new $TypeData().i($c_sjs_js_ArrayOps$, "scala.scalajs.js.ArrayOps$", ({
  bB: 1
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
$p.a = (function(left, right) {
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
  bC: 1
}));
var $n_sjs_js_ArrayOpsCommon$;
function $m_sjs_js_ArrayOpsCommon$() {
  if ((!$n_sjs_js_ArrayOpsCommon$)) {
    $n_sjs_js_ArrayOpsCommon$ = new $c_sjs_js_ArrayOpsCommon$();
  }
  return $n_sjs_js_ArrayOpsCommon$;
}
/** @constructor */
function $c_sjs_js_special_package$() {
}
$p = $c_sjs_js_special_package$.prototype = new $h_O();
$p.constructor = $c_sjs_js_special_package$;
/** @constructor */
function $h_sjs_js_special_package$() {
}
$h_sjs_js_special_package$.prototype = $p;
$p.f = (function(properties) {
  var result = ({});
  properties.bE(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((pair$2$2) => {
    result[pair$2$2.H] = pair$2$2.a5;
  })));
  return result;
});
var $d_sjs_js_special_package$ = new $TypeData().i($c_sjs_js_special_package$, "scala.scalajs.js.special.package$", ({
  bH: 1
}));
var $n_sjs_js_special_package$;
function $m_sjs_js_special_package$() {
  if ((!$n_sjs_js_special_package$)) {
    $n_sjs_js_special_package$ = new $c_sjs_js_special_package$();
  }
  return $n_sjs_js_special_package$;
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
$p.aA = (function(seq) {
  if ((seq instanceof $c_sjsr_WrappedVarArgs)) {
    return seq.bl;
  } else {
    var result = [];
    seq.bE(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2$2) => (result.push(x$2$2) | 0))));
    return result;
  }
});
var $d_sjsr_Compat$ = new $TypeData().i($c_sjsr_Compat$, "scala.scalajs.runtime.Compat$", ({
  bI: 1
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
$p.d = (function(array) {
  var len = array.c.length;
  var result = [];
  var i = 0;
  while ((i !== len)) {
    var x1 = i;
    result.push(array.c[x1]);
    i = ((1 + i) | 0);
  }
  return result;
});
var $d_sjsr_package$ = new $TypeData().i($c_sjsr_package$, "scala.scalajs.runtime.package$", ({
  bJ: 1
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
$p.e0 = (function(err) {
  var where = ((err.cZ() === 0) ? "" : ((err.cZ() === 1) ? " after first argument" : ((" after " + err.cZ()) + " arguments")));
  var x = ((("Illegal command line" + where) + ": ") + err.en());
  $m_s_Console$().dP().dH((x + "\n"));
});
var $d_s_util_CommandLineParser$ = new $TypeData().i($c_s_util_CommandLineParser$, "scala.util.CommandLineParser$", ({
  bK: 1
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
  this.bL = null;
  this.bL = init;
}
$p = $c_s_util_DynamicVariable.prototype = new $h_O();
$p.constructor = $c_s_util_DynamicVariable;
/** @constructor */
function $h_s_util_DynamicVariable() {
}
$h_s_util_DynamicVariable.prototype = $p;
$p.n = (function() {
  return (("DynamicVariable(" + this.bL) + ")");
});
var $d_s_util_DynamicVariable = new $TypeData().i($c_s_util_DynamicVariable, "scala.util.DynamicVariable", ({
  bM: 1
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
$p.l = (function(hash, data) {
  var h = this.d0(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.d0 = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.R = (function(hash, length) {
  return this.b4((hash ^ length));
});
$p.b4 = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.bG = (function(x, seed, ignorePrefix) {
  var arr = x.ai();
  if ((arr === 0)) {
    return ((!ignorePrefix) ? $f_T__hashCode__I(x.ak()) : seed);
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.l(h, $f_T__hashCode__I(x.ak()));
    }
    var i = 0;
    while ((i < arr)) {
      h = this.l(h, $m_sr_Statics$().s(x.aj(i)));
      i = ((1 + i) | 0);
    }
    return this.R(h, arr);
  }
});
$p.e7 = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.U();
  while (iterator.K()) {
    var x = iterator.E();
    var h = $m_sr_Statics$().s(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.l(h$2, a);
  h$2 = this.l(h$2, b);
  h$2 = this.d0(h$2, c);
  return this.R(h$2, n);
});
$p.dO = (function(xs, seed) {
  var it = xs.U();
  var h = seed;
  if ((!it.K())) {
    return this.R(h, 0);
  }
  var x0 = it.E();
  if ((!it.K())) {
    return this.R(this.l(h, $m_sr_Statics$().s(x0)), 1);
  }
  var x1 = it.E();
  var initial = $m_sr_Statics$().s(x0);
  h = this.l(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().s(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.K()) {
    h = this.l(h, prev);
    var hash = $m_sr_Statics$().s(it.E());
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.l(h, hash);
      i = ((1 + i) | 0);
      while (it.K()) {
        h = this.l(h, $m_sr_Statics$().s(it.E()));
        i = ((1 + i) | 0);
      }
      return this.R(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.b4(this.l(this.l(h0, rangeDiff), prev));
});
$p.dh = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().c3(a);
  switch (l) {
    case 0: {
      return this.R(h, 0);
      break;
    }
    case 1: {
      return this.R(this.l(h, $m_sr_Statics$().s($m_sr_ScalaRunTime$().ay(a, 0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().s($m_sr_ScalaRunTime$().ay(a, 0));
      h = this.l(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().s($m_sr_ScalaRunTime$().ay(a, 1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.l(h, prev);
        var hash = $m_sr_Statics$().s($m_sr_ScalaRunTime$().ay(a, i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.l(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.l(h, $m_sr_Statics$().s($m_sr_ScalaRunTime$().ay(a, i)));
            i = ((1 + i) | 0);
          }
          return this.R(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.b4(this.l(this.l(h0, rangeDiff), prev));
    }
  }
});
$p.dS = (function(start, step, last, seed) {
  return this.b4(this.l(this.l(this.l(seed, start), step), last));
});
$p.dD = (function(a, seed) {
  var h = seed;
  var l = a.z();
  switch (l) {
    case 0: {
      return this.R(h, 0);
      break;
    }
    case 1: {
      return this.R(this.l(h, $m_sr_Statics$().s(a.G(0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().s(a.G(0));
      h = this.l(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().s(a.G(1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.l(h, prev);
        var hash = $m_sr_Statics$().s(a.G(i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.l(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.l(h, $m_sr_Statics$().s(a.G(i)));
            i = ((1 + i) | 0);
          }
          return this.R(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.b4(this.l(this.l(h0, rangeDiff), prev));
    }
  }
});
$p.dJ = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.b0())) {
    elems.c5();
  }
  return ((rangeState === 2) ? this.dS(initial, rangeDiff, prev, seed) : this.R(h, n));
});
function $p_Lsketches_post_bloom_Bloom$package$__circle$1__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr__D__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr($thiz, uvC, center, radius, brightness) {
  var dist = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().c6($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().ca(uvC, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j(), center));
  var alpha = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().cT($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(1.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().dj($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().cS($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().cT(dist, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(radius)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b((0.05 * radius)))));
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().dL(brightness, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a0(), alpha);
}
/** @constructor */
function $c_Lsketches_post_bloom_Bloom$package$() {
}
$p = $c_Lsketches_post_bloom_Bloom$package$.prototype = new $h_O();
$p.constructor = $c_Lsketches_post_bloom_Bloom$package$;
/** @constructor */
function $h_Lsketches_post_bloom_Bloom$package$() {
}
$h_Lsketches_post_bloom_Bloom$package$.prototype = $p;
$p.di = (function() {
  $m_Ltrivalibs_graphics_painter_Painter$().dE(document.getElementById("canvas"), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((p$6) => {
    var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fFloat\uff3f$times$colon$());
    var uv$proxy1 = ul$proxy1.V;
    var buffer = new ArrayBuffer(4);
    var arr$proxy1 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
    var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy1.dv, 0), p$6.g, uv$proxy1);
    b.P.S(b.m, 0.0);
    var $x_2 = b.O.queue;
    var $x_1 = b.I;
    var s$proxy1 = b.m;
    $x_2.writeBuffer($x_1, 0.0, s$proxy1.dv.buffer);
    var ul$proxy2 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fFloat\uff3f$times$colon$());
    var uv$proxy2 = ul$proxy2.V;
    var buffer$2 = new ArrayBuffer(4);
    var arr$proxy2 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
    var b$2 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy2.dv, 0), p$6.g, uv$proxy2);
    b$2.P.S(b$2.m, 1.0);
    var $x_4 = b$2.O.queue;
    var $x_3 = b$2.I;
    var s$proxy2 = b$2.m;
    $x_4.writeBuffer($x_3, 0.0, s$proxy2.dv.buffer);
    var ul$proxy3 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fFloat\uff3f$times$colon$());
    var uv$proxy3 = ul$proxy3.V;
    var buffer$3 = new ArrayBuffer(4);
    var arr$proxy3 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$3), 1);
    var b$3 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy3.dv, 0), p$6.g, uv$proxy3);
    b$3.P.S(b$3.m, 0.05000000074505806);
    var $x_6 = b$3.O.queue;
    var $x_5 = b$3.I;
    var s$proxy3 = b$3.m;
    $x_6.writeBuffer($x_5, 0.0, s$proxy3.dv.buffer);
    var ul$proxy4 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fFloat\uff3f$times$colon$());
    var uv$proxy4 = ul$proxy4.V;
    var buffer$4 = new ArrayBuffer(4);
    var arr$proxy4 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$4), 1);
    var b$4 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy4.dv, 0), p$6.g, uv$proxy4);
    b$4.P.S(b$4.m, 4.0);
    var $x_8 = b$4.O.queue;
    var $x_7 = b$4.I;
    var s$proxy4 = b$4.m;
    $x_8.writeBuffer($x_7, 0.0, s$proxy4.dv.buffer);
    var ul$proxy5 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$());
    var uv$proxy5 = ul$proxy5.V;
    var buffer$5 = new ArrayBuffer(8);
    var arr$proxy5 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$5), 1);
    var uRes = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy5.dv, 0), p$6.g, uv$proxy5);
    var ul$proxy6 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$());
    var uv$proxy6 = ul$proxy6.V;
    var buffer$6 = new ArrayBuffer(8);
    var arr$proxy6 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$6), 1);
    var uResMip1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy6.dv, 0), p$6.g, uv$proxy6);
    var ul$proxy7 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$());
    var uv$proxy7 = ul$proxy7.V;
    var buffer$7 = new ArrayBuffer(8);
    var arr$proxy7 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$7), 1);
    var uResMip2 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy7.dv, 0), p$6.g, uv$proxy7);
    var ul$proxy8 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$());
    var uv$proxy8 = ul$proxy8.V;
    var buffer$8 = new ArrayBuffer(8);
    var arr$proxy8 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$8), 1);
    var uResMip3 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy8.dv, 0), p$6.g, uv$proxy8);
    var ul$proxy9 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$());
    var uv$proxy9 = ul$proxy9.V;
    var buffer$9 = new ArrayBuffer(8);
    var arr$proxy9 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$9), 1);
    var uResMip4 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy9.dv, 0), p$6.g, uv$proxy9);
    var sampler = p$6.dV();
    var build$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3) => {
      var body$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2) => {
        var aspect = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "aspect");
        var uvC = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "uvC");
        var t = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "t");
        var col = new $c_Ltrivalibs_graphics_math_gpu_VarExpr("col");
        var uv$9 = ctx$2.af.p("uv");
        var res = ctx$2.F.p("res");
        var $x_19 = $m_sjsr_package$();
        var $x_18 = aspect.D($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().cS($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().M(res), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().N(res)));
        var $x_17 = uvC.D($m_Ltrivalibs_graphics_math_gpu_vec2$().t($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ag($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().M(uv$9), aspect), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().N(uv$9)));
        var $x_16 = t.D($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ag(ctx$2.F.p("time"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(0.5)));
        var $x_15 = col.D($m_Ltrivalibs_graphics_math_gpu_vec3$().ah($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(0.1), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(0.1), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(0.1)));
        var $x_14 = col.D($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().ax(col, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a0(), $p_Lsketches_post_bloom_Bloom$package$__circle$1__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr__D__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr(this, uvC, $m_Ltrivalibs_graphics_math_gpu_vec2$().t($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bC($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ag($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().e1(t), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(0.1)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(0.3)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(0.5)), 0.15, $m_Ltrivalibs_graphics_math_gpu_vec3$().ah($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(3.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(3.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(2.5)))));
        var $x_13 = col.D($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().ax(col, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a0(), $p_Lsketches_post_bloom_Bloom$package$__circle$1__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr__D__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr(this, uvC, $m_Ltrivalibs_graphics_math_gpu_vec2$().t($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(0.7), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bC($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ag($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().dk(t), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(0.1)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(0.5))), 0.12, $m_Ltrivalibs_graphics_math_gpu_vec3$().ah($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(1.5), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(2.5), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(4.0)))));
        var $x_12 = col.D($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().ax(col, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a0(), $p_Lsketches_post_bloom_Bloom$package$__circle$1__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr__D__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr(this, uvC, $m_Ltrivalibs_graphics_math_gpu_vec2$().t($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(0.5), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(0.3)), 0.1, $m_Ltrivalibs_graphics_math_gpu_vec3$().ah($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(4.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(1.5), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(1.5)))));
        var $x_11 = col.D($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().ax(col, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a0(), $p_Lsketches_post_bloom_Bloom$package$__circle$1__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr__D__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr(this, uvC, $m_Ltrivalibs_graphics_math_gpu_vec2$().t($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(0.25), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(0.75)), 0.08, $m_Ltrivalibs_graphics_math_gpu_vec3$().ah($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(0.6), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(0.6), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(0.8)))));
        var $x_10 = col.D($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().ax(col, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a0(), $p_Lsketches_post_bloom_Bloom$package$__circle$1__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr__D__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr(this, uvC, $m_Ltrivalibs_graphics_math_gpu_vec2$().t($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(0.75), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(0.75)), 0.08, $m_Ltrivalibs_graphics_math_gpu_vec3$().ah($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(0.8), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(0.6), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(0.6)))));
        var $x_9 = col.D($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().ax(col, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a0(), $p_Lsketches_post_bloom_Bloom$package$__circle$1__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr__D__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr(this, uvC, $m_Ltrivalibs_graphics_math_gpu_vec2$().t($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(0.5), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(0.7)), 0.06, $m_Ltrivalibs_graphics_math_gpu_vec3$().ah($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(0.7), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(0.7), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(0.5)))));
        var AssignTarget_this = ctx$2.aw.b5("color");
        var value$proxy1 = $m_Ltrivalibs_graphics_math_gpu_vec4$().cV($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().c9($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a0().b7(col), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(2.3)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().c9($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a0().b8(col), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(2.3)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().c9($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a0().cc(col), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(2.3)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(1.0));
        return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_19.d(new ($d_T.r().C)([$x_18, $x_17, $x_16, $x_15, $x_14, $x_13, $x_12, $x_11, $x_10, $x_9, (((("  " + AssignTarget_this.au) + " = ") + value$proxy1.e) + ";")]))), "", "\n", "");
      }));
      var d = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
      var ctx = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().y;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().y = reg;
      try {
        var $x_20 = body$proxy1.b(ctx);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().y = prev;
      }
      program$3.T = $x_20;
      $m_sjs_js_ArrayOps$().Z(reg.av, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$6) => ((data$3) => {
        $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$6, data$3);
      }))(program$3)));
    }));
    var program = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
    build$proxy1.b(program);
    var b$1 = program.T;
    var helperFns$proxy1 = program.aZ();
    var id = p$6.w;
    p$6.w = ((1 + p$6.w) | 0);
    var names = $m_sjs_js_ArrayOpsCommon$().a(["res"], $m_sjs_js_ArrayOpsCommon$().a(["time"], []));
    var dict = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i = 0;
    while ((i < (names.length | 0))) {
      dict[names[i]] = i;
      i = ((1 + i) | 0);
    }
    var names$2 = [];
    var dict$2 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$2 = 0;
    while ((i$2 < (names$2.length | 0))) {
      dict$2[names$2[i$2]] = i$2;
      i$2 = ((1 + i$2) | 0);
    }
    var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$1, helperFns$proxy1);
    var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T(sd, $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], [])), $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], [])), $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []), $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["res"], $m_sjs_js_ArrayOpsCommon$().a(["time"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$()).C.u()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).C.u()], []))), sd.ae, sd.ad);
    var args$proxy1 = $m_sr_ScalaRunTime$().aC(new ($d_sjs_js_Any.r().C)([baseWgsl]));
    console.log(...$m_sjsr_Compat$().aA(args$proxy1));
    var module = p$6.g.createShaderModule($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("code", baseWgsl)])))));
    var descriptors = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], []))], []);
    var result = [];
    $m_sjs_js_ArrayOps$().Z(descriptors, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$1) => ((entries$2) => (result.push(Painter_this$1.g.createBindGroupLayout($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("entries", entries$2)])))))) | 0)))(p$6)));
    var x1 = new $c_T2(result, $m_Ltrivalibs_graphics_shader_layouts$().Y(p$6.g, result));
    var \u03b46$ = x1;
    var bgls$2 = \u03b46$.H;
    var pl = $m_Ltrivalibs_graphics_shader_layouts$().Y(p$6.g, bgls$2);
    var sceneShade = new $c_Ltrivalibs_graphics_painter_Shade(id, module, null, bgls$2[0], null, pl, false, dict, dict$2);
    var clearColor$1 = new $c_T4(0.0, 0.0, 0.0, 1.0);
    var Bindable_this = p$6.b1(sceneShade, (void 0), (void 0), (void 0));
    var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("res", uRes);
    var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("time", b);
    var \u03b4scrutinee56 = e1$proxy1.q;
    var idx = (Bindable_this.k.x.res | 0);
    while (((Bindable_this.i.length | 0) <= idx)) {
      Bindable_this.i.push(null);
    }
    Bindable_this.i[idx] = \u03b4scrutinee56;
    var \u03b4scrutinee66 = e2$proxy1.q;
    var idx$2 = (Bindable_this.k.x.time | 0);
    while (((Bindable_this.i.length | 0) <= idx$2)) {
      Bindable_this.i.push(null);
    }
    Bindable_this.i[idx$2] = \u03b4scrutinee66;
    var scenePanel = p$6.c8((void 0), (void 0), clearColor$1, (void 0), (void 0), (void 0), (void 0), "rgba16float", (void 0), (void 0), (void 0), Bindable_this, (void 0));
    var build$proxy2 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$1) => {
      var body$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$1) => {
        var color = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "color");
        var brightness = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "brightness");
        var $x_23 = $m_sjsr_package$();
        var $x_22 = color.D($m_Ltrivalibs_graphics_math_gpu_expr$package$().A($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "scene"), ctx$2$1.af.p("uv"), ctx$2$1.F.p("samp")));
        var $x_21 = brightness.D($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bC($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bC($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ag($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o().b7(color), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(0.2126)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ag($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o().b8(color), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(0.7152))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ag($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o().cc(color), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(0.0722))));
        var AssignTarget_this$1 = ctx$2$1.aw.b5("color");
        var value$proxy2 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().dW($m_Ltrivalibs_graphics_math_gpu_vec4$().cV($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(1.0)), color, $m_Ltrivalibs_graphics_math_gpu_expr$package$().dv(brightness, ctx$2$1.F.p("threshold")));
        return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_23.d(new ($d_T.r().C)([$x_22, $x_21, (((("  " + AssignTarget_this$1.au) + " = ") + value$proxy2.e) + ";")]))), "", "\n", "");
      }));
      var d$1 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
      var ctx$1 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$1), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().y;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().y = reg$1;
      try {
        var $x_24 = body$proxy3.b(ctx$1);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().y = prev$1;
      }
      program$3$1.T = $x_24;
      $m_sjs_js_ArrayOps$().Z(reg$1.av, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$7) => ((data$3$1) => {
        $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$7, data$3$1);
      }))(program$3$1)));
    }));
    var program$2 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
    build$proxy2.b(program$2);
    var b$5 = program$2.T;
    var helperFns$proxy2 = program$2.aZ();
    var id$2 = p$6.w;
    p$6.w = ((1 + p$6.w) | 0);
    var names$4 = $m_sjs_js_ArrayOpsCommon$().a(["res"], $m_sjs_js_ArrayOpsCommon$().a(["threshold"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])));
    var dict$3 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$3 = 0;
    while ((i$3 < (names$4.length | 0))) {
      dict$3[names$4[i$3]] = i$3;
      i$3 = ((1 + i$3) | 0);
    }
    var names$5 = $m_sjs_js_ArrayOpsCommon$().a(["scene"], []);
    var dict$4 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$4 = 0;
    while ((i$4 < (names$5.length | 0))) {
      dict$4[names$5[i$4]] = i$4;
      i$4 = ((1 + i$4) | 0);
    }
    var sd$2 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$5, helperFns$proxy2);
    var baseWgsl$2 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T(sd$2, $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], [])), $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], [])), $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []), $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["res"], $m_sjs_js_ArrayOpsCommon$().a(["threshold"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$()).C.u()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).C.u()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).C.u()], [])))), sd$2.ae, sd$2.ad);
    var wgsl$2 = (baseWgsl$2 + "\n\n@group(1) @binding(0) var scene: texture_2d<f32>;");
    var args$proxy2 = $m_sr_ScalaRunTime$().aC(new ($d_sjs_js_Any.r().C)([wgsl$2]));
    console.log(...$m_sjsr_Compat$().aA(args$proxy2));
    var module$2 = p$6.g.createShaderModule($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("code", wgsl$2)])))));
    var descriptors$2 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 2), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], [])))], []);
    var result$2 = [];
    $m_sjs_js_ArrayOps$().Z(descriptors$2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$2) => ((entries$2$1) => (result$2.push(Painter_this$2.g.createBindGroupLayout($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("entries", entries$2$1)])))))) | 0)))(p$6)));
    var x4 = new $c_T2(result$2, $m_Ltrivalibs_graphics_shader_layouts$().Y(p$6.g, result$2));
    var \u03b46$$2 = x4;
    var bgls$4 = \u03b46$$2.H;
    var entries = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []);
    var panelBgl$2 = p$6.g.createBindGroupLayout($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("entries", entries)])))));
    var allBgls$2 = ((panelBgl$2 !== null) ? $m_sjs_js_ArrayOpsCommon$().a(bgls$4, [panelBgl$2]) : bgls$4);
    var pl$2 = $m_Ltrivalibs_graphics_shader_layouts$().Y(p$6.g, allBgls$2);
    var thresholdShade = new $c_Ltrivalibs_graphics_painter_Shade(id$2, module$2, null, bgls$4[0], panelBgl$2, pl$2, false, dict$3, dict$4);
    var build$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$2) => {
      var body$proxy5 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$2) => {
        var uv$10 = ctx$2$2.af.p("uv");
        var o = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "o");
        var s = ctx$2$2.F.p("samp");
        var tex = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex");
        var $x_26 = $m_sjsr_package$();
        var $x_25 = o.D($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().cX($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().d2($m_Ltrivalibs_graphics_math_gpu_vec2$().t($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(0.5), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(0.5)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j(), ctx$2$2.F.p("blurRadius")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j(), ctx$2$2.F.p("res")));
        var AssignTarget_this$2 = ctx$2$2.aw.b5("color");
        var value$proxy3 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().bD($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().Q($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().Q($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().Q($m_Ltrivalibs_graphics_math_gpu_expr$package$().A(tex, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().ca(uv$10, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j(), o), s), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o(), $m_Ltrivalibs_graphics_math_gpu_expr$package$().A(tex, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().W(uv$10, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j(), $m_Ltrivalibs_graphics_math_gpu_vec2$().t($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().M(o), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aB($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().N(o)))), s)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o(), $m_Ltrivalibs_graphics_math_gpu_expr$package$().A(tex, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().W(uv$10, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j(), $m_Ltrivalibs_graphics_math_gpu_vec2$().t($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aB($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().M(o)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().N(o))), s)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o(), $m_Ltrivalibs_graphics_math_gpu_expr$package$().A(tex, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().W(uv$10, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j(), o), s)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o(), 0.25);
        return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_26.d(new ($d_T.r().C)([$x_25, (((("  " + AssignTarget_this$2.au) + " = ") + value$proxy3.e) + ";")]))), "", "\n", "");
      }));
      var d$2 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
      var ctx$3 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().y;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().y = reg$2;
      try {
        var $x_27 = body$proxy5.b(ctx$3);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().y = prev$2;
      }
      program$3$2.T = $x_27;
      $m_sjs_js_ArrayOps$().Z(reg$2.av, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$8) => ((data$3$2) => {
        $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$8, data$3$2);
      }))(program$3$2)));
    }));
    var program$3$3 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
    build$proxy3.b(program$3$3);
    var b$6 = program$3$3.T;
    var helperFns$proxy3 = program$3$3.aZ();
    var id$3 = p$6.w;
    p$6.w = ((1 + p$6.w) | 0);
    var names$7 = $m_sjs_js_ArrayOpsCommon$().a(["res"], $m_sjs_js_ArrayOpsCommon$().a(["blurRadius"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])));
    var dict$5 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$5 = 0;
    while ((i$5 < (names$7.length | 0))) {
      dict$5[names$7[i$5]] = i$5;
      i$5 = ((1 + i$5) | 0);
    }
    var names$8 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], []);
    var dict$6 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$6 = 0;
    while ((i$6 < (names$8.length | 0))) {
      dict$6[names$8[i$6]] = i$6;
      i$6 = ((1 + i$6) | 0);
    }
    var sd$3 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$6, helperFns$proxy3);
    var baseWgsl$3 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T(sd$3, $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], [])), $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], [])), $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []), $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["res"], $m_sjs_js_ArrayOpsCommon$().a(["blurRadius"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$()).C.u()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).C.u()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).C.u()], [])))), sd$3.ae, sd$3.ad);
    var wgsl$3 = (baseWgsl$3 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
    var args$proxy3 = $m_sr_ScalaRunTime$().aC(new ($d_sjs_js_Any.r().C)([wgsl$3]));
    console.log(...$m_sjsr_Compat$().aA(args$proxy3));
    var module$3 = p$6.g.createShaderModule($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("code", wgsl$3)])))));
    var descriptors$3 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 2), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], [])))], []);
    var result$3 = [];
    $m_sjs_js_ArrayOps$().Z(descriptors$3, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$3) => ((entries$2$2) => (result$3.push(Painter_this$3.g.createBindGroupLayout($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("entries", entries$2$2)])))))) | 0)))(p$6)));
    var x7 = new $c_T2(result$3, $m_Ltrivalibs_graphics_shader_layouts$().Y(p$6.g, result$3));
    var \u03b46$$3 = x7;
    var bgls$6 = \u03b46$$3.H;
    var entries$2$3 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []);
    var panelBgl$3 = p$6.g.createBindGroupLayout($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("entries", entries$2$3)])))));
    var allBgls$3 = ((panelBgl$3 !== null) ? $m_sjs_js_ArrayOpsCommon$().a(bgls$6, [panelBgl$3]) : bgls$6);
    var pl$3 = $m_Ltrivalibs_graphics_shader_layouts$().Y(p$6.g, allBgls$3);
    var downsampleShade = new $c_Ltrivalibs_graphics_painter_Shade(id$3, module$3, null, bgls$6[0], panelBgl$3, pl$3, false, dict$5, dict$6);
    var build$proxy4 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$4) => {
      var body$proxy7 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$3) => {
        var uv$11 = ctx$2$3.af.p("uv");
        var o$1 = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "o");
        var s$1 = ctx$2$3.F.p("samp");
        var tex$1 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex");
        var $x_29 = $m_sjsr_package$();
        var $x_28 = o$1.D($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().cX($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().d2($m_Ltrivalibs_graphics_math_gpu_vec2$().t($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(1.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j(), ctx$2$3.F.p("blurRadius")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j(), ctx$2$3.F.p("res")));
        var AssignTarget_this$3 = ctx$2$3.aw.b5("color");
        var value$proxy4 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().Q($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().Q($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().bD($m_Ltrivalibs_graphics_math_gpu_expr$package$().A(tex$1, uv$11, s$1), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o(), 0.25), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().bD($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().Q($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().Q($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().Q($m_Ltrivalibs_graphics_math_gpu_expr$package$().A(tex$1, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().W(uv$11, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j(), $m_Ltrivalibs_graphics_math_gpu_vec2$().t($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().N(o$1))), s$1), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o(), $m_Ltrivalibs_graphics_math_gpu_expr$package$().A(tex$1, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().W(uv$11, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j(), $m_Ltrivalibs_graphics_math_gpu_vec2$().t($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aB($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().N(o$1)))), s$1)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o(), $m_Ltrivalibs_graphics_math_gpu_expr$package$().A(tex$1, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().W(uv$11, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j(), $m_Ltrivalibs_graphics_math_gpu_vec2$().t($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().M(o$1), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(0.0))), s$1)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o(), $m_Ltrivalibs_graphics_math_gpu_expr$package$().A(tex$1, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().W(uv$11, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j(), $m_Ltrivalibs_graphics_math_gpu_vec2$().t($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aB($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().M(o$1)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(0.0))), s$1)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o(), 0.125)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().bD($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().Q($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().Q($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().Q($m_Ltrivalibs_graphics_math_gpu_expr$package$().A(tex$1, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().W(uv$11, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j(), o$1), s$1), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o(), $m_Ltrivalibs_graphics_math_gpu_expr$package$().A(tex$1, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().W(uv$11, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j(), $m_Ltrivalibs_graphics_math_gpu_vec2$().t($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aB($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().M(o$1)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().N(o$1))), s$1)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o(), $m_Ltrivalibs_graphics_math_gpu_expr$package$().A(tex$1, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().W(uv$11, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j(), $m_Ltrivalibs_graphics_math_gpu_vec2$().t($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().M(o$1), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aB($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().N(o$1)))), s$1)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o(), $m_Ltrivalibs_graphics_math_gpu_expr$package$().A(tex$1, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().ca(uv$11, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j(), o$1), s$1)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o(), 0.0625));
        return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_29.d(new ($d_T.r().C)([$x_28, (((("  " + AssignTarget_this$3.au) + " = ") + value$proxy4.e) + ";")]))), "", "\n", "");
      }));
      var d$3 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
      var ctx$4 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$3), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$3 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$3 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().y;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().y = reg$3;
      try {
        var $x_30 = body$proxy7.b(ctx$4);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().y = prev$3;
      }
      program$3$4.T = $x_30;
      $m_sjs_js_ArrayOps$().Z(reg$3.av, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$9) => ((data$3$3) => {
        $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$9, data$3$3);
      }))(program$3$4)));
    }));
    var program$4 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
    build$proxy4.b(program$4);
    var b$7 = program$4.T;
    var helperFns$proxy4 = program$4.aZ();
    var id$4 = p$6.w;
    p$6.w = ((1 + p$6.w) | 0);
    var names$10 = $m_sjs_js_ArrayOpsCommon$().a(["res"], $m_sjs_js_ArrayOpsCommon$().a(["blurRadius"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])));
    var dict$7 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$7 = 0;
    while ((i$7 < (names$10.length | 0))) {
      dict$7[names$10[i$7]] = i$7;
      i$7 = ((1 + i$7) | 0);
    }
    var names$11 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], []);
    var dict$8 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$8 = 0;
    while ((i$8 < (names$11.length | 0))) {
      dict$8[names$11[i$8]] = i$8;
      i$8 = ((1 + i$8) | 0);
    }
    var sd$4 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$7, helperFns$proxy4);
    var baseWgsl$4 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T(sd$4, $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], [])), $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], [])), $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []), $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["res"], $m_sjs_js_ArrayOpsCommon$().a(["blurRadius"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$()).C.u()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).C.u()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).C.u()], [])))), sd$4.ae, sd$4.ad);
    var wgsl$4 = (baseWgsl$4 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
    var args$proxy4 = $m_sr_ScalaRunTime$().aC(new ($d_sjs_js_Any.r().C)([wgsl$4]));
    console.log(...$m_sjsr_Compat$().aA(args$proxy4));
    var module$4 = p$6.g.createShaderModule($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("code", wgsl$4)])))));
    var descriptors$4 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 2), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], [])))], []);
    var result$4 = [];
    $m_sjs_js_ArrayOps$().Z(descriptors$4, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$4) => ((entries$2$4) => (result$4.push(Painter_this$4.g.createBindGroupLayout($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("entries", entries$2$4)])))))) | 0)))(p$6)));
    var x10 = new $c_T2(result$4, $m_Ltrivalibs_graphics_shader_layouts$().Y(p$6.g, result$4));
    var \u03b46$$4 = x10;
    var bgls$8 = \u03b46$$4.H;
    var entries$3 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []);
    var panelBgl$4 = p$6.g.createBindGroupLayout($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("entries", entries$3)])))));
    var allBgls$4 = ((panelBgl$4 !== null) ? $m_sjs_js_ArrayOpsCommon$().a(bgls$8, [panelBgl$4]) : bgls$8);
    var pl$4 = $m_Ltrivalibs_graphics_shader_layouts$().Y(p$6.g, allBgls$4);
    var upsampleShade = new $c_Ltrivalibs_graphics_painter_Shade(id$4, module$4, null, bgls$8[0], panelBgl$4, pl$4, false, dict$7, dict$8);
    var mipRes = [uRes, uResMip1, uResMip2, uResMip3, uResMip4];
    var bloomLayers = [];
    var Bindable_this$4 = p$6.b1(thresholdShade, (void 0), (void 0), (void 0));
    var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("scene", scenePanel);
    var e2$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("res", uRes);
    var e3$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("threshold", b$2);
    var e4$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var \u03b4scrutinee279 = e1$proxy2.q;
    var idx$3 = (Bindable_this$4.k.at.scene | 0);
    while (((Bindable_this$4.B.length | 0) <= idx$3)) {
      Bindable_this$4.B.push(null);
    }
    Bindable_this$4.B[idx$3] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee279);
    var \u03b4scrutinee283 = e2$proxy2.q;
    var idx$4 = (Bindable_this$4.k.x.res | 0);
    while (((Bindable_this$4.i.length | 0) <= idx$4)) {
      Bindable_this$4.i.push(null);
    }
    Bindable_this$4.i[idx$4] = \u03b4scrutinee283;
    var \u03b4scrutinee293 = e3$proxy1.q;
    var idx$5 = (Bindable_this$4.k.x.threshold | 0);
    while (((Bindable_this$4.i.length | 0) <= idx$5)) {
      Bindable_this$4.i.push(null);
    }
    Bindable_this$4.i[idx$5] = \u03b4scrutinee293;
    var \u03b4scrutinee307 = e4$proxy1.q;
    var idx$6 = (Bindable_this$4.k.x.samp | 0);
    while (((Bindable_this$4.i.length | 0) <= idx$6)) {
      Bindable_this$4.i.push(null);
    }
    Bindable_this$4.i[idx$6] = \u03b4scrutinee307;
    bloomLayers.push(Bindable_this$4);
    var i$9 = 0;
    while ((i$9 < 4)) {
      var mipSource$1 = i$9;
      var mipTarget$1 = ((1 + i$9) | 0);
      var Bindable_this$9 = p$6.b1(downsampleShade, (void 0), mipSource$1, mipTarget$1);
      var e1$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("res", mipRes[((1 + i$9) | 0)]);
      var e2$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("blurRadius", b$4);
      var e3$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
      var \u03b4scrutinee319 = e1$proxy3.q;
      var idx$7 = (Bindable_this$9.k.x.res | 0);
      while (((Bindable_this$9.i.length | 0) <= idx$7)) {
        Bindable_this$9.i.push(null);
      }
      Bindable_this$9.i[idx$7] = \u03b4scrutinee319;
      var \u03b4scrutinee329 = e2$proxy3.q;
      var idx$8 = (Bindable_this$9.k.x.blurRadius | 0);
      while (((Bindable_this$9.i.length | 0) <= idx$8)) {
        Bindable_this$9.i.push(null);
      }
      Bindable_this$9.i[idx$8] = \u03b4scrutinee329;
      var \u03b4scrutinee343 = e3$proxy2.q;
      var idx$9 = (Bindable_this$9.k.x.samp | 0);
      while (((Bindable_this$9.i.length | 0) <= idx$9)) {
        Bindable_this$9.i.push(null);
      }
      Bindable_this$9.i[idx$9] = \u03b4scrutinee343;
      bloomLayers.push(Bindable_this$9);
      i$9 = ((1 + i$9) | 0);
    }
    i$9 = 3;
    while ((i$9 >= 0)) {
      var Bindable_this$13 = p$6.b1(upsampleShade, $m_Ltrivalibs_graphics_painter_BlendState$().cD, ((1 + i$9) | 0), i$9);
      var e1$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("res", mipRes[i$9]);
      var e2$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("blurRadius", b$4);
      var e3$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
      var \u03b4scrutinee355 = e1$proxy4.q;
      var idx$10 = (Bindable_this$13.k.x.res | 0);
      while (((Bindable_this$13.i.length | 0) <= idx$10)) {
        Bindable_this$13.i.push(null);
      }
      Bindable_this$13.i[idx$10] = \u03b4scrutinee355;
      var \u03b4scrutinee365 = e2$proxy4.q;
      var idx$11 = (Bindable_this$13.k.x.blurRadius | 0);
      while (((Bindable_this$13.i.length | 0) <= idx$11)) {
        Bindable_this$13.i.push(null);
      }
      Bindable_this$13.i[idx$11] = \u03b4scrutinee365;
      var \u03b4scrutinee379 = e3$proxy3.q;
      var idx$12 = (Bindable_this$13.k.x.samp | 0);
      while (((Bindable_this$13.i.length | 0) <= idx$12)) {
        Bindable_this$13.i.push(null);
      }
      Bindable_this$13.i[idx$12] = \u03b4scrutinee379;
      bloomLayers.push(Bindable_this$13);
      i$9 = ((i$9 - 1) | 0);
    }
    var bloomPanel = p$6.c8((void 0), (void 0), (void 0), (void 0), (void 0), 5, (void 0), "rgba16float", (void 0), (void 0), (void 0), (void 0), bloomLayers);
    var build$proxy5 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$5) => {
      var body$proxy9 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$4) => {
        var $x_31 = $m_sjsr_package$();
        var AssignTarget_this$4 = ctx$2$4.aw.b5("color");
        var value$proxy7 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().Q($m_Ltrivalibs_graphics_math_gpu_expr$package$().A($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "scene"), ctx$2$4.af.p("uv"), ctx$2$4.F.p("samp")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().d3($m_Ltrivalibs_graphics_math_gpu_expr$package$().A($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "bloom"), ctx$2$4.af.p("uv"), ctx$2$4.F.p("samp")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().o(), ctx$2$4.F.p("intensity")));
        return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_31.d(new ($d_T.r().C)([(((("  " + AssignTarget_this$4.au) + " = ") + value$proxy7.e) + ";")]))), "", "\n", "");
      }));
      var d$4 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
      var ctx$5 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$4), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$4 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$4 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().y;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().y = reg$4;
      try {
        var $x_32 = body$proxy9.b(ctx$5);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().y = prev$4;
      }
      program$3$5.T = $x_32;
      $m_sjs_js_ArrayOps$().Z(reg$4.av, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$10) => ((data$3$4) => {
        $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$10, data$3$4);
      }))(program$3$5)));
    }));
    var program$5 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
    build$proxy5.b(program$5);
    var b$8 = program$5.T;
    var helperFns$proxy5 = program$5.aZ();
    var id$5 = p$6.w;
    p$6.w = ((1 + p$6.w) | 0);
    var names$13 = $m_sjs_js_ArrayOpsCommon$().a(["intensity"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []));
    var dict$9 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$10 = 0;
    while ((i$10 < (names$13.length | 0))) {
      dict$9[names$13[i$10]] = i$10;
      i$10 = ((1 + i$10) | 0);
    }
    var names$14 = $m_sjs_js_ArrayOpsCommon$().a(["scene"], $m_sjs_js_ArrayOpsCommon$().a(["bloom"], []));
    var dict$10 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$11 = 0;
    while ((i$11 < (names$14.length | 0))) {
      dict$10[names$14[i$11]] = i$11;
      i$11 = ((1 + i$11) | 0);
    }
    var sd$5 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$8, helperFns$proxy5);
    var baseWgsl$5 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T(sd$5, $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], [])), $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], [])), $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []), $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["intensity"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).C.u()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).C.u()], []))), sd$5.ae, sd$5.ad);
    var wgsl$5 = (baseWgsl$5 + "\n\n@group(1) @binding(0) var scene: texture_2d<f32>;\n@group(1) @binding(1) var bloom: texture_2d<f32>;");
    var args$proxy5 = $m_sr_ScalaRunTime$().aC(new ($d_sjs_js_Any.r().C)([wgsl$5]));
    console.log(...$m_sjsr_Compat$().aA(args$proxy5));
    var module$5 = p$6.g.createShaderModule($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("code", wgsl$5)])))));
    var descriptors$5 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []))], []);
    var result$5 = [];
    $m_sjs_js_ArrayOps$().Z(descriptors$5, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$5) => ((entries$2$5) => (result$5.push(Painter_this$5.g.createBindGroupLayout($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("entries", entries$2$5)])))))) | 0)))(p$6)));
    var x13 = new $c_T2(result$5, $m_Ltrivalibs_graphics_shader_layouts$().Y(p$6.g, result$5));
    var \u03b46$$5 = x13;
    var bgls$10 = \u03b46$$5.H;
    var entries$4 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []));
    var panelBgl$5 = p$6.g.createBindGroupLayout($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([new $c_T2("entries", entries$4)])))));
    var allBgls$5 = ((panelBgl$5 !== null) ? $m_sjs_js_ArrayOpsCommon$().a(bgls$10, [panelBgl$5]) : bgls$10);
    var pl$5 = $m_Ltrivalibs_graphics_shader_layouts$().Y(p$6.g, allBgls$5);
    var compositeShade = new $c_Ltrivalibs_graphics_painter_Shade(id$5, module$5, null, bgls$10[0], panelBgl$5, pl$5, false, dict$9, dict$10);
    var Bindable_this$17 = p$6.b1(compositeShade, (void 0), (void 0), (void 0));
    var e1$proxy5 = new $c_Ltrivalibs_graphics_painter_BindPair("scene", scenePanel);
    var e2$proxy5 = new $c_Ltrivalibs_graphics_painter_BindPair("bloom", bloomPanel);
    var e3$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("intensity", b$3);
    var e4$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var \u03b4scrutinee460 = e1$proxy5.q;
    var idx$13 = (Bindable_this$17.k.at.scene | 0);
    while (((Bindable_this$17.B.length | 0) <= idx$13)) {
      Bindable_this$17.B.push(null);
    }
    Bindable_this$17.B[idx$13] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee460);
    var \u03b4scrutinee472 = e2$proxy5.q;
    var idx$14 = (Bindable_this$17.k.at.bloom | 0);
    while (((Bindable_this$17.B.length | 0) <= idx$14)) {
      Bindable_this$17.B.push(null);
    }
    Bindable_this$17.B[idx$14] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee472);
    var \u03b4scrutinee476 = e3$proxy4.q;
    var idx$15 = (Bindable_this$17.k.x.intensity | 0);
    while (((Bindable_this$17.i.length | 0) <= idx$15)) {
      Bindable_this$17.i.push(null);
    }
    Bindable_this$17.i[idx$15] = \u03b4scrutinee476;
    var \u03b4scrutinee486 = e4$proxy2.q;
    var idx$16 = (Bindable_this$17.k.x.samp | 0);
    while (((Bindable_this$17.i.length | 0) <= idx$16)) {
      Bindable_this$17.i.push(null);
    }
    Bindable_this$17.i[idx$16] = \u03b4scrutinee486;
    var canvasPanel = p$6.c8((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), Bindable_this$17, (void 0));
    p$6.dN(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((v1$2, v2$2) => {
      var w = (+v1$2);
      var h = (+v2$2);
      var value$proxy8 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(w, h);
      uRes.P.S(uRes.m, value$proxy8);
      var $x_34 = uRes.O.queue;
      var $x_33 = uRes.I;
      var s$proxy5 = uRes.m;
      $x_34.writeBuffer($x_33, 0.0, s$proxy5.dv.buffer);
      var value$proxy9 = new $c_Ltrivalibs_graphics_math_cpu_Vec2((0.5 * w), (0.5 * h));
      uResMip1.P.S(uResMip1.m, value$proxy9);
      var $x_36 = uResMip1.O.queue;
      var $x_35 = uResMip1.I;
      var s$proxy6 = uResMip1.m;
      $x_36.writeBuffer($x_35, 0.0, s$proxy6.dv.buffer);
      var value$proxy10 = new $c_Ltrivalibs_graphics_math_cpu_Vec2((0.25 * w), (0.25 * h));
      uResMip2.P.S(uResMip2.m, value$proxy10);
      var $x_38 = uResMip2.O.queue;
      var $x_37 = uResMip2.I;
      var s$proxy7 = uResMip2.m;
      $x_38.writeBuffer($x_37, 0.0, s$proxy7.dv.buffer);
      var value$proxy11 = new $c_Ltrivalibs_graphics_math_cpu_Vec2((0.125 * w), (0.125 * h));
      uResMip3.P.S(uResMip3.m, value$proxy11);
      var $x_40 = uResMip3.O.queue;
      var $x_39 = uResMip3.I;
      var s$proxy8 = uResMip3.m;
      $x_40.writeBuffer($x_39, 0.0, s$proxy8.dv.buffer);
      var value$proxy12 = new $c_Ltrivalibs_graphics_math_cpu_Vec2((0.0625 * w), (0.0625 * h));
      uResMip4.P.S(uResMip4.m, value$proxy12);
      var $x_42 = uResMip4.O.queue;
      var $x_41 = uResMip4.I;
      var s$proxy9 = uResMip4.m;
      $x_42.writeBuffer($x_41, 0.0, s$proxy9.dv.buffer);
    })));
    $m_Ltrivalibs_utils_animation_animate$package$().dg(((time, p$2) => ((arg1$2) => {
      var tpf = (+arg1$2);
      time.an = (time.an + (0.001 * tpf));
      var value$proxy13 = Math.fround(time.an);
      b.P.S(b.m, value$proxy13);
      var $x_44 = b.O.queue;
      var $x_43 = b.I;
      var s$proxy10 = b.m;
      $x_44.writeBuffer($x_43, 0.0, s$proxy10.dv.buffer);
      var a = time.an;
      var value$proxy14 = Math.fround((4.0 + (4.0 * (+Math.sin(a)))));
      b$4.P.S(b$4.m, value$proxy14);
      var $x_46 = b$4.O.queue;
      var $x_45 = b$4.I;
      var s$proxy11 = b$4.m;
      $x_46.writeBuffer($x_45, 0.0, s$proxy11.dv.buffer);
      $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$2, scenePanel);
      $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$2, bloomPanel);
      $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$2, canvasPanel);
      p$2.dZ(canvasPanel);
    }))(new $c_sr_DoubleRef(0.0), p$6));
  })));
});
var $d_Lsketches_post_bloom_Bloom$package$ = new $TypeData().i($c_Lsketches_post_bloom_Bloom$package$, "sketches.post.bloom.Bloom$package$", ({
  bP: 1
}));
var $n_Lsketches_post_bloom_Bloom$package$;
function $m_Lsketches_post_bloom_Bloom$package$() {
  if ((!$n_Lsketches_post_bloom_Bloom$package$)) {
    $n_Lsketches_post_bloom_Bloom$package$ = new $c_Lsketches_post_bloom_Bloom$package$();
  }
  return $n_Lsketches_post_bloom_Bloom$package$;
}
function $s_Lsketches_post_bloom_bloom__main__AT__V(args) {
  try {
    $m_Lsketches_post_bloom_Bloom$package$().di();
  } catch (e) {
    if (false) {
      $m_s_util_CommandLineParser$().e0(e);
    } else {
      throw e;
    }
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_BufferBinding(buffer, device, uv) {
  this.m = null;
  this.O = null;
  this.P = null;
  this.I = null;
  this.m = buffer;
  this.O = device;
  this.P = uv;
  var b = (buffer.dv.byteLength | 0);
  var value = ((b < 16) ? 16 : b);
  var $x_1 = device.createBuffer(({
    "size": value,
    "usage": 72
  }));
  this.I = $x_1;
}
$p = $c_Ltrivalibs_graphics_buffers_BufferBinding.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_BufferBinding;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_BufferBinding() {
}
$h_Ltrivalibs_graphics_buffers_BufferBinding.prototype = $p;
function $isArrayOf_Ltrivalibs_graphics_buffers_BufferBinding(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a7)));
}
var $d_Ltrivalibs_graphics_buffers_BufferBinding = new $TypeData().i($c_Ltrivalibs_graphics_buffers_BufferBinding, "trivalibs.graphics.buffers.BufferBinding", ({
  a7: 1
}));
function $f_Ltrivalibs_graphics_math_Vec2MutableOps__set__O__Ltrivalibs_graphics_math_Vec2Mutable__O__Ltrivalibs_graphics_math_Vec2Base__V($thiz, v, x$2, other, x$4) {
  x$2.d7(v, (+x$4.M(other)));
  x$2.d8(v, (+x$4.N(other)));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec2(x, y) {
  this.bM = 0.0;
  this.bN = 0.0;
  this.bM = x;
  this.bN = y;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec2.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec2;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec2() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec2.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec2 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec2, "trivalibs.graphics.math.cpu.Vec2", ({
  c0: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$() {
  this.ct = null;
  this.cu = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$.prototype = $p;
$p.e8 = (function() {
  if ((!this.cu)) {
    this.ct = new $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$4();
    this.cu = true;
  }
  return this.ct;
});
var $d_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$, "trivalibs.graphics.math.cpu.vec2$package$Vec2Buffer$", ({
  c2: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$;
function $m_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$ = new $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$;
}
function $ct_Ltrivalibs_graphics_math_gpu_Expr__T__($thiz, wgsl) {
  $thiz.e = wgsl;
  return $thiz;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_Expr() {
  this.e = null;
}
$p = $c_Ltrivalibs_graphics_math_gpu_Expr.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_Expr;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_Expr() {
}
$h_Ltrivalibs_graphics_math_gpu_Expr.prototype = $p;
$p.n = (function() {
  return this.e;
});
var $d_Ltrivalibs_graphics_math_gpu_Expr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_Expr, "trivalibs.graphics.math.gpu.Expr", ({
  K: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_expr$package$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_expr$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_expr$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_expr$package$() {
}
$h_Ltrivalibs_graphics_math_gpu_expr$package$.prototype = $p;
$p.A = (function(tex, uv, sampler) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("textureSample(" + tex.e) + ", ") + sampler.e) + ", ") + uv.e) + ")"));
});
$p.dW = (function(onFalse, onTrue, cond) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("select(" + onFalse.e) + ", ") + onTrue.e) + ", ") + cond.e) + ")"));
});
$p.dv = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.e) + " > ") + b.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_expr$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_expr$package$, "trivalibs.graphics.math.gpu.expr$package$", ({
  c6: 1
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
  this.cv = null;
  this.cw = false;
  this.cx = null;
  this.cy = false;
  this.cz = null;
  this.cA = false;
  this.cB = null;
  this.cC = false;
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$.prototype = $p;
$p.dw = (function(v) {
  var s = ("" + v);
  return (((($f_T__indexOf__I__I(s, 46) >= 0) || ($f_T__indexOf__I__I(s, 69) >= 0)) || ($f_T__indexOf__I__I(s, 101) >= 0)) ? s : (s + ".0"));
});
$p.h = (function() {
  if ((!this.cw)) {
    this.cv = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1();
    this.cw = true;
  }
  return this.cv;
});
$p.j = (function() {
  if ((!this.cy)) {
    this.cx = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4();
    this.cy = true;
  }
  return this.cx;
});
$p.a0 = (function() {
  if ((!this.cA)) {
    this.cz = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5();
    this.cA = true;
  }
  return this.cz;
});
$p.o = (function() {
  if ((!this.cC)) {
    this.cB = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6();
    this.cC = true;
  }
  return this.cB;
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$, "trivalibs.graphics.math.gpu.float_expr$package$", ({
  c7: 1
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
$p.t = (function(x, y) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("vec2<f32>(" + x.e) + ", ") + y.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_vec2$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec2$, "trivalibs.graphics.math.gpu.vec2$", ({
  ch: 1
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
$p.ah = (function(x, y, z) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("vec3<f32>(" + x.e) + ", ") + y.e) + ", ") + z.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_vec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec3$, "trivalibs.graphics.math.gpu.vec3$", ({
  ci: 1
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
$p.cV = (function(x, y, z, w) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((((("vec4<f32>(" + x.e) + ", ") + y.e) + ", ") + z.e) + ", ") + w.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_vec4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec4$, "trivalibs.graphics.math.gpu.vec4$", ({
  cj: 1
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
  this.q = null;
  this.q = value;
}
$p = $c_Ltrivalibs_graphics_painter_BindPair.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_BindPair;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_BindPair() {
}
$h_Ltrivalibs_graphics_painter_BindPair.prototype = $p;
var $d_Ltrivalibs_graphics_painter_BindPair = new $TypeData().i($c_Ltrivalibs_graphics_painter_BindPair, "trivalibs.graphics.painter.BindPair", ({
  ck: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_BlendState$() {
  this.cD = null;
  $n_Ltrivalibs_graphics_painter_BlendState$ = this;
  new ($a_Ltrivalibs_graphics_painter_BlendState())(new ($a_Ltrivalibs_graphics_painter_BlendFn())("src-alpha", "one-minus-src-alpha"), new ($a_Ltrivalibs_graphics_painter_BlendFn())("one", "one-minus-src-alpha"));
  this.cD = new ($a_Ltrivalibs_graphics_painter_BlendState())(new ($a_Ltrivalibs_graphics_painter_BlendFn())("src-alpha", "one"), new ($a_Ltrivalibs_graphics_painter_BlendFn())("one", "one"));
  new ($a_Ltrivalibs_graphics_painter_BlendState())(new ($a_Ltrivalibs_graphics_painter_BlendFn())("dst", "zero"), new ($a_Ltrivalibs_graphics_painter_BlendFn())("dst-alpha", "zero"));
}
$p = $c_Ltrivalibs_graphics_painter_BlendState$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_BlendState$;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_BlendState$() {
}
$h_Ltrivalibs_graphics_painter_BlendState$.prototype = $p;
var $d_Ltrivalibs_graphics_painter_BlendState$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_BlendState$, "trivalibs.graphics.painter.BlendState$", ({
  cm: 1
}));
var $n_Ltrivalibs_graphics_painter_BlendState$;
function $m_Ltrivalibs_graphics_painter_BlendState$() {
  if ((!$n_Ltrivalibs_graphics_painter_BlendState$)) {
    $n_Ltrivalibs_graphics_painter_BlendState$ = new $c_Ltrivalibs_graphics_painter_BlendState$();
  }
  return $n_Ltrivalibs_graphics_painter_BlendState$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter) {
  this.bm = null;
  this.bm = [];
}
$p = $c_Ltrivalibs_graphics_painter_InstanceList.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_InstanceList;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_InstanceList() {
}
$h_Ltrivalibs_graphics_painter_InstanceList.prototype = $p;
$p.z = (function() {
  return (this.bm.length | 0);
});
var $d_Ltrivalibs_graphics_painter_InstanceList = new $TypeData().i($c_Ltrivalibs_graphics_painter_InstanceList, "trivalibs.graphics.painter.InstanceList", ({
  cn: 1
}));
function $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var w = $thiz.ea();
  var h = $thiz.dA();
  panel.ds(w, h);
  var msaa = panel.as;
  var encoder = $thiz.g.createCommandEncoder();
  var panelFormats = panel.c2();
  var colorAttachments = [];
  var t = 0;
  while ((t < panel.e4())) {
    if ((panel.bv !== null)) {
      matchResult6: {
        var \u03b412$;
        var x18 = panel.bv;
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
      var r$2 = (+\u03b412$.bd);
      var g$2 = (+\u03b412$.be);
      var b$2 = (+\u03b412$.bf);
      var a$2 = (+\u03b412$.bg);
      if (msaa) {
        var _2 = panel.d1(t);
        var _2$1 = panel.bH(t);
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
        var _2$3 = panel.bH(t);
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
      var _2$5 = panel.d1(t);
      var _2$6 = panel.bH(t);
      var attachment = ({
        "view": _2$5,
        "resolveTarget": _2$6,
        "loadOp": "load",
        "storeOp": "store"
      });
    } else {
      var _2$7 = panel.bH(t);
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
  if (panel.aR) {
    var _2$8 = panel.dm();
    passDesc.depthStencilAttachment = ({
      "view": _2$8,
      "depthLoadOp": "clear",
      "depthStoreOp": "store",
      "depthClearValue": 1.0
    });
  }
  var shapePass = encoder.beginRenderPass(passDesc);
  var i = 0;
  while ((i < (panel.bw.length | 0))) {
    $p_Ltrivalibs_graphics_painter_Painter__renderShapeOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shape__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_Panel__V($thiz, shapePass, panel.bw[i], panel.aR, msaa, panelFormats, panel);
    i = ((1 + i) | 0);
  }
  shapePass.end();
  $thiz.a2.submit([encoder.finish()]);
  var srcView = panel.e5();
  var dstView = panel.dR();
  var hasPongLayers = false;
  var curEncoder = null;
  var curPass = null;
  var j = 0;
  while ((j < (panel.a7.length | 0))) {
    var layer = panel.a7[j];
    var hasPanelLayout = (layer.k.aT !== null);
    var slot0Manual = ((hasPanelLayout && ((layer.B.length | 0) > 0)) && (layer.B[0] !== null));
    var needsPingPong = (hasPanelLayout && (!slot0Manual));
    if ((layer.aJ >= 0)) {
      if ((curPass !== null)) {
        curPass.end();
        $thiz.a2.submit([curEncoder.finish()]);
        curPass = null;
      }
      var mipDstView = panel.b6(0, layer.aJ);
      var mipSrcView = ((layer.bn >= 0) ? panel.b6(0, layer.bn) : srcView);
      var enc = $thiz.g.createCommandEncoder();
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
      $thiz.a2.submit([enc.finish()]);
    } else if (needsPingPong) {
      hasPongLayers = true;
      if ((curPass !== null)) {
        curPass.end();
        $thiz.a2.submit([curEncoder.finish()]);
        curPass = null;
      }
      var enc$2 = $thiz.g.createCommandEncoder();
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
      $thiz.a2.submit([enc$2.finish()]);
      var tmp = srcView;
      srcView = dstView;
      dstView = tmp;
    } else {
      if ((curPass === null)) {
        curEncoder = $thiz.g.createCommandEncoder();
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
    $thiz.a2.submit([curEncoder.finish()]);
  }
  if (hasPongLayers) {
    panel.aO = srcView;
  } else {
    panel.aO = null;
  }
  var hasMipTargetLayers = false;
  var mi = 0;
  while ((mi < (panel.a7.length | 0))) {
    if ((panel.a7[mi].aJ >= 0)) {
      hasMipTargetLayers = true;
    }
    mi = ((1 + mi) | 0);
  }
  if (((panel.c7() > 1) && (!hasMipTargetLayers))) {
    $p_Ltrivalibs_graphics_painter_Painter__generateMipmaps__Ltrivalibs_graphics_painter_Panel__V($thiz, panel);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__blitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz) {
  if ((!$thiz.cJ)) {
    $thiz.cI = $thiz.g.createSampler(({
      "magFilter": "nearest",
      "minFilter": "nearest"
    }));
    $thiz.cJ = true;
  }
  return $thiz.cI;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz) {
  if ((!$thiz.cF)) {
    var $x_2 = $thiz.g;
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
    $thiz.cE = $x_1;
    $thiz.cF = true;
  }
  return $thiz.cE;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitPipeline__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz) {
  if ((!$thiz.cH)) {
    var module = $thiz.g.createShaderModule(({
      "code": "\nstruct VsOut {\n  @builtin(position) pos: vec4f,\n  @location(0) uv: vec2f,\n}\n\n@vertex\nfn vs_main(@builtin(vertex_index) vi: u32) -> VsOut {\n  let x = f32((vi << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(vi & 2u) * 2.0 - 1.0;\n  var out: VsOut;\n  out.pos = vec4f(x, y, 0.0, 1.0);\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  return out;\n}\n\n@group(0) @binding(0) var blit_texture: texture_2d<f32>;\n@group(0) @binding(1) var blit_sampler: sampler;\n\n@fragment\nfn fs_main(in: VsOut) -> @location(0) vec4f {\n  return textureSample(blit_texture, blit_sampler, in.uv);\n}\n"
    }));
    var $x_1 = $thiz.g;
    var _2 = [$p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz)];
    var pipelineLayout = $x_1.createPipelineLayout(({
      "bindGroupLayouts": _2
    }));
    var $x_3 = $thiz.g;
    var _2$1 = ({
      "module": module,
      "entryPoint": "vs_main"
    });
    var f$proxy4 = $thiz.ao;
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
    $thiz.cG = $x_2;
    $thiz.cH = true;
  }
  return $thiz.cG;
}
function $p_Ltrivalibs_graphics_painter_Painter__mipBlitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz) {
  if ((!$thiz.cM)) {
    $thiz.cL = $thiz.g.createSampler(({
      "magFilter": "linear",
      "minFilter": "linear"
    }));
    $thiz.cM = true;
  }
  return $thiz.cL;
}
function $p_Ltrivalibs_graphics_painter_Painter__getMipBlitPipeline__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, format) {
  if ((!(!(!(!$thiz.bo.hasOwnProperty(format)))))) {
    return $thiz.bo[format];
  } else {
    var module = $thiz.g.createShaderModule(({
      "code": "\nstruct VsOut {\n  @builtin(position) pos: vec4f,\n  @location(0) uv: vec2f,\n}\n\n@vertex\nfn vs_main(@builtin(vertex_index) vi: u32) -> VsOut {\n  let x = f32((vi << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(vi & 2u) * 2.0 - 1.0;\n  var out: VsOut;\n  out.pos = vec4f(x, y, 0.0, 1.0);\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  return out;\n}\n\n@group(0) @binding(0) var blit_texture: texture_2d<f32>;\n@group(0) @binding(1) var blit_sampler: sampler;\n\n@fragment\nfn fs_main(in: VsOut) -> @location(0) vec4f {\n  return textureSample(blit_texture, blit_sampler, in.uv);\n}\n"
    }));
    var $x_1 = $thiz.g;
    var _2 = [$p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz)];
    var pl = $x_1.createPipelineLayout(({
      "bindGroupLayouts": _2
    }));
    var $x_2 = $thiz.g;
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
    $thiz.bo[format] = p;
    return p;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__generateMipmaps__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var mipCount = panel.c7();
  if ((mipCount <= 1)) {
    return (void 0);
  }
  var fmt = (((panel.ar.length | 0) > 0) ? panel.ar[0] : $thiz.ao);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getMipBlitPipeline__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, fmt);
  var i = 1;
  while ((i < mipCount)) {
    var srcView = panel.b6(0, ((i - 1) | 0));
    var dstView = panel.b6(0, i);
    var encoder = $thiz.g.createCommandEncoder();
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
    var $x_1 = $thiz.g;
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
    $thiz.a2.submit([encoder.finish()]);
    i = ((1 + i) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, bindings, panelBindings) {
  $thiz.J.length = (bindings.length | 0);
  var i = 0;
  while ((i < (bindings.length | 0))) {
    $thiz.J[i] = bindings[i];
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
  var dict = panel.bR;
  var keys = Object.keys(dict);
  var i = 0;
  while ((i < (keys.length | 0))) {
    var name = keys[i];
    var value = dict[name];
    if ((!(!(!(!shade.x.hasOwnProperty(name)))))) {
      var idx = (shade.x[name] | 0);
      if (((idx >= (workBindings.length | 0)) || (workBindings[idx] === null))) {
        while (((workBindings.length | 0) <= idx)) {
          workBindings.push(null);
        }
        workBindings[idx] = value;
      }
    } else if ((!(!(!(!shade.at.hasOwnProperty(name)))))) {
      var idx$2 = (shade.at[name] | 0);
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
  while ((i < (inst.aW().length | 0))) {
    if ((inst.aW()[i] !== null)) {
      while (((workBindings.length | 0) <= i)) {
        workBindings.push(null);
      }
      workBindings[i] = inst.aW()[i];
    }
    i = ((1 + i) | 0);
  }
  var j = 0;
  while ((j < (inst.b2().length | 0))) {
    if ((inst.b2()[j] !== null)) {
      while (((workPanelBindings.length | 0) <= j)) {
        workPanelBindings.push(null);
      }
      workPanelBindings[j] = inst.b2()[j];
    }
    j = ((1 + j) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel) {
  return ((panel !== null) && ((Object.keys(panel.bR).length | 0) > 0));
}
function $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shade, bindings) {
  if ((((bindings.length | 0) > 0) && (shade.bS !== null))) {
    var entries = [];
    var i = 0;
    while ((i < (bindings.length | 0))) {
      var b = bindings[i];
      if ((b !== null)) {
        entries.push($p_Ltrivalibs_graphics_painter_Painter__bindingEntry__I__O__sjs_js_Dynamic($thiz, i, b));
      }
      i = ((1 + i) | 0);
    }
    var $x_1 = $thiz.g;
    var _2 = shade.bS;
    var bg = $x_1.createBindGroup(({
      "layout": _2,
      "entries": entries
    }));
    pass.setBindGroup(0, bg);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shade, panelBindings, srcView) {
  if ((shade.aT !== null)) {
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
        var view = ((!(!pb.depth)) ? pb.panel.dl() : pb.panel.b6((pb.index | 0), (pb.mipLevel | 0)));
        var value = k;
        entries.push(({
          "binding": value,
          "resource": view
        }));
      }
      k = ((1 + k) | 0);
    }
    if (((entries.length | 0) > 0)) {
      var $x_1 = $thiz.g;
      var _2 = shade.aT;
      var pg = $x_1.createBindGroup(({
        "layout": _2,
        "entries": entries
      }));
      pass.setBindGroup(1, pg);
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__renderShapeOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shape__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_Panel__V($thiz, pass, shape, depthTest, multisample, formats, panel) {
  var fmts = ((formats !== null) ? formats : [$thiz.ao]);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, shape.a8(), shape.eh(), fmts, depthTest, multisample, shape.a3().eo(), shape.ei(), shape.a3().ej());
  pass.setPipeline(pipeline);
  pass.setVertexBuffer(0, shape.a3().ep());
  var opt$proxy9 = shape.a3().dB();
  var hasIndex = (opt$proxy9 !== null);
  if (hasIndex) {
    pass.setIndexBuffer(shape.a3().dB(), shape.a3().el());
  }
  var instanceCount = shape.dG().z();
  var hasPanelBinds = $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel);
  if ((instanceCount === 0)) {
    if (hasPanelBinds) {
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, shape.aW(), shape.b2());
      $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shape.a8(), $thiz.J, $thiz.r);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.a8(), $thiz.J);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.a8(), $thiz.r, null);
    } else {
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.a8(), shape.aW());
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.a8(), shape.b2(), null);
    }
    if (hasIndex) {
      pass.drawIndexed(shape.a3().dC());
    } else {
      pass.draw(shape.a3().e9());
    }
  } else {
    var i = 0;
    while ((i < instanceCount)) {
      var inst = shape.dG().bm[i];
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, shape.aW(), shape.b2());
      if (hasPanelBinds) {
        $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shape.a8(), $thiz.J, $thiz.r);
      }
      $p_Ltrivalibs_graphics_painter_Painter__applyInstanceBindings__Ltrivalibs_graphics_painter_Instance__sjs_js_Array__sjs_js_Array__V($thiz, inst, $thiz.J, $thiz.r);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.a8(), $thiz.J);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.a8(), $thiz.r, null);
      if (hasIndex) {
        pass.drawIndexed(shape.a3().dC());
      } else {
        pass.draw(shape.a3().e9());
      }
      i = ((1 + i) | 0);
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V($thiz, pass, layer, depthTest, multisample, formats, srcView, panel) {
  var fmts = ((formats !== null) ? formats : [$thiz.ao]);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, layer.k, layer.bP, fmts, depthTest, multisample, "triangle-list", "none", "ccw");
  pass.setPipeline(pipeline);
  var instanceCount = layer.bQ.z();
  var hasPanelBinds = $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel);
  if ((instanceCount === 0)) {
    if (hasPanelBinds) {
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, layer.i, layer.B);
      $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, layer.k, $thiz.J, $thiz.r);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, layer.k, $thiz.J);
      var effectiveSrcView = (((($thiz.r.length | 0) > 0) && ($thiz.r[0] !== null)) ? null : srcView);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.k, $thiz.r, effectiveSrcView);
    } else {
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, layer.k, layer.i);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.k, layer.B, srcView);
    }
    pass.draw(3);
  } else {
    var i = 0;
    while ((i < instanceCount)) {
      var inst = layer.bQ.bm[i];
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, layer.i, layer.B);
      if (hasPanelBinds) {
        $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, layer.k, $thiz.J, $thiz.r);
      }
      $p_Ltrivalibs_graphics_painter_Painter__applyInstanceBindings__Ltrivalibs_graphics_painter_Instance__sjs_js_Array__sjs_js_Array__V($thiz, inst, $thiz.J, $thiz.r);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, layer.k, $thiz.J);
      var effectiveSrcView$2 = (((($thiz.r.length | 0) > 0) && ($thiz.r[0] !== null)) ? null : srcView);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.k, $thiz.r, effectiveSrcView$2);
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
  var key = ((((((((((((((shade.cP + "|") + $p_Ltrivalibs_graphics_painter_Painter__blendKeyStr__Ltrivalibs_graphics_painter_BlendState__T($thiz, blendState)) + "|") + formats.join(",")) + "|") + depthTest) + "|") + multisample) + "|") + topology) + "|") + cullMode) + "|") + frontFace);
  if ((!(!(!(!$thiz.bp.hasOwnProperty(key)))))) {
    return $thiz.bp[key];
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
    if ((shade.bT !== null)) {
      var _2 = shade.bz;
      var _2$1 = [shade.bT];
      var vertexDescriptor = ({
        "module": _2,
        "entryPoint": "vs_main",
        "buffers": _2$1
      });
    } else {
      var _2$2 = shade.bz;
      var vertexDescriptor = ({
        "module": _2$2,
        "entryPoint": "vs_main"
      });
    }
    var _2$3 = shade.cQ;
    var _2$4 = shade.bz;
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
    var p = $thiz.g.createRenderPipeline(desc);
    $thiz.bp[key] = p;
    return p;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__bindingEntry__I__O__sjs_js_Dynamic($thiz, i, b) {
  if ((b instanceof $c_Ltrivalibs_graphics_buffers_BufferBinding)) {
    var _2 = b.I;
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
  this.g = null;
  this.a2 = null;
  this.aK = null;
  this.cK = null;
  this.ao = null;
  this.bp = null;
  this.w = 0;
  this.bq = null;
  this.cN = null;
  this.cO = false;
  this.cI = null;
  this.cJ = false;
  this.cE = null;
  this.cF = false;
  this.cG = null;
  this.cH = false;
  this.cL = null;
  this.cM = false;
  this.bo = null;
  this.J = null;
  this.r = null;
  this.g = device;
  this.a2 = queue;
  this.aK = canvas;
  this.cK = context;
  this.ao = preferredFormat;
  this.bp = ({});
  this.w = 0;
  this.bq = [];
  this.bo = ({});
  this.J = [];
  this.r = [];
}
$p = $c_Ltrivalibs_graphics_painter_Painter.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Painter;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Painter() {
}
$h_Ltrivalibs_graphics_painter_Painter.prototype = $p;
$p.dN = (function(cb) {
  this.bq.push(cb);
  cb.cU((this.aK.width | 0), (this.aK.height | 0));
});
$p.du = (function(w, h) {
  var k = 0;
  while ((k < (this.bq.length | 0))) {
    this.bq[k].cU(w, h);
    k = ((1 + k) | 0);
  }
});
$p.ea = (function() {
  return (this.aK.width | 0);
});
$p.dA = (function() {
  return (this.aK.height | 0);
});
$p.dV = (function() {
  if ((!this.cO)) {
    this.cN = this.g.createSampler(({
      "magFilter": "linear",
      "minFilter": "linear"
    }));
    this.cO = true;
  }
  return this.cN;
});
$p.b1 = (function(shade, blendState, mipSource, mipTarget) {
  return new $c_Ltrivalibs_graphics_painter_Layer(this, shade).dY(blendState, mipSource, mipTarget);
});
$p.c8 = (function(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers) {
  return new $c_Ltrivalibs_graphics_painter_Panel(this).dX(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers);
});
$p.dZ = (function(panel) {
  var encoder = this.g.createCommandEncoder();
  var swapChainView = this.cK.getCurrentTexture().createView();
  var _2 = [({
    "view": swapChainView,
    "loadOp": "load",
    "storeOp": "store"
  })];
  var pass = encoder.beginRenderPass(({
    "colorAttachments": _2
  }));
  var $x_1 = this.g;
  var _2$1 = $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout(this);
  var _2$2 = panel.dQ();
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
  this.a2.submit([encoder.finish()]);
});
var $d_Ltrivalibs_graphics_painter_Painter = new $TypeData().i($c_Ltrivalibs_graphics_painter_Painter, "trivalibs.graphics.painter.Painter", ({
  cp: 1
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
$p.dF = (function(canvas) {
  var maybeGpu = $m_Ltrivalibs_graphics_painter_WebGPU$().dy();
  if ((maybeGpu === (void 0))) {
    return Promise.reject(Error("WebGPU is not supported"));
  } else {
    var promise$proxy1 = maybeGpu.requestAdapter();
    var promise$proxy3 = promise$proxy1.then(((value$2) => {
      if ((value$2 === null)) {
        throw new $c_ju_NoSuchElementException("Failed to get WebGPU adapter");
      } else {
        return value$2;
      }
    }));
    var f$proxy11 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((adapter$2) => {
      var promise$proxy2 = adapter$2.requestDevice();
      var f$proxy10 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((device$2) => {
        var queue = device$2.queue;
        var context = $m_Ltrivalibs_graphics_painter_WebGPU$().dx(canvas);
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
            painter.du(rw, rh);
          }
        }));
        observer.observe(canvas);
        return painter;
      }));
      return promise$proxy2.then($m_sjs_js_Any$().aY(f$proxy10));
    }));
    return promise$proxy3.then($m_sjs_js_Any$().aY(f$proxy11));
  }
});
$p.dE = (function(canvas, setup) {
  var promise$proxy4 = this.dF(canvas);
  return promise$proxy4.then($m_sjs_js_Any$().aY(setup));
});
var $d_Ltrivalibs_graphics_painter_Painter$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_Painter$, "trivalibs.graphics.painter.Painter$", ({
  cq: 1
}));
var $n_Ltrivalibs_graphics_painter_Painter$;
function $m_Ltrivalibs_graphics_painter_Painter$() {
  if ((!$n_Ltrivalibs_graphics_painter_Painter$)) {
    $n_Ltrivalibs_graphics_painter_Painter$ = new $c_Ltrivalibs_graphics_painter_Painter$();
  }
  return $n_Ltrivalibs_graphics_painter_Painter$;
}
function $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z($thiz) {
  var i = 0;
  while ((i < ($thiz.a7.length | 0))) {
    if (($thiz.a7[i].k.aT !== null)) {
      return true;
    }
    i = ((1 + i) | 0);
  }
  return false;
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
  this.ac = null;
  this.by = 0;
  this.bx = 0;
  this.bv = null;
  this.aR = false;
  this.as = false;
  this.aS = 0;
  this.ar = null;
  this.bw = null;
  this.a7 = null;
  this.bR = null;
  this.aq = null;
  this.ab = null;
  this.bu = null;
  this.aP = null;
  this.bt = null;
  this.aa = null;
  this.aL = null;
  this.br = false;
  this.aN = null;
  this.bs = null;
  this.aO = null;
  this.aQ = 0;
  this.aM = 0;
  this.ap = null;
  this.ac = painter;
  this.by = 0;
  this.bx = 0;
  this.bv = null;
  this.aR = false;
  this.as = false;
  this.aS = 1;
  this.ar = [];
  this.bw = [];
  this.a7 = [];
  this.bR = ({});
  this.aq = [];
  this.ab = [];
  this.bu = [];
  this.aP = [];
  this.bt = [];
  this.aa = null;
  this.aL = null;
  this.br = false;
  this.aN = [];
  this.bs = [];
  this.aO = null;
  this.aQ = 0;
  this.aM = 0;
  this.ap = ({});
}
$p = $c_Ltrivalibs_graphics_painter_Panel.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Panel;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Panel() {
}
$h_Ltrivalibs_graphics_painter_Panel.prototype = $p;
$p.c7 = (function() {
  if ((this.aS === 0)) {
    var a = this.aQ;
    var b = this.aM;
    var maxDim = ((a > b) ? a : b);
    if ((maxDim <= 0)) {
      return 1;
    } else {
      var a$1 = maxDim;
      return ((1 + $doubleToInt(((+Math.log(a$1)) / (+Math.log(2.0))))) | 0);
    }
  } else {
    return this.aS;
  }
});
$p.c2 = (function() {
  return (((this.ar.length | 0) === 0) ? [this.ac.ao] : this.ar);
});
$p.e4 = (function() {
  return (this.c2().length | 0);
});
$p.e5 = (function() {
  return this.ab[0];
});
$p.dR = (function() {
  return this.bt[0];
});
$p.dm = (function() {
  return this.aL;
});
$p.dQ = (function() {
  return ((this.aO !== null) ? this.aO : this.ab[0]);
});
$p.b6 = (function(index, mipLevel) {
  if ((mipLevel < 0)) {
    var sv = this.bu[index];
    return ((sv !== null) ? sv : this.ab[index]);
  } else {
    var key = ((index + "|") + mipLevel);
    if ((!(!(!(!this.ap.hasOwnProperty(key)))))) {
      return this.ap[key];
    } else {
      var view = this.aq[index].createView(({
        "baseMipLevel": mipLevel,
        "mipLevelCount": 1
      }));
      this.ap[key] = view;
      return view;
    }
  }
});
$p.bH = (function(index) {
  return this.ab[index];
});
$p.d1 = (function(index) {
  return this.bs[index];
});
$p.dl = (function() {
  if (((!this.br) && (this.aa !== null))) {
    var opt$proxy5 = this.aa;
    opt$proxy5.destroy();
    var $x_1 = this.ac.g;
    var value = this.aQ;
    var value$1 = this.aM;
    var _2 = ({
      "width": value,
      "height": value$1
    });
    var _2$1 = (this.as ? 4 : 1);
    var depthTex = $x_1.createTexture(({
      "size": _2,
      "format": "depth24plus",
      "usage": 20,
      "sampleCount": _2$1
    }));
    this.aa = depthTex;
    this.aL = depthTex.createView();
    this.br = true;
  }
  return this.aL;
});
$p.dX = (function(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers) {
  if ((width !== (void 0))) {
    var v = (width | 0);
    this.by = v;
  }
  if ((height !== (void 0))) {
    var v$1 = (height | 0);
    this.bx = v$1;
  }
  if ((clearColor !== (void 0))) {
    this.bv = clearColor;
  }
  if ((depthTest !== (void 0))) {
    var v$2 = (!(!depthTest));
    this.aR = v$2;
  }
  if ((multisample !== (void 0))) {
    var v$3 = (!(!multisample));
    this.as = v$3;
  }
  if ((mips !== (void 0))) {
    if ((!(!mips))) {
      this.aS = 0;
    }
  }
  if ((mipLevels !== (void 0))) {
    var v$5 = (mipLevels | 0);
    if ((v$5 > 0)) {
      this.aS = v$5;
    }
  }
  var x = ((formats === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy1$1__O__O(this, format) : formats);
  if ((x !== (void 0))) {
    this.ar = x;
  }
  var x$1 = ((shapes === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy2$1__O__O(this, shape) : shapes);
  if ((x$1 !== (void 0))) {
    this.bw = x$1;
  }
  var x$2 = ((layers === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy3$1__O__O(this, layer) : layers);
  if ((x$2 !== (void 0))) {
    this.a7 = x$2;
  }
  return this;
});
$p.ds = (function(canvasW, canvasH) {
  var targetW = ((this.by === 0) ? canvasW : this.by);
  var targetH = ((this.bx === 0) ? canvasH : this.bx);
  if (((targetW !== this.aQ) || (targetH !== this.aM))) {
    var d = 0;
    while ((d < (this.aq.length | 0))) {
      this.aq[d].destroy();
      d = ((1 + d) | 0);
    }
    d = 0;
    while ((d < (this.aP.length | 0))) {
      this.aP[d].destroy();
      d = ((1 + d) | 0);
    }
    d = 0;
    while ((d < (this.aN.length | 0))) {
      this.aN[d].destroy();
      d = ((1 + d) | 0);
    }
    if ((this.aa !== null)) {
      var opt$proxy7 = this.aa;
      opt$proxy7.destroy();
    }
    this.aQ = targetW;
    this.aM = targetH;
    var mipKeys = Object.keys(this.ap);
    var mk = 0;
    while ((mk < (mipKeys.length | 0))) {
      delete this.ap[mipKeys[mk]];
      mk = ((1 + mk) | 0);
    }
    var mipCount = this.c7();
    var fmts = this.c2();
    var hasPong = $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z(this);
    this.aq = [];
    this.ab = [];
    this.bu = [];
    this.aP = [];
    this.bt = [];
    this.aN = [];
    this.bs = [];
    var i = 0;
    while ((i < (fmts.length | 0))) {
      var fmt = fmts[i];
      var $x_1 = this.ac.g;
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
      this.aq.push(tex);
      this.ab.push(tex.createView(({
        "baseMipLevel": 0,
        "mipLevelCount": 1
      })));
      this.bu.push(((mipCount > 1) ? tex.createView() : null));
      if (hasPong) {
        var $x_2 = this.ac.g;
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
        this.aP.push(pongTex);
        this.bt.push(pongTex.createView(({
          "baseMipLevel": 0,
          "mipLevelCount": 1
        })));
      }
      if (this.as) {
        var $x_3 = this.ac.g;
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
        this.aN.push(msaaTex);
        this.bs.push(msaaTex.createView());
      }
      i = ((1 + i) | 0);
    }
    if (this.aR) {
      var depthUsage = (this.br ? 20 : 16);
      var $x_4 = this.ac.g;
      var _2$3 = ({
        "width": targetW,
        "height": targetH
      });
      var _2$4 = (this.as ? 4 : 1);
      var depthTex = $x_4.createTexture(({
        "size": _2$3,
        "format": "depth24plus",
        "usage": depthUsage,
        "sampleCount": _2$4
      }));
      this.aa = depthTex;
      this.aL = depthTex.createView();
    }
  }
});
var $d_Ltrivalibs_graphics_painter_Panel = new $TypeData().i($c_Ltrivalibs_graphics_painter_Panel, "trivalibs.graphics.painter.Panel", ({
  cr: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Shade(id, shaderModule, vertexBufferLayout, valueBindGroupLayout, panelBindGroupLayout, pipelineLayout, isLayer, uniformIndices, panelIndices) {
  this.cP = 0;
  this.bz = null;
  this.bT = null;
  this.bS = null;
  this.aT = null;
  this.cQ = null;
  this.x = null;
  this.at = null;
  this.cP = id;
  this.bz = shaderModule;
  this.bT = vertexBufferLayout;
  this.bS = valueBindGroupLayout;
  this.aT = panelBindGroupLayout;
  this.cQ = pipelineLayout;
  this.x = uniformIndices;
  this.at = panelIndices;
}
$p = $c_Ltrivalibs_graphics_painter_Shade.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Shade;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Shade() {
}
$h_Ltrivalibs_graphics_painter_Shade.prototype = $p;
var $d_Ltrivalibs_graphics_painter_Shade = new $TypeData().i($c_Ltrivalibs_graphics_painter_Shade, "trivalibs.graphics.painter.Shade", ({
  cs: 1
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
$p.dy = (function() {
  return window.navigator.gpu;
});
$p.dx = (function(canvas) {
  return canvas.getContext("webgpu");
});
var $d_Ltrivalibs_graphics_painter_WebGPU$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_WebGPU$, "trivalibs.graphics.painter.WebGPU$", ({
  ct: 1
}));
var $n_Ltrivalibs_graphics_painter_WebGPU$;
function $m_Ltrivalibs_graphics_painter_WebGPU$() {
  if ((!$n_Ltrivalibs_graphics_painter_WebGPU$)) {
    $n_Ltrivalibs_graphics_painter_WebGPU$ = new $c_Ltrivalibs_graphics_painter_WebGPU$();
  }
  return $n_Ltrivalibs_graphics_painter_WebGPU$;
}
function $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($thiz, structName, locNames, locTypes, builtins) {
  var array$1 = $m_sjs_js_ArrayOps$().da($m_sjs_js_ArrayOps$().d9(locNames, new $c_sjs_js_WrappedArray(locTypes)));
  var len = (array$1.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    var $x_2 = i;
    var x0 = array$1[i];
    matchResult3: {
      var $x_1;
      if ((x0 !== null)) {
        var x11 = x0.H;
        if ((x11 !== null)) {
          var name = x11.H;
          var typ = x11.a5;
          var $x_1 = (((((("  @location(" + (x0.a5 | 0)) + ") ") + name) + ": ") + typ) + ",");
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
        var name$1 = x0$1.ba;
        var builtin = x0$1.bb;
        var typ$1 = x0$1.bc;
        var $x_3 = (((((("  @builtin(" + builtin) + ") ") + name$1) + ": ") + typ$1) + ",");
        break matchResult4;
      }
      throw new $c_s_MatchError(x0$1);
    }
    res$1[$x_4] = $x_3;
    i$1 = ((1 + i$1) | 0);
  }
  var allFields = $m_sjs_js_ArrayOpsCommon$().a(res, res$1);
  return (((allFields.length | 0) === 0) ? "" : (((("struct " + structName) + " {\n") + allFields.join("\n")) + "\n}"));
}
function $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($thiz, groupIdx, names, types) {
  var array$1 = $m_sjs_js_ArrayOps$().da($m_sjs_js_ArrayOps$().d9(names, new $c_sjs_js_WrappedArray(types)));
  var len = (array$1.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    var $x_3 = i;
    var x0 = array$1[i];
    matchResult5: {
      var $x_2;
      if ((x0 !== null)) {
        var x20 = x0.H;
        if ((x20 !== null)) {
          var name = x20.H;
          var typ = x20.a5;
          var bindingIdx = (x0.a5 | 0);
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
  cw: 1
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
  this.au = null;
  this.au = target;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_AssignTarget.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_AssignTarget;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_AssignTarget() {
}
$h_Ltrivalibs_graphics_shader_dsl_AssignTarget.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_AssignTarget = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_AssignTarget, "trivalibs.graphics.shader.dsl.AssignTarget", ({
  cx: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_FnRegistry() {
  this.av = null;
  this.av = [];
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FnRegistry() {
}
$h_Ltrivalibs_graphics_shader_dsl_FnRegistry.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_FnRegistry = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FnRegistry, "trivalibs.graphics.shader.dsl.FnRegistry", ({
  cy: 1
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
var $d_Ltrivalibs_graphics_shader_dsl_FnRegistry$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FnRegistry$, "trivalibs.graphics.shader.dsl.FnRegistry$", ({
  cz: 1
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
  this.af = null;
  this.aw = null;
  this.F = null;
  this.de = null;
  this.af = in$1;
  this.aw = out;
  this.F = bindings;
  this.de = textures;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FragmentCtx() {
}
$h_Ltrivalibs_graphics_shader_dsl_FragmentCtx.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_FragmentCtx = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FragmentCtx, "trivalibs.graphics.shader.dsl.FragmentCtx", ({
  cA: 1
}));
function $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, data) {
  if ((!(!(!(!(!$thiz.bV.hasOwnProperty(data.name))))))) {
    var dict = $thiz.bV;
    var key = data.name;
    dict[key] = true;
    var array = data.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, array[i]);
      i = ((1 + i) | 0);
    }
    $thiz.bW.push(data.src);
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_LayerProgram() {
  this.T = null;
  this.bW = null;
  this.bV = null;
  this.T = "";
  this.bW = [];
  this.bV = ({});
}
$p = $c_Ltrivalibs_graphics_shader_dsl_LayerProgram.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_LayerProgram;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_LayerProgram() {
}
$h_Ltrivalibs_graphics_shader_dsl_LayerProgram.prototype = $p;
$p.aZ = (function() {
  return this.bW.join("\n\n");
});
var $d_Ltrivalibs_graphics_shader_dsl_LayerProgram = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_LayerProgram, "trivalibs.graphics.shader.dsl.LayerProgram", ({
  cB: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_layouts$() {
}
$p = $c_Ltrivalibs_graphics_shader_layouts$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_layouts$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_layouts$() {
}
$h_Ltrivalibs_graphics_shader_layouts$.prototype = $p;
$p.Y = (function(device, bindGroupLayouts) {
  return device.createPipelineLayout(({
    "bindGroupLayouts": bindGroupLayouts
  }));
});
var $d_Ltrivalibs_graphics_shader_layouts$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_layouts$, "trivalibs.graphics.shader.layouts$", ({
  cG: 1
}));
var $n_Ltrivalibs_graphics_shader_layouts$;
function $m_Ltrivalibs_graphics_shader_layouts$() {
  if ((!$n_Ltrivalibs_graphics_shader_layouts$)) {
    $n_Ltrivalibs_graphics_shader_layouts$ = new $c_Ltrivalibs_graphics_shader_layouts$();
  }
  return $n_Ltrivalibs_graphics_shader_layouts$;
}
/** @constructor */
function $c_Ltrivalibs_utils_animation_Animator(frame, onFpsCallback) {
  this.cR = null;
  this.bZ = null;
  this.aU = 0;
  this.aV = 0.0;
  this.bA = 0.0;
  this.bB = 0.0;
  this.c0 = false;
  this.cR = frame;
  this.bZ = onFpsCallback;
  this.aU = 0;
  this.aV = 0.0;
  this.bA = 0.0;
  this.bB = (-1.0);
  this.c0 = false;
}
$p = $c_Ltrivalibs_utils_animation_Animator.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_animation_Animator;
/** @constructor */
function $h_Ltrivalibs_utils_animation_Animator() {
}
$h_Ltrivalibs_utils_animation_Animator.prototype = $p;
$p.d4 = (function(time) {
  this.aU = ((1 + this.aU) | 0);
  if ((this.aV === 0.0)) {
    this.aV = time;
    this.bA = time;
  }
  var fpsElapsed = (time - this.aV);
  if ((fpsElapsed >= 1000.0)) {
    var fps = ((1000.0 * this.aU) / fpsElapsed);
    if (((time - this.bA) >= 1000.0)) {
      var args$proxy1 = $m_sr_ScalaRunTime$().aC(new ($d_sjs_js_Any.r().C)([(fps.toFixed(1) + " FPS")]));
      console.log(...$m_sjsr_Compat$().aA(args$proxy1));
      this.bA = time;
      if ((this.bZ !== null)) {
        (0, this.bZ)(fps);
      }
    }
    this.aU = 0;
    this.aV = time;
  }
  var delta = ((this.bB < 0.0) ? 0.0 : (time - this.bB));
  this.bB = time;
  (0, this.cR)(delta);
  if (this.c0) {
    requestAnimationFrame($m_sjs_js_Any$().aY(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
      this.d4((+v1$2));
    }))));
  }
});
$p.e2 = (function() {
  this.c0 = true;
  return requestAnimationFrame($m_sjs_js_Any$().aY(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
    this.d4((+v1$2));
  }))));
});
var $d_Ltrivalibs_utils_animation_Animator = new $TypeData().i($c_Ltrivalibs_utils_animation_Animator, "trivalibs.utils.animation.Animator", ({
  cK: 1
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
$p.dg = (function(frame) {
  var animator = new $c_Ltrivalibs_utils_animation_Animator(frame, null);
  animator.e2();
  return animator;
});
var $d_Ltrivalibs_utils_animation_animate$package$ = new $TypeData().i($c_Ltrivalibs_utils_animation_animate$package$, "trivalibs.utils.animation.animate$package$", ({
  cL: 1
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
  this.db = null;
  $n_jl_Character$ = this;
  this.db = new $ac_I(new Int32Array([1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3558, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43504, 43600, 44016, 65296, 66720, 68912, 69734, 69872, 69942, 70096, 70384, 70736, 70864, 71248, 71360, 71472, 71904, 72016, 72784, 73040, 73120, 73552, 92768, 92864, 93008, 120782, 120792, 120802, 120812, 120822, 123200, 123632, 124144, 125264, 130032]));
}
$p = $c_jl_Character$.prototype = new $h_O();
$p.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
}
$h_jl_Character$.prototype = $p;
$p.e6 = (function(codePoint) {
  if (((codePoint >>> 0) > 1114111)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return String.fromCodePoint(codePoint);
});
var $d_jl_Character$ = new $TypeData().i($c_jl_Character$, "java.lang.Character$", ({
  ai: 1,
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
  $thiz.cf = s;
  if (writableStackTrace) {
    $thiz.dt();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.cf = null;
  }
  c4() {
    return this.cf;
  }
  dt() {
    var reference = (false ? this.eg : this);
    if ((Object.prototype.toString.call(reference) !== "[object Error]")) {
      if (((Error.captureStackTrace === (void 0)) || (!(!Object.isSealed(this))))) {
        new Error();
      } else {
        Error.captureStackTrace(this);
      }
    }
    return this;
  }
  n() {
    var className = $objectClassName(this);
    var message = this.c4();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  L() {
    return $c_O.prototype.L.call(this);
  }
  get "message"() {
    var m = this.c4();
    return ((m === null) ? "" : m);
  }
  get "name"() {
    return $objectClassName(this);
  }
  "toString"() {
    return this.n();
  }
}
/** @constructor */
function $c_s_Console$() {
  this.cg = null;
  $n_s_Console$ = this;
  this.cg = new $c_s_util_DynamicVariable($m_jl_System$Streams$().ce);
}
$p = $c_s_Console$.prototype = new $h_O();
$p.constructor = $c_s_Console$;
/** @constructor */
function $h_s_Console$() {
}
$h_s_Console$.prototype = $p;
$p.dP = (function() {
  return this.cg.bL;
});
var $d_s_Console$ = new $TypeData().i($c_s_Console$, "scala.Console$", ({
  aA: 1,
  bi: 1
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
$p.n = (function() {
  return "<function1>";
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
$p.n = (function() {
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
$p.n = (function() {
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
$p.n = (function() {
  return ("" + this.an);
});
var $d_sr_DoubleRef = new $TypeData().i($c_sr_DoubleRef, "scala.runtime.DoubleRef", ({
  bu: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.aH = 0;
  this.cs = 0;
  this.dd = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.aH = $f_T__hashCode__I("Seq");
  this.cs = $f_T__hashCode__I("Map");
  $f_T__hashCode__I("Set");
  this.dd = this.e7($m_sci_Nil$(), this.cs);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.d5 = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.dD(xs, this.aH) : ((xs instanceof $c_sci_List) ? this.dJ(xs, this.aH) : this.dO(xs, this.aH)));
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().i($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  bO: 1,
  bN: 1
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
  this.V = null;
  this.V = uv;
}
$p = $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT() {
}
$h_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT.prototype = $p;
var $d_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT, "trivalibs.graphics.buffers.UniformLayout$given_UniformLayout_T", ({
  bR: 1,
  bQ: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fFloat\uff3f$times$colon$() {
}
$p = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fFloat\uff3f$times$colon$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fFloat\uff3f$times$colon$;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fFloat\uff3f$times$colon$() {
}
$h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fFloat\uff3f$times$colon$.prototype = $p;
$p.eb = (function(ref, value) {
  var offset$proxy1 = (ref.off | 0);
  ref.dv.setFloat32(offset$proxy1, value, true);
});
$p.S = (function(ref, value) {
  this.eb(ref, Math.fround(value));
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fFloat\uff3f$times$colon$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fFloat\uff3f$times$colon$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Float_$times$colon$", ({
  bS: 1,
  a8: 1
}));
var $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fFloat\uff3f$times$colon$;
function $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fFloat\uff3f$times$colon$() {
  if ((!$n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fFloat\uff3f$times$colon$)) {
    $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fFloat\uff3f$times$colon$ = new $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fFloat\uff3f$times$colon$();
  }
  return $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fFloat\uff3f$times$colon$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$() {
}
$p = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$() {
}
$h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$.prototype = $p;
$p.S = (function(ref, value) {
  $f_Ltrivalibs_graphics_math_Vec2MutableOps__set__O__Ltrivalibs_graphics_math_Vec2Mutable__O__Ltrivalibs_graphics_math_Vec2Base__V($m_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$().e8(), ref, $m_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$(), value, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$());
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Vec2_Vec2Buffer$", ({
  bT: 1,
  a8: 1
}));
var $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$;
function $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$() {
  if ((!$n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$)) {
    $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$ = new $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$();
  }
  return $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$;
}
function $f_Ltrivalibs_graphics_math_Vec2Base__dot__O__O__D($thiz, v, other) {
  return (((+$thiz.M(v)) * (+$thiz.M(other))) + ((+$thiz.N(v)) * (+$thiz.N(other))));
}
function $f_Ltrivalibs_graphics_math_Vec2Base__length__O__D($thiz, v) {
  var p$proxy1 = $f_Ltrivalibs_graphics_math_Vec2Base__dot__O__O__D($thiz, v, v);
  return (+Math.sqrt(p$proxy1));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$4() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$4.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$4;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$4() {
}
$h_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$4.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$4 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$4, "trivalibs.graphics.math.cpu.vec2$package$Vec2Buffer$$anon$4", ({
  c3: 1,
  bV: 1
}));
function $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__($thiz, name) {
  $thiz.aI = name;
  $ct_Ltrivalibs_graphics_math_gpu_Expr__T__($thiz, name);
  return $thiz;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_LetExpr() {
  this.e = null;
  this.aI = null;
}
$p = $c_Ltrivalibs_graphics_math_gpu_LetExpr.prototype = new $h_Ltrivalibs_graphics_math_gpu_Expr();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_LetExpr;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_LetExpr() {
}
$h_Ltrivalibs_graphics_math_gpu_LetExpr.prototype = $p;
$p.D = (function(value) {
  return (((("  let " + this.aI) + " = ") + value.e) + ";");
});
var $d_Ltrivalibs_graphics_math_gpu_LetExpr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LetExpr, "trivalibs.graphics.math.gpu.LetExpr", ({
  ab: 1,
  K: 1
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
$p.b7 = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".x"));
});
$p.b8 = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".y"));
});
$p.dI = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("length(" + v.e) + ")"));
});
$p.M = (function(v) {
  return this.b7(v);
});
$p.N = (function(v) {
  return this.b8(v);
});
$p.c6 = (function(v) {
  return this.dI(v);
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4, "trivalibs.graphics.math.gpu.float_expr$package$$anon$4", ({
  c9: 1,
  J: 1
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
$p.b7 = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".x"));
});
$p.b8 = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".y"));
});
$p.cc = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".z"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5, "trivalibs.graphics.math.gpu.float_expr$package$$anon$5", ({
  ca: 1,
  bW: 1
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
$p.b7 = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".x"));
});
$p.b8 = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".y"));
});
$p.cc = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".z"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6, "trivalibs.graphics.math.gpu.float_expr$package$$anon$6", ({
  cb: 1,
  bY: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$.prototype = $p;
$p.c9 = (function(a, exp) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("pow(" + a.e) + ", ") + exp.e) + ")"));
});
$p.e1 = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("sin(" + a.e) + ")"));
});
$p.dk = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("cos(" + a.e) + ")"));
});
$p.dj = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("saturate(" + a.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$, "trivalibs.graphics.math.gpu.float_expr$package$given_NumExt_FloatExpr$", ({
  cc: 1,
  cM: 1
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
$p.bC = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.e) + " + ") + b.e) + ")"));
});
$p.cT = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.e) + " - ") + b.e) + ")"));
});
$p.ag = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.e) + " * ") + b.e) + ")"));
});
$p.cS = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.e) + " / ") + b.e) + ")"));
});
$p.aB = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(-" + a.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$, "trivalibs.graphics.math.gpu.float_expr$package$given_NumOps_FloatExpr$", ({
  cd: 1,
  cN: 1
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
$p.W = (function(v, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.e) + " + ") + other.e) + ")"));
});
$p.ca = (function(v, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.e) + " - ") + other.e) + ")"));
});
$p.d2 = (function(v, x$2, scalar) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.e) + " * ") + scalar.e) + ")"));
});
$p.cX = (function(v, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.e) + " / ") + other.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec2ImmutableOpsG_FloatExpr_Vec2Expr$", ({
  ce: 1,
  bU: 1
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
$p.ax = (function(v, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.e) + " + ") + other.e) + ")"));
});
$p.dL = (function(v, x$2, scalar) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.e) + " * ") + scalar.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec3ImmutableOpsG_FloatExpr_Vec3Expr$", ({
  cf: 1,
  bX: 1
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
$p.Q = (function(v, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.e) + " + ") + other.e) + ")"));
});
$p.d3 = (function(v, x$2, scalar) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.e) + " * ") + scalar.e) + ")"));
});
$p.bD = (function(v, x$2, scalar) {
  return this.d3(v, x$2, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h().b(scalar));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec4ImmutableOpsG_FloatExpr_Vec4Expr$", ({
  cg: 1,
  bZ: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Layer(painter, shade) {
  this.k = null;
  this.bP = null;
  this.bn = 0;
  this.aJ = 0;
  this.i = null;
  this.B = null;
  this.bQ = null;
  this.k = shade;
  this.bP = null;
  this.bn = (-1);
  this.aJ = (-1);
  this.i = [];
  this.B = [];
  this.bQ = new $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter);
}
$p = $c_Ltrivalibs_graphics_painter_Layer.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Layer;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Layer() {
}
$h_Ltrivalibs_graphics_painter_Layer.prototype = $p;
$p.dY = (function(blendState, mipSource, mipTarget) {
  if ((blendState !== (void 0))) {
    this.bP = blendState;
  }
  if ((mipSource !== (void 0))) {
    var v = (mipSource | 0);
    this.bn = v;
  }
  if ((mipTarget !== (void 0))) {
    var v$1 = (mipTarget | 0);
    this.aJ = v$1;
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Layer = new $TypeData().i($c_Ltrivalibs_graphics_painter_Layer, "trivalibs.graphics.painter.Layer", ({
  co: 1,
  cl: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform(inner) {
  this.C = null;
  this.C = inner;
}
$p = $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform() {
}
$h_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform.prototype = $p;
$p.u = (function() {
  return this.C.u();
});
var $d_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform = new $TypeData().i($c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform, "trivalibs.graphics.shader.FragmentUniform$given_WGSLType_FragmentUniform", ({
  cu: 1,
  D: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor(prefix) {
  this.bX = null;
  this.bX = prefix;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor.prototype = $p;
$p.b5 = (function(name) {
  return new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(((this.bX === "") ? name : ((this.bX + ".") + name)));
});
var $d_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor, "trivalibs.graphics.shader.dsl.TypedAssignAccessor", ({
  cC: 1,
  z: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(prefix) {
  this.bY = null;
  this.bY = prefix;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor.prototype = $p;
$p.p = (function(name) {
  return ((this.bY === "") ? $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), name) : $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), ((this.bY + ".") + name)));
});
var $d_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor, "trivalibs.graphics.shader.dsl.TypedExprAccessor", ({
  cD: 1,
  z: 1
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
  cE: 1,
  z: 1
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
  cF: 1,
  z: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$() {
}
$p = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$() {
}
$h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$.prototype = $p;
$p.u = (function() {
  return "f32";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$, "trivalibs.graphics.shader.types$package$given_WGSLType_Float$", ({
  cH: 1,
  D: 1
}));
var $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$;
function $m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$() {
  if ((!$n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$)) {
    $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$ = new $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$();
  }
  return $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$;
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
$p.u = (function() {
  return "sampler";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$, "trivalibs.graphics.shader.types$package$given_WGSLType_Sampler$", ({
  cI: 1,
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
function $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$() {
}
$p = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$() {
}
$h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$.prototype = $p;
$p.u = (function() {
  return "vec2<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$, "trivalibs.graphics.shader.types$package$given_WGSLType_Vec2$", ({
  cJ: 1,
  D: 1
}));
var $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$;
function $m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$() {
  if ((!$n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$)) {
    $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$ = new $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$();
  }
  return $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$;
}
/** @constructor */
function $c_jl_Class($data) {
  this.bI = $data;
}
$p = $c_jl_Class.prototype = new $h_O();
$p.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
}
$h_jl_Class.prototype = $p;
$p.n = (function() {
  return ((this.bI.Y ? "interface " : (this.bI.X ? "" : "class ")) + this.bI.N);
});
var $d_jl_Class = new $TypeData().i($c_jl_Class, "java.lang.Class", ({
  aj: 1,
  a: 1,
  d: 1
}));
class $c_jl_Exception extends $c_jl_Throwable {
}
function $f_s_Product2__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.H;
      break;
    }
    case 1: {
      return $thiz.a5;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 1)"));
    }
  }
}
function $f_s_Product3__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.ba;
      break;
    }
    case 1: {
      return $thiz.bb;
      break;
    }
    case 2: {
      return $thiz.bc;
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
      return $thiz.bd;
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
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 3)"));
    }
  }
}
/** @constructor */
function $c_sc_Iterator$() {
  this.bj = null;
  $n_sc_Iterator$ = this;
  this.bj = new $c_sc_Iterator$$anon$19();
}
$p = $c_sc_Iterator$.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
}
$h_sc_Iterator$.prototype = $p;
var $d_sc_Iterator$ = new $TypeData().i($c_sc_Iterator$, "scala.collection.Iterator$", ({
  aW: 1,
  a: 1,
  aV: 1
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
  this.co = null;
  this.co = f;
}
$p = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919;
/** @constructor */
function $h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919() {
}
$h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = $p;
$p.b = (function(x0) {
  return (0, this.co)(x0);
});
var $d_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919 = new $TypeData().i($c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919, "scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919", ({
  br: 1,
  bq: 1,
  j: 1
}));
/** @constructor */
function $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(f) {
  this.cp = null;
  this.cp = f;
}
$p = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = new $h_sr_AbstractFunction2();
$p.constructor = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8;
/** @constructor */
function $h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8() {
}
$h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = $p;
$p.cU = (function(x0, x1) {
  return (0, this.cp)(x0, x1);
});
var $d_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8 = new $TypeData().i($c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8, "scala.runtime.AbstractFunction2.$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8", ({
  bt: 1,
  bs: 1,
  aC: 1
}));
var $d_sr_Nothing$ = new $TypeData().i(0, "scala.runtime.Nothing$", ({
  bv: 1,
  g: 1,
  a: 1
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
$p.aY = (function(f) {
  return ((arg1$2) => f.b(arg1$2));
});
var $d_sjs_js_Any$ = new $TypeData().i($c_sjs_js_Any$, "scala.scalajs.js.Any$", ({
  bA: 1,
  bE: 1,
  bF: 1
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
function $c_Ltrivalibs_graphics_math_gpu_VarExpr(name) {
  this.e = null;
  this.aI = null;
  this.bO = false;
  $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(this, name);
  this.bO = false;
}
$p = $c_Ltrivalibs_graphics_math_gpu_VarExpr.prototype = new $h_Ltrivalibs_graphics_math_gpu_LetExpr();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_VarExpr;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_VarExpr() {
}
$h_Ltrivalibs_graphics_math_gpu_VarExpr.prototype = $p;
$p.D = (function(value) {
  if ((!this.bO)) {
    this.bO = true;
    return (((("  var " + this.aI) + " = ") + value.e) + ";");
  } else {
    return (((("  " + this.aI) + " = ") + value.e) + ";");
  }
});
var $d_Ltrivalibs_graphics_math_gpu_VarExpr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_VarExpr, "trivalibs.graphics.math.gpu.VarExpr", ({
  c5: 1,
  ab: 1,
  K: 1
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
$p.b = (function(x) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().dw((+x)));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1, "trivalibs.graphics.math.gpu.float_expr$package$$anon$1", ({
  c8: 1,
  aB: 1,
  j: 1
}));
var $b_Ltrivalibs_graphics_painter_BlendFn;
function $a_Ltrivalibs_graphics_painter_BlendFn() {
  if ((!$b_Ltrivalibs_graphics_painter_BlendFn)) {
    $b_Ltrivalibs_graphics_painter_BlendFn = class $b_Ltrivalibs_graphics_painter_BlendFn extends Object {
      constructor(arg, arg$2, ...rest) {
        var srcFactor = null;
        var dstFactor = null;
        var operation = null;
        srcFactor = arg;
        dstFactor = arg$2;
        operation = ((rest[0] === (void 0)) ? "add" : rest[0]);
        super();
        Object.defineProperty(this, "srcFactor", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        Object.defineProperty(this, "dstFactor", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        Object.defineProperty(this, "operation", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        this.srcFactor = srcFactor;
        this.dstFactor = dstFactor;
        this.operation = operation;
      }
    };
  }
  return $b_Ltrivalibs_graphics_painter_BlendFn;
}
var $b_Ltrivalibs_graphics_painter_BlendState;
function $a_Ltrivalibs_graphics_painter_BlendState() {
  if ((!$b_Ltrivalibs_graphics_painter_BlendState)) {
    $b_Ltrivalibs_graphics_painter_BlendState = class $b_Ltrivalibs_graphics_painter_BlendState extends Object {
      constructor(arg, arg$2) {
        var color = null;
        var alpha = null;
        color = arg;
        alpha = arg$2;
        super();
        Object.defineProperty(this, "color", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        Object.defineProperty(this, "alpha", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        this.color = color;
        this.alpha = alpha;
      }
    };
  }
  return $b_Ltrivalibs_graphics_painter_BlendState;
}
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
/** @constructor */
function $c_Ljava_io_OutputStream() {
}
$p = $c_Ljava_io_OutputStream.prototype = new $h_O();
$p.constructor = $c_Ljava_io_OutputStream;
/** @constructor */
function $h_Ljava_io_OutputStream() {
}
$h_Ljava_io_OutputStream.prototype = $p;
function $f_jl_Boolean__hashCode__I($thiz) {
  return ($thiz ? 1231 : 1237);
}
function $f_jl_Boolean__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Boolean = new $TypeData().i(0, "java.lang.Boolean", ({
  af: 1,
  a: 1,
  f: 1,
  d: 1
}), ((x) => ((typeof x) === "boolean")));
function $f_jl_Character__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Character__toString__T($thiz) {
  return ("" + $cToS($thiz));
}
var $d_jl_Character = new $TypeData().i(0, "java.lang.Character", ({
  ah: 1,
  a: 1,
  f: 1,
  d: 1
}), ((x) => (x instanceof $Char)));
class $c_jl_RuntimeException extends $c_jl_Exception {
}
/** @constructor */
function $c_jl_StringBuilder() {
  this.v = null;
  this.v = "";
}
$p = $c_jl_StringBuilder.prototype = new $h_O();
$p.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
}
$h_jl_StringBuilder.prototype = $p;
$p.n = (function() {
  return this.v;
});
$p.z = (function() {
  return this.v.length;
});
$p.cW = (function(index) {
  return this.v.charCodeAt(index);
});
var $d_jl_StringBuilder = new $TypeData().i($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  at: 1,
  E: 1,
  O: 1,
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
$p.a1 = (function() {
  return (-1);
});
$p.c1 = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.U = (function() {
  return this;
});
$p.n = (function() {
  return "<iterator>";
});
function $isArrayOf_s_util_CommandLineParser$ParseError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bL)));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$.prototype = $p;
$p.M = (function(v) {
  return v.bM;
});
$p.N = (function(v) {
  return v.bN;
});
$p.d7 = (function(v, value) {
  v.bM = value;
});
$p.d8 = (function(v, value) {
  v.bN = value;
});
$p.c6 = (function(v) {
  return $f_Ltrivalibs_graphics_math_Vec2Base__length__O__D(this, v);
});
var $d_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$, "trivalibs.graphics.math.cpu.Vec2$given_Vec2Mutable_Vec2$", ({
  c1: 1,
  J: 1,
  a9: 1,
  aa: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$;
function $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$)) {
    $n_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$ = new $c_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$.prototype = $p;
$p.ec = (function(v) {
  var offset$proxy1 = (v.off | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy1, true));
});
$p.ee = (function(v) {
  var offset$proxy2 = ((4 + (v.off | 0)) | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy2, true));
});
$p.ed = (function(v, value) {
  var value$proxy1 = Math.fround(value);
  var offset$proxy3 = (v.off | 0);
  v.dv.setFloat32(offset$proxy3, value$proxy1, true);
});
$p.ef = (function(v, value) {
  var value$proxy2 = Math.fround(value);
  var offset$proxy4 = ((4 + (v.off | 0)) | 0);
  v.dv.setFloat32(offset$proxy4, value$proxy2, true);
});
$p.M = (function(v) {
  return this.ec(v);
});
$p.N = (function(v) {
  return this.ee(v);
});
$p.d7 = (function(v, value) {
  this.ed(v, value);
});
$p.d8 = (function(v, value) {
  this.ef(v, value);
});
$p.c6 = (function(v) {
  return $f_Ltrivalibs_graphics_math_Vec2Base__length__O__D(this, v);
});
var $d_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$, "trivalibs.graphics.math.cpu.vec2$package$Vec2Buffer$vec2MutableBuffer$", ({
  c4: 1,
  J: 1,
  a9: 1,
  aa: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$;
function $m_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$ = new $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$;
}
function $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T($thiz, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, uniformDecls, vertexBody, fragmentBody) {
  var f$proxy1 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildVertexMain__T__T($thiz, vertexBody);
  var g$proxy1 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildFragmentMain__T__T($thiz, fragmentBody);
  var all = [vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, uniformDecls, $thiz.bU, f$proxy1, g$proxy1];
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
function $p_Ltrivalibs_graphics_shader_ShaderDef__buildFragmentMain__T__T($thiz, body) {
  return (("@fragment\nfn fs_main(in: VertexOutput) -> FragmentOutput {\n  var out: FragmentOutput;\n" + body) + "\n  return out;\n}");
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_ShaderDef(vertexBody, fragmentBody, helperFns) {
  this.ae = null;
  this.ad = null;
  this.bU = null;
  this.ae = vertexBody;
  this.ad = fragmentBody;
  this.bU = helperFns;
}
$p = $c_Ltrivalibs_graphics_shader_ShaderDef.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_ShaderDef;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_ShaderDef() {
}
$h_Ltrivalibs_graphics_shader_ShaderDef.prototype = $p;
$p.b3 = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.L = (function() {
  return $m_s_util_hashing_MurmurHash3$().bG(this, (-1488826029), true);
});
$p.n = (function() {
  return $m_sr_ScalaRunTime$().df(this);
});
$p.ai = (function() {
  return 3;
});
$p.ak = (function() {
  return "ShaderDef";
});
$p.aj = (function(n) {
  switch (n) {
    case 0: {
      return this.ae;
      break;
    }
    case 1: {
      return this.ad;
      break;
    }
    case 2: {
      return this.bU;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException(("" + n));
    }
  }
});
var $d_Ltrivalibs_graphics_shader_ShaderDef = new $TypeData().i($c_Ltrivalibs_graphics_shader_ShaderDef, "trivalibs.graphics.shader.ShaderDef", ({
  cv: 1,
  e: 1,
  s: 1,
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
  ae: 1,
  i: 1,
  h: 1,
  g: 1,
  a: 1
}));
function $f_jl_Byte__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Byte__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Byte = new $TypeData().i(0, "java.lang.Byte", ({
  ag: 1,
  k: 1,
  a: 1,
  f: 1,
  d: 1
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
  al: 1,
  i: 1,
  h: 1,
  g: 1,
  a: 1
}));
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_IndexOutOfBoundsException = new $TypeData().i($c_jl_IndexOutOfBoundsException, "java.lang.IndexOutOfBoundsException", ({
  am: 1,
  i: 1,
  h: 1,
  g: 1,
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
  ap: 1,
  N: 1,
  L: 1,
  P: 1,
  M: 1
}));
class $c_jl_NullPointerException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
var $d_jl_NullPointerException = new $TypeData().i($c_jl_NullPointerException, "java.lang.NullPointerException", ({
  aq: 1,
  i: 1,
  h: 1,
  g: 1,
  a: 1
}));
function $f_jl_Short__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Short__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Short = new $TypeData().i(0, "java.lang.Short", ({
  ar: 1,
  k: 1,
  a: 1,
  f: 1,
  d: 1
}), ((x) => $isShort(x)));
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_UnsupportedOperationException = new $TypeData().i($c_jl_UnsupportedOperationException, "java.lang.UnsupportedOperationException", ({
  av: 1,
  i: 1,
  h: 1,
  g: 1,
  a: 1
}));
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_ju_NoSuchElementException = new $TypeData().i($c_ju_NoSuchElementException, "java.util.NoSuchElementException", ({
  ay: 1,
  i: 1,
  h: 1,
  g: 1,
  a: 1
}));
function $p_s_MatchError__objString__T($thiz) {
  if ((!$thiz.ci)) {
    if (($thiz.b9 === null)) {
      var $x_1 = "null";
    } else {
      var this$1 = $thiz.b9;
      var cls = $objectGetClass(this$1);
      var ofClass = ((cls === null) ? "of a JS class" : ("of class " + cls.bI.N));
      try {
        var $x_1 = ((($thiz.b9 + " (") + ofClass) + ")");
      } catch (e) {
        var $x_1 = ("an instance " + ofClass);
      }
    }
    $thiz.ch = $x_1;
    $thiz.ci = true;
  }
  return $thiz.ch;
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.b9 = null;
    this.ch = null;
    this.ci = false;
    this.b9 = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  c4() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().i($c_s_MatchError, "scala.MatchError", ({
  aD: 1,
  i: 1,
  h: 1,
  g: 1,
  a: 1
}));
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.aE = 0;
  this.ck = 0;
  this.cj = null;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.cj = outer;
  this.aE = 0;
  this.ck = outer.ai();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $p;
$p.K = (function() {
  return (this.aE < this.ck);
});
$p.E = (function() {
  var result = this.cj.aj(this.aE);
  this.aE = ((1 + this.aE) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().i($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  aE: 1,
  u: 1,
  b: 1,
  c: 1,
  w: 1
}));
/** @constructor */
function $c_T2(_1, _2) {
  this.H = null;
  this.a5 = null;
  this.H = _1;
  this.a5 = _2;
}
$p = $c_T2.prototype = new $h_O();
$p.constructor = $c_T2;
/** @constructor */
function $h_T2() {
}
$h_T2.prototype = $p;
$p.ai = (function() {
  return 2;
});
$p.aj = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n);
});
$p.n = (function() {
  return (((("(" + this.H) + ",") + this.a5) + ")");
});
$p.ak = (function() {
  return "Tuple2";
});
$p.b3 = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.L = (function() {
  return $m_s_util_hashing_MurmurHash3$().bG(this, (-116390334), true);
});
var $d_T2 = new $TypeData().i($c_T2, "scala.Tuple2", ({
  aI: 1,
  aF: 1,
  s: 1,
  e: 1,
  a: 1
}));
/** @constructor */
function $c_T3(_1, _2, _3) {
  this.ba = null;
  this.bb = null;
  this.bc = null;
  this.ba = _1;
  this.bb = _2;
  this.bc = _3;
}
$p = $c_T3.prototype = new $h_O();
$p.constructor = $c_T3;
/** @constructor */
function $h_T3() {
}
$h_T3.prototype = $p;
$p.b3 = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.ai = (function() {
  return 3;
});
$p.aj = (function(n) {
  return $f_s_Product3__productElement__I__O(this, n);
});
$p.L = (function() {
  return $m_s_util_hashing_MurmurHash3$().bG(this, (-192629203), true);
});
$p.ak = (function() {
  return "Tuple3";
});
$p.n = (function() {
  return (((((("(" + this.ba) + ",") + this.bb) + ",") + this.bc) + ")");
});
var $d_T3 = new $TypeData().i($c_T3, "scala.Tuple3", ({
  aJ: 1,
  e: 1,
  s: 1,
  aG: 1,
  a: 1
}));
/** @constructor */
function $c_T4(_1, _2, _3, _4) {
  this.bd = null;
  this.be = null;
  this.bf = null;
  this.bg = null;
  this.bd = _1;
  this.be = _2;
  this.bf = _3;
  this.bg = _4;
}
$p = $c_T4.prototype = new $h_O();
$p.constructor = $c_T4;
/** @constructor */
function $h_T4() {
}
$h_T4.prototype = $p;
$p.b3 = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.ai = (function() {
  return 4;
});
$p.aj = (function(n) {
  return $f_s_Product4__productElement__I__O(this, n);
});
$p.L = (function() {
  return $m_s_util_hashing_MurmurHash3$().bG(this, (-1542739752), true);
});
$p.ak = (function() {
  return "Tuple4";
});
$p.n = (function() {
  return (((((((("(" + this.bd) + ",") + this.be) + ",") + this.bf) + ",") + this.bg) + ")");
});
var $d_T4 = new $TypeData().i($c_T4, "scala.Tuple4", ({
  aK: 1,
  e: 1,
  s: 1,
  aH: 1,
  a: 1
}));
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.aX() + "("), ", ", ")");
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
$p.K = (function() {
  return false;
});
$p.dM = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
});
$p.a1 = (function() {
  return 0;
});
$p.E = (function() {
  this.dM();
});
var $d_sc_Iterator$$anon$19 = new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  aX: 1,
  u: 1,
  b: 1,
  c: 1,
  w: 1
}));
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw new $c_jl_IndexOutOfBoundsException(("" + n));
  }
  var skipped = $thiz.dr(n);
  if (skipped.b0()) {
    throw new $c_jl_IndexOutOfBoundsException(("" + n));
  }
  return skipped.dz();
}
/** @constructor */
function $c_sr_ScalaRunTime$$anon$1(x$1) {
  this.cr = null;
  this.aF = 0;
  this.cq = 0;
  this.cr = x$1;
  this.aF = 0;
  this.cq = x$1.ai();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.K = (function() {
  return (this.aF < this.cq);
});
$p.E = (function() {
  var result = this.cr.aj(this.aF);
  this.aF = ((1 + this.aF) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().i($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  bx: 1,
  u: 1,
  b: 1,
  c: 1,
  w: 1
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.Q)));
}
var $d_jl_Double = new $TypeData().i(0, "java.lang.Double", ({
  Q: 1,
  k: 1,
  a: 1,
  f: 1,
  d: 1,
  q: 1
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
  ak: 1,
  k: 1,
  a: 1,
  f: 1,
  d: 1,
  q: 1
}), ((x) => $isFloat(x)));
function $f_jl_Integer__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Integer__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Integer = new $TypeData().i(0, "java.lang.Integer", ({
  an: 1,
  k: 1,
  a: 1,
  f: 1,
  d: 1,
  q: 1
}), ((x) => $isInt(x)));
function $f_jl_Long__hashCode__I($thiz, $thizhi) {
  return ($thiz ^ $thizhi);
}
function $f_jl_Long__toString__T($thiz, $thizhi) {
  return $m_RTLong$().d6($thiz, $thizhi);
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.R)));
}
var $d_jl_Long = new $TypeData().i(0, "java.lang.Long", ({
  R: 1,
  k: 1,
  a: 1,
  f: 1,
  d: 1,
  q: 1
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
  var str = $m_jl_Character$().e6(ch);
  return ($thiz.indexOf(str) | 0);
}
function $f_T__toString__T($thiz) {
  return $thiz;
}
var $d_T = new $TypeData().i(0, "java.lang.String", ({
  as: 1,
  a: 1,
  f: 1,
  E: 1,
  d: 1,
  q: 1
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
$p.bE = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.c1 = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.aX = (function() {
  return this.az();
});
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator(xs) {
  this.bh = null;
  this.a9 = 0;
  this.bJ = 0;
  this.bh = xs;
  this.a9 = 0;
  this.bJ = $m_jl_reflect_Array$().c3(this.bh);
}
$p = $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $p;
$p.a1 = (function() {
  return ((this.bJ - this.a9) | 0);
});
$p.K = (function() {
  return (this.a9 < this.bJ);
});
$p.E = (function() {
  if ((this.a9 >= $m_jl_reflect_Array$().c3(this.bh))) {
    $m_sc_Iterator$().bj.E();
  }
  var r = $m_sr_ScalaRunTime$().ay(this.bh, this.a9);
  this.a9 = ((1 + this.a9) | 0);
  return r;
});
var $d_sc_ArrayOps$ArrayIterator = new $TypeData().i($c_sc_ArrayOps$ArrayIterator, "scala.collection.ArrayOps$ArrayIterator", ({
  aN: 1,
  u: 1,
  b: 1,
  c: 1,
  w: 1,
  a: 1
}));
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator(self) {
  this.cl = null;
  this.bi = 0;
  this.al = 0;
  this.cl = self;
  this.bi = 0;
  this.al = self.z();
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $p;
$p.a1 = (function() {
  return this.al;
});
$p.K = (function() {
  return (this.al > 0);
});
$p.E = (function() {
  if ((this.al > 0)) {
    var r = this.cl.G(this.bi);
    this.bi = ((1 + this.bi) | 0);
    this.al = ((this.al - 1) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().bj.E();
  }
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  aU: 1,
  u: 1,
  b: 1,
  c: 1,
  w: 1,
  a: 1
}));
function $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($thiz) {
  if ((!$thiz.cn)) {
    $thiz.cm = new $c_sci_ArraySeq$ofRef(new ($d_sr_Nothing$.r().C)(0));
    $thiz.cn = true;
  }
  return $thiz.cm;
}
/** @constructor */
function $c_sci_ArraySeq$() {
  this.cm = null;
  this.cn = false;
}
$p = $c_sci_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_sci_ArraySeq$;
/** @constructor */
function $h_sci_ArraySeq$() {
}
$h_sci_ArraySeq$.prototype = $p;
var $d_sci_ArraySeq$ = new $TypeData().i($c_sci_ArraySeq$, "scala.collection.immutable.ArraySeq$", ({
  b7: 1,
  a: 1,
  aQ: 1,
  aO: 1,
  aP: 1,
  b2: 1
}));
var $n_sci_ArraySeq$;
function $m_sci_ArraySeq$() {
  if ((!$n_sci_ArraySeq$)) {
    $n_sci_ArraySeq$ = new $c_sci_ArraySeq$();
  }
  return $n_sci_ArraySeq$;
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
function $f_sc_View__toString__T($thiz) {
  return ($thiz.az() + "(<not computed>)");
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
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bD)));
}
function $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V($thiz, line) {
  if (((typeof console) !== "undefined")) {
    if (($thiz.cd && (!(!(!(!console.error)))))) {
      console.error(line);
    } else {
      console.log(line);
    }
  }
}
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream(isErr) {
  this.cd = false;
  this.aD = null;
  this.cd = isErr;
  $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__(this, new $c_jl_JSConsoleBasedPrintStream$DummyOutputStream(), false, null);
  this.aD = "";
}
$p = $c_jl_JSConsoleBasedPrintStream.prototype = new $h_Ljava_io_PrintStream();
$p.constructor = $c_jl_JSConsoleBasedPrintStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream() {
}
$h_jl_JSConsoleBasedPrintStream.prototype = $p;
$p.dH = (function(s) {
  var rest = s;
  while ((rest !== "")) {
    var this$1 = rest;
    var nlPos = (this$1.indexOf("\n") | 0);
    if ((nlPos < 0)) {
      this.aD = (("" + this.aD) + rest);
      rest = "";
    } else {
      var $x_1 = this.aD;
      var this$2 = rest;
      $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V(this, (("" + $x_1) + this$2.substring(0, nlPos)));
      this.aD = "";
      var this$3 = rest;
      var beginIndex = ((1 + nlPos) | 0);
      rest = this$3.substring(beginIndex);
    }
  }
});
var $d_jl_JSConsoleBasedPrintStream = new $TypeData().i($c_jl_JSConsoleBasedPrintStream, "java.lang.JSConsoleBasedPrintStream", ({
  ao: 1,
  ad: 1,
  ac: 1,
  N: 1,
  L: 1,
  P: 1,
  M: 1,
  O: 1
}));
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  var s$tailLocal1 = s;
  var n$tailLocal1 = n;
  while (true) {
    if (((n$tailLocal1 <= 0) || s$tailLocal1.b0())) {
      return s$tailLocal1;
    } else {
      var n$tailLocal1$tmp1 = ((n$tailLocal1 - 1) | 0);
      var s$tailLocal1$tmp1 = s$tailLocal1.e3();
      n$tailLocal1 = n$tailLocal1$tmp1;
      s$tailLocal1 = s$tailLocal1$tmp1;
    }
  }
}
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.bK = null;
}
$p = $c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$p.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $p;
$p.n = (function() {
  return this.bK;
});
$p.L = (function() {
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
$p.n = (function() {
  return $f_sc_View__toString__T(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ObjectManifest$() {
  this.bK = null;
  this.bK = "Object";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ObjectManifest$, "scala.reflect.ManifestFactory$ObjectManifest$", ({
  bn: 1,
  bo: 1,
  bm: 1,
  a: 1,
  bp: 1,
  bj: 1,
  e: 1,
  bk: 1,
  bl: 1
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
$p.L = (function() {
  return $m_s_util_hashing_MurmurHash3$().d5(this);
});
$p.n = (function() {
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
  $thiz.bk = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.bk = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $p;
$p.G = (function(idx) {
  return this.bk.G(idx);
});
$p.z = (function() {
  return this.bk.z();
});
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.bk = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$p.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $p;
$p.a1 = (function() {
  return this.z();
});
$p.U = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this);
});
$p.az = (function() {
  return "IndexedSeqView";
});
var $d_sc_IndexedSeqView$Id = new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  aT: 1,
  b1: 1,
  aL: 1,
  aM: 1,
  t: 1,
  b: 1,
  c: 1,
  o: 1,
  n: 1,
  m: 1,
  a: 1,
  b4: 1,
  p: 1,
  b0: 1,
  v: 1,
  aS: 1
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
  this.bl = null;
  this.bl = array;
}
$p = $c_sjsr_WrappedVarArgs.prototype = new $h_O();
$p.constructor = $c_sjsr_WrappedVarArgs;
/** @constructor */
function $h_sjsr_WrappedVarArgs() {
}
$h_sjsr_WrappedVarArgs.prototype = $p;
$p.U = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.a1 = (function() {
  return this.z();
});
$p.L = (function() {
  return $m_s_util_hashing_MurmurHash3$().d5(this);
});
$p.n = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.bE = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.c1 = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.z = (function() {
  return (this.bl.length | 0);
});
$p.G = (function(idx) {
  return this.bl[idx];
});
$p.aX = (function() {
  return "WrappedVarArgs";
});
$p.b = (function(v1) {
  return this.G((v1 | 0));
});
function $isArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a6)));
}
var $d_sjsr_WrappedVarArgs = new $TypeData().i($c_sjsr_WrappedVarArgs, "scala.scalajs.runtime.WrappedVarArgs", ({
  a6: 1,
  T: 1,
  b: 1,
  c: 1,
  o: 1,
  n: 1,
  m: 1,
  F: 1,
  j: 1,
  r: 1,
  p: 1,
  e: 1,
  x: 1,
  H: 1,
  G: 1,
  v: 1,
  l: 1,
  U: 1,
  I: 1,
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
$p.a1 = (function() {
  return this.am.c.length;
});
$p.az = (function() {
  return "IndexedSeq";
});
$p.aX = (function() {
  return "ArraySeq";
});
/** @constructor */
function $c_sci_ArraySeq$ofRef(unsafeArray) {
  this.am = null;
  this.am = unsafeArray;
}
$p = $c_sci_ArraySeq$ofRef.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofRef;
/** @constructor */
function $h_sci_ArraySeq$ofRef() {
}
$h_sci_ArraySeq$ofRef.prototype = $p;
$p.z = (function() {
  return this.am.c.length;
});
$p.G = (function(i) {
  return this.am.c[i];
});
$p.L = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.dh(this.am, this$1.aH);
});
$p.U = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.am);
});
$p.b = (function(v1) {
  return this.G((v1 | 0));
});
var $d_sci_ArraySeq$ofRef = new $TypeData().i($c_sci_ArraySeq$ofRef, "scala.collection.immutable.ArraySeq$ofRef", ({
  b8: 1,
  b6: 1,
  S: 1,
  A: 1,
  t: 1,
  b: 1,
  c: 1,
  o: 1,
  n: 1,
  m: 1,
  j: 1,
  r: 1,
  p: 1,
  e: 1,
  x: 1,
  F: 1,
  H: 1,
  G: 1,
  v: 1,
  l: 1,
  U: 1,
  T: 1,
  B: 1,
  C: 1,
  I: 1,
  aR: 1,
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
$p.G = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.az = (function() {
  return "LinearSeq";
});
$p.b0 = (function() {
  return (this === $m_sci_Nil$());
});
$p.bE = (function(f) {
  var these = this;
  while ((!these.b0())) {
    f.b(these.c5());
    these.cb();
  }
});
$p.z = (function() {
  var these = this;
  var len = 0;
  while ((!these.b0())) {
    len = ((1 + len) | 0);
    these.cb();
  }
  return len;
});
$p.aX = (function() {
  return "List";
});
$p.dr = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$p.b = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.V)));
}
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
$p.b3 = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.ai = (function() {
  return 0;
});
$p.ak = (function() {
  return "Nil";
});
$p.aj = (function(n) {
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
$p.c5 = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list");
});
$p.cb = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$p.a1 = (function() {
  return 0;
});
$p.U = (function() {
  return $m_sc_Iterator$().bj;
});
$p.dz = (function() {
  this.c5();
});
$p.e3 = (function() {
  this.cb();
});
var $d_sci_Nil$ = new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  bb: 1,
  V: 1,
  S: 1,
  A: 1,
  t: 1,
  b: 1,
  c: 1,
  o: 1,
  n: 1,
  m: 1,
  j: 1,
  r: 1,
  p: 1,
  e: 1,
  x: 1,
  F: 1,
  H: 1,
  G: 1,
  aZ: 1,
  aY: 1,
  ba: 1,
  b9: 1,
  B: 1,
  C: 1,
  b3: 1,
  I: 1,
  a: 1,
  b5: 1,
  s: 1
}));
var $n_sci_Nil$;
function $m_sci_Nil$() {
  if ((!$n_sci_Nil$)) {
    $n_sci_Nil$ = new $c_sci_Nil$();
  }
  return $n_sci_Nil$;
}
function $ct_scm_StringBuilder__jl_StringBuilder__($thiz, underlying) {
  $thiz.a6 = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, new $c_jl_StringBuilder());
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.a6 = null;
}
$p = $c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
$h_scm_StringBuilder.prototype = $p;
$p.U = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.az = (function() {
  return "IndexedSeq";
});
$p.z = (function() {
  return this.a6.z();
});
$p.a1 = (function() {
  return this.a6.z();
});
$p.n = (function() {
  return this.a6.v;
});
$p.G = (function(i) {
  return $bC(this.a6.cW(i));
});
$p.b = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.a6.cW(i));
});
var $d_scm_StringBuilder = new $TypeData().i($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  bh: 1,
  W: 1,
  A: 1,
  t: 1,
  b: 1,
  c: 1,
  o: 1,
  n: 1,
  m: 1,
  j: 1,
  r: 1,
  p: 1,
  e: 1,
  x: 1,
  a3: 1,
  y: 1,
  Z: 1,
  a5: 1,
  a4: 1,
  Y: 1,
  a0: 1,
  X: 1,
  bf: 1,
  v: 1,
  l: 1,
  a2: 1,
  a1: 1,
  E: 1,
  a: 1
}));
/** @constructor */
function $c_sjs_js_WrappedArray(array) {
  this.aG = null;
  this.aG = array;
}
$p = $c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
}
$h_sjs_js_WrappedArray.prototype = $p;
$p.az = (function() {
  return "IndexedSeq";
});
$p.U = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.G = (function(index) {
  return this.aG[index];
});
$p.z = (function() {
  return (this.aG.length | 0);
});
$p.a1 = (function() {
  return (this.aG.length | 0);
});
$p.aX = (function() {
  return "WrappedArray";
});
$p.b = (function(v1) {
  var index = (v1 | 0);
  return this.aG[index];
});
var $d_sjs_js_WrappedArray = new $TypeData().i($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
  bG: 1,
  bc: 1,
  W: 1,
  A: 1,
  t: 1,
  b: 1,
  c: 1,
  o: 1,
  n: 1,
  m: 1,
  j: 1,
  r: 1,
  p: 1,
  e: 1,
  x: 1,
  a3: 1,
  y: 1,
  Z: 1,
  a5: 1,
  a4: 1,
  Y: 1,
  a0: 1,
  bg: 1,
  bd: 1,
  C: 1,
  B: 1,
  a1: 1,
  v: 1,
  l: 1,
  a2: 1,
  be: 1,
  X: 1,
  a: 1
}));
$s_Lsketches_post_bloom_bloom__main__AT__V(new ($d_T.r().C)([]));
