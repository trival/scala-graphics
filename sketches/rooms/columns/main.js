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
  return (arg0.$classData.Z ? arg0.ak() : $objectClone(arg0));
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
        return null.n6();
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
        return instance.n(x0);
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__equals__O__Z(instance.l, instance.h, x0);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__equals__O__Z(instance.c, x0);
      } else {
        return $c_O.prototype.n.call(instance, x0);
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
        return instance.r();
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__hashCode__I(instance.l, instance.h);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I(instance.c);
      } else {
        return $c_O.prototype.r.call(instance);
      }
    }
  }
}
function $dp_indexOf__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__indexOf__I__I(instance, x0);
  } else {
    return instance.n7(x0);
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
$p.r = (function() {
  return $systemIdentityHashCode(this);
});
$p.n = (function(that) {
  return (this === that);
});
$p.l = (function() {
  var i = this.r();
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.toString = (function() {
  return this.l();
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
$p.a7 = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.ak = (function() {
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
$p.a7 = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.ak = (function() {
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
$p.a7 = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.ak = (function() {
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
$p.a7 = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.ak = (function() {
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
$p.a7 = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.ak = (function() {
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
$p.a7 = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.ak = (function() {
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
$p.a7 = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray((srcPos << 1), (((srcPos + length) | 0) << 1)), (destPos << 1));
});
$p.ak = (function() {
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
$p.a7 = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.ak = (function() {
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
$p.a7 = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.ak = (function() {
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
  $p.a7 = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
  });
  $p.ak = (function() {
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
  b4: 1
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
$p.gi = (function(array) {
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
  b5: 1
}));
var $n_jl_reflect_Array$;
function $m_jl_reflect_Array$() {
  if ((!$n_jl_reflect_Array$)) {
    $n_jl_reflect_Array$ = new $c_jl_reflect_Array$();
  }
  return $n_jl_reflect_Array$;
}
function $s_RTLong__remainderUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().mC(alo, ahi, blo, bhi);
}
function $s_RTLong__remainder__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().mB(alo, ahi, blo, bhi);
}
function $s_RTLong__divideUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().lu(alo, ahi, blo, bhi);
}
function $s_RTLong__divide__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().lt(alo, ahi, blo, bhi);
}
function $s_RTLong__fromDoubleBits__D__O__J(value, fpBitsDataView) {
  fpBitsDataView.setFloat64(0, value, true);
  var lo = (fpBitsDataView.getInt32(0, true) | 0);
  var hi = (fpBitsDataView.getInt32(4, true) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__fromDouble__D__J(value) {
  return $m_RTLong$().kv(value);
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
  return $m_RTLong$().kP(lo, hi);
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
$p.kP = (function(lo, hi) {
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
$p.kv = (function(value) {
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
$p.lt = (function(alo, ahi, blo, bhi) {
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
$p.lu = (function(alo, ahi, blo, bhi) {
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
$p.mB = (function(alo, ahi, blo, bhi) {
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
$p.mC = (function(alo, ahi, blo, bhi) {
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
  b7: 1
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
$p.ks = (function(xs, ys) {
  if ((xs === ys)) {
    return true;
  }
  if ((xs.a.length !== ys.a.length)) {
    return false;
  }
  var len = xs.a.length;
  var i = 0;
  while ((i < len)) {
    if ((!$m_sr_BoxesRunTime$().b(xs.a[i], ys.a[i]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
var $d_s_Array$ = new $TypeData().i($c_s_Array$, "scala.Array$", ({
  b8: 1
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
  var it = $thiz.P();
  while (it.C()) {
    f.H(it.B());
  }
}
function $f_sc_IterableOnceOps__copyToArray__O__I__I__I($thiz, dest, start, n) {
  var it = $thiz.P();
  var i = start;
  matchResult18: {
    var srclen;
    var x31 = $thiz.V();
    if ((x31 === (-1))) {
      var srclen = $m_jl_reflect_Array$().gi(dest);
      break matchResult18;
    }
    var srclen = x31;
  }
  var destLen = $m_jl_reflect_Array$().gi(dest);
  var limit = ((n < srclen) ? n : srclen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var end = ((start + ((total < 0) ? 0 : total)) | 0);
  while (((i < end) && it.C())) {
    $m_sr_ScalaRunTime$().lf(dest, i, it.B());
    i = ((1 + i) | 0);
  }
  return ((i - start) | 0);
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  return (($thiz.V() === 0) ? (("" + start) + end) : $thiz.ke($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).am.Q);
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.am;
  if ((start.length !== 0)) {
    jsb.Q = (("" + jsb.Q) + start);
  }
  var it = $thiz.P();
  if (it.C()) {
    var obj = it.B();
    jsb.Q = (("" + jsb.Q) + obj);
    while (it.C()) {
      if ((sep.length !== 0)) {
        jsb.Q = (("" + jsb.Q) + sep);
      }
      var obj$1 = it.B();
      jsb.Q = (("" + jsb.Q) + obj$1);
    }
  }
  if ((end.length !== 0)) {
    jsb.Q = (("" + jsb.Q) + end);
  }
  return b;
}
/** @constructor */
function $c_sc_Iterator$ConcatIteratorCell(head, tail) {
  this.iY = null;
  this.fF = null;
  this.iY = head;
  this.fF = tail;
}
$p = $c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$ConcatIteratorCell;
/** @constructor */
function $h_sc_Iterator$ConcatIteratorCell() {
}
$h_sc_Iterator$ConcatIteratorCell.prototype = $p;
$p.lT = (function() {
  return this.iY.ge().P();
});
var $d_sc_Iterator$ConcatIteratorCell = new $TypeData().i($c_sc_Iterator$ConcatIteratorCell, "scala.collection.Iterator$ConcatIteratorCell", ({
  bP: 1
}));
/** @constructor */
function $c_sr_BoxesRunTime$() {
}
$p = $c_sr_BoxesRunTime$.prototype = new $h_O();
$p.constructor = $c_sr_BoxesRunTime$;
/** @constructor */
function $h_sr_BoxesRunTime$() {
}
$h_sr_BoxesRunTime$.prototype = $p;
$p.b = (function(x, y) {
  return ((x === y) || ($is_jl_Number(x) ? this.lC(x, y) : ((x instanceof $Char) ? this.lA(x, y) : ((x === null) ? (y === null) : $dp_equals__O__Z(x, y)))));
});
$p.lC = (function(xn, y) {
  if ($is_jl_Number(y)) {
    return this.lB(xn, y);
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
$p.lB = (function(xn, yn) {
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
      return (false && yn.n(x2));
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
      return (false && yn.n($bL(x3$2_$_lo, x3$2_$_hi)));
    }
  } else {
    return ((xn === null) ? (yn === null) : $dp_equals__O__Z(xn, yn));
  }
});
$p.lA = (function(xc, y) {
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
  cA: 1
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
$p.lg = (function() {
  throw new $c_jl_AssertionError("assertion failed");
});
$p.hl = (function() {
  throw $ct_jl_NullPointerException__T__(new $c_jl_NullPointerException(), "tried to cast away nullability, but value is null");
});
var $d_sr_Scala3RunTime$ = new $TypeData().i($c_sr_Scala3RunTime$, "scala.runtime.Scala3RunTime$", ({
  cC: 1
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
$p.fy = (function(xs, idx) {
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
$p.lf = (function(xs, idx, value) {
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
$p.l3 = (function(x) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(x.A(), (x.x() + "("), ",", ")");
});
$p.kR = (function(xs) {
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
  cD: 1
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
$p.m4 = (function(lv_$_lo, lv_$_hi) {
  return ((lv_$_hi === (lv_$_lo >> 31)) ? lv_$_lo : (lv_$_lo ^ lv_$_hi));
});
$p.lv = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var $x_1 = $m_RTLong$().kv(dv);
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
$p.K = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    return this.lv((+x));
  } else if ((x instanceof $Long)) {
    var $x_1 = $uJ(x);
    return this.m4($x_1.l, $x_1.h);
  } else {
    return $dp_hashCode__I(x);
  }
});
$p.m0 = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_sr_Statics$ = new $TypeData().i($c_sr_Statics$, "scala.runtime.Statics$", ({
  cF: 1
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
    return new $c_T2(x, self.eV);
  }
  if ((self instanceof $c_T2)) {
    return new $c_T3(x, self.af, self.a8);
  }
  if ((self instanceof $c_T3)) {
    return new $c_T4(x, self.aI, self.az, self.aA);
  }
  if ((self instanceof $c_T4)) {
    return new $c_T5(x, self.ec, self.aJ, self.aK, self.aL);
  }
  if ((self instanceof $c_T5)) {
    return new $c_T6(x, self.f9, self.ed, self.ee, self.ef, self.eg);
  }
  if ((self instanceof $c_T6)) {
    return new $c_T7(x, self.fa, self.eh, self.ei, self.ej, self.ek, self.el);
  }
  if ((self instanceof $c_T7)) {
    return new $c_T8(x, self.fb, self.em, self.en, self.eo, self.ep, self.eq, self.er);
  }
  if ((self instanceof $c_T8)) {
    return new $c_T9(x, self.fc, self.es, self.et, self.eu, self.ev, self.ew, self.ex, self.ey);
  }
  if ((self instanceof $c_T9)) {
    return new $c_T10(x, self.fd, self.ez, self.eA, self.eB, self.eC, self.eD, self.eE, self.eF, self.eG);
  }
  if ((self instanceof $c_T10)) {
    return new $c_T11(x, self.eW, self.b3, self.b4, self.b5, self.b6, self.b7, self.b8, self.b9, self.ba, self.b2);
  }
  if ((self instanceof $c_T11)) {
    return new $c_T12(x, self.eX, self.bd, self.be, self.bf, self.bg, self.bh, self.bi, self.bj, self.bk, self.bb, self.bc);
  }
  if ((self instanceof $c_T12)) {
    return new $c_T13(x, self.eY, self.bo, self.bp, self.bq, self.br, self.bs, self.bt, self.bu, self.bv, self.bl, self.bm, self.bn);
  }
  if ((self instanceof $c_T13)) {
    return new $c_T14(x, self.eZ, self.bA, self.bB, self.bC, self.bD, self.bE, self.bF, self.bG, self.bH, self.bw, self.bx, self.by, self.bz);
  }
  if ((self instanceof $c_T14)) {
    return new $c_T15(x, self.f0, self.bN, self.bO, self.bP, self.bQ, self.bR, self.bS, self.bT, self.bU, self.bI, self.bJ, self.bK, self.bL, self.bM);
  }
  if ((self instanceof $c_T15)) {
    return new $c_T16(x, self.f1, self.c1, self.c2, self.c3, self.c4, self.c5, self.c6, self.c7, self.c8, self.bV, self.bW, self.bX, self.bY, self.bZ, self.c0);
  }
  if ((self instanceof $c_T16)) {
    return new $c_T17(x, self.f2, self.cg, self.ch, self.ci, self.cj, self.ck, self.cl, self.cm, self.cn, self.c9, self.ca, self.cb, self.cc, self.cd, self.ce, self.cf);
  }
  if ((self instanceof $c_T17)) {
    return new $c_T18(x, self.f3, self.cw, self.cx, self.cy, self.cz, self.cA, self.cB, self.cC, self.cD, self.co, self.cp, self.cq, self.cr, self.cs, self.ct, self.cu, self.cv);
  }
  if ((self instanceof $c_T18)) {
    return new $c_T19(x, self.f4, self.cN, self.cO, self.cP, self.cQ, self.cR, self.cS, self.cT, self.cU, self.cE, self.cF, self.cG, self.cH, self.cI, self.cJ, self.cK, self.cL, self.cM);
  }
  if ((self instanceof $c_T19)) {
    return new $c_T20(x, self.f5, self.d5, self.d6, self.d7, self.d8, self.d9, self.da, self.db, self.dc, self.cV, self.cW, self.cX, self.cY, self.cZ, self.d0, self.d1, self.d2, self.d3, self.d4);
  }
  if ((self instanceof $c_T20)) {
    return new $c_T21(x, self.f6, self.dn, self.dq, self.dr, self.ds, self.dt, self.du, self.dv, self.dw, self.dd, self.de, self.df, self.dg, self.dh, self.di, self.dj, self.dk, self.dl, self.dm, self.dp);
  }
  if ((self instanceof $c_T21)) {
    return new $c_T22(x, self.f7, self.dH, self.dK, self.dL, self.dM, self.dN, self.dO, self.dP, self.dQ, self.dx, self.dy, self.dz, self.dA, self.dB, self.dC, self.dD, self.dE, self.dF, self.dG, self.dI, self.dJ);
  }
  if ((self instanceof $c_T22)) {
    return new $c_sr_TupleXXL(new $ac_O([x, self.f8, self.e1, self.e5, self.e6, self.e7, self.e8, self.e9, self.ea, self.eb, self.dR, self.dS, self.dT, self.dU, self.dV, self.dW, self.dX, self.dY, self.dZ, self.e0, self.e2, self.e3, self.e4]));
  }
  throw new $c_s_MatchError(self);
}
function $p_sr_Tuples$__xxlCons__O__sr_TupleXXL__sr_TupleXXL($thiz, x, xxl) {
  var arr = new $ac_O(((1 + xxl.s()) | 0));
  arr.a[0] = x;
  var src = xxl.J;
  var length = xxl.s();
  src.a7(0, arr, 1, length);
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
      var $x_1 = new $c_T1(self.a8);
      break matchResult34$1;
    }
    if ((self instanceof $c_T3)) {
      var $x_1 = new $c_T2(self.az, self.aA);
      break matchResult34$1;
    }
    if ((self instanceof $c_T4)) {
      var $x_1 = new $c_T3(self.aJ, self.aK, self.aL);
      break matchResult34$1;
    }
    if ((self instanceof $c_T5)) {
      var $x_1 = new $c_T4(self.ed, self.ee, self.ef, self.eg);
      break matchResult34$1;
    }
    if ((self instanceof $c_T6)) {
      var $x_1 = new $c_T5(self.eh, self.ei, self.ej, self.ek, self.el);
      break matchResult34$1;
    }
    if ((self instanceof $c_T7)) {
      var $x_1 = new $c_T6(self.em, self.en, self.eo, self.ep, self.eq, self.er);
      break matchResult34$1;
    }
    if ((self instanceof $c_T8)) {
      var $x_1 = new $c_T7(self.es, self.et, self.eu, self.ev, self.ew, self.ex, self.ey);
      break matchResult34$1;
    }
    if ((self instanceof $c_T9)) {
      var $x_1 = new $c_T8(self.ez, self.eA, self.eB, self.eC, self.eD, self.eE, self.eF, self.eG);
      break matchResult34$1;
    }
    if ((self instanceof $c_T10)) {
      var $x_1 = new $c_T9(self.b3, self.b4, self.b5, self.b6, self.b7, self.b8, self.b9, self.ba, self.b2);
      break matchResult34$1;
    }
    if ((self instanceof $c_T11)) {
      var $x_1 = new $c_T10(self.bd, self.be, self.bf, self.bg, self.bh, self.bi, self.bj, self.bk, self.bb, self.bc);
      break matchResult34$1;
    }
    if ((self instanceof $c_T12)) {
      var $x_1 = new $c_T11(self.bo, self.bp, self.bq, self.br, self.bs, self.bt, self.bu, self.bv, self.bl, self.bm, self.bn);
      break matchResult34$1;
    }
    if ((self instanceof $c_T13)) {
      var $x_1 = new $c_T12(self.bA, self.bB, self.bC, self.bD, self.bE, self.bF, self.bG, self.bH, self.bw, self.bx, self.by, self.bz);
      break matchResult34$1;
    }
    if ((self instanceof $c_T14)) {
      var $x_1 = new $c_T13(self.bN, self.bO, self.bP, self.bQ, self.bR, self.bS, self.bT, self.bU, self.bI, self.bJ, self.bK, self.bL, self.bM);
      break matchResult34$1;
    }
    if ((self instanceof $c_T15)) {
      var $x_1 = new $c_T14(self.c1, self.c2, self.c3, self.c4, self.c5, self.c6, self.c7, self.c8, self.bV, self.bW, self.bX, self.bY, self.bZ, self.c0);
      break matchResult34$1;
    }
    if ((self instanceof $c_T16)) {
      var $x_1 = new $c_T15(self.cg, self.ch, self.ci, self.cj, self.ck, self.cl, self.cm, self.cn, self.c9, self.ca, self.cb, self.cc, self.cd, self.ce, self.cf);
      break matchResult34$1;
    }
    if ((self instanceof $c_T17)) {
      var $x_1 = new $c_T16(self.cw, self.cx, self.cy, self.cz, self.cA, self.cB, self.cC, self.cD, self.co, self.cp, self.cq, self.cr, self.cs, self.ct, self.cu, self.cv);
      break matchResult34$1;
    }
    if ((self instanceof $c_T18)) {
      var $x_1 = new $c_T17(self.cN, self.cO, self.cP, self.cQ, self.cR, self.cS, self.cT, self.cU, self.cE, self.cF, self.cG, self.cH, self.cI, self.cJ, self.cK, self.cL, self.cM);
      break matchResult34$1;
    }
    if ((self instanceof $c_T19)) {
      var $x_1 = new $c_T18(self.d5, self.d6, self.d7, self.d8, self.d9, self.da, self.db, self.dc, self.cV, self.cW, self.cX, self.cY, self.cZ, self.d0, self.d1, self.d2, self.d3, self.d4);
      break matchResult34$1;
    }
    if ((self instanceof $c_T20)) {
      var $x_1 = new $c_T19(self.dn, self.dq, self.dr, self.ds, self.dt, self.du, self.dv, self.dw, self.dd, self.de, self.df, self.dg, self.dh, self.di, self.dj, self.dk, self.dl, self.dm, self.dp);
      break matchResult34$1;
    }
    if ((self instanceof $c_T21)) {
      var $x_1 = new $c_T20(self.dH, self.dK, self.dL, self.dM, self.dN, self.dO, self.dP, self.dQ, self.dx, self.dy, self.dz, self.dA, self.dB, self.dC, self.dD, self.dE, self.dF, self.dG, self.dI, self.dJ);
      break matchResult34$1;
    }
    if ((self instanceof $c_T22)) {
      var $x_1 = new $c_T21(self.e1, self.e5, self.e6, self.e7, self.e8, self.e9, self.ea, self.eb, self.dR, self.dS, self.dT, self.dU, self.dV, self.dW, self.dX, self.dY, self.dZ, self.e0, self.e2, self.e3, self.e4);
      break matchResult34$1;
    }
    throw new $c_s_MatchError(self);
  }
  return $x_1;
}
function $p_sr_Tuples$__xxlTail__sr_TupleXXL__s_Product($thiz, xxl) {
  if ((xxl.s() === 23)) {
    var elems = xxl.J;
    return new $c_T22(elems.a[1], elems.a[2], elems.a[3], elems.a[4], elems.a[5], elems.a[6], elems.a[7], elems.a[8], elems.a[9], elems.a[10], elems.a[11], elems.a[12], elems.a[13], elems.a[14], elems.a[15], elems.a[16], elems.a[17], elems.a[18], elems.a[19], elems.a[20], elems.a[21], elems.a[22]);
  } else {
    var arr$1 = new $ac_O(((xxl.J.a.length - 1) | 0));
    var src = xxl.J;
    var length = ((xxl.J.a.length - 1) | 0);
    src.a7(1, arr$1, 0, length);
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
$p.lJ = (function(xs) {
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
      return new $c_sr_TupleXXL(xs.ak());
    }
  }
});
$p.lK = (function(xs) {
  return ((xs.a.length <= 22) ? this.lJ(xs) : new $c_sr_TupleXXL(xs));
});
$p.kn = (function(x, self) {
  return ((self instanceof $c_sr_TupleXXL) ? $p_sr_Tuples$__xxlCons__O__sr_TupleXXL__sr_TupleXXL(this, x, self) : $p_sr_Tuples$__specialCaseCons__O__s_Product__s_Product(this, x, self));
});
$p.lp = (function(self, that) {
  var selfSize = $m_sr_Tuples$().kN(self);
  if ((selfSize === 0)) {
    return that;
  }
  var thatSize = $m_sr_Tuples$().kN(that);
  if ((thatSize === 0)) {
    return self;
  }
  var arr = new $ac_O(((selfSize + thatSize) | 0));
  if ((self instanceof $c_sr_TupleXXL)) {
    var src = self.J;
    src.a7(0, arr, 0, selfSize);
  } else {
    self.A().ko(arr, 0, selfSize);
  }
  if ((that instanceof $c_sr_TupleXXL)) {
    var src$1 = that.J;
    src$1.a7(0, arr, selfSize, thatSize);
  } else {
    that.A().ko(arr, selfSize, thatSize);
  }
  return this.lK(arr);
});
$p.kN = (function(self) {
  if (($m_T$package$EmptyTuple$() === self)) {
    return 0;
  }
  if ((self !== null)) {
    return self.s();
  }
  throw new $c_s_MatchError(self);
});
$p.mP = (function(self) {
  return ((self instanceof $c_sr_TupleXXL) ? $p_sr_Tuples$__xxlTail__sr_TupleXXL__s_Product(this, self) : $p_sr_Tuples$__specialCaseTail__s_Product__s_Product(this, self));
});
var $d_sr_Tuples$ = new $TypeData().i($c_sr_Tuples$, "scala.runtime.Tuples$", ({
  cG: 1
}));
var $n_sr_Tuples$;
function $m_sr_Tuples$() {
  if ((!$n_sr_Tuples$)) {
    $n_sr_Tuples$ = new $c_sr_Tuples$();
  }
  return $n_sr_Tuples$;
}
var $d_sjs_js_Any = new $TypeData().i(2, "scala.scalajs.js.Any", ({
  cH: 1
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
$p.lS = (function(this$, o, p) {
  return (!(!(p in o)));
});
var $d_sjs_js_Any$ObjectCompanionOps$ = new $TypeData().i($c_sjs_js_Any$ObjectCompanionOps$, "scala.scalajs.js.Any$ObjectCompanionOps$", ({
  cJ: 1
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
$p.kz = (function(this$, elem, from) {
  var len = (this$.length | 0);
  var i = from;
  while ((i < len)) {
    if ($m_sr_BoxesRunTime$().b(elem, this$[i])) {
      return i;
    }
    i = ((1 + i) | 0);
  }
  return (-1);
});
$p.kU = (function(this$, that) {
  var b = [];
  var len = (this$.length | 0);
  var i = 0;
  var it = that.P();
  while (((i < len) && it.C())) {
    b.push(new $c_T2(this$[i], it.B()));
    i = ((1 + i) | 0);
  }
  return b;
});
$p.kV = (function(this$) {
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
  cK: 1
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
$p.p = (function(left, right) {
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
  cL: 1
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
  this.ja = null;
  $n_sjs_js_WrappedDictionary$Cache$ = this;
  this.ja = Object.prototype.hasOwnProperty;
}
$p = $c_sjs_js_WrappedDictionary$Cache$.prototype = new $h_O();
$p.constructor = $c_sjs_js_WrappedDictionary$Cache$;
/** @constructor */
function $h_sjs_js_WrappedDictionary$Cache$() {
}
$h_sjs_js_WrappedDictionary$Cache$.prototype = $p;
var $d_sjs_js_WrappedDictionary$Cache$ = new $TypeData().i($c_sjs_js_WrappedDictionary$Cache$, "scala.scalajs.js.WrappedDictionary$Cache$", ({
  cP: 1
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
$p.kO = (function(seq) {
  if (false) {
    return seq.n2;
  } else {
    var result = [];
    seq.ku(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2$2) => (result.push(x$2$2) | 0))));
    return result;
  }
});
var $d_sjsr_Compat$ = new $TypeData().i($c_sjsr_Compat$, "scala.scalajs.runtime.Compat$", ({
  cQ: 1
}));
var $n_sjsr_Compat$;
function $m_sjsr_Compat$() {
  if ((!$n_sjsr_Compat$)) {
    $n_sjsr_Compat$ = new $c_sjsr_Compat$();
  }
  return $n_sjsr_Compat$;
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
$p.w = (function(hash, data) {
  var h = this.kI(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.kI = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.a6 = (function(hash, length) {
  return this.gz((hash ^ length));
});
$p.gz = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.D = (function(x, seed, ignorePrefix) {
  var arr = x.s();
  if ((arr === 0)) {
    return ((!ignorePrefix) ? $f_T__hashCode__I(x.x()) : seed);
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.w(h, $f_T__hashCode__I(x.x()));
    }
    var i = 0;
    while ((i < arr)) {
      h = this.w(h, $m_sr_Statics$().K(x.k(i)));
      i = ((1 + i) | 0);
    }
    return this.a6(h, arr);
  }
});
$p.ln = (function(x, seed, caseClassName) {
  var arr = x.s();
  var aye = $f_T__hashCode__I(((caseClassName !== null) ? caseClassName : x.x()));
  if ((arr === 0)) {
    return aye;
  } else {
    var h = seed;
    h = this.w(h, aye);
    var i = 0;
    while ((i < arr)) {
      h = this.w(h, $m_sr_Statics$().K(x.k(i)));
      i = ((1 + i) | 0);
    }
    return this.a6(h, arr);
  }
});
$p.mV = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.P();
  while (iterator.C()) {
    var x = iterator.B();
    var h = $m_sr_Statics$().K(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.w(h$2, a);
  h$2 = this.w(h$2, b);
  h$2 = this.kI(h$2, c);
  return this.a6(h$2, n);
});
$p.ms = (function(xs, seed) {
  var it = xs.P();
  var h = seed;
  if ((!it.C())) {
    return this.a6(h, 0);
  }
  var x0 = it.B();
  if ((!it.C())) {
    return this.a6(this.w(h, $m_sr_Statics$().K(x0)), 1);
  }
  var x1 = it.B();
  var initial = $m_sr_Statics$().K(x0);
  h = this.w(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().K(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.C()) {
    h = this.w(h, prev);
    var hash = $m_sr_Statics$().K(it.B());
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.w(h, hash);
      i = ((1 + i) | 0);
      while (it.C()) {
        h = this.w(h, $m_sr_Statics$().K(it.B()));
        i = ((1 + i) | 0);
      }
      return this.a6(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.gz(this.w(this.w(h0, rangeDiff), prev));
});
$p.kj = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().gi(a);
  switch (l) {
    case 0: {
      return this.a6(h, 0);
      break;
    }
    case 1: {
      return this.a6(this.w(h, $m_sr_Statics$().K($m_sr_ScalaRunTime$().fy(a, 0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().K($m_sr_ScalaRunTime$().fy(a, 0));
      h = this.w(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().K($m_sr_ScalaRunTime$().fy(a, 1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.w(h, prev);
        var hash = $m_sr_Statics$().K($m_sr_ScalaRunTime$().fy(a, i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.w(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.w(h, $m_sr_Statics$().K($m_sr_ScalaRunTime$().fy(a, i)));
            i = ((1 + i) | 0);
          }
          return this.a6(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.gz(this.w(this.w(h0, rangeDiff), prev));
    }
  }
});
$p.my = (function(start, step, last, seed) {
  return this.gz(this.w(this.w(this.w(seed, start), step), last));
});
$p.lV = (function(a, seed) {
  var h = seed;
  var l = a.E();
  switch (l) {
    case 0: {
      return this.a6(h, 0);
      break;
    }
    case 1: {
      return this.a6(this.w(h, $m_sr_Statics$().K(a.S(0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().K(a.S(0));
      h = this.w(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().K(a.S(1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.w(h, prev);
        var hash = $m_sr_Statics$().K(a.S(i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.w(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.w(h, $m_sr_Statics$().K(a.S(i)));
            i = ((1 + i) | 0);
          }
          return this.a6(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.gz(this.w(this.w(h0, rangeDiff), prev));
    }
  }
});
$p.m3 = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.O())) {
    elems.hk();
  }
  return ((rangeState === 2) ? this.my(initial, rangeDiff, prev, seed) : this.a6(h, n));
});
function $p_Lsketches_rooms_columns_Columns$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2($thiz, c, u, v) {
  return new $c_T2(c, new $c_Ltrivalibs_graphics_math_cpu_Vec2(u, v));
}
function $p_Lsketches_rooms_columns_Columns$package$__columnFaces$1__sjs_js_Array($thiz) {
  var box = $m_Ltrivalibs_graphics_geometry_Box$().kg(new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0), $m_Lsketches_rooms_columns_Columns$package$().fI, $m_Lsketches_rooms_columns_Columns$package$().fg, $m_Lsketches_rooms_columns_Columns$package$().fI);
  var f = ((c$2, uvw$2) => $p_Lsketches_rooms_columns_Columns$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2($thiz, c$2, uvw$2.q, uvw$2.m));
  var $x_19 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0 = box.gF;
  var x1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0);
  var $x_18 = f(x0, x1);
  var x0$1 = box.fL;
  var x1$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
  var $x_17 = f(x0$1, x1$1);
  var x0$2 = box.fM;
  var x1$2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
  var $x_16 = f(x0$2, x1$2);
  var x0$3 = box.gG;
  var x1$3 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0);
  var $x_15 = $x_19.aG($x_18, $x_17, $x_16, f(x0$3, x1$3));
  var f$1 = ((c$2$1, uvw$2$1) => $p_Lsketches_rooms_columns_Columns$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2($thiz, c$2$1, (1.0 - uvw$2$1.q), uvw$2$1.m));
  var $x_14 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0$4 = box.gE;
  var x1$4 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 1.0);
  var $x_13 = f$1(x0$4, x1$4);
  var x0$5 = box.fK;
  var x1$5 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
  var $x_12 = f$1(x0$5, x1$5);
  var x0$6 = box.fJ;
  var x1$6 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
  var $x_11 = f$1(x0$6, x1$6);
  var x0$7 = box.gD;
  var x1$7 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0);
  var $x_10 = $x_14.aG($x_13, $x_12, $x_11, f$1(x0$7, x1$7));
  var f$2 = ((c$2$2, uvw$2$2) => $p_Lsketches_rooms_columns_Columns$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2($thiz, c$2$2, (1.0 - uvw$2$2.o), uvw$2$2.m));
  var $x_9 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0$8 = box.gD;
  var x1$8 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0);
  var $x_8 = f$2(x0$8, x1$8);
  var x0$9 = box.fJ;
  var x1$9 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
  var $x_7 = f$2(x0$9, x1$9);
  var x0$10 = box.fL;
  var x1$10 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
  var $x_6 = f$2(x0$10, x1$10);
  var x0$11 = box.gF;
  var x1$11 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0);
  var $x_5 = $x_9.aG($x_8, $x_7, $x_6, f$2(x0$11, x1$11));
  var f$3 = ((c$2$3, uvw$2$3) => $p_Lsketches_rooms_columns_Columns$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2($thiz, c$2$3, uvw$2$3.o, uvw$2$3.m));
  var $x_4 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0$12 = box.gG;
  var x1$12 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0);
  var $x_3 = f$3(x0$12, x1$12);
  var x0$13 = box.fM;
  var x1$13 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
  var $x_2 = f$3(x0$13, x1$13);
  var x0$14 = box.fK;
  var x1$14 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
  var $x_1 = f$3(x0$14, x1$14);
  var x0$15 = box.gE;
  var x1$15 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 1.0);
  return [$x_15, $x_10, $x_5, $x_4.aG($x_3, $x_2, $x_1, f$3(x0$15, x1$15))];
}
function $p_Lsketches_rooms_columns_Columns$package$__balkFaces$1__sjs_js_Array($thiz) {
  var box = $m_Ltrivalibs_graphics_geometry_Box$().kg(new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0), $m_Lsketches_rooms_columns_Columns$package$().fI, $m_Lsketches_rooms_columns_Columns$package$().hs, $m_Lsketches_rooms_columns_Columns$package$().I);
  var f = ((c$2, uvw$2) => $p_Lsketches_rooms_columns_Columns$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2($thiz, c$2, (1.0 - uvw$2.o), uvw$2.m));
  var $x_14 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0 = box.gD;
  var x1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0);
  var $x_13 = f(x0, x1);
  var x0$1 = box.fJ;
  var x1$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
  var $x_12 = f(x0$1, x1$1);
  var x0$2 = box.fL;
  var x1$2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
  var $x_11 = f(x0$2, x1$2);
  var x0$3 = box.gF;
  var x1$3 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0);
  var $x_10 = $x_14.aG($x_13, $x_12, $x_11, f(x0$3, x1$3));
  var f$1 = ((c$2$1, uvw$2$1) => $p_Lsketches_rooms_columns_Columns$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2($thiz, c$2$1, uvw$2$1.o, uvw$2$1.m));
  var $x_9 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0$4 = box.gG;
  var x1$4 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0);
  var $x_8 = f$1(x0$4, x1$4);
  var x0$5 = box.fM;
  var x1$5 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
  var $x_7 = f$1(x0$5, x1$5);
  var x0$6 = box.fK;
  var x1$6 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
  var $x_6 = f$1(x0$6, x1$6);
  var x0$7 = box.gE;
  var x1$7 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 1.0);
  var $x_5 = $x_9.aG($x_8, $x_7, $x_6, f$1(x0$7, x1$7));
  var f$2 = ((c$2$2, uvw$2$2) => $p_Lsketches_rooms_columns_Columns$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2($thiz, c$2$2, uvw$2$2.q, uvw$2$2.o));
  var $x_4 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0$8 = box.fL;
  var x1$8 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
  var $x_3 = f$2(x0$8, x1$8);
  var x0$9 = box.fJ;
  var x1$9 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
  var $x_2 = f$2(x0$9, x1$9);
  var x0$10 = box.fK;
  var x1$10 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
  var $x_1 = f$2(x0$10, x1$10);
  var x0$11 = box.fM;
  var x1$11 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
  return [$x_10, $x_5, $x_4.aG($x_3, $x_2, $x_1, f$2(x0$11, x1$11))];
}
function $p_Lsketches_rooms_columns_Columns$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form($thiz, p$1, faces) {
  var mesh$proxy1 = $m_Ltrivalibs_graphics_geometry_Mesh$().lc(faces, null, 0, new $c_Ltrivalibs_graphics_geometry_package$package$$anon$1(0));
  var vl = new $c_Ltrivalibs_graphics_geometry_VertexLayout$named(new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$(), new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$(), $m_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$())));
  var f = ((v$3, n$3, ref$3) => {
    var nVal = new $c_T3(n$3.q, n$3.m, n$3.o);
    var values$proxy1 = $m_sr_Tuples$().lp(vl.jd.fB(v$3), $m_sr_Tuples$().kn(nVal, $m_T$package$EmptyTuple$()));
    var baseOffset$proxy1 = (ref$3.off | 0);
    var nestedValues = values$proxy1.k(0);
    var value = nestedValues.k(0);
    ref$3.dv.setFloat32(baseOffset$proxy1, Math.fround(value), true);
    var tailOffset = ((4 + baseOffset$proxy1) | 0);
    var value$2 = nestedValues.k(1);
    ref$3.dv.setFloat32(tailOffset, Math.fround(value$2), true);
    var tailOffset$2 = ((4 + tailOffset) | 0);
    var value$3 = nestedValues.k(2);
    ref$3.dv.setFloat32(tailOffset$2, Math.fround(value$3), true);
    var tailOffset$4 = ((12 + baseOffset$proxy1) | 0);
    var nestedValues$2 = values$proxy1.k(1);
    var value$4 = nestedValues$2.k(0);
    ref$3.dv.setFloat32(tailOffset$4, Math.fround(value$4), true);
    var tailOffset$5 = ((4 + tailOffset$4) | 0);
    var value$5 = nestedValues$2.k(1);
    ref$3.dv.setFloat32(tailOffset$5, Math.fround(value$5), true);
    var tailOffset$7 = ((8 + tailOffset$4) | 0);
    var nestedValues$3 = values$proxy1.k(2);
    var value$6 = nestedValues$3.k(0);
    ref$3.dv.setFloat32(tailOffset$7, Math.fround(value$6), true);
    var tailOffset$8 = ((4 + tailOffset$7) | 0);
    var value$7 = nestedValues$3.k(1);
    ref$3.dv.setFloat32(tailOffset$8, Math.fround(value$7), true);
    var tailOffset$9 = ((4 + tailOffset$8) | 0);
    var value$8 = nestedValues$3.k(2);
    ref$3.dv.setFloat32(tailOffset$9, Math.fround(value$8), true);
  });
  var \u03b4proxy2 = $m_Ltrivalibs_graphics_geometry_buffers$package$();
  mesh$proxy1.lx();
  var vertexCount = 0;
  var hasQuads = false;
  var fi = 0;
  while ((fi < (mesh$proxy1.a3.length | 0))) {
    var n = (mesh$proxy1.a3[fi].length | 0);
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
    while ((fi < (mesh$proxy1.a3.length | 0))) {
      var arr = mesh$proxy1.a3[fi];
      var opt$proxy1 = mesh$proxy1.fi[fi].fN;
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
    while ((fi < (mesh$proxy1.a3.length | 0))) {
      var arr$2 = mesh$proxy1.a3[fi];
      var n$2 = (arr$2.length | 0);
      var opt$proxy2 = mesh$proxy1.fi[fi].fN;
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
    var $x_1 = new $c_Ltrivalibs_graphics_geometry_BufferedGeometry(verts, \u03b4proxy2.mj(idxBuf, vertexCount));
  }
  return p$1.lH($x_1, (void 0), (void 0), (void 0), (void 0), (void 0));
}
/** @constructor */
function $c_Lsketches_rooms_columns_Columns$package$() {
  this.I = 0.0;
  this.fg = 0.0;
  this.fI = 0.0;
  this.hs = 0.0;
  this.Z = 0;
  this.Y = 0;
  $n_Lsketches_rooms_columns_Columns$package$ = this;
  this.I = 12.0;
  this.fg = 40.0;
  this.fI = 2.0;
  this.hs = (3.4 * $m_Lsketches_rooms_columns_Columns$package$().fI);
  this.Z = 8;
  this.Y = 4;
}
$p = $c_Lsketches_rooms_columns_Columns$package$.prototype = new $h_O();
$p.constructor = $c_Lsketches_rooms_columns_Columns$package$;
/** @constructor */
function $h_Lsketches_rooms_columns_Columns$package$() {
}
$h_Lsketches_rooms_columns_Columns$package$.prototype = $p;
$p.mF = (function(canvas) {
  $m_Ltrivalibs_graphics_painter_Painter$().lW(canvas, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((p$3) => {
    var n$proxy1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
    var center$proxy1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0);
    var f = ((pos$2, uv$2) => $p_Lsketches_rooms_columns_Columns$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2(this, pos$2, uv$2.fj, uv$2.fk));
    var uvAtPivot = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.5, 0.5);
    var n = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), n$proxy1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
    var x = n.m;
    if (((+Math.abs(x)) > 0.999)) {
      var up = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
    } else {
      var up = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
    }
    var tangent = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), up, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), n);
    var n$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), n, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
    var uDir = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), tangent, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), n$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D($m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), n$1, tangent))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
    var uVec = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), uDir, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), 200.0);
    var vVec = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), n$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uDir), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$()), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), 200.0);
    var tlPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), center$proxy1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), uVec, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uvAtPivot.fj)), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), vVec, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uvAtPivot.fk));
    var trPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), tlPos, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uVec);
    var blPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), tlPos, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), vVec);
    var brPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), blPos, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uVec);
    var $x_4 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
    var x1 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 0.0);
    var $x_3 = f(tlPos, x1);
    var x1$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 1.0);
    var $x_2 = f(blPos, x1$1);
    var x1$2 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 1.0);
    var $x_1 = f(brPos, x1$2);
    var x1$3 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 0.0);
    var groundFaces = [$x_4.aG($x_3, $x_2, $x_1, f(trPos, x1$3))];
    var n$proxy2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0);
    var center$proxy2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, (0.5 * $m_Lsketches_rooms_columns_Columns$package$().fg), 0.0);
    var f$1 = ((pos$2$1, uv$2$1) => $p_Lsketches_rooms_columns_Columns$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2(this, pos$2$1, uv$2$1.fj, uv$2$1.fk));
    var width = $m_Lsketches_rooms_columns_Columns$package$().I;
    var height = $m_Lsketches_rooms_columns_Columns$package$().fg;
    var uvAtPivot$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.5, 0.5);
    var n$2 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), n$proxy2, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
    var x$1 = n$2.m;
    if (((+Math.abs(x$1)) > 0.999)) {
      var up$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
    } else {
      var up$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
    }
    var tangent$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), up$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), n$2);
    var n$3 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), n$2, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
    var uDir$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), tangent$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), n$3, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D($m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), n$3, tangent$1))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
    var uVec$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), uDir$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), width);
    var vVec$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), n$3, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uDir$1), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$()), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), height);
    var tlPos$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), center$proxy2, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), uVec$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uvAtPivot$1.fj)), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), vVec$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uvAtPivot$1.fk));
    var trPos$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), tlPos$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uVec$1);
    var blPos$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), tlPos$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), vVec$1);
    var brPos$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), blPos$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uVec$1);
    var $x_8 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
    var x1$4 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 0.0);
    var $x_7 = f$1(tlPos$1, x1$4);
    var x1$5 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 1.0);
    var $x_6 = f$1(blPos$1, x1$5);
    var x1$6 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 1.0);
    var $x_5 = f$1(brPos$1, x1$6);
    var x1$7 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 0.0);
    var wallFaces = [$x_8.aG($x_7, $x_6, $x_5, f$1(trPos$1, x1$7))];
    var groundForm = $p_Lsketches_rooms_columns_Columns$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$3, groundFaces);
    var wallForm = $p_Lsketches_rooms_columns_Columns$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$3, wallFaces);
    var columnForm = $p_Lsketches_rooms_columns_Columns$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$3, $p_Lsketches_rooms_columns_Columns$package$__columnFaces$1__sjs_js_Array(this));
    var balkForm = $p_Lsketches_rooms_columns_Columns$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$3, $p_Lsketches_rooms_columns_Columns$package$__balkFaces$1__sjs_js_Array(this));
    var program = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    var ctx = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().eO;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().eO = reg;
    try {
      var AssignTarget_this = ctx.he.jY;
      var value$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().mY($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().ml(ctx.hc.ay("viewProj"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().kx(), ctx.hc.ay("model")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().kx(), $m_Ltrivalibs_graphics_math_gpu_vec4$().kh(ctx.hd.ay("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fz().H(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$());
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var x0 = (((("  " + AssignTarget_this.g4) + " = ") + value$proxy1.u) + ";");
      var AssignTarget_this$2 = ctx.he.hm("normal");
      var value$proxy2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$().mX(ctx.hc.ay("normalMat"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().lQ(), ctx.hd.ay("normal"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$());
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var x1$8 = (((("  " + AssignTarget_this$2.g4) + " = ") + value$proxy2.u) + ";");
      var AssignTarget_this$3 = ctx.he.hm("uv");
      var value$proxy3 = ctx.hd.ay("uv");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var x2 = (((("  " + AssignTarget_this$3.g4) + " = ") + value$proxy3.u) + ";");
      var array = [x0, x1$8, x2];
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
      var $x_9 = out.join("\n");
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().eO = prev;
    }
    program.ib = $x_9;
    var array$1 = reg.i7;
    var len = (array$1.length | 0);
    var i$1 = 0;
    while ((i$1 < len)) {
      $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$1[i$1]);
      i$1 = ((1 + i$1) | 0);
    }
    var ctx$2 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().eO;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().eO = reg$2;
    try {
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var uv = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("uv");
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var col = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("col");
      var x0$2 = uv.kd($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().lI($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().l2(ctx$2.g5.ay("uv"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), 40.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$()));
      var onFalse = $m_Ltrivalibs_graphics_math_gpu_vec3$().ld($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().kS(ctx$2.g5.ay("uv")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().kT(ctx$2.g5.ay("uv")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fz().H(0.5));
      var onTrue = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().lF(ctx$2.g5.ay("normal"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$());
      var a = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().kS(uv);
      var b = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fz().H(0.2);
      var cond = $m_Ltrivalibs_graphics_math_gpu_expr$package$().kt(a, b);
      var a$1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().kT(uv);
      var b$1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fz().H(0.2);
      var other$6 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().kt(a$1, b$1);
      var cond$1 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().lk(cond, other$6);
      var x1$9 = col.kd($m_Ltrivalibs_graphics_math_gpu_expr$package$().mG(onFalse, onTrue, cond$1));
      var AssignTarget_this$1 = ctx$2.jX.hm("color");
      var value$proxy4 = $m_Ltrivalibs_graphics_math_gpu_vec4$().kh(col, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fz().H(1.0));
      $m_Ltrivalibs_graphics_math_gpu_expr$package$();
      var x2$1 = (((("  " + AssignTarget_this$1.g4) + " = ") + value$proxy4.u) + ";");
      var array$2 = [x0$2, x1$9, x2$1];
      var out$1 = [];
      var i$2 = 0;
      while ((i$2 < (array$2.length | 0))) {
        var idx$1 = i$2;
        var p$1 = array$2[idx$1];
        if ((p$1.length > 0)) {
          out$1.push(p$1);
        }
        i$2 = ((1 + i$2) | 0);
      }
      var $x_10 = out$1.join("\n");
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().eO = prev$2;
    }
    program.ia = $x_10;
    var array$3 = reg$2.i7;
    var len$1 = (array$3.length | 0);
    var i$3 = 0;
    while ((i$3 < len$1)) {
      $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$3[i$3]);
      i$3 = ((1 + i$3) | 0);
    }
    var b$2 = program.ib;
    var b$3 = program.ia;
    var helperFns$proxy1 = program.lU();
    var id = p$3.h0;
    p$3.h0 = ((1 + p$3.h0) | 0);
    var names = $m_sjs_js_ArrayOpsCommon$().p(["model"], $m_sjs_js_ArrayOpsCommon$().p(["normalMat"], $m_sjs_js_ArrayOpsCommon$().p(["viewProj"], [])));
    var dict = ({});
    var i$4 = 0;
    while ((i$4 < (names.length | 0))) {
      dict[names[i$4]] = i$4;
      i$4 = ((1 + i$4) | 0);
    }
    var names$2 = [];
    var dict$2 = ({});
    var i$2$1 = 0;
    while ((i$2$1 < (names$2.length | 0))) {
      dict$2[names$2[i$2$1]] = i$2$1;
      i$2$1 = ((1 + i$2$1) | 0);
    }
    var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$2, b$3, helperFns$proxy1);
    var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().p(["position"], $m_sjs_js_ArrayOpsCommon$().p(["uv"], $m_sjs_js_ArrayOpsCommon$().p(["normal"], []))), $m_sjs_js_ArrayOpsCommon$().p(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().p(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().p(["vec3<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().p([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().p([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().p(["uv"], $m_sjs_js_ArrayOpsCommon$().p(["normal"], [])), $m_sjs_js_ArrayOpsCommon$().p(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().p(["vec3<f32>"], [])), $m_sjs_js_ArrayOpsCommon$().p([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().p(["color"], []), $m_sjs_js_ArrayOpsCommon$().p(["vec4<f32>"], []), []);
    var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().p(["model"], $m_sjs_js_ArrayOpsCommon$().p(["normalMat"], $m_sjs_js_ArrayOpsCommon$().p(["viewProj"], []))), $m_sjs_js_ArrayOpsCommon$().p([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).g3.fC()], $m_sjs_js_ArrayOpsCommon$().p([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$()).g3.fC()], $m_sjs_js_ArrayOpsCommon$().p([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).g3.fC()], []))));
    var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().p([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.g2, sd.g0, fragBuiltinParams);
    var args$proxy1 = $m_sr_ScalaRunTime$().kR(new ($d_sjs_js_Any.r().C)([baseWgsl]));
    console.log(...$m_sjsr_Compat$().kO(args$proxy1));
    var module = p$3.e.createShaderModule(({
      "code": baseWgsl
    }));
    var formats = $m_sjs_js_ArrayOpsCommon$().p(["float32x3"], $m_sjs_js_ArrayOpsCommon$().p(["float32x2"], $m_sjs_js_ArrayOpsCommon$().p(["float32x3"], [])));
    var sizes = $m_sjs_js_ArrayOpsCommon$().p([12], $m_sjs_js_ArrayOpsCommon$().p([8], $m_sjs_js_ArrayOpsCommon$().p([12], [])));
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
    var $x_14 = $m_sjs_js_ArrayOpsCommon$();
    var $x_13 = $m_sjs_js_ArrayOpsCommon$();
    var _2 = ({
      "type": "uniform"
    });
    var $x_12 = $m_sjs_js_ArrayOpsCommon$();
    var _2$1 = ({
      "type": "uniform"
    });
    var $x_11 = $m_sjs_js_ArrayOpsCommon$();
    var _2$2 = ({
      "type": "uniform"
    });
    var descriptors = $x_14.p([$x_13.p([({
      "binding": 0,
      "visibility": 1,
      "buffer": _2
    })], $x_12.p([({
      "binding": 1,
      "visibility": 1,
      "buffer": _2$1
    })], $x_11.p([({
      "binding": 2,
      "visibility": 1,
      "buffer": _2$2
    })], [])))], []);
    var result = [];
    var len$2 = (descriptors.length | 0);
    var i$5 = 0;
    while ((i$5 < len$2)) {
      var x0$4 = descriptors[i$5];
      (result.push(p$3.e.createBindGroupLayout(({
        "entries": x0$4
      }))) | 0);
      i$5 = ((1 + i$5) | 0);
    }
    var \u03b42$___1 = result;
    var \u03b42$___2 = $m_Ltrivalibs_graphics_shader_layouts$().kp(p$3.e, result);
    var bgls$2 = \u03b42$___1;
    var pl = $m_Ltrivalibs_graphics_shader_layouts$().kp(p$3.e, bgls$2);
    var shade = new $c_Ltrivalibs_graphics_painter_Shade(id, module, vbl, bgls$2[0], null, pl, false, dict, dict$2);
    var identityMat = new $c_Ltrivalibs_graphics_math_cpu_Mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0);
    var identityN = $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().W(identityMat);
    var Bindable_this = p$3.hn(groundForm, shade, (void 0), (void 0));
    var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("model", identityMat);
    var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", identityN);
    var \u03b4scrutinee110 = e1$proxy1.v;
    var idx$2 = (Bindable_this.ac.t.model | 0);
    var existing = ((idx$2 < (Bindable_this.a0.length | 0)) ? Bindable_this.a0[idx$2] : null);
    var device$proxy1 = Bindable_this.i4.e;
    if ((existing !== null)) {
      existing.h.i(existing.d, \u03b4scrutinee110);
      var $x_17 = existing.g.queue;
      var $x_16 = existing.f;
      var s$proxy2 = existing.d;
      var $x_15 = s$proxy2.dv.buffer;
      $x_17.writeBuffer($x_16, 0.0, $x_15);
      var bb = existing;
    } else {
      var uv$1 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
      var buffer = new ArrayBuffer(64);
      var arr$proxy6 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
      var b$4 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy6.dv, 0), device$proxy1, uv$1);
      b$4.h.i(b$4.d, \u03b4scrutinee110);
      var $x_20 = b$4.g.queue;
      var $x_19 = b$4.f;
      var s$proxy3 = b$4.d;
      var $x_18 = s$proxy3.dv.buffer;
      $x_20.writeBuffer($x_19, 0.0, $x_18);
      var bb = b$4;
    }
    while (((Bindable_this.a0.length | 0) <= idx$2)) {
      Bindable_this.a0.push(null);
    }
    Bindable_this.a0[idx$2] = bb;
    var \u03b4scrutinee125 = e2$proxy1.v;
    var idx$2$1 = (Bindable_this.ac.t.normalMat | 0);
    var existing$2 = ((idx$2$1 < (Bindable_this.a0.length | 0)) ? Bindable_this.a0[idx$2$1] : null);
    var device$proxy2 = Bindable_this.i4.e;
    if ((existing$2 !== null)) {
      existing$2.h.i(existing$2.d, \u03b4scrutinee125);
      var $x_23 = existing$2.g.queue;
      var $x_22 = existing$2.f;
      var s$proxy4 = existing$2.d;
      var $x_21 = s$proxy4.dv.buffer;
      $x_23.writeBuffer($x_22, 0.0, $x_21);
      var bb$2 = existing$2;
    } else {
      var uv$2$2 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
      var buffer$2 = new ArrayBuffer(48);
      var arr$proxy7 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
      var b$2$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy7.dv, 0), device$proxy2, uv$2$2);
      b$2$1.h.i(b$2$1.d, \u03b4scrutinee125);
      var $x_26 = b$2$1.g.queue;
      var $x_25 = b$2$1.f;
      var s$proxy5 = b$2$1.d;
      var $x_24 = s$proxy5.dv.buffer;
      $x_26.writeBuffer($x_25, 0.0, $x_24);
      var bb$2 = b$2$1;
    }
    while (((Bindable_this.a0.length | 0) <= idx$2$1)) {
      Bindable_this.a0.push(null);
    }
    Bindable_this.a0[idx$2$1] = bb$2;
    var columnShape = p$3.hn(columnForm, shade, (void 0), (void 0));
    var balkShape = p$3.hn(balkForm, shade, (void 0), (void 0));
    var wallShape = p$3.hn(wallForm, shade, (void 0), (void 0));
    var colY = (0.5 * $m_Lsketches_rooms_columns_Columns$package$().fg);
    var iz = ((-$m_Lsketches_rooms_columns_Columns$package$().Z) | 0);
    while ((iz <= $m_Lsketches_rooms_columns_Columns$package$().Z)) {
      var z = (iz * $m_Lsketches_rooms_columns_Columns$package$().I);
      var x$proxy2 = (((-$m_Lsketches_rooms_columns_Columns$package$().Y) | 0) * $m_Lsketches_rooms_columns_Columns$package$().I);
      var m = new $c_Ltrivalibs_graphics_math_cpu_Mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, x$proxy2, colY, z, 1.0);
      var InstanceList_this = columnShape.M;
      var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m);
      var e2$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().W(m));
      var i$4$1 = InstanceList_this.a1();
      var Bindable_this$6 = InstanceList_this.F[i$4$1];
      var \u03b4scrutinee142 = e1$proxy2.v;
      var idx$3 = (Bindable_this$6.z.t.model | 0);
      var existing$3 = ((idx$3 < (Bindable_this$6.c.length | 0)) ? Bindable_this$6.c[idx$3] : null);
      var device$proxy3 = Bindable_this$6.y.e;
      if ((existing$3 !== null)) {
        existing$3.h.i(existing$3.d, \u03b4scrutinee142);
        var $x_29 = existing$3.g.queue;
        var $x_28 = existing$3.f;
        var s$proxy6 = existing$3.d;
        var $x_27 = s$proxy6.dv.buffer;
        $x_29.writeBuffer($x_28, 0.0, $x_27);
        var bb$3 = existing$3;
      } else {
        var uv$3 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
        var buffer$3 = new ArrayBuffer(64);
        var arr$proxy8 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$3), 1);
        var b$3$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy8.dv, 0), device$proxy3, uv$3);
        b$3$1.h.i(b$3$1.d, \u03b4scrutinee142);
        var $x_32 = b$3$1.g.queue;
        var $x_31 = b$3$1.f;
        var s$proxy7 = b$3$1.d;
        var $x_30 = s$proxy7.dv.buffer;
        $x_32.writeBuffer($x_31, 0.0, $x_30);
        var bb$3 = b$3$1;
      }
      while (((Bindable_this$6.c.length | 0) <= idx$3)) {
        Bindable_this$6.c.push(null);
      }
      Bindable_this$6.c[idx$3] = bb$3;
      var \u03b4scrutinee157 = e2$proxy2.v;
      var idx$4 = (Bindable_this$6.z.t.normalMat | 0);
      var existing$4 = ((idx$4 < (Bindable_this$6.c.length | 0)) ? Bindable_this$6.c[idx$4] : null);
      var device$proxy4 = Bindable_this$6.y.e;
      if ((existing$4 !== null)) {
        existing$4.h.i(existing$4.d, \u03b4scrutinee157);
        var $x_35 = existing$4.g.queue;
        var $x_34 = existing$4.f;
        var s$proxy8 = existing$4.d;
        var $x_33 = s$proxy8.dv.buffer;
        $x_35.writeBuffer($x_34, 0.0, $x_33);
        var bb$4 = existing$4;
      } else {
        var uv$4 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
        var buffer$4 = new ArrayBuffer(48);
        var arr$proxy9 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$4), 1);
        var b$4$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy9.dv, 0), device$proxy4, uv$4);
        b$4$1.h.i(b$4$1.d, \u03b4scrutinee157);
        var $x_38 = b$4$1.g.queue;
        var $x_37 = b$4$1.f;
        var s$proxy9 = b$4$1.d;
        var $x_36 = s$proxy9.dv.buffer;
        $x_38.writeBuffer($x_37, 0.0, $x_36);
        var bb$4 = b$4$1;
      }
      while (((Bindable_this$6.c.length | 0) <= idx$4)) {
        Bindable_this$6.c.push(null);
      }
      Bindable_this$6.c[idx$4] = bb$4;
      var x$proxy3 = ($m_Lsketches_rooms_columns_Columns$package$().Y * $m_Lsketches_rooms_columns_Columns$package$().I);
      var m$2 = new $c_Ltrivalibs_graphics_math_cpu_Mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, x$proxy3, colY, z, 1.0);
      var InstanceList_this$2 = columnShape.M;
      var e1$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$2);
      var e2$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().W(m$2));
      var i$5$1 = InstanceList_this$2.a1();
      var Bindable_this$11 = InstanceList_this$2.F[i$5$1];
      var \u03b4scrutinee174 = e1$proxy3.v;
      var idx$5 = (Bindable_this$11.z.t.model | 0);
      var existing$5 = ((idx$5 < (Bindable_this$11.c.length | 0)) ? Bindable_this$11.c[idx$5] : null);
      var device$proxy5 = Bindable_this$11.y.e;
      if ((existing$5 !== null)) {
        existing$5.h.i(existing$5.d, \u03b4scrutinee174);
        var $x_41 = existing$5.g.queue;
        var $x_40 = existing$5.f;
        var s$proxy10 = existing$5.d;
        var $x_39 = s$proxy10.dv.buffer;
        $x_41.writeBuffer($x_40, 0.0, $x_39);
        var bb$5 = existing$5;
      } else {
        var uv$5 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
        var buffer$5 = new ArrayBuffer(64);
        var arr$proxy10 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$5), 1);
        var b$5 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy10.dv, 0), device$proxy5, uv$5);
        b$5.h.i(b$5.d, \u03b4scrutinee174);
        var $x_44 = b$5.g.queue;
        var $x_43 = b$5.f;
        var s$proxy11 = b$5.d;
        var $x_42 = s$proxy11.dv.buffer;
        $x_44.writeBuffer($x_43, 0.0, $x_42);
        var bb$5 = b$5;
      }
      while (((Bindable_this$11.c.length | 0) <= idx$5)) {
        Bindable_this$11.c.push(null);
      }
      Bindable_this$11.c[idx$5] = bb$5;
      var \u03b4scrutinee189 = e2$proxy3.v;
      var idx$6 = (Bindable_this$11.z.t.normalMat | 0);
      var existing$6 = ((idx$6 < (Bindable_this$11.c.length | 0)) ? Bindable_this$11.c[idx$6] : null);
      var device$proxy6 = Bindable_this$11.y.e;
      if ((existing$6 !== null)) {
        existing$6.h.i(existing$6.d, \u03b4scrutinee189);
        var $x_47 = existing$6.g.queue;
        var $x_46 = existing$6.f;
        var s$proxy12 = existing$6.d;
        var $x_45 = s$proxy12.dv.buffer;
        $x_47.writeBuffer($x_46, 0.0, $x_45);
        var bb$6 = existing$6;
      } else {
        var uv$6 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
        var buffer$6 = new ArrayBuffer(48);
        var arr$proxy11 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$6), 1);
        var b$6 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy11.dv, 0), device$proxy6, uv$6);
        b$6.h.i(b$6.d, \u03b4scrutinee189);
        var $x_50 = b$6.g.queue;
        var $x_49 = b$6.f;
        var s$proxy13 = b$6.d;
        var $x_48 = s$proxy13.dv.buffer;
        $x_50.writeBuffer($x_49, 0.0, $x_48);
        var bb$6 = b$6;
      }
      while (((Bindable_this$11.c.length | 0) <= idx$6)) {
        Bindable_this$11.c.push(null);
      }
      Bindable_this$11.c[idx$6] = bb$6;
      var x$proxy4 = (((1 - $m_Lsketches_rooms_columns_Columns$package$().Y) | 0) * $m_Lsketches_rooms_columns_Columns$package$().I);
      var m$3 = new $c_Ltrivalibs_graphics_math_cpu_Mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, x$proxy4, colY, z, 1.0);
      var InstanceList_this$3 = columnShape.M;
      var e1$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$3);
      var e2$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().W(m$3));
      var i$6 = InstanceList_this$3.a1();
      var Bindable_this$16 = InstanceList_this$3.F[i$6];
      var \u03b4scrutinee206 = e1$proxy4.v;
      var idx$7 = (Bindable_this$16.z.t.model | 0);
      var existing$7 = ((idx$7 < (Bindable_this$16.c.length | 0)) ? Bindable_this$16.c[idx$7] : null);
      var device$proxy7 = Bindable_this$16.y.e;
      if ((existing$7 !== null)) {
        existing$7.h.i(existing$7.d, \u03b4scrutinee206);
        var $x_53 = existing$7.g.queue;
        var $x_52 = existing$7.f;
        var s$proxy14 = existing$7.d;
        var $x_51 = s$proxy14.dv.buffer;
        $x_53.writeBuffer($x_52, 0.0, $x_51);
        var bb$7 = existing$7;
      } else {
        var uv$7 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
        var buffer$7 = new ArrayBuffer(64);
        var arr$proxy12 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$7), 1);
        var b$7 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy12.dv, 0), device$proxy7, uv$7);
        b$7.h.i(b$7.d, \u03b4scrutinee206);
        var $x_56 = b$7.g.queue;
        var $x_55 = b$7.f;
        var s$proxy15 = b$7.d;
        var $x_54 = s$proxy15.dv.buffer;
        $x_56.writeBuffer($x_55, 0.0, $x_54);
        var bb$7 = b$7;
      }
      while (((Bindable_this$16.c.length | 0) <= idx$7)) {
        Bindable_this$16.c.push(null);
      }
      Bindable_this$16.c[idx$7] = bb$7;
      var \u03b4scrutinee221 = e2$proxy4.v;
      var idx$8 = (Bindable_this$16.z.t.normalMat | 0);
      var existing$8 = ((idx$8 < (Bindable_this$16.c.length | 0)) ? Bindable_this$16.c[idx$8] : null);
      var device$proxy8 = Bindable_this$16.y.e;
      if ((existing$8 !== null)) {
        existing$8.h.i(existing$8.d, \u03b4scrutinee221);
        var $x_59 = existing$8.g.queue;
        var $x_58 = existing$8.f;
        var s$proxy16 = existing$8.d;
        var $x_57 = s$proxy16.dv.buffer;
        $x_59.writeBuffer($x_58, 0.0, $x_57);
        var bb$8 = existing$8;
      } else {
        var uv$8 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
        var buffer$8 = new ArrayBuffer(48);
        var arr$proxy13 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$8), 1);
        var b$8 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy13.dv, 0), device$proxy8, uv$8);
        b$8.h.i(b$8.d, \u03b4scrutinee221);
        var $x_62 = b$8.g.queue;
        var $x_61 = b$8.f;
        var s$proxy17 = b$8.d;
        var $x_60 = s$proxy17.dv.buffer;
        $x_62.writeBuffer($x_61, 0.0, $x_60);
        var bb$8 = b$8;
      }
      while (((Bindable_this$16.c.length | 0) <= idx$8)) {
        Bindable_this$16.c.push(null);
      }
      Bindable_this$16.c[idx$8] = bb$8;
      var x$proxy5 = ((($m_Lsketches_rooms_columns_Columns$package$().Y - 1) | 0) * $m_Lsketches_rooms_columns_Columns$package$().I);
      var m$4 = new $c_Ltrivalibs_graphics_math_cpu_Mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, x$proxy5, colY, z, 1.0);
      var InstanceList_this$4 = columnShape.M;
      var e1$proxy5 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$4);
      var e2$proxy5 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().W(m$4));
      var i$7 = InstanceList_this$4.a1();
      var Bindable_this$21 = InstanceList_this$4.F[i$7];
      var \u03b4scrutinee238 = e1$proxy5.v;
      var idx$9 = (Bindable_this$21.z.t.model | 0);
      var existing$9 = ((idx$9 < (Bindable_this$21.c.length | 0)) ? Bindable_this$21.c[idx$9] : null);
      var device$proxy9 = Bindable_this$21.y.e;
      if ((existing$9 !== null)) {
        existing$9.h.i(existing$9.d, \u03b4scrutinee238);
        var $x_65 = existing$9.g.queue;
        var $x_64 = existing$9.f;
        var s$proxy18 = existing$9.d;
        var $x_63 = s$proxy18.dv.buffer;
        $x_65.writeBuffer($x_64, 0.0, $x_63);
        var bb$9 = existing$9;
      } else {
        var uv$9 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
        var buffer$9 = new ArrayBuffer(64);
        var arr$proxy14 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$9), 1);
        var b$9 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy14.dv, 0), device$proxy9, uv$9);
        b$9.h.i(b$9.d, \u03b4scrutinee238);
        var $x_68 = b$9.g.queue;
        var $x_67 = b$9.f;
        var s$proxy19 = b$9.d;
        var $x_66 = s$proxy19.dv.buffer;
        $x_68.writeBuffer($x_67, 0.0, $x_66);
        var bb$9 = b$9;
      }
      while (((Bindable_this$21.c.length | 0) <= idx$9)) {
        Bindable_this$21.c.push(null);
      }
      Bindable_this$21.c[idx$9] = bb$9;
      var \u03b4scrutinee253 = e2$proxy5.v;
      var idx$10 = (Bindable_this$21.z.t.normalMat | 0);
      var existing$10 = ((idx$10 < (Bindable_this$21.c.length | 0)) ? Bindable_this$21.c[idx$10] : null);
      var device$proxy10 = Bindable_this$21.y.e;
      if ((existing$10 !== null)) {
        existing$10.h.i(existing$10.d, \u03b4scrutinee253);
        var $x_71 = existing$10.g.queue;
        var $x_70 = existing$10.f;
        var s$proxy20 = existing$10.d;
        var $x_69 = s$proxy20.dv.buffer;
        $x_71.writeBuffer($x_70, 0.0, $x_69);
        var bb$10 = existing$10;
      } else {
        var uv$10 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
        var buffer$10 = new ArrayBuffer(48);
        var arr$proxy15 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$10), 1);
        var b$10 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy15.dv, 0), device$proxy10, uv$10);
        b$10.h.i(b$10.d, \u03b4scrutinee253);
        var $x_74 = b$10.g.queue;
        var $x_73 = b$10.f;
        var s$proxy21 = b$10.d;
        var $x_72 = s$proxy21.dv.buffer;
        $x_74.writeBuffer($x_73, 0.0, $x_72);
        var bb$10 = b$10;
      }
      while (((Bindable_this$21.c.length | 0) <= idx$10)) {
        Bindable_this$21.c.push(null);
      }
      Bindable_this$21.c[idx$10] = bb$10;
      iz = ((1 + iz) | 0);
    }
    var ix = ((-$m_Lsketches_rooms_columns_Columns$package$().Y) | 0);
    while ((ix <= $m_Lsketches_rooms_columns_Columns$package$().Y)) {
      var x$3 = (ix * $m_Lsketches_rooms_columns_Columns$package$().I);
      var z$proxy1 = (((-$m_Lsketches_rooms_columns_Columns$package$().Z) | 0) * $m_Lsketches_rooms_columns_Columns$package$().I);
      var m$5 = new $c_Ltrivalibs_graphics_math_cpu_Mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, x$3, colY, z$proxy1, 1.0);
      var InstanceList_this$5 = columnShape.M;
      var e1$proxy6 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$5);
      var e2$proxy6 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().W(m$5));
      var i$8 = InstanceList_this$5.a1();
      var Bindable_this$26 = InstanceList_this$5.F[i$8];
      var \u03b4scrutinee270 = e1$proxy6.v;
      var idx$11 = (Bindable_this$26.z.t.model | 0);
      var existing$11 = ((idx$11 < (Bindable_this$26.c.length | 0)) ? Bindable_this$26.c[idx$11] : null);
      var device$proxy11 = Bindable_this$26.y.e;
      if ((existing$11 !== null)) {
        existing$11.h.i(existing$11.d, \u03b4scrutinee270);
        var $x_77 = existing$11.g.queue;
        var $x_76 = existing$11.f;
        var s$proxy22 = existing$11.d;
        var $x_75 = s$proxy22.dv.buffer;
        $x_77.writeBuffer($x_76, 0.0, $x_75);
        var bb$11 = existing$11;
      } else {
        var uv$11 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
        var buffer$11 = new ArrayBuffer(64);
        var arr$proxy16 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$11), 1);
        var b$11 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy16.dv, 0), device$proxy11, uv$11);
        b$11.h.i(b$11.d, \u03b4scrutinee270);
        var $x_80 = b$11.g.queue;
        var $x_79 = b$11.f;
        var s$proxy23 = b$11.d;
        var $x_78 = s$proxy23.dv.buffer;
        $x_80.writeBuffer($x_79, 0.0, $x_78);
        var bb$11 = b$11;
      }
      while (((Bindable_this$26.c.length | 0) <= idx$11)) {
        Bindable_this$26.c.push(null);
      }
      Bindable_this$26.c[idx$11] = bb$11;
      var \u03b4scrutinee285 = e2$proxy6.v;
      var idx$12 = (Bindable_this$26.z.t.normalMat | 0);
      var existing$12 = ((idx$12 < (Bindable_this$26.c.length | 0)) ? Bindable_this$26.c[idx$12] : null);
      var device$proxy12 = Bindable_this$26.y.e;
      if ((existing$12 !== null)) {
        existing$12.h.i(existing$12.d, \u03b4scrutinee285);
        var $x_83 = existing$12.g.queue;
        var $x_82 = existing$12.f;
        var s$proxy24 = existing$12.d;
        var $x_81 = s$proxy24.dv.buffer;
        $x_83.writeBuffer($x_82, 0.0, $x_81);
        var bb$12 = existing$12;
      } else {
        var uv$12 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
        var buffer$12 = new ArrayBuffer(48);
        var arr$proxy17 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$12), 1);
        var b$12 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy17.dv, 0), device$proxy12, uv$12);
        b$12.h.i(b$12.d, \u03b4scrutinee285);
        var $x_86 = b$12.g.queue;
        var $x_85 = b$12.f;
        var s$proxy25 = b$12.d;
        var $x_84 = s$proxy25.dv.buffer;
        $x_86.writeBuffer($x_85, 0.0, $x_84);
        var bb$12 = b$12;
      }
      while (((Bindable_this$26.c.length | 0) <= idx$12)) {
        Bindable_this$26.c.push(null);
      }
      Bindable_this$26.c[idx$12] = bb$12;
      var z$proxy2 = ($m_Lsketches_rooms_columns_Columns$package$().Z * $m_Lsketches_rooms_columns_Columns$package$().I);
      var m$6 = new $c_Ltrivalibs_graphics_math_cpu_Mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, x$3, colY, z$proxy2, 1.0);
      var InstanceList_this$6 = columnShape.M;
      var e1$proxy7 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$6);
      var e2$proxy7 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().W(m$6));
      var i$9 = InstanceList_this$6.a1();
      var Bindable_this$31 = InstanceList_this$6.F[i$9];
      var \u03b4scrutinee302 = e1$proxy7.v;
      var idx$13 = (Bindable_this$31.z.t.model | 0);
      var existing$13 = ((idx$13 < (Bindable_this$31.c.length | 0)) ? Bindable_this$31.c[idx$13] : null);
      var device$proxy13 = Bindable_this$31.y.e;
      if ((existing$13 !== null)) {
        existing$13.h.i(existing$13.d, \u03b4scrutinee302);
        var $x_89 = existing$13.g.queue;
        var $x_88 = existing$13.f;
        var s$proxy26 = existing$13.d;
        var $x_87 = s$proxy26.dv.buffer;
        $x_89.writeBuffer($x_88, 0.0, $x_87);
        var bb$13 = existing$13;
      } else {
        var uv$13 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
        var buffer$13 = new ArrayBuffer(64);
        var arr$proxy18 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$13), 1);
        var b$13 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy18.dv, 0), device$proxy13, uv$13);
        b$13.h.i(b$13.d, \u03b4scrutinee302);
        var $x_92 = b$13.g.queue;
        var $x_91 = b$13.f;
        var s$proxy27 = b$13.d;
        var $x_90 = s$proxy27.dv.buffer;
        $x_92.writeBuffer($x_91, 0.0, $x_90);
        var bb$13 = b$13;
      }
      while (((Bindable_this$31.c.length | 0) <= idx$13)) {
        Bindable_this$31.c.push(null);
      }
      Bindable_this$31.c[idx$13] = bb$13;
      var \u03b4scrutinee317 = e2$proxy7.v;
      var idx$14 = (Bindable_this$31.z.t.normalMat | 0);
      var existing$14 = ((idx$14 < (Bindable_this$31.c.length | 0)) ? Bindable_this$31.c[idx$14] : null);
      var device$proxy14 = Bindable_this$31.y.e;
      if ((existing$14 !== null)) {
        existing$14.h.i(existing$14.d, \u03b4scrutinee317);
        var $x_95 = existing$14.g.queue;
        var $x_94 = existing$14.f;
        var s$proxy28 = existing$14.d;
        var $x_93 = s$proxy28.dv.buffer;
        $x_95.writeBuffer($x_94, 0.0, $x_93);
        var bb$14 = existing$14;
      } else {
        var uv$14 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
        var buffer$14 = new ArrayBuffer(48);
        var arr$proxy19 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$14), 1);
        var b$14 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy19.dv, 0), device$proxy14, uv$14);
        b$14.h.i(b$14.d, \u03b4scrutinee317);
        var $x_98 = b$14.g.queue;
        var $x_97 = b$14.f;
        var s$proxy29 = b$14.d;
        var $x_96 = s$proxy29.dv.buffer;
        $x_98.writeBuffer($x_97, 0.0, $x_96);
        var bb$14 = b$14;
      }
      while (((Bindable_this$31.c.length | 0) <= idx$14)) {
        Bindable_this$31.c.push(null);
      }
      Bindable_this$31.c[idx$14] = bb$14;
      var z$proxy3 = (((1 - $m_Lsketches_rooms_columns_Columns$package$().Z) | 0) * $m_Lsketches_rooms_columns_Columns$package$().I);
      var m$7 = new $c_Ltrivalibs_graphics_math_cpu_Mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, x$3, colY, z$proxy3, 1.0);
      var InstanceList_this$7 = columnShape.M;
      var e1$proxy8 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$7);
      var e2$proxy8 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().W(m$7));
      var i$10 = InstanceList_this$7.a1();
      var Bindable_this$36 = InstanceList_this$7.F[i$10];
      var \u03b4scrutinee334 = e1$proxy8.v;
      var idx$15 = (Bindable_this$36.z.t.model | 0);
      var existing$15 = ((idx$15 < (Bindable_this$36.c.length | 0)) ? Bindable_this$36.c[idx$15] : null);
      var device$proxy15 = Bindable_this$36.y.e;
      if ((existing$15 !== null)) {
        existing$15.h.i(existing$15.d, \u03b4scrutinee334);
        var $x_101 = existing$15.g.queue;
        var $x_100 = existing$15.f;
        var s$proxy30 = existing$15.d;
        var $x_99 = s$proxy30.dv.buffer;
        $x_101.writeBuffer($x_100, 0.0, $x_99);
        var bb$15 = existing$15;
      } else {
        var uv$15 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
        var buffer$15 = new ArrayBuffer(64);
        var arr$proxy20 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$15), 1);
        var b$15 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy20.dv, 0), device$proxy15, uv$15);
        b$15.h.i(b$15.d, \u03b4scrutinee334);
        var $x_104 = b$15.g.queue;
        var $x_103 = b$15.f;
        var s$proxy31 = b$15.d;
        var $x_102 = s$proxy31.dv.buffer;
        $x_104.writeBuffer($x_103, 0.0, $x_102);
        var bb$15 = b$15;
      }
      while (((Bindable_this$36.c.length | 0) <= idx$15)) {
        Bindable_this$36.c.push(null);
      }
      Bindable_this$36.c[idx$15] = bb$15;
      var \u03b4scrutinee349 = e2$proxy8.v;
      var idx$16 = (Bindable_this$36.z.t.normalMat | 0);
      var existing$16 = ((idx$16 < (Bindable_this$36.c.length | 0)) ? Bindable_this$36.c[idx$16] : null);
      var device$proxy16 = Bindable_this$36.y.e;
      if ((existing$16 !== null)) {
        existing$16.h.i(existing$16.d, \u03b4scrutinee349);
        var $x_107 = existing$16.g.queue;
        var $x_106 = existing$16.f;
        var s$proxy32 = existing$16.d;
        var $x_105 = s$proxy32.dv.buffer;
        $x_107.writeBuffer($x_106, 0.0, $x_105);
        var bb$16 = existing$16;
      } else {
        var uv$16 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
        var buffer$16 = new ArrayBuffer(48);
        var arr$proxy21 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$16), 1);
        var b$16 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy21.dv, 0), device$proxy16, uv$16);
        b$16.h.i(b$16.d, \u03b4scrutinee349);
        var $x_110 = b$16.g.queue;
        var $x_109 = b$16.f;
        var s$proxy33 = b$16.d;
        var $x_108 = s$proxy33.dv.buffer;
        $x_110.writeBuffer($x_109, 0.0, $x_108);
        var bb$16 = b$16;
      }
      while (((Bindable_this$36.c.length | 0) <= idx$16)) {
        Bindable_this$36.c.push(null);
      }
      Bindable_this$36.c[idx$16] = bb$16;
      var z$proxy4 = ((($m_Lsketches_rooms_columns_Columns$package$().Z - 1) | 0) * $m_Lsketches_rooms_columns_Columns$package$().I);
      var m$8 = new $c_Ltrivalibs_graphics_math_cpu_Mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, x$3, colY, z$proxy4, 1.0);
      var InstanceList_this$8 = columnShape.M;
      var e1$proxy9 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$8);
      var e2$proxy9 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().W(m$8));
      var i$11 = InstanceList_this$8.a1();
      var Bindable_this$41 = InstanceList_this$8.F[i$11];
      var \u03b4scrutinee366 = e1$proxy9.v;
      var idx$17 = (Bindable_this$41.z.t.model | 0);
      var existing$17 = ((idx$17 < (Bindable_this$41.c.length | 0)) ? Bindable_this$41.c[idx$17] : null);
      var device$proxy17 = Bindable_this$41.y.e;
      if ((existing$17 !== null)) {
        existing$17.h.i(existing$17.d, \u03b4scrutinee366);
        var $x_113 = existing$17.g.queue;
        var $x_112 = existing$17.f;
        var s$proxy34 = existing$17.d;
        var $x_111 = s$proxy34.dv.buffer;
        $x_113.writeBuffer($x_112, 0.0, $x_111);
        var bb$17 = existing$17;
      } else {
        var uv$17 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
        var buffer$17 = new ArrayBuffer(64);
        var arr$proxy22 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$17), 1);
        var b$17 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy22.dv, 0), device$proxy17, uv$17);
        b$17.h.i(b$17.d, \u03b4scrutinee366);
        var $x_116 = b$17.g.queue;
        var $x_115 = b$17.f;
        var s$proxy35 = b$17.d;
        var $x_114 = s$proxy35.dv.buffer;
        $x_116.writeBuffer($x_115, 0.0, $x_114);
        var bb$17 = b$17;
      }
      while (((Bindable_this$41.c.length | 0) <= idx$17)) {
        Bindable_this$41.c.push(null);
      }
      Bindable_this$41.c[idx$17] = bb$17;
      var \u03b4scrutinee381 = e2$proxy9.v;
      var idx$18 = (Bindable_this$41.z.t.normalMat | 0);
      var existing$18 = ((idx$18 < (Bindable_this$41.c.length | 0)) ? Bindable_this$41.c[idx$18] : null);
      var device$proxy18 = Bindable_this$41.y.e;
      if ((existing$18 !== null)) {
        existing$18.h.i(existing$18.d, \u03b4scrutinee381);
        var $x_119 = existing$18.g.queue;
        var $x_118 = existing$18.f;
        var s$proxy36 = existing$18.d;
        var $x_117 = s$proxy36.dv.buffer;
        $x_119.writeBuffer($x_118, 0.0, $x_117);
        var bb$18 = existing$18;
      } else {
        var uv$18 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
        var buffer$18 = new ArrayBuffer(48);
        var arr$proxy23 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$18), 1);
        var b$18 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy23.dv, 0), device$proxy18, uv$18);
        b$18.h.i(b$18.d, \u03b4scrutinee381);
        var $x_122 = b$18.g.queue;
        var $x_121 = b$18.f;
        var s$proxy37 = b$18.d;
        var $x_120 = s$proxy37.dv.buffer;
        $x_122.writeBuffer($x_121, 0.0, $x_120);
        var bb$18 = b$18;
      }
      while (((Bindable_this$41.c.length | 0) <= idx$18)) {
        Bindable_this$41.c.push(null);
      }
      Bindable_this$41.c[idx$18] = bb$18;
      ix = ((1 + ix) | 0);
    }
    var balkY = ($m_Lsketches_rooms_columns_Columns$package$().fg - (0.5 * $m_Lsketches_rooms_columns_Columns$package$().hs));
    ix = ((-$m_Lsketches_rooms_columns_Columns$package$().Y) | 0);
    while ((ix <= $m_Lsketches_rooms_columns_Columns$package$().Y)) {
      var t$proxy1 = new $c_Ltrivalibs_graphics_scene_Transform(new $c_Ltrivalibs_graphics_math_cpu_Vec3((ix * $m_Lsketches_rooms_columns_Columns$package$().I), balkY, 0.0), new $c_Ltrivalibs_graphics_math_cpu_Quat(0.0, 0.0, 0.0, 1.0), new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, (2.0 * $m_Lsketches_rooms_columns_Columns$package$().Z)));
      var m$9 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().eS(t$proxy1.aW, t$proxy1.aU, t$proxy1.aV);
      var InstanceList_this$9 = balkShape.M;
      var e1$proxy10 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$9);
      var e2$proxy10 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().W(m$9));
      var i$12 = InstanceList_this$9.a1();
      var Bindable_this$46 = InstanceList_this$9.F[i$12];
      var \u03b4scrutinee398 = e1$proxy10.v;
      var idx$19 = (Bindable_this$46.z.t.model | 0);
      var existing$19 = ((idx$19 < (Bindable_this$46.c.length | 0)) ? Bindable_this$46.c[idx$19] : null);
      var device$proxy19 = Bindable_this$46.y.e;
      if ((existing$19 !== null)) {
        existing$19.h.i(existing$19.d, \u03b4scrutinee398);
        var $x_125 = existing$19.g.queue;
        var $x_124 = existing$19.f;
        var s$proxy38 = existing$19.d;
        var $x_123 = s$proxy38.dv.buffer;
        $x_125.writeBuffer($x_124, 0.0, $x_123);
        var bb$19 = existing$19;
      } else {
        var uv$19 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
        var buffer$19 = new ArrayBuffer(64);
        var arr$proxy24 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$19), 1);
        var b$19 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy24.dv, 0), device$proxy19, uv$19);
        b$19.h.i(b$19.d, \u03b4scrutinee398);
        var $x_128 = b$19.g.queue;
        var $x_127 = b$19.f;
        var s$proxy39 = b$19.d;
        var $x_126 = s$proxy39.dv.buffer;
        $x_128.writeBuffer($x_127, 0.0, $x_126);
        var bb$19 = b$19;
      }
      while (((Bindable_this$46.c.length | 0) <= idx$19)) {
        Bindable_this$46.c.push(null);
      }
      Bindable_this$46.c[idx$19] = bb$19;
      var \u03b4scrutinee413 = e2$proxy10.v;
      var idx$20 = (Bindable_this$46.z.t.normalMat | 0);
      var existing$20 = ((idx$20 < (Bindable_this$46.c.length | 0)) ? Bindable_this$46.c[idx$20] : null);
      var device$proxy20 = Bindable_this$46.y.e;
      if ((existing$20 !== null)) {
        existing$20.h.i(existing$20.d, \u03b4scrutinee413);
        var $x_131 = existing$20.g.queue;
        var $x_130 = existing$20.f;
        var s$proxy40 = existing$20.d;
        var $x_129 = s$proxy40.dv.buffer;
        $x_131.writeBuffer($x_130, 0.0, $x_129);
        var bb$20 = existing$20;
      } else {
        var uv$20 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
        var buffer$20 = new ArrayBuffer(48);
        var arr$proxy25 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$20), 1);
        var b$20 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy25.dv, 0), device$proxy20, uv$20);
        b$20.h.i(b$20.d, \u03b4scrutinee413);
        var $x_134 = b$20.g.queue;
        var $x_133 = b$20.f;
        var s$proxy41 = b$20.d;
        var $x_132 = s$proxy41.dv.buffer;
        $x_134.writeBuffer($x_133, 0.0, $x_132);
        var bb$20 = b$20;
      }
      while (((Bindable_this$46.c.length | 0) <= idx$20)) {
        Bindable_this$46.c.push(null);
      }
      Bindable_this$46.c[idx$20] = bb$20;
      ix = ((1 + ix) | 0);
    }
    iz = ((-$m_Lsketches_rooms_columns_Columns$package$().Z) | 0);
    while ((iz <= $m_Lsketches_rooms_columns_Columns$package$().Z)) {
      var t$proxy2 = new $c_Ltrivalibs_graphics_scene_Transform(new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, balkY, (iz * $m_Lsketches_rooms_columns_Columns$package$().I)), $m_Ltrivalibs_graphics_math_cpu_Quat$().gh(1.5707963267948966), new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, (2.0 * $m_Lsketches_rooms_columns_Columns$package$().Y)));
      var m$10 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().eS(t$proxy2.aW, t$proxy2.aU, t$proxy2.aV);
      var InstanceList_this$10 = balkShape.M;
      var e1$proxy11 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$10);
      var e2$proxy11 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().W(m$10));
      var i$13 = InstanceList_this$10.a1();
      var Bindable_this$51 = InstanceList_this$10.F[i$13];
      var \u03b4scrutinee430 = e1$proxy11.v;
      var idx$21 = (Bindable_this$51.z.t.model | 0);
      var existing$21 = ((idx$21 < (Bindable_this$51.c.length | 0)) ? Bindable_this$51.c[idx$21] : null);
      var device$proxy21 = Bindable_this$51.y.e;
      if ((existing$21 !== null)) {
        existing$21.h.i(existing$21.d, \u03b4scrutinee430);
        var $x_137 = existing$21.g.queue;
        var $x_136 = existing$21.f;
        var s$proxy42 = existing$21.d;
        var $x_135 = s$proxy42.dv.buffer;
        $x_137.writeBuffer($x_136, 0.0, $x_135);
        var bb$21 = existing$21;
      } else {
        var uv$21 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
        var buffer$21 = new ArrayBuffer(64);
        var arr$proxy26 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$21), 1);
        var b$21 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy26.dv, 0), device$proxy21, uv$21);
        b$21.h.i(b$21.d, \u03b4scrutinee430);
        var $x_140 = b$21.g.queue;
        var $x_139 = b$21.f;
        var s$proxy43 = b$21.d;
        var $x_138 = s$proxy43.dv.buffer;
        $x_140.writeBuffer($x_139, 0.0, $x_138);
        var bb$21 = b$21;
      }
      while (((Bindable_this$51.c.length | 0) <= idx$21)) {
        Bindable_this$51.c.push(null);
      }
      Bindable_this$51.c[idx$21] = bb$21;
      var \u03b4scrutinee445 = e2$proxy11.v;
      var idx$22 = (Bindable_this$51.z.t.normalMat | 0);
      var existing$22 = ((idx$22 < (Bindable_this$51.c.length | 0)) ? Bindable_this$51.c[idx$22] : null);
      var device$proxy22 = Bindable_this$51.y.e;
      if ((existing$22 !== null)) {
        existing$22.h.i(existing$22.d, \u03b4scrutinee445);
        var $x_143 = existing$22.g.queue;
        var $x_142 = existing$22.f;
        var s$proxy44 = existing$22.d;
        var $x_141 = s$proxy44.dv.buffer;
        $x_143.writeBuffer($x_142, 0.0, $x_141);
        var bb$22 = existing$22;
      } else {
        var uv$22 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
        var buffer$22 = new ArrayBuffer(48);
        var arr$proxy27 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$22), 1);
        var b$22 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy27.dv, 0), device$proxy22, uv$22);
        b$22.h.i(b$22.d, \u03b4scrutinee445);
        var $x_146 = b$22.g.queue;
        var $x_145 = b$22.f;
        var s$proxy45 = b$22.d;
        var $x_144 = s$proxy45.dv.buffer;
        $x_146.writeBuffer($x_145, 0.0, $x_144);
        var bb$22 = b$22;
      }
      while (((Bindable_this$51.c.length | 0) <= idx$22)) {
        Bindable_this$51.c.push(null);
      }
      Bindable_this$51.c[idx$22] = bb$22;
      iz = ((1 + iz) | 0);
    }
    var t$proxy3 = new $c_Ltrivalibs_graphics_scene_Transform(new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, (((-$m_Lsketches_rooms_columns_Columns$package$().Z) | 0) * $m_Lsketches_rooms_columns_Columns$package$().I)), new $c_Ltrivalibs_graphics_math_cpu_Quat(0.0, 0.0, 0.0, 1.0), new $c_Ltrivalibs_graphics_math_cpu_Vec3(((2.0 * $m_Lsketches_rooms_columns_Columns$package$().Y) + 2.0), 1.0, 1.0));
    var m$11 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().eS(t$proxy3.aW, t$proxy3.aU, t$proxy3.aV);
    var InstanceList_this$11 = wallShape.M;
    var e1$proxy12 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$11);
    var e2$proxy12 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().W(m$11));
    var i$14 = InstanceList_this$11.a1();
    var Bindable_this$56 = InstanceList_this$11.F[i$14];
    var \u03b4scrutinee462 = e1$proxy12.v;
    var idx$23 = (Bindable_this$56.z.t.model | 0);
    var existing$23 = ((idx$23 < (Bindable_this$56.c.length | 0)) ? Bindable_this$56.c[idx$23] : null);
    var device$proxy23 = Bindable_this$56.y.e;
    if ((existing$23 !== null)) {
      existing$23.h.i(existing$23.d, \u03b4scrutinee462);
      var $x_149 = existing$23.g.queue;
      var $x_148 = existing$23.f;
      var s$proxy46 = existing$23.d;
      var $x_147 = s$proxy46.dv.buffer;
      $x_149.writeBuffer($x_148, 0.0, $x_147);
      var bb$23 = existing$23;
    } else {
      var uv$23 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
      var buffer$23 = new ArrayBuffer(64);
      var arr$proxy28 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$23), 1);
      var b$23 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy28.dv, 0), device$proxy23, uv$23);
      b$23.h.i(b$23.d, \u03b4scrutinee462);
      var $x_152 = b$23.g.queue;
      var $x_151 = b$23.f;
      var s$proxy47 = b$23.d;
      var $x_150 = s$proxy47.dv.buffer;
      $x_152.writeBuffer($x_151, 0.0, $x_150);
      var bb$23 = b$23;
    }
    while (((Bindable_this$56.c.length | 0) <= idx$23)) {
      Bindable_this$56.c.push(null);
    }
    Bindable_this$56.c[idx$23] = bb$23;
    var \u03b4scrutinee477 = e2$proxy12.v;
    var idx$24 = (Bindable_this$56.z.t.normalMat | 0);
    var existing$24 = ((idx$24 < (Bindable_this$56.c.length | 0)) ? Bindable_this$56.c[idx$24] : null);
    var device$proxy24 = Bindable_this$56.y.e;
    if ((existing$24 !== null)) {
      existing$24.h.i(existing$24.d, \u03b4scrutinee477);
      var $x_155 = existing$24.g.queue;
      var $x_154 = existing$24.f;
      var s$proxy48 = existing$24.d;
      var $x_153 = s$proxy48.dv.buffer;
      $x_155.writeBuffer($x_154, 0.0, $x_153);
      var bb$24 = existing$24;
    } else {
      var uv$24 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
      var buffer$24 = new ArrayBuffer(48);
      var arr$proxy29 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$24), 1);
      var b$24 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy29.dv, 0), device$proxy24, uv$24);
      b$24.h.i(b$24.d, \u03b4scrutinee477);
      var $x_158 = b$24.g.queue;
      var $x_157 = b$24.f;
      var s$proxy49 = b$24.d;
      var $x_156 = s$proxy49.dv.buffer;
      $x_158.writeBuffer($x_157, 0.0, $x_156);
      var bb$24 = b$24;
    }
    while (((Bindable_this$56.c.length | 0) <= idx$24)) {
      Bindable_this$56.c.push(null);
    }
    Bindable_this$56.c[idx$24] = bb$24;
    var t$proxy4 = new $c_Ltrivalibs_graphics_scene_Transform(new $c_Ltrivalibs_graphics_math_cpu_Vec3((((-$m_Lsketches_rooms_columns_Columns$package$().Y) | 0) * $m_Lsketches_rooms_columns_Columns$package$().I), 0.0, 0.0), $m_Ltrivalibs_graphics_math_cpu_Quat$().gh(1.5707963267948966), new $c_Ltrivalibs_graphics_math_cpu_Vec3(((2.0 * $m_Lsketches_rooms_columns_Columns$package$().Z) + 2.0), 1.0, 1.0));
    var m$12 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().eS(t$proxy4.aW, t$proxy4.aU, t$proxy4.aV);
    var InstanceList_this$12 = wallShape.M;
    var e1$proxy13 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$12);
    var e2$proxy13 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().W(m$12));
    var i$15 = InstanceList_this$12.a1();
    var Bindable_this$61 = InstanceList_this$12.F[i$15];
    var \u03b4scrutinee494 = e1$proxy13.v;
    var idx$25 = (Bindable_this$61.z.t.model | 0);
    var existing$25 = ((idx$25 < (Bindable_this$61.c.length | 0)) ? Bindable_this$61.c[idx$25] : null);
    var device$proxy25 = Bindable_this$61.y.e;
    if ((existing$25 !== null)) {
      existing$25.h.i(existing$25.d, \u03b4scrutinee494);
      var $x_161 = existing$25.g.queue;
      var $x_160 = existing$25.f;
      var s$proxy50 = existing$25.d;
      var $x_159 = s$proxy50.dv.buffer;
      $x_161.writeBuffer($x_160, 0.0, $x_159);
      var bb$25 = existing$25;
    } else {
      var uv$25 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
      var buffer$25 = new ArrayBuffer(64);
      var arr$proxy30 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$25), 1);
      var b$25 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy30.dv, 0), device$proxy25, uv$25);
      b$25.h.i(b$25.d, \u03b4scrutinee494);
      var $x_164 = b$25.g.queue;
      var $x_163 = b$25.f;
      var s$proxy51 = b$25.d;
      var $x_162 = s$proxy51.dv.buffer;
      $x_164.writeBuffer($x_163, 0.0, $x_162);
      var bb$25 = b$25;
    }
    while (((Bindable_this$61.c.length | 0) <= idx$25)) {
      Bindable_this$61.c.push(null);
    }
    Bindable_this$61.c[idx$25] = bb$25;
    var \u03b4scrutinee509 = e2$proxy13.v;
    var idx$26 = (Bindable_this$61.z.t.normalMat | 0);
    var existing$26 = ((idx$26 < (Bindable_this$61.c.length | 0)) ? Bindable_this$61.c[idx$26] : null);
    var device$proxy26 = Bindable_this$61.y.e;
    if ((existing$26 !== null)) {
      existing$26.h.i(existing$26.d, \u03b4scrutinee509);
      var $x_167 = existing$26.g.queue;
      var $x_166 = existing$26.f;
      var s$proxy52 = existing$26.d;
      var $x_165 = s$proxy52.dv.buffer;
      $x_167.writeBuffer($x_166, 0.0, $x_165);
      var bb$26 = existing$26;
    } else {
      var uv$26 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
      var buffer$26 = new ArrayBuffer(48);
      var arr$proxy31 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$26), 1);
      var b$26 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy31.dv, 0), device$proxy26, uv$26);
      b$26.h.i(b$26.d, \u03b4scrutinee509);
      var $x_170 = b$26.g.queue;
      var $x_169 = b$26.f;
      var s$proxy53 = b$26.d;
      var $x_168 = s$proxy53.dv.buffer;
      $x_170.writeBuffer($x_169, 0.0, $x_168);
      var bb$26 = b$26;
    }
    while (((Bindable_this$61.c.length | 0) <= idx$26)) {
      Bindable_this$61.c.push(null);
    }
    Bindable_this$61.c[idx$26] = bb$26;
    var t$proxy5 = new $c_Ltrivalibs_graphics_scene_Transform(new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, ($m_Lsketches_rooms_columns_Columns$package$().Z * $m_Lsketches_rooms_columns_Columns$package$().I)), $m_Ltrivalibs_graphics_math_cpu_Quat$().gh(3.141592653589793), new $c_Ltrivalibs_graphics_math_cpu_Vec3(((2.0 * $m_Lsketches_rooms_columns_Columns$package$().Y) + 2.0), 1.0, 1.0));
    var m$13 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().eS(t$proxy5.aW, t$proxy5.aU, t$proxy5.aV);
    var InstanceList_this$13 = wallShape.M;
    var e1$proxy14 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$13);
    var e2$proxy14 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().W(m$13));
    var i$16 = InstanceList_this$13.a1();
    var Bindable_this$66 = InstanceList_this$13.F[i$16];
    var \u03b4scrutinee526 = e1$proxy14.v;
    var idx$27 = (Bindable_this$66.z.t.model | 0);
    var existing$27 = ((idx$27 < (Bindable_this$66.c.length | 0)) ? Bindable_this$66.c[idx$27] : null);
    var device$proxy27 = Bindable_this$66.y.e;
    if ((existing$27 !== null)) {
      existing$27.h.i(existing$27.d, \u03b4scrutinee526);
      var $x_173 = existing$27.g.queue;
      var $x_172 = existing$27.f;
      var s$proxy54 = existing$27.d;
      var $x_171 = s$proxy54.dv.buffer;
      $x_173.writeBuffer($x_172, 0.0, $x_171);
      var bb$27 = existing$27;
    } else {
      var uv$27 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
      var buffer$27 = new ArrayBuffer(64);
      var arr$proxy32 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$27), 1);
      var b$27 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy32.dv, 0), device$proxy27, uv$27);
      b$27.h.i(b$27.d, \u03b4scrutinee526);
      var $x_176 = b$27.g.queue;
      var $x_175 = b$27.f;
      var s$proxy55 = b$27.d;
      var $x_174 = s$proxy55.dv.buffer;
      $x_176.writeBuffer($x_175, 0.0, $x_174);
      var bb$27 = b$27;
    }
    while (((Bindable_this$66.c.length | 0) <= idx$27)) {
      Bindable_this$66.c.push(null);
    }
    Bindable_this$66.c[idx$27] = bb$27;
    var \u03b4scrutinee541 = e2$proxy14.v;
    var idx$28 = (Bindable_this$66.z.t.normalMat | 0);
    var existing$28 = ((idx$28 < (Bindable_this$66.c.length | 0)) ? Bindable_this$66.c[idx$28] : null);
    var device$proxy28 = Bindable_this$66.y.e;
    if ((existing$28 !== null)) {
      existing$28.h.i(existing$28.d, \u03b4scrutinee541);
      var $x_179 = existing$28.g.queue;
      var $x_178 = existing$28.f;
      var s$proxy56 = existing$28.d;
      var $x_177 = s$proxy56.dv.buffer;
      $x_179.writeBuffer($x_178, 0.0, $x_177);
      var bb$28 = existing$28;
    } else {
      var uv$28 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
      var buffer$28 = new ArrayBuffer(48);
      var arr$proxy33 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$28), 1);
      var b$28 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy33.dv, 0), device$proxy28, uv$28);
      b$28.h.i(b$28.d, \u03b4scrutinee541);
      var $x_182 = b$28.g.queue;
      var $x_181 = b$28.f;
      var s$proxy57 = b$28.d;
      var $x_180 = s$proxy57.dv.buffer;
      $x_182.writeBuffer($x_181, 0.0, $x_180);
      var bb$28 = b$28;
    }
    while (((Bindable_this$66.c.length | 0) <= idx$28)) {
      Bindable_this$66.c.push(null);
    }
    Bindable_this$66.c[idx$28] = bb$28;
    var t$proxy6 = new $c_Ltrivalibs_graphics_scene_Transform(new $c_Ltrivalibs_graphics_math_cpu_Vec3(($m_Lsketches_rooms_columns_Columns$package$().Y * $m_Lsketches_rooms_columns_Columns$package$().I), 0.0, 0.0), $m_Ltrivalibs_graphics_math_cpu_Quat$().gh(4.71238898038469), new $c_Ltrivalibs_graphics_math_cpu_Vec3(((2.0 * $m_Lsketches_rooms_columns_Columns$package$().Z) + 2.0), 1.0, 1.0));
    var m$14 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().eS(t$proxy6.aW, t$proxy6.aU, t$proxy6.aV);
    var InstanceList_this$14 = wallShape.M;
    var e1$proxy15 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$14);
    var e2$proxy15 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().W(m$14));
    var i$17 = InstanceList_this$14.a1();
    var Bindable_this$71 = InstanceList_this$14.F[i$17];
    var \u03b4scrutinee558 = e1$proxy15.v;
    var idx$29 = (Bindable_this$71.z.t.model | 0);
    var existing$29 = ((idx$29 < (Bindable_this$71.c.length | 0)) ? Bindable_this$71.c[idx$29] : null);
    var device$proxy29 = Bindable_this$71.y.e;
    if ((existing$29 !== null)) {
      existing$29.h.i(existing$29.d, \u03b4scrutinee558);
      var $x_185 = existing$29.g.queue;
      var $x_184 = existing$29.f;
      var s$proxy58 = existing$29.d;
      var $x_183 = s$proxy58.dv.buffer;
      $x_185.writeBuffer($x_184, 0.0, $x_183);
      var bb$29 = existing$29;
    } else {
      var uv$29 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
      var buffer$29 = new ArrayBuffer(64);
      var arr$proxy34 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$29), 1);
      var b$29 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy34.dv, 0), device$proxy29, uv$29);
      b$29.h.i(b$29.d, \u03b4scrutinee558);
      var $x_188 = b$29.g.queue;
      var $x_187 = b$29.f;
      var s$proxy59 = b$29.d;
      var $x_186 = s$proxy59.dv.buffer;
      $x_188.writeBuffer($x_187, 0.0, $x_186);
      var bb$29 = b$29;
    }
    while (((Bindable_this$71.c.length | 0) <= idx$29)) {
      Bindable_this$71.c.push(null);
    }
    Bindable_this$71.c[idx$29] = bb$29;
    var \u03b4scrutinee573 = e2$proxy15.v;
    var idx$30 = (Bindable_this$71.z.t.normalMat | 0);
    var existing$30 = ((idx$30 < (Bindable_this$71.c.length | 0)) ? Bindable_this$71.c[idx$30] : null);
    var device$proxy30 = Bindable_this$71.y.e;
    if ((existing$30 !== null)) {
      existing$30.h.i(existing$30.d, \u03b4scrutinee573);
      var $x_191 = existing$30.g.queue;
      var $x_190 = existing$30.f;
      var s$proxy60 = existing$30.d;
      var $x_189 = s$proxy60.dv.buffer;
      $x_191.writeBuffer($x_190, 0.0, $x_189);
      var bb$30 = existing$30;
    } else {
      var uv$30 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
      var buffer$30 = new ArrayBuffer(48);
      var arr$proxy35 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$30), 1);
      var b$30 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy35.dv, 0), device$proxy30, uv$30);
      b$30.h.i(b$30.d, \u03b4scrutinee573);
      var $x_194 = b$30.g.queue;
      var $x_193 = b$30.f;
      var s$proxy61 = b$30.d;
      var $x_192 = s$proxy61.dv.buffer;
      $x_194.writeBuffer($x_193, 0.0, $x_192);
      var bb$30 = b$30;
    }
    while (((Bindable_this$71.c.length | 0) <= idx$30)) {
      Bindable_this$71.c.push(null);
    }
    Bindable_this$71.c[idx$30] = bb$30;
    var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
    var uv$proxy1 = ul$proxy1.jc;
    var buffer$31 = new ArrayBuffer(64);
    var arr$proxy36 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$31), 1);
    var viewProj = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy36.dv, 0), p$3.e, uv$proxy1);
    var clearColor$1 = $m_Ltrivalibs_graphics_math_cpu_Vec4$().lP().H(new $c_T4(0.9, 0.95, 0.99, 1.0));
    var shapes$1 = [Bindable_this, columnShape, balkShape, wallShape];
    var Panel_this = p$3.mt((void 0), (void 0), clearColor$1, true, true, (void 0), (void 0), (void 0), (void 0), (void 0), shapes$1, (void 0), (void 0));
    var e1$proxy16 = new $c_Ltrivalibs_graphics_painter_BindPair("viewProj", viewProj);
    var \u03b4scrutinee587 = e1$proxy16.v;
    var dict$proxy1 = Panel_this.h5;
    dict$proxy1.viewProj = \u03b4scrutinee587;
    var cam = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().l8(0.6, 1.0, 0.1, 200.0, 0.0, 0.0, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 3.0, 15.0));
    $m_Ltrivalibs_dev_devPreserve$().le(cam, "camera");
    var input = $m_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$().lZ(p$3.fm, true, 400.0, 5.0, true, (void 0), 90.0, 50.0);
    var controller = new $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController(cam, input, 3.0, 4.0);
    p$3.mr(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((v1$2, v2$2) => {
      var cw = (+v1$2);
      var ch = (+v2$2);
      var aspect$2 = (cw / ch);
      var fov$1 = cam.eN;
      var near$1 = cam.ft;
      var far$1 = cam.fs;
      var rotH$2 = cam.a5;
      var rotV$2 = cam.aF;
      var pos$2$2 = cam.R;
      cam.iN(fov$1, aspect$2, near$1, far$1, rotH$2, rotV$2, pos$2$2);
    })));
    $m_Ltrivalibs_utils_animation_animate$package$().l7(((p$3$1) => ((arg1$2) => {
      var tpf = (+arg1$2);
      input.eU(tpf);
      controller.eU(tpf);
      var value$proxy19 = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().ky(), cam.i6, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), cam.mZ());
      viewProj.h.i(viewProj.d, value$proxy19);
      var $x_197 = viewProj.g.queue;
      var $x_196 = viewProj.f;
      var s$proxy62 = viewProj.d;
      var $x_195 = s$proxy62.dv.buffer;
      $x_197.writeBuffer($x_196, 0.0, $x_195);
      $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$3$1, Panel_this);
      p$3$1.mL(Panel_this);
    }))(p$3));
  })));
});
var $d_Lsketches_rooms_columns_Columns$package$ = new $TypeData().i($c_Lsketches_rooms_columns_Columns$package$, "sketches.rooms.columns.Columns$package$", ({
  cU: 1
}));
var $n_Lsketches_rooms_columns_Columns$package$;
function $m_Lsketches_rooms_columns_Columns$package$() {
  if ((!$n_Lsketches_rooms_columns_Columns$package$)) {
    $n_Lsketches_rooms_columns_Columns$package$ = new $c_Lsketches_rooms_columns_Columns$package$();
  }
  return $n_Lsketches_rooms_columns_Columns$package$;
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
  cV: 1
}));
/** @constructor */
function $c_Ltrivalibs_dev_dev$package$() {
  this.fh = null;
  this.ht = false;
  $n_Ltrivalibs_dev_dev$package$ = this;
  this.fh = [];
  this.ht = false;
}
$p = $c_Ltrivalibs_dev_dev$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_dev_dev$package$;
/** @constructor */
function $h_Ltrivalibs_dev_dev$package$() {
}
$h_Ltrivalibs_dev_dev$package$.prototype = $p;
$p.ls = (function() {
  return (import.meta.hot !== (void 0));
});
$p.mm = (function() {
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
$p.mN = (function(label) {
  return ((("trivalibs:dev:" + $m_Ltrivalibs_dev_dev$package$().mm()) + ":") + label);
});
$p.iO = (function() {
  return window.sessionStorage;
});
$p.mz = (function(key) {
  var raw = $m_Ltrivalibs_dev_dev$package$().iO().getItem(key);
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
$p.n1 = (function(key, json) {
  $m_Ltrivalibs_dev_dev$package$().iO().setItem(key, JSON.stringify(json));
});
$p.mD = (function(key) {
  $m_Ltrivalibs_dev_dev$package$().iO().removeItem(key);
});
$p.ly = (function() {
  if ((!$m_Ltrivalibs_dev_dev$package$().ht)) {
    $m_Ltrivalibs_dev_dev$package$().ht = true;
    window.addEventListener("pagehide", ((_$1$2) => {
      var i = 0;
      while ((i < ($m_Ltrivalibs_dev_dev$package$().fh.length | 0))) {
        $m_Ltrivalibs_dev_dev$package$().fh[i].ge();
        i = ((1 + i) | 0);
      }
    }));
  }
});
$p.mA = (function(flush) {
  $m_Ltrivalibs_dev_dev$package$().ly();
  $m_Ltrivalibs_dev_dev$package$().fh.push(flush);
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    var idx = $m_sjs_js_ArrayOps$().kz($m_Ltrivalibs_dev_dev$package$().fh, flush, 0);
    if ((idx >= 0)) {
      $m_Ltrivalibs_dev_dev$package$().fh.splice(idx, 1);
    }
  }));
});
var $d_Ltrivalibs_dev_dev$package$ = new $TypeData().i($c_Ltrivalibs_dev_dev$package$, "trivalibs.dev.dev$package$", ({
  cW: 1
}));
var $n_Ltrivalibs_dev_dev$package$;
function $m_Ltrivalibs_dev_dev$package$() {
  if ((!$n_Ltrivalibs_dev_dev$package$)) {
    $n_Ltrivalibs_dev_dev$package$ = new $c_Ltrivalibs_dev_dev$package$();
  }
  return $n_Ltrivalibs_dev_dev$package$;
}
function $p_Ltrivalibs_dev_devPreserve$__encodeCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any($thiz, cam) {
  return [cam.R.q, cam.R.m, cam.R.o, cam.a5, cam.aF];
}
function $p_Ltrivalibs_dev_devPreserve$__applyCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any__V($thiz, cam, json) {
  if ((!(!Array.isArray(json)))) {
    if (((json.length | 0) >= 5)) {
      var pos$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((+json[0]), (+json[1]), (+json[2]));
      var rotH$1 = (+json[3]);
      var rotV$1 = (+json[4]);
      var fov$1 = cam.eN;
      var aspect$1 = cam.fr;
      var near$1 = cam.ft;
      var far$1 = cam.fs;
      cam.iN(fov$1, aspect$1, near$1, far$1, rotH$1, rotV$1, pos$1);
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
$p.le = (function(cam, label) {
  if ((!$m_Ltrivalibs_dev_dev$package$().ls())) {
    return new $c_Ltrivalibs_dev_DevHandle(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => (void 0))));
  } else {
    var sk = $m_Ltrivalibs_dev_dev$package$().mN(label);
    var initPos = cam.R;
    var initRotH = cam.a5;
    var initRotV = cam.aF;
    var stored = $m_Ltrivalibs_dev_dev$package$().mz(sk);
    if ((stored !== null)) {
      $p_Ltrivalibs_dev_devPreserve$__applyCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any__V(this, cam, stored);
    }
    return new $c_Ltrivalibs_dev_DevHandle(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(((unregister) => (() => {
      unregister.ge();
      $m_Ltrivalibs_dev_dev$package$().mD(sk);
      var fov$proxy1 = cam.eN;
      var aspect$proxy1 = cam.fr;
      var near$proxy1 = cam.ft;
      var far$proxy1 = cam.fs;
      cam.iN(fov$proxy1, aspect$proxy1, near$proxy1, far$proxy1, initRotH, initRotV, initPos);
    }))($m_Ltrivalibs_dev_dev$package$().mA(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
      $m_Ltrivalibs_dev_dev$package$().n1(sk, $p_Ltrivalibs_dev_devPreserve$__encodeCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any(this, cam));
    }))))));
  }
});
var $d_Ltrivalibs_dev_devPreserve$ = new $TypeData().i($c_Ltrivalibs_dev_devPreserve$, "trivalibs.dev.devPreserve$", ({
  cX: 1
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
  this.d = null;
  this.g = null;
  this.h = null;
  this.f = null;
  this.d = buffer;
  this.g = device;
  this.h = uv;
  var b = (buffer.dv.byteLength | 0);
  var value = ((b < 16) ? 16 : b);
  var $x_1 = device.createBuffer(({
    "size": value,
    "usage": 72
  }));
  this.f = $x_1;
}
$p = $c_Ltrivalibs_graphics_buffers_BufferBinding.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_BufferBinding;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_BufferBinding() {
}
$h_Ltrivalibs_graphics_buffers_BufferBinding.prototype = $p;
function $isArrayOf_Ltrivalibs_graphics_buffers_BufferBinding(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aA)));
}
var $d_Ltrivalibs_graphics_buffers_BufferBinding = new $TypeData().i($c_Ltrivalibs_graphics_buffers_BufferBinding, "trivalibs.graphics.buffers.BufferBinding", ({
  aA: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Box(center, size, frontTopLeft, frontTopRight, frontBottomLeft, frontBottomRight, backTopLeft, backTopRight, backBottomLeft, backBottomRight) {
  this.gF = null;
  this.gG = null;
  this.fL = null;
  this.fM = null;
  this.gD = null;
  this.gE = null;
  this.fJ = null;
  this.fK = null;
  this.gF = frontTopLeft;
  this.gG = frontTopRight;
  this.fL = frontBottomLeft;
  this.fM = frontBottomRight;
  this.gD = backTopLeft;
  this.gE = backTopRight;
  this.fJ = backBottomLeft;
  this.fK = backBottomRight;
}
$p = $c_Ltrivalibs_graphics_geometry_Box.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Box;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Box() {
}
$h_Ltrivalibs_graphics_geometry_Box.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_Box = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Box, "trivalibs.graphics.geometry.Box", ({
  d2: 1
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
$p.kg = (function(center, width, height, depth) {
  var hw = (0.5 * width);
  var hh = (0.5 * height);
  var hd = (0.5 * depth);
  var cx = center.q;
  var cy = center.m;
  var cz = center.o;
  return new $c_Ltrivalibs_graphics_geometry_Box(center, new $c_Ltrivalibs_graphics_math_cpu_Vec3(width, height, depth), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy + hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy + hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy - hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy - hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy + hh), (cz - hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy + hh), (cz - hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy - hh), (cz - hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy - hh), (cz - hd)));
});
var $d_Ltrivalibs_graphics_geometry_Box$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Box$, "trivalibs.graphics.geometry.Box$", ({
  d3: 1
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
  this.gH = null;
  this.hu = vertices;
  this.gH = indices;
}
$p = $c_Ltrivalibs_graphics_geometry_BufferedGeometry.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_BufferedGeometry;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_BufferedGeometry() {
}
$h_Ltrivalibs_graphics_geometry_BufferedGeometry.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_BufferedGeometry = new $TypeData().i($c_Ltrivalibs_graphics_geometry_BufferedGeometry, "trivalibs.graphics.geometry.BufferedGeometry", ({
  d4: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_FaceData(normal, section) {
  this.fN = null;
  this.kY = 0;
  this.fN = normal;
  this.kY = section;
}
$p = $c_Ltrivalibs_graphics_geometry_FaceData.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_FaceData;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_FaceData() {
}
$h_Ltrivalibs_graphics_geometry_FaceData.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_FaceData = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FaceData, "trivalibs.graphics.geometry.FaceData", ({
  d5: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Mesh(evidence$1) {
  this.fO = null;
  this.a3 = null;
  this.fi = null;
  this.gJ = null;
  this.gI = null;
  this.fO = evidence$1;
  this.a3 = [];
  this.fi = [];
  this.gJ = [];
  this.gI = ({});
}
$p = $c_Ltrivalibs_graphics_geometry_Mesh.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Mesh;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Mesh() {
}
$h_Ltrivalibs_graphics_geometry_Mesh.prototype = $p;
$p.l5 = (function(face, normal, section) {
  var faceIdx = (this.a3.length | 0);
  this.a3.push(face);
  this.fi.push(new $c_Ltrivalibs_graphics_geometry_FaceData(normal, section));
  var n = (face.length | 0);
  var slot = 0;
  while ((slot < n)) {
    var v = face[slot];
    var key = $m_Ltrivalibs_graphics_geometry_package$package$().mx(this.fO.aH(v));
    if ($m_sjs_js_Any$ObjectCompanionOps$().lS(Object, this.gI, key)) {
      var $x_2 = this.gJ;
      var dict = this.gI;
      if ((!(!(!$m_sjs_js_WrappedDictionary$Cache$().ja.call(dict, key))))) {
        throw new $c_ju_NoSuchElementException(("key not found: " + key));
      }
      var $x_1 = $x_2[(dict[key] | 0)];
      $x_1.jg.push(new $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIdx, slot));
    } else {
      var idx = (this.gJ.length | 0);
      var dict$1 = this.gI;
      dict$1[key] = idx;
      this.gJ.push(new $c_Ltrivalibs_graphics_geometry_VertexPosition(this.fO.aH(v), [new $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIdx, slot)]));
    }
    slot = ((1 + slot) | 0);
  }
});
$p.lx = (function() {
  var hasQuads = false;
  var i = 0;
  while ((i < (this.a3.length | 0))) {
    var arr = this.a3[i];
    if ((this.fi[i].fN === null)) {
      var $x_2 = this.fi[i];
      if (((arr.length | 0) === 3)) {
        var $x_1 = $m_Ltrivalibs_graphics_geometry_polygon$package$Triangle$().iL(this.a3[i], this.fO);
      } else {
        hasQuads = true;
        var $x_1 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().iL(this.a3[i], this.fO);
      }
      $x_2.fN = $x_1;
    }
    i = ((1 + i) | 0);
  }
  return hasQuads;
});
var $d_Ltrivalibs_graphics_geometry_Mesh = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Mesh, "trivalibs.graphics.geometry.Mesh", ({
  d8: 1
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
$p.lc = (function(faces, normal, section, evidence$1) {
  var m = new $c_Ltrivalibs_graphics_geometry_Mesh(evidence$1);
  $m_Ltrivalibs_graphics_geometry_mesh$package$().l6(m, faces, normal, section, evidence$1);
  return m;
});
var $d_Ltrivalibs_graphics_geometry_Mesh$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Mesh$, "trivalibs.graphics.geometry.Mesh$", ({
  d9: 1
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
  this.kZ = 0;
  this.l0 = 0;
  this.kZ = faceIndex;
  this.l0 = vertexSlot;
}
$p = $c_Ltrivalibs_graphics_geometry_PositionFaceRef.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_PositionFaceRef;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_PositionFaceRef() {
}
$h_Ltrivalibs_graphics_geometry_PositionFaceRef.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_PositionFaceRef = new $TypeData().i($c_Ltrivalibs_graphics_geometry_PositionFaceRef, "trivalibs.graphics.geometry.PositionFaceRef", ({
  db: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexPosition(position, faces) {
  this.l1 = null;
  this.jg = null;
  this.l1 = position;
  this.jg = faces;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexPosition.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexPosition;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexPosition() {
}
$h_Ltrivalibs_graphics_geometry_VertexPosition.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_VertexPosition = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexPosition, "trivalibs.graphics.geometry.VertexPosition", ({
  dg: 1
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
$p.mj = (function(idxBuf, vertexCount) {
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
  dh: 1
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
$p.l6 = (function(m, faces, normal, section, evidence$1) {
  var i = 0;
  while ((i < (faces.length | 0))) {
    m.l5(faces[i], normal, section);
    i = ((1 + i) | 0);
  }
});
var $d_Ltrivalibs_graphics_geometry_mesh$package$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_mesh$package$, "trivalibs.graphics.geometry.mesh$package$", ({
  di: 1
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
$p.mx = (function(v) {
  return (((($doubleToInt((10000.0 * v.q)) + ",") + $doubleToInt((10000.0 * v.m))) + ",") + $doubleToInt((10000.0 * v.o)));
});
var $d_Ltrivalibs_graphics_geometry_package$package$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_package$package$, "trivalibs.graphics.geometry.package$package$", ({
  dj: 1
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
$p.aG = (function(tl, bl, br, tr) {
  return [tl, bl, br, tr];
});
$p.mR = (function(q, evidence$1) {
  return q[0];
});
$p.lj = (function(q, evidence$1) {
  return q[1];
});
$p.ll = (function(q, evidence$1) {
  return q[2];
});
$p.mT = (function(q, evidence$1) {
  return q[3];
});
$p.iL = (function(q, evidence$1) {
  var a = evidence$1.aH(this.mR(q, evidence$1));
  var b = evidence$1.aH(this.lj(q, evidence$1));
  var c = evidence$1.aH(this.ll(q, evidence$1));
  var d = evidence$1.aH(this.mT(q, evidence$1));
  var d1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((c.q - a.q), (c.m - a.m), (c.o - a.o));
  var d2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((d.q - b.q), (d.m - b.m), (d.o - b.o));
  return $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), d1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), d2), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
});
var $d_Ltrivalibs_graphics_geometry_polygon$package$Quad$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_polygon$package$Quad$, "trivalibs.graphics.geometry.polygon$package$Quad$", ({
  dl: 1
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
$p.l4 = (function(tri, evidence$1) {
  return tri[0];
});
$p.li = (function(tri, evidence$1) {
  return tri[1];
});
$p.lm = (function(tri, evidence$1) {
  return tri[2];
});
$p.iL = (function(tri, evidence$1) {
  var pa = evidence$1.aH(this.l4(tri, evidence$1));
  var pb = evidence$1.aH(this.li(tri, evidence$1));
  var pc = evidence$1.aH(this.lm(tri, evidence$1));
  var e1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((pb.q - pa.q), (pb.m - pa.m), (pb.o - pa.o));
  var e2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((pc.q - pa.q), (pc.m - pa.m), (pc.o - pa.o));
  return $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().j(), e1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), e2), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
});
var $d_Ltrivalibs_graphics_geometry_polygon$package$Triangle$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_polygon$package$Triangle$, "trivalibs.graphics.geometry.polygon$package$Triangle$", ({
  dm: 1
}));
var $n_Ltrivalibs_graphics_geometry_polygon$package$Triangle$;
function $m_Ltrivalibs_graphics_geometry_polygon$package$Triangle$() {
  if ((!$n_Ltrivalibs_graphics_geometry_polygon$package$Triangle$)) {
    $n_Ltrivalibs_graphics_geometry_polygon$package$Triangle$ = new $c_Ltrivalibs_graphics_geometry_polygon$package$Triangle$();
  }
  return $n_Ltrivalibs_graphics_geometry_polygon$package$Triangle$;
}
function $f_Ltrivalibs_graphics_math_Mat3ImmutableOps__transpose__O__Ltrivalibs_graphics_math_Mat3Base__O($thiz, m, x$2) {
  return new $c_Ltrivalibs_graphics_math_cpu_Mat3((+x$2.ap(m)), (+x$2.as(m)), (+x$2.av(m)), (+x$2.aq(m)), (+x$2.at(m)), (+x$2.aw(m)), (+x$2.ar(m)), (+x$2.au(m)), (+x$2.ax(m)));
}
function $f_Ltrivalibs_graphics_math_Mat3ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat3Base__O($thiz, m, x$2) {
  var a00 = (+x$2.ap(m));
  var a01 = (+x$2.aq(m));
  var a02 = (+x$2.ar(m));
  var a10 = (+x$2.as(m));
  var a11 = (+x$2.at(m));
  var a12 = (+x$2.au(m));
  var a20 = (+x$2.av(m));
  var a21 = (+x$2.aw(m));
  var a22 = (+x$2.ax(m));
  var c00 = ((a11 * a22) - (a12 * a21));
  var c01 = (-((a10 * a22) - (a12 * a20)));
  var c02 = ((a10 * a21) - (a11 * a20));
  var c10 = (-((a01 * a22) - (a02 * a21)));
  var c11 = ((a00 * a22) - (a02 * a20));
  var c12 = (-((a00 * a21) - (a01 * a20)));
  var c20 = ((a01 * a12) - (a02 * a11));
  var c21 = (-((a00 * a12) - (a02 * a10)));
  var c22 = ((a00 * a11) - (a01 * a10));
  var det = (((a00 * c00) + (a10 * c10)) + (a20 * c20));
  var invDet = (1.0 / det);
  return new $c_Ltrivalibs_graphics_math_cpu_Mat3((c00 * invDet), (c10 * invDet), (c20 * invDet), (c01 * invDet), (c11 * invDet), (c21 * invDet), (c02 * invDet), (c12 * invDet), (c22 * invDet));
}
function $f_Ltrivalibs_graphics_math_Mat3MutableOps__set__O__Ltrivalibs_graphics_math_Mat3Mutable__O__Ltrivalibs_graphics_math_Mat3Base__V($thiz, m, mb, other, x$4) {
  mb.gj(m, (+x$4.ap(other)));
  mb.gk(m, (+x$4.aq(other)));
  mb.gl(m, (+x$4.ar(other)));
  mb.gn(m, (+x$4.as(other)));
  mb.go(m, (+x$4.at(other)));
  mb.gp(m, (+x$4.au(other)));
  mb.gr(m, (+x$4.av(other)));
  mb.gs(m, (+x$4.aw(other)));
  mb.gt(m, (+x$4.ax(other)));
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($thiz, fovY, aspect, near, far) {
  var x = (0.5 * fovY);
  var f = (1.0 / (+Math.tan(x)));
  var rInv = (1.0 / (near - far));
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4((f / aspect), 0.0, 0.0, 0.0, 0.0, f, 0.0, 0.0, 0.0, 0.0, (far * rInv), (-1.0), 0.0, 0.0, ((near * far) * rInv), 0.0);
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($thiz, m, x$2, other) {
  var a00 = (+x$2.ap(m));
  var a01 = (+x$2.aq(m));
  var a02 = (+x$2.ar(m));
  var a03 = (+x$2.gm(m));
  var a10 = (+x$2.as(m));
  var a11 = (+x$2.at(m));
  var a12 = (+x$2.au(m));
  var a13 = (+x$2.gq(m));
  var a20 = (+x$2.av(m));
  var a21 = (+x$2.aw(m));
  var a22 = (+x$2.ax(m));
  var a23 = (+x$2.gu(m));
  var a30 = (+x$2.gv(m));
  var a31 = (+x$2.gw(m));
  var a32 = (+x$2.gx(m));
  var a33 = (+x$2.gy(m));
  var b00 = (+x$2.ap(other));
  var b01 = (+x$2.aq(other));
  var b02 = (+x$2.ar(other));
  var b03 = (+x$2.gm(other));
  var b10 = (+x$2.as(other));
  var b11 = (+x$2.at(other));
  var b12 = (+x$2.au(other));
  var b13 = (+x$2.gq(other));
  var b20 = (+x$2.av(other));
  var b21 = (+x$2.aw(other));
  var b22 = (+x$2.ax(other));
  var b23 = (+x$2.gu(other));
  var b30 = (+x$2.gv(other));
  var b31 = (+x$2.gw(other));
  var b32 = (+x$2.gx(other));
  var b33 = (+x$2.gy(other));
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4(((((a00 * b00) + (a10 * b01)) + (a20 * b02)) + (a30 * b03)), ((((a01 * b00) + (a11 * b01)) + (a21 * b02)) + (a31 * b03)), ((((a02 * b00) + (a12 * b01)) + (a22 * b02)) + (a32 * b03)), ((((a03 * b00) + (a13 * b01)) + (a23 * b02)) + (a33 * b03)), ((((a00 * b10) + (a10 * b11)) + (a20 * b12)) + (a30 * b13)), ((((a01 * b10) + (a11 * b11)) + (a21 * b12)) + (a31 * b13)), ((((a02 * b10) + (a12 * b11)) + (a22 * b12)) + (a32 * b13)), ((((a03 * b10) + (a13 * b11)) + (a23 * b12)) + (a33 * b13)), ((((a00 * b20) + (a10 * b21)) + (a20 * b22)) + (a30 * b23)), ((((a01 * b20) + (a11 * b21)) + (a21 * b22)) + (a31 * b23)), ((((a02 * b20) + (a12 * b21)) + (a22 * b22)) + (a32 * b23)), ((((a03 * b20) + (a13 * b21)) + (a23 * b22)) + (a33 * b23)), ((((a00 * b30) + (a10 * b31)) + (a20 * b32)) + (a30 * b33)), ((((a01 * b30) + (a11 * b31)) + (a21 * b32)) + (a31 * b33)), ((((a02 * b30) + (a12 * b31)) + (a22 * b32)) + (a32 * b33)), ((((a03 * b30) + (a13 * b31)) + (a23 * b32)) + (a33 * b33)));
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($thiz, m, x$2) {
  var a00 = (+x$2.ap(m));
  var a01 = (+x$2.aq(m));
  var a02 = (+x$2.ar(m));
  var a03 = (+x$2.gm(m));
  var a10 = (+x$2.as(m));
  var a11 = (+x$2.at(m));
  var a12 = (+x$2.au(m));
  var a13 = (+x$2.gq(m));
  var a20 = (+x$2.av(m));
  var a21 = (+x$2.aw(m));
  var a22 = (+x$2.ax(m));
  var a23 = (+x$2.gu(m));
  var a30 = (+x$2.gv(m));
  var a31 = (+x$2.gw(m));
  var a32 = (+x$2.gx(m));
  var a33 = (+x$2.gy(m));
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
  mb.gj(m, (+x$4.ap(other)));
  mb.gk(m, (+x$4.aq(other)));
  mb.gl(m, (+x$4.ar(other)));
  mb.kA(m, (+x$4.gm(other)));
  mb.gn(m, (+x$4.as(other)));
  mb.go(m, (+x$4.at(other)));
  mb.gp(m, (+x$4.au(other)));
  mb.kB(m, (+x$4.gq(other)));
  mb.gr(m, (+x$4.av(other)));
  mb.gs(m, (+x$4.aw(other)));
  mb.gt(m, (+x$4.ax(other)));
  mb.kC(m, (+x$4.gu(other)));
  mb.kD(m, (+x$4.gv(other)));
  mb.kE(m, (+x$4.gw(other)));
  mb.kF(m, (+x$4.gx(other)));
  mb.kG(m, (+x$4.gy(other)));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.q + other.q), (v.m + other.m), (v.o + other.o));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($thiz, v, x$2) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((-v.q), (-v.m), (-v.o));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.q - other.q), (v.m - other.m), (v.o - other.o));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, scalar) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.q * scalar), (v.m * scalar), (v.o * scalar));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__divScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, scalar) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.q / scalar), (v.m / scalar), (v.o / scalar));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3(((v.m * other.o) - (v.o * other.m)), ((v.o * other.q) - (v.q * other.o)), ((v.q * other.m) - (v.m * other.q)));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($thiz, v, x$2) {
  return $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__divScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, $f_Ltrivalibs_graphics_math_Vec3Base__length__O__D(x$2, v));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat3(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  this.hv = 0.0;
  this.hw = 0.0;
  this.hx = 0.0;
  this.hy = 0.0;
  this.hz = 0.0;
  this.hA = 0.0;
  this.hB = 0.0;
  this.hC = 0.0;
  this.hD = 0.0;
  this.hv = m00;
  this.hw = m01;
  this.hx = m02;
  this.hy = m10;
  this.hz = m11;
  this.hA = m12;
  this.hB = m20;
  this.hC = m21;
  this.hD = m22;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat3.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat3;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat3() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat3.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Mat3 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat3, "trivalibs.graphics.math.cpu.Mat3", ({
  dE: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat4(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  this.gK = 0.0;
  this.gL = 0.0;
  this.gM = 0.0;
  this.hE = 0.0;
  this.gN = 0.0;
  this.gO = 0.0;
  this.gP = 0.0;
  this.hF = 0.0;
  this.gQ = 0.0;
  this.gR = 0.0;
  this.gS = 0.0;
  this.hG = 0.0;
  this.hH = 0.0;
  this.hI = 0.0;
  this.hJ = 0.0;
  this.hK = 0.0;
  this.gK = m00;
  this.gL = m01;
  this.gM = m02;
  this.hE = m03;
  this.gN = m10;
  this.gO = m11;
  this.gP = m12;
  this.hF = m13;
  this.gQ = m20;
  this.gR = m21;
  this.gS = m22;
  this.hG = m23;
  this.hH = m30;
  this.hI = m31;
  this.hJ = m32;
  this.hK = m33;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Mat4 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4, "trivalibs.graphics.math.cpu.Mat4", ({
  dH: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Quat(x, y, z, w) {
  this.hM = 0.0;
  this.hN = 0.0;
  this.hO = 0.0;
  this.hL = 0.0;
  this.hM = x;
  this.hN = y;
  this.hO = z;
  this.hL = w;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Quat.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Quat;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Quat() {
}
$h_Ltrivalibs_graphics_math_cpu_Quat.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Quat = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat, "trivalibs.graphics.math.cpu.Quat", ({
  dK: 1
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
$p.lL = (function(angle) {
  var h = (0.5 * angle);
  return new $c_Ltrivalibs_graphics_math_cpu_Quat((+Math.sin(h)), 0.0, 0.0, (+Math.cos(h)));
});
$p.gh = (function(angle) {
  var h = (0.5 * angle);
  return new $c_Ltrivalibs_graphics_math_cpu_Quat(0.0, (+Math.sin(h)), 0.0, (+Math.cos(h)));
});
var $d_Ltrivalibs_graphics_math_cpu_Quat$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat$, "trivalibs.graphics.math.cpu.Quat$", ({
  dL: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Quat$;
function $m_Ltrivalibs_graphics_math_cpu_Quat$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Quat$)) {
    $n_Ltrivalibs_graphics_math_cpu_Quat$ = new $c_Ltrivalibs_graphics_math_cpu_Quat$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Quat$;
}
function $f_Ltrivalibs_graphics_math_cpu_QuatImmutableOps__quatMul__O__Ltrivalibs_graphics_math_Vec4Base__O__O($thiz, q, x$2, p) {
  return new $c_Ltrivalibs_graphics_math_cpu_Quat((((((+x$2.aY(q)) * (+x$2.aZ(p))) + ((+x$2.aZ(q)) * (+x$2.aY(p)))) + ((+x$2.b0(q)) * (+x$2.b1(p)))) - ((+x$2.b1(q)) * (+x$2.b0(p)))), (((((+x$2.aY(q)) * (+x$2.b0(p))) - ((+x$2.aZ(q)) * (+x$2.b1(p)))) + ((+x$2.b0(q)) * (+x$2.aY(p)))) + ((+x$2.b1(q)) * (+x$2.aZ(p)))), (((((+x$2.aY(q)) * (+x$2.b1(p))) + ((+x$2.aZ(q)) * (+x$2.b0(p)))) - ((+x$2.b0(q)) * (+x$2.aZ(p)))) + ((+x$2.b1(q)) * (+x$2.aY(p)))), (((((+x$2.aY(q)) * (+x$2.aY(p))) - ((+x$2.aZ(q)) * (+x$2.aZ(p)))) - ((+x$2.b0(q)) * (+x$2.b0(p)))) - ((+x$2.b1(q)) * (+x$2.b1(p)))));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec2(x, y) {
  this.fj = 0.0;
  this.fk = 0.0;
  this.fj = x;
  this.fk = y;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec2.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec2;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec2() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec2.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec2 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec2, "trivalibs.graphics.math.cpu.Vec2", ({
  dP: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec3(x, y, z) {
  this.q = 0.0;
  this.m = 0.0;
  this.o = 0.0;
  this.q = x;
  this.m = y;
  this.o = z;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec3.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec3;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec3() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec3.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec3 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3, "trivalibs.graphics.math.cpu.Vec3", ({
  dQ: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec4(x, y, z, w) {
  this.gU = 0.0;
  this.gV = 0.0;
  this.gW = 0.0;
  this.gT = 0.0;
  this.gU = x;
  this.gV = y;
  this.gW = z;
  this.gT = w;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec4.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec4;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec4() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec4.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec4 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4, "trivalibs.graphics.math.cpu.Vec4", ({
  dT: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$() {
  this.jq = null;
  this.jr = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$.prototype = $p;
$p.mk = (function() {
  if ((!this.jr)) {
    this.jq = new $c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$$anon$21();
    this.jr = true;
  }
  return this.jq;
});
var $d_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$, "trivalibs.graphics.math.cpu.mat3$package$Mat3PaddedBuffer$", ({
  dW: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$;
function $m_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$ = new $c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
  this.js = null;
  this.jt = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$.prototype = $p;
$p.lR = (function() {
  if ((!this.jt)) {
    this.js = new $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18();
    this.jt = true;
  }
  return this.js;
});
var $d_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$, "trivalibs.graphics.math.cpu.mat4$package$Mat4Buffer$", ({
  dZ: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
function $m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$ = new $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
}
function $ct_Ltrivalibs_graphics_math_gpu_Expr__T__($thiz, wgsl) {
  $thiz.u = wgsl;
  return $thiz;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_Expr() {
  this.u = null;
}
$p = $c_Ltrivalibs_graphics_math_gpu_Expr.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_Expr;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_Expr() {
}
$h_Ltrivalibs_graphics_math_gpu_Expr.prototype = $p;
$p.l = (function() {
  return this.u;
});
var $d_Ltrivalibs_graphics_math_gpu_Expr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_Expr, "trivalibs.graphics.math.gpu.Expr", ({
  aK: 1
}));
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
$p.mG = (function(onFalse, onTrue, cond) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("select(" + onFalse.u) + ", ") + onTrue.u) + ", ") + cond.u) + ")"));
});
$p.lk = (function(cond, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + cond.u) + " || ") + other.u) + ")"));
});
$p.kt = (function(a, b) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.u) + " < ") + b.u) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_expr$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_expr$package$, "trivalibs.graphics.math.gpu.expr$package$", ({
  e3: 1
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
  this.jv = null;
  this.jw = false;
  this.jx = null;
  this.jy = false;
  this.jz = null;
  this.jA = false;
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$.prototype = $p;
$p.lG = (function(v) {
  var s = ("" + v);
  return (((($f_T__indexOf__I__I(s, 46) >= 0) || ($f_T__indexOf__I__I(s, 69) >= 0)) || ($f_T__indexOf__I__I(s, 101) >= 0)) ? s : (s + ".0"));
});
$p.fz = (function() {
  if ((!this.jw)) {
    this.jv = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1();
    this.jw = true;
  }
  return this.jv;
});
$p.lQ = (function() {
  if ((!this.jy)) {
    this.jx = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5();
    this.jy = true;
  }
  return this.jx;
});
$p.kx = (function() {
  if ((!this.jA)) {
    this.jz = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6();
    this.jA = true;
  }
  return this.jz;
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$, "trivalibs.graphics.math.gpu.float_expr$package$", ({
  e4: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$;
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
$p.ld = (function(x, y, z) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("vec3<f32>(" + x.u) + ", ") + y.u) + ", ") + z.u) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_vec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec3$, "trivalibs.graphics.math.gpu.vec3$", ({
  eg: 1
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
$p.kh = (function(xyz, w) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("vec4<f32>(" + xyz.u) + ", ") + w.u) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_vec4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec4$, "trivalibs.graphics.math.gpu.vec4$", ({
  eh: 1
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
  this.v = null;
  this.v = value;
}
$p = $c_Ltrivalibs_graphics_painter_BindPair.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_BindPair;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_BindPair() {
}
$h_Ltrivalibs_graphics_painter_BindPair.prototype = $p;
var $d_Ltrivalibs_graphics_painter_BindPair = new $TypeData().i($c_Ltrivalibs_graphics_painter_BindPair, "trivalibs.graphics.painter.BindPair", ({
  ei: 1
}));
function $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V($thiz) {
  var format = null;
  var i = 0;
  while ((i < $thiz.eH)) {
    var b = $thiz.eI[i];
    if (((format === null) && (b.aR > 0))) {
      format = b.eJ;
    }
    i = ((1 + i) | 0);
  }
  $thiz.hQ = format;
}
function $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V($thiz, index, verts, indices, widenTo32) {
  while ((($thiz.eI.length | 0) <= index)) {
    $thiz.eI.push(new $c_Ltrivalibs_graphics_painter_FormBuffers());
  }
  var b = $thiz.eI[index];
  $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_graphics_painter_FormBuffers__Ltrivalibs_bufferdata_BufferView__V($thiz, b, verts);
  if ((indices !== null)) {
    $p_Ltrivalibs_graphics_painter_Form__uploadIndices__Ltrivalibs_graphics_painter_FormBuffers__sjs_js_typedarray_TypedArray__Z__V($thiz, b, indices, widenTo32);
  } else {
    b.aR = 0;
    b.fQ = 0;
  }
}
function $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_graphics_painter_FormBuffers__Ltrivalibs_bufferdata_BufferView__V($thiz, b, verts) {
  var data = verts.dv.buffer;
  var size = (data.byteLength | 0);
  var p = ((-4) & ((3 + size) | 0));
  var padded = ((p < 4) ? 4 : p);
  if (((b.aS === null) || (b.hT < padded))) {
    if ((b.aS !== null)) {
      b.aS.destroy();
    }
    b.aS = $thiz.fP.e.createBuffer(({
      "size": padded,
      "usage": 40
    }));
    b.hT = padded;
  }
  $thiz.fP.ab.writeBuffer(b.aS, 0.0, $p_Ltrivalibs_graphics_painter_Form__alignedData__sjs_js_typedarray_ArrayBuffer__sjs_js_typedarray_ArrayBuffer($thiz, data));
  b.gX = size;
  b.fl = (verts.off | 0);
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
    b.eJ = "uint32";
  } else if ((!(!(raw instanceof Uint16Array)))) {
    data = raw.buffer;
    count = (raw.length | 0);
    b.eJ = "uint16";
  } else {
    data = raw.buffer;
    count = (raw.length | 0);
    b.eJ = "uint32";
  }
  var size = (data.byteLength | 0);
  var p = ((-4) & ((3 + size) | 0));
  var padded = ((p < 4) ? 4 : p);
  if (((b.aQ === null) || (b.hS < padded))) {
    if ((b.aQ !== null)) {
      b.aQ.destroy();
    }
    b.aQ = $thiz.fP.e.createBuffer(({
      "size": padded,
      "usage": 24
    }));
    b.hS = padded;
  }
  $thiz.fP.ab.writeBuffer(b.aQ, 0.0, $p_Ltrivalibs_graphics_painter_Form__alignedData__sjs_js_typedarray_ArrayBuffer__sjs_js_typedarray_ArrayBuffer($thiz, data));
  b.fQ = size;
  b.aR = count;
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
  this.fP = null;
  this.eI = null;
  this.eH = 0;
  this.hR = null;
  this.hP = null;
  this.hQ = null;
  this.fP = painter;
  this.eI = [];
  this.eH = 0;
  this.hR = "triangle-list";
  this.hP = "ccw";
  this.hQ = null;
}
$p = $c_Ltrivalibs_graphics_painter_Form.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Form;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Form() {
}
$h_Ltrivalibs_graphics_painter_Form.prototype = $p;
$p.mJ = (function(geometry, vertices, geometries, verticesAll, topology, frontFace) {
  if ((topology !== (void 0))) {
    this.hR = topology;
  }
  if ((frontFace !== (void 0))) {
    this.hP = frontFace;
  }
  if ((geometry !== (void 0))) {
    $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, 0, geometry.hu, geometry.gH, false);
    this.eH = 1;
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  if ((vertices !== (void 0))) {
    $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, 0, vertices, null, false);
    this.eH = 1;
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  if ((geometries !== (void 0))) {
    var use32 = false;
    var i = 0;
    while ((i < (geometries.length | 0))) {
      var idx = geometries[i].gH;
      if (((idx !== null) && (!(!(idx instanceof Uint32Array))))) {
        use32 = true;
      }
      i = ((1 + i) | 0);
    }
    i = 0;
    while ((i < (geometries.length | 0))) {
      var geo = geometries[i];
      $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, i, geo.hu, geo.gH, use32);
      i = ((1 + i) | 0);
    }
    this.eH = (geometries.length | 0);
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  if ((verticesAll !== (void 0))) {
    var i$1 = 0;
    while ((i$1 < (verticesAll.length | 0))) {
      $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, i$1, verticesAll[i$1], null, false);
      i$1 = ((1 + i$1) | 0);
    }
    this.eH = (verticesAll.length | 0);
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Form = new $TypeData().i($c_Ltrivalibs_graphics_painter_Form, "trivalibs.graphics.painter.Form", ({
  ej: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_FormBuffers() {
  this.aS = null;
  this.hT = 0;
  this.gX = 0;
  this.fl = 0;
  this.aQ = null;
  this.hS = 0;
  this.fQ = 0;
  this.aR = 0;
  this.eJ = null;
  this.aS = null;
  this.hT = 0;
  this.gX = 0;
  this.fl = 0;
  this.aQ = null;
  this.hS = 0;
  this.fQ = 0;
  this.aR = 0;
  this.eJ = "uint16";
}
$p = $c_Ltrivalibs_graphics_painter_FormBuffers.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_FormBuffers;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_FormBuffers() {
}
$h_Ltrivalibs_graphics_painter_FormBuffers.prototype = $p;
var $d_Ltrivalibs_graphics_painter_FormBuffers = new $TypeData().i($c_Ltrivalibs_graphics_painter_FormBuffers, "trivalibs.graphics.painter.FormBuffers", ({
  ek: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter) {
  this.jC = null;
  this.jB = null;
  this.F = null;
  this.jC = shade;
  this.jB = painter;
  this.F = [];
}
$p = $c_Ltrivalibs_graphics_painter_InstanceList.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_InstanceList;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_InstanceList() {
}
$h_Ltrivalibs_graphics_painter_InstanceList.prototype = $p;
$p.E = (function() {
  return (this.F.length | 0);
});
$p.a1 = (function() {
  var inst = new $c_Ltrivalibs_graphics_painter_Instance(this.jC, this.jB);
  this.F.push(inst);
  return (((this.F.length | 0) - 1) | 0);
});
var $d_Ltrivalibs_graphics_painter_InstanceList = new $TypeData().i($c_Ltrivalibs_graphics_painter_InstanceList, "trivalibs.graphics.painter.InstanceList", ({
  em: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_LayerBindCache(panelId, epoch, valueGroup, panelGroup) {
  this.jE = 0;
  this.jD = 0;
  this.hV = null;
  this.hU = null;
  this.jE = panelId;
  this.jD = epoch;
  this.hV = valueGroup;
  this.hU = panelGroup;
}
$p = $c_Ltrivalibs_graphics_painter_LayerBindCache.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_LayerBindCache;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_LayerBindCache() {
}
$h_Ltrivalibs_graphics_painter_LayerBindCache.prototype = $p;
var $d_Ltrivalibs_graphics_painter_LayerBindCache = new $TypeData().i($c_Ltrivalibs_graphics_painter_LayerBindCache, "trivalibs.graphics.painter.LayerBindCache", ({
  en: 1
}));
function $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var w = ($thiz.fm.width | 0);
  var h = ($thiz.fm.height | 0);
  panel.lz(w, h);
  var msaa = panel.fq;
  var encoder = $thiz.e.createCommandEncoder();
  var panelFormats = panel.iq();
  var colorAttachments = [];
  var t = 0;
  while ((t < panel.mQ())) {
    if ((panel.h4 !== null)) {
      var opt$proxy2 = panel.h4;
      if (msaa) {
        var _2 = panel.kJ(t);
        var TextureViewBundle_this = panel.G[t];
        var _2$1 = TextureViewBundle_this.ad[0];
        var value = opt$proxy2.gU;
        var value$1 = opt$proxy2.gV;
        var value$2 = opt$proxy2.gW;
        var value$3 = opt$proxy2.gT;
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
        var TextureViewBundle_this$2 = panel.G[t];
        var _2$3 = TextureViewBundle_this$2.ad[0];
        var value$4 = opt$proxy2.gU;
        var value$5 = opt$proxy2.gV;
        var value$6 = opt$proxy2.gW;
        var value$7 = opt$proxy2.gT;
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
      var _2$5 = panel.kJ(t);
      var TextureViewBundle_this$3 = panel.G[t];
      var _2$6 = TextureViewBundle_this$3.ad[0];
      var attachment = ({
        "view": _2$5,
        "resolveTarget": _2$6,
        "loadOp": "load",
        "storeOp": "store"
      });
    } else {
      var TextureViewBundle_this$4 = panel.G[t];
      var _2$7 = TextureViewBundle_this$4.ad[0];
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
  if (panel.fX) {
    var _2$8 = panel.kq();
    passDesc.depthStencilAttachment = ({
      "view": _2$8,
      "depthLoadOp": "clear",
      "depthStoreOp": "store",
      "depthClearValue": 1.0
    });
  }
  var shapePass = encoder.beginRenderPass(passDesc);
  var i = 0;
  while ((i < (panel.h6.length | 0))) {
    $p_Ltrivalibs_graphics_painter_Painter__renderShapeOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shape__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_Panel__V($thiz, shapePass, panel.h6[i], panel.fX, msaa, panelFormats, panel);
    i = ((1 + i) | 0);
  }
  shapePass.end();
  $thiz.ab.submit([encoder.finish()]);
  if (panel.fU) {
    $p_Ltrivalibs_graphics_painter_Painter__resolvePanelDepth__Ltrivalibs_graphics_painter_Panel__V($thiz, panel);
  }
  var curEncoder = null;
  var curPass = null;
  var j = 0;
  while ((j < (panel.aT.length | 0))) {
    var layer = panel.aT[j];
    var needsPingPong = layer.lh();
    if ((layer.kH() >= 0)) {
      if ((curPass !== null)) {
        curPass.end();
        $thiz.ab.submit([curEncoder.finish()]);
        curPass = null;
      }
      var mipDstView = panel.G[0].ad[layer.kH()];
      var mipSrcView = ((layer.mn() >= 0) ? panel.G[0].ad[layer.mn()] : panel.hp());
      var enc = $thiz.e.createCommandEncoder();
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
      $thiz.ab.submit([enc.finish()]);
    } else if (needsPingPong) {
      if ((curPass !== null)) {
        curPass.end();
        $thiz.ab.submit([curEncoder.finish()]);
        curPass = null;
      }
      var enc$2 = $thiz.e.createCommandEncoder();
      var _2$10 = panel.mw();
      var _2$11 = [({
        "view": _2$10,
        "loadOp": "load",
        "storeOp": "store"
      })];
      var ppPass = enc$2.beginRenderPass(({
        "colorAttachments": _2$11
      }));
      $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V($thiz, ppPass, layer, false, false, panelFormats, panel.hp(), panel);
      ppPass.end();
      $thiz.ab.submit([enc$2.finish()]);
      panel.mO();
    } else {
      if ((curPass === null)) {
        curEncoder = $thiz.e.createCommandEncoder();
        var $x_1 = curEncoder;
        var _2$12 = panel.hp();
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
    $thiz.ab.submit([curEncoder.finish()]);
  }
  var hasMipTargetLayers = false;
  var mi = 0;
  while ((mi < (panel.aT.length | 0))) {
    if ((panel.aT[mi].kH() >= 0)) {
      hasMipTargetLayers = true;
    }
    mi = ((1 + mi) | 0);
  }
  if (((panel.iK() > 1) && (!hasMipTargetLayers))) {
    $p_Ltrivalibs_graphics_painter_Painter__generateMipmaps__Ltrivalibs_graphics_painter_Panel__V($thiz, panel);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__blitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz) {
  if ((!$thiz.jK)) {
    $thiz.jJ = $thiz.e.createSampler(({
      "magFilter": "nearest",
      "minFilter": "nearest"
    }));
    $thiz.jK = true;
  }
  return $thiz.jJ;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz) {
  if ((!$thiz.jG)) {
    var $x_2 = $thiz.e;
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
    $thiz.jF = $x_1;
    $thiz.jG = true;
  }
  return $thiz.jF;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitPipeline__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz) {
  if ((!$thiz.jI)) {
    var module = $thiz.e.createShaderModule(({
      "code": "\nstruct VsOut {\n  @builtin(position) pos: vec4f,\n  @location(0) uv: vec2f,\n}\n\n@vertex\nfn vs_main(@builtin(vertex_index) vi: u32) -> VsOut {\n  let x = f32((vi << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(vi & 2u) * 2.0 - 1.0;\n  var out: VsOut;\n  out.pos = vec4f(x, y, 0.0, 1.0);\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  return out;\n}\n\n@group(0) @binding(0) var blit_texture: texture_2d<f32>;\n@group(0) @binding(1) var blit_sampler: sampler;\n\n@fragment\nfn fs_main(in: VsOut) -> @location(0) vec4f {\n  return textureSample(blit_texture, blit_sampler, in.uv);\n}\n"
    }));
    var $x_1 = $thiz.e;
    var _2 = [$p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz)];
    var pipelineLayout = $x_1.createPipelineLayout(({
      "bindGroupLayouts": _2
    }));
    var $x_3 = $thiz.e;
    var _2$1 = ({
      "module": module,
      "entryPoint": "vs_main"
    });
    var f$proxy4 = $thiz.fn;
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
    $thiz.jH = $x_2;
    $thiz.jI = true;
  }
  return $thiz.jH;
}
function $p_Ltrivalibs_graphics_painter_Painter__depthResolveBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz) {
  if ((!$thiz.jN)) {
    var $x_2 = $thiz.e;
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
    $thiz.jM = $x_1;
    $thiz.jN = true;
  }
  return $thiz.jM;
}
function $p_Ltrivalibs_graphics_painter_Painter__depthResolvePipeline__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz) {
  if ((!$thiz.jP)) {
    var module = $thiz.e.createShaderModule(({
      "code": "\n@group(0) @binding(0) var ms_depth: texture_depth_multisampled_2d;\n\n@vertex\nfn vs_main(@builtin(vertex_index) vi: u32) -> @builtin(position) vec4f {\n  let x = f32((vi << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(vi & 2u) * 2.0 - 1.0;\n  return vec4f(x, y, 0.0, 1.0);\n}\n\n@fragment\nfn fs_main(@builtin(position) pos: vec4f) -> @builtin(frag_depth) f32 {\n  return textureLoad(ms_depth, vec2i(pos.xy), 0);\n}\n"
    }));
    var $x_1 = $thiz.e;
    var _2 = [$p_Ltrivalibs_graphics_painter_Painter__depthResolveBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz)];
    var pl = $x_1.createPipelineLayout(({
      "bindGroupLayouts": _2
    }));
    var $x_3 = $thiz.e;
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
    $thiz.jO = $x_2;
    $thiz.jP = true;
  }
  return $thiz.jO;
}
function $p_Ltrivalibs_graphics_painter_Painter__resolvePanelDepth__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var encoder = $thiz.e.createCommandEncoder();
  var _2 = [];
  var _2$1 = panel.mE();
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
  var $x_1 = $thiz.e;
  var _2$3 = $p_Ltrivalibs_graphics_painter_Painter__depthResolveBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz);
  var _2$4 = panel.kq();
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
  $thiz.ab.submit([encoder.finish()]);
}
function $p_Ltrivalibs_graphics_painter_Painter__mipBlitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz) {
  if ((!$thiz.jR)) {
    $thiz.jQ = $thiz.e.createSampler(({
      "magFilter": "linear",
      "minFilter": "linear"
    }));
    $thiz.jR = true;
  }
  return $thiz.jQ;
}
function $p_Ltrivalibs_graphics_painter_Painter__getMipBlitPipeline__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, format) {
  if ((!(!(!(!$thiz.gZ.hasOwnProperty(format)))))) {
    return $thiz.gZ[format];
  } else {
    var module = $thiz.e.createShaderModule(({
      "code": "\nstruct VsOut {\n  @builtin(position) pos: vec4f,\n  @location(0) uv: vec2f,\n}\n\n@vertex\nfn vs_main(@builtin(vertex_index) vi: u32) -> VsOut {\n  let x = f32((vi << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(vi & 2u) * 2.0 - 1.0;\n  var out: VsOut;\n  out.pos = vec4f(x, y, 0.0, 1.0);\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  return out;\n}\n\n@group(0) @binding(0) var blit_texture: texture_2d<f32>;\n@group(0) @binding(1) var blit_sampler: sampler;\n\n@fragment\nfn fs_main(in: VsOut) -> @location(0) vec4f {\n  return textureSample(blit_texture, blit_sampler, in.uv);\n}\n"
    }));
    var $x_1 = $thiz.e;
    var _2 = [$p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz)];
    var pl = $x_1.createPipelineLayout(({
      "bindGroupLayouts": _2
    }));
    var $x_2 = $thiz.e;
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
    $thiz.gZ[format] = p;
    return p;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__generateMipmaps__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var mipCount = panel.iK();
  if ((mipCount <= 1)) {
    return (void 0);
  }
  var fmt = (((panel.eL.length | 0) > 0) ? panel.eL[0] : $thiz.fn);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getMipBlitPipeline__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, fmt);
  var i = 1;
  while ((i < mipCount)) {
    var srcView = panel.G[0].ad[((i - 1) | 0)];
    var dstView = panel.G[0].ad[i];
    var encoder = $thiz.e.createCommandEncoder();
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
    var $x_1 = $thiz.e;
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
    $thiz.ab.submit([encoder.finish()]);
    i = ((1 + i) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, bindings, panelBindings) {
  $thiz.a4.length = (bindings.length | 0);
  var i = 0;
  while ((i < (bindings.length | 0))) {
    $thiz.a4[i] = bindings[i];
    i = ((1 + i) | 0);
  }
  $thiz.L.length = (panelBindings.length | 0);
  var j = 0;
  while ((j < (panelBindings.length | 0))) {
    $thiz.L[j] = panelBindings[j];
    j = ((1 + j) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shade, workBindings, workPanelBindings) {
  var dict = panel.h5;
  var keys = Object.keys(dict);
  var i = 0;
  while ((i < (keys.length | 0))) {
    var name = keys[i];
    var value = dict[name];
    if ((!(!(!(!shade.t.hasOwnProperty(name)))))) {
      var idx = (shade.t[name] | 0);
      if (((idx >= (workBindings.length | 0)) || (workBindings[idx] === null))) {
        while (((workBindings.length | 0) <= idx)) {
          workBindings.push(null);
        }
        workBindings[idx] = value;
      }
    } else if ((!(!(!(!shade.hZ.hasOwnProperty(name)))))) {
      var idx$2 = (shade.hZ[name] | 0);
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
  while ((i < (inst.c.length | 0))) {
    if ((inst.c[i] !== null)) {
      while (((workBindings.length | 0) <= i)) {
        workBindings.push(null);
      }
      workBindings[i] = inst.c[i];
    }
    i = ((1 + i) | 0);
  }
  var j = 0;
  while ((j < (inst.gY.length | 0))) {
    if ((inst.gY[j] !== null)) {
      while (((workPanelBindings.length | 0) <= j)) {
        workPanelBindings.push(null);
      }
      workPanelBindings[j] = inst.gY[j];
    }
    j = ((1 + j) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel) {
  return ((panel !== null) && ((Object.keys(panel.h5).length | 0) > 0));
}
function $p_Ltrivalibs_graphics_painter_Painter__buildValueBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, bindings) {
  if ((((bindings.length | 0) > 0) && (shade.i0 !== null))) {
    var entries = [];
    var i = 0;
    while ((i < (bindings.length | 0))) {
      var b = bindings[i];
      if ((b !== null)) {
        entries.push($p_Ltrivalibs_graphics_painter_Painter__bindingEntry__I__O__sjs_js_Dynamic($thiz, i, b));
      }
      i = ((1 + i) | 0);
    }
    var $x_1 = $thiz.e;
    var _2 = shade.i0;
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
  if ((shade.hY !== null)) {
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
        var view = ((!(!pb.depth)) ? pb.panel.lr() : (((pb.mipLevel | 0) < 0) ? pb.panel.G[(pb.index | 0)].jU : pb.panel.G[(pb.index | 0)].ad[(pb.mipLevel | 0)]));
        var value = k;
        entries.push(({
          "binding": value,
          "resource": view
        }));
      }
      k = ((1 + k) | 0);
    }
    if (((entries.length | 0) > 0)) {
      var $x_1 = $thiz.e;
      var _2 = shade.hY;
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
  var fmts = ((formats !== null) ? formats : [$thiz.fn]);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, shape.ac, shape.i2, fmts, depthTest, multisample, shape.fZ.hR, shape.i3, shape.fZ.hP, shape.fZ.hQ);
  pass.setPipeline(pipeline);
  var form = shape.fZ;
  var bufferCount = form.eH;
  var instanceCount = shape.M.E();
  var hasPanelBinds = $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel);
  if ((instanceCount === 0)) {
    if (hasPanelBinds) {
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, shape.a0, shape.ha);
      $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shape.ac, $thiz.a4, $thiz.L);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.ac, $thiz.a4);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.ac, $thiz.L, null);
    } else {
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.ac, shape.a0);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.ac, shape.ha, null);
    }
    var b = 0;
    while ((b < bufferCount)) {
      var buf = form.eI[b];
      if ((buf.fl > 0)) {
        pass.setVertexBuffer(0, buf.aS, 0.0, buf.gX);
        if ((buf.aR > 0)) {
          pass.setIndexBuffer(buf.aQ, buf.eJ, 0.0, buf.fQ);
          pass.drawIndexed(buf.aR);
        } else {
          pass.draw(buf.fl);
        }
      }
      b = ((1 + b) | 0);
    }
  } else {
    var i = 0;
    while ((i < instanceCount)) {
      var inst = shape.M.F[i];
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, shape.a0, shape.ha);
      if (hasPanelBinds) {
        $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shape.ac, $thiz.a4, $thiz.L);
      }
      $p_Ltrivalibs_graphics_painter_Painter__applyInstanceBindings__Ltrivalibs_graphics_painter_Instance__sjs_js_Array__sjs_js_Array__V($thiz, inst, $thiz.a4, $thiz.L);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.ac, $thiz.a4);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.ac, $thiz.L, null);
      var b$2 = 0;
      while ((b$2 < bufferCount)) {
        var buf$2 = form.eI[b$2];
        if ((buf$2.fl > 0)) {
          pass.setVertexBuffer(0, buf$2.aS, 0.0, buf$2.gX);
          if ((buf$2.aR > 0)) {
            pass.setIndexBuffer(buf$2.aQ, buf$2.eJ, 0.0, buf$2.fQ);
            pass.drawIndexed(buf$2.aR);
          } else {
            pass.draw(buf$2.fl);
          }
        }
        b$2 = ((1 + b$2) | 0);
      }
      i = ((1 + i) | 0);
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V($thiz, pass, layer, depthTest, multisample, formats, srcView, panel) {
  var fmts = ((formats !== null) ? formats : [$thiz.fn]);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, layer.aX(), layer.n3(), fmts, depthTest, multisample, "triangle-list", "none", "ccw", null);
  pass.setPipeline(pipeline);
  var instanceCount = layer.lY().E();
  var hasPanelBinds = $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel);
  if ((instanceCount === 0)) {
    if (hasPanelBinds) {
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, layer.kk(), layer.kK());
      $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, layer.aX(), $thiz.a4, $thiz.L);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, layer.aX(), $thiz.a4);
      var effectiveSrcView = (((($thiz.L.length | 0) > 0) && ($thiz.L[0] !== null)) ? null : srcView);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.aX(), $thiz.L, effectiveSrcView);
    } else {
      var c = layer.n4();
      if (((((c !== null) && (panel !== null)) && (c.jE === panel.hX)) && (c.jD === panel.eK))) {
        if ((c.hV !== null)) {
          pass.setBindGroup(0, c.hV);
        }
        if ((c.hU !== null)) {
          pass.setBindGroup(1, c.hU);
        }
      } else {
        var vg = $p_Ltrivalibs_graphics_painter_Painter__buildValueBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, layer.aX(), layer.kk());
        var pg = $p_Ltrivalibs_graphics_painter_Painter__buildPanelBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, layer.aX(), layer.kK(), srcView);
        if ((vg !== null)) {
          pass.setBindGroup(0, vg);
        }
        if ((pg !== null)) {
          pass.setBindGroup(1, pg);
        }
        layer.n5(((panel !== null) ? new $c_Ltrivalibs_graphics_painter_LayerBindCache(panel.hX, panel.eK, vg, pg) : null));
      }
    }
    pass.draw(3);
  } else {
    var i = 0;
    while ((i < instanceCount)) {
      var inst = layer.lY().F[i];
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, layer.kk(), layer.kK());
      if (hasPanelBinds) {
        $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, layer.aX(), $thiz.a4, $thiz.L);
      }
      $p_Ltrivalibs_graphics_painter_Painter__applyInstanceBindings__Ltrivalibs_graphics_painter_Instance__sjs_js_Array__sjs_js_Array__V($thiz, inst, $thiz.a4, $thiz.L);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, layer.aX(), $thiz.a4);
      var effectiveSrcView$2 = (((($thiz.L.length | 0) > 0) && ($thiz.L[0] !== null)) ? null : srcView);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.aX(), $thiz.L, effectiveSrcView$2);
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
  var key = (((((((((((((((shade.jS + "|") + $p_Ltrivalibs_graphics_painter_Painter__blendKeyStr__Ltrivalibs_graphics_painter_BlendState__T($thiz, blendState)) + "|") + formats.join(",")) + "|") + depthTest) + "|") + multisample) + "|") + topology) + "|") + cullMode) + "|") + frontFace) + stripKey);
  var cached = $thiz.hW[key];
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
    if ((shade.i1 !== null)) {
      var _2 = shade.h9;
      var _2$1 = [shade.i1];
      var vertexDescriptor = ({
        "module": _2,
        "entryPoint": "vs_main",
        "buffers": _2$1
      });
    } else {
      var _2$2 = shade.h9;
      var vertexDescriptor = ({
        "module": _2$2,
        "entryPoint": "vs_main"
      });
    }
    var _2$3 = shade.jT;
    var _2$4 = shade.h9;
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
    var p = $thiz.e.createRenderPipeline(desc);
    $thiz.hW[key] = p;
    return p;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__bindingEntry__I__O__sjs_js_Dynamic($thiz, i, b) {
  if ((b instanceof $c_Ltrivalibs_graphics_buffers_BufferBinding)) {
    var _2 = b.f;
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
  this.e = null;
  this.ab = null;
  this.fm = null;
  this.jL = null;
  this.fn = null;
  this.hW = null;
  this.h0 = 0;
  this.h1 = null;
  this.jJ = null;
  this.jK = false;
  this.jF = null;
  this.jG = false;
  this.jH = null;
  this.jI = false;
  this.jM = null;
  this.jN = false;
  this.jO = null;
  this.jP = false;
  this.jQ = null;
  this.jR = false;
  this.gZ = null;
  this.a4 = null;
  this.L = null;
  this.e = device;
  this.ab = queue;
  this.fm = canvas;
  this.jL = context;
  this.fn = preferredFormat;
  this.hW = ({});
  this.h0 = 0;
  this.h1 = [];
  this.gZ = ({});
  this.a4 = [];
  this.L = [];
}
$p = $c_Ltrivalibs_graphics_painter_Painter.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Painter;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Painter() {
}
$h_Ltrivalibs_graphics_painter_Painter.prototype = $p;
$p.mr = (function(cb) {
  this.h1.push(cb);
  cb.kf((this.fm.width | 0), (this.fm.height | 0));
});
$p.lE = (function(w, h) {
  var k = 0;
  while ((k < (this.h1.length | 0))) {
    this.h1[k].kf(w, h);
    k = ((1 + k) | 0);
  }
});
$p.lH = (function(geometry, vertices, geometries, verticesAll, topology, frontFace) {
  return new $c_Ltrivalibs_graphics_painter_Form(this).mJ(geometry, vertices, geometries, verticesAll, topology, frontFace);
});
$p.hn = (function(form, shade, cullMode, blendState) {
  return new $c_Ltrivalibs_graphics_painter_Shape(this, form, shade).mK(cullMode, blendState);
});
$p.mt = (function(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers) {
  return new $c_Ltrivalibs_graphics_painter_Panel(this).mI(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers);
});
$p.mL = (function(panel) {
  var encoder = this.e.createCommandEncoder();
  var swapChainView = this.jL.getCurrentTexture().createView();
  var _2 = [({
    "view": swapChainView,
    "loadOp": "load",
    "storeOp": "store"
  })];
  var pass = encoder.beginRenderPass(({
    "colorAttachments": _2
  }));
  var $x_1 = this.e;
  var _2$1 = $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout(this);
  var _2$2 = panel.hp();
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
  this.ab.submit([encoder.finish()]);
});
var $d_Ltrivalibs_graphics_painter_Painter = new $TypeData().i($c_Ltrivalibs_graphics_painter_Painter, "trivalibs.graphics.painter.Painter", ({
  eo: 1
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
$p.lX = (function(canvas) {
  var maybeGpu = $m_Ltrivalibs_graphics_painter_WebGPU$().lO();
  if ((maybeGpu === (void 0))) {
    return Promise.reject(Error("WebGPU is not supported"));
  } else {
    var promise$proxy1 = maybeGpu.requestAdapter();
    var promise$proxy3 = promise$proxy1.then(((value$2) => {
      if ((value$2 === null)) {
        throw new $c_sjs_js_JavaScriptException(Error("Failed to get WebGPU adapter")).aP;
      } else {
        return value$2;
      }
    }));
    var f$proxy11 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((adapter$2) => {
      var promise$proxy2 = adapter$2.requestDevice();
      var f$proxy10 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((device$2) => {
        var queue = device$2.queue;
        var context = $m_Ltrivalibs_graphics_painter_WebGPU$().lN(canvas);
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
            painter.lE(rw, rh);
          }
        }));
        observer.observe(canvas);
        return painter;
      }));
      return promise$proxy2.then($m_sjs_js_Any$().gg(f$proxy10));
    }));
    return promise$proxy3.then($m_sjs_js_Any$().gg(f$proxy11));
  }
});
$p.lW = (function(canvas, setup) {
  var promise$proxy4 = this.lX(canvas);
  return promise$proxy4.then($m_sjs_js_Any$().gg(setup));
});
var $d_Ltrivalibs_graphics_painter_Painter$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_Painter$, "trivalibs.graphics.painter.Painter$", ({
  ep: 1
}));
var $n_Ltrivalibs_graphics_painter_Painter$;
function $m_Ltrivalibs_graphics_painter_Painter$() {
  if ((!$n_Ltrivalibs_graphics_painter_Painter$)) {
    $n_Ltrivalibs_graphics_painter_Painter$ = new $c_Ltrivalibs_graphics_painter_Painter$();
  }
  return $n_Ltrivalibs_graphics_painter_Painter$;
}
function $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V($thiz) {
  if (($thiz.fS !== null)) {
    $thiz.fS.destroy();
  }
  if (($thiz.fV !== null)) {
    $thiz.fV.destroy();
  }
  var depthUsage = ($thiz.fR ? 20 : 16);
  var $x_1 = $thiz.eM.e;
  var value = $thiz.fp;
  var value$1 = $thiz.fo;
  var _2 = ({
    "width": value,
    "height": value$1
  });
  var _2$1 = ($thiz.fq ? 4 : 1);
  var depthTex = $x_1.createTexture(({
    "size": _2,
    "format": "depth24plus",
    "usage": depthUsage,
    "sampleCount": _2$1
  }));
  $thiz.fS = depthTex;
  $thiz.h2 = depthTex.createView();
  if (($thiz.fR && $thiz.fq)) {
    var $x_2 = $thiz.eM.e;
    var value$2 = $thiz.fp;
    var value$3 = $thiz.fo;
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
    $thiz.fV = resTex;
    $thiz.fW = resTex.createView();
    $thiz.fU = true;
  } else {
    $thiz.fV = null;
    $thiz.fW = null;
    $thiz.fU = false;
  }
}
function $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z($thiz) {
  var i = 0;
  while ((i < ($thiz.aT.length | 0))) {
    if ($thiz.aT[i].lh()) {
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
  this.eM = null;
  this.h8 = 0;
  this.h7 = 0;
  this.h4 = null;
  this.fX = false;
  this.fq = false;
  this.fY = 0;
  this.eL = null;
  this.h6 = null;
  this.aT = null;
  this.h5 = null;
  this.hX = 0;
  this.eK = 0;
  this.an = null;
  this.G = null;
  this.fS = null;
  this.h2 = null;
  this.fR = false;
  this.fV = null;
  this.fW = null;
  this.fU = false;
  this.fT = null;
  this.h3 = null;
  this.fp = 0;
  this.fo = 0;
  this.eM = painter;
  this.h8 = 0;
  this.h7 = 0;
  this.h4 = null;
  this.fX = false;
  this.fq = false;
  this.fY = 1;
  this.eL = [];
  this.h6 = [];
  this.aT = [];
  this.h5 = ({});
  $m_Ltrivalibs_graphics_painter_panel$package$().hb = ((1 + $m_Ltrivalibs_graphics_painter_panel$package$().hb) | 0);
  this.hX = $m_Ltrivalibs_graphics_painter_panel$package$().hb;
  this.eK = 0;
  this.an = [];
  this.G = [];
  this.fS = null;
  this.h2 = null;
  this.fR = false;
  this.fV = null;
  this.fW = null;
  this.fU = false;
  this.fT = [];
  this.h3 = [];
  this.fp = 0;
  this.fo = 0;
}
$p = $c_Ltrivalibs_graphics_painter_Panel.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Panel;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Panel() {
}
$h_Ltrivalibs_graphics_painter_Panel.prototype = $p;
$p.iK = (function() {
  if ((this.fY === 0)) {
    var a = this.fp;
    var b = this.fo;
    var maxDim = ((a > b) ? a : b);
    if ((maxDim <= 0)) {
      return 1;
    } else {
      var a$1 = maxDim;
      return ((1 + $doubleToInt(((+Math.log(a$1)) / (+Math.log(2.0))))) | 0);
    }
  } else {
    return this.fY;
  }
});
$p.iq = (function() {
  return (((this.eL.length | 0) === 0) ? [this.eM.fn] : this.eL);
});
$p.mQ = (function() {
  return (this.iq().length | 0);
});
$p.hp = (function() {
  var TextureViewBundle_this = this.G[0];
  return TextureViewBundle_this.ad[0];
});
$p.mw = (function() {
  var TextureViewBundle_this = this.G[1];
  return TextureViewBundle_this.ad[0];
});
$p.kq = (function() {
  return this.h2;
});
$p.mE = (function() {
  return this.fW;
});
$p.kJ = (function(index) {
  return this.h3[index];
});
$p.mO = (function() {
  var t = this.an[0];
  this.an[0] = this.an[1];
  this.an[1] = t;
  var sv = this.G[0];
  this.G[0] = this.G[1];
  this.G[1] = sv;
  this.eK = ((1 + this.eK) | 0);
});
$p.lr = (function() {
  if (((!this.fR) && (this.fS !== null))) {
    this.fR = true;
    $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V(this);
  }
  return (this.fU ? this.fW : this.h2);
});
$p.mI = (function(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers) {
  if ((width !== (void 0))) {
    var v = (width | 0);
    this.h8 = v;
  }
  if ((height !== (void 0))) {
    var v$1 = (height | 0);
    this.h7 = v$1;
  }
  if ((clearColor !== (void 0))) {
    this.h4 = ((clearColor === null) ? null : new $c_Ltrivalibs_graphics_math_cpu_Vec4(clearColor.gU, clearColor.gV, clearColor.gW, clearColor.gT));
  }
  if ((depthTest !== (void 0))) {
    var v$2 = (!(!depthTest));
    this.fX = v$2;
  }
  if ((multisample !== (void 0))) {
    var v$3 = (!(!multisample));
    this.fq = v$3;
  }
  if ((mips !== (void 0))) {
    if ((!(!mips))) {
      this.fY = 0;
    }
  }
  if ((mipLevels !== (void 0))) {
    var v$5 = (mipLevels | 0);
    if ((v$5 > 0)) {
      this.fY = v$5;
    }
  }
  var x$1 = ((formats === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy1$1__O__O(this, format) : formats);
  if ((x$1 !== (void 0))) {
    this.eL = x$1;
  }
  var x$2 = ((shapes === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy2$1__O__O(this, shape) : shapes);
  if ((x$2 !== (void 0))) {
    this.h6 = x$2;
  }
  var x$3 = ((layers === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy3$1__O__O(this, layer) : layers);
  if ((x$3 !== (void 0))) {
    this.aT = x$3;
  }
  if ((((this.eL.length | 0) > 1) && $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z(this))) {
    throw new $c_sjs_js_JavaScriptException(Error("Panel: MRT (multiple formats) cannot host auto-pong layers. Chain a single-format panel for post-processing instead.")).aP;
  }
  return this;
});
$p.lz = (function(canvasW, canvasH) {
  var targetW = ((this.h8 === 0) ? canvasW : this.h8);
  var targetH = ((this.h7 === 0) ? canvasH : this.h7);
  if (((targetW !== this.fp) || (targetH !== this.fo))) {
    var d = 0;
    while ((d < (this.an.length | 0))) {
      this.an[d].destroy();
      d = ((1 + d) | 0);
    }
    d = 0;
    while ((d < (this.fT.length | 0))) {
      this.fT[d].destroy();
      d = ((1 + d) | 0);
    }
    this.fp = targetW;
    this.fo = targetH;
    var mipCount = this.iK();
    var fmts = this.iq();
    var hasPong = $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z(this);
    this.an = [];
    this.G = [];
    this.fT = [];
    this.h3 = [];
    var i = 0;
    while ((i < (fmts.length | 0))) {
      var fmt = fmts[i];
      var $x_1 = this.eM.e;
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
      this.an.push(tex);
      this.G.push($p_Ltrivalibs_graphics_painter_Panel__buildViews__Ltrivalibs_graphics_painter_GPUTexture__I__Ltrivalibs_graphics_painter_TextureViewBundle(this, tex, mipCount));
      if (this.fq) {
        var $x_2 = this.eM.e;
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
        this.fT.push(msaaTex);
        this.h3.push(msaaTex.createView());
      }
      i = ((1 + i) | 0);
    }
    if (hasPong) {
      var $x_3 = this.eM.e;
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
      this.an.push(pongTex);
      this.G.push($p_Ltrivalibs_graphics_painter_Panel__buildViews__Ltrivalibs_graphics_painter_GPUTexture__I__Ltrivalibs_graphics_painter_TextureViewBundle(this, pongTex, mipCount));
    }
    if (this.fX) {
      $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V(this);
    }
    this.eK = ((1 + this.eK) | 0);
  }
});
var $d_Ltrivalibs_graphics_painter_Panel = new $TypeData().i($c_Ltrivalibs_graphics_painter_Panel, "trivalibs.graphics.painter.Panel", ({
  eq: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Shade(id, shaderModule, vertexBufferLayout, valueBindGroupLayout, panelBindGroupLayout, pipelineLayout, isLayer, uniformIndices, panelIndices) {
  this.jS = 0;
  this.h9 = null;
  this.i1 = null;
  this.i0 = null;
  this.hY = null;
  this.jT = null;
  this.t = null;
  this.hZ = null;
  this.jS = id;
  this.h9 = shaderModule;
  this.i1 = vertexBufferLayout;
  this.i0 = valueBindGroupLayout;
  this.hY = panelBindGroupLayout;
  this.jT = pipelineLayout;
  this.t = uniformIndices;
  this.hZ = panelIndices;
}
$p = $c_Ltrivalibs_graphics_painter_Shade.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Shade;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Shade() {
}
$h_Ltrivalibs_graphics_painter_Shade.prototype = $p;
var $d_Ltrivalibs_graphics_painter_Shade = new $TypeData().i($c_Ltrivalibs_graphics_painter_Shade, "trivalibs.graphics.painter.Shade", ({
  er: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_TextureViewBundle(perMip, sampling) {
  this.ad = null;
  this.jU = null;
  this.ad = perMip;
  this.jU = sampling;
}
$p = $c_Ltrivalibs_graphics_painter_TextureViewBundle.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_TextureViewBundle;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_TextureViewBundle() {
}
$h_Ltrivalibs_graphics_painter_TextureViewBundle.prototype = $p;
var $d_Ltrivalibs_graphics_painter_TextureViewBundle = new $TypeData().i($c_Ltrivalibs_graphics_painter_TextureViewBundle, "trivalibs.graphics.painter.TextureViewBundle", ({
  et: 1
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
$p.lO = (function() {
  return window.navigator.gpu;
});
$p.lN = (function(canvas) {
  return canvas.getContext("webgpu");
});
var $d_Ltrivalibs_graphics_painter_WebGPU$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_WebGPU$, "trivalibs.graphics.painter.WebGPU$", ({
  eu: 1
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
  this.hb = 0;
  this.hb = 0;
}
$p = $c_Ltrivalibs_graphics_painter_panel$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_panel$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_panel$package$() {
}
$h_Ltrivalibs_graphics_painter_panel$package$.prototype = $p;
var $d_Ltrivalibs_graphics_painter_panel$package$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_panel$package$, "trivalibs.graphics.painter.panel$package$", ({
  ev: 1
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
  this.jV = null;
  this.N = null;
  this.i5 = 0.0;
  this.jW = 0.0;
  this.jV = cam;
  this.N = in$1;
  this.i5 = sensitivity;
  this.jW = speed;
}
$p = $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController() {
}
$h_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController.prototype = $p;
$p.eU = (function(tpf) {
  var dist = ((this.jW * tpf) / 1000.0);
  var forward = 0.0;
  if (((this.N.T.al("KeyW") || this.N.T.al("ArrowUp")) || (this.N.ii.eR && (this.N.T.kL() === 1)))) {
    forward = (forward + dist);
  }
  if ((((this.N.T.al("KeyS") || this.N.T.al("ArrowDown")) || this.N.T.m1(2)) || (this.N.T.kL() >= 2))) {
    forward = (forward - dist);
  }
  var left = 0.0;
  if ((this.N.T.al("KeyA") || this.N.T.al("ArrowLeft"))) {
    left = (left + dist);
  }
  if ((this.N.T.al("KeyD") || this.N.T.al("ArrowRight"))) {
    left = (left - dist);
  }
  var up = 0.0;
  if (this.N.T.al("Space")) {
    up = (up + dist);
  }
  if ((this.N.T.al("ShiftLeft") || this.N.T.al("ShiftRight"))) {
    up = (up - dist);
  }
  var drag = this.N.ih.lq();
  var deltaH = (((+drag.af) * this.i5) / 1000.0);
  var deltaV = (((+drag.a8) * this.i5) / 1000.0);
  this.jV.mo(forward, left, up, deltaH, deltaV);
});
var $d_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController = new $TypeData().i($c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController, "trivalibs.graphics.scene.BasicFirstPersonCameraController", ({
  ew: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_scene_PerspectiveCamera(fov, aspect, near, far, rotH, rotV, pos, proj) {
  this.eN = 0.0;
  this.fr = 0.0;
  this.ft = 0.0;
  this.fs = 0.0;
  this.a5 = 0.0;
  this.aF = 0.0;
  this.R = null;
  this.i6 = null;
  this.eN = fov;
  this.fr = aspect;
  this.ft = near;
  this.fs = far;
  this.a5 = rotH;
  this.aF = rotV;
  this.R = pos;
  this.i6 = proj;
}
$p = $c_Ltrivalibs_graphics_scene_PerspectiveCamera.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_PerspectiveCamera;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_PerspectiveCamera() {
}
$h_Ltrivalibs_graphics_scene_PerspectiveCamera.prototype = $p;
$p.iN = (function(fov, aspect, near, far, rotH, rotV, pos) {
  var needsProj = ((((fov !== this.eN) || (aspect !== this.fr)) || (near !== this.ft)) || (far !== this.fs));
  this.eN = fov;
  this.fr = aspect;
  this.ft = near;
  this.fs = far;
  if ((rotH !== this.a5)) {
    this.a5 = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().iR(rotH);
  }
  if ((rotV !== this.aF)) {
    this.aF = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().iQ(rotV);
  }
  this.R = pos;
  if (needsProj) {
    this.i6 = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($m_Ltrivalibs_graphics_math_cpu_Mat4$(), $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().kQ(this.eN, this.fr), aspect, near, far);
  }
});
$p.mo = (function(forward, left, up, deltaH, deltaV) {
  if ((deltaH !== 0.0)) {
    this.a5 = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().iR((this.a5 + deltaH));
  }
  if ((deltaV !== 0.0)) {
    this.aF = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().iQ((this.aF + deltaV));
  }
  if ((up !== 0.0)) {
    this.R = new $c_Ltrivalibs_graphics_math_cpu_Vec3(this.R.q, (this.R.m + up), this.R.o);
  }
  if ((forward !== 0.0)) {
    var $x_5 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().j();
    var $x_4 = this.R;
    var $x_3 = $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
    var $x_2 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().j();
    var p$proxy1 = this.a5;
    var $x_1 = Math.sin(p$proxy1);
    var p$proxy2 = this.a5;
    this.R = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($x_5, $x_4, $x_3, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($x_2, new $c_Ltrivalibs_graphics_math_cpu_Vec3((-(+$x_1)), 0.0, (-(+Math.cos(p$proxy2)))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), forward));
  }
  if ((left !== 0.0)) {
    var $x_10 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().j();
    var $x_9 = this.R;
    var $x_8 = $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
    var $x_7 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().j();
    var p$proxy3 = this.a5;
    var $x_6 = Math.cos(p$proxy3);
    var p$proxy4 = this.a5;
    this.R = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($x_10, $x_9, $x_8, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($x_7, new $c_Ltrivalibs_graphics_math_cpu_Vec3((-(+$x_6)), 0.0, (+Math.sin(p$proxy4))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), left));
  }
});
$p.mU = (function() {
  return new $c_Ltrivalibs_graphics_scene_Transform(this.R, $f_Ltrivalibs_graphics_math_cpu_QuatImmutableOps__quatMul__O__Ltrivalibs_graphics_math_Vec4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$(), $m_Ltrivalibs_graphics_math_cpu_Quat$().gh(this.a5), $m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$(), $m_Ltrivalibs_graphics_math_cpu_Quat$().lL(this.aF)), new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0));
});
$p.mZ = (function() {
  var $x_1 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().ky();
  var t = this.mU();
  return $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($x_1, $m_Ltrivalibs_graphics_math_cpu_Mat4$().eS(t.aW, t.aU, t.aV), $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
});
var $d_Ltrivalibs_graphics_scene_PerspectiveCamera = new $TypeData().i($c_Ltrivalibs_graphics_scene_PerspectiveCamera, "trivalibs.graphics.scene.PerspectiveCamera", ({
  ex: 1
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
$p.iR = (function(a) {
  var r = (a % 6.283185307179586);
  return ((r < 0.0) ? (r + 6.283185307179586) : r);
});
$p.iQ = (function(a) {
  return ((a < (-1.5707963267948966)) ? (-1.5707963267948966) : ((a > 1.5707963267948966) ? 1.5707963267948966 : a));
});
$p.kQ = (function(fov, aspect) {
  var p$proxy5 = (0.5 * fov);
  var p$proxy6 = ((+Math.tan(p$proxy5)) / (+Math.min(aspect, 1.0)));
  return (2.0 * (+Math.atan(p$proxy6)));
});
$p.l8 = (function(fov, aspect, near, far, rotH, rotV, pos) {
  var proj = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($m_Ltrivalibs_graphics_math_cpu_Mat4$(), this.kQ(fov, aspect), aspect, near, far);
  return new $c_Ltrivalibs_graphics_scene_PerspectiveCamera(fov, aspect, near, far, this.iR(rotH), this.iQ(rotV), pos, proj);
});
var $d_Ltrivalibs_graphics_scene_PerspectiveCamera$ = new $TypeData().i($c_Ltrivalibs_graphics_scene_PerspectiveCamera$, "trivalibs.graphics.scene.PerspectiveCamera$", ({
  ey: 1
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
  this.aW = null;
  this.aU = null;
  this.aV = null;
  this.aW = translation;
  this.aU = rotation;
  this.aV = scale;
}
$p = $c_Ltrivalibs_graphics_scene_Transform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_Transform;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_Transform() {
}
$h_Ltrivalibs_graphics_scene_Transform.prototype = $p;
var $d_Ltrivalibs_graphics_scene_Transform = new $TypeData().i($c_Ltrivalibs_graphics_scene_Transform, "trivalibs.graphics.scene.Transform", ({
  ez: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_scene_scene\uff3fobject$package$() {
}
$p = $c_Ltrivalibs_graphics_scene_scene\uff3fobject$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_scene\uff3fobject$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_scene\uff3fobject$package$() {
}
$h_Ltrivalibs_graphics_scene_scene\uff3fobject$package$.prototype = $p;
$p.W = (function(m) {
  return $f_Ltrivalibs_graphics_math_Mat3ImmutableOps__transpose__O__Ltrivalibs_graphics_math_Mat3Base__O($m_Ltrivalibs_graphics_math_cpu_Mat3$().kw(), $f_Ltrivalibs_graphics_math_Mat3ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat3Base__O($m_Ltrivalibs_graphics_math_cpu_Mat3$().kw(), $m_Ltrivalibs_graphics_math_cpu_Mat3$().lM(m), $m_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$()), $m_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$());
});
var $d_Ltrivalibs_graphics_scene_scene\uff3fobject$package$ = new $TypeData().i($c_Ltrivalibs_graphics_scene_scene\uff3fobject$package$, "trivalibs.graphics.scene.scene_object$package$", ({
  eA: 1
}));
var $n_Ltrivalibs_graphics_scene_scene\uff3fobject$package$;
function $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$() {
  if ((!$n_Ltrivalibs_graphics_scene_scene\uff3fobject$package$)) {
    $n_Ltrivalibs_graphics_scene_scene\uff3fobject$package$ = new $c_Ltrivalibs_graphics_scene_scene\uff3fobject$package$();
  }
  return $n_Ltrivalibs_graphics_scene_scene\uff3fobject$package$;
}
function $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($thiz, builtins) {
  var s = "";
  var i = 0;
  while ((i < (builtins.length | 0))) {
    var b = builtins[i];
    s = ((s + ((((", @builtin(" + b.az) + ") ") + b.aI) + ": ")) + b.aA);
    i = ((1 + i) | 0);
  }
  return s;
}
function $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($thiz, structName, locNames, locTypes, builtins) {
  var array$1 = $m_sjs_js_ArrayOps$().kV($m_sjs_js_ArrayOps$().kU(locNames, new $c_sjs_js_WrappedArray(locTypes)));
  var len = (array$1.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    var $x_2 = i;
    var x0 = array$1[i];
    matchResult3: {
      var $x_1;
      if ((x0 !== null)) {
        var x11 = x0.af;
        if ((x11 !== null)) {
          var name = x11.af;
          var typ = x11.a8;
          var $x_1 = (((((("  @location(" + (x0.a8 | 0)) + ") ") + name) + ": ") + typ) + ",");
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
        var name$1 = x0$1.aI;
        var builtin = x0$1.az;
        var typ$1 = x0$1.aA;
        var $x_3 = (((((("  @builtin(" + builtin) + ") ") + name$1) + ": ") + typ$1) + ",");
        break matchResult4;
      }
      throw new $c_s_MatchError(x0$1);
    }
    res$1[$x_4] = $x_3;
    i$1 = ((1 + i$1) | 0);
  }
  var allFields = $m_sjs_js_ArrayOpsCommon$().p(res, res$1);
  return (((allFields.length | 0) === 0) ? "" : (((("struct " + structName) + " {\n") + allFields.join("\n")) + "\n}"));
}
function $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($thiz, groupIdx, names, types) {
  var array$1 = $m_sjs_js_ArrayOps$().kV($m_sjs_js_ArrayOps$().kU(names, new $c_sjs_js_WrappedArray(types)));
  var len = (array$1.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    var $x_3 = i;
    var x0 = array$1[i];
    matchResult5: {
      var $x_2;
      if ((x0 !== null)) {
        var x20 = x0.af;
        if ((x20 !== null)) {
          var name = x20.af;
          var typ = x20.a8;
          var bindingIdx = (x0.a8 | 0);
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
  eC: 1
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
  this.g4 = null;
  this.g4 = target;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_AssignTarget.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_AssignTarget;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_AssignTarget() {
}
$h_Ltrivalibs_graphics_shader_dsl_AssignTarget.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_AssignTarget = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_AssignTarget, "trivalibs.graphics.shader.dsl.AssignTarget", ({
  eD: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_FnRegistry() {
  this.i7 = null;
  this.i7 = [];
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FnRegistry() {
}
$h_Ltrivalibs_graphics_shader_dsl_FnRegistry.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_FnRegistry = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FnRegistry, "trivalibs.graphics.shader.dsl.FnRegistry", ({
  eE: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$() {
  this.eO = null;
  this.eO = null;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FnRegistry$() {
}
$h_Ltrivalibs_graphics_shader_dsl_FnRegistry$.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_FnRegistry$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FnRegistry$, "trivalibs.graphics.shader.dsl.FnRegistry$", ({
  eF: 1
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
  this.g5 = null;
  this.jX = null;
  this.g5 = in$1;
  this.jX = out;
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FragmentCtx() {
}
$h_Ltrivalibs_graphics_shader_dsl_FragmentCtx.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_FragmentCtx = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FragmentCtx, "trivalibs.graphics.shader.dsl.FragmentCtx", ({
  eG: 1
}));
function $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, data) {
  if ((!(!(!(!(!$thiz.i8.hasOwnProperty(data.name))))))) {
    var dict = $thiz.i8;
    var key = data.name;
    dict[key] = true;
    var array = data.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, array[i]);
      i = ((1 + i) | 0);
    }
    $thiz.i9.push(data.src);
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_Program() {
  this.ib = null;
  this.ia = null;
  this.i9 = null;
  this.i8 = null;
  this.ib = "";
  this.ia = "";
  this.i9 = [];
  this.i8 = ({});
}
$p = $c_Ltrivalibs_graphics_shader_dsl_Program.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_Program;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_Program() {
}
$h_Ltrivalibs_graphics_shader_dsl_Program.prototype = $p;
$p.lU = (function() {
  return this.i9.join("\n\n");
});
var $d_Ltrivalibs_graphics_shader_dsl_Program = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_Program, "trivalibs.graphics.shader.dsl.Program", ({
  eH: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(in$1, out, bindings, textures) {
  this.hd = null;
  this.he = null;
  this.hc = null;
  this.hd = in$1;
  this.he = out;
  this.hc = bindings;
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
  eL: 1
}));
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
$p.kp = (function(device, bindGroupLayouts) {
  return device.createPipelineLayout(({
    "bindGroupLayouts": bindGroupLayouts
  }));
});
var $d_Ltrivalibs_graphics_shader_layouts$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_layouts$, "trivalibs.graphics.shader.layouts$", ({
  eN: 1
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
  this.k0 = null;
  this.ie = null;
  this.g6 = 0;
  this.g7 = 0.0;
  this.hf = 0.0;
  this.hg = 0.0;
  this.ig = false;
  this.k0 = frame;
  this.ie = onFpsCallback;
  this.g6 = 0;
  this.g7 = 0.0;
  this.hf = 0.0;
  this.hg = (-1.0);
  this.ig = false;
}
$p = $c_Ltrivalibs_utils_animation_Animator.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_animation_Animator;
/** @constructor */
function $h_Ltrivalibs_utils_animation_Animator() {
}
$h_Ltrivalibs_utils_animation_Animator.prototype = $p;
$p.kM = (function(time) {
  this.g6 = ((1 + this.g6) | 0);
  if ((this.g7 === 0.0)) {
    this.g7 = time;
    this.hf = time;
  }
  var fpsElapsed = (time - this.g7);
  if ((fpsElapsed >= 1000.0)) {
    var fps = ((1000.0 * this.g6) / fpsElapsed);
    if (((time - this.hf) >= 1000.0)) {
      var args$proxy1 = $m_sr_ScalaRunTime$().kR(new ($d_sjs_js_Any.r().C)([(fps.toFixed(1) + " FPS")]));
      console.log(...$m_sjsr_Compat$().kO(args$proxy1));
      this.hf = time;
      if ((this.ie !== null)) {
        (0, this.ie)(fps);
      }
    }
    this.g6 = 0;
    this.g7 = time;
  }
  var delta = ((this.hg < 0.0) ? 0.0 : (time - this.hg));
  this.hg = time;
  (0, this.k0)(delta);
  if (this.ig) {
    requestAnimationFrame($m_sjs_js_Any$().gg(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
      this.kM((+v1$2));
    }))));
  }
});
$p.mM = (function() {
  this.ig = true;
  return requestAnimationFrame($m_sjs_js_Any$().gg(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
    this.kM((+v1$2));
  }))));
});
var $d_Ltrivalibs_utils_animation_Animator = new $TypeData().i($c_Ltrivalibs_utils_animation_Animator, "trivalibs.utils.animation.Animator", ({
  eQ: 1
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
$p.l7 = (function(frame) {
  var animator = new $c_Ltrivalibs_utils_animation_Animator(frame, null);
  animator.mM();
  return animator;
});
var $d_Ltrivalibs_utils_animation_animate$package$ = new $TypeData().i($c_Ltrivalibs_utils_animation_animate$package$, "trivalibs.utils.animation.animate$package$", ({
  eR: 1
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
  this.T = null;
  this.ih = null;
  this.ii = null;
  this.T = input;
  this.ih = drag;
  this.ii = hold;
}
$p = $c_Ltrivalibs_utils_events_CanvasInput.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_CanvasInput;
/** @constructor */
function $h_Ltrivalibs_utils_events_CanvasInput() {
}
$h_Ltrivalibs_utils_events_CanvasInput.prototype = $p;
$p.eU = (function(tpf) {
  this.ih.eU(tpf);
  this.ii.eU(tpf);
});
var $d_Ltrivalibs_utils_events_CanvasInput = new $TypeData().i($c_Ltrivalibs_utils_events_CanvasInput, "trivalibs.utils.events.CanvasInput", ({
  eS: 1
}));
function $ct_Ltrivalibs_utils_events_DragGesture__F0__D__D__($thiz, pointersOf, glideMinSpeed, glideHalfLife) {
  $thiz.k3 = pointersOf;
  $thiz.k2 = glideHalfLife;
  $thiz.fu = null;
  $thiz.ik = 0.0;
  $thiz.il = 0.0;
  $thiz.eP = 0.0;
  $thiz.eQ = 0.0;
  $thiz.ai = 0.0;
  $thiz.aj = 0.0;
  $thiz.ij = (glideHalfLife > 0.0);
  var s = (glideMinSpeed / 1000.0);
  $thiz.k1 = ((s < 0.001) ? 0.001 : s);
  return $thiz;
}
function $ct_Ltrivalibs_utils_events_DragGesture__Ltrivalibs_utils_events_InputState__D__D__($thiz, input, glideMinSpeed, glideHalfLife) {
  $ct_Ltrivalibs_utils_events_DragGesture__F0__D__D__($thiz, $ps_Ltrivalibs_utils_events_DragGesture__DragGesture$superArg$1__Ltrivalibs_utils_events_InputState__D__D__F0(input, glideMinSpeed, glideHalfLife), glideMinSpeed, glideHalfLife);
  return $thiz;
}
function $ps_Ltrivalibs_utils_events_DragGesture__DragGesture$superArg$1__Ltrivalibs_utils_events_InputState__D__D__F0(input, glideMinSpeed, glideHalfLife) {
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => input.ae));
}
/** @constructor */
function $c_Ltrivalibs_utils_events_DragGesture() {
  this.k3 = null;
  this.k2 = 0.0;
  this.fu = null;
  this.ik = 0.0;
  this.il = 0.0;
  this.eP = 0.0;
  this.eQ = 0.0;
  this.ai = 0.0;
  this.aj = 0.0;
  this.ij = false;
  this.k1 = 0.0;
}
$p = $c_Ltrivalibs_utils_events_DragGesture.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_DragGesture;
/** @constructor */
function $h_Ltrivalibs_utils_events_DragGesture() {
}
$h_Ltrivalibs_utils_events_DragGesture.prototype = $p;
$p.lq = (function() {
  return new $c_T2(this.eP, this.eQ);
});
$p.eU = (function(tpf) {
  var d = $m_Ltrivalibs_utils_events_gestures$package$().kr(this.k3.ge());
  if ((d === null)) {
    this.fu = null;
    if (this.ij) {
      var p$proxy1 = ((this.ai * this.ai) + (this.aj * this.aj));
      var $x_1 = ((+Math.sqrt(p$proxy1)) >= this.k1);
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      var e$proxy1 = (tpf / this.k2);
      var f = (+Math.pow(0.5, e$proxy1));
      this.ai = (this.ai * f);
      this.aj = (this.aj * f);
      this.eP = (this.ai * tpf);
      this.eQ = (this.aj * tpf);
    } else {
      this.ai = 0.0;
      this.aj = 0.0;
      this.eP = 0.0;
      this.eQ = 0.0;
    }
  } else {
    if ((((this.fu !== null) && (d.ao !== null)) && ((+this.fu) === (+d.ao)))) {
      this.eP = (d.fw - this.ik);
      this.eQ = (d.fx - this.il);
      if ((this.ij && (tpf > 0.0))) {
        var e$proxy2 = (tpf / 40.0);
        var k = (1.0 - (+Math.pow(0.5, e$proxy2)));
        this.ai = (this.ai + (((this.eP / tpf) - this.ai) * k));
        this.aj = (this.aj + (((this.eQ / tpf) - this.aj) * k));
      }
    } else {
      if ((this.fu === null)) {
        this.ai = 0.0;
        this.aj = 0.0;
      }
      this.eP = 0.0;
      this.eQ = 0.0;
    }
    this.fu = d.ao;
    this.ik = d.fw;
    this.il = d.fx;
  }
});
var $d_Ltrivalibs_utils_events_DragGesture = new $TypeData().i($c_Ltrivalibs_utils_events_DragGesture, "trivalibs.utils.events.DragGesture", ({
  eT: 1
}));
function $ct_Ltrivalibs_utils_events_HoldGesture__F0__D__D__($thiz, pointersOf, holdDelay, holdRadius) {
  $thiz.k6 = pointersOf;
  $thiz.k4 = holdDelay;
  $thiz.k5 = holdRadius;
  $thiz.g9 = null;
  $thiz.fv = 0.0;
  $thiz.ga = false;
  $thiz.g8 = false;
  $thiz.eR = false;
  return $thiz;
}
function $ct_Ltrivalibs_utils_events_HoldGesture__Ltrivalibs_utils_events_InputState__D__D__($thiz, input, holdDelay, holdRadius) {
  $ct_Ltrivalibs_utils_events_HoldGesture__F0__D__D__($thiz, $ps_Ltrivalibs_utils_events_HoldGesture__HoldGesture$superArg$1__Ltrivalibs_utils_events_InputState__D__D__F0(input, holdDelay, holdRadius), holdDelay, holdRadius);
  return $thiz;
}
function $ps_Ltrivalibs_utils_events_HoldGesture__HoldGesture$superArg$1__Ltrivalibs_utils_events_InputState__D__D__F0(input, holdDelay, holdRadius) {
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => input.ae));
}
/** @constructor */
function $c_Ltrivalibs_utils_events_HoldGesture() {
  this.k6 = null;
  this.k4 = 0.0;
  this.k5 = 0.0;
  this.g9 = null;
  this.fv = 0.0;
  this.ga = false;
  this.g8 = false;
  this.eR = false;
}
$p = $c_Ltrivalibs_utils_events_HoldGesture.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_HoldGesture;
/** @constructor */
function $h_Ltrivalibs_utils_events_HoldGesture() {
}
$h_Ltrivalibs_utils_events_HoldGesture.prototype = $p;
$p.eU = (function(tpf) {
  var d = $m_Ltrivalibs_utils_events_gestures$package$().kr(this.k6.ge());
  if ((d === null)) {
    this.g9 = null;
    this.fv = 0.0;
    this.ga = false;
    this.g8 = false;
    this.eR = false;
  } else {
    var pid = d.ao;
    if ((!(((this.g9 !== null) && (pid !== null)) && ((+this.g9) === (+pid))))) {
      this.g9 = pid;
      this.fv = 0.0;
      this.ga = false;
      this.g8 = false;
    }
    this.fv = (this.fv + tpf);
    if (this.g8) {
      this.eR = true;
    } else if ((this.fv < this.k4)) {
      var dx = (d.fw - d.io);
      var dy = (d.fx - d.ip);
      var p$proxy2 = ((dx * dx) + (dy * dy));
      if (((+Math.sqrt(p$proxy2)) > this.k5)) {
        this.ga = true;
      }
      this.eR = false;
    } else if (this.ga) {
      this.eR = false;
    } else {
      this.g8 = true;
      this.eR = true;
    }
  }
});
var $d_Ltrivalibs_utils_events_HoldGesture = new $TypeData().i($c_Ltrivalibs_utils_events_HoldGesture, "trivalibs.utils.events.HoldGesture", ({
  eU: 1
}));
function $p_Ltrivalibs_utils_events_InputState__freeSlot__Ltrivalibs_utils_events_Pointer($thiz) {
  var i = 0;
  while ((i < ($thiz.gd.length | 0))) {
    if (($thiz.gd[i].ao === null)) {
      return $thiz.gd[i];
    }
    i = ((1 + i) | 0);
  }
  return null;
}
function $p_Ltrivalibs_utils_events_InputState__slotById__D__Ltrivalibs_utils_events_Pointer($thiz, id) {
  var i = 0;
  while ((i < ($thiz.ae.length | 0))) {
    var p = $thiz.ae[i];
    if (((p.ao !== null) && ((+p.ao) === id))) {
      return p;
    }
    i = ((1 + i) | 0);
  }
  return null;
}
function $p_Ltrivalibs_utils_events_InputState__removePointer__D__V($thiz, id) {
  var p = $p_Ltrivalibs_utils_events_InputState__slotById__D__Ltrivalibs_utils_events_Pointer($thiz, id);
  if ((p !== null)) {
    p.ao = null;
    var idx = $m_sjs_js_ArrayOps$().kz($thiz.ae, p, 0);
    if ((idx >= 0)) {
      $thiz.ae.splice(idx, 1);
    }
  }
}
function $p_Ltrivalibs_utils_events_InputState__install__V($thiz) {
  var i = 0;
  while ((i < $thiz.kb)) {
    $thiz.gd.push(new $c_Ltrivalibs_utils_events_Pointer());
    i = ((1 + i) | 0);
  }
  $m_Ltrivalibs_utils_events_keyboard$package$().m2($thiz.gb, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((k$3) => {
    if ((!(!(!(!(!$thiz.gc.hasOwnProperty(k$3))))))) {
      var value$proxy1 = (+Date.now());
      $thiz.gc[k$3] = value$proxy1;
      if ((!($thiz.U === (void 0)))) {
        (0, $thiz.U)();
      }
    }
  })), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((k$3$1) => {
    delete $thiz.gc[k$3$1];
    if ((!($thiz.U === (void 0)))) {
      (0, $thiz.U)();
    }
  })), false);
  $m_Ltrivalibs_utils_events_pointer$package$().mu($thiz.k8, $m_Ltrivalibs_utils_events_pointer$package$().mv(), new $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078(((v1$2, v2$2, v3$2, v4$2, v5$2) => {
    var button = (v1$2 | 0);
    var id = (+v2$2);
    var x$1 = (+v3$2);
    var y = (+v4$2);
    if ($thiz.ka) {
      $thiz.gb.focus();
    }
    var key$proxy3 = ("" + button);
    var value$proxy2 = (+Date.now());
    $thiz.hh[key$proxy3] = value$proxy2;
    var slot = $p_Ltrivalibs_utils_events_InputState__freeSlot__Ltrivalibs_utils_events_Pointer($thiz);
    if ((slot !== null)) {
      slot.ao = id;
      slot.im = button;
      (+Date.now());
      slot.io = x$1;
      slot.ip = y;
      slot.fw = x$1;
      slot.fx = y;
      $thiz.ae.push(slot);
      ($thiz.ae.length | 0);
    }
    if ((!($thiz.U === (void 0)))) {
      (0, $thiz.U)();
    }
  })), new $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(((v1$2$1, v2$2$1, v3$2$1) => {
    var id$1 = (+v1$2$1);
    var x$2 = (+v2$2$1);
    var y$1 = (+v3$2$1);
    var p = $p_Ltrivalibs_utils_events_InputState__slotById__D__Ltrivalibs_utils_events_Pointer($thiz, id$1);
    if ((p !== null)) {
      p.fw = x$2;
      p.fx = y$1;
      if ((($thiz.ae.length | 0) > 0)) {
        $thiz.ae[0];
      }
    }
  })), new $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(((v1$2$2, v2$2$2, v3$2$2, v4$2$1) => {
    var button$1 = (v1$2$2 | 0);
    var id$2 = (+v2$2$2);
    delete $thiz.hh[("" + button$1)];
    $p_Ltrivalibs_utils_events_InputState__removePointer__D__V($thiz, id$2);
    if ((!($thiz.U === (void 0)))) {
      (0, $thiz.U)();
    }
  })), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2$3) => {
    $p_Ltrivalibs_utils_events_InputState__removePointer__D__V($thiz, (+v1$2$3));
    if ((!($thiz.U === (void 0)))) {
      (0, $thiz.U)();
    }
  })), $thiz.kc);
  $thiz.gb.addEventListener("focus", $thiz.k9);
  $thiz.gb.addEventListener("blur", $thiz.k7);
}
/** @constructor */
function $c_Ltrivalibs_utils_events_InputState(el, keyTarget, suppressContextMenu, onActivity, focusOnPointerDown, maxPointers) {
  this.k8 = null;
  this.gb = null;
  this.kc = false;
  this.U = null;
  this.ka = false;
  this.kb = 0;
  this.gc = null;
  this.hh = null;
  this.gd = null;
  this.ae = null;
  this.k9 = null;
  this.k7 = null;
  this.k8 = el;
  this.gb = keyTarget;
  this.kc = suppressContextMenu;
  this.U = onActivity;
  this.ka = focusOnPointerDown;
  this.kb = maxPointers;
  this.gc = ({});
  this.hh = ({});
  this.gd = [];
  this.ae = [];
  if ($m_sr_BoxesRunTime$().b(keyTarget, window)) {
    (!(!document.hasFocus()));
  } else {
    $m_sr_BoxesRunTime$().b(keyTarget, document.activeElement);
  }
  this.k9 = ((_$1$3) => {
    if ((!(this.U === (void 0)))) {
      (0, this.U)();
    }
  });
  this.k7 = ((_$2$3) => {
    if ((!(this.U === (void 0)))) {
      (0, this.U)();
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
$p.al = (function(key) {
  return (!(!(!(!this.gc.hasOwnProperty(key)))));
});
$p.m1 = (function(button) {
  var key$proxy7 = ("" + button);
  return (!(!(!(!this.hh.hasOwnProperty(key$proxy7)))));
});
$p.kL = (function() {
  return (this.ae.length | 0);
});
var $d_Ltrivalibs_utils_events_InputState = new $TypeData().i($c_Ltrivalibs_utils_events_InputState, "trivalibs.utils.events.InputState", ({
  eV: 1
}));
/** @constructor */
function $c_Ltrivalibs_utils_events_Pointer() {
  this.ao = null;
  this.im = 0;
  this.io = 0.0;
  this.ip = 0.0;
  this.fw = 0.0;
  this.fx = 0.0;
  this.ao = null;
  this.im = 0;
  this.io = 0.0;
  this.ip = 0.0;
  this.fw = 0.0;
  this.fx = 0.0;
}
$p = $c_Ltrivalibs_utils_events_Pointer.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_Pointer;
/** @constructor */
function $h_Ltrivalibs_utils_events_Pointer() {
}
$h_Ltrivalibs_utils_events_Pointer.prototype = $p;
var $d_Ltrivalibs_utils_events_Pointer = new $TypeData().i($c_Ltrivalibs_utils_events_Pointer, "trivalibs.utils.events.Pointer", ({
  eW: 1
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
$p.kr = (function(pointers) {
  var i = 0;
  while ((i < (pointers.length | 0))) {
    var p = pointers[i];
    if ((p.im === 0)) {
      return p;
    }
    i = ((1 + i) | 0);
  }
  return null;
});
var $d_Ltrivalibs_utils_events_gestures$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_gestures$package$, "trivalibs.utils.events.gestures$package$", ({
  eX: 1
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
$p.lZ = (function(canvas, initialFocus, holdDelay, holdRadius, suppressContextMenu, onActivity, dragGlideHalfLife, dragGlideMinSpeed) {
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
  eY: 1
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
$p.m2 = (function(el, onDown, onUp, keepDefault) {
  var down = ((e$3) => {
    var isTab = (e$3.code === "Tab");
    if (((!keepDefault) && (!isTab))) {
      e$3.preventDefault();
    }
    if ((!(!(!e$3.repeat)))) {
      onDown.H(e$3.code);
    }
  });
  var up = ((e$3$1) => {
    onUp.H(e$3$1.code);
  });
  el.addEventListener("keydown", down);
  el.addEventListener("keyup", up);
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    el.removeEventListener("keydown", down);
    el.removeEventListener("keyup", up);
  }));
});
var $d_Ltrivalibs_utils_events_keyboard$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_keyboard$package$, "trivalibs.utils.events.keyboard$package$", ({
  eZ: 1
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
$p.mu = (function(el, moveTarget, onDown, onMove, onUp, onCancel, suppressContextMenu) {
  var downFn = ((e$3) => {
    onDown.l9((e$3.button | 0), (+e$3.pointerId), (+e$3.clientX), (+e$3.clientY), (!(!e$3.isPrimary)));
  });
  var moveFn = ((e$3$1) => {
    onMove.lb((+e$3$1.pointerId), (+e$3$1.clientX), (+e$3$1.clientY));
  });
  var upFn = ((e$3$2) => {
    onUp.la((e$3$2.button | 0), (+e$3$2.pointerId), (+e$3$2.clientX), (+e$3$2.clientY));
  });
  var cancelFn = ((e$3$3) => {
    onCancel.H((+e$3$3.pointerId));
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
$p.mv = (function() {
  return window;
});
var $d_Ltrivalibs_utils_events_pointer$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_pointer$package$, "trivalibs.utils.events.pointer$package$", ({
  f0: 1
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
  this.kW = null;
  $n_jl_Character$ = this;
  this.kW = $constArrUDiffs_I(67, "1C]4m6m=c4]4]4]4]4]4]4]4]4]3g4]2m9]2m1Jm1m9s4g5mm6]3]4mm12>mEm1m6m1]3]=]DI]1<m24mIs4g2c4w9];]4]<]3m3m=m3mH]8]2m=mBHm3]4mK3{gggg2:g=m@]13]4E]");
}
$p = $c_jl_Character$.prototype = new $h_O();
$p.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
}
$h_jl_Character$.prototype = $p;
$p.mS = (function(codePoint) {
  if (((codePoint >>> 0) > 1114111)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return String.fromCodePoint(codePoint);
});
var $d_jl_Character$ = new $TypeData().i($c_jl_Character$, "java.lang.Character$", ({
  aS: 1,
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
function $is_jl_Number(obj) {
  return (((obj instanceof $c_jl_Number) || ((typeof obj) === "number")) || (obj instanceof $Long));
}
function $isArrayOf_jl_Number(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.l)));
}
function $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.iS = s;
  if (writableStackTrace) {
    $thiz.lD();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.iS = null;
  }
  hj() {
    return this.iS;
  }
  lD() {
    var reference = ((this instanceof $c_sjs_js_JavaScriptException) ? this.aP : this);
    if ((Object.prototype.toString.call(reference) !== "[object Error]")) {
      if (((Error.captureStackTrace === (void 0)) || (!(!Object.isSealed(this))))) {
        new Error();
      } else {
        Error.captureStackTrace(this);
      }
    }
    return this;
  }
  l() {
    var className = $objectClassName(this);
    var message = this.hj();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  r() {
    return $c_O.prototype.r.call(this);
  }
  n(that) {
    return $c_O.prototype.n.call(this, that);
  }
  get "message"() {
    var m = this.hj();
    return ((m === null) ? "" : m);
  }
  get "name"() {
    return $objectClassName(this);
  }
  "toString"() {
    return this.l();
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
$p.l = (function() {
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
$p.n0 = (function(xs) {
  if ((xs === null)) {
    return null;
  } else if ((xs.a.length === 0)) {
    var this$2 = $m_scm_ArraySeq$();
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    return this$2.j1;
  } else {
    return new $c_scm_ArraySeq$ofRef(xs);
  }
});
/** @constructor */
function $c_sr_AbstractFunction0() {
}
$p = $c_sr_AbstractFunction0.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction0;
/** @constructor */
function $h_sr_AbstractFunction0() {
}
$h_sr_AbstractFunction0.prototype = $p;
$p.l = (function() {
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
$p.l = (function() {
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
$p.l = (function() {
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
$p.l = (function() {
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
$p.l = (function() {
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
$p.l = (function() {
  return "<function5>";
});
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.ff = 0;
  this.jb = 0;
  this.kX = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.ff = $f_T__hashCode__I("Seq");
  this.jb = $f_T__hashCode__I("Map");
  $f_T__hashCode__I("Set");
  this.kX = this.mV($m_sci_Nil$(), this.jb);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.mH = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.lV(xs, this.ff) : ((xs instanceof $c_sci_List) ? this.m3(xs, this.ff) : this.ms(xs, this.ff)));
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().i($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  cT: 1,
  cS: 1
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
  this.jc = null;
  this.jc = uv;
}
$p = $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT() {
}
$h_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT.prototype = $p;
var $d_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT, "trivalibs.graphics.buffers.UniformLayout$given_UniformLayout_T", ({
  cZ: 1,
  cY: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$() {
}
$p = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$() {
}
$h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$.prototype = $p;
$p.i = (function(ref, value) {
  $f_Ltrivalibs_graphics_math_Mat3MutableOps__set__O__Ltrivalibs_graphics_math_Mat3Mutable__O__Ltrivalibs_graphics_math_Mat3Base__V($m_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$().mk(), ref, $m_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$(), value, $m_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$());
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Mat3_Mat3PaddedBuffer$", ({
  d0: 1,
  aB: 1
}));
var $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$;
function $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$() {
  if ((!$n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$)) {
    $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$ = new $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
  }
  return $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$;
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
$p.i = (function(ref, value) {
  $f_Ltrivalibs_graphics_math_Mat4MutableOps__set__O__Ltrivalibs_graphics_math_Mat4Mutable__O__Ltrivalibs_graphics_math_Mat4Base__V($m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$().lR(), ref, $m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$(), value, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Mat4_Mat4Buffer$", ({
  d1: 1,
  aB: 1
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
$p.fB = (function(t) {
  return new $c_T2(t.fj, t.fk);
});
var $d_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$, "trivalibs.graphics.geometry.FieldWriter$vec2Writer$", ({
  d6: 1,
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
$p.fB = (function(t) {
  return new $c_T3(t.q, t.m, t.o);
});
var $d_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$, "trivalibs.graphics.geometry.FieldWriter$vec3Writer$", ({
  d7: 1,
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
  this.jd = null;
  this.jd = x$1;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexLayout$named.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexLayout$named;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexLayout$named() {
}
$h_Ltrivalibs_graphics_geometry_VertexLayout$named.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_VertexLayout$named = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayout$named, "trivalibs.graphics.geometry.VertexLayout$named", ({
  dd: 1,
  dc: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons(x$1, x$2) {
  this.je = null;
  this.jf = null;
  this.je = x$1;
  this.jf = x$2;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons() {
}
$h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons.prototype = $p;
$p.mW = (function(t) {
  return $m_sr_Tuples$().kn(this.je.fB(t.k(0)), this.jf.fB($m_sr_Tuples$().mP(t)));
});
$p.fB = (function(t) {
  return this.mW(t);
});
var $d_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons, "trivalibs.graphics.geometry.VertexLayoutHelper$cons", ({
  de: 1,
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
$p.fB = (function(t) {
  return $m_T$package$EmptyTuple$();
});
var $d_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$, "trivalibs.graphics.geometry.VertexLayoutHelper$nil$", ({
  df: 1,
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
  this.jh = 0;
  this.jh = idx$2;
}
$p = $c_Ltrivalibs_graphics_geometry_package$package$$anon$1.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_package$package$$anon$1;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_package$package$$anon$1() {
}
$h_Ltrivalibs_graphics_geometry_package$package$$anon$1.prototype = $p;
$p.aH = (function(t) {
  return t.k(this.jh);
});
var $d_Ltrivalibs_graphics_geometry_package$package$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_geometry_package$package$$anon$1, "trivalibs.graphics.geometry.package$package$$anon$1", ({
  dk: 1,
  da: 1
}));
function $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D($thiz, v, other) {
  return (((v.q * other.q) + (v.m * other.m)) + (v.o * other.o));
}
function $f_Ltrivalibs_graphics_math_Vec3Base__length__O__D($thiz, v) {
  var p$proxy1 = $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D($thiz, v, v);
  return (+Math.sqrt(p$proxy1));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat3$() {
  this.ji = null;
  this.jj = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat3$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat3$() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat3$.prototype = $p;
$p.kw = (function() {
  if ((!this.jj)) {
    this.ji = $m_Ltrivalibs_graphics_math_cpu_Mat3$();
    this.jj = true;
  }
  return this.ji;
});
$p.lM = (function(m) {
  return new $c_Ltrivalibs_graphics_math_cpu_Mat3(m.gK, m.gL, m.gM, m.gN, m.gO, m.gP, m.gQ, m.gR, m.gS);
});
var $d_Ltrivalibs_graphics_math_cpu_Mat3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat3$, "trivalibs.graphics.math.cpu.Mat3$", ({
  dF: 1,
  dn: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Mat3$;
function $m_Ltrivalibs_graphics_math_cpu_Mat3$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Mat3$)) {
    $n_Ltrivalibs_graphics_math_cpu_Mat3$ = new $c_Ltrivalibs_graphics_math_cpu_Mat3$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Mat3$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat4$() {
  this.jk = null;
  this.jl = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4$() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4$.prototype = $p;
$p.ky = (function() {
  if ((!this.jl)) {
    this.jk = $m_Ltrivalibs_graphics_math_cpu_Mat4$();
    this.jl = true;
  }
  return this.jk;
});
$p.eS = (function(t, r, s) {
  var x = r.hM;
  var y = r.hN;
  var z = r.hO;
  var w = r.hL;
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
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4(((1.0 - (yy + zz)) * s.q), ((xy + wz) * s.q), ((xz - wy) * s.q), 0.0, ((xy - wz) * s.m), ((1.0 - (xx + zz)) * s.m), ((yz + wx) * s.m), 0.0, ((xz + wy) * s.o), ((yz - wx) * s.o), ((1.0 - (xx + yy)) * s.o), 0.0, t.q, t.m, t.o, 1.0);
});
var $d_Ltrivalibs_graphics_math_cpu_Mat4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4$, "trivalibs.graphics.math.cpu.Mat4$", ({
  dI: 1,
  dr: 1
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
  dM: 1,
  dO: 1
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
  this.jm = null;
  this.jn = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec3$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec3$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec3$.prototype = $p;
$p.j = (function() {
  if ((!this.jn)) {
    this.jm = $m_Ltrivalibs_graphics_math_cpu_Vec3$();
    this.jn = true;
  }
  return this.jm;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3$, "trivalibs.graphics.math.cpu.Vec3$", ({
  dR: 1,
  dx: 1
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
  this.jo = null;
  this.jp = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec4$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec4$.prototype = $p;
$p.lP = (function() {
  if ((!this.jp)) {
    this.jo = new $c_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3();
    this.jp = true;
  }
  return this.jo;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4$, "trivalibs.graphics.math.cpu.Vec4$", ({
  dU: 1,
  dB: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Vec4$;
function $m_Ltrivalibs_graphics_math_cpu_Vec4$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Vec4$)) {
    $n_Ltrivalibs_graphics_math_cpu_Vec4$ = new $c_Ltrivalibs_graphics_math_cpu_Vec4$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Vec4$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$$anon$21() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$$anon$21.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$$anon$21;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$$anon$21() {
}
$h_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$$anon$21.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$$anon$21 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$$anon$21, "trivalibs.graphics.math.cpu.mat3$package$Mat3PaddedBuffer$$anon$21", ({
  dX: 1,
  dq: 1
}));
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
  e0: 1,
  dt: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_LetExpr(name) {
  this.u = null;
  this.ju = null;
  this.ju = name;
  $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(this, name);
}
$p = $c_Ltrivalibs_graphics_math_gpu_LetExpr.prototype = new $h_Ltrivalibs_graphics_math_gpu_Expr();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_LetExpr;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_LetExpr() {
}
$h_Ltrivalibs_graphics_math_gpu_LetExpr.prototype = $p;
$p.kd = (function(value) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return (((("  let " + this.ju) + " = ") + value.u) + ";");
});
var $d_Ltrivalibs_graphics_math_gpu_LetExpr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LetExpr, "trivalibs.graphics.math.gpu.LetExpr", ({
  e2: 1,
  aK: 1
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
  e6: 1,
  N: 1
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
  e7: 1,
  O: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$.prototype = $p;
$p.mX = (function(m, x$2, v, x$4, x$5) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + m.u) + " * ") + v.u) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Mat3ImmutableOpsG_FloatExpr_Mat3Expr$", ({
  e8: 1,
  dp: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$.prototype = $p;
$p.ml = (function(m, x$2, other) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + m.u) + " * ") + other.u) + ")"));
});
$p.mY = (function(m, x$2, v, x$4, x$5) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + m.u) + " * ") + v.u) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Mat4ImmutableOpsG_FloatExpr_Mat4Expr$", ({
  e9: 1,
  ds: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$;
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
$p.kS = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.u + ".x"));
});
$p.kT = (function(v) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.u + ".y"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec2BaseG_FloatExpr_Vec2Expr$", ({
  ea: 1,
  du: 1
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
$p.mp = (function(v, x$2, scalar) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.u) + " * ") + scalar.u) + ")"));
});
$p.l2 = (function(v, x$2, scalar) {
  return this.mp(v, x$2, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fz().H(scalar));
});
$p.lI = (function(v, x$2) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("fract(" + v.u) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec2ImmutableOpsG_FloatExpr_Vec2Expr$", ({
  eb: 1,
  dv: 1
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
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec3BaseG_FloatExpr_Vec3Expr$", ({
  ec: 1,
  aI: 1
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
$p.lF = (function(v, x$2) {
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(" + v.u) + " * 0.5 + 0.5)"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec3ImmutableOpsG_FloatExpr_Vec3Expr$", ({
  ed: 1,
  dy: 1
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
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec4BaseG_FloatExpr_Vec4Expr$", ({
  ee: 1,
  aJ: 1
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
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec4ImmutableOpsG_FloatExpr_Vec4Expr$", ({
  ef: 1,
  dC: 1
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
  this.z = null;
  this.y = null;
  this.c = null;
  this.gY = null;
  this.z = shade;
  this.y = painter;
  this.c = [];
  this.gY = [];
}
$p = $c_Ltrivalibs_graphics_painter_Instance.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Instance;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Instance() {
}
$h_Ltrivalibs_graphics_painter_Instance.prototype = $p;
var $d_Ltrivalibs_graphics_painter_Instance = new $TypeData().i($c_Ltrivalibs_graphics_painter_Instance, "trivalibs.graphics.painter.Instance", ({
  el: 1,
  aL: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Shape(painter, form, shade) {
  this.i4 = null;
  this.fZ = null;
  this.ac = null;
  this.i3 = null;
  this.i2 = null;
  this.a0 = null;
  this.ha = null;
  this.M = null;
  this.i4 = painter;
  this.fZ = form;
  this.ac = shade;
  this.i3 = "none";
  this.i2 = null;
  this.a0 = [];
  this.ha = [];
  this.M = new $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter);
}
$p = $c_Ltrivalibs_graphics_painter_Shape.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Shape;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Shape() {
}
$h_Ltrivalibs_graphics_painter_Shape.prototype = $p;
$p.mK = (function(cullMode, blendState) {
  if ((cullMode !== (void 0))) {
    this.i3 = cullMode;
  }
  if ((blendState !== (void 0))) {
    this.i2 = blendState;
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Shape = new $TypeData().i($c_Ltrivalibs_graphics_painter_Shape, "trivalibs.graphics.painter.Shape", ({
  es: 1,
  aL: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform(inner) {
  this.g3 = null;
  this.g3 = inner;
}
$p = $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform() {
}
$h_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform.prototype = $p;
$p.fC = (function() {
  return this.g3.fC();
});
var $d_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform = new $TypeData().i($c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform, "trivalibs.graphics.shader.VertexUniform$given_WGSLType_VertexUniform", ({
  eB: 1,
  P: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor(prefix) {
  this.ic = null;
  this.ic = prefix;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor.prototype = $p;
$p.hm = (function(name) {
  return new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(((this.ic === "") ? name : ((this.ic + ".") + name)));
});
var $d_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor, "trivalibs.graphics.shader.dsl.TypedAssignAccessor", ({
  eI: 1,
  A: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(prefix) {
  this.id = null;
  this.id = prefix;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor.prototype = $p;
$p.ay = (function(name) {
  return ((this.id === "") ? $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), name) : $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), ((this.id + ".") + name)));
});
var $d_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor, "trivalibs.graphics.shader.dsl.TypedExprAccessor", ({
  eJ: 1,
  A: 1
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
  eK: 1,
  A: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_VertexOut(prefix) {
  this.jZ = null;
  this.jY = null;
  this.jZ = prefix;
  this.jY = new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget((prefix + ".position"));
}
$p = $c_Ltrivalibs_graphics_shader_dsl_VertexOut.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_VertexOut;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_VertexOut() {
}
$h_Ltrivalibs_graphics_shader_dsl_VertexOut.prototype = $p;
$p.hm = (function(name) {
  return new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(((this.jZ + ".") + name));
});
var $d_Ltrivalibs_graphics_shader_dsl_VertexOut = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_VertexOut, "trivalibs.graphics.shader.dsl.VertexOut", ({
  eM: 1,
  A: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$() {
}
$p = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$() {
}
$h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$.prototype = $p;
$p.fC = (function() {
  return "mat3x3<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$, "trivalibs.graphics.shader.types$package$given_WGSLType_Mat3$", ({
  eO: 1,
  P: 1
}));
var $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$;
function $m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$() {
  if ((!$n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$)) {
    $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$ = new $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$();
  }
  return $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$;
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
$p.fC = (function() {
  return "mat4x4<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$, "trivalibs.graphics.shader.types$package$given_WGSLType_Mat4$", ({
  eP: 1,
  P: 1
}));
var $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$;
function $m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$() {
  if ((!$n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$)) {
    $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$ = new $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$();
  }
  return $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$;
}
/** @constructor */
function $c_jl_Class($data) {
  this.hq = $data;
}
$p = $c_jl_Class.prototype = new $h_O();
$p.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
}
$h_jl_Class.prototype = $p;
$p.l = (function() {
  return ((this.hq.Y ? "interface " : (this.hq.X ? "" : "class ")) + this.hq.N);
});
var $d_jl_Class = new $TypeData().i($c_jl_Class, "java.lang.Class", ({
  aT: 1,
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
  bh: 1,
  be: 1,
  bf: 1
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
    return $thiz.eV;
  } else {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 0)"));
  }
}
function $f_s_Product10__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.eW;
      break;
    }
    case 1: {
      return $thiz.b3;
      break;
    }
    case 2: {
      return $thiz.b4;
      break;
    }
    case 3: {
      return $thiz.b5;
      break;
    }
    case 4: {
      return $thiz.b6;
      break;
    }
    case 5: {
      return $thiz.b7;
      break;
    }
    case 6: {
      return $thiz.b8;
      break;
    }
    case 7: {
      return $thiz.b9;
      break;
    }
    case 8: {
      return $thiz.ba;
      break;
    }
    case 9: {
      return $thiz.b2;
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
      return $thiz.eX;
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
    case 4: {
      return $thiz.bg;
      break;
    }
    case 5: {
      return $thiz.bh;
      break;
    }
    case 6: {
      return $thiz.bi;
      break;
    }
    case 7: {
      return $thiz.bj;
      break;
    }
    case 8: {
      return $thiz.bk;
      break;
    }
    case 9: {
      return $thiz.bb;
      break;
    }
    case 10: {
      return $thiz.bc;
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
      return $thiz.eY;
      break;
    }
    case 1: {
      return $thiz.bo;
      break;
    }
    case 2: {
      return $thiz.bp;
      break;
    }
    case 3: {
      return $thiz.bq;
      break;
    }
    case 4: {
      return $thiz.br;
      break;
    }
    case 5: {
      return $thiz.bs;
      break;
    }
    case 6: {
      return $thiz.bt;
      break;
    }
    case 7: {
      return $thiz.bu;
      break;
    }
    case 8: {
      return $thiz.bv;
      break;
    }
    case 9: {
      return $thiz.bl;
      break;
    }
    case 10: {
      return $thiz.bm;
      break;
    }
    case 11: {
      return $thiz.bn;
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
      return $thiz.eZ;
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
    case 5: {
      return $thiz.bE;
      break;
    }
    case 6: {
      return $thiz.bF;
      break;
    }
    case 7: {
      return $thiz.bG;
      break;
    }
    case 8: {
      return $thiz.bH;
      break;
    }
    case 9: {
      return $thiz.bw;
      break;
    }
    case 10: {
      return $thiz.bx;
      break;
    }
    case 11: {
      return $thiz.by;
      break;
    }
    case 12: {
      return $thiz.bz;
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
      return $thiz.f0;
      break;
    }
    case 1: {
      return $thiz.bN;
      break;
    }
    case 2: {
      return $thiz.bO;
      break;
    }
    case 3: {
      return $thiz.bP;
      break;
    }
    case 4: {
      return $thiz.bQ;
      break;
    }
    case 5: {
      return $thiz.bR;
      break;
    }
    case 6: {
      return $thiz.bS;
      break;
    }
    case 7: {
      return $thiz.bT;
      break;
    }
    case 8: {
      return $thiz.bU;
      break;
    }
    case 9: {
      return $thiz.bI;
      break;
    }
    case 10: {
      return $thiz.bJ;
      break;
    }
    case 11: {
      return $thiz.bK;
      break;
    }
    case 12: {
      return $thiz.bL;
      break;
    }
    case 13: {
      return $thiz.bM;
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
      return $thiz.f1;
      break;
    }
    case 1: {
      return $thiz.c1;
      break;
    }
    case 2: {
      return $thiz.c2;
      break;
    }
    case 3: {
      return $thiz.c3;
      break;
    }
    case 4: {
      return $thiz.c4;
      break;
    }
    case 5: {
      return $thiz.c5;
      break;
    }
    case 6: {
      return $thiz.c6;
      break;
    }
    case 7: {
      return $thiz.c7;
      break;
    }
    case 8: {
      return $thiz.c8;
      break;
    }
    case 9: {
      return $thiz.bV;
      break;
    }
    case 10: {
      return $thiz.bW;
      break;
    }
    case 11: {
      return $thiz.bX;
      break;
    }
    case 12: {
      return $thiz.bY;
      break;
    }
    case 13: {
      return $thiz.bZ;
      break;
    }
    case 14: {
      return $thiz.c0;
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
      return $thiz.f2;
      break;
    }
    case 1: {
      return $thiz.cg;
      break;
    }
    case 2: {
      return $thiz.ch;
      break;
    }
    case 3: {
      return $thiz.ci;
      break;
    }
    case 4: {
      return $thiz.cj;
      break;
    }
    case 5: {
      return $thiz.ck;
      break;
    }
    case 6: {
      return $thiz.cl;
      break;
    }
    case 7: {
      return $thiz.cm;
      break;
    }
    case 8: {
      return $thiz.cn;
      break;
    }
    case 9: {
      return $thiz.c9;
      break;
    }
    case 10: {
      return $thiz.ca;
      break;
    }
    case 11: {
      return $thiz.cb;
      break;
    }
    case 12: {
      return $thiz.cc;
      break;
    }
    case 13: {
      return $thiz.cd;
      break;
    }
    case 14: {
      return $thiz.ce;
      break;
    }
    case 15: {
      return $thiz.cf;
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
      return $thiz.f3;
      break;
    }
    case 1: {
      return $thiz.cw;
      break;
    }
    case 2: {
      return $thiz.cx;
      break;
    }
    case 3: {
      return $thiz.cy;
      break;
    }
    case 4: {
      return $thiz.cz;
      break;
    }
    case 5: {
      return $thiz.cA;
      break;
    }
    case 6: {
      return $thiz.cB;
      break;
    }
    case 7: {
      return $thiz.cC;
      break;
    }
    case 8: {
      return $thiz.cD;
      break;
    }
    case 9: {
      return $thiz.co;
      break;
    }
    case 10: {
      return $thiz.cp;
      break;
    }
    case 11: {
      return $thiz.cq;
      break;
    }
    case 12: {
      return $thiz.cr;
      break;
    }
    case 13: {
      return $thiz.cs;
      break;
    }
    case 14: {
      return $thiz.ct;
      break;
    }
    case 15: {
      return $thiz.cu;
      break;
    }
    case 16: {
      return $thiz.cv;
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
      return $thiz.f4;
      break;
    }
    case 1: {
      return $thiz.cN;
      break;
    }
    case 2: {
      return $thiz.cO;
      break;
    }
    case 3: {
      return $thiz.cP;
      break;
    }
    case 4: {
      return $thiz.cQ;
      break;
    }
    case 5: {
      return $thiz.cR;
      break;
    }
    case 6: {
      return $thiz.cS;
      break;
    }
    case 7: {
      return $thiz.cT;
      break;
    }
    case 8: {
      return $thiz.cU;
      break;
    }
    case 9: {
      return $thiz.cE;
      break;
    }
    case 10: {
      return $thiz.cF;
      break;
    }
    case 11: {
      return $thiz.cG;
      break;
    }
    case 12: {
      return $thiz.cH;
      break;
    }
    case 13: {
      return $thiz.cI;
      break;
    }
    case 14: {
      return $thiz.cJ;
      break;
    }
    case 15: {
      return $thiz.cK;
      break;
    }
    case 16: {
      return $thiz.cL;
      break;
    }
    case 17: {
      return $thiz.cM;
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
      return $thiz.f5;
      break;
    }
    case 1: {
      return $thiz.d5;
      break;
    }
    case 2: {
      return $thiz.d6;
      break;
    }
    case 3: {
      return $thiz.d7;
      break;
    }
    case 4: {
      return $thiz.d8;
      break;
    }
    case 5: {
      return $thiz.d9;
      break;
    }
    case 6: {
      return $thiz.da;
      break;
    }
    case 7: {
      return $thiz.db;
      break;
    }
    case 8: {
      return $thiz.dc;
      break;
    }
    case 9: {
      return $thiz.cV;
      break;
    }
    case 10: {
      return $thiz.cW;
      break;
    }
    case 11: {
      return $thiz.cX;
      break;
    }
    case 12: {
      return $thiz.cY;
      break;
    }
    case 13: {
      return $thiz.cZ;
      break;
    }
    case 14: {
      return $thiz.d0;
      break;
    }
    case 15: {
      return $thiz.d1;
      break;
    }
    case 16: {
      return $thiz.d2;
      break;
    }
    case 17: {
      return $thiz.d3;
      break;
    }
    case 18: {
      return $thiz.d4;
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
      return $thiz.af;
      break;
    }
    case 1: {
      return $thiz.a8;
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
      return $thiz.f6;
      break;
    }
    case 1: {
      return $thiz.dn;
      break;
    }
    case 2: {
      return $thiz.dq;
      break;
    }
    case 3: {
      return $thiz.dr;
      break;
    }
    case 4: {
      return $thiz.ds;
      break;
    }
    case 5: {
      return $thiz.dt;
      break;
    }
    case 6: {
      return $thiz.du;
      break;
    }
    case 7: {
      return $thiz.dv;
      break;
    }
    case 8: {
      return $thiz.dw;
      break;
    }
    case 9: {
      return $thiz.dd;
      break;
    }
    case 10: {
      return $thiz.de;
      break;
    }
    case 11: {
      return $thiz.df;
      break;
    }
    case 12: {
      return $thiz.dg;
      break;
    }
    case 13: {
      return $thiz.dh;
      break;
    }
    case 14: {
      return $thiz.di;
      break;
    }
    case 15: {
      return $thiz.dj;
      break;
    }
    case 16: {
      return $thiz.dk;
      break;
    }
    case 17: {
      return $thiz.dl;
      break;
    }
    case 18: {
      return $thiz.dm;
      break;
    }
    case 19: {
      return $thiz.dp;
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
      return $thiz.f7;
      break;
    }
    case 1: {
      return $thiz.dH;
      break;
    }
    case 2: {
      return $thiz.dK;
      break;
    }
    case 3: {
      return $thiz.dL;
      break;
    }
    case 4: {
      return $thiz.dM;
      break;
    }
    case 5: {
      return $thiz.dN;
      break;
    }
    case 6: {
      return $thiz.dO;
      break;
    }
    case 7: {
      return $thiz.dP;
      break;
    }
    case 8: {
      return $thiz.dQ;
      break;
    }
    case 9: {
      return $thiz.dx;
      break;
    }
    case 10: {
      return $thiz.dy;
      break;
    }
    case 11: {
      return $thiz.dz;
      break;
    }
    case 12: {
      return $thiz.dA;
      break;
    }
    case 13: {
      return $thiz.dB;
      break;
    }
    case 14: {
      return $thiz.dC;
      break;
    }
    case 15: {
      return $thiz.dD;
      break;
    }
    case 16: {
      return $thiz.dE;
      break;
    }
    case 17: {
      return $thiz.dF;
      break;
    }
    case 18: {
      return $thiz.dG;
      break;
    }
    case 19: {
      return $thiz.dI;
      break;
    }
    case 20: {
      return $thiz.dJ;
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
      return $thiz.f8;
      break;
    }
    case 1: {
      return $thiz.e1;
      break;
    }
    case 2: {
      return $thiz.e5;
      break;
    }
    case 3: {
      return $thiz.e6;
      break;
    }
    case 4: {
      return $thiz.e7;
      break;
    }
    case 5: {
      return $thiz.e8;
      break;
    }
    case 6: {
      return $thiz.e9;
      break;
    }
    case 7: {
      return $thiz.ea;
      break;
    }
    case 8: {
      return $thiz.eb;
      break;
    }
    case 9: {
      return $thiz.dR;
      break;
    }
    case 10: {
      return $thiz.dS;
      break;
    }
    case 11: {
      return $thiz.dT;
      break;
    }
    case 12: {
      return $thiz.dU;
      break;
    }
    case 13: {
      return $thiz.dV;
      break;
    }
    case 14: {
      return $thiz.dW;
      break;
    }
    case 15: {
      return $thiz.dX;
      break;
    }
    case 16: {
      return $thiz.dY;
      break;
    }
    case 17: {
      return $thiz.dZ;
      break;
    }
    case 18: {
      return $thiz.e0;
      break;
    }
    case 19: {
      return $thiz.e2;
      break;
    }
    case 20: {
      return $thiz.e3;
      break;
    }
    case 21: {
      return $thiz.e4;
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
      return $thiz.aI;
      break;
    }
    case 1: {
      return $thiz.az;
      break;
    }
    case 2: {
      return $thiz.aA;
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
      return $thiz.ec;
      break;
    }
    case 1: {
      return $thiz.aJ;
      break;
    }
    case 2: {
      return $thiz.aK;
      break;
    }
    case 3: {
      return $thiz.aL;
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
      return $thiz.f9;
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
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 4)"));
    }
  }
}
function $f_s_Product6__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fa;
      break;
    }
    case 1: {
      return $thiz.eh;
      break;
    }
    case 2: {
      return $thiz.ei;
      break;
    }
    case 3: {
      return $thiz.ej;
      break;
    }
    case 4: {
      return $thiz.ek;
      break;
    }
    case 5: {
      return $thiz.el;
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
      return $thiz.fb;
      break;
    }
    case 1: {
      return $thiz.em;
      break;
    }
    case 2: {
      return $thiz.en;
      break;
    }
    case 3: {
      return $thiz.eo;
      break;
    }
    case 4: {
      return $thiz.ep;
      break;
    }
    case 5: {
      return $thiz.eq;
      break;
    }
    case 6: {
      return $thiz.er;
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
      return $thiz.fc;
      break;
    }
    case 1: {
      return $thiz.es;
      break;
    }
    case 2: {
      return $thiz.et;
      break;
    }
    case 3: {
      return $thiz.eu;
      break;
    }
    case 4: {
      return $thiz.ev;
      break;
    }
    case 5: {
      return $thiz.ew;
      break;
    }
    case 6: {
      return $thiz.ex;
      break;
    }
    case 7: {
      return $thiz.ey;
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
      return $thiz.fd;
      break;
    }
    case 1: {
      return $thiz.ez;
      break;
    }
    case 2: {
      return $thiz.eA;
      break;
    }
    case 3: {
      return $thiz.eB;
      break;
    }
    case 4: {
      return $thiz.eC;
      break;
    }
    case 5: {
      return $thiz.eD;
      break;
    }
    case 6: {
      return $thiz.eE;
      break;
    }
    case 7: {
      return $thiz.eF;
      break;
    }
    case 8: {
      return $thiz.eG;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 8)"));
    }
  }
}
function $f_sc_Iterator__concat__F0__sc_Iterator($thiz, xs) {
  return new $c_sc_Iterator$ConcatIterator($thiz).lo(xs);
}
function $f_sc_Iterator__sliceIterator__I__I__sc_Iterator($thiz, from, until) {
  var lo = ((from > 0) ? from : 0);
  var rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
  return ((rest === 0) ? $m_sc_Iterator$().aC : new $c_sc_Iterator$SliceIterator($thiz, lo, rest));
}
function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
  var those = that.P();
  while ($thiz.C()) {
    if ((!those.C())) {
      return false;
    }
    if ((!$m_sr_BoxesRunTime$().b($thiz.B(), those.B()))) {
      return false;
    }
  }
  return (!those.C());
}
/** @constructor */
function $c_sc_Iterator$() {
  this.aC = null;
  $n_sc_Iterator$ = this;
  this.aC = new $c_sc_Iterator$$anon$19();
}
$p = $c_sc_Iterator$.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
}
$h_sc_Iterator$.prototype = $p;
var $d_sc_Iterator$ = new $TypeData().i($c_sc_Iterator$, "scala.collection.Iterator$", ({
  bN: 1,
  a: 1,
  aj: 1
}));
var $n_sc_Iterator$;
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$();
  }
  return $n_sc_Iterator$;
}
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cg)));
}
/** @constructor */
function $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(f) {
  this.j2 = null;
  this.j2 = f;
}
$p = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = new $h_sr_AbstractFunction0();
$p.constructor = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c;
/** @constructor */
function $h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c() {
}
$h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = $p;
$p.ge = (function() {
  return (0, this.j2)();
});
var $d_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c = new $TypeData().i($c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c, "scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c", ({
  cp: 1,
  co: 1,
  b9: 1
}));
/** @constructor */
function $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(f) {
  this.j3 = null;
  this.j3 = f;
}
$p = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919;
/** @constructor */
function $h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919() {
}
$h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = $p;
$p.H = (function(x0) {
  return (0, this.j3)(x0);
});
var $d_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919 = new $TypeData().i($c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919, "scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919", ({
  cr: 1,
  cq: 1,
  k: 1
}));
/** @constructor */
function $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(f) {
  this.j4 = null;
  this.j4 = f;
}
$p = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = new $h_sr_AbstractFunction2();
$p.constructor = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8;
/** @constructor */
function $h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8() {
}
$h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = $p;
$p.kf = (function(x0, x1) {
  return (0, this.j4)(x0, x1);
});
var $d_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8 = new $TypeData().i($c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8, "scala.runtime.AbstractFunction2.$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8", ({
  ct: 1,
  cs: 1,
  ba: 1
}));
/** @constructor */
function $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(f) {
  this.j5 = null;
  this.j5 = f;
}
$p = $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825.prototype = new $h_sr_AbstractFunction3();
$p.constructor = $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825;
/** @constructor */
function $h_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825() {
}
$h_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825.prototype = $p;
$p.lb = (function(x0, x1, x2) {
  return (0, this.j5)(x0, x1, x2);
});
var $d_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825 = new $TypeData().i($c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825, "scala.runtime.AbstractFunction3.$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825", ({
  cv: 1,
  cu: 1,
  bb: 1
}));
/** @constructor */
function $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(f) {
  this.j6 = null;
  this.j6 = f;
}
$p = $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a.prototype = new $h_sr_AbstractFunction4();
$p.constructor = $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a;
/** @constructor */
function $h_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a() {
}
$h_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a.prototype = $p;
$p.la = (function(x0, x1, x2, x3) {
  return (0, this.j6)(x0, x1, x2, x3);
});
var $d_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a = new $TypeData().i($c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a, "scala.runtime.AbstractFunction4.$$Lambda$451042f443265710aa66de6985cba67480d9b00a", ({
  cx: 1,
  cw: 1,
  bc: 1
}));
/** @constructor */
function $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078(f) {
  this.j7 = null;
  this.j7 = f;
}
$p = $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078.prototype = new $h_sr_AbstractFunction5();
$p.constructor = $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078;
/** @constructor */
function $h_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078() {
}
$h_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078.prototype = $p;
$p.l9 = (function(x0, x1, x2, x3, x4) {
  return (0, this.j7)(x0, x1, x2, x3, x4);
});
var $d_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078 = new $TypeData().i($c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078, "scala.runtime.AbstractFunction5.$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078", ({
  cz: 1,
  cy: 1,
  bd: 1
}));
var $d_sr_Nothing$ = new $TypeData().i(0, "scala.runtime.Nothing$", ({
  cB: 1,
  f: 1,
  a: 1
}));
/** @constructor */
function $c_sr_TupleXXL(es) {
  this.J = null;
  this.J = es;
  if ((es.a.length <= 22)) {
    $m_sr_Scala3RunTime$().lg();
  }
}
$p = $c_sr_TupleXXL.prototype = new $h_O();
$p.constructor = $c_sr_TupleXXL;
/** @constructor */
function $h_sr_TupleXXL() {
}
$h_sr_TupleXXL.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.k = (function(n) {
  return this.J.a[n];
});
$p.s = (function() {
  return this.J.a.length;
});
$p.x = (function() {
  return "Tuple";
});
$p.l = (function() {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($m_s_Predef$().n0(this.J), "(", ",", ")");
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().ln(this, (-889275714), null);
});
$p.n = (function(that) {
  if ((that instanceof $c_sr_TupleXXL)) {
    if ((this.J === that.J)) {
      return true;
    } else {
      if ((this.J.a.length !== that.J.a.length)) {
        return false;
      }
      var i = 0;
      while ((i < this.J.a.length)) {
        var $x_2 = $m_sr_BoxesRunTime$();
        var arr$3 = this.J;
        var n = i;
        var $x_1 = arr$3.a[n];
        var arr$4 = that.J;
        var n$1 = i;
        if ((!$x_2.b($x_1, arr$4.a[n$1]))) {
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ay)));
}
var $d_sr_TupleXXL = new $TypeData().i($c_sr_TupleXXL, "scala.runtime.TupleXXL", ({
  ay: 1,
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
$p.gg = (function(f) {
  return ((arg1$2) => f.H(arg1$2));
});
var $d_sjs_js_Any$ = new $TypeData().i($c_sjs_js_Any$, "scala.scalajs.js.Any$", ({
  cI: 1,
  cM: 1,
  cN: 1
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
function $c_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3.prototype = new $h_s_Conversion();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3.prototype = $p;
$p.H = (function(x) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec4((+x.ec), (+x.aJ), (+x.aK), (+x.aL));
});
var $d_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3, "trivalibs.graphics.math.cpu.Vec4$$anon$3", ({
  dV: 1,
  T: 1,
  k: 1
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
$p.H = (function(x) {
  var v = (+x);
  $m_Ltrivalibs_graphics_math_gpu_expr$package$();
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().lG(v));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1, "trivalibs.graphics.math.gpu.float_expr$package$$anon$1", ({
  e5: 1,
  T: 1,
  k: 1
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
class $c_jl_AssertionError extends $c_jl_Error {
  constructor(detailMessage) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ("" + detailMessage), ((detailMessage instanceof $c_jl_Throwable) ? detailMessage : null), true, true);
  }
}
var $d_jl_AssertionError = new $TypeData().i($c_jl_AssertionError, "java.lang.AssertionError", ({
  aP: 1,
  aU: 1,
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
  aQ: 1,
  a: 1,
  h: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.Q)));
}
var $d_jl_Character = new $TypeData().i(0, "java.lang.Character", ({
  Q: 1,
  a: 1,
  h: 1,
  g: 1
}), ((x) => (x instanceof $Char)));
class $c_jl_RuntimeException extends $c_jl_Exception {
}
/** @constructor */
function $c_jl_StringBuilder() {
  this.Q = null;
  this.Q = "";
}
$p = $c_jl_StringBuilder.prototype = new $h_O();
$p.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
}
$h_jl_StringBuilder.prototype = $p;
$p.l = (function() {
  return this.Q;
});
$p.E = (function() {
  return this.Q.length;
});
$p.km = (function(index) {
  return this.Q.charCodeAt(index);
});
var $d_jl_StringBuilder = new $TypeData().i($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  b2: 1,
  D: 1,
  aN: 1,
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
$p.V = (function() {
  return (-1);
});
$p.ko = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.ke = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.P = (function() {
  return this;
});
$p.hi = (function(n) {
  return this.ho(n, (-1));
});
$p.ho = (function(from, until) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until);
});
$p.l = (function() {
  return "<iterator>";
});
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.fA(0) === 0);
}
function $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  var thisKnownSize = $thiz.V();
  if ((thisKnownSize !== (-1))) {
    var thatKnownSize = that.V();
    if ((thatKnownSize !== (-1))) {
      if ((thisKnownSize !== thatKnownSize)) {
        return false;
      }
      if ((thisKnownSize === 0)) {
        return true;
      }
    }
  }
  return $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz.P(), that);
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$.prototype = $p;
$p.ap = (function(m) {
  return m.hv;
});
$p.aq = (function(m) {
  return m.hw;
});
$p.ar = (function(m) {
  return m.hx;
});
$p.as = (function(m) {
  return m.hy;
});
$p.at = (function(m) {
  return m.hz;
});
$p.au = (function(m) {
  return m.hA;
});
$p.av = (function(m) {
  return m.hB;
});
$p.aw = (function(m) {
  return m.hC;
});
$p.ax = (function(m) {
  return m.hD;
});
$p.gj = (function(m, v) {
  m.hv = v;
});
$p.gk = (function(m, v) {
  m.hw = v;
});
$p.gl = (function(m, v) {
  m.hx = v;
});
$p.gn = (function(m, v) {
  m.hy = v;
});
$p.go = (function(m, v) {
  m.hz = v;
});
$p.gp = (function(m, v) {
  m.hA = v;
});
$p.gr = (function(m, v) {
  m.hB = v;
});
$p.gs = (function(m, v) {
  m.hC = v;
});
$p.gt = (function(m, v) {
  m.hD = v;
});
var $d_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$, "trivalibs.graphics.math.cpu.Mat3$given_Mat3Mutable_Mat3$", ({
  dG: 1,
  N: 1,
  aE: 1,
  aF: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$;
function $m_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$)) {
    $n_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$ = new $c_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$;
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
$p.ap = (function(m) {
  return m.gK;
});
$p.aq = (function(m) {
  return m.gL;
});
$p.ar = (function(m) {
  return m.gM;
});
$p.gm = (function(m) {
  return m.hE;
});
$p.as = (function(m) {
  return m.gN;
});
$p.at = (function(m) {
  return m.gO;
});
$p.au = (function(m) {
  return m.gP;
});
$p.gq = (function(m) {
  return m.hF;
});
$p.av = (function(m) {
  return m.gQ;
});
$p.aw = (function(m) {
  return m.gR;
});
$p.ax = (function(m) {
  return m.gS;
});
$p.gu = (function(m) {
  return m.hG;
});
$p.gv = (function(m) {
  return m.hH;
});
$p.gw = (function(m) {
  return m.hI;
});
$p.gx = (function(m) {
  return m.hJ;
});
$p.gy = (function(m) {
  return m.hK;
});
$p.gj = (function(m, v) {
  m.gK = v;
});
$p.gk = (function(m, v) {
  m.gL = v;
});
$p.gl = (function(m, v) {
  m.gM = v;
});
$p.kA = (function(m, v) {
  m.hE = v;
});
$p.gn = (function(m, v) {
  m.gN = v;
});
$p.go = (function(m, v) {
  m.gO = v;
});
$p.gp = (function(m, v) {
  m.gP = v;
});
$p.kB = (function(m, v) {
  m.hF = v;
});
$p.gr = (function(m, v) {
  m.gQ = v;
});
$p.gs = (function(m, v) {
  m.gR = v;
});
$p.gt = (function(m, v) {
  m.gS = v;
});
$p.kC = (function(m, v) {
  m.hG = v;
});
$p.kD = (function(m, v) {
  m.hH = v;
});
$p.kE = (function(m, v) {
  m.hI = v;
});
$p.kF = (function(m, v) {
  m.hJ = v;
});
$p.kG = (function(m, v) {
  m.hK = v;
});
var $d_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$, "trivalibs.graphics.math.cpu.Mat4$given_Mat4Mutable_Mat4$", ({
  dJ: 1,
  O: 1,
  aG: 1,
  aH: 1
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
$p.aZ = (function(v) {
  return v.hM;
});
$p.b0 = (function(v) {
  return v.hN;
});
$p.b1 = (function(v) {
  return v.hO;
});
$p.aY = (function(v) {
  return v.hL;
});
var $d_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$, "trivalibs.graphics.math.cpu.Quat$given_Vec4Mutable_Quat$", ({
  dN: 1,
  aJ: 1,
  dA: 1,
  dD: 1
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
  dS: 1,
  aI: 1,
  dw: 1,
  dz: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$;
function $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$)) {
    $n_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$ = new $c_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$.prototype = $p;
$p.is = (function(m) {
  var offset$proxy19 = (m.off | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy19, true));
});
$p.iu = (function(m) {
  var offset$proxy20 = ((4 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy20, true));
});
$p.iw = (function(m) {
  var offset$proxy21 = ((8 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy21, true));
});
$p.iy = (function(m) {
  var offset$proxy22 = ((16 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy22, true));
});
$p.iA = (function(m) {
  var offset$proxy23 = ((20 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy23, true));
});
$p.iC = (function(m) {
  var offset$proxy24 = ((24 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy24, true));
});
$p.iE = (function(m) {
  var offset$proxy25 = ((32 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy25, true));
});
$p.iG = (function(m) {
  var offset$proxy26 = ((36 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy26, true));
});
$p.iI = (function(m) {
  var offset$proxy27 = ((40 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy27, true));
});
$p.it = (function(m, v) {
  var value$proxy10 = Math.fround(v);
  var offset$proxy28 = (m.off | 0);
  m.dv.setFloat32(offset$proxy28, value$proxy10, true);
});
$p.iv = (function(m, v) {
  var value$proxy11 = Math.fround(v);
  var offset$proxy29 = ((4 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy29, value$proxy11, true);
});
$p.ix = (function(m, v) {
  var value$proxy12 = Math.fround(v);
  var offset$proxy30 = ((8 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy30, value$proxy12, true);
});
$p.iz = (function(m, v) {
  var value$proxy13 = Math.fround(v);
  var offset$proxy31 = ((16 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy31, value$proxy13, true);
});
$p.iB = (function(m, v) {
  var value$proxy14 = Math.fround(v);
  var offset$proxy32 = ((20 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy32, value$proxy14, true);
});
$p.iD = (function(m, v) {
  var value$proxy15 = Math.fround(v);
  var offset$proxy33 = ((24 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy33, value$proxy15, true);
});
$p.iF = (function(m, v) {
  var value$proxy16 = Math.fround(v);
  var offset$proxy34 = ((32 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy34, value$proxy16, true);
});
$p.iH = (function(m, v) {
  var value$proxy17 = Math.fround(v);
  var offset$proxy35 = ((36 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy35, value$proxy17, true);
});
$p.iJ = (function(m, v) {
  var value$proxy18 = Math.fround(v);
  var offset$proxy36 = ((40 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy36, value$proxy18, true);
});
$p.ap = (function(m) {
  return this.is(m);
});
$p.aq = (function(m) {
  return this.iu(m);
});
$p.ar = (function(m) {
  return this.iw(m);
});
$p.as = (function(m) {
  return this.iy(m);
});
$p.at = (function(m) {
  return this.iA(m);
});
$p.au = (function(m) {
  return this.iC(m);
});
$p.av = (function(m) {
  return this.iE(m);
});
$p.aw = (function(m) {
  return this.iG(m);
});
$p.ax = (function(m) {
  return this.iI(m);
});
$p.gj = (function(m, v) {
  this.it(m, v);
});
$p.gk = (function(m, v) {
  this.iv(m, v);
});
$p.gl = (function(m, v) {
  this.ix(m, v);
});
$p.gn = (function(m, v) {
  this.iz(m, v);
});
$p.go = (function(m, v) {
  this.iB(m, v);
});
$p.gp = (function(m, v) {
  this.iD(m, v);
});
$p.gr = (function(m, v) {
  this.iF(m, v);
});
$p.gs = (function(m, v) {
  this.iH(m, v);
});
$p.gt = (function(m, v) {
  this.iJ(m, v);
});
var $d_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$, "trivalibs.graphics.math.cpu.mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$", ({
  dY: 1,
  N: 1,
  aE: 1,
  aF: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$;
function $m_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$ = new $c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$;
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
$p.is = (function(m) {
  var offset$proxy1 = (m.off | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy1, true));
});
$p.iu = (function(m) {
  var offset$proxy2 = ((4 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy2, true));
});
$p.iw = (function(m) {
  var offset$proxy3 = ((8 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy3, true));
});
$p.m5 = (function(m) {
  var offset$proxy4 = ((12 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy4, true));
});
$p.iy = (function(m) {
  var offset$proxy5 = ((16 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy5, true));
});
$p.iA = (function(m) {
  var offset$proxy6 = ((20 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy6, true));
});
$p.iC = (function(m) {
  var offset$proxy7 = ((24 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy7, true));
});
$p.m7 = (function(m) {
  var offset$proxy8 = ((28 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy8, true));
});
$p.iE = (function(m) {
  var offset$proxy9 = ((32 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy9, true));
});
$p.iG = (function(m) {
  var offset$proxy10 = ((36 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy10, true));
});
$p.iI = (function(m) {
  var offset$proxy11 = ((40 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy11, true));
});
$p.m9 = (function(m) {
  var offset$proxy12 = ((44 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy12, true));
});
$p.mb = (function(m) {
  var offset$proxy13 = ((48 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy13, true));
});
$p.md = (function(m) {
  var offset$proxy14 = ((52 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy14, true));
});
$p.mf = (function(m) {
  var offset$proxy15 = ((56 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy15, true));
});
$p.mh = (function(m) {
  var offset$proxy16 = ((60 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy16, true));
});
$p.it = (function(m, v) {
  var value$proxy1 = Math.fround(v);
  var offset$proxy17 = (m.off | 0);
  m.dv.setFloat32(offset$proxy17, value$proxy1, true);
});
$p.iv = (function(m, v) {
  var value$proxy2 = Math.fround(v);
  var offset$proxy18 = ((4 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy18, value$proxy2, true);
});
$p.ix = (function(m, v) {
  var value$proxy3 = Math.fround(v);
  var offset$proxy19 = ((8 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy19, value$proxy3, true);
});
$p.m6 = (function(m, v) {
  var value$proxy4 = Math.fround(v);
  var offset$proxy20 = ((12 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy20, value$proxy4, true);
});
$p.iz = (function(m, v) {
  var value$proxy5 = Math.fround(v);
  var offset$proxy21 = ((16 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy21, value$proxy5, true);
});
$p.iB = (function(m, v) {
  var value$proxy6 = Math.fround(v);
  var offset$proxy22 = ((20 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy22, value$proxy6, true);
});
$p.iD = (function(m, v) {
  var value$proxy7 = Math.fround(v);
  var offset$proxy23 = ((24 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy23, value$proxy7, true);
});
$p.m8 = (function(m, v) {
  var value$proxy8 = Math.fround(v);
  var offset$proxy24 = ((28 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy24, value$proxy8, true);
});
$p.iF = (function(m, v) {
  var value$proxy9 = Math.fround(v);
  var offset$proxy25 = ((32 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy25, value$proxy9, true);
});
$p.iH = (function(m, v) {
  var value$proxy10 = Math.fround(v);
  var offset$proxy26 = ((36 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy26, value$proxy10, true);
});
$p.iJ = (function(m, v) {
  var value$proxy11 = Math.fround(v);
  var offset$proxy27 = ((40 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy27, value$proxy11, true);
});
$p.ma = (function(m, v) {
  var value$proxy12 = Math.fround(v);
  var offset$proxy28 = ((44 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy28, value$proxy12, true);
});
$p.mc = (function(m, v) {
  var value$proxy13 = Math.fround(v);
  var offset$proxy29 = ((48 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy29, value$proxy13, true);
});
$p.me = (function(m, v) {
  var value$proxy14 = Math.fround(v);
  var offset$proxy30 = ((52 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy30, value$proxy14, true);
});
$p.mg = (function(m, v) {
  var value$proxy15 = Math.fround(v);
  var offset$proxy31 = ((56 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy31, value$proxy15, true);
});
$p.mi = (function(m, v) {
  var value$proxy16 = Math.fround(v);
  var offset$proxy32 = ((60 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy32, value$proxy16, true);
});
$p.ap = (function(m) {
  return this.is(m);
});
$p.aq = (function(m) {
  return this.iu(m);
});
$p.ar = (function(m) {
  return this.iw(m);
});
$p.gm = (function(m) {
  return this.m5(m);
});
$p.as = (function(m) {
  return this.iy(m);
});
$p.at = (function(m) {
  return this.iA(m);
});
$p.au = (function(m) {
  return this.iC(m);
});
$p.gq = (function(m) {
  return this.m7(m);
});
$p.av = (function(m) {
  return this.iE(m);
});
$p.aw = (function(m) {
  return this.iG(m);
});
$p.ax = (function(m) {
  return this.iI(m);
});
$p.gu = (function(m) {
  return this.m9(m);
});
$p.gv = (function(m) {
  return this.mb(m);
});
$p.gw = (function(m) {
  return this.md(m);
});
$p.gx = (function(m) {
  return this.mf(m);
});
$p.gy = (function(m) {
  return this.mh(m);
});
$p.gj = (function(m, v) {
  this.it(m, v);
});
$p.gk = (function(m, v) {
  this.iv(m, v);
});
$p.gl = (function(m, v) {
  this.ix(m, v);
});
$p.kA = (function(m, v) {
  this.m6(m, v);
});
$p.gn = (function(m, v) {
  this.iz(m, v);
});
$p.go = (function(m, v) {
  this.iB(m, v);
});
$p.gp = (function(m, v) {
  this.iD(m, v);
});
$p.kB = (function(m, v) {
  this.m8(m, v);
});
$p.gr = (function(m, v) {
  this.iF(m, v);
});
$p.gs = (function(m, v) {
  this.iH(m, v);
});
$p.gt = (function(m, v) {
  this.iJ(m, v);
});
$p.kC = (function(m, v) {
  this.ma(m, v);
});
$p.kD = (function(m, v) {
  this.mc(m, v);
});
$p.kE = (function(m, v) {
  this.me(m, v);
});
$p.kF = (function(m, v) {
  this.mg(m, v);
});
$p.kG = (function(m, v) {
  this.mi(m, v);
});
var $d_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$, "trivalibs.graphics.math.cpu.mat4$package$Mat4Buffer$given_Mat4Mutable_StructRef$", ({
  e1: 1,
  O: 1,
  aG: 1,
  aH: 1
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
  var all = [vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, uniformDecls, $thiz.g1, f$proxy1, g$proxy1];
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
  this.g2 = null;
  this.g0 = null;
  this.g1 = null;
  this.g2 = vertexBody;
  this.g0 = fragmentBody;
  this.g1 = helperFns;
}
$p = $c_Ltrivalibs_graphics_shader_ShaderDef.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_ShaderDef;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_ShaderDef() {
}
$h_Ltrivalibs_graphics_shader_ShaderDef.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().D(this, (-1488826029), true);
});
$p.n = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_Ltrivalibs_graphics_shader_ShaderDef) && (((this.g2 === x$0.g2) && (this.g0 === x$0.g0)) && (this.g1 === x$0.g1))));
});
$p.l = (function() {
  return $m_sr_ScalaRunTime$().l3(this);
});
$p.s = (function() {
  return 3;
});
$p.x = (function() {
  return "ShaderDef";
});
$p.k = (function(n) {
  switch (n) {
    case 0: {
      return this.g2;
      break;
    }
    case 1: {
      return this.g0;
      break;
    }
    case 2: {
      return this.g1;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
    }
  }
});
function $isArrayOf_Ltrivalibs_graphics_shader_ShaderDef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aM)));
}
var $d_Ltrivalibs_graphics_shader_ShaderDef = new $TypeData().i($c_Ltrivalibs_graphics_shader_ShaderDef, "trivalibs.graphics.shader.ShaderDef", ({
  aM: 1,
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
  aO: 1,
  j: 1,
  i: 1,
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
  aR: 1,
  l: 1,
  a: 1,
  h: 1,
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
  aW: 1,
  j: 1,
  i: 1,
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
  aX: 1,
  j: 1,
  i: 1,
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
  aZ: 1,
  j: 1,
  i: 1,
  f: 1,
  a: 1
}));
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
  b0: 1,
  l: 1,
  a: 1,
  h: 1,
  g: 1
}), ((x) => $isShort(x)));
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_UnsupportedOperationException = new $TypeData().i($c_jl_UnsupportedOperationException, "java.lang.UnsupportedOperationException", ({
  b3: 1,
  j: 1,
  i: 1,
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
  b6: 1,
  j: 1,
  i: 1,
  f: 1,
  a: 1
}));
function $p_s_MatchError__objString__T($thiz) {
  if ((!$thiz.iU)) {
    if (($thiz.gB === null)) {
      var $x_1 = "null";
    } else {
      var this$1 = $thiz.gB;
      var cls = $objectGetClass(this$1);
      var ofClass = ((cls === null) ? "of a JS class" : ("of class " + cls.hq.N));
      try {
        var $x_1 = ((($thiz.gB + " (") + ofClass) + ")");
      } catch (e) {
        var $x_1 = ("an instance " + ofClass);
      }
    }
    $thiz.iT = $x_1;
    $thiz.iU = true;
  }
  return $thiz.iT;
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.gB = null;
    this.iT = null;
    this.iU = false;
    this.gB = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  hj() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().i($c_s_MatchError, "scala.MatchError", ({
  bg: 1,
  j: 1,
  i: 1,
  f: 1,
  a: 1
}));
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.fD = 0;
  this.iW = 0;
  this.iV = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.iV = outer;
  this.fD = 0;
  this.iW = outer.s();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $p;
$p.C = (function() {
  return (this.fD < this.iW);
});
$p.B = (function() {
  var result = this.iV.k(this.fD);
  this.fD = ((1 + this.fD) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().i($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  bi: 1,
  m: 1,
  d: 1,
  e: 1,
  n: 1
}));
/** @constructor */
function $c_T1(_1) {
  this.eV = null;
  this.eV = _1;
}
$p = $c_T1.prototype = new $h_O();
$p.constructor = $c_T1;
/** @constructor */
function $h_T1() {
}
$h_T1.prototype = $p;
$p.s = (function() {
  return 1;
});
$p.k = (function(n) {
  return $f_s_Product1__productElement__I__O(this, n);
});
$p.l = (function() {
  return (("(" + this.eV) + ")");
});
$p.x = (function() {
  return "Tuple1";
});
$p.A = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().D(this, 1228477340, true);
});
$p.n = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T1) && $m_sr_BoxesRunTime$().b(this.eV, x$1.eV)));
});
function $isArrayOf_T1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.U)));
}
var $d_T1 = new $TypeData().i($c_T1, "scala.Tuple1", ({
  U: 1,
  bj: 1,
  c: 1,
  b: 1,
  a: 1
}));
/** @constructor */
function $c_T10(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10) {
  this.eW = null;
  this.b3 = null;
  this.b4 = null;
  this.b5 = null;
  this.b6 = null;
  this.b7 = null;
  this.b8 = null;
  this.b9 = null;
  this.ba = null;
  this.b2 = null;
  this.eW = _1;
  this.b3 = _2;
  this.b4 = _3;
  this.b5 = _4;
  this.b6 = _5;
  this.b7 = _6;
  this.b8 = _7;
  this.b9 = _8;
  this.ba = _9;
  this.b2 = _10;
}
$p = $c_T10.prototype = new $h_O();
$p.constructor = $c_T10;
/** @constructor */
function $h_T10() {
}
$h_T10.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 10;
});
$p.k = (function(n) {
  return $f_s_Product10__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().D(this, 2104595240, true);
});
$p.n = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T10) && ((((((((($m_sr_BoxesRunTime$().b(this.eW, x$0.eW) && $m_sr_BoxesRunTime$().b(this.b3, x$0.b3)) && $m_sr_BoxesRunTime$().b(this.b4, x$0.b4)) && $m_sr_BoxesRunTime$().b(this.b5, x$0.b5)) && $m_sr_BoxesRunTime$().b(this.b6, x$0.b6)) && $m_sr_BoxesRunTime$().b(this.b7, x$0.b7)) && $m_sr_BoxesRunTime$().b(this.b8, x$0.b8)) && $m_sr_BoxesRunTime$().b(this.b9, x$0.b9)) && $m_sr_BoxesRunTime$().b(this.ba, x$0.ba)) && $m_sr_BoxesRunTime$().b(this.b2, x$0.b2))));
});
$p.x = (function() {
  return "Tuple10";
});
$p.l = (function() {
  return (((((((((((((((((((("(" + this.eW) + ",") + this.b3) + ",") + this.b4) + ",") + this.b5) + ",") + this.b6) + ",") + this.b7) + ",") + this.b8) + ",") + this.b9) + ",") + this.ba) + ",") + this.b2) + ")");
});
function $isArrayOf_T10(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.V)));
}
var $d_T10 = new $TypeData().i($c_T10, "scala.Tuple10", ({
  V: 1,
  b: 1,
  c: 1,
  bk: 1,
  a: 1
}));
/** @constructor */
function $c_T11(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11) {
  this.eX = null;
  this.bd = null;
  this.be = null;
  this.bf = null;
  this.bg = null;
  this.bh = null;
  this.bi = null;
  this.bj = null;
  this.bk = null;
  this.bb = null;
  this.bc = null;
  this.eX = _1;
  this.bd = _2;
  this.be = _3;
  this.bf = _4;
  this.bg = _5;
  this.bh = _6;
  this.bi = _7;
  this.bj = _8;
  this.bk = _9;
  this.bb = _10;
  this.bc = _11;
}
$p = $c_T11.prototype = new $h_O();
$p.constructor = $c_T11;
/** @constructor */
function $h_T11() {
}
$h_T11.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 11;
});
$p.k = (function(n) {
  return $f_s_Product11__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().D(this, 838406606, true);
});
$p.n = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T11) && (((((((((($m_sr_BoxesRunTime$().b(this.eX, x$0.eX) && $m_sr_BoxesRunTime$().b(this.bd, x$0.bd)) && $m_sr_BoxesRunTime$().b(this.be, x$0.be)) && $m_sr_BoxesRunTime$().b(this.bf, x$0.bf)) && $m_sr_BoxesRunTime$().b(this.bg, x$0.bg)) && $m_sr_BoxesRunTime$().b(this.bh, x$0.bh)) && $m_sr_BoxesRunTime$().b(this.bi, x$0.bi)) && $m_sr_BoxesRunTime$().b(this.bj, x$0.bj)) && $m_sr_BoxesRunTime$().b(this.bk, x$0.bk)) && $m_sr_BoxesRunTime$().b(this.bb, x$0.bb)) && $m_sr_BoxesRunTime$().b(this.bc, x$0.bc))));
});
$p.x = (function() {
  return "Tuple11";
});
$p.l = (function() {
  return (((((((((((((((((((((("(" + this.eX) + ",") + this.bd) + ",") + this.be) + ",") + this.bf) + ",") + this.bg) + ",") + this.bh) + ",") + this.bi) + ",") + this.bj) + ",") + this.bk) + ",") + this.bb) + ",") + this.bc) + ")");
});
function $isArrayOf_T11(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.W)));
}
var $d_T11 = new $TypeData().i($c_T11, "scala.Tuple11", ({
  W: 1,
  b: 1,
  c: 1,
  bl: 1,
  a: 1
}));
/** @constructor */
function $c_T12(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12) {
  this.eY = null;
  this.bo = null;
  this.bp = null;
  this.bq = null;
  this.br = null;
  this.bs = null;
  this.bt = null;
  this.bu = null;
  this.bv = null;
  this.bl = null;
  this.bm = null;
  this.bn = null;
  this.eY = _1;
  this.bo = _2;
  this.bp = _3;
  this.bq = _4;
  this.br = _5;
  this.bs = _6;
  this.bt = _7;
  this.bu = _8;
  this.bv = _9;
  this.bl = _10;
  this.bm = _11;
  this.bn = _12;
}
$p = $c_T12.prototype = new $h_O();
$p.constructor = $c_T12;
/** @constructor */
function $h_T12() {
}
$h_T12.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 12;
});
$p.k = (function(n) {
  return $f_s_Product12__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().D(this, (-1964145863), true);
});
$p.n = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T12) && ((((((((((($m_sr_BoxesRunTime$().b(this.eY, x$0.eY) && $m_sr_BoxesRunTime$().b(this.bo, x$0.bo)) && $m_sr_BoxesRunTime$().b(this.bp, x$0.bp)) && $m_sr_BoxesRunTime$().b(this.bq, x$0.bq)) && $m_sr_BoxesRunTime$().b(this.br, x$0.br)) && $m_sr_BoxesRunTime$().b(this.bs, x$0.bs)) && $m_sr_BoxesRunTime$().b(this.bt, x$0.bt)) && $m_sr_BoxesRunTime$().b(this.bu, x$0.bu)) && $m_sr_BoxesRunTime$().b(this.bv, x$0.bv)) && $m_sr_BoxesRunTime$().b(this.bl, x$0.bl)) && $m_sr_BoxesRunTime$().b(this.bm, x$0.bm)) && $m_sr_BoxesRunTime$().b(this.bn, x$0.bn))));
});
$p.x = (function() {
  return "Tuple12";
});
$p.l = (function() {
  return (((((((((((((((((((((((("(" + this.eY) + ",") + this.bo) + ",") + this.bp) + ",") + this.bq) + ",") + this.br) + ",") + this.bs) + ",") + this.bt) + ",") + this.bu) + ",") + this.bv) + ",") + this.bl) + ",") + this.bm) + ",") + this.bn) + ")");
});
function $isArrayOf_T12(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.X)));
}
var $d_T12 = new $TypeData().i($c_T12, "scala.Tuple12", ({
  X: 1,
  b: 1,
  c: 1,
  bm: 1,
  a: 1
}));
/** @constructor */
function $c_T13(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13) {
  this.eZ = null;
  this.bA = null;
  this.bB = null;
  this.bC = null;
  this.bD = null;
  this.bE = null;
  this.bF = null;
  this.bG = null;
  this.bH = null;
  this.bw = null;
  this.bx = null;
  this.by = null;
  this.bz = null;
  this.eZ = _1;
  this.bA = _2;
  this.bB = _3;
  this.bC = _4;
  this.bD = _5;
  this.bE = _6;
  this.bF = _7;
  this.bG = _8;
  this.bH = _9;
  this.bw = _10;
  this.bx = _11;
  this.by = _12;
  this.bz = _13;
}
$p = $c_T13.prototype = new $h_O();
$p.constructor = $c_T13;
/** @constructor */
function $h_T13() {
}
$h_T13.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 13;
});
$p.k = (function(n) {
  return $f_s_Product13__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().D(this, 1224168367, true);
});
$p.n = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T13) && (((((((((((($m_sr_BoxesRunTime$().b(this.eZ, x$0.eZ) && $m_sr_BoxesRunTime$().b(this.bA, x$0.bA)) && $m_sr_BoxesRunTime$().b(this.bB, x$0.bB)) && $m_sr_BoxesRunTime$().b(this.bC, x$0.bC)) && $m_sr_BoxesRunTime$().b(this.bD, x$0.bD)) && $m_sr_BoxesRunTime$().b(this.bE, x$0.bE)) && $m_sr_BoxesRunTime$().b(this.bF, x$0.bF)) && $m_sr_BoxesRunTime$().b(this.bG, x$0.bG)) && $m_sr_BoxesRunTime$().b(this.bH, x$0.bH)) && $m_sr_BoxesRunTime$().b(this.bw, x$0.bw)) && $m_sr_BoxesRunTime$().b(this.bx, x$0.bx)) && $m_sr_BoxesRunTime$().b(this.by, x$0.by)) && $m_sr_BoxesRunTime$().b(this.bz, x$0.bz))));
});
$p.x = (function() {
  return "Tuple13";
});
$p.l = (function() {
  return (((((((((((((((((((((((((("(" + this.eZ) + ",") + this.bA) + ",") + this.bB) + ",") + this.bC) + ",") + this.bD) + ",") + this.bE) + ",") + this.bF) + ",") + this.bG) + ",") + this.bH) + ",") + this.bw) + ",") + this.bx) + ",") + this.by) + ",") + this.bz) + ")");
});
function $isArrayOf_T13(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.Y)));
}
var $d_T13 = new $TypeData().i($c_T13, "scala.Tuple13", ({
  Y: 1,
  b: 1,
  c: 1,
  bn: 1,
  a: 1
}));
/** @constructor */
function $c_T14(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14) {
  this.f0 = null;
  this.bN = null;
  this.bO = null;
  this.bP = null;
  this.bQ = null;
  this.bR = null;
  this.bS = null;
  this.bT = null;
  this.bU = null;
  this.bI = null;
  this.bJ = null;
  this.bK = null;
  this.bL = null;
  this.bM = null;
  this.f0 = _1;
  this.bN = _2;
  this.bO = _3;
  this.bP = _4;
  this.bQ = _5;
  this.bR = _6;
  this.bS = _7;
  this.bT = _8;
  this.bU = _9;
  this.bI = _10;
  this.bJ = _11;
  this.bK = _12;
  this.bL = _13;
  this.bM = _14;
}
$p = $c_T14.prototype = new $h_O();
$p.constructor = $c_T14;
/** @constructor */
function $h_T14() {
}
$h_T14.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 14;
});
$p.k = (function(n) {
  return $f_s_Product14__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().D(this, 147759069, true);
});
$p.n = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T14) && ((((((((((((($m_sr_BoxesRunTime$().b(this.f0, x$0.f0) && $m_sr_BoxesRunTime$().b(this.bN, x$0.bN)) && $m_sr_BoxesRunTime$().b(this.bO, x$0.bO)) && $m_sr_BoxesRunTime$().b(this.bP, x$0.bP)) && $m_sr_BoxesRunTime$().b(this.bQ, x$0.bQ)) && $m_sr_BoxesRunTime$().b(this.bR, x$0.bR)) && $m_sr_BoxesRunTime$().b(this.bS, x$0.bS)) && $m_sr_BoxesRunTime$().b(this.bT, x$0.bT)) && $m_sr_BoxesRunTime$().b(this.bU, x$0.bU)) && $m_sr_BoxesRunTime$().b(this.bI, x$0.bI)) && $m_sr_BoxesRunTime$().b(this.bJ, x$0.bJ)) && $m_sr_BoxesRunTime$().b(this.bK, x$0.bK)) && $m_sr_BoxesRunTime$().b(this.bL, x$0.bL)) && $m_sr_BoxesRunTime$().b(this.bM, x$0.bM))));
});
$p.x = (function() {
  return "Tuple14";
});
$p.l = (function() {
  return (((((((((((((((((((((((((((("(" + this.f0) + ",") + this.bN) + ",") + this.bO) + ",") + this.bP) + ",") + this.bQ) + ",") + this.bR) + ",") + this.bS) + ",") + this.bT) + ",") + this.bU) + ",") + this.bI) + ",") + this.bJ) + ",") + this.bK) + ",") + this.bL) + ",") + this.bM) + ")");
});
function $isArrayOf_T14(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.Z)));
}
var $d_T14 = new $TypeData().i($c_T14, "scala.Tuple14", ({
  Z: 1,
  b: 1,
  c: 1,
  bo: 1,
  a: 1
}));
/** @constructor */
function $c_T15(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15) {
  this.f1 = null;
  this.c1 = null;
  this.c2 = null;
  this.c3 = null;
  this.c4 = null;
  this.c5 = null;
  this.c6 = null;
  this.c7 = null;
  this.c8 = null;
  this.bV = null;
  this.bW = null;
  this.bX = null;
  this.bY = null;
  this.bZ = null;
  this.c0 = null;
  this.f1 = _1;
  this.c1 = _2;
  this.c2 = _3;
  this.c3 = _4;
  this.c4 = _5;
  this.c5 = _6;
  this.c6 = _7;
  this.c7 = _8;
  this.c8 = _9;
  this.bV = _10;
  this.bW = _11;
  this.bX = _12;
  this.bY = _13;
  this.bZ = _14;
  this.c0 = _15;
}
$p = $c_T15.prototype = new $h_O();
$p.constructor = $c_T15;
/** @constructor */
function $h_T15() {
}
$h_T15.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 15;
});
$p.k = (function(n) {
  return $f_s_Product15__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().D(this, 1834180931, true);
});
$p.n = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T15) && (((((((((((((($m_sr_BoxesRunTime$().b(this.f1, x$0.f1) && $m_sr_BoxesRunTime$().b(this.c1, x$0.c1)) && $m_sr_BoxesRunTime$().b(this.c2, x$0.c2)) && $m_sr_BoxesRunTime$().b(this.c3, x$0.c3)) && $m_sr_BoxesRunTime$().b(this.c4, x$0.c4)) && $m_sr_BoxesRunTime$().b(this.c5, x$0.c5)) && $m_sr_BoxesRunTime$().b(this.c6, x$0.c6)) && $m_sr_BoxesRunTime$().b(this.c7, x$0.c7)) && $m_sr_BoxesRunTime$().b(this.c8, x$0.c8)) && $m_sr_BoxesRunTime$().b(this.bV, x$0.bV)) && $m_sr_BoxesRunTime$().b(this.bW, x$0.bW)) && $m_sr_BoxesRunTime$().b(this.bX, x$0.bX)) && $m_sr_BoxesRunTime$().b(this.bY, x$0.bY)) && $m_sr_BoxesRunTime$().b(this.bZ, x$0.bZ)) && $m_sr_BoxesRunTime$().b(this.c0, x$0.c0))));
});
$p.x = (function() {
  return "Tuple15";
});
$p.l = (function() {
  return (((((((((((((((((((((((((((((("(" + this.f1) + ",") + this.c1) + ",") + this.c2) + ",") + this.c3) + ",") + this.c4) + ",") + this.c5) + ",") + this.c6) + ",") + this.c7) + ",") + this.c8) + ",") + this.bV) + ",") + this.bW) + ",") + this.bX) + ",") + this.bY) + ",") + this.bZ) + ",") + this.c0) + ")");
});
function $isArrayOf_T15(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a0)));
}
var $d_T15 = new $TypeData().i($c_T15, "scala.Tuple15", ({
  a0: 1,
  b: 1,
  c: 1,
  bp: 1,
  a: 1
}));
/** @constructor */
function $c_T16(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16) {
  this.f2 = null;
  this.cg = null;
  this.ch = null;
  this.ci = null;
  this.cj = null;
  this.ck = null;
  this.cl = null;
  this.cm = null;
  this.cn = null;
  this.c9 = null;
  this.ca = null;
  this.cb = null;
  this.cc = null;
  this.cd = null;
  this.ce = null;
  this.cf = null;
  this.f2 = _1;
  this.cg = _2;
  this.ch = _3;
  this.ci = _4;
  this.cj = _5;
  this.ck = _6;
  this.cl = _7;
  this.cm = _8;
  this.cn = _9;
  this.c9 = _10;
  this.ca = _11;
  this.cb = _12;
  this.cc = _13;
  this.cd = _14;
  this.ce = _15;
  this.cf = _16;
}
$p = $c_T16.prototype = new $h_O();
$p.constructor = $c_T16;
/** @constructor */
function $h_T16() {
}
$h_T16.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 16;
});
$p.k = (function(n) {
  return $f_s_Product16__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().D(this, 499793902, true);
});
$p.n = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T16) && ((((((((((((((($m_sr_BoxesRunTime$().b(this.f2, x$0.f2) && $m_sr_BoxesRunTime$().b(this.cg, x$0.cg)) && $m_sr_BoxesRunTime$().b(this.ch, x$0.ch)) && $m_sr_BoxesRunTime$().b(this.ci, x$0.ci)) && $m_sr_BoxesRunTime$().b(this.cj, x$0.cj)) && $m_sr_BoxesRunTime$().b(this.ck, x$0.ck)) && $m_sr_BoxesRunTime$().b(this.cl, x$0.cl)) && $m_sr_BoxesRunTime$().b(this.cm, x$0.cm)) && $m_sr_BoxesRunTime$().b(this.cn, x$0.cn)) && $m_sr_BoxesRunTime$().b(this.c9, x$0.c9)) && $m_sr_BoxesRunTime$().b(this.ca, x$0.ca)) && $m_sr_BoxesRunTime$().b(this.cb, x$0.cb)) && $m_sr_BoxesRunTime$().b(this.cc, x$0.cc)) && $m_sr_BoxesRunTime$().b(this.cd, x$0.cd)) && $m_sr_BoxesRunTime$().b(this.ce, x$0.ce)) && $m_sr_BoxesRunTime$().b(this.cf, x$0.cf))));
});
$p.x = (function() {
  return "Tuple16";
});
$p.l = (function() {
  return (((((((((((((((((((((((((((((((("(" + this.f2) + ",") + this.cg) + ",") + this.ch) + ",") + this.ci) + ",") + this.cj) + ",") + this.ck) + ",") + this.cl) + ",") + this.cm) + ",") + this.cn) + ",") + this.c9) + ",") + this.ca) + ",") + this.cb) + ",") + this.cc) + ",") + this.cd) + ",") + this.ce) + ",") + this.cf) + ")");
});
function $isArrayOf_T16(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a1)));
}
var $d_T16 = new $TypeData().i($c_T16, "scala.Tuple16", ({
  a1: 1,
  b: 1,
  c: 1,
  bq: 1,
  a: 1
}));
/** @constructor */
function $c_T17(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17) {
  this.f3 = null;
  this.cw = null;
  this.cx = null;
  this.cy = null;
  this.cz = null;
  this.cA = null;
  this.cB = null;
  this.cC = null;
  this.cD = null;
  this.co = null;
  this.cp = null;
  this.cq = null;
  this.cr = null;
  this.cs = null;
  this.ct = null;
  this.cu = null;
  this.cv = null;
  this.f3 = _1;
  this.cw = _2;
  this.cx = _3;
  this.cy = _4;
  this.cz = _5;
  this.cA = _6;
  this.cB = _7;
  this.cC = _8;
  this.cD = _9;
  this.co = _10;
  this.cp = _11;
  this.cq = _12;
  this.cr = _13;
  this.cs = _14;
  this.ct = _15;
  this.cu = _16;
  this.cv = _17;
}
$p = $c_T17.prototype = new $h_O();
$p.constructor = $c_T17;
/** @constructor */
function $h_T17() {
}
$h_T17.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 17;
});
$p.k = (function(n) {
  return $f_s_Product17__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().D(this, (-934366247), true);
});
$p.n = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T17) && (((((((((((((((($m_sr_BoxesRunTime$().b(this.f3, x$0.f3) && $m_sr_BoxesRunTime$().b(this.cw, x$0.cw)) && $m_sr_BoxesRunTime$().b(this.cx, x$0.cx)) && $m_sr_BoxesRunTime$().b(this.cy, x$0.cy)) && $m_sr_BoxesRunTime$().b(this.cz, x$0.cz)) && $m_sr_BoxesRunTime$().b(this.cA, x$0.cA)) && $m_sr_BoxesRunTime$().b(this.cB, x$0.cB)) && $m_sr_BoxesRunTime$().b(this.cC, x$0.cC)) && $m_sr_BoxesRunTime$().b(this.cD, x$0.cD)) && $m_sr_BoxesRunTime$().b(this.co, x$0.co)) && $m_sr_BoxesRunTime$().b(this.cp, x$0.cp)) && $m_sr_BoxesRunTime$().b(this.cq, x$0.cq)) && $m_sr_BoxesRunTime$().b(this.cr, x$0.cr)) && $m_sr_BoxesRunTime$().b(this.cs, x$0.cs)) && $m_sr_BoxesRunTime$().b(this.ct, x$0.ct)) && $m_sr_BoxesRunTime$().b(this.cu, x$0.cu)) && $m_sr_BoxesRunTime$().b(this.cv, x$0.cv))));
});
$p.x = (function() {
  return "Tuple17";
});
$p.l = (function() {
  return (((((((((((((((((((((((((((((((((("(" + this.f3) + ",") + this.cw) + ",") + this.cx) + ",") + this.cy) + ",") + this.cz) + ",") + this.cA) + ",") + this.cB) + ",") + this.cC) + ",") + this.cD) + ",") + this.co) + ",") + this.cp) + ",") + this.cq) + ",") + this.cr) + ",") + this.cs) + ",") + this.ct) + ",") + this.cu) + ",") + this.cv) + ")");
});
function $isArrayOf_T17(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a2)));
}
var $d_T17 = new $TypeData().i($c_T17, "scala.Tuple17", ({
  a2: 1,
  b: 1,
  c: 1,
  br: 1,
  a: 1
}));
/** @constructor */
function $c_T18(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18) {
  this.f4 = null;
  this.cN = null;
  this.cO = null;
  this.cP = null;
  this.cQ = null;
  this.cR = null;
  this.cS = null;
  this.cT = null;
  this.cU = null;
  this.cE = null;
  this.cF = null;
  this.cG = null;
  this.cH = null;
  this.cI = null;
  this.cJ = null;
  this.cK = null;
  this.cL = null;
  this.cM = null;
  this.f4 = _1;
  this.cN = _2;
  this.cO = _3;
  this.cP = _4;
  this.cQ = _5;
  this.cR = _6;
  this.cS = _7;
  this.cT = _8;
  this.cU = _9;
  this.cE = _10;
  this.cF = _11;
  this.cG = _12;
  this.cH = _13;
  this.cI = _14;
  this.cJ = _15;
  this.cK = _16;
  this.cL = _17;
  this.cM = _18;
}
$p = $c_T18.prototype = new $h_O();
$p.constructor = $c_T18;
/** @constructor */
function $h_T18() {
}
$h_T18.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 18;
});
$p.k = (function(n) {
  return $f_s_Product18__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().D(this, (-937041276), true);
});
$p.n = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T18) && ((((((((((((((((($m_sr_BoxesRunTime$().b(this.f4, x$0.f4) && $m_sr_BoxesRunTime$().b(this.cN, x$0.cN)) && $m_sr_BoxesRunTime$().b(this.cO, x$0.cO)) && $m_sr_BoxesRunTime$().b(this.cP, x$0.cP)) && $m_sr_BoxesRunTime$().b(this.cQ, x$0.cQ)) && $m_sr_BoxesRunTime$().b(this.cR, x$0.cR)) && $m_sr_BoxesRunTime$().b(this.cS, x$0.cS)) && $m_sr_BoxesRunTime$().b(this.cT, x$0.cT)) && $m_sr_BoxesRunTime$().b(this.cU, x$0.cU)) && $m_sr_BoxesRunTime$().b(this.cE, x$0.cE)) && $m_sr_BoxesRunTime$().b(this.cF, x$0.cF)) && $m_sr_BoxesRunTime$().b(this.cG, x$0.cG)) && $m_sr_BoxesRunTime$().b(this.cH, x$0.cH)) && $m_sr_BoxesRunTime$().b(this.cI, x$0.cI)) && $m_sr_BoxesRunTime$().b(this.cJ, x$0.cJ)) && $m_sr_BoxesRunTime$().b(this.cK, x$0.cK)) && $m_sr_BoxesRunTime$().b(this.cL, x$0.cL)) && $m_sr_BoxesRunTime$().b(this.cM, x$0.cM))));
});
$p.x = (function() {
  return "Tuple18";
});
$p.l = (function() {
  return (((((((((((((((((((((((((((((((((((("(" + this.f4) + ",") + this.cN) + ",") + this.cO) + ",") + this.cP) + ",") + this.cQ) + ",") + this.cR) + ",") + this.cS) + ",") + this.cT) + ",") + this.cU) + ",") + this.cE) + ",") + this.cF) + ",") + this.cG) + ",") + this.cH) + ",") + this.cI) + ",") + this.cJ) + ",") + this.cK) + ",") + this.cL) + ",") + this.cM) + ")");
});
function $isArrayOf_T18(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a3)));
}
var $d_T18 = new $TypeData().i($c_T18, "scala.Tuple18", ({
  a3: 1,
  b: 1,
  c: 1,
  bs: 1,
  a: 1
}));
/** @constructor */
function $c_T19(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19) {
  this.f5 = null;
  this.d5 = null;
  this.d6 = null;
  this.d7 = null;
  this.d8 = null;
  this.d9 = null;
  this.da = null;
  this.db = null;
  this.dc = null;
  this.cV = null;
  this.cW = null;
  this.cX = null;
  this.cY = null;
  this.cZ = null;
  this.d0 = null;
  this.d1 = null;
  this.d2 = null;
  this.d3 = null;
  this.d4 = null;
  this.f5 = _1;
  this.d5 = _2;
  this.d6 = _3;
  this.d7 = _4;
  this.d8 = _5;
  this.d9 = _6;
  this.da = _7;
  this.db = _8;
  this.dc = _9;
  this.cV = _10;
  this.cW = _11;
  this.cX = _12;
  this.cY = _13;
  this.cZ = _14;
  this.d0 = _15;
  this.d1 = _16;
  this.d2 = _17;
  this.d3 = _18;
  this.d4 = _19;
}
$p = $c_T19.prototype = new $h_O();
$p.constructor = $c_T19;
/** @constructor */
function $h_T19() {
}
$h_T19.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 19;
});
$p.k = (function(n) {
  return $f_s_Product19__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().D(this, (-1955940499), true);
});
$p.n = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T19) && (((((((((((((((((($m_sr_BoxesRunTime$().b(this.f5, x$0.f5) && $m_sr_BoxesRunTime$().b(this.d5, x$0.d5)) && $m_sr_BoxesRunTime$().b(this.d6, x$0.d6)) && $m_sr_BoxesRunTime$().b(this.d7, x$0.d7)) && $m_sr_BoxesRunTime$().b(this.d8, x$0.d8)) && $m_sr_BoxesRunTime$().b(this.d9, x$0.d9)) && $m_sr_BoxesRunTime$().b(this.da, x$0.da)) && $m_sr_BoxesRunTime$().b(this.db, x$0.db)) && $m_sr_BoxesRunTime$().b(this.dc, x$0.dc)) && $m_sr_BoxesRunTime$().b(this.cV, x$0.cV)) && $m_sr_BoxesRunTime$().b(this.cW, x$0.cW)) && $m_sr_BoxesRunTime$().b(this.cX, x$0.cX)) && $m_sr_BoxesRunTime$().b(this.cY, x$0.cY)) && $m_sr_BoxesRunTime$().b(this.cZ, x$0.cZ)) && $m_sr_BoxesRunTime$().b(this.d0, x$0.d0)) && $m_sr_BoxesRunTime$().b(this.d1, x$0.d1)) && $m_sr_BoxesRunTime$().b(this.d2, x$0.d2)) && $m_sr_BoxesRunTime$().b(this.d3, x$0.d3)) && $m_sr_BoxesRunTime$().b(this.d4, x$0.d4))));
});
$p.x = (function() {
  return "Tuple19";
});
$p.l = (function() {
  return (((((((((((((((((((((((((((((((((((((("(" + this.f5) + ",") + this.d5) + ",") + this.d6) + ",") + this.d7) + ",") + this.d8) + ",") + this.d9) + ",") + this.da) + ",") + this.db) + ",") + this.dc) + ",") + this.cV) + ",") + this.cW) + ",") + this.cX) + ",") + this.cY) + ",") + this.cZ) + ",") + this.d0) + ",") + this.d1) + ",") + this.d2) + ",") + this.d3) + ",") + this.d4) + ")");
});
function $isArrayOf_T19(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a4)));
}
var $d_T19 = new $TypeData().i($c_T19, "scala.Tuple19", ({
  a4: 1,
  b: 1,
  c: 1,
  bt: 1,
  a: 1
}));
/** @constructor */
function $c_T2(_1, _2) {
  this.af = null;
  this.a8 = null;
  this.af = _1;
  this.a8 = _2;
}
$p = $c_T2.prototype = new $h_O();
$p.constructor = $c_T2;
/** @constructor */
function $h_T2() {
}
$h_T2.prototype = $p;
$p.s = (function() {
  return 2;
});
$p.k = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n);
});
$p.l = (function() {
  return (((("(" + this.af) + ",") + this.a8) + ")");
});
$p.x = (function() {
  return "Tuple2";
});
$p.A = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().D(this, (-116390334), true);
});
$p.n = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T2) && ($m_sr_BoxesRunTime$().b(this.af, x$1.af) && $m_sr_BoxesRunTime$().b(this.a8, x$1.a8))));
});
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a5)));
}
var $d_T2 = new $TypeData().i($c_T2, "scala.Tuple2", ({
  a5: 1,
  bu: 1,
  c: 1,
  b: 1,
  a: 1
}));
/** @constructor */
function $c_T20(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20) {
  this.f6 = null;
  this.dn = null;
  this.dq = null;
  this.dr = null;
  this.ds = null;
  this.dt = null;
  this.du = null;
  this.dv = null;
  this.dw = null;
  this.dd = null;
  this.de = null;
  this.df = null;
  this.dg = null;
  this.dh = null;
  this.di = null;
  this.dj = null;
  this.dk = null;
  this.dl = null;
  this.dm = null;
  this.dp = null;
  this.f6 = _1;
  this.dn = _2;
  this.dq = _3;
  this.dr = _4;
  this.ds = _5;
  this.dt = _6;
  this.du = _7;
  this.dv = _8;
  this.dw = _9;
  this.dd = _10;
  this.de = _11;
  this.df = _12;
  this.dg = _13;
  this.dh = _14;
  this.di = _15;
  this.dj = _16;
  this.dk = _17;
  this.dl = _18;
  this.dm = _19;
  this.dp = _20;
}
$p = $c_T20.prototype = new $h_O();
$p.constructor = $c_T20;
/** @constructor */
function $h_T20() {
}
$h_T20.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 20;
});
$p.k = (function(n) {
  return $f_s_Product20__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().D(this, 1328807075, true);
});
$p.n = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T20) && ((((((((((((((((((($m_sr_BoxesRunTime$().b(this.f6, x$0.f6) && $m_sr_BoxesRunTime$().b(this.dn, x$0.dn)) && $m_sr_BoxesRunTime$().b(this.dq, x$0.dq)) && $m_sr_BoxesRunTime$().b(this.dr, x$0.dr)) && $m_sr_BoxesRunTime$().b(this.ds, x$0.ds)) && $m_sr_BoxesRunTime$().b(this.dt, x$0.dt)) && $m_sr_BoxesRunTime$().b(this.du, x$0.du)) && $m_sr_BoxesRunTime$().b(this.dv, x$0.dv)) && $m_sr_BoxesRunTime$().b(this.dw, x$0.dw)) && $m_sr_BoxesRunTime$().b(this.dd, x$0.dd)) && $m_sr_BoxesRunTime$().b(this.de, x$0.de)) && $m_sr_BoxesRunTime$().b(this.df, x$0.df)) && $m_sr_BoxesRunTime$().b(this.dg, x$0.dg)) && $m_sr_BoxesRunTime$().b(this.dh, x$0.dh)) && $m_sr_BoxesRunTime$().b(this.di, x$0.di)) && $m_sr_BoxesRunTime$().b(this.dj, x$0.dj)) && $m_sr_BoxesRunTime$().b(this.dk, x$0.dk)) && $m_sr_BoxesRunTime$().b(this.dl, x$0.dl)) && $m_sr_BoxesRunTime$().b(this.dm, x$0.dm)) && $m_sr_BoxesRunTime$().b(this.dp, x$0.dp))));
});
$p.x = (function() {
  return "Tuple20";
});
$p.l = (function() {
  return (((((((((((((((((((((((((((((((((((((((("(" + this.f6) + ",") + this.dn) + ",") + this.dq) + ",") + this.dr) + ",") + this.ds) + ",") + this.dt) + ",") + this.du) + ",") + this.dv) + ",") + this.dw) + ",") + this.dd) + ",") + this.de) + ",") + this.df) + ",") + this.dg) + ",") + this.dh) + ",") + this.di) + ",") + this.dj) + ",") + this.dk) + ",") + this.dl) + ",") + this.dm) + ",") + this.dp) + ")");
});
function $isArrayOf_T20(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a6)));
}
var $d_T20 = new $TypeData().i($c_T20, "scala.Tuple20", ({
  a6: 1,
  b: 1,
  c: 1,
  bv: 1,
  a: 1
}));
/** @constructor */
function $c_T21(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21) {
  this.f7 = null;
  this.dH = null;
  this.dK = null;
  this.dL = null;
  this.dM = null;
  this.dN = null;
  this.dO = null;
  this.dP = null;
  this.dQ = null;
  this.dx = null;
  this.dy = null;
  this.dz = null;
  this.dA = null;
  this.dB = null;
  this.dC = null;
  this.dD = null;
  this.dE = null;
  this.dF = null;
  this.dG = null;
  this.dI = null;
  this.dJ = null;
  this.f7 = _1;
  this.dH = _2;
  this.dK = _3;
  this.dL = _4;
  this.dM = _5;
  this.dN = _6;
  this.dO = _7;
  this.dP = _8;
  this.dQ = _9;
  this.dx = _10;
  this.dy = _11;
  this.dz = _12;
  this.dA = _13;
  this.dB = _14;
  this.dC = _15;
  this.dD = _16;
  this.dE = _17;
  this.dF = _18;
  this.dG = _19;
  this.dI = _20;
  this.dJ = _21;
}
$p = $c_T21.prototype = new $h_O();
$p.constructor = $c_T21;
/** @constructor */
function $h_T21() {
}
$h_T21.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 21;
});
$p.k = (function(n) {
  return $f_s_Product21__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().D(this, (-21288119), true);
});
$p.n = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T21) && (((((((((((((((((((($m_sr_BoxesRunTime$().b(this.f7, x$0.f7) && $m_sr_BoxesRunTime$().b(this.dH, x$0.dH)) && $m_sr_BoxesRunTime$().b(this.dK, x$0.dK)) && $m_sr_BoxesRunTime$().b(this.dL, x$0.dL)) && $m_sr_BoxesRunTime$().b(this.dM, x$0.dM)) && $m_sr_BoxesRunTime$().b(this.dN, x$0.dN)) && $m_sr_BoxesRunTime$().b(this.dO, x$0.dO)) && $m_sr_BoxesRunTime$().b(this.dP, x$0.dP)) && $m_sr_BoxesRunTime$().b(this.dQ, x$0.dQ)) && $m_sr_BoxesRunTime$().b(this.dx, x$0.dx)) && $m_sr_BoxesRunTime$().b(this.dy, x$0.dy)) && $m_sr_BoxesRunTime$().b(this.dz, x$0.dz)) && $m_sr_BoxesRunTime$().b(this.dA, x$0.dA)) && $m_sr_BoxesRunTime$().b(this.dB, x$0.dB)) && $m_sr_BoxesRunTime$().b(this.dC, x$0.dC)) && $m_sr_BoxesRunTime$().b(this.dD, x$0.dD)) && $m_sr_BoxesRunTime$().b(this.dE, x$0.dE)) && $m_sr_BoxesRunTime$().b(this.dF, x$0.dF)) && $m_sr_BoxesRunTime$().b(this.dG, x$0.dG)) && $m_sr_BoxesRunTime$().b(this.dI, x$0.dI)) && $m_sr_BoxesRunTime$().b(this.dJ, x$0.dJ))));
});
$p.x = (function() {
  return "Tuple21";
});
$p.l = (function() {
  return (((((((((((((((((((((((((((((((((((((((((("(" + this.f7) + ",") + this.dH) + ",") + this.dK) + ",") + this.dL) + ",") + this.dM) + ",") + this.dN) + ",") + this.dO) + ",") + this.dP) + ",") + this.dQ) + ",") + this.dx) + ",") + this.dy) + ",") + this.dz) + ",") + this.dA) + ",") + this.dB) + ",") + this.dC) + ",") + this.dD) + ",") + this.dE) + ",") + this.dF) + ",") + this.dG) + ",") + this.dI) + ",") + this.dJ) + ")");
});
function $isArrayOf_T21(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a7)));
}
var $d_T21 = new $TypeData().i($c_T21, "scala.Tuple21", ({
  a7: 1,
  b: 1,
  c: 1,
  bw: 1,
  a: 1
}));
/** @constructor */
function $c_T22(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22) {
  this.f8 = null;
  this.e1 = null;
  this.e5 = null;
  this.e6 = null;
  this.e7 = null;
  this.e8 = null;
  this.e9 = null;
  this.ea = null;
  this.eb = null;
  this.dR = null;
  this.dS = null;
  this.dT = null;
  this.dU = null;
  this.dV = null;
  this.dW = null;
  this.dX = null;
  this.dY = null;
  this.dZ = null;
  this.e0 = null;
  this.e2 = null;
  this.e3 = null;
  this.e4 = null;
  this.f8 = _1;
  this.e1 = _2;
  this.e5 = _3;
  this.e6 = _4;
  this.e7 = _5;
  this.e8 = _6;
  this.e9 = _7;
  this.ea = _8;
  this.eb = _9;
  this.dR = _10;
  this.dS = _11;
  this.dT = _12;
  this.dU = _13;
  this.dV = _14;
  this.dW = _15;
  this.dX = _16;
  this.dY = _17;
  this.dZ = _18;
  this.e0 = _19;
  this.e2 = _20;
  this.e3 = _21;
  this.e4 = _22;
}
$p = $c_T22.prototype = new $h_O();
$p.constructor = $c_T22;
/** @constructor */
function $h_T22() {
}
$h_T22.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 22;
});
$p.k = (function(n) {
  return $f_s_Product22__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().D(this, (-139445068), true);
});
$p.n = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T22) && ((((((((((((((((((((($m_sr_BoxesRunTime$().b(this.f8, x$0.f8) && $m_sr_BoxesRunTime$().b(this.e1, x$0.e1)) && $m_sr_BoxesRunTime$().b(this.e5, x$0.e5)) && $m_sr_BoxesRunTime$().b(this.e6, x$0.e6)) && $m_sr_BoxesRunTime$().b(this.e7, x$0.e7)) && $m_sr_BoxesRunTime$().b(this.e8, x$0.e8)) && $m_sr_BoxesRunTime$().b(this.e9, x$0.e9)) && $m_sr_BoxesRunTime$().b(this.ea, x$0.ea)) && $m_sr_BoxesRunTime$().b(this.eb, x$0.eb)) && $m_sr_BoxesRunTime$().b(this.dR, x$0.dR)) && $m_sr_BoxesRunTime$().b(this.dS, x$0.dS)) && $m_sr_BoxesRunTime$().b(this.dT, x$0.dT)) && $m_sr_BoxesRunTime$().b(this.dU, x$0.dU)) && $m_sr_BoxesRunTime$().b(this.dV, x$0.dV)) && $m_sr_BoxesRunTime$().b(this.dW, x$0.dW)) && $m_sr_BoxesRunTime$().b(this.dX, x$0.dX)) && $m_sr_BoxesRunTime$().b(this.dY, x$0.dY)) && $m_sr_BoxesRunTime$().b(this.dZ, x$0.dZ)) && $m_sr_BoxesRunTime$().b(this.e0, x$0.e0)) && $m_sr_BoxesRunTime$().b(this.e2, x$0.e2)) && $m_sr_BoxesRunTime$().b(this.e3, x$0.e3)) && $m_sr_BoxesRunTime$().b(this.e4, x$0.e4))));
});
$p.x = (function() {
  return "Tuple22";
});
$p.l = (function() {
  return (((((((((((((((((((((((((((((((((((((((((((("(" + this.f8) + ",") + this.e1) + ",") + this.e5) + ",") + this.e6) + ",") + this.e7) + ",") + this.e8) + ",") + this.e9) + ",") + this.ea) + ",") + this.eb) + ",") + this.dR) + ",") + this.dS) + ",") + this.dT) + ",") + this.dU) + ",") + this.dV) + ",") + this.dW) + ",") + this.dX) + ",") + this.dY) + ",") + this.dZ) + ",") + this.e0) + ",") + this.e2) + ",") + this.e3) + ",") + this.e4) + ")");
});
function $isArrayOf_T22(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a8)));
}
var $d_T22 = new $TypeData().i($c_T22, "scala.Tuple22", ({
  a8: 1,
  b: 1,
  c: 1,
  bx: 1,
  a: 1
}));
/** @constructor */
function $c_T3(_1, _2, _3) {
  this.aI = null;
  this.az = null;
  this.aA = null;
  this.aI = _1;
  this.az = _2;
  this.aA = _3;
}
$p = $c_T3.prototype = new $h_O();
$p.constructor = $c_T3;
/** @constructor */
function $h_T3() {
}
$h_T3.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 3;
});
$p.k = (function(n) {
  return $f_s_Product3__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().D(this, (-192629203), true);
});
$p.n = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T3) && (($m_sr_BoxesRunTime$().b(this.aI, x$0.aI) && $m_sr_BoxesRunTime$().b(this.az, x$0.az)) && $m_sr_BoxesRunTime$().b(this.aA, x$0.aA))));
});
$p.x = (function() {
  return "Tuple3";
});
$p.l = (function() {
  return (((((("(" + this.aI) + ",") + this.az) + ",") + this.aA) + ")");
});
function $isArrayOf_T3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a9)));
}
var $d_T3 = new $TypeData().i($c_T3, "scala.Tuple3", ({
  a9: 1,
  b: 1,
  c: 1,
  by: 1,
  a: 1
}));
/** @constructor */
function $c_T4(_1, _2, _3, _4) {
  this.ec = null;
  this.aJ = null;
  this.aK = null;
  this.aL = null;
  this.ec = _1;
  this.aJ = _2;
  this.aK = _3;
  this.aL = _4;
}
$p = $c_T4.prototype = new $h_O();
$p.constructor = $c_T4;
/** @constructor */
function $h_T4() {
}
$h_T4.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 4;
});
$p.k = (function(n) {
  return $f_s_Product4__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().D(this, (-1542739752), true);
});
$p.n = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T4) && ((($m_sr_BoxesRunTime$().b(this.ec, x$0.ec) && $m_sr_BoxesRunTime$().b(this.aJ, x$0.aJ)) && $m_sr_BoxesRunTime$().b(this.aK, x$0.aK)) && $m_sr_BoxesRunTime$().b(this.aL, x$0.aL))));
});
$p.x = (function() {
  return "Tuple4";
});
$p.l = (function() {
  return (((((((("(" + this.ec) + ",") + this.aJ) + ",") + this.aK) + ",") + this.aL) + ")");
});
function $isArrayOf_T4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aa)));
}
var $d_T4 = new $TypeData().i($c_T4, "scala.Tuple4", ({
  aa: 1,
  b: 1,
  c: 1,
  bz: 1,
  a: 1
}));
/** @constructor */
function $c_T5(_1, _2, _3, _4, _5) {
  this.f9 = null;
  this.ed = null;
  this.ee = null;
  this.ef = null;
  this.eg = null;
  this.f9 = _1;
  this.ed = _2;
  this.ee = _3;
  this.ef = _4;
  this.eg = _5;
}
$p = $c_T5.prototype = new $h_O();
$p.constructor = $c_T5;
/** @constructor */
function $h_T5() {
}
$h_T5.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 5;
});
$p.k = (function(n) {
  return $f_s_Product5__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().D(this, 417360321, true);
});
$p.n = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T5) && (((($m_sr_BoxesRunTime$().b(this.f9, x$0.f9) && $m_sr_BoxesRunTime$().b(this.ed, x$0.ed)) && $m_sr_BoxesRunTime$().b(this.ee, x$0.ee)) && $m_sr_BoxesRunTime$().b(this.ef, x$0.ef)) && $m_sr_BoxesRunTime$().b(this.eg, x$0.eg))));
});
$p.x = (function() {
  return "Tuple5";
});
$p.l = (function() {
  return (((((((((("(" + this.f9) + ",") + this.ed) + ",") + this.ee) + ",") + this.ef) + ",") + this.eg) + ")");
});
function $isArrayOf_T5(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ab)));
}
var $d_T5 = new $TypeData().i($c_T5, "scala.Tuple5", ({
  ab: 1,
  b: 1,
  c: 1,
  bA: 1,
  a: 1
}));
/** @constructor */
function $c_T6(_1, _2, _3, _4, _5, _6) {
  this.fa = null;
  this.eh = null;
  this.ei = null;
  this.ej = null;
  this.ek = null;
  this.el = null;
  this.fa = _1;
  this.eh = _2;
  this.ei = _3;
  this.ej = _4;
  this.ek = _5;
  this.el = _6;
}
$p = $c_T6.prototype = new $h_O();
$p.constructor = $c_T6;
/** @constructor */
function $h_T6() {
}
$h_T6.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 6;
});
$p.k = (function(n) {
  return $f_s_Product6__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().D(this, (-1037607828), true);
});
$p.n = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T6) && ((((($m_sr_BoxesRunTime$().b(this.fa, x$0.fa) && $m_sr_BoxesRunTime$().b(this.eh, x$0.eh)) && $m_sr_BoxesRunTime$().b(this.ei, x$0.ei)) && $m_sr_BoxesRunTime$().b(this.ej, x$0.ej)) && $m_sr_BoxesRunTime$().b(this.ek, x$0.ek)) && $m_sr_BoxesRunTime$().b(this.el, x$0.el))));
});
$p.x = (function() {
  return "Tuple6";
});
$p.l = (function() {
  return (((((((((((("(" + this.fa) + ",") + this.eh) + ",") + this.ei) + ",") + this.ej) + ",") + this.ek) + ",") + this.el) + ")");
});
function $isArrayOf_T6(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ac)));
}
var $d_T6 = new $TypeData().i($c_T6, "scala.Tuple6", ({
  ac: 1,
  b: 1,
  c: 1,
  bB: 1,
  a: 1
}));
/** @constructor */
function $c_T7(_1, _2, _3, _4, _5, _6, _7) {
  this.fb = null;
  this.em = null;
  this.en = null;
  this.eo = null;
  this.ep = null;
  this.eq = null;
  this.er = null;
  this.fb = _1;
  this.em = _2;
  this.en = _3;
  this.eo = _4;
  this.ep = _5;
  this.eq = _6;
  this.er = _7;
}
$p = $c_T7.prototype = new $h_O();
$p.constructor = $c_T7;
/** @constructor */
function $h_T7() {
}
$h_T7.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 7;
});
$p.k = (function(n) {
  return $f_s_Product7__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().D(this, (-1050932777), true);
});
$p.n = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T7) && (((((($m_sr_BoxesRunTime$().b(this.fb, x$0.fb) && $m_sr_BoxesRunTime$().b(this.em, x$0.em)) && $m_sr_BoxesRunTime$().b(this.en, x$0.en)) && $m_sr_BoxesRunTime$().b(this.eo, x$0.eo)) && $m_sr_BoxesRunTime$().b(this.ep, x$0.ep)) && $m_sr_BoxesRunTime$().b(this.eq, x$0.eq)) && $m_sr_BoxesRunTime$().b(this.er, x$0.er))));
});
$p.x = (function() {
  return "Tuple7";
});
$p.l = (function() {
  return (((((((((((((("(" + this.fb) + ",") + this.em) + ",") + this.en) + ",") + this.eo) + ",") + this.ep) + ",") + this.eq) + ",") + this.er) + ")");
});
function $isArrayOf_T7(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ad)));
}
var $d_T7 = new $TypeData().i($c_T7, "scala.Tuple7", ({
  ad: 1,
  b: 1,
  c: 1,
  bC: 1,
  a: 1
}));
/** @constructor */
function $c_T8(_1, _2, _3, _4, _5, _6, _7, _8) {
  this.fc = null;
  this.es = null;
  this.et = null;
  this.eu = null;
  this.ev = null;
  this.ew = null;
  this.ex = null;
  this.ey = null;
  this.fc = _1;
  this.es = _2;
  this.et = _3;
  this.eu = _4;
  this.ev = _5;
  this.ew = _6;
  this.ex = _7;
  this.ey = _8;
}
$p = $c_T8.prototype = new $h_O();
$p.constructor = $c_T8;
/** @constructor */
function $h_T8() {
}
$h_T8.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 8;
});
$p.k = (function(n) {
  return $f_s_Product8__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().D(this, 1998822530, true);
});
$p.n = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T8) && ((((((($m_sr_BoxesRunTime$().b(this.fc, x$0.fc) && $m_sr_BoxesRunTime$().b(this.es, x$0.es)) && $m_sr_BoxesRunTime$().b(this.et, x$0.et)) && $m_sr_BoxesRunTime$().b(this.eu, x$0.eu)) && $m_sr_BoxesRunTime$().b(this.ev, x$0.ev)) && $m_sr_BoxesRunTime$().b(this.ew, x$0.ew)) && $m_sr_BoxesRunTime$().b(this.ex, x$0.ex)) && $m_sr_BoxesRunTime$().b(this.ey, x$0.ey))));
});
$p.x = (function() {
  return "Tuple8";
});
$p.l = (function() {
  return (((((((((((((((("(" + this.fc) + ",") + this.es) + ",") + this.et) + ",") + this.eu) + ",") + this.ev) + ",") + this.ew) + ",") + this.ex) + ",") + this.ey) + ")");
});
function $isArrayOf_T8(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ae)));
}
var $d_T8 = new $TypeData().i($c_T8, "scala.Tuple8", ({
  ae: 1,
  b: 1,
  c: 1,
  bD: 1,
  a: 1
}));
/** @constructor */
function $c_T9(_1, _2, _3, _4, _5, _6, _7, _8, _9) {
  this.fd = null;
  this.ez = null;
  this.eA = null;
  this.eB = null;
  this.eC = null;
  this.eD = null;
  this.eE = null;
  this.eF = null;
  this.eG = null;
  this.fd = _1;
  this.ez = _2;
  this.eA = _3;
  this.eB = _4;
  this.eC = _5;
  this.eD = _6;
  this.eE = _7;
  this.eF = _8;
  this.eG = _9;
}
$p = $c_T9.prototype = new $h_O();
$p.constructor = $c_T9;
/** @constructor */
function $h_T9() {
}
$h_T9.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 9;
});
$p.k = (function(n) {
  return $f_s_Product9__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().D(this, (-1807911176), true);
});
$p.n = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T9) && (((((((($m_sr_BoxesRunTime$().b(this.fd, x$0.fd) && $m_sr_BoxesRunTime$().b(this.ez, x$0.ez)) && $m_sr_BoxesRunTime$().b(this.eA, x$0.eA)) && $m_sr_BoxesRunTime$().b(this.eB, x$0.eB)) && $m_sr_BoxesRunTime$().b(this.eC, x$0.eC)) && $m_sr_BoxesRunTime$().b(this.eD, x$0.eD)) && $m_sr_BoxesRunTime$().b(this.eE, x$0.eE)) && $m_sr_BoxesRunTime$().b(this.eF, x$0.eF)) && $m_sr_BoxesRunTime$().b(this.eG, x$0.eG))));
});
$p.x = (function() {
  return "Tuple9";
});
$p.l = (function() {
  return (((((((((((((((((("(" + this.fd) + ",") + this.ez) + ",") + this.eA) + ",") + this.eB) + ",") + this.eC) + ",") + this.eD) + ",") + this.eE) + ",") + this.eF) + ",") + this.eG) + ")");
});
function $isArrayOf_T9(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.af)));
}
var $d_T9 = new $TypeData().i($c_T9, "scala.Tuple9", ({
  af: 1,
  b: 1,
  c: 1,
  bE: 1,
  a: 1
}));
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.gf() + "("), ", ", ")");
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
$p.C = (function() {
  return false;
});
$p.mq = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
});
$p.V = (function() {
  return 0;
});
$p.B = (function() {
  this.mq();
});
$p.ho = (function(from, until) {
  return this;
});
var $d_sc_Iterator$$anon$19 = new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  bO: 1,
  m: 1,
  d: 1,
  e: 1,
  n: 1
}));
function $p_sc_Iterator$ConcatIterator__merge$1__V($thiz) {
  while (true) {
    if (($thiz.X instanceof $c_sc_Iterator$ConcatIterator)) {
      var c = $thiz.X;
      $thiz.X = c.X;
      $thiz.aN = c.aN;
      if ((c.aa !== null)) {
        if (($thiz.a9 === null)) {
          $thiz.a9 = c.a9;
        }
        var x$proxy10 = c.a9;
        if ((x$proxy10 === null)) {
          $m_sr_Scala3RunTime$().hl();
        }
        x$proxy10.fF = $thiz.aa;
        $thiz.aa = c.aa;
      }
    } else {
      return (void 0);
    }
  }
}
function $p_sc_Iterator$ConcatIterator__advance$1__Z($thiz) {
  while (true) {
    if (($thiz.aa === null)) {
      $thiz.X = null;
      $thiz.a9 = null;
      return false;
    } else {
      $thiz.X = $thiz.aa.lT();
      if (($thiz.a9 === $thiz.aa)) {
        var x$proxy12 = $thiz.a9;
        if ((x$proxy12 === null)) {
          $m_sr_Scala3RunTime$().hl();
        }
        $thiz.a9 = x$proxy12.fF;
      }
      $thiz.aa = $thiz.aa.fF;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.aN) {
        return true;
      } else {
        if ((!(($thiz.X !== null) && $thiz.X.C()))) {
          continue;
        }
        $thiz.aN = true;
        return true;
      }
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIterator(from) {
  this.X = null;
  this.aa = null;
  this.a9 = null;
  this.aN = false;
  this.X = from;
  this.aa = null;
  this.a9 = null;
  this.aN = false;
}
$p = $c_sc_Iterator$ConcatIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$ConcatIterator;
/** @constructor */
function $h_sc_Iterator$ConcatIterator() {
}
$h_sc_Iterator$ConcatIterator.prototype = $p;
$p.C = (function() {
  if (this.aN) {
    return true;
  } else if ((this.X !== null)) {
    if (this.X.C()) {
      this.aN = true;
      return true;
    } else {
      return $p_sc_Iterator$ConcatIterator__advance$1__Z(this);
    }
  } else {
    return false;
  }
});
$p.B = (function() {
  if (this.C()) {
    this.aN = false;
    var x$proxy13 = this.X;
    if ((x$proxy13 === null)) {
      $m_sr_Scala3RunTime$().hl();
    }
    return x$proxy13.B();
  } else {
    return $m_sc_Iterator$().aC.B();
  }
});
$p.lo = (function(that) {
  var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
  if ((this.aa === null)) {
    this.aa = c;
    this.a9 = c;
  } else {
    var x$proxy14 = this.a9;
    if ((x$proxy14 === null)) {
      $m_sr_Scala3RunTime$().hl();
    }
    x$proxy14.fF = c;
    this.a9 = c;
  }
  if ((this.X === null)) {
    this.X = $m_sc_Iterator$().aC;
  }
  return this;
});
function $isArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ak)));
}
var $d_sc_Iterator$ConcatIterator = new $TypeData().i($c_sc_Iterator$ConcatIterator, "scala.collection.Iterator$ConcatIterator", ({
  ak: 1,
  m: 1,
  d: 1,
  e: 1,
  n: 1
}));
function $p_sc_Iterator$SliceIterator__skip__V($thiz) {
  while (($thiz.aD > 0)) {
    if ($thiz.aO.C()) {
      $thiz.aO.B();
      $thiz.aD = (($thiz.aD - 1) | 0);
    } else {
      $thiz.aD = 0;
    }
  }
}
function $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I($thiz, lo$1) {
  if (($thiz.a2 < 0)) {
    return (-1);
  } else {
    var that = (($thiz.a2 - lo$1) | 0);
    return ((that < 0) ? 0 : that);
  }
}
/** @constructor */
function $c_sc_Iterator$SliceIterator(underlying, start, limit) {
  this.aO = null;
  this.a2 = 0;
  this.aD = 0;
  this.aO = underlying;
  this.a2 = limit;
  this.aD = start;
}
$p = $c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$SliceIterator;
/** @constructor */
function $h_sc_Iterator$SliceIterator() {
}
$h_sc_Iterator$SliceIterator.prototype = $p;
$p.V = (function() {
  var size = this.aO.V();
  if ((size < 0)) {
    return (-1);
  } else {
    var that = ((size - this.aD) | 0);
    var dropSize = ((that < 0) ? 0 : that);
    if ((this.a2 < 0)) {
      return dropSize;
    } else {
      var x = this.a2;
      return ((x < dropSize) ? x : dropSize);
    }
  }
});
$p.C = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  return ((this.a2 !== 0) && this.aO.C());
});
$p.B = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.a2 > 0)) {
    this.a2 = ((this.a2 - 1) | 0);
    return this.aO.B();
  } else {
    return ((this.a2 < 0) ? this.aO.B() : $m_sc_Iterator$().aC.B());
  }
});
$p.ho = (function(from, until) {
  var lo = ((from > 0) ? from : 0);
  if ((until < 0)) {
    var rest = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
  } else if ((until <= lo)) {
    var rest = 0;
  } else if ((this.a2 < 0)) {
    var rest = ((until - lo) | 0);
  } else {
    var x = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
    var that = ((until - lo) | 0);
    var rest = ((x < that) ? x : that);
  }
  var sum = ((this.aD + lo) | 0);
  if ((rest === 0)) {
    return $m_sc_Iterator$().aC;
  } else if ((sum < 0)) {
    this.aD = 2147483647;
    this.a2 = 0;
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => new $c_sc_Iterator$SliceIterator(this.aO, ((sum - 2147483647) | 0), rest))));
  } else {
    this.aD = sum;
    this.a2 = rest;
    return this;
  }
});
var $d_sc_Iterator$SliceIterator = new $TypeData().i($c_sc_Iterator$SliceIterator, "scala.collection.Iterator$SliceIterator", ({
  bQ: 1,
  m: 1,
  d: 1,
  e: 1,
  n: 1
}));
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  var skipped = $thiz.lw(n);
  if (skipped.O()) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  return skipped.ir();
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
      if ((((!a$tailLocal1.O()) && (!b$tailLocal1.O())) && $m_sr_BoxesRunTime$().b(a$tailLocal1.ir(), b$tailLocal1.ir()))) {
        var a$tailLocal1$tmp1 = a$tailLocal1.iP();
        var b$tailLocal1$tmp1 = b$tailLocal1.iP();
        a$tailLocal1 = a$tailLocal1$tmp1;
        b$tailLocal1 = b$tailLocal1$tmp1;
        continue;
      }
      return (a$tailLocal1.O() && b$tailLocal1.O());
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
  c4: 1,
  a: 1,
  aj: 1,
  bS: 1,
  bW: 1
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
  this.j9 = null;
  this.fH = 0;
  this.j8 = 0;
  this.j9 = x$1;
  this.fH = 0;
  this.j8 = x$1.s();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.C = (function() {
  return (this.fH < this.j8);
});
$p.B = (function() {
  var result = this.j9.k(this.fH);
  this.fH = ((1 + this.fH) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().i($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  cE: 1,
  m: 1,
  d: 1,
  e: 1,
  n: 1
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.R)));
}
var $d_jl_Double = new $TypeData().i(0, "java.lang.Double", ({
  R: 1,
  l: 1,
  a: 1,
  h: 1,
  g: 1,
  w: 1
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
  aV: 1,
  l: 1,
  a: 1,
  h: 1,
  g: 1,
  w: 1
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
var $d_jl_Integer = new $TypeData().i(0, "java.lang.Integer", ({
  aY: 1,
  l: 1,
  a: 1,
  h: 1,
  g: 1,
  w: 1
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
  return $m_RTLong$().kP($thiz, $thizhi);
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.S)));
}
var $d_jl_Long = new $TypeData().i(0, "java.lang.Long", ({
  S: 1,
  l: 1,
  a: 1,
  h: 1,
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
function $f_T__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_T__indexOf__I__I($thiz, ch) {
  var str = $m_jl_Character$().mS(ch);
  return ($thiz.indexOf(str) | 0);
}
function $f_T__toString__T($thiz) {
  return $thiz;
}
var $d_T = new $TypeData().i(0, "java.lang.String", ({
  b1: 1,
  a: 1,
  h: 1,
  D: 1,
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
$p.ku = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.ke = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.gf = (function() {
  return this.eT();
});
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator(xs) {
  this.gC = null;
  this.aB = 0;
  this.fE = 0;
  this.gC = xs;
  this.aB = 0;
  this.fE = $m_jl_reflect_Array$().gi(this.gC);
}
$p = $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $p;
$p.V = (function() {
  return ((this.fE - this.aB) | 0);
});
$p.C = (function() {
  return (this.aB < this.fE);
});
$p.B = (function() {
  if ((this.aB >= $m_jl_reflect_Array$().gi(this.gC))) {
    $m_sc_Iterator$().aC.B();
  }
  var r = $m_sr_ScalaRunTime$().fy(this.gC, this.aB);
  this.aB = ((1 + this.aB) | 0);
  return r;
});
$p.hi = (function(n) {
  if ((n > 0)) {
    var newPos = ((this.aB + n) | 0);
    if ((newPos < 0)) {
      var $x_1 = this.fE;
    } else {
      var a = this.fE;
      var $x_1 = ((a < newPos) ? a : newPos);
    }
    this.aB = $x_1;
  }
  return this;
});
var $d_sc_ArrayOps$ArrayIterator = new $TypeData().i($c_sc_ArrayOps$ArrayIterator, "scala.collection.ArrayOps$ArrayIterator", ({
  bI: 1,
  m: 1,
  d: 1,
  e: 1,
  n: 1,
  a: 1
}));
function $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I($thiz, value) {
  return ((value < 0) ? 0 : ((value > $thiz.ag) ? $thiz.ag : value));
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator(self) {
  this.iX = null;
  this.aM = 0;
  this.ag = 0;
  this.iX = self;
  this.aM = 0;
  this.ag = self.E();
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $p;
$p.V = (function() {
  return this.ag;
});
$p.C = (function() {
  return (this.ag > 0);
});
$p.B = (function() {
  if ((this.ag > 0)) {
    var r = this.iX.S(this.aM);
    this.aM = ((1 + this.aM) | 0);
    this.ag = ((this.ag - 1) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().aC.B();
  }
});
$p.hi = (function(n) {
  if ((n > 0)) {
    this.aM = ((this.aM + n) | 0);
    var b = ((this.ag - n) | 0);
    this.ag = ((b < 0) ? 0 : b);
  }
  return this;
});
$p.ho = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.ag = ((b < 0) ? 0 : b);
  this.aM = ((this.aM + formatFrom) | 0);
  return this;
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  bM: 1,
  m: 1,
  d: 1,
  e: 1,
  n: 1,
  a: 1
}));
function $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($thiz) {
  if ((!$thiz.j0)) {
    $thiz.iZ = new $c_sci_ArraySeq$ofRef(new ($d_sr_Nothing$.r().C)(0));
    $thiz.j0 = true;
  }
  return $thiz.iZ;
}
/** @constructor */
function $c_sci_ArraySeq$() {
  this.iZ = null;
  this.j0 = false;
}
$p = $c_sci_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_sci_ArraySeq$;
/** @constructor */
function $h_sci_ArraySeq$() {
}
$h_sci_ArraySeq$.prototype = $p;
var $d_sci_ArraySeq$ = new $TypeData().i($c_sci_ArraySeq$, "scala.collection.immutable.ArraySeq$", ({
  c0: 1,
  a: 1,
  ai: 1,
  ag: 1,
  ah: 1,
  al: 1
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
  this.j1 = null;
  $n_scm_ArraySeq$ = this;
  this.j1 = new $c_scm_ArraySeq$ofRef(new $ac_O(0));
}
$p = $c_scm_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_scm_ArraySeq$;
/** @constructor */
function $h_scm_ArraySeq$() {
}
$h_scm_ArraySeq$.prototype = $p;
var $d_scm_ArraySeq$ = new $TypeData().i($c_scm_ArraySeq$, "scala.collection.mutable.ArraySeq$", ({
  c7: 1,
  a: 1,
  ai: 1,
  ag: 1,
  ah: 1,
  al: 1
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
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.r = (function() {
  return 924202651;
});
$p.s = (function() {
  return 0;
});
$p.x = (function() {
  return "EmptyTuple";
});
$p.k = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
});
$p.l = (function() {
  return "()";
});
var $d_T$package$EmptyTuple$ = new $TypeData().i($c_T$package$EmptyTuple$, "scala.Tuple$package$EmptyTuple$", ({
  bF: 1,
  b: 1,
  c: 1,
  a: 1,
  cd: 1,
  ce: 1,
  cf: 1
}));
var $n_T$package$EmptyTuple$;
function $m_T$package$EmptyTuple$() {
  if ((!$n_T$package$EmptyTuple$)) {
    $n_T$package$EmptyTuple$ = new $c_T$package$EmptyTuple$();
  }
  return $n_T$package$EmptyTuple$;
}
function $f_sc_View__toString__T($thiz) {
  return ($thiz.eT() + "(<not computed>)");
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
    this.aP = null;
    this.aP = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  hj() {
    return $dp_toString__T(this.aP);
  }
  x() {
    return "JavaScriptException";
  }
  s() {
    return 1;
  }
  k(x$1) {
    return ((x$1 === 0) ? this.aP : $m_sr_Statics$().m0(x$1));
  }
  A() {
    return new $c_sr_ScalaRunTime$$anon$1(this);
  }
  r() {
    return $m_s_util_hashing_MurmurHash3$().D(this, 1744042595, true);
  }
  n(x$1) {
    return ((this === x$1) || ((x$1 instanceof $c_sjs_js_JavaScriptException) && $m_sr_BoxesRunTime$().b(this.aP, x$1.aP)));
  }
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.az)));
}
var $d_sjs_js_JavaScriptException = new $TypeData().i($c_sjs_js_JavaScriptException, "scala.scalajs.js.JavaScriptException", ({
  az: 1,
  j: 1,
  i: 1,
  f: 1,
  a: 1,
  c: 1,
  b: 1
}));
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  var s$tailLocal1 = s;
  var n$tailLocal1 = n;
  while (true) {
    if (((n$tailLocal1 <= 0) || s$tailLocal1.O())) {
      return s$tailLocal1;
    } else {
      var n$tailLocal1$tmp1 = ((n$tailLocal1 - 1) | 0);
      var s$tailLocal1$tmp1 = s$tailLocal1.iP();
      n$tailLocal1 = n$tailLocal1$tmp1;
      s$tailLocal1 = s$tailLocal1$tmp1;
    }
  }
}
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.hr = null;
}
$p = $c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$p.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $p;
$p.l = (function() {
  return this.hr;
});
$p.n = (function(that) {
  return (this === that);
});
$p.r = (function() {
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
$p.l = (function() {
  return $f_sc_View__toString__T(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ObjectManifest$() {
  this.hr = null;
  this.hr = "Object";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ObjectManifest$, "scala.reflect.ManifestFactory$ObjectManifest$", ({
  cl: 1,
  cm: 1,
  ck: 1,
  a: 1,
  cn: 1,
  ch: 1,
  b: 1,
  ci: 1,
  cj: 1
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
      if (o.kl($thiz)) {
        return $thiz.iM(o);
      }
    }
    return false;
  }
}
function $is_sc_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.o)));
}
function $isArrayOf_sc_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.o)));
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
$p.O = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.iM = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.kl = (function(that) {
  return true;
});
$p.n = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().mH(this);
});
$p.l = (function() {
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
  return (!(!((obj && obj.$classData) && obj.$classData.n.q)));
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.q)));
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.E)));
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.E)));
}
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.fG = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.fG = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $p;
$p.S = (function(idx) {
  return this.fG.S(idx);
});
$p.E = (function() {
  return this.fG.E();
});
$p.O = (function() {
  return this.fG.O();
});
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.fG = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$p.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $p;
$p.fA = (function(len) {
  var x = this.E();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.V = (function() {
  return this.E();
});
$p.P = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this);
});
$p.eT = (function() {
  return "IndexedSeqView";
});
var $d_sc_IndexedSeqView$Id = new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  bL: 1,
  bU: 1,
  bG: 1,
  bH: 1,
  p: 1,
  d: 1,
  e: 1,
  t: 1,
  s: 1,
  r: 1,
  a: 1,
  bX: 1,
  u: 1,
  bT: 1,
  z: 1,
  bK: 1
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
  return ($is_sci_IndexedSeq(that) ? ($thiz.E() === that.E()) : true);
}
function $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z($thiz, o) {
  if ($is_sci_IndexedSeq(o)) {
    if (($thiz === o)) {
      return true;
    } else {
      var length = $thiz.E();
      var equal = (length === o.E());
      if (equal) {
        var index = 0;
        var a = $thiz.ki();
        var b = o.ki();
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
          equal = $m_sr_BoxesRunTime$().b($thiz.S(index), o.S(index));
          index = ((1 + index) | 0);
        }
        if (((index < length) && equal)) {
          var thisIt = $thiz.P().hi(index);
          var thatIt = o.P().hi(index);
          while ((equal && thisIt.C())) {
            equal = $m_sr_BoxesRunTime$().b(thisIt.B(), thatIt.B());
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
  return (!(!((obj && obj.$classData) && obj.$classData.n.F)));
}
function $isArrayOf_sci_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.F)));
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
function $isArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cR)));
}
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
$p.fA = (function(len) {
  var x = this.aE.a.length;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.V = (function() {
  return this.aE.a.length;
});
$p.eT = (function() {
  return "IndexedSeq";
});
$p.kl = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.iM = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.gf = (function() {
  return "ArraySeq";
});
$p.ki = (function() {
  return 2147483647;
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
$p.fA = (function(len) {
  var x = this.ah.a.length;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.V = (function() {
  return this.ah.a.length;
});
$p.eT = (function() {
  return "IndexedSeq";
});
$p.gf = (function() {
  return "ArraySeq";
});
$p.n = (function(other) {
  if ((other instanceof $c_scm_ArraySeq)) {
    if ((this.ah.a.length !== other.ah.a.length)) {
      return false;
    }
  }
  return $f_sc_Seq__equals__O__Z(this, other);
});
function $isArrayOf_scm_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.at)));
}
/** @constructor */
function $c_sci_ArraySeq$ofRef(unsafeArray) {
  this.aE = null;
  this.aE = unsafeArray;
}
$p = $c_sci_ArraySeq$ofRef.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofRef;
/** @constructor */
function $h_sci_ArraySeq$ofRef() {
}
$h_sci_ArraySeq$ofRef.prototype = $p;
$p.E = (function() {
  return this.aE.a.length;
});
$p.S = (function(i) {
  return this.aE.a[i];
});
$p.r = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.kj(this.aE, this$1.ff);
});
$p.n = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofRef) ? $m_s_Array$().ks(this.aE, that.aE) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.P = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.aE);
});
$p.H = (function(v1) {
  return this.S((v1 | 0));
});
function $isArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.an)));
}
var $d_sci_ArraySeq$ofRef = new $TypeData().i($c_sci_ArraySeq$ofRef, "scala.collection.immutable.ArraySeq$ofRef", ({
  an: 1,
  bZ: 1,
  am: 1,
  y: 1,
  p: 1,
  d: 1,
  e: 1,
  t: 1,
  s: 1,
  r: 1,
  k: 1,
  x: 1,
  u: 1,
  b: 1,
  o: 1,
  ao: 1,
  ar: 1,
  aq: 1,
  z: 1,
  q: 1,
  c1: 1,
  F: 1,
  B: 1,
  C: 1,
  as: 1,
  bJ: 1,
  a: 1
}));
function $p_sci_List__loop$2__I__I__sci_List__I($thiz, len$1, i, xs) {
  var xs$tailLocal1 = xs;
  var i$tailLocal1 = i;
  while (true) {
    if ((i$tailLocal1 === len$1)) {
      return ((!xs$tailLocal1.O()) | 0);
    } else {
      if ((!xs$tailLocal1.O())) {
        xs$tailLocal1.gA();
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
      var aEmpty = a$tailLocal1.O();
      var bEmpty = b$tailLocal1.O();
      if ((!(aEmpty || bEmpty))) {
        a$tailLocal1.hk();
      }
      if (false) {
        a$tailLocal1.gA();
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
$p.S = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.iM = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.eT = (function() {
  return "LinearSeq";
});
$p.O = (function() {
  return (this === $m_sci_Nil$());
});
$p.ku = (function(f) {
  var these = this;
  while ((!these.O())) {
    f.H(these.hk());
    these.gA();
  }
});
$p.E = (function() {
  var these = this;
  var len = 0;
  while ((!these.O())) {
    len = ((1 + len) | 0);
    these.gA();
  }
  return len;
});
$p.fA = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__I__sci_List__I(this, len, 0, this));
});
$p.gf = (function() {
  return "List";
});
$p.n = (function(o) {
  return ((o instanceof $c_sci_List) ? $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, o) : $f_sc_Seq__equals__O__Z(this, o));
});
$p.lw = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$p.H = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ap)));
}
/** @constructor */
function $c_scm_ArraySeq$ofRef(array) {
  this.ah = null;
  this.ah = array;
}
$p = $c_scm_ArraySeq$ofRef.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofRef;
/** @constructor */
function $h_scm_ArraySeq$ofRef() {
}
$h_scm_ArraySeq$ofRef.prototype = $p;
$p.E = (function() {
  return this.ah.a.length;
});
$p.S = (function(index) {
  return this.ah.a[index];
});
$p.r = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.kj(this.ah, this$1.ff);
});
$p.n = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofRef) ? $m_s_Array$().ks(this.ah, that.ah) : $c_scm_ArraySeq.prototype.n.call(this, that));
});
$p.P = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.ah);
});
$p.H = (function(v1) {
  return this.S((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.au)));
}
var $d_scm_ArraySeq$ofRef = new $TypeData().i($c_scm_ArraySeq$ofRef, "scala.collection.mutable.ArraySeq$ofRef", ({
  au: 1,
  at: 1,
  G: 1,
  y: 1,
  p: 1,
  d: 1,
  e: 1,
  t: 1,
  s: 1,
  r: 1,
  k: 1,
  x: 1,
  u: 1,
  b: 1,
  o: 1,
  K: 1,
  v: 1,
  H: 1,
  M: 1,
  L: 1,
  z: 1,
  q: 1,
  J: 1,
  I: 1,
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
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 0;
});
$p.x = (function() {
  return "Nil";
});
$p.k = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
});
$p.hk = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list");
});
$p.gA = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$p.V = (function() {
  return 0;
});
$p.P = (function() {
  return $m_sc_Iterator$().aC;
});
$p.ir = (function() {
  this.hk();
});
$p.iP = (function() {
  this.gA();
});
var $d_sci_Nil$ = new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  c5: 1,
  ap: 1,
  am: 1,
  y: 1,
  p: 1,
  d: 1,
  e: 1,
  t: 1,
  s: 1,
  r: 1,
  k: 1,
  x: 1,
  u: 1,
  b: 1,
  o: 1,
  ao: 1,
  ar: 1,
  aq: 1,
  bR: 1,
  E: 1,
  c3: 1,
  c2: 1,
  B: 1,
  C: 1,
  bV: 1,
  as: 1,
  a: 1,
  bY: 1,
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
  $thiz.am = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, new $c_jl_StringBuilder());
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.am = null;
}
$p = $c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
$h_scm_StringBuilder.prototype = $p;
$p.P = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.fA = (function(len) {
  var x = this.am.E();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.eT = (function() {
  return "IndexedSeq";
});
$p.E = (function() {
  return this.am.E();
});
$p.V = (function() {
  return this.am.E();
});
$p.l = (function() {
  return this.am.Q;
});
$p.O = (function() {
  return (this.am.E() === 0);
});
$p.S = (function(i) {
  return $bC(this.am.km(i));
});
$p.H = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.am.km(i));
});
var $d_scm_StringBuilder = new $TypeData().i($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  cc: 1,
  G: 1,
  y: 1,
  p: 1,
  d: 1,
  e: 1,
  t: 1,
  s: 1,
  r: 1,
  k: 1,
  x: 1,
  u: 1,
  b: 1,
  o: 1,
  K: 1,
  v: 1,
  H: 1,
  M: 1,
  L: 1,
  aw: 1,
  ax: 1,
  av: 1,
  ca: 1,
  z: 1,
  q: 1,
  J: 1,
  I: 1,
  D: 1,
  a: 1
}));
/** @constructor */
function $c_sjs_js_WrappedArray(array) {
  this.fe = null;
  this.fe = array;
}
$p = $c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
}
$h_sjs_js_WrappedArray.prototype = $p;
$p.eT = (function() {
  return "IndexedSeq";
});
$p.P = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.fA = (function(len) {
  var x = (this.fe.length | 0);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.S = (function(index) {
  return this.fe[index];
});
$p.E = (function() {
  return (this.fe.length | 0);
});
$p.V = (function() {
  return (this.fe.length | 0);
});
$p.gf = (function() {
  return "WrappedArray";
});
$p.H = (function(v1) {
  var index = (v1 | 0);
  return this.fe[index];
});
var $d_sjs_js_WrappedArray = new $TypeData().i($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
  cO: 1,
  c6: 1,
  G: 1,
  y: 1,
  p: 1,
  d: 1,
  e: 1,
  t: 1,
  s: 1,
  r: 1,
  k: 1,
  x: 1,
  u: 1,
  b: 1,
  o: 1,
  K: 1,
  v: 1,
  H: 1,
  M: 1,
  L: 1,
  aw: 1,
  ax: 1,
  cb: 1,
  c8: 1,
  C: 1,
  B: 1,
  I: 1,
  z: 1,
  q: 1,
  J: 1,
  c9: 1,
  av: 1,
  a: 1
}));
let $e_sketch = (function(arg) {
  $m_Lsketches_rooms_columns_Columns$package$().mF(arg);
});
export { $e_sketch as sketch };
