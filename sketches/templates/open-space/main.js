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
  return (arg0.$classData.Z ? arg0.b9() : $objectClone(arg0));
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
        return null.s8();
      }
    }
  }
}
function $dp_equals__O__Z(instance, x0) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__equals__O__Z(instance, x0);
    }
    case "number": {
      return $f_jl_Double__equals__O__Z(instance, x0);
    }
    case "boolean": {
      return $f_jl_Boolean__equals__O__Z(instance, x0);
    }
    case "undefined": {
      return $f_jl_Void__equals__O__Z(instance, x0);
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.u(x0);
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__equals__O__Z(instance.l, instance.h, x0);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__equals__O__Z(instance.c, x0);
      } else {
        return $c_O.prototype.u.call(instance, x0);
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
        return instance.w();
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__hashCode__I(instance.l, instance.h);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I(instance.c);
      } else {
        return $c_O.prototype.w.call(instance);
      }
    }
  }
}
function $dp_indexOf__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__indexOf__I__I(instance, x0);
  } else {
    return instance.s9(x0);
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
$p.w = (function() {
  return $systemIdentityHashCode(this);
});
$p.u = (function(that) {
  return (this === that);
});
$p.r = (function() {
  var i = this.w();
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.toString = (function() {
  return this.r();
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
$p.aP = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.b9 = (function() {
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
$p.aP = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.b9 = (function() {
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
$p.aP = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.b9 = (function() {
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
$p.aP = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.b9 = (function() {
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
$p.aP = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.b9 = (function() {
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
$p.aP = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.b9 = (function() {
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
$p.aP = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray((srcPos << 1), (((srcPos + length) | 0) << 1)), (destPos << 1));
});
$p.b9 = (function() {
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
$p.aP = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.b9 = (function() {
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
$p.aP = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.b9 = (function() {
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
    B: 1,
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
  $p.aP = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
  });
  $p.b9 = (function() {
    return new ArrayClass(this.a.slice());
  });
  $p.$classData = this;
  var arrayBase = (componentData.B || componentData);
  var arrayDepth = (componentData.D + 1);
  var name = ("[" + componentData.E);
  this.C = ArrayClass;
  this.n = ({
    B: 1,
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
var $typedArraysAreBigEndian = (new Int8Array(new Int32Array([1]).buffer)[0] === 0);
function $constArrayBuffer_B(len, encoded) {
  var buf = new ArrayBuffer(len);
  var view = new DataView(buf);
  var regularChunksEnd = ((encoded.length - 4) | 0);
  var i = 0;
  var j = 0;
  var chunk = 0;
  while (true) {
    chunk = (((encoded.charCodeAt(i) | (encoded.charCodeAt(((i + 1) | 0)) << 8)) | (encoded.charCodeAt(((i + 2) | 0)) << 16)) | (encoded.charCodeAt(((i + 3) | 0)) << 24));
    chunk = ((((chunk - 808464432) | 0) - ((chunk & 1616928864) >>> 3)) | 0);
    chunk = (((chunk & 1056980736) >>> 2) | (chunk & 4128831));
    chunk = (((chunk & 268369920) >>> 4) | (chunk & 4095));
    if ((i === regularChunksEnd)) {
      break;
    }
    view.setUint32(j, chunk, true);
    i = ((i + 4) | 0);
    j = ((j + 3) | 0);
  }
  var trailing = ((len - j) | 0);
  view.setUint8(j, chunk);
  if ((trailing !== 1)) {
    view.setUint8(((j + 1) | 0), (chunk >>> 8));
    if ((trailing === 3)) {
      view.setUint8(((j + 2) | 0), (chunk >>> 16));
    }
  }
  return buf;
}
function $constArrayBuffer_S(len, encoded) {
  var buf = $constArrayBuffer_B((len << 1), encoded);
  if ($typedArraysAreBigEndian) {
    var view = new DataView(buf);
    var i = 0;
    while ((i !== len)) {
      view.putInt16(i, view.getInt16(i, true), false);
      i = ((i + 2) | 0);
    }
  }
  return buf;
}
function $constArrayBuffer_I(len, encoded) {
  var buf = $constArrayBuffer_B((len << 2), encoded);
  if ($typedArraysAreBigEndian) {
    var view = new DataView(buf);
    var i = 0;
    while ((i !== len)) {
      view.putInt32(i, view.getInt32(i, true), false);
      i = ((i + 4) | 0);
    }
  }
  return buf;
}
function $constArrayBuffer_J(len, encoded) {
  return $constArrayBuffer_I((len << 1), encoded);
}
function $constTypedArrayU_I(len, encoded, prevMask) {
  var buf = new Int32Array(len);
  var inLen = (encoded.length | 0);
  var prev = 0;
  var i = 0;
  var j = 0;
  var v = 0;
  while ((i !== inLen)) {
    var c = encoded.charCodeAt(i);
    if ((c < 80)) {
      v = ((v | (c - 48)) << 5);
    } else {
      v = (v | (c - 93));
      prev = (((prev & prevMask) + v) | 0);
      buf[j] = prev;
      j = ((j + 1) | 0);
      v = 0;
    }
    i = ((i + 1) | 0);
  }
  return buf;
}
function $constTypedArrayS_I(len, encoded, prevMask) {
  var buf = new Int32Array(len);
  var inLen = (encoded.length | 0);
  var prev = 0;
  var i = 0;
  var j = 0;
  var v = 0;
  var first = true;
  while ((i !== inLen)) {
    var c = encoded.charCodeAt(i);
    if ((c < 80)) {
      if (first) {
        v = (((c - 48) << 27) >> 22);
        first = false;
      } else {
        v = ((v | (c - 48)) << 5);
      }
    } else {
      if (first) {
        v = (((c - 93) << 27) >> 27);
      } else {
        v = (v | (c - 93));
        first = true;
      }
      prev = (((prev & prevMask) + v) | 0);
      buf[j] = prev;
      j = ((j + 1) | 0);
    }
    i = ((i + 1) | 0);
  }
  return buf;
}
function $constArrRaw_B(len, encoded) {
  return new $ac_B(new Int8Array($constArrayBuffer_B(len, encoded)));
}
function $constArrRaw_S(len, encoded) {
  return new $ac_S(new Int16Array($constArrayBuffer_S(len, encoded)));
}
function $constArrRaw_C(len, encoded) {
  return new $ac_C(new Uint16Array($constArrayBuffer_S(len, encoded)));
}
function $constArrRaw_I(len, encoded) {
  return new $ac_I(new Int32Array($constArrayBuffer_I(len, encoded)));
}
function $constArrRaw_J(len, encoded) {
  return new $ac_J(new Int32Array($constArrayBuffer_J(len, encoded)));
}
function $constArrUVals_I(len, encoded) {
  return new $ac_I($constTypedArrayU_I(len, encoded, 0));
}
function $constArrUDiffs_I(len, encoded) {
  return new $ac_I($constTypedArrayU_I(len, encoded, (-1)));
}
function $constArrSVals_I(len, encoded) {
  return new $ac_I($constTypedArrayS_I(len, encoded, 0));
}
function $constArrSDiffs_I(len, encoded) {
  return new $ac_I($constTypedArrayS_I(len, encoded, (-1)));
}
function $constArrUVals_J(len, encoded) {
  return new $ac_J($constTypedArrayU_I((len << 1), encoded, 0));
}
function $constArrUDiffs_J(len, encoded) {
  return new $ac_J($constTypedArrayU_I((len << 1), encoded, (-1)));
}
function $constArrSVals_J(len, encoded) {
  return new $ac_J($constTypedArrayS_I((len << 1), encoded, 0));
}
function $constArrSDiffs_J(len, encoded) {
  return new $ac_J($constTypedArrayS_I((len << 1), encoded, (-1)));
}
function $p_jl_System$SystemProperties$__loadSystemProperties__O($thiz) {
  var result = ({});
  result["java.version"] = "1.8";
  result["java.vm.specification.version"] = "1.8";
  result["java.vm.specification.vendor"] = "Oracle Corporation";
  result["java.vm.specification.name"] = "Java Virtual Machine Specification";
  result["java.vm.name"] = "Scala.js";
  result["java.vm.version"] = "1.22.0";
  result["java.specification.version"] = "1.8";
  result["java.specification.vendor"] = "Oracle Corporation";
  result["java.specification.name"] = "Java Platform API Specification";
  result["file.separator"] = "/";
  result["path.separator"] = ":";
  result["line.separator"] = "\n";
  return result;
}
/** @constructor */
function $c_jl_System$SystemProperties$() {
  this.j4 = null;
  this.kO = null;
  $n_jl_System$SystemProperties$ = this;
  this.j4 = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
  this.kO = null;
}
$p = $c_jl_System$SystemProperties$.prototype = new $h_O();
$p.constructor = $c_jl_System$SystemProperties$;
/** @constructor */
function $h_jl_System$SystemProperties$() {
}
$h_jl_System$SystemProperties$.prototype = $p;
$p.o9 = (function(key, default$1) {
  if ((this.j4 !== null)) {
    var dict = this.j4;
    return ((!(!$m_jl_Utils$Cache$().kQ.call(dict, key))) ? dict[key] : default$1);
  } else {
    return this.kO.o9(key, default$1);
  }
});
var $d_jl_System$SystemProperties$ = new $TypeData().i($c_jl_System$SystemProperties$, "java.lang.System$SystemProperties$", ({
  bi: 1
}));
var $n_jl_System$SystemProperties$;
function $m_jl_System$SystemProperties$() {
  if ((!$n_jl_System$SystemProperties$)) {
    $n_jl_System$SystemProperties$ = new $c_jl_System$SystemProperties$();
  }
  return $n_jl_System$SystemProperties$;
}
/** @constructor */
function $c_jl_Utils$Cache$() {
  this.kQ = null;
  $n_jl_Utils$Cache$ = this;
  this.kQ = Object.prototype.hasOwnProperty;
}
$p = $c_jl_Utils$Cache$.prototype = new $h_O();
$p.constructor = $c_jl_Utils$Cache$;
/** @constructor */
function $h_jl_Utils$Cache$() {
}
$h_jl_Utils$Cache$.prototype = $p;
var $d_jl_Utils$Cache$ = new $TypeData().i($c_jl_Utils$Cache$, "java.lang.Utils$Cache$", ({
  bk: 1
}));
var $n_jl_Utils$Cache$;
function $m_jl_Utils$Cache$() {
  if ((!$n_jl_Utils$Cache$)) {
    $n_jl_Utils$Cache$ = new $c_jl_Utils$Cache$();
  }
  return $n_jl_Utils$Cache$;
}
function $f_jl_Void__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_jl_Void__hashCode__I($thiz) {
  return 0;
}
function $f_jl_Void__toString__T($thiz) {
  return "undefined";
}
var $d_jl_Void = new $TypeData().i(0, "java.lang.Void", ({
  bl: 1
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
$p.hK = (function(array) {
  if ((array instanceof $ac_O)) {
    return array.a.length;
  } else if ((array instanceof $ac_Z)) {
    return array.a.length;
  } else if ((array instanceof $ac_C)) {
    return array.a.length;
  } else if ((array instanceof $ac_B)) {
    return array.a.length;
  } else if ((array instanceof $ac_S)) {
    return array.a.length;
  } else if ((array instanceof $ac_I)) {
    return array.a.length;
  } else if ((array instanceof $ac_J)) {
    return ((array.a.length >>> 1) | 0);
  } else if ((array instanceof $ac_F)) {
    return array.a.length;
  } else {
    if ((!(array instanceof $ac_D))) {
      $p_jl_reflect_Array$__mismatch__O__E(this, array);
    }
    return array.a.length;
  }
});
var $d_jl_reflect_Array$ = new $TypeData().i($c_jl_reflect_Array$, "java.lang.reflect.Array$", ({
  bm: 1
}));
var $n_jl_reflect_Array$;
function $m_jl_reflect_Array$() {
  if ((!$n_jl_reflect_Array$)) {
    $n_jl_reflect_Array$ = new $c_jl_reflect_Array$();
  }
  return $n_jl_reflect_Array$;
}
/** @constructor */
function $c_ju_Arrays$() {
}
$p = $c_ju_Arrays$.prototype = new $h_O();
$p.constructor = $c_ju_Arrays$;
/** @constructor */
function $h_ju_Arrays$() {
}
$h_ju_Arrays$.prototype = $p;
$p.pe = (function(a, key) {
  var startIndex = 0;
  var endIndex = a.a.length;
  while (true) {
    if ((startIndex === endIndex)) {
      return (~startIndex);
    } else {
      var mid = ((((startIndex + endIndex) | 0) >>> 1) | 0);
      var elem = a.a[mid];
      var cmp = ((key === elem) ? 0 : ((key < elem) ? (-1) : 1));
      if ((cmp < 0)) {
        endIndex = mid;
        continue;
      }
      if ((cmp !== 0)) {
        startIndex = ((1 + mid) | 0);
        continue;
      }
      return mid;
    }
  }
});
var $d_ju_Arrays$ = new $TypeData().i($c_ju_Arrays$, "java.util.Arrays$", ({
  bn: 1
}));
var $n_ju_Arrays$;
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$();
  }
  return $n_ju_Arrays$;
}
function $s_RTLong__remainderUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().rj(alo, ahi, blo, bhi);
}
function $s_RTLong__remainder__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().ri(alo, ahi, blo, bhi);
}
function $s_RTLong__divideUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().pB(alo, ahi, blo, bhi);
}
function $s_RTLong__divide__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().pA(alo, ahi, blo, bhi);
}
function $s_RTLong__fromDoubleBits__D__O__J(value, fpBitsDataView) {
  fpBitsDataView.setFloat64(0, value, true);
  var lo = (fpBitsDataView.getInt32(0, true) | 0);
  var hi = (fpBitsDataView.getInt32(4, true) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__fromDouble__D__J(value) {
  return $m_RTLong$().ks(value);
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
  return $m_RTLong$().oG(lo, hi);
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
  var hi = ((((ahi - bhi) | 0) - (((lo >>> 0) > (alo >>> 0)) | 0)) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__add__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = ((alo + blo) | 0);
  var hi = ((((ahi + bhi) | 0) + (((lo >>> 0) < (alo >>> 0)) | 0)) | 0);
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
$p.oG = (function(lo, hi) {
  if ((hi === (lo >> 31))) {
    return ("" + lo);
  } else if ((((-2097152) & (hi ^ (hi >> 10))) === 0)) {
    return ("" + ((4.294967296E9 * hi) + (lo >>> 0.0)));
  } else {
    var sign = (hi >> 31);
    var xlo = (lo ^ sign);
    var rlo = ((xlo - sign) | 0);
    var rhi = (((hi ^ sign) + (((rlo >>> 0) < (xlo >>> 0)) | 0)) | 0);
    var aHat = ((4.294967296E9 * (rhi >>> 0.0)) + (rlo >>> 0.0));
    var qHat = (+Math.floor((1.0000000000000265E-9 * aHat)));
    var rHat = ((rlo - Math.imul(1000000000, (qHat | 0.0))) | 0);
    if ((rHat < 0)) {
      qHat = (qHat - 1.0);
      rHat = ((1000000000 + rHat) | 0);
    }
    var this$7 = rHat;
    var remStr = ("" + this$7);
    var $x_1 = qHat;
    var start = remStr.length;
    var s = ((("" + $x_1) + "000000000".substring(start)) + remStr);
    return ((hi < 0) ? ("-" + s) : s);
  }
});
$p.ks = (function(value) {
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
$p.pA = (function(alo, ahi, blo, bhi) {
  var sign = (ahi >> 31);
  var xlo = (alo ^ sign);
  var rlo = ((xlo - sign) | 0);
  var rhi = (((ahi ^ sign) + (((rlo >>> 0) < (xlo >>> 0)) | 0)) | 0);
  var sign$1 = (bhi >> 31);
  var xlo$1 = (blo ^ sign$1);
  var rlo$1 = ((xlo$1 - sign$1) | 0);
  var rhi$1 = (((bhi ^ sign$1) + (((rlo$1 >>> 0) < (xlo$1 >>> 0)) | 0)) | 0);
  if (((rhi$1 | ((-2097152) & rlo$1)) === 0)) {
    var quotHi = (((rhi >>> 0) / ($checkIntDivisor(rlo$1) >>> 0)) | 0);
    var k = ((rhi - Math.imul(rlo$1, quotHi)) | 0);
    var quotLo = ((((4.294967296E9 * k) + (rlo >>> 0.0)) / rlo$1) | 0.0);
    var absR_$_lo = quotLo;
    var absR_$_hi = quotHi;
  } else {
    var aHat = ((4.294967296E9 * (rhi >>> 0.0)) + (rlo >>> 0.0));
    var bHat = ((4.294967296E9 * (rhi$1 >>> 0.0)) + (rlo$1 >>> 0.0));
    var x$1 = ((aHat / bHat) + 0.00390625);
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
    if ((((((rhi - ((((((((Math.imul(rlo$1, hi) + Math.imul(rhi$1, lo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0)) | 0) - (((((rlo - lo$1) | 0) >>> 0) > (rlo >>> 0)) | 0)) | 0) < 0)) {
      var lo$3 = ((lo - 1) | 0);
      var hi$3 = ((((hi - 1) | 0) + ((lo$3 !== (-1)) | 0)) | 0);
      var absR_$_lo = lo$3;
      var absR_$_hi = hi$3;
    } else {
      var absR_$_lo = lo;
      var absR_$_hi = hi;
    }
  }
  if (((ahi ^ bhi) >= 0)) {
    return $bL(absR_$_lo, absR_$_hi);
  } else {
    var lo$4 = ((-absR_$_lo) | 0);
    var hi$4 = ((((-absR_$_hi) | 0) - ((lo$4 !== 0) | 0)) | 0);
    return $bL(lo$4, hi$4);
  }
});
$p.pB = (function(alo, ahi, blo, bhi) {
  if (((bhi | ((-2097152) & blo)) === 0)) {
    var quotHi = (((ahi >>> 0) / ($checkIntDivisor(blo) >>> 0)) | 0);
    var k = ((ahi - Math.imul(blo, quotHi)) | 0);
    var quotLo = ((((4.294967296E9 * k) + (alo >>> 0.0)) / blo) | 0.0);
    return $bL(quotLo, quotHi);
  } else if ((bhi >= 0)) {
    var aHat = ((4.294967296E9 * (ahi >>> 0.0)) + (alo >>> 0.0));
    var bHat = ((4.294967296E9 * (bhi >>> 0.0)) + (blo >>> 0.0));
    var x$1 = ((aHat / bHat) + 0.00390625);
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
    if ((((((ahi - ((((((((Math.imul(blo, hi) + Math.imul(bhi, lo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0)) | 0) - (((((alo - lo$1) | 0) >>> 0) > (alo >>> 0)) | 0)) | 0) < 0)) {
      var lo$3 = ((lo - 1) | 0);
      var hi$3 = ((((hi - 1) | 0) + ((lo$3 !== (-1)) | 0)) | 0);
      return $bL(lo$3, hi$3);
    } else {
      return $bL(lo, hi);
    }
  } else if (((ahi === bhi) ? ((alo >>> 0) < (blo >>> 0)) : ((ahi >>> 0) < (bhi >>> 0)))) {
    return $bL(0, 0);
  } else {
    return $bL(1, 0);
  }
});
$p.ri = (function(alo, ahi, blo, bhi) {
  var sign = (ahi >> 31);
  var xlo = (alo ^ sign);
  var rlo = ((xlo - sign) | 0);
  var rhi = (((ahi ^ sign) + (((rlo >>> 0) < (xlo >>> 0)) | 0)) | 0);
  var sign$1 = (bhi >> 31);
  var xlo$1 = (blo ^ sign$1);
  var rlo$1 = ((xlo$1 - sign$1) | 0);
  var rhi$1 = (((bhi ^ sign$1) + (((rlo$1 >>> 0) < (xlo$1 >>> 0)) | 0)) | 0);
  if (((rhi$1 | ((-2097152) & rlo$1)) === 0)) {
    var k$2 = (((rhi >>> 0) % ($checkIntDivisor(rlo$1) >>> 0)) | 0);
    var quotLo$2 = ((((4.294967296E9 * k$2) + (rlo >>> 0.0)) / rlo$1) | 0.0);
    var remLo = ((rlo - Math.imul(rlo$1, quotLo$2)) | 0);
    var absR_$_lo = remLo;
    var absR_$_hi = 0;
  } else {
    var aHat = ((4.294967296E9 * (rhi >>> 0.0)) + (rlo >>> 0.0));
    var bHat = ((4.294967296E9 * (rhi$1 >>> 0.0)) + (rlo$1 >>> 0.0));
    var x$1 = ((aHat / bHat) + 0.00390625);
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
    var hi$2 = ((((rhi - hi$1) | 0) - (((lo$2 >>> 0) > (rlo >>> 0)) | 0)) | 0);
    if ((hi$2 < 0)) {
      var lo$3 = ((lo$2 + rlo$1) | 0);
      var hi$3 = ((((hi$2 + rhi$1) | 0) + (((lo$3 >>> 0) < (lo$2 >>> 0)) | 0)) | 0);
      var absR_$_lo = lo$3;
      var absR_$_hi = hi$3;
    } else {
      var absR_$_lo = lo$2;
      var absR_$_hi = hi$2;
    }
  }
  if ((ahi < 0)) {
    var lo$4 = ((-absR_$_lo) | 0);
    var hi$4 = ((((-absR_$_hi) | 0) - ((lo$4 !== 0) | 0)) | 0);
    return $bL(lo$4, hi$4);
  } else {
    return $bL(absR_$_lo, absR_$_hi);
  }
});
$p.rj = (function(alo, ahi, blo, bhi) {
  if (((bhi | ((-2097152) & blo)) === 0)) {
    var k$2 = (((ahi >>> 0) % ($checkIntDivisor(blo) >>> 0)) | 0);
    var quotLo$2 = ((((4.294967296E9 * k$2) + (alo >>> 0.0)) / blo) | 0.0);
    var remLo = ((alo - Math.imul(blo, quotLo$2)) | 0);
    return $bL(remLo, 0);
  } else if ((bhi >= 0)) {
    var aHat = ((4.294967296E9 * (ahi >>> 0.0)) + (alo >>> 0.0));
    var bHat = ((4.294967296E9 * (bhi >>> 0.0)) + (blo >>> 0.0));
    var x$1 = ((aHat / bHat) + 0.00390625);
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
    var hi$2 = ((((ahi - hi$1) | 0) - (((lo$2 >>> 0) > (alo >>> 0)) | 0)) | 0);
    if ((hi$2 < 0)) {
      var lo$3 = ((lo$2 + blo) | 0);
      var hi$3 = ((((hi$2 + bhi) | 0) + (((lo$3 >>> 0) < (lo$2 >>> 0)) | 0)) | 0);
      return $bL(lo$3, hi$3);
    } else {
      return $bL(lo$2, hi$2);
    }
  } else if (((ahi === bhi) ? ((alo >>> 0) < (blo >>> 0)) : ((ahi >>> 0) < (bhi >>> 0)))) {
    return $bL(alo, ahi);
  } else {
    var lo$4 = ((alo - blo) | 0);
    var hi$4 = ((((ahi - bhi) | 0) - (((lo$4 >>> 0) > (alo >>> 0)) | 0)) | 0);
    return $bL(lo$4, hi$4);
  }
});
var $d_RTLong$ = new $TypeData().i($c_RTLong$, "org.scalajs.linker.runtime.RuntimeLong$", ({
  bp: 1
}));
var $n_RTLong$;
function $m_RTLong$() {
  if ((!$n_RTLong$)) {
    $n_RTLong$ = new $c_RTLong$();
  }
  return $n_RTLong$;
}
/** @constructor */
function $c_s_Array$() {
}
$p = $c_s_Array$.prototype = new $h_O();
$p.constructor = $c_s_Array$;
/** @constructor */
function $h_s_Array$() {
}
$h_s_Array$.prototype = $p;
$p.o5 = (function(xs, ys) {
  if ((xs === ys)) {
    return true;
  }
  if ((xs.a.length !== ys.a.length)) {
    return false;
  }
  var len = xs.a.length;
  var i = 0;
  while ((i < len)) {
    if ((!$m_sr_BoxesRunTime$().c(xs.a[i], ys.a[i]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
var $d_s_Array$ = new $TypeData().i($c_s_Array$, "scala.Array$", ({
  bq: 1
}));
var $n_s_Array$;
function $m_s_Array$() {
  if ((!$n_s_Array$)) {
    $n_s_Array$ = new $c_s_Array$();
  }
  return $n_s_Array$;
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
  var it = $thiz.ad();
  while (it.V()) {
    f.h(it.R());
  }
}
function $f_sc_IterableOnceOps__copyToArray__O__I__I__I($thiz, dest, start, n) {
  var it = $thiz.ad();
  var i = start;
  matchResult18: {
    var srclen;
    var x31 = $thiz.aj();
    if ((x31 === (-1))) {
      var srclen = $m_jl_reflect_Array$().hK(dest);
      break matchResult18;
    }
    var srclen = x31;
  }
  var destLen = $m_jl_reflect_Array$().hK(dest);
  var limit = ((n < srclen) ? n : srclen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var end = ((start + ((total < 0) ? 0 : total)) | 0);
  while (((i < end) && it.V())) {
    $m_sr_ScalaRunTime$().pa(dest, i, it.R());
    i = ((1 + i) | 0);
  }
  return ((i - start) | 0);
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  return (($thiz.aj() === 0) ? (("" + start) + end) : $thiz.kj($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).bh.aq);
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.bh;
  if ((start.length !== 0)) {
    jsb.aq = (("" + jsb.aq) + start);
  }
  var it = $thiz.ad();
  if (it.V()) {
    var obj = it.R();
    jsb.aq = (("" + jsb.aq) + obj);
    while (it.V()) {
      if ((sep.length !== 0)) {
        jsb.aq = (("" + jsb.aq) + sep);
      }
      var obj$1 = it.R();
      jsb.aq = (("" + jsb.aq) + obj$1);
    }
  }
  if ((end.length !== 0)) {
    jsb.aq = (("" + jsb.aq) + end);
  }
  return b;
}
/** @constructor */
function $c_sc_Iterator$ConcatIteratorCell(head, tail) {
  this.kW = null;
  this.gZ = null;
  this.kW = head;
  this.gZ = tail;
}
$p = $c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$ConcatIteratorCell;
/** @constructor */
function $h_sc_Iterator$ConcatIteratorCell() {
}
$h_sc_Iterator$ConcatIteratorCell.prototype = $p;
$p.q2 = (function() {
  return this.kW.hH().ad();
});
var $d_sc_Iterator$ConcatIteratorCell = new $TypeData().i($c_sc_Iterator$ConcatIteratorCell, "scala.collection.Iterator$ConcatIteratorCell", ({
  c7: 1
}));
/** @constructor */
function $c_sc_StringOps$() {
  this.kX = null;
  $n_sc_StringOps$ = this;
  this.kX = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => this.kX));
}
$p = $c_sc_StringOps$.prototype = new $h_O();
$p.constructor = $c_sc_StringOps$;
/** @constructor */
function $h_sc_StringOps$() {
}
$h_sc_StringOps$.prototype = $p;
var $d_sc_StringOps$ = new $TypeData().i($c_sc_StringOps$, "scala.collection.StringOps$", ({
  cf: 1
}));
var $n_sc_StringOps$;
function $m_sc_StringOps$() {
  if ((!$n_sc_StringOps$)) {
    $n_sc_StringOps$ = new $c_sc_StringOps$();
  }
  return $n_sc_StringOps$;
}
/** @constructor */
function $c_sci_IndexedSeqDefaults$() {
  this.l0 = 0;
  $n_sci_IndexedSeqDefaults$ = this;
  try {
    $m_sc_StringOps$();
    var $x_1 = $m_jl_Integer$().q9($m_jl_System$SystemProperties$().o9("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64"), 10, 214748364);
  } catch (e) {
    if (false) {
      var $x_1 = 64;
    } else {
      var $x_1;
      throw e;
    }
  }
  this.l0 = $x_1;
}
$p = $c_sci_IndexedSeqDefaults$.prototype = new $h_O();
$p.constructor = $c_sci_IndexedSeqDefaults$;
/** @constructor */
function $h_sci_IndexedSeqDefaults$() {
}
$h_sci_IndexedSeqDefaults$.prototype = $p;
var $d_sci_IndexedSeqDefaults$ = new $TypeData().i($c_sci_IndexedSeqDefaults$, "scala.collection.immutable.IndexedSeqDefaults$", ({
  ck: 1
}));
var $n_sci_IndexedSeqDefaults$;
function $m_sci_IndexedSeqDefaults$() {
  if ((!$n_sci_IndexedSeqDefaults$)) {
    $n_sci_IndexedSeqDefaults$ = new $c_sci_IndexedSeqDefaults$();
  }
  return $n_sci_IndexedSeqDefaults$;
}
/** @constructor */
function $c_sr_BoxesRunTime$() {
}
$p = $c_sr_BoxesRunTime$.prototype = new $h_O();
$p.constructor = $c_sr_BoxesRunTime$;
/** @constructor */
function $h_sr_BoxesRunTime$() {
}
$h_sr_BoxesRunTime$.prototype = $p;
$p.c = (function(x, y) {
  return ((x === y) || ($is_jl_Number(x) ? this.pJ(x, y) : ((x instanceof $Char) ? this.pH(x, y) : ((x === null) ? (y === null) : $dp_equals__O__Z(x, y)))));
});
$p.pJ = (function(xn, y) {
  if ($is_jl_Number(y)) {
    return this.pI(xn, y);
  } else if ((y instanceof $Char)) {
    if (((typeof xn) === "number")) {
      return ((+xn) === y.c);
    } else if ((xn instanceof $Long)) {
      var $x_1 = $uJ(xn);
      var x3_$_lo = $x_1.l;
      var x3_$_hi = $x_1.h;
      var value = y.c;
      var hi = (value >> 31);
      return (((x3_$_lo ^ value) | (x3_$_hi ^ hi)) === 0);
    } else {
      return ((xn === null) ? (y === null) : $dp_equals__O__Z(xn, y));
    }
  } else {
    return ((xn === null) ? (y === null) : $dp_equals__O__Z(xn, y));
  }
});
$p.pI = (function(xn, yn) {
  if (((typeof xn) === "number")) {
    var x2 = (+xn);
    if (((typeof yn) === "number")) {
      return (x2 === (+yn));
    } else if ((yn instanceof $Long)) {
      var $x_1 = $uJ(yn);
      var x3_$_lo = $x_1.l;
      var x3_$_hi = $x_1.h;
      return (x2 === ((4.294967296E9 * x3_$_hi) + (x3_$_lo >>> 0.0)));
    } else {
      return (false && yn.u(x2));
    }
  } else if ((xn instanceof $Long)) {
    var $x_2 = $uJ(xn);
    var x3$2_$_lo = $x_2.l;
    var x3$2_$_hi = $x_2.h;
    if ((yn instanceof $Long)) {
      var $x_3 = $uJ(yn);
      var x2$3_$_lo = $x_3.l;
      var x2$3_$_hi = $x_3.h;
      return (((x3$2_$_lo ^ x2$3_$_lo) | (x3$2_$_hi ^ x2$3_$_hi)) === 0);
    } else if (((typeof yn) === "number")) {
      var x3$3 = (+yn);
      return (((4.294967296E9 * x3$2_$_hi) + (x3$2_$_lo >>> 0.0)) === x3$3);
    } else {
      return (false && yn.u($bL(x3$2_$_lo, x3$2_$_hi)));
    }
  } else {
    return ((xn === null) ? (yn === null) : $dp_equals__O__Z(xn, yn));
  }
});
$p.pH = (function(xc, y) {
  if ((y instanceof $Char)) {
    return (xc.c === y.c);
  } else if ($is_jl_Number(y)) {
    if (((typeof y) === "number")) {
      return ((+y) === xc.c);
    } else if ((y instanceof $Long)) {
      var $x_1 = $uJ(y);
      var x3_$_lo = $x_1.l;
      var x3_$_hi = $x_1.h;
      var value = xc.c;
      var hi = (value >> 31);
      return (((x3_$_lo ^ value) | (x3_$_hi ^ hi)) === 0);
    } else {
      return ((y === null) ? (xc === null) : $dp_equals__O__Z(y, xc));
    }
  } else {
    return ((xc === null) && (y === null));
  }
});
var $d_sr_BoxesRunTime$ = new $TypeData().i($c_sr_BoxesRunTime$, "scala.runtime.BoxesRunTime$", ({
  cU: 1
}));
var $n_sr_BoxesRunTime$;
function $m_sr_BoxesRunTime$() {
  if ((!$n_sr_BoxesRunTime$)) {
    $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$();
  }
  return $n_sr_BoxesRunTime$;
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
$p.pb = (function() {
  throw new $c_jl_AssertionError("assertion failed");
});
$p.iU = (function() {
  throw $ct_jl_NullPointerException__T__(new $c_jl_NullPointerException(), "tried to cast away nullability, but value is null");
});
var $d_sr_Scala3RunTime$ = new $TypeData().i($c_sr_Scala3RunTime$, "scala.runtime.Scala3RunTime$", ({
  cX: 1
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
$p.gN = (function(xs, idx) {
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
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  throw new $c_s_MatchError(xs);
});
$p.pa = (function(xs, idx, value) {
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
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  throw new $c_s_MatchError(xs);
});
$p.gM = (function(x) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(x.J(), (x.H() + "("), ",", ")");
});
$p.aw = (function(xs) {
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
  cY: 1
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
$p.l = (function(hash, data) {
  var h = this.iT(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.iT = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.ab = (function(hash, length) {
  return this.pc((hash ^ length));
});
$p.pc = (function(h0) {
  var h = h0;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.qc = (function(lv_$_lo, lv_$_hi) {
  return ((lv_$_hi === (lv_$_lo >> 31)) ? lv_$_lo : (lv_$_lo ^ lv_$_hi));
});
$p.bw = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var $x_1 = $m_RTLong$().ks(dv);
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
$p.L = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    return this.bw((+x));
  } else if ((x instanceof $Long)) {
    var $x_1 = $uJ(x);
    return this.qc($x_1.l, $x_1.h);
  } else {
    return $dp_hashCode__I(x);
  }
});
$p.q7 = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_sr_Statics$ = new $TypeData().i($c_sr_Statics$, "scala.runtime.Statics$", ({
  d0: 1
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
    return new $c_T2(x, self.fY);
  }
  if ((self instanceof $c_T2)) {
    return new $c_T3(x, self.T, self.af);
  }
  if ((self instanceof $c_T3)) {
    return new $c_T4(x, self.aB, self.aQ, self.aZ);
  }
  if ((self instanceof $c_T4)) {
    return new $c_T5(x, self.b0, self.bd, self.be, self.bf);
  }
  if ((self instanceof $c_T5)) {
    return new $c_T6(x, self.f6, self.bA, self.bB, self.bC, self.bD);
  }
  if ((self instanceof $c_T6)) {
    return new $c_T7(x, self.gc, self.f7, self.f8, self.f9, self.fa, self.fb);
  }
  if ((self instanceof $c_T7)) {
    return new $c_T8(x, self.gd, self.fc, self.fd, self.fe, self.ff, self.fg, self.fh);
  }
  if ((self instanceof $c_T8)) {
    return new $c_T9(x, self.ge, self.fi, self.fj, self.fk, self.fl, self.fm, self.fn, self.fo);
  }
  if ((self instanceof $c_T9)) {
    return new $c_T10(x, self.gf, self.fp, self.fq, self.fr, self.fs, self.ft, self.fu, self.fv, self.fw);
  }
  if ((self instanceof $c_T10)) {
    return new $c_T11(x, self.fZ, self.bX, self.bY, self.bZ, self.c0, self.c1, self.c2, self.c3, self.c4, self.bW);
  }
  if ((self instanceof $c_T11)) {
    return new $c_T12(x, self.g0, self.c7, self.c8, self.c9, self.ca, self.cb, self.cc, self.cd, self.ce, self.c5, self.c6);
  }
  if ((self instanceof $c_T12)) {
    return new $c_T13(x, self.g1, self.ci, self.cj, self.ck, self.cl, self.cm, self.cn, self.co, self.cp, self.cf, self.cg, self.ch);
  }
  if ((self instanceof $c_T13)) {
    return new $c_T14(x, self.g2, self.cu, self.cv, self.cw, self.cx, self.cy, self.cz, self.cA, self.cB, self.cq, self.cr, self.cs, self.ct);
  }
  if ((self instanceof $c_T14)) {
    return new $c_T15(x, self.g3, self.cH, self.cI, self.cJ, self.cK, self.cL, self.cM, self.cN, self.cO, self.cC, self.cD, self.cE, self.cF, self.cG);
  }
  if ((self instanceof $c_T15)) {
    return new $c_T16(x, self.g4, self.cV, self.cW, self.cX, self.cY, self.cZ, self.d0, self.d1, self.d2, self.cP, self.cQ, self.cR, self.cS, self.cT, self.cU);
  }
  if ((self instanceof $c_T16)) {
    return new $c_T17(x, self.g5, self.da, self.db, self.dc, self.dd, self.de, self.df, self.dg, self.dh, self.d3, self.d4, self.d5, self.d6, self.d7, self.d8, self.d9);
  }
  if ((self instanceof $c_T17)) {
    return new $c_T18(x, self.g6, self.dr, self.ds, self.dt, self.du, self.dv, self.dw, self.dx, self.dy, self.di, self.dj, self.dk, self.dl, self.dm, self.dn, self.dp, self.dq);
  }
  if ((self instanceof $c_T18)) {
    return new $c_T19(x, self.g7, self.dI, self.dJ, self.dK, self.dL, self.dM, self.dN, self.dO, self.dP, self.dz, self.dA, self.dB, self.dC, self.dD, self.dE, self.dF, self.dG, self.dH);
  }
  if ((self instanceof $c_T19)) {
    return new $c_T20(x, self.g8, self.e0, self.e1, self.e2, self.e3, self.e4, self.e5, self.e6, self.e7, self.dQ, self.dR, self.dS, self.dT, self.dU, self.dV, self.dW, self.dX, self.dY, self.dZ);
  }
  if ((self instanceof $c_T20)) {
    return new $c_T21(x, self.g9, self.ei, self.ek, self.el, self.em, self.en, self.eo, self.ep, self.eq, self.e8, self.e9, self.ea, self.eb, self.ec, self.ed, self.ee, self.ef, self.eg, self.eh, self.ej);
  }
  if ((self instanceof $c_T21)) {
    return new $c_T22(x, self.ga, self.eB, self.eE, self.eF, self.eG, self.eH, self.eI, self.eJ, self.eK, self.er, self.es, self.et, self.eu, self.ev, self.ew, self.ex, self.ey, self.ez, self.eA, self.eC, self.eD);
  }
  if ((self instanceof $c_T22)) {
    return new $c_sr_TupleXXL(new $ac_O([x, self.gb, self.eV, self.eZ, self.f0, self.f1, self.f2, self.f3, self.f4, self.f5, self.eL, self.eM, self.eN, self.eO, self.eP, self.eQ, self.eR, self.eS, self.eT, self.eU, self.eW, self.eX, self.eY]));
  }
  throw new $c_s_MatchError(self);
}
function $p_sr_Tuples$__xxlCons__O__sr_TupleXXL__sr_TupleXXL($thiz, x, xxl) {
  var arr = new $ac_O(((1 + xxl.z()) | 0));
  arr.a[0] = x;
  var src = xxl.ag;
  var length = xxl.z();
  src.aP(0, arr, 1, length);
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
      var $x_1 = new $c_T1(self.af);
      break matchResult34$1;
    }
    if ((self instanceof $c_T3)) {
      var $x_1 = new $c_T2(self.aQ, self.aZ);
      break matchResult34$1;
    }
    if ((self instanceof $c_T4)) {
      var $x_1 = new $c_T3(self.bd, self.be, self.bf);
      break matchResult34$1;
    }
    if ((self instanceof $c_T5)) {
      var $x_1 = new $c_T4(self.bA, self.bB, self.bC, self.bD);
      break matchResult34$1;
    }
    if ((self instanceof $c_T6)) {
      var $x_1 = new $c_T5(self.f7, self.f8, self.f9, self.fa, self.fb);
      break matchResult34$1;
    }
    if ((self instanceof $c_T7)) {
      var $x_1 = new $c_T6(self.fc, self.fd, self.fe, self.ff, self.fg, self.fh);
      break matchResult34$1;
    }
    if ((self instanceof $c_T8)) {
      var $x_1 = new $c_T7(self.fi, self.fj, self.fk, self.fl, self.fm, self.fn, self.fo);
      break matchResult34$1;
    }
    if ((self instanceof $c_T9)) {
      var $x_1 = new $c_T8(self.fp, self.fq, self.fr, self.fs, self.ft, self.fu, self.fv, self.fw);
      break matchResult34$1;
    }
    if ((self instanceof $c_T10)) {
      var $x_1 = new $c_T9(self.bX, self.bY, self.bZ, self.c0, self.c1, self.c2, self.c3, self.c4, self.bW);
      break matchResult34$1;
    }
    if ((self instanceof $c_T11)) {
      var $x_1 = new $c_T10(self.c7, self.c8, self.c9, self.ca, self.cb, self.cc, self.cd, self.ce, self.c5, self.c6);
      break matchResult34$1;
    }
    if ((self instanceof $c_T12)) {
      var $x_1 = new $c_T11(self.ci, self.cj, self.ck, self.cl, self.cm, self.cn, self.co, self.cp, self.cf, self.cg, self.ch);
      break matchResult34$1;
    }
    if ((self instanceof $c_T13)) {
      var $x_1 = new $c_T12(self.cu, self.cv, self.cw, self.cx, self.cy, self.cz, self.cA, self.cB, self.cq, self.cr, self.cs, self.ct);
      break matchResult34$1;
    }
    if ((self instanceof $c_T14)) {
      var $x_1 = new $c_T13(self.cH, self.cI, self.cJ, self.cK, self.cL, self.cM, self.cN, self.cO, self.cC, self.cD, self.cE, self.cF, self.cG);
      break matchResult34$1;
    }
    if ((self instanceof $c_T15)) {
      var $x_1 = new $c_T14(self.cV, self.cW, self.cX, self.cY, self.cZ, self.d0, self.d1, self.d2, self.cP, self.cQ, self.cR, self.cS, self.cT, self.cU);
      break matchResult34$1;
    }
    if ((self instanceof $c_T16)) {
      var $x_1 = new $c_T15(self.da, self.db, self.dc, self.dd, self.de, self.df, self.dg, self.dh, self.d3, self.d4, self.d5, self.d6, self.d7, self.d8, self.d9);
      break matchResult34$1;
    }
    if ((self instanceof $c_T17)) {
      var $x_1 = new $c_T16(self.dr, self.ds, self.dt, self.du, self.dv, self.dw, self.dx, self.dy, self.di, self.dj, self.dk, self.dl, self.dm, self.dn, self.dp, self.dq);
      break matchResult34$1;
    }
    if ((self instanceof $c_T18)) {
      var $x_1 = new $c_T17(self.dI, self.dJ, self.dK, self.dL, self.dM, self.dN, self.dO, self.dP, self.dz, self.dA, self.dB, self.dC, self.dD, self.dE, self.dF, self.dG, self.dH);
      break matchResult34$1;
    }
    if ((self instanceof $c_T19)) {
      var $x_1 = new $c_T18(self.e0, self.e1, self.e2, self.e3, self.e4, self.e5, self.e6, self.e7, self.dQ, self.dR, self.dS, self.dT, self.dU, self.dV, self.dW, self.dX, self.dY, self.dZ);
      break matchResult34$1;
    }
    if ((self instanceof $c_T20)) {
      var $x_1 = new $c_T19(self.ei, self.ek, self.el, self.em, self.en, self.eo, self.ep, self.eq, self.e8, self.e9, self.ea, self.eb, self.ec, self.ed, self.ee, self.ef, self.eg, self.eh, self.ej);
      break matchResult34$1;
    }
    if ((self instanceof $c_T21)) {
      var $x_1 = new $c_T20(self.eB, self.eE, self.eF, self.eG, self.eH, self.eI, self.eJ, self.eK, self.er, self.es, self.et, self.eu, self.ev, self.ew, self.ex, self.ey, self.ez, self.eA, self.eC, self.eD);
      break matchResult34$1;
    }
    if ((self instanceof $c_T22)) {
      var $x_1 = new $c_T21(self.eV, self.eZ, self.f0, self.f1, self.f2, self.f3, self.f4, self.f5, self.eL, self.eM, self.eN, self.eO, self.eP, self.eQ, self.eR, self.eS, self.eT, self.eU, self.eW, self.eX, self.eY);
      break matchResult34$1;
    }
    throw new $c_s_MatchError(self);
  }
  return $x_1;
}
function $p_sr_Tuples$__xxlTail__sr_TupleXXL__s_Product($thiz, xxl) {
  if ((xxl.z() === 23)) {
    var elems = xxl.ag;
    return new $c_T22(elems.a[1], elems.a[2], elems.a[3], elems.a[4], elems.a[5], elems.a[6], elems.a[7], elems.a[8], elems.a[9], elems.a[10], elems.a[11], elems.a[12], elems.a[13], elems.a[14], elems.a[15], elems.a[16], elems.a[17], elems.a[18], elems.a[19], elems.a[20], elems.a[21], elems.a[22]);
  } else {
    var arr$1 = new $ac_O(((xxl.ag.a.length - 1) | 0));
    var src = xxl.ag;
    var length = ((xxl.ag.a.length - 1) | 0);
    src.aP(1, arr$1, 0, length);
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
$p.pR = (function(xs) {
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
      return new $c_sr_TupleXXL(xs.b9());
    }
  }
});
$p.pS = (function(xs) {
  return ((xs.a.length <= 22) ? this.pR(xs) : new $c_sr_TupleXXL(xs));
});
$p.nY = (function(x, self) {
  return ((self instanceof $c_sr_TupleXXL) ? $p_sr_Tuples$__xxlCons__O__sr_TupleXXL__sr_TupleXXL(this, x, self) : $p_sr_Tuples$__specialCaseCons__O__s_Product__s_Product(this, x, self));
});
$p.pr = (function(self, that) {
  var selfSize = $m_sr_Tuples$().oF(self);
  if ((selfSize === 0)) {
    return that;
  }
  var thatSize = $m_sr_Tuples$().oF(that);
  if ((thatSize === 0)) {
    return self;
  }
  var arr = new $ac_O(((selfSize + thatSize) | 0));
  if ((self instanceof $c_sr_TupleXXL)) {
    var src = self.ag;
    src.aP(0, arr, 0, selfSize);
  } else {
    self.J().nZ(arr, 0, selfSize);
  }
  if ((that instanceof $c_sr_TupleXXL)) {
    var src$1 = that.ag;
    src$1.aP(0, arr, selfSize, thatSize);
  } else {
    that.J().nZ(arr, selfSize, thatSize);
  }
  return this.pS(arr);
});
$p.oF = (function(self) {
  if (($m_T$package$EmptyTuple$() === self)) {
    return 0;
  }
  if ((self !== null)) {
    return self.z();
  }
  throw new $c_s_MatchError(self);
});
$p.rK = (function(self) {
  return ((self instanceof $c_sr_TupleXXL) ? $p_sr_Tuples$__xxlTail__sr_TupleXXL__s_Product(this, self) : $p_sr_Tuples$__specialCaseTail__s_Product__s_Product(this, self));
});
var $d_sr_Tuples$ = new $TypeData().i($c_sr_Tuples$, "scala.runtime.Tuples$", ({
  d1: 1
}));
var $n_sr_Tuples$;
function $m_sr_Tuples$() {
  if ((!$n_sr_Tuples$)) {
    $n_sr_Tuples$ = new $c_sr_Tuples$();
  }
  return $n_sr_Tuples$;
}
var $d_sjs_js_Any = new $TypeData().i(2, "scala.scalajs.js.Any", ({
  d2: 1
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
$p.q0 = (function(this$, o, p) {
  return (!(!(p in o)));
});
var $d_sjs_js_Any$ObjectCompanionOps$ = new $TypeData().i($c_sjs_js_Any$ObjectCompanionOps$, "scala.scalajs.js.Any$ObjectCompanionOps$", ({
  d4: 1
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
$p.ob = (function(this$, elem, from) {
  var len = (this$.length | 0);
  var i = from;
  while ((i < len)) {
    if ($m_sr_BoxesRunTime$().c(elem, this$[i])) {
      return i;
    }
    i = ((1 + i) | 0);
  }
  return (-1);
});
$p.qJ = (function(this$, f) {
  var len = (this$.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    res[i] = f.h(this$[i]);
    i = ((1 + i) | 0);
  }
  return res;
});
$p.oL = (function(this$, that) {
  var b = [];
  var len = (this$.length | 0);
  var i = 0;
  var it = that.ad();
  while (((i < len) && it.V())) {
    b.push(new $c_T2(this$[i], it.R()));
    i = ((1 + i) | 0);
  }
  return b;
});
$p.oM = (function(this$) {
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
    f.h(this$[i]);
    i = ((1 + i) | 0);
  }
});
var $d_sjs_js_ArrayOps$ = new $TypeData().i($c_sjs_js_ArrayOps$, "scala.scalajs.js.ArrayOps$", ({
  d5: 1
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
  d6: 1
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
  this.la = null;
  $n_sjs_js_WrappedDictionary$Cache$ = this;
  this.la = Object.prototype.hasOwnProperty;
}
$p = $c_sjs_js_WrappedDictionary$Cache$.prototype = new $h_O();
$p.constructor = $c_sjs_js_WrappedDictionary$Cache$;
/** @constructor */
function $h_sjs_js_WrappedDictionary$Cache$() {
}
$h_sjs_js_WrappedDictionary$Cache$.prototype = $p;
var $d_sjs_js_WrappedDictionary$Cache$ = new $TypeData().i($c_sjs_js_WrappedDictionary$Cache$, "scala.scalajs.js.WrappedDictionary$Cache$", ({
  da: 1
}));
var $n_sjs_js_WrappedDictionary$Cache$;
function $m_sjs_js_WrappedDictionary$Cache$() {
  if ((!$n_sjs_js_WrappedDictionary$Cache$)) {
    $n_sjs_js_WrappedDictionary$Cache$ = new $c_sjs_js_WrappedDictionary$Cache$();
  }
  return $n_sjs_js_WrappedDictionary$Cache$;
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
$p.g = (function(properties) {
  var result = ({});
  properties.fR(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((pair$2$2) => {
    result[pair$2$2.T] = pair$2$2.af;
  })));
  return result;
});
var $d_sjs_js_special_package$ = new $TypeData().i($c_sjs_js_special_package$, "scala.scalajs.js.special.package$", ({
  db: 1
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
$p.av = (function(seq) {
  if ((seq instanceof $c_sjsr_WrappedVarArgs)) {
    return seq.ib;
  } else {
    var result = [];
    seq.fR(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2$2) => (result.push(x$2$2) | 0))));
    return result;
  }
});
var $d_sjsr_Compat$ = new $TypeData().i($c_sjsr_Compat$, "scala.scalajs.runtime.Compat$", ({
  dc: 1
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
$p.e = (function(array) {
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
  dd: 1
}));
var $n_sjsr_package$;
function $m_sjsr_package$() {
  if ((!$n_sjsr_package$)) {
    $n_sjsr_package$ = new $c_sjsr_package$();
  }
  return $n_sjsr_package$;
}
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
  var h = this.iT(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.iT = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.ab = (function(hash, length) {
  return this.i5((hash ^ length));
});
$p.i5 = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.W = (function(x, seed, ignorePrefix) {
  var arr = x.z();
  if ((arr === 0)) {
    return ((!ignorePrefix) ? $f_T__hashCode__I(x.H()) : seed);
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.l(h, $f_T__hashCode__I(x.H()));
    }
    var i = 0;
    while ((i < arr)) {
      h = this.l(h, $m_sr_Statics$().L(x.o(i)));
      i = ((1 + i) | 0);
    }
    return this.ab(h, arr);
  }
});
$p.pn = (function(x, seed, caseClassName) {
  var arr = x.z();
  var aye = $f_T__hashCode__I(((caseClassName !== null) ? caseClassName : x.H()));
  if ((arr === 0)) {
    return aye;
  } else {
    var h = seed;
    h = this.l(h, aye);
    var i = 0;
    while ((i < arr)) {
      h = this.l(h, $m_sr_Statics$().L(x.o(i)));
      i = ((1 + i) | 0);
    }
    return this.ab(h, arr);
  }
});
$p.rU = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.ad();
  while (iterator.V()) {
    var x = iterator.R();
    var h = $m_sr_Statics$().L(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.l(h$2, a);
  h$2 = this.l(h$2, b);
  h$2 = this.iT(h$2, c);
  return this.ab(h$2, n);
});
$p.qX = (function(xs, seed) {
  var it = xs.ad();
  var h = seed;
  if ((!it.V())) {
    return this.ab(h, 0);
  }
  var x0 = it.R();
  if ((!it.V())) {
    return this.ab(this.l(h, $m_sr_Statics$().L(x0)), 1);
  }
  var x1 = it.R();
  var initial = $m_sr_Statics$().L(x0);
  h = this.l(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().L(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.V()) {
    h = this.l(h, prev);
    var hash = $m_sr_Statics$().L(it.R());
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.l(h, hash);
      i = ((1 + i) | 0);
      while (it.V()) {
        h = this.l(h, $m_sr_Statics$().L(it.R()));
        i = ((1 + i) | 0);
      }
      return this.ab(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.i5(this.l(this.l(h0, rangeDiff), prev));
});
$p.nT = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().hK(a);
  switch (l) {
    case 0: {
      return this.ab(h, 0);
      break;
    }
    case 1: {
      return this.ab(this.l(h, $m_sr_Statics$().L($m_sr_ScalaRunTime$().gN(a, 0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().L($m_sr_ScalaRunTime$().gN(a, 0));
      h = this.l(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().L($m_sr_ScalaRunTime$().gN(a, 1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.l(h, prev);
        var hash = $m_sr_Statics$().L($m_sr_ScalaRunTime$().gN(a, i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.l(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.l(h, $m_sr_Statics$().L($m_sr_ScalaRunTime$().gN(a, i)));
            i = ((1 + i) | 0);
          }
          return this.ab(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.i5(this.l(this.l(h0, rangeDiff), prev));
    }
  }
});
$p.oA = (function(start, step, last, seed) {
  return this.i5(this.l(this.l(this.l(seed, start), step), last));
});
$p.q3 = (function(a, seed) {
  var h = seed;
  var l = a.M();
  switch (l) {
    case 0: {
      return this.ab(h, 0);
      break;
    }
    case 1: {
      return this.ab(this.l(h, $m_sr_Statics$().L(a.a6(0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().L(a.a6(0));
      h = this.l(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().L(a.a6(1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.l(h, prev);
        var hash = $m_sr_Statics$().L(a.a6(i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.l(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.l(h, $m_sr_Statics$().L(a.a6(i)));
            i = ((1 + i) | 0);
          }
          return this.ab(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.i5(this.l(this.l(h0, rangeDiff), prev));
    }
  }
});
$p.qb = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.ac())) {
    elems.iP();
  }
  return ((rangeState === 2) ? this.oA(initial, rangeDiff, prev, seed) : this.ab(h, n));
});
function $p_Lsketches_templates_openspace_OpenSpace$package$__isHangingFace$1__Lsketchlib_utils_room_Wall__Z($thiz, w) {
  return ((w.aT > (2.0 * $m_Lsketches_templates_openspace_OpenSpace$package$().je)) && (w.b5.D > 0.5));
}
function $p_Lsketches_templates_openspace_OpenSpace$package$__form$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form($thiz, p$5, faces) {
  var mesh$proxy1 = $m_Ltrivalibs_graphics_geometry_Mesh$().nP(faces, null, 0, new $c_Ltrivalibs_graphics_geometry_package$package$$anon$1(0));
  var vl = new $c_Ltrivalibs_graphics_geometry_VertexLayout$named(new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$(), new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$(), $m_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$())));
  var f = ((v$3, n$3, ref$3) => {
    var nVal = new $c_T3(n$3.F, n$3.G, n$3.D);
    var values$proxy1 = $m_sr_Tuples$().pr(vl.jt.fV(v$3), $m_sr_Tuples$().nY(nVal, $m_T$package$EmptyTuple$()));
    var baseOffset$proxy1 = (ref$3.off | 0);
    var nestedValues = values$proxy1.o(0);
    var value = nestedValues.o(0);
    ref$3.dv.setFloat32(baseOffset$proxy1, Math.fround(value), true);
    var tailOffset = ((4 + baseOffset$proxy1) | 0);
    var value$2 = nestedValues.o(1);
    ref$3.dv.setFloat32(tailOffset, Math.fround(value$2), true);
    var tailOffset$2 = ((4 + tailOffset) | 0);
    var value$3 = nestedValues.o(2);
    ref$3.dv.setFloat32(tailOffset$2, Math.fround(value$3), true);
    var tailOffset$4 = ((12 + baseOffset$proxy1) | 0);
    var nestedValues$2 = values$proxy1.o(1);
    var value$4 = nestedValues$2.o(0);
    ref$3.dv.setFloat32(tailOffset$4, Math.fround(value$4), true);
    var tailOffset$5 = ((4 + tailOffset$4) | 0);
    var value$5 = nestedValues$2.o(1);
    ref$3.dv.setFloat32(tailOffset$5, Math.fround(value$5), true);
    var tailOffset$7 = ((8 + tailOffset$4) | 0);
    var nestedValues$3 = values$proxy1.o(2);
    var value$6 = nestedValues$3.o(0);
    ref$3.dv.setFloat32(tailOffset$7, Math.fround(value$6), true);
    var tailOffset$8 = ((4 + tailOffset$7) | 0);
    var value$7 = nestedValues$3.o(1);
    ref$3.dv.setFloat32(tailOffset$8, Math.fround(value$7), true);
    var tailOffset$9 = ((4 + tailOffset$8) | 0);
    var value$8 = nestedValues$3.o(2);
    ref$3.dv.setFloat32(tailOffset$9, Math.fround(value$8), true);
  });
  var \u03b4proxy2 = $m_Ltrivalibs_graphics_geometry_buffers$package$();
  mesh$proxy1.pE();
  var vertexCount = 0;
  var hasQuads = false;
  var fi = 0;
  while ((fi < (mesh$proxy1.a8.length | 0))) {
    var n = (mesh$proxy1.a8[fi].length | 0);
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
    while ((fi < (mesh$proxy1.a8.length | 0))) {
      var arr = mesh$proxy1.a8[fi];
      var opt$proxy1 = mesh$proxy1.gu[fi].he;
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
    while ((fi < (mesh$proxy1.a8.length | 0))) {
      var arr$2 = mesh$proxy1.a8[fi];
      var n$2 = (arr$2.length | 0);
      var opt$proxy2 = mesh$proxy1.gu[fi].he;
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
    var $x_1 = new $c_Ltrivalibs_graphics_geometry_BufferedGeometry(verts, \u03b4proxy2.ot(idxBuf, vertexCount));
  }
  return p$5.o6($x_1, (void 0), (void 0), (void 0), (void 0), (void 0));
}
function $p_Lsketches_templates_openspace_OpenSpace$package$__texSize$1__D__D__T2($thiz, w, h) {
  return new $c_T2($doubleToInt((w * $m_Lsketches_templates_openspace_OpenSpace$package$().j6)), $doubleToInt((h * $m_Lsketches_templates_openspace_OpenSpace$package$().j6)));
}
function $p_Lsketches_templates_openspace_OpenSpace$package$__fadeToEnv$1__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr($thiz, color, wp, eye) {
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().qN(color, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().kD($m_Lsketches_templates_openspace_OpenSpace$package$().gk), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().fT($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().iQ($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().kA(wp, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), eye)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h($m_Lsketches_templates_openspace_OpenSpace$package$().le), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h($m_Lsketches_templates_openspace_OpenSpace$package$().j9)));
}
function $p_Lsketches_templates_openspace_OpenSpace$package$__wallTex$1__Lsketchlib_utils_room_Hanging__Lsketchlib_utils_bake_TextureBaker__Ltrivalibs_graphics_painter_Form__Lsketchlib_utils_room_Wall__sjs_js_Array__Ltrivalibs_graphics_painter_Panel($thiz, hanging$1, wallBaker$1, wallForm, wall, pieces) {
  matchResult5: {
    var \u03b42$;
    var x13 = $p_Lsketches_templates_openspace_OpenSpace$package$__texSize$1__D__D__T2($thiz, wall.aT, wall.b4);
    if ((x13 !== null)) {
      var \u03b42$ = x13;
      break matchResult5;
    }
    throw new $c_s_MatchError(x13);
  }
  var w$2 = (\u03b42$.T | 0);
  var h$2 = (\u03b42$.af | 0);
  return hanging$1.pp($m_Lsketchlib_utils_bake_Bake$package$().nQ(wallBaker$1, wallForm, w$2, h$2, (void 0), (void 0), true, (void 0)), w$2, h$2, pieces);
}
function $p_Lsketches_templates_openspace_OpenSpace$package$__flatPanel$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_painter_Panel($thiz, p$6, flatShade$1, c) {
  var Bindable_this = p$6.bm(flatShade$1, (void 0), (void 0), (void 0));
  var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("color", c);
  var \u03b4scrutinee444 = e1$proxy1.s;
  var idx = (Bindable_this.x.E.color | 0);
  var existing = ((idx < (Bindable_this.i.length | 0)) ? Bindable_this.i[idx] : null);
  var device$proxy1 = Bindable_this.bO.f;
  if ((existing !== null)) {
    existing.C.y(existing.j, \u03b4scrutinee444);
    var $x_3 = existing.B.queue;
    var $x_2 = existing.A;
    var s$proxy2 = existing.j;
    var $x_1 = s$proxy2.dv.buffer;
    $x_3.writeBuffer($x_2, 0.0, $x_1);
    var bb = existing;
  } else {
    var uv = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$();
    var buffer = new ArrayBuffer(16);
    var arr$proxy8 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
    var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy8.dv, 0), device$proxy1, uv);
    b.C.y(b.j, \u03b4scrutinee444);
    var $x_6 = b.B.queue;
    var $x_5 = b.A;
    var s$proxy3 = b.j;
    var $x_4 = s$proxy3.dv.buffer;
    $x_6.writeBuffer($x_5, 0.0, $x_4);
    var bb = b;
  }
  while (((Bindable_this.i.length | 0) <= idx)) {
    Bindable_this.i.push(null);
  }
  Bindable_this.i[idx] = bb;
  Bindable_this.N = null;
  var panel = p$6.by(8, 8, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), Bindable_this, (void 0));
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$6, panel);
  return panel;
}
function $p_Lsketches_templates_openspace_OpenSpace$package$__curate$1__Lsketchlib_utils_room_Hanging__sjs_js_Array__Lsketchlib_utils_room_Wall__sjs_js_Array($thiz, hanging$3, pieceImages$2, wall) {
  var out = [];
  if ($p_Lsketches_templates_openspace_OpenSpace$package$__isHangingFace$1__Lsketchlib_utils_room_Wall__Z($thiz, wall)) {
    var end = ($m_Lsketches_templates_openspace_OpenSpace$package$().ic.length | 0);
    var isEmpty = (end <= 0);
    var scala$collection$immutable$Range$$lastElement = ((end - 1) | 0);
    if ((!isEmpty)) {
      var i = 0;
      while (true) {
        var x0 = i;
        var pc = $m_Lsketches_templates_openspace_OpenSpace$package$().ic[x0];
        (out.push(hanging$3.pZ(wall, new $c_Lsketchlib_utils_room_PaintingSpec((+pc.bA), (+pc.bB), $m_Lsketches_templates_openspace_OpenSpace$package$().lo, pieceImages$2[x0], 3.0), (+pc.f6), $m_Lsketches_templates_openspace_OpenSpace$package$().ln, (+pc.bD))) | 0);
        if ((i === scala$collection$immutable$Range$$lastElement)) {
          break;
        }
        i = ((1 + i) | 0);
      }
    }
  }
  return out;
}
/** @constructor */
function $c_Lsketches_templates_openspace_OpenSpace$package$() {
  this.j8 = 0.0;
  this.lu = 0.0;
  this.h2 = 0.0;
  this.le = 0.0;
  this.j9 = 0.0;
  this.gk = null;
  this.lf = 0.0;
  this.lv = 0.0;
  this.je = 0.0;
  this.h3 = 0.0;
  this.fC = 0.0;
  this.lk = 0.0;
  this.j6 = 0.0;
  this.jf = null;
  this.jb = null;
  this.j7 = null;
  this.jd = null;
  this.lm = 0.0;
  this.lc = 0.0;
  this.jc = 0.0;
  this.ja = null;
  this.lj = 0.0;
  this.lh = 0.0;
  this.lg = 0.0;
  this.li = 0.0;
  this.ll = null;
  this.lw = null;
  this.lp = 0.0;
  this.ls = 0.0;
  this.lt = 0.0;
  this.lr = 0.0;
  this.lq = 0.0;
  this.ld = 0.0;
  this.ic = null;
  this.ln = 0.0;
  this.lo = 0.0;
  $n_Lsketches_templates_openspace_OpenSpace$package$ = this;
  this.j8 = 1.7;
  this.lu = 0.5;
  this.h2 = 200.0;
  this.le = 25.0;
  this.j9 = 150.0;
  this.gk = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.05, 1.04, 1.14);
  this.lf = (1.3 * $m_Lsketches_templates_openspace_OpenSpace$package$().j9);
  this.lv = 12.0;
  this.je = 0.4;
  this.h3 = 4.5;
  this.fC = 32.0;
  this.lk = 48.0;
  this.j6 = 64.0;
  this.jf = $m_Lsketches_templates_openspace_OpenSpace$package$().iY(0.1);
  this.jb = $m_Lsketches_templates_openspace_OpenSpace$package$().iY(0.15);
  this.j7 = $m_Lsketches_templates_openspace_OpenSpace$package$().iY(0.9);
  this.jd = $m_Lsketches_templates_openspace_OpenSpace$package$().iY(2.07);
  this.lm = 1.7;
  this.lc = 0.8;
  this.jc = 0.3;
  this.ja = new $c_T4(0.08, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.03), 0.08, 0.03);
  this.lj = 0.06;
  this.lh = 0.85;
  this.lg = 0.02;
  this.li = 0.3;
  this.ll = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.82, 0.81, 0.79);
  this.lw = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.92, 0.92, 0.91);
  this.lp = 0.3;
  this.ls = 0.1;
  this.lt = 0.4;
  this.lr = 0.25;
  this.lq = 2.7;
  this.ld = 0.004;
  this.ic = [new $c_T5(2.6, 1.15, 1.45, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.05, 0.05, 0.06), 1.0), new $c_T5(6.0, 1.6, 1.05, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.93, 0.35, 0.2), 0.65), new $c_T5(9.4, 0.95, 1.35, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.9, 0.9, 0.88), 0.4)];
  this.ln = 1.55;
  this.lo = 0.06;
}
$p = $c_Lsketches_templates_openspace_OpenSpace$package$.prototype = new $h_O();
$p.constructor = $c_Lsketches_templates_openspace_OpenSpace$package$;
/** @constructor */
function $h_Lsketches_templates_openspace_OpenSpace$package$() {
}
$h_Lsketches_templates_openspace_OpenSpace$package$.prototype = $p;
$p.iY = (function(wanted) {
  var p$proxy1 = ($m_Lsketches_templates_openspace_OpenSpace$package$().fC * wanted);
  var $x_1 = $m_RTLong$().ks((+Math.round(p$proxy1)));
  var x_$_lo = $x_1.l;
  var x_$_hi = $x_1.h;
  var p$proxy2 = $doubleToInt(((4.294967296E9 * x_$_hi) + (x_$_lo >>> 0.0)));
  var period = ((p$proxy2 > 1) ? p$proxy2 : 1);
  return new $c_T2((period / $m_Lsketches_templates_openspace_OpenSpace$package$().fC), period);
});
$p.j1 = (function(period) {
  return $m_Ltrivalibs_graphics_math_gpu_vec3$().aF($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(period), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(period));
});
$p.oJ = (function(wp) {
  return $m_Ltrivalibs_graphics_math_gpu_vec3$().aF($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aN($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().aA(wp), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().O($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().ae(wp), 0.2)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().O($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().ae(wp), 0.3), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aN($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().gW(wp), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().O($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().ae(wp), 0.25)));
});
$p.oK = (function(wp) {
  return $m_Ltrivalibs_graphics_shader_lib_noise_Extended$().iN($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().hG($m_Lsketches_templates_openspace_OpenSpace$package$().oJ(wp), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), (+$m_Lsketches_templates_openspace_OpenSpace$package$().jf.T)), ($m_Ltrivalibs_graphics_math_gpu_expr$package$(), $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "4")), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().aO(2.0), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().aO(0.28), $m_Lsketches_templates_openspace_OpenSpace$package$().j1(($m_Lsketches_templates_openspace_OpenSpace$package$().jf.af | 0)), null, $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().aO(120.0));
});
$p.ow = (function(wp, normal) {
  return $m_Ltrivalibs_graphics_shader_lib_noise_Extended$().iN($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().kk($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().hG($m_Lsketches_templates_openspace_OpenSpace$package$().oJ(wp), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), (+$m_Lsketches_templates_openspace_OpenSpace$package$().jb.T)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().hG(normal, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Lsketches_templates_openspace_OpenSpace$package$().lm)), ($m_Ltrivalibs_graphics_math_gpu_expr$package$(), $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "3")), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().aO(2.0), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().aO(0.3), $m_Lsketches_templates_openspace_OpenSpace$package$().j1(($m_Lsketches_templates_openspace_OpenSpace$package$().jb.af | 0)), null, $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().aO(70.0));
});
$p.kl = (function(world, orient, edge) {
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().iS($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h($m_Lsketches_templates_openspace_OpenSpace$package$().lc), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().kr($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ki($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aN(world, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bu($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().O(orient, $m_Lsketches_templates_openspace_OpenSpace$package$().jc), edge)), (1.0 + $m_Lsketches_templates_openspace_OpenSpace$package$().jc))));
});
$p.o0 = (function(xz) {
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().kr($m_Ltrivalibs_graphics_shader_lib_noise_Extended$().iN($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().hG($m_Ltrivalibs_graphics_math_gpu_vec3$().aF($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().aA(xz), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().ae(xz)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), (+$m_Lsketches_templates_openspace_OpenSpace$package$().j7.T)), ($m_Ltrivalibs_graphics_math_gpu_expr$package$(), $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "3")), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().aO(2.0), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().aO(0.5), $m_Lsketches_templates_openspace_OpenSpace$package$().j1(($m_Lsketches_templates_openspace_OpenSpace$package$().j7.af | 0)), null, $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().aO(41.0)));
});
$p.ox = (function(xz) {
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().kr($m_Ltrivalibs_graphics_shader_lib_noise_Extended$().iN($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().hG($m_Ltrivalibs_graphics_math_gpu_vec3$().aF($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().aA(xz), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().ae(xz)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), (+$m_Lsketches_templates_openspace_OpenSpace$package$().jd.T)), ($m_Ltrivalibs_graphics_math_gpu_expr$package$(), $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "3")), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().aO(2.0), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().aO(0.5), $m_Lsketches_templates_openspace_OpenSpace$package$().j1(($m_Lsketches_templates_openspace_OpenSpace$package$().jd.af | 0)), null, $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().aO(9.0)));
});
$p.oa = (function(dist, creep, patch) {
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().iS($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().iS($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h($m_Lsketches_templates_openspace_OpenSpace$package$().lh), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().O(patch, $m_Lsketches_templates_openspace_OpenSpace$package$().li)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().fT($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aN(dist, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().O($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().pO(creep), $m_Lsketches_templates_openspace_OpenSpace$package$().lg)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h($m_Lsketches_templates_openspace_OpenSpace$package$().lj)));
});
$p.qW = (function(canvas) {
  $m_Ltrivalibs_graphics_painter_Painter$().q4(canvas, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((p$5) => {
    var sampler = p$5.i4();
    var tileSampler = p$5.oD("linear", "linear", "linear", "repeat", (void 0), (void 0));
    var pos$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, $m_Lsketches_templates_openspace_OpenSpace$package$().j8, 9.0);
    var cam = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().p2(0.85, 1.0, 0.1, $m_Lsketches_templates_openspace_OpenSpace$package$().lf, 0.0, 0.0, pos$1);
    $m_Ltrivalibs_dev_devPreserve$().p9(cam, "camera");
    var wallRing = $m_Lsketchlib_utils_room_Ring$().rf(new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 0.0), new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 0.0), $m_Lsketches_templates_openspace_OpenSpace$package$().lv, $m_Lsketches_templates_openspace_OpenSpace$package$().je, (-1.0), $m_Lsketches_templates_openspace_OpenSpace$package$().h3);
    var wallBnd = $m_Lsketchlib_utils_room_Boundary$().p6(wallRing);
    var walls = $m_Lsketchlib_utils_room_Walls$package$().s0(wallBnd, $m_Lsketches_templates_openspace_OpenSpace$package$().h3);
    var x$proxy36 = new $c_T4((-$m_Lsketches_templates_openspace_OpenSpace$package$().h2), (-$m_Lsketches_templates_openspace_OpenSpace$package$().h2), $m_Lsketches_templates_openspace_OpenSpace$package$().h2, $m_Lsketches_templates_openspace_OpenSpace$package$().h2);
    var groundForm = $p_Lsketches_templates_openspace_OpenSpace$package$__form$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$5, [$m_Lsketchlib_utils_room_Surfaces$package$().oy(x$proxy36, 0.0, false, 0.0)]);
    var x$proxy37 = new $c_T4(0.0, 0.0, $m_Lsketches_templates_openspace_OpenSpace$package$().fC, $m_Lsketches_templates_openspace_OpenSpace$package$().fC);
    var tileForm = $p_Lsketches_templates_openspace_OpenSpace$package$__form$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$5, [$m_Lsketchlib_utils_room_Surfaces$package$().oy(x$proxy37, 0.0, false, 0.0)]);
    var tilePx = $doubleToInt(($m_Lsketches_templates_openspace_OpenSpace$package$().fC * $m_Lsketches_templates_openspace_OpenSpace$package$().lk));
    $m_Lsketchlib_utils_bake_TextureBaker$();
    var transform$proxy1 = (void 0);
    $m_Lsketchlib_utils_bake_TextureBaker$();
    var format$proxy1 = (void 0);
    $m_Lsketchlib_utils_bake_TextureBaker$();
    var mips$proxy1 = true;
    $m_Lsketchlib_utils_bake_TextureBaker$();
    var clearColor$proxy1 = (void 0);
    var frag$proxy1 = new $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(((wp$2, normal$2, _$1$2, out$2) => {
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var w = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("w");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var o = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("o");
      var $x_4 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
      var $x_3 = $m_sjsr_package$();
      var $x_2 = w.a2($m_Lsketches_templates_openspace_OpenSpace$package$().oK(wp$2));
      var $x_1 = o.a2($m_Lsketches_templates_openspace_OpenSpace$package$().ow(wp$2, normal$2));
      var value$proxy1 = $m_Ltrivalibs_graphics_math_gpu_vec4$().nR($m_Lsketches_templates_openspace_OpenSpace$package$().kl(w, o, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0)), $m_Lsketches_templates_openspace_OpenSpace$package$().kl(w, o, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.0)), $m_Lsketches_templates_openspace_OpenSpace$package$().o0($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fW(wp$2)), $m_Lsketches_templates_openspace_OpenSpace$package$().ox($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fW(wp$2)));
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return $x_4.bS(new $c_sjsr_WrappedVarArgs($x_3.e(new ($d_T.r().C)([$x_2, $x_1, (((("  " + out$2.S) + " = ") + value$proxy1.d) + ";")]))));
    }));
    var $x_6 = $m_Lsketchlib_utils_bake_Bake$package$();
    var build$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3) => {
      $p_Lsketchlib_utils_bake_TextureBaker$__buildVert__Ltrivalibs_graphics_shader_dsl_Program__V($m_Lsketchlib_utils_bake_TextureBaker$(), program$3);
      var body$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2) => frag$proxy1.km(ctx$2.ah.k("worldPos"), ctx$2.ah.k("normal"), ctx$2.ah.k("uv"), ctx$2.at.X("color"))));
      var ctx = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = reg;
      try {
        var $x_5 = body$proxy1.h(ctx);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = prev;
      }
      program$3.b6 = $x_5;
      $m_sjs_js_ArrayOps$().Z(reg.a0, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$7) => ((data$3) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$7, data$3);
      }))(program$3)));
    }));
    var program = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy1.h(program);
    var b = program.bk;
    var b$1 = program.b6;
    var helperFns$proxy1 = program.au();
    var id = p$5.t;
    p$5.t = ((1 + p$5.t) | 0);
    var names = $m_sjs_js_ArrayOpsCommon$().b(["model"], []);
    var dict = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
    var i = 0;
    while ((i < (names.length | 0))) {
      dict[names[i]] = i;
      i = ((1 + i) | 0);
    }
    var names$2 = [];
    var dict$2 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
    var i$2 = 0;
    while ((i$2 < (names$2.length | 0))) {
      dict$2[names$2[i$2]] = i$2;
      i$2 = ((1 + i$2) | 0);
    }
    var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef(b, b$1, helperFns$proxy1);
    var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().b(["position"], $m_sjs_js_ArrayOpsCommon$().b(["uv"], $m_sjs_js_ArrayOpsCommon$().b(["normal"], []))), $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().b(["worldPos"], $m_sjs_js_ArrayOpsCommon$().b(["normal"], $m_sjs_js_ArrayOpsCommon$().b(["uv"], []))), $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().b(["color"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec4<f32>"], []), []);
    var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().b(["model"], []), $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).bQ.v()], []));
    var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.aa, sd.a9, fragBuiltinParams);
    var args$proxy1 = $m_sr_ScalaRunTime$().aw(new ($d_sjs_js_Any.r().C)([baseWgsl]));
    console.log(...$m_sjsr_Compat$().av(args$proxy1));
    var module = p$5.f.createShaderModule($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("code", baseWgsl)])))));
    var formats = $m_sjs_js_ArrayOpsCommon$().b(["float32x3"], $m_sjs_js_ArrayOpsCommon$().b(["float32x2"], $m_sjs_js_ArrayOpsCommon$().b(["float32x3"], [])));
    var sizes = $m_sjs_js_ArrayOpsCommon$().b([12], $m_sjs_js_ArrayOpsCommon$().b([8], $m_sjs_js_ArrayOpsCommon$().b([12], [])));
    var offsets = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes);
    var stride = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes);
    var attributes = [];
    var i$3 = 0;
    while ((i$3 < (formats.length | 0))) {
      attributes.push($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("shaderLocation", i$3), new $c_T2("offset", (offsets[i$3] | 0)), new $c_T2("format", formats[i$3])])))));
      i$3 = ((1 + i$3) | 0);
    }
    var vbl = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("arrayStride", stride), new $c_T2("attributes", attributes)]))));
    var descriptors = $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 1), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], [])], []);
    var result = [];
    $m_sjs_js_ArrayOps$().Z(descriptors, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$1) => ((entries$2) => (result.push(Painter_this$1.f.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("entries", entries$2)])))))) | 0)))(p$5)));
    var x1 = new $c_T2(result, $m_Ltrivalibs_graphics_shader_layouts$().Q(p$5.f, result));
    var \u03b42$ = x1;
    var bgls$2 = \u03b42$.T;
    var pl = $m_Ltrivalibs_graphics_shader_layouts$().Q(p$5.f, bgls$2);
    var groundTile = $x_6.nQ(new $c_Lsketchlib_utils_bake_TextureBaker(p$5, new $c_Ltrivalibs_graphics_painter_Shade(id, module, vbl, bgls$2[0], null, pl, false, dict, dict$2)), tileForm, tilePx, tilePx, transform$proxy1, format$proxy1, mips$proxy1, clearColor$proxy1);
    var frag$proxy2 = new $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(((wp$2$1, normal$2$1, _$2$2, out$2$1) => {
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var amb = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("amb");
      var $x_9 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
      var $x_8 = $m_sjsr_package$();
      var $x_7 = amb.a2($m_Lsketches_templates_openspace_OpenSpace$package$().kl($m_Lsketches_templates_openspace_OpenSpace$package$().oK(wp$2$1), $m_Lsketches_templates_openspace_OpenSpace$package$().ow(wp$2$1, normal$2$1), $m_Lsketchlib_utils_room_Fields$package$().pD(wp$2$1, normal$2$1, wallBnd, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h($m_Lsketches_templates_openspace_OpenSpace$package$().h3), $m_Lsketches_templates_openspace_OpenSpace$package$().ja)));
      var value$proxy3 = $m_Ltrivalibs_graphics_math_gpu_vec4$().ai($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().bx($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().bx($m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().kD($m_Lsketches_templates_openspace_OpenSpace$package$().lw), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), amb), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Lsketches_templates_openspace_OpenSpace$package$().oa($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().ae(wp$2$1), $m_Lsketches_templates_openspace_OpenSpace$package$().o0($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fW(wp$2$1)), $m_Lsketches_templates_openspace_OpenSpace$package$().ox($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fW(wp$2$1)))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0));
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return $x_9.bS(new $c_sjsr_WrappedVarArgs($x_8.e(new ($d_T.r().C)([$x_7, (((("  " + out$2$1.S) + " = ") + value$proxy3.d) + ";")]))));
    }));
    var build$proxy2 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$1) => {
      $p_Lsketchlib_utils_bake_TextureBaker$__buildVert__Ltrivalibs_graphics_shader_dsl_Program__V($m_Lsketchlib_utils_bake_TextureBaker$(), program$3$1);
      var body$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$1) => frag$proxy2.km(ctx$2$1.ah.k("worldPos"), ctx$2$1.ah.k("normal"), ctx$2$1.ah.k("uv"), ctx$2$1.at.X("color"))));
      var ctx$1 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = reg$1;
      try {
        var $x_10 = body$proxy3.h(ctx$1);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = prev$1;
      }
      program$3$1.b6 = $x_10;
      $m_sjs_js_ArrayOps$().Z(reg$1.a0, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$8) => ((data$3$1) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$8, data$3$1);
      }))(program$3$1)));
    }));
    var program$2 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy2.h(program$2);
    var b$2 = program$2.bk;
    var b$3 = program$2.b6;
    var helperFns$proxy2 = program$2.au();
    var id$2 = p$5.t;
    p$5.t = ((1 + p$5.t) | 0);
    var names$4 = $m_sjs_js_ArrayOpsCommon$().b(["model"], []);
    var dict$3 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
    var i$4 = 0;
    while ((i$4 < (names$4.length | 0))) {
      dict$3[names$4[i$4]] = i$4;
      i$4 = ((1 + i$4) | 0);
    }
    var names$5 = [];
    var dict$4 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
    var i$5 = 0;
    while ((i$5 < (names$5.length | 0))) {
      dict$4[names$5[i$5]] = i$5;
      i$5 = ((1 + i$5) | 0);
    }
    var sd$2 = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$2, b$3, helperFns$proxy2);
    var vertexInputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().b(["position"], $m_sjs_js_ArrayOpsCommon$().b(["uv"], $m_sjs_js_ArrayOpsCommon$().b(["normal"], []))), $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().b(["worldPos"], $m_sjs_js_ArrayOpsCommon$().b(["normal"], $m_sjs_js_ArrayOpsCommon$().b(["uv"], []))), $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().b(["color"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec4<f32>"], []), []);
    var groupDecls$2 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().b(["model"], []), $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).bQ.v()], []));
    var fragBuiltinParams$2 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$2 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$2, vertexInputStruct$2, vertexOutputStruct$2, fragmentOutputStruct$2, groupDecls$2, sd$2.aa, sd$2.a9, fragBuiltinParams$2);
    var args$proxy2 = $m_sr_ScalaRunTime$().aw(new ($d_sjs_js_Any.r().C)([baseWgsl$2]));
    console.log(...$m_sjsr_Compat$().av(args$proxy2));
    var module$2 = p$5.f.createShaderModule($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("code", baseWgsl$2)])))));
    var formats$2 = $m_sjs_js_ArrayOpsCommon$().b(["float32x3"], $m_sjs_js_ArrayOpsCommon$().b(["float32x2"], $m_sjs_js_ArrayOpsCommon$().b(["float32x3"], [])));
    var sizes$2 = $m_sjs_js_ArrayOpsCommon$().b([12], $m_sjs_js_ArrayOpsCommon$().b([8], $m_sjs_js_ArrayOpsCommon$().b([12], [])));
    var offsets$2 = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes$2);
    var stride$2 = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes$2);
    var attributes$2 = [];
    var i$6 = 0;
    while ((i$6 < (formats$2.length | 0))) {
      attributes$2.push($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("shaderLocation", i$6), new $c_T2("offset", (offsets$2[i$6] | 0)), new $c_T2("format", formats$2[i$6])])))));
      i$6 = ((1 + i$6) | 0);
    }
    var vbl$2 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("arrayStride", stride$2), new $c_T2("attributes", attributes$2)]))));
    var descriptors$2 = $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 1), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], [])], []);
    var result$2 = [];
    $m_sjs_js_ArrayOps$().Z(descriptors$2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$2) => ((entries$2$1) => (result$2.push(Painter_this$2.f.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("entries", entries$2$1)])))))) | 0)))(p$5)));
    var x4 = new $c_T2(result$2, $m_Ltrivalibs_graphics_shader_layouts$().Q(p$5.f, result$2));
    var \u03b42$$2 = x4;
    var bgls$4 = \u03b42$$2.T;
    var pl$2 = $m_Ltrivalibs_graphics_shader_layouts$().Q(p$5.f, bgls$4);
    var wallBaker = new $c_Lsketchlib_utils_bake_TextureBaker(p$5, new $c_Ltrivalibs_graphics_painter_Shade(id$2, module$2, vbl$2, bgls$4[0], null, pl$2, false, dict$3, dict$4));
    var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$());
    var uv$proxy1 = ul$proxy1.am;
    var buffer = new ArrayBuffer(16);
    var arr$proxy6 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
    var eyePos = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy6.dv, 0), p$5.f, uv$proxy1);
    var build$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$2) => {
      var body$proxy5 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$2) => {
        var $x_16 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
        var $x_15 = $m_sjsr_package$();
        var AssignTarget_this = ctx$2$2.aM.X("uv");
        var value$proxy5 = ctx$2$2.aW.k("uv");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_14 = AssignTarget_this.S;
        var $x_13 = value$proxy5.d;
        var AssignTarget_this$2 = ctx$2$2.aM.X("worldPos");
        var value$proxy7 = ctx$2$2.aW.k("position");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_12 = AssignTarget_this$2.S;
        var $x_11 = value$proxy7.d;
        var AssignTarget_this$3 = ctx$2$2.aM.hx;
        var value$proxy9 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().gS(ctx$2$2.hw.k("vp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fS(), $m_Ltrivalibs_graphics_math_gpu_vec4$().ai(ctx$2$2.aW.k("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$());
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return $x_16.bS(new $c_sjsr_WrappedVarArgs($x_15.e(new ($d_T.r().C)([(((("  " + $x_14) + " = ") + $x_13) + ";"), (((("  " + $x_12) + " = ") + $x_11) + ";"), (((("  " + AssignTarget_this$3.S) + " = ") + value$proxy9.d) + ";")]))));
      }));
      var ctx$3 = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = reg$2;
      try {
        var $x_17 = body$proxy5.h(ctx$3);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = prev$2;
      }
      program$3$2.bk = $x_17;
      $m_sjs_js_ArrayOps$().Z(reg$2.a0, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$9) => ((data$3$2) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$9, data$3$2);
      }))(program$3$2)));
      var body$proxy7 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$3) => {
        var AssignTarget_this$1 = ctx$2$3.at.X("color");
        var $x_19 = $m_Ltrivalibs_graphics_math_gpu_vec4$();
        var $x_18 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$();
        var tex = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex");
        var uv$1 = ctx$2$3.ah.k("uv");
        var sampler$1 = ctx$2$3.I.k("samp");
        var value$proxy11 = $x_19.ai($p_Lsketches_templates_openspace_OpenSpace$package$__fadeToEnv$1__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr(this, $x_18.fX($m_Ltrivalibs_graphics_math_gpu_expr$package$().aF(tex, uv$1, sampler$1)), ctx$2$3.ah.k("worldPos"), ctx$2$3.I.k("eye")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0));
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return (((("  " + AssignTarget_this$1.S) + " = ") + value$proxy11.d) + ";");
      }));
      var ctx$2$4 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$2$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$2$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = reg$2$1;
      try {
        var $x_20 = body$proxy7.h(ctx$2$4);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = prev$2$1;
      }
      program$3$2.b6 = $x_20;
      $m_sjs_js_ArrayOps$().Z(reg$2$1.a0, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$10) => ((data$3$3) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$10, data$3$3);
      }))(program$3$2)));
    }));
    var program$3$3 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy3.h(program$3$3);
    var b$4 = program$3$3.bk;
    var b$5 = program$3$3.b6;
    var helperFns$proxy3 = program$3$3.au();
    var id$3 = p$5.t;
    p$5.t = ((1 + p$5.t) | 0);
    var names$7 = $m_sjs_js_ArrayOpsCommon$().b(["vp"], $m_sjs_js_ArrayOpsCommon$().b(["eye"], $m_sjs_js_ArrayOpsCommon$().b(["samp"], [])));
    var dict$5 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
    var i$7 = 0;
    while ((i$7 < (names$7.length | 0))) {
      dict$5[names$7[i$7]] = i$7;
      i$7 = ((1 + i$7) | 0);
    }
    var names$8 = $m_sjs_js_ArrayOpsCommon$().b(["tex"], []);
    var dict$6 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
    var i$8 = 0;
    while ((i$8 < (names$8.length | 0))) {
      dict$6[names$8[i$8]] = i$8;
      i$8 = ((1 + i$8) | 0);
    }
    var sd$3 = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$4, b$5, helperFns$proxy3);
    var vertexInputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().b(["position"], $m_sjs_js_ArrayOpsCommon$().b(["uv"], $m_sjs_js_ArrayOpsCommon$().b(["normal"], []))), $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().b(["uv"], $m_sjs_js_ArrayOpsCommon$().b(["worldPos"], [])), $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], [])), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().b(["color"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec4<f32>"], []), []);
    var groupDecls$3 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().b(["vp"], $m_sjs_js_ArrayOpsCommon$().b(["eye"], $m_sjs_js_ArrayOpsCommon$().b(["samp"], []))), $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).bQ.v()], $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$()).K.v()], $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).K.v()], []))));
    var fragBuiltinParams$3 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$3 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$3, vertexInputStruct$3, vertexOutputStruct$3, fragmentOutputStruct$3, groupDecls$3, sd$3.aa, sd$3.a9, fragBuiltinParams$3);
    var wgsl$3 = (baseWgsl$3 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
    var args$proxy3 = $m_sr_ScalaRunTime$().aw(new ($d_sjs_js_Any.r().C)([wgsl$3]));
    console.log(...$m_sjsr_Compat$().av(args$proxy3));
    var module$3 = p$5.f.createShaderModule($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("code", wgsl$3)])))));
    var formats$3 = $m_sjs_js_ArrayOpsCommon$().b(["float32x3"], $m_sjs_js_ArrayOpsCommon$().b(["float32x2"], $m_sjs_js_ArrayOpsCommon$().b(["float32x3"], [])));
    var sizes$3 = $m_sjs_js_ArrayOpsCommon$().b([12], $m_sjs_js_ArrayOpsCommon$().b([8], $m_sjs_js_ArrayOpsCommon$().b([12], [])));
    var offsets$3 = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes$3);
    var stride$4 = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes$3);
    var attributes$3 = [];
    var i$9 = 0;
    while ((i$9 < (formats$3.length | 0))) {
      attributes$3.push($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("shaderLocation", i$9), new $c_T2("offset", (offsets$3[i$9] | 0)), new $c_T2("format", formats$3[i$9])])))));
      i$9 = ((1 + i$9) | 0);
    }
    var vbl$3 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("arrayStride", stride$4), new $c_T2("attributes", attributes$3)]))));
    var descriptors$3 = $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 1), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 2), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([])))))]))))], [])))], []);
    var result$3 = [];
    $m_sjs_js_ArrayOps$().Z(descriptors$3, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$3) => ((entries$2$2) => (result$3.push(Painter_this$3.f.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("entries", entries$2$2)])))))) | 0)))(p$5)));
    var x7 = new $c_T2(result$3, $m_Ltrivalibs_graphics_shader_layouts$().Q(p$5.f, result$3));
    var \u03b42$$3 = x7;
    var bgls$6 = \u03b42$$3.T;
    var entries = $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([])))))]))))], []);
    var panelBgl$3 = p$5.f.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("entries", entries)])))));
    if ((panelBgl$3 !== null)) {
      var other$proxy3 = [panelBgl$3];
      var allBgls$3 = bgls$6.concat(other$proxy3);
    } else {
      var allBgls$3 = bgls$6;
    }
    var pl$3 = $m_Ltrivalibs_graphics_shader_layouts$().Q(p$5.f, allBgls$3);
    var surfaceShade = new $c_Ltrivalibs_graphics_painter_Shade(id$3, module$3, vbl$3, bgls$6[0], panelBgl$3, pl$3, false, dict$5, dict$6);
    var ul$proxy2 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$());
    var uv$proxy2 = ul$proxy2.am;
    var buffer$2 = new ArrayBuffer(8);
    var arr$proxy7 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
    var canvasRes = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy7.dv, 0), p$5.f, uv$proxy2);
    var build$proxy4 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$4) => {
      var body$proxy9 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$5) => {
        var $x_26 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
        var $x_25 = $m_sjsr_package$();
        var AssignTarget_this$4 = ctx$2$5.aM.X("uv");
        var value$proxy13 = ctx$2$5.aW.k("uv");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_24 = AssignTarget_this$4.S;
        var $x_23 = value$proxy13.d;
        var AssignTarget_this$2$1 = ctx$2$5.aM.X("worldPos");
        var value$proxy15 = ctx$2$5.aW.k("position");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_22 = AssignTarget_this$2$1.S;
        var $x_21 = value$proxy15.d;
        var AssignTarget_this$3$1 = ctx$2$5.aM.hx;
        var value$proxy17 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().gS(ctx$2$5.hw.k("vp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fS(), $m_Ltrivalibs_graphics_math_gpu_vec4$().ai(ctx$2$5.aW.k("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$());
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return $x_26.bS(new $c_sjsr_WrappedVarArgs($x_25.e(new ($d_T.r().C)([(((("  " + $x_24) + " = ") + $x_23) + ";"), (((("  " + $x_22) + " = ") + $x_21) + ";"), (((("  " + AssignTarget_this$3$1.S) + " = ") + value$proxy17.d) + ";")]))));
      }));
      var ctx$4 = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$3 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$3 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = reg$3;
      try {
        var $x_27 = body$proxy9.h(ctx$4);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = prev$3;
      }
      program$3$4.bk = $x_27;
      $m_sjs_js_ArrayOps$().Z(reg$3.a0, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$11) => ((data$3$4) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$11, data$3$4);
      }))(program$3$4)));
      var body$proxy11 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$6) => {
        var wp = ctx$2$6.ah.k("worldPos");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var f = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("f");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var dEdge = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("dEdge");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var base = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("base");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var refl = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("refl");
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var reflMix = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("reflMix");
        var $x_39 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
        var $x_38 = $m_sjsr_package$();
        var tex$1 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tile");
        var uv$3 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().oU($m_Ltrivalibs_graphics_math_gpu_vec2$().ai($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().aA(wp), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().kH($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().gW(wp))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), (1.0 / $m_Lsketches_templates_openspace_OpenSpace$package$().fC));
        var sampler$2 = ctx$2$6.I.k("tileSamp");
        var $x_37 = f.a2($m_Ltrivalibs_graphics_math_gpu_expr$package$().aF(tex$1, uv$3, sampler$2));
        var $x_36 = dEdge.a2($m_Lsketchlib_utils_room_Fields$package$().o4($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fW(wp), wallBnd));
        var $x_35 = base.a2($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().bx($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().bx($m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().kD($m_Lsketches_templates_openspace_OpenSpace$package$().ll), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().iS($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().ae(f), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().aA(f), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().fT(dEdge, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h((+$m_Lsketches_templates_openspace_OpenSpace$package$().ja.b0))))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Lsketches_templates_openspace_OpenSpace$package$().oa(dEdge, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().gW(f), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().i8(f))));
        var tex$2 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "reflTex");
        var uv$4 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().pz($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gR(ctx$2$6.gH), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), ctx$2$6.I.k("res"));
        var sampler$3 = ctx$2$6.I.k("samp");
        var $x_34 = refl.a2($m_Ltrivalibs_graphics_math_gpu_expr$package$().aF(tex$2, uv$4, sampler$3));
        var $x_33 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
        var e$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().O($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().i8(refl), 0.4);
        var L$proxy1 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().gP();
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var $x_32 = reflMix.a2($x_33.O(L$proxy1.gT((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aY(1.0)) + " - ") + e$proxy1.d) + ")")), $m_Lsketches_templates_openspace_OpenSpace$package$().lp));
        var AssignTarget_this$5 = ctx$2$6.at.X("color");
        var $x_31 = $m_Ltrivalibs_graphics_math_gpu_vec4$();
        var $x_30 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$();
        var $x_29 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$();
        var $x_28 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$();
        var L$proxy3 = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().gP();
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        var value$proxy19 = $x_31.ai($p_Lsketches_templates_openspace_OpenSpace$package$__fadeToEnv$1__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr(this, $x_30.kk($x_29.bx(base, $x_28, L$proxy3.gT((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aY(1.0)) + " - ") + reflMix.d) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().bx($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fX(refl), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), reflMix)), wp, ctx$2$6.I.k("eye")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0));
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return $x_39.bS(new $c_sjsr_WrappedVarArgs($x_38.e(new ($d_T.r().C)([$x_37, $x_36, $x_35, $x_34, $x_32, (((("  " + AssignTarget_this$5.S) + " = ") + value$proxy19.d) + ";")]))));
      }));
      var ctx$2$7 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$2$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$2$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = reg$2$2;
      try {
        var $x_40 = body$proxy11.h(ctx$2$7);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = prev$2$2;
      }
      program$3$4.b6 = $x_40;
      $m_sjs_js_ArrayOps$().Z(reg$2$2.a0, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$12) => ((data$3$5) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$12, data$3$5);
      }))(program$3$4)));
    }));
    var program$4 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy4.h(program$4);
    var b$7 = program$4.bk;
    var b$8 = program$4.b6;
    var helperFns$proxy4 = program$4.au();
    var id$4 = p$5.t;
    p$5.t = ((1 + p$5.t) | 0);
    var names$10 = $m_sjs_js_ArrayOpsCommon$().b(["vp"], $m_sjs_js_ArrayOpsCommon$().b(["eye"], $m_sjs_js_ArrayOpsCommon$().b(["res"], $m_sjs_js_ArrayOpsCommon$().b(["tileSamp"], $m_sjs_js_ArrayOpsCommon$().b(["samp"], [])))));
    var dict$7 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
    var i$10 = 0;
    while ((i$10 < (names$10.length | 0))) {
      dict$7[names$10[i$10]] = i$10;
      i$10 = ((1 + i$10) | 0);
    }
    var names$11 = $m_sjs_js_ArrayOpsCommon$().b(["tile"], $m_sjs_js_ArrayOpsCommon$().b(["reflTex"], []));
    var dict$8 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
    var i$11 = 0;
    while ((i$11 < (names$11.length | 0))) {
      dict$8[names$11[i$11]] = i$11;
      i$11 = ((1 + i$11) | 0);
    }
    var sd$4 = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$7, b$8, helperFns$proxy4);
    var vertexInputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().b(["position"], $m_sjs_js_ArrayOpsCommon$().b(["uv"], $m_sjs_js_ArrayOpsCommon$().b(["normal"], []))), $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().b(["uv"], $m_sjs_js_ArrayOpsCommon$().b(["worldPos"], [])), $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], [])), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().b(["color"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec4<f32>"], []), []);
    var groupDecls$4 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().b(["vp"], $m_sjs_js_ArrayOpsCommon$().b(["eye"], $m_sjs_js_ArrayOpsCommon$().b(["res"], $m_sjs_js_ArrayOpsCommon$().b(["tileSamp"], $m_sjs_js_ArrayOpsCommon$().b(["samp"], []))))), $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).bQ.v()], $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$()).K.v()], $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$()).K.v()], $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).K.v()], $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).K.v()], []))))));
    var fragBuiltinParams$4 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$4 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$4, vertexInputStruct$4, vertexOutputStruct$4, fragmentOutputStruct$4, groupDecls$4, sd$4.aa, sd$4.a9, fragBuiltinParams$4);
    var wgsl$4 = (baseWgsl$4 + "\n\n@group(1) @binding(0) var tile: texture_2d<f32>;\n@group(1) @binding(1) var reflTex: texture_2d<f32>;");
    var args$proxy4 = $m_sr_ScalaRunTime$().aw(new ($d_sjs_js_Any.r().C)([wgsl$4]));
    console.log(...$m_sjsr_Compat$().av(args$proxy4));
    var module$4 = p$5.f.createShaderModule($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("code", wgsl$4)])))));
    var formats$4 = $m_sjs_js_ArrayOpsCommon$().b(["float32x3"], $m_sjs_js_ArrayOpsCommon$().b(["float32x2"], $m_sjs_js_ArrayOpsCommon$().b(["float32x3"], [])));
    var sizes$4 = $m_sjs_js_ArrayOpsCommon$().b([12], $m_sjs_js_ArrayOpsCommon$().b([8], $m_sjs_js_ArrayOpsCommon$().b([12], [])));
    var offsets$4 = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes$4);
    var stride$6 = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes$4);
    var attributes$4 = [];
    var i$12 = 0;
    while ((i$12 < (formats$4.length | 0))) {
      attributes$4.push($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("shaderLocation", i$12), new $c_T2("offset", (offsets$4[i$12] | 0)), new $c_T2("format", formats$4[i$12])])))));
      i$12 = ((1 + i$12) | 0);
    }
    var vbl$4 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("arrayStride", stride$6), new $c_T2("attributes", attributes$4)]))));
    var descriptors$4 = $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 1), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 2), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 3), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([])))))]))))], $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 4), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([])))))]))))], [])))))], []);
    var result$4 = [];
    $m_sjs_js_ArrayOps$().Z(descriptors$4, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$4) => ((entries$2$3) => (result$4.push(Painter_this$4.f.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("entries", entries$2$3)])))))) | 0)))(p$5)));
    var x10 = new $c_T2(result$4, $m_Ltrivalibs_graphics_shader_layouts$().Q(p$5.f, result$4));
    var \u03b42$$4 = x10;
    var bgls$8 = \u03b42$$4.T;
    var entries$2$4 = $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([])))))]))))], $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([])))))]))))], []));
    var panelBgl$4 = p$5.f.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("entries", entries$2$4)])))));
    if ((panelBgl$4 !== null)) {
      var other$proxy4 = [panelBgl$4];
      var allBgls$4 = bgls$8.concat(other$proxy4);
    } else {
      var allBgls$4 = bgls$8;
    }
    var pl$4 = $m_Ltrivalibs_graphics_shader_layouts$().Q(p$5.f, allBgls$4);
    var groundShade = new $c_Ltrivalibs_graphics_painter_Shade(id$4, module$4, vbl$4, bgls$8[0], panelBgl$4, pl$4, false, dict$7, dict$8);
    var hanging = new $c_Lsketchlib_utils_room_Hanging(p$5, $m_Lsketches_templates_openspace_OpenSpace$package$().ls, $m_Lsketches_templates_openspace_OpenSpace$package$().lt, $m_Lsketches_templates_openspace_OpenSpace$package$().lr, $m_Lsketches_templates_openspace_OpenSpace$package$().lq);
    var build$proxy5 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$5) => {
      var body$proxy13 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$8) => {
        var AssignTarget_this$6 = ctx$2$8.at.X("color");
        var value$proxy21 = $m_Ltrivalibs_graphics_math_gpu_vec4$().ai(ctx$2$8.I.k("color"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0));
        $m_Ltrivalibs_graphics_math_gpu_expr$package$();
        return (((("  " + AssignTarget_this$6.S) + " = ") + value$proxy21.d) + ";");
      }));
      var ctx$5 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$4 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$4 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = reg$4;
      try {
        var $x_41 = body$proxy13.h(ctx$5);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = prev$4;
      }
      program$3$5.a1 = $x_41;
      $m_sjs_js_ArrayOps$().Z(reg$4.a0, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$2) => ((data$3$6) => {
        $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$2, data$3$6);
      }))(program$3$5)));
    }));
    var program$5 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
    build$proxy5.h(program$5);
    var b$9 = program$5.a1;
    var helperFns$proxy5 = program$5.au();
    var id$5 = p$5.t;
    p$5.t = ((1 + p$5.t) | 0);
    var names$13 = $m_sjs_js_ArrayOpsCommon$().b(["color"], []);
    var dict$9 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
    var i$13 = 0;
    while ((i$13 < (names$13.length | 0))) {
      dict$9[names$13[i$13]] = i$13;
      i$13 = ((1 + i$13) | 0);
    }
    var names$14 = [];
    var dict$10 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
    var i$14 = 0;
    while ((i$14 < (names$14.length | 0))) {
      dict$10[names$14[i$14]] = i$14;
      i$14 = ((1 + i$14) | 0);
    }
    var sd$5 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$9, helperFns$proxy5);
    var vertexInputStruct$5 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("vertex_index", "vertex_index", "u32")], []));
    var vertexOutputStruct$5 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().b(["uv"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$5 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().b(["color"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec4<f32>"], []), []);
    var groupDecls$5 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().b(["color"], []), $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$()).K.v()], []));
    var fragBuiltinParams$5 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$5 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$5, vertexInputStruct$5, vertexOutputStruct$5, fragmentOutputStruct$5, groupDecls$5, sd$5.aa, sd$5.a9, fragBuiltinParams$5);
    var args$proxy5 = $m_sr_ScalaRunTime$().aw(new ($d_sjs_js_Any.r().C)([baseWgsl$5]));
    console.log(...$m_sjsr_Compat$().av(args$proxy5));
    var module$5 = p$5.f.createShaderModule($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("code", baseWgsl$5)])))));
    var descriptors$5 = $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], [])], []);
    var result$5 = [];
    $m_sjs_js_ArrayOps$().Z(descriptors$5, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$5) => ((entries$2$5) => (result$5.push(Painter_this$5.f.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("entries", entries$2$5)])))))) | 0)))(p$5)));
    var x16 = new $c_T2(result$5, $m_Ltrivalibs_graphics_shader_layouts$().Q(p$5.f, result$5));
    var \u03b46$ = x16;
    var bgls$10 = \u03b46$.T;
    var pl$5 = $m_Ltrivalibs_graphics_shader_layouts$().Q(p$5.f, bgls$10);
    var flatShade = new $c_Ltrivalibs_graphics_painter_Shade(id$5, module$5, null, bgls$10[0], null, pl$5, false, dict$9, dict$10);
    var pieceImages = $m_sjs_js_ArrayOps$().qJ($m_Lsketches_templates_openspace_OpenSpace$package$().ic, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((p$9) => ((pc$2) => $p_Lsketches_templates_openspace_OpenSpace$package$__flatPanel$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_painter_Panel(this, p$9, flatShade, pc$2.bC)))(p$5)));
    var aboveGround = [];
    new $c_sci_Range$Exclusive(0, (walls.length | 0), 1).fR(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((p$10) => ((v1$2) => {
      var i$1 = (v1$2 | 0);
      var wall = walls[i$1];
      var wallForm = $p_Lsketches_templates_openspace_OpenSpace$package$__form$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$10, [$m_Lsketchlib_utils_room_Walls$package$().rd(wall)]);
      var pieces = $p_Lsketches_templates_openspace_OpenSpace$package$__curate$1__Lsketchlib_utils_room_Hanging__sjs_js_Array__Lsketchlib_utils_room_Wall__sjs_js_Array(this, hanging, pieceImages, wall);
      var Bindable_this = p$10.iW(wallForm, surfaceShade, "none", (void 0));
      var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
      var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("eye", eyePos);
      var e3$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", $p_Lsketches_templates_openspace_OpenSpace$package$__wallTex$1__Lsketchlib_utils_room_Hanging__Lsketchlib_utils_bake_TextureBaker__Ltrivalibs_graphics_painter_Form__Lsketchlib_utils_room_Wall__sjs_js_Array__Ltrivalibs_graphics_painter_Panel(this, hanging, wallBaker, wallForm, wall, pieces));
      var \u03b4scrutinee461 = e1$proxy2.s;
      var idx = (Bindable_this.Y.E.samp | 0);
      while (((Bindable_this.P.length | 0) <= idx)) {
        Bindable_this.P.push(null);
      }
      Bindable_this.P[idx] = \u03b4scrutinee461;
      var \u03b4scrutinee475 = e2$proxy1.s;
      var idx$2 = (Bindable_this.Y.E.eye | 0);
      while (((Bindable_this.P.length | 0) <= idx$2)) {
        Bindable_this.P.push(null);
      }
      Bindable_this.P[idx$2] = \u03b4scrutinee475;
      var \u03b4scrutinee493 = e3$proxy1.s;
      var idx$3 = (Bindable_this.Y.aE.tex | 0);
      while (((Bindable_this.as.length | 0) <= idx$3)) {
        Bindable_this.as.push(null);
      }
      Bindable_this.as[idx$3] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee493);
      aboveGround.push(Bindable_this);
      $m_sjs_js_ArrayOps$().Z(pieces, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((piece$2) => (aboveGround.push(piece$2.gq) | 0))));
    }))(p$5)));
    var xyz = $m_Lsketches_templates_openspace_OpenSpace$package$().gk;
    var clearColor$2 = new $c_Ltrivalibs_graphics_math_cpu_Vec4(xyz.F, xyz.G, xyz.D, 0.0);
    var mirror$1 = $m_Ltrivalibs_graphics_geometry_Plane$().lT;
    var mirror = $m_Lsketchlib_utils_mirror_GaussianMirrorReflection$().p8(p$5, cam, aboveGround, "vp", $m_Lsketches_templates_openspace_OpenSpace$package$().h3, mirror$1, 4.0, 3.0, 0.0, 0.6, 0.5, 3.0, clearColor$2);
    var Bindable_this$1 = p$5.iW(groundForm, groundShade, "front", (void 0));
    var e1$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var e2$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("tileSamp", tileSampler);
    var e3$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("eye", eyePos);
    var e4$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("tile", groundTile);
    var e5$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("reflTex", mirror.lH);
    var e6$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("res", canvasRes);
    var \u03b4scrutinee505 = e1$proxy3.s;
    var idx$1 = (Bindable_this$1.Y.E.samp | 0);
    while (((Bindable_this$1.P.length | 0) <= idx$1)) {
      Bindable_this$1.P.push(null);
    }
    Bindable_this$1.P[idx$1] = \u03b4scrutinee505;
    var \u03b4scrutinee527 = e2$proxy2.s;
    var idx$2$1 = (Bindable_this$1.Y.E.tileSamp | 0);
    while (((Bindable_this$1.P.length | 0) <= idx$2$1)) {
      Bindable_this$1.P.push(null);
    }
    Bindable_this$1.P[idx$2$1] = \u03b4scrutinee527;
    var \u03b4scrutinee543 = e3$proxy2.s;
    var idx$3$1 = (Bindable_this$1.Y.E.eye | 0);
    while (((Bindable_this$1.P.length | 0) <= idx$3$1)) {
      Bindable_this$1.P.push(null);
    }
    Bindable_this$1.P[idx$3$1] = \u03b4scrutinee543;
    var \u03b4scrutinee565 = e4$proxy1.s;
    var idx$4 = (Bindable_this$1.Y.aE.tile | 0);
    while (((Bindable_this$1.as.length | 0) <= idx$4)) {
      Bindable_this$1.as.push(null);
    }
    Bindable_this$1.as[idx$4] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee565);
    var \u03b4scrutinee583 = e5$proxy1.s;
    var idx$5 = (Bindable_this$1.Y.aE.reflTex | 0);
    while (((Bindable_this$1.as.length | 0) <= idx$5)) {
      Bindable_this$1.as.push(null);
    }
    Bindable_this$1.as[idx$5] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee583);
    var \u03b4scrutinee591 = e6$proxy1.s;
    var idx$6 = (Bindable_this$1.Y.E.res | 0);
    while (((Bindable_this$1.P.length | 0) <= idx$6)) {
      Bindable_this$1.P.push(null);
    }
    Bindable_this$1.P[idx$6] = \u03b4scrutinee591;
    var ul$proxy3 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
    var uv$proxy3 = ul$proxy3.am;
    var buffer$3 = new ArrayBuffer(64);
    var arr$proxy9 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$3), 1);
    var sceneVp = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy9.dv, 0), p$5.f, uv$proxy3);
    var clearColor$3 = $m_Ltrivalibs_graphics_math_cpu_Vec4$().pX().h(new $c_T4($m_Lsketches_templates_openspace_OpenSpace$package$().gk.F, $m_Lsketches_templates_openspace_OpenSpace$package$().gk.G, $m_Lsketches_templates_openspace_OpenSpace$package$().gk.D, 1.0));
    var shapes$2 = aboveGround.concat([Bindable_this$1]);
    var Panel_this = p$5.by((void 0), (void 0), clearColor$3, true, true, (void 0), (void 0), "rgba16float", (void 0), (void 0), shapes$2, (void 0), (void 0));
    var e1$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("vp", sceneVp);
    var \u03b4scrutinee600 = e1$proxy4.s;
    var dict$proxy1 = Panel_this.ht;
    dict$proxy1.vp = \u03b4scrutinee600;
    var bloom = $m_Lsketchlib_utils_bloom_Bloom$().p7(p$5, Panel_this, $m_Lsketches_templates_openspace_OpenSpace$package$().ld, 1.0, 0.6, 5, 0.94, 1.2);
    var input = $m_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$().q6(p$5.gA, true, 400.0, 5.0, true, (void 0), 90.0, 50.0);
    var controller = new $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController(cam, input, 2.5, 2.0);
    p$5.qV(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((v1$2$1, v2$2) => {
      var w$1 = (+v1$2$1);
      var h = (+v2$2);
      var aspect$2 = (w$1 / h);
      var fov$1 = cam.bs;
      var near$1 = cam.gG;
      var far$1 = cam.gF;
      var rotH$2 = cam.aL;
      var rotV$2 = cam.bt;
      var pos$2 = cam.a5;
      cam.kx(fov$1, aspect$2, near$1, far$1, rotH$2, rotV$2, pos$2);
      var value$proxy25 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(w$1, h);
      canvasRes.C.y(canvasRes.j, value$proxy25);
      var $x_44 = canvasRes.B.queue;
      var $x_43 = canvasRes.A;
      var s$proxy4 = canvasRes.j;
      var $x_42 = s$proxy4.dv.buffer;
      $x_44.writeBuffer($x_43, 0.0, $x_42);
      mirror.rl(w$1, h);
    })));
    $m_Ltrivalibs_utils_animation_animate$package$().p1(((p$11) => ((arg1$2) => {
      var tpf = (+arg1$2);
      input.fU(tpf);
      controller.fU(tpf);
      cam.a5 = $m_Lsketchlib_utils_room_Confine$package$().po(wallBnd, cam.a5, $m_Lsketches_templates_openspace_OpenSpace$package$().lu, ($m_Ltrivalibs_dev_dev$package$().o2() ? cam.a5.G : $m_Lsketches_templates_openspace_OpenSpace$package$().j8));
      var vp = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().gQ(), cam.iH, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), cam.oI());
      sceneVp.C.y(sceneVp.j, vp);
      var $x_47 = sceneVp.B.queue;
      var $x_46 = sceneVp.A;
      var s$proxy5 = sceneVp.j;
      var $x_45 = s$proxy5.dv.buffer;
      $x_47.writeBuffer($x_46, 0.0, $x_45);
      var value$proxy26 = cam.a5;
      eyePos.C.y(eyePos.j, value$proxy26);
      var $x_50 = eyePos.B.queue;
      var $x_49 = eyePos.A;
      var s$proxy6 = eyePos.j;
      var $x_48 = s$proxy6.dv.buffer;
      $x_50.writeBuffer($x_49, 0.0, $x_48);
      mirror.qY(vp);
      $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$11, Panel_this);
      bloom.qZ();
      p$11.rx(bloom.lB);
    }))(p$5));
  })));
});
var $d_Lsketches_templates_openspace_OpenSpace$package$ = new $TypeData().i($c_Lsketches_templates_openspace_OpenSpace$package$, "sketches.templates.openspace.OpenSpace$package$", ({
  dg: 1
}));
var $n_Lsketches_templates_openspace_OpenSpace$package$;
function $m_Lsketches_templates_openspace_OpenSpace$package$() {
  if ((!$n_Lsketches_templates_openspace_OpenSpace$package$)) {
    $n_Lsketches_templates_openspace_OpenSpace$package$ = new $c_Lsketches_templates_openspace_OpenSpace$package$();
  }
  return $n_Lsketches_templates_openspace_OpenSpace$package$;
}
/** @constructor */
function $c_Lsketchlib_utils_bake_Bake$package$() {
}
$p = $c_Lsketchlib_utils_bake_Bake$package$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_bake_Bake$package$;
/** @constructor */
function $h_Lsketchlib_utils_bake_Bake$package$() {
}
$h_Lsketchlib_utils_bake_Bake$package$.prototype = $p;
$p.nQ = (function(baker, form, width, height, transform, format, mips, clearColor) {
  var Painter_this = baker.h4;
  var value$proxy8 = ((transform === (void 0)) ? new $c_Ltrivalibs_graphics_math_cpu_Mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0) : transform);
  var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
  var uv$proxy1 = ul$proxy1.am;
  var buffer = new ArrayBuffer(64);
  var arr$proxy1 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
  var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy1.dv, 0), Painter_this.f, uv$proxy1);
  b.C.y(b.j, value$proxy8);
  var $x_3 = b.B.queue;
  var $x_2 = b.A;
  var s$proxy1 = b.j;
  var $x_1 = s$proxy1.dv.buffer;
  $x_3.writeBuffer($x_2, 0.0, $x_1);
  var Bindable_this = baker.h4.iW(form, baker.lx, "none", (void 0));
  var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("model", b);
  var \u03b4scrutinee4 = e1$proxy1.s;
  var idx = (Bindable_this.Y.E.model | 0);
  while (((Bindable_this.P.length | 0) <= idx)) {
    Bindable_this.P.push(null);
  }
  Bindable_this.P[idx] = \u03b4scrutinee4;
  var format$1 = ((format === (void 0)) ? "rgba8unorm" : format);
  var panel = baker.h4.by(width, height, clearColor, (void 0), (void 0), (void 0), mips, format$1, (void 0), Bindable_this, (void 0), (void 0), (void 0));
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(baker.h4, panel);
  return panel;
});
var $d_Lsketchlib_utils_bake_Bake$package$ = new $TypeData().i($c_Lsketchlib_utils_bake_Bake$package$, "sketchlib.utils.bake.Bake$package$", ({
  dh: 1
}));
var $n_Lsketchlib_utils_bake_Bake$package$;
function $m_Lsketchlib_utils_bake_Bake$package$() {
  if ((!$n_Lsketchlib_utils_bake_Bake$package$)) {
    $n_Lsketchlib_utils_bake_Bake$package$ = new $c_Lsketchlib_utils_bake_Bake$package$();
  }
  return $n_Lsketchlib_utils_bake_Bake$package$;
}
/** @constructor */
function $c_Lsketchlib_utils_bake_TextureBaker(painter, shade) {
  this.h4 = null;
  this.lx = null;
  this.h4 = painter;
  this.lx = shade;
}
$p = $c_Lsketchlib_utils_bake_TextureBaker.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_bake_TextureBaker;
/** @constructor */
function $h_Lsketchlib_utils_bake_TextureBaker() {
}
$h_Lsketchlib_utils_bake_TextureBaker.prototype = $p;
var $d_Lsketchlib_utils_bake_TextureBaker = new $TypeData().i($c_Lsketchlib_utils_bake_TextureBaker, "sketchlib.utils.bake.TextureBaker", ({
  di: 1
}));
function $p_Lsketchlib_utils_bake_TextureBaker$__buildVert__Ltrivalibs_graphics_shader_dsl_Program__V($thiz, program) {
  var ctx = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = reg;
  try {
    var uv = ctx.aW.k("uv");
    var AssignTarget_this = ctx.aM.X("worldPos");
    var value$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fX($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().gS($thiz.jg, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fS(), $m_Ltrivalibs_graphics_math_gpu_vec4$().ai(ctx.aW.k("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$()));
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var x0 = (((("  " + AssignTarget_this.S) + " = ") + value$proxy1.d) + ";");
    var AssignTarget_this$2 = ctx.aM.X("normal");
    var value$proxy3 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().qU($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fX($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().gS($thiz.jg, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fS(), $m_Ltrivalibs_graphics_math_gpu_vec4$().ai(ctx.aW.k("normal"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$())), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$());
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var x1 = (((("  " + AssignTarget_this$2.S) + " = ") + value$proxy3.d) + ";");
    var AssignTarget_this$3 = ctx.aM.X("uv");
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var x2 = (((("  " + AssignTarget_this$3.S) + " = ") + uv.d) + ";");
    var AssignTarget_this$4 = ctx.aM.hx;
    var $x_5 = $m_Ltrivalibs_graphics_math_gpu_vec4$();
    var $x_4 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$();
    var $x_3 = $m_Ltrivalibs_graphics_math_gpu_vec2$();
    var $x_2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().aA(uv);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var e$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().ae(uv);
    var value$proxy6 = $x_5.aF($x_4.pN($x_3.ai($x_2, $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().gP().gT((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aY(1.0)) + " - ") + e$proxy1.d) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$()), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0));
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var x3 = (((("  " + AssignTarget_this$4.S) + " = ") + value$proxy6.d) + ";");
    var array = [x0, x1, x2, x3];
    var out = [];
    var i = 0;
    while ((i < (array.length | 0))) {
      var idx = i;
      var p = array[idx];
      if ((p.length > 0)) {
        out.push(p);
      }
      i = ((1 + i) | 0);
    }
    var $x_1 = out.join("\n");
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = prev;
  }
  program.bk = $x_1;
  var array$1 = reg.a0;
  var len = (array$1.length | 0);
  var i$1 = 0;
  while ((i$1 < len)) {
    $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$1[i$1]);
    i$1 = ((1 + i$1) | 0);
  }
}
/** @constructor */
function $c_Lsketchlib_utils_bake_TextureBaker$() {
  this.jg = null;
  $n_Lsketchlib_utils_bake_TextureBaker$ = this;
  this.jg = ($m_Ltrivalibs_graphics_math_gpu_expr$package$(), $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "model"));
}
$p = $c_Lsketchlib_utils_bake_TextureBaker$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_bake_TextureBaker$;
/** @constructor */
function $h_Lsketchlib_utils_bake_TextureBaker$() {
}
$h_Lsketchlib_utils_bake_TextureBaker$.prototype = $p;
var $d_Lsketchlib_utils_bake_TextureBaker$ = new $TypeData().i($c_Lsketchlib_utils_bake_TextureBaker$, "sketchlib.utils.bake.TextureBaker$", ({
  dj: 1
}));
var $n_Lsketchlib_utils_bake_TextureBaker$;
function $m_Lsketchlib_utils_bake_TextureBaker$() {
  if ((!$n_Lsketchlib_utils_bake_TextureBaker$)) {
    $n_Lsketchlib_utils_bake_TextureBaker$ = new $c_Lsketchlib_utils_bake_TextureBaker$();
  }
  return $n_Lsketchlib_utils_bake_TextureBaker$;
}
/** @constructor */
function $c_Lsketchlib_utils_bloom_Bloom$() {
}
$p = $c_Lsketchlib_utils_bloom_Bloom$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_bloom_Bloom$;
/** @constructor */
function $h_Lsketchlib_utils_bloom_Bloom$() {
}
$h_Lsketchlib_utils_bloom_Bloom$.prototype = $p;
$p.p7 = (function(p, scene, intensity, threshold, blurRadius, mipLevels, toneKnee, toneWhite) {
  if ((mipLevels < 2)) {
    var message$proxy1 = (("bloom mipLevels must be >= 2 (got " + mipLevels) + ")");
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy1)).aJ;
  }
  var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy1 = ul$proxy1.am;
  var buffer = new ArrayBuffer(4);
  var arr$proxy1 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
  var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy1.dv, 0), p.f, uv$proxy1);
  b.C.y(b.j, blurRadius);
  var $x_3 = b.B.queue;
  var $x_2 = b.A;
  var s$proxy1 = b.j;
  var $x_1 = s$proxy1.dv.buffer;
  $x_3.writeBuffer($x_2, 0.0, $x_1);
  var ul$proxy2 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy2 = ul$proxy2.am;
  var buffer$2 = new ArrayBuffer(4);
  var arr$proxy2 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
  var b$2 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy2.dv, 0), p.f, uv$proxy2);
  b$2.C.y(b$2.j, intensity);
  var $x_6 = b$2.B.queue;
  var $x_5 = b$2.A;
  var s$proxy2 = b$2.j;
  var $x_4 = s$proxy2.dv.buffer;
  $x_6.writeBuffer($x_5, 0.0, $x_4);
  var sampler = p.i4();
  var build$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3) => {
    var body$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2) => {
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var color = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("color");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var brightness = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("brightness");
      var $x_10 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
      var $x_9 = $m_sjsr_package$();
      var $x_8 = color.a2($m_Ltrivalibs_graphics_math_gpu_expr$package$().iR($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "scene"), $m_Ltrivalibs_graphics_math_gpu_ivec2$().bT($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gR(ctx$2.gH))));
      var $x_7 = brightness.a2($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aN($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aN($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().O($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().aA(color), 0.2126), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().O($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().ae(color), 0.7152)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().O($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().gW(color), 0.0722)));
      var AssignTarget_this = ctx$2.at.X("color");
      var value$proxy1 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().rq($m_Ltrivalibs_graphics_math_gpu_vec4$().nR($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0)), color, $m_Ltrivalibs_graphics_math_gpu_expr$package$().pP(brightness, ctx$2.I.k("threshold")));
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return $x_10.bS(new $c_sjsr_WrappedVarArgs($x_9.e(new ($d_T.r().C)([$x_8, $x_7, (((("  " + AssignTarget_this.S) + " = ") + value$proxy1.d) + ";")]))));
    }));
    var ctx = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = reg;
    try {
      var $x_11 = body$proxy1.h(ctx);
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = prev;
    }
    program$3.a1 = $x_11;
    $m_sjs_js_ArrayOps$().Z(reg.a0, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$5) => ((data$3) => {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$5, data$3);
    }))(program$3)));
  }));
  var program = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  build$proxy1.h(program);
  var b$1 = program.a1;
  var helperFns$proxy1 = program.au();
  var id = p.t;
  p.t = ((1 + p.t) | 0);
  var names = $m_sjs_js_ArrayOpsCommon$().b(["threshold"], []);
  var dict = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
  var i = 0;
  while ((i < (names.length | 0))) {
    dict[names[i]] = i;
    i = ((1 + i) | 0);
  }
  var names$2 = $m_sjs_js_ArrayOpsCommon$().b(["scene"], []);
  var dict$2 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
  var i$2 = 0;
  while ((i$2 < (names$2.length | 0))) {
    dict$2[names$2[i$2]] = i$2;
    i$2 = ((1 + i$2) | 0);
  }
  var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$1, helperFns$proxy1);
  var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().b(["uv"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().b(["color"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec4<f32>"], []), []);
  var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().b(["threshold"], []), $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).K.v()], []));
  var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.aa, sd.a9, fragBuiltinParams);
  var wgsl = (baseWgsl + "\n\n@group(1) @binding(0) var scene: texture_2d<f32>;");
  var args$proxy1 = $m_sr_ScalaRunTime$().aw(new ($d_sjs_js_Any.r().C)([wgsl]));
  console.log(...$m_sjsr_Compat$().av(args$proxy1));
  var module = p.f.createShaderModule($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("code", wgsl)])))));
  var descriptors = $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], [])], []);
  var result = [];
  $m_sjs_js_ArrayOps$().Z(descriptors, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((entries$2) => (result.push(p.f.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("entries", entries$2)])))))) | 0))));
  var x1 = new $c_T2(result, $m_Ltrivalibs_graphics_shader_layouts$().Q(p.f, result));
  var \u03b46$ = x1;
  var bgls$2 = \u03b46$.T;
  var entries = $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([])))))]))))], []);
  var panelBgl = p.f.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("entries", entries)])))));
  if ((panelBgl !== null)) {
    var other$proxy1 = [panelBgl];
    var allBgls = bgls$2.concat(other$proxy1);
  } else {
    var allBgls = bgls$2;
  }
  var pl = $m_Ltrivalibs_graphics_shader_layouts$().Q(p.f, allBgls);
  var thresholdShade = new $c_Ltrivalibs_graphics_painter_Shade(id, module, null, bgls$2[0], panelBgl, pl, false, dict, dict$2);
  var build$proxy2 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$1) => {
    var body$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$1) => {
      var AssignTarget_this$1 = ctx$2$1.at.X("color");
      var value$proxy3 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$().ph($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), ctx$2$1.I.k("samp"), ctx$2$1.ah.k("uv"), ctx$2$1.I.k("blurRadius"), null);
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return (((("  " + AssignTarget_this$1.S) + " = ") + value$proxy3.d) + ";");
    }));
    var ctx$1 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = reg$1;
    try {
      var $x_12 = body$proxy3.h(ctx$1);
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = prev$1;
    }
    program$3$1.a1 = $x_12;
    $m_sjs_js_ArrayOps$().Z(reg$1.a0, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$6) => ((data$3$1) => {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$6, data$3$1);
    }))(program$3$1)));
  }));
  var program$2 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  build$proxy2.h(program$2);
  var b$3 = program$2.a1;
  var helperFns$proxy2 = program$2.au();
  var id$2 = p.t;
  p.t = ((1 + p.t) | 0);
  var names$4 = $m_sjs_js_ArrayOpsCommon$().b(["blurRadius"], $m_sjs_js_ArrayOpsCommon$().b(["samp"], []));
  var dict$3 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
  var i$3 = 0;
  while ((i$3 < (names$4.length | 0))) {
    dict$3[names$4[i$3]] = i$3;
    i$3 = ((1 + i$3) | 0);
  }
  var names$5 = $m_sjs_js_ArrayOpsCommon$().b(["tex"], []);
  var dict$4 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
  var i$4 = 0;
  while ((i$4 < (names$5.length | 0))) {
    dict$4[names$5[i$4]] = i$4;
    i$4 = ((1 + i$4) | 0);
  }
  var sd$2 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$3, helperFns$proxy2);
  var vertexInputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().b(["uv"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().b(["color"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec4<f32>"], []), []);
  var groupDecls$2 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().b(["blurRadius"], $m_sjs_js_ArrayOpsCommon$().b(["samp"], [])), $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).K.v()], $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).K.v()], [])));
  var fragBuiltinParams$2 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$2 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$2, vertexInputStruct$2, vertexOutputStruct$2, fragmentOutputStruct$2, groupDecls$2, sd$2.aa, sd$2.a9, fragBuiltinParams$2);
  var wgsl$2 = (baseWgsl$2 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
  var args$proxy2 = $m_sr_ScalaRunTime$().aw(new ($d_sjs_js_Any.r().C)([wgsl$2]));
  console.log(...$m_sjsr_Compat$().av(args$proxy2));
  var module$2 = p.f.createShaderModule($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("code", wgsl$2)])))));
  var descriptors$2 = $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([])))))]))))], []))], []);
  var result$2 = [];
  $m_sjs_js_ArrayOps$().Z(descriptors$2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((entries$2$1) => (result$2.push(p.f.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("entries", entries$2$1)])))))) | 0))));
  var x4 = new $c_T2(result$2, $m_Ltrivalibs_graphics_shader_layouts$().Q(p.f, result$2));
  var \u03b46$$2 = x4;
  var bgls$4 = \u03b46$$2.T;
  var entries$2$2 = $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([])))))]))))], []);
  var panelBgl$2 = p.f.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("entries", entries$2$2)])))));
  if ((panelBgl$2 !== null)) {
    var other$proxy2 = [panelBgl$2];
    var allBgls$2 = bgls$4.concat(other$proxy2);
  } else {
    var allBgls$2 = bgls$4;
  }
  var pl$2 = $m_Ltrivalibs_graphics_shader_layouts$().Q(p.f, allBgls$2);
  var downsampleShade = new $c_Ltrivalibs_graphics_painter_Shade(id$2, module$2, null, bgls$4[0], panelBgl$2, pl$2, false, dict$3, dict$4);
  var build$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$2) => {
    var body$proxy5 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$2) => {
      var AssignTarget_this$2 = ctx$2$2.at.X("color");
      var value$proxy5 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$().rM($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), ctx$2$2.I.k("samp"), ctx$2$2.ah.k("uv"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().O(ctx$2$2.I.k("blurRadius"), 0.5), null);
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return (((("  " + AssignTarget_this$2.S) + " = ") + value$proxy5.d) + ";");
    }));
    var ctx$3 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = reg$2;
    try {
      var $x_13 = body$proxy5.h(ctx$3);
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = prev$2;
    }
    program$3$2.a1 = $x_13;
    $m_sjs_js_ArrayOps$().Z(reg$2.a0, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$7) => ((data$3$2) => {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$7, data$3$2);
    }))(program$3$2)));
  }));
  var program$3$3 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  build$proxy3.h(program$3$3);
  var b$4 = program$3$3.a1;
  var helperFns$proxy3 = program$3$3.au();
  var id$3 = p.t;
  p.t = ((1 + p.t) | 0);
  var names$7 = $m_sjs_js_ArrayOpsCommon$().b(["blurRadius"], $m_sjs_js_ArrayOpsCommon$().b(["samp"], []));
  var dict$5 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
  var i$5 = 0;
  while ((i$5 < (names$7.length | 0))) {
    dict$5[names$7[i$5]] = i$5;
    i$5 = ((1 + i$5) | 0);
  }
  var names$8 = $m_sjs_js_ArrayOpsCommon$().b(["tex"], []);
  var dict$6 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
  var i$6 = 0;
  while ((i$6 < (names$8.length | 0))) {
    dict$6[names$8[i$6]] = i$6;
    i$6 = ((1 + i$6) | 0);
  }
  var sd$3 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$4, helperFns$proxy3);
  var vertexInputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().b(["uv"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().b(["color"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec4<f32>"], []), []);
  var groupDecls$3 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().b(["blurRadius"], $m_sjs_js_ArrayOpsCommon$().b(["samp"], [])), $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).K.v()], $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).K.v()], [])));
  var fragBuiltinParams$3 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$3 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$3, vertexInputStruct$3, vertexOutputStruct$3, fragmentOutputStruct$3, groupDecls$3, sd$3.aa, sd$3.a9, fragBuiltinParams$3);
  var wgsl$3 = (baseWgsl$3 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
  var args$proxy3 = $m_sr_ScalaRunTime$().aw(new ($d_sjs_js_Any.r().C)([wgsl$3]));
  console.log(...$m_sjsr_Compat$().av(args$proxy3));
  var module$3 = p.f.createShaderModule($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("code", wgsl$3)])))));
  var descriptors$3 = $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([])))))]))))], []))], []);
  var result$3 = [];
  $m_sjs_js_ArrayOps$().Z(descriptors$3, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((entries$2$3) => (result$3.push(p.f.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("entries", entries$2$3)])))))) | 0))));
  var x7 = new $c_T2(result$3, $m_Ltrivalibs_graphics_shader_layouts$().Q(p.f, result$3));
  var \u03b46$$3 = x7;
  var bgls$6 = \u03b46$$3.T;
  var entries$3 = $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([])))))]))))], []);
  var panelBgl$3 = p.f.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("entries", entries$3)])))));
  if ((panelBgl$3 !== null)) {
    var other$proxy3 = [panelBgl$3];
    var allBgls$3 = bgls$6.concat(other$proxy3);
  } else {
    var allBgls$3 = bgls$6;
  }
  var pl$3 = $m_Ltrivalibs_graphics_shader_layouts$().Q(p.f, allBgls$3);
  var upsampleShade = new $c_Ltrivalibs_graphics_painter_Shade(id$3, module$3, null, bgls$6[0], panelBgl$3, pl$3, false, dict$5, dict$6);
  var layers = [];
  var Bindable_this = p.bm(thresholdShade, (void 0), (void 0), (void 0));
  var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("scene", scene);
  var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("threshold", threshold);
  var \u03b4scrutinee192 = e1$proxy1.s;
  var idx = (Bindable_this.x.aE.scene | 0);
  while (((Bindable_this.U.length | 0) <= idx)) {
    Bindable_this.U.push(null);
  }
  Bindable_this.U[idx] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee192);
  Bindable_this.N = null;
  var \u03b4scrutinee196 = (+e2$proxy1.s);
  var idx$2 = (Bindable_this.x.E.threshold | 0);
  var existing = ((idx$2 < (Bindable_this.i.length | 0)) ? Bindable_this.i[idx$2] : null);
  var device$proxy1 = Bindable_this.bO.f;
  if ((existing !== null)) {
    existing.C.y(existing.j, \u03b4scrutinee196);
    var $x_16 = existing.B.queue;
    var $x_15 = existing.A;
    var s$proxy3 = existing.j;
    var $x_14 = s$proxy3.dv.buffer;
    $x_16.writeBuffer($x_15, 0.0, $x_14);
    var bb = existing;
  } else {
    var uv$2 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var buffer$3 = new ArrayBuffer(4);
    var arr$proxy3 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$3), 1);
    var b$3$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy3.dv, 0), device$proxy1, uv$2);
    b$3$1.C.y(b$3$1.j, \u03b4scrutinee196);
    var $x_19 = b$3$1.B.queue;
    var $x_18 = b$3$1.A;
    var s$proxy4 = b$3$1.j;
    var $x_17 = s$proxy4.dv.buffer;
    $x_19.writeBuffer($x_18, 0.0, $x_17);
    var bb = b$3$1;
  }
  while (((Bindable_this.i.length | 0) <= idx$2)) {
    Bindable_this.i.push(null);
  }
  Bindable_this.i[idx$2] = bb;
  Bindable_this.N = null;
  layers.push(Bindable_this);
  var di = 0;
  while ((di < ((mipLevels - 1) | 0))) {
    var mipSource$1 = di;
    var mipTarget$1 = ((1 + di) | 0);
    var Bindable_this$5 = p.bm(downsampleShade, (void 0), mipSource$1, mipTarget$1);
    var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("blurRadius", b);
    var e2$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var \u03b4scrutinee212 = e1$proxy2.s;
    var idx$3 = (Bindable_this$5.x.E.blurRadius | 0);
    while (((Bindable_this$5.i.length | 0) <= idx$3)) {
      Bindable_this$5.i.push(null);
    }
    Bindable_this$5.i[idx$3] = \u03b4scrutinee212;
    Bindable_this$5.N = null;
    var \u03b4scrutinee225 = e2$proxy2.s;
    var idx$4 = (Bindable_this$5.x.E.samp | 0);
    while (((Bindable_this$5.i.length | 0) <= idx$4)) {
      Bindable_this$5.i.push(null);
    }
    Bindable_this$5.i[idx$4] = \u03b4scrutinee225;
    Bindable_this$5.N = null;
    layers.push(Bindable_this$5);
    di = ((1 + di) | 0);
  }
  var ui = ((mipLevels - 2) | 0);
  while ((ui >= 0)) {
    var Bindable_this$8 = p.bm(upsampleShade, $m_Ltrivalibs_graphics_painter_BlendState$().mg, ((1 + ui) | 0), ui);
    var e1$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("blurRadius", b);
    var e2$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var \u03b4scrutinee235 = e1$proxy3.s;
    var idx$5 = (Bindable_this$8.x.E.blurRadius | 0);
    while (((Bindable_this$8.i.length | 0) <= idx$5)) {
      Bindable_this$8.i.push(null);
    }
    Bindable_this$8.i[idx$5] = \u03b4scrutinee235;
    Bindable_this$8.N = null;
    var \u03b4scrutinee248 = e2$proxy3.s;
    var idx$6 = (Bindable_this$8.x.E.samp | 0);
    while (((Bindable_this$8.i.length | 0) <= idx$6)) {
      Bindable_this$8.i.push(null);
    }
    Bindable_this$8.i[idx$6] = \u03b4scrutinee248;
    Bindable_this$8.N = null;
    layers.push(Bindable_this$8);
    ui = ((ui - 1) | 0);
  }
  var bloomP = p.by((void 0), (void 0), (void 0), (void 0), (void 0), mipLevels, (void 0), "rgba16float", (void 0), (void 0), (void 0), (void 0), layers);
  var toneOn = (toneWhite > toneKnee);
  var toneLift = (toneOn ? (1.0 - toneKnee) : 0.0);
  var toneFalloff = (toneOn ? ((-1.0) / (toneWhite - toneKnee)) : (-1.0));
  var build$proxy4 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$4) => {
    var body$proxy7 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$3) => {
      var coord = $m_Ltrivalibs_graphics_math_gpu_ivec2$().bT($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gR(ctx$2$3.gH));
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var c = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("c");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var low = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("low");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var over = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("over");
      var $x_24 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
      var $x_23 = $m_sjsr_package$();
      var $x_22 = c.a2($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fX($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().p0($m_Ltrivalibs_graphics_math_gpu_expr$package$().iR($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "scene"), coord), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().qP($m_Ltrivalibs_graphics_math_gpu_expr$package$().iR($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "bloom"), coord), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), ctx$2$3.I.k("intensity")))));
      var $x_21 = low.a2($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().qM(c, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_vec3$().bT(ctx$2$3.I.k("knee"))));
      var $x_20 = over.a2($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().kA(c, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), low));
      var AssignTarget_this$3 = ctx$2$3.at.X("color");
      var value$proxy7 = $m_Ltrivalibs_graphics_math_gpu_vec4$().ai($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().kk(low, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().bx($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().kA($m_Ltrivalibs_graphics_math_gpu_vec3$().p3(1.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().pK($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().bx(over, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), ctx$2$3.I.k("falloff")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$())), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), ctx$2$3.I.k("lift"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0));
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return $x_24.bS(new $c_sjsr_WrappedVarArgs($x_23.e(new ($d_T.r().C)([$x_22, $x_21, $x_20, (((("  " + AssignTarget_this$3.S) + " = ") + value$proxy7.d) + ";")]))));
    }));
    var ctx$4 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg$3 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev$3 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = reg$3;
    try {
      var $x_25 = body$proxy7.h(ctx$4);
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = prev$3;
    }
    program$3$4.a1 = $x_25;
    $m_sjs_js_ArrayOps$().Z(reg$3.a0, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$8) => ((data$3$3) => {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$8, data$3$3);
    }))(program$3$4)));
  }));
  var program$4 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  build$proxy4.h(program$4);
  var b$5 = program$4.a1;
  var helperFns$proxy4 = program$4.au();
  var id$4 = p.t;
  p.t = ((1 + p.t) | 0);
  var names$10 = $m_sjs_js_ArrayOpsCommon$().b(["intensity"], $m_sjs_js_ArrayOpsCommon$().b(["knee"], $m_sjs_js_ArrayOpsCommon$().b(["lift"], $m_sjs_js_ArrayOpsCommon$().b(["falloff"], []))));
  var dict$7 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
  var i$7 = 0;
  while ((i$7 < (names$10.length | 0))) {
    dict$7[names$10[i$7]] = i$7;
    i$7 = ((1 + i$7) | 0);
  }
  var names$11 = $m_sjs_js_ArrayOpsCommon$().b(["scene"], $m_sjs_js_ArrayOpsCommon$().b(["bloom"], []));
  var dict$8 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
  var i$8 = 0;
  while ((i$8 < (names$11.length | 0))) {
    dict$8[names$11[i$8]] = i$8;
    i$8 = ((1 + i$8) | 0);
  }
  var sd$4 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$5, helperFns$proxy4);
  var vertexInputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().b(["uv"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().b(["color"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec4<f32>"], []), []);
  var groupDecls$4 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().b(["intensity"], $m_sjs_js_ArrayOpsCommon$().b(["knee"], $m_sjs_js_ArrayOpsCommon$().b(["lift"], $m_sjs_js_ArrayOpsCommon$().b(["falloff"], [])))), $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).K.v()], $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).K.v()], $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).K.v()], $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).K.v()], [])))));
  var fragBuiltinParams$4 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$4 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$4, vertexInputStruct$4, vertexOutputStruct$4, fragmentOutputStruct$4, groupDecls$4, sd$4.aa, sd$4.a9, fragBuiltinParams$4);
  var wgsl$4 = (baseWgsl$4 + "\n\n@group(1) @binding(0) var scene: texture_2d<f32>;\n@group(1) @binding(1) var bloom: texture_2d<f32>;");
  var args$proxy4 = $m_sr_ScalaRunTime$().aw(new ($d_sjs_js_Any.r().C)([wgsl$4]));
  console.log(...$m_sjsr_Compat$().av(args$proxy4));
  var module$4 = p.f.createShaderModule($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("code", wgsl$4)])))));
  var descriptors$4 = $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 2), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 3), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], []))))], []);
  var result$4 = [];
  $m_sjs_js_ArrayOps$().Z(descriptors$4, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((entries$2$4) => (result$4.push(p.f.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("entries", entries$2$4)])))))) | 0))));
  var x10 = new $c_T2(result$4, $m_Ltrivalibs_graphics_shader_layouts$().Q(p.f, result$4));
  var \u03b46$$4 = x10;
  var bgls$8 = \u03b46$$4.T;
  var entries$4 = $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([])))))]))))], $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([])))))]))))], []));
  var panelBgl$4 = p.f.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("entries", entries$4)])))));
  if ((panelBgl$4 !== null)) {
    var other$proxy4 = [panelBgl$4];
    var allBgls$4 = bgls$8.concat(other$proxy4);
  } else {
    var allBgls$4 = bgls$8;
  }
  var pl$4 = $m_Ltrivalibs_graphics_shader_layouts$().Q(p.f, allBgls$4);
  var compositeShade = new $c_Ltrivalibs_graphics_painter_Shade(id$4, module$4, null, bgls$8[0], panelBgl$4, pl$4, false, dict$7, dict$8);
  var Bindable_this$11 = p.bm(compositeShade, (void 0), (void 0), (void 0));
  var e1$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("scene", scene);
  var e2$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("bloom", bloomP);
  var e3$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("intensity", b$2);
  var e4$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("knee", toneKnee);
  var e5$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("lift", toneLift);
  var e6$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("falloff", toneFalloff);
  var \u03b4scrutinee350 = e1$proxy4.s;
  var idx$7 = (Bindable_this$11.x.aE.scene | 0);
  while (((Bindable_this$11.U.length | 0) <= idx$7)) {
    Bindable_this$11.U.push(null);
  }
  Bindable_this$11.U[idx$7] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee350);
  Bindable_this$11.N = null;
  var \u03b4scrutinee366 = e2$proxy4.s;
  var idx$8 = (Bindable_this$11.x.aE.bloom | 0);
  while (((Bindable_this$11.U.length | 0) <= idx$8)) {
    Bindable_this$11.U.push(null);
  }
  Bindable_this$11.U[idx$8] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee366);
  Bindable_this$11.N = null;
  var \u03b4scrutinee370 = e3$proxy1.s;
  var idx$9 = (Bindable_this$11.x.E.intensity | 0);
  while (((Bindable_this$11.i.length | 0) <= idx$9)) {
    Bindable_this$11.i.push(null);
  }
  Bindable_this$11.i[idx$9] = \u03b4scrutinee370;
  Bindable_this$11.N = null;
  var \u03b4scrutinee383 = (+e4$proxy1.s);
  var idx$10 = (Bindable_this$11.x.E.knee | 0);
  var existing$2 = ((idx$10 < (Bindable_this$11.i.length | 0)) ? Bindable_this$11.i[idx$10] : null);
  var device$proxy2 = Bindable_this$11.bO.f;
  if ((existing$2 !== null)) {
    existing$2.C.y(existing$2.j, \u03b4scrutinee383);
    var $x_28 = existing$2.B.queue;
    var $x_27 = existing$2.A;
    var s$proxy5 = existing$2.j;
    var $x_26 = s$proxy5.dv.buffer;
    $x_28.writeBuffer($x_27, 0.0, $x_26);
    var bb$5 = existing$2;
  } else {
    var uv$2$1 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var buffer$4 = new ArrayBuffer(4);
    var arr$proxy4 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$4), 1);
    var b$4$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy4.dv, 0), device$proxy2, uv$2$1);
    b$4$1.C.y(b$4$1.j, \u03b4scrutinee383);
    var $x_31 = b$4$1.B.queue;
    var $x_30 = b$4$1.A;
    var s$proxy6 = b$4$1.j;
    var $x_29 = s$proxy6.dv.buffer;
    $x_31.writeBuffer($x_30, 0.0, $x_29);
    var bb$5 = b$4$1;
  }
  while (((Bindable_this$11.i.length | 0) <= idx$10)) {
    Bindable_this$11.i.push(null);
  }
  Bindable_this$11.i[idx$10] = bb$5;
  Bindable_this$11.N = null;
  var \u03b4scrutinee407 = (+e5$proxy1.s);
  var idx$11 = (Bindable_this$11.x.E.lift | 0);
  var existing$3 = ((idx$11 < (Bindable_this$11.i.length | 0)) ? Bindable_this$11.i[idx$11] : null);
  var device$proxy3 = Bindable_this$11.bO.f;
  if ((existing$3 !== null)) {
    existing$3.C.y(existing$3.j, \u03b4scrutinee407);
    var $x_34 = existing$3.B.queue;
    var $x_33 = existing$3.A;
    var s$proxy7 = existing$3.j;
    var $x_32 = s$proxy7.dv.buffer;
    $x_34.writeBuffer($x_33, 0.0, $x_32);
    var bb$6 = existing$3;
  } else {
    var uv$3 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var buffer$5 = new ArrayBuffer(4);
    var arr$proxy5 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$5), 1);
    var b$5$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy5.dv, 0), device$proxy3, uv$3);
    b$5$1.C.y(b$5$1.j, \u03b4scrutinee407);
    var $x_37 = b$5$1.B.queue;
    var $x_36 = b$5$1.A;
    var s$proxy8 = b$5$1.j;
    var $x_35 = s$proxy8.dv.buffer;
    $x_37.writeBuffer($x_36, 0.0, $x_35);
    var bb$6 = b$5$1;
  }
  while (((Bindable_this$11.i.length | 0) <= idx$11)) {
    Bindable_this$11.i.push(null);
  }
  Bindable_this$11.i[idx$11] = bb$6;
  Bindable_this$11.N = null;
  var \u03b4scrutinee437 = (+e6$proxy1.s);
  var idx$12 = (Bindable_this$11.x.E.falloff | 0);
  var existing$4 = ((idx$12 < (Bindable_this$11.i.length | 0)) ? Bindable_this$11.i[idx$12] : null);
  var device$proxy4 = Bindable_this$11.bO.f;
  if ((existing$4 !== null)) {
    existing$4.C.y(existing$4.j, \u03b4scrutinee437);
    var $x_40 = existing$4.B.queue;
    var $x_39 = existing$4.A;
    var s$proxy9 = existing$4.j;
    var $x_38 = s$proxy9.dv.buffer;
    $x_40.writeBuffer($x_39, 0.0, $x_38);
    var bb$7 = existing$4;
  } else {
    var uv$4 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var buffer$6 = new ArrayBuffer(4);
    var arr$proxy6 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$6), 1);
    var b$6 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy6.dv, 0), device$proxy4, uv$4);
    b$6.C.y(b$6.j, \u03b4scrutinee437);
    var $x_43 = b$6.B.queue;
    var $x_42 = b$6.A;
    var s$proxy10 = b$6.j;
    var $x_41 = s$proxy10.dv.buffer;
    $x_43.writeBuffer($x_42, 0.0, $x_41);
    var bb$7 = b$6;
  }
  while (((Bindable_this$11.i.length | 0) <= idx$12)) {
    Bindable_this$11.i.push(null);
  }
  Bindable_this$11.i[idx$12] = bb$7;
  Bindable_this$11.N = null;
  return new $c_Lsketchlib_utils_bloom_Bloom$$anon$1(bloomP, p.by((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), Bindable_this$11, (void 0)), p, b, b$2);
});
var $d_Lsketchlib_utils_bloom_Bloom$ = new $TypeData().i($c_Lsketchlib_utils_bloom_Bloom$, "sketchlib.utils.bloom.Bloom$", ({
  dl: 1
}));
var $n_Lsketchlib_utils_bloom_Bloom$;
function $m_Lsketchlib_utils_bloom_Bloom$() {
  if ((!$n_Lsketchlib_utils_bloom_Bloom$)) {
    $n_Lsketchlib_utils_bloom_Bloom$ = new $c_Lsketchlib_utils_bloom_Bloom$();
  }
  return $n_Lsketchlib_utils_bloom_Bloom$;
}
function $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$__blurShade$1__Ltrivalibs_graphics_painter_Painter__Z__Ltrivalibs_graphics_painter_Shade($thiz, p$1, vertical) {
  var build$proxy2 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3) => {
    var body$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2) => {
      var uv = ctx$2.ah.k("uv");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var a = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("a");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var dist = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("dist");
      var $x_4 = $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
      var $x_3 = $m_sjsr_package$();
      var $x_2 = a.a2($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().i8($m_Ltrivalibs_graphics_math_gpu_expr$package$().oC($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), uv, ctx$2.I.k("samp"))));
      var $x_1 = dist.a2($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aN($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bu($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bu($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bu(a, ctx$2.I.k("blurStrength")), ctx$2.I.k("visHeight")), ctx$2.I.k("passScale")), ctx$2.I.k("strengthOffset")));
      var AssignTarget_this = ctx$2.at.X("color");
      var tex$proxy1 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex");
      var s$proxy6 = ctx$2.I.k("samp");
      var res$proxy1 = ctx$2.I.k("res");
      var dir$proxy1 = (vertical ? $m_Ltrivalibs_graphics_math_gpu_vec2$().ai($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bu(dist, ctx$2.I.k("ratioVertical"))) : $m_Ltrivalibs_graphics_math_gpu_vec2$().ai(dist, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.0)));
      var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
      var fn$proxy1 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$().pU();
      var s$proxy7 = WgslFn$_this.gO(fn$proxy1, tex$proxy1, s$proxy6, uv, res$proxy1, dir$proxy1);
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var value$proxy5 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy7);
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return $x_4.bS(new $c_sjsr_WrappedVarArgs($x_3.e(new ($d_T.r().C)([$x_2, $x_1, (((("  " + AssignTarget_this.S) + " = ") + value$proxy5.d) + ";")]))));
    }));
    var ctx = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = reg;
    try {
      var $x_5 = body$proxy3.h(ctx);
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = prev;
    }
    program$3.a1 = $x_5;
    $m_sjs_js_ArrayOps$().Z(reg.a0, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$5) => ((data$3) => {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$5, data$3);
    }))(program$3)));
  }));
  var program = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  build$proxy2.h(program);
  var b = program.a1;
  var helperFns$proxy2 = program.au();
  var id = p$1.t;
  p$1.t = ((1 + p$1.t) | 0);
  var names = $m_sjs_js_ArrayOpsCommon$().b(["blurStrength"], $m_sjs_js_ArrayOpsCommon$().b(["ratioVertical"], $m_sjs_js_ArrayOpsCommon$().b(["strengthOffset"], $m_sjs_js_ArrayOpsCommon$().b(["passScale"], $m_sjs_js_ArrayOpsCommon$().b(["res"], $m_sjs_js_ArrayOpsCommon$().b(["visHeight"], $m_sjs_js_ArrayOpsCommon$().b(["samp"], [])))))));
  var dict = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
  var i = 0;
  while ((i < (names.length | 0))) {
    dict[names[i]] = i;
    i = ((1 + i) | 0);
  }
  var names$2 = $m_sjs_js_ArrayOpsCommon$().b(["tex"], []);
  var dict$2 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([]))));
  var i$2 = 0;
  while ((i$2 < (names$2.length | 0))) {
    dict$2[names$2[i$2]] = i$2;
    i$2 = ((1 + i$2) | 0);
  }
  var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b, helperFns$proxy2);
  var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().b(["uv"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().b(["color"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec4<f32>"], []), []);
  var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().b(["blurStrength"], $m_sjs_js_ArrayOpsCommon$().b(["ratioVertical"], $m_sjs_js_ArrayOpsCommon$().b(["strengthOffset"], $m_sjs_js_ArrayOpsCommon$().b(["passScale"], $m_sjs_js_ArrayOpsCommon$().b(["res"], $m_sjs_js_ArrayOpsCommon$().b(["visHeight"], $m_sjs_js_ArrayOpsCommon$().b(["samp"], []))))))), $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).K.v()], $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).K.v()], $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).K.v()], $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).K.v()], $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$()).K.v()], $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).K.v()], $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).K.v()], []))))))));
  var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.aa, sd.a9, fragBuiltinParams);
  var wgsl = (baseWgsl + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
  var args$proxy2 = $m_sr_ScalaRunTime$().aw(new ($d_sjs_js_Any.r().C)([wgsl]));
  console.log(...$m_sjsr_Compat$().av(args$proxy2));
  var module = p$1.f.createShaderModule($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("code", wgsl)])))));
  var descriptors = $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 2), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 3), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 4), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 5), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 6), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([])))))]))))], [])))))))], []);
  var result = [];
  $m_sjs_js_ArrayOps$().Z(descriptors, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((entries$2) => (result.push(p$1.f.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("entries", entries$2)])))))) | 0))));
  var x4 = new $c_T2(result, $m_Ltrivalibs_graphics_shader_layouts$().Q(p$1.f, result));
  var \u03b46$ = x4;
  var bgls$2 = \u03b46$.T;
  var entries = $m_sjs_js_ArrayOpsCommon$().b([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([])))))]))))], []);
  var panelBgl = p$1.f.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().e(new ($d_T2.r().C)([new $c_T2("entries", entries)])))));
  if ((panelBgl !== null)) {
    var other$proxy2 = [panelBgl];
    var allBgls = bgls$2.concat(other$proxy2);
  } else {
    var allBgls = bgls$2;
  }
  var pl = $m_Ltrivalibs_graphics_shader_layouts$().Q(p$1.f, allBgls);
  return new $c_Ltrivalibs_graphics_painter_Shade(id, module, null, bgls$2[0], panelBgl, pl, false, dict, dict$2);
}
function $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$__blurLayer$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_painter_GPUSampler__Ltrivalibs_graphics_painter_Shade__D__Ltrivalibs_graphics_painter_Layer($thiz, p$2, uBlurStrength$1, uRatioVertical$1, uStrengthOffset$1, uRes$1, uVisHeight$1, sampler$1, shade, passScale) {
  var Bindable_this = p$2.bm(shade, (void 0), (void 0), (void 0));
  var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("blurStrength", uBlurStrength$1);
  var e2$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("ratioVertical", uRatioVertical$1);
  var e3$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("strengthOffset", uStrengthOffset$1);
  var e4$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("passScale", passScale);
  var e5$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("res", uRes$1);
  var e6$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("visHeight", uVisHeight$1);
  var e7$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler$1);
  var \u03b4scrutinee188 = e1$proxy2.s;
  var idx = (Bindable_this.x.E.blurStrength | 0);
  while (((Bindable_this.i.length | 0) <= idx)) {
    Bindable_this.i.push(null);
  }
  Bindable_this.i[idx] = \u03b4scrutinee188;
  Bindable_this.N = null;
  var \u03b4scrutinee201 = e2$proxy2.s;
  var idx$2 = (Bindable_this.x.E.ratioVertical | 0);
  while (((Bindable_this.i.length | 0) <= idx$2)) {
    Bindable_this.i.push(null);
  }
  Bindable_this.i[idx$2] = \u03b4scrutinee201;
  Bindable_this.N = null;
  var \u03b4scrutinee218 = e3$proxy2.s;
  var idx$3 = (Bindable_this.x.E.strengthOffset | 0);
  while (((Bindable_this.i.length | 0) <= idx$3)) {
    Bindable_this.i.push(null);
  }
  Bindable_this.i[idx$3] = \u03b4scrutinee218;
  Bindable_this.N = null;
  var \u03b4scrutinee239 = (+e4$proxy1.s);
  var idx$4 = (Bindable_this.x.E.passScale | 0);
  var existing = ((idx$4 < (Bindable_this.i.length | 0)) ? Bindable_this.i[idx$4] : null);
  var device$proxy1 = Bindable_this.bO.f;
  if ((existing !== null)) {
    existing.C.y(existing.j, \u03b4scrutinee239);
    var $x_3 = existing.B.queue;
    var $x_2 = existing.A;
    var s$proxy8 = existing.j;
    var $x_1 = s$proxy8.dv.buffer;
    $x_3.writeBuffer($x_2, 0.0, $x_1);
    var bb$4 = existing;
  } else {
    var uv = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var buffer = new ArrayBuffer(4);
    var arr$proxy9 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
    var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy9.dv, 0), device$proxy1, uv);
    b.C.y(b.j, \u03b4scrutinee239);
    var $x_6 = b.B.queue;
    var $x_5 = b.A;
    var s$proxy9 = b.j;
    var $x_4 = s$proxy9.dv.buffer;
    $x_6.writeBuffer($x_5, 0.0, $x_4);
    var bb$4 = b;
  }
  while (((Bindable_this.i.length | 0) <= idx$4)) {
    Bindable_this.i.push(null);
  }
  Bindable_this.i[idx$4] = bb$4;
  Bindable_this.N = null;
  var \u03b4scrutinee275 = e5$proxy1.s;
  var idx$5 = (Bindable_this.x.E.res | 0);
  while (((Bindable_this.i.length | 0) <= idx$5)) {
    Bindable_this.i.push(null);
  }
  Bindable_this.i[idx$5] = \u03b4scrutinee275;
  Bindable_this.N = null;
  var \u03b4scrutinee301 = e6$proxy1.s;
  var idx$6 = (Bindable_this.x.E.visHeight | 0);
  while (((Bindable_this.i.length | 0) <= idx$6)) {
    Bindable_this.i.push(null);
  }
  Bindable_this.i[idx$6] = \u03b4scrutinee301;
  Bindable_this.N = null;
  var \u03b4scrutinee334 = e7$proxy1.s;
  var idx$7 = (Bindable_this.x.E.samp | 0);
  while (((Bindable_this.i.length | 0) <= idx$7)) {
    Bindable_this.i.push(null);
  }
  Bindable_this.i[idx$7] = \u03b4scrutinee334;
  Bindable_this.N = null;
  return Bindable_this;
}
/** @constructor */
function $c_Lsketchlib_utils_mirror_GaussianMirrorReflection$() {
}
$p = $c_Lsketchlib_utils_mirror_GaussianMirrorReflection$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_mirror_GaussianMirrorReflection$;
/** @constructor */
function $h_Lsketchlib_utils_mirror_GaussianMirrorReflection$() {
}
$h_Lsketchlib_utils_mirror_GaussianMirrorReflection$.prototype = $p;
$p.p8 = (function(p, camera, shapes, vpName, alphaScale, mirror, blurStrength, blurRatioVertical, strengthOffset, scaleFactor, resolutionScale, overscan, clearColor) {
  if (((scaleFactor <= 0.0) || (scaleFactor >= 1.0))) {
    var message$proxy1 = (("GaussianMirrorReflection scaleFactor must be in (0, 1) " + ("(got " + scaleFactor)) + ")");
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy1)).aJ;
  }
  if ((resolutionScale <= 0.0)) {
    var message$proxy2 = (("GaussianMirrorReflection resolutionScale must be > 0 " + ("(got " + resolutionScale)) + ")");
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy2)).aJ;
  }
  if ((overscan < 0.0)) {
    var message$proxy3 = (("GaussianMirrorReflection overscan must be >= 0 (got " + overscan) + ")");
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy3)).aJ;
  }
  var p$proxy1 = (1.0 / (1.0 - (scaleFactor * scaleFactor)));
  var cascadeGain = (+Math.sqrt(p$proxy1));
  var sigmaPerDir = (1.64 * cascadeGain);
  var strengthScale = (0.01 / sigmaPerDir);
  var reflMat = mirror.rg();
  var pn = mirror.hh;
  var pd = mirror.hg;
  var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
  var uv$proxy1 = ul$proxy1.am;
  var buffer = new ArrayBuffer(64);
  var arr$proxy1 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
  var uVp = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy1.dv, 0), p.f, uv$proxy1);
  var ul$proxy2 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
  var uv$proxy2 = ul$proxy2.am;
  var buffer$2 = new ArrayBuffer(64);
  var arr$proxy2 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
  var uInvVp = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy2.dv, 0), p.f, uv$proxy2);
  var value$proxy1 = (blurStrength * strengthScale);
  var ul$proxy3 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy3 = ul$proxy3.am;
  var buffer$3 = new ArrayBuffer(4);
  var arr$proxy3 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$3), 1);
  var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy3.dv, 0), p.f, uv$proxy3);
  b.C.y(b.j, value$proxy1);
  var $x_3 = b.B.queue;
  var $x_2 = b.A;
  var s$proxy1 = b.j;
  var $x_1 = s$proxy1.dv.buffer;
  $x_3.writeBuffer($x_2, 0.0, $x_1);
  var ul$proxy4 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy4 = ul$proxy4.am;
  var buffer$4 = new ArrayBuffer(4);
  var arr$proxy4 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$4), 1);
  var b$2 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy4.dv, 0), p.f, uv$proxy4);
  b$2.C.y(b$2.j, blurRatioVertical);
  var $x_6 = b$2.B.queue;
  var $x_5 = b$2.A;
  var s$proxy2 = b$2.j;
  var $x_4 = s$proxy2.dv.buffer;
  $x_6.writeBuffer($x_5, 0.0, $x_4);
  var ul$proxy5 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy5 = ul$proxy5.am;
  var buffer$5 = new ArrayBuffer(4);
  var arr$proxy5 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$5), 1);
  var b$3 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy5.dv, 0), p.f, uv$proxy5);
  b$3.C.y(b$3.j, strengthOffset);
  var $x_9 = b$3.B.queue;
  var $x_8 = b$3.A;
  var s$proxy3 = b$3.j;
  var $x_7 = s$proxy3.dv.buffer;
  $x_9.writeBuffer($x_8, 0.0, $x_7);
  var ul$proxy6 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$());
  var uv$proxy6 = ul$proxy6.am;
  var buffer$6 = new ArrayBuffer(8);
  var arr$proxy6 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$6), 1);
  var uRes = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy6.dv, 0), p.f, uv$proxy6);
  var ul$proxy7 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy7 = ul$proxy7.am;
  var buffer$7 = new ArrayBuffer(4);
  var arr$proxy7 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$7), 1);
  var b$4 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy7.dv, 0), p.f, uv$proxy7);
  b$4.C.y(b$4.j, 0.0);
  var $x_12 = b$4.B.queue;
  var $x_11 = b$4.A;
  var s$proxy4 = b$4.j;
  var $x_10 = s$proxy4.dv.buffer;
  $x_12.writeBuffer($x_11, 0.0, $x_10);
  var value$proxy2 = new $c_Ltrivalibs_graphics_math_cpu_Vec4(1.0, 1.0, 0.0, 0.0);
  var ul$proxy8 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$());
  var uv$proxy8 = ul$proxy8.am;
  var buffer$8 = new ArrayBuffer(16);
  var arr$proxy8 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$8), 1);
  var b$5 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy8.dv, 0), p.f, uv$proxy8);
  b$5.C.y(b$5.j, value$proxy2);
  var $x_15 = b$5.B.queue;
  var $x_14 = b$5.A;
  var s$proxy5 = b$5.j;
  var $x_13 = s$proxy5.dv.buffer;
  $x_15.writeBuffer($x_14, 0.0, $x_13);
  var sampler = p.i4();
  var mirrorPanel = p.by((void 0), (void 0), clearColor, true, true, (void 0), (void 0), "rgba16float", (void 0), (void 0), shapes, (void 0), (void 0));
  var dict$proxy1 = mirrorPanel.ht;
  dict$proxy1[vpName] = uVp;
  var program = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  var ctx = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = reg;
  try {
    var uv$8 = ctx.ah.k("uv");
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var d = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("d");
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var ndc = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("ndc");
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var worldH = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("worldH");
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var worldPos = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("worldPos");
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var t = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("t");
    var x0 = d.a2($m_Ltrivalibs_graphics_math_gpu_expr$package$().pw($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "depth"), $m_Ltrivalibs_graphics_math_gpu_ivec2$().bT($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gR(ctx.gH))));
    var $x_18 = $m_Ltrivalibs_graphics_math_gpu_vec3$();
    var $x_17 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().nM($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().O($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().aA(uv$8), 2.0), 1.0);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var e$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().O($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().ae(uv$8), 2.0);
    var x1 = ndc.a2($x_18.aF($x_17, $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().gP().gT((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aY(1.0)) + " - ") + e$proxy1.d) + ")")), d));
    var x2 = worldH.a2($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().gS(ctx.I.k("invVp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fS(), $m_Ltrivalibs_graphics_math_gpu_vec4$().ai(ndc, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$()));
    var x3 = worldPos.a2($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().py($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fX(worldH), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().i8(worldH)));
    var x4 = t.a2($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().nW($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ki($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().nM($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().kp($m_Ltrivalibs_graphics_math_gpu_vec3$().aF($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(pn.F), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(pn.G), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(pn.D)), worldPos), pd), alphaScale)));
    var AssignTarget_this = ctx.at.X("color");
    var value$proxy3 = $m_Ltrivalibs_graphics_math_gpu_vec4$().ai($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fX($m_Ltrivalibs_graphics_math_gpu_expr$package$().iR($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "col"), $m_Ltrivalibs_graphics_math_gpu_ivec2$().bT($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gR(ctx.gH)))), t);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var x5 = (((("  " + AssignTarget_this.S) + " = ") + value$proxy3.d) + ";");
    var array = [x0, x1, x2, x3, x4, x5];
    var out = [];
    var i = 0;
    while ((i < (array.length | 0))) {
      var idx = i;
      var p$1 = array[idx];
      if ((p$1.length > 0)) {
        out.push(p$1);
      }
      i = ((1 + i) | 0);
    }
    var $x_16 = out.join("\n");
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = prev;
  }
  program.a1 = $x_16;
  var array$1 = reg.a0;
  var len = (array$1.length | 0);
  var i$1 = 0;
  while ((i$1 < len)) {
    $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$1[i$1]);
    i$1 = ((1 + i$1) | 0);
  }
  var b$1 = program.a1;
  var helperFns$proxy1 = program.au();
  var id = p.t;
  p.t = ((1 + p.t) | 0);
  var names = $m_sjs_js_ArrayOpsCommon$().b(["invVp"], []);
  var dict = ({});
  var i$2 = 0;
  while ((i$2 < (names.length | 0))) {
    dict[names[i$2]] = i$2;
    i$2 = ((1 + i$2) | 0);
  }
  var names$2 = $m_sjs_js_ArrayOpsCommon$().b(["col"], $m_sjs_js_ArrayOpsCommon$().b(["depth"], []));
  var dict$2 = ({});
  var i$2$1 = 0;
  while ((i$2$1 < (names$2.length | 0))) {
    dict$2[names$2[i$2$1]] = i$2$1;
    i$2$1 = ((1 + i$2$1) | 0);
  }
  var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$1, helperFns$proxy1);
  var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().b(["uv"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().b(["color"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec4<f32>"], []), []);
  var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().b(["invVp"], []), $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).K.v()], []));
  var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.aa, sd.a9, fragBuiltinParams);
  var wgsl = (baseWgsl + "\n\n@group(1) @binding(0) var col: texture_2d<f32>;\n@group(1) @binding(1) var depth: texture_depth_2d;");
  var args$proxy1 = $m_sr_ScalaRunTime$().aw(new ($d_sjs_js_Any.r().C)([wgsl]));
  console.log(...$m_sjsr_Compat$().av(args$proxy1));
  var module = p.f.createShaderModule(({
    "code": wgsl
  }));
  var $x_20 = $m_sjs_js_ArrayOpsCommon$();
  var $x_19 = $m_sjs_js_ArrayOpsCommon$();
  var _2 = ({
    "type": "uniform"
  });
  var descriptors = $x_20.b([$x_19.b([({
    "binding": 0,
    "visibility": 2,
    "buffer": _2
  })], [])], []);
  var result = [];
  var len$1 = (descriptors.length | 0);
  var i$3 = 0;
  while ((i$3 < len$1)) {
    var x0$2 = descriptors[i$3];
    (result.push(p.f.createBindGroupLayout(({
      "entries": x0$2
    }))) | 0);
    i$3 = ((1 + i$3) | 0);
  }
  var \u03b46$___1 = result;
  var \u03b46$___2 = $m_Ltrivalibs_graphics_shader_layouts$().Q(p.f, result);
  var bgls$2 = \u03b46$___1;
  var $x_22 = $m_sjs_js_ArrayOpsCommon$();
  var _2$1 = ({});
  var $x_21 = $m_sjs_js_ArrayOpsCommon$();
  var _2$2 = ({
    "sampleType": "depth"
  });
  var entries = $x_22.b([({
    "binding": 0,
    "visibility": 2,
    "texture": _2$1
  })], $x_21.b([({
    "binding": 1,
    "visibility": 2,
    "texture": _2$2
  })], []));
  var panelBgl = p.f.createBindGroupLayout(({
    "entries": entries
  }));
  if ((panelBgl !== null)) {
    var other$proxy1 = [panelBgl];
    var allBgls = bgls$2.concat(other$proxy1);
  } else {
    var allBgls = bgls$2;
  }
  var pl = $m_Ltrivalibs_graphics_shader_layouts$().Q(p.f, allBgls);
  var bakeShade = new $c_Ltrivalibs_graphics_painter_Shade(id, module, null, bgls$2[0], panelBgl, pl, false, dict, dict$2);
  var blurShadeH = $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$__blurShade$1__Ltrivalibs_graphics_painter_Painter__Z__Ltrivalibs_graphics_painter_Shade(this, p, false);
  var blurShadeV = $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$__blurShade$1__Ltrivalibs_graphics_painter_Painter__Z__Ltrivalibs_graphics_painter_Shade(this, p, true);
  var Bindable_this = p.bm(bakeShade, (void 0), (void 0), (void 0));
  var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("col", mirrorPanel);
  var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("depth", mirrorPanel.pf(0, (-1), true));
  var e3$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("invVp", uInvVp);
  var \u03b4scrutinee166 = e1$proxy1.s;
  var idx$1 = (Bindable_this.x.aE.col | 0);
  while (((Bindable_this.U.length | 0) <= idx$1)) {
    Bindable_this.U.push(null);
  }
  Bindable_this.U[idx$1] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee166);
  Bindable_this.N = null;
  var \u03b4scrutinee176 = e2$proxy1.s;
  var idx$2 = (Bindable_this.x.aE.depth | 0);
  while (((Bindable_this.U.length | 0) <= idx$2)) {
    Bindable_this.U.push(null);
  }
  Bindable_this.U[idx$2] = \u03b4scrutinee176;
  Bindable_this.N = null;
  var \u03b4scrutinee180 = e3$proxy1.s;
  var idx$3 = (Bindable_this.x.E.invVp | 0);
  while (((Bindable_this.i.length | 0) <= idx$3)) {
    Bindable_this.i.push(null);
  }
  Bindable_this.i[idx$3] = \u03b4scrutinee180;
  Bindable_this.N = null;
  var pairCache = [];
  var cachedScale = new $c_sr_DoubleRef(1.0);
  var blurPanel = p.by((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), "rgba16float", (void 0), (void 0), (void 0), (void 0), (void 0));
  var program$2 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  var ctx$1 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = reg$1;
  try {
    var AssignTarget_this$1 = ctx$1.at.X("color");
    var value$proxy8 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().oC($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().oZ($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().qQ(ctx$1.ah.k("uv"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gR(ctx$1.I.k("crop"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().s7(ctx$1.I.k("crop"))), ctx$1.I.k("samp"));
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var $x_23 = (((("  " + AssignTarget_this$1.S) + " = ") + value$proxy8.d) + ";");
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = prev$1;
  }
  program$2.a1 = $x_23;
  var array$18 = reg$1.a0;
  var len$2 = (array$18.length | 0);
  var i$4 = 0;
  while ((i$4 < len$2)) {
    $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program$2, array$18[i$4]);
    i$4 = ((1 + i$4) | 0);
  }
  var b$6 = program$2.a1;
  var helperFns$proxy3 = program$2.au();
  var id$2 = p.t;
  p.t = ((1 + p.t) | 0);
  var names$4 = $m_sjs_js_ArrayOpsCommon$().b(["crop"], $m_sjs_js_ArrayOpsCommon$().b(["samp"], []));
  var dict$3 = ({});
  var i$3$1 = 0;
  while ((i$3$1 < (names$4.length | 0))) {
    dict$3[names$4[i$3$1]] = i$3$1;
    i$3$1 = ((1 + i$3$1) | 0);
  }
  var names$5 = $m_sjs_js_ArrayOpsCommon$().b(["tex"], []);
  var dict$4 = ({});
  var i$4$1 = 0;
  while ((i$4$1 < (names$5.length | 0))) {
    dict$4[names$5[i$4$1]] = i$4$1;
    i$4$1 = ((1 + i$4$1) | 0);
  }
  var sd$2 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$6, helperFns$proxy3);
  var vertexInputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().b(["uv"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().b(["color"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec4<f32>"], []), []);
  var groupDecls$2 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().b(["crop"], $m_sjs_js_ArrayOpsCommon$().b(["samp"], [])), $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$()).K.v()], $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).K.v()], [])));
  var fragBuiltinParams$2 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$2 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$2, vertexInputStruct$2, vertexOutputStruct$2, fragmentOutputStruct$2, groupDecls$2, sd$2.aa, sd$2.a9, fragBuiltinParams$2);
  var wgsl$2 = (baseWgsl$2 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
  var args$proxy3 = $m_sr_ScalaRunTime$().aw(new ($d_sjs_js_Any.r().C)([wgsl$2]));
  console.log(...$m_sjsr_Compat$().av(args$proxy3));
  var module$2 = p.f.createShaderModule(({
    "code": wgsl$2
  }));
  var $x_26 = $m_sjs_js_ArrayOpsCommon$();
  var $x_25 = $m_sjs_js_ArrayOpsCommon$();
  var _2$3 = ({
    "type": "uniform"
  });
  var $x_24 = $m_sjs_js_ArrayOpsCommon$();
  var _2$4 = ({});
  var descriptors$2 = $x_26.b([$x_25.b([({
    "binding": 0,
    "visibility": 2,
    "buffer": _2$3
  })], $x_24.b([({
    "binding": 1,
    "visibility": 2,
    "sampler": _2$4
  })], []))], []);
  var result$2 = [];
  var len$3 = (descriptors$2.length | 0);
  var i$5 = 0;
  while ((i$5 < len$3)) {
    var x0$4 = descriptors$2[i$5];
    (result$2.push(p.f.createBindGroupLayout(({
      "entries": x0$4
    }))) | 0);
    i$5 = ((1 + i$5) | 0);
  }
  var \u03b46$$2___1 = result$2;
  var \u03b46$$2___2 = $m_Ltrivalibs_graphics_shader_layouts$().Q(p.f, result$2);
  var bgls$4 = \u03b46$$2___1;
  var $x_27 = $m_sjs_js_ArrayOpsCommon$();
  var _2$5 = ({});
  var entries$2 = $x_27.b([({
    "binding": 0,
    "visibility": 2,
    "texture": _2$5
  })], []);
  var panelBgl$2 = p.f.createBindGroupLayout(({
    "entries": entries$2
  }));
  if ((panelBgl$2 !== null)) {
    var other$proxy3 = [panelBgl$2];
    var allBgls$2 = bgls$4.concat(other$proxy3);
  } else {
    var allBgls$2 = bgls$4;
  }
  var pl$2 = $m_Ltrivalibs_graphics_shader_layouts$().Q(p.f, allBgls$2);
  var cropShade = new $c_Ltrivalibs_graphics_painter_Shade(id$2, module$2, null, bgls$4[0], panelBgl$2, pl$2, false, dict$3, dict$4);
  if ((overscan > 0.0)) {
    var Bindable_this$5 = p.bm(cropShade, (void 0), (void 0), (void 0));
    var e1$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", blurPanel);
    var e2$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("crop", b$5);
    var e3$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var \u03b4scrutinee423 = e1$proxy3.s;
    var idx$4 = (Bindable_this$5.x.aE.tex | 0);
    while (((Bindable_this$5.U.length | 0) <= idx$4)) {
      Bindable_this$5.U.push(null);
    }
    Bindable_this$5.U[idx$4] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee423);
    Bindable_this$5.N = null;
    var \u03b4scrutinee427 = e2$proxy3.s;
    var idx$5 = (Bindable_this$5.x.E.crop | 0);
    while (((Bindable_this$5.i.length | 0) <= idx$5)) {
      Bindable_this$5.i.push(null);
    }
    Bindable_this$5.i[idx$5] = \u03b4scrutinee427;
    Bindable_this$5.N = null;
    var \u03b4scrutinee437 = e3$proxy3.s;
    var idx$6 = (Bindable_this$5.x.E.samp | 0);
    while (((Bindable_this$5.i.length | 0) <= idx$6)) {
      Bindable_this$5.i.push(null);
    }
    Bindable_this$5.i[idx$6] = \u03b4scrutinee437;
    Bindable_this$5.N = null;
    var layers$3 = [Bindable_this$5];
    var $x_28 = p.by((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), "rgba16float", (void 0), (void 0), (void 0), (void 0), layers$3);
  } else {
    var $x_28 = null;
  }
  return new $c_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1(mirrorPanel, $x_28, blurPanel, camera, blurStrength, blurRatioVertical, Bindable_this, pairCache, overscan, uRes, b$4, b$5, resolutionScale, b, strengthScale, b$2, b$3, reflMat, uVp, uInvVp, p, scaleFactor, blurShadeH, cachedScale, blurShadeV, sampler);
});
$p.rA = (function(strengthScale$1, scaleFactor$1, subResHeight, strength, ratio) {
  var pairs = 1;
  var reach = (((strength * strengthScale$1) * subResHeight) * (+Math.max(ratio, 1.0)));
  while ((reach > 1.0)) {
    reach = (reach * scaleFactor$1);
    pairs = ((1 + pairs) | 0);
  }
  return pairs;
});
$p.rz = (function(pairCache$1, blurShadeH$1, cachedScale$1, blurShadeV$1, scaleFactor$2, p$3, uBlurStrength$2, uRatioVertical$2, uStrengthOffset$2, uRes$2, uVisHeight$2, sampler$2, n) {
  while (((pairCache$1.length | 0) < (n << 1))) {
    pairCache$1.push($p_Lsketchlib_utils_mirror_GaussianMirrorReflection$__blurLayer$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_painter_GPUSampler__Ltrivalibs_graphics_painter_Shade__D__Ltrivalibs_graphics_painter_Layer(this, p$3, uBlurStrength$2, uRatioVertical$2, uStrengthOffset$2, uRes$2, uVisHeight$2, sampler$2, blurShadeH$1, cachedScale$1.gi));
    pairCache$1.push($p_Lsketchlib_utils_mirror_GaussianMirrorReflection$__blurLayer$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_painter_GPUSampler__Ltrivalibs_graphics_painter_Shade__D__Ltrivalibs_graphics_painter_Layer(this, p$3, uBlurStrength$2, uRatioVertical$2, uStrengthOffset$2, uRes$2, uVisHeight$2, sampler$2, blurShadeV$1, cachedScale$1.gi));
    cachedScale$1.gi = (cachedScale$1.gi * scaleFactor$2);
  }
});
var $d_Lsketchlib_utils_mirror_GaussianMirrorReflection$ = new $TypeData().i($c_Lsketchlib_utils_mirror_GaussianMirrorReflection$, "sketchlib.utils.mirror.GaussianMirrorReflection$", ({
  dp: 1
}));
var $n_Lsketchlib_utils_mirror_GaussianMirrorReflection$;
function $m_Lsketchlib_utils_mirror_GaussianMirrorReflection$() {
  if ((!$n_Lsketchlib_utils_mirror_GaussianMirrorReflection$)) {
    $n_Lsketchlib_utils_mirror_GaussianMirrorReflection$ = new $c_Lsketchlib_utils_mirror_GaussianMirrorReflection$();
  }
  return $n_Lsketchlib_utils_mirror_GaussianMirrorReflection$;
}
/** @constructor */
function $c_Lsketchlib_utils_room_Boundary(edges) {
  this.gl = null;
  this.gl = edges;
}
$p = $c_Lsketchlib_utils_room_Boundary.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_Boundary;
/** @constructor */
function $h_Lsketchlib_utils_room_Boundary() {
}
$h_Lsketchlib_utils_room_Boundary.prototype = $p;
var $d_Lsketchlib_utils_room_Boundary = new $TypeData().i($c_Lsketchlib_utils_room_Boundary, "sketchlib.utils.room.Boundary", ({
  dr: 1
}));
function $p_Lsketchlib_utils_room_Boundary$__ringEdges__Lsketchlib_utils_room_Ring__sjs_js_Array($thiz, r) {
  var n = (r.bi.length | 0);
  var s = (r.gs * (($thiz.ry(r.bi) < 0.0) ? (-1.0) : 1.0));
  var out = [];
  var i = 0;
  while ((i < n)) {
    var a = r.bi[i];
    var b = r.bi[((((1 + i) | 0) === n) ? 0 : ((1 + i) | 0))];
    var prev = r.bi[((i === 0) ? ((n - 1) | 0) : ((i - 1) | 0))];
    var dx = (b.p - a.p);
    var dz = (b.n - a.n);
    var p$proxy2 = ((dx * dx) + (dz * dz));
    var len = (+Math.sqrt(p$proxy2));
    var nx = (((-dz) / len) * s);
    var nz = ((dx / len) * s);
    var arris = (((nx * (a.p - prev.p)) + (nz * (a.n - prev.n))) > 0.0);
    out.push(new $c_Lsketchlib_utils_room_Edge(a, b, new $c_Ltrivalibs_graphics_math_cpu_Vec2(nx, nz), arris));
    i = ((1 + i) | 0);
  }
  return out;
}
/** @constructor */
function $c_Lsketchlib_utils_room_Boundary$() {
}
$p = $c_Lsketchlib_utils_room_Boundary$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_Boundary$;
/** @constructor */
function $h_Lsketchlib_utils_room_Boundary$() {
}
$h_Lsketchlib_utils_room_Boundary$.prototype = $p;
$p.p6 = (function(r) {
  return new $c_Lsketchlib_utils_room_Boundary($p_Lsketchlib_utils_room_Boundary$__ringEdges__Lsketchlib_utils_room_Ring__sjs_js_Array(this, r));
});
$p.ry = (function(ps) {
  var n = (ps.length | 0);
  var acc = 0.0;
  var i = 0;
  while ((i < n)) {
    var a = ps[i];
    var b = ps[((((1 + i) | 0) === n) ? 0 : ((1 + i) | 0))];
    acc = (acc + ((a.p * b.n) - (b.p * a.n)));
    i = ((1 + i) | 0);
  }
  return acc;
});
var $d_Lsketchlib_utils_room_Boundary$ = new $TypeData().i($c_Lsketchlib_utils_room_Boundary$, "sketchlib.utils.room.Boundary$", ({
  ds: 1
}));
var $n_Lsketchlib_utils_room_Boundary$;
function $m_Lsketchlib_utils_room_Boundary$() {
  if ((!$n_Lsketchlib_utils_room_Boundary$)) {
    $n_Lsketchlib_utils_room_Boundary$ = new $c_Lsketchlib_utils_room_Boundary$();
  }
  return $n_Lsketchlib_utils_room_Boundary$;
}
/** @constructor */
function $c_Lsketchlib_utils_room_Confine$package$() {
}
$p = $c_Lsketchlib_utils_room_Confine$package$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_Confine$package$;
/** @constructor */
function $h_Lsketchlib_utils_room_Confine$package$() {
}
$h_Lsketchlib_utils_room_Confine$package$.prototype = $p;
$p.qR = (function(bnd, pxz) {
  var edges = bnd.gl;
  var bestD = Infinity;
  var qx = 0.0;
  var qz = 0.0;
  var nx = 0.0;
  var nz = 0.0;
  var i = 0;
  while ((i < (edges.length | 0))) {
    var e = edges[i];
    var ex = (e.aD.p - e.a3.p);
    var ez = (e.aD.n - e.a3.n);
    var t = ((((pxz.p - e.a3.p) * ex) + ((pxz.n - e.a3.n) * ez)) / ((ex * ex) + (ez * ez)));
    if ((t < 0.0)) {
      t = 0.0;
    } else if ((t > 1.0)) {
      t = 1.0;
    }
    var cx = (e.a3.p + (ex * t));
    var cz = (e.a3.n + (ez * t));
    var dx = (pxz.p - cx);
    var dz = (pxz.n - cz);
    var p$proxy1 = ((dx * dx) + (dz * dz));
    var d = (+Math.sqrt(p$proxy1));
    if ((d < bestD)) {
      bestD = d;
      qx = cx;
      qz = cz;
      nx = e.bq.p;
      nz = e.bq.n;
    }
    i = ((1 + i) | 0);
  }
  return new $c_T3(new $c_Ltrivalibs_graphics_math_cpu_Vec2(qx, qz), bestD, new $c_Ltrivalibs_graphics_math_cpu_Vec2(nx, nz));
});
$p.ps = (function(bnd, pxz) {
  var edges = bnd.gl;
  var inside = false;
  var i = 0;
  while ((i < (edges.length | 0))) {
    var a = edges[i].a3;
    var b = edges[i].aD;
    if (((a.n > pxz.n) !== (b.n > pxz.n))) {
      var t = ((pxz.n - a.n) / (b.n - a.n));
      if ((pxz.p < (a.p + (t * (b.p - a.p))))) {
        inside = (!inside);
      }
    }
    i = ((1 + i) | 0);
  }
  return inside;
});
$p.nX = (function(bnd, pxz, margin) {
  var nb = $m_Lsketchlib_utils_room_Confine$package$().qR(bnd, pxz);
  if (($m_Lsketchlib_utils_room_Confine$package$().ps(bnd, pxz) || ((+nb.aQ) < 1.0E-9))) {
    return new $c_Ltrivalibs_graphics_math_cpu_Vec2((nb.aB.p + (nb.aZ.p * margin)), (nb.aB.n + (nb.aZ.n * margin)));
  } else if (((+nb.aQ) < margin)) {
    var s = (margin / (+nb.aQ));
    return new $c_Ltrivalibs_graphics_math_cpu_Vec2((nb.aB.p + ((pxz.p - nb.aB.p) * s)), (nb.aB.n + ((pxz.n - nb.aB.n) * s)));
  } else {
    return pxz;
  }
});
$p.po = (function(bnd, pos, margin, eyeY) {
  var once = $m_Lsketchlib_utils_room_Confine$package$().nX(bnd, new $c_Ltrivalibs_graphics_math_cpu_Vec2(pos.F, pos.D), margin);
  var twice = $m_Lsketchlib_utils_room_Confine$package$().nX(bnd, once, margin);
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3(twice.p, eyeY, twice.n);
});
var $d_Lsketchlib_utils_room_Confine$package$ = new $TypeData().i($c_Lsketchlib_utils_room_Confine$package$, "sketchlib.utils.room.Confine$package$", ({
  dt: 1
}));
var $n_Lsketchlib_utils_room_Confine$package$;
function $m_Lsketchlib_utils_room_Confine$package$() {
  if ((!$n_Lsketchlib_utils_room_Confine$package$)) {
    $n_Lsketchlib_utils_room_Confine$package$ = new $c_Lsketchlib_utils_room_Confine$package$();
  }
  return $n_Lsketchlib_utils_room_Confine$package$;
}
function $p_Lsketchlib_utils_room_Fields$package$__segDist$1__Ltrivalibs_graphics_math_gpu_Expr__Lsketchlib_utils_room_Edge__Ltrivalibs_graphics_math_gpu_Expr($thiz, pxz$1, e) {
  var ex = (e.aD.p - e.a3.p);
  var ez = (e.aD.n - e.a3.n);
  var eLenSq = ((ex * ex) + (ez * ez));
  var ev = $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().kC(new $c_Ltrivalibs_graphics_math_cpu_Vec2(ex, ez));
  var w = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().kz(pxz$1, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().kC(e.a3));
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().iQ($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().kz(w, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().ov(ev, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().nW($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ki($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().kp(w, ev), eLenSq)))));
}
function $p_Lsketchlib_utils_room_Fields$package$__vFrac$1__Ltrivalibs_graphics_math_gpu_Expr__D__D__Lsketchlib_utils_room_Edge__Ltrivalibs_graphics_math_gpu_Expr($thiz, pxz$3, arris$1, corner$1, e) {
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().O($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().iQ($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().kz(pxz$3, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().kC(e.a3))), (1.0 / (e.gm ? arris$1 : corner$1)));
}
/** @constructor */
function $c_Lsketchlib_utils_room_Fields$package$() {
}
$p = $c_Lsketchlib_utils_room_Fields$package$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_Fields$package$;
/** @constructor */
function $h_Lsketchlib_utils_room_Fields$package$() {
}
$h_Lsketchlib_utils_room_Fields$package$.prototype = $p;
$p.o4 = (function(pxz, bnd) {
  var edges = bnd.gl;
  var acc = $p_Lsketchlib_utils_room_Fields$package$__segDist$1__Ltrivalibs_graphics_math_gpu_Expr__Lsketchlib_utils_room_Edge__Ltrivalibs_graphics_math_gpu_Expr(this, pxz, edges[0]);
  var i = 1;
  while ((i < (edges.length | 0))) {
    acc = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().i1(acc, $p_Lsketchlib_utils_room_Fields$package$__segDist$1__Ltrivalibs_graphics_math_gpu_Expr__Lsketchlib_utils_room_Edge__Ltrivalibs_graphics_math_gpu_Expr(this, pxz, edges[i]));
    i = ((1 + i) | 0);
  }
  return acc;
});
$p.pt = (function(pxz, bnd, corner, arris) {
  var edges = bnd.gl;
  var acc = $p_Lsketchlib_utils_room_Fields$package$__vFrac$1__Ltrivalibs_graphics_math_gpu_Expr__D__D__Lsketchlib_utils_room_Edge__Ltrivalibs_graphics_math_gpu_Expr(this, pxz, arris, corner, edges[0]);
  var i = 1;
  while ((i < (edges.length | 0))) {
    acc = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().i1(acc, $p_Lsketchlib_utils_room_Fields$package$__vFrac$1__Ltrivalibs_graphics_math_gpu_Expr__D__D__Lsketchlib_utils_room_Edge__Ltrivalibs_graphics_math_gpu_Expr(this, pxz, arris, corner, edges[i]));
    i = ((1 + i) | 0);
  }
  return acc;
});
$p.pD = (function(wp, normal, bnd, topY, fades) {
  var isHoriz = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().nN($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().ae(normal));
  var plan = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aN($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().O($m_Lsketchlib_utils_room_Fields$package$().o4($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fW(wp), bnd), (1.0 / (+fades.b0))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().O(($m_Ltrivalibs_graphics_math_gpu_expr$package$(), $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().gP().gT((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aY(1.0)) + " - ") + isHoriz.d) + ")"))), 1000.0));
  var vert = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aN($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().i1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().O($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().ae(wp), (1.0 / (+fades.b0))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().nL($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bR(topY, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().ae(wp)), fades.bd)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().O(isHoriz, 1000.0));
  var corner = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aN($m_Lsketchlib_utils_room_Fields$package$().pt($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fW(wp), bnd, (+fades.be), (+fades.bf)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().O(isHoriz, 1000.0));
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().fT($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().i1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().i1(plan, vert), corner), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0));
});
var $d_Lsketchlib_utils_room_Fields$package$ = new $TypeData().i($c_Lsketchlib_utils_room_Fields$package$, "sketchlib.utils.room.Fields$package$", ({
  du: 1
}));
var $n_Lsketchlib_utils_room_Fields$package$;
function $m_Lsketchlib_utils_room_Fields$package$() {
  if ((!$n_Lsketchlib_utils_room_Fields$package$)) {
    $n_Lsketchlib_utils_room_Fields$package$ = new $c_Lsketchlib_utils_room_Fields$package$();
  }
  return $n_Lsketchlib_utils_room_Fields$package$;
}
/** @constructor */
function $c_Lsketchlib_utils_room_Hanging(p, fadeWorld, strength, dropMul, botFadeMul) {
  this.b3 = null;
  this.jp = 0.0;
  this.jq = 0.0;
  this.lR = null;
  this.lQ = null;
  this.lS = null;
  this.b3 = p;
  this.jp = fadeWorld;
  this.jq = strength;
  var program = new $c_Ltrivalibs_graphics_shader_dsl_Program();
  var ctx = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = reg;
  try {
    var AssignTarget_this = ctx.aM.X("uv");
    var value$proxy1 = ctx.aW.k("uv");
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var x0 = (((("  " + AssignTarget_this.S) + " = ") + value$proxy1.d) + ";");
    var AssignTarget_this$2 = ctx.aM.hx;
    var value$proxy3 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().gS($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().qK(ctx.hw.k("vp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fS(), ctx.hw.k("model")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fS(), $m_Ltrivalibs_graphics_math_gpu_vec4$().ai(ctx.aW.k("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$());
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var x1 = (((("  " + AssignTarget_this$2.S) + " = ") + value$proxy3.d) + ";");
    var array = [x0, x1];
    var out = [];
    var i = 0;
    while ((i < (array.length | 0))) {
      var idx = i;
      var p$1 = array[idx];
      if ((p$1.length > 0)) {
        out.push(p$1);
      }
      i = ((1 + i) | 0);
    }
    var $x_1 = out.join("\n");
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = prev;
  }
  program.bk = $x_1;
  var array$1 = reg.a0;
  var len = (array$1.length | 0);
  var i$1 = 0;
  while ((i$1 < len)) {
    $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$1[i$1]);
    i$1 = ((1 + i$1) | 0);
  }
  var ctx$2 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = reg$2;
  try {
    var AssignTarget_this$1 = ctx$2.at.X("color");
    var value$proxy5 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().aF($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "img"), ctx$2.ah.k("uv"), ctx$2.I.k("samp"));
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var $x_2 = (((("  " + AssignTarget_this$1.S) + " = ") + value$proxy5.d) + ";");
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = prev$2;
  }
  program.b6 = $x_2;
  var array$2 = reg$2.a0;
  var len$1 = (array$2.length | 0);
  var i$2 = 0;
  while ((i$2 < len$1)) {
    $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$2[i$2]);
    i$2 = ((1 + i$2) | 0);
  }
  var b = program.bk;
  var b$1 = program.b6;
  var helperFns$proxy1 = program.au();
  var id = p.t;
  p.t = ((1 + p.t) | 0);
  var names = $m_sjs_js_ArrayOpsCommon$().b(["vp"], $m_sjs_js_ArrayOpsCommon$().b(["model"], $m_sjs_js_ArrayOpsCommon$().b(["samp"], [])));
  var dict = ({});
  var i$3 = 0;
  while ((i$3 < (names.length | 0))) {
    dict[names[i$3]] = i$3;
    i$3 = ((1 + i$3) | 0);
  }
  var names$2 = $m_sjs_js_ArrayOpsCommon$().b(["img"], []);
  var dict$2 = ({});
  var i$2$1 = 0;
  while ((i$2$1 < (names$2.length | 0))) {
    dict$2[names$2[i$2$1]] = i$2$1;
    i$2$1 = ((1 + i$2$1) | 0);
  }
  var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef(b, b$1, helperFns$proxy1);
  var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().b(["position"], $m_sjs_js_ArrayOpsCommon$().b(["uv"], [])), $m_sjs_js_ArrayOpsCommon$().b(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], [])), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
  var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().b(["uv"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().b(["color"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec4<f32>"], []), []);
  var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().b(["vp"], $m_sjs_js_ArrayOpsCommon$().b(["model"], $m_sjs_js_ArrayOpsCommon$().b(["samp"], []))), $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).bQ.v()], $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).bQ.v()], $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).K.v()], []))));
  var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.aa, sd.a9, fragBuiltinParams);
  var wgsl = (baseWgsl + "\n\n@group(1) @binding(0) var img: texture_2d<f32>;");
  var args$proxy1 = $m_sr_ScalaRunTime$().aw(new ($d_sjs_js_Any.r().C)([wgsl]));
  console.log(...$m_sjsr_Compat$().av(args$proxy1));
  var module = p.f.createShaderModule(({
    "code": wgsl
  }));
  var formats = $m_sjs_js_ArrayOpsCommon$().b(["float32x3"], $m_sjs_js_ArrayOpsCommon$().b(["float32x2"], []));
  var sizes = $m_sjs_js_ArrayOpsCommon$().b([12], $m_sjs_js_ArrayOpsCommon$().b([8], []));
  var offsets = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes);
  var stride = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes);
  var attributes = [];
  var i$3$1 = 0;
  while ((i$3$1 < (formats.length | 0))) {
    var value$2 = i$3$1;
    var value$3 = (offsets[i$3$1] | 0);
    var s = formats[i$3$1];
    attributes.push(({
      "shaderLocation": value$2,
      "offset": value$3,
      "format": s
    }));
    i$3$1 = ((1 + i$3$1) | 0);
  }
  var vbl = ({
    "arrayStride": stride,
    "attributes": attributes
  });
  var $x_6 = $m_sjs_js_ArrayOpsCommon$();
  var $x_5 = $m_sjs_js_ArrayOpsCommon$();
  var _2 = ({
    "type": "uniform"
  });
  var $x_4 = $m_sjs_js_ArrayOpsCommon$();
  var _2$1 = ({
    "type": "uniform"
  });
  var $x_3 = $m_sjs_js_ArrayOpsCommon$();
  var _2$2 = ({});
  var descriptors = $x_6.b([$x_5.b([({
    "binding": 0,
    "visibility": 1,
    "buffer": _2
  })], $x_4.b([({
    "binding": 1,
    "visibility": 1,
    "buffer": _2$1
  })], $x_3.b([({
    "binding": 2,
    "visibility": 2,
    "sampler": _2$2
  })], [])))], []);
  var result = [];
  var len$2 = (descriptors.length | 0);
  var i$4 = 0;
  while ((i$4 < len$2)) {
    var x0$3 = descriptors[i$4];
    (result.push(p.f.createBindGroupLayout(({
      "entries": x0$3
    }))) | 0);
    i$4 = ((1 + i$4) | 0);
  }
  var \u03b42$___1 = result;
  var \u03b42$___2 = $m_Ltrivalibs_graphics_shader_layouts$().Q(p.f, result);
  var bgls$2 = \u03b42$___1;
  var $x_7 = $m_sjs_js_ArrayOpsCommon$();
  var _2$3 = ({});
  var entries = $x_7.b([({
    "binding": 0,
    "visibility": 2,
    "texture": _2$3
  })], []);
  var panelBgl = p.f.createBindGroupLayout(({
    "entries": entries
  }));
  if ((panelBgl !== null)) {
    var other$proxy1 = [panelBgl];
    var allBgls = bgls$2.concat(other$proxy1);
  } else {
    var allBgls = bgls$2;
  }
  var pl = $m_Ltrivalibs_graphics_shader_layouts$().Q(p.f, allBgls);
  this.lR = new $c_Ltrivalibs_graphics_painter_Shade(id, module, vbl, bgls$2[0], panelBgl, pl, false, dict, dict$2);
  var program$2 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  var ctx$1 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = reg$1;
  try {
    var AssignTarget_this$3 = ctx$1.at.X("color");
    var value$proxy7 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().aF($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), ctx$1.ah.k("uv"), ctx$1.I.k("samp"));
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var $x_8 = (((("  " + AssignTarget_this$3.S) + " = ") + value$proxy7.d) + ";");
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = prev$1;
  }
  program$2.a1 = $x_8;
  var array$34 = reg$1.a0;
  var len$3 = (array$34.length | 0);
  var i$5 = 0;
  while ((i$5 < len$3)) {
    $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program$2, array$34[i$5]);
    i$5 = ((1 + i$5) | 0);
  }
  var b$2 = program$2.a1;
  var helperFns$proxy2 = program$2.au();
  var id$2 = p.t;
  p.t = ((1 + p.t) | 0);
  var names$4 = $m_sjs_js_ArrayOpsCommon$().b(["samp"], []);
  var dict$3 = ({});
  var i$4$1 = 0;
  while ((i$4$1 < (names$4.length | 0))) {
    dict$3[names$4[i$4$1]] = i$4$1;
    i$4$1 = ((1 + i$4$1) | 0);
  }
  var names$5 = $m_sjs_js_ArrayOpsCommon$().b(["tex"], []);
  var dict$4 = ({});
  var i$5$1 = 0;
  while ((i$5$1 < (names$5.length | 0))) {
    dict$4[names$5[i$5$1]] = i$5$1;
    i$5$1 = ((1 + i$5$1) | 0);
  }
  var sd$2 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$2, helperFns$proxy2);
  var vertexInputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().b(["uv"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().b(["color"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec4<f32>"], []), []);
  var groupDecls$2 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().b(["samp"], []), $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).K.v()], []));
  var fragBuiltinParams$2 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$2 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$2, vertexInputStruct$2, vertexOutputStruct$2, fragmentOutputStruct$2, groupDecls$2, sd$2.aa, sd$2.a9, fragBuiltinParams$2);
  var wgsl$2 = (baseWgsl$2 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
  var args$proxy2 = $m_sr_ScalaRunTime$().aw(new ($d_sjs_js_Any.r().C)([wgsl$2]));
  console.log(...$m_sjsr_Compat$().av(args$proxy2));
  var module$2 = p.f.createShaderModule(({
    "code": wgsl$2
  }));
  var $x_10 = $m_sjs_js_ArrayOpsCommon$();
  var $x_9 = $m_sjs_js_ArrayOpsCommon$();
  var _2$4 = ({});
  var descriptors$2 = $x_10.b([$x_9.b([({
    "binding": 0,
    "visibility": 2,
    "sampler": _2$4
  })], [])], []);
  var result$2 = [];
  var len$4 = (descriptors$2.length | 0);
  var i$6 = 0;
  while ((i$6 < len$4)) {
    var x0$5 = descriptors$2[i$6];
    (result$2.push(p.f.createBindGroupLayout(({
      "entries": x0$5
    }))) | 0);
    i$6 = ((1 + i$6) | 0);
  }
  var \u03b46$___1 = result$2;
  var \u03b46$___2 = $m_Ltrivalibs_graphics_shader_layouts$().Q(p.f, result$2);
  var bgls$4 = \u03b46$___1;
  var $x_11 = $m_sjs_js_ArrayOpsCommon$();
  var _2$5 = ({});
  var entries$2 = $x_11.b([({
    "binding": 0,
    "visibility": 2,
    "texture": _2$5
  })], []);
  var panelBgl$2 = p.f.createBindGroupLayout(({
    "entries": entries$2
  }));
  if ((panelBgl$2 !== null)) {
    var other$proxy2 = [panelBgl$2];
    var allBgls$2 = bgls$4.concat(other$proxy2);
  } else {
    var allBgls$2 = bgls$4;
  }
  var pl$2 = $m_Ltrivalibs_graphics_shader_layouts$().Q(p.f, allBgls$2);
  this.lQ = new $c_Ltrivalibs_graphics_painter_Shade(id$2, module$2, null, bgls$4[0], panelBgl$2, pl$2, false, dict$3, dict$4);
  var program$3 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  var ctx$3 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg$3 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev$3 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = reg$3;
  try {
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var sm = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("sm");
    var x0$6 = sm.a2($m_Lsketchlib_utils_room_Hanging$package$().rw(ctx$3.ah.k("uv"), ctx$3.I.k("rect"), ctx$3.I.k("fade"), dropMul, botFadeMul));
    var AssignTarget_this$4 = ctx$3.at.X("color");
    var $x_14 = $m_Ltrivalibs_graphics_math_gpu_vec4$();
    var $x_13 = $m_Ltrivalibs_graphics_math_gpu_vec3$();
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var e$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bu(ctx$3.I.k("strength"), sm);
    var value$proxy9 = $x_14.ai($x_13.bT($m_Ltrivalibs_graphics_math_gpu_LeftScalar$().gP().gT((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aY(1.0)) + " - ") + e$proxy1.d) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0));
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    var x1$1 = (((("  " + AssignTarget_this$4.S) + " = ") + value$proxy9.d) + ";");
    var array$49 = [x0$6, x1$1];
    var out$1 = [];
    var i$7 = 0;
    while ((i$7 < (array$49.length | 0))) {
      var idx$1 = i$7;
      var p$2 = array$49[idx$1];
      if ((p$2.length > 0)) {
        out$1.push(p$2);
      }
      i$7 = ((1 + i$7) | 0);
    }
    var $x_12 = out$1.join("\n");
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().m = prev$3;
  }
  program$3.a1 = $x_12;
  var array$50 = reg$3.a0;
  var len$5 = (array$50.length | 0);
  var i$8 = 0;
  while ((i$8 < len$5)) {
    $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program$3, array$50[i$8]);
    i$8 = ((1 + i$8) | 0);
  }
  var b$3 = program$3.a1;
  var helperFns$proxy3 = program$3.au();
  var id$3 = p.t;
  p.t = ((1 + p.t) | 0);
  var names$7 = $m_sjs_js_ArrayOpsCommon$().b(["rect"], $m_sjs_js_ArrayOpsCommon$().b(["fade"], $m_sjs_js_ArrayOpsCommon$().b(["strength"], [])));
  var dict$5 = ({});
  var i$6$1 = 0;
  while ((i$6$1 < (names$7.length | 0))) {
    dict$5[names$7[i$6$1]] = i$6$1;
    i$6$1 = ((1 + i$6$1) | 0);
  }
  var names$8 = [];
  var dict$6 = ({});
  var i$7$1 = 0;
  while ((i$7$1 < (names$8.length | 0))) {
    dict$6[names$8[i$7$1]] = i$7$1;
    i$7$1 = ((1 + i$7$1) | 0);
  }
  var sd$3 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$3, helperFns$proxy3);
  var vertexInputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().b(["uv"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().b(["color"], []), $m_sjs_js_ArrayOpsCommon$().b(["vec4<f32>"], []), []);
  var groupDecls$3 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().b(["rect"], $m_sjs_js_ArrayOpsCommon$().b(["fade"], $m_sjs_js_ArrayOpsCommon$().b(["strength"], []))), $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$()).K.v()], $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$()).K.v()], $m_sjs_js_ArrayOpsCommon$().b([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).K.v()], []))));
  var fragBuiltinParams$3 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().b([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$3 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$3, vertexInputStruct$3, vertexOutputStruct$3, fragmentOutputStruct$3, groupDecls$3, sd$3.aa, sd$3.a9, fragBuiltinParams$3);
  var args$proxy3 = $m_sr_ScalaRunTime$().aw(new ($d_sjs_js_Any.r().C)([baseWgsl$3]));
  console.log(...$m_sjsr_Compat$().av(args$proxy3));
  var module$3 = p.f.createShaderModule(({
    "code": baseWgsl$3
  }));
  var $x_18 = $m_sjs_js_ArrayOpsCommon$();
  var $x_17 = $m_sjs_js_ArrayOpsCommon$();
  var _2$6 = ({
    "type": "uniform"
  });
  var $x_16 = $m_sjs_js_ArrayOpsCommon$();
  var _2$7 = ({
    "type": "uniform"
  });
  var $x_15 = $m_sjs_js_ArrayOpsCommon$();
  var _2$8 = ({
    "type": "uniform"
  });
  var descriptors$3 = $x_18.b([$x_17.b([({
    "binding": 0,
    "visibility": 2,
    "buffer": _2$6
  })], $x_16.b([({
    "binding": 1,
    "visibility": 2,
    "buffer": _2$7
  })], $x_15.b([({
    "binding": 2,
    "visibility": 2,
    "buffer": _2$8
  })], [])))], []);
  var result$3 = [];
  var len$6 = (descriptors$3.length | 0);
  var i$9 = 0;
  while ((i$9 < len$6)) {
    var x0$8 = descriptors$3[i$9];
    (result$3.push(p.f.createBindGroupLayout(({
      "entries": x0$8
    }))) | 0);
    i$9 = ((1 + i$9) | 0);
  }
  var \u03b46$$2___1 = result$3;
  var \u03b46$$2___2 = $m_Ltrivalibs_graphics_shader_layouts$().Q(p.f, result$3);
  var bgls$6 = \u03b46$$2___1;
  var pl$3 = $m_Ltrivalibs_graphics_shader_layouts$().Q(p.f, bgls$6);
  this.lS = new $c_Ltrivalibs_graphics_painter_Shade(id$3, module$3, null, bgls$6[0], null, pl$3, false, dict$5, dict$6);
}
$p = $c_Lsketchlib_utils_room_Hanging.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_Hanging;
/** @constructor */
function $h_Lsketchlib_utils_room_Hanging() {
}
$h_Lsketchlib_utils_room_Hanging.prototype = $p;
$p.pZ = (function(w, spec, centerFromLeft, centerHeight, shadowDim) {
  var pos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a7(), $m_Lsketchlib_utils_room_Walls$package$().r0(w, centerFromLeft, centerHeight), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a7(), w.b5, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), ((0.5 * spec.br) + 0.02)));
  var Painter_this = this.b3;
  var value$proxy11 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().o8(pos, $m_Ltrivalibs_graphics_math_cpu_Quat$().o7($m_Lsketchlib_utils_room_Walls$package$().rn(w)), new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0));
  var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
  var uv$proxy1 = ul$proxy1.am;
  var buffer = new ArrayBuffer(64);
  var arr$proxy1 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
  var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy1.dv, 0), Painter_this.f, uv$proxy1);
  b.C.y(b.j, value$proxy11);
  var $x_3 = b.B.queue;
  var $x_2 = b.A;
  var s$proxy1 = b.j;
  var $x_1 = s$proxy1.dv.buffer;
  $x_3.writeBuffer($x_2, 0.0, $x_1);
  var Bindable_this = this.b3.iW($m_Lsketchlib_utils_room_Hanging$package$().pQ(spec, this.b3), this.lR, "none", (void 0));
  var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("model", b);
  var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", this.b3.i4());
  var e3$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("img", spec.gr);
  var \u03b4scrutinee209 = e1$proxy1.s;
  var idx = (Bindable_this.Y.E.model | 0);
  while (((Bindable_this.P.length | 0) <= idx)) {
    Bindable_this.P.push(null);
  }
  Bindable_this.P[idx] = \u03b4scrutinee209;
  var \u03b4scrutinee223 = e2$proxy1.s;
  var idx$2 = (Bindable_this.Y.E.samp | 0);
  while (((Bindable_this.P.length | 0) <= idx$2)) {
    Bindable_this.P.push(null);
  }
  Bindable_this.P[idx$2] = \u03b4scrutinee223;
  var \u03b4scrutinee243 = e3$proxy1.s;
  var idx$3 = (Bindable_this.Y.aE.img | 0);
  while (((Bindable_this.as.length | 0) <= idx$3)) {
    Bindable_this.as.push(null);
  }
  Bindable_this.as[idx$3] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee243);
  var baseRect = new $c_Ltrivalibs_graphics_math_cpu_Vec4((centerFromLeft / w.aT), (1.0 - (centerHeight / w.b4)), ((0.5 * spec.bK) / w.aT), ((0.5 * spec.bJ) / w.b4));
  var Painter_this$2 = this.b3;
  var ul$proxy2 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$());
  var uv$proxy2 = ul$proxy2.am;
  var buffer$2 = new ArrayBuffer(16);
  var arr$proxy2 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
  var b$2 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy2.dv, 0), Painter_this$2.f, uv$proxy2);
  b$2.C.y(b$2.j, baseRect);
  var $x_6 = b$2.B.queue;
  var $x_5 = b$2.A;
  var s$proxy2 = b$2.j;
  var $x_4 = s$proxy2.dv.buffer;
  $x_6.writeBuffer($x_5, 0.0, $x_4);
  return new $c_Lsketchlib_utils_room_Painting(w, Bindable_this, b, b$2, new $c_Ltrivalibs_graphics_math_cpu_Vec2((this.jp / w.aT), (this.jp / w.b4)), (this.jq * ((shadowDim < 0.0) ? 0.0 : ((shadowDim > 1.0) ? 1.0 : shadowDim))), pos, baseRect);
});
$p.pp = (function(base, width, height, pieces) {
  if (((pieces.length | 0) === 0)) {
    return base;
  } else {
    var Bindable_this = this.b3.bm(this.lQ, (void 0), (void 0), (void 0));
    var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", this.b3.i4());
    var e2$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", base);
    var \u03b4scrutinee247 = e1$proxy2.s;
    var idx = (Bindable_this.x.E.samp | 0);
    while (((Bindable_this.i.length | 0) <= idx)) {
      Bindable_this.i.push(null);
    }
    Bindable_this.i[idx] = \u03b4scrutinee247;
    Bindable_this.N = null;
    var \u03b4scrutinee259 = e2$proxy2.s;
    var idx$2 = (Bindable_this.x.aE.tex | 0);
    while (((Bindable_this.U.length | 0) <= idx$2)) {
      Bindable_this.U.push(null);
    }
    Bindable_this.U[idx$2] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee259);
    Bindable_this.N = null;
    var Bindable_this$4 = this.b3.bm(this.lS, $m_Ltrivalibs_graphics_painter_BlendState$().mh, (void 0), (void 0));
    var e1$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("strength", this.jq);
    var \u03b4scrutinee267 = (+e1$proxy3.s);
    var idx$3 = (Bindable_this$4.x.E.strength | 0);
    var existing = ((idx$3 < (Bindable_this$4.i.length | 0)) ? Bindable_this$4.i[idx$3] : null);
    var device$proxy1 = Bindable_this$4.bO.f;
    if ((existing !== null)) {
      existing.C.y(existing.j, \u03b4scrutinee267);
      var $x_3 = existing.B.queue;
      var $x_2 = existing.A;
      var s$proxy3 = existing.j;
      var $x_1 = s$proxy3.dv.buffer;
      $x_3.writeBuffer($x_2, 0.0, $x_1);
      var bb = existing;
    } else {
      var uv = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
      var buffer = new ArrayBuffer(4);
      var arr$proxy3 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
      var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy3.dv, 0), device$proxy1, uv);
      b.C.y(b.j, \u03b4scrutinee267);
      var $x_6 = b.B.queue;
      var $x_5 = b.A;
      var s$proxy4 = b.j;
      var $x_4 = s$proxy4.dv.buffer;
      $x_6.writeBuffer($x_5, 0.0, $x_4);
      var bb = b;
    }
    while (((Bindable_this$4.i.length | 0) <= idx$3)) {
      Bindable_this$4.i.push(null);
    }
    Bindable_this$4.i[idx$3] = bb;
    Bindable_this$4.N = null;
    var i = 0;
    while ((i < (pieces.length | 0))) {
      var piece = pieces[i];
      var InstanceList_this = Bindable_this$4.iu;
      var e1$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("rect", piece.go);
      var e2$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("fade", piece.gn);
      var e3$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("strength", piece.gp);
      var i$2 = InstanceList_this.oW();
      var Bindable_this$7 = InstanceList_this.fI[i$2];
      var \u03b4scrutinee291 = e1$proxy4.s;
      var idx$4 = (Bindable_this$7.it.E.rect | 0);
      while (((Bindable_this$7.an.length | 0) <= idx$4)) {
        Bindable_this$7.an.push(null);
      }
      Bindable_this$7.an[idx$4] = \u03b4scrutinee291;
      var \u03b4scrutinee301 = e2$proxy3.s;
      var idx$5 = (Bindable_this$7.it.E.fade | 0);
      var existing$2 = ((idx$5 < (Bindable_this$7.an.length | 0)) ? Bindable_this$7.an[idx$5] : null);
      var device$proxy2 = Bindable_this$7.jP.f;
      if ((existing$2 !== null)) {
        existing$2.C.y(existing$2.j, \u03b4scrutinee301);
        var $x_9 = existing$2.B.queue;
        var $x_8 = existing$2.A;
        var s$proxy5 = existing$2.j;
        var $x_7 = s$proxy5.dv.buffer;
        $x_9.writeBuffer($x_8, 0.0, $x_7);
        var bb$3 = existing$2;
      } else {
        var uv$2 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$();
        var buffer$2 = new ArrayBuffer(8);
        var arr$proxy4 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
        var b$2 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy4.dv, 0), device$proxy2, uv$2);
        b$2.C.y(b$2.j, \u03b4scrutinee301);
        var $x_12 = b$2.B.queue;
        var $x_11 = b$2.A;
        var s$proxy6 = b$2.j;
        var $x_10 = s$proxy6.dv.buffer;
        $x_12.writeBuffer($x_11, 0.0, $x_10);
        var bb$3 = b$2;
      }
      while (((Bindable_this$7.an.length | 0) <= idx$5)) {
        Bindable_this$7.an.push(null);
      }
      Bindable_this$7.an[idx$5] = bb$3;
      var \u03b4scrutinee322 = (+e3$proxy2.s);
      var idx$6 = (Bindable_this$7.it.E.strength | 0);
      var existing$3 = ((idx$6 < (Bindable_this$7.an.length | 0)) ? Bindable_this$7.an[idx$6] : null);
      var device$proxy3 = Bindable_this$7.jP.f;
      if ((existing$3 !== null)) {
        existing$3.C.y(existing$3.j, \u03b4scrutinee322);
        var $x_15 = existing$3.B.queue;
        var $x_14 = existing$3.A;
        var s$proxy7 = existing$3.j;
        var $x_13 = s$proxy7.dv.buffer;
        $x_15.writeBuffer($x_14, 0.0, $x_13);
        var bb$4 = existing$3;
      } else {
        var uv$3 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
        var buffer$3 = new ArrayBuffer(4);
        var arr$proxy5 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$3), 1);
        var b$3 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy5.dv, 0), device$proxy3, uv$3);
        b$3.C.y(b$3.j, \u03b4scrutinee322);
        var $x_18 = b$3.B.queue;
        var $x_17 = b$3.A;
        var s$proxy8 = b$3.j;
        var $x_16 = s$proxy8.dv.buffer;
        $x_18.writeBuffer($x_17, 0.0, $x_16);
        var bb$4 = b$3;
      }
      while (((Bindable_this$7.an.length | 0) <= idx$6)) {
        Bindable_this$7.an.push(null);
      }
      Bindable_this$7.an[idx$6] = bb$4;
      i = ((1 + i) | 0);
    }
    var layers$1 = [Bindable_this, Bindable_this$4];
    var panel = this.b3.by(width, height, (void 0), (void 0), (void 0), (void 0), true, (void 0), (void 0), (void 0), (void 0), (void 0), layers$1);
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(this.b3, panel);
    return panel;
  }
});
var $d_Lsketchlib_utils_room_Hanging = new $TypeData().i($c_Lsketchlib_utils_room_Hanging, "sketchlib.utils.room.Hanging", ({
  dv: 1
}));
function $p_Lsketchlib_utils_room_Hanging$package$__v$1__D__D__D__D__D__T2($thiz, x, y, z, u, w) {
  return new $c_T2(new $c_Ltrivalibs_graphics_math_cpu_Vec3(x, y, z), new $c_Ltrivalibs_graphics_math_cpu_Vec2(u, w));
}
/** @constructor */
function $c_Lsketchlib_utils_room_Hanging$package$() {
}
$p = $c_Lsketchlib_utils_room_Hanging$package$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_Hanging$package$;
/** @constructor */
function $h_Lsketchlib_utils_room_Hanging$package$() {
}
$h_Lsketchlib_utils_room_Hanging$package$.prototype = $p;
$p.rw = (function(uv, rect, fade, dropMul, botFadeMul) {
  var hx = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().gW(rect);
  var hy = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().i8(rect);
  var dx = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bR($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().aA(uv), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().aA(rect));
  var dy = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bR($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bR($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().ae(uv), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().ae(rect)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().O($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().ae(fade), dropMul));
  var hMask = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().fT($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().nN(dx), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aN(hx, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().O($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().aA(fade), 0.5)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bR(hx, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().O($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().aA(fade), 0.5)));
  var upperFade = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().aA(fade);
  var lowerFade = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().O($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().ae(fade), botFadeMul);
  var upper = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().fT(dy, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bR($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().kH(hy), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().O(upperFade, 0.5)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aN($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().kH(hy), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().O(upperFade, 0.5)));
  var lower = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().fT(dy, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aN(hy, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().O(lowerFade, 0.5)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bR(hy, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().O(lowerFade, 0.5)));
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bu($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bu(hMask, upper), lower);
});
$p.pQ = (function(spec, p) {
  var hw = (0.5 * spec.bK);
  var hh = (0.5 * spec.bJ);
  var hd = (0.5 * spec.br);
  var p$proxy1 = (spec.br / (spec.fD * spec.bK));
  var mu = ((p$proxy1 < 0.0) ? 0.0 : ((p$proxy1 > 0.45) ? 0.45 : p$proxy1));
  var p$proxy2 = (spec.br / (spec.fD * spec.bJ));
  var mv = ((p$proxy2 < 0.0) ? 0.0 : ((p$proxy2 > 0.45) ? 0.45 : p$proxy2));
  var mesh$proxy1 = $m_Ltrivalibs_graphics_geometry_Mesh$().nP([$m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bv($p_Lsketchlib_utils_room_Hanging$package$__v$1__D__D__D__D__D__T2(this, (-hw), hh, hd, mu, mv), $p_Lsketchlib_utils_room_Hanging$package$__v$1__D__D__D__D__D__T2(this, (-hw), (-hh), hd, mu, (1.0 - mv)), $p_Lsketchlib_utils_room_Hanging$package$__v$1__D__D__D__D__D__T2(this, hw, (-hh), hd, (1.0 - mu), (1.0 - mv)), $p_Lsketchlib_utils_room_Hanging$package$__v$1__D__D__D__D__D__T2(this, hw, hh, hd, (1.0 - mu), mv)), $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bv($p_Lsketchlib_utils_room_Hanging$package$__v$1__D__D__D__D__D__T2(this, hw, hh, hd, (1.0 - mu), mv), $p_Lsketchlib_utils_room_Hanging$package$__v$1__D__D__D__D__D__T2(this, hw, (-hh), hd, (1.0 - mu), (1.0 - mv)), $p_Lsketchlib_utils_room_Hanging$package$__v$1__D__D__D__D__D__T2(this, hw, (-hh), (-hd), 1.0, (1.0 - mv)), $p_Lsketchlib_utils_room_Hanging$package$__v$1__D__D__D__D__D__T2(this, hw, hh, (-hd), 1.0, mv)), $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bv($p_Lsketchlib_utils_room_Hanging$package$__v$1__D__D__D__D__D__T2(this, (-hw), hh, hd, mu, mv), $p_Lsketchlib_utils_room_Hanging$package$__v$1__D__D__D__D__D__T2(this, (-hw), (-hh), hd, mu, (1.0 - mv)), $p_Lsketchlib_utils_room_Hanging$package$__v$1__D__D__D__D__D__T2(this, (-hw), (-hh), (-hd), 0.0, (1.0 - mv)), $p_Lsketchlib_utils_room_Hanging$package$__v$1__D__D__D__D__D__T2(this, (-hw), hh, (-hd), 0.0, mv)), $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bv($p_Lsketchlib_utils_room_Hanging$package$__v$1__D__D__D__D__D__T2(this, (-hw), hh, hd, mu, mv), $p_Lsketchlib_utils_room_Hanging$package$__v$1__D__D__D__D__D__T2(this, hw, hh, hd, (1.0 - mu), mv), $p_Lsketchlib_utils_room_Hanging$package$__v$1__D__D__D__D__D__T2(this, hw, hh, (-hd), (1.0 - mu), 0.0), $p_Lsketchlib_utils_room_Hanging$package$__v$1__D__D__D__D__D__T2(this, (-hw), hh, (-hd), mu, 0.0)), $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bv($p_Lsketchlib_utils_room_Hanging$package$__v$1__D__D__D__D__D__T2(this, (-hw), (-hh), hd, mu, (1.0 - mv)), $p_Lsketchlib_utils_room_Hanging$package$__v$1__D__D__D__D__D__T2(this, hw, (-hh), hd, (1.0 - mu), (1.0 - mv)), $p_Lsketchlib_utils_room_Hanging$package$__v$1__D__D__D__D__D__T2(this, hw, (-hh), (-hd), (1.0 - mu), 1.0), $p_Lsketchlib_utils_room_Hanging$package$__v$1__D__D__D__D__D__T2(this, (-hw), (-hh), (-hd), mu, 1.0)), $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bv($p_Lsketchlib_utils_room_Hanging$package$__v$1__D__D__D__D__D__T2(this, (-hw), hh, (-hd), 0.0, 0.0), $p_Lsketchlib_utils_room_Hanging$package$__v$1__D__D__D__D__D__T2(this, (-hw), (-hh), (-hd), 0.0, 1.0), $p_Lsketchlib_utils_room_Hanging$package$__v$1__D__D__D__D__D__T2(this, hw, (-hh), (-hd), 1.0, 1.0), $p_Lsketchlib_utils_room_Hanging$package$__v$1__D__D__D__D__D__T2(this, hw, hh, (-hd), 1.0, 0.0))], null, 0, new $c_Ltrivalibs_graphics_geometry_package$package$$anon$1(0));
  var vl = new $c_Ltrivalibs_graphics_geometry_VertexLayout$named(new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$(), new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$(), $m_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$())));
  var f = ((v$3, ref$3) => {
    var values$proxy1 = vl.jt.fV(v$3);
    var baseOffset$proxy1 = (ref$3.off | 0);
    var nestedValues = values$proxy1.o(0);
    var value = nestedValues.o(0);
    ref$3.dv.setFloat32(baseOffset$proxy1, Math.fround(value), true);
    var tailOffset = ((4 + baseOffset$proxy1) | 0);
    var value$2 = nestedValues.o(1);
    ref$3.dv.setFloat32(tailOffset, Math.fround(value$2), true);
    var tailOffset$2 = ((4 + tailOffset) | 0);
    var value$3 = nestedValues.o(2);
    ref$3.dv.setFloat32(tailOffset$2, Math.fround(value$3), true);
    var tailOffset$4 = ((12 + baseOffset$proxy1) | 0);
    var nestedValues$2 = values$proxy1.o(1);
    var value$4 = nestedValues$2.o(0);
    ref$3.dv.setFloat32(tailOffset$4, Math.fround(value$4), true);
    var tailOffset$5 = ((4 + tailOffset$4) | 0);
    var value$5 = nestedValues$2.o(1);
    ref$3.dv.setFloat32(tailOffset$5, Math.fround(value$5), true);
  });
  var \u03b4proxy2 = $m_Ltrivalibs_graphics_geometry_buffers$package$();
  var vertexCount = 0;
  var hasQuads = false;
  var fi = 0;
  while ((fi < (mesh$proxy1.a8.length | 0))) {
    var n = (mesh$proxy1.a8[fi].length | 0);
    vertexCount = ((vertexCount + n) | 0);
    if ((n === 4)) {
      hasQuads = true;
    }
    fi = ((1 + fi) | 0);
  }
  var count$proxy6 = vertexCount;
  var buffer = new ArrayBuffer(Math.imul(20, count$proxy6));
  var verts = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), count$proxy6);
  var vi = 0;
  if ((!hasQuads)) {
    fi = 0;
    while ((fi < (mesh$proxy1.a8.length | 0))) {
      var arr = mesh$proxy1.a8[fi];
      var si = 0;
      while ((si < (arr.length | 0))) {
        var x0 = arr[si];
        var index$proxy1 = vi;
        var offset$proxy6 = Math.imul(20, index$proxy1);
        var x1 = new ($a_Ltrivalibs_bufferdata_BufferView())(verts.dv, offset$proxy6);
        f(x0, x1);
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
    while ((fi < (mesh$proxy1.a8.length | 0))) {
      var arr$2 = mesh$proxy1.a8[fi];
      var n$2 = (arr$2.length | 0);
      var si$2 = 0;
      while ((si$2 < n$2)) {
        var x0$1 = arr$2[si$2];
        var index$proxy2 = vi;
        var offset$proxy7 = Math.imul(20, index$proxy2);
        var x1$1 = new ($a_Ltrivalibs_bufferdata_BufferView())(verts.dv, offset$proxy7);
        f(x0$1, x1$1);
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
    var $x_1 = new $c_Ltrivalibs_graphics_geometry_BufferedGeometry(verts, \u03b4proxy2.ot(idxBuf, vertexCount));
  }
  return p.o6($x_1, (void 0), (void 0), (void 0), (void 0), (void 0));
});
var $d_Lsketchlib_utils_room_Hanging$package$ = new $TypeData().i($c_Lsketchlib_utils_room_Hanging$package$, "sketchlib.utils.room.Hanging$package$", ({
  dw: 1
}));
var $n_Lsketchlib_utils_room_Hanging$package$;
function $m_Lsketchlib_utils_room_Hanging$package$() {
  if ((!$n_Lsketchlib_utils_room_Hanging$package$)) {
    $n_Lsketchlib_utils_room_Hanging$package$ = new $c_Lsketchlib_utils_room_Hanging$package$();
  }
  return $n_Lsketchlib_utils_room_Hanging$package$;
}
function $p_Lsketchlib_utils_room_Surfaces$package$__c$1__D__D__D__D__D__D__D__T2($thiz, y$1, x0$1, w$1, z1$1, d$1, x, z) {
  return new $c_T2(new $c_Ltrivalibs_graphics_math_cpu_Vec3(x, y$1, z), new $c_Ltrivalibs_graphics_math_cpu_Vec2(((x - x0$1) / w$1), ((z1$1 - z) / d$1)));
}
/** @constructor */
function $c_Lsketchlib_utils_room_Surfaces$package$() {
}
$p = $c_Lsketchlib_utils_room_Surfaces$package$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_Surfaces$package$;
/** @constructor */
function $h_Lsketchlib_utils_room_Surfaces$package$() {
}
$h_Lsketchlib_utils_room_Surfaces$package$.prototype = $p;
$p.oy = (function(bounds, y, faceUp, margin) {
  var x0 = ((+bounds.b0) - margin);
  var x1 = ((+bounds.be) + margin);
  var z0 = ((+bounds.bd) - margin);
  var z1 = ((+bounds.bf) + margin);
  var w = (x1 - x0);
  var d = (z1 - z0);
  return (faceUp ? $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bv($p_Lsketchlib_utils_room_Surfaces$package$__c$1__D__D__D__D__D__D__D__T2(this, y, x0, w, z1, d, x0, z0), $p_Lsketchlib_utils_room_Surfaces$package$__c$1__D__D__D__D__D__D__D__T2(this, y, x0, w, z1, d, x0, z1), $p_Lsketchlib_utils_room_Surfaces$package$__c$1__D__D__D__D__D__D__D__T2(this, y, x0, w, z1, d, x1, z1), $p_Lsketchlib_utils_room_Surfaces$package$__c$1__D__D__D__D__D__D__D__T2(this, y, x0, w, z1, d, x1, z0)) : $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bv($p_Lsketchlib_utils_room_Surfaces$package$__c$1__D__D__D__D__D__D__D__T2(this, y, x0, w, z1, d, x0, z1), $p_Lsketchlib_utils_room_Surfaces$package$__c$1__D__D__D__D__D__D__D__T2(this, y, x0, w, z1, d, x0, z0), $p_Lsketchlib_utils_room_Surfaces$package$__c$1__D__D__D__D__D__D__D__T2(this, y, x0, w, z1, d, x1, z0), $p_Lsketchlib_utils_room_Surfaces$package$__c$1__D__D__D__D__D__D__D__T2(this, y, x0, w, z1, d, x1, z1)));
});
var $d_Lsketchlib_utils_room_Surfaces$package$ = new $TypeData().i($c_Lsketchlib_utils_room_Surfaces$package$, "sketchlib.utils.room.Surfaces$package$", ({
  dy: 1
}));
var $n_Lsketchlib_utils_room_Surfaces$package$;
function $m_Lsketchlib_utils_room_Surfaces$package$() {
  if ((!$n_Lsketchlib_utils_room_Surfaces$package$)) {
    $n_Lsketchlib_utils_room_Surfaces$package$ = new $c_Lsketchlib_utils_room_Surfaces$package$();
  }
  return $n_Lsketchlib_utils_room_Surfaces$package$;
}
function $p_Lsketchlib_utils_room_Walls$package$__corner$1__Lsketchlib_utils_room_Wall__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__D__T2($thiz, w$1, right$1, su, sv, u, v) {
  return new $c_T2($f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a7(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a7(), w$1.fE, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a7(), right$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), (0.5 * (su * w$1.aT)))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a7(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), (0.5 * (sv * w$1.b4)))), new $c_Ltrivalibs_graphics_math_cpu_Vec2(u, v));
}
/** @constructor */
function $c_Lsketchlib_utils_room_Walls$package$() {
}
$p = $c_Lsketchlib_utils_room_Walls$package$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_Walls$package$;
/** @constructor */
function $h_Lsketchlib_utils_room_Walls$package$() {
}
$h_Lsketchlib_utils_room_Walls$package$.prototype = $p;
$p.rn = (function(w) {
  var y = w.b5.F;
  var x = w.b5.D;
  return (+Math.atan2(y, x));
});
$p.rd = (function(w) {
  var right = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a7(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), w.b5);
  return $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bv($p_Lsketchlib_utils_room_Walls$package$__corner$1__Lsketchlib_utils_room_Wall__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__D__T2(this, w, right, (-1.0), 1.0, 0.0, 0.0), $p_Lsketchlib_utils_room_Walls$package$__corner$1__Lsketchlib_utils_room_Wall__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__D__T2(this, w, right, (-1.0), (-1.0), 0.0, 1.0), $p_Lsketchlib_utils_room_Walls$package$__corner$1__Lsketchlib_utils_room_Wall__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__D__T2(this, w, right, 1.0, (-1.0), 1.0, 1.0), $p_Lsketchlib_utils_room_Walls$package$__corner$1__Lsketchlib_utils_room_Wall__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__D__T2(this, w, right, 1.0, 1.0, 1.0, 0.0));
});
$p.r0 = (function(w, fromLeft, height) {
  var right = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a7(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), w.b5);
  return $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a7(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a7(), w.fE, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a7(), right, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), (fromLeft - (0.5 * w.aT)))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a7(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), (height - (0.5 * w.b4))));
});
$p.s0 = (function(bnd, topY) {
  var edges = bnd.gl;
  var out = [];
  var i = 0;
  while ((i < (edges.length | 0))) {
    var e = edges[i];
    var dx = (e.aD.p - e.a3.p);
    var dz = (e.aD.n - e.a3.n);
    var $x_1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((0.5 * (e.a3.p + e.aD.p)), (0.5 * topY), (0.5 * (e.a3.n + e.aD.n)));
    var p$proxy1 = ((dx * dx) + (dz * dz));
    out.push(new $c_Lsketchlib_utils_room_Wall($x_1, (+Math.sqrt(p$proxy1)), topY, new $c_Ltrivalibs_graphics_math_cpu_Vec3(e.bq.p, 0.0, e.bq.n)));
    i = ((1 + i) | 0);
  }
  return out;
});
var $d_Lsketchlib_utils_room_Walls$package$ = new $TypeData().i($c_Lsketchlib_utils_room_Walls$package$, "sketchlib.utils.room.Walls$package$", ({
  dz: 1
}));
var $n_Lsketchlib_utils_room_Walls$package$;
function $m_Lsketchlib_utils_room_Walls$package$() {
  if ((!$n_Lsketchlib_utils_room_Walls$package$)) {
    $n_Lsketchlib_utils_room_Walls$package$ = new $c_Lsketchlib_utils_room_Walls$package$();
  }
  return $n_Lsketchlib_utils_room_Walls$package$;
}
/** @constructor */
function $c_Ltrivalibs_dev_DevHandle(resetFn) {
}
$p = $c_Ltrivalibs_dev_DevHandle.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_dev_DevHandle;
/** @constructor */
function $h_Ltrivalibs_dev_DevHandle() {
}
$h_Ltrivalibs_dev_DevHandle.prototype = $p;
var $d_Ltrivalibs_dev_DevHandle = new $TypeData().i($c_Ltrivalibs_dev_DevHandle, "trivalibs.dev.DevHandle", ({
  dA: 1
}));
/** @constructor */
function $c_Ltrivalibs_dev_dev$package$() {
  this.gt = null;
  this.jr = false;
  $n_Ltrivalibs_dev_dev$package$ = this;
  this.gt = [];
  this.jr = false;
}
$p = $c_Ltrivalibs_dev_dev$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_dev_dev$package$;
/** @constructor */
function $h_Ltrivalibs_dev_dev$package$() {
}
$h_Ltrivalibs_dev_dev$package$.prototype = $p;
$p.o2 = (function() {
  return (import.meta.hot !== (void 0));
});
$p.qL = (function() {
  var u = import.meta.url;
  var end = (u.indexOf("?") | 0);
  if ((end < 0)) {
    end = (u.indexOf("#") | 0);
  }
  if ((end >= 0)) {
    var endIndex = end;
    return u.substring(0, endIndex);
  } else {
    return u;
  }
});
$p.rI = (function(label) {
  return ((("trivalibs:dev:" + $m_Ltrivalibs_dev_dev$package$().qL()) + ":") + label);
});
$p.ky = (function() {
  return window.sessionStorage;
});
$p.re = (function(key) {
  var raw = $m_Ltrivalibs_dev_dev$package$().ky().getItem(key);
  if ((raw === null)) {
    return null;
  } else {
    try {
      return JSON.parse(raw);
    } catch (e) {
      return null;
    }
  }
});
$p.s4 = (function(key, json) {
  $m_Ltrivalibs_dev_dev$package$().ky().setItem(key, JSON.stringify(json));
});
$p.rk = (function(key) {
  $m_Ltrivalibs_dev_dev$package$().ky().removeItem(key);
});
$p.pF = (function() {
  if ((!$m_Ltrivalibs_dev_dev$package$().jr)) {
    $m_Ltrivalibs_dev_dev$package$().jr = true;
    window.addEventListener("pagehide", ((_$1$2) => {
      var i = 0;
      while ((i < ($m_Ltrivalibs_dev_dev$package$().gt.length | 0))) {
        $m_Ltrivalibs_dev_dev$package$().gt[i].hH();
        i = ((1 + i) | 0);
      }
    }));
  }
});
$p.rh = (function(flush) {
  $m_Ltrivalibs_dev_dev$package$().pF();
  $m_Ltrivalibs_dev_dev$package$().gt.push(flush);
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    var idx = $m_sjs_js_ArrayOps$().ob($m_Ltrivalibs_dev_dev$package$().gt, flush, 0);
    if ((idx >= 0)) {
      $m_Ltrivalibs_dev_dev$package$().gt.splice(idx, 1);
    }
  }));
});
var $d_Ltrivalibs_dev_dev$package$ = new $TypeData().i($c_Ltrivalibs_dev_dev$package$, "trivalibs.dev.dev$package$", ({
  dB: 1
}));
var $n_Ltrivalibs_dev_dev$package$;
function $m_Ltrivalibs_dev_dev$package$() {
  if ((!$n_Ltrivalibs_dev_dev$package$)) {
    $n_Ltrivalibs_dev_dev$package$ = new $c_Ltrivalibs_dev_dev$package$();
  }
  return $n_Ltrivalibs_dev_dev$package$;
}
function $p_Ltrivalibs_dev_devPreserve$__encodeCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any($thiz, cam) {
  return [cam.a5.F, cam.a5.G, cam.a5.D, cam.aL, cam.bt];
}
function $p_Ltrivalibs_dev_devPreserve$__applyCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any__V($thiz, cam, json) {
  if ((!(!Array.isArray(json)))) {
    if (((json.length | 0) >= 5)) {
      var pos$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((+json[0]), (+json[1]), (+json[2]));
      var rotH$1 = (+json[3]);
      var rotV$1 = (+json[4]);
      var fov$1 = cam.bs;
      var aspect$1 = cam.fM;
      var near$1 = cam.gG;
      var far$1 = cam.gF;
      cam.kx(fov$1, aspect$1, near$1, far$1, rotH$1, rotV$1, pos$1);
    }
  }
}
/** @constructor */
function $c_Ltrivalibs_dev_devPreserve$() {
}
$p = $c_Ltrivalibs_dev_devPreserve$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_dev_devPreserve$;
/** @constructor */
function $h_Ltrivalibs_dev_devPreserve$() {
}
$h_Ltrivalibs_dev_devPreserve$.prototype = $p;
$p.p9 = (function(cam, label) {
  if ((!$m_Ltrivalibs_dev_dev$package$().o2())) {
    return new $c_Ltrivalibs_dev_DevHandle(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => (void 0))));
  } else {
    var sk = $m_Ltrivalibs_dev_dev$package$().rI(label);
    var initPos = cam.a5;
    var initRotH = cam.aL;
    var initRotV = cam.bt;
    var stored = $m_Ltrivalibs_dev_dev$package$().re(sk);
    if ((stored !== null)) {
      $p_Ltrivalibs_dev_devPreserve$__applyCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any__V(this, cam, stored);
    }
    return new $c_Ltrivalibs_dev_DevHandle(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(((unregister) => (() => {
      unregister.hH();
      $m_Ltrivalibs_dev_dev$package$().rk(sk);
      var fov$proxy1 = cam.bs;
      var aspect$proxy1 = cam.fM;
      var near$proxy1 = cam.gG;
      var far$proxy1 = cam.gF;
      cam.kx(fov$proxy1, aspect$proxy1, near$proxy1, far$proxy1, initRotH, initRotV, initPos);
    }))($m_Ltrivalibs_dev_dev$package$().rh(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
      $m_Ltrivalibs_dev_dev$package$().s4(sk, $p_Ltrivalibs_dev_devPreserve$__encodeCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any(this, cam));
    }))))));
  }
});
var $d_Ltrivalibs_dev_devPreserve$ = new $TypeData().i($c_Ltrivalibs_dev_devPreserve$, "trivalibs.dev.devPreserve$", ({
  dC: 1
}));
var $n_Ltrivalibs_dev_devPreserve$;
function $m_Ltrivalibs_dev_devPreserve$() {
  if ((!$n_Ltrivalibs_dev_devPreserve$)) {
    $n_Ltrivalibs_dev_devPreserve$ = new $c_Ltrivalibs_dev_devPreserve$();
  }
  return $n_Ltrivalibs_dev_devPreserve$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_BufferBinding(buffer, device, uv) {
  this.j = null;
  this.B = null;
  this.C = null;
  this.A = null;
  this.j = buffer;
  this.B = device;
  this.C = uv;
  var b = (buffer.dv.byteLength | 0);
  var value = ((b < 16) ? 16 : b);
  var $x_1 = device.createBuffer(({
    "size": value,
    "usage": 72
  }));
  this.A = $x_1;
}
$p = $c_Ltrivalibs_graphics_buffers_BufferBinding.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_BufferBinding;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_BufferBinding() {
}
$h_Ltrivalibs_graphics_buffers_BufferBinding.prototype = $p;
function $isArrayOf_Ltrivalibs_graphics_buffers_BufferBinding(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aR)));
}
var $d_Ltrivalibs_graphics_buffers_BufferBinding = new $TypeData().i($c_Ltrivalibs_graphics_buffers_BufferBinding, "trivalibs.graphics.buffers.BufferBinding", ({
  aR: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_BufferedGeometry(vertices, indices) {
  this.js = null;
  this.ij = null;
  this.js = vertices;
  this.ij = indices;
}
$p = $c_Ltrivalibs_graphics_geometry_BufferedGeometry.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_BufferedGeometry;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_BufferedGeometry() {
}
$h_Ltrivalibs_graphics_geometry_BufferedGeometry.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_BufferedGeometry = new $TypeData().i($c_Ltrivalibs_graphics_geometry_BufferedGeometry, "trivalibs.graphics.geometry.BufferedGeometry", ({
  dK: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_FaceData(normal, section) {
  this.he = null;
  this.oO = 0;
  this.he = normal;
  this.oO = section;
}
$p = $c_Ltrivalibs_graphics_geometry_FaceData.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_FaceData;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_FaceData() {
}
$h_Ltrivalibs_graphics_geometry_FaceData.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_FaceData = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FaceData, "trivalibs.graphics.geometry.FaceData", ({
  dL: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Mesh(evidence$1) {
  this.hf = null;
  this.a8 = null;
  this.gu = null;
  this.il = null;
  this.ik = null;
  this.hf = evidence$1;
  this.a8 = [];
  this.gu = [];
  this.il = [];
  this.ik = ({});
}
$p = $c_Ltrivalibs_graphics_geometry_Mesh.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Mesh;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Mesh() {
}
$h_Ltrivalibs_graphics_geometry_Mesh.prototype = $p;
$p.oX = (function(face, normal, section) {
  var faceIdx = (this.a8.length | 0);
  this.a8.push(face);
  this.gu.push(new $c_Ltrivalibs_graphics_geometry_FaceData(normal, section));
  var n = (face.length | 0);
  var slot = 0;
  while ((slot < n)) {
    var v = face[slot];
    var key = $m_Ltrivalibs_graphics_geometry_package$package$().r4(this.hf.bz(v));
    if ($m_sjs_js_Any$ObjectCompanionOps$().q0(Object, this.ik, key)) {
      var $x_2 = this.il;
      var dict = this.ik;
      if ((!(!(!$m_sjs_js_WrappedDictionary$Cache$().la.call(dict, key))))) {
        throw new $c_ju_NoSuchElementException(("key not found: " + key));
      }
      var $x_1 = $x_2[(dict[key] | 0)];
      $x_1.lW.push(new $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIdx, slot));
    } else {
      var idx = (this.il.length | 0);
      var dict$1 = this.ik;
      dict$1[key] = idx;
      this.il.push(new $c_Ltrivalibs_graphics_geometry_VertexPosition(this.hf.bz(v), [new $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIdx, slot)]));
    }
    slot = ((1 + slot) | 0);
  }
});
$p.pE = (function() {
  var hasQuads = false;
  var i = 0;
  while ((i < (this.a8.length | 0))) {
    var arr = this.a8[i];
    if ((this.gu[i].he === null)) {
      var $x_2 = this.gu[i];
      if (((arr.length | 0) === 3)) {
        var $x_1 = $m_Ltrivalibs_graphics_geometry_polygon$package$Triangle$().kv(this.a8[i], this.hf);
      } else {
        hasQuads = true;
        var $x_1 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().kv(this.a8[i], this.hf);
      }
      $x_2.he = $x_1;
    }
    i = ((1 + i) | 0);
  }
  return hasQuads;
});
var $d_Ltrivalibs_graphics_geometry_Mesh = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Mesh, "trivalibs.graphics.geometry.Mesh", ({
  dO: 1
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
$p.nP = (function(faces, normal, section, evidence$1) {
  var m = new $c_Ltrivalibs_graphics_geometry_Mesh(evidence$1);
  $m_Ltrivalibs_graphics_geometry_mesh$package$().oY(m, faces, normal, section, evidence$1);
  return m;
});
var $d_Ltrivalibs_graphics_geometry_Mesh$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Mesh$, "trivalibs.graphics.geometry.Mesh$", ({
  dP: 1
}));
var $n_Ltrivalibs_graphics_geometry_Mesh$;
function $m_Ltrivalibs_graphics_geometry_Mesh$() {
  if ((!$n_Ltrivalibs_graphics_geometry_Mesh$)) {
    $n_Ltrivalibs_graphics_geometry_Mesh$ = new $c_Ltrivalibs_graphics_geometry_Mesh$();
  }
  return $n_Ltrivalibs_graphics_geometry_Mesh$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Plane(normal, d) {
  this.hh = null;
  this.hg = 0.0;
  this.hh = normal;
  this.hg = d;
}
$p = $c_Ltrivalibs_graphics_geometry_Plane.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Plane;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Plane() {
}
$h_Ltrivalibs_graphics_geometry_Plane.prototype = $p;
$p.rg = (function() {
  var a = this.hh.F;
  var b = this.hh.G;
  var c = this.hh.D;
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4((1.0 - ((2.0 * a) * a)), (((-2.0) * a) * b), (((-2.0) * a) * c), 0.0, (((-2.0) * a) * b), (1.0 - ((2.0 * b) * b)), (((-2.0) * b) * c), 0.0, (((-2.0) * a) * c), (((-2.0) * b) * c), (1.0 - ((2.0 * c) * c)), 0.0, ((2.0 * a) * this.hg), ((2.0 * b) * this.hg), ((2.0 * c) * this.hg), 1.0);
});
var $d_Ltrivalibs_graphics_geometry_Plane = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Plane, "trivalibs.graphics.geometry.Plane", ({
  dQ: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Plane$() {
  this.lT = null;
  $n_Ltrivalibs_graphics_geometry_Plane$ = this;
  this.lT = new $c_Ltrivalibs_graphics_geometry_Plane(new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), 0.0);
}
$p = $c_Ltrivalibs_graphics_geometry_Plane$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Plane$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Plane$() {
}
$h_Ltrivalibs_graphics_geometry_Plane$.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_Plane$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Plane$, "trivalibs.graphics.geometry.Plane$", ({
  dR: 1
}));
var $n_Ltrivalibs_graphics_geometry_Plane$;
function $m_Ltrivalibs_graphics_geometry_Plane$() {
  if ((!$n_Ltrivalibs_graphics_geometry_Plane$)) {
    $n_Ltrivalibs_graphics_geometry_Plane$ = new $c_Ltrivalibs_graphics_geometry_Plane$();
  }
  return $n_Ltrivalibs_graphics_geometry_Plane$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIndex, vertexSlot) {
  this.oP = 0;
  this.oQ = 0;
  this.oP = faceIndex;
  this.oQ = vertexSlot;
}
$p = $c_Ltrivalibs_graphics_geometry_PositionFaceRef.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_PositionFaceRef;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_PositionFaceRef() {
}
$h_Ltrivalibs_graphics_geometry_PositionFaceRef.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_PositionFaceRef = new $TypeData().i($c_Ltrivalibs_graphics_geometry_PositionFaceRef, "trivalibs.graphics.geometry.PositionFaceRef", ({
  dT: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexPosition(position, faces) {
  this.oR = null;
  this.lW = null;
  this.oR = position;
  this.lW = faces;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexPosition.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexPosition;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexPosition() {
}
$h_Ltrivalibs_graphics_geometry_VertexPosition.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_VertexPosition = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexPosition, "trivalibs.graphics.geometry.VertexPosition", ({
  dY: 1
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
$p.ot = (function(idxBuf, vertexCount) {
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
  dZ: 1
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
$p.oY = (function(m, faces, normal, section, evidence$1) {
  var i = 0;
  while ((i < (faces.length | 0))) {
    m.oX(faces[i], normal, section);
    i = ((1 + i) | 0);
  }
});
var $d_Ltrivalibs_graphics_geometry_mesh$package$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_mesh$package$, "trivalibs.graphics.geometry.mesh$package$", ({
  e0: 1
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
$p.r4 = (function(v) {
  return (((($doubleToInt((10000.0 * v.F)) + ",") + $doubleToInt((10000.0 * v.G))) + ",") + $doubleToInt((10000.0 * v.D)));
});
var $d_Ltrivalibs_graphics_geometry_package$package$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_package$package$, "trivalibs.graphics.geometry.package$package$", ({
  e1: 1
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
$p.bv = (function(tl, bl, br, tr) {
  return [tl, bl, br, tr];
});
$p.rP = (function(q, evidence$1) {
  return q[0];
});
$p.pg = (function(q, evidence$1) {
  return q[1];
});
$p.pk = (function(q, evidence$1) {
  return q[2];
});
$p.rS = (function(q, evidence$1) {
  return q[3];
});
$p.kv = (function(q, evidence$1) {
  var a = evidence$1.bz(this.rP(q, evidence$1));
  var b = evidence$1.bz(this.pg(q, evidence$1));
  var c = evidence$1.bz(this.pk(q, evidence$1));
  var d = evidence$1.bz(this.rS(q, evidence$1));
  var d1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((c.F - a.F), (c.G - a.G), (c.D - a.D));
  var d2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((d.F - b.F), (d.G - b.G), (d.D - b.D));
  return $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a7(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a7(), d1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), d2), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
});
var $d_Ltrivalibs_graphics_geometry_polygon$package$Quad$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_polygon$package$Quad$, "trivalibs.graphics.geometry.polygon$package$Quad$", ({
  e3: 1
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
$p.oV = (function(tri, evidence$1) {
  return tri[0];
});
$p.pd = (function(tri, evidence$1) {
  return tri[1];
});
$p.pl = (function(tri, evidence$1) {
  return tri[2];
});
$p.kv = (function(tri, evidence$1) {
  var pa = evidence$1.bz(this.oV(tri, evidence$1));
  var pb = evidence$1.bz(this.pd(tri, evidence$1));
  var pc = evidence$1.bz(this.pl(tri, evidence$1));
  var e1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((pb.F - pa.F), (pb.G - pa.G), (pb.D - pa.D));
  var e2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((pc.F - pa.F), (pc.G - pa.G), (pc.D - pa.D));
  return $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a7(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a7(), e1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), e2), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
});
var $d_Ltrivalibs_graphics_geometry_polygon$package$Triangle$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_polygon$package$Triangle$, "trivalibs.graphics.geometry.polygon$package$Triangle$", ({
  e4: 1
}));
var $n_Ltrivalibs_graphics_geometry_polygon$package$Triangle$;
function $m_Ltrivalibs_graphics_geometry_polygon$package$Triangle$() {
  if ((!$n_Ltrivalibs_graphics_geometry_polygon$package$Triangle$)) {
    $n_Ltrivalibs_graphics_geometry_polygon$package$Triangle$ = new $c_Ltrivalibs_graphics_geometry_polygon$package$Triangle$();
  }
  return $n_Ltrivalibs_graphics_geometry_polygon$package$Triangle$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_lib_args$package$() {
}
$p = $c_Ltrivalibs_graphics_lib_args$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_lib_args$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_lib_args$package$() {
}
$h_Ltrivalibs_graphics_lib_args$package$.prototype = $p;
$p.rQ = (function(x) {
  if ($isInt(x)) {
    var i = (x | 0);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), ("" + i));
  } else {
    return x;
  }
});
var $d_Ltrivalibs_graphics_lib_args$package$ = new $TypeData().i($c_Ltrivalibs_graphics_lib_args$package$, "trivalibs.graphics.lib.args$package$", ({
  e5: 1
}));
var $n_Ltrivalibs_graphics_lib_args$package$;
function $m_Ltrivalibs_graphics_lib_args$package$() {
  if ((!$n_Ltrivalibs_graphics_lib_args$package$)) {
    $n_Ltrivalibs_graphics_lib_args$package$ = new $c_Ltrivalibs_graphics_lib_args$package$();
  }
  return $n_Ltrivalibs_graphics_lib_args$package$;
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($thiz, fovY, aspect, near, far) {
  var x = (0.5 * fovY);
  var f = (1.0 / (+Math.tan(x)));
  var rInv = (1.0 / (near - far));
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4((f / aspect), 0.0, 0.0, 0.0, 0.0, f, 0.0, 0.0, 0.0, 0.0, (far * rInv), (-1.0), 0.0, 0.0, ((near * far) * rInv), 0.0);
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($thiz, m, x$2, other) {
  var a00 = (+x$2.hL(m));
  var a01 = (+x$2.hM(m));
  var a02 = (+x$2.hN(m));
  var a03 = (+x$2.hO(m));
  var a10 = (+x$2.hP(m));
  var a11 = (+x$2.hQ(m));
  var a12 = (+x$2.hR(m));
  var a13 = (+x$2.hS(m));
  var a20 = (+x$2.hT(m));
  var a21 = (+x$2.hU(m));
  var a22 = (+x$2.hV(m));
  var a23 = (+x$2.hW(m));
  var a30 = (+x$2.hX(m));
  var a31 = (+x$2.hY(m));
  var a32 = (+x$2.hZ(m));
  var a33 = (+x$2.i0(m));
  var b00 = (+x$2.hL(other));
  var b01 = (+x$2.hM(other));
  var b02 = (+x$2.hN(other));
  var b03 = (+x$2.hO(other));
  var b10 = (+x$2.hP(other));
  var b11 = (+x$2.hQ(other));
  var b12 = (+x$2.hR(other));
  var b13 = (+x$2.hS(other));
  var b20 = (+x$2.hT(other));
  var b21 = (+x$2.hU(other));
  var b22 = (+x$2.hV(other));
  var b23 = (+x$2.hW(other));
  var b30 = (+x$2.hX(other));
  var b31 = (+x$2.hY(other));
  var b32 = (+x$2.hZ(other));
  var b33 = (+x$2.i0(other));
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4(((((a00 * b00) + (a10 * b01)) + (a20 * b02)) + (a30 * b03)), ((((a01 * b00) + (a11 * b01)) + (a21 * b02)) + (a31 * b03)), ((((a02 * b00) + (a12 * b01)) + (a22 * b02)) + (a32 * b03)), ((((a03 * b00) + (a13 * b01)) + (a23 * b02)) + (a33 * b03)), ((((a00 * b10) + (a10 * b11)) + (a20 * b12)) + (a30 * b13)), ((((a01 * b10) + (a11 * b11)) + (a21 * b12)) + (a31 * b13)), ((((a02 * b10) + (a12 * b11)) + (a22 * b12)) + (a32 * b13)), ((((a03 * b10) + (a13 * b11)) + (a23 * b12)) + (a33 * b13)), ((((a00 * b20) + (a10 * b21)) + (a20 * b22)) + (a30 * b23)), ((((a01 * b20) + (a11 * b21)) + (a21 * b22)) + (a31 * b23)), ((((a02 * b20) + (a12 * b21)) + (a22 * b22)) + (a32 * b23)), ((((a03 * b20) + (a13 * b21)) + (a23 * b22)) + (a33 * b23)), ((((a00 * b30) + (a10 * b31)) + (a20 * b32)) + (a30 * b33)), ((((a01 * b30) + (a11 * b31)) + (a21 * b32)) + (a31 * b33)), ((((a02 * b30) + (a12 * b31)) + (a22 * b32)) + (a32 * b33)), ((((a03 * b30) + (a13 * b31)) + (a23 * b32)) + (a33 * b33)));
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($thiz, m, x$2) {
  var a00 = (+x$2.hL(m));
  var a01 = (+x$2.hM(m));
  var a02 = (+x$2.hN(m));
  var a03 = (+x$2.hO(m));
  var a10 = (+x$2.hP(m));
  var a11 = (+x$2.hQ(m));
  var a12 = (+x$2.hR(m));
  var a13 = (+x$2.hS(m));
  var a20 = (+x$2.hT(m));
  var a21 = (+x$2.hU(m));
  var a22 = (+x$2.hV(m));
  var a23 = (+x$2.hW(m));
  var a30 = (+x$2.hX(m));
  var a31 = (+x$2.hY(m));
  var a32 = (+x$2.hZ(m));
  var a33 = (+x$2.i0(m));
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
  mb.od(m, (+x$4.hL(other)));
  mb.oe(m, (+x$4.hM(other)));
  mb.of(m, (+x$4.hN(other)));
  mb.og(m, (+x$4.hO(other)));
  mb.oh(m, (+x$4.hP(other)));
  mb.oi(m, (+x$4.hQ(other)));
  mb.oj(m, (+x$4.hR(other)));
  mb.ok(m, (+x$4.hS(other)));
  mb.ol(m, (+x$4.hT(other)));
  mb.om(m, (+x$4.hU(other)));
  mb.on(m, (+x$4.hV(other)));
  mb.oo(m, (+x$4.hW(other)));
  mb.op(m, (+x$4.hX(other)));
  mb.oq(m, (+x$4.hY(other)));
  mb.or(m, (+x$4.hZ(other)));
  mb.os(m, (+x$4.i0(other)));
}
function $f_Ltrivalibs_graphics_math_Vec2MutableOps__set__O__Ltrivalibs_graphics_math_Vec2Mutable__O__Ltrivalibs_graphics_math_Vec2Base__V($thiz, v, x$2, other, x$4) {
  x$2.gU(v, (+x$4.aG(other)));
  x$2.gV(v, (+x$4.aH(other)));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.F + other.F), (v.G + other.G), (v.D + other.D));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, scalar) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.F * scalar), (v.G * scalar), (v.D * scalar));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__divScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, scalar) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.F / scalar), (v.G / scalar), (v.D / scalar));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3(((v.G * other.D) - (v.D * other.G)), ((v.D * other.F) - (v.F * other.D)), ((v.F * other.G) - (v.G * other.F)));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($thiz, v, x$2) {
  return $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__divScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, $f_Ltrivalibs_graphics_math_Vec3Base__length__O__D(x$2, v));
}
function $f_Ltrivalibs_graphics_math_Vec4MutableOps__set__O__Ltrivalibs_graphics_math_Vec4Mutable__O__Ltrivalibs_graphics_math_Vec4Base__V($thiz, v, x$2, other, x$4) {
  x$2.gU(v, (+x$4.aG(other)));
  x$2.gV(v, (+x$4.aH(other)));
  x$2.kN(v, (+x$4.bc(other)));
  x$2.kI(v, (+x$4.bb(other)));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat4(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  this.ju = 0.0;
  this.jv = 0.0;
  this.jw = 0.0;
  this.jx = 0.0;
  this.jy = 0.0;
  this.jz = 0.0;
  this.jA = 0.0;
  this.jB = 0.0;
  this.jC = 0.0;
  this.jD = 0.0;
  this.jE = 0.0;
  this.jF = 0.0;
  this.jG = 0.0;
  this.jH = 0.0;
  this.jI = 0.0;
  this.jJ = 0.0;
  this.ju = m00;
  this.jv = m01;
  this.jw = m02;
  this.jx = m03;
  this.jy = m10;
  this.jz = m11;
  this.jA = m12;
  this.jB = m13;
  this.jC = m20;
  this.jD = m21;
  this.jE = m22;
  this.jF = m23;
  this.jG = m30;
  this.jH = m31;
  this.jI = m32;
  this.jJ = m33;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Mat4 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4, "trivalibs.graphics.math.cpu.Mat4", ({
  ei: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Quat(x, y, z, w) {
  this.io = 0.0;
  this.ip = 0.0;
  this.iq = 0.0;
  this.im = 0.0;
  this.io = x;
  this.ip = y;
  this.iq = z;
  this.im = w;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Quat.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Quat;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Quat() {
}
$h_Ltrivalibs_graphics_math_cpu_Quat.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Quat = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat, "trivalibs.graphics.math.cpu.Quat", ({
  el: 1
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
$p.pT = (function(angle) {
  var h = (0.5 * angle);
  return new $c_Ltrivalibs_graphics_math_cpu_Quat((+Math.sin(h)), 0.0, 0.0, (+Math.cos(h)));
});
$p.o7 = (function(angle) {
  var h = (0.5 * angle);
  return new $c_Ltrivalibs_graphics_math_cpu_Quat(0.0, (+Math.sin(h)), 0.0, (+Math.cos(h)));
});
var $d_Ltrivalibs_graphics_math_cpu_Quat$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat$, "trivalibs.graphics.math.cpu.Quat$", ({
  em: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Quat$;
function $m_Ltrivalibs_graphics_math_cpu_Quat$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Quat$)) {
    $n_Ltrivalibs_graphics_math_cpu_Quat$ = new $c_Ltrivalibs_graphics_math_cpu_Quat$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Quat$;
}
function $f_Ltrivalibs_graphics_math_cpu_QuatImmutableOps__quatMul__O__Ltrivalibs_graphics_math_Vec4Base__O__O($thiz, q, x$2, p) {
  return new $c_Ltrivalibs_graphics_math_cpu_Quat((((((+x$2.bb(q)) * (+x$2.aG(p))) + ((+x$2.aG(q)) * (+x$2.bb(p)))) + ((+x$2.aH(q)) * (+x$2.bc(p)))) - ((+x$2.bc(q)) * (+x$2.aH(p)))), (((((+x$2.bb(q)) * (+x$2.aH(p))) - ((+x$2.aG(q)) * (+x$2.bc(p)))) + ((+x$2.aH(q)) * (+x$2.bb(p)))) + ((+x$2.bc(q)) * (+x$2.aG(p)))), (((((+x$2.bb(q)) * (+x$2.bc(p))) + ((+x$2.aG(q)) * (+x$2.aH(p)))) - ((+x$2.aH(q)) * (+x$2.aG(p)))) + ((+x$2.bc(q)) * (+x$2.bb(p)))), (((((+x$2.bb(q)) * (+x$2.bb(p))) - ((+x$2.aG(q)) * (+x$2.aG(p)))) - ((+x$2.aH(q)) * (+x$2.aH(p)))) - ((+x$2.bc(q)) * (+x$2.bc(p)))));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec2(x, y) {
  this.p = 0.0;
  this.n = 0.0;
  this.p = x;
  this.n = y;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec2.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec2;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec2() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec2.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec2 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec2, "trivalibs.graphics.math.cpu.Vec2", ({
  eq: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec3(x, y, z) {
  this.F = 0.0;
  this.G = 0.0;
  this.D = 0.0;
  this.F = x;
  this.G = y;
  this.D = z;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec3.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec3;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec3() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec3.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec3 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3, "trivalibs.graphics.math.cpu.Vec3", ({
  es: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec4(x, y, z, w) {
  this.gw = 0.0;
  this.gx = 0.0;
  this.gy = 0.0;
  this.gv = 0.0;
  this.gw = x;
  this.gx = y;
  this.gy = z;
  this.gv = w;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec4.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec4;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec4() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec4.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec4 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4, "trivalibs.graphics.math.cpu.Vec4", ({
  ev: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
  this.m4 = null;
  this.m5 = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$.prototype = $p;
$p.pY = (function() {
  if ((!this.m5)) {
    this.m4 = new $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18();
    this.m5 = true;
  }
  return this.m4;
});
var $d_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$, "trivalibs.graphics.math.cpu.mat4$package$Mat4Buffer$", ({
  ez: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
function $m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$ = new $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$() {
  this.m6 = null;
  this.m7 = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$.prototype = $p;
$p.rW = (function() {
  if ((!this.m7)) {
    this.m6 = new $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$6();
    this.m7 = true;
  }
  return this.m6;
});
var $d_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$, "trivalibs.graphics.math.cpu.vec2$package$Vec2Buffer$", ({
  eC: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$;
function $m_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$ = new $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$() {
  this.m8 = null;
  this.m9 = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$.prototype = $p;
$p.rX = (function() {
  if ((!this.m9)) {
    this.m8 = new $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$8();
    this.m9 = true;
  }
  return this.m8;
});
var $d_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$, "trivalibs.graphics.math.cpu.vec4$package$Vec4Buffer$", ({
  eF: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$;
function $m_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$ = new $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$;
}
function $ct_Ltrivalibs_graphics_math_gpu_Expr__T__($thiz, wgsl) {
  $thiz.d = wgsl;
  return $thiz;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_Expr() {
  this.d = null;
}
$p = $c_Ltrivalibs_graphics_math_gpu_Expr.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_Expr;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_Expr() {
}
$h_Ltrivalibs_graphics_math_gpu_Expr.prototype = $p;
$p.r = (function() {
  return this.d;
});
var $d_Ltrivalibs_graphics_math_gpu_Expr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_Expr, "trivalibs.graphics.math.gpu.Expr", ({
  aZ: 1
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
$p.gP = (function() {
  return new $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$13(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$10$2) => {
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), _$10$2);
  })));
});
var $d_Ltrivalibs_graphics_math_gpu_LeftScalar$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LeftScalar$, "trivalibs.graphics.math.gpu.LeftScalar$", ({
  eJ: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_LeftScalar$;
function $m_Ltrivalibs_graphics_math_gpu_LeftScalar$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_LeftScalar$)) {
    $n_Ltrivalibs_graphics_math_gpu_LeftScalar$ = new $c_Ltrivalibs_graphics_math_gpu_LeftScalar$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_LeftScalar$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$() {
}
$h_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$.prototype = $p;
$p.aO = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aY(v));
});
$p.kC = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("vec2<f32>(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aY(v.p)) + ", ") + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aY(v.n)) + ")"));
});
$p.kD = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("vec3<f32>(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aY(v.F)) + ", ") + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aY(v.G)) + ", ") + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aY(v.D)) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$, "trivalibs.graphics.math.gpu.cpu_interop$package$", ({
  eM: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$;
function $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$)) {
    $n_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$ = new $c_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_expr$package$() {
  $n_Ltrivalibs_graphics_math_gpu_expr$package$ = this;
}
$p = $c_Ltrivalibs_graphics_math_gpu_expr$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_expr$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_expr$package$() {
}
$h_Ltrivalibs_graphics_math_gpu_expr$package$.prototype = $p;
$p.oC = (function(tex, uv, sampler) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("textureSample(" + tex.d) + ", ") + sampler.d) + ", ") + uv.d) + ")"));
});
$p.aF = (function(tex, uv, sampler) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("textureSample(" + tex.d) + ", ") + sampler.d) + ", ") + uv.d) + ")"));
});
$p.iR = (function(tex, coord) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("textureLoad(" + tex.d) + ", ") + coord.d) + ", 0)"));
});
$p.pw = (function(tex, coord) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("textureLoad(" + tex.d) + ", ") + coord.d) + ", 0)"));
});
$p.rq = (function(onFalse, onTrue, cond) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("select(" + onFalse.d) + ", ") + onTrue.d) + ", ") + cond.d) + ")"));
});
$p.pP = (function(a, b) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.d) + " > ") + b.d) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_expr$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_expr$package$, "trivalibs.graphics.math.gpu.expr$package$", ({
  eN: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_expr$package$;
function $m_Ltrivalibs_graphics_math_gpu_expr$package$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_expr$package$)) {
    $n_Ltrivalibs_graphics_math_gpu_expr$package$ = new $c_Ltrivalibs_graphics_math_gpu_expr$package$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_expr$package$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_expr$package$Block$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_expr$package$Block$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_expr$package$Block$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_expr$package$Block$() {
}
$h_Ltrivalibs_graphics_math_gpu_expr$package$Block$.prototype = $p;
$p.bS = (function(parts) {
  var out = [];
  var i = 0;
  while ((i < parts.M())) {
    var p = parts.a6(i);
    if ((p.length > 0)) {
      out.push(p);
    }
    i = ((1 + i) | 0);
  }
  return out.join("\n");
});
var $d_Ltrivalibs_graphics_math_gpu_expr$package$Block$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_expr$package$Block$, "trivalibs.graphics.math.gpu.expr$package$Block$", ({
  eO: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_expr$package$Block$;
function $m_Ltrivalibs_graphics_math_gpu_expr$package$Block$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_expr$package$Block$)) {
    $n_Ltrivalibs_graphics_math_gpu_expr$package$Block$ = new $c_Ltrivalibs_graphics_math_gpu_expr$package$Block$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_expr$package$Block$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$() {
  this.mc = null;
  this.md = false;
  this.me = null;
  this.mf = false;
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$.prototype = $p;
$p.aY = (function(v) {
  var s = ("" + v);
  return (((($f_T__indexOf__I__I(s, 46) >= 0) || ($f_T__indexOf__I__I(s, 69) >= 0)) || ($f_T__indexOf__I__I(s, 101) >= 0)) ? s : (s + ".0"));
});
$p.q = (function() {
  if ((!this.md)) {
    this.mc = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1();
    this.md = true;
  }
  return this.mc;
});
$p.fS = (function() {
  if ((!this.mf)) {
    this.me = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6();
    this.mf = true;
  }
  return this.me;
});
$p.fW = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".xz"));
});
$p.gR = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".xy"));
});
$p.s7 = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".zw"));
});
$p.fX = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".xyz"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$, "trivalibs.graphics.math.gpu.float_expr$package$", ({
  eP: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_ivec2$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_ivec2$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_ivec2$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_ivec2$() {
}
$h_Ltrivalibs_graphics_math_gpu_ivec2$.prototype = $p;
$p.bT = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("vec2<i32>(" + v.d) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_ivec2$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_ivec2$, "trivalibs.graphics.math.gpu.ivec2$", ({
  f1: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_ivec2$;
function $m_Ltrivalibs_graphics_math_gpu_ivec2$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_ivec2$)) {
    $n_Ltrivalibs_graphics_math_gpu_ivec2$ = new $c_Ltrivalibs_graphics_math_gpu_ivec2$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_ivec2$;
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
$p.ai = (function(x, y) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("vec2<f32>(" + x.d) + ", ") + y.d) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_vec2$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec2$, "trivalibs.graphics.math.gpu.vec2$", ({
  f2: 1
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
$p.aF = (function(x, y, z) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("vec3<f32>(" + x.d) + ", ") + y.d) + ", ") + z.d) + ")"));
});
$p.bT = (function(scalar) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("vec3<f32>(" + scalar.d) + ")"));
});
$p.p3 = (function(scalar) {
  return this.bT($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(scalar));
});
var $d_Ltrivalibs_graphics_math_gpu_vec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec3$, "trivalibs.graphics.math.gpu.vec3$", ({
  f3: 1
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
$p.nR = (function(x, y, z, w) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((((("vec4<f32>(" + x.d) + ", ") + y.d) + ", ") + z.d) + ", ") + w.d) + ")"));
});
$p.ai = (function(xyz, w) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("vec4<f32>(" + xyz.d) + ", ") + w.d) + ")"));
});
$p.aF = (function(xy, z, w) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("vec4<f32>(" + xy.d) + ", ") + z.d) + ", ") + w.d) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_vec4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec4$, "trivalibs.graphics.math.gpu.vec4$", ({
  f4: 1
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
  this.s = null;
  this.s = value;
}
$p = $c_Ltrivalibs_graphics_painter_BindPair.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_BindPair;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_BindPair() {
}
$h_Ltrivalibs_graphics_painter_BindPair.prototype = $p;
var $d_Ltrivalibs_graphics_painter_BindPair = new $TypeData().i($c_Ltrivalibs_graphics_painter_BindPair, "trivalibs.graphics.painter.BindPair", ({
  f5: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_BlendState$() {
  this.mg = null;
  this.mh = null;
  $n_Ltrivalibs_graphics_painter_BlendState$ = this;
  new ($a_Ltrivalibs_graphics_painter_BlendState())(new ($a_Ltrivalibs_graphics_painter_BlendFn())("src-alpha", "one-minus-src-alpha"), new ($a_Ltrivalibs_graphics_painter_BlendFn())("one", "one-minus-src-alpha"));
  this.mg = new ($a_Ltrivalibs_graphics_painter_BlendState())(new ($a_Ltrivalibs_graphics_painter_BlendFn())("src-alpha", "one"), new ($a_Ltrivalibs_graphics_painter_BlendFn())("one", "one"));
  this.mh = new ($a_Ltrivalibs_graphics_painter_BlendState())(new ($a_Ltrivalibs_graphics_painter_BlendFn())("dst", "zero"), new ($a_Ltrivalibs_graphics_painter_BlendFn())("dst-alpha", "zero"));
}
$p = $c_Ltrivalibs_graphics_painter_BlendState$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_BlendState$;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_BlendState$() {
}
$h_Ltrivalibs_graphics_painter_BlendState$.prototype = $p;
var $d_Ltrivalibs_graphics_painter_BlendState$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_BlendState$, "trivalibs.graphics.painter.BlendState$", ({
  f6: 1
}));
var $n_Ltrivalibs_graphics_painter_BlendState$;
function $m_Ltrivalibs_graphics_painter_BlendState$() {
  if ((!$n_Ltrivalibs_graphics_painter_BlendState$)) {
    $n_Ltrivalibs_graphics_painter_BlendState$ = new $c_Ltrivalibs_graphics_painter_BlendState$();
  }
  return $n_Ltrivalibs_graphics_painter_BlendState$;
}
function $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V($thiz) {
  var format = null;
  var i = 0;
  while ((i < $thiz.fF)) {
    var b = $thiz.fG[i];
    if (((format === null) && (b.bM > 0))) {
      format = b.fH;
    }
    i = ((1 + i) | 0);
  }
  $thiz.jL = format;
}
function $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V($thiz, index, verts, indices, widenTo32) {
  while ((($thiz.fG.length | 0) <= index)) {
    $thiz.fG.push(new $c_Ltrivalibs_graphics_painter_FormBuffers());
  }
  var b = $thiz.fG[index];
  $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_graphics_painter_FormBuffers__Ltrivalibs_bufferdata_BufferView__V($thiz, b, verts);
  if ((indices !== null)) {
    $p_Ltrivalibs_graphics_painter_Form__uploadIndices__Ltrivalibs_graphics_painter_FormBuffers__sjs_js_typedarray_TypedArray__Z__V($thiz, b, indices, widenTo32);
  } else {
    b.bM = 0;
    b.hj = 0;
  }
}
function $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_graphics_painter_FormBuffers__Ltrivalibs_bufferdata_BufferView__V($thiz, b, verts) {
  var data = verts.dv.buffer;
  var size = (data.byteLength | 0);
  var p = ((-4) & ((3 + size) | 0));
  var padded = ((p < 4) ? 4 : p);
  if (((b.bN === null) || (b.jO < padded))) {
    if ((b.bN !== null)) {
      b.bN.destroy();
    }
    b.bN = $thiz.hi.f.createBuffer(({
      "size": padded,
      "usage": 40
    }));
    b.jO = padded;
  }
  $thiz.hi.aU.writeBuffer(b.bN, 0.0, $p_Ltrivalibs_graphics_painter_Form__alignedData__sjs_js_typedarray_ArrayBuffer__sjs_js_typedarray_ArrayBuffer($thiz, data));
  b.ir = size;
  b.gz = (verts.off | 0);
}
function $p_Ltrivalibs_graphics_painter_Form__uploadIndices__Ltrivalibs_graphics_painter_FormBuffers__sjs_js_typedarray_TypedArray__Z__V($thiz, b, raw, widenTo32) {
  var data = null;
  var count = 0;
  if (((!(!(raw instanceof Uint16Array))) && widenTo32)) {
    var u32 = new Uint32Array((raw.length | 0));
    var i = 0;
    while ((i < (raw.length | 0))) {
      u32[i] = (raw[i] | 0);
      i = ((1 + i) | 0);
    }
    data = u32.buffer;
    count = (u32.length | 0);
    b.fH = "uint32";
  } else if ((!(!(raw instanceof Uint16Array)))) {
    data = raw.buffer;
    count = (raw.length | 0);
    b.fH = "uint16";
  } else {
    data = raw.buffer;
    count = (raw.length | 0);
    b.fH = "uint32";
  }
  var size = (data.byteLength | 0);
  var p = ((-4) & ((3 + size) | 0));
  var padded = ((p < 4) ? 4 : p);
  if (((b.bL === null) || (b.jN < padded))) {
    if ((b.bL !== null)) {
      b.bL.destroy();
    }
    b.bL = $thiz.hi.f.createBuffer(({
      "size": padded,
      "usage": 24
    }));
    b.jN = padded;
  }
  $thiz.hi.aU.writeBuffer(b.bL, 0.0, $p_Ltrivalibs_graphics_painter_Form__alignedData__sjs_js_typedarray_ArrayBuffer__sjs_js_typedarray_ArrayBuffer($thiz, data));
  b.hj = size;
  b.bM = count;
}
function $p_Ltrivalibs_graphics_painter_Form__alignedData__sjs_js_typedarray_ArrayBuffer__sjs_js_typedarray_ArrayBuffer($thiz, data) {
  var size = (data.byteLength | 0);
  if (((3 & size) === 0)) {
    return data;
  } else {
    var $x_1 = ArrayBuffer;
    var p = ((-4) & ((3 + size) | 0));
    var out = new $x_1(((p < 4) ? 4 : p));
    new Uint8Array(out).set(new Uint8Array(data));
    return out;
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Form(painter) {
  this.hi = null;
  this.fG = null;
  this.fF = 0;
  this.jM = null;
  this.jK = null;
  this.jL = null;
  this.hi = painter;
  this.fG = [];
  this.fF = 0;
  this.jM = "triangle-list";
  this.jK = "ccw";
  this.jL = null;
}
$p = $c_Ltrivalibs_graphics_painter_Form.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Form;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Form() {
}
$h_Ltrivalibs_graphics_painter_Form.prototype = $p;
$p.rr = (function(geometry, vertices, geometries, verticesAll, topology, frontFace) {
  if ((topology !== (void 0))) {
    this.jM = topology;
  }
  if ((frontFace !== (void 0))) {
    this.jK = frontFace;
  }
  if ((geometry !== (void 0))) {
    $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, 0, geometry.js, geometry.ij, false);
    this.fF = 1;
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  if ((vertices !== (void 0))) {
    $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, 0, vertices, null, false);
    this.fF = 1;
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  if ((geometries !== (void 0))) {
    var use32 = false;
    var i = 0;
    while ((i < (geometries.length | 0))) {
      var idx = geometries[i].ij;
      if (((idx !== null) && (!(!(idx instanceof Uint32Array))))) {
        use32 = true;
      }
      i = ((1 + i) | 0);
    }
    i = 0;
    while ((i < (geometries.length | 0))) {
      var geo = geometries[i];
      $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, i, geo.js, geo.ij, use32);
      i = ((1 + i) | 0);
    }
    this.fF = (geometries.length | 0);
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  if ((verticesAll !== (void 0))) {
    var i$1 = 0;
    while ((i$1 < (verticesAll.length | 0))) {
      $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, i$1, verticesAll[i$1], null, false);
      i$1 = ((1 + i$1) | 0);
    }
    this.fF = (verticesAll.length | 0);
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Form = new $TypeData().i($c_Ltrivalibs_graphics_painter_Form, "trivalibs.graphics.painter.Form", ({
  f7: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_FormBuffers() {
  this.bN = null;
  this.jO = 0;
  this.ir = 0;
  this.gz = 0;
  this.bL = null;
  this.jN = 0;
  this.hj = 0;
  this.bM = 0;
  this.fH = null;
  this.bN = null;
  this.jO = 0;
  this.ir = 0;
  this.gz = 0;
  this.bL = null;
  this.jN = 0;
  this.hj = 0;
  this.bM = 0;
  this.fH = "uint16";
}
$p = $c_Ltrivalibs_graphics_painter_FormBuffers.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_FormBuffers;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_FormBuffers() {
}
$h_Ltrivalibs_graphics_painter_FormBuffers.prototype = $p;
var $d_Ltrivalibs_graphics_painter_FormBuffers = new $TypeData().i($c_Ltrivalibs_graphics_painter_FormBuffers, "trivalibs.graphics.painter.FormBuffers", ({
  f8: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter) {
  this.mj = null;
  this.mi = null;
  this.fI = null;
  this.mj = shade;
  this.mi = painter;
  this.fI = [];
}
$p = $c_Ltrivalibs_graphics_painter_InstanceList.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_InstanceList;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_InstanceList() {
}
$h_Ltrivalibs_graphics_painter_InstanceList.prototype = $p;
$p.M = (function() {
  return (this.fI.length | 0);
});
$p.oW = (function() {
  var inst = new $c_Ltrivalibs_graphics_painter_Instance(this.mj, this.mi);
  this.fI.push(inst);
  return (((this.fI.length | 0) - 1) | 0);
});
var $d_Ltrivalibs_graphics_painter_InstanceList = new $TypeData().i($c_Ltrivalibs_graphics_painter_InstanceList, "trivalibs.graphics.painter.InstanceList", ({
  fa: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_LayerBindCache(panelId, epoch, valueGroup, panelGroup) {
  this.ml = 0;
  this.mk = 0;
  this.jS = null;
  this.jR = null;
  this.ml = panelId;
  this.mk = epoch;
  this.jS = valueGroup;
  this.jR = panelGroup;
}
$p = $c_Ltrivalibs_graphics_painter_LayerBindCache.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_LayerBindCache;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_LayerBindCache() {
}
$h_Ltrivalibs_graphics_painter_LayerBindCache.prototype = $p;
var $d_Ltrivalibs_graphics_painter_LayerBindCache = new $TypeData().i($c_Ltrivalibs_graphics_painter_LayerBindCache, "trivalibs.graphics.painter.LayerBindCache", ({
  fc: 1
}));
function $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var w = ($thiz.gA.width | 0);
  var h = ($thiz.gA.height | 0);
  panel.pG(w, h);
  var msaa = panel.gE;
  var encoder = $thiz.f.createCommandEncoder();
  var panelFormats = panel.kq();
  var colorAttachments = [];
  var t = 0;
  while ((t < panel.rL())) {
    if ((panel.iA !== null)) {
      var opt$proxy2 = panel.iA;
      if (msaa) {
        var _2 = panel.ou(t);
        var TextureViewBundle_this = panel.a4[t];
        var _2$1 = TextureViewBundle_this.aV[0];
        var value = opt$proxy2.gw;
        var value$1 = opt$proxy2.gx;
        var value$2 = opt$proxy2.gy;
        var value$3 = opt$proxy2.gv;
        var _2$2 = ({
          "r": value,
          "g": value$1,
          "b": value$2,
          "a": value$3
        });
        var attachment = ({
          "view": _2,
          "resolveTarget": _2$1,
          "loadOp": "clear",
          "storeOp": "discard",
          "clearValue": _2$2
        });
      } else {
        var TextureViewBundle_this$2 = panel.a4[t];
        var _2$3 = TextureViewBundle_this$2.aV[0];
        var value$4 = opt$proxy2.gw;
        var value$5 = opt$proxy2.gx;
        var value$6 = opt$proxy2.gy;
        var value$7 = opt$proxy2.gv;
        var _2$4 = ({
          "r": value$4,
          "g": value$5,
          "b": value$6,
          "a": value$7
        });
        var attachment = ({
          "view": _2$3,
          "loadOp": "clear",
          "storeOp": "store",
          "clearValue": _2$4
        });
      }
    } else if (msaa) {
      var _2$5 = panel.ou(t);
      var TextureViewBundle_this$3 = panel.a4[t];
      var _2$6 = TextureViewBundle_this$3.aV[0];
      var attachment = ({
        "view": _2$5,
        "resolveTarget": _2$6,
        "loadOp": "load",
        "storeOp": "store"
      });
    } else {
      var TextureViewBundle_this$4 = panel.a4[t];
      var _2$7 = TextureViewBundle_this$4.aV[0];
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
  if (panel.hr) {
    var _2$8 = panel.o1();
    passDesc.depthStencilAttachment = ({
      "view": _2$8,
      "depthLoadOp": "clear",
      "depthStoreOp": "store",
      "depthClearValue": 1.0
    });
  }
  var shapePass = encoder.beginRenderPass(passDesc);
  var i = 0;
  while ((i < (panel.iB.length | 0))) {
    $p_Ltrivalibs_graphics_painter_Painter__renderShapeOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shape__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_Panel__V($thiz, shapePass, panel.iB[i], panel.hr, msaa, panelFormats, panel);
    i = ((1 + i) | 0);
  }
  shapePass.end();
  $thiz.aU.submit([encoder.finish()]);
  if (panel.ho) {
    $p_Ltrivalibs_graphics_painter_Painter__resolvePanelDepth__Ltrivalibs_graphics_painter_Panel__V($thiz, panel);
  }
  var curEncoder = null;
  var curPass = null;
  var j = 0;
  while ((j < (panel.bP.length | 0))) {
    var layer = panel.bP[j];
    var needsPingPong = layer.nU();
    if ((layer.hk >= 0)) {
      if ((curPass !== null)) {
        curPass.end();
        $thiz.aU.submit([curEncoder.finish()]);
        curPass = null;
      }
      var mipDstView = panel.a4[0].aV[layer.hk];
      var mipSrcView = ((layer.iv >= 0) ? panel.a4[0].aV[layer.iv] : panel.iZ());
      var enc = $thiz.f.createCommandEncoder();
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
      $thiz.aU.submit([enc.finish()]);
    } else if (needsPingPong) {
      if ((curPass !== null)) {
        curPass.end();
        $thiz.aU.submit([curEncoder.finish()]);
        curPass = null;
      }
      var enc$2 = $thiz.f.createCommandEncoder();
      var _2$10 = panel.r3();
      var _2$11 = [({
        "view": _2$10,
        "loadOp": "load",
        "storeOp": "store"
      })];
      var ppPass = enc$2.beginRenderPass(({
        "colorAttachments": _2$11
      }));
      $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V($thiz, ppPass, layer, false, false, panelFormats, panel.iZ(), panel);
      ppPass.end();
      $thiz.aU.submit([enc$2.finish()]);
      panel.rJ();
    } else {
      if ((curPass === null)) {
        curEncoder = $thiz.f.createCommandEncoder();
        var $x_1 = curEncoder;
        var _2$12 = panel.iZ();
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
    $thiz.aU.submit([curEncoder.finish()]);
  }
  var hasMipTargetLayers = false;
  var mi = 0;
  while ((mi < (panel.bP.length | 0))) {
    if ((panel.bP[mi].hk >= 0)) {
      hasMipTargetLayers = true;
    }
    mi = ((1 + mi) | 0);
  }
  if (((panel.ku() > 1) && (!hasMipTargetLayers))) {
    $p_Ltrivalibs_graphics_painter_Painter__generateMipmaps__Ltrivalibs_graphics_painter_Panel__V($thiz, panel);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__blitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz) {
  if ((!$thiz.mr)) {
    $thiz.mq = $thiz.f.createSampler(({
      "magFilter": "nearest",
      "minFilter": "nearest"
    }));
    $thiz.mr = true;
  }
  return $thiz.mq;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz) {
  if ((!$thiz.mn)) {
    var $x_2 = $thiz.f;
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
    $thiz.mm = $x_1;
    $thiz.mn = true;
  }
  return $thiz.mm;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitPipeline__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz) {
  if ((!$thiz.mp)) {
    var module = $thiz.f.createShaderModule(({
      "code": "\nstruct VsOut {\n  @builtin(position) pos: vec4f,\n  @location(0) uv: vec2f,\n}\n\n@vertex\nfn vs_main(@builtin(vertex_index) vi: u32) -> VsOut {\n  let x = f32((vi << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(vi & 2u) * 2.0 - 1.0;\n  var out: VsOut;\n  out.pos = vec4f(x, y, 0.0, 1.0);\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  return out;\n}\n\n@group(0) @binding(0) var blit_texture: texture_2d<f32>;\n@group(0) @binding(1) var blit_sampler: sampler;\n\n@fragment\nfn fs_main(in: VsOut) -> @location(0) vec4f {\n  return textureSample(blit_texture, blit_sampler, in.uv);\n}\n"
    }));
    var $x_1 = $thiz.f;
    var _2 = [$p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz)];
    var pipelineLayout = $x_1.createPipelineLayout(({
      "bindGroupLayouts": _2
    }));
    var $x_3 = $thiz.f;
    var _2$1 = ({
      "module": module,
      "entryPoint": "vs_main"
    });
    var f$proxy4 = $thiz.gB;
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
    $thiz.mo = $x_2;
    $thiz.mp = true;
  }
  return $thiz.mo;
}
function $p_Ltrivalibs_graphics_painter_Painter__depthResolveBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz) {
  if ((!$thiz.mu)) {
    var $x_2 = $thiz.f;
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
    $thiz.mt = $x_1;
    $thiz.mu = true;
  }
  return $thiz.mt;
}
function $p_Ltrivalibs_graphics_painter_Painter__depthResolvePipeline__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz) {
  if ((!$thiz.mw)) {
    var module = $thiz.f.createShaderModule(({
      "code": "\n@group(0) @binding(0) var ms_depth: texture_depth_multisampled_2d;\n\n@vertex\nfn vs_main(@builtin(vertex_index) vi: u32) -> @builtin(position) vec4f {\n  let x = f32((vi << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(vi & 2u) * 2.0 - 1.0;\n  return vec4f(x, y, 0.0, 1.0);\n}\n\n@fragment\nfn fs_main(@builtin(position) pos: vec4f) -> @builtin(frag_depth) f32 {\n  return textureLoad(ms_depth, vec2i(pos.xy), 0);\n}\n"
    }));
    var $x_1 = $thiz.f;
    var _2 = [$p_Ltrivalibs_graphics_painter_Painter__depthResolveBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz)];
    var pl = $x_1.createPipelineLayout(({
      "bindGroupLayouts": _2
    }));
    var $x_3 = $thiz.f;
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
    $thiz.mv = $x_2;
    $thiz.mw = true;
  }
  return $thiz.mv;
}
function $p_Ltrivalibs_graphics_painter_Painter__resolvePanelDepth__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var encoder = $thiz.f.createCommandEncoder();
  var _2 = [];
  var _2$1 = panel.rm();
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
  var $x_1 = $thiz.f;
  var _2$3 = $p_Ltrivalibs_graphics_painter_Painter__depthResolveBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz);
  var _2$4 = panel.o1();
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
  $thiz.aU.submit([encoder.finish()]);
}
function $p_Ltrivalibs_graphics_painter_Painter__mipBlitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz) {
  if ((!$thiz.my)) {
    $thiz.mx = $thiz.f.createSampler(({
      "magFilter": "linear",
      "minFilter": "linear"
    }));
    $thiz.my = true;
  }
  return $thiz.mx;
}
function $p_Ltrivalibs_graphics_painter_Painter__getMipBlitPipeline__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, format) {
  if ((!(!(!(!$thiz.iw.hasOwnProperty(format)))))) {
    return $thiz.iw[format];
  } else {
    var module = $thiz.f.createShaderModule(({
      "code": "\nstruct VsOut {\n  @builtin(position) pos: vec4f,\n  @location(0) uv: vec2f,\n}\n\n@vertex\nfn vs_main(@builtin(vertex_index) vi: u32) -> VsOut {\n  let x = f32((vi << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(vi & 2u) * 2.0 - 1.0;\n  var out: VsOut;\n  out.pos = vec4f(x, y, 0.0, 1.0);\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  return out;\n}\n\n@group(0) @binding(0) var blit_texture: texture_2d<f32>;\n@group(0) @binding(1) var blit_sampler: sampler;\n\n@fragment\nfn fs_main(in: VsOut) -> @location(0) vec4f {\n  return textureSample(blit_texture, blit_sampler, in.uv);\n}\n"
    }));
    var $x_1 = $thiz.f;
    var _2 = [$p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz)];
    var pl = $x_1.createPipelineLayout(({
      "bindGroupLayouts": _2
    }));
    var $x_2 = $thiz.f;
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
    $thiz.iw[format] = p;
    return p;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__generateMipmaps__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var mipCount = panel.ku();
  if ((mipCount <= 1)) {
    return (void 0);
  }
  var fmt = (((panel.fK.length | 0) > 0) ? panel.fK[0] : $thiz.gB);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getMipBlitPipeline__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, fmt);
  var i = 1;
  while ((i < mipCount)) {
    var srcView = panel.a4[0].aV[((i - 1) | 0)];
    var dstView = panel.a4[0].aV[i];
    var encoder = $thiz.f.createCommandEncoder();
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
    var $x_1 = $thiz.f;
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
    $thiz.aU.submit([encoder.finish()]);
    i = ((1 + i) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, bindings, panelBindings) {
  $thiz.aK.length = (bindings.length | 0);
  var i = 0;
  while ((i < (bindings.length | 0))) {
    $thiz.aK[i] = bindings[i];
    i = ((1 + i) | 0);
  }
  $thiz.ao.length = (panelBindings.length | 0);
  var j = 0;
  while ((j < (panelBindings.length | 0))) {
    $thiz.ao[j] = panelBindings[j];
    j = ((1 + j) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shade, workBindings, workPanelBindings) {
  var dict = panel.ht;
  var keys = Object.keys(dict);
  var i = 0;
  while ((i < (keys.length | 0))) {
    var name = keys[i];
    var value = dict[name];
    if ((!(!(!(!shade.E.hasOwnProperty(name)))))) {
      var idx = (shade.E[name] | 0);
      if (((idx >= (workBindings.length | 0)) || (workBindings[idx] === null))) {
        while (((workBindings.length | 0) <= idx)) {
          workBindings.push(null);
        }
        workBindings[idx] = value;
      }
    } else if ((!(!(!(!shade.aE.hasOwnProperty(name)))))) {
      var idx$2 = (shade.aE[name] | 0);
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
  while ((i < (inst.an.length | 0))) {
    if ((inst.an[i] !== null)) {
      while (((workBindings.length | 0) <= i)) {
        workBindings.push(null);
      }
      workBindings[i] = inst.an[i];
    }
    i = ((1 + i) | 0);
  }
  var j = 0;
  while ((j < (inst.is.length | 0))) {
    if ((inst.is[j] !== null)) {
      while (((workPanelBindings.length | 0) <= j)) {
        workPanelBindings.push(null);
      }
      workPanelBindings[j] = inst.is[j];
    }
    j = ((1 + j) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel) {
  return ((panel !== null) && ((Object.keys(panel.ht).length | 0) > 0));
}
function $p_Ltrivalibs_graphics_painter_Painter__buildValueBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, bindings) {
  if ((((bindings.length | 0) > 0) && (shade.jV !== null))) {
    var entries = [];
    var i = 0;
    while ((i < (bindings.length | 0))) {
      var b = bindings[i];
      if ((b !== null)) {
        entries.push($p_Ltrivalibs_graphics_painter_Painter__bindingEntry__I__O__sjs_js_Dynamic($thiz, i, b));
      }
      i = ((1 + i) | 0);
    }
    var $x_1 = $thiz.f;
    var _2 = shade.jV;
    return $x_1.createBindGroup(({
      "layout": _2,
      "entries": entries
    }));
  } else {
    return null;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shade, bindings) {
  var bg = $p_Ltrivalibs_graphics_painter_Painter__buildValueBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, bindings);
  if ((bg !== null)) {
    pass.setBindGroup(0, bg);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__buildPanelBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, panelBindings, srcView) {
  if ((shade.iE !== null)) {
    var entries = [];
    if ((srcView !== null)) {
      entries.push(({
        "binding": 0,
        "resource": srcView
      }));
    }
    var startIdx = ((srcView !== null) | 0);
    var k = startIdx;
    while ((k < (panelBindings.length | 0))) {
      var pb = panelBindings[k];
      if ((pb !== null)) {
        var view = ((!(!pb.depth)) ? pb.panel.pv() : (((pb.mipLevel | 0) < 0) ? pb.panel.a4[(pb.index | 0)].mD : pb.panel.a4[(pb.index | 0)].aV[(pb.mipLevel | 0)]));
        var value = k;
        entries.push(({
          "binding": value,
          "resource": view
        }));
      }
      k = ((1 + k) | 0);
    }
    if (((entries.length | 0) > 0)) {
      var $x_1 = $thiz.f;
      var _2 = shade.iE;
      return $x_1.createBindGroup(({
        "layout": _2,
        "entries": entries
      }));
    } else {
      return null;
    }
  } else {
    return null;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shade, panelBindings, srcView) {
  var pg = $p_Ltrivalibs_graphics_painter_Painter__buildPanelBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, panelBindings, srcView);
  if ((pg !== null)) {
    pass.setBindGroup(1, pg);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__renderShapeOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shape__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_Panel__V($thiz, pass, shape, depthTest, multisample, formats, panel) {
  var fmts = ((formats !== null) ? formats : [$thiz.gB]);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, shape.Y, shape.jX, fmts, depthTest, multisample, shape.hu.jM, shape.jY, shape.hu.jK, shape.hu.jL);
  pass.setPipeline(pipeline);
  var form = shape.hu;
  var bufferCount = form.fF;
  var instanceCount = shape.jZ.M();
  var hasPanelBinds = $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel);
  if ((instanceCount === 0)) {
    if (hasPanelBinds) {
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, shape.P, shape.as);
      $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shape.Y, $thiz.aK, $thiz.ao);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.Y, $thiz.aK);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.Y, $thiz.ao, null);
    } else {
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.Y, shape.P);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.Y, shape.as, null);
    }
    var b = 0;
    while ((b < bufferCount)) {
      var buf = form.fG[b];
      if ((buf.gz > 0)) {
        pass.setVertexBuffer(0, buf.bN, 0.0, buf.ir);
        if ((buf.bM > 0)) {
          pass.setIndexBuffer(buf.bL, buf.fH, 0.0, buf.hj);
          pass.drawIndexed(buf.bM);
        } else {
          pass.draw(buf.gz);
        }
      }
      b = ((1 + b) | 0);
    }
  } else {
    var i = 0;
    while ((i < instanceCount)) {
      var inst = shape.jZ.fI[i];
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, shape.P, shape.as);
      if (hasPanelBinds) {
        $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shape.Y, $thiz.aK, $thiz.ao);
      }
      $p_Ltrivalibs_graphics_painter_Painter__applyInstanceBindings__Ltrivalibs_graphics_painter_Instance__sjs_js_Array__sjs_js_Array__V($thiz, inst, $thiz.aK, $thiz.ao);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.Y, $thiz.aK);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.Y, $thiz.ao, null);
      var b$2 = 0;
      while ((b$2 < bufferCount)) {
        var buf$2 = form.fG[b$2];
        if ((buf$2.gz > 0)) {
          pass.setVertexBuffer(0, buf$2.bN, 0.0, buf$2.ir);
          if ((buf$2.bM > 0)) {
            pass.setIndexBuffer(buf$2.bL, buf$2.fH, 0.0, buf$2.hj);
            pass.drawIndexed(buf$2.bM);
          } else {
            pass.draw(buf$2.gz);
          }
        }
        b$2 = ((1 + b$2) | 0);
      }
      i = ((1 + i) | 0);
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V($thiz, pass, layer, depthTest, multisample, formats, srcView, panel) {
  var fmts = ((formats !== null) ? formats : [$thiz.gB]);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, layer.x, layer.jQ, fmts, depthTest, multisample, "triangle-list", "none", "ccw", null);
  pass.setPipeline(pipeline);
  var instanceCount = layer.iu.M();
  var hasPanelBinds = $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel);
  if ((instanceCount === 0)) {
    if (hasPanelBinds) {
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, layer.i, layer.U);
      $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, layer.x, $thiz.aK, $thiz.ao);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, layer.x, $thiz.aK);
      var effectiveSrcView = (((($thiz.ao.length | 0) > 0) && ($thiz.ao[0] !== null)) ? null : srcView);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.x, $thiz.ao, effectiveSrcView);
    } else {
      var c = layer.N;
      if (((((c !== null) && (panel !== null)) && (c.ml === panel.jU)) && (c.mk === panel.fJ))) {
        if ((c.jS !== null)) {
          pass.setBindGroup(0, c.jS);
        }
        if ((c.jR !== null)) {
          pass.setBindGroup(1, c.jR);
        }
      } else {
        var vg = $p_Ltrivalibs_graphics_painter_Painter__buildValueBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, layer.x, layer.i);
        var pg = $p_Ltrivalibs_graphics_painter_Painter__buildPanelBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, layer.x, layer.U, srcView);
        if ((vg !== null)) {
          pass.setBindGroup(0, vg);
        }
        if ((pg !== null)) {
          pass.setBindGroup(1, pg);
        }
        layer.N = ((panel !== null) ? new $c_Ltrivalibs_graphics_painter_LayerBindCache(panel.jU, panel.fJ, vg, pg) : null);
      }
    }
    pass.draw(3);
  } else {
    var i = 0;
    while ((i < instanceCount)) {
      var inst = layer.iu.fI[i];
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, layer.i, layer.U);
      if (hasPanelBinds) {
        $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, layer.x, $thiz.aK, $thiz.ao);
      }
      $p_Ltrivalibs_graphics_painter_Painter__applyInstanceBindings__Ltrivalibs_graphics_painter_Instance__sjs_js_Array__sjs_js_Array__V($thiz, inst, $thiz.aK, $thiz.ao);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, layer.x, $thiz.aK);
      var effectiveSrcView$2 = (((($thiz.ao.length | 0) > 0) && ($thiz.ao[0] !== null)) ? null : srcView);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.x, $thiz.ao, effectiveSrcView$2);
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
function $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, shade, blendState, formats, depthTest, multisample, topology, cullMode, frontFace, indexFormat) {
  var stripIndexFormat = (((indexFormat !== null) && ((topology === "triangle-strip") || (topology === "line-strip"))) ? indexFormat : null);
  var stripKey = ((stripIndexFormat === null) ? "" : ((stripIndexFormat === "uint32") ? "4" : "2"));
  var key = (((((((((((((((shade.mB + "|") + $p_Ltrivalibs_graphics_painter_Painter__blendKeyStr__Ltrivalibs_graphics_painter_BlendState__T($thiz, blendState)) + "|") + formats.join(",")) + "|") + depthTest) + "|") + multisample) + "|") + topology) + "|") + cullMode) + "|") + frontFace) + stripKey);
  var cached = $thiz.jT[key];
  if ((cached !== (void 0))) {
    return cached;
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
    if ((shade.jW !== null)) {
      var _2 = shade.iF;
      var _2$1 = [shade.jW];
      var vertexDescriptor = ({
        "module": _2,
        "entryPoint": "vs_main",
        "buffers": _2$1
      });
    } else {
      var _2$2 = shade.iF;
      var vertexDescriptor = ({
        "module": _2$2,
        "entryPoint": "vs_main"
      });
    }
    var _2$3 = shade.mC;
    var _2$4 = shade.iF;
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
    if ((stripIndexFormat !== null)) {
      desc.primitive.stripIndexFormat = stripIndexFormat;
    }
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
    var p = $thiz.f.createRenderPipeline(desc);
    $thiz.jT[key] = p;
    return p;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__bindingEntry__I__O__sjs_js_Dynamic($thiz, i, b) {
  if ((b instanceof $c_Ltrivalibs_graphics_buffers_BufferBinding)) {
    var _2 = b.A;
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
  this.f = null;
  this.aU = null;
  this.gA = null;
  this.ms = null;
  this.gB = null;
  this.jT = null;
  this.t = 0;
  this.ix = null;
  this.mz = null;
  this.mA = false;
  this.mq = null;
  this.mr = false;
  this.mm = null;
  this.mn = false;
  this.mo = null;
  this.mp = false;
  this.mt = null;
  this.mu = false;
  this.mv = null;
  this.mw = false;
  this.mx = null;
  this.my = false;
  this.iw = null;
  this.aK = null;
  this.ao = null;
  this.f = device;
  this.aU = queue;
  this.gA = canvas;
  this.ms = context;
  this.gB = preferredFormat;
  this.jT = ({});
  this.t = 0;
  this.ix = [];
  this.iw = ({});
  this.aK = [];
  this.ao = [];
}
$p = $c_Ltrivalibs_graphics_painter_Painter.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Painter;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Painter() {
}
$h_Ltrivalibs_graphics_painter_Painter.prototype = $p;
$p.qV = (function(cb) {
  this.ix.push(cb);
  cb.nO((this.gA.width | 0), (this.gA.height | 0));
});
$p.pM = (function(w, h) {
  var k = 0;
  while ((k < (this.ix.length | 0))) {
    this.ix[k].nO(w, h);
    k = ((1 + k) | 0);
  }
});
$p.oD = (function(magFilter, minFilter, mipmapFilter, addressMode, addressModeU, addressModeV) {
  var $x_1 = this.f;
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
$p.i4 = (function() {
  if ((!this.mA)) {
    this.mz = this.oD("linear", "linear", "linear", "clamp-to-edge", (void 0), (void 0));
    this.mA = true;
  }
  return this.mz;
});
$p.o6 = (function(geometry, vertices, geometries, verticesAll, topology, frontFace) {
  return new $c_Ltrivalibs_graphics_painter_Form(this).rr(geometry, vertices, geometries, verticesAll, topology, frontFace);
});
$p.iW = (function(form, shade, cullMode, blendState) {
  return new $c_Ltrivalibs_graphics_painter_Shape(this, form, shade).rt(cullMode, blendState);
});
$p.bm = (function(shade, blendState, mipSource, mipTarget) {
  return new $c_Ltrivalibs_graphics_painter_Layer(this, shade).rs(blendState, mipSource, mipTarget);
});
$p.by = (function(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers) {
  return new $c_Ltrivalibs_graphics_painter_Panel(this).i6(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers);
});
$p.rx = (function(panel) {
  var encoder = this.f.createCommandEncoder();
  var swapChainView = this.ms.getCurrentTexture().createView();
  var _2 = [({
    "view": swapChainView,
    "loadOp": "load",
    "storeOp": "store"
  })];
  var pass = encoder.beginRenderPass(({
    "colorAttachments": _2
  }));
  var $x_1 = this.f;
  var _2$1 = $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout(this);
  var _2$2 = panel.iZ();
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
  this.aU.submit([encoder.finish()]);
});
var $d_Ltrivalibs_graphics_painter_Painter = new $TypeData().i($c_Ltrivalibs_graphics_painter_Painter, "trivalibs.graphics.painter.Painter", ({
  fd: 1
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
$p.q5 = (function(canvas) {
  var maybeGpu = $m_Ltrivalibs_graphics_painter_WebGPU$().pW();
  if ((maybeGpu === (void 0))) {
    return Promise.reject(Error("WebGPU is not supported"));
  } else {
    var promise$proxy1 = maybeGpu.requestAdapter();
    var promise$proxy3 = promise$proxy1.then(((value$2) => {
      if ((value$2 === null)) {
        throw new $c_sjs_js_JavaScriptException(Error("Failed to get WebGPU adapter")).aJ;
      } else {
        return value$2;
      }
    }));
    var f$proxy11 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((adapter$2) => {
      var promise$proxy2 = adapter$2.requestDevice();
      var f$proxy10 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((device$2) => {
        var queue = device$2.queue;
        var context = $m_Ltrivalibs_graphics_painter_WebGPU$().pV(canvas);
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
            painter.pM(rw, rh);
          }
        }));
        observer.observe(canvas);
        return painter;
      }));
      return promise$proxy2.then($m_sjs_js_Any$().hJ(f$proxy10));
    }));
    return promise$proxy3.then($m_sjs_js_Any$().hJ(f$proxy11));
  }
});
$p.q4 = (function(canvas, setup) {
  var promise$proxy4 = this.q5(canvas);
  return promise$proxy4.then($m_sjs_js_Any$().hJ(setup));
});
var $d_Ltrivalibs_graphics_painter_Painter$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_Painter$, "trivalibs.graphics.painter.Painter$", ({
  fe: 1
}));
var $n_Ltrivalibs_graphics_painter_Painter$;
function $m_Ltrivalibs_graphics_painter_Painter$() {
  if ((!$n_Ltrivalibs_graphics_painter_Painter$)) {
    $n_Ltrivalibs_graphics_painter_Painter$ = new $c_Ltrivalibs_graphics_painter_Painter$();
  }
  return $n_Ltrivalibs_graphics_painter_Painter$;
}
function $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V($thiz) {
  if (($thiz.hm !== null)) {
    $thiz.hm.destroy();
  }
  if (($thiz.hp !== null)) {
    $thiz.hp.destroy();
  }
  var depthUsage = ($thiz.hl ? 20 : 16);
  var $x_1 = $thiz.fL.f;
  var value = $thiz.gD;
  var value$1 = $thiz.gC;
  var _2 = ({
    "width": value,
    "height": value$1
  });
  var _2$1 = ($thiz.gE ? 4 : 1);
  var depthTex = $x_1.createTexture(({
    "size": _2,
    "format": "depth24plus",
    "usage": depthUsage,
    "sampleCount": _2$1
  }));
  $thiz.hm = depthTex;
  $thiz.iy = depthTex.createView();
  if (($thiz.hl && $thiz.gE)) {
    var $x_2 = $thiz.fL.f;
    var value$2 = $thiz.gD;
    var value$3 = $thiz.gC;
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
    $thiz.hp = resTex;
    $thiz.hq = resTex.createView();
    $thiz.ho = true;
  } else {
    $thiz.hp = null;
    $thiz.hq = null;
    $thiz.ho = false;
  }
}
function $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z($thiz) {
  var i = 0;
  while ((i < ($thiz.bP.length | 0))) {
    if ($thiz.bP[i].nU()) {
      return true;
    }
    i = ((1 + i) | 0);
  }
  return false;
}
function $p_Ltrivalibs_graphics_painter_Panel__buildViews__Ltrivalibs_graphics_painter_GPUTexture__I__Ltrivalibs_graphics_painter_TextureViewBundle($thiz, tex, mipCount) {
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
  return new $c_Ltrivalibs_graphics_painter_TextureViewBundle(perMip, tex.createView());
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
  this.fL = null;
  this.iD = 0;
  this.iC = 0;
  this.iA = null;
  this.hr = false;
  this.gE = false;
  this.hs = 0;
  this.fK = null;
  this.iB = null;
  this.bP = null;
  this.ht = null;
  this.jU = 0;
  this.fJ = 0;
  this.bj = null;
  this.a4 = null;
  this.hm = null;
  this.iy = null;
  this.hl = false;
  this.hp = null;
  this.hq = null;
  this.ho = false;
  this.hn = null;
  this.iz = null;
  this.gD = 0;
  this.gC = 0;
  this.fL = painter;
  this.iD = 0;
  this.iC = 0;
  this.iA = null;
  this.hr = false;
  this.gE = false;
  this.hs = 1;
  this.fK = [];
  this.iB = [];
  this.bP = [];
  this.ht = ({});
  $m_Ltrivalibs_graphics_painter_panel$package$().iG = ((1 + $m_Ltrivalibs_graphics_painter_panel$package$().iG) | 0);
  this.jU = $m_Ltrivalibs_graphics_painter_panel$package$().iG;
  this.fJ = 0;
  this.bj = [];
  this.a4 = [];
  this.hm = null;
  this.iy = null;
  this.hl = false;
  this.hp = null;
  this.hq = null;
  this.ho = false;
  this.hn = [];
  this.iz = [];
  this.gD = 0;
  this.gC = 0;
}
$p = $c_Ltrivalibs_graphics_painter_Panel.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Panel;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Panel() {
}
$h_Ltrivalibs_graphics_painter_Panel.prototype = $p;
$p.ku = (function() {
  if ((this.hs === 0)) {
    var a = this.gD;
    var b = this.gC;
    var maxDim = ((a > b) ? a : b);
    if ((maxDim <= 0)) {
      return 1;
    } else {
      var a$1 = maxDim;
      return ((1 + $doubleToInt(((+Math.log(a$1)) / (+Math.log(2.0))))) | 0);
    }
  } else {
    return this.hs;
  }
});
$p.kq = (function() {
  return (((this.fK.length | 0) === 0) ? [this.fL.gB] : this.fK);
});
$p.rL = (function() {
  return (this.kq().length | 0);
});
$p.iZ = (function() {
  var TextureViewBundle_this = this.a4[0];
  return TextureViewBundle_this.aV[0];
});
$p.r3 = (function() {
  var TextureViewBundle_this = this.a4[1];
  return TextureViewBundle_this.aV[0];
});
$p.o1 = (function() {
  return this.iy;
});
$p.rm = (function() {
  return this.hq;
});
$p.ou = (function(index) {
  return this.iz[index];
});
$p.rJ = (function() {
  var t = this.bj[0];
  this.bj[0] = this.bj[1];
  this.bj[1] = t;
  var sv = this.a4[0];
  this.a4[0] = this.a4[1];
  this.a4[1] = sv;
  this.fJ = ((1 + this.fJ) | 0);
});
$p.pv = (function() {
  if (((!this.hl) && (this.hm !== null))) {
    this.hl = true;
    $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V(this);
  }
  return (this.ho ? this.hq : this.iy);
});
$p.pf = (function(index, mipLevel, depth) {
  return new ($a_Ltrivalibs_graphics_painter_PanelBinding())(this, index, mipLevel, depth);
});
$p.i6 = (function(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers) {
  if ((width !== (void 0))) {
    var v = (width | 0);
    this.iD = v;
  }
  if ((height !== (void 0))) {
    var v$1 = (height | 0);
    this.iC = v$1;
  }
  if ((clearColor !== (void 0))) {
    this.iA = ((clearColor === null) ? null : new $c_Ltrivalibs_graphics_math_cpu_Vec4(clearColor.gw, clearColor.gx, clearColor.gy, clearColor.gv));
  }
  if ((depthTest !== (void 0))) {
    var v$2 = (!(!depthTest));
    this.hr = v$2;
  }
  if ((multisample !== (void 0))) {
    var v$3 = (!(!multisample));
    this.gE = v$3;
  }
  if ((mips !== (void 0))) {
    if ((!(!mips))) {
      this.hs = 0;
    }
  }
  if ((mipLevels !== (void 0))) {
    var v$5 = (mipLevels | 0);
    if ((v$5 > 0)) {
      this.hs = v$5;
    }
  }
  var x$1 = ((formats === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy1$1__O__O(this, format) : formats);
  if ((x$1 !== (void 0))) {
    this.fK = x$1;
  }
  var x$2 = ((shapes === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy2$1__O__O(this, shape) : shapes);
  if ((x$2 !== (void 0))) {
    this.iB = x$2;
  }
  var x$3 = ((layers === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy3$1__O__O(this, layer) : layers);
  if ((x$3 !== (void 0))) {
    this.bP = x$3;
  }
  if ((((this.fK.length | 0) > 1) && $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z(this))) {
    throw new $c_sjs_js_JavaScriptException(Error("Panel: MRT (multiple formats) cannot host auto-pong layers. Chain a single-format panel for post-processing instead.")).aJ;
  }
  return this;
});
$p.pG = (function(canvasW, canvasH) {
  var targetW = ((this.iD === 0) ? canvasW : this.iD);
  var targetH = ((this.iC === 0) ? canvasH : this.iC);
  if (((targetW !== this.gD) || (targetH !== this.gC))) {
    var d = 0;
    while ((d < (this.bj.length | 0))) {
      this.bj[d].destroy();
      d = ((1 + d) | 0);
    }
    d = 0;
    while ((d < (this.hn.length | 0))) {
      this.hn[d].destroy();
      d = ((1 + d) | 0);
    }
    this.gD = targetW;
    this.gC = targetH;
    var mipCount = this.ku();
    var fmts = this.kq();
    var hasPong = $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z(this);
    this.bj = [];
    this.a4 = [];
    this.hn = [];
    this.iz = [];
    var i = 0;
    while ((i < (fmts.length | 0))) {
      var fmt = fmts[i];
      var $x_1 = this.fL.f;
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
      this.bj.push(tex);
      this.a4.push($p_Ltrivalibs_graphics_painter_Panel__buildViews__Ltrivalibs_graphics_painter_GPUTexture__I__Ltrivalibs_graphics_painter_TextureViewBundle(this, tex, mipCount));
      if (this.gE) {
        var $x_2 = this.fL.f;
        var _2$1 = ({
          "width": targetW,
          "height": targetH
        });
        var msaaTex = $x_2.createTexture(({
          "size": _2$1,
          "format": fmt,
          "sampleCount": 4,
          "usage": 16
        }));
        this.hn.push(msaaTex);
        this.iz.push(msaaTex.createView());
      }
      i = ((1 + i) | 0);
    }
    if (hasPong) {
      var $x_3 = this.fL.f;
      var _2$2 = ({
        "width": targetW,
        "height": targetH
      });
      var f$proxy3 = fmts[0];
      var pongTex = $x_3.createTexture(({
        "size": _2$2,
        "format": f$proxy3,
        "usage": 20,
        "mipLevelCount": mipCount
      }));
      this.bj.push(pongTex);
      this.a4.push($p_Ltrivalibs_graphics_painter_Panel__buildViews__Ltrivalibs_graphics_painter_GPUTexture__I__Ltrivalibs_graphics_painter_TextureViewBundle(this, pongTex, mipCount));
    }
    if (this.hr) {
      $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V(this);
    }
    this.fJ = ((1 + this.fJ) | 0);
  }
});
var $d_Ltrivalibs_graphics_painter_Panel = new $TypeData().i($c_Ltrivalibs_graphics_painter_Panel, "trivalibs.graphics.painter.Panel", ({
  ff: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Shade(id, shaderModule, vertexBufferLayout, valueBindGroupLayout, panelBindGroupLayout, pipelineLayout, isLayer, uniformIndices, panelIndices) {
  this.mB = 0;
  this.iF = null;
  this.jW = null;
  this.jV = null;
  this.iE = null;
  this.mC = null;
  this.E = null;
  this.aE = null;
  this.mB = id;
  this.iF = shaderModule;
  this.jW = vertexBufferLayout;
  this.jV = valueBindGroupLayout;
  this.iE = panelBindGroupLayout;
  this.mC = pipelineLayout;
  this.E = uniformIndices;
  this.aE = panelIndices;
}
$p = $c_Ltrivalibs_graphics_painter_Shade.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Shade;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Shade() {
}
$h_Ltrivalibs_graphics_painter_Shade.prototype = $p;
var $d_Ltrivalibs_graphics_painter_Shade = new $TypeData().i($c_Ltrivalibs_graphics_painter_Shade, "trivalibs.graphics.painter.Shade", ({
  fg: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_TextureViewBundle(perMip, sampling) {
  this.aV = null;
  this.mD = null;
  this.aV = perMip;
  this.mD = sampling;
}
$p = $c_Ltrivalibs_graphics_painter_TextureViewBundle.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_TextureViewBundle;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_TextureViewBundle() {
}
$h_Ltrivalibs_graphics_painter_TextureViewBundle.prototype = $p;
var $d_Ltrivalibs_graphics_painter_TextureViewBundle = new $TypeData().i($c_Ltrivalibs_graphics_painter_TextureViewBundle, "trivalibs.graphics.painter.TextureViewBundle", ({
  fi: 1
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
$p.pW = (function() {
  return window.navigator.gpu;
});
$p.pV = (function(canvas) {
  return canvas.getContext("webgpu");
});
var $d_Ltrivalibs_graphics_painter_WebGPU$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_WebGPU$, "trivalibs.graphics.painter.WebGPU$", ({
  fj: 1
}));
var $n_Ltrivalibs_graphics_painter_WebGPU$;
function $m_Ltrivalibs_graphics_painter_WebGPU$() {
  if ((!$n_Ltrivalibs_graphics_painter_WebGPU$)) {
    $n_Ltrivalibs_graphics_painter_WebGPU$ = new $c_Ltrivalibs_graphics_painter_WebGPU$();
  }
  return $n_Ltrivalibs_graphics_painter_WebGPU$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_panel$package$() {
  this.iG = 0;
  this.iG = 0;
}
$p = $c_Ltrivalibs_graphics_painter_panel$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_panel$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_panel$package$() {
}
$h_Ltrivalibs_graphics_painter_panel$package$.prototype = $p;
var $d_Ltrivalibs_graphics_painter_panel$package$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_panel$package$, "trivalibs.graphics.painter.panel$package$", ({
  fk: 1
}));
var $n_Ltrivalibs_graphics_painter_panel$package$;
function $m_Ltrivalibs_graphics_painter_panel$package$() {
  if ((!$n_Ltrivalibs_graphics_painter_panel$package$)) {
    $n_Ltrivalibs_graphics_painter_panel$package$ = new $c_Ltrivalibs_graphics_painter_panel$package$();
  }
  return $n_Ltrivalibs_graphics_painter_panel$package$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController(cam, in$1, sensitivity, speed) {
  this.mE = null;
  this.ap = null;
  this.k0 = 0.0;
  this.mF = 0.0;
  this.mE = cam;
  this.ap = in$1;
  this.k0 = sensitivity;
  this.mF = speed;
}
$p = $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController() {
}
$h_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController.prototype = $p;
$p.fU = (function(tpf) {
  var dist = ((this.mF * tpf) / 1000.0);
  var forward = 0.0;
  if (((this.ap.ay.ba("KeyW") || this.ap.ay.ba("ArrowUp")) || (this.ap.kb.fP && (this.ap.ay.oz() === 1)))) {
    forward = (forward + dist);
  }
  if ((((this.ap.ay.ba("KeyS") || this.ap.ay.ba("ArrowDown")) || this.ap.ay.q8(2)) || (this.ap.ay.oz() >= 2))) {
    forward = (forward - dist);
  }
  var left = 0.0;
  if ((this.ap.ay.ba("KeyA") || this.ap.ay.ba("ArrowLeft"))) {
    left = (left + dist);
  }
  if ((this.ap.ay.ba("KeyD") || this.ap.ay.ba("ArrowRight"))) {
    left = (left - dist);
  }
  var up = 0.0;
  if (this.ap.ay.ba("Space")) {
    up = (up + dist);
  }
  if ((this.ap.ay.ba("ShiftLeft") || this.ap.ay.ba("ShiftRight"))) {
    up = (up - dist);
  }
  var drag = this.ap.ka.pu();
  var deltaH = (((+drag.T) * this.k0) / 1000.0);
  var deltaV = (((+drag.af) * this.k0) / 1000.0);
  this.mE.qO(forward, left, up, deltaH, deltaV);
});
var $d_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController = new $TypeData().i($c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController, "trivalibs.graphics.scene.BasicFirstPersonCameraController", ({
  fl: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_scene_PerspectiveCamera(fov, aspect, near, far, rotH, rotV, pos, proj) {
  this.bs = 0.0;
  this.fM = 0.0;
  this.gG = 0.0;
  this.gF = 0.0;
  this.aL = 0.0;
  this.bt = 0.0;
  this.a5 = null;
  this.iH = null;
  this.bs = fov;
  this.fM = aspect;
  this.gG = near;
  this.gF = far;
  this.aL = rotH;
  this.bt = rotV;
  this.a5 = pos;
  this.iH = proj;
}
$p = $c_Ltrivalibs_graphics_scene_PerspectiveCamera.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_PerspectiveCamera;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_PerspectiveCamera() {
}
$h_Ltrivalibs_graphics_scene_PerspectiveCamera.prototype = $p;
$p.kx = (function(fov, aspect, near, far, rotH, rotV, pos) {
  var needsProj = ((((fov !== this.bs) || (aspect !== this.fM)) || (near !== this.gG)) || (far !== this.gF));
  this.bs = fov;
  this.fM = aspect;
  this.gG = near;
  this.gF = far;
  if ((rotH !== this.aL)) {
    this.aL = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().kG(rotH);
  }
  if ((rotV !== this.bt)) {
    this.bt = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().kE(rotV);
  }
  this.a5 = pos;
  if (needsProj) {
    this.iH = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($m_Ltrivalibs_graphics_math_cpu_Mat4$(), $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().kF(this.bs, this.fM), aspect, near, far);
  }
});
$p.qO = (function(forward, left, up, deltaH, deltaV) {
  if ((deltaH !== 0.0)) {
    this.aL = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().kG((this.aL + deltaH));
  }
  if ((deltaV !== 0.0)) {
    this.bt = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().kE((this.bt + deltaV));
  }
  if ((up !== 0.0)) {
    this.a5 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(this.a5.F, (this.a5.G + up), this.a5.D);
  }
  if ((forward !== 0.0)) {
    var $x_5 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().a7();
    var $x_4 = this.a5;
    var $x_3 = $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
    var $x_2 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().a7();
    var p$proxy1 = this.aL;
    var $x_1 = Math.sin(p$proxy1);
    var p$proxy2 = this.aL;
    this.a5 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($x_5, $x_4, $x_3, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($x_2, new $c_Ltrivalibs_graphics_math_cpu_Vec3((-(+$x_1)), 0.0, (-(+Math.cos(p$proxy2)))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), forward));
  }
  if ((left !== 0.0)) {
    var $x_10 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().a7();
    var $x_9 = this.a5;
    var $x_8 = $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
    var $x_7 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().a7();
    var p$proxy3 = this.aL;
    var $x_6 = Math.cos(p$proxy3);
    var p$proxy4 = this.aL;
    this.a5 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($x_10, $x_9, $x_8, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($x_7, new $c_Ltrivalibs_graphics_math_cpu_Vec3((-(+$x_6)), 0.0, (+Math.sin(p$proxy4))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), left));
  }
});
$p.rT = (function() {
  return new $c_Ltrivalibs_graphics_scene_Transform(this.a5, $f_Ltrivalibs_graphics_math_cpu_QuatImmutableOps__quatMul__O__Ltrivalibs_graphics_math_Vec4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$(), $m_Ltrivalibs_graphics_math_cpu_Quat$().o7(this.aL), $m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$(), $m_Ltrivalibs_graphics_math_cpu_Quat$().pT(this.bt)), new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0));
});
$p.oI = (function() {
  var $x_1 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().gQ();
  var t = this.rT();
  return $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($x_1, $m_Ltrivalibs_graphics_math_cpu_Mat4$().o8(t.mI, t.mG, t.mH), $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
});
var $d_Ltrivalibs_graphics_scene_PerspectiveCamera = new $TypeData().i($c_Ltrivalibs_graphics_scene_PerspectiveCamera, "trivalibs.graphics.scene.PerspectiveCamera", ({
  fm: 1
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
$p.kG = (function(a) {
  var r = (a % 6.283185307179586);
  return ((r < 0.0) ? (r + 6.283185307179586) : r);
});
$p.kE = (function(a) {
  return ((a < (-1.5707963267948966)) ? (-1.5707963267948966) : ((a > 1.5707963267948966) ? 1.5707963267948966 : a));
});
$p.kF = (function(fov, aspect) {
  var p$proxy5 = (0.5 * fov);
  var p$proxy6 = ((+Math.tan(p$proxy5)) / (+Math.min(aspect, 1.0)));
  return (2.0 * (+Math.atan(p$proxy6)));
});
$p.p2 = (function(fov, aspect, near, far, rotH, rotV, pos) {
  var proj = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($m_Ltrivalibs_graphics_math_cpu_Mat4$(), this.kF(fov, aspect), aspect, near, far);
  return new $c_Ltrivalibs_graphics_scene_PerspectiveCamera(fov, aspect, near, far, this.kG(rotH), this.kE(rotV), pos, proj);
});
var $d_Ltrivalibs_graphics_scene_PerspectiveCamera$ = new $TypeData().i($c_Ltrivalibs_graphics_scene_PerspectiveCamera$, "trivalibs.graphics.scene.PerspectiveCamera$", ({
  fn: 1
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
  this.mI = null;
  this.mG = null;
  this.mH = null;
  this.mI = translation;
  this.mG = rotation;
  this.mH = scale;
}
$p = $c_Ltrivalibs_graphics_scene_Transform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_Transform;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_Transform() {
}
$h_Ltrivalibs_graphics_scene_Transform.prototype = $p;
var $d_Ltrivalibs_graphics_scene_Transform = new $TypeData().i($c_Ltrivalibs_graphics_scene_Transform, "trivalibs.graphics.scene.Transform", ({
  fo: 1
}));
function $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($thiz, builtins) {
  var s = "";
  var i = 0;
  while ((i < (builtins.length | 0))) {
    var b = builtins[i];
    s = ((s + ((((", @builtin(" + b.aQ) + ") ") + b.aB) + ": ")) + b.aZ);
    i = ((1 + i) | 0);
  }
  return s;
}
function $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($thiz, structName, locNames, locTypes, builtins) {
  var array$1 = $m_sjs_js_ArrayOps$().oM($m_sjs_js_ArrayOps$().oL(locNames, new $c_sjs_js_WrappedArray(locTypes)));
  var len = (array$1.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    var $x_2 = i;
    var x0 = array$1[i];
    matchResult3: {
      var $x_1;
      if ((x0 !== null)) {
        var x11 = x0.T;
        if ((x11 !== null)) {
          var name = x11.T;
          var typ = x11.af;
          var $x_1 = (((((("  @location(" + (x0.af | 0)) + ") ") + name) + ": ") + typ) + ",");
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
        var name$1 = x0$1.aB;
        var builtin = x0$1.aQ;
        var typ$1 = x0$1.aZ;
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
  var array$1 = $m_sjs_js_ArrayOps$().oM($m_sjs_js_ArrayOps$().oL(names, new $c_sjs_js_WrappedArray(types)));
  var len = (array$1.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    var $x_3 = i;
    var x0 = array$1[i];
    matchResult5: {
      var $x_2;
      if ((x0 !== null)) {
        var x20 = x0.T;
        if ((x20 !== null)) {
          var name = x20.T;
          var typ = x20.af;
          var bindingIdx = (x0.af | 0);
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
  fr: 1
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
  this.S = null;
  this.S = target;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_AssignTarget.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_AssignTarget;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_AssignTarget() {
}
$h_Ltrivalibs_graphics_shader_dsl_AssignTarget.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_AssignTarget = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_AssignTarget, "trivalibs.graphics.shader.dsl.AssignTarget", ({
  fs: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_FnRegistry() {
  this.k1 = null;
  this.a0 = null;
  this.k1 = ({});
  this.a0 = [];
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FnRegistry() {
}
$h_Ltrivalibs_graphics_shader_dsl_FnRegistry.prototype = $p;
$p.oH = (function(d) {
  if ((!(!(!(!(!this.k1.hasOwnProperty(d.name))))))) {
    this.k1[d.name] = true;
    var array = d.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      this.oH(array[i]);
      i = ((1 + i) | 0);
    }
    this.a0.push(d);
  }
});
var $d_Ltrivalibs_graphics_shader_dsl_FnRegistry = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FnRegistry, "trivalibs.graphics.shader.dsl.FnRegistry", ({
  ft: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$() {
  this.m = null;
  this.m = null;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FnRegistry$() {
}
$h_Ltrivalibs_graphics_shader_dsl_FnRegistry$.prototype = $p;
$p.j0 = (function(d) {
  var r = this.m;
  if ((r !== null)) {
    r.oH(d);
  }
});
var $d_Ltrivalibs_graphics_shader_dsl_FnRegistry$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FnRegistry$, "trivalibs.graphics.shader.dsl.FnRegistry$", ({
  fu: 1
}));
var $n_Ltrivalibs_graphics_shader_dsl_FnRegistry$;
function $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$() {
  if ((!$n_Ltrivalibs_graphics_shader_dsl_FnRegistry$)) {
    $n_Ltrivalibs_graphics_shader_dsl_FnRegistry$ = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$();
  }
  return $n_Ltrivalibs_graphics_shader_dsl_FnRegistry$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(in$1, out, bindings, textures) {
  this.ah = null;
  this.at = null;
  this.I = null;
  this.oS = null;
  this.gH = null;
  this.ah = in$1;
  this.at = out;
  this.I = bindings;
  this.oS = textures;
  this.gH = ($m_Ltrivalibs_graphics_math_gpu_expr$package$(), $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "in.position"));
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FragmentCtx() {
}
$h_Ltrivalibs_graphics_shader_dsl_FragmentCtx.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_FragmentCtx = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FragmentCtx, "trivalibs.graphics.shader.dsl.FragmentCtx", ({
  fv: 1
}));
function $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, data) {
  if ((!(!(!(!(!$thiz.k2.hasOwnProperty(data.name))))))) {
    var dict = $thiz.k2;
    var key = data.name;
    dict[key] = true;
    var array = data.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, array[i]);
      i = ((1 + i) | 0);
    }
    $thiz.k3.push(data.src);
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_LayerProgram() {
  this.a1 = null;
  this.k3 = null;
  this.k2 = null;
  this.a1 = "";
  this.k3 = [];
  this.k2 = ({});
}
$p = $c_Ltrivalibs_graphics_shader_dsl_LayerProgram.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_LayerProgram;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_LayerProgram() {
}
$h_Ltrivalibs_graphics_shader_dsl_LayerProgram.prototype = $p;
$p.au = (function() {
  return this.k3.join("\n\n");
});
var $d_Ltrivalibs_graphics_shader_dsl_LayerProgram = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_LayerProgram, "trivalibs.graphics.shader.dsl.LayerProgram", ({
  fw: 1
}));
function $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, data) {
  if ((!(!(!(!(!$thiz.k4.hasOwnProperty(data.name))))))) {
    var dict = $thiz.k4;
    var key = data.name;
    dict[key] = true;
    var array = data.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, array[i]);
      i = ((1 + i) | 0);
    }
    $thiz.k5.push(data.src);
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_Program() {
  this.bk = null;
  this.b6 = null;
  this.k5 = null;
  this.k4 = null;
  this.bk = "";
  this.b6 = "";
  this.k5 = [];
  this.k4 = ({});
}
$p = $c_Ltrivalibs_graphics_shader_dsl_Program.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_Program;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_Program() {
}
$h_Ltrivalibs_graphics_shader_dsl_Program.prototype = $p;
$p.au = (function() {
  return this.k5.join("\n\n");
});
var $d_Ltrivalibs_graphics_shader_dsl_Program = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_Program, "trivalibs.graphics.shader.dsl.Program", ({
  fx: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(in$1, out, bindings, textures) {
  this.aW = null;
  this.aM = null;
  this.hw = null;
  this.aW = in$1;
  this.aM = out;
  this.hw = bindings;
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
}
$p = $c_Ltrivalibs_graphics_shader_dsl_VertexCtx.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_VertexCtx;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_VertexCtx() {
}
$h_Ltrivalibs_graphics_shader_dsl_VertexCtx.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_VertexCtx = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_VertexCtx, "trivalibs.graphics.shader.dsl.VertexCtx", ({
  fB: 1
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
$p.oT = (function() {
  return [];
});
var $d_Ltrivalibs_graphics_shader_dsl_WgslFnData$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_WgslFnData$, "trivalibs.graphics.shader.dsl.WgslFnData$", ({
  fD: 1
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
$p.ak = (function(fn, ds) {
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
  ds.fR(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((d$3) => {
    if ((!(!(!(!(!seen.hasOwnProperty(d$3.name))))))) {
      seen[d$3.name] = true;
      merged.push(d$3);
    }
  })));
  return new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())(fn.name, fn.src, merged);
});
$p.ko = (function(fn, a1, a2, a3, a4) {
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().j0(fn);
  return (((((((((fn.name + "(") + a1) + ", ") + a2) + ", ") + a3) + ", ") + a4) + ")");
});
$p.gO = (function(fn, a1, a2, a3, a4, a5) {
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().j0(fn);
  return (((((((((((fn.name + "(") + a1) + ", ") + a2) + ", ") + a3) + ", ") + a4) + ", ") + a5) + ")");
});
$p.kn = (function(fn, a1, a2, a3, a4, a5, a6) {
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().j0(fn);
  return (((((((((((((fn.name + "(") + a1) + ", ") + a2) + ", ") + a3) + ", ") + a4) + ", ") + a5) + ", ") + a6) + ")");
});
$p.pm = (function(fn, a1, a2, a3, a4, a5, a6, a7) {
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().j0(fn);
  return (((((((((((((((fn.name + "(") + a1) + ", ") + a2) + ", ") + a3) + ", ") + a4) + ", ") + a5) + ", ") + a6) + ", ") + a7) + ")");
});
var $d_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$, "trivalibs.graphics.shader.dsl.fn$package$WgslFn$", ({
  fE: 1
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
$p.Q = (function(device, bindGroupLayouts) {
  return device.createPipelineLayout(({
    "bindGroupLayouts": bindGroupLayouts
  }));
});
var $d_Ltrivalibs_graphics_shader_layouts$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_layouts$, "trivalibs.graphics.shader.layouts$", ({
  fF: 1
}));
var $n_Ltrivalibs_graphics_shader_layouts$;
function $m_Ltrivalibs_graphics_shader_layouts$() {
  if ((!$n_Ltrivalibs_graphics_shader_layouts$)) {
    $n_Ltrivalibs_graphics_shader_layouts$ = new $c_Ltrivalibs_graphics_shader_layouts$();
  }
  return $n_Ltrivalibs_graphics_shader_layouts$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_lib_blur_Blur$() {
}
$p = $c_Ltrivalibs_graphics_shader_lib_blur_Blur$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_blur_Blur$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_blur_Blur$() {
}
$h_Ltrivalibs_graphics_shader_lib_blur_Blur$.prototype = $p;
$p.ph = (function(tex, s, uv, radius, res) {
  if ((res === null)) {
    var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy1 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$().pj();
    var s$proxy1 = WgslFn$_this.ko(fn$proxy1, tex, s, uv, radius);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy1);
  } else {
    var WgslFn$_this$2 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy2 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$().pi();
    var s$proxy2 = WgslFn$_this$2.gO(fn$proxy2, tex, s, uv, res, radius);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy2);
  }
});
$p.rM = (function(tex, s, uv, radius, res) {
  if ((res === null)) {
    var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy3 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$().rO();
    var s$proxy3 = WgslFn$_this.ko(fn$proxy3, tex, s, uv, radius);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy3);
  } else {
    var WgslFn$_this$2 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy4 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$().rN();
    var s$proxy4 = WgslFn$_this$2.gO(fn$proxy4, tex, s, uv, res, radius);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy4);
  }
});
var $d_Ltrivalibs_graphics_shader_lib_blur_Blur$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_blur_Blur$, "trivalibs.graphics.shader.lib.blur.Blur$", ({
  fG: 1
}));
var $n_Ltrivalibs_graphics_shader_lib_blur_Blur$;
function $m_Ltrivalibs_graphics_shader_lib_blur_Blur$() {
  if ((!$n_Ltrivalibs_graphics_shader_lib_blur_Blur$)) {
    $n_Ltrivalibs_graphics_shader_lib_blur_Blur$ = new $c_Ltrivalibs_graphics_shader_lib_blur_Blur$();
  }
  return $n_Ltrivalibs_graphics_shader_lib_blur_Blur$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$() {
  this.mO = null;
  this.mP = false;
  this.mK = null;
  this.mN = false;
  this.mQ = null;
  this.mT = false;
  this.mL = null;
  this.mM = false;
  this.mR = null;
  this.mS = false;
}
$p = $c_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$() {
}
$h_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$.prototype = $p;
$p.pU = (function() {
  if ((!this.mP)) {
    this.mO = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("blur_gaussian_9", "fn blur_gaussian_9(tex: texture_2d<f32>, s: sampler, uv: vec2<f32>, res: vec2<f32>, dir: vec2<f32>) -> vec4<f32> {\n  let off1 = vec2<f32>(1.3846153846) * dir / res;\n    let off2 = vec2<f32>(3.2307692308) * dir / res;\n    var color = textureSample(tex, s, uv) * 0.2270270270;\n    color += textureSample(tex, s, uv + off1) * 0.3162162162;\n    color += textureSample(tex, s, uv - off1) * 0.3162162162;\n    color += textureSample(tex, s, uv + off2) * 0.0702702703;\n    color += textureSample(tex, s, uv - off2) * 0.0702702703;\n    return color;\n}");
    this.mP = true;
  }
  return this.mO;
});
$p.pi = (function() {
  if ((!this.mN)) {
    this.mK = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("blur_box_2d", "fn blur_box_2d(tex: texture_2d<f32>, s: sampler, uv: vec2<f32>, res: vec2<f32>, radius: f32) -> vec4<f32> {\n  let o = vec2<f32>(radius) / res;\n    var color = textureSample(tex, s, uv - o);\n    color += textureSample(tex, s, uv + vec2<f32>(o.x, -o.y));\n    color += textureSample(tex, s, uv + vec2<f32>(-o.x, o.y));\n    color += textureSample(tex, s, uv + o);\n    return color * 0.25;\n}");
    this.mN = true;
  }
  return this.mK;
});
$p.rN = (function() {
  if ((!this.mT)) {
    this.mQ = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("blur_tent_2d", "fn blur_tent_2d(tex: texture_2d<f32>, s: sampler, uv: vec2<f32>, res: vec2<f32>, radius: f32) -> vec4<f32> {\n  let o = vec2<f32>(radius) / res;\n    var color = textureSample(tex, s, uv) * 0.25;\n    color += (textureSample(tex, s, uv + vec2<f32>(0.0, o.y)) + textureSample(tex, s, uv + vec2<f32>(0.0, -o.y)) + textureSample(tex, s, uv + vec2<f32>(o.x, 0.0)) + textureSample(tex, s, uv + vec2<f32>(-o.x, 0.0))) * 0.125;\n    color += (textureSample(tex, s, uv + o) + textureSample(tex, s, uv + vec2<f32>(-o.x, o.y)) + textureSample(tex, s, uv + vec2<f32>(o.x, -o.y)) + textureSample(tex, s, uv - o)) * 0.0625;\n    return color;\n}");
    this.mT = true;
  }
  return this.mQ;
});
$p.pj = (function() {
  if ((!this.mM)) {
    this.mL = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("blur_box_2d_auto", "fn blur_box_2d_auto(tex: texture_2d<f32>, s: sampler, uv: vec2<f32>, radius: f32) -> vec4<f32> {\n  let o = vec2<f32>(radius) / vec2<f32>(textureDimensions(tex));\n    var color = textureSample(tex, s, uv - o);\n    color += textureSample(tex, s, uv + vec2<f32>(o.x, -o.y));\n    color += textureSample(tex, s, uv + vec2<f32>(-o.x, o.y));\n    color += textureSample(tex, s, uv + o);\n    return color * 0.25;\n}");
    this.mM = true;
  }
  return this.mL;
});
$p.rO = (function() {
  if ((!this.mS)) {
    this.mR = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("blur_tent_2d_auto", "fn blur_tent_2d_auto(tex: texture_2d<f32>, s: sampler, uv: vec2<f32>, radius: f32) -> vec4<f32> {\n  let o = vec2<f32>(radius) / vec2<f32>(textureDimensions(tex));\n    var color = textureSample(tex, s, uv) * 0.25;\n    color += (textureSample(tex, s, uv + vec2<f32>(0.0, o.y)) + textureSample(tex, s, uv + vec2<f32>(0.0, -o.y)) + textureSample(tex, s, uv + vec2<f32>(o.x, 0.0)) + textureSample(tex, s, uv + vec2<f32>(-o.x, 0.0))) * 0.125;\n    color += (textureSample(tex, s, uv + o) + textureSample(tex, s, uv + vec2<f32>(-o.x, o.y)) + textureSample(tex, s, uv + vec2<f32>(o.x, -o.y)) + textureSample(tex, s, uv - o)) * 0.0625;\n    return color;\n}");
    this.mS = true;
  }
  return this.mR;
});
var $d_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$, "trivalibs.graphics.shader.lib.blur.Blur$wgsl$", ({
  fH: 1
}));
var $n_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$;
function $m_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$() {
  if ((!$n_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$)) {
    $n_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$ = new $c_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$();
  }
  return $n_Ltrivalibs_graphics_shader_lib_blur_Blur$wgsl$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_lib_noise_Extended$() {
}
$p = $c_Ltrivalibs_graphics_shader_lib_noise_Extended$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_noise_Extended$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_noise_Extended$() {
}
$h_Ltrivalibs_graphics_shader_lib_noise_Extended$.prototype = $p;
$p.iN = (function(pos, octaves, lacunarity, gain, tilingPeriod, rot, seed) {
  var o = $m_Ltrivalibs_graphics_lib_args$package$().rQ(octaves);
  var p = (tilingPeriod !== null);
  var r = (rot !== null);
  if ((seed === null)) {
    if ((p && r)) {
      var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
      var fn$proxy57 = $m_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$().r9();
      var a6$proxy7 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().O(rot, 6.283185307179586);
      var s$proxy57 = WgslFn$_this.kn(fn$proxy57, pos, o, lacunarity, gain, tilingPeriod, a6$proxy7);
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy57);
    } else if (p) {
      var WgslFn$_this$2 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
      var fn$proxy58 = $m_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$().r5();
      var s$proxy58 = WgslFn$_this$2.gO(fn$proxy58, pos, o, lacunarity, gain, tilingPeriod);
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy58);
    } else if (r) {
      var WgslFn$_this$3 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
      var fn$proxy59 = $m_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$().rD();
      var a5$proxy21 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().O(rot, 6.283185307179586);
      var s$proxy59 = WgslFn$_this$3.gO(fn$proxy59, pos, o, lacunarity, gain, a5$proxy21);
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy59);
    } else {
      var WgslFn$_this$4 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
      var fn$proxy60 = $m_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$().ru();
      var s$proxy60 = WgslFn$_this$4.ko(fn$proxy60, pos, o, lacunarity, gain);
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy60);
    }
  } else if ((p && r)) {
    var WgslFn$_this$5 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy61 = $m_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$().ra();
    var a6$proxy8 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().O(rot, 6.283185307179586);
    var s$proxy61 = WgslFn$_this$5.pm(fn$proxy61, pos, o, lacunarity, gain, tilingPeriod, a6$proxy8, seed);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy61);
  } else if (p) {
    var WgslFn$_this$6 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy62 = $m_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$().r6();
    var s$proxy62 = WgslFn$_this$6.kn(fn$proxy62, pos, o, lacunarity, gain, tilingPeriod, seed);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy62);
  } else if (r) {
    var WgslFn$_this$7 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy63 = $m_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$().rE();
    var a5$proxy24 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().O(rot, 6.283185307179586);
    var s$proxy63 = WgslFn$_this$7.kn(fn$proxy63, pos, o, lacunarity, gain, a5$proxy24, seed);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy63);
  } else {
    var WgslFn$_this$8 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy64 = $m_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$().rv();
    var s$proxy64 = WgslFn$_this$8.gO(fn$proxy64, pos, o, lacunarity, gain, seed);
    $m_Ltrivalibs_graphics_math_gpu_expr$package$();
    return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), s$proxy64);
  }
});
var $d_Ltrivalibs_graphics_shader_lib_noise_Extended$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_noise_Extended$, "trivalibs.graphics.shader.lib.noise.Extended$", ({
  fI: 1
}));
var $n_Ltrivalibs_graphics_shader_lib_noise_Extended$;
function $m_Ltrivalibs_graphics_shader_lib_noise_Extended$() {
  if ((!$n_Ltrivalibs_graphics_shader_lib_noise_Extended$)) {
    $n_Ltrivalibs_graphics_shader_lib_noise_Extended$ = new $c_Ltrivalibs_graphics_shader_lib_noise_Extended$();
  }
  return $n_Ltrivalibs_graphics_shader_lib_noise_Extended$;
}
function $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__mod289v4__Ltrivalibs_graphics_shader_dsl_WgslFnData($thiz) {
  if ((!$thiz.mV)) {
    $thiz.mU = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_mod289_4", "fn extended_mod289_4(i: vec4<f32>) -> vec4<f32> {\n  return i - floor(i / 289.0) * 289.0;\n}");
    $thiz.mV = true;
  }
  return $thiz.mU;
}
function $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__permute4__Ltrivalibs_graphics_shader_dsl_WgslFnData($thiz) {
  if ((!$thiz.mX)) {
    $thiz.mW = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$().ak(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_permute_4", "fn extended_permute_4(i: vec4<f32>) -> vec4<f32> {\n  let im = extended_mod289_4(i);\n  return extended_mod289_4((im * 34.0 + 10.0) * im);\n}"), new $c_sjsr_WrappedVarArgs([$p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__mod289v4__Ltrivalibs_graphics_shader_dsl_WgslFnData($thiz)]));
    $thiz.mX = true;
  }
  return $thiz.mW;
}
function $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__body3__Z__Z__Z__Z__T($thiz, periodic, rotating, gradient, seeded) {
  var wrap = (periodic ? "  if (any(p > vec3<f32>(0.0))) {\n    var vx = vec4<f32>(v0.x, v1.x, v2.x, v3.x);\n    var vy = vec4<f32>(v0.y, v1.y, v2.y, v3.y);\n    var vz = vec4<f32>(v0.z, v1.z, v2.z, v3.z);\n    if (p.x > 0.0) {\n      vx = vx - floor(vx / p.x) * p.x;\n    }\n    if (p.y > 0.0) {\n      vy = vy - floor(vy / p.y) * p.y;\n    }\n    if (p.z > 0.0) {\n      vz = vz - floor(vz / p.z) * p.z;\n    }\n    i0 = floor(M * vec3<f32>(vx.x, vy.x, vz.x) + 0.5);\n    i1 = floor(M * vec3<f32>(vx.y, vy.y, vz.y) + 0.5);\n    i2 = floor(M * vec3<f32>(vx.z, vy.z, vz.z) + 0.5);\n    i3 = floor(M * vec3<f32>(vx.w, vy.w, vz.w) + 0.5);\n  }\n" : "");
  var seed = (seeded ? "  hash = extended_permute_4(extended_permute_4(hash + so.x) + so.y);\n" : "");
  var gradients = (rotating ? "  let psi = hash * 0.108705628;\n  let Ct = cos(theta);\n  let St = sin(theta);\n  let sz_ = sqrt(1.0 - sz * sz);\n  var gx: vec4<f32>;\n  var gy: vec4<f32>;\n  var gz: vec4<f32>;\n  if (alpha != 0.0) {\n    let px = Ct * sz_;\n    let py = St * sz_;\n    let pz = sz;\n    let Sp = sin(psi);\n    let Cp = cos(psi);\n    let Ctp = St * Sp - Ct * Cp;\n    let qx = mix(Ctp * St, Sp, sz);\n    let qy = mix(-Ctp * Ct, Cp, sz);\n    let qz = -(py * Cp + px * Sp);\n    let Sa = vec4<f32>(sin(alpha));\n    let Ca = vec4<f32>(cos(alpha));\n    gx = Ca * px + Sa * qx;\n    gy = Ca * py + Sa * qy;\n    gz = Ca * pz + Sa * qz;\n  } else {\n    gx = Ct * sz_;\n    gy = St * sz_;\n    gz = sz;\n  }\n" : "  let Ct = cos(theta);\n  let St = sin(theta);\n  let sz_ = sqrt(1.0 - sz * sz);\n  let gx = Ct * sz_;\n  let gy = St * sz_;\n  let gz = sz;\n");
  var result = (gradient ? "  let n = 39.5 * dot(w3, gdotx);\n  let dw = -6.0 * w2 * gdotx;\n  let dn0 = w3.x * g0 + dw.x * x0;\n  let dn1 = w3.y * g1 + dw.y * x1;\n  let dn2 = w3.z * g2 + dw.z * x2;\n  let dn3 = w3.w * g3 + dw.w * x3;\n  let g = 39.5 * (dn0 + dn1 + dn2 + dn3);\n  return vec4<f32>(n, g);" : "  let n = dot(w3, gdotx);\n  return 39.5 * n;");
  return ((((((("  let M = mat3x3<f32>(0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0);\n  let Mi = mat3x3<f32>(-0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, -0.5);\n  let uvw = M * x;\n  var i0 = floor(uvw);\n  let f0 = uvw - i0;\n  let gt_ = step(f0.xyx, f0.yzz);\n  let lt_ = 1.0 - gt_;\n  let gt = vec3<f32>(lt_.z, gt_.xy);\n  let lt = vec3<f32>(lt_.xy, gt_.z);\n  let o1 = min(gt, lt);\n  let o2 = max(gt, lt);\n  var i1 = i0 + o1;\n  var i2 = i0 + o2;\n  var i3 = i0 + vec3<f32>(1.0, 1.0, 1.0);\n  let v0 = Mi * i0;\n  let v1 = Mi * i1;\n  let v2 = Mi * i2;\n  let v3 = Mi * i3;\n  let x0 = x - v0;\n  let x1 = x - v1;\n  let x2 = x - v2;\n  let x3 = x - v3;\n" + wrap) + "  var hash = extended_permute_4(extended_permute_4(extended_permute_4(vec4<f32>(i0.z, i1.z, i2.z, i3.z)) + vec4<f32>(i0.y, i1.y, i2.y, i3.y)) + vec4<f32>(i0.x, i1.x, i2.x, i3.x));\n") + seed) + "  let theta = hash * 3.883222077;\n  let sz = hash * -0.006920415 + 0.996539792;\n") + gradients) + "  let g0 = vec3<f32>(gx.x, gy.x, gz.x);\n  let g1 = vec3<f32>(gx.y, gy.y, gz.y);\n  let g2 = vec3<f32>(gx.z, gy.z, gz.z);\n  let g3 = vec3<f32>(gx.w, gy.w, gz.w);\n  var w = 0.5 - vec4<f32>(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3));\n  w = max(w, vec4<f32>(0.0, 0.0, 0.0, 0.0));\n  let w2 = w * w;\n  let w3 = w2 * w;\n  let gdotx = vec4<f32>(dot(g0, x0), dot(g1, x1), dot(g2, x2), dot(g3, x3));\n") + result);
}
function $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__fbmBody__T__I__Z__Z__T($thiz, call, dim, gradient, seeded) {
  var soLine = (seeded ? "  let so = noise_seed_offsets(seed);\n" : "");
  var this$1 = call.split("X").join("x * frequency");
  var this$2 = this$1.split("P").join("p * frequency");
  var c = this$2.split("SO").join("vec2<f32>((so.x + f32(i)) % 289.0, so.y)");
  if (gradient) {
    var vt = ((dim === 2) ? "vec3<f32>" : "vec4<f32>");
    var gs = ((dim === 2) ? "ng.yz" : "ng.yzw");
    var \u03b41$___1 = (("  var sum = " + vt) + "(0.0);\n");
    var \u03b41$___2 = (((((("    let ng = " + c) + ";\n    sum += ") + vt) + "(ng.x, ") + gs) + " * frequency) * amplitude;\n");
  } else {
    var \u03b41$___1 = "  var sum = 0.0;\n";
    var \u03b41$___2 = (("    sum += " + c) + " * amplitude;\n");
  }
  var init = \u03b41$___1;
  var accumulate = \u03b41$___2;
  return ((((soLine + init) + "  var amplitude = 1.0;\n  var total = 0.0;\n  var frequency = 1.0;\n  for (var i = 0; i < octaves; i += 1) {\n") + accumulate) + "    total += amplitude;\n    amplitude *= gain;\n    frequency *= lacunarity;\n  }\n  return sum / total;");
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$() {
  this.mU = null;
  this.mV = false;
  this.mW = null;
  this.mX = false;
  this.na = null;
  this.nd = false;
  this.n2 = null;
  this.n5 = false;
  this.nq = null;
  this.nt = false;
  this.ni = null;
  this.nl = false;
  this.nb = null;
  this.nc = false;
  this.n3 = null;
  this.n4 = false;
  this.nr = null;
  this.ns = false;
  this.nj = null;
  this.nk = false;
  this.n6 = null;
  this.n9 = false;
  this.mY = null;
  this.n1 = false;
  this.nm = null;
  this.np = false;
  this.ne = null;
  this.nh = false;
  this.n7 = null;
  this.n8 = false;
  this.mZ = null;
  this.n0 = false;
  this.nn = null;
  this.no = false;
  this.nf = null;
  this.ng = false;
}
$p = $c_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$() {
}
$h_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$.prototype = $p;
$p.rb = (function() {
  if ((!this.nd)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy17 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__body3__Z__Z__Z__Z__T(this, true, true, false, false);
    var src = (("fn extended_psrnoise_3(x: vec3<f32>, p: vec3<f32>, alpha: f32) -> f32 {\n" + body$proxy17) + "\n}");
    this.na = $x_1.ak(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_psrnoise_3", src), new $c_sjsr_WrappedVarArgs([$p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__permute4__Ltrivalibs_graphics_shader_dsl_WgslFnData(this)]));
    this.nd = true;
  }
  return this.na;
});
$p.r7 = (function() {
  if ((!this.n5)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy18 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__body3__Z__Z__Z__Z__T(this, true, false, false, false);
    var src = (("fn extended_psnoise_3(x: vec3<f32>, p: vec3<f32>) -> f32 {\n" + body$proxy18) + "\n}");
    this.n2 = $x_1.ak(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_psnoise_3", src), new $c_sjsr_WrappedVarArgs([$p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__permute4__Ltrivalibs_graphics_shader_dsl_WgslFnData(this)]));
    this.n5 = true;
  }
  return this.n2;
});
$p.rF = (function() {
  if ((!this.nt)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy19 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__body3__Z__Z__Z__Z__T(this, false, true, false, false);
    var src = (("fn extended_srnoise_3(x: vec3<f32>, alpha: f32) -> f32 {\n" + body$proxy19) + "\n}");
    this.nq = $x_1.ak(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_srnoise_3", src), new $c_sjsr_WrappedVarArgs([$p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__permute4__Ltrivalibs_graphics_shader_dsl_WgslFnData(this)]));
    this.nt = true;
  }
  return this.nq;
});
$p.rB = (function() {
  if ((!this.nl)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy20 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__body3__Z__Z__Z__Z__T(this, false, false, false, false);
    var src = (("fn extended_snoise_3(x: vec3<f32>) -> f32 {\n" + body$proxy20) + "\n}");
    this.ni = $x_1.ak(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_snoise_3", src), new $c_sjsr_WrappedVarArgs([$p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__permute4__Ltrivalibs_graphics_shader_dsl_WgslFnData(this)]));
    this.nl = true;
  }
  return this.ni;
});
$p.rc = (function() {
  if ((!this.nc)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy25 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__body3__Z__Z__Z__Z__T(this, true, true, false, true);
    var src = (("fn extended_psrnoise_3_so(x: vec3<f32>, p: vec3<f32>, alpha: f32, so: vec2<f32>) -> f32 {\n" + body$proxy25) + "\n}");
    this.nb = $x_1.ak(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_psrnoise_3_so", src), new $c_sjsr_WrappedVarArgs([$p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__permute4__Ltrivalibs_graphics_shader_dsl_WgslFnData(this)]));
    this.nc = true;
  }
  return this.nb;
});
$p.r8 = (function() {
  if ((!this.n4)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy26 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__body3__Z__Z__Z__Z__T(this, true, false, false, true);
    var src = (("fn extended_psnoise_3_so(x: vec3<f32>, p: vec3<f32>, so: vec2<f32>) -> f32 {\n" + body$proxy26) + "\n}");
    this.n3 = $x_1.ak(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_psnoise_3_so", src), new $c_sjsr_WrappedVarArgs([$p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__permute4__Ltrivalibs_graphics_shader_dsl_WgslFnData(this)]));
    this.n4 = true;
  }
  return this.n3;
});
$p.rG = (function() {
  if ((!this.ns)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy27 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__body3__Z__Z__Z__Z__T(this, false, true, false, true);
    var src = (("fn extended_srnoise_3_so(x: vec3<f32>, alpha: f32, so: vec2<f32>) -> f32 {\n" + body$proxy27) + "\n}");
    this.nr = $x_1.ak(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_srnoise_3_so", src), new $c_sjsr_WrappedVarArgs([$p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__permute4__Ltrivalibs_graphics_shader_dsl_WgslFnData(this)]));
    this.ns = true;
  }
  return this.nr;
});
$p.rC = (function() {
  if ((!this.nk)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy28 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__body3__Z__Z__Z__Z__T(this, false, false, false, true);
    var src = (("fn extended_snoise_3_so(x: vec3<f32>, so: vec2<f32>) -> f32 {\n" + body$proxy28) + "\n}");
    this.nj = $x_1.ak(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_snoise_3_so", src), new $c_sjsr_WrappedVarArgs([$p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__permute4__Ltrivalibs_graphics_shader_dsl_WgslFnData(this)]));
    this.nk = true;
  }
  return this.nj;
});
$p.r9 = (function() {
  if ((!this.n9)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy57 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__fbmBody__T__I__Z__Z__T(this, "extended_psrnoise_3(X, P, alpha)", 3, false, false);
    var src = (("fn extended_psrfbm_3(x: vec3<f32>, octaves: i32, lacunarity: f32, gain: f32, p: vec3<f32>, alpha: f32) -> f32 {\n" + body$proxy57) + "\n}");
    this.n6 = $x_1.ak(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_psrfbm_3", src), new $c_sjsr_WrappedVarArgs([this.rb()]));
    this.n9 = true;
  }
  return this.n6;
});
$p.r5 = (function() {
  if ((!this.n1)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy58 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__fbmBody__T__I__Z__Z__T(this, "extended_psnoise_3(X, P)", 3, false, false);
    var src = (("fn extended_psfbm_3(x: vec3<f32>, octaves: i32, lacunarity: f32, gain: f32, p: vec3<f32>) -> f32 {\n" + body$proxy58) + "\n}");
    this.mY = $x_1.ak(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_psfbm_3", src), new $c_sjsr_WrappedVarArgs([this.r7()]));
    this.n1 = true;
  }
  return this.mY;
});
$p.rD = (function() {
  if ((!this.np)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy59 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__fbmBody__T__I__Z__Z__T(this, "extended_srnoise_3(X, alpha)", 3, false, false);
    var src = (("fn extended_srfbm_3(x: vec3<f32>, octaves: i32, lacunarity: f32, gain: f32, alpha: f32) -> f32 {\n" + body$proxy59) + "\n}");
    this.nm = $x_1.ak(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_srfbm_3", src), new $c_sjsr_WrappedVarArgs([this.rF()]));
    this.np = true;
  }
  return this.nm;
});
$p.ru = (function() {
  if ((!this.nh)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy60 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__fbmBody__T__I__Z__Z__T(this, "extended_snoise_3(X)", 3, false, false);
    var src = (("fn extended_sfbm_3(x: vec3<f32>, octaves: i32, lacunarity: f32, gain: f32) -> f32 {\n" + body$proxy60) + "\n}");
    this.ne = $x_1.ak(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_sfbm_3", src), new $c_sjsr_WrappedVarArgs([this.rB()]));
    this.nh = true;
  }
  return this.ne;
});
$p.ra = (function() {
  if ((!this.n8)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy65 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__fbmBody__T__I__Z__Z__T(this, "extended_psrnoise_3_so(X, P, alpha, SO)", 3, false, true);
    var src = (("fn extended_psrfbm_3_seeded(x: vec3<f32>, octaves: i32, lacunarity: f32, gain: f32, p: vec3<f32>, alpha: f32, seed: f32) -> f32 {\n" + body$proxy65) + "\n}");
    this.n7 = $x_1.ak(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_psrfbm_3_seeded", src), new $c_sjsr_WrappedVarArgs([this.rc(), $m_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$().iV()]));
    this.n8 = true;
  }
  return this.n7;
});
$p.r6 = (function() {
  if ((!this.n0)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy66 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__fbmBody__T__I__Z__Z__T(this, "extended_psnoise_3_so(X, P, SO)", 3, false, true);
    var src = (("fn extended_psfbm_3_seeded(x: vec3<f32>, octaves: i32, lacunarity: f32, gain: f32, p: vec3<f32>, seed: f32) -> f32 {\n" + body$proxy66) + "\n}");
    this.mZ = $x_1.ak(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_psfbm_3_seeded", src), new $c_sjsr_WrappedVarArgs([this.r8(), $m_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$().iV()]));
    this.n0 = true;
  }
  return this.mZ;
});
$p.rE = (function() {
  if ((!this.no)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy67 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__fbmBody__T__I__Z__Z__T(this, "extended_srnoise_3_so(X, alpha, SO)", 3, false, true);
    var src = (("fn extended_srfbm_3_seeded(x: vec3<f32>, octaves: i32, lacunarity: f32, gain: f32, alpha: f32, seed: f32) -> f32 {\n" + body$proxy67) + "\n}");
    this.nn = $x_1.ak(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_srfbm_3_seeded", src), new $c_sjsr_WrappedVarArgs([this.rG(), $m_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$().iV()]));
    this.no = true;
  }
  return this.nn;
});
$p.rv = (function() {
  if ((!this.ng)) {
    var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var body$proxy68 = $p_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$__fbmBody__T__I__Z__Z__T(this, "extended_snoise_3_so(X, SO)", 3, false, true);
    var src = (("fn extended_sfbm_3_seeded(x: vec3<f32>, octaves: i32, lacunarity: f32, gain: f32, seed: f32) -> f32 {\n" + body$proxy68) + "\n}");
    this.nf = $x_1.ak(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("extended_sfbm_3_seeded", src), new $c_sjsr_WrappedVarArgs([this.rC(), $m_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$().iV()]));
    this.ng = true;
  }
  return this.nf;
});
var $d_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$, "trivalibs.graphics.shader.lib.noise.Extended$wgsl$", ({
  fJ: 1
}));
var $n_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$;
function $m_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$() {
  if ((!$n_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$)) {
    $n_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$ = new $c_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$();
  }
  return $n_Ltrivalibs_graphics_shader_lib_noise_Extended$wgsl$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$() {
  this.nu = null;
  this.nv = false;
}
$p = $c_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$() {
}
$h_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$.prototype = $p;
$p.iV = (function() {
  if ((!this.nv)) {
    this.nu = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$().ak(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("noise_seed_offsets", "fn noise_seed_offsets(seed: f32) -> vec2<f32> {\n  let h = hash1i(bitcast<u32>(seed));\n  return vec2<f32>(f32(h % 289u), f32((h / 289u) % 289u));\n}"), new $c_sjsr_WrappedVarArgs([$m_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$().q1()]));
    this.nv = true;
  }
  return this.nu;
});
var $d_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$, "trivalibs.graphics.shader.lib.noise.NoiseCommon$", ({
  fK: 1
}));
var $n_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$;
function $m_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$() {
  if ((!$n_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$)) {
    $n_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$ = new $c_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$();
  }
  return $n_Ltrivalibs_graphics_shader_lib_noise_NoiseCommon$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$() {
  this.nw = null;
  this.nx = false;
}
$p = $c_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$() {
}
$h_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$.prototype = $p;
$p.q1 = (function() {
  if ((!this.nx)) {
    this.nw = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("hash1i", "fn hash1i(x: u32) -> u32 {\n  var v = x;\n    v ^= v >> 16u;\n    v = v * 0x21f0aaadu;\n    v ^= v >> 15u;\n    v = v * 0xd35a2d97u;\n    return v ^ (v >> 15u);\n}");
    this.nx = true;
  }
  return this.nw;
});
var $d_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$, "trivalibs.graphics.shader.lib.random.Hash$wgsl$", ({
  fL: 1
}));
var $n_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$;
function $m_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$() {
  if ((!$n_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$)) {
    $n_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$ = new $c_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$();
  }
  return $n_Ltrivalibs_graphics_shader_lib_random_Hash$wgsl$;
}
/** @constructor */
function $c_Ltrivalibs_utils_animation_Animator(frame, onFpsCallback) {
  this.ny = null;
  this.k8 = null;
  this.hy = 0;
  this.hz = 0.0;
  this.iI = 0.0;
  this.iJ = 0.0;
  this.k9 = false;
  this.ny = frame;
  this.k8 = onFpsCallback;
  this.hy = 0;
  this.hz = 0.0;
  this.iI = 0.0;
  this.iJ = (-1.0);
  this.k9 = false;
}
$p = $c_Ltrivalibs_utils_animation_Animator.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_animation_Animator;
/** @constructor */
function $h_Ltrivalibs_utils_animation_Animator() {
}
$h_Ltrivalibs_utils_animation_Animator.prototype = $p;
$p.oB = (function(time) {
  this.hy = ((1 + this.hy) | 0);
  if ((this.hz === 0.0)) {
    this.hz = time;
    this.iI = time;
  }
  var fpsElapsed = (time - this.hz);
  if ((fpsElapsed >= 1000.0)) {
    var fps = ((1000.0 * this.hy) / fpsElapsed);
    if (((time - this.iI) >= 1000.0)) {
      var args$proxy1 = $m_sr_ScalaRunTime$().aw(new ($d_sjs_js_Any.r().C)([(fps.toFixed(1) + " FPS")]));
      console.log(...$m_sjsr_Compat$().av(args$proxy1));
      this.iI = time;
      if ((this.k8 !== null)) {
        (0, this.k8)(fps);
      }
    }
    this.hy = 0;
    this.hz = time;
  }
  var delta = ((this.iJ < 0.0) ? 0.0 : (time - this.iJ));
  this.iJ = time;
  (0, this.ny)(delta);
  if (this.k9) {
    requestAnimationFrame($m_sjs_js_Any$().hJ(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
      this.oB((+v1$2));
    }))));
  }
});
$p.rH = (function() {
  this.k9 = true;
  return requestAnimationFrame($m_sjs_js_Any$().hJ(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
    this.oB((+v1$2));
  }))));
});
var $d_Ltrivalibs_utils_animation_Animator = new $TypeData().i($c_Ltrivalibs_utils_animation_Animator, "trivalibs.utils.animation.Animator", ({
  fS: 1
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
$p.p1 = (function(frame) {
  var animator = new $c_Ltrivalibs_utils_animation_Animator(frame, null);
  animator.rH();
  return animator;
});
var $d_Ltrivalibs_utils_animation_animate$package$ = new $TypeData().i($c_Ltrivalibs_utils_animation_animate$package$, "trivalibs.utils.animation.animate$package$", ({
  fT: 1
}));
var $n_Ltrivalibs_utils_animation_animate$package$;
function $m_Ltrivalibs_utils_animation_animate$package$() {
  if ((!$n_Ltrivalibs_utils_animation_animate$package$)) {
    $n_Ltrivalibs_utils_animation_animate$package$ = new $c_Ltrivalibs_utils_animation_animate$package$();
  }
  return $n_Ltrivalibs_utils_animation_animate$package$;
}
/** @constructor */
function $c_Ltrivalibs_utils_events_CanvasInput(input, drag, hold) {
  this.ay = null;
  this.ka = null;
  this.kb = null;
  this.ay = input;
  this.ka = drag;
  this.kb = hold;
}
$p = $c_Ltrivalibs_utils_events_CanvasInput.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_CanvasInput;
/** @constructor */
function $h_Ltrivalibs_utils_events_CanvasInput() {
}
$h_Ltrivalibs_utils_events_CanvasInput.prototype = $p;
$p.fU = (function(tpf) {
  this.ka.fU(tpf);
  this.kb.fU(tpf);
});
var $d_Ltrivalibs_utils_events_CanvasInput = new $TypeData().i($c_Ltrivalibs_utils_events_CanvasInput, "trivalibs.utils.events.CanvasInput", ({
  fU: 1
}));
function $ct_Ltrivalibs_utils_events_DragGesture__F0__D__D__($thiz, pointersOf, glideMinSpeed, glideHalfLife) {
  $thiz.nB = pointersOf;
  $thiz.nA = glideHalfLife;
  $thiz.gI = null;
  $thiz.kd = 0.0;
  $thiz.ke = 0.0;
  $thiz.fN = 0.0;
  $thiz.fO = 0.0;
  $thiz.b7 = 0.0;
  $thiz.b8 = 0.0;
  $thiz.kc = (glideHalfLife > 0.0);
  var s = (glideMinSpeed / 1000.0);
  $thiz.nz = ((s < 0.001) ? 0.001 : s);
  return $thiz;
}
function $ct_Ltrivalibs_utils_events_DragGesture__Ltrivalibs_utils_events_InputState__D__D__($thiz, input, glideMinSpeed, glideHalfLife) {
  $ct_Ltrivalibs_utils_events_DragGesture__F0__D__D__($thiz, $ps_Ltrivalibs_utils_events_DragGesture__DragGesture$superArg$1__Ltrivalibs_utils_events_InputState__D__D__F0(input, glideMinSpeed, glideHalfLife), glideMinSpeed, glideHalfLife);
  return $thiz;
}
function $ps_Ltrivalibs_utils_events_DragGesture__DragGesture$superArg$1__Ltrivalibs_utils_events_InputState__D__D__F0(input, glideMinSpeed, glideHalfLife) {
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => input.aX));
}
/** @constructor */
function $c_Ltrivalibs_utils_events_DragGesture() {
  this.nB = null;
  this.nA = 0.0;
  this.gI = null;
  this.kd = 0.0;
  this.ke = 0.0;
  this.fN = 0.0;
  this.fO = 0.0;
  this.b7 = 0.0;
  this.b8 = 0.0;
  this.kc = false;
  this.nz = 0.0;
}
$p = $c_Ltrivalibs_utils_events_DragGesture.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_DragGesture;
/** @constructor */
function $h_Ltrivalibs_utils_events_DragGesture() {
}
$h_Ltrivalibs_utils_events_DragGesture.prototype = $p;
$p.pu = (function() {
  return new $c_T2(this.fN, this.fO);
});
$p.fU = (function(tpf) {
  var d = $m_Ltrivalibs_utils_events_gestures$package$().o3(this.nB.hH());
  if ((d === null)) {
    this.gI = null;
    if (this.kc) {
      var p$proxy1 = ((this.b7 * this.b7) + (this.b8 * this.b8));
      var $x_1 = ((+Math.sqrt(p$proxy1)) >= this.nz);
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      var e$proxy1 = (tpf / this.nA);
      var f = (+Math.pow(0.5, e$proxy1));
      this.b7 = (this.b7 * f);
      this.b8 = (this.b8 * f);
      this.fN = (this.b7 * tpf);
      this.fO = (this.b8 * tpf);
    } else {
      this.b7 = 0.0;
      this.b8 = 0.0;
      this.fN = 0.0;
      this.fO = 0.0;
    }
  } else {
    if ((((this.gI !== null) && (d.bl !== null)) && ((+this.gI) === (+d.bl)))) {
      this.fN = (d.gK - this.kd);
      this.fO = (d.gL - this.ke);
      if ((this.kc && (tpf > 0.0))) {
        var e$proxy2 = (tpf / 40.0);
        var k = (1.0 - (+Math.pow(0.5, e$proxy2)));
        this.b7 = (this.b7 + (((this.fN / tpf) - this.b7) * k));
        this.b8 = (this.b8 + (((this.fO / tpf) - this.b8) * k));
      }
    } else {
      if ((this.gI === null)) {
        this.b7 = 0.0;
        this.b8 = 0.0;
      }
      this.fN = 0.0;
      this.fO = 0.0;
    }
    this.gI = d.bl;
    this.kd = d.gK;
    this.ke = d.gL;
  }
});
var $d_Ltrivalibs_utils_events_DragGesture = new $TypeData().i($c_Ltrivalibs_utils_events_DragGesture, "trivalibs.utils.events.DragGesture", ({
  fV: 1
}));
function $ct_Ltrivalibs_utils_events_HoldGesture__F0__D__D__($thiz, pointersOf, holdDelay, holdRadius) {
  $thiz.nE = pointersOf;
  $thiz.nC = holdDelay;
  $thiz.nD = holdRadius;
  $thiz.hB = null;
  $thiz.gJ = 0.0;
  $thiz.hC = false;
  $thiz.hA = false;
  $thiz.fP = false;
  return $thiz;
}
function $ct_Ltrivalibs_utils_events_HoldGesture__Ltrivalibs_utils_events_InputState__D__D__($thiz, input, holdDelay, holdRadius) {
  $ct_Ltrivalibs_utils_events_HoldGesture__F0__D__D__($thiz, $ps_Ltrivalibs_utils_events_HoldGesture__HoldGesture$superArg$1__Ltrivalibs_utils_events_InputState__D__D__F0(input, holdDelay, holdRadius), holdDelay, holdRadius);
  return $thiz;
}
function $ps_Ltrivalibs_utils_events_HoldGesture__HoldGesture$superArg$1__Ltrivalibs_utils_events_InputState__D__D__F0(input, holdDelay, holdRadius) {
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => input.aX));
}
/** @constructor */
function $c_Ltrivalibs_utils_events_HoldGesture() {
  this.nE = null;
  this.nC = 0.0;
  this.nD = 0.0;
  this.hB = null;
  this.gJ = 0.0;
  this.hC = false;
  this.hA = false;
  this.fP = false;
}
$p = $c_Ltrivalibs_utils_events_HoldGesture.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_HoldGesture;
/** @constructor */
function $h_Ltrivalibs_utils_events_HoldGesture() {
}
$h_Ltrivalibs_utils_events_HoldGesture.prototype = $p;
$p.fU = (function(tpf) {
  var d = $m_Ltrivalibs_utils_events_gestures$package$().o3(this.nE.hH());
  if ((d === null)) {
    this.hB = null;
    this.gJ = 0.0;
    this.hC = false;
    this.hA = false;
    this.fP = false;
  } else {
    var pid = d.bl;
    if ((!(((this.hB !== null) && (pid !== null)) && ((+this.hB) === (+pid))))) {
      this.hB = pid;
      this.gJ = 0.0;
      this.hC = false;
      this.hA = false;
    }
    this.gJ = (this.gJ + tpf);
    if (this.hA) {
      this.fP = true;
    } else if ((this.gJ < this.nC)) {
      var dx = (d.gK - d.kg);
      var dy = (d.gL - d.kh);
      var p$proxy2 = ((dx * dx) + (dy * dy));
      if (((+Math.sqrt(p$proxy2)) > this.nD)) {
        this.hC = true;
      }
      this.fP = false;
    } else if (this.hC) {
      this.fP = false;
    } else {
      this.hA = true;
      this.fP = true;
    }
  }
});
var $d_Ltrivalibs_utils_events_HoldGesture = new $TypeData().i($c_Ltrivalibs_utils_events_HoldGesture, "trivalibs.utils.events.HoldGesture", ({
  fW: 1
}));
function $p_Ltrivalibs_utils_events_InputState__freeSlot__Ltrivalibs_utils_events_Pointer($thiz) {
  var i = 0;
  while ((i < ($thiz.hF.length | 0))) {
    if (($thiz.hF[i].bl === null)) {
      return $thiz.hF[i];
    }
    i = ((1 + i) | 0);
  }
  return null;
}
function $p_Ltrivalibs_utils_events_InputState__slotById__D__Ltrivalibs_utils_events_Pointer($thiz, id) {
  var i = 0;
  while ((i < ($thiz.aX.length | 0))) {
    var p = $thiz.aX[i];
    if (((p.bl !== null) && ((+p.bl) === id))) {
      return p;
    }
    i = ((1 + i) | 0);
  }
  return null;
}
function $p_Ltrivalibs_utils_events_InputState__removePointer__D__V($thiz, id) {
  var p = $p_Ltrivalibs_utils_events_InputState__slotById__D__Ltrivalibs_utils_events_Pointer($thiz, id);
  if ((p !== null)) {
    p.bl = null;
    var idx = $m_sjs_js_ArrayOps$().ob($thiz.aX, p, 0);
    if ((idx >= 0)) {
      $thiz.aX.splice(idx, 1);
    }
  }
}
function $p_Ltrivalibs_utils_events_InputState__install__V($thiz) {
  var i = 0;
  while ((i < $thiz.nJ)) {
    $thiz.hF.push(new $c_Ltrivalibs_utils_events_Pointer());
    i = ((1 + i) | 0);
  }
  $m_Ltrivalibs_utils_events_keyboard$package$().qa($thiz.hD, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((k$3) => {
    if ((!(!(!(!(!$thiz.hE.hasOwnProperty(k$3))))))) {
      var value$proxy1 = (+Date.now());
      $thiz.hE[k$3] = value$proxy1;
      if ((!($thiz.az === (void 0)))) {
        (0, $thiz.az)();
      }
    }
  })), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((k$3$1) => {
    delete $thiz.hE[k$3$1];
    if ((!($thiz.az === (void 0)))) {
      (0, $thiz.az)();
    }
  })), false);
  $m_Ltrivalibs_utils_events_pointer$package$().r1($thiz.nG, $m_Ltrivalibs_utils_events_pointer$package$().r2(), new $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078(((v1$2, v2$2, v3$2, v4$2, v5$2) => {
    var button = (v1$2 | 0);
    var id = (+v2$2);
    var x$1 = (+v3$2);
    var y = (+v4$2);
    if ($thiz.nI) {
      $thiz.hD.focus();
    }
    var key$proxy3 = ("" + button);
    var value$proxy2 = (+Date.now());
    $thiz.iK[key$proxy3] = value$proxy2;
    var slot = $p_Ltrivalibs_utils_events_InputState__freeSlot__Ltrivalibs_utils_events_Pointer($thiz);
    if ((slot !== null)) {
      slot.bl = id;
      slot.kf = button;
      (+Date.now());
      slot.kg = x$1;
      slot.kh = y;
      slot.gK = x$1;
      slot.gL = y;
      $thiz.aX.push(slot);
      ($thiz.aX.length | 0);
    }
    if ((!($thiz.az === (void 0)))) {
      (0, $thiz.az)();
    }
  })), new $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(((v1$2$1, v2$2$1, v3$2$1) => {
    var id$1 = (+v1$2$1);
    var x$2 = (+v2$2$1);
    var y$1 = (+v3$2$1);
    var p = $p_Ltrivalibs_utils_events_InputState__slotById__D__Ltrivalibs_utils_events_Pointer($thiz, id$1);
    if ((p !== null)) {
      p.gK = x$2;
      p.gL = y$1;
      if ((($thiz.aX.length | 0) > 0)) {
        $thiz.aX[0];
      }
    }
  })), new $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(((v1$2$2, v2$2$2, v3$2$2, v4$2$1) => {
    var button$1 = (v1$2$2 | 0);
    var id$2 = (+v2$2$2);
    delete $thiz.iK[("" + button$1)];
    $p_Ltrivalibs_utils_events_InputState__removePointer__D__V($thiz, id$2);
    if ((!($thiz.az === (void 0)))) {
      (0, $thiz.az)();
    }
  })), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2$3) => {
    $p_Ltrivalibs_utils_events_InputState__removePointer__D__V($thiz, (+v1$2$3));
    if ((!($thiz.az === (void 0)))) {
      (0, $thiz.az)();
    }
  })), $thiz.nK);
  $thiz.hD.addEventListener("focus", $thiz.nH);
  $thiz.hD.addEventListener("blur", $thiz.nF);
}
/** @constructor */
function $c_Ltrivalibs_utils_events_InputState(el, keyTarget, suppressContextMenu, onActivity, focusOnPointerDown, maxPointers) {
  this.nG = null;
  this.hD = null;
  this.nK = false;
  this.az = null;
  this.nI = false;
  this.nJ = 0;
  this.hE = null;
  this.iK = null;
  this.hF = null;
  this.aX = null;
  this.nH = null;
  this.nF = null;
  this.nG = el;
  this.hD = keyTarget;
  this.nK = suppressContextMenu;
  this.az = onActivity;
  this.nI = focusOnPointerDown;
  this.nJ = maxPointers;
  this.hE = ({});
  this.iK = ({});
  this.hF = [];
  this.aX = [];
  if ($m_sr_BoxesRunTime$().c(keyTarget, window)) {
    (!(!document.hasFocus()));
  } else {
    $m_sr_BoxesRunTime$().c(keyTarget, document.activeElement);
  }
  this.nH = ((_$1$3) => {
    if ((!(this.az === (void 0)))) {
      (0, this.az)();
    }
  });
  this.nF = ((_$2$3) => {
    if ((!(this.az === (void 0)))) {
      (0, this.az)();
    }
  });
  $p_Ltrivalibs_utils_events_InputState__install__V(this);
}
$p = $c_Ltrivalibs_utils_events_InputState.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_InputState;
/** @constructor */
function $h_Ltrivalibs_utils_events_InputState() {
}
$h_Ltrivalibs_utils_events_InputState.prototype = $p;
$p.ba = (function(key) {
  return (!(!(!(!this.hE.hasOwnProperty(key)))));
});
$p.q8 = (function(button) {
  var key$proxy7 = ("" + button);
  return (!(!(!(!this.iK.hasOwnProperty(key$proxy7)))));
});
$p.oz = (function() {
  return (this.aX.length | 0);
});
var $d_Ltrivalibs_utils_events_InputState = new $TypeData().i($c_Ltrivalibs_utils_events_InputState, "trivalibs.utils.events.InputState", ({
  fX: 1
}));
/** @constructor */
function $c_Ltrivalibs_utils_events_Pointer() {
  this.bl = null;
  this.kf = 0;
  this.kg = 0.0;
  this.kh = 0.0;
  this.gK = 0.0;
  this.gL = 0.0;
  this.bl = null;
  this.kf = 0;
  this.kg = 0.0;
  this.kh = 0.0;
  this.gK = 0.0;
  this.gL = 0.0;
}
$p = $c_Ltrivalibs_utils_events_Pointer.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_Pointer;
/** @constructor */
function $h_Ltrivalibs_utils_events_Pointer() {
}
$h_Ltrivalibs_utils_events_Pointer.prototype = $p;
var $d_Ltrivalibs_utils_events_Pointer = new $TypeData().i($c_Ltrivalibs_utils_events_Pointer, "trivalibs.utils.events.Pointer", ({
  fY: 1
}));
/** @constructor */
function $c_Ltrivalibs_utils_events_gestures$package$() {
}
$p = $c_Ltrivalibs_utils_events_gestures$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_gestures$package$;
/** @constructor */
function $h_Ltrivalibs_utils_events_gestures$package$() {
}
$h_Ltrivalibs_utils_events_gestures$package$.prototype = $p;
$p.o3 = (function(pointers) {
  var i = 0;
  while ((i < (pointers.length | 0))) {
    var p = pointers[i];
    if ((p.kf === 0)) {
      return p;
    }
    i = ((1 + i) | 0);
  }
  return null;
});
var $d_Ltrivalibs_utils_events_gestures$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_gestures$package$, "trivalibs.utils.events.gestures$package$", ({
  fZ: 1
}));
var $n_Ltrivalibs_utils_events_gestures$package$;
function $m_Ltrivalibs_utils_events_gestures$package$() {
  if ((!$n_Ltrivalibs_utils_events_gestures$package$)) {
    $n_Ltrivalibs_utils_events_gestures$package$ = new $c_Ltrivalibs_utils_events_gestures$package$();
  }
  return $n_Ltrivalibs_utils_events_gestures$package$;
}
/** @constructor */
function $c_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$() {
}
$p = $c_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$;
/** @constructor */
function $h_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$() {
}
$h_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$.prototype = $p;
$p.q6 = (function(canvas, initialFocus, holdDelay, holdRadius, suppressContextMenu, onActivity, dragGlideHalfLife, dragGlideMinSpeed) {
  canvas.setAttribute("tabindex", "0");
  var \u03b41$ = canvas.style;
  \u03b41$.setProperty("outline", "none");
  var \u03b42$ = canvas.style;
  \u03b42$.setProperty("touch-action", "none");
  var \u03b43$ = canvas.style;
  \u03b43$.setProperty("user-select", "none");
  var \u03b44$ = canvas.style;
  \u03b44$.setProperty("-webkit-user-select", "none");
  var \u03b45$ = canvas.style;
  \u03b45$.setProperty("-webkit-touch-callout", "none");
  var \u03b46$ = canvas.style;
  \u03b46$.setProperty("-webkit-tap-highlight-color", "transparent");
  var input = new $c_Ltrivalibs_utils_events_InputState(canvas, canvas, suppressContextMenu, onActivity, true, 4);
  if (initialFocus) {
    canvas.focus();
  }
  return new $c_Ltrivalibs_utils_events_CanvasInput(input, $ct_Ltrivalibs_utils_events_DragGesture__Ltrivalibs_utils_events_InputState__D__D__(new $c_Ltrivalibs_utils_events_DragGesture(), input, dragGlideMinSpeed, dragGlideHalfLife), $ct_Ltrivalibs_utils_events_HoldGesture__Ltrivalibs_utils_events_InputState__D__D__(new $c_Ltrivalibs_utils_events_HoldGesture(), input, holdDelay, holdRadius));
});
var $d_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$, "trivalibs.utils.events.interactive_canvas$package$", ({
  g0: 1
}));
var $n_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$;
function $m_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$() {
  if ((!$n_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$)) {
    $n_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$ = new $c_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$();
  }
  return $n_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$;
}
/** @constructor */
function $c_Ltrivalibs_utils_events_keyboard$package$() {
}
$p = $c_Ltrivalibs_utils_events_keyboard$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_keyboard$package$;
/** @constructor */
function $h_Ltrivalibs_utils_events_keyboard$package$() {
}
$h_Ltrivalibs_utils_events_keyboard$package$.prototype = $p;
$p.qa = (function(el, onDown, onUp, keepDefault) {
  var down = ((e$3) => {
    var isTab = (e$3.code === "Tab");
    if (((!keepDefault) && (!isTab))) {
      e$3.preventDefault();
    }
    if ((!(!(!e$3.repeat)))) {
      onDown.h(e$3.code);
    }
  });
  var up = ((e$3$1) => {
    onUp.h(e$3$1.code);
  });
  el.addEventListener("keydown", down);
  el.addEventListener("keyup", up);
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    el.removeEventListener("keydown", down);
    el.removeEventListener("keyup", up);
  }));
});
var $d_Ltrivalibs_utils_events_keyboard$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_keyboard$package$, "trivalibs.utils.events.keyboard$package$", ({
  g1: 1
}));
var $n_Ltrivalibs_utils_events_keyboard$package$;
function $m_Ltrivalibs_utils_events_keyboard$package$() {
  if ((!$n_Ltrivalibs_utils_events_keyboard$package$)) {
    $n_Ltrivalibs_utils_events_keyboard$package$ = new $c_Ltrivalibs_utils_events_keyboard$package$();
  }
  return $n_Ltrivalibs_utils_events_keyboard$package$;
}
/** @constructor */
function $c_Ltrivalibs_utils_events_pointer$package$() {
}
$p = $c_Ltrivalibs_utils_events_pointer$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_pointer$package$;
/** @constructor */
function $h_Ltrivalibs_utils_events_pointer$package$() {
}
$h_Ltrivalibs_utils_events_pointer$package$.prototype = $p;
$p.r1 = (function(el, moveTarget, onDown, onMove, onUp, onCancel, suppressContextMenu) {
  var downFn = ((e$3) => {
    onDown.p4((e$3.button | 0), (+e$3.pointerId), (+e$3.clientX), (+e$3.clientY), (!(!e$3.isPrimary)));
  });
  var moveFn = ((e$3$1) => {
    onMove.p5((+e$3$1.pointerId), (+e$3$1.clientX), (+e$3$1.clientY));
  });
  var upFn = ((e$3$2) => {
    onUp.km((e$3$2.button | 0), (+e$3$2.pointerId), (+e$3$2.clientX), (+e$3$2.clientY));
  });
  var cancelFn = ((e$3$3) => {
    onCancel.h((+e$3$3.pointerId));
  });
  var ctxFn = ((e$3$4) => {
    e$3$4.preventDefault();
  });
  el.addEventListener("pointerdown", downFn);
  moveTarget.addEventListener("pointermove", moveFn);
  moveTarget.addEventListener("pointerup", upFn);
  moveTarget.addEventListener("pointercancel", cancelFn);
  if (suppressContextMenu) {
    el.addEventListener("contextmenu", ctxFn);
  }
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    el.removeEventListener("pointerdown", downFn);
    moveTarget.removeEventListener("pointermove", moveFn);
    moveTarget.removeEventListener("pointerup", upFn);
    moveTarget.removeEventListener("pointercancel", cancelFn);
    if (suppressContextMenu) {
      el.removeEventListener("contextmenu", ctxFn);
    }
  }));
});
$p.r2 = (function() {
  return window;
});
var $d_Ltrivalibs_utils_events_pointer$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_pointer$package$, "trivalibs.utils.events.pointer$package$", ({
  g2: 1
}));
var $n_Ltrivalibs_utils_events_pointer$package$;
function $m_Ltrivalibs_utils_events_pointer$package$() {
  if ((!$n_Ltrivalibs_utils_events_pointer$package$)) {
    $n_Ltrivalibs_utils_events_pointer$package$ = new $c_Ltrivalibs_utils_events_pointer$package$();
  }
  return $n_Ltrivalibs_utils_events_pointer$package$;
}
/** @constructor */
function $c_jl_Character$() {
  this.j3 = null;
  $n_jl_Character$ = this;
  this.j3 = $constArrUDiffs_I(67, "1C]4m6m=c4]4]4]4]4]4]4]4]4]3g4]2m9]2m1Jm1m9s4g5mm6]3]4mm12>mEm1m6m1]3]=]DI]1<m24mIs4g2c4w9];]4]<]3m3m=m3mH]8]2m=mBHm3]4mK3{gggg2:g=m@]13]4E]");
}
$p = $c_jl_Character$.prototype = new $h_O();
$p.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
}
$h_jl_Character$.prototype = $p;
$p.rR = (function(codePoint) {
  if (((codePoint >>> 0) > 1114111)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return String.fromCodePoint(codePoint);
});
$p.px = (function(codePoint, radix) {
  if ((codePoint < 256)) {
    var value = (((((codePoint - 48) | 0) >>> 0) <= 9) ? ((codePoint - 48) | 0) : (((((codePoint - 65) | 0) >>> 0) <= 25) ? ((codePoint - 55) | 0) : (((((codePoint - 97) | 0) >>> 0) <= 25) ? ((codePoint - 87) | 0) : (-1))));
  } else if (((((codePoint - 65313) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65303) | 0);
  } else if (((((codePoint - 65345) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65335) | 0);
  } else {
    var p = $m_ju_Arrays$().pe(this.j3, codePoint);
    var zeroCodePointIndex = ((p < 0) ? (((-2) - p) | 0) : p);
    if ((zeroCodePointIndex < 0)) {
      var value = (-1);
    } else {
      var v = ((codePoint - this.j3.a[zeroCodePointIndex]) | 0);
      var value = ((v > 9) ? (-1) : v);
    }
  }
  return ((value < radix) ? value : (-1));
});
var $d_jl_Character$ = new $TypeData().i($c_jl_Character$, "java.lang.Character$", ({
  b6: 1,
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
function $c_jl_Integer$() {
}
$p = $c_jl_Integer$.prototype = new $h_O();
$p.constructor = $c_jl_Integer$;
/** @constructor */
function $h_jl_Integer$() {
}
$h_jl_Integer$.prototype = $p;
$p.i2 = (function(s) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s) + "\""));
});
$p.q9 = (function(s, radix, overflowBarrier) {
  if ((s === null)) {
    $m_jl_Integer$().i2(s);
  }
  var len = s.length;
  if ((len === 0)) {
    $m_jl_Integer$().i2(s);
  }
  var character = $m_jl_Character$();
  var firstChar = s.charCodeAt(0);
  var negative = (firstChar === 45);
  var sign = (negative ? (-1) : 0);
  var i = ((negative || (firstChar === 43)) | 0);
  if ((i >= len)) {
    $m_jl_Integer$().i2(s);
  }
  var java$lang$IntFloatBits$Int32Box$$value = 0;
  java$lang$IntFloatBits$Int32Box$$value = 0;
  while ((i !== len)) {
    var x = character.px(s.charCodeAt(i), radix);
    if (((x < 0) || ((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (overflowBarrier >>> 0)))) {
      $m_jl_Integer$().i2(s);
    }
    var x$2 = java$lang$IntFloatBits$Int32Box$$value;
    var x$3 = Math.imul(x$2, radix);
    var v = ((x$3 + x) | 0);
    java$lang$IntFloatBits$Int32Box$$value = v;
    i = ((1 + i) | 0);
  }
  if (((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (((2147483647 - sign) | 0) >>> 0))) {
    $m_jl_Integer$().i2(s);
  }
  return (((java$lang$IntFloatBits$Int32Box$$value ^ sign) - sign) | 0);
});
var $d_jl_Integer$ = new $TypeData().i($c_jl_Integer$, "java.lang.Integer$", ({
  bb: 1,
  a: 1
}));
var $n_jl_Integer$;
function $m_jl_Integer$() {
  if ((!$n_jl_Integer$)) {
    $n_jl_Integer$ = new $c_jl_Integer$();
  }
  return $n_jl_Integer$;
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
function $is_jl_Number(obj) {
  return (((obj instanceof $c_jl_Number) || ((typeof obj) === "number")) || (obj instanceof $Long));
}
function $isArrayOf_jl_Number(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.u)));
}
function $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.kP = s;
  if (writableStackTrace) {
    $thiz.pL();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.kP = null;
  }
  iO() {
    return this.kP;
  }
  pL() {
    var reference = ((this instanceof $c_sjs_js_JavaScriptException) ? this.aJ : this);
    if ((Object.prototype.toString.call(reference) !== "[object Error]")) {
      if (((Error.captureStackTrace === (void 0)) || (!(!Object.isSealed(this))))) {
        new Error();
      } else {
        Error.captureStackTrace(this);
      }
    }
    return this;
  }
  r() {
    var className = $objectClassName(this);
    var message = this.iO();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  w() {
    return $c_O.prototype.w.call(this);
  }
  u(that) {
    return $c_O.prototype.u.call(this, that);
  }
  get "message"() {
    var m = this.iO();
    return ((m === null) ? "" : m);
  }
  get "name"() {
    return $objectClassName(this);
  }
  "toString"() {
    return this.r();
  }
}
function $isArrayOf_jl_Throwable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.f)));
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
$p.r = (function() {
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
$p.s1 = (function(xs) {
  if ((xs === null)) {
    return null;
  } else if ((xs.a.length === 0)) {
    var this$2 = $m_scm_ArraySeq$();
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    return this$2.l1;
  } else {
    return new $c_scm_ArraySeq$ofRef(xs);
  }
});
function $p_sci_Range$__description__I__I__I__Z__T($thiz, start, end, step, isInclusive) {
  return ((((start + (isInclusive ? " to " : " until ")) + end) + " by ") + step);
}
/** @constructor */
function $c_sci_Range$() {
}
$p = $c_sci_Range$.prototype = new $h_O();
$p.constructor = $c_sci_Range$;
/** @constructor */
function $h_sci_Range$() {
}
$h_sci_Range$.prototype = $p;
$p.oE = (function(start, end, step, isInclusive) {
  throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ($p_sci_Range$__description__I__I__I__Z__T(this, start, end, step, isInclusive) + ": seqs cannot contain more than Int.MaxValue elements."));
});
$p.ro = (function(what) {
  return new $c_ju_NoSuchElementException((what + " on empty Range"));
});
var $d_sci_Range$ = new $TypeData().i($c_sci_Range$, "scala.collection.immutable.Range$", ({
  cp: 1,
  a: 1
}));
var $n_sci_Range$;
function $m_sci_Range$() {
  if ((!$n_sci_Range$)) {
    $n_sci_Range$ = new $c_sci_Range$();
  }
  return $n_sci_Range$;
}
/** @constructor */
function $c_sr_AbstractFunction0() {
}
$p = $c_sr_AbstractFunction0.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction0;
/** @constructor */
function $h_sr_AbstractFunction0() {
}
$h_sr_AbstractFunction0.prototype = $p;
$p.r = (function() {
  return "<function0>";
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
$p.r = (function() {
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
$p.r = (function() {
  return "<function2>";
});
/** @constructor */
function $c_sr_AbstractFunction3() {
}
$p = $c_sr_AbstractFunction3.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction3;
/** @constructor */
function $h_sr_AbstractFunction3() {
}
$h_sr_AbstractFunction3.prototype = $p;
$p.r = (function() {
  return "<function3>";
});
/** @constructor */
function $c_sr_AbstractFunction4() {
}
$p = $c_sr_AbstractFunction4.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction4;
/** @constructor */
function $h_sr_AbstractFunction4() {
}
$h_sr_AbstractFunction4.prototype = $p;
$p.r = (function() {
  return "<function4>";
});
/** @constructor */
function $c_sr_AbstractFunction5() {
}
$p = $c_sr_AbstractFunction5.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction5;
/** @constructor */
function $h_sr_AbstractFunction5() {
}
$h_sr_AbstractFunction5.prototype = $p;
$p.r = (function() {
  return "<function5>";
});
/** @constructor */
function $c_sr_DoubleRef(elem) {
  this.gi = 0.0;
  this.gi = elem;
}
$p = $c_sr_DoubleRef.prototype = new $h_O();
$p.constructor = $c_sr_DoubleRef;
/** @constructor */
function $h_sr_DoubleRef() {
}
$h_sr_DoubleRef.prototype = $p;
$p.r = (function() {
  return ("" + this.gi);
});
var $d_sr_DoubleRef = new $TypeData().i($c_sr_DoubleRef, "scala.runtime.DoubleRef", ({
  cV: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.fB = 0;
  this.lb = 0;
  this.oN = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.fB = $f_T__hashCode__I("Seq");
  this.lb = $f_T__hashCode__I("Map");
  $f_T__hashCode__I("Set");
  this.oN = this.rU($m_sci_Nil$(), this.lb);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.kw = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.q3(xs, this.fB) : ((xs instanceof $c_sci_List) ? this.qb(xs, this.fB) : this.qX(xs, this.fB)));
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().i($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  df: 1,
  de: 1
}));
var $n_s_util_hashing_MurmurHash3$;
function $m_s_util_hashing_MurmurHash3$() {
  if ((!$n_s_util_hashing_MurmurHash3$)) {
    $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$();
  }
  return $n_s_util_hashing_MurmurHash3$;
}
/** @constructor */
function $c_Lsketchlib_utils_bloom_Bloom$$anon$1(bloomP$1, resultP$1, p$1, uBlurRadius$1, uIntensity$1) {
  this.lz = null;
  this.ly = null;
  this.lA = null;
  this.lB = null;
  this.lz = p$1;
  this.ly = bloomP$1;
  this.lA = resultP$1;
  this.lB = resultP$1;
}
$p = $c_Lsketchlib_utils_bloom_Bloom$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_bloom_Bloom$$anon$1;
/** @constructor */
function $h_Lsketchlib_utils_bloom_Bloom$$anon$1() {
}
$h_Lsketchlib_utils_bloom_Bloom$$anon$1.prototype = $p;
$p.qZ = (function() {
  var Painter_this = this.lz;
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.ly);
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.lA);
});
var $d_Lsketchlib_utils_bloom_Bloom$$anon$1 = new $TypeData().i($c_Lsketchlib_utils_bloom_Bloom$$anon$1, "sketchlib.utils.bloom.Bloom$$anon$1", ({
  dm: 1,
  dk: 1
}));
function $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__rebuildLayers__V($thiz) {
  if (($thiz.bI > 0.0)) {
    var pairs = $m_Lsketchlib_utils_mirror_GaussianMirrorReflection$().rA($thiz.lJ, $thiz.jm, $thiz.h7, $thiz.ji, $thiz.jh);
    $m_Lsketchlib_utils_mirror_GaussianMirrorReflection$().rz($thiz.jk, $thiz.lD, $thiz.lF, $thiz.lE, $thiz.jm, $thiz.ii, $thiz.lK, $thiz.lN, $thiz.lO, $thiz.jn, $thiz.jo, $thiz.lI, pairs);
    var layers = [$thiz.lC];
    var i = 0;
    while ((i < (pairs << 1))) {
      layers.push($thiz.jk[i]);
      i = ((1 + i) | 0);
    }
    $thiz.h5.i6((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), layers);
  }
}
function $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__applySizing__V($thiz) {
  if (($thiz.bI > 0.0)) {
    var sigma = ((0.01 * $thiz.ji) * $thiz.h7);
    var p$proxy2 = ($thiz.jj * sigma);
    var p$proxy3 = (+Math.ceil(p$proxy2));
    var other$proxy4 = (0.5 * $thiz.h8);
    var mx = (+Math.min(p$proxy3, other$proxy4));
    var $x_1 = $thiz.jj;
    var p$proxy4 = $thiz.jh;
    var p$proxy5 = (($x_1 * sigma) * (+Math.max(p$proxy4, 1.0)));
    var p$proxy6 = (+Math.ceil(p$proxy5));
    var other$proxy5 = (0.5 * $thiz.bI);
    var my = (+Math.min(p$proxy6, other$proxy5));
    var pw = $doubleToInt(($thiz.h8 + (2.0 * mx)));
    var ph = $doubleToInt(($thiz.bI + (2.0 * my)));
    $thiz.ih.i6(pw, ph, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0));
    $thiz.h5.i6(pw, ph, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0));
    var BufferBinding_this = $thiz.jn;
    var value$proxy10 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(pw, ph);
    BufferBinding_this.C.y(BufferBinding_this.j, value$proxy10);
    var $x_4 = BufferBinding_this.B.queue;
    var $x_3 = BufferBinding_this.A;
    var s$proxy10 = BufferBinding_this.j;
    var $x_2 = s$proxy10.dv.buffer;
    $x_4.writeBuffer($x_3, 0.0, $x_2);
    var BufferBinding_this$3 = $thiz.jo;
    var value$proxy11 = $thiz.h7;
    BufferBinding_this$3.C.y(BufferBinding_this$3.j, value$proxy11);
    var $x_7 = BufferBinding_this$3.B.queue;
    var $x_6 = BufferBinding_this$3.A;
    var s$proxy11 = BufferBinding_this$3.j;
    var $x_5 = s$proxy11.dv.buffer;
    $x_7.writeBuffer($x_6, 0.0, $x_5);
    $thiz.ie = ($thiz.h8 / pw);
    $thiz.ig = ($thiz.bI / ph);
    var BufferBinding_this$5 = $thiz.lL;
    var value$proxy12 = new $c_Ltrivalibs_graphics_math_cpu_Vec4($thiz.ie, $thiz.ig, (mx / pw), (my / ph));
    BufferBinding_this$5.C.y(BufferBinding_this$5.j, value$proxy12);
    var $x_10 = BufferBinding_this$5.B.queue;
    var $x_9 = BufferBinding_this$5.A;
    var s$proxy12 = BufferBinding_this$5.j;
    var $x_8 = s$proxy12.dv.buffer;
    $x_10.writeBuffer($x_9, 0.0, $x_8);
    $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__rebuildLayers__V($thiz);
  }
}
function $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__deriveRefH__V($thiz) {
  var $x_2 = $thiz.bI;
  var $x_1 = $thiz.id.bs;
  var this$1 = $thiz.id;
  $thiz.h7 = (($x_2 * $x_1) / $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().kF(this$1.bs, this$1.fM));
}
function $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__default$proxy1$1__Ltrivalibs_graphics_math_cpu_Mat4($thiz) {
  var this$1 = $thiz.id;
  return $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().gQ(), this$1.iH, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), this$1.oI());
}
/** @constructor */
function $c_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1(mirrorPanel$1, cropPanel$1, blurPanel$1, camera$1, blurStrength$1, blurRatioVertical$1, bakeLayer$1, pairCache$2, overscan$1, uRes$3, uVisHeight$3, uCrop$1, resolutionScale$1, uBlurStrength$3, strengthScale$2, uRatioVertical$3, uStrengthOffset$3, reflMat$1, uVp$1, uInvVp$1, p$4, scaleFactor$3, blurShadeH$2, cachedScale$2, blurShadeV$2, sampler$3) {
  this.lC = null;
  this.jk = null;
  this.h5 = null;
  this.jj = 0.0;
  this.ih = null;
  this.jn = null;
  this.jo = null;
  this.lL = null;
  this.jl = 0.0;
  this.h6 = null;
  this.lK = null;
  this.lJ = 0.0;
  this.lN = null;
  this.lO = null;
  this.lG = null;
  this.lP = null;
  this.lM = null;
  this.ii = null;
  this.jm = 0.0;
  this.lD = null;
  this.lF = null;
  this.lE = null;
  this.lI = null;
  this.lH = null;
  this.id = null;
  this.ji = 0.0;
  this.jh = 0.0;
  this.h8 = 0.0;
  this.bI = 0.0;
  this.h7 = 0.0;
  this.ie = 0.0;
  this.ig = 0.0;
  this.lC = bakeLayer$1;
  this.jk = pairCache$2;
  this.h5 = blurPanel$1;
  this.jj = overscan$1;
  this.ih = mirrorPanel$1;
  this.jn = uRes$3;
  this.jo = uVisHeight$3;
  this.lL = uCrop$1;
  this.jl = resolutionScale$1;
  this.h6 = cropPanel$1;
  this.lK = uBlurStrength$3;
  this.lJ = strengthScale$2;
  this.lN = uRatioVertical$3;
  this.lO = uStrengthOffset$3;
  this.lG = reflMat$1;
  this.lP = uVp$1;
  this.lM = uInvVp$1;
  this.ii = p$4;
  this.jm = scaleFactor$3;
  this.lD = blurShadeH$2;
  this.lF = cachedScale$2;
  this.lE = blurShadeV$2;
  this.lI = sampler$3;
  this.lH = ((cropPanel$1 !== null) ? cropPanel$1 : blurPanel$1);
  this.id = camera$1;
  this.ji = blurStrength$1;
  this.jh = blurRatioVertical$1;
  this.h8 = 0.0;
  this.bI = 0.0;
  this.h7 = 0.0;
  this.ie = 1.0;
  this.ig = 1.0;
}
$p = $c_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1;
/** @constructor */
function $h_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1() {
}
$h_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1.prototype = $p;
$p.rl = (function(w, h) {
  var x = $doubleToInt((w * this.jl));
  var sw = ((x > 1) ? x : 1);
  var x$1 = $doubleToInt((h * this.jl));
  var sh = ((x$1 > 1) ? x$1 : 1);
  this.h8 = sw;
  this.bI = sh;
  $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__deriveRefH__V(this);
  if ((this.h6 !== null)) {
    this.h6.i6(sw, sh, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0));
  }
  $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__applySizing__V(this);
});
$p.qY = (function(vp) {
  var cameraVP = ((vp === (void 0)) ? $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__default$proxy1$1__Ltrivalibs_graphics_math_cpu_Mat4(this) : vp);
  var m$1 = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().gQ(), new $c_Ltrivalibs_graphics_math_cpu_Mat4(this.ie, 0.0, 0.0, 0.0, 0.0, this.ig, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0), $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().gQ(), cameraVP, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), this.lG));
  var BufferBinding_this = this.lP;
  BufferBinding_this.C.y(BufferBinding_this.j, m$1);
  var $x_3 = BufferBinding_this.B.queue;
  var $x_2 = BufferBinding_this.A;
  var s$proxy16 = BufferBinding_this.j;
  var $x_1 = s$proxy16.dv.buffer;
  $x_3.writeBuffer($x_2, 0.0, $x_1);
  var BufferBinding_this$3 = this.lM;
  var value$proxy14 = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().gQ(), m$1, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
  BufferBinding_this$3.C.y(BufferBinding_this$3.j, value$proxy14);
  var $x_6 = BufferBinding_this$3.B.queue;
  var $x_5 = BufferBinding_this$3.A;
  var s$proxy17 = BufferBinding_this$3.j;
  var $x_4 = s$proxy17.dv.buffer;
  $x_6.writeBuffer($x_5, 0.0, $x_4);
  if ((this.h6 !== null)) {
    var Painter_this = this.ii;
    var c$proxy1 = this.h6;
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.ih);
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.h5);
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, c$proxy1);
  } else {
    var Painter_this$2 = this.ii;
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this$2, this.ih);
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this$2, this.h5);
  }
});
var $d_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1 = new $TypeData().i($c_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1, "sketchlib.utils.mirror.GaussianMirrorReflection$$anon$1", ({
  dq: 1,
  dn: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT(uv) {
  this.am = null;
  this.am = uv;
}
$p = $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT() {
}
$h_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT.prototype = $p;
var $d_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT, "trivalibs.graphics.buffers.UniformLayout$given_UniformLayout_T", ({
  dE: 1,
  dD: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$() {
}
$p = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$() {
}
$h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$.prototype = $p;
$p.s2 = (function(ref, value) {
  var value$proxy1 = Math.fround(value);
  var offset$proxy3 = (ref.off | 0);
  ref.dv.setFloat32(offset$proxy3, value$proxy1, true);
});
$p.y = (function(ref, value) {
  this.s2(ref, (+value));
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Double_$times$colon$", ({
  dF: 1,
  E: 1
}));
var $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$;
function $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$() {
  if ((!$n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$)) {
    $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$ = new $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
  }
  return $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$() {
}
$p = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$() {
}
$h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$.prototype = $p;
$p.y = (function(ref, value) {
  $f_Ltrivalibs_graphics_math_Mat4MutableOps__set__O__Ltrivalibs_graphics_math_Mat4Mutable__O__Ltrivalibs_graphics_math_Mat4Base__V($m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$().pY(), ref, $m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$(), value, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Mat4_Mat4Buffer$", ({
  dG: 1,
  E: 1
}));
var $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$;
function $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$() {
  if ((!$n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$)) {
    $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$ = new $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
  }
  return $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$;
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
$p.y = (function(ref, value) {
  $f_Ltrivalibs_graphics_math_Vec2MutableOps__set__O__Ltrivalibs_graphics_math_Vec2Mutable__O__Ltrivalibs_graphics_math_Vec2Base__V($m_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$().rW(), ref, $m_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$(), value, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$());
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Vec2_Vec2Buffer$", ({
  dH: 1,
  E: 1
}));
var $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$;
function $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$() {
  if ((!$n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$)) {
    $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$ = new $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$();
  }
  return $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$() {
}
$p = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$() {
}
$h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$.prototype = $p;
$p.s3 = (function(ref, value) {
  var value$proxy2 = value.F;
  var value$proxy3 = Math.fround(value$proxy2);
  var offset$proxy5 = (ref.off | 0);
  ref.dv.setFloat32(offset$proxy5, value$proxy3, true);
  var value$proxy4 = value.G;
  var value$proxy5 = Math.fround(value$proxy4);
  var offset$proxy6 = ((4 + (ref.off | 0)) | 0);
  ref.dv.setFloat32(offset$proxy6, value$proxy5, true);
  var value$proxy6 = value.D;
  var value$proxy7 = Math.fround(value$proxy6);
  var offset$proxy7 = ((8 + (ref.off | 0)) | 0);
  ref.dv.setFloat32(offset$proxy7, value$proxy7, true);
});
$p.y = (function(ref, value) {
  this.s3(ref, value);
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Vec3_Vec4Buffer$", ({
  dI: 1,
  E: 1
}));
var $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$;
function $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$() {
  if ((!$n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$)) {
    $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$ = new $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$();
  }
  return $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$() {
}
$p = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$() {
}
$h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$.prototype = $p;
$p.y = (function(ref, value) {
  $f_Ltrivalibs_graphics_math_Vec4MutableOps__set__O__Ltrivalibs_graphics_math_Vec4Mutable__O__Ltrivalibs_graphics_math_Vec4Base__V($m_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$().rX(), ref, $m_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$(), value, $m_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$());
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Vec4_Vec4Buffer$", ({
  dJ: 1,
  E: 1
}));
var $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$;
function $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$() {
  if ((!$n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$)) {
    $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$ = new $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$();
  }
  return $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$;
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
$p.fV = (function(t) {
  return new $c_T2(t.p, t.n);
});
var $d_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$, "trivalibs.graphics.geometry.FieldWriter$vec2Writer$", ({
  dM: 1,
  aS: 1
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
$p.fV = (function(t) {
  return new $c_T3(t.F, t.G, t.D);
});
var $d_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$, "trivalibs.graphics.geometry.FieldWriter$vec3Writer$", ({
  dN: 1,
  aS: 1
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
  this.jt = null;
  this.jt = x$1;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexLayout$named.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexLayout$named;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexLayout$named() {
}
$h_Ltrivalibs_graphics_geometry_VertexLayout$named.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_VertexLayout$named = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayout$named, "trivalibs.graphics.geometry.VertexLayout$named", ({
  dV: 1,
  dU: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons(x$1, x$2) {
  this.lU = null;
  this.lV = null;
  this.lU = x$1;
  this.lV = x$2;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons() {
}
$h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons.prototype = $p;
$p.rV = (function(t) {
  return $m_sr_Tuples$().nY(this.lU.fV(t.o(0)), this.lV.fV($m_sr_Tuples$().rK(t)));
});
$p.fV = (function(t) {
  return this.rV(t);
});
var $d_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons, "trivalibs.graphics.geometry.VertexLayoutHelper$cons", ({
  dW: 1,
  aT: 1
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
$p.fV = (function(t) {
  return $m_T$package$EmptyTuple$();
});
var $d_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$, "trivalibs.graphics.geometry.VertexLayoutHelper$nil$", ({
  dX: 1,
  aT: 1
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
  this.lX = 0;
  this.lX = idx$2;
}
$p = $c_Ltrivalibs_graphics_geometry_package$package$$anon$1.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_package$package$$anon$1;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_package$package$$anon$1() {
}
$h_Ltrivalibs_graphics_geometry_package$package$$anon$1.prototype = $p;
$p.bz = (function(t) {
  return t.o(this.lX);
});
var $d_Ltrivalibs_graphics_geometry_package$package$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_geometry_package$package$$anon$1, "trivalibs.graphics.geometry.package$package$$anon$1", ({
  e2: 1,
  dS: 1
}));
function $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D($thiz, v, other) {
  return (((v.F * other.F) + (v.G * other.G)) + (v.D * other.D));
}
function $f_Ltrivalibs_graphics_math_Vec3Base__length__O__D($thiz, v) {
  var p$proxy1 = $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D($thiz, v, v);
  return (+Math.sqrt(p$proxy1));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat4$() {
  this.lY = null;
  this.lZ = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4$() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4$.prototype = $p;
$p.gQ = (function() {
  if ((!this.lZ)) {
    this.lY = $m_Ltrivalibs_graphics_math_cpu_Mat4$();
    this.lZ = true;
  }
  return this.lY;
});
$p.o8 = (function(t, r, s) {
  var x = r.io;
  var y = r.ip;
  var z = r.iq;
  var w = r.im;
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
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4(((1.0 - (yy + zz)) * s.F), ((xy + wz) * s.F), ((xz - wy) * s.F), 0.0, ((xy - wz) * s.G), ((1.0 - (xx + zz)) * s.G), ((yz + wx) * s.G), 0.0, ((xz + wy) * s.D), ((yz - wx) * s.D), ((1.0 - (xx + yy)) * s.D), 0.0, t.F, t.G, t.D, 1.0);
});
var $d_Ltrivalibs_graphics_math_cpu_Mat4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4$, "trivalibs.graphics.math.cpu.Mat4$", ({
  ej: 1,
  e6: 1
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
  en: 1,
  ep: 1
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
  this.m0 = null;
  this.m1 = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec3$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec3$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec3$.prototype = $p;
$p.a7 = (function() {
  if ((!this.m1)) {
    this.m0 = $m_Ltrivalibs_graphics_math_cpu_Vec3$();
    this.m1 = true;
  }
  return this.m0;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3$, "trivalibs.graphics.math.cpu.Vec3$", ({
  et: 1,
  ec: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Vec3$;
function $m_Ltrivalibs_graphics_math_cpu_Vec3$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Vec3$)) {
    $n_Ltrivalibs_graphics_math_cpu_Vec3$ = new $c_Ltrivalibs_graphics_math_cpu_Vec3$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Vec3$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec4$() {
  this.m2 = null;
  this.m3 = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec4$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec4$.prototype = $p;
$p.pX = (function() {
  if ((!this.m3)) {
    this.m2 = new $c_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3();
    this.m3 = true;
  }
  return this.m2;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4$, "trivalibs.graphics.math.cpu.Vec4$", ({
  ew: 1,
  ef: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Vec4$;
function $m_Ltrivalibs_graphics_math_cpu_Vec4$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Vec4$)) {
    $n_Ltrivalibs_graphics_math_cpu_Vec4$ = new $c_Ltrivalibs_graphics_math_cpu_Vec4$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Vec4$;
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
  eA: 1,
  e8: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$6() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$6.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$6;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$6() {
}
$h_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$6.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$6 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$6, "trivalibs.graphics.math.cpu.vec2$package$Vec2Buffer$$anon$6", ({
  eD: 1,
  ea: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$8() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$8.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$8;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$8() {
}
$h_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$8.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$8 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$8, "trivalibs.graphics.math.cpu.vec4$package$Vec4Buffer$$anon$8", ({
  eG: 1,
  eh: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$13(f$2) {
  this.ma = null;
  this.ma = f$2;
}
$p = $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$13.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$13;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$13() {
}
$h_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$13.prototype = $p;
$p.gT = (function(s) {
  return this.ma.h(s);
});
var $d_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$13 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$13, "trivalibs.graphics.math.gpu.LeftScalar$$anon$13", ({
  eK: 1,
  eI: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_LetExpr(name) {
  this.d = null;
  this.mb = null;
  this.mb = name;
  $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(this, name);
}
$p = $c_Ltrivalibs_graphics_math_gpu_LetExpr.prototype = new $h_Ltrivalibs_graphics_math_gpu_Expr();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_LetExpr;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_LetExpr() {
}
$h_Ltrivalibs_graphics_math_gpu_LetExpr.prototype = $p;
$p.a2 = (function(value) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return (((("  let " + this.mb) + " = ") + value.d) + ";");
});
var $d_Ltrivalibs_graphics_math_gpu_LetExpr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LetExpr, "trivalibs.graphics.math.gpu.LetExpr", ({
  eL: 1,
  aZ: 1
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
  eR: 1,
  W: 1
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
$p.qK = (function(m, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + m.d) + " * ") + other.d) + ")"));
});
$p.gS = (function(m, x$2, v, x$4, x$5) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + m.d) + " * ") + v.d) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Mat4ImmutableOpsG_FloatExpr_Mat4Expr$", ({
  eS: 1,
  e7: 1
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
$p.nN = (function(a) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("abs(" + a.d) + ")"));
});
$p.i1 = (function(a, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("min(" + a.d) + ", ") + other.d) + ")"));
});
$p.nW = (function(a) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("saturate(" + a.d) + ")"));
});
$p.pO = (function(a) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(" + a.d) + " * 2.0 - 1.0)"));
});
$p.kr = (function(a) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(" + a.d) + " * 0.5 + 0.5)"));
});
$p.iS = (function(a, b, t) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("mix(" + a.d) + ", ") + b.d) + ", ") + t.d) + ")"));
});
$p.fT = (function(a, edge0, edge1) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("smoothstep(" + edge0.d) + ", ") + edge1.d) + ", ") + a.d) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$, "trivalibs.graphics.math.gpu.float_expr$package$given_NumExt_FloatExpr$", ({
  eT: 1,
  g3: 1
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
$p.aN = (function(a, b) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.d) + " + ") + b.d) + ")"));
});
$p.bR = (function(a, b) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.d) + " - ") + b.d) + ")"));
});
$p.bu = (function(a, b) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.d) + " * ") + b.d) + ")"));
});
$p.nL = (function(a, b) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.d) + " / ") + b.d) + ")"));
});
$p.kH = (function(a) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(-" + a.d) + ")"));
});
$p.nM = (function(a, b) {
  return this.bR(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(b));
});
$p.O = (function(a, b) {
  return this.bu(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(b));
});
$p.ki = (function(a, b) {
  return this.nL(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(b));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$, "trivalibs.graphics.math.gpu.float_expr$package$given_NumOps_FloatExpr$", ({
  eU: 1,
  g4: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$.prototype = $p;
$p.aA = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".x"));
});
$p.ae = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".y"));
});
$p.kp = (function(v, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("dot(" + v.d) + ", ") + other.d) + ")"));
});
$p.iQ = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("length(" + v.d) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec2BaseG_FloatExpr_Vec2Expr$", ({
  eV: 1,
  X: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$;
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
$p.oZ = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.d) + " + ") + other.d) + ")"));
});
$p.kz = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.d) + " - ") + other.d) + ")"));
});
$p.qQ = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.d) + " * ") + other.d) + ")"));
});
$p.ov = (function(v, x$2, scalar) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.d) + " * ") + scalar.d) + ")"));
});
$p.oU = (function(v, x$2, scalar) {
  return this.ov(v, x$2, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(scalar));
});
$p.pz = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.d) + " / ") + other.d) + ")"));
});
$p.pN = (function(v, x$2) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(" + v.d) + " * 2.0 - 1.0)"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec2ImmutableOpsG_FloatExpr_Vec2Expr$", ({
  eW: 1,
  e9: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$.prototype = $p;
$p.aA = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".x"));
});
$p.ae = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".y"));
});
$p.gW = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".z"));
});
$p.kp = (function(v, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("dot(" + v.d) + ", ") + other.d) + ")"));
});
$p.iQ = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("length(" + v.d) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec3BaseG_FloatExpr_Vec3Expr$", ({
  eX: 1,
  aY: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$;
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
$p.kk = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.d) + " + ") + other.d) + ")"));
});
$p.kA = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.d) + " - ") + other.d) + ")"));
});
$p.bx = (function(v, x$2, scalar) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.d) + " * ") + scalar.d) + ")"));
});
$p.hG = (function(v, x$2, scalar) {
  return this.bx(v, x$2, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(scalar));
});
$p.py = (function(v, x$2, scalar) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.d) + " / ") + scalar.d) + ")"));
});
$p.qU = (function(v, x$2) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("normalize(" + v.d) + ")"));
});
$p.pK = (function(v, x$2) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("exp(" + v.d) + ")"));
});
$p.qM = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("min(" + v.d) + ", ") + other.d) + ")"));
});
$p.qN = (function(v, x$2, b, t) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("mix(" + v.d) + ", ") + b.d) + ", ") + t.d) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec3ImmutableOpsG_FloatExpr_Vec3Expr$", ({
  eY: 1,
  ed: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$.prototype = $p;
$p.aA = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".x"));
});
$p.ae = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".y"));
});
$p.gW = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".z"));
});
$p.i8 = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".w"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec4BaseG_FloatExpr_Vec4Expr$", ({
  eZ: 1,
  K: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$;
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
$p.p0 = (function(v, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.d) + " + ") + other.d) + ")"));
});
$p.qP = (function(v, x$2, scalar) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.d) + " * ") + scalar.d) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec4ImmutableOpsG_FloatExpr_Vec4Expr$", ({
  f0: 1,
  eg: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Instance(shade, painter) {
  this.it = null;
  this.jP = null;
  this.an = null;
  this.is = null;
  this.it = shade;
  this.jP = painter;
  this.an = [];
  this.is = [];
}
$p = $c_Ltrivalibs_graphics_painter_Instance.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Instance;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Instance() {
}
$h_Ltrivalibs_graphics_painter_Instance.prototype = $p;
var $d_Ltrivalibs_graphics_painter_Instance = new $TypeData().i($c_Ltrivalibs_graphics_painter_Instance, "trivalibs.graphics.painter.Instance", ({
  f9: 1,
  a0: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Layer(painter, shade) {
  this.bO = null;
  this.x = null;
  this.jQ = null;
  this.iv = 0;
  this.hk = 0;
  this.i = null;
  this.U = null;
  this.N = null;
  this.iu = null;
  this.bO = painter;
  this.x = shade;
  this.jQ = null;
  this.iv = (-1);
  this.hk = (-1);
  this.i = [];
  this.U = [];
  this.N = null;
  this.iu = new $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter);
}
$p = $c_Ltrivalibs_graphics_painter_Layer.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Layer;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Layer() {
}
$h_Ltrivalibs_graphics_painter_Layer.prototype = $p;
$p.nU = (function() {
  return ((this.x.iE !== null) && (((this.U.length | 0) === 0) || (this.U[0] === null)));
});
$p.rs = (function(blendState, mipSource, mipTarget) {
  if ((blendState !== (void 0))) {
    this.jQ = blendState;
  }
  if ((mipSource !== (void 0))) {
    var v = (mipSource | 0);
    this.iv = v;
  }
  if ((mipTarget !== (void 0))) {
    var v$1 = (mipTarget | 0);
    this.hk = v$1;
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Layer = new $TypeData().i($c_Ltrivalibs_graphics_painter_Layer, "trivalibs.graphics.painter.Layer", ({
  fb: 1,
  a0: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Shape(painter, form, shade) {
  this.hu = null;
  this.Y = null;
  this.jY = null;
  this.jX = null;
  this.P = null;
  this.as = null;
  this.jZ = null;
  this.hu = form;
  this.Y = shade;
  this.jY = "none";
  this.jX = null;
  this.P = [];
  this.as = [];
  this.jZ = new $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter);
}
$p = $c_Ltrivalibs_graphics_painter_Shape.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Shape;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Shape() {
}
$h_Ltrivalibs_graphics_painter_Shape.prototype = $p;
$p.rt = (function(cullMode, blendState) {
  if ((cullMode !== (void 0))) {
    this.jY = cullMode;
  }
  if ((blendState !== (void 0))) {
    this.jX = blendState;
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Shape = new $TypeData().i($c_Ltrivalibs_graphics_painter_Shape, "trivalibs.graphics.painter.Shape", ({
  fh: 1,
  a0: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform(inner) {
  this.K = null;
  this.K = inner;
}
$p = $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform() {
}
$h_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform.prototype = $p;
$p.v = (function() {
  return this.K.v();
});
var $d_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform = new $TypeData().i($c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform, "trivalibs.graphics.shader.FragmentUniform$given_WGSLType_FragmentUniform", ({
  fp: 1,
  t: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform(inner) {
  this.bQ = null;
  this.bQ = inner;
}
$p = $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform() {
}
$h_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform.prototype = $p;
$p.v = (function() {
  return this.bQ.v();
});
var $d_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform = new $TypeData().i($c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform, "trivalibs.graphics.shader.VertexUniform$given_WGSLType_VertexUniform", ({
  fq: 1,
  t: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor(prefix) {
  this.k6 = null;
  this.k6 = prefix;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor.prototype = $p;
$p.X = (function(name) {
  return new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(((this.k6 === "") ? name : ((this.k6 + ".") + name)));
});
var $d_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor, "trivalibs.graphics.shader.dsl.TypedAssignAccessor", ({
  fy: 1,
  F: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(prefix) {
  this.k7 = null;
  this.k7 = prefix;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor.prototype = $p;
$p.k = (function(name) {
  return ((this.k7 === "") ? $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), name) : $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), ((this.k7 + ".") + name)));
});
var $d_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor, "trivalibs.graphics.shader.dsl.TypedExprAccessor", ({
  fz: 1,
  F: 1
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
  fA: 1,
  F: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_VertexOut(prefix) {
  this.mJ = null;
  this.hx = null;
  this.mJ = prefix;
  this.hx = new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget((prefix + ".position"));
}
$p = $c_Ltrivalibs_graphics_shader_dsl_VertexOut.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_VertexOut;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_VertexOut() {
}
$h_Ltrivalibs_graphics_shader_dsl_VertexOut.prototype = $p;
$p.X = (function(name) {
  return new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(((this.mJ + ".") + name));
});
var $d_Ltrivalibs_graphics_shader_dsl_VertexOut = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_VertexOut, "trivalibs.graphics.shader.dsl.VertexOut", ({
  fC: 1,
  F: 1
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
$p.v = (function() {
  return "f32";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$, "trivalibs.graphics.shader.types$package$given_WGSLType_Float$", ({
  fM: 1,
  t: 1
}));
var $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$;
function $m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$() {
  if ((!$n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$)) {
    $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$ = new $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$();
  }
  return $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$() {
}
$p = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$() {
}
$h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$.prototype = $p;
$p.v = (function() {
  return "mat4x4<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$, "trivalibs.graphics.shader.types$package$given_WGSLType_Mat4$", ({
  fN: 1,
  t: 1
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
$p.v = (function() {
  return "sampler";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$, "trivalibs.graphics.shader.types$package$given_WGSLType_Sampler$", ({
  fO: 1,
  t: 1
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
$p.v = (function() {
  return "vec2<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$, "trivalibs.graphics.shader.types$package$given_WGSLType_Vec2$", ({
  fP: 1,
  t: 1
}));
var $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$;
function $m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$() {
  if ((!$n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$)) {
    $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$ = new $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$();
  }
  return $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$() {
}
$p = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$() {
}
$h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$.prototype = $p;
$p.v = (function() {
  return "vec3<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$, "trivalibs.graphics.shader.types$package$given_WGSLType_Vec3$", ({
  fQ: 1,
  t: 1
}));
var $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$;
function $m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$() {
  if ((!$n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$)) {
    $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$ = new $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$();
  }
  return $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$() {
}
$p = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$() {
}
$h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$.prototype = $p;
$p.v = (function() {
  return "vec4<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$, "trivalibs.graphics.shader.types$package$given_WGSLType_Vec4$", ({
  fR: 1,
  t: 1
}));
var $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$;
function $m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$() {
  if ((!$n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$)) {
    $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$ = new $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$();
  }
  return $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$;
}
/** @constructor */
function $c_jl_Class($data) {
  this.j2 = $data;
}
$p = $c_jl_Class.prototype = new $h_O();
$p.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
}
$h_jl_Class.prototype = $p;
$p.r = (function() {
  return ((this.j2.Y ? "interface " : (this.j2.X ? "" : "class ")) + this.j2.N);
});
var $d_jl_Class = new $TypeData().i($c_jl_Class, "java.lang.Class", ({
  b7: 1,
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
  bz: 1,
  bw: 1,
  bx: 1
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
    return $thiz.fY;
  } else {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 0)"));
  }
}
function $f_s_Product10__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fZ;
      break;
    }
    case 1: {
      return $thiz.bX;
      break;
    }
    case 2: {
      return $thiz.bY;
      break;
    }
    case 3: {
      return $thiz.bZ;
      break;
    }
    case 4: {
      return $thiz.c0;
      break;
    }
    case 5: {
      return $thiz.c1;
      break;
    }
    case 6: {
      return $thiz.c2;
      break;
    }
    case 7: {
      return $thiz.c3;
      break;
    }
    case 8: {
      return $thiz.c4;
      break;
    }
    case 9: {
      return $thiz.bW;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 9)"));
    }
  }
}
function $f_s_Product11__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.g0;
      break;
    }
    case 1: {
      return $thiz.c7;
      break;
    }
    case 2: {
      return $thiz.c8;
      break;
    }
    case 3: {
      return $thiz.c9;
      break;
    }
    case 4: {
      return $thiz.ca;
      break;
    }
    case 5: {
      return $thiz.cb;
      break;
    }
    case 6: {
      return $thiz.cc;
      break;
    }
    case 7: {
      return $thiz.cd;
      break;
    }
    case 8: {
      return $thiz.ce;
      break;
    }
    case 9: {
      return $thiz.c5;
      break;
    }
    case 10: {
      return $thiz.c6;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 10)"));
    }
  }
}
function $f_s_Product12__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.g1;
      break;
    }
    case 1: {
      return $thiz.ci;
      break;
    }
    case 2: {
      return $thiz.cj;
      break;
    }
    case 3: {
      return $thiz.ck;
      break;
    }
    case 4: {
      return $thiz.cl;
      break;
    }
    case 5: {
      return $thiz.cm;
      break;
    }
    case 6: {
      return $thiz.cn;
      break;
    }
    case 7: {
      return $thiz.co;
      break;
    }
    case 8: {
      return $thiz.cp;
      break;
    }
    case 9: {
      return $thiz.cf;
      break;
    }
    case 10: {
      return $thiz.cg;
      break;
    }
    case 11: {
      return $thiz.ch;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 11)"));
    }
  }
}
function $f_s_Product13__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.g2;
      break;
    }
    case 1: {
      return $thiz.cu;
      break;
    }
    case 2: {
      return $thiz.cv;
      break;
    }
    case 3: {
      return $thiz.cw;
      break;
    }
    case 4: {
      return $thiz.cx;
      break;
    }
    case 5: {
      return $thiz.cy;
      break;
    }
    case 6: {
      return $thiz.cz;
      break;
    }
    case 7: {
      return $thiz.cA;
      break;
    }
    case 8: {
      return $thiz.cB;
      break;
    }
    case 9: {
      return $thiz.cq;
      break;
    }
    case 10: {
      return $thiz.cr;
      break;
    }
    case 11: {
      return $thiz.cs;
      break;
    }
    case 12: {
      return $thiz.ct;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 12)"));
    }
  }
}
function $f_s_Product14__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.g3;
      break;
    }
    case 1: {
      return $thiz.cH;
      break;
    }
    case 2: {
      return $thiz.cI;
      break;
    }
    case 3: {
      return $thiz.cJ;
      break;
    }
    case 4: {
      return $thiz.cK;
      break;
    }
    case 5: {
      return $thiz.cL;
      break;
    }
    case 6: {
      return $thiz.cM;
      break;
    }
    case 7: {
      return $thiz.cN;
      break;
    }
    case 8: {
      return $thiz.cO;
      break;
    }
    case 9: {
      return $thiz.cC;
      break;
    }
    case 10: {
      return $thiz.cD;
      break;
    }
    case 11: {
      return $thiz.cE;
      break;
    }
    case 12: {
      return $thiz.cF;
      break;
    }
    case 13: {
      return $thiz.cG;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 13)"));
    }
  }
}
function $f_s_Product15__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.g4;
      break;
    }
    case 1: {
      return $thiz.cV;
      break;
    }
    case 2: {
      return $thiz.cW;
      break;
    }
    case 3: {
      return $thiz.cX;
      break;
    }
    case 4: {
      return $thiz.cY;
      break;
    }
    case 5: {
      return $thiz.cZ;
      break;
    }
    case 6: {
      return $thiz.d0;
      break;
    }
    case 7: {
      return $thiz.d1;
      break;
    }
    case 8: {
      return $thiz.d2;
      break;
    }
    case 9: {
      return $thiz.cP;
      break;
    }
    case 10: {
      return $thiz.cQ;
      break;
    }
    case 11: {
      return $thiz.cR;
      break;
    }
    case 12: {
      return $thiz.cS;
      break;
    }
    case 13: {
      return $thiz.cT;
      break;
    }
    case 14: {
      return $thiz.cU;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 14)"));
    }
  }
}
function $f_s_Product16__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.g5;
      break;
    }
    case 1: {
      return $thiz.da;
      break;
    }
    case 2: {
      return $thiz.db;
      break;
    }
    case 3: {
      return $thiz.dc;
      break;
    }
    case 4: {
      return $thiz.dd;
      break;
    }
    case 5: {
      return $thiz.de;
      break;
    }
    case 6: {
      return $thiz.df;
      break;
    }
    case 7: {
      return $thiz.dg;
      break;
    }
    case 8: {
      return $thiz.dh;
      break;
    }
    case 9: {
      return $thiz.d3;
      break;
    }
    case 10: {
      return $thiz.d4;
      break;
    }
    case 11: {
      return $thiz.d5;
      break;
    }
    case 12: {
      return $thiz.d6;
      break;
    }
    case 13: {
      return $thiz.d7;
      break;
    }
    case 14: {
      return $thiz.d8;
      break;
    }
    case 15: {
      return $thiz.d9;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 15)"));
    }
  }
}
function $f_s_Product17__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.g6;
      break;
    }
    case 1: {
      return $thiz.dr;
      break;
    }
    case 2: {
      return $thiz.ds;
      break;
    }
    case 3: {
      return $thiz.dt;
      break;
    }
    case 4: {
      return $thiz.du;
      break;
    }
    case 5: {
      return $thiz.dv;
      break;
    }
    case 6: {
      return $thiz.dw;
      break;
    }
    case 7: {
      return $thiz.dx;
      break;
    }
    case 8: {
      return $thiz.dy;
      break;
    }
    case 9: {
      return $thiz.di;
      break;
    }
    case 10: {
      return $thiz.dj;
      break;
    }
    case 11: {
      return $thiz.dk;
      break;
    }
    case 12: {
      return $thiz.dl;
      break;
    }
    case 13: {
      return $thiz.dm;
      break;
    }
    case 14: {
      return $thiz.dn;
      break;
    }
    case 15: {
      return $thiz.dp;
      break;
    }
    case 16: {
      return $thiz.dq;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 16)"));
    }
  }
}
function $f_s_Product18__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.g7;
      break;
    }
    case 1: {
      return $thiz.dI;
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
      return $thiz.dz;
      break;
    }
    case 10: {
      return $thiz.dA;
      break;
    }
    case 11: {
      return $thiz.dB;
      break;
    }
    case 12: {
      return $thiz.dC;
      break;
    }
    case 13: {
      return $thiz.dD;
      break;
    }
    case 14: {
      return $thiz.dE;
      break;
    }
    case 15: {
      return $thiz.dF;
      break;
    }
    case 16: {
      return $thiz.dG;
      break;
    }
    case 17: {
      return $thiz.dH;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 17)"));
    }
  }
}
function $f_s_Product19__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.g8;
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
    case 7: {
      return $thiz.e6;
      break;
    }
    case 8: {
      return $thiz.e7;
      break;
    }
    case 9: {
      return $thiz.dQ;
      break;
    }
    case 10: {
      return $thiz.dR;
      break;
    }
    case 11: {
      return $thiz.dS;
      break;
    }
    case 12: {
      return $thiz.dT;
      break;
    }
    case 13: {
      return $thiz.dU;
      break;
    }
    case 14: {
      return $thiz.dV;
      break;
    }
    case 15: {
      return $thiz.dW;
      break;
    }
    case 16: {
      return $thiz.dX;
      break;
    }
    case 17: {
      return $thiz.dY;
      break;
    }
    case 18: {
      return $thiz.dZ;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 18)"));
    }
  }
}
function $f_s_Product2__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.T;
      break;
    }
    case 1: {
      return $thiz.af;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 1)"));
    }
  }
}
function $f_s_Product20__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.g9;
      break;
    }
    case 1: {
      return $thiz.ei;
      break;
    }
    case 2: {
      return $thiz.ek;
      break;
    }
    case 3: {
      return $thiz.el;
      break;
    }
    case 4: {
      return $thiz.em;
      break;
    }
    case 5: {
      return $thiz.en;
      break;
    }
    case 6: {
      return $thiz.eo;
      break;
    }
    case 7: {
      return $thiz.ep;
      break;
    }
    case 8: {
      return $thiz.eq;
      break;
    }
    case 9: {
      return $thiz.e8;
      break;
    }
    case 10: {
      return $thiz.e9;
      break;
    }
    case 11: {
      return $thiz.ea;
      break;
    }
    case 12: {
      return $thiz.eb;
      break;
    }
    case 13: {
      return $thiz.ec;
      break;
    }
    case 14: {
      return $thiz.ed;
      break;
    }
    case 15: {
      return $thiz.ee;
      break;
    }
    case 16: {
      return $thiz.ef;
      break;
    }
    case 17: {
      return $thiz.eg;
      break;
    }
    case 18: {
      return $thiz.eh;
      break;
    }
    case 19: {
      return $thiz.ej;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 19)"));
    }
  }
}
function $f_s_Product21__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.ga;
      break;
    }
    case 1: {
      return $thiz.eB;
      break;
    }
    case 2: {
      return $thiz.eE;
      break;
    }
    case 3: {
      return $thiz.eF;
      break;
    }
    case 4: {
      return $thiz.eG;
      break;
    }
    case 5: {
      return $thiz.eH;
      break;
    }
    case 6: {
      return $thiz.eI;
      break;
    }
    case 7: {
      return $thiz.eJ;
      break;
    }
    case 8: {
      return $thiz.eK;
      break;
    }
    case 9: {
      return $thiz.er;
      break;
    }
    case 10: {
      return $thiz.es;
      break;
    }
    case 11: {
      return $thiz.et;
      break;
    }
    case 12: {
      return $thiz.eu;
      break;
    }
    case 13: {
      return $thiz.ev;
      break;
    }
    case 14: {
      return $thiz.ew;
      break;
    }
    case 15: {
      return $thiz.ex;
      break;
    }
    case 16: {
      return $thiz.ey;
      break;
    }
    case 17: {
      return $thiz.ez;
      break;
    }
    case 18: {
      return $thiz.eA;
      break;
    }
    case 19: {
      return $thiz.eC;
      break;
    }
    case 20: {
      return $thiz.eD;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 20)"));
    }
  }
}
function $f_s_Product22__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.gb;
      break;
    }
    case 1: {
      return $thiz.eV;
      break;
    }
    case 2: {
      return $thiz.eZ;
      break;
    }
    case 3: {
      return $thiz.f0;
      break;
    }
    case 4: {
      return $thiz.f1;
      break;
    }
    case 5: {
      return $thiz.f2;
      break;
    }
    case 6: {
      return $thiz.f3;
      break;
    }
    case 7: {
      return $thiz.f4;
      break;
    }
    case 8: {
      return $thiz.f5;
      break;
    }
    case 9: {
      return $thiz.eL;
      break;
    }
    case 10: {
      return $thiz.eM;
      break;
    }
    case 11: {
      return $thiz.eN;
      break;
    }
    case 12: {
      return $thiz.eO;
      break;
    }
    case 13: {
      return $thiz.eP;
      break;
    }
    case 14: {
      return $thiz.eQ;
      break;
    }
    case 15: {
      return $thiz.eR;
      break;
    }
    case 16: {
      return $thiz.eS;
      break;
    }
    case 17: {
      return $thiz.eT;
      break;
    }
    case 18: {
      return $thiz.eU;
      break;
    }
    case 19: {
      return $thiz.eW;
      break;
    }
    case 20: {
      return $thiz.eX;
      break;
    }
    case 21: {
      return $thiz.eY;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 21)"));
    }
  }
}
function $f_s_Product3__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.aB;
      break;
    }
    case 1: {
      return $thiz.aQ;
      break;
    }
    case 2: {
      return $thiz.aZ;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 2)"));
    }
  }
}
function $f_s_Product4__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.b0;
      break;
    }
    case 1: {
      return $thiz.bd;
      break;
    }
    case 2: {
      return $thiz.be;
      break;
    }
    case 3: {
      return $thiz.bf;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 3)"));
    }
  }
}
function $f_s_Product5__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.f6;
      break;
    }
    case 1: {
      return $thiz.bA;
      break;
    }
    case 2: {
      return $thiz.bB;
      break;
    }
    case 3: {
      return $thiz.bC;
      break;
    }
    case 4: {
      return $thiz.bD;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 4)"));
    }
  }
}
function $f_s_Product6__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.gc;
      break;
    }
    case 1: {
      return $thiz.f7;
      break;
    }
    case 2: {
      return $thiz.f8;
      break;
    }
    case 3: {
      return $thiz.f9;
      break;
    }
    case 4: {
      return $thiz.fa;
      break;
    }
    case 5: {
      return $thiz.fb;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 5)"));
    }
  }
}
function $f_s_Product7__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.gd;
      break;
    }
    case 1: {
      return $thiz.fc;
      break;
    }
    case 2: {
      return $thiz.fd;
      break;
    }
    case 3: {
      return $thiz.fe;
      break;
    }
    case 4: {
      return $thiz.ff;
      break;
    }
    case 5: {
      return $thiz.fg;
      break;
    }
    case 6: {
      return $thiz.fh;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 6)"));
    }
  }
}
function $f_s_Product8__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.ge;
      break;
    }
    case 1: {
      return $thiz.fi;
      break;
    }
    case 2: {
      return $thiz.fj;
      break;
    }
    case 3: {
      return $thiz.fk;
      break;
    }
    case 4: {
      return $thiz.fl;
      break;
    }
    case 5: {
      return $thiz.fm;
      break;
    }
    case 6: {
      return $thiz.fn;
      break;
    }
    case 7: {
      return $thiz.fo;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 7)"));
    }
  }
}
function $f_s_Product9__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.gf;
      break;
    }
    case 1: {
      return $thiz.fp;
      break;
    }
    case 2: {
      return $thiz.fq;
      break;
    }
    case 3: {
      return $thiz.fr;
      break;
    }
    case 4: {
      return $thiz.fs;
      break;
    }
    case 5: {
      return $thiz.ft;
      break;
    }
    case 6: {
      return $thiz.fu;
      break;
    }
    case 7: {
      return $thiz.fv;
      break;
    }
    case 8: {
      return $thiz.fw;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 8)"));
    }
  }
}
function $f_sc_Iterator__concat__F0__sc_Iterator($thiz, xs) {
  return new $c_sc_Iterator$ConcatIterator($thiz).pq(xs);
}
function $f_sc_Iterator__sliceIterator__I__I__sc_Iterator($thiz, from, until) {
  var lo = ((from > 0) ? from : 0);
  var rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
  return ((rest === 0) ? $m_sc_Iterator$().bg : new $c_sc_Iterator$SliceIterator($thiz, lo, rest));
}
function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
  var those = that.ad();
  while ($thiz.V()) {
    if ((!those.V())) {
      return false;
    }
    if ((!$m_sr_BoxesRunTime$().c($thiz.R(), those.R()))) {
      return false;
    }
  }
  return (!those.V());
}
/** @constructor */
function $c_sc_Iterator$() {
  this.bg = null;
  $n_sc_Iterator$ = this;
  this.bg = new $c_sc_Iterator$$anon$19();
}
$p = $c_sc_Iterator$.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
}
$h_sc_Iterator$.prototype = $p;
var $d_sc_Iterator$ = new $TypeData().i($c_sc_Iterator$, "scala.collection.Iterator$", ({
  c5: 1,
  a: 1,
  aw: 1
}));
var $n_sc_Iterator$;
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$();
  }
  return $n_sc_Iterator$;
}
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cA)));
}
/** @constructor */
function $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(f) {
  this.l2 = null;
  this.l2 = f;
}
$p = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = new $h_sr_AbstractFunction0();
$p.constructor = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c;
/** @constructor */
function $h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c() {
}
$h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = $p;
$p.hH = (function() {
  return (0, this.l2)();
});
var $d_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c = new $TypeData().i($c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c, "scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c", ({
  cJ: 1,
  cI: 1,
  br: 1
}));
/** @constructor */
function $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(f) {
  this.l3 = null;
  this.l3 = f;
}
$p = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919;
/** @constructor */
function $h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919() {
}
$h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = $p;
$p.h = (function(x0) {
  return (0, this.l3)(x0);
});
var $d_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919 = new $TypeData().i($c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919, "scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919", ({
  cL: 1,
  cK: 1,
  h: 1
}));
/** @constructor */
function $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(f) {
  this.l4 = null;
  this.l4 = f;
}
$p = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = new $h_sr_AbstractFunction2();
$p.constructor = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8;
/** @constructor */
function $h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8() {
}
$h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = $p;
$p.nO = (function(x0, x1) {
  return (0, this.l4)(x0, x1);
});
var $d_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8 = new $TypeData().i($c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8, "scala.runtime.AbstractFunction2.$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8", ({
  cN: 1,
  cM: 1,
  bs: 1
}));
/** @constructor */
function $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(f) {
  this.l5 = null;
  this.l5 = f;
}
$p = $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825.prototype = new $h_sr_AbstractFunction3();
$p.constructor = $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825;
/** @constructor */
function $h_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825() {
}
$h_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825.prototype = $p;
$p.p5 = (function(x0, x1, x2) {
  return (0, this.l5)(x0, x1, x2);
});
var $d_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825 = new $TypeData().i($c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825, "scala.runtime.AbstractFunction3.$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825", ({
  cP: 1,
  cO: 1,
  bt: 1
}));
/** @constructor */
function $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(f) {
  this.l6 = null;
  this.l6 = f;
}
$p = $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a.prototype = new $h_sr_AbstractFunction4();
$p.constructor = $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a;
/** @constructor */
function $h_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a() {
}
$h_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a.prototype = $p;
$p.km = (function(x0, x1, x2, x3) {
  return (0, this.l6)(x0, x1, x2, x3);
});
var $d_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a = new $TypeData().i($c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a, "scala.runtime.AbstractFunction4.$$Lambda$451042f443265710aa66de6985cba67480d9b00a", ({
  cR: 1,
  cQ: 1,
  bu: 1
}));
/** @constructor */
function $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078(f) {
  this.l7 = null;
  this.l7 = f;
}
$p = $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078.prototype = new $h_sr_AbstractFunction5();
$p.constructor = $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078;
/** @constructor */
function $h_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078() {
}
$h_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078.prototype = $p;
$p.p4 = (function(x0, x1, x2, x3, x4) {
  return (0, this.l7)(x0, x1, x2, x3, x4);
});
var $d_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078 = new $TypeData().i($c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078, "scala.runtime.AbstractFunction5.$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078", ({
  cT: 1,
  cS: 1,
  bv: 1
}));
var $d_sr_Nothing$ = new $TypeData().i(0, "scala.runtime.Nothing$", ({
  cW: 1,
  f: 1,
  a: 1
}));
/** @constructor */
function $c_sr_TupleXXL(es) {
  this.ag = null;
  this.ag = es;
  if ((es.a.length <= 22)) {
    $m_sr_Scala3RunTime$().pb();
  }
}
$p = $c_sr_TupleXXL.prototype = new $h_O();
$p.constructor = $c_sr_TupleXXL;
/** @constructor */
function $h_sr_TupleXXL() {
}
$h_sr_TupleXXL.prototype = $p;
$p.J = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.o = (function(n) {
  return this.ag.a[n];
});
$p.z = (function() {
  return this.ag.a.length;
});
$p.H = (function() {
  return "Tuple";
});
$p.r = (function() {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($m_s_Predef$().s1(this.ag), "(", ",", ")");
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().pn(this, (-889275714), null);
});
$p.u = (function(that) {
  if ((that instanceof $c_sr_TupleXXL)) {
    if ((this.ag === that.ag)) {
      return true;
    } else {
      if ((this.ag.a.length !== that.ag.a.length)) {
        return false;
      }
      var i = 0;
      while ((i < this.ag.a.length)) {
        var $x_2 = $m_sr_BoxesRunTime$();
        var arr$3 = this.ag;
        var n = i;
        var $x_1 = arr$3.a[n];
        var arr$4 = that.ag;
        var n$1 = i;
        if ((!$x_2.c($x_1, arr$4.a[n$1]))) {
          return false;
        }
        i = ((1 + i) | 0);
      }
      return true;
    }
  } else {
    return false;
  }
});
function $isArrayOf_sr_TupleXXL(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aJ)));
}
var $d_sr_TupleXXL = new $TypeData().i($c_sr_TupleXXL, "scala.runtime.TupleXXL", ({
  aJ: 1,
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
$p.hJ = (function(f) {
  return ((arg1$2) => f.h(arg1$2));
});
var $d_sjs_js_Any$ = new $TypeData().i($c_sjs_js_Any$, "scala.scalajs.js.Any$", ({
  d3: 1,
  d7: 1,
  d8: 1
}));
var $n_sjs_js_Any$;
function $m_sjs_js_Any$() {
  if ((!$n_sjs_js_Any$)) {
    $n_sjs_js_Any$ = new $c_sjs_js_Any$();
  }
  return $n_sjs_js_Any$;
}
/** @constructor */
function $c_Lsketchlib_utils_room_Ring$() {
}
$p = $c_Lsketchlib_utils_room_Ring$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_Ring$;
/** @constructor */
function $h_Lsketchlib_utils_room_Ring$() {
}
$h_Lsketchlib_utils_room_Ring$.prototype = $p;
$p.rf = (function(center, dir, length, thickness, facing, height) {
  var p$proxy1 = ((dir.p * dir.p) + (dir.n * dir.n));
  var len = (+Math.sqrt(p$proxy1));
  var d = new $c_Ltrivalibs_graphics_math_cpu_Vec2((0.5 * ((dir.p / len) * length)), (0.5 * ((dir.n / len) * length)));
  var n = new $c_Ltrivalibs_graphics_math_cpu_Vec2((((-d.n) / length) * thickness), ((d.p / length) * thickness));
  return new $c_Lsketchlib_utils_room_Ring([new $c_Ltrivalibs_graphics_math_cpu_Vec2(((center.p + d.p) + n.p), ((center.n + d.n) + n.n)), new $c_Ltrivalibs_graphics_math_cpu_Vec2(((center.p + d.p) - n.p), ((center.n + d.n) - n.n)), new $c_Ltrivalibs_graphics_math_cpu_Vec2(((center.p - d.p) - n.p), ((center.n - d.n) - n.n)), new $c_Ltrivalibs_graphics_math_cpu_Vec2(((center.p - d.p) + n.p), ((center.n - d.n) + n.n))], facing, height);
});
var $d_Lsketchlib_utils_room_Ring$ = new $TypeData().i($c_Lsketchlib_utils_room_Ring$, "sketchlib.utils.room.Ring$", ({
  dx: 1,
  aH: 1,
  aI: 1
}));
var $n_Lsketchlib_utils_room_Ring$;
function $m_Lsketchlib_utils_room_Ring$() {
  if ((!$n_Lsketchlib_utils_room_Ring$)) {
    $n_Lsketchlib_utils_room_Ring$ = new $c_Lsketchlib_utils_room_Ring$();
  }
  return $n_Lsketchlib_utils_room_Ring$;
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
function $c_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3.prototype = new $h_s_Conversion();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3.prototype = $p;
$p.h = (function(x) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec4((+x.b0), (+x.bd), (+x.be), (+x.bf));
});
var $d_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3, "trivalibs.graphics.math.cpu.Vec4$$anon$3", ({
  ex: 1,
  a6: 1,
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
$p.h = (function(x) {
  return $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().aO((+x));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1, "trivalibs.graphics.math.gpu.float_expr$package$$anon$1", ({
  eQ: 1,
  a6: 1,
  h: 1
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
        deps = ((rest[0] === (void 0)) ? $m_Ltrivalibs_graphics_shader_dsl_WgslFnData$().oT() : rest[0]);
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
class $c_jl_AssertionError extends $c_jl_Error {
  constructor(detailMessage) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ("" + detailMessage), ((detailMessage instanceof $c_jl_Throwable) ? detailMessage : null), true, true);
  }
}
var $d_jl_AssertionError = new $TypeData().i($c_jl_AssertionError, "java.lang.AssertionError", ({
  b3: 1,
  b8: 1,
  f: 1,
  a: 1
}));
function $f_jl_Boolean__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_jl_Boolean__hashCode__I($thiz) {
  return ($thiz ? 1231 : 1237);
}
function $f_jl_Boolean__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Boolean = new $TypeData().i(0, "java.lang.Boolean", ({
  b4: 1,
  a: 1,
  i: 1,
  g: 1
}), ((x) => ((typeof x) === "boolean")));
function $f_jl_Character__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Character__equals__O__Z($thiz, that) {
  return ((that instanceof $Char) && ($thiz === that.c));
}
function $f_jl_Character__toString__T($thiz) {
  return ("" + $cToS($thiz));
}
function $isArrayOf_jl_Character(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a1)));
}
var $d_jl_Character = new $TypeData().i(0, "java.lang.Character", ({
  a1: 1,
  a: 1,
  i: 1,
  g: 1
}), ((x) => (x instanceof $Char)));
class $c_jl_RuntimeException extends $c_jl_Exception {
}
/** @constructor */
function $c_jl_StringBuilder() {
  this.aq = null;
  this.aq = "";
}
$p = $c_jl_StringBuilder.prototype = new $h_O();
$p.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
}
$h_jl_StringBuilder.prototype = $p;
$p.r = (function() {
  return this.aq;
});
$p.M = (function() {
  return this.aq.length;
});
$p.nV = (function(index) {
  return this.aq.charCodeAt(index);
});
var $d_jl_StringBuilder = new $TypeData().i($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  bh: 1,
  L: 1,
  b1: 1,
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
$p.aj = (function() {
  return (-1);
});
$p.nZ = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.kj = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.ad = (function() {
  return this;
});
$p.hI = (function(n) {
  return this.iX(n, (-1));
});
$p.iX = (function(from, until) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until);
});
$p.r = (function() {
  return "<iterator>";
});
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.bU(0) === 0);
}
function $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  var thisKnownSize = $thiz.aj();
  if ((thisKnownSize !== (-1))) {
    var thatKnownSize = that.aj();
    if ((thatKnownSize !== (-1))) {
      if ((thisKnownSize !== thatKnownSize)) {
        return false;
      }
      if ((thisKnownSize === 0)) {
        return true;
      }
    }
  }
  return $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz.ad(), that);
}
/** @constructor */
function $c_Lsketchlib_utils_room_Edge(a, b, inwardNormal, arrisAtA) {
  this.a3 = null;
  this.aD = null;
  this.bq = null;
  this.gm = false;
  this.a3 = a;
  this.aD = b;
  this.bq = inwardNormal;
  this.gm = arrisAtA;
}
$p = $c_Lsketchlib_utils_room_Edge.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_Edge;
/** @constructor */
function $h_Lsketchlib_utils_room_Edge() {
}
$h_Lsketchlib_utils_room_Edge.prototype = $p;
$p.J = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.w = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().l(acc, 2154973);
  acc = $m_sr_Statics$().l(acc, $m_sr_Statics$().L(this.a3));
  acc = $m_sr_Statics$().l(acc, $m_sr_Statics$().L(this.aD));
  acc = $m_sr_Statics$().l(acc, $m_sr_Statics$().L(this.bq));
  acc = $m_sr_Statics$().l(acc, (this.gm ? 1231 : 1237));
  return $m_sr_Statics$().ab(acc, 4);
});
$p.u = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lsketchlib_utils_room_Edge)) {
    if ((this.gm === x$0.gm)) {
      var x = this.a3;
      var x$2 = x$0.a3;
      var $x_2 = ((x === null) ? (x$2 === null) : (x === x$2));
    } else {
      var $x_2 = false;
    }
    if ($x_2) {
      var x$3 = this.aD;
      var x$4 = x$0.aD;
      var $x_1 = ((x$3 === null) ? (x$4 === null) : (x$3 === x$4));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      var x$5 = this.bq;
      var x$6 = x$0.bq;
      return ((x$5 === null) ? (x$6 === null) : (x$5 === x$6));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.r = (function() {
  return $m_sr_ScalaRunTime$().gM(this);
});
$p.z = (function() {
  return 4;
});
$p.H = (function() {
  return "Edge";
});
$p.o = (function(n) {
  switch (n) {
    case 0: {
      return this.a3;
      break;
    }
    case 1: {
      return this.aD;
      break;
    }
    case 2: {
      return this.bq;
      break;
    }
    case 3: {
      return this.gm;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
    }
  }
});
function $isArrayOf_Lsketchlib_utils_room_Edge(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aM)));
}
var $d_Lsketchlib_utils_room_Edge = new $TypeData().i($c_Lsketchlib_utils_room_Edge, "sketchlib.utils.room.Edge", ({
  aM: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_Lsketchlib_utils_room_Painting(wall, shape, model, shadowRect, shadowFade, shadowStrength, basePos, baseRect) {
  this.hc = null;
  this.gq = null;
  this.hb = null;
  this.go = null;
  this.gn = null;
  this.gp = 0.0;
  this.h9 = null;
  this.ha = null;
  this.hc = wall;
  this.gq = shape;
  this.hb = model;
  this.go = shadowRect;
  this.gn = shadowFade;
  this.gp = shadowStrength;
  this.h9 = basePos;
  this.ha = baseRect;
}
$p = $c_Lsketchlib_utils_room_Painting.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_Painting;
/** @constructor */
function $h_Lsketchlib_utils_room_Painting() {
}
$h_Lsketchlib_utils_room_Painting.prototype = $p;
$p.J = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.w = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().l(acc, 990625508);
  acc = $m_sr_Statics$().l(acc, $m_sr_Statics$().L(this.hc));
  acc = $m_sr_Statics$().l(acc, $m_sr_Statics$().L(this.gq));
  acc = $m_sr_Statics$().l(acc, $m_sr_Statics$().L(this.hb));
  acc = $m_sr_Statics$().l(acc, $m_sr_Statics$().L(this.go));
  acc = $m_sr_Statics$().l(acc, $m_sr_Statics$().L(this.gn));
  acc = $m_sr_Statics$().l(acc, $m_sr_Statics$().bw(this.gp));
  acc = $m_sr_Statics$().l(acc, $m_sr_Statics$().L(this.h9));
  acc = $m_sr_Statics$().l(acc, $m_sr_Statics$().L(this.ha));
  return $m_sr_Statics$().ab(acc, 8);
});
$p.u = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lsketchlib_utils_room_Painting)) {
    if ((this.gp === x$0.gp)) {
      var x = this.hc;
      var x$2 = x$0.hc;
      var $x_6 = ((x === null) ? (x$2 === null) : x.u(x$2));
    } else {
      var $x_6 = false;
    }
    if ($x_6) {
      var x$3 = this.gq;
      var x$4 = x$0.gq;
      var $x_5 = ((x$3 === null) ? (x$4 === null) : (x$3 === x$4));
    } else {
      var $x_5 = false;
    }
    if ($x_5) {
      var x$5 = this.hb;
      var x$6 = x$0.hb;
      var $x_4 = ((x$5 === null) ? (x$6 === null) : (x$5 === x$6));
    } else {
      var $x_4 = false;
    }
    if ($x_4) {
      var x$7 = this.go;
      var x$8 = x$0.go;
      var $x_3 = ((x$7 === null) ? (x$8 === null) : (x$7 === x$8));
    } else {
      var $x_3 = false;
    }
    if ($x_3) {
      var x$9 = this.gn;
      var x$10 = x$0.gn;
      var $x_2 = ((x$9 === null) ? (x$10 === null) : (x$9 === x$10));
    } else {
      var $x_2 = false;
    }
    if ($x_2) {
      var x$11 = this.h9;
      var x$12 = x$0.h9;
      var $x_1 = ((x$11 === null) ? (x$12 === null) : (x$11 === x$12));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      var x$13 = this.ha;
      var x$14 = x$0.ha;
      return ((x$13 === null) ? (x$14 === null) : (x$13 === x$14));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.r = (function() {
  return $m_sr_ScalaRunTime$().gM(this);
});
$p.z = (function() {
  return 8;
});
$p.H = (function() {
  return "Painting";
});
$p.o = (function(n) {
  switch (n) {
    case 0: {
      return this.hc;
      break;
    }
    case 1: {
      return this.gq;
      break;
    }
    case 2: {
      return this.hb;
      break;
    }
    case 3: {
      return this.go;
      break;
    }
    case 4: {
      return this.gn;
      break;
    }
    case 5: {
      return this.gp;
      break;
    }
    case 6: {
      return this.h9;
      break;
    }
    case 7: {
      return this.ha;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
    }
  }
});
function $isArrayOf_Lsketchlib_utils_room_Painting(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aN)));
}
var $d_Lsketchlib_utils_room_Painting = new $TypeData().i($c_Lsketchlib_utils_room_Painting, "sketchlib.utils.room.Painting", ({
  aN: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_Lsketchlib_utils_room_PaintingSpec(width, height, depth, image, sideStretch) {
  this.bK = 0.0;
  this.bJ = 0.0;
  this.br = 0.0;
  this.gr = null;
  this.fD = 0.0;
  this.bK = width;
  this.bJ = height;
  this.br = depth;
  this.gr = image;
  this.fD = sideStretch;
}
$p = $c_Lsketchlib_utils_room_PaintingSpec.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_PaintingSpec;
/** @constructor */
function $h_Lsketchlib_utils_room_PaintingSpec() {
}
$h_Lsketchlib_utils_room_PaintingSpec.prototype = $p;
$p.J = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.w = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().l(acc, 1068570815);
  acc = $m_sr_Statics$().l(acc, $m_sr_Statics$().bw(this.bK));
  acc = $m_sr_Statics$().l(acc, $m_sr_Statics$().bw(this.bJ));
  acc = $m_sr_Statics$().l(acc, $m_sr_Statics$().bw(this.br));
  acc = $m_sr_Statics$().l(acc, $m_sr_Statics$().L(this.gr));
  acc = $m_sr_Statics$().l(acc, $m_sr_Statics$().bw(this.fD));
  return $m_sr_Statics$().ab(acc, 5);
});
$p.u = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lsketchlib_utils_room_PaintingSpec)) {
    if (((((this.bK === x$0.bK) && (this.bJ === x$0.bJ)) && (this.br === x$0.br)) && (this.fD === x$0.fD))) {
      var x = this.gr;
      var x$2 = x$0.gr;
      return ((x === null) ? (x$2 === null) : (x === x$2));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.r = (function() {
  return $m_sr_ScalaRunTime$().gM(this);
});
$p.z = (function() {
  return 5;
});
$p.H = (function() {
  return "PaintingSpec";
});
$p.o = (function(n) {
  switch (n) {
    case 0: {
      return this.bK;
      break;
    }
    case 1: {
      return this.bJ;
      break;
    }
    case 2: {
      return this.br;
      break;
    }
    case 3: {
      return this.gr;
      break;
    }
    case 4: {
      return this.fD;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
    }
  }
});
function $isArrayOf_Lsketchlib_utils_room_PaintingSpec(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aO)));
}
var $d_Lsketchlib_utils_room_PaintingSpec = new $TypeData().i($c_Lsketchlib_utils_room_PaintingSpec, "sketchlib.utils.room.PaintingSpec", ({
  aO: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_Lsketchlib_utils_room_Ring(points, facing, height) {
  this.bi = null;
  this.gs = 0.0;
  this.hd = 0.0;
  this.bi = points;
  this.gs = facing;
  this.hd = height;
}
$p = $c_Lsketchlib_utils_room_Ring.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_Ring;
/** @constructor */
function $h_Lsketchlib_utils_room_Ring() {
}
$h_Lsketchlib_utils_room_Ring.prototype = $p;
$p.J = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.w = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().l(acc, 2547280);
  acc = $m_sr_Statics$().l(acc, $m_sr_Statics$().L(this.bi));
  acc = $m_sr_Statics$().l(acc, $m_sr_Statics$().L(this.gs));
  acc = $m_sr_Statics$().l(acc, $m_sr_Statics$().bw(this.hd));
  return $m_sr_Statics$().ab(acc, 3);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_Lsketchlib_utils_room_Ring) && (((this.hd === x$0.hd) && $m_sr_BoxesRunTime$().c(this.bi, x$0.bi)) && (this.gs === x$0.gs))));
});
$p.r = (function() {
  return $m_sr_ScalaRunTime$().gM(this);
});
$p.z = (function() {
  return 3;
});
$p.H = (function() {
  return "Ring";
});
$p.o = (function(n) {
  switch (n) {
    case 0: {
      return this.bi;
      break;
    }
    case 1: {
      return this.gs;
      break;
    }
    case 2: {
      return this.hd;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
    }
  }
});
function $isArrayOf_Lsketchlib_utils_room_Ring(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aP)));
}
var $d_Lsketchlib_utils_room_Ring = new $TypeData().i($c_Lsketchlib_utils_room_Ring, "sketchlib.utils.room.Ring", ({
  aP: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_Lsketchlib_utils_room_Wall(center, width, height, inwardNormal) {
  this.fE = null;
  this.aT = 0.0;
  this.b4 = 0.0;
  this.b5 = null;
  this.fE = center;
  this.aT = width;
  this.b4 = height;
  this.b5 = inwardNormal;
}
$p = $c_Lsketchlib_utils_room_Wall.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_Wall;
/** @constructor */
function $h_Lsketchlib_utils_room_Wall() {
}
$h_Lsketchlib_utils_room_Wall.prototype = $p;
$p.J = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.w = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().l(acc, 2688490);
  acc = $m_sr_Statics$().l(acc, $m_sr_Statics$().L(this.fE));
  acc = $m_sr_Statics$().l(acc, $m_sr_Statics$().bw(this.aT));
  acc = $m_sr_Statics$().l(acc, $m_sr_Statics$().bw(this.b4));
  acc = $m_sr_Statics$().l(acc, $m_sr_Statics$().L(this.b5));
  return $m_sr_Statics$().ab(acc, 4);
});
$p.u = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lsketchlib_utils_room_Wall)) {
    if (((this.aT === x$0.aT) && (this.b4 === x$0.b4))) {
      var x = this.fE;
      var x$2 = x$0.fE;
      var $x_1 = ((x === null) ? (x$2 === null) : (x === x$2));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      var x$3 = this.b5;
      var x$4 = x$0.b5;
      return ((x$3 === null) ? (x$4 === null) : (x$3 === x$4));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.r = (function() {
  return $m_sr_ScalaRunTime$().gM(this);
});
$p.z = (function() {
  return 4;
});
$p.H = (function() {
  return "Wall";
});
$p.o = (function(n) {
  switch (n) {
    case 0: {
      return this.fE;
      break;
    }
    case 1: {
      return this.aT;
      break;
    }
    case 2: {
      return this.b4;
      break;
    }
    case 3: {
      return this.b5;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
    }
  }
});
function $isArrayOf_Lsketchlib_utils_room_Wall(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aQ)));
}
var $d_Lsketchlib_utils_room_Wall = new $TypeData().i($c_Lsketchlib_utils_room_Wall, "sketchlib.utils.room.Wall", ({
  aQ: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$.prototype = $p;
$p.hL = (function(m) {
  return m.ju;
});
$p.hM = (function(m) {
  return m.jv;
});
$p.hN = (function(m) {
  return m.jw;
});
$p.hO = (function(m) {
  return m.jx;
});
$p.hP = (function(m) {
  return m.jy;
});
$p.hQ = (function(m) {
  return m.jz;
});
$p.hR = (function(m) {
  return m.jA;
});
$p.hS = (function(m) {
  return m.jB;
});
$p.hT = (function(m) {
  return m.jC;
});
$p.hU = (function(m) {
  return m.jD;
});
$p.hV = (function(m) {
  return m.jE;
});
$p.hW = (function(m) {
  return m.jF;
});
$p.hX = (function(m) {
  return m.jG;
});
$p.hY = (function(m) {
  return m.jH;
});
$p.hZ = (function(m) {
  return m.jI;
});
$p.i0 = (function(m) {
  return m.jJ;
});
$p.od = (function(m, v) {
  m.ju = v;
});
$p.oe = (function(m, v) {
  m.jv = v;
});
$p.of = (function(m, v) {
  m.jw = v;
});
$p.og = (function(m, v) {
  m.jx = v;
});
$p.oh = (function(m, v) {
  m.jy = v;
});
$p.oi = (function(m, v) {
  m.jz = v;
});
$p.oj = (function(m, v) {
  m.jA = v;
});
$p.ok = (function(m, v) {
  m.jB = v;
});
$p.ol = (function(m, v) {
  m.jC = v;
});
$p.om = (function(m, v) {
  m.jD = v;
});
$p.on = (function(m, v) {
  m.jE = v;
});
$p.oo = (function(m, v) {
  m.jF = v;
});
$p.op = (function(m, v) {
  m.jG = v;
});
$p.oq = (function(m, v) {
  m.jH = v;
});
$p.or = (function(m, v) {
  m.jI = v;
});
$p.os = (function(m, v) {
  m.jJ = v;
});
var $d_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$, "trivalibs.graphics.math.cpu.Mat4$given_Mat4Mutable_Mat4$", ({
  ek: 1,
  W: 1,
  aU: 1,
  aV: 1
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
$p.aG = (function(v) {
  return v.io;
});
$p.aH = (function(v) {
  return v.ip;
});
$p.bc = (function(v) {
  return v.iq;
});
$p.bb = (function(v) {
  return v.im;
});
$p.gU = (function(v, value) {
  v.io = value;
});
$p.gV = (function(v, value) {
  v.ip = value;
});
$p.kN = (function(v, value) {
  v.iq = value;
});
$p.kI = (function(v, value) {
  v.im = value;
});
var $d_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$, "trivalibs.graphics.math.cpu.Quat$given_Vec4Mutable_Quat$", ({
  eo: 1,
  K: 1,
  Y: 1,
  Z: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$;
function $m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$)) {
    $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$ = new $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$;
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
$p.aG = (function(v) {
  return v.p;
});
$p.aH = (function(v) {
  return v.n;
});
$p.gU = (function(v, value) {
  v.p = value;
});
$p.gV = (function(v, value) {
  v.n = value;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$, "trivalibs.graphics.math.cpu.Vec2$given_Vec2Mutable_Vec2$", ({
  er: 1,
  X: 1,
  aW: 1,
  aX: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$;
function $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$)) {
    $n_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$ = new $c_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$;
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
  eu: 1,
  aY: 1,
  eb: 1,
  ee: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$;
function $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$)) {
    $n_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$ = new $c_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$.prototype = $p;
$p.aG = (function(v) {
  return v.gw;
});
$p.aH = (function(v) {
  return v.gx;
});
$p.bc = (function(v) {
  return v.gy;
});
$p.bb = (function(v) {
  return v.gv;
});
$p.gU = (function(v, value) {
  v.gw = value;
});
$p.gV = (function(v, value) {
  v.gx = value;
});
$p.kN = (function(v, value) {
  v.gy = value;
});
$p.kI = (function(v, value) {
  v.gv = value;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$, "trivalibs.graphics.math.cpu.Vec4$given_Vec4Mutable_Vec4$", ({
  ey: 1,
  K: 1,
  Y: 1,
  Z: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$;
function $m_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$)) {
    $n_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$ = new $c_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$;
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
$p.qd = (function(m) {
  var offset$proxy1 = (m.off | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy1, true));
});
$p.qf = (function(m) {
  var offset$proxy2 = ((4 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy2, true));
});
$p.qh = (function(m) {
  var offset$proxy3 = ((8 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy3, true));
});
$p.qj = (function(m) {
  var offset$proxy4 = ((12 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy4, true));
});
$p.ql = (function(m) {
  var offset$proxy5 = ((16 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy5, true));
});
$p.qn = (function(m) {
  var offset$proxy6 = ((20 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy6, true));
});
$p.qp = (function(m) {
  var offset$proxy7 = ((24 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy7, true));
});
$p.qr = (function(m) {
  var offset$proxy8 = ((28 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy8, true));
});
$p.qt = (function(m) {
  var offset$proxy9 = ((32 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy9, true));
});
$p.qv = (function(m) {
  var offset$proxy10 = ((36 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy10, true));
});
$p.qx = (function(m) {
  var offset$proxy11 = ((40 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy11, true));
});
$p.qz = (function(m) {
  var offset$proxy12 = ((44 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy12, true));
});
$p.qB = (function(m) {
  var offset$proxy13 = ((48 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy13, true));
});
$p.qD = (function(m) {
  var offset$proxy14 = ((52 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy14, true));
});
$p.qF = (function(m) {
  var offset$proxy15 = ((56 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy15, true));
});
$p.qH = (function(m) {
  var offset$proxy16 = ((60 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy16, true));
});
$p.qe = (function(m, v) {
  var value$proxy1 = Math.fround(v);
  var offset$proxy17 = (m.off | 0);
  m.dv.setFloat32(offset$proxy17, value$proxy1, true);
});
$p.qg = (function(m, v) {
  var value$proxy2 = Math.fround(v);
  var offset$proxy18 = ((4 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy18, value$proxy2, true);
});
$p.qi = (function(m, v) {
  var value$proxy3 = Math.fround(v);
  var offset$proxy19 = ((8 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy19, value$proxy3, true);
});
$p.qk = (function(m, v) {
  var value$proxy4 = Math.fround(v);
  var offset$proxy20 = ((12 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy20, value$proxy4, true);
});
$p.qm = (function(m, v) {
  var value$proxy5 = Math.fround(v);
  var offset$proxy21 = ((16 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy21, value$proxy5, true);
});
$p.qo = (function(m, v) {
  var value$proxy6 = Math.fround(v);
  var offset$proxy22 = ((20 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy22, value$proxy6, true);
});
$p.qq = (function(m, v) {
  var value$proxy7 = Math.fround(v);
  var offset$proxy23 = ((24 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy23, value$proxy7, true);
});
$p.qs = (function(m, v) {
  var value$proxy8 = Math.fround(v);
  var offset$proxy24 = ((28 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy24, value$proxy8, true);
});
$p.qu = (function(m, v) {
  var value$proxy9 = Math.fround(v);
  var offset$proxy25 = ((32 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy25, value$proxy9, true);
});
$p.qw = (function(m, v) {
  var value$proxy10 = Math.fround(v);
  var offset$proxy26 = ((36 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy26, value$proxy10, true);
});
$p.qy = (function(m, v) {
  var value$proxy11 = Math.fround(v);
  var offset$proxy27 = ((40 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy27, value$proxy11, true);
});
$p.qA = (function(m, v) {
  var value$proxy12 = Math.fround(v);
  var offset$proxy28 = ((44 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy28, value$proxy12, true);
});
$p.qC = (function(m, v) {
  var value$proxy13 = Math.fround(v);
  var offset$proxy29 = ((48 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy29, value$proxy13, true);
});
$p.qE = (function(m, v) {
  var value$proxy14 = Math.fround(v);
  var offset$proxy30 = ((52 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy30, value$proxy14, true);
});
$p.qG = (function(m, v) {
  var value$proxy15 = Math.fround(v);
  var offset$proxy31 = ((56 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy31, value$proxy15, true);
});
$p.qI = (function(m, v) {
  var value$proxy16 = Math.fround(v);
  var offset$proxy32 = ((60 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy32, value$proxy16, true);
});
$p.hL = (function(m) {
  return this.qd(m);
});
$p.hM = (function(m) {
  return this.qf(m);
});
$p.hN = (function(m) {
  return this.qh(m);
});
$p.hO = (function(m) {
  return this.qj(m);
});
$p.hP = (function(m) {
  return this.ql(m);
});
$p.hQ = (function(m) {
  return this.qn(m);
});
$p.hR = (function(m) {
  return this.qp(m);
});
$p.hS = (function(m) {
  return this.qr(m);
});
$p.hT = (function(m) {
  return this.qt(m);
});
$p.hU = (function(m) {
  return this.qv(m);
});
$p.hV = (function(m) {
  return this.qx(m);
});
$p.hW = (function(m) {
  return this.qz(m);
});
$p.hX = (function(m) {
  return this.qB(m);
});
$p.hY = (function(m) {
  return this.qD(m);
});
$p.hZ = (function(m) {
  return this.qF(m);
});
$p.i0 = (function(m) {
  return this.qH(m);
});
$p.od = (function(m, v) {
  this.qe(m, v);
});
$p.oe = (function(m, v) {
  this.qg(m, v);
});
$p.of = (function(m, v) {
  this.qi(m, v);
});
$p.og = (function(m, v) {
  this.qk(m, v);
});
$p.oh = (function(m, v) {
  this.qm(m, v);
});
$p.oi = (function(m, v) {
  this.qo(m, v);
});
$p.oj = (function(m, v) {
  this.qq(m, v);
});
$p.ok = (function(m, v) {
  this.qs(m, v);
});
$p.ol = (function(m, v) {
  this.qu(m, v);
});
$p.om = (function(m, v) {
  this.qw(m, v);
});
$p.on = (function(m, v) {
  this.qy(m, v);
});
$p.oo = (function(m, v) {
  this.qA(m, v);
});
$p.op = (function(m, v) {
  this.qC(m, v);
});
$p.oq = (function(m, v) {
  this.qE(m, v);
});
$p.or = (function(m, v) {
  this.qG(m, v);
});
$p.os = (function(m, v) {
  this.qI(m, v);
});
var $d_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$, "trivalibs.graphics.math.cpu.mat4$package$Mat4Buffer$given_Mat4Mutable_StructRef$", ({
  eB: 1,
  W: 1,
  aU: 1,
  aV: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$;
function $m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$)) {
    $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$ = new $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$;
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
$p.kJ = (function(v) {
  var offset$proxy1 = (v.off | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy1, true));
});
$p.kL = (function(v) {
  var offset$proxy2 = ((4 + (v.off | 0)) | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy2, true));
});
$p.kK = (function(v, value) {
  var value$proxy1 = Math.fround(value);
  var offset$proxy3 = (v.off | 0);
  v.dv.setFloat32(offset$proxy3, value$proxy1, true);
});
$p.kM = (function(v, value) {
  var value$proxy2 = Math.fround(value);
  var offset$proxy4 = ((4 + (v.off | 0)) | 0);
  v.dv.setFloat32(offset$proxy4, value$proxy2, true);
});
$p.aG = (function(v) {
  return this.kJ(v);
});
$p.aH = (function(v) {
  return this.kL(v);
});
$p.gU = (function(v, value) {
  this.kK(v, value);
});
$p.gV = (function(v, value) {
  this.kM(v, value);
});
var $d_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$, "trivalibs.graphics.math.cpu.vec2$package$Vec2Buffer$vec2MutableBuffer$", ({
  eE: 1,
  X: 1,
  aW: 1,
  aX: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$;
function $m_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$ = new $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$.prototype = $p;
$p.kJ = (function(v) {
  var offset$proxy1 = (v.off | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy1, true));
});
$p.kL = (function(v) {
  var offset$proxy2 = ((4 + (v.off | 0)) | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy2, true));
});
$p.s5 = (function(v) {
  var offset$proxy3 = ((8 + (v.off | 0)) | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy3, true));
});
$p.rY = (function(v) {
  var offset$proxy4 = ((12 + (v.off | 0)) | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy4, true));
});
$p.kK = (function(v, value) {
  var value$proxy1 = Math.fround(value);
  var offset$proxy5 = (v.off | 0);
  v.dv.setFloat32(offset$proxy5, value$proxy1, true);
});
$p.kM = (function(v, value) {
  var value$proxy2 = Math.fround(value);
  var offset$proxy6 = ((4 + (v.off | 0)) | 0);
  v.dv.setFloat32(offset$proxy6, value$proxy2, true);
});
$p.s6 = (function(v, value) {
  var value$proxy3 = Math.fround(value);
  var offset$proxy7 = ((8 + (v.off | 0)) | 0);
  v.dv.setFloat32(offset$proxy7, value$proxy3, true);
});
$p.rZ = (function(v, value) {
  var value$proxy4 = Math.fround(value);
  var offset$proxy8 = ((12 + (v.off | 0)) | 0);
  v.dv.setFloat32(offset$proxy8, value$proxy4, true);
});
$p.aG = (function(v) {
  return this.kJ(v);
});
$p.aH = (function(v) {
  return this.kL(v);
});
$p.bc = (function(v) {
  return this.s5(v);
});
$p.bb = (function(v) {
  return this.rY(v);
});
$p.gU = (function(v, value) {
  this.kK(v, value);
});
$p.gV = (function(v, value) {
  this.kM(v, value);
});
$p.kN = (function(v, value) {
  this.s6(v, value);
});
$p.kI = (function(v, value) {
  this.rZ(v, value);
});
var $d_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$, "trivalibs.graphics.math.cpu.vec4$package$Vec4Buffer$vec4MutableBuffer$", ({
  eH: 1,
  K: 1,
  Y: 1,
  Z: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$;
function $m_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$ = new $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$;
}
function $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T($thiz, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, uniformDecls, vertexBody, fragmentBody, fragBuiltinParams) {
  var f$proxy1 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildVertexMain__T__T($thiz, vertexBody);
  var g$proxy1 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildFragmentMain__T__T__T($thiz, fragmentBody, fragBuiltinParams);
  var all = [vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, uniformDecls, $thiz.hv, f$proxy1, g$proxy1];
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
  this.aa = null;
  this.a9 = null;
  this.hv = null;
  this.aa = vertexBody;
  this.a9 = fragmentBody;
  this.hv = helperFns;
}
$p = $c_Ltrivalibs_graphics_shader_ShaderDef.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_ShaderDef;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_ShaderDef() {
}
$h_Ltrivalibs_graphics_shader_ShaderDef.prototype = $p;
$p.J = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().W(this, (-1488826029), true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_Ltrivalibs_graphics_shader_ShaderDef) && (((this.aa === x$0.aa) && (this.a9 === x$0.a9)) && (this.hv === x$0.hv))));
});
$p.r = (function() {
  return $m_sr_ScalaRunTime$().gM(this);
});
$p.z = (function() {
  return 3;
});
$p.H = (function() {
  return "ShaderDef";
});
$p.o = (function(n) {
  switch (n) {
    case 0: {
      return this.aa;
      break;
    }
    case 1: {
      return this.a9;
      break;
    }
    case 2: {
      return this.hv;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
    }
  }
});
function $isArrayOf_Ltrivalibs_graphics_shader_ShaderDef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.b0)));
}
var $d_Ltrivalibs_graphics_shader_ShaderDef = new $TypeData().i($c_Ltrivalibs_graphics_shader_ShaderDef, "trivalibs.graphics.shader.ShaderDef", ({
  b0: 1,
  b: 1,
  c: 1,
  a: 1
}));
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ArithmeticException = new $TypeData().i($c_jl_ArithmeticException, "java.lang.ArithmeticException", ({
  b2: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
function $f_jl_Byte__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Byte__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Byte__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Byte = new $TypeData().i(0, "java.lang.Byte", ({
  b5: 1,
  u: 1,
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
  a3: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
function $ct_jl_IndexOutOfBoundsException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_IndexOutOfBoundsException__I__($thiz, index) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, ("Index out of range: " + index), null, true, true);
  return $thiz;
}
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
}
var $d_jl_IndexOutOfBoundsException = new $TypeData().i($c_jl_IndexOutOfBoundsException, "java.lang.IndexOutOfBoundsException", ({
  ba: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
function $ct_jl_NullPointerException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_NullPointerException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
class $c_jl_NullPointerException extends $c_jl_RuntimeException {
}
var $d_jl_NullPointerException = new $TypeData().i($c_jl_NullPointerException, "java.lang.NullPointerException", ({
  bc: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
function $isArrayOf_jl_SecurityException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.be)));
}
function $f_jl_Short__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Short__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Short__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Short = new $TypeData().i(0, "java.lang.Short", ({
  bf: 1,
  u: 1,
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
  bj: 1,
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
  bo: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
function $p_s_MatchError__objString__T($thiz) {
  if ((!$thiz.kS)) {
    if (($thiz.i9 === null)) {
      var $x_1 = "null";
    } else {
      var this$1 = $thiz.i9;
      var cls = $objectGetClass(this$1);
      var ofClass = ((cls === null) ? "of a JS class" : ("of class " + cls.j2.N));
      try {
        var $x_1 = ((($thiz.i9 + " (") + ofClass) + ")");
      } catch (e) {
        var $x_1 = ("an instance " + ofClass);
      }
    }
    $thiz.kR = $x_1;
    $thiz.kS = true;
  }
  return $thiz.kR;
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.i9 = null;
    this.kR = null;
    this.kS = false;
    this.i9 = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  iO() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().i($c_s_MatchError, "scala.MatchError", ({
  by: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.gX = 0;
  this.kU = 0;
  this.kT = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.kT = outer;
  this.gX = 0;
  this.kU = outer.z();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $p;
$p.V = (function() {
  return (this.gX < this.kU);
});
$p.R = (function() {
  var result = this.kT.o(this.gX);
  this.gX = ((1 + this.gX) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().i($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  bA: 1,
  m: 1,
  d: 1,
  e: 1,
  r: 1
}));
/** @constructor */
function $c_T1(_1) {
  this.fY = null;
  this.fY = _1;
}
$p = $c_T1.prototype = new $h_O();
$p.constructor = $c_T1;
/** @constructor */
function $h_T1() {
}
$h_T1.prototype = $p;
$p.z = (function() {
  return 1;
});
$p.o = (function(n) {
  return $f_s_Product1__productElement__I__O(this, n);
});
$p.r = (function() {
  return (("(" + this.fY) + ")");
});
$p.H = (function() {
  return "Tuple1";
});
$p.J = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().W(this, 1228477340, true);
});
$p.u = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T1) && $m_sr_BoxesRunTime$().c(this.fY, x$1.fY)));
});
function $isArrayOf_T1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a7)));
}
var $d_T1 = new $TypeData().i($c_T1, "scala.Tuple1", ({
  a7: 1,
  bB: 1,
  c: 1,
  b: 1,
  a: 1
}));
/** @constructor */
function $c_T10(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10) {
  this.fZ = null;
  this.bX = null;
  this.bY = null;
  this.bZ = null;
  this.c0 = null;
  this.c1 = null;
  this.c2 = null;
  this.c3 = null;
  this.c4 = null;
  this.bW = null;
  this.fZ = _1;
  this.bX = _2;
  this.bY = _3;
  this.bZ = _4;
  this.c0 = _5;
  this.c1 = _6;
  this.c2 = _7;
  this.c3 = _8;
  this.c4 = _9;
  this.bW = _10;
}
$p = $c_T10.prototype = new $h_O();
$p.constructor = $c_T10;
/** @constructor */
function $h_T10() {
}
$h_T10.prototype = $p;
$p.J = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 10;
});
$p.o = (function(n) {
  return $f_s_Product10__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().W(this, 2104595240, true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T10) && ((((((((($m_sr_BoxesRunTime$().c(this.fZ, x$0.fZ) && $m_sr_BoxesRunTime$().c(this.bX, x$0.bX)) && $m_sr_BoxesRunTime$().c(this.bY, x$0.bY)) && $m_sr_BoxesRunTime$().c(this.bZ, x$0.bZ)) && $m_sr_BoxesRunTime$().c(this.c0, x$0.c0)) && $m_sr_BoxesRunTime$().c(this.c1, x$0.c1)) && $m_sr_BoxesRunTime$().c(this.c2, x$0.c2)) && $m_sr_BoxesRunTime$().c(this.c3, x$0.c3)) && $m_sr_BoxesRunTime$().c(this.c4, x$0.c4)) && $m_sr_BoxesRunTime$().c(this.bW, x$0.bW))));
});
$p.H = (function() {
  return "Tuple10";
});
$p.r = (function() {
  return (((((((((((((((((((("(" + this.fZ) + ",") + this.bX) + ",") + this.bY) + ",") + this.bZ) + ",") + this.c0) + ",") + this.c1) + ",") + this.c2) + ",") + this.c3) + ",") + this.c4) + ",") + this.bW) + ")");
});
function $isArrayOf_T10(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a8)));
}
var $d_T10 = new $TypeData().i($c_T10, "scala.Tuple10", ({
  a8: 1,
  b: 1,
  c: 1,
  bC: 1,
  a: 1
}));
/** @constructor */
function $c_T11(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11) {
  this.g0 = null;
  this.c7 = null;
  this.c8 = null;
  this.c9 = null;
  this.ca = null;
  this.cb = null;
  this.cc = null;
  this.cd = null;
  this.ce = null;
  this.c5 = null;
  this.c6 = null;
  this.g0 = _1;
  this.c7 = _2;
  this.c8 = _3;
  this.c9 = _4;
  this.ca = _5;
  this.cb = _6;
  this.cc = _7;
  this.cd = _8;
  this.ce = _9;
  this.c5 = _10;
  this.c6 = _11;
}
$p = $c_T11.prototype = new $h_O();
$p.constructor = $c_T11;
/** @constructor */
function $h_T11() {
}
$h_T11.prototype = $p;
$p.J = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 11;
});
$p.o = (function(n) {
  return $f_s_Product11__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().W(this, 838406606, true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T11) && (((((((((($m_sr_BoxesRunTime$().c(this.g0, x$0.g0) && $m_sr_BoxesRunTime$().c(this.c7, x$0.c7)) && $m_sr_BoxesRunTime$().c(this.c8, x$0.c8)) && $m_sr_BoxesRunTime$().c(this.c9, x$0.c9)) && $m_sr_BoxesRunTime$().c(this.ca, x$0.ca)) && $m_sr_BoxesRunTime$().c(this.cb, x$0.cb)) && $m_sr_BoxesRunTime$().c(this.cc, x$0.cc)) && $m_sr_BoxesRunTime$().c(this.cd, x$0.cd)) && $m_sr_BoxesRunTime$().c(this.ce, x$0.ce)) && $m_sr_BoxesRunTime$().c(this.c5, x$0.c5)) && $m_sr_BoxesRunTime$().c(this.c6, x$0.c6))));
});
$p.H = (function() {
  return "Tuple11";
});
$p.r = (function() {
  return (((((((((((((((((((((("(" + this.g0) + ",") + this.c7) + ",") + this.c8) + ",") + this.c9) + ",") + this.ca) + ",") + this.cb) + ",") + this.cc) + ",") + this.cd) + ",") + this.ce) + ",") + this.c5) + ",") + this.c6) + ")");
});
function $isArrayOf_T11(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a9)));
}
var $d_T11 = new $TypeData().i($c_T11, "scala.Tuple11", ({
  a9: 1,
  b: 1,
  c: 1,
  bD: 1,
  a: 1
}));
/** @constructor */
function $c_T12(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12) {
  this.g1 = null;
  this.ci = null;
  this.cj = null;
  this.ck = null;
  this.cl = null;
  this.cm = null;
  this.cn = null;
  this.co = null;
  this.cp = null;
  this.cf = null;
  this.cg = null;
  this.ch = null;
  this.g1 = _1;
  this.ci = _2;
  this.cj = _3;
  this.ck = _4;
  this.cl = _5;
  this.cm = _6;
  this.cn = _7;
  this.co = _8;
  this.cp = _9;
  this.cf = _10;
  this.cg = _11;
  this.ch = _12;
}
$p = $c_T12.prototype = new $h_O();
$p.constructor = $c_T12;
/** @constructor */
function $h_T12() {
}
$h_T12.prototype = $p;
$p.J = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 12;
});
$p.o = (function(n) {
  return $f_s_Product12__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().W(this, (-1964145863), true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T12) && ((((((((((($m_sr_BoxesRunTime$().c(this.g1, x$0.g1) && $m_sr_BoxesRunTime$().c(this.ci, x$0.ci)) && $m_sr_BoxesRunTime$().c(this.cj, x$0.cj)) && $m_sr_BoxesRunTime$().c(this.ck, x$0.ck)) && $m_sr_BoxesRunTime$().c(this.cl, x$0.cl)) && $m_sr_BoxesRunTime$().c(this.cm, x$0.cm)) && $m_sr_BoxesRunTime$().c(this.cn, x$0.cn)) && $m_sr_BoxesRunTime$().c(this.co, x$0.co)) && $m_sr_BoxesRunTime$().c(this.cp, x$0.cp)) && $m_sr_BoxesRunTime$().c(this.cf, x$0.cf)) && $m_sr_BoxesRunTime$().c(this.cg, x$0.cg)) && $m_sr_BoxesRunTime$().c(this.ch, x$0.ch))));
});
$p.H = (function() {
  return "Tuple12";
});
$p.r = (function() {
  return (((((((((((((((((((((((("(" + this.g1) + ",") + this.ci) + ",") + this.cj) + ",") + this.ck) + ",") + this.cl) + ",") + this.cm) + ",") + this.cn) + ",") + this.co) + ",") + this.cp) + ",") + this.cf) + ",") + this.cg) + ",") + this.ch) + ")");
});
function $isArrayOf_T12(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aa)));
}
var $d_T12 = new $TypeData().i($c_T12, "scala.Tuple12", ({
  aa: 1,
  b: 1,
  c: 1,
  bE: 1,
  a: 1
}));
/** @constructor */
function $c_T13(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13) {
  this.g2 = null;
  this.cu = null;
  this.cv = null;
  this.cw = null;
  this.cx = null;
  this.cy = null;
  this.cz = null;
  this.cA = null;
  this.cB = null;
  this.cq = null;
  this.cr = null;
  this.cs = null;
  this.ct = null;
  this.g2 = _1;
  this.cu = _2;
  this.cv = _3;
  this.cw = _4;
  this.cx = _5;
  this.cy = _6;
  this.cz = _7;
  this.cA = _8;
  this.cB = _9;
  this.cq = _10;
  this.cr = _11;
  this.cs = _12;
  this.ct = _13;
}
$p = $c_T13.prototype = new $h_O();
$p.constructor = $c_T13;
/** @constructor */
function $h_T13() {
}
$h_T13.prototype = $p;
$p.J = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 13;
});
$p.o = (function(n) {
  return $f_s_Product13__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().W(this, 1224168367, true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T13) && (((((((((((($m_sr_BoxesRunTime$().c(this.g2, x$0.g2) && $m_sr_BoxesRunTime$().c(this.cu, x$0.cu)) && $m_sr_BoxesRunTime$().c(this.cv, x$0.cv)) && $m_sr_BoxesRunTime$().c(this.cw, x$0.cw)) && $m_sr_BoxesRunTime$().c(this.cx, x$0.cx)) && $m_sr_BoxesRunTime$().c(this.cy, x$0.cy)) && $m_sr_BoxesRunTime$().c(this.cz, x$0.cz)) && $m_sr_BoxesRunTime$().c(this.cA, x$0.cA)) && $m_sr_BoxesRunTime$().c(this.cB, x$0.cB)) && $m_sr_BoxesRunTime$().c(this.cq, x$0.cq)) && $m_sr_BoxesRunTime$().c(this.cr, x$0.cr)) && $m_sr_BoxesRunTime$().c(this.cs, x$0.cs)) && $m_sr_BoxesRunTime$().c(this.ct, x$0.ct))));
});
$p.H = (function() {
  return "Tuple13";
});
$p.r = (function() {
  return (((((((((((((((((((((((((("(" + this.g2) + ",") + this.cu) + ",") + this.cv) + ",") + this.cw) + ",") + this.cx) + ",") + this.cy) + ",") + this.cz) + ",") + this.cA) + ",") + this.cB) + ",") + this.cq) + ",") + this.cr) + ",") + this.cs) + ",") + this.ct) + ")");
});
function $isArrayOf_T13(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ab)));
}
var $d_T13 = new $TypeData().i($c_T13, "scala.Tuple13", ({
  ab: 1,
  b: 1,
  c: 1,
  bF: 1,
  a: 1
}));
/** @constructor */
function $c_T14(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14) {
  this.g3 = null;
  this.cH = null;
  this.cI = null;
  this.cJ = null;
  this.cK = null;
  this.cL = null;
  this.cM = null;
  this.cN = null;
  this.cO = null;
  this.cC = null;
  this.cD = null;
  this.cE = null;
  this.cF = null;
  this.cG = null;
  this.g3 = _1;
  this.cH = _2;
  this.cI = _3;
  this.cJ = _4;
  this.cK = _5;
  this.cL = _6;
  this.cM = _7;
  this.cN = _8;
  this.cO = _9;
  this.cC = _10;
  this.cD = _11;
  this.cE = _12;
  this.cF = _13;
  this.cG = _14;
}
$p = $c_T14.prototype = new $h_O();
$p.constructor = $c_T14;
/** @constructor */
function $h_T14() {
}
$h_T14.prototype = $p;
$p.J = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 14;
});
$p.o = (function(n) {
  return $f_s_Product14__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().W(this, 147759069, true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T14) && ((((((((((((($m_sr_BoxesRunTime$().c(this.g3, x$0.g3) && $m_sr_BoxesRunTime$().c(this.cH, x$0.cH)) && $m_sr_BoxesRunTime$().c(this.cI, x$0.cI)) && $m_sr_BoxesRunTime$().c(this.cJ, x$0.cJ)) && $m_sr_BoxesRunTime$().c(this.cK, x$0.cK)) && $m_sr_BoxesRunTime$().c(this.cL, x$0.cL)) && $m_sr_BoxesRunTime$().c(this.cM, x$0.cM)) && $m_sr_BoxesRunTime$().c(this.cN, x$0.cN)) && $m_sr_BoxesRunTime$().c(this.cO, x$0.cO)) && $m_sr_BoxesRunTime$().c(this.cC, x$0.cC)) && $m_sr_BoxesRunTime$().c(this.cD, x$0.cD)) && $m_sr_BoxesRunTime$().c(this.cE, x$0.cE)) && $m_sr_BoxesRunTime$().c(this.cF, x$0.cF)) && $m_sr_BoxesRunTime$().c(this.cG, x$0.cG))));
});
$p.H = (function() {
  return "Tuple14";
});
$p.r = (function() {
  return (((((((((((((((((((((((((((("(" + this.g3) + ",") + this.cH) + ",") + this.cI) + ",") + this.cJ) + ",") + this.cK) + ",") + this.cL) + ",") + this.cM) + ",") + this.cN) + ",") + this.cO) + ",") + this.cC) + ",") + this.cD) + ",") + this.cE) + ",") + this.cF) + ",") + this.cG) + ")");
});
function $isArrayOf_T14(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ac)));
}
var $d_T14 = new $TypeData().i($c_T14, "scala.Tuple14", ({
  ac: 1,
  b: 1,
  c: 1,
  bG: 1,
  a: 1
}));
/** @constructor */
function $c_T15(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15) {
  this.g4 = null;
  this.cV = null;
  this.cW = null;
  this.cX = null;
  this.cY = null;
  this.cZ = null;
  this.d0 = null;
  this.d1 = null;
  this.d2 = null;
  this.cP = null;
  this.cQ = null;
  this.cR = null;
  this.cS = null;
  this.cT = null;
  this.cU = null;
  this.g4 = _1;
  this.cV = _2;
  this.cW = _3;
  this.cX = _4;
  this.cY = _5;
  this.cZ = _6;
  this.d0 = _7;
  this.d1 = _8;
  this.d2 = _9;
  this.cP = _10;
  this.cQ = _11;
  this.cR = _12;
  this.cS = _13;
  this.cT = _14;
  this.cU = _15;
}
$p = $c_T15.prototype = new $h_O();
$p.constructor = $c_T15;
/** @constructor */
function $h_T15() {
}
$h_T15.prototype = $p;
$p.J = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 15;
});
$p.o = (function(n) {
  return $f_s_Product15__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().W(this, 1834180931, true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T15) && (((((((((((((($m_sr_BoxesRunTime$().c(this.g4, x$0.g4) && $m_sr_BoxesRunTime$().c(this.cV, x$0.cV)) && $m_sr_BoxesRunTime$().c(this.cW, x$0.cW)) && $m_sr_BoxesRunTime$().c(this.cX, x$0.cX)) && $m_sr_BoxesRunTime$().c(this.cY, x$0.cY)) && $m_sr_BoxesRunTime$().c(this.cZ, x$0.cZ)) && $m_sr_BoxesRunTime$().c(this.d0, x$0.d0)) && $m_sr_BoxesRunTime$().c(this.d1, x$0.d1)) && $m_sr_BoxesRunTime$().c(this.d2, x$0.d2)) && $m_sr_BoxesRunTime$().c(this.cP, x$0.cP)) && $m_sr_BoxesRunTime$().c(this.cQ, x$0.cQ)) && $m_sr_BoxesRunTime$().c(this.cR, x$0.cR)) && $m_sr_BoxesRunTime$().c(this.cS, x$0.cS)) && $m_sr_BoxesRunTime$().c(this.cT, x$0.cT)) && $m_sr_BoxesRunTime$().c(this.cU, x$0.cU))));
});
$p.H = (function() {
  return "Tuple15";
});
$p.r = (function() {
  return (((((((((((((((((((((((((((((("(" + this.g4) + ",") + this.cV) + ",") + this.cW) + ",") + this.cX) + ",") + this.cY) + ",") + this.cZ) + ",") + this.d0) + ",") + this.d1) + ",") + this.d2) + ",") + this.cP) + ",") + this.cQ) + ",") + this.cR) + ",") + this.cS) + ",") + this.cT) + ",") + this.cU) + ")");
});
function $isArrayOf_T15(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ad)));
}
var $d_T15 = new $TypeData().i($c_T15, "scala.Tuple15", ({
  ad: 1,
  b: 1,
  c: 1,
  bH: 1,
  a: 1
}));
/** @constructor */
function $c_T16(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16) {
  this.g5 = null;
  this.da = null;
  this.db = null;
  this.dc = null;
  this.dd = null;
  this.de = null;
  this.df = null;
  this.dg = null;
  this.dh = null;
  this.d3 = null;
  this.d4 = null;
  this.d5 = null;
  this.d6 = null;
  this.d7 = null;
  this.d8 = null;
  this.d9 = null;
  this.g5 = _1;
  this.da = _2;
  this.db = _3;
  this.dc = _4;
  this.dd = _5;
  this.de = _6;
  this.df = _7;
  this.dg = _8;
  this.dh = _9;
  this.d3 = _10;
  this.d4 = _11;
  this.d5 = _12;
  this.d6 = _13;
  this.d7 = _14;
  this.d8 = _15;
  this.d9 = _16;
}
$p = $c_T16.prototype = new $h_O();
$p.constructor = $c_T16;
/** @constructor */
function $h_T16() {
}
$h_T16.prototype = $p;
$p.J = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 16;
});
$p.o = (function(n) {
  return $f_s_Product16__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().W(this, 499793902, true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T16) && ((((((((((((((($m_sr_BoxesRunTime$().c(this.g5, x$0.g5) && $m_sr_BoxesRunTime$().c(this.da, x$0.da)) && $m_sr_BoxesRunTime$().c(this.db, x$0.db)) && $m_sr_BoxesRunTime$().c(this.dc, x$0.dc)) && $m_sr_BoxesRunTime$().c(this.dd, x$0.dd)) && $m_sr_BoxesRunTime$().c(this.de, x$0.de)) && $m_sr_BoxesRunTime$().c(this.df, x$0.df)) && $m_sr_BoxesRunTime$().c(this.dg, x$0.dg)) && $m_sr_BoxesRunTime$().c(this.dh, x$0.dh)) && $m_sr_BoxesRunTime$().c(this.d3, x$0.d3)) && $m_sr_BoxesRunTime$().c(this.d4, x$0.d4)) && $m_sr_BoxesRunTime$().c(this.d5, x$0.d5)) && $m_sr_BoxesRunTime$().c(this.d6, x$0.d6)) && $m_sr_BoxesRunTime$().c(this.d7, x$0.d7)) && $m_sr_BoxesRunTime$().c(this.d8, x$0.d8)) && $m_sr_BoxesRunTime$().c(this.d9, x$0.d9))));
});
$p.H = (function() {
  return "Tuple16";
});
$p.r = (function() {
  return (((((((((((((((((((((((((((((((("(" + this.g5) + ",") + this.da) + ",") + this.db) + ",") + this.dc) + ",") + this.dd) + ",") + this.de) + ",") + this.df) + ",") + this.dg) + ",") + this.dh) + ",") + this.d3) + ",") + this.d4) + ",") + this.d5) + ",") + this.d6) + ",") + this.d7) + ",") + this.d8) + ",") + this.d9) + ")");
});
function $isArrayOf_T16(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ae)));
}
var $d_T16 = new $TypeData().i($c_T16, "scala.Tuple16", ({
  ae: 1,
  b: 1,
  c: 1,
  bI: 1,
  a: 1
}));
/** @constructor */
function $c_T17(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17) {
  this.g6 = null;
  this.dr = null;
  this.ds = null;
  this.dt = null;
  this.du = null;
  this.dv = null;
  this.dw = null;
  this.dx = null;
  this.dy = null;
  this.di = null;
  this.dj = null;
  this.dk = null;
  this.dl = null;
  this.dm = null;
  this.dn = null;
  this.dp = null;
  this.dq = null;
  this.g6 = _1;
  this.dr = _2;
  this.ds = _3;
  this.dt = _4;
  this.du = _5;
  this.dv = _6;
  this.dw = _7;
  this.dx = _8;
  this.dy = _9;
  this.di = _10;
  this.dj = _11;
  this.dk = _12;
  this.dl = _13;
  this.dm = _14;
  this.dn = _15;
  this.dp = _16;
  this.dq = _17;
}
$p = $c_T17.prototype = new $h_O();
$p.constructor = $c_T17;
/** @constructor */
function $h_T17() {
}
$h_T17.prototype = $p;
$p.J = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 17;
});
$p.o = (function(n) {
  return $f_s_Product17__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().W(this, (-934366247), true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T17) && (((((((((((((((($m_sr_BoxesRunTime$().c(this.g6, x$0.g6) && $m_sr_BoxesRunTime$().c(this.dr, x$0.dr)) && $m_sr_BoxesRunTime$().c(this.ds, x$0.ds)) && $m_sr_BoxesRunTime$().c(this.dt, x$0.dt)) && $m_sr_BoxesRunTime$().c(this.du, x$0.du)) && $m_sr_BoxesRunTime$().c(this.dv, x$0.dv)) && $m_sr_BoxesRunTime$().c(this.dw, x$0.dw)) && $m_sr_BoxesRunTime$().c(this.dx, x$0.dx)) && $m_sr_BoxesRunTime$().c(this.dy, x$0.dy)) && $m_sr_BoxesRunTime$().c(this.di, x$0.di)) && $m_sr_BoxesRunTime$().c(this.dj, x$0.dj)) && $m_sr_BoxesRunTime$().c(this.dk, x$0.dk)) && $m_sr_BoxesRunTime$().c(this.dl, x$0.dl)) && $m_sr_BoxesRunTime$().c(this.dm, x$0.dm)) && $m_sr_BoxesRunTime$().c(this.dn, x$0.dn)) && $m_sr_BoxesRunTime$().c(this.dp, x$0.dp)) && $m_sr_BoxesRunTime$().c(this.dq, x$0.dq))));
});
$p.H = (function() {
  return "Tuple17";
});
$p.r = (function() {
  return (((((((((((((((((((((((((((((((((("(" + this.g6) + ",") + this.dr) + ",") + this.ds) + ",") + this.dt) + ",") + this.du) + ",") + this.dv) + ",") + this.dw) + ",") + this.dx) + ",") + this.dy) + ",") + this.di) + ",") + this.dj) + ",") + this.dk) + ",") + this.dl) + ",") + this.dm) + ",") + this.dn) + ",") + this.dp) + ",") + this.dq) + ")");
});
function $isArrayOf_T17(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.af)));
}
var $d_T17 = new $TypeData().i($c_T17, "scala.Tuple17", ({
  af: 1,
  b: 1,
  c: 1,
  bJ: 1,
  a: 1
}));
/** @constructor */
function $c_T18(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18) {
  this.g7 = null;
  this.dI = null;
  this.dJ = null;
  this.dK = null;
  this.dL = null;
  this.dM = null;
  this.dN = null;
  this.dO = null;
  this.dP = null;
  this.dz = null;
  this.dA = null;
  this.dB = null;
  this.dC = null;
  this.dD = null;
  this.dE = null;
  this.dF = null;
  this.dG = null;
  this.dH = null;
  this.g7 = _1;
  this.dI = _2;
  this.dJ = _3;
  this.dK = _4;
  this.dL = _5;
  this.dM = _6;
  this.dN = _7;
  this.dO = _8;
  this.dP = _9;
  this.dz = _10;
  this.dA = _11;
  this.dB = _12;
  this.dC = _13;
  this.dD = _14;
  this.dE = _15;
  this.dF = _16;
  this.dG = _17;
  this.dH = _18;
}
$p = $c_T18.prototype = new $h_O();
$p.constructor = $c_T18;
/** @constructor */
function $h_T18() {
}
$h_T18.prototype = $p;
$p.J = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 18;
});
$p.o = (function(n) {
  return $f_s_Product18__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().W(this, (-937041276), true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T18) && ((((((((((((((((($m_sr_BoxesRunTime$().c(this.g7, x$0.g7) && $m_sr_BoxesRunTime$().c(this.dI, x$0.dI)) && $m_sr_BoxesRunTime$().c(this.dJ, x$0.dJ)) && $m_sr_BoxesRunTime$().c(this.dK, x$0.dK)) && $m_sr_BoxesRunTime$().c(this.dL, x$0.dL)) && $m_sr_BoxesRunTime$().c(this.dM, x$0.dM)) && $m_sr_BoxesRunTime$().c(this.dN, x$0.dN)) && $m_sr_BoxesRunTime$().c(this.dO, x$0.dO)) && $m_sr_BoxesRunTime$().c(this.dP, x$0.dP)) && $m_sr_BoxesRunTime$().c(this.dz, x$0.dz)) && $m_sr_BoxesRunTime$().c(this.dA, x$0.dA)) && $m_sr_BoxesRunTime$().c(this.dB, x$0.dB)) && $m_sr_BoxesRunTime$().c(this.dC, x$0.dC)) && $m_sr_BoxesRunTime$().c(this.dD, x$0.dD)) && $m_sr_BoxesRunTime$().c(this.dE, x$0.dE)) && $m_sr_BoxesRunTime$().c(this.dF, x$0.dF)) && $m_sr_BoxesRunTime$().c(this.dG, x$0.dG)) && $m_sr_BoxesRunTime$().c(this.dH, x$0.dH))));
});
$p.H = (function() {
  return "Tuple18";
});
$p.r = (function() {
  return (((((((((((((((((((((((((((((((((((("(" + this.g7) + ",") + this.dI) + ",") + this.dJ) + ",") + this.dK) + ",") + this.dL) + ",") + this.dM) + ",") + this.dN) + ",") + this.dO) + ",") + this.dP) + ",") + this.dz) + ",") + this.dA) + ",") + this.dB) + ",") + this.dC) + ",") + this.dD) + ",") + this.dE) + ",") + this.dF) + ",") + this.dG) + ",") + this.dH) + ")");
});
function $isArrayOf_T18(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ag)));
}
var $d_T18 = new $TypeData().i($c_T18, "scala.Tuple18", ({
  ag: 1,
  b: 1,
  c: 1,
  bK: 1,
  a: 1
}));
/** @constructor */
function $c_T19(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19) {
  this.g8 = null;
  this.e0 = null;
  this.e1 = null;
  this.e2 = null;
  this.e3 = null;
  this.e4 = null;
  this.e5 = null;
  this.e6 = null;
  this.e7 = null;
  this.dQ = null;
  this.dR = null;
  this.dS = null;
  this.dT = null;
  this.dU = null;
  this.dV = null;
  this.dW = null;
  this.dX = null;
  this.dY = null;
  this.dZ = null;
  this.g8 = _1;
  this.e0 = _2;
  this.e1 = _3;
  this.e2 = _4;
  this.e3 = _5;
  this.e4 = _6;
  this.e5 = _7;
  this.e6 = _8;
  this.e7 = _9;
  this.dQ = _10;
  this.dR = _11;
  this.dS = _12;
  this.dT = _13;
  this.dU = _14;
  this.dV = _15;
  this.dW = _16;
  this.dX = _17;
  this.dY = _18;
  this.dZ = _19;
}
$p = $c_T19.prototype = new $h_O();
$p.constructor = $c_T19;
/** @constructor */
function $h_T19() {
}
$h_T19.prototype = $p;
$p.J = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 19;
});
$p.o = (function(n) {
  return $f_s_Product19__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().W(this, (-1955940499), true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T19) && (((((((((((((((((($m_sr_BoxesRunTime$().c(this.g8, x$0.g8) && $m_sr_BoxesRunTime$().c(this.e0, x$0.e0)) && $m_sr_BoxesRunTime$().c(this.e1, x$0.e1)) && $m_sr_BoxesRunTime$().c(this.e2, x$0.e2)) && $m_sr_BoxesRunTime$().c(this.e3, x$0.e3)) && $m_sr_BoxesRunTime$().c(this.e4, x$0.e4)) && $m_sr_BoxesRunTime$().c(this.e5, x$0.e5)) && $m_sr_BoxesRunTime$().c(this.e6, x$0.e6)) && $m_sr_BoxesRunTime$().c(this.e7, x$0.e7)) && $m_sr_BoxesRunTime$().c(this.dQ, x$0.dQ)) && $m_sr_BoxesRunTime$().c(this.dR, x$0.dR)) && $m_sr_BoxesRunTime$().c(this.dS, x$0.dS)) && $m_sr_BoxesRunTime$().c(this.dT, x$0.dT)) && $m_sr_BoxesRunTime$().c(this.dU, x$0.dU)) && $m_sr_BoxesRunTime$().c(this.dV, x$0.dV)) && $m_sr_BoxesRunTime$().c(this.dW, x$0.dW)) && $m_sr_BoxesRunTime$().c(this.dX, x$0.dX)) && $m_sr_BoxesRunTime$().c(this.dY, x$0.dY)) && $m_sr_BoxesRunTime$().c(this.dZ, x$0.dZ))));
});
$p.H = (function() {
  return "Tuple19";
});
$p.r = (function() {
  return (((((((((((((((((((((((((((((((((((((("(" + this.g8) + ",") + this.e0) + ",") + this.e1) + ",") + this.e2) + ",") + this.e3) + ",") + this.e4) + ",") + this.e5) + ",") + this.e6) + ",") + this.e7) + ",") + this.dQ) + ",") + this.dR) + ",") + this.dS) + ",") + this.dT) + ",") + this.dU) + ",") + this.dV) + ",") + this.dW) + ",") + this.dX) + ",") + this.dY) + ",") + this.dZ) + ")");
});
function $isArrayOf_T19(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ah)));
}
var $d_T19 = new $TypeData().i($c_T19, "scala.Tuple19", ({
  ah: 1,
  b: 1,
  c: 1,
  bL: 1,
  a: 1
}));
/** @constructor */
function $c_T2(_1, _2) {
  this.T = null;
  this.af = null;
  this.T = _1;
  this.af = _2;
}
$p = $c_T2.prototype = new $h_O();
$p.constructor = $c_T2;
/** @constructor */
function $h_T2() {
}
$h_T2.prototype = $p;
$p.z = (function() {
  return 2;
});
$p.o = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n);
});
$p.r = (function() {
  return (((("(" + this.T) + ",") + this.af) + ")");
});
$p.H = (function() {
  return "Tuple2";
});
$p.J = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().W(this, (-116390334), true);
});
$p.u = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T2) && ($m_sr_BoxesRunTime$().c(this.T, x$1.T) && $m_sr_BoxesRunTime$().c(this.af, x$1.af))));
});
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ai)));
}
var $d_T2 = new $TypeData().i($c_T2, "scala.Tuple2", ({
  ai: 1,
  bM: 1,
  c: 1,
  b: 1,
  a: 1
}));
/** @constructor */
function $c_T20(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20) {
  this.g9 = null;
  this.ei = null;
  this.ek = null;
  this.el = null;
  this.em = null;
  this.en = null;
  this.eo = null;
  this.ep = null;
  this.eq = null;
  this.e8 = null;
  this.e9 = null;
  this.ea = null;
  this.eb = null;
  this.ec = null;
  this.ed = null;
  this.ee = null;
  this.ef = null;
  this.eg = null;
  this.eh = null;
  this.ej = null;
  this.g9 = _1;
  this.ei = _2;
  this.ek = _3;
  this.el = _4;
  this.em = _5;
  this.en = _6;
  this.eo = _7;
  this.ep = _8;
  this.eq = _9;
  this.e8 = _10;
  this.e9 = _11;
  this.ea = _12;
  this.eb = _13;
  this.ec = _14;
  this.ed = _15;
  this.ee = _16;
  this.ef = _17;
  this.eg = _18;
  this.eh = _19;
  this.ej = _20;
}
$p = $c_T20.prototype = new $h_O();
$p.constructor = $c_T20;
/** @constructor */
function $h_T20() {
}
$h_T20.prototype = $p;
$p.J = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 20;
});
$p.o = (function(n) {
  return $f_s_Product20__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().W(this, 1328807075, true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T20) && ((((((((((((((((((($m_sr_BoxesRunTime$().c(this.g9, x$0.g9) && $m_sr_BoxesRunTime$().c(this.ei, x$0.ei)) && $m_sr_BoxesRunTime$().c(this.ek, x$0.ek)) && $m_sr_BoxesRunTime$().c(this.el, x$0.el)) && $m_sr_BoxesRunTime$().c(this.em, x$0.em)) && $m_sr_BoxesRunTime$().c(this.en, x$0.en)) && $m_sr_BoxesRunTime$().c(this.eo, x$0.eo)) && $m_sr_BoxesRunTime$().c(this.ep, x$0.ep)) && $m_sr_BoxesRunTime$().c(this.eq, x$0.eq)) && $m_sr_BoxesRunTime$().c(this.e8, x$0.e8)) && $m_sr_BoxesRunTime$().c(this.e9, x$0.e9)) && $m_sr_BoxesRunTime$().c(this.ea, x$0.ea)) && $m_sr_BoxesRunTime$().c(this.eb, x$0.eb)) && $m_sr_BoxesRunTime$().c(this.ec, x$0.ec)) && $m_sr_BoxesRunTime$().c(this.ed, x$0.ed)) && $m_sr_BoxesRunTime$().c(this.ee, x$0.ee)) && $m_sr_BoxesRunTime$().c(this.ef, x$0.ef)) && $m_sr_BoxesRunTime$().c(this.eg, x$0.eg)) && $m_sr_BoxesRunTime$().c(this.eh, x$0.eh)) && $m_sr_BoxesRunTime$().c(this.ej, x$0.ej))));
});
$p.H = (function() {
  return "Tuple20";
});
$p.r = (function() {
  return (((((((((((((((((((((((((((((((((((((((("(" + this.g9) + ",") + this.ei) + ",") + this.ek) + ",") + this.el) + ",") + this.em) + ",") + this.en) + ",") + this.eo) + ",") + this.ep) + ",") + this.eq) + ",") + this.e8) + ",") + this.e9) + ",") + this.ea) + ",") + this.eb) + ",") + this.ec) + ",") + this.ed) + ",") + this.ee) + ",") + this.ef) + ",") + this.eg) + ",") + this.eh) + ",") + this.ej) + ")");
});
function $isArrayOf_T20(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aj)));
}
var $d_T20 = new $TypeData().i($c_T20, "scala.Tuple20", ({
  aj: 1,
  b: 1,
  c: 1,
  bN: 1,
  a: 1
}));
/** @constructor */
function $c_T21(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21) {
  this.ga = null;
  this.eB = null;
  this.eE = null;
  this.eF = null;
  this.eG = null;
  this.eH = null;
  this.eI = null;
  this.eJ = null;
  this.eK = null;
  this.er = null;
  this.es = null;
  this.et = null;
  this.eu = null;
  this.ev = null;
  this.ew = null;
  this.ex = null;
  this.ey = null;
  this.ez = null;
  this.eA = null;
  this.eC = null;
  this.eD = null;
  this.ga = _1;
  this.eB = _2;
  this.eE = _3;
  this.eF = _4;
  this.eG = _5;
  this.eH = _6;
  this.eI = _7;
  this.eJ = _8;
  this.eK = _9;
  this.er = _10;
  this.es = _11;
  this.et = _12;
  this.eu = _13;
  this.ev = _14;
  this.ew = _15;
  this.ex = _16;
  this.ey = _17;
  this.ez = _18;
  this.eA = _19;
  this.eC = _20;
  this.eD = _21;
}
$p = $c_T21.prototype = new $h_O();
$p.constructor = $c_T21;
/** @constructor */
function $h_T21() {
}
$h_T21.prototype = $p;
$p.J = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 21;
});
$p.o = (function(n) {
  return $f_s_Product21__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().W(this, (-21288119), true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T21) && (((((((((((((((((((($m_sr_BoxesRunTime$().c(this.ga, x$0.ga) && $m_sr_BoxesRunTime$().c(this.eB, x$0.eB)) && $m_sr_BoxesRunTime$().c(this.eE, x$0.eE)) && $m_sr_BoxesRunTime$().c(this.eF, x$0.eF)) && $m_sr_BoxesRunTime$().c(this.eG, x$0.eG)) && $m_sr_BoxesRunTime$().c(this.eH, x$0.eH)) && $m_sr_BoxesRunTime$().c(this.eI, x$0.eI)) && $m_sr_BoxesRunTime$().c(this.eJ, x$0.eJ)) && $m_sr_BoxesRunTime$().c(this.eK, x$0.eK)) && $m_sr_BoxesRunTime$().c(this.er, x$0.er)) && $m_sr_BoxesRunTime$().c(this.es, x$0.es)) && $m_sr_BoxesRunTime$().c(this.et, x$0.et)) && $m_sr_BoxesRunTime$().c(this.eu, x$0.eu)) && $m_sr_BoxesRunTime$().c(this.ev, x$0.ev)) && $m_sr_BoxesRunTime$().c(this.ew, x$0.ew)) && $m_sr_BoxesRunTime$().c(this.ex, x$0.ex)) && $m_sr_BoxesRunTime$().c(this.ey, x$0.ey)) && $m_sr_BoxesRunTime$().c(this.ez, x$0.ez)) && $m_sr_BoxesRunTime$().c(this.eA, x$0.eA)) && $m_sr_BoxesRunTime$().c(this.eC, x$0.eC)) && $m_sr_BoxesRunTime$().c(this.eD, x$0.eD))));
});
$p.H = (function() {
  return "Tuple21";
});
$p.r = (function() {
  return (((((((((((((((((((((((((((((((((((((((((("(" + this.ga) + ",") + this.eB) + ",") + this.eE) + ",") + this.eF) + ",") + this.eG) + ",") + this.eH) + ",") + this.eI) + ",") + this.eJ) + ",") + this.eK) + ",") + this.er) + ",") + this.es) + ",") + this.et) + ",") + this.eu) + ",") + this.ev) + ",") + this.ew) + ",") + this.ex) + ",") + this.ey) + ",") + this.ez) + ",") + this.eA) + ",") + this.eC) + ",") + this.eD) + ")");
});
function $isArrayOf_T21(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ak)));
}
var $d_T21 = new $TypeData().i($c_T21, "scala.Tuple21", ({
  ak: 1,
  b: 1,
  c: 1,
  bO: 1,
  a: 1
}));
/** @constructor */
function $c_T22(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22) {
  this.gb = null;
  this.eV = null;
  this.eZ = null;
  this.f0 = null;
  this.f1 = null;
  this.f2 = null;
  this.f3 = null;
  this.f4 = null;
  this.f5 = null;
  this.eL = null;
  this.eM = null;
  this.eN = null;
  this.eO = null;
  this.eP = null;
  this.eQ = null;
  this.eR = null;
  this.eS = null;
  this.eT = null;
  this.eU = null;
  this.eW = null;
  this.eX = null;
  this.eY = null;
  this.gb = _1;
  this.eV = _2;
  this.eZ = _3;
  this.f0 = _4;
  this.f1 = _5;
  this.f2 = _6;
  this.f3 = _7;
  this.f4 = _8;
  this.f5 = _9;
  this.eL = _10;
  this.eM = _11;
  this.eN = _12;
  this.eO = _13;
  this.eP = _14;
  this.eQ = _15;
  this.eR = _16;
  this.eS = _17;
  this.eT = _18;
  this.eU = _19;
  this.eW = _20;
  this.eX = _21;
  this.eY = _22;
}
$p = $c_T22.prototype = new $h_O();
$p.constructor = $c_T22;
/** @constructor */
function $h_T22() {
}
$h_T22.prototype = $p;
$p.J = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 22;
});
$p.o = (function(n) {
  return $f_s_Product22__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().W(this, (-139445068), true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T22) && ((((((((((((((((((((($m_sr_BoxesRunTime$().c(this.gb, x$0.gb) && $m_sr_BoxesRunTime$().c(this.eV, x$0.eV)) && $m_sr_BoxesRunTime$().c(this.eZ, x$0.eZ)) && $m_sr_BoxesRunTime$().c(this.f0, x$0.f0)) && $m_sr_BoxesRunTime$().c(this.f1, x$0.f1)) && $m_sr_BoxesRunTime$().c(this.f2, x$0.f2)) && $m_sr_BoxesRunTime$().c(this.f3, x$0.f3)) && $m_sr_BoxesRunTime$().c(this.f4, x$0.f4)) && $m_sr_BoxesRunTime$().c(this.f5, x$0.f5)) && $m_sr_BoxesRunTime$().c(this.eL, x$0.eL)) && $m_sr_BoxesRunTime$().c(this.eM, x$0.eM)) && $m_sr_BoxesRunTime$().c(this.eN, x$0.eN)) && $m_sr_BoxesRunTime$().c(this.eO, x$0.eO)) && $m_sr_BoxesRunTime$().c(this.eP, x$0.eP)) && $m_sr_BoxesRunTime$().c(this.eQ, x$0.eQ)) && $m_sr_BoxesRunTime$().c(this.eR, x$0.eR)) && $m_sr_BoxesRunTime$().c(this.eS, x$0.eS)) && $m_sr_BoxesRunTime$().c(this.eT, x$0.eT)) && $m_sr_BoxesRunTime$().c(this.eU, x$0.eU)) && $m_sr_BoxesRunTime$().c(this.eW, x$0.eW)) && $m_sr_BoxesRunTime$().c(this.eX, x$0.eX)) && $m_sr_BoxesRunTime$().c(this.eY, x$0.eY))));
});
$p.H = (function() {
  return "Tuple22";
});
$p.r = (function() {
  return (((((((((((((((((((((((((((((((((((((((((((("(" + this.gb) + ",") + this.eV) + ",") + this.eZ) + ",") + this.f0) + ",") + this.f1) + ",") + this.f2) + ",") + this.f3) + ",") + this.f4) + ",") + this.f5) + ",") + this.eL) + ",") + this.eM) + ",") + this.eN) + ",") + this.eO) + ",") + this.eP) + ",") + this.eQ) + ",") + this.eR) + ",") + this.eS) + ",") + this.eT) + ",") + this.eU) + ",") + this.eW) + ",") + this.eX) + ",") + this.eY) + ")");
});
function $isArrayOf_T22(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.al)));
}
var $d_T22 = new $TypeData().i($c_T22, "scala.Tuple22", ({
  al: 1,
  b: 1,
  c: 1,
  bP: 1,
  a: 1
}));
/** @constructor */
function $c_T3(_1, _2, _3) {
  this.aB = null;
  this.aQ = null;
  this.aZ = null;
  this.aB = _1;
  this.aQ = _2;
  this.aZ = _3;
}
$p = $c_T3.prototype = new $h_O();
$p.constructor = $c_T3;
/** @constructor */
function $h_T3() {
}
$h_T3.prototype = $p;
$p.J = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 3;
});
$p.o = (function(n) {
  return $f_s_Product3__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().W(this, (-192629203), true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T3) && (($m_sr_BoxesRunTime$().c(this.aB, x$0.aB) && $m_sr_BoxesRunTime$().c(this.aQ, x$0.aQ)) && $m_sr_BoxesRunTime$().c(this.aZ, x$0.aZ))));
});
$p.H = (function() {
  return "Tuple3";
});
$p.r = (function() {
  return (((((("(" + this.aB) + ",") + this.aQ) + ",") + this.aZ) + ")");
});
function $isArrayOf_T3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.am)));
}
var $d_T3 = new $TypeData().i($c_T3, "scala.Tuple3", ({
  am: 1,
  b: 1,
  c: 1,
  bQ: 1,
  a: 1
}));
/** @constructor */
function $c_T4(_1, _2, _3, _4) {
  this.b0 = null;
  this.bd = null;
  this.be = null;
  this.bf = null;
  this.b0 = _1;
  this.bd = _2;
  this.be = _3;
  this.bf = _4;
}
$p = $c_T4.prototype = new $h_O();
$p.constructor = $c_T4;
/** @constructor */
function $h_T4() {
}
$h_T4.prototype = $p;
$p.J = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 4;
});
$p.o = (function(n) {
  return $f_s_Product4__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().W(this, (-1542739752), true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T4) && ((($m_sr_BoxesRunTime$().c(this.b0, x$0.b0) && $m_sr_BoxesRunTime$().c(this.bd, x$0.bd)) && $m_sr_BoxesRunTime$().c(this.be, x$0.be)) && $m_sr_BoxesRunTime$().c(this.bf, x$0.bf))));
});
$p.H = (function() {
  return "Tuple4";
});
$p.r = (function() {
  return (((((((("(" + this.b0) + ",") + this.bd) + ",") + this.be) + ",") + this.bf) + ")");
});
function $isArrayOf_T4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.an)));
}
var $d_T4 = new $TypeData().i($c_T4, "scala.Tuple4", ({
  an: 1,
  b: 1,
  c: 1,
  bR: 1,
  a: 1
}));
/** @constructor */
function $c_T5(_1, _2, _3, _4, _5) {
  this.f6 = null;
  this.bA = null;
  this.bB = null;
  this.bC = null;
  this.bD = null;
  this.f6 = _1;
  this.bA = _2;
  this.bB = _3;
  this.bC = _4;
  this.bD = _5;
}
$p = $c_T5.prototype = new $h_O();
$p.constructor = $c_T5;
/** @constructor */
function $h_T5() {
}
$h_T5.prototype = $p;
$p.J = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 5;
});
$p.o = (function(n) {
  return $f_s_Product5__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().W(this, 417360321, true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T5) && (((($m_sr_BoxesRunTime$().c(this.f6, x$0.f6) && $m_sr_BoxesRunTime$().c(this.bA, x$0.bA)) && $m_sr_BoxesRunTime$().c(this.bB, x$0.bB)) && $m_sr_BoxesRunTime$().c(this.bC, x$0.bC)) && $m_sr_BoxesRunTime$().c(this.bD, x$0.bD))));
});
$p.H = (function() {
  return "Tuple5";
});
$p.r = (function() {
  return (((((((((("(" + this.f6) + ",") + this.bA) + ",") + this.bB) + ",") + this.bC) + ",") + this.bD) + ")");
});
function $isArrayOf_T5(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ao)));
}
var $d_T5 = new $TypeData().i($c_T5, "scala.Tuple5", ({
  ao: 1,
  b: 1,
  c: 1,
  bS: 1,
  a: 1
}));
/** @constructor */
function $c_T6(_1, _2, _3, _4, _5, _6) {
  this.gc = null;
  this.f7 = null;
  this.f8 = null;
  this.f9 = null;
  this.fa = null;
  this.fb = null;
  this.gc = _1;
  this.f7 = _2;
  this.f8 = _3;
  this.f9 = _4;
  this.fa = _5;
  this.fb = _6;
}
$p = $c_T6.prototype = new $h_O();
$p.constructor = $c_T6;
/** @constructor */
function $h_T6() {
}
$h_T6.prototype = $p;
$p.J = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 6;
});
$p.o = (function(n) {
  return $f_s_Product6__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().W(this, (-1037607828), true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T6) && ((((($m_sr_BoxesRunTime$().c(this.gc, x$0.gc) && $m_sr_BoxesRunTime$().c(this.f7, x$0.f7)) && $m_sr_BoxesRunTime$().c(this.f8, x$0.f8)) && $m_sr_BoxesRunTime$().c(this.f9, x$0.f9)) && $m_sr_BoxesRunTime$().c(this.fa, x$0.fa)) && $m_sr_BoxesRunTime$().c(this.fb, x$0.fb))));
});
$p.H = (function() {
  return "Tuple6";
});
$p.r = (function() {
  return (((((((((((("(" + this.gc) + ",") + this.f7) + ",") + this.f8) + ",") + this.f9) + ",") + this.fa) + ",") + this.fb) + ")");
});
function $isArrayOf_T6(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ap)));
}
var $d_T6 = new $TypeData().i($c_T6, "scala.Tuple6", ({
  ap: 1,
  b: 1,
  c: 1,
  bT: 1,
  a: 1
}));
/** @constructor */
function $c_T7(_1, _2, _3, _4, _5, _6, _7) {
  this.gd = null;
  this.fc = null;
  this.fd = null;
  this.fe = null;
  this.ff = null;
  this.fg = null;
  this.fh = null;
  this.gd = _1;
  this.fc = _2;
  this.fd = _3;
  this.fe = _4;
  this.ff = _5;
  this.fg = _6;
  this.fh = _7;
}
$p = $c_T7.prototype = new $h_O();
$p.constructor = $c_T7;
/** @constructor */
function $h_T7() {
}
$h_T7.prototype = $p;
$p.J = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 7;
});
$p.o = (function(n) {
  return $f_s_Product7__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().W(this, (-1050932777), true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T7) && (((((($m_sr_BoxesRunTime$().c(this.gd, x$0.gd) && $m_sr_BoxesRunTime$().c(this.fc, x$0.fc)) && $m_sr_BoxesRunTime$().c(this.fd, x$0.fd)) && $m_sr_BoxesRunTime$().c(this.fe, x$0.fe)) && $m_sr_BoxesRunTime$().c(this.ff, x$0.ff)) && $m_sr_BoxesRunTime$().c(this.fg, x$0.fg)) && $m_sr_BoxesRunTime$().c(this.fh, x$0.fh))));
});
$p.H = (function() {
  return "Tuple7";
});
$p.r = (function() {
  return (((((((((((((("(" + this.gd) + ",") + this.fc) + ",") + this.fd) + ",") + this.fe) + ",") + this.ff) + ",") + this.fg) + ",") + this.fh) + ")");
});
function $isArrayOf_T7(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aq)));
}
var $d_T7 = new $TypeData().i($c_T7, "scala.Tuple7", ({
  aq: 1,
  b: 1,
  c: 1,
  bU: 1,
  a: 1
}));
/** @constructor */
function $c_T8(_1, _2, _3, _4, _5, _6, _7, _8) {
  this.ge = null;
  this.fi = null;
  this.fj = null;
  this.fk = null;
  this.fl = null;
  this.fm = null;
  this.fn = null;
  this.fo = null;
  this.ge = _1;
  this.fi = _2;
  this.fj = _3;
  this.fk = _4;
  this.fl = _5;
  this.fm = _6;
  this.fn = _7;
  this.fo = _8;
}
$p = $c_T8.prototype = new $h_O();
$p.constructor = $c_T8;
/** @constructor */
function $h_T8() {
}
$h_T8.prototype = $p;
$p.J = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 8;
});
$p.o = (function(n) {
  return $f_s_Product8__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().W(this, 1998822530, true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T8) && ((((((($m_sr_BoxesRunTime$().c(this.ge, x$0.ge) && $m_sr_BoxesRunTime$().c(this.fi, x$0.fi)) && $m_sr_BoxesRunTime$().c(this.fj, x$0.fj)) && $m_sr_BoxesRunTime$().c(this.fk, x$0.fk)) && $m_sr_BoxesRunTime$().c(this.fl, x$0.fl)) && $m_sr_BoxesRunTime$().c(this.fm, x$0.fm)) && $m_sr_BoxesRunTime$().c(this.fn, x$0.fn)) && $m_sr_BoxesRunTime$().c(this.fo, x$0.fo))));
});
$p.H = (function() {
  return "Tuple8";
});
$p.r = (function() {
  return (((((((((((((((("(" + this.ge) + ",") + this.fi) + ",") + this.fj) + ",") + this.fk) + ",") + this.fl) + ",") + this.fm) + ",") + this.fn) + ",") + this.fo) + ")");
});
function $isArrayOf_T8(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ar)));
}
var $d_T8 = new $TypeData().i($c_T8, "scala.Tuple8", ({
  ar: 1,
  b: 1,
  c: 1,
  bV: 1,
  a: 1
}));
/** @constructor */
function $c_T9(_1, _2, _3, _4, _5, _6, _7, _8, _9) {
  this.gf = null;
  this.fp = null;
  this.fq = null;
  this.fr = null;
  this.fs = null;
  this.ft = null;
  this.fu = null;
  this.fv = null;
  this.fw = null;
  this.gf = _1;
  this.fp = _2;
  this.fq = _3;
  this.fr = _4;
  this.fs = _5;
  this.ft = _6;
  this.fu = _7;
  this.fv = _8;
  this.fw = _9;
}
$p = $c_T9.prototype = new $h_O();
$p.constructor = $c_T9;
/** @constructor */
function $h_T9() {
}
$h_T9.prototype = $p;
$p.J = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 9;
});
$p.o = (function(n) {
  return $f_s_Product9__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().W(this, (-1807911176), true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T9) && (((((((($m_sr_BoxesRunTime$().c(this.gf, x$0.gf) && $m_sr_BoxesRunTime$().c(this.fp, x$0.fp)) && $m_sr_BoxesRunTime$().c(this.fq, x$0.fq)) && $m_sr_BoxesRunTime$().c(this.fr, x$0.fr)) && $m_sr_BoxesRunTime$().c(this.fs, x$0.fs)) && $m_sr_BoxesRunTime$().c(this.ft, x$0.ft)) && $m_sr_BoxesRunTime$().c(this.fu, x$0.fu)) && $m_sr_BoxesRunTime$().c(this.fv, x$0.fv)) && $m_sr_BoxesRunTime$().c(this.fw, x$0.fw))));
});
$p.H = (function() {
  return "Tuple9";
});
$p.r = (function() {
  return (((((((((((((((((("(" + this.gf) + ",") + this.fp) + ",") + this.fq) + ",") + this.fr) + ",") + this.fs) + ",") + this.ft) + ",") + this.fu) + ",") + this.fv) + ",") + this.fw) + ")");
});
function $isArrayOf_T9(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.as)));
}
var $d_T9 = new $TypeData().i($c_T9, "scala.Tuple9", ({
  as: 1,
  b: 1,
  c: 1,
  bW: 1,
  a: 1
}));
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.fQ() + "("), ", ", ")");
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
$p.V = (function() {
  return false;
});
$p.qS = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
});
$p.aj = (function() {
  return 0;
});
$p.R = (function() {
  this.qS();
});
$p.iX = (function(from, until) {
  return this;
});
var $d_sc_Iterator$$anon$19 = new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  c6: 1,
  m: 1,
  d: 1,
  e: 1,
  r: 1
}));
function $p_sc_Iterator$ConcatIterator__merge$1__V($thiz) {
  while (true) {
    if (($thiz.aC instanceof $c_sc_Iterator$ConcatIterator)) {
      var c = $thiz.aC;
      $thiz.aC = c.aC;
      $thiz.bF = c.bF;
      if ((c.aS !== null)) {
        if (($thiz.aR === null)) {
          $thiz.aR = c.aR;
        }
        var x$proxy10 = c.aR;
        if ((x$proxy10 === null)) {
          $m_sr_Scala3RunTime$().iU();
        }
        x$proxy10.gZ = $thiz.aS;
        $thiz.aS = c.aS;
      }
    } else {
      return (void 0);
    }
  }
}
function $p_sc_Iterator$ConcatIterator__advance$1__Z($thiz) {
  while (true) {
    if (($thiz.aS === null)) {
      $thiz.aC = null;
      $thiz.aR = null;
      return false;
    } else {
      $thiz.aC = $thiz.aS.q2();
      if (($thiz.aR === $thiz.aS)) {
        var x$proxy12 = $thiz.aR;
        if ((x$proxy12 === null)) {
          $m_sr_Scala3RunTime$().iU();
        }
        $thiz.aR = x$proxy12.gZ;
      }
      $thiz.aS = $thiz.aS.gZ;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.bF) {
        return true;
      } else {
        if ((!(($thiz.aC !== null) && $thiz.aC.V()))) {
          continue;
        }
        $thiz.bF = true;
        return true;
      }
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIterator(from) {
  this.aC = null;
  this.aS = null;
  this.aR = null;
  this.bF = false;
  this.aC = from;
  this.aS = null;
  this.aR = null;
  this.bF = false;
}
$p = $c_sc_Iterator$ConcatIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$ConcatIterator;
/** @constructor */
function $h_sc_Iterator$ConcatIterator() {
}
$h_sc_Iterator$ConcatIterator.prototype = $p;
$p.V = (function() {
  if (this.bF) {
    return true;
  } else if ((this.aC !== null)) {
    if (this.aC.V()) {
      this.bF = true;
      return true;
    } else {
      return $p_sc_Iterator$ConcatIterator__advance$1__Z(this);
    }
  } else {
    return false;
  }
});
$p.R = (function() {
  if (this.V()) {
    this.bF = false;
    var x$proxy13 = this.aC;
    if ((x$proxy13 === null)) {
      $m_sr_Scala3RunTime$().iU();
    }
    return x$proxy13.R();
  } else {
    return $m_sc_Iterator$().bg.R();
  }
});
$p.pq = (function(that) {
  var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
  if ((this.aS === null)) {
    this.aS = c;
    this.aR = c;
  } else {
    var x$proxy14 = this.aR;
    if ((x$proxy14 === null)) {
      $m_sr_Scala3RunTime$().iU();
    }
    x$proxy14.gZ = c;
    this.aR = c;
  }
  if ((this.aC === null)) {
    this.aC = $m_sc_Iterator$().bg;
  }
  return this;
});
function $isArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ax)));
}
var $d_sc_Iterator$ConcatIterator = new $TypeData().i($c_sc_Iterator$ConcatIterator, "scala.collection.Iterator$ConcatIterator", ({
  ax: 1,
  m: 1,
  d: 1,
  e: 1,
  r: 1
}));
function $p_sc_Iterator$SliceIterator__skip__V($thiz) {
  while (($thiz.bo > 0)) {
    if ($thiz.bG.V()) {
      $thiz.bG.R();
      $thiz.bo = (($thiz.bo - 1) | 0);
    } else {
      $thiz.bo = 0;
    }
  }
}
function $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I($thiz, lo$1) {
  if (($thiz.aI < 0)) {
    return (-1);
  } else {
    var that = (($thiz.aI - lo$1) | 0);
    return ((that < 0) ? 0 : that);
  }
}
/** @constructor */
function $c_sc_Iterator$SliceIterator(underlying, start, limit) {
  this.bG = null;
  this.aI = 0;
  this.bo = 0;
  this.bG = underlying;
  this.aI = limit;
  this.bo = start;
}
$p = $c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$SliceIterator;
/** @constructor */
function $h_sc_Iterator$SliceIterator() {
}
$h_sc_Iterator$SliceIterator.prototype = $p;
$p.aj = (function() {
  var size = this.bG.aj();
  if ((size < 0)) {
    return (-1);
  } else {
    var that = ((size - this.bo) | 0);
    var dropSize = ((that < 0) ? 0 : that);
    if ((this.aI < 0)) {
      return dropSize;
    } else {
      var x = this.aI;
      return ((x < dropSize) ? x : dropSize);
    }
  }
});
$p.V = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  return ((this.aI !== 0) && this.bG.V());
});
$p.R = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.aI > 0)) {
    this.aI = ((this.aI - 1) | 0);
    return this.bG.R();
  } else {
    return ((this.aI < 0) ? this.bG.R() : $m_sc_Iterator$().bg.R());
  }
});
$p.iX = (function(from, until) {
  var lo = ((from > 0) ? from : 0);
  if ((until < 0)) {
    var rest = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
  } else if ((until <= lo)) {
    var rest = 0;
  } else if ((this.aI < 0)) {
    var rest = ((until - lo) | 0);
  } else {
    var x = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
    var that = ((until - lo) | 0);
    var rest = ((x < that) ? x : that);
  }
  var sum = ((this.bo + lo) | 0);
  if ((rest === 0)) {
    return $m_sc_Iterator$().bg;
  } else if ((sum < 0)) {
    this.bo = 2147483647;
    this.aI = 0;
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => new $c_sc_Iterator$SliceIterator(this.bG, ((sum - 2147483647) | 0), rest))));
  } else {
    this.bo = sum;
    this.aI = rest;
    return this;
  }
});
var $d_sc_Iterator$SliceIterator = new $TypeData().i($c_sc_Iterator$SliceIterator, "scala.collection.Iterator$SliceIterator", ({
  c8: 1,
  m: 1,
  d: 1,
  e: 1,
  r: 1
}));
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  var skipped = $thiz.pC(n);
  if (skipped.ac()) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  return skipped.kt();
}
function $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  return ($is_sc_LinearSeq(that) ? $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, $thiz, that) : $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that));
}
function $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, a, b) {
  var b$tailLocal1 = b;
  var a$tailLocal1 = a;
  while (true) {
    if ((a$tailLocal1 === b$tailLocal1)) {
      return true;
    } else {
      if ((((!a$tailLocal1.ac()) && (!b$tailLocal1.ac())) && $m_sr_BoxesRunTime$().c(a$tailLocal1.kt(), b$tailLocal1.kt()))) {
        var a$tailLocal1$tmp1 = a$tailLocal1.kB();
        var b$tailLocal1$tmp1 = b$tailLocal1.kB();
        a$tailLocal1 = a$tailLocal1$tmp1;
        b$tailLocal1 = b$tailLocal1$tmp1;
        continue;
      }
      return (a$tailLocal1.ac() && b$tailLocal1.ac());
    }
  }
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
  cn: 1,
  a: 1,
  aw: 1,
  ca: 1,
  ce: 1
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
  this.l9 = null;
  this.h1 = 0;
  this.l8 = 0;
  this.l9 = x$1;
  this.h1 = 0;
  this.l8 = x$1.z();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.V = (function() {
  return (this.h1 < this.l8);
});
$p.R = (function() {
  var result = this.l9.o(this.h1);
  this.h1 = ((1 + this.h1) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().i($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  cZ: 1,
  m: 1,
  d: 1,
  e: 1,
  r: 1
}));
function $f_jl_Double__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a2)));
}
var $d_jl_Double = new $TypeData().i(0, "java.lang.Double", ({
  a2: 1,
  u: 1,
  a: 1,
  i: 1,
  g: 1,
  C: 1
}), ((x) => ((typeof x) === "number")));
function $f_jl_Float__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
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
  b9: 1,
  u: 1,
  a: 1,
  i: 1,
  g: 1,
  C: 1
}), ((x) => $isFloat(x)));
function $f_jl_Integer__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Integer__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Integer__toString__T($thiz) {
  return ("" + $thiz);
}
function $isArrayOf_jl_Integer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a4)));
}
var $d_jl_Integer = new $TypeData().i(0, "java.lang.Integer", ({
  a4: 1,
  u: 1,
  a: 1,
  i: 1,
  g: 1,
  C: 1
}), ((x) => $isInt(x)));
function $f_jl_Long__equals__O__Z($thiz, $thizhi, that) {
  if ((that instanceof $Long)) {
    var $x_1 = that;
    var this$1_$_lo = $x_1.l;
    var this$1_$_hi = $x_1.h;
    return ((($thiz ^ this$1_$_lo) | ($thizhi ^ this$1_$_hi)) === 0);
  } else {
    return false;
  }
}
function $f_jl_Long__hashCode__I($thiz, $thizhi) {
  return ($thiz ^ $thizhi);
}
function $f_jl_Long__toString__T($thiz, $thizhi) {
  return $m_RTLong$().oG($thiz, $thizhi);
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a5)));
}
var $d_jl_Long = new $TypeData().i(0, "java.lang.Long", ({
  a5: 1,
  u: 1,
  a: 1,
  i: 1,
  g: 1,
  C: 1
}), ((x) => (x instanceof $Long)));
class $c_jl_NumberFormatException extends $c_jl_IllegalArgumentException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_NumberFormatException = new $TypeData().i($c_jl_NumberFormatException, "java.lang.NumberFormatException", ({
  bd: 1,
  a3: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
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
function $f_T__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_T__indexOf__I__I($thiz, ch) {
  var str = $m_jl_Character$().rR(ch);
  return ($thiz.indexOf(str) | 0);
}
function $f_T__toString__T($thiz) {
  return $thiz;
}
var $d_T = new $TypeData().i(0, "java.lang.String", ({
  bg: 1,
  a: 1,
  i: 1,
  L: 1,
  g: 1,
  C: 1
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
$p.fR = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.kj = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.fQ = (function() {
  return this.bV();
});
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator(xs) {
  this.ia = null;
  this.bn = 0;
  this.gY = 0;
  this.ia = xs;
  this.bn = 0;
  this.gY = $m_jl_reflect_Array$().hK(this.ia);
}
$p = $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $p;
$p.aj = (function() {
  return ((this.gY - this.bn) | 0);
});
$p.V = (function() {
  return (this.bn < this.gY);
});
$p.R = (function() {
  if ((this.bn >= $m_jl_reflect_Array$().hK(this.ia))) {
    $m_sc_Iterator$().bg.R();
  }
  var r = $m_sr_ScalaRunTime$().gN(this.ia, this.bn);
  this.bn = ((1 + this.bn) | 0);
  return r;
});
$p.hI = (function(n) {
  if ((n > 0)) {
    var newPos = ((this.bn + n) | 0);
    if ((newPos < 0)) {
      var $x_1 = this.gY;
    } else {
      var a = this.gY;
      var $x_1 = ((a < newPos) ? a : newPos);
    }
    this.bn = $x_1;
  }
  return this;
});
var $d_sc_ArrayOps$ArrayIterator = new $TypeData().i($c_sc_ArrayOps$ArrayIterator, "scala.collection.ArrayOps$ArrayIterator", ({
  c0: 1,
  m: 1,
  d: 1,
  e: 1,
  r: 1,
  a: 1
}));
function $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I($thiz, value) {
  return ((value < 0) ? 0 : ((value > $thiz.b1) ? $thiz.b1 : value));
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator(self) {
  this.kV = null;
  this.bE = 0;
  this.b1 = 0;
  this.kV = self;
  this.bE = 0;
  this.b1 = self.M();
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $p;
$p.aj = (function() {
  return this.b1;
});
$p.V = (function() {
  return (this.b1 > 0);
});
$p.R = (function() {
  if ((this.b1 > 0)) {
    var r = this.kV.a6(this.bE);
    this.bE = ((1 + this.bE) | 0);
    this.b1 = ((this.b1 - 1) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().bg.R();
  }
});
$p.hI = (function(n) {
  if ((n > 0)) {
    this.bE = ((this.bE + n) | 0);
    var b = ((this.b1 - n) | 0);
    this.b1 = ((b < 0) ? 0 : b);
  }
  return this;
});
$p.iX = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.b1 = ((b < 0) ? 0 : b);
  this.bE = ((this.bE + formatFrom) | 0);
  return this;
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  c4: 1,
  m: 1,
  d: 1,
  e: 1,
  r: 1,
  a: 1
}));
function $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($thiz) {
  if ((!$thiz.kZ)) {
    $thiz.kY = new $c_sci_ArraySeq$ofRef(new ($d_sr_Nothing$.r().C)(0));
    $thiz.kZ = true;
  }
  return $thiz.kY;
}
/** @constructor */
function $c_sci_ArraySeq$() {
  this.kY = null;
  this.kZ = false;
}
$p = $c_sci_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_sci_ArraySeq$;
/** @constructor */
function $h_sci_ArraySeq$() {
}
$h_sci_ArraySeq$.prototype = $p;
var $d_sci_ArraySeq$ = new $TypeData().i($c_sci_ArraySeq$, "scala.collection.immutable.ArraySeq$", ({
  cj: 1,
  a: 1,
  av: 1,
  at: 1,
  au: 1,
  ay: 1
}));
var $n_sci_ArraySeq$;
function $m_sci_ArraySeq$() {
  if ((!$n_sci_ArraySeq$)) {
    $n_sci_ArraySeq$ = new $c_sci_ArraySeq$();
  }
  return $n_sci_ArraySeq$;
}
/** @constructor */
function $c_sci_RangeIterator(start, step, lastElement, initiallyEmpty) {
  this.gh = 0;
  this.fA = 0;
  this.fy = false;
  this.fz = 0;
  this.gh = step;
  this.fA = lastElement;
  this.fy = (!initiallyEmpty);
  this.fz = start;
}
$p = $c_sci_RangeIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_RangeIterator;
/** @constructor */
function $h_sci_RangeIterator() {
}
$h_sci_RangeIterator.prototype = $p;
$p.aj = (function() {
  return (this.fy ? ((1 + ((((this.fA - this.fz) | 0) / $checkIntDivisor(this.gh)) | 0)) | 0) : 0);
});
$p.V = (function() {
  return this.fy;
});
$p.qT = (function() {
  if ((!this.fy)) {
    $m_sc_Iterator$().bg.R();
  }
  var value = this.fz;
  this.fy = (value !== this.fA);
  this.fz = ((value + this.gh) | 0);
  return value;
});
$p.hI = (function(n) {
  if ((n > 0)) {
    var value = this.fz;
    var hi = (value >> 31);
    var value$1 = Math.imul(this.gh, n);
    var hi$1 = (value$1 >> 31);
    var lo = ((value + value$1) | 0);
    var hi$2 = ((((hi + hi$1) | 0) + (((lo >>> 0) < (value >>> 0)) | 0)) | 0);
    if ((this.gh > 0)) {
      var x = this.fA;
      var hi$3 = (x >> 31);
      if (((hi$3 === hi$2) ? ((x >>> 0) < (lo >>> 0)) : (hi$3 < hi$2))) {
        var $x_1_$_lo = x;
        var $x_1_$_hi = hi$3;
      } else {
        var $x_1_$_lo = lo;
        var $x_1_$_hi = hi$2;
      }
      this.fz = $x_1_$_lo;
      var value$2 = this.fA;
      var hi$4 = (value$2 >> 31);
      this.fy = ((hi$2 === hi$4) ? ((lo >>> 0) <= (value$2 >>> 0)) : (hi$2 < hi$4));
    } else if ((this.gh < 0)) {
      var x$2 = this.fA;
      var hi$5 = (x$2 >> 31);
      if (((hi$5 === hi$2) ? ((x$2 >>> 0) > (lo >>> 0)) : (hi$5 > hi$2))) {
        var $x_2_$_lo = x$2;
        var $x_2_$_hi = hi$5;
      } else {
        var $x_2_$_lo = lo;
        var $x_2_$_hi = hi$2;
      }
      this.fz = $x_2_$_lo;
      var value$3 = this.fA;
      var hi$6 = (value$3 >> 31);
      this.fy = ((hi$2 === hi$6) ? ((lo >>> 0) >= (value$3 >>> 0)) : (hi$2 > hi$6));
    }
  }
  return this;
});
$p.R = (function() {
  return this.qT();
});
var $d_sci_RangeIterator = new $TypeData().i($c_sci_RangeIterator, "scala.collection.immutable.RangeIterator", ({
  cr: 1,
  m: 1,
  d: 1,
  e: 1,
  r: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$() {
  this.l1 = null;
  $n_scm_ArraySeq$ = this;
  this.l1 = new $c_scm_ArraySeq$ofRef(new $ac_O(0));
}
$p = $c_scm_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_scm_ArraySeq$;
/** @constructor */
function $h_scm_ArraySeq$() {
}
$h_scm_ArraySeq$.prototype = $p;
var $d_scm_ArraySeq$ = new $TypeData().i($c_scm_ArraySeq$, "scala.collection.mutable.ArraySeq$", ({
  ct: 1,
  a: 1,
  av: 1,
  at: 1,
  au: 1,
  ay: 1
}));
var $n_scm_ArraySeq$;
function $m_scm_ArraySeq$() {
  if ((!$n_scm_ArraySeq$)) {
    $n_scm_ArraySeq$ = new $c_scm_ArraySeq$();
  }
  return $n_scm_ArraySeq$;
}
/** @constructor */
function $c_T$package$EmptyTuple$() {
}
$p = $c_T$package$EmptyTuple$.prototype = new $h_O();
$p.constructor = $c_T$package$EmptyTuple$;
/** @constructor */
function $h_T$package$EmptyTuple$() {
}
$h_T$package$EmptyTuple$.prototype = $p;
$p.J = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.w = (function() {
  return 924202651;
});
$p.z = (function() {
  return 0;
});
$p.H = (function() {
  return "EmptyTuple";
});
$p.o = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
});
$p.r = (function() {
  return "()";
});
var $d_T$package$EmptyTuple$ = new $TypeData().i($c_T$package$EmptyTuple$, "scala.Tuple$package$EmptyTuple$", ({
  bX: 1,
  b: 1,
  c: 1,
  a: 1,
  aH: 1,
  aI: 1,
  cz: 1
}));
var $n_T$package$EmptyTuple$;
function $m_T$package$EmptyTuple$() {
  if ((!$n_T$package$EmptyTuple$)) {
    $n_T$package$EmptyTuple$ = new $c_T$package$EmptyTuple$();
  }
  return $n_T$package$EmptyTuple$;
}
function $f_sc_View__toString__T($thiz) {
  return ($thiz.bV() + "(<not computed>)");
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
    this.aJ = null;
    this.aJ = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  iO() {
    return $dp_toString__T(this.aJ);
  }
  H() {
    return "JavaScriptException";
  }
  z() {
    return 1;
  }
  o(x$1) {
    return ((x$1 === 0) ? this.aJ : $m_sr_Statics$().q7(x$1));
  }
  J() {
    return new $c_sr_ScalaRunTime$$anon$1(this);
  }
  w() {
    return $m_s_util_hashing_MurmurHash3$().W(this, 1744042595, true);
  }
  u(x$1) {
    return ((this === x$1) || ((x$1 instanceof $c_sjs_js_JavaScriptException) && $m_sr_BoxesRunTime$().c(this.aJ, x$1.aJ)));
  }
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aK)));
}
var $d_sjs_js_JavaScriptException = new $TypeData().i($c_sjs_js_JavaScriptException, "scala.scalajs.js.JavaScriptException", ({
  aK: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1,
  c: 1,
  b: 1
}));
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  var s$tailLocal1 = s;
  var n$tailLocal1 = n;
  while (true) {
    if (((n$tailLocal1 <= 0) || s$tailLocal1.ac())) {
      return s$tailLocal1;
    } else {
      var n$tailLocal1$tmp1 = ((n$tailLocal1 - 1) | 0);
      var s$tailLocal1$tmp1 = s$tailLocal1.kB();
      n$tailLocal1 = n$tailLocal1$tmp1;
      s$tailLocal1 = s$tailLocal1$tmp1;
    }
  }
}
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.j5 = null;
}
$p = $c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$p.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $p;
$p.r = (function() {
  return this.j5;
});
$p.u = (function(that) {
  return (this === that);
});
$p.w = (function() {
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
$p.r = (function() {
  return $f_sc_View__toString__T(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ObjectManifest$() {
  this.j5 = null;
  this.j5 = "Object";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ObjectManifest$, "scala.reflect.ManifestFactory$ObjectManifest$", ({
  cF: 1,
  cG: 1,
  cE: 1,
  a: 1,
  cH: 1,
  cB: 1,
  b: 1,
  cC: 1,
  cD: 1
}));
var $n_s_reflect_ManifestFactory$ObjectManifest$;
function $m_s_reflect_ManifestFactory$ObjectManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ObjectManifest$)) {
    $n_s_reflect_ManifestFactory$ObjectManifest$ = new $c_s_reflect_ManifestFactory$ObjectManifest$();
  }
  return $n_s_reflect_ManifestFactory$ObjectManifest$;
}
function $f_sc_Seq__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true;
  } else {
    if ($is_sc_Seq(o)) {
      if (o.iM($thiz)) {
        return $thiz.i3(o);
      }
    }
    return false;
  }
}
function $is_sc_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.l)));
}
function $isArrayOf_sc_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.l)));
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
$p.ac = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.i3 = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.iM = (function(that) {
  return true;
});
$p.u = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().kw(this);
});
$p.r = (function() {
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
  return (!(!((obj && obj.$classData) && obj.$classData.n.n)));
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.n)));
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.M)));
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.M)));
}
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.h0 = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.h0 = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $p;
$p.a6 = (function(idx) {
  return this.h0.a6(idx);
});
$p.M = (function() {
  return this.h0.M();
});
$p.ac = (function() {
  return this.h0.ac();
});
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.h0 = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$p.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $p;
$p.bU = (function(len) {
  var x = this.M();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.aj = (function() {
  return this.M();
});
$p.ad = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this);
});
$p.bV = (function() {
  return "IndexedSeqView";
});
var $d_sc_IndexedSeqView$Id = new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  c3: 1,
  cc: 1,
  bY: 1,
  bZ: 1,
  w: 1,
  d: 1,
  e: 1,
  q: 1,
  p: 1,
  o: 1,
  a: 1,
  cg: 1,
  s: 1,
  cb: 1,
  x: 1,
  c2: 1
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
function $f_sci_IndexedSeq__canEqual__O__Z($thiz, that) {
  return ($is_sci_IndexedSeq(that) ? ($thiz.M() === that.M()) : true);
}
function $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z($thiz, o) {
  if ($is_sci_IndexedSeq(o)) {
    if (($thiz === o)) {
      return true;
    } else {
      var length = $thiz.M();
      var equal = (length === o.M());
      if (equal) {
        var index = 0;
        var a = $thiz.iL();
        var b = o.iL();
        var preferredLength = ((a < b) ? a : b);
        var hi = (length >> 31);
        var hi$1 = (preferredLength >> 31);
        var lo = (preferredLength << 1);
        var hi$2 = (((preferredLength >>> 31) | 0) | (hi$1 << 1));
        if (((hi === hi$2) ? ((length >>> 0) > (lo >>> 0)) : (hi > hi$2))) {
          var maxApplyCompare = preferredLength;
        } else {
          var maxApplyCompare = length;
        }
        while (((index < maxApplyCompare) && equal)) {
          equal = $m_sr_BoxesRunTime$().c($thiz.a6(index), o.a6(index));
          index = ((1 + index) | 0);
        }
        if (((index < length) && equal)) {
          var thisIt = $thiz.ad().hI(index);
          var thatIt = o.ad().hI(index);
          while ((equal && thisIt.V())) {
            equal = $m_sr_BoxesRunTime$().c(thisIt.R(), thatIt.R());
          }
        }
      }
      return equal;
    }
  } else {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, o);
  }
}
function $is_sci_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.D)));
}
function $isArrayOf_sci_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.D)));
}
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
  this.ib = null;
  this.ib = array;
}
$p = $c_sjsr_WrappedVarArgs.prototype = new $h_O();
$p.constructor = $c_sjsr_WrappedVarArgs;
/** @constructor */
function $h_sjsr_WrappedVarArgs() {
}
$h_sjsr_WrappedVarArgs.prototype = $p;
$p.iM = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.i3 = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.iL = (function() {
  return $m_sci_IndexedSeqDefaults$().l0;
});
$p.ad = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.bU = (function(len) {
  var x = this.M();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.aj = (function() {
  return this.M();
});
$p.u = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().kw(this);
});
$p.r = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.ac = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.fR = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.kj = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.M = (function() {
  return (this.ib.length | 0);
});
$p.a6 = (function(idx) {
  return this.ib[idx];
});
$p.fQ = (function() {
  return "WrappedVarArgs";
});
$p.h = (function(v1) {
  return this.a6((v1 | 0));
});
function $isArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aL)));
}
var $d_sjsr_WrappedVarArgs = new $TypeData().i($c_sjsr_WrappedVarArgs, "scala.scalajs.runtime.WrappedVarArgs", ({
  aL: 1,
  D: 1,
  d: 1,
  e: 1,
  q: 1,
  p: 1,
  o: 1,
  G: 1,
  h: 1,
  v: 1,
  s: 1,
  b: 1,
  l: 1,
  I: 1,
  H: 1,
  x: 1,
  n: 1,
  O: 1,
  J: 1,
  z: 1,
  A: 1,
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
function $p_sci_Range__isInexact$1__Z($thiz) {
  return ((($thiz.fx + $thiz.ar) | 0) !== $thiz.gg);
}
function $ct_sci_Range__I__I__I__($thiz, start, end, step) {
  $thiz.al = start;
  $thiz.gg = end;
  $thiz.ar = step;
  $thiz.ax = ((step >= 0) ? (start >= end) : (start <= end));
  if ((step === 0)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "step cannot be 0.");
  }
  var stepSign = (step >> 31);
  var gap = (((((end - start) | 0) ^ stepSign) - stepSign) | 0);
  var absStep = (((step ^ stepSign) - stepSign) | 0);
  var div = (((gap >>> 0) / ($checkIntDivisor(absStep) >>> 0)) | 0);
  $thiz.bH = ((Math.imul(absStep, div) !== gap) ? ((1 + div) | 0) : div);
  if ((((-3) & ((1 + step) | 0)) === 0)) {
    var $x_1 = ((end - step) | 0);
  } else {
    var n = (($thiz.bH - 1) | 0);
    var $x_1 = (($thiz.al + Math.imul($thiz.ar, n)) | 0);
  }
  $thiz.fx = $x_1;
  return $thiz;
}
/** @constructor */
function $c_sci_Range() {
  this.al = 0;
  this.gg = 0;
  this.ar = 0;
  this.ax = false;
  this.bH = 0;
  this.fx = 0;
}
$p = $c_sci_Range.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_Range;
/** @constructor */
function $h_sci_Range() {
}
$h_sci_Range.prototype = $p;
$p.iM = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.bV = (function() {
  return "IndexedSeq";
});
$p.bU = (function(len) {
  var x = this.M();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.aj = (function() {
  return this.M();
});
$p.ad = (function() {
  return new $c_sci_RangeIterator(this.al, this.ar, this.fx, this.ax);
});
$p.ac = (function() {
  return this.ax;
});
$p.M = (function() {
  if (this.ax) {
    return 0;
  } else {
    if ((this.bH <= 0)) {
      $m_sci_Range$().oE(this.al, this.gg, this.ar, false);
    }
    return this.bH;
  }
});
$p.oc = (function() {
  if (this.ax) {
    var $x_1 = $m_sci_Range$().ro("last");
    throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.aJ : $x_1);
  } else {
    return this.fx;
  }
});
$p.rp = (function() {
  if (((this.bH <= 0) && (!this.ax))) {
    $m_sci_Range$().oE(this.al, this.gg, this.ar, false);
  }
});
$p.fR = (function(f) {
  if ((!this.ax)) {
    var i = this.al;
    while (true) {
      f.h(i);
      if ((i === this.fx)) {
        return (void 0);
      }
      i = ((i + this.ar) | 0);
    }
  }
});
$p.i3 = (function(that) {
  if ((that instanceof $c_sci_Range)) {
    var x1$2 = this.M();
    switch (x1$2) {
      case 0: {
        return that.ax;
        break;
      }
      case 1: {
        return ((that.M() === 1) && (this.al === that.al));
        break;
      }
      default: {
        return ((that.M() === x1$2) && ((this.al === that.al) && (this.ar === that.ar)));
      }
    }
  } else {
    return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, that);
  }
});
$p.iL = (function() {
  return 2147483647;
});
$p.u = (function(other) {
  if ((other instanceof $c_sci_Range)) {
    if (this.ax) {
      return other.ax;
    } else if (((!other.ax) && (this.al === other.al))) {
      var l0 = this.oc();
      return ((l0 === other.oc()) && ((this.al === l0) || (this.ar === other.ar)));
    } else {
      return false;
    }
  } else {
    return $f_sc_Seq__equals__O__Z(this, other);
  }
});
$p.w = (function() {
  if ((this.M() >= 2)) {
    var this$1 = $m_s_util_hashing_MurmurHash3$();
    return this$1.oA(this.al, this.ar, this.fx, this$1.fB);
  } else {
    return $m_s_util_hashing_MurmurHash3$().kw(this);
  }
});
$p.r = (function() {
  var stepped = ((this.ar === 1) ? "" : (" by " + this.ar));
  return ((((((this.ax ? "empty " : ($p_sci_Range__isInexact$1__Z(this) ? "inexact " : "")) + "Range ") + this.al) + " until ") + this.gg) + stepped);
});
$p.fQ = (function() {
  return "Range";
});
$p.nS = (function(idx) {
  if ((((idx < 0) || (idx >= this.bH)) || this.ax)) {
    this.rp();
    var max = (this.ax ? (-1) : ((this.bH - 1) | 0));
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((idx + " is out of bounds (min 0, max ") + max) + ")"));
  } else {
    return ((this.al + Math.imul(this.ar, idx)) | 0);
  }
});
$p.h = (function(v1) {
  return this.nS((v1 | 0));
});
$p.a6 = (function(i) {
  return this.nS(i);
});
function $isArrayOf_sci_Range(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aB)));
}
/** @constructor */
function $c_sci_ArraySeq() {
}
$p = $c_sci_ArraySeq.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_ArraySeq;
/** @constructor */
function $h_sci_ArraySeq() {
}
$h_sci_ArraySeq.prototype = $p;
$p.bU = (function(len) {
  var x = this.bp.a.length;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.aj = (function() {
  return this.bp.a.length;
});
$p.bV = (function() {
  return "IndexedSeq";
});
$p.iM = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.i3 = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.fQ = (function() {
  return "ArraySeq";
});
$p.iL = (function() {
  return 2147483647;
});
/** @constructor */
function $c_sci_Range$Exclusive(start, end, step) {
  this.al = 0;
  this.gg = 0;
  this.ar = 0;
  this.ax = false;
  this.bH = 0;
  this.fx = 0;
  $ct_sci_Range__I__I__I__(this, start, end, step);
}
$p = $c_sci_Range$Exclusive.prototype = new $h_sci_Range();
$p.constructor = $c_sci_Range$Exclusive;
/** @constructor */
function $h_sci_Range$Exclusive() {
}
$h_sci_Range$Exclusive.prototype = $p;
var $d_sci_Range$Exclusive = new $TypeData().i($c_sci_Range$Exclusive, "scala.collection.immutable.Range$Exclusive", ({
  cq: 1,
  aB: 1,
  N: 1,
  y: 1,
  w: 1,
  d: 1,
  e: 1,
  q: 1,
  p: 1,
  o: 1,
  h: 1,
  v: 1,
  s: 1,
  b: 1,
  l: 1,
  G: 1,
  I: 1,
  H: 1,
  D: 1,
  x: 1,
  n: 1,
  O: 1,
  J: 1,
  z: 1,
  A: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq() {
}
$p = $c_scm_ArraySeq.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_ArraySeq;
/** @constructor */
function $h_scm_ArraySeq() {
}
$h_scm_ArraySeq.prototype = $p;
$p.bU = (function(len) {
  var x = this.b2.a.length;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.aj = (function() {
  return this.b2.a.length;
});
$p.bV = (function() {
  return "IndexedSeq";
});
$p.fQ = (function() {
  return "ArraySeq";
});
$p.u = (function(other) {
  if ((other instanceof $c_scm_ArraySeq)) {
    if ((this.b2.a.length !== other.b2.a.length)) {
      return false;
    }
  }
  return $f_sc_Seq__equals__O__Z(this, other);
});
function $isArrayOf_scm_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aC)));
}
/** @constructor */
function $c_sci_ArraySeq$ofRef(unsafeArray) {
  this.bp = null;
  this.bp = unsafeArray;
}
$p = $c_sci_ArraySeq$ofRef.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofRef;
/** @constructor */
function $h_sci_ArraySeq$ofRef() {
}
$h_sci_ArraySeq$ofRef.prototype = $p;
$p.M = (function() {
  return this.bp.a.length;
});
$p.a6 = (function(i) {
  return this.bp.a[i];
});
$p.w = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.nT(this.bp, this$1.fB);
});
$p.u = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofRef) ? $m_s_Array$().o5(this.bp, that.bp) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.ad = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.bp);
});
$p.h = (function(v1) {
  return this.a6((v1 | 0));
});
function $isArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.az)));
}
var $d_sci_ArraySeq$ofRef = new $TypeData().i($c_sci_ArraySeq$ofRef, "scala.collection.immutable.ArraySeq$ofRef", ({
  az: 1,
  ci: 1,
  N: 1,
  y: 1,
  w: 1,
  d: 1,
  e: 1,
  q: 1,
  p: 1,
  o: 1,
  h: 1,
  v: 1,
  s: 1,
  b: 1,
  l: 1,
  G: 1,
  I: 1,
  H: 1,
  x: 1,
  n: 1,
  O: 1,
  D: 1,
  z: 1,
  A: 1,
  J: 1,
  c1: 1,
  a: 1
}));
function $p_sci_List__loop$2__I__I__sci_List__I($thiz, len$1, i, xs) {
  var xs$tailLocal1 = xs;
  var i$tailLocal1 = i;
  while (true) {
    if ((i$tailLocal1 === len$1)) {
      return ((!xs$tailLocal1.ac()) | 0);
    } else {
      if ((!xs$tailLocal1.ac())) {
        xs$tailLocal1.i7();
      }
      return (-1);
    }
  }
}
function $p_sci_List__listEq$1__sci_List__sci_List__Z($thiz, a, b) {
  var b$tailLocal1 = b;
  var a$tailLocal1 = a;
  while (true) {
    if ((a$tailLocal1 === b$tailLocal1)) {
      return true;
    } else {
      var aEmpty = a$tailLocal1.ac();
      var bEmpty = b$tailLocal1.ac();
      if ((!(aEmpty || bEmpty))) {
        a$tailLocal1.iP();
      }
      if (false) {
        a$tailLocal1.i7();
      }
      return (aEmpty && bEmpty);
    }
  }
}
/** @constructor */
function $c_sci_List() {
}
$p = $c_sci_List.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_List;
/** @constructor */
function $h_sci_List() {
}
$h_sci_List.prototype = $p;
$p.a6 = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.i3 = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.bV = (function() {
  return "LinearSeq";
});
$p.ac = (function() {
  return (this === $m_sci_Nil$());
});
$p.fR = (function(f) {
  var these = this;
  while ((!these.ac())) {
    f.h(these.iP());
    these.i7();
  }
});
$p.M = (function() {
  var these = this;
  var len = 0;
  while ((!these.ac())) {
    len = ((1 + len) | 0);
    these.i7();
  }
  return len;
});
$p.bU = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__I__sci_List__I(this, len, 0, this));
});
$p.fQ = (function() {
  return "List";
});
$p.u = (function(o) {
  return ((o instanceof $c_sci_List) ? $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, o) : $f_sc_Seq__equals__O__Z(this, o));
});
$p.pC = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$p.h = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aA)));
}
/** @constructor */
function $c_scm_ArraySeq$ofRef(array) {
  this.b2 = null;
  this.b2 = array;
}
$p = $c_scm_ArraySeq$ofRef.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofRef;
/** @constructor */
function $h_scm_ArraySeq$ofRef() {
}
$h_scm_ArraySeq$ofRef.prototype = $p;
$p.M = (function() {
  return this.b2.a.length;
});
$p.a6 = (function(index) {
  return this.b2.a[index];
});
$p.w = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.nT(this.b2, this$1.fB);
});
$p.u = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofRef) ? $m_s_Array$().o5(this.b2, that.b2) : $c_scm_ArraySeq.prototype.u.call(this, that));
});
$p.ad = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.b2);
});
$p.h = (function(v1) {
  return this.a6((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aD)));
}
var $d_scm_ArraySeq$ofRef = new $TypeData().i($c_scm_ArraySeq$ofRef, "scala.collection.mutable.ArraySeq$ofRef", ({
  aD: 1,
  aC: 1,
  P: 1,
  y: 1,
  w: 1,
  d: 1,
  e: 1,
  q: 1,
  p: 1,
  o: 1,
  h: 1,
  v: 1,
  s: 1,
  b: 1,
  l: 1,
  T: 1,
  B: 1,
  Q: 1,
  V: 1,
  U: 1,
  x: 1,
  n: 1,
  S: 1,
  R: 1,
  z: 1,
  A: 1,
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
$p.J = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 0;
});
$p.H = (function() {
  return "Nil";
});
$p.o = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
});
$p.iP = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list");
});
$p.i7 = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$p.aj = (function() {
  return 0;
});
$p.ad = (function() {
  return $m_sc_Iterator$().bg;
});
$p.kt = (function() {
  this.iP();
});
$p.kB = (function() {
  this.i7();
});
var $d_sci_Nil$ = new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  co: 1,
  aA: 1,
  N: 1,
  y: 1,
  w: 1,
  d: 1,
  e: 1,
  q: 1,
  p: 1,
  o: 1,
  h: 1,
  v: 1,
  s: 1,
  b: 1,
  l: 1,
  G: 1,
  I: 1,
  H: 1,
  c9: 1,
  M: 1,
  cm: 1,
  cl: 1,
  z: 1,
  A: 1,
  cd: 1,
  J: 1,
  a: 1,
  ch: 1,
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
  $thiz.bh = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, new $c_jl_StringBuilder());
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.bh = null;
}
$p = $c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
$h_scm_StringBuilder.prototype = $p;
$p.ad = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.bU = (function(len) {
  var x = this.bh.M();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.bV = (function() {
  return "IndexedSeq";
});
$p.M = (function() {
  return this.bh.M();
});
$p.aj = (function() {
  return this.bh.M();
});
$p.r = (function() {
  return this.bh.aq;
});
$p.ac = (function() {
  return (this.bh.M() === 0);
});
$p.a6 = (function(i) {
  return $bC(this.bh.nV(i));
});
$p.h = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.bh.nV(i));
});
var $d_scm_StringBuilder = new $TypeData().i($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  cy: 1,
  P: 1,
  y: 1,
  w: 1,
  d: 1,
  e: 1,
  q: 1,
  p: 1,
  o: 1,
  h: 1,
  v: 1,
  s: 1,
  b: 1,
  l: 1,
  T: 1,
  B: 1,
  Q: 1,
  V: 1,
  U: 1,
  aF: 1,
  aG: 1,
  aE: 1,
  cw: 1,
  x: 1,
  n: 1,
  S: 1,
  R: 1,
  L: 1,
  a: 1
}));
/** @constructor */
function $c_sjs_js_WrappedArray(array) {
  this.gj = null;
  this.gj = array;
}
$p = $c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
}
$h_sjs_js_WrappedArray.prototype = $p;
$p.bV = (function() {
  return "IndexedSeq";
});
$p.ad = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.bU = (function(len) {
  var x = (this.gj.length | 0);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.a6 = (function(index) {
  return this.gj[index];
});
$p.M = (function() {
  return (this.gj.length | 0);
});
$p.aj = (function() {
  return (this.gj.length | 0);
});
$p.fQ = (function() {
  return "WrappedArray";
});
$p.h = (function(v1) {
  var index = (v1 | 0);
  return this.gj[index];
});
var $d_sjs_js_WrappedArray = new $TypeData().i($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
  d9: 1,
  cs: 1,
  P: 1,
  y: 1,
  w: 1,
  d: 1,
  e: 1,
  q: 1,
  p: 1,
  o: 1,
  h: 1,
  v: 1,
  s: 1,
  b: 1,
  l: 1,
  T: 1,
  B: 1,
  Q: 1,
  V: 1,
  U: 1,
  aF: 1,
  aG: 1,
  cx: 1,
  cu: 1,
  A: 1,
  z: 1,
  R: 1,
  x: 1,
  n: 1,
  S: 1,
  cv: 1,
  aE: 1,
  a: 1
}));
let $e_sketch = (function(arg) {
  $m_Lsketches_templates_openspace_OpenSpace$package$().qW(arg);
});
export { $e_sketch as sketch };
