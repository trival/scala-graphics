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
  return (arg0.$classData.Z ? arg0.aa() : $objectClone(arg0));
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
        return null.gM();
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
        return instance.J();
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__hashCode__I(instance.l, instance.h);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I(instance.c);
      } else {
        return $c_O.prototype.J.call(instance);
      }
    }
  }
}
function $dp_indexOf__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__indexOf__I__I(instance, x0);
  } else {
    return instance.gN(x0);
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
$p.J = (function() {
  return $systemIdentityHashCode(this);
});
$p.m = (function() {
  var i = this.J();
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.toString = (function() {
  return this.m();
});
function $ac_O(arg) {
  if (((typeof arg) === "number")) {
    this.b = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.b[i] = null;
    }
  } else {
    this.b = arg;
  }
}
$p = $ac_O.prototype = new $h_O();
$p.constructor = $ac_O;
$p.ah = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.b, srcPos, dest.b, destPos, length);
});
$p.aa = (function() {
  return new $ac_O(this.b.slice());
});
function $ah_O() {
}
$ah_O.prototype = $p;
function $ac_Z(arg) {
  if (((typeof arg) === "number")) {
    this.b = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.b[i] = false;
    }
  } else {
    this.b = arg;
  }
}
$p = $ac_Z.prototype = new $h_O();
$p.constructor = $ac_Z;
$p.ah = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.b, srcPos, dest.b, destPos, length);
});
$p.aa = (function() {
  return new $ac_Z(this.b.slice());
});
function $ac_C(arg) {
  if (((typeof arg) === "number")) {
    this.b = new Uint16Array(arg);
  } else {
    this.b = arg;
  }
}
$p = $ac_C.prototype = new $h_O();
$p.constructor = $ac_C;
$p.ah = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aa = (function() {
  return new $ac_C(this.b.slice());
});
function $ac_B(arg) {
  if (((typeof arg) === "number")) {
    this.b = new Int8Array(arg);
  } else {
    this.b = arg;
  }
}
$p = $ac_B.prototype = new $h_O();
$p.constructor = $ac_B;
$p.ah = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aa = (function() {
  return new $ac_B(this.b.slice());
});
function $ac_S(arg) {
  if (((typeof arg) === "number")) {
    this.b = new Int16Array(arg);
  } else {
    this.b = arg;
  }
}
$p = $ac_S.prototype = new $h_O();
$p.constructor = $ac_S;
$p.ah = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aa = (function() {
  return new $ac_S(this.b.slice());
});
function $ac_I(arg) {
  if (((typeof arg) === "number")) {
    this.b = new Int32Array(arg);
  } else {
    this.b = arg;
  }
}
$p = $ac_I.prototype = new $h_O();
$p.constructor = $ac_I;
$p.ah = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aa = (function() {
  return new $ac_I(this.b.slice());
});
function $ac_J(arg) {
  if (((typeof arg) === "number")) {
    arg = (arg << 1);
    this.b = new Int32Array(arg);
  } else {
    this.b = arg;
  }
}
$p = $ac_J.prototype = new $h_O();
$p.constructor = $ac_J;
$p.ah = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray((srcPos << 1), (((srcPos + length) | 0) << 1)), (destPos << 1));
});
$p.aa = (function() {
  return new $ac_J(this.b.slice());
});
function $ac_F(arg) {
  if (((typeof arg) === "number")) {
    this.b = new Float32Array(arg);
  } else {
    this.b = arg;
  }
}
$p = $ac_F.prototype = new $h_O();
$p.constructor = $ac_F;
$p.ah = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aa = (function() {
  return new $ac_F(this.b.slice());
});
function $ac_D(arg) {
  if (((typeof arg) === "number")) {
    this.b = new Float64Array(arg);
  } else {
    this.b = arg;
  }
}
$p = $ac_D.prototype = new $h_O();
$p.constructor = $ac_D;
$p.ah = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aa = (function() {
  return new $ac_D(this.b.slice());
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
    D: 1,
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
    var u = result.b;
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
      this.b = new Array(arg);
      for (var i = 0; (i < arg); (i++)) {
        this.b[i] = null;
      }
    } else {
      this.b = arg;
    }
  }
  var $p = ArrayClass.prototype = new $ah_O();
  $p.constructor = ArrayClass;
  $p.ah = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.b, srcPos, dest.b, destPos, length);
  });
  $p.aa = (function() {
    return new ArrayClass(this.b.slice());
  });
  $p.$classData = this;
  var arrayBase = (componentData.B || componentData);
  var arrayDepth = (componentData.D + 1);
  var name = ("[" + componentData.E);
  this.C = ArrayClass;
  this.n = ({
    D: 1,
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
function $f_jl_Void__hashCode__I($thiz) {
  return 0;
}
function $f_jl_Void__toString__T($thiz) {
  return "undefined";
}
var $d_jl_Void = new $TypeData().i(0, "java.lang.Void", ({
  as: 1
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
$p.dk = (function(array) {
  return ((array instanceof $ac_O) ? array.b.length : ((array instanceof $ac_Z) ? array.b.length : ((array instanceof $ac_C) ? array.b.length : ((array instanceof $ac_B) ? array.b.length : ((array instanceof $ac_S) ? array.b.length : ((array instanceof $ac_I) ? array.b.length : ((array instanceof $ac_J) ? ((array.b.length >>> 1) | 0) : ((array instanceof $ac_F) ? array.b.length : ((array instanceof $ac_D) ? array.b.length : $p_jl_reflect_Array$__mismatch__O__E(this, array))))))))));
});
var $d_jl_reflect_Array$ = new $TypeData().i($c_jl_reflect_Array$, "java.lang.reflect.Array$", ({
  at: 1
}));
var $n_jl_reflect_Array$;
function $m_jl_reflect_Array$() {
  if ((!$n_jl_reflect_Array$)) {
    $n_jl_reflect_Array$ = new $c_jl_reflect_Array$();
  }
  return $n_jl_reflect_Array$;
}
function $s_RTLong__remainderUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().gg(alo, ahi, blo, bhi);
}
function $s_RTLong__remainder__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().gf(alo, ahi, blo, bhi);
}
function $s_RTLong__divideUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().fv(alo, ahi, blo, bhi);
}
function $s_RTLong__divide__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().fu(alo, ahi, blo, bhi);
}
function $s_RTLong__fromDoubleBits__D__O__J(value, fpBitsDataView) {
  fpBitsDataView.setFloat64(0, value, true);
  var lo = (fpBitsDataView.getInt32(0, true) | 0);
  var hi = (fpBitsDataView.getInt32(4, true) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__fromDouble__D__J(value) {
  return $m_RTLong$().eI(value);
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
  return $m_RTLong$().eV(lo, hi);
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
$p.eV = (function(lo, hi) {
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
$p.eI = (function(value) {
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
$p.fu = (function(alo, ahi, blo, bhi) {
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
    var $x_1 = this.cs(rlo, rhi, rlo$1, rhi$1, true);
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
$p.fv = (function(alo, ahi, blo, bhi) {
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
    return this.cs(alo, ahi, blo, bhi, true);
  }
});
$p.gf = (function(alo, ahi, blo, bhi) {
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
    var $x_1 = this.cs(rlo, rhi, rlo$1, rhi$1, false);
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
$p.gg = (function(alo, ahi, blo, bhi) {
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
    return this.cs(alo, ahi, blo, bhi, false);
  }
});
$p.cs = (function(alo, ahi, blo, bhi, askQuotient) {
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
  av: 1
}));
var $n_RTLong$;
function $m_RTLong$() {
  if ((!$n_RTLong$)) {
    $n_RTLong$ = new $c_RTLong$();
  }
  return $n_RTLong$;
}
function $f_sc_IterableOnceOps__foreach__F1__V($thiz, f) {
  var it = $thiz.X();
  while (it.N()) {
    f.g(it.C());
  }
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  return (($thiz.Y() === 0) ? (("" + start) + end) : $thiz.dg($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).aj.D);
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.aj;
  if ((start.length !== 0)) {
    jsb.D = (("" + jsb.D) + start);
  }
  var it = $thiz.X();
  if (it.N()) {
    var obj = it.C();
    jsb.D = (("" + jsb.D) + obj);
    while (it.N()) {
      if ((sep.length !== 0)) {
        jsb.D = (("" + jsb.D) + sep);
      }
      var obj$1 = it.C();
      jsb.D = (("" + jsb.D) + obj$1);
    }
  }
  if ((end.length !== 0)) {
    jsb.D = (("" + jsb.D) + end);
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
$p.b6 = (function(xs, idx) {
  if ((xs instanceof $ac_O)) {
    return xs.b[idx];
  }
  if ((xs instanceof $ac_I)) {
    return xs.b[idx];
  }
  if ((xs instanceof $ac_D)) {
    return xs.b[idx];
  }
  if ((xs instanceof $ac_J)) {
    var $x_1 = xs.b;
    var $x_2 = (idx << 1);
    return $bL($x_1[$x_2], $x_1[(($x_2 + 1) | 0)]);
  }
  if ((xs instanceof $ac_F)) {
    return xs.b[idx];
  }
  if ((xs instanceof $ac_C)) {
    return $bC(xs.b[idx]);
  }
  if ((xs instanceof $ac_B)) {
    return xs.b[idx];
  }
  if ((xs instanceof $ac_S)) {
    return xs.b[idx];
  }
  if ((xs instanceof $ac_Z)) {
    return xs.b[idx];
  }
  if ((xs === null)) {
    throw new $c_jl_NullPointerException();
  }
  throw new $c_s_MatchError(xs);
});
$p.fk = (function(x) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(x.b8(), (x.au() + "("), ",", ")");
});
$p.bJ = (function(xs) {
  if ((xs === null)) {
    return null;
  } else if ((xs.b.length === 0)) {
    var this$2 = $m_sci_ArraySeq$();
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    return $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef(this$2);
  } else {
    return new $c_sci_ArraySeq$ofRef(xs);
  }
});
var $d_sr_ScalaRunTime$ = new $TypeData().i($c_sr_ScalaRunTime$, "scala.runtime.ScalaRunTime$", ({
  bs: 1
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
$p.fW = (function(lv_$_lo, lv_$_hi) {
  return ((lv_$_hi === (lv_$_lo >> 31)) ? lv_$_lo : (lv_$_lo ^ lv_$_hi));
});
$p.fw = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var $x_1 = $m_RTLong$().eI(dv);
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
$p.B = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    return this.fw((+x));
  } else if ((x instanceof $Long)) {
    var $x_1 = $uJ(x);
    return this.fW($x_1.l, $x_1.h);
  } else {
    return $dp_hashCode__I(x);
  }
});
$p.fS = (function(n) {
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
var $d_sr_Statics$ = new $TypeData().i($c_sr_Statics$, "scala.runtime.Statics$", ({
  bu: 1
}));
var $n_sr_Statics$;
function $m_sr_Statics$() {
  if ((!$n_sr_Statics$)) {
    $n_sr_Statics$ = new $c_sr_Statics$();
  }
  return $n_sr_Statics$;
}
var $d_sjs_js_Any = new $TypeData().i(2, "scala.scalajs.js.Any", ({
  a2: 1
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
$p.f2 = (function(this$, that) {
  var b = [];
  var len = (this$.length | 0);
  var i = 0;
  var it = that.X();
  while (((i < len) && it.N())) {
    b.push(new $c_T2(this$[i], it.C()));
    i = ((1 + i) | 0);
  }
  return b;
});
$p.f3 = (function(this$) {
  var len = (this$.length | 0);
  var b = new Array(len);
  var i = 0;
  while ((i < len)) {
    b[i] = new $c_T2(this$[i], i);
    i = ((1 + i) | 0);
  }
  return b;
});
$p.ab = (function(this$, f) {
  var len = (this$.length | 0);
  var i = 0;
  while ((i < len)) {
    f.g(this$[i]);
    i = ((1 + i) | 0);
  }
});
var $d_sjs_js_ArrayOps$ = new $TypeData().i($c_sjs_js_ArrayOps$, "scala.scalajs.js.ArrayOps$", ({
  bw: 1
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
  bx: 1
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
  properties.aK(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((pair$2$2) => {
    result[pair$2$2.K] = pair$2$2.a2;
  })));
  return result;
});
var $d_sjs_js_special_package$ = new $TypeData().i($c_sjs_js_special_package$, "scala.scalajs.js.special.package$", ({
  bC: 1
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
$p.bI = (function(seq) {
  if ((seq instanceof $c_sjsr_WrappedVarArgs)) {
    return seq.bU;
  } else {
    var result = [];
    seq.aK(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2$2) => (result.push(x$2$2) | 0))));
    return result;
  }
});
var $d_sjsr_Compat$ = new $TypeData().i($c_sjsr_Compat$, "scala.scalajs.runtime.Compat$", ({
  bD: 1
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
$p.c = (function(array) {
  var len = array.b.length;
  var result = [];
  var i = 0;
  while ((i !== len)) {
    var x1 = i;
    result.push(array.b[x1]);
    i = ((1 + i) | 0);
  }
  return result;
});
var $d_sjsr_package$ = new $TypeData().i($c_sjsr_package$, "scala.scalajs.runtime.package$", ({
  bE: 1
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
$p.k = (function(hash, data) {
  var h = this.eK(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.eK = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.W = (function(hash, length) {
  return this.bH((hash ^ length));
});
$p.bH = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.bG = (function(x, seed, ignorePrefix) {
  var arr = x.as();
  if ((arr === 0)) {
    return ((!ignorePrefix) ? $f_T__hashCode__I(x.au()) : seed);
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.k(h, $f_T__hashCode__I(x.au()));
    }
    var i = 0;
    while ((i < arr)) {
      h = this.k(h, $m_sr_Statics$().B(x.at(i)));
      i = ((1 + i) | 0);
    }
    return this.W(h, arr);
  }
});
$p.gC = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.X();
  while (iterator.N()) {
    var x = iterator.C();
    var h = $m_sr_Statics$().B(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.k(h$2, a);
  h$2 = this.k(h$2, b);
  h$2 = this.eK(h$2, c);
  return this.W(h$2, n);
});
$p.g5 = (function(xs, seed) {
  var it = xs.X();
  var h = seed;
  if ((!it.N())) {
    return this.W(h, 0);
  }
  var x0 = it.C();
  if ((!it.N())) {
    return this.W(this.k(h, $m_sr_Statics$().B(x0)), 1);
  }
  var x1 = it.C();
  var initial = $m_sr_Statics$().B(x0);
  h = this.k(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().B(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.N()) {
    h = this.k(h, prev);
    var hash = $m_sr_Statics$().B(it.C());
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.k(h, hash);
      i = ((1 + i) | 0);
      while (it.N()) {
        h = this.k(h, $m_sr_Statics$().B(it.C()));
        i = ((1 + i) | 0);
      }
      return this.W(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.bH(this.k(this.k(h0, rangeDiff), prev));
});
$p.fo = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().dk(a);
  switch (l) {
    case 0: {
      return this.W(h, 0);
      break;
    }
    case 1: {
      return this.W(this.k(h, $m_sr_Statics$().B($m_sr_ScalaRunTime$().b6(a, 0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().B($m_sr_ScalaRunTime$().b6(a, 0));
      h = this.k(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().B($m_sr_ScalaRunTime$().b6(a, 1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.k(h, prev);
        var hash = $m_sr_Statics$().B($m_sr_ScalaRunTime$().b6(a, i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.k(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.k(h, $m_sr_Statics$().B($m_sr_ScalaRunTime$().b6(a, i)));
            i = ((1 + i) | 0);
          }
          return this.W(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bH(this.k(this.k(h0, rangeDiff), prev));
    }
  }
});
$p.eQ = (function(start, step, last, seed) {
  return this.bH(this.k(this.k(this.k(seed, start), step), last));
});
$p.fP = (function(a, seed) {
  var h = seed;
  var l = a.t();
  switch (l) {
    case 0: {
      return this.W(h, 0);
      break;
    }
    case 1: {
      return this.W(this.k(h, $m_sr_Statics$().B(a.I(0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().B(a.I(0));
      h = this.k(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().B(a.I(1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.k(h, prev);
        var hash = $m_sr_Statics$().B(a.I(i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.k(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.k(h, $m_sr_Statics$().B(a.I(i)));
            i = ((1 + i) | 0);
          }
          return this.W(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.bH(this.k(this.k(h0, rangeDiff), prev));
    }
  }
});
$p.fV = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.bE())) {
    elems.dl();
  }
  return ((rangeState === 2) ? this.eQ(initial, rangeDiff, prev, seed) : this.W(h, n));
});
/** @constructor */
function $c_Lsketches_strokes_tile\uff3fstrokes_Color(hue, lightness) {
  this.dL = 0.0;
  this.dM = 0.0;
  this.dL = hue;
  this.dM = lightness;
}
$p = $c_Lsketches_strokes_tile\uff3fstrokes_Color.prototype = new $h_O();
$p.constructor = $c_Lsketches_strokes_tile\uff3fstrokes_Color;
/** @constructor */
function $h_Lsketches_strokes_tile\uff3fstrokes_Color() {
}
$h_Lsketches_strokes_tile\uff3fstrokes_Color.prototype = $p;
var $d_Lsketches_strokes_tile\uff3fstrokes_Color = new $TypeData().i($c_Lsketches_strokes_tile\uff3fstrokes_Color, "sketches.strokes.tile_strokes.Color", ({
  bH: 1
}));
/** @constructor */
function $c_Lsketches_strokes_tile\uff3fstrokes_Painting(width, height, brushSize, tiles, palette) {
  this.bj = 0.0;
  this.bi = 0.0;
  this.cA = 0.0;
  this.aR = null;
  this.cB = null;
  this.bj = width;
  this.bi = height;
  this.cA = brushSize;
  this.aR = tiles;
  this.cB = palette;
}
$p = $c_Lsketches_strokes_tile\uff3fstrokes_Painting.prototype = new $h_O();
$p.constructor = $c_Lsketches_strokes_tile\uff3fstrokes_Painting;
/** @constructor */
function $h_Lsketches_strokes_tile\uff3fstrokes_Painting() {
}
$h_Lsketches_strokes_tile\uff3fstrokes_Painting.prototype = $p;
$p.ge = (function() {
  if (((this.cB.length | 0) > 1)) {
    var tile = $m_Ltrivalibs_utils_random_random$package$().bF(this.aR);
    tile.bV = $m_Ltrivalibs_utils_random_random$package$().bF(this.cB);
  }
});
var $d_Lsketches_strokes_tile\uff3fstrokes_Painting = new $TypeData().i($c_Lsketches_strokes_tile\uff3fstrokes_Painting, "sketches.strokes.tile_strokes.Painting", ({
  bI: 1
}));
function $p_Lsketches_strokes_tile\uff3fstrokes_Painting$package$__delta$1__D__D($thiz, step$1) {
  return ((0.29 * step$1) * ((2.0 * (0.5 * ($m_Ltrivalibs_utils_random_random$package$().Z() + $m_Ltrivalibs_utils_random_random$package$().Z()))) - 1.0));
}
/** @constructor */
function $c_Lsketches_strokes_tile\uff3fstrokes_Painting$package$() {
}
$p = $c_Lsketches_strokes_tile\uff3fstrokes_Painting$package$.prototype = new $h_O();
$p.constructor = $c_Lsketches_strokes_tile\uff3fstrokes_Painting$package$;
/** @constructor */
function $h_Lsketches_strokes_tile\uff3fstrokes_Painting$package$() {
}
$h_Lsketches_strokes_tile\uff3fstrokes_Painting$package$.prototype = $p;
$p.gd = (function(v) {
  var idx = $m_Ltrivalibs_utils_random_random$package$().dq((((v.length | 0) - 1) | 0));
  var res = [];
  if ((!(idx < 0))) {
    var i = 0;
    while (true) {
      var x0 = i;
      var a$proxy4 = (+v[x0]);
      res.push(a$proxy4);
      if ((i === idx)) {
        break;
      }
      i = ((1 + i) | 0);
    }
  }
  var p$proxy4 = (+v[idx]);
  var b$proxy2 = (+v[((1 + idx) | 0)]);
  var t$proxy1 = $m_Ltrivalibs_utils_random_random$package$().Z();
  var a$proxy5 = ((p$proxy4 * (1.0 - t$proxy1)) + (b$proxy2 * t$proxy1));
  res.push(a$proxy5);
  var x = ((1 + idx) | 0);
  var end = (v.length | 0);
  var isEmpty$1 = (x >= end);
  var scala$collection$immutable$Range$$lastElement = ((end - 1) | 0);
  if ((!isEmpty$1)) {
    var i$1 = x;
    while (true) {
      var x0$1 = i$1;
      var a$proxy6 = (+v[x0$1]);
      res.push(a$proxy6);
      if ((i$1 === scala$collection$immutable$Range$$lastElement)) {
        break;
      }
      i$1 = ((1 + i$1) | 0);
    }
  }
  return res;
});
$p.fq = (function(width, height, colorCount) {
  var elem = [0.0, 1.0];
  var elem$1 = null;
  elem$1 = elem;
  var end = ((colorCount - 1) | 0);
  var isEmpty = (end <= 0);
  var scala$collection$immutable$Range$$lastElement = ((end - 1) | 0);
  if ((!isEmpty)) {
    var i = 0;
    while (true) {
      elem$1 = $m_Lsketches_strokes_tile\uff3fstrokes_Painting$package$().gd(elem$1);
      if ((i === scala$collection$immutable$Range$$lastElement)) {
        break;
      }
      i = ((1 + i) | 0);
    }
  }
  elem$1.pop();
  var hueShift = $m_Ltrivalibs_utils_random_random$package$().Z();
  var array = elem$1;
  var len = (array.length | 0);
  var res = new Array(len);
  var i$1 = 0;
  while ((i$1 < len)) {
    var $x_1 = i$1;
    var x0$1 = array[i$1];
    var h$2 = (+x0$1);
    var hue = (h$2 + hueShift);
    res[$x_1] = new $c_Lsketches_strokes_tile\uff3fstrokes_Color((hue - (+Math.floor(hue))), ((0.4 * ($m_Ltrivalibs_utils_random_random$package$().Z() + $m_Ltrivalibs_utils_random_random$package$().Z())) + 0.1));
    i$1 = ((1 + i$1) | 0);
  }
  var brushSize = (height / 17.0);
  var elem$2 = [new $c_Lsketches_strokes_tile\uff3fstrokes_Tile(0.0, 0.0, width, height, $m_Ltrivalibs_utils_random_random$package$().bF(res))];
  var elem$3 = null;
  elem$3 = elem$2;
  var end$1 = ((1 + $m_Ltrivalibs_utils_random_random$package$().dq(4)) | 0);
  var isEmpty$1 = (end$1 <= 0);
  var scala$collection$immutable$Range$$lastElement$1 = ((end$1 - 1) | 0);
  if ((!isEmpty$1)) {
    var i$2 = 0;
    while (true) {
      var newTiles = [];
      var array$1 = elem$3;
      var len$1 = (array$1.length | 0);
      var i$3 = 0;
      while ((i$3 < len$1)) {
        var x0$3 = array$1[i$3];
        var maxSplits = ((2 + $m_Ltrivalibs_utils_random_random$package$().dq(3)) | 0);
        var minSize = (1.5 * brushSize);
        var f = ((res) => (() => $m_Ltrivalibs_utils_random_random$package$().bF(res)))(res);
        if (((x0$3.a4 <= minSize) || (x0$3.ak <= minSize))) {
          var array$2 = [x0$3];
        } else {
          var divideHorizontally = (((x0$3.a4 / x0$3.ak) + (0.5 * ((2.0 * $m_Ltrivalibs_utils_random_random$package$().Z()) - 1.0))) > 1.0);
          var tileLength = (divideHorizontally ? x0$3.a4 : x0$3.ak);
          var p$proxy2 = (tileLength / minSize);
          var other$proxy3 = $doubleToInt((+Math.floor(p$proxy2)));
          var tileCount = ((maxSplits < other$proxy3) ? maxSplits : other$proxy3);
          if ((tileCount < 2)) {
            var array$2 = [x0$3];
          } else {
            var splitRatios = [0.0];
            var isEmpty$2 = (tileCount <= 1);
            var scala$collection$immutable$Range$$lastElement$2 = ((tileCount - 1) | 0);
            if ((!isEmpty$2)) {
              var i$4 = 1;
              while (true) {
                var x0$4 = i$4;
                var p$proxy3 = $m_Ltrivalibs_utils_random_random$package$().Z();
                var a$proxy2 = (((0.5 * (0.5 * ((2.0 * p$proxy3) - 1.0))) + x0$4) / tileCount);
                splitRatios.push(a$proxy2);
                if ((i$4 === scala$collection$immutable$Range$$lastElement$2)) {
                  break;
                }
                i$4 = ((1 + i$4) | 0);
              }
            }
            splitRatios.push(1.0);
            var tiles = [];
            var end$2 = (((splitRatios.length | 0) - 1) | 0);
            var isEmpty$3 = (end$2 <= 0);
            var scala$collection$immutable$Range$$lastElement$3 = ((end$2 - 1) | 0);
            if ((!isEmpty$3)) {
              var i$5 = 0;
              while (true) {
                var x0$5 = i$5;
                var start = ((+splitRatios[x0$5]) * tileLength);
                var length = (((+splitRatios[((1 + x0$5) | 0)]) - (+splitRatios[x0$5])) * tileLength);
                var a$proxy3 = (divideHorizontally ? new $c_Lsketches_strokes_tile\uff3fstrokes_Tile(x0$3.aS, (start + x0$3.ad), length, x0$3.ak, f()) : new $c_Lsketches_strokes_tile\uff3fstrokes_Tile((start + x0$3.aS), x0$3.ad, x0$3.a4, length, f()));
                tiles.push(a$proxy3);
                if ((i$5 === scala$collection$immutable$Range$$lastElement$3)) {
                  break;
                }
                i$5 = ((1 + i$5) | 0);
              }
            }
            var array$2 = tiles;
          }
        }
        var len$2 = (array$2.length | 0);
        var i$6 = 0;
        while ((i$6 < len$2)) {
          var x0$6 = array$2[i$6];
          newTiles.push(x0$6);
          i$6 = ((1 + i$6) | 0);
        }
        i$3 = ((1 + i$3) | 0);
      }
      elem$3 = newTiles;
      if ((i$2 === scala$collection$immutable$Range$$lastElement$1)) {
        break;
      }
      i$2 = ((1 + i$2) | 0);
    }
  }
  return new $c_Lsketches_strokes_tile\uff3fstrokes_Painting(width, height, brushSize, elem$3, res);
});
$p.eE = (function(color) {
  var $x_1 = $m_Ltrivalibs_graphics_math_cpu_color$package$();
  var p$proxy5 = (color.dL + (0.1 * $m_Ltrivalibs_utils_random_random$package$().eP()));
  var x = (p$proxy5 - (+Math.floor(p$proxy5)));
  var p$proxy6 = (0.5 * ($m_Ltrivalibs_utils_random_random$package$().Z() + $m_Ltrivalibs_utils_random_random$package$().Z()));
  var y = (+Math.pow(p$proxy6, 1.5));
  var p$proxy7 = (color.dM + (0.4 * $m_Ltrivalibs_utils_random_random$package$().gb()));
  return $x_1.fO(new $c_Ltrivalibs_graphics_math_cpu_Vec3(x, y, ((p$proxy7 < 0.0) ? 0.0 : ((p$proxy7 > 1.0) ? 1.0 : p$proxy7))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $m_Ltrivalibs_graphics_math_cpu_Vec3$().fL());
});
$p.fJ = (function(tile, brushSize) {
  var p$proxy8 = (((2.6 * tile.ak) * $m_Ltrivalibs_utils_random_random$package$().eO(0.8, 1.2)) / brushSize);
  var p$proxy9 = (+Math.floor(p$proxy8));
  var steps = (+Math.max(p$proxy9, 4.0));
  var step = (tile.ak / steps);
  var pointWOffset = (0.09 * step);
  var p$proxy10 = ((2.64 * tile.a4) / (+Math.pow(brushSize, 1.4)));
  var widthJitter = (+Math.max(p$proxy10, 2.2));
  var elem = $m_Ltrivalibs_utils_random_random$package$().ga();
  var elem$1 = false;
  elem$1 = elem;
  var points = [];
  var a$proxy8 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(((elem$1 ? (tile.ad - pointWOffset) : ((tile.ad + tile.a4) + pointWOffset)) + ($p_Lsketches_strokes_tile\uff3fstrokes_Painting$package$__delta$1__D__D(this, step) * widthJitter)), ((tile.aS + (1.25 * step)) + $p_Lsketches_strokes_tile\uff3fstrokes_Painting$package$__delta$1__D__D(this, step)));
  points.push(a$proxy8);
  elem$1 = (!elem$1);
  var end = $doubleToInt(((2.0 * steps) - 1.0));
  var isEmpty = (end <= 1);
  var scala$collection$immutable$Range$$lastElement = ((end - 1) | 0);
  if ((!isEmpty)) {
    var i = 1;
    while (true) {
      var x0 = i;
      var a$proxy9 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(((elem$1 ? (tile.ad - pointWOffset) : ((tile.ad + tile.a4) + pointWOffset)) + ($p_Lsketches_strokes_tile\uff3fstrokes_Painting$package$__delta$1__D__D(this, step) * widthJitter)), (((tile.aS + (0.49 * (step * x0))) + (0.75 * step)) + $p_Lsketches_strokes_tile\uff3fstrokes_Painting$package$__delta$1__D__D(this, step)));
      points.push(a$proxy9);
      elem$1 = (!elem$1);
      if ((i === scala$collection$immutable$Range$$lastElement)) {
        break;
      }
      i = ((1 + i) | 0);
    }
  }
  var a$proxy10 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(((elem$1 ? (tile.ad - pointWOffset) : ((tile.ad + tile.a4) + pointWOffset)) + ($p_Lsketches_strokes_tile\uff3fstrokes_Painting$package$__delta$1__D__D(this, step) * widthJitter)), ((tile.aS + (step * (steps - 1.0))) + $p_Lsketches_strokes_tile\uff3fstrokes_Painting$package$__delta$1__D__D(this, step)));
  points.push(a$proxy10);
  return new $c_T2(points, elem$1);
});
$p.fX = (function(width, brushSize, p1, p2, reverse) {
  var p$proxy12 = ((2.0 * width) / brushSize);
  var normalScale = ((brushSize / 12.0) * (+Math.min(p$proxy12, 15.0)));
  var line = $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().h(), p2, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), p1);
  var p$proxy13 = ($f_Ltrivalibs_graphics_math_Vec2Base__length__O__D($m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), line) / 35.0);
  var p$proxy14 = $doubleToInt((+Math.floor(p$proxy13)));
  var steps = ((p$proxy14 > 8) ? p$proxy14 : 8);
  var normal = $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec2Base__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().h(), (reverse ? new $c_Ltrivalibs_graphics_math_cpu_Vec2((-line.s), line.r) : new $c_Ltrivalibs_graphics_math_cpu_Vec2(line.s, (-line.r))), $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$());
  var mid = $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().h(), p1, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec2Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().h(), line, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), 0.5));
  var c1 = $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().h(), mid, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec2Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().h(), normal, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), (($m_Ltrivalibs_utils_random_random$package$().Z() - 0.6) * normalScale)));
  var c2 = $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().h(), mid, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec2Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().h(), normal, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), (($m_Ltrivalibs_utils_random_random$package$().Z() - 0.6) * normalScale)));
  var points = [];
  if ((!(steps < 0))) {
    var i = 0;
    while (true) {
      var x0 = i;
      var a$proxy11 = $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__cubicBezier__D__O__O__O__O__Ltrivalibs_graphics_math_Vec2Base__O($m_Ltrivalibs_graphics_math_cpu_Vec2$(), (x0 / steps), p1, c1, c2, p2, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$());
      points.push(a$proxy11);
      if ((i === steps)) {
        break;
      }
      i = ((1 + i) | 0);
    }
  }
  return points;
});
$p.dv = (function(painting, tile) {
  var p$proxy15 = (2.0 * tile.ak);
  var other$proxy4 = ((+Math.pow(p$proxy15, 0.8)) / 5.0);
  var a = painting.cA;
  var p$proxy16 = (+Math.max(a, other$proxy4));
  var other$proxy5 = (3.0 * painting.cA);
  var brushSize = (+Math.min(p$proxy16, other$proxy5));
  var edges = $m_Lsketches_strokes_tile\uff3fstrokes_Painting$package$().fJ(tile, brushSize);
  var points = edges.K;
  var elem = (!(!edges.a2));
  var elem$1 = false;
  elem$1 = elem;
  var segments = [];
  var end = (((points.length | 0) - 1) | 0);
  var isEmpty = (end <= 0);
  var scala$collection$immutable$Range$$lastElement = ((end - 1) | 0);
  if ((!isEmpty)) {
    var i = 0;
    while (true) {
      var x0 = i;
      var a$proxy12 = $m_Lsketches_strokes_tile\uff3fstrokes_Painting$package$().fX(tile.a4, brushSize, points[x0], points[((1 + x0) | 0)], elem$1);
      segments.push(a$proxy12);
      elem$1 = (!elem$1);
      if ((i === scala$collection$immutable$Range$$lastElement)) {
        break;
      }
      i = ((1 + i) | 0);
    }
  }
  return new $c_Lsketches_strokes_tile\uff3fstrokes_TileStroke(segments, brushSize, $m_Lsketches_strokes_tile\uff3fstrokes_Painting$package$().eE(tile.bV));
});
$p.fG = (function(painting) {
  var result = [];
  var array = $m_Ltrivalibs_utils_random_random$package$().dt(painting.aR);
  var len = (array.length | 0);
  var i = 0;
  while ((i < len)) {
    var x0 = array[i];
    var a$proxy13 = $m_Lsketches_strokes_tile\uff3fstrokes_Painting$package$().dv(painting, x0);
    result.push(a$proxy13);
    i = ((1 + i) | 0);
  }
  return result;
});
var $d_Lsketches_strokes_tile\uff3fstrokes_Painting$package$ = new $TypeData().i($c_Lsketches_strokes_tile\uff3fstrokes_Painting$package$, "sketches.strokes.tile_strokes.Painting$package$", ({
  bJ: 1
}));
var $n_Lsketches_strokes_tile\uff3fstrokes_Painting$package$;
function $m_Lsketches_strokes_tile\uff3fstrokes_Painting$package$() {
  if ((!$n_Lsketches_strokes_tile\uff3fstrokes_Painting$package$)) {
    $n_Lsketches_strokes_tile\uff3fstrokes_Painting$package$ = new $c_Lsketches_strokes_tile\uff3fstrokes_Painting$package$();
  }
  return $n_Lsketches_strokes_tile\uff3fstrokes_Painting$package$;
}
/** @constructor */
function $c_Lsketches_strokes_tile\uff3fstrokes_Tile(top, left, width, height, color) {
  this.aS = 0.0;
  this.ad = 0.0;
  this.a4 = 0.0;
  this.ak = 0.0;
  this.bV = null;
  this.aS = top;
  this.ad = left;
  this.a4 = width;
  this.ak = height;
  this.bV = color;
}
$p = $c_Lsketches_strokes_tile\uff3fstrokes_Tile.prototype = new $h_O();
$p.constructor = $c_Lsketches_strokes_tile\uff3fstrokes_Tile;
/** @constructor */
function $h_Lsketches_strokes_tile\uff3fstrokes_Tile() {
}
$h_Lsketches_strokes_tile\uff3fstrokes_Tile.prototype = $p;
var $d_Lsketches_strokes_tile\uff3fstrokes_Tile = new $TypeData().i($c_Lsketches_strokes_tile\uff3fstrokes_Tile, "sketches.strokes.tile_strokes.Tile", ({
  bK: 1
}));
/** @constructor */
function $c_Lsketches_strokes_tile\uff3fstrokes_TileStroke(segments, brushSize, color) {
  this.bk = null;
  this.cC = 0.0;
  this.dN = null;
  this.bW = null;
  this.bX = 0.0;
  this.bk = segments;
  this.cC = brushSize;
  this.dN = color;
  var lengths = [];
  var len = (segments.length | 0);
  var i = 0;
  while ((i < len)) {
    var x0 = segments[i];
    var elem = 0.0;
    elem = 0.0;
    var end = (((x0.length | 0) - 1) | 0);
    var isEmpty = (end <= 0);
    var scala$collection$immutable$Range$$lastElement = ((end - 1) | 0);
    if ((!isEmpty)) {
      var i$1 = 0;
      while (true) {
        var x0$1 = i$1;
        elem = (elem + $f_Ltrivalibs_graphics_math_Vec2Base__distance__O__O__D($m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), x0[x0$1], x0[((1 + x0$1) | 0)]));
        if ((i$1 === scala$collection$immutable$Range$$lastElement)) {
          break;
        }
        i$1 = ((1 + i$1) | 0);
      }
    }
    var a$proxy1 = elem;
    lengths.push(a$proxy1);
    i = ((1 + i) | 0);
  }
  this.bW = lengths;
  var elem$1 = 0.0;
  elem$1 = 0.0;
  var array = this.bW;
  var len$1 = (array.length | 0);
  var i$2 = 0;
  while ((i$2 < len$1)) {
    var x0$2 = array[i$2];
    var l = (+x0$2);
    elem$1 = (elem$1 + l);
    i$2 = ((1 + i$2) | 0);
  }
  this.bX = elem$1;
}
$p = $c_Lsketches_strokes_tile\uff3fstrokes_TileStroke.prototype = new $h_O();
$p.constructor = $c_Lsketches_strokes_tile\uff3fstrokes_TileStroke;
/** @constructor */
function $h_Lsketches_strokes_tile\uff3fstrokes_TileStroke() {
}
$h_Lsketches_strokes_tile\uff3fstrokes_TileStroke.prototype = $p;
$p.fU = (function(segIdx, ptIdx, frac) {
  var lines = [];
  var other$proxy1 = (((this.bk.length | 0) - 1) | 0);
  var lastSeg = ((segIdx < other$proxy1) ? segIdx : other$proxy1);
  var partial = (segIdx <= lastSeg);
  var elem = 0.0;
  elem = 0.0;
  if ((!(lastSeg < 0))) {
    var i = 0;
    while (true) {
      var x0 = i;
      var pts = this.bk[x0];
      var line = new $c_Ltrivalibs_graphics_geometry_Line(this.cC, elem, (void 0));
      if (((x0 === lastSeg) && partial)) {
        var other$proxy2 = (((pts.length | 0) - 1) | 0);
        var upTo = ((ptIdx < other$proxy2) ? ptIdx : other$proxy2);
        if ((!(upTo < 0))) {
          var i$1 = 0;
          while (true) {
            var x0$1 = i$1;
            line.df(pts[x0$1]);
            if ((i$1 === upTo)) {
              break;
            }
            i$1 = ((1 + i$1) | 0);
          }
        }
        if (((frac > 0.0) && (((1 + upTo) | 0) < (pts.length | 0)))) {
          line.df($f_Ltrivalibs_graphics_math_Vec2ImmutableOps__mixScalar__O__Ltrivalibs_graphics_math_Vec2Base__O__D__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().h(), pts[upTo], $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), pts[((1 + upTo) | 0)], frac));
        }
      } else {
        var len = (pts.length | 0);
        var i$2 = 0;
        while ((i$2 < len)) {
          line.df(pts[i$2]);
          i$2 = ((1 + i$2) | 0);
        }
      }
      line.cE = this.bW[x0];
      elem = (elem + (+this.bW[x0]));
      if ((line.dx() >= 2)) {
        lines.push(line);
      }
      if ((i === lastSeg)) {
        break;
      }
      i = ((1 + i) | 0);
    }
  }
  return lines;
});
var $d_Lsketches_strokes_tile\uff3fstrokes_TileStroke = new $TypeData().i($c_Lsketches_strokes_tile\uff3fstrokes_TileStroke, "sketches.strokes.tile_strokes.TileStroke", ({
  bL: 1
}));
function $p_Lsketches_strokes_tile\uff3fstrokes_TileStrokesSketch$package$__drawStroke$1__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_painter_Form__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Panel__Lsketches_strokes_tile\uff3fstrokes_TileStroke__I__I__D__V($thiz, brushTip$1, form$1, p$1, strokePanel$1, stroke, segIdx, ptIdx, frac) {
  var lines = stroke.fU(segIdx, ptIdx, frac);
  if (((lines.length | 0) === 0)) {
    var tip = 0.0;
  } else {
    var last = lines[(((lines.length | 0) - 1) | 0)];
    var tip = ((last.aA + last.aX) / stroke.bX);
  }
  var value$proxy10 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(tip, (stroke.cC / stroke.bX));
  brushTip$1.aU.b9(brushTip$1.a0, value$proxy10);
  var $x_2 = brushTip$1.aT.queue;
  var $x_1 = brushTip$1.az;
  var s$proxy4 = brushTip$1.a0;
  $x_2.writeBuffer($x_1, 0.0, s$proxy4.dv.buffer);
  var geometries$1 = $m_Ltrivalibs_graphics_geometry_Line$().gw(lines, 0, 0.05, 3.0, stroke.bX, 0);
  form$1.ds((void 0), (void 0), geometries$1, (void 0), (void 0), (void 0));
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$1, strokePanel$1);
}
function $p_Lsketches_strokes_tile\uff3fstrokes_TileStrokesSketch$package$__mergeStroke$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Panel__V($thiz, p$2, canvasPanel$1) {
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$2, canvasPanel$1);
}
function $p_Lsketches_strokes_tile\uff3fstrokes_TileStrokesSketch$package$__clearStroke$1__Ltrivalibs_graphics_painter_Form__sjs_js_Array__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Panel__V($thiz, form$2, NoGeometry$1, p$3, strokePanel$2) {
  form$2.ds((void 0), (void 0), NoGeometry$1, (void 0), (void 0), (void 0));
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$3, strokePanel$2);
}
function $p_Lsketches_strokes_tile\uff3fstrokes_TileStrokesSketch$package$__useStroke$1__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Lsketches_strokes_tile\uff3fstrokes_TileStroke__V($thiz, color$1, randOffset$1, stroke) {
  color$1.aU.b9(color$1.a0, stroke.dN);
  var $x_2 = color$1.aT.queue;
  var $x_1 = color$1.az;
  var s$proxy5 = color$1.a0;
  $x_2.writeBuffer($x_1, 0.0, s$proxy5.dv.buffer);
  var value$proxy11 = $m_Ltrivalibs_utils_random_random$package$().gc();
  randOffset$1.aU.b9(randOffset$1.a0, value$proxy11);
  var $x_4 = randOffset$1.aT.queue;
  var $x_3 = randOffset$1.az;
  var s$proxy6 = randOffset$1.a0;
  $x_4.writeBuffer($x_3, 0.0, s$proxy6.dv.buffer);
}
function $p_Lsketches_strokes_tile\uff3fstrokes_TileStrokesSketch$package$__startTile$1__sr_IntRef__sr_ObjectRef__Lsketches_strokes_tile\uff3fstrokes_Painting__sr_ObjectRef__sr_IntRef__sr_IntRef__sr_DoubleRef__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__V($thiz, next$1, order$1, painting$2, stroke$1, segIdx$1, ptIdx$1, advance$1, color$3, randOffset$3) {
  if ((next$1.j >= (order$1.L.length | 0))) {
    order$1.L = $m_Ltrivalibs_utils_random_random$package$().dt(painting$2.aR);
    next$1.j = 0;
  }
  stroke$1.L = $m_Lsketches_strokes_tile\uff3fstrokes_Painting$package$().dv(painting$2, order$1.L[next$1.j]);
  next$1.j = ((1 + next$1.j) | 0);
  segIdx$1.j = 0;
  ptIdx$1.j = 0;
  advance$1.E = 0.0;
  $p_Lsketches_strokes_tile\uff3fstrokes_TileStrokesSketch$package$__useStroke$1__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Lsketches_strokes_tile\uff3fstrokes_TileStroke__V($thiz, color$3, randOffset$3, stroke$1.L);
}
function $p_Lsketches_strokes_tile\uff3fstrokes_TileStrokesSketch$package$__stepBrush$1__sr_IntRef__sr_ObjectRef__sr_IntRef__Z($thiz, ptIdx$2, stroke$2, segIdx$2) {
  ptIdx$2.j = ((1 + ptIdx$2.j) | 0);
  if ((ptIdx$2.j >= (stroke$2.L.bk[segIdx$2.j].length | 0))) {
    segIdx$2.j = ((1 + segIdx$2.j) | 0);
    ptIdx$2.j = 0;
  }
  return (segIdx$2.j >= (stroke$2.L.bk.length | 0));
}
/** @constructor */
function $c_Lsketches_strokes_tile\uff3fstrokes_TileStrokesSketch$package$() {
  this.f7 = 0;
  this.f9 = 0;
  this.f6 = 0.0;
  this.fb = 0.0;
  this.fa = 0.0;
  this.fd = 0.0;
  this.fc = 0;
  this.f8 = 0;
  this.f7 = 5;
  this.f9 = 3;
  this.f6 = 25.0;
  this.fb = 500.0;
  this.fa = 3000.0;
  this.fd = 1.0;
  this.fc = 8;
  this.f8 = 16;
}
$p = $c_Lsketches_strokes_tile\uff3fstrokes_TileStrokesSketch$package$.prototype = new $h_O();
$p.constructor = $c_Lsketches_strokes_tile\uff3fstrokes_TileStrokesSketch$package$;
/** @constructor */
function $h_Lsketches_strokes_tile\uff3fstrokes_TileStrokesSketch$package$() {
}
$h_Lsketches_strokes_tile\uff3fstrokes_TileStrokesSketch$package$.prototype = $p;
$p.gv = (function(canvas) {
  $m_Ltrivalibs_graphics_painter_Painter$().fQ(canvas, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((p$7) => {
    var painting = $m_Lsketches_strokes_tile\uff3fstrokes_Painting$package$().fq(p$7.gF(), p$7.fN(), 5);
    var build$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3) => {
      var body$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2) => {
        var $x_1 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().eJ();
        var AssignTarget_this = ctx$2.bz.aM("color");
        var value$proxy1 = $m_Ltrivalibs_graphics_math_gpu_vec4$().di(ctx$2.ae.p("color"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().H().g(1.0));
        return $x_1.g((((("  " + AssignTarget_this.aq) + " = ") + value$proxy1.e) + ";"));
      }));
      var d = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
      var ctx = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().A;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().A = reg;
      try {
        var $x_2 = body$proxy1.g(ctx);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().A = prev;
      }
      program$3.aJ = $x_2;
      $m_sjs_js_ArrayOps$().ab(reg.aI, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$4) => ((data$3) => {
        $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$4, data$3);
      }))(program$3)));
    }));
    var program = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
    build$proxy1.g(program);
    var b = program.aJ;
    var helperFns$proxy1 = program.bD();
    var id = p$7.Q;
    p$7.Q = ((1 + p$7.Q) | 0);
    var names = $m_sjs_js_ArrayOpsCommon$().a(["color"], []);
    var dict = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
    var i = 0;
    while ((i < (names.length | 0))) {
      dict[names[i]] = i;
      i = ((1 + i) | 0);
    }
    var names$2 = [];
    var dict$2 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
    var i$2 = 0;
    while ((i$2 < (names$2.length | 0))) {
      dict$2[names$2[i$2]] = i$2;
      i$2 = ((1 + i$2) | 0);
    }
    var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b, helperFns$proxy1);
    var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
    var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$()).ap.R()], []));
    var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.b4, sd.b3, fragBuiltinParams);
    var args$proxy1 = $m_sr_ScalaRunTime$().bJ(new ($d_sjs_js_Any.r().C)([baseWgsl]));
    console.log(...$m_sjsr_Compat$().bI(args$proxy1));
    var module = p$7.d.createShaderModule($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("code", baseWgsl)])))));
    var descriptors = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], [])], []);
    var result = [];
    $m_sjs_js_ArrayOps$().ab(descriptors, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$1) => ((entries$2) => (result.push(Painter_this$1.d.createBindGroupLayout($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries$2)])))))) | 0)))(p$7)));
    var x1 = new $c_T2(result, $m_Ltrivalibs_graphics_shader_layouts$().ar(p$7.d, result));
    var \u03b46$ = x1;
    var bgls$2 = \u03b46$.K;
    var pl = $m_Ltrivalibs_graphics_shader_layouts$().ar(p$7.d, bgls$2);
    var bgShade = new $c_Ltrivalibs_graphics_painter_Shade(id, module, null, bgls$2[0], null, pl, false, dict, dict$2);
    var build$proxy2 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$1) => {
      var body$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$1) => {
        var pos = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "pos");
        var $x_8 = $m_sjsr_package$();
        var $x_7 = pos.ag($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().fC($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().ft(ctx$2$1.ci.p("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), ctx$2$1.en.p("size")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$()));
        var AssignTarget_this$1 = ctx$2$1.cj.aM("uv");
        var value$proxy2 = ctx$2$1.ci.p("uv");
        var $x_6 = AssignTarget_this$1.aq;
        var $x_5 = value$proxy2.e;
        var AssignTarget_this$2 = ctx$2$1.cj.aM("localUv");
        var value$proxy3 = ctx$2$1.ci.p("localUv");
        var $x_4 = AssignTarget_this$2.aq;
        var $x_3 = value$proxy3.e;
        var AssignTarget_this$3 = ctx$2$1.cj.eo;
        var value$proxy4 = $m_Ltrivalibs_graphics_math_gpu_vec4$().fn($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().bK(pos), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().gB($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().dy(pos)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().H().g(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().H().g(1.0));
        return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_8.c(new ($d_T.r().C)([$x_7, (((("  " + $x_6) + " = ") + $x_5) + ";"), (((("  " + $x_4) + " = ") + $x_3) + ";"), (((("  " + AssignTarget_this$3.aq) + " = ") + value$proxy4.e) + ";")]))), "", "\n", "");
      }));
      var d$1 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
      var ctx$1 = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$1), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().A;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().A = reg$1;
      try {
        var $x_9 = body$proxy3.g(ctx$1);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().A = prev$1;
      }
      program$3$1.d9 = $x_9;
      $m_sjs_js_ArrayOps$().ab(reg$1.aI, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$3) => ((data$3$1) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$3, data$3$1);
      }))(program$3$1)));
      var body$proxy5 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$2) => {
        var base = new $c_Ltrivalibs_graphics_math_gpu_VarExpr("base");
        var edgeFade = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "edgeFade");
        var tipFade = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "tipFade");
        var alpha = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "alpha");
        var $x_18 = $m_sjsr_package$();
        var $x_17 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
        var $x_16 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
        var $x_15 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
        var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
        var fn$proxy1 = $m_Ltrivalibs_graphics_shader_lib_random_Simplex$().eq;
        var a1$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().fl($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().fj(ctx$2$2.af.p("uv"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), 1.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), ctx$2$2.ae.p("randOffset"));
        var a2$proxy1 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "4");
        var a3$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().H().g(2.2);
        var a4$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().H().g(0.8);
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().gz(fn$proxy1);
        var $x_14 = base.ag($x_17.ex($x_16.ff($x_15.fD($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((((((WgslFn$_this.g2(fn$proxy1) + "(") + a1$proxy1) + ", ") + a2$proxy1) + ", ") + a3$proxy1) + ", ") + a4$proxy1) + ")"))), 4.0), 0.08));
        var $x_13 = base.ag($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().fi($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().dp(base, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().H().g(0.9)), 0.04));
        var $x_12 = edgeFade.ag($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ey($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().dp($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().eA($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().eH($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().bK(ctx$2$2.af.p("localUv")))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().H().g(13.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().dp($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().eA($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().eH($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().dy(ctx$2$2.af.p("uv")))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().H().g(10.0))));
        var $x_11 = tipFade.ag($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().eU($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().de($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().bK(ctx$2$2.ae.p("brushTip")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().bK(ctx$2$2.af.p("uv"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().H().g(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().dy(ctx$2$2.ae.p("brushTip"))));
        var $x_10 = alpha.ag($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ez($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ez($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().fp($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ex($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().de(base, edgeFade), 0.3)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().eU($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().bK(ctx$2$2.af.p("uv")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().H().g(1.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().H().g(0.87))), tipFade));
        var AssignTarget_this$4 = ctx$2$2.bz.aM("color");
        var value$proxy5 = $m_Ltrivalibs_graphics_math_gpu_vec4$().di(ctx$2$2.ae.p("color"), alpha);
        return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_18.c(new ($d_T.r().C)([$x_14, $x_13, $x_12, $x_11, $x_10, (((("  " + AssignTarget_this$4.aq) + " = ") + value$proxy5.e) + ";")]))), "", "\n", "");
      }));
      var d$2 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
      var ctx$2$3 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().A;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().A = reg$2;
      try {
        var $x_19 = body$proxy5.g(ctx$2$3);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().A = prev$2;
      }
      program$3$1.d8 = $x_19;
      $m_sjs_js_ArrayOps$().ab(reg$2.aI, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$4) => ((data$3$2) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$4, data$3$2);
      }))(program$3$1)));
    }));
    var program$2 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy2.g(program$2);
    var b$1 = program$2.d9;
    var b$2 = program$2.d8;
    var helperFns$proxy2 = program$2.bD();
    var id$2 = p$7.Q;
    p$7.Q = ((1 + p$7.Q) | 0);
    var names$4 = $m_sjs_js_ArrayOpsCommon$().a(["size"], $m_sjs_js_ArrayOpsCommon$().a(["color"], $m_sjs_js_ArrayOpsCommon$().a(["randOffset"], $m_sjs_js_ArrayOpsCommon$().a(["brushTip"], []))));
    var dict$3 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
    var i$3 = 0;
    while ((i$3 < (names$4.length | 0))) {
      dict$3[names$4[i$3]] = i$3;
      i$3 = ((1 + i$3) | 0);
    }
    var names$5 = [];
    var dict$4 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
    var i$4 = 0;
    while ((i$4 < (names$5.length | 0))) {
      dict$4[names$5[i$4]] = i$4;
      i$4 = ((1 + i$4) | 0);
    }
    var sd$2 = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$1, b$2, helperFns$proxy2);
    var vertexInputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["width"], $m_sjs_js_ArrayOpsCommon$().a(["length"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["localUv"], []))))), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []))))), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["localUv"], [])), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$2 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["size"], $m_sjs_js_ArrayOpsCommon$().a(["color"], $m_sjs_js_ArrayOpsCommon$().a(["randOffset"], $m_sjs_js_ArrayOpsCommon$().a(["brushTip"], [])))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$()).d2.R()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$()).ap.R()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$()).ap.R()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$()).ap.R()], [])))));
    var fragBuiltinParams$2 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$2 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$2, vertexInputStruct$2, vertexOutputStruct$2, fragmentOutputStruct$2, groupDecls$2, sd$2.b4, sd$2.b3, fragBuiltinParams$2);
    var args$proxy2 = $m_sr_ScalaRunTime$().bJ(new ($d_sjs_js_Any.r().C)([baseWgsl$2]));
    console.log(...$m_sjsr_Compat$().bI(args$proxy2));
    var module$2 = p$7.d.createShaderModule($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("code", baseWgsl$2)])))));
    var formats = $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], $m_sjs_js_ArrayOpsCommon$().a(["float32"], $m_sjs_js_ArrayOpsCommon$().a(["float32"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], [])))));
    var sizes = $m_sjs_js_ArrayOpsCommon$().a([8], $m_sjs_js_ArrayOpsCommon$().a([4], $m_sjs_js_ArrayOpsCommon$().a([4], $m_sjs_js_ArrayOpsCommon$().a([8], $m_sjs_js_ArrayOpsCommon$().a([8], [])))));
    var offsets = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes);
    var stride = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes);
    var attributes = [];
    var i$5 = 0;
    while ((i$5 < (formats.length | 0))) {
      attributes.push($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("shaderLocation", i$5), new $c_T2("offset", (offsets[i$5] | 0)), new $c_T2("format", formats[i$5])])))));
      i$5 = ((1 + i$5) | 0);
    }
    var vbl = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("arrayStride", stride), new $c_T2("attributes", attributes)]))));
    var descriptors$2 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 1), new $c_T2("buffer", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 2), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 3), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], []))))], []);
    var result$2 = [];
    $m_sjs_js_ArrayOps$().ab(descriptors$2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$2) => ((entries$2$1) => (result$2.push(Painter_this$2.d.createBindGroupLayout($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries$2$1)])))))) | 0)))(p$7)));
    var x4 = new $c_T2(result$2, $m_Ltrivalibs_graphics_shader_layouts$().ar(p$7.d, result$2));
    var \u03b42$ = x4;
    var bgls$4 = \u03b42$.K;
    var pl$2 = $m_Ltrivalibs_graphics_shader_layouts$().ar(p$7.d, bgls$4);
    var lineShade = new $c_Ltrivalibs_graphics_painter_Shade(id$2, module$2, vbl, bgls$4[0], null, pl$2, false, dict$3, dict$4);
    var build$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$2) => {
      var body$proxy7 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$4) => {
        var $x_20 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().eJ();
        var AssignTarget_this$5 = ctx$2$4.bz.aM("color");
        var value$proxy6 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().dh($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "src"), ctx$2$4.af.p("uv"), ctx$2$4.ae.p("samp"));
        return $x_20.g((((("  " + AssignTarget_this$5.aq) + " = ") + value$proxy6.e) + ";"));
      }));
      var d$3 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
      var ctx$3 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$3), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$3 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$3 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().A;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().A = reg$3;
      try {
        var $x_21 = body$proxy7.g(ctx$3);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().A = prev$3;
      }
      program$3$2.aJ = $x_21;
      $m_sjs_js_ArrayOps$().ab(reg$3.aI, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$5) => ((data$3$3) => {
        $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$5, data$3$3);
      }))(program$3$2)));
    }));
    var program$3$3 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
    build$proxy3.g(program$3$3);
    var b$3 = program$3$3.aJ;
    var helperFns$proxy3 = program$3$3.bD();
    var id$3 = p$7.Q;
    p$7.Q = ((1 + p$7.Q) | 0);
    var names$7 = $m_sjs_js_ArrayOpsCommon$().a(["samp"], []);
    var dict$5 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
    var i$6 = 0;
    while ((i$6 < (names$7.length | 0))) {
      dict$5[names$7[i$6]] = i$6;
      i$6 = ((1 + i$6) | 0);
    }
    var names$8 = $m_sjs_js_ArrayOpsCommon$().a(["src"], []);
    var dict$6 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
    var i$7 = 0;
    while ((i$7 < (names$8.length | 0))) {
      dict$6[names$8[i$7]] = i$7;
      i$7 = ((1 + i$7) | 0);
    }
    var sd$3 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$3, helperFns$proxy3);
    var vertexInputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
    var vertexOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$3 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["samp"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).ap.R()], []));
    var fragBuiltinParams$3 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$3 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$3, vertexInputStruct$3, vertexOutputStruct$3, fragmentOutputStruct$3, groupDecls$3, sd$3.b4, sd$3.b3, fragBuiltinParams$3);
    var wgsl$3 = (baseWgsl$3 + "\n\n@group(1) @binding(0) var src: texture_2d<f32>;");
    var args$proxy3 = $m_sr_ScalaRunTime$().bJ(new ($d_sjs_js_Any.r().C)([wgsl$3]));
    console.log(...$m_sjsr_Compat$().bI(args$proxy3));
    var module$3 = p$7.d.createShaderModule($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("code", wgsl$3)])))));
    var descriptors$3 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], [])], []);
    var result$3 = [];
    $m_sjs_js_ArrayOps$().ab(descriptors$3, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$3) => ((entries$2$2) => (result$3.push(Painter_this$3.d.createBindGroupLayout($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries$2$2)])))))) | 0)))(p$7)));
    var x7 = new $c_T2(result$3, $m_Ltrivalibs_graphics_shader_layouts$().ar(p$7.d, result$3));
    var \u03b46$$2 = x7;
    var bgls$6 = \u03b46$$2.K;
    var entries = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], []);
    var panelBgl$3 = p$7.d.createBindGroupLayout($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries)])))));
    if ((panelBgl$3 !== null)) {
      var other$proxy3 = [panelBgl$3];
      var allBgls$3 = bgls$6.concat(other$proxy3);
    } else {
      var allBgls$3 = bgls$6;
    }
    var pl$3 = $m_Ltrivalibs_graphics_shader_layouts$().ar(p$7.d, allBgls$3);
    var canvasShade = new $c_Ltrivalibs_graphics_painter_Shade(id$3, module$3, null, bgls$6[0], panelBgl$3, pl$3, false, dict$5, dict$6);
    var build$proxy4 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$4) => {
      var body$proxy9 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$5) => {
        var canvasCol = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "canvasCol");
        var strokeCol = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "strokeCol");
        var $x_24 = $m_sjsr_package$();
        var $x_23 = canvasCol.ag($m_Ltrivalibs_graphics_math_gpu_expr$package$().dh($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "canvasTex"), ctx$2$5.af.p("uv"), ctx$2$5.ae.p("samp")));
        var $x_22 = strokeCol.ag($m_Ltrivalibs_graphics_math_gpu_expr$package$().dh($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "strokeTex"), ctx$2$5.af.p("uv"), ctx$2$5.ae.p("samp")));
        var AssignTarget_this$6 = ctx$2$5.bz.aM("color");
        var value$proxy7 = $m_Ltrivalibs_graphics_math_gpu_vec4$().di($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().g0($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().f0(canvasCol), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().f0(strokeCol), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().gE(strokeCol)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().H().g(1.0));
        return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_24.c(new ($d_T.r().C)([$x_23, $x_22, (((("  " + AssignTarget_this$6.aq) + " = ") + value$proxy7.e) + ";")]))), "", "\n", "");
      }));
      var d$4 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
      var ctx$4 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$4), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$4 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$4 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().A;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().A = reg$4;
      try {
        var $x_25 = body$proxy9.g(ctx$4);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().A = prev$4;
      }
      program$3$4.aJ = $x_25;
      $m_sjs_js_ArrayOps$().ab(reg$4.aI, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$6) => ((data$3$4) => {
        $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$6, data$3$4);
      }))(program$3$4)));
    }));
    var program$4 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
    build$proxy4.g(program$4);
    var b$4 = program$4.aJ;
    var helperFns$proxy4 = program$4.bD();
    var id$4 = p$7.Q;
    p$7.Q = ((1 + p$7.Q) | 0);
    var names$10 = $m_sjs_js_ArrayOpsCommon$().a(["samp"], []);
    var dict$7 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
    var i$8 = 0;
    while ((i$8 < (names$10.length | 0))) {
      dict$7[names$10[i$8]] = i$8;
      i$8 = ((1 + i$8) | 0);
    }
    var names$11 = $m_sjs_js_ArrayOpsCommon$().a(["canvasTex"], $m_sjs_js_ArrayOpsCommon$().a(["strokeTex"], []));
    var dict$8 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([]))));
    var i$9 = 0;
    while ((i$9 < (names$11.length | 0))) {
      dict$8[names$11[i$9]] = i$9;
      i$9 = ((1 + i$9) | 0);
    }
    var sd$4 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$4, helperFns$proxy4);
    var vertexInputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
    var vertexOutputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$4 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["samp"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).ap.R()], []));
    var fragBuiltinParams$4 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$4 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$4, vertexInputStruct$4, vertexOutputStruct$4, fragmentOutputStruct$4, groupDecls$4, sd$4.b4, sd$4.b3, fragBuiltinParams$4);
    var wgsl$4 = (baseWgsl$4 + "\n\n@group(1) @binding(0) var canvasTex: texture_2d<f32>;\n@group(1) @binding(1) var strokeTex: texture_2d<f32>;");
    var args$proxy4 = $m_sr_ScalaRunTime$().bJ(new ($d_sjs_js_Any.r().C)([wgsl$4]));
    console.log(...$m_sjsr_Compat$().bI(args$proxy4));
    var module$4 = p$7.d.createShaderModule($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("code", wgsl$4)])))));
    var descriptors$4 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], [])], []);
    var result$4 = [];
    $m_sjs_js_ArrayOps$().ab(descriptors$4, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$4) => ((entries$2$3) => (result$4.push(Painter_this$4.d.createBindGroupLayout($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries$2$3)])))))) | 0)))(p$7)));
    var x10 = new $c_T2(result$4, $m_Ltrivalibs_graphics_shader_layouts$().ar(p$7.d, result$4));
    var \u03b46$$3 = x10;
    var bgls$8 = \u03b46$$3.K;
    var entries$2$4 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([])))))]))))], []));
    var panelBgl$4 = p$7.d.createBindGroupLayout($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_T2.r().C)([new $c_T2("entries", entries$2$4)])))));
    if ((panelBgl$4 !== null)) {
      var other$proxy4 = [panelBgl$4];
      var allBgls$4 = bgls$8.concat(other$proxy4);
    } else {
      var allBgls$4 = bgls$8;
    }
    var pl$4 = $m_Ltrivalibs_graphics_shader_layouts$().ar(p$7.d, allBgls$4);
    var displayShade = new $c_Ltrivalibs_graphics_painter_Shade(id$4, module$4, null, bgls$8[0], panelBgl$4, pl$4, false, dict$7, dict$8);
    var value$proxy8 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(painting.bj, painting.bi);
    var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$());
    var uv$proxy1 = ul$proxy1.aV;
    var buffer = new ArrayBuffer(8);
    var arr$proxy1 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
    var b$5 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy1.dv, 0), p$7.d, uv$proxy1);
    b$5.aU.b9(b$5.a0, value$proxy8);
    var $x_27 = b$5.aT.queue;
    var $x_26 = b$5.az;
    var s$proxy2 = b$5.a0;
    $x_27.writeBuffer($x_26, 0.0, s$proxy2.dv.buffer);
    var ul$proxy2 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$());
    var uv$proxy2 = ul$proxy2.aV;
    var buffer$2 = new ArrayBuffer(16);
    var arr$proxy2 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
    var color = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy2.dv, 0), p$7.d, uv$proxy2);
    var ul$proxy3 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$());
    var uv$proxy3 = ul$proxy3.aV;
    var buffer$3 = new ArrayBuffer(8);
    var arr$proxy3 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$3), 1);
    var randOffset = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy3.dv, 0), p$7.d, uv$proxy3);
    var ul$proxy4 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$());
    var uv$proxy4 = ul$proxy4.aV;
    var buffer$4 = new ArrayBuffer(8);
    var arr$proxy4 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$4), 1);
    var brushTip = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy4.dv, 0), p$7.d, uv$proxy4);
    var value$proxy9 = $m_Lsketches_strokes_tile\uff3fstrokes_Painting$package$().eE($m_Ltrivalibs_utils_random_random$package$().bF(painting.aR).bV);
    var ul$proxy5 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$());
    var uv$proxy5 = ul$proxy5.aV;
    var buffer$5 = new ArrayBuffer(16);
    var arr$proxy5 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$5), 1);
    var b$2$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy5.dv, 0), p$7.d, uv$proxy5);
    b$2$1.aU.b9(b$2$1.a0, value$proxy9);
    var $x_29 = b$2$1.aT.queue;
    var $x_28 = b$2$1.az;
    var s$proxy3 = b$2$1.a0;
    $x_29.writeBuffer($x_28, 0.0, s$proxy3.dv.buffer);
    var Bindable_this = p$7.dm(bgShade, (void 0), (void 0), (void 0));
    var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("color", b$2$1);
    var \u03b4scrutinee273 = e1$proxy1.T;
    var idx = (Bindable_this.v.a8.color | 0);
    while (((Bindable_this.O.length | 0) <= idx)) {
      Bindable_this.O.push(null);
    }
    Bindable_this.O[idx] = \u03b4scrutinee273;
    Bindable_this.a6 = null;
    var bgPanel = p$7.ct(2, 2, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), Bindable_this, (void 0));
    var form = p$7.fF((void 0), (void 0), (void 0), (void 0), "triangle-strip", (void 0));
    var blendState$1 = new ($a_Ltrivalibs_graphics_painter_BlendState())(new ($a_Ltrivalibs_graphics_painter_BlendFn())("one", "zero", "add"), new ($a_Ltrivalibs_graphics_painter_BlendFn())("one", "one-minus-src-alpha", "add"));
    var Bindable_this$3 = p$7.gn(form, lineShade, (void 0), blendState$1);
    var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("size", b$5);
    var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("color", color);
    var e3$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("randOffset", randOffset);
    var e4$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("brushTip", brushTip);
    var \u03b4scrutinee281 = e1$proxy2.T;
    var idx$2 = (Bindable_this$3.M.a8.size | 0);
    while (((Bindable_this$3.G.length | 0) <= idx$2)) {
      Bindable_this$3.G.push(null);
    }
    Bindable_this$3.G[idx$2] = \u03b4scrutinee281;
    var \u03b4scrutinee291 = e2$proxy1.T;
    var idx$3 = (Bindable_this$3.M.a8.color | 0);
    while (((Bindable_this$3.G.length | 0) <= idx$3)) {
      Bindable_this$3.G.push(null);
    }
    Bindable_this$3.G[idx$3] = \u03b4scrutinee291;
    var \u03b4scrutinee305 = e3$proxy1.T;
    var idx$4 = (Bindable_this$3.M.a8.randOffset | 0);
    while (((Bindable_this$3.G.length | 0) <= idx$4)) {
      Bindable_this$3.G.push(null);
    }
    Bindable_this$3.G[idx$4] = \u03b4scrutinee305;
    var \u03b4scrutinee323 = e4$proxy1.T;
    var idx$5 = (Bindable_this$3.M.a8.brushTip | 0);
    while (((Bindable_this$3.G.length | 0) <= idx$5)) {
      Bindable_this$3.G.push(null);
    }
    Bindable_this$3.G[idx$5] = \u03b4scrutinee323;
    var width$1 = $doubleToInt(painting.bj);
    var height$1 = $doubleToInt(painting.bi);
    var clearColor$2 = $m_Ltrivalibs_graphics_math_cpu_Vec4$().fK().g(new $c_T4(0.0, 0.0, 0.0, 0.0));
    var strokePanel = p$7.ct(width$1, height$1, clearColor$2, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), Bindable_this$3, (void 0), (void 0), (void 0));
    var Bindable_this$8 = p$7.dm(canvasShade, $m_Ltrivalibs_graphics_painter_BlendState$().e2, (void 0), (void 0));
    var e1$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("src", bgPanel);
    var e2$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", p$7.eS());
    var \u03b4scrutinee341 = e1$proxy3.T;
    var idx$6 = (Bindable_this$8.v.aH.src | 0);
    while (((Bindable_this$8.u.length | 0) <= idx$6)) {
      Bindable_this$8.u.push(null);
    }
    Bindable_this$8.u[idx$6] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee341);
    Bindable_this$8.a6 = null;
    var \u03b4scrutinee345 = e2$proxy2.T;
    var idx$7 = (Bindable_this$8.v.a8.samp | 0);
    while (((Bindable_this$8.O.length | 0) <= idx$7)) {
      Bindable_this$8.O.push(null);
    }
    Bindable_this$8.O[idx$7] = \u03b4scrutinee345;
    Bindable_this$8.a6 = null;
    var width$2 = $doubleToInt(painting.bj);
    var height$2 = $doubleToInt(painting.bi);
    var canvasPanel = p$7.ct(width$2, height$2, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), Bindable_this$8, (void 0));
    var width$3 = $doubleToInt(painting.bj);
    var height$3 = $doubleToInt(painting.bi);
    var Bindable_this$11 = p$7.dm(displayShade, (void 0), (void 0), (void 0));
    var e1$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("canvasTex", canvasPanel);
    var e2$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("strokeTex", strokePanel);
    var e3$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", p$7.eS());
    var \u03b4scrutinee357 = e1$proxy4.T;
    var idx$8 = (Bindable_this$11.v.aH.canvasTex | 0);
    while (((Bindable_this$11.u.length | 0) <= idx$8)) {
      Bindable_this$11.u.push(null);
    }
    Bindable_this$11.u[idx$8] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee357);
    Bindable_this$11.a6 = null;
    var \u03b4scrutinee367 = e2$proxy3.T;
    var idx$9 = (Bindable_this$11.v.aH.strokeTex | 0);
    while (((Bindable_this$11.u.length | 0) <= idx$9)) {
      Bindable_this$11.u.push(null);
    }
    Bindable_this$11.u[idx$9] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee367);
    Bindable_this$11.a6 = null;
    var \u03b4scrutinee371 = e3$proxy2.T;
    var idx$10 = (Bindable_this$11.v.a8.samp | 0);
    while (((Bindable_this$11.O.length | 0) <= idx$10)) {
      Bindable_this$11.O.push(null);
    }
    Bindable_this$11.O[idx$10] = \u03b4scrutinee371;
    Bindable_this$11.a6 = null;
    var displayPanel = p$7.ct(width$3, height$3, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), Bindable_this$11, (void 0));
    var NoGeometry = [];
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$7, bgPanel);
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$7, canvasPanel);
    var e1$proxy5 = new $c_Ltrivalibs_graphics_painter_BindPair("src", strokePanel);
    var \u03b4scrutinee383 = e1$proxy5.T;
    var idx$11 = (Bindable_this$8.v.aH.src | 0);
    while (((Bindable_this$8.u.length | 0) <= idx$11)) {
      Bindable_this$8.u.push(null);
    }
    Bindable_this$8.u[idx$11] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee383);
    Bindable_this$8.a6 = null;
    new $c_sci_Range$Exclusive(0, 3, 1).aK(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((p$8) => ((v1$2) => {
      $m_sjs_js_ArrayOps$().ab($m_Lsketches_strokes_tile\uff3fstrokes_Painting$package$().fG(painting), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((stroke$3) => {
        $p_Lsketches_strokes_tile\uff3fstrokes_TileStrokesSketch$package$__useStroke$1__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Lsketches_strokes_tile\uff3fstrokes_TileStroke__V(this, color, randOffset, stroke$3);
        $p_Lsketches_strokes_tile\uff3fstrokes_TileStrokesSketch$package$__drawStroke$1__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_painter_Form__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Panel__Lsketches_strokes_tile\uff3fstrokes_TileStroke__I__I__D__V(this, brushTip, form, p$8, strokePanel, stroke$3, 2147483647, 2147483647, 0.0);
        $p_Lsketches_strokes_tile\uff3fstrokes_TileStrokesSketch$package$__mergeStroke$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Panel__V(this, p$8, canvasPanel);
      })));
    }))(p$7)));
    var order = new $c_sr_ObjectRef($m_Ltrivalibs_utils_random_random$package$().dt(painting.aR));
    var next = new $c_sr_IntRef(0);
    var stroke = new $c_sr_ObjectRef($m_Lsketches_strokes_tile\uff3fstrokes_Painting$package$().dv(painting, order.L[next.j]));
    var segIdx = new $c_sr_IntRef(0);
    var ptIdx = new $c_sr_IntRef(0);
    var advance = new $c_sr_DoubleRef(0.0);
    var pauseLeft = new $c_sr_DoubleRef(0.0);
    var sinceRecolor = new $c_sr_IntRef(0);
    next.j = ((1 + next.j) | 0);
    $p_Lsketches_strokes_tile\uff3fstrokes_TileStrokesSketch$package$__useStroke$1__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Lsketches_strokes_tile\uff3fstrokes_TileStroke__V(this, color, randOffset, stroke.L);
    $m_Ltrivalibs_utils_animation_animate$package$().fm(((p$9) => ((arg1$2) => {
      var tpf = (+arg1$2);
      if ((pauseLeft.E > 0.0)) {
        pauseLeft.E = (pauseLeft.E - tpf);
        if ((pauseLeft.E <= 0.0)) {
          $p_Lsketches_strokes_tile\uff3fstrokes_TileStrokesSketch$package$__startTile$1__sr_IntRef__sr_ObjectRef__Lsketches_strokes_tile\uff3fstrokes_Painting__sr_ObjectRef__sr_IntRef__sr_IntRef__sr_DoubleRef__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__V(this, next, order, painting, stroke, segIdx, ptIdx, advance, color, randOffset);
          $p_Lsketches_strokes_tile\uff3fstrokes_TileStrokesSketch$package$__drawStroke$1__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_painter_Form__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Panel__Lsketches_strokes_tile\uff3fstrokes_TileStroke__I__I__D__V(this, brushTip, form, p$9, strokePanel, stroke.L, segIdx.j, ptIdx.j, advance.E);
        }
      } else {
        advance.E = (advance.E + ((25.0 * tpf) / 1000.0));
        var done = false;
        var steps = 0;
        while ((((advance.E >= 1.0) && (!done)) && (steps < 16))) {
          advance.E = (advance.E - 1.0);
          done = $p_Lsketches_strokes_tile\uff3fstrokes_TileStrokesSketch$package$__stepBrush$1__sr_IntRef__sr_ObjectRef__sr_IntRef__Z(this, ptIdx, stroke, segIdx);
          steps = ((1 + steps) | 0);
        }
        if ((steps === 16)) {
          advance.E = 0.0;
        }
        if (done) {
          $p_Lsketches_strokes_tile\uff3fstrokes_TileStrokesSketch$package$__drawStroke$1__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_painter_Form__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Panel__Lsketches_strokes_tile\uff3fstrokes_TileStroke__I__I__D__V(this, brushTip, form, p$9, strokePanel, stroke.L, 2147483647, 2147483647, 0.0);
          $p_Lsketches_strokes_tile\uff3fstrokes_TileStrokesSketch$package$__mergeStroke$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Panel__V(this, p$9, canvasPanel);
          $p_Lsketches_strokes_tile\uff3fstrokes_TileStrokesSketch$package$__clearStroke$1__Ltrivalibs_graphics_painter_Form__sjs_js_Array__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Panel__V(this, form, NoGeometry, p$9, strokePanel);
          pauseLeft.E = $m_Ltrivalibs_utils_random_random$package$().eO(500.0, 3000.0);
          sinceRecolor.j = ((1 + sinceRecolor.j) | 0);
          if ((sinceRecolor.j >= 8)) {
            sinceRecolor.j = 0;
            painting.ge();
          }
        } else {
          $p_Lsketches_strokes_tile\uff3fstrokes_TileStrokesSketch$package$__drawStroke$1__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_painter_Form__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Panel__Lsketches_strokes_tile\uff3fstrokes_TileStroke__I__I__D__V(this, brushTip, form, p$9, strokePanel, stroke.L, segIdx.j, ptIdx.j, advance.E);
        }
      }
      p$9.g6(displayPanel);
    }))(p$7));
  })));
});
var $d_Lsketches_strokes_tile\uff3fstrokes_TileStrokesSketch$package$ = new $TypeData().i($c_Lsketches_strokes_tile\uff3fstrokes_TileStrokesSketch$package$, "sketches.strokes.tile_strokes.TileStrokesSketch$package$", ({
  bM: 1
}));
var $n_Lsketches_strokes_tile\uff3fstrokes_TileStrokesSketch$package$;
function $m_Lsketches_strokes_tile\uff3fstrokes_TileStrokesSketch$package$() {
  if ((!$n_Lsketches_strokes_tile\uff3fstrokes_TileStrokesSketch$package$)) {
    $n_Lsketches_strokes_tile\uff3fstrokes_TileStrokesSketch$package$ = new $c_Lsketches_strokes_tile\uff3fstrokes_TileStrokesSketch$package$();
  }
  return $n_Lsketches_strokes_tile\uff3fstrokes_TileStrokesSketch$package$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_BufferBinding(buffer, device, uv) {
  this.a0 = null;
  this.aT = null;
  this.aU = null;
  this.az = null;
  this.a0 = buffer;
  this.aT = device;
  this.aU = uv;
  var b = (buffer.dv.byteLength | 0);
  var value = ((b < 16) ? 16 : b);
  var $x_1 = device.createBuffer(({
    "size": value,
    "usage": 72
  }));
  this.az = $x_1;
}
$p = $c_Ltrivalibs_graphics_buffers_BufferBinding.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_BufferBinding;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_BufferBinding() {
}
$h_Ltrivalibs_graphics_buffers_BufferBinding.prototype = $p;
function $isArrayOf_Ltrivalibs_graphics_buffers_BufferBinding(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a5)));
}
var $d_Ltrivalibs_graphics_buffers_BufferBinding = new $TypeData().i($c_Ltrivalibs_graphics_buffers_BufferBinding, "trivalibs.graphics.buffers.BufferBinding", ({
  a5: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_BufferedGeometry(vertices, indices) {
  this.cD = null;
  this.bY = null;
  this.cD = vertices;
  this.bY = indices;
}
$p = $c_Ltrivalibs_graphics_geometry_BufferedGeometry.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_BufferedGeometry;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_BufferedGeometry() {
}
$h_Ltrivalibs_graphics_geometry_BufferedGeometry.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_BufferedGeometry = new $TypeData().i($c_Ltrivalibs_graphics_geometry_BufferedGeometry, "trivalibs.graphics.geometry.BufferedGeometry", ({
  bR: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Line(defaultWidth, lenOffset, defaultData) {
  this.aW = 0.0;
  this.aA = 0.0;
  this.bZ = null;
  this.a5 = null;
  this.aX = 0.0;
  this.cE = null;
  this.aW = defaultWidth;
  this.aA = lenOffset;
  this.bZ = defaultData;
  this.a5 = [];
  this.aX = 0.0;
  this.cE = null;
}
$p = $c_Ltrivalibs_graphics_geometry_Line.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Line;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Line() {
}
$h_Ltrivalibs_graphics_geometry_Line.prototype = $p;
$p.dx = (function() {
  return (this.a5.length | 0);
});
$p.w = (function(i) {
  return this.a5[i];
});
$p.fB = (function() {
  return this.a5[0];
});
$p.fT = (function() {
  return this.a5[(((this.a5.length | 0) - 1) | 0)];
});
$p.df = (function(pos) {
  this.a9(new $c_Ltrivalibs_graphics_geometry_LineVertex(pos, this.aW, 0.0, new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 0.0), this.bZ));
});
$p.b5 = (function(pos, width, data) {
  this.a9(new $c_Ltrivalibs_graphics_geometry_LineVertex(pos, width, 0.0, new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 0.0), data));
});
$p.a9 = (function(vert) {
  var n = (this.a5.length | 0);
  if ((n > 0)) {
    var prev = this.a5[((n - 1) | 0)];
    prev.g7(vert.l);
    this.aX = (this.aX + prev.n);
    vert.i = prev.i;
  }
  this.a5.push(vert);
});
var $d_Ltrivalibs_graphics_geometry_Line = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Line, "trivalibs.graphics.geometry.Line", ({
  bS: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Line$() {
}
$p = $c_Ltrivalibs_graphics_geometry_Line$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Line$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Line$() {
}
$h_Ltrivalibs_graphics_geometry_Line$.prototype = $p;
$p.gx = (function(line, smoothDepth, smoothAngleThreshold, smoothMinLength, totalLength, prevDirection, nextDirection, swapTextureOrientation, foldTreatment) {
  var clampInner = (foldTreatment === 1);
  var elem = new $c_Ltrivalibs_graphics_geometry_Line(line.aW, 0.0, new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 0.0));
  var elem$1 = null;
  elem$1 = elem;
  var elem$2 = new $c_Ltrivalibs_graphics_geometry_Line(line.aW, 0.0, new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 0.0));
  var elem$3 = null;
  elem$3 = elem$2;
  var elem$4 = line.aA;
  var elem$5 = 0.0;
  elem$5 = elem$4;
  var src = line.a5;
  var n = (src.length | 0);
  var i = 0;
  while ((i < n)) {
    var v = src[i];
    var hasPrev = (i > 0);
    var hasNext = (i < ((n - 1) | 0));
    var halfWidth = (0.5 * v.F);
    var nextNormal = $m_Ltrivalibs_graphics_geometry_line2d$package$().eM(v.i);
    var normal = nextNormal;
    var offset = halfWidth;
    if (hasPrev) {
      var prevDir = src[((i - 1) | 0)].i;
      if (((prevDir.r !== v.i.r) || (prevDir.s !== v.i.s))) {
        var prevNormal = $m_Ltrivalibs_graphics_geometry_line2d$package$().eM(prevDir);
        normal = $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec2Base__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().h(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().h(), nextNormal, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), prevNormal), $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$());
        var p$proxy5 = (halfWidth / $f_Ltrivalibs_graphics_math_Vec2Base__dot__O__O__D($m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), normal, prevNormal));
        var other$proxy1 = (5.0 * halfWidth);
        offset = (+Math.min(p$proxy5, other$proxy1));
      }
    }
    var topOffset = offset;
    var bottomOffset = offset;
    var topUv = 0.0;
    var bottomUv = 1.0;
    if (((clampInner && hasPrev) && hasNext)) {
      var reach = $m_Ltrivalibs_graphics_geometry_line2d$package$().fZ(src, i, false);
      if ((reach < offset)) {
        if (($m_Ltrivalibs_graphics_geometry_line2d$package$().cp(src[((i - 1) | 0)].i, v.i) > 0.0)) {
          bottomOffset = reach;
          bottomUv = (0.5 + (reach / (2.0 * offset)));
        } else {
          topOffset = reach;
          topUv = (0.5 - (reach / (2.0 * offset)));
        }
      }
    }
    var top = $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().h(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec2Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().h(), normal, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), topOffset), $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), v.l);
    var bottom = $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().h(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec2Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().h(), normal, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), (-bottomOffset)), $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), v.l);
    if ((!hasPrev)) {
      elem$1.b5(v.l, v.F, new $c_Ltrivalibs_graphics_math_cpu_Vec2(elem$5, 0.5));
      elem$3.b5(v.l, v.F, new $c_Ltrivalibs_graphics_math_cpu_Vec2(elem$5, 0.5));
      if ((prevDirection !== null)) {
        var c = (halfWidth / $f_Ltrivalibs_graphics_math_Vec2Base__dot__O__O__D($m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec2Base__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().h(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().h(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec2Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().h(), prevDirection, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), (-1.0)), $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), v.i), $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$()), v.i));
        var p$proxy6 = ((c * c) - (halfWidth * halfWidth));
        var a = (+Math.sqrt(p$proxy6));
        if ((a > 0.001)) {
          if (($m_Ltrivalibs_graphics_geometry_line2d$package$().cp(v.i, prevDirection) > 0.0)) {
            top = $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().h(), top, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec2Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().h(), v.i, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), (-a)));
            bottom = $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().h(), bottom, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec2Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().h(), v.i, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), a));
          } else {
            top = $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().h(), top, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec2Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().h(), v.i, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), a));
            bottom = $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().h(), bottom, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec2Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().h(), v.i, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), (-a)));
          }
        }
      }
    }
    if (((!hasNext) && (nextDirection !== null))) {
      var c$2 = (halfWidth / $f_Ltrivalibs_graphics_math_Vec2Base__dot__O__O__D($m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec2Base__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().h(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().h(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec2Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().h(), v.i, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), (-1.0)), $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), nextDirection), $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$()), nextDirection));
      var p$proxy7 = ((c$2 * c$2) - (halfWidth * halfWidth));
      var a$2 = (+Math.sqrt(p$proxy7));
      if ((a$2 > 0.001)) {
        if (($m_Ltrivalibs_graphics_geometry_line2d$package$().cp(nextDirection, v.i) > 0.0)) {
          top = $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().h(), top, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec2Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().h(), v.i, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), a$2));
          bottom = $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().h(), bottom, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec2Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().h(), v.i, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), (-a$2)));
        } else {
          top = $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().h(), top, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec2Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().h(), v.i, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), (-a$2)));
          bottom = $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().h(), bottom, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec2Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().h(), v.i, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), a$2));
        }
      }
    }
    elem$1.b5(top, v.F, new $c_Ltrivalibs_graphics_math_cpu_Vec2(elem$5, topUv));
    elem$3.b5(bottom, v.F, new $c_Ltrivalibs_graphics_math_cpu_Vec2(elem$5, bottomUv));
    if ((!hasNext)) {
      elem$1.b5(v.l, v.F, new $c_Ltrivalibs_graphics_math_cpu_Vec2(elem$5, 0.5));
      elem$3.b5(v.l, v.F, new $c_Ltrivalibs_graphics_math_cpu_Vec2(elem$5, 0.5));
    }
    elem$5 = (elem$5 + v.n);
    i = ((1 + i) | 0);
  }
  var d = 0;
  while ((d < smoothDepth)) {
    var smoothed = $m_Ltrivalibs_graphics_geometry_line2d$package$().gq(elem$1, elem$3, 0.25, smoothMinLength, smoothAngleThreshold, new $c_Ltrivalibs_graphics_math_Lerp$vec2Lerp($m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), $m_Ltrivalibs_graphics_math_cpu_Vec2$().h()));
    elem$1 = smoothed.K;
    elem$3 = smoothed.a2;
    d = ((1 + d) | 0);
  }
  var uvLength = ((totalLength !== null) ? (+totalLength) : elem$5);
  var opt$proxy3 = line.cE;
  var localLength = ((opt$proxy3 !== null) ? (+opt$proxy3) : line.aX);
  var ribCount = elem$1.dx();
  var vertCount = (ribCount << 1);
  var buffer = new ArrayBuffer((vertCount << 5));
  var out = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), vertCount);
  var indices = [];
  var r = 0;
  while ((r < ribCount)) {
    var tv = elem$1.w(r);
    var bv = elem$3.w(r);
    var r$1 = r;
    if ((r$1 === 0)) {
      var x$7 = ((ribCount - 1) | 0);
      var i$1 = ((x$7 < 1) ? x$7 : 1);
    } else if ((r$1 === ((ribCount - 1) | 0))) {
      var x$8 = ((ribCount - 2) | 0);
      var i$1 = ((x$8 > 0) ? x$8 : 0);
    } else {
      var i$1 = r$1;
    }
    var tv$1 = elem$1.w(i$1);
    var bv$1 = elem$3.w(i$1);
    var span = (bv$1.q.s - tv$1.q.s);
    var width = ((span < 1.0E-9) ? 0.0 : ($f_Ltrivalibs_graphics_math_Vec2Base__length__O__D($m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().h(), tv$1.l, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), bv$1.l)) / span));
    var topUvY = (swapTextureOrientation ? (1.0 - tv.q.s) : tv.q.s);
    var bottomUvY = (swapTextureOrientation ? (1.0 - bv.q.s) : bv.q.s);
    var $x_1 = $m_Ltrivalibs_graphics_geometry_line2d$package$();
    var index$proxy1 = (r << 1);
    var offset$proxy1 = (index$proxy1 << 5);
    $x_1.eY(new ($a_Ltrivalibs_bufferdata_BufferView())(out.dv, offset$proxy1), tv.l, width, tv.q.r, (tv.q.r / uvLength), topUvY, ((tv.q.r - line.aA) / localLength));
    var $x_2 = $m_Ltrivalibs_graphics_geometry_line2d$package$();
    var index$proxy2 = ((1 + (r << 1)) | 0);
    var offset$proxy2 = (index$proxy2 << 5);
    $x_2.eY(new ($a_Ltrivalibs_bufferdata_BufferView())(out.dv, offset$proxy2), bv.l, width, bv.q.r, (bv.q.r / uvLength), bottomUvY, ((bv.q.r - line.aA) / localLength));
    indices.push((r << 1));
    indices.push(((1 + (r << 1)) | 0));
    r = ((1 + r) | 0);
  }
  return new $c_Ltrivalibs_graphics_geometry_BufferedGeometry(out, $m_Ltrivalibs_graphics_geometry_buffers$package$().fY(indices, vertCount));
});
$p.gw = (function(lines, smoothDepth, smoothAngleThreshold, smoothMinLength, totalLength, foldTreatment) {
  var total = 0.0;
  if ((totalLength !== null)) {
    total = (+totalLength);
  } else {
    var i = 0;
    while ((i < (lines.length | 0))) {
      total = (total + lines[i].aX);
      i = ((1 + i) | 0);
    }
  }
  var out = [];
  var i$2 = 0;
  while ((i$2 < (lines.length | 0))) {
    var prevDir = ((i$2 === 0) ? null : lines[((i$2 - 1) | 0)].fT().i);
    var nextDir = ((i$2 === (((lines.length | 0) - 1) | 0)) ? null : lines[((1 + i$2) | 0)].fB().i);
    var $x_2 = lines[i$2];
    var $x_1 = total;
    var num = i$2;
    var t = ((num >>> 31) | 0);
    out.push(this.gx($x_2, smoothDepth, smoothAngleThreshold, smoothMinLength, $x_1, prevDir, nextDir, ((((1 & ((num + t) | 0)) - t) | 0) !== 0), foldTreatment));
    i$2 = ((1 + i$2) | 0);
  }
  return out;
});
var $d_Ltrivalibs_graphics_geometry_Line$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Line$, "trivalibs.graphics.geometry.Line$", ({
  bT: 1
}));
var $n_Ltrivalibs_graphics_geometry_Line$;
function $m_Ltrivalibs_graphics_geometry_Line$() {
  if ((!$n_Ltrivalibs_graphics_geometry_Line$)) {
    $n_Ltrivalibs_graphics_geometry_Line$ = new $c_Ltrivalibs_graphics_geometry_Line$();
  }
  return $n_Ltrivalibs_graphics_geometry_Line$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_LineVertex(pos, width, len, dir, data) {
  this.l = null;
  this.F = 0.0;
  this.n = 0.0;
  this.i = null;
  this.q = null;
  this.l = pos;
  this.F = width;
  this.n = len;
  this.i = dir;
  this.q = data;
}
$p = $c_Ltrivalibs_graphics_geometry_LineVertex.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_LineVertex;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_LineVertex() {
}
$h_Ltrivalibs_graphics_geometry_LineVertex.prototype = $p;
$p.g7 = (function(point) {
  var vx = (point.r - this.l.r);
  var vy = (point.s - this.l.s);
  var p$proxy1 = ((vx * vx) + (vy * vy));
  var l = (+Math.sqrt(p$proxy1));
  this.n = l;
  this.i = new $c_Ltrivalibs_graphics_math_cpu_Vec2((vx / l), (vy / l));
});
var $d_Ltrivalibs_graphics_geometry_LineVertex = new $TypeData().i($c_Ltrivalibs_graphics_geometry_LineVertex, "trivalibs.graphics.geometry.LineVertex", ({
  bU: 1
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
$p.fY = (function(idxBuf, vertexCount) {
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
  bV: 1
}));
var $n_Ltrivalibs_graphics_geometry_buffers$package$;
function $m_Ltrivalibs_graphics_geometry_buffers$package$() {
  if ((!$n_Ltrivalibs_graphics_geometry_buffers$package$)) {
    $n_Ltrivalibs_graphics_geometry_buffers$package$ = new $c_Ltrivalibs_graphics_geometry_buffers$package$();
  }
  return $n_Ltrivalibs_graphics_geometry_buffers$package$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_line2d$package$() {
}
$p = $c_Ltrivalibs_graphics_geometry_line2d$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_line2d$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_line2d$package$() {
}
$h_Ltrivalibs_graphics_geometry_line2d$package$.prototype = $p;
$p.cr = (function(a, b, t, evidence$1) {
  var $x_5 = $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__mixScalar__O__Ltrivalibs_graphics_math_Vec2Base__O__D__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().h(), a.l, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), b.l, t);
  var $x_4 = a.F;
  var $x_3 = b.F;
  var $x_2 = a.F;
  var $x_1 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 0.0);
  var a$1 = a.q;
  var b$2 = b.q;
  return new $c_Ltrivalibs_graphics_geometry_LineVertex($x_5, ($x_4 + (($x_3 - $x_2) * t)), 0.0, $x_1, $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__mixScalar__O__Ltrivalibs_graphics_math_Vec2Base__O__D__O(evidence$1.dP, a$1, evidence$1.dO, b$2, t));
});
$p.eM = (function(dir) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec2(dir.s, (-dir.r));
});
$p.gA = (function(a, b) {
  var p$proxy8 = $f_Ltrivalibs_graphics_math_Vec2Base__dot__O__O__D($m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), a, b);
  var p$proxy9 = ((p$proxy8 < (-1.0)) ? (-1.0) : ((p$proxy8 > 1.0) ? 1.0 : p$proxy8));
  return (+Math.acos(p$proxy9));
});
$p.du = (function(a, b) {
  var y = $m_Ltrivalibs_graphics_geometry_line2d$package$().cp(a, b);
  var x = $f_Ltrivalibs_graphics_math_Vec2Base__dot__O__O__D($m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), a, b);
  return (+Math.atan2(y, x));
});
$p.fZ = (function(verts, i, proximity) {
  var curvature = $m_Ltrivalibs_graphics_geometry_line2d$package$().fr(verts, i);
  if ((!proximity)) {
    return curvature;
  } else {
    var near = $m_Ltrivalibs_graphics_geometry_line2d$package$().g9(verts, i);
    return ((near < curvature) ? near : curvature);
  }
});
$p.g9 = (function(verts, i) {
  var n = (verts.length | 0);
  var p = verts[i].l;
  var maxArc = (3.0 * verts[i].F);
  var limit = Infinity;
  var arc = 0.0;
  var j = ((i - 1) | 0);
  while (((j >= 0) && (arc <= maxArc))) {
    arc = (arc + verts[j].n);
    var gap = $f_Ltrivalibs_graphics_math_Vec2Base__length__O__D($m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().h(), verts[j].l, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), p));
    if (((arc > (1.5 * gap)) && ((0.5 * gap) < limit))) {
      limit = (0.5 * gap);
    }
    j = ((j - 1) | 0);
  }
  arc = 0.0;
  j = i;
  while (((j < ((n - 1) | 0)) && (arc <= maxArc))) {
    arc = (arc + verts[j].n);
    var gap$2 = $f_Ltrivalibs_graphics_math_Vec2Base__length__O__D($m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().h(), verts[((1 + j) | 0)].l, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), p));
    if (((arc > (1.5 * gap$2)) && ((0.5 * gap$2) < limit))) {
      limit = (0.5 * gap$2);
    }
    j = ((1 + j) | 0);
  }
  return limit;
});
$p.fr = (function(verts, i) {
  var n = (verts.length | 0);
  if (((i <= 0) || (i >= ((n - 1) | 0)))) {
    return Infinity;
  } else {
    var turn = $m_Ltrivalibs_graphics_geometry_line2d$package$().gA(verts[((i - 1) | 0)].i, verts[i].i);
    if ((turn <= 1.0E-6)) {
      return Infinity;
    } else {
      var p$proxy10 = verts[((i - 1) | 0)].n;
      var other$proxy2 = verts[i].n;
      var $x_1 = Math.min(p$proxy10, other$proxy2);
      var p$proxy11 = (0.5 * turn);
      var limit = ((+$x_1) / (+Math.tan(p$proxy11)));
      var lo = ((i - 1) | 0);
      var hi = ((1 + i) | 0);
      var arc = (verts[((i - 1) | 0)].n + verts[i].n);
      var sum = $m_Ltrivalibs_graphics_geometry_line2d$package$().du(verts[((i - 1) | 0)].i, verts[i].i);
      var searching = true;
      while (searching) {
        var canGrowLo = (lo > 0);
        var canGrowHi = (hi < ((n - 1) | 0));
        if (((!canGrowLo) && (!canGrowHi))) {
          searching = false;
        } else {
          if ((canGrowLo && ((!canGrowHi) || (verts[((lo - 1) | 0)].n <= verts[hi].n)))) {
            lo = ((lo - 1) | 0);
            sum = (sum + $m_Ltrivalibs_graphics_geometry_line2d$package$().du(verts[lo].i, verts[((1 + lo) | 0)].i));
            arc = (arc + verts[lo].n);
          } else {
            hi = ((1 + hi) | 0);
            sum = (sum + $m_Ltrivalibs_graphics_geometry_line2d$package$().du(verts[((hi - 1) | 0)].i, verts[hi].i));
            arc = (arc + verts[((hi - 1) | 0)].n);
          }
          var p$proxy12 = sum;
          var net = (+Math.abs(p$proxy12));
          if ((net > 1.0E-6)) {
            var radius = (arc / net);
            if ((radius < limit)) {
              limit = radius;
            }
          }
          if ((arc > (4.0 * limit))) {
            searching = false;
          }
        }
      }
      return limit;
    }
  }
});
$p.eX = (function(line, i, minDist, angleThreshold) {
  var prev = line.w(((i - 1) | 0));
  var curr = line.w(i);
  return ((!((prev.n < minDist) || (curr.n < minDist))) && ((1.0 - $f_Ltrivalibs_graphics_math_Vec2Base__dot__O__O__D($m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), curr.i, prev.i)) > angleThreshold));
});
$p.gq = (function(top, bottom, ratio, minDist, angleThreshold, evidence$1) {
  var outTop = new $c_Ltrivalibs_graphics_geometry_Line(top.aW, top.aA, top.bZ);
  var outBottom = new $c_Ltrivalibs_graphics_geometry_Line(bottom.aW, bottom.aA, bottom.bZ);
  var n = top.dx();
  var i = 0;
  while ((i < n)) {
    if (((i === 0) || (i === ((n - 1) | 0)))) {
      var this$1 = top.w(i);
      outTop.a9(new $c_Ltrivalibs_graphics_geometry_LineVertex(this$1.l, this$1.F, this$1.n, this$1.i, this$1.q));
      var this$2 = bottom.w(i);
      outBottom.a9(new $c_Ltrivalibs_graphics_geometry_LineVertex(this$2.l, this$2.F, this$2.n, this$2.i, this$2.q));
    } else if (($m_Ltrivalibs_graphics_geometry_line2d$package$().eX(top, i, minDist, angleThreshold) || $m_Ltrivalibs_graphics_geometry_line2d$package$().eX(bottom, i, minDist, angleThreshold))) {
      outTop.a9($m_Ltrivalibs_graphics_geometry_line2d$package$().cr(top.w(((i - 1) | 0)), top.w(i), (1.0 - ratio), evidence$1));
      outTop.a9($m_Ltrivalibs_graphics_geometry_line2d$package$().cr(top.w(i), top.w(((1 + i) | 0)), ratio, evidence$1));
      outBottom.a9($m_Ltrivalibs_graphics_geometry_line2d$package$().cr(bottom.w(((i - 1) | 0)), bottom.w(i), (1.0 - ratio), evidence$1));
      outBottom.a9($m_Ltrivalibs_graphics_geometry_line2d$package$().cr(bottom.w(i), bottom.w(((1 + i) | 0)), ratio, evidence$1));
    } else {
      var this$3 = top.w(i);
      outTop.a9(new $c_Ltrivalibs_graphics_geometry_LineVertex(this$3.l, this$3.F, this$3.n, this$3.i, this$3.q));
      var this$4 = bottom.w(i);
      outBottom.a9(new $c_Ltrivalibs_graphics_geometry_LineVertex(this$4.l, this$4.F, this$4.n, this$4.i, this$4.q));
    }
    i = ((1 + i) | 0);
  }
  return new $c_T2(outTop, outBottom);
});
$p.cp = (function(a, b) {
  return ((a.r * b.s) - (a.s * b.r));
});
$p.eY = (function(ref, pos, width, length, uvX, uvY, localUvX) {
  var x$proxy6 = pos.r;
  var _1 = Math.fround(x$proxy6);
  var x$proxy7 = pos.s;
  var _2 = Math.fround(x$proxy7);
  var baseOffset$proxy1 = (ref.off | 0);
  ref.dv.setFloat32(baseOffset$proxy1, _1, true);
  var tailOffset = ((4 + baseOffset$proxy1) | 0);
  ref.dv.setFloat32(tailOffset, _2, true);
  var _1$1 = Math.fround(width);
  var baseOffset$proxy2 = ((8 + (ref.off | 0)) | 0);
  ref.dv.setFloat32(baseOffset$proxy2, _1$1, true);
  var _1$2 = Math.fround(length);
  var baseOffset$proxy3 = ((12 + (ref.off | 0)) | 0);
  ref.dv.setFloat32(baseOffset$proxy3, _1$2, true);
  var _1$3 = Math.fround(uvX);
  var _2$1 = Math.fround(uvY);
  var baseOffset$proxy4 = ((16 + (ref.off | 0)) | 0);
  ref.dv.setFloat32(baseOffset$proxy4, _1$3, true);
  var tailOffset$5 = ((4 + baseOffset$proxy4) | 0);
  ref.dv.setFloat32(tailOffset$5, _2$1, true);
  var _1$4 = Math.fround(localUvX);
  var _2$2 = Math.fround(uvY);
  var baseOffset$proxy5 = ((24 + (ref.off | 0)) | 0);
  ref.dv.setFloat32(baseOffset$proxy5, _1$4, true);
  var tailOffset$7 = ((4 + baseOffset$proxy5) | 0);
  ref.dv.setFloat32(tailOffset$7, _2$2, true);
});
var $d_Ltrivalibs_graphics_geometry_line2d$package$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_line2d$package$, "trivalibs.graphics.geometry.line2d$package$", ({
  bW: 1
}));
var $n_Ltrivalibs_graphics_geometry_line2d$package$;
function $m_Ltrivalibs_graphics_geometry_line2d$package$() {
  if ((!$n_Ltrivalibs_graphics_geometry_line2d$package$)) {
    $n_Ltrivalibs_graphics_geometry_line2d$package$ = new $c_Ltrivalibs_graphics_geometry_line2d$package$();
  }
  return $n_Ltrivalibs_graphics_geometry_line2d$package$;
}
function $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__cubicBezier__D__O__O__O__O__Ltrivalibs_graphics_math_Vec2Base__O($thiz, t, a, c1, c2, b, x$6) {
  var oneT = (1.0 - t);
  var oneT2 = (oneT * oneT);
  var oneT3 = (oneT2 * oneT);
  var t2 = (t * t);
  var t3 = (t2 * t);
  var w1 = (3.0 * (oneT2 * t));
  var w2 = (3.0 * (oneT * t2));
  return new $c_Ltrivalibs_graphics_math_cpu_Vec2((((((+x$6.x(a)) * oneT3) + ((+x$6.x(c1)) * w1)) + ((+x$6.x(c2)) * w2)) + ((+x$6.x(b)) * t3)), (((((+x$6.y(a)) * oneT3) + ((+x$6.y(c1)) * w1)) + ((+x$6.y(c2)) * w2)) + ((+x$6.y(b)) * t3)));
}
function $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec2(((+x$2.x(v)) + (+x$2.x(other))), ((+x$2.y(v)) + (+x$2.y(other))));
}
function $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec2(((+x$2.x(v)) - (+x$2.x(other))), ((+x$2.y(v)) - (+x$2.y(other))));
}
function $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec2Base__D__O($thiz, v, x$2, scalar) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec2(((+x$2.x(v)) * scalar), ((+x$2.y(v)) * scalar));
}
function $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__divScalar__O__Ltrivalibs_graphics_math_Vec2Base__D__O($thiz, v, x$2, scalar) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec2(((+x$2.x(v)) / scalar), ((+x$2.y(v)) / scalar));
}
function $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec2Base__O($thiz, v, x$2) {
  return $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__divScalar__O__Ltrivalibs_graphics_math_Vec2Base__D__O($thiz, v, x$2, $f_Ltrivalibs_graphics_math_Vec2Base__length__O__D(x$2, v));
}
function $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__mixScalar__O__Ltrivalibs_graphics_math_Vec2Base__O__D__O($thiz, v, x$2, b, t) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec2((((+x$2.x(v)) * (1.0 - t)) + ((+x$2.x(b)) * t)), (((+x$2.y(v)) * (1.0 - t)) + ((+x$2.y(b)) * t)));
}
function $f_Ltrivalibs_graphics_math_Vec2MutableOps__set__O__Ltrivalibs_graphics_math_Vec2Mutable__O__Ltrivalibs_graphics_math_Vec2Base__V($thiz, v, x$2, other, x$4) {
  x$2.eZ(v, (+x$4.x(other)));
  x$2.f1(v, (+x$4.y(other)));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec2(x, y) {
  this.r = 0.0;
  this.s = 0.0;
  this.r = x;
  this.s = y;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec2.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec2;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec2() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec2.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec2 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec2, "trivalibs.graphics.math.cpu.Vec2", ({
  c8: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec3(x, y, z) {
  this.cF = 0.0;
  this.cG = 0.0;
  this.cH = 0.0;
  this.cF = x;
  this.cG = y;
  this.cH = z;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec3.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec3;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec3() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec3.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec3 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3, "trivalibs.graphics.math.cpu.Vec3", ({
  cb: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec4(x, y, z, w) {
  this.c1 = 0.0;
  this.c2 = 0.0;
  this.c3 = 0.0;
  this.c0 = 0.0;
  this.c1 = x;
  this.c2 = y;
  this.c3 = z;
  this.c0 = w;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec4.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec4;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec4() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec4.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec4 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4, "trivalibs.graphics.math.cpu.Vec4", ({
  ce: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_color$package$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_color$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_color$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_color$package$() {
}
$h_Ltrivalibs_graphics_math_cpu_color$package$.prototype = $p;
$p.fO = (function(c, base, ops) {
  var h6 = (6.0 * c.cF);
  var s = c.cG;
  var v = c.cH;
  var p$proxy1 = (((h6 + 0.0) % 6.0) - 3.0);
  var p$proxy2 = ((+Math.abs(p$proxy1)) - 1.0);
  var p$proxy3 = (((h6 + 4.0) % 6.0) - 3.0);
  var p$proxy4 = ((+Math.abs(p$proxy3)) - 1.0);
  var p$proxy5 = (((h6 + 2.0) % 6.0) - 3.0);
  var p$proxy6 = ((+Math.abs(p$proxy5)) - 1.0);
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v * (1.0 + ((((p$proxy2 < 0.0) ? 0.0 : ((p$proxy2 > 1.0) ? 1.0 : p$proxy2)) - 1.0) * s))), (v * (1.0 + ((((p$proxy4 < 0.0) ? 0.0 : ((p$proxy4 > 1.0) ? 1.0 : p$proxy4)) - 1.0) * s))), (v * (1.0 + ((((p$proxy6 < 0.0) ? 0.0 : ((p$proxy6 > 1.0) ? 1.0 : p$proxy6)) - 1.0) * s))));
});
var $d_Ltrivalibs_graphics_math_cpu_color$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_color$package$, "trivalibs.graphics.math.cpu.color$package$", ({
  ch: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_color$package$;
function $m_Ltrivalibs_graphics_math_cpu_color$package$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_color$package$)) {
    $n_Ltrivalibs_graphics_math_cpu_color$package$ = new $c_Ltrivalibs_graphics_math_cpu_color$package$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_color$package$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$() {
  this.dW = null;
  this.dX = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$.prototype = $p;
$p.gD = (function() {
  if ((!this.dX)) {
    this.dW = new $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$6();
    this.dX = true;
  }
  return this.dW;
});
var $d_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$, "trivalibs.graphics.math.cpu.vec2$package$Vec2Buffer$", ({
  ci: 1
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
$p.m = (function() {
  return this.e;
});
var $d_Ltrivalibs_graphics_math_gpu_Expr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_Expr, "trivalibs.graphics.math.gpu.Expr", ({
  O: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_expr$package$() {
  this.dY = null;
  this.dZ = false;
}
$p = $c_Ltrivalibs_graphics_math_gpu_expr$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_expr$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_expr$package$() {
}
$h_Ltrivalibs_graphics_math_gpu_expr$package$.prototype = $p;
$p.dh = (function(tex, uv, sampler) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("textureSample(" + tex.e) + ", ") + sampler.e) + ", ") + uv.e) + ")"));
});
$p.eJ = (function() {
  if ((!this.dZ)) {
    this.dY = new $c_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2();
    this.dZ = true;
  }
  return this.dY;
});
var $d_Ltrivalibs_graphics_math_gpu_expr$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_expr$package$, "trivalibs.graphics.math.gpu.expr$package$", ({
  cm: 1
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
  this.e0 = null;
  this.e1 = false;
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$.prototype = $p;
$p.fE = (function(v) {
  var s = ("" + v);
  return (((($f_T__indexOf__I__I(s, 46) >= 0) || ($f_T__indexOf__I__I(s, 69) >= 0)) || ($f_T__indexOf__I__I(s, 101) >= 0)) ? s : (s + ".0"));
});
$p.H = (function() {
  if ((!this.e1)) {
    this.e0 = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1();
    this.e1 = true;
  }
  return this.e0;
});
$p.f0 = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".xyz"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$, "trivalibs.graphics.math.gpu.float_expr$package$", ({
  co: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$;
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
$p.fn = (function(x, y, z, w) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((((("vec4<f32>(" + x.e) + ", ") + y.e) + ", ") + z.e) + ", ") + w.e) + ")"));
});
$p.di = (function(xyz, w) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("vec4<f32>(" + xyz.e) + ", ") + w.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_vec4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec4$, "trivalibs.graphics.math.gpu.vec4$", ({
  cx: 1
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
  this.T = null;
  this.T = value;
}
$p = $c_Ltrivalibs_graphics_painter_BindPair.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_BindPair;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_BindPair() {
}
$h_Ltrivalibs_graphics_painter_BindPair.prototype = $p;
var $d_Ltrivalibs_graphics_painter_BindPair = new $TypeData().i($c_Ltrivalibs_graphics_painter_BindPair, "trivalibs.graphics.painter.BindPair", ({
  cy: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_BlendState$() {
  this.e2 = null;
  $n_Ltrivalibs_graphics_painter_BlendState$ = this;
  this.e2 = new ($a_Ltrivalibs_graphics_painter_BlendState())(new ($a_Ltrivalibs_graphics_painter_BlendFn())("src-alpha", "one-minus-src-alpha"), new ($a_Ltrivalibs_graphics_painter_BlendFn())("one", "one-minus-src-alpha"));
  new ($a_Ltrivalibs_graphics_painter_BlendState())(new ($a_Ltrivalibs_graphics_painter_BlendFn())("src-alpha", "one"), new ($a_Ltrivalibs_graphics_painter_BlendFn())("one", "one"));
  new ($a_Ltrivalibs_graphics_painter_BlendState())(new ($a_Ltrivalibs_graphics_painter_BlendFn())("dst", "zero"), new ($a_Ltrivalibs_graphics_painter_BlendFn())("dst-alpha", "zero"));
}
$p = $c_Ltrivalibs_graphics_painter_BlendState$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_BlendState$;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_BlendState$() {
}
$h_Ltrivalibs_graphics_painter_BlendState$.prototype = $p;
var $d_Ltrivalibs_graphics_painter_BlendState$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_BlendState$, "trivalibs.graphics.painter.BlendState$", ({
  cz: 1
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
  while ((i < $thiz.aB)) {
    var b = $thiz.aC[i];
    if (((format === null) && (b.am > 0))) {
      format = b.aD;
    }
    i = ((1 + i) | 0);
  }
  $thiz.cK = format;
}
function $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V($thiz, index, verts, indices, widenTo32) {
  while ((($thiz.aC.length | 0) <= index)) {
    $thiz.aC.push(new $c_Ltrivalibs_graphics_painter_FormBuffers());
  }
  var b = $thiz.aC[index];
  $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_graphics_painter_FormBuffers__Ltrivalibs_bufferdata_BufferView__V($thiz, b, verts);
  if ((indices !== null)) {
    $p_Ltrivalibs_graphics_painter_Form__uploadIndices__Ltrivalibs_graphics_painter_FormBuffers__sjs_js_typedarray_TypedArray__Z__V($thiz, b, indices, widenTo32);
  } else {
    b.am = 0;
    b.bn = 0;
  }
}
function $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_graphics_painter_FormBuffers__Ltrivalibs_bufferdata_BufferView__V($thiz, b, verts) {
  var data = verts.dv.buffer;
  var size = (data.byteLength | 0);
  var p = ((-4) & ((3 + size) | 0));
  var padded = ((p < 4) ? 4 : p);
  if (((b.an === null) || (b.cN < padded))) {
    if ((b.an !== null)) {
      var opt$proxy4 = b.an;
      opt$proxy4.destroy();
    }
    b.an = $thiz.bm.d.createBuffer(({
      "size": padded,
      "usage": 40
    }));
    b.cN = padded;
  }
  $thiz.bm.U.writeBuffer(b.an, 0.0, $p_Ltrivalibs_graphics_painter_Form__alignedData__sjs_js_typedarray_ArrayBuffer__sjs_js_typedarray_ArrayBuffer($thiz, data));
  b.c4 = size;
  b.aY = (verts.off | 0);
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
    b.aD = "uint32";
  } else if ((!(!(raw instanceof Uint16Array)))) {
    data = raw.buffer;
    count = (raw.length | 0);
    b.aD = "uint16";
  } else {
    data = raw.buffer;
    count = (raw.length | 0);
    b.aD = "uint32";
  }
  var size = (data.byteLength | 0);
  var p = ((-4) & ((3 + size) | 0));
  var padded = ((p < 4) ? 4 : p);
  if (((b.al === null) || (b.cM < padded))) {
    if ((b.al !== null)) {
      var opt$proxy8 = b.al;
      opt$proxy8.destroy();
    }
    b.al = $thiz.bm.d.createBuffer(({
      "size": padded,
      "usage": 24
    }));
    b.cM = padded;
  }
  $thiz.bm.U.writeBuffer(b.al, 0.0, $p_Ltrivalibs_graphics_painter_Form__alignedData__sjs_js_typedarray_ArrayBuffer__sjs_js_typedarray_ArrayBuffer($thiz, data));
  b.bn = size;
  b.am = count;
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
  this.bm = null;
  this.aC = null;
  this.aB = 0;
  this.cL = null;
  this.cJ = null;
  this.cK = null;
  this.bm = painter;
  this.aC = [];
  this.aB = 0;
  this.cL = "triangle-list";
  this.cJ = "ccw";
  this.cK = null;
}
$p = $c_Ltrivalibs_graphics_painter_Form.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Form;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Form() {
}
$h_Ltrivalibs_graphics_painter_Form.prototype = $p;
$p.ds = (function(geometry, vertices, geometries, verticesAll, topology, frontFace) {
  if ((topology !== (void 0))) {
    this.cL = topology;
  }
  if ((frontFace !== (void 0))) {
    this.cJ = frontFace;
  }
  if ((geometry !== (void 0))) {
    $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, 0, geometry.cD, geometry.bY, false);
    this.aB = 1;
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  if ((vertices !== (void 0))) {
    $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, 0, vertices, null, false);
    this.aB = 1;
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  if ((geometries !== (void 0))) {
    var use32 = false;
    var i = 0;
    while ((i < (geometries.length | 0))) {
      var idx = geometries[i].bY;
      if (((idx !== null) && (!(!(idx instanceof Uint32Array))))) {
        use32 = true;
      }
      i = ((1 + i) | 0);
    }
    i = 0;
    while ((i < (geometries.length | 0))) {
      var geo = geometries[i];
      $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, i, geo.cD, geo.bY, use32);
      i = ((1 + i) | 0);
    }
    this.aB = (geometries.length | 0);
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  if ((verticesAll !== (void 0))) {
    var i$1 = 0;
    while ((i$1 < (verticesAll.length | 0))) {
      $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, i$1, verticesAll[i$1], null, false);
      i$1 = ((1 + i$1) | 0);
    }
    this.aB = (verticesAll.length | 0);
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Form = new $TypeData().i($c_Ltrivalibs_graphics_painter_Form, "trivalibs.graphics.painter.Form", ({
  cA: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_FormBuffers() {
  this.an = null;
  this.cN = 0;
  this.c4 = 0;
  this.aY = 0;
  this.al = null;
  this.cM = 0;
  this.bn = 0;
  this.am = 0;
  this.aD = null;
  this.an = null;
  this.cN = 0;
  this.c4 = 0;
  this.aY = 0;
  this.al = null;
  this.cM = 0;
  this.bn = 0;
  this.am = 0;
  this.aD = "uint16";
}
$p = $c_Ltrivalibs_graphics_painter_FormBuffers.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_FormBuffers;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_FormBuffers() {
}
$h_Ltrivalibs_graphics_painter_FormBuffers.prototype = $p;
var $d_Ltrivalibs_graphics_painter_FormBuffers = new $TypeData().i($c_Ltrivalibs_graphics_painter_FormBuffers, "trivalibs.graphics.painter.FormBuffers", ({
  cB: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter) {
  this.c5 = null;
  this.c5 = [];
}
$p = $c_Ltrivalibs_graphics_painter_InstanceList.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_InstanceList;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_InstanceList() {
}
$h_Ltrivalibs_graphics_painter_InstanceList.prototype = $p;
$p.t = (function() {
  return (this.c5.length | 0);
});
var $d_Ltrivalibs_graphics_painter_InstanceList = new $TypeData().i($c_Ltrivalibs_graphics_painter_InstanceList, "trivalibs.graphics.painter.InstanceList", ({
  cC: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_LayerBindCache(panelId, epoch, valueGroup, panelGroup) {
  this.e4 = 0;
  this.e3 = 0;
  this.cR = null;
  this.cQ = null;
  this.e4 = panelId;
  this.e3 = epoch;
  this.cR = valueGroup;
  this.cQ = panelGroup;
}
$p = $c_Ltrivalibs_graphics_painter_LayerBindCache.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_LayerBindCache;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_LayerBindCache() {
}
$h_Ltrivalibs_graphics_painter_LayerBindCache.prototype = $p;
var $d_Ltrivalibs_graphics_painter_LayerBindCache = new $TypeData().i($c_Ltrivalibs_graphics_painter_LayerBindCache, "trivalibs.graphics.painter.LayerBindCache", ({
  cE: 1
}));
function $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var w = ($thiz.bp.width | 0);
  var h = ($thiz.bp.height | 0);
  panel.fy(w, h);
  var msaa = panel.b2;
  var encoder = $thiz.d.createCommandEncoder();
  var panelFormats = panel.dj();
  var colorAttachments = [];
  var t = 0;
  while ((t < panel.gu())) {
    if ((panel.ca !== null)) {
      var opt$proxy2 = panel.ca;
      if (msaa) {
        var _2 = panel.eL(t);
        var TextureViewBundle_this = panel.o[t];
        var _2$1 = TextureViewBundle_this.V[0];
        var value = opt$proxy2.c1;
        var value$1 = opt$proxy2.c2;
        var value$2 = opt$proxy2.c3;
        var value$3 = opt$proxy2.c0;
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
        var TextureViewBundle_this$2 = panel.o[t];
        var _2$3 = TextureViewBundle_this$2.V[0];
        var value$4 = opt$proxy2.c1;
        var value$5 = opt$proxy2.c2;
        var value$6 = opt$proxy2.c3;
        var value$7 = opt$proxy2.c0;
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
      var _2$5 = panel.eL(t);
      var TextureViewBundle_this$3 = panel.o[t];
      var _2$6 = TextureViewBundle_this$3.V[0];
      var attachment = ({
        "view": _2$5,
        "resolveTarget": _2$6,
        "loadOp": "load",
        "storeOp": "store"
      });
    } else {
      var TextureViewBundle_this$4 = panel.o[t];
      var _2$7 = TextureViewBundle_this$4.V[0];
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
  if (panel.bw) {
    var _2$8 = panel.eG();
    passDesc.depthStencilAttachment = ({
      "view": _2$8,
      "depthLoadOp": "clear",
      "depthStoreOp": "store",
      "depthClearValue": 1.0
    });
  }
  var shapePass = encoder.beginRenderPass(passDesc);
  var i = 0;
  while ((i < (panel.cb.length | 0))) {
    $p_Ltrivalibs_graphics_painter_Painter__renderShapeOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shape__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_Panel__V($thiz, shapePass, panel.cb[i], panel.bw, msaa, panelFormats, panel);
    i = ((1 + i) | 0);
  }
  shapePass.end();
  $thiz.U.submit([encoder.finish()]);
  if (panel.bt) {
    $p_Ltrivalibs_graphics_painter_Painter__resolvePanelDepth__Ltrivalibs_graphics_painter_Panel__V($thiz, panel);
  }
  var curEncoder = null;
  var curPass = null;
  var j = 0;
  while ((j < (panel.ao.length | 0))) {
    var layer = panel.ao[j];
    var needsPingPong = layer.eC();
    if ((layer.bo >= 0)) {
      if ((curPass !== null)) {
        curPass.end();
        $thiz.U.submit([curEncoder.finish()]);
        curPass = null;
      }
      var mipDstView = panel.o[0].V[layer.bo];
      var mipSrcView = ((layer.c6 >= 0) ? panel.o[0].V[layer.c6] : panel.cu());
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
      $thiz.U.submit([enc.finish()]);
    } else if (needsPingPong) {
      if ((curPass !== null)) {
        curPass.end();
        $thiz.U.submit([curEncoder.finish()]);
        curPass = null;
      }
      var enc$2 = $thiz.d.createCommandEncoder();
      var _2$10 = panel.g8();
      var _2$11 = [({
        "view": _2$10,
        "loadOp": "load",
        "storeOp": "store"
      })];
      var ppPass = enc$2.beginRenderPass(({
        "colorAttachments": _2$11
      }));
      $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V($thiz, ppPass, layer, false, false, panelFormats, panel.cu(), panel);
      ppPass.end();
      $thiz.U.submit([enc$2.finish()]);
      panel.gs();
    } else {
      if ((curPass === null)) {
        curEncoder = $thiz.d.createCommandEncoder();
        var $x_1 = curEncoder;
        var _2$12 = panel.cu();
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
    $thiz.U.submit([curEncoder.finish()]);
  }
  var hasMipTargetLayers = false;
  var mi = 0;
  while ((mi < (panel.ao.length | 0))) {
    if ((panel.ao[mi].bo >= 0)) {
      hasMipTargetLayers = true;
    }
    mi = ((1 + mi) | 0);
  }
  if (((panel.dn() > 1) && (!hasMipTargetLayers))) {
    $p_Ltrivalibs_graphics_painter_Painter__generateMipmaps__Ltrivalibs_graphics_painter_Panel__V($thiz, panel);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__blitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz) {
  if ((!$thiz.ea)) {
    $thiz.e9 = $thiz.d.createSampler(({
      "magFilter": "nearest",
      "minFilter": "nearest"
    }));
    $thiz.ea = true;
  }
  return $thiz.e9;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz) {
  if ((!$thiz.e6)) {
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
    $thiz.e5 = $x_1;
    $thiz.e6 = true;
  }
  return $thiz.e5;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitPipeline__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz) {
  if ((!$thiz.e8)) {
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
    var f$proxy4 = $thiz.aZ;
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
    $thiz.e7 = $x_2;
    $thiz.e8 = true;
  }
  return $thiz.e7;
}
function $p_Ltrivalibs_graphics_painter_Painter__depthResolveBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz) {
  if ((!$thiz.ed)) {
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
    $thiz.ec = $x_1;
    $thiz.ed = true;
  }
  return $thiz.ec;
}
function $p_Ltrivalibs_graphics_painter_Painter__depthResolvePipeline__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz) {
  if ((!$thiz.ef)) {
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
    $thiz.ee = $x_2;
    $thiz.ef = true;
  }
  return $thiz.ee;
}
function $p_Ltrivalibs_graphics_painter_Painter__resolvePanelDepth__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var encoder = $thiz.d.createCommandEncoder();
  var _2 = [];
  var _2$1 = panel.gh();
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
  var _2$4 = panel.eG();
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
  $thiz.U.submit([encoder.finish()]);
}
function $p_Ltrivalibs_graphics_painter_Painter__mipBlitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz) {
  if ((!$thiz.eh)) {
    $thiz.eg = $thiz.d.createSampler(({
      "magFilter": "linear",
      "minFilter": "linear"
    }));
    $thiz.eh = true;
  }
  return $thiz.eg;
}
function $p_Ltrivalibs_graphics_painter_Painter__getMipBlitPipeline__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, format) {
  if ((!(!(!(!$thiz.c7.hasOwnProperty(format)))))) {
    return $thiz.c7[format];
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
    $thiz.c7[format] = p;
    return p;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__generateMipmaps__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var mipCount = panel.dn();
  if ((mipCount <= 1)) {
    return (void 0);
  }
  var fmt = (((panel.aF.length | 0) > 0) ? panel.aF[0] : $thiz.aZ);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getMipBlitPipeline__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, fmt);
  var i = 1;
  while ((i < mipCount)) {
    var srcView = panel.o[0].V[((i - 1) | 0)];
    var dstView = panel.o[0].V[i];
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
    $thiz.U.submit([encoder.finish()]);
    i = ((1 + i) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, bindings, panelBindings) {
  $thiz.P.length = (bindings.length | 0);
  var i = 0;
  while ((i < (bindings.length | 0))) {
    $thiz.P[i] = bindings[i];
    i = ((1 + i) | 0);
  }
  $thiz.z.length = (panelBindings.length | 0);
  var j = 0;
  while ((j < (panelBindings.length | 0))) {
    $thiz.z[j] = panelBindings[j];
    j = ((1 + j) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shade, workBindings, workPanelBindings) {
  var dict = panel.cV;
  var keys = Object.keys(dict);
  var i = 0;
  while ((i < (keys.length | 0))) {
    var name = keys[i];
    var value = dict[name];
    if ((!(!(!(!shade.a8.hasOwnProperty(name)))))) {
      var idx = (shade.a8[name] | 0);
      if (((idx >= (workBindings.length | 0)) || (workBindings[idx] === null))) {
        while (((workBindings.length | 0) <= idx)) {
          workBindings.push(null);
        }
        workBindings[idx] = value;
      }
    } else if ((!(!(!(!shade.aH.hasOwnProperty(name)))))) {
      var idx$2 = (shade.aH[name] | 0);
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
  while ((i < (inst.eD().length | 0))) {
    if ((inst.eD()[i] !== null)) {
      while (((workBindings.length | 0) <= i)) {
        workBindings.push(null);
      }
      workBindings[i] = inst.eD()[i];
    }
    i = ((1 + i) | 0);
  }
  var j = 0;
  while ((j < (inst.eN().length | 0))) {
    if ((inst.eN()[j] !== null)) {
      while (((workPanelBindings.length | 0) <= j)) {
        workPanelBindings.push(null);
      }
      workPanelBindings[j] = inst.eN()[j];
    }
    j = ((1 + j) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel) {
  return ((panel !== null) && ((Object.keys(panel.cV).length | 0) > 0));
}
function $p_Ltrivalibs_graphics_painter_Painter__buildValueBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, bindings) {
  if ((((bindings.length | 0) > 0) && (shade.cW !== null))) {
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
    var _2 = shade.cW;
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
  if ((shade.ce !== null)) {
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
        var view = ((!(!pb.depth)) ? pb.panel.fs() : (((pb.mipLevel | 0) < 0) ? pb.panel.o[(pb.index | 0)].em : pb.panel.o[(pb.index | 0)].V[(pb.mipLevel | 0)]));
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
      var _2 = shade.ce;
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
  var fmts = ((formats !== null) ? formats : [$thiz.aZ]);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, shape.M, shape.cY, fmts, depthTest, multisample, shape.by.cL, shape.cZ, shape.by.cJ, shape.by.cK);
  pass.setPipeline(pipeline);
  var form = shape.by;
  var bufferCount = form.aB;
  var instanceCount = shape.d0.t();
  var hasPanelBinds = $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel);
  if ((instanceCount === 0)) {
    if (hasPanelBinds) {
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, shape.G, shape.cg);
      $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shape.M, $thiz.P, $thiz.z);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.M, $thiz.P);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.M, $thiz.z, null);
    } else {
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.M, shape.G);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.M, shape.cg, null);
    }
    var b = 0;
    while ((b < bufferCount)) {
      var buf = form.aC[b];
      if ((buf.aY > 0)) {
        pass.setVertexBuffer(0, buf.an, 0.0, buf.c4);
        if ((buf.am > 0)) {
          pass.setIndexBuffer(buf.al, buf.aD, 0.0, buf.bn);
          pass.drawIndexed(buf.am);
        } else {
          pass.draw(buf.aY);
        }
      }
      b = ((1 + b) | 0);
    }
  } else {
    var i = 0;
    while ((i < instanceCount)) {
      var inst = shape.d0.c5[i];
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, shape.G, shape.cg);
      if (hasPanelBinds) {
        $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shape.M, $thiz.P, $thiz.z);
      }
      $p_Ltrivalibs_graphics_painter_Painter__applyInstanceBindings__Ltrivalibs_graphics_painter_Instance__sjs_js_Array__sjs_js_Array__V($thiz, inst, $thiz.P, $thiz.z);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.M, $thiz.P);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.M, $thiz.z, null);
      var b$2 = 0;
      while ((b$2 < bufferCount)) {
        var buf$2 = form.aC[b$2];
        if ((buf$2.aY > 0)) {
          pass.setVertexBuffer(0, buf$2.an, 0.0, buf$2.c4);
          if ((buf$2.am > 0)) {
            pass.setIndexBuffer(buf$2.al, buf$2.aD, 0.0, buf$2.bn);
            pass.drawIndexed(buf$2.am);
          } else {
            pass.draw(buf$2.aY);
          }
        }
        b$2 = ((1 + b$2) | 0);
      }
      i = ((1 + i) | 0);
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V($thiz, pass, layer, depthTest, multisample, formats, srcView, panel) {
  var fmts = ((formats !== null) ? formats : [$thiz.aZ]);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, layer.v, layer.cO, fmts, depthTest, multisample, "triangle-list", "none", "ccw", null);
  pass.setPipeline(pipeline);
  var instanceCount = layer.cP.t();
  var hasPanelBinds = $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel);
  if ((instanceCount === 0)) {
    if (hasPanelBinds) {
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, layer.O, layer.u);
      $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, layer.v, $thiz.P, $thiz.z);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, layer.v, $thiz.P);
      var effectiveSrcView = (((($thiz.z.length | 0) > 0) && ($thiz.z[0] !== null)) ? null : srcView);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.v, $thiz.z, effectiveSrcView);
    } else {
      var c = layer.a6;
      if (((((c !== null) && (panel !== null)) && (c.e4 === panel.cU)) && (c.e3 === panel.aE))) {
        if ((c.cR !== null)) {
          pass.setBindGroup(0, c.cR);
        }
        if ((c.cQ !== null)) {
          pass.setBindGroup(1, c.cQ);
        }
      } else {
        var vg = $p_Ltrivalibs_graphics_painter_Painter__buildValueBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, layer.v, layer.O);
        var pg = $p_Ltrivalibs_graphics_painter_Painter__buildPanelBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, layer.v, layer.u, srcView);
        if ((vg !== null)) {
          pass.setBindGroup(0, vg);
        }
        if ((pg !== null)) {
          pass.setBindGroup(1, pg);
        }
        layer.a6 = ((panel !== null) ? new $c_Ltrivalibs_graphics_painter_LayerBindCache(panel.cU, panel.aE, vg, pg) : null);
      }
    }
    pass.draw(3);
  } else {
    var i = 0;
    while ((i < instanceCount)) {
      var inst = layer.cP.c5[i];
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, layer.O, layer.u);
      if (hasPanelBinds) {
        $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, layer.v, $thiz.P, $thiz.z);
      }
      $p_Ltrivalibs_graphics_painter_Painter__applyInstanceBindings__Ltrivalibs_graphics_painter_Instance__sjs_js_Array__sjs_js_Array__V($thiz, inst, $thiz.P, $thiz.z);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, layer.v, $thiz.P);
      var effectiveSrcView$2 = (((($thiz.z.length | 0) > 0) && ($thiz.z[0] !== null)) ? null : srcView);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.v, $thiz.z, effectiveSrcView$2);
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
  var key = (((((((((((((((shade.ek + "|") + $p_Ltrivalibs_graphics_painter_Painter__blendKeyStr__Ltrivalibs_graphics_painter_BlendState__T($thiz, blendState)) + "|") + formats.join(",")) + "|") + depthTest) + "|") + multisample) + "|") + topology) + "|") + cullMode) + "|") + frontFace) + stripKey);
  var cached = $thiz.cS[key];
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
    if ((shade.cX !== null)) {
      var _2 = shade.cf;
      var _2$1 = [shade.cX];
      var vertexDescriptor = ({
        "module": _2,
        "entryPoint": "vs_main",
        "buffers": _2$1
      });
    } else {
      var _2$2 = shade.cf;
      var vertexDescriptor = ({
        "module": _2$2,
        "entryPoint": "vs_main"
      });
    }
    var _2$3 = shade.el;
    var _2$4 = shade.cf;
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
    var p = $thiz.d.createRenderPipeline(desc);
    $thiz.cS[key] = p;
    return p;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__bindingEntry__I__O__sjs_js_Dynamic($thiz, i, b) {
  if ((b instanceof $c_Ltrivalibs_graphics_buffers_BufferBinding)) {
    var _2 = b.az;
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
  this.U = null;
  this.bp = null;
  this.eb = null;
  this.aZ = null;
  this.cS = null;
  this.Q = 0;
  this.cT = null;
  this.ei = null;
  this.ej = false;
  this.e9 = null;
  this.ea = false;
  this.e5 = null;
  this.e6 = false;
  this.e7 = null;
  this.e8 = false;
  this.ec = null;
  this.ed = false;
  this.ee = null;
  this.ef = false;
  this.eg = null;
  this.eh = false;
  this.c7 = null;
  this.P = null;
  this.z = null;
  this.d = device;
  this.U = queue;
  this.bp = canvas;
  this.eb = context;
  this.aZ = preferredFormat;
  this.cS = ({});
  this.Q = 0;
  this.cT = [];
  this.c7 = ({});
  this.P = [];
  this.z = [];
}
$p = $c_Ltrivalibs_graphics_painter_Painter.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Painter;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Painter() {
}
$h_Ltrivalibs_graphics_painter_Painter.prototype = $p;
$p.fA = (function(w, h) {
  var k = 0;
  while ((k < (this.cT.length | 0))) {
    this.cT[k].gL(w, h);
    k = ((1 + k) | 0);
  }
});
$p.gF = (function() {
  return (this.bp.width | 0);
});
$p.fN = (function() {
  return (this.bp.height | 0);
});
$p.gi = (function(magFilter, minFilter, mipmapFilter, addressMode, addressModeU, addressModeV) {
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
$p.eS = (function() {
  if ((!this.ej)) {
    this.ei = this.gi("linear", "linear", "linear", "clamp-to-edge", (void 0), (void 0));
    this.ej = true;
  }
  return this.ei;
});
$p.fF = (function(geometry, vertices, geometries, verticesAll, topology, frontFace) {
  return new $c_Ltrivalibs_graphics_painter_Form(this).ds(geometry, vertices, geometries, verticesAll, topology, frontFace);
});
$p.gn = (function(form, shade, cullMode, blendState) {
  return new $c_Ltrivalibs_graphics_painter_Shape(this, form, shade).gm(cullMode, blendState);
});
$p.dm = (function(shade, blendState, mipSource, mipTarget) {
  return new $c_Ltrivalibs_graphics_painter_Layer(this, shade).gl(blendState, mipSource, mipTarget);
});
$p.ct = (function(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers) {
  return new $c_Ltrivalibs_graphics_painter_Panel(this).gk(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers);
});
$p.go = (function(panel) {
  var encoder = this.d.createCommandEncoder();
  var swapChainView = this.eb.getCurrentTexture().createView();
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
  var _2$2 = panel.cu();
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
  this.U.submit([encoder.finish()]);
});
$p.g6 = (function(p) {
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(this, p);
  this.go(p);
});
var $d_Ltrivalibs_graphics_painter_Painter = new $TypeData().i($c_Ltrivalibs_graphics_painter_Painter, "trivalibs.graphics.painter.Painter", ({
  cF: 1
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
$p.fR = (function(canvas) {
  var maybeGpu = $m_Ltrivalibs_graphics_painter_WebGPU$().fI();
  if ((maybeGpu === (void 0))) {
    return Promise.reject(Error("WebGPU is not supported"));
  } else {
    var promise$proxy1 = maybeGpu.requestAdapter();
    var promise$proxy3 = promise$proxy1.then(((value$2) => {
      if ((value$2 === null)) {
        throw new $c_sjs_js_JavaScriptException(Error("Failed to get WebGPU adapter")).ay;
      } else {
        return value$2;
      }
    }));
    var f$proxy11 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((adapter$2) => {
      var promise$proxy2 = adapter$2.requestDevice();
      var f$proxy10 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((device$2) => {
        var queue = device$2.queue;
        var context = $m_Ltrivalibs_graphics_painter_WebGPU$().fH(canvas);
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
            painter.fA(rw, rh);
          }
        }));
        observer.observe(canvas);
        return painter;
      }));
      return promise$proxy2.then($m_sjs_js_Any$().bC(f$proxy10));
    }));
    return promise$proxy3.then($m_sjs_js_Any$().bC(f$proxy11));
  }
});
$p.fQ = (function(canvas, setup) {
  var promise$proxy4 = this.fR(canvas);
  return promise$proxy4.then($m_sjs_js_Any$().bC(setup));
});
var $d_Ltrivalibs_graphics_painter_Painter$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_Painter$, "trivalibs.graphics.painter.Painter$", ({
  cG: 1
}));
var $n_Ltrivalibs_graphics_painter_Painter$;
function $m_Ltrivalibs_graphics_painter_Painter$() {
  if ((!$n_Ltrivalibs_graphics_painter_Painter$)) {
    $n_Ltrivalibs_graphics_painter_Painter$ = new $c_Ltrivalibs_graphics_painter_Painter$();
  }
  return $n_Ltrivalibs_graphics_painter_Painter$;
}
function $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V($thiz) {
  if (($thiz.br !== null)) {
    var opt$proxy4 = $thiz.br;
    opt$proxy4.destroy();
  }
  if (($thiz.bu !== null)) {
    var opt$proxy6 = $thiz.bu;
    opt$proxy6.destroy();
  }
  var depthUsage = ($thiz.bq ? 20 : 16);
  var $x_1 = $thiz.aG.d;
  var value = $thiz.b1;
  var value$1 = $thiz.b0;
  var _2 = ({
    "width": value,
    "height": value$1
  });
  var _2$1 = ($thiz.b2 ? 4 : 1);
  var depthTex = $x_1.createTexture(({
    "size": _2,
    "format": "depth24plus",
    "usage": depthUsage,
    "sampleCount": _2$1
  }));
  $thiz.br = depthTex;
  $thiz.c8 = depthTex.createView();
  if (($thiz.bq && $thiz.b2)) {
    var $x_2 = $thiz.aG.d;
    var value$2 = $thiz.b1;
    var value$3 = $thiz.b0;
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
    $thiz.bu = resTex;
    $thiz.bv = resTex.createView();
    $thiz.bt = true;
  } else {
    $thiz.bu = null;
    $thiz.bv = null;
    $thiz.bt = false;
  }
}
function $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z($thiz) {
  var i = 0;
  while ((i < ($thiz.ao.length | 0))) {
    if ($thiz.ao[i].eC()) {
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
  this.aG = null;
  this.cd = 0;
  this.cc = 0;
  this.ca = null;
  this.bw = false;
  this.b2 = false;
  this.bx = 0;
  this.aF = null;
  this.cb = null;
  this.ao = null;
  this.cV = null;
  this.cU = 0;
  this.aE = 0;
  this.a7 = null;
  this.o = null;
  this.br = null;
  this.c8 = null;
  this.bq = false;
  this.bu = null;
  this.bv = null;
  this.bt = false;
  this.bs = null;
  this.c9 = null;
  this.b1 = 0;
  this.b0 = 0;
  this.aG = painter;
  this.cd = 0;
  this.cc = 0;
  this.ca = null;
  this.bw = false;
  this.b2 = false;
  this.bx = 1;
  this.aF = [];
  this.cb = [];
  this.ao = [];
  this.cV = ({});
  $m_Ltrivalibs_graphics_painter_panel$package$().ch = ((1 + $m_Ltrivalibs_graphics_painter_panel$package$().ch) | 0);
  this.cU = $m_Ltrivalibs_graphics_painter_panel$package$().ch;
  this.aE = 0;
  this.a7 = [];
  this.o = [];
  this.br = null;
  this.c8 = null;
  this.bq = false;
  this.bu = null;
  this.bv = null;
  this.bt = false;
  this.bs = [];
  this.c9 = [];
  this.b1 = 0;
  this.b0 = 0;
}
$p = $c_Ltrivalibs_graphics_painter_Panel.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Panel;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Panel() {
}
$h_Ltrivalibs_graphics_painter_Panel.prototype = $p;
$p.dn = (function() {
  if ((this.bx === 0)) {
    var a = this.b1;
    var b = this.b0;
    var maxDim = ((a > b) ? a : b);
    if ((maxDim <= 0)) {
      return 1;
    } else {
      var a$1 = maxDim;
      return ((1 + $doubleToInt(((+Math.log(a$1)) / (+Math.log(2.0))))) | 0);
    }
  } else {
    return this.bx;
  }
});
$p.dj = (function() {
  return (((this.aF.length | 0) === 0) ? [this.aG.aZ] : this.aF);
});
$p.gu = (function() {
  return (this.dj().length | 0);
});
$p.cu = (function() {
  var TextureViewBundle_this = this.o[0];
  return TextureViewBundle_this.V[0];
});
$p.g8 = (function() {
  var TextureViewBundle_this = this.o[1];
  return TextureViewBundle_this.V[0];
});
$p.eG = (function() {
  return this.c8;
});
$p.gh = (function() {
  return this.bv;
});
$p.eL = (function(index) {
  return this.c9[index];
});
$p.gs = (function() {
  var t = this.a7[0];
  this.a7[0] = this.a7[1];
  this.a7[1] = t;
  var sv = this.o[0];
  this.o[0] = this.o[1];
  this.o[1] = sv;
  this.aE = ((1 + this.aE) | 0);
});
$p.fs = (function() {
  if (((!this.bq) && (this.br !== null))) {
    this.bq = true;
    $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V(this);
  }
  return (this.bt ? this.bv : this.c8);
});
$p.gk = (function(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers) {
  if ((width !== (void 0))) {
    var v = (width | 0);
    this.cd = v;
  }
  if ((height !== (void 0))) {
    var v$1 = (height | 0);
    this.cc = v$1;
  }
  if ((clearColor !== (void 0))) {
    this.ca = ((clearColor === null) ? null : new $c_Ltrivalibs_graphics_math_cpu_Vec4(clearColor.c1, clearColor.c2, clearColor.c3, clearColor.c0));
  }
  if ((depthTest !== (void 0))) {
    var v$2 = (!(!depthTest));
    this.bw = v$2;
  }
  if ((multisample !== (void 0))) {
    var v$3 = (!(!multisample));
    this.b2 = v$3;
  }
  if ((mips !== (void 0))) {
    if ((!(!mips))) {
      this.bx = 0;
    }
  }
  if ((mipLevels !== (void 0))) {
    var v$5 = (mipLevels | 0);
    if ((v$5 > 0)) {
      this.bx = v$5;
    }
  }
  var x$1 = ((formats === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy1$1__O__O(this, format) : formats);
  if ((x$1 !== (void 0))) {
    this.aF = x$1;
  }
  var x$2 = ((shapes === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy2$1__O__O(this, shape) : shapes);
  if ((x$2 !== (void 0))) {
    this.cb = x$2;
  }
  var x$3 = ((layers === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy3$1__O__O(this, layer) : layers);
  if ((x$3 !== (void 0))) {
    this.ao = x$3;
  }
  if ((((this.aF.length | 0) > 1) && $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z(this))) {
    throw new $c_sjs_js_JavaScriptException(Error("Panel: MRT (multiple formats) cannot host auto-pong layers. Chain a single-format panel for post-processing instead.")).ay;
  }
  return this;
});
$p.fy = (function(canvasW, canvasH) {
  var targetW = ((this.cd === 0) ? canvasW : this.cd);
  var targetH = ((this.cc === 0) ? canvasH : this.cc);
  if (((targetW !== this.b1) || (targetH !== this.b0))) {
    var d = 0;
    while ((d < (this.a7.length | 0))) {
      this.a7[d].destroy();
      d = ((1 + d) | 0);
    }
    d = 0;
    while ((d < (this.bs.length | 0))) {
      this.bs[d].destroy();
      d = ((1 + d) | 0);
    }
    this.b1 = targetW;
    this.b0 = targetH;
    var mipCount = this.dn();
    var fmts = this.dj();
    var hasPong = $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z(this);
    this.a7 = [];
    this.o = [];
    this.bs = [];
    this.c9 = [];
    var i = 0;
    while ((i < (fmts.length | 0))) {
      var fmt = fmts[i];
      var $x_1 = this.aG.d;
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
      this.a7.push(tex);
      this.o.push($p_Ltrivalibs_graphics_painter_Panel__buildViews__Ltrivalibs_graphics_painter_GPUTexture__I__Ltrivalibs_graphics_painter_TextureViewBundle(this, tex, mipCount));
      if (this.b2) {
        var $x_2 = this.aG.d;
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
        this.bs.push(msaaTex);
        this.c9.push(msaaTex.createView());
      }
      i = ((1 + i) | 0);
    }
    if (hasPong) {
      var $x_3 = this.aG.d;
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
      this.a7.push(pongTex);
      this.o.push($p_Ltrivalibs_graphics_painter_Panel__buildViews__Ltrivalibs_graphics_painter_GPUTexture__I__Ltrivalibs_graphics_painter_TextureViewBundle(this, pongTex, mipCount));
    }
    if (this.bw) {
      $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V(this);
    }
    this.aE = ((1 + this.aE) | 0);
  }
});
var $d_Ltrivalibs_graphics_painter_Panel = new $TypeData().i($c_Ltrivalibs_graphics_painter_Panel, "trivalibs.graphics.painter.Panel", ({
  cH: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Shade(id, shaderModule, vertexBufferLayout, valueBindGroupLayout, panelBindGroupLayout, pipelineLayout, isLayer, uniformIndices, panelIndices) {
  this.ek = 0;
  this.cf = null;
  this.cX = null;
  this.cW = null;
  this.ce = null;
  this.el = null;
  this.a8 = null;
  this.aH = null;
  this.ek = id;
  this.cf = shaderModule;
  this.cX = vertexBufferLayout;
  this.cW = valueBindGroupLayout;
  this.ce = panelBindGroupLayout;
  this.el = pipelineLayout;
  this.a8 = uniformIndices;
  this.aH = panelIndices;
}
$p = $c_Ltrivalibs_graphics_painter_Shade.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Shade;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Shade() {
}
$h_Ltrivalibs_graphics_painter_Shade.prototype = $p;
var $d_Ltrivalibs_graphics_painter_Shade = new $TypeData().i($c_Ltrivalibs_graphics_painter_Shade, "trivalibs.graphics.painter.Shade", ({
  cI: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_TextureViewBundle(perMip, sampling) {
  this.V = null;
  this.em = null;
  this.V = perMip;
  this.em = sampling;
}
$p = $c_Ltrivalibs_graphics_painter_TextureViewBundle.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_TextureViewBundle;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_TextureViewBundle() {
}
$h_Ltrivalibs_graphics_painter_TextureViewBundle.prototype = $p;
var $d_Ltrivalibs_graphics_painter_TextureViewBundle = new $TypeData().i($c_Ltrivalibs_graphics_painter_TextureViewBundle, "trivalibs.graphics.painter.TextureViewBundle", ({
  cK: 1
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
$p.fI = (function() {
  return window.navigator.gpu;
});
$p.fH = (function(canvas) {
  return canvas.getContext("webgpu");
});
var $d_Ltrivalibs_graphics_painter_WebGPU$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_WebGPU$, "trivalibs.graphics.painter.WebGPU$", ({
  cL: 1
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
  this.ch = 0;
  this.ch = 0;
}
$p = $c_Ltrivalibs_graphics_painter_panel$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_panel$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_panel$package$() {
}
$h_Ltrivalibs_graphics_painter_panel$package$.prototype = $p;
var $d_Ltrivalibs_graphics_painter_panel$package$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_panel$package$, "trivalibs.graphics.painter.panel$package$", ({
  cM: 1
}));
var $n_Ltrivalibs_graphics_painter_panel$package$;
function $m_Ltrivalibs_graphics_painter_panel$package$() {
  if ((!$n_Ltrivalibs_graphics_painter_panel$package$)) {
    $n_Ltrivalibs_graphics_painter_panel$package$ = new $c_Ltrivalibs_graphics_painter_panel$package$();
  }
  return $n_Ltrivalibs_graphics_painter_panel$package$;
}
function $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($thiz, builtins) {
  var s = "";
  var i = 0;
  while ((i < (builtins.length | 0))) {
    var b = builtins[i];
    s = ((s + ((((", @builtin(" + b.bc) + ") ") + b.bb) + ": ")) + b.bd);
    i = ((1 + i) | 0);
  }
  return s;
}
function $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($thiz, structName, locNames, locTypes, builtins) {
  var array$1 = $m_sjs_js_ArrayOps$().f3($m_sjs_js_ArrayOps$().f2(locNames, new $c_sjs_js_WrappedArray(locTypes)));
  var len = (array$1.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    var $x_2 = i;
    var x0 = array$1[i];
    matchResult3: {
      var $x_1;
      if ((x0 !== null)) {
        var x11 = x0.K;
        if ((x11 !== null)) {
          var name = x11.K;
          var typ = x11.a2;
          var $x_1 = (((((("  @location(" + (x0.a2 | 0)) + ") ") + name) + ": ") + typ) + ",");
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
        var name$1 = x0$1.bb;
        var builtin = x0$1.bc;
        var typ$1 = x0$1.bd;
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
  var array$1 = $m_sjs_js_ArrayOps$().f3($m_sjs_js_ArrayOps$().f2(names, new $c_sjs_js_WrappedArray(types)));
  var len = (array$1.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    var $x_3 = i;
    var x0 = array$1[i];
    matchResult5: {
      var $x_2;
      if ((x0 !== null)) {
        var x20 = x0.K;
        if ((x20 !== null)) {
          var name = x20.K;
          var typ = x20.a2;
          var bindingIdx = (x0.a2 | 0);
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
  cQ: 1
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
  this.aq = null;
  this.aq = target;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_AssignTarget.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_AssignTarget;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_AssignTarget() {
}
$h_Ltrivalibs_graphics_shader_dsl_AssignTarget.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_AssignTarget = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_AssignTarget, "trivalibs.graphics.shader.dsl.AssignTarget", ({
  cR: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_FnRegistry() {
  this.d3 = null;
  this.aI = null;
  this.d3 = ({});
  this.aI = [];
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FnRegistry() {
}
$h_Ltrivalibs_graphics_shader_dsl_FnRegistry.prototype = $p;
$p.eW = (function(d) {
  if ((!(!(!(!(!this.d3.hasOwnProperty(d.name))))))) {
    this.d3[d.name] = true;
    var array = d.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      this.eW(array[i]);
      i = ((1 + i) | 0);
    }
    this.aI.push(d);
  }
});
var $d_Ltrivalibs_graphics_shader_dsl_FnRegistry = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FnRegistry, "trivalibs.graphics.shader.dsl.FnRegistry", ({
  cS: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$() {
  this.A = null;
  this.A = null;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FnRegistry$() {
}
$h_Ltrivalibs_graphics_shader_dsl_FnRegistry$.prototype = $p;
$p.gz = (function(d) {
  var r = this.A;
  if ((r !== null)) {
    r.eW(d);
  }
});
var $d_Ltrivalibs_graphics_shader_dsl_FnRegistry$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FnRegistry$, "trivalibs.graphics.shader.dsl.FnRegistry$", ({
  cT: 1
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
  this.bz = null;
  this.ae = null;
  this.fe = null;
  this.af = in$1;
  this.bz = out;
  this.ae = bindings;
  this.fe = textures;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FragmentCtx() {
}
$h_Ltrivalibs_graphics_shader_dsl_FragmentCtx.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_FragmentCtx = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FragmentCtx, "trivalibs.graphics.shader.dsl.FragmentCtx", ({
  cU: 1
}));
function $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, data) {
  if ((!(!(!(!(!$thiz.d4.hasOwnProperty(data.name))))))) {
    var dict = $thiz.d4;
    var key = data.name;
    dict[key] = true;
    var array = data.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, array[i]);
      i = ((1 + i) | 0);
    }
    $thiz.d5.push(data.src);
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_LayerProgram() {
  this.aJ = null;
  this.d5 = null;
  this.d4 = null;
  this.aJ = "";
  this.d5 = [];
  this.d4 = ({});
}
$p = $c_Ltrivalibs_graphics_shader_dsl_LayerProgram.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_LayerProgram;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_LayerProgram() {
}
$h_Ltrivalibs_graphics_shader_dsl_LayerProgram.prototype = $p;
$p.bD = (function() {
  return this.d5.join("\n\n");
});
var $d_Ltrivalibs_graphics_shader_dsl_LayerProgram = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_LayerProgram, "trivalibs.graphics.shader.dsl.LayerProgram", ({
  cV: 1
}));
function $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, data) {
  if ((!(!(!(!(!$thiz.d6.hasOwnProperty(data.name))))))) {
    var dict = $thiz.d6;
    var key = data.name;
    dict[key] = true;
    var array = data.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, array[i]);
      i = ((1 + i) | 0);
    }
    $thiz.d7.push(data.src);
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_Program() {
  this.d9 = null;
  this.d8 = null;
  this.d7 = null;
  this.d6 = null;
  this.d9 = "";
  this.d8 = "";
  this.d7 = [];
  this.d6 = ({});
}
$p = $c_Ltrivalibs_graphics_shader_dsl_Program.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_Program;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_Program() {
}
$h_Ltrivalibs_graphics_shader_dsl_Program.prototype = $p;
$p.bD = (function() {
  return this.d7.join("\n\n");
});
var $d_Ltrivalibs_graphics_shader_dsl_Program = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_Program, "trivalibs.graphics.shader.dsl.Program", ({
  cW: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(in$1, out, bindings, locals, textures) {
  this.ci = null;
  this.cj = null;
  this.en = null;
  this.ci = in$1;
  this.cj = out;
  this.en = bindings;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_VertexCtx.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_VertexCtx;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_VertexCtx() {
}
$h_Ltrivalibs_graphics_shader_dsl_VertexCtx.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_VertexCtx = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_VertexCtx, "trivalibs.graphics.shader.dsl.VertexCtx", ({
  d1: 1
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
$p.fh = (function() {
  return [];
});
var $d_Ltrivalibs_graphics_shader_dsl_WgslFnData$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_WgslFnData$, "trivalibs.graphics.shader.dsl.WgslFnData$", ({
  d4: 1
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
$p.g2 = (function(fn) {
  return fn.name;
});
$p.a1 = (function(fn, ds) {
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
  ds.aK(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((d$3) => {
    if ((!(!(!(!(!seen.hasOwnProperty(d$3.name))))))) {
      seen[d$3.name] = true;
      merged.push(d$3);
    }
  })));
  return new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())(fn.name, fn.src, merged);
});
var $d_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$, "trivalibs.graphics.shader.dsl.fn$package$WgslFn$", ({
  d5: 1
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
$p.ar = (function(device, bindGroupLayouts) {
  return device.createPipelineLayout(({
    "bindGroupLayouts": bindGroupLayouts
  }));
});
var $d_Ltrivalibs_graphics_shader_layouts$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_layouts$, "trivalibs.graphics.shader.layouts$", ({
  d6: 1
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
  this.ck = null;
  this.cl = null;
  this.cm = null;
  this.er = null;
  this.es = null;
  this.et = null;
  this.eu = null;
  this.eq = null;
  this.ev = null;
  $n_Ltrivalibs_graphics_shader_lib_random_Simplex$ = this;
  var names = $m_sjs_js_ArrayOpsCommon$().a(["x"], []);
  var types = $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], []);
  var parts = [];
  var i = 0;
  while ((i < (names.length | 0))) {
    parts.push(((names[i] + ": ") + types[i]));
    i = ((1 + i) | 0);
  }
  var paramList = parts.join(", ");
  var src = (("fn permute_3_(" + paramList) + ") -> vec3<f32> {\n  return (((x * 34.) + 1.) * x) % vec3(289.);\n}");
  this.ck = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("permute_3_", src);
  var names$2 = $m_sjs_js_ArrayOpsCommon$().a(["x"], []);
  var types$2 = $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []);
  var parts$2 = [];
  var i$2 = 0;
  while ((i$2 < (names$2.length | 0))) {
    parts$2.push(((names$2[i$2] + ": ") + types$2[i$2]));
    i$2 = ((1 + i$2) | 0);
  }
  var paramList$2 = parts$2.join(", ");
  var src$2 = (("fn permute_4_(" + paramList$2) + ") -> vec4<f32> {\n  return ((x * 34. + 1.) * x) % vec4<f32>(289.);\n}");
  this.cl = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("permute_4_", src$2);
  var names$3 = $m_sjs_js_ArrayOpsCommon$().a(["r"], []);
  var types$3 = $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []);
  var parts$3 = [];
  var i$3 = 0;
  while ((i$3 < (names$3.length | 0))) {
    parts$3.push(((names$3[i$3] + ": ") + types$3[i$3]));
    i$3 = ((1 + i$3) | 0);
  }
  var paramList$3 = parts$3.join(", ");
  var src$3 = (("fn taylor_inv_sqrt_4_(" + paramList$3) + ") -> vec4<f32> {\n  return 1.79284291400159 - 0.85373472095314 * r;\n}");
  this.cm = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("taylor_inv_sqrt_4_", src$3);
  var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$4 = $m_sjs_js_ArrayOpsCommon$().a(["v"], []);
  var types$4 = $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []);
  var parts$4 = [];
  var i$4 = 0;
  while ((i$4 < (names$4.length | 0))) {
    parts$4.push(((names$4[i$4] + ": ") + types$4[i$4]));
    i$4 = ((1 + i$4) | 0);
  }
  var paramList$4 = parts$4.join(", ");
  var src$4 = (("fn simplex_noise_2d(" + paramList$4) + ") -> f32 {\n\n    let C = vec4(\n        0.211324865405187,\n        0.366025403784439,\n        -0.577350269189626,\n        0.024390243902439\n    );\n    // first corner\n    var i = floor(v + dot(v, C.yy));\n    let x0 = v - i + dot(i, C.xx);\n    // other corners\n    var i1 = select(vec2(0., 1.), vec2(1., 0.), x0.x > x0.y);\n    var x12 = x0.xyxy + C.xxzz - vec4(i1, 0., 0.);\n    // permutations\n    i = i % vec2(289.);\n    let p = permute_3_(permute_3_(i.y + vec3(0., i1.y, 1.)) + i.x + vec3(0., i1.x, 1.));\n    var m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), vec3(0.));\n    m *= m;\n    m *= m;\n    // gradients: 41 points uniformly over a line, mapped onto a diamond\n    let x = 2. * fract(p * C.www) - 1.;\n    let h = abs(x) - 0.5;\n    let ox = floor(x + 0.5);\n    let a0 = x - ox;\n    m = m * (1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h));\n    let g = vec3(a0.x * x0.x + h.x * x0.y, a0.yz * x12.xz + h.yz * x12.yw);\n    return 130. * dot(m, g);\n}");
  this.er = $x_1.a1(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_noise_2d", src$4), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.ck]))));
  var $x_2 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$5 = $m_sjs_js_ArrayOpsCommon$().a(["v"], $m_sjs_js_ArrayOpsCommon$().a(["seed"], []));
  var types$5 = $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], []));
  var parts$5 = [];
  var i$5 = 0;
  while ((i$5 < (names$5.length | 0))) {
    parts$5.push(((names$5[i$5] + ": ") + types$5[i$5]));
    i$5 = ((1 + i$5) | 0);
  }
  var paramList$5 = parts$5.join(", ");
  var src$5 = (("fn simplex_noise_2d_seeded(" + paramList$5) + ") -> f32 {\n\n    let C = vec4(\n        0.211324865405187,\n        0.366025403784439,\n        -0.577350269189626,\n        0.024390243902439\n    );\n    // first corner\n    var i = floor(v + dot(v, C.yy));\n    let x0 = v - i + dot(i, C.xx);\n    // other corners\n    var i1 = select(vec2(0., 1.), vec2(1., 0.), x0.x > x0.y);\n    var x12 = x0.xyxy + C.xxzz - vec4(i1, 0., 0.);\n    // permutations\n    i = i % vec2(289.);\n    var p = permute_3_(permute_3_(i.y + vec3(0., i1.y, 1.)) + i.x + vec3(0., i1.x, 1.));\n    p = permute_3_(p + vec3(seed));\n    var m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), vec3(0.));\n    m *= m;\n    m *= m;\n    let x = 2. * fract(p * C.www) - 1.;\n    let h = abs(x) - 0.5;\n    let ox = floor(x + 0.5);\n    let a0 = x - ox;\n    m = m * (1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h));\n    let g = vec3(a0.x * x0.x + h.x * x0.y, a0.yz * x12.xz + h.yz * x12.yw);\n    return 130. * dot(m, g);\n}");
  this.es = $x_2.a1(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_noise_2d_seeded", src$5), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.ck]))));
  var $x_3 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$6 = $m_sjs_js_ArrayOpsCommon$().a(["v"], []);
  var types$6 = $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], []);
  var parts$6 = [];
  var i$6 = 0;
  while ((i$6 < (names$6.length | 0))) {
    parts$6.push(((names$6[i$6] + ": ") + types$6[i$6]));
    i$6 = ((1 + i$6) | 0);
  }
  var paramList$6 = parts$6.join(", ");
  var src$6 = (("fn simplex_noise_3d(" + paramList$6) + ") -> f32 {\n\n    let C = vec2(1. / 6., 1. / 3.);\n    let D = vec4(0., 0.5, 1., 2.);\n    // first corner\n    var i = floor(v + dot(v, C.yyy));\n    let x0 = v - i + dot(i, C.xxx);\n    // other corners\n    let g = step(x0.yzx, x0.xyz);\n    let l = 1. - g;\n    let i1 = min(g.xyz, l.zxy);\n    let i2 = max(g.xyz, l.zxy);\n    let x1 = x0 - i1 + 1. * C.xxx;\n    let x2 = x0 - i2 + 2. * C.xxx;\n    let x3 = x0 - 1. + 3. * C.xxx;\n    // permutations\n    i = i % vec3(289.);\n    let p = permute_4_(permute_4_(permute_4_(\n        i.z + vec4(0., i1.z, i2.z, 1.)) +\n        i.y + vec4(0., i1.y, i2.y, 1.)) +\n        i.x + vec4(0., i1.x, i2.x, 1.)\n    );\n    // gradients (NxN points uniformly over a square, mapped onto an octahedron)\n    let n_ = 1. / 7.;\n    let ns = n_ * D.wyz - D.xzx;\n    let j = p - 49. * floor(p * ns.z * ns.z);\n    let x_ = floor(j * ns.z);\n    let y_ = floor(j - 7. * x_);\n    let x = x_ * ns.x + ns.yyyy;\n    let y = y_ * ns.x + ns.yyyy;\n    let h = 1. - abs(x) - abs(y);\n    let b0 = vec4(x.xy, y.xy);\n    let b1 = vec4(x.zw, y.zw);\n    let s0 = floor(b0) * 2. + 1.;\n    let s1 = floor(b1) * 2. + 1.;\n    let sh = -step(h, vec4(0.));\n    let a0 = b0.xzyw + s0.xzyw * sh.xxyy;\n    let a1 = b1.xzyw + s1.xzyw * sh.zzww;\n    var p0 = vec3(a0.xy, h.x);\n    var p1 = vec3(a0.zw, h.y);\n    var p2 = vec3(a1.xy, h.z);\n    var p3 = vec3(a1.zw, h.w);\n    // normalize gradients\n    let norm = taylor_inv_sqrt_4_(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));\n    p0 = p0 * norm.x;\n    p1 = p1 * norm.y;\n    p2 = p2 * norm.z;\n    p3 = p3 * norm.w;\n    // mix final noise value\n    var m = 0.5 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3));\n    m = max(m, vec4(0.));\n    m *= m;\n    return 105. * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));\n}");
  this.et = $x_3.a1(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_noise_3d", src$6), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.cl, this.cm]))));
  var $x_4 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$7 = $m_sjs_js_ArrayOpsCommon$().a(["v"], $m_sjs_js_ArrayOpsCommon$().a(["seed"], []));
  var types$7 = $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], []));
  var parts$7 = [];
  var i$7 = 0;
  while ((i$7 < (names$7.length | 0))) {
    parts$7.push(((names$7[i$7] + ": ") + types$7[i$7]));
    i$7 = ((1 + i$7) | 0);
  }
  var paramList$7 = parts$7.join(", ");
  var src$7 = (("fn simplex_noise_3d_seeded(" + paramList$7) + ") -> f32 {\n\n    let C = vec2(1. / 6., 1. / 3.);\n    let D = vec4(0., 0.5, 1., 2.);\n    // first corner\n    var i = floor(v + dot(v, C.yyy));\n    let x0 = v - i + dot(i, C.xxx);\n    // other corners\n    let g = step(x0.yzx, x0.xyz);\n    let l = 1. - g;\n    let i1 = min(g.xyz, l.zxy);\n    let i2 = max(g.xyz, l.zxy);\n    let x1 = x0 - i1 + 1. * C.xxx;\n    let x2 = x0 - i2 + 2. * C.xxx;\n    let x3 = x0 - 1. + 3. * C.xxx;\n    // permutations\n    i = i % vec3(289.);\n    let s = floor(seed + vec3(0.5));\n    let p = permute_4_(permute_4_(permute_4_(\n        i.z + vec4(0., i1.z, i2.z, 1.) + s.z) +\n        i.y + vec4(0., i1.y, i2.y, 1.) + s.y) +\n        i.x + vec4(0., i1.x, i2.x, 1.) + s.x\n    );\n    // gradients (NxN points uniformly over a square, mapped onto an octahedron)\n    let n_ = 1. / 7.;\n    let ns = n_ * D.wyz - D.xzx;\n    let j = p - 49. * floor(p * ns.z * ns.z);\n    let x_ = floor(j * ns.z);\n    let y_ = floor(j - 7. * x_);\n    let x = x_ * ns.x + ns.yyyy;\n    let y = y_ * ns.x + ns.yyyy;\n    let h = 1. - abs(x) - abs(y);\n    let b0 = vec4(x.xy, y.xy);\n    let b1 = vec4(x.zw, y.zw);\n    let s0 = floor(b0) * 2. + 1.;\n    let s1 = floor(b1) * 2. + 1.;\n    let sh = -step(h, vec4(0.));\n    let a0 = b0.xzyw + s0.xzyw * sh.xxyy;\n    let a1 = b1.xzyw + s1.xzyw * sh.zzww;\n    var p0 = vec3(a0.xy, h.x);\n    var p1 = vec3(a0.zw, h.y);\n    var p2 = vec3(a1.xy, h.z);\n    var p3 = vec3(a1.zw, h.w);\n    // normalize gradients\n    let norm = taylor_inv_sqrt_4_(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));\n    p0 = p0 * norm.x;\n    p1 = p1 * norm.y;\n    p2 = p2 * norm.z;\n    p3 = p3 * norm.w;\n    // mix final noise value\n    var m = 0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3));\n    m = max(m, vec4(0.));\n    m *= m;\n    return 42. * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));\n}");
  this.eu = $x_4.a1(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_noise_3d_seeded", src$7), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.cl, this.cm]))));
  var $x_5 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$8 = $m_sjs_js_ArrayOpsCommon$().a(["pos"], $m_sjs_js_ArrayOpsCommon$().a(["octaves"], $m_sjs_js_ArrayOpsCommon$().a(["lacunarity"], $m_sjs_js_ArrayOpsCommon$().a(["gain"], []))));
  var types$8 = $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["i32"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], []))));
  var parts$8 = [];
  var i$8 = 0;
  while ((i$8 < (names$8.length | 0))) {
    parts$8.push(((names$8[i$8] + ": ") + types$8[i$8]));
    i$8 = ((1 + i$8) | 0);
  }
  var paramList$8 = parts$8.join(", ");
  var src$8 = (("fn fbm_simplex_2d(" + paramList$8) + ") -> f32 {\n\n    var sum = 0.;\n    var amplitude = 1.;\n    var frequency = 1.;\n    for (var i = 0; i < octaves; i += 1) {\n        sum += simplex_noise_2d(pos * frequency) * amplitude;\n        amplitude *= gain;\n        frequency *= lacunarity;\n    }\n    return sum;\n}");
  this.eq = $x_5.a1(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("fbm_simplex_2d", src$8), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.er]))));
  var $x_6 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$9 = $m_sjs_js_ArrayOpsCommon$().a(["pos"], $m_sjs_js_ArrayOpsCommon$().a(["octaves"], $m_sjs_js_ArrayOpsCommon$().a(["lacunarity"], $m_sjs_js_ArrayOpsCommon$().a(["gain"], $m_sjs_js_ArrayOpsCommon$().a(["seed"], [])))));
  var types$9 = $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["i32"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], [])))));
  var parts$9 = [];
  var i$9 = 0;
  while ((i$9 < (names$9.length | 0))) {
    parts$9.push(((names$9[i$9] + ": ") + types$9[i$9]));
    i$9 = ((1 + i$9) | 0);
  }
  var paramList$9 = parts$9.join(", ");
  var src$9 = (("fn fbm_simplex_2d_seeded(" + paramList$9) + ") -> f32 {\n\n    var sum = 0.;\n    var amplitude = 1.;\n    var frequency = 1.;\n    for (var i = 0; i < octaves; i += 1) {\n        sum += simplex_noise_2d_seeded(pos * frequency, seed) * amplitude;\n        amplitude *= gain;\n        frequency *= lacunarity;\n    }\n    return sum;\n}");
  $x_6.a1(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("fbm_simplex_2d_seeded", src$9), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.es]))));
  var $x_7 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$10 = $m_sjs_js_ArrayOpsCommon$().a(["pos"], $m_sjs_js_ArrayOpsCommon$().a(["octaves"], $m_sjs_js_ArrayOpsCommon$().a(["lacunarity"], $m_sjs_js_ArrayOpsCommon$().a(["gain"], []))));
  var types$10 = $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["i32"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], []))));
  var parts$10 = [];
  var i$10 = 0;
  while ((i$10 < (names$10.length | 0))) {
    parts$10.push(((names$10[i$10] + ": ") + types$10[i$10]));
    i$10 = ((1 + i$10) | 0);
  }
  var paramList$10 = parts$10.join(", ");
  var src$10 = (("fn fbm_simplex_3d(" + paramList$10) + ") -> f32 {\n\n    var sum = 0.;\n    var amplitude = 1.;\n    var frequency = 1.;\n    for (var i = 0; i < octaves; i += 1) {\n        sum += simplex_noise_3d(pos * frequency) * amplitude;\n        amplitude *= gain;\n        frequency *= lacunarity;\n    }\n    return sum;\n}");
  $x_7.a1(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("fbm_simplex_3d", src$10), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.et]))));
  var $x_8 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$11 = $m_sjs_js_ArrayOpsCommon$().a(["pos"], $m_sjs_js_ArrayOpsCommon$().a(["octaves"], $m_sjs_js_ArrayOpsCommon$().a(["lacunarity"], $m_sjs_js_ArrayOpsCommon$().a(["gain"], $m_sjs_js_ArrayOpsCommon$().a(["seed"], [])))));
  var types$11 = $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["i32"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], [])))));
  var parts$11 = [];
  var i$11 = 0;
  while ((i$11 < (names$11.length | 0))) {
    parts$11.push(((names$11[i$11] + ": ") + types$11[i$11]));
    i$11 = ((1 + i$11) | 0);
  }
  var paramList$11 = parts$11.join(", ");
  var src$11 = (("fn fbm_simplex_3d_seeded(" + paramList$11) + ") -> f32 {\n\n    var sum = 0.;\n    var amplitude = 1.;\n    var frequency = 1.;\n    for (var i = 0; i < octaves; i += 1) {\n        sum += simplex_noise_3d_seeded(pos * frequency, seed) * amplitude;\n        amplitude *= gain;\n        frequency *= lacunarity;\n    }\n    return sum;\n}");
  $x_8.a1(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("fbm_simplex_3d_seeded", src$11), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.eu]))));
  var $x_9 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$12 = $m_sjs_js_ArrayOpsCommon$().a(["pos"], $m_sjs_js_ArrayOpsCommon$().a(["jitter"], []));
  var types$12 = $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], []));
  var parts$12 = [];
  var i$12 = 0;
  while ((i$12 < (names$12.length | 0))) {
    parts$12.push(((names$12[i$12] + ": ") + types$12[i$12]));
    i$12 = ((1 + i$12) | 0);
  }
  var paramList$12 = parts$12.join(", ");
  var src$12 = (("fn worley_2d(" + paramList$12) + ") -> vec2<f32> {\n\n    let k = 0.142857142857;\n    let ko = 0.428571428571;\n    let pi = floor(pos);\n    let pf = fract(pos);\n    let oi = vec3(-1.0, 0.0, 1.0);\n    let of_ = vec3(-0.5, 0.5, 1.5);\n    let px = permute_3_(pi.x + oi);\n    var p = permute_3_(px.x + pi.y + oi);\n    var ox = fract(p * k) - ko;\n    var oy = (floor(p * k) % 7.0) * k - ko;\n    var dx = pf.x + 0.5 + jitter * ox;\n    var dy = pf.y - of_ + jitter * oy;\n    var d1 = dx * dx + dy * dy;\n    p = permute_3_(px.y + pi.y + oi);\n    ox = fract(p * k) - ko;\n    oy = (floor(p * k) % 7.0) * k - ko;\n    dx = pf.x - 0.5 + jitter * ox;\n    dy = pf.y - of_ + jitter * oy;\n    var d2 = dx * dx + dy * dy;\n    p = permute_3_(px.z + pi.y + oi);\n    ox = fract(p * k) - ko;\n    oy = (floor(p * k) % 7.0) * k - ko;\n    dx = pf.x - 1.5 + jitter * ox;\n    dy = pf.y - of_ + jitter * oy;\n    let d3 = dx * dx + dy * dy;\n    let d1a = min(d1, d2);\n    d2 = max(d1, d2);\n    d2 = min(d2, d3);\n    d1 = min(d1a, d2);\n    d2 = max(d1a, d2);\n    if d1.x > d1.y {\n        let tmp = d1.x;\n        d1.x = d1.y;\n        d1.y = tmp;\n    }\n    if d1.x > d1.z {\n        let tmp = d1.x;\n        d1.x = d1.z;\n        d1.z = tmp;\n    }\n    d1.y = min(d1.y, d2.y);\n    d1.z = min(d1.z, d2.z);\n    d1.y = min(d1.y, d1.z);\n    d1.y = min(d1.y, d2.x);\n    return sqrt(d1.xy);\n}");
  $x_9.a1(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("worley_2d", src$12), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.ck]))));
  var names$13 = $m_sjs_js_ArrayOpsCommon$().a(["x"], []);
  var types$13 = $m_sjs_js_ArrayOpsCommon$().a(["f32"], []);
  var parts$13 = [];
  var i$13 = 0;
  while ((i$13 < (names$13.length | 0))) {
    parts$13.push(((names$13[i$13] + ": ") + types$13[i$13]));
    i$13 = ((1 + i$13) | 0);
  }
  var paramList$13 = parts$13.join(", ");
  var src$13 = (("fn permute_1_(" + paramList$13) + ") -> f32 {\n  return ((x * 34.0) + 1.0) * x % 289.0;\n}");
  var permute1 = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("permute_1_", src$13);
  var names$14 = $m_sjs_js_ArrayOpsCommon$().a(["r"], []);
  var types$14 = $m_sjs_js_ArrayOpsCommon$().a(["f32"], []);
  var parts$14 = [];
  var i$14 = 0;
  while ((i$14 < (names$14.length | 0))) {
    parts$14.push(((names$14[i$14] + ": ") + types$14[i$14]));
    i$14 = ((1 + i$14) | 0);
  }
  var paramList$14 = parts$14.join(", ");
  var src$14 = (("fn taylor_inv_sqrt_1_(" + paramList$14) + ") -> f32 {\n  return 1.79284291400159 - 0.85373472095314 * r;\n}");
  var taylorInvSqrt1 = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("taylor_inv_sqrt_1_", src$14);
  var names$15 = $m_sjs_js_ArrayOpsCommon$().a(["j"], $m_sjs_js_ArrayOpsCommon$().a(["ip"], []));
  var types$15 = $m_sjs_js_ArrayOpsCommon$().a(["f32"], $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []));
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
  var names$16 = $m_sjs_js_ArrayOpsCommon$().a(["pos"], []);
  var types$16 = $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []);
  var parts$16 = [];
  var i$16 = 0;
  while ((i$16 < (names$16.length | 0))) {
    parts$16.push(((names$16[i$16] + ": ") + types$16[i$16]));
    i$16 = ((1 + i$16) | 0);
  }
  var paramList$16 = parts$16.join(", ");
  var src$16 = (("fn simplex_noise_4d(" + paramList$16) + ") -> f32 {\n\n    let c = vec4<f32>(\n        0.138196601125011,\n        0.276393202250021,\n        0.414589803375032,\n        -0.447213595499958\n    );\n    let F4 = 0.309016994374947451;\n    var i = floor(pos + dot(pos, vec4<f32>(F4, F4, F4, F4)));\n    let x0 = pos - i + dot(i, c.xxxx);\n    let is_x = step(x0.yzw, x0.xxx);\n    let is_yz = step(x0.zww, x0.yyz);\n    var i0 = vec4<f32>(is_x.x + is_x.y + is_x.z, 1.0 - is_x.x, 1.0 - is_x.y, 1.0 - is_x.z);\n    i0.y = i0.y + is_yz.x + is_yz.y;\n    i0.z = i0.z + (1.0 - is_yz.x) + is_yz.z;\n    i0.w = i0.w + (1.0 - is_yz.y) + (1.0 - is_yz.z);\n    let i3 = clamp(i0, vec4<f32>(0.0, 0.0, 0.0, 0.0), vec4<f32>(1.0, 1.0, 1.0, 1.0));\n    let i2 = clamp(i0 - 1.0, vec4<f32>(0.0, 0.0, 0.0, 0.0), vec4<f32>(1.0, 1.0, 1.0, 1.0));\n    let i1 = clamp(i0 - 2.0, vec4<f32>(0.0, 0.0, 0.0, 0.0), vec4<f32>(1.0, 1.0, 1.0, 1.0));\n    let x1 = x0 - i1 + c.xxxx;\n    let x2 = x0 - i2 + c.yyyy;\n    let x3 = x0 - i3 + c.zzzz;\n    let x4 = x0 + c.wwww;\n    i = i % vec4<f32>(289.0, 289.0, 289.0, 289.0);\n    let j0 = permute_1_(permute_1_(permute_1_(permute_1_(i.w) + i.z) + i.y) + i.x);\n    let j1 = permute_4_(\n        permute_4_(\n            permute_4_(\n                permute_4_(i.w + vec4<f32>(i1.w, i2.w, i3.w, 1.0)) + i.z + vec4<f32>(i1.z, i2.z, i3.z, 1.0)\n            ) + i.y + vec4<f32>(i1.y, i2.y, i3.y, 1.0)\n        ) + i.x + vec4<f32>(i1.x, i2.x, i3.x, 1.0)\n    );\n    let ip = vec4<f32>(1.0 / 294.0, 1.0 / 49.0, 1.0 / 7.0, 0.0);\n    var p0 = grad_4_(j0, ip);\n    var p1 = grad_4_(j1.x, ip);\n    var p2 = grad_4_(j1.y, ip);\n    var p3 = grad_4_(j1.z, ip);\n    var p4 = grad_4_(j1.w, ip);\n    let norm = taylor_inv_sqrt_4_(vec4<f32>(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));\n    p0 = p0 * norm.x;\n    p1 = p1 * norm.y;\n    p2 = p2 * norm.z;\n    p3 = p3 * norm.w;\n    p4 = p4 * taylor_inv_sqrt_1_(dot(p4, p4));\n    var m0 = max(0.6 - vec3<f32>(dot(x0, x0), dot(x1, x1), dot(x2, x2)), vec3<f32>(0.0, 0.0, 0.0));\n    var m1 = max(0.6 - vec2<f32>(dot(x3, x3), dot(x4, x4)), vec2<f32>(0.0, 0.0));\n    m0 = m0 * m0;\n    m1 = m1 * m1;\n    return 49.0 * (dot(m0 * m0, vec3<f32>(dot(p0, x0), dot(p1, x1), dot(p2, x2))) + dot(m1 * m1, vec2<f32>(dot(p3, x3), dot(p4, x4))));\n}");
  this.ev = $x_10.a1(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_noise_4d", src$16), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([permute1, this.cl, taylorInvSqrt1, this.cm, grad4]))));
  var $x_11 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$17 = $m_sjs_js_ArrayOpsCommon$().a(["pos"], $m_sjs_js_ArrayOpsCommon$().a(["scale"], []));
  var types$17 = $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], []));
  var parts$17 = [];
  var i$17 = 0;
  while ((i$17 < (names$17.length | 0))) {
    parts$17.push(((names$17[i$17] + ": ") + types$17[i$17]));
    i$17 = ((1 + i$17) | 0);
  }
  var paramList$17 = parts$17.join(", ");
  var src$17 = (("fn tiling_simplex_noise_2d(" + paramList$17) + ") -> f32 {\n\n    let angle_x = pos.x * 6.28318530718;\n    let angle_y = pos.y * 6.28318530718;\n    let nx = cos(angle_x) * scale;\n    let ny = sin(angle_x) * scale;\n    let nz = cos(angle_y) * scale;\n    let nw = sin(angle_y) * scale;\n    return simplex_noise_4d(vec4<f32>(nx, ny, nz, nw));\n}");
  $x_11.a1(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("tiling_simplex_noise_2d", src$17), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().c(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.ev]))));
}
$p = $c_Ltrivalibs_graphics_shader_lib_random_Simplex$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_random_Simplex$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_random_Simplex$() {
}
$h_Ltrivalibs_graphics_shader_lib_random_Simplex$.prototype = $p;
var $d_Ltrivalibs_graphics_shader_lib_random_Simplex$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_random_Simplex$, "trivalibs.graphics.shader.lib.random.Simplex$", ({
  d7: 1
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
  this.ew = null;
  this.dc = null;
  this.bA = 0;
  this.bB = 0.0;
  this.cn = 0.0;
  this.co = 0.0;
  this.dd = false;
  this.ew = frame;
  this.dc = onFpsCallback;
  this.bA = 0;
  this.bB = 0.0;
  this.cn = 0.0;
  this.co = (-1.0);
  this.dd = false;
}
$p = $c_Ltrivalibs_utils_animation_Animator.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_animation_Animator;
/** @constructor */
function $h_Ltrivalibs_utils_animation_Animator() {
}
$h_Ltrivalibs_utils_animation_Animator.prototype = $p;
$p.eR = (function(time) {
  this.bA = ((1 + this.bA) | 0);
  if ((this.bB === 0.0)) {
    this.bB = time;
    this.cn = time;
  }
  var fpsElapsed = (time - this.bB);
  if ((fpsElapsed >= 1000.0)) {
    var fps = ((1000.0 * this.bA) / fpsElapsed);
    if (((time - this.cn) >= 1000.0)) {
      var args$proxy1 = $m_sr_ScalaRunTime$().bJ(new ($d_sjs_js_Any.r().C)([(fps.toFixed(1) + " FPS")]));
      console.log(...$m_sjsr_Compat$().bI(args$proxy1));
      this.cn = time;
      if ((this.dc !== null)) {
        (0, this.dc)(fps);
      }
    }
    this.bA = 0;
    this.bB = time;
  }
  var delta = ((this.co < 0.0) ? 0.0 : (time - this.co));
  this.co = time;
  (0, this.ew)(delta);
  if (this.dd) {
    requestAnimationFrame($m_sjs_js_Any$().bC(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
      this.eR((+v1$2));
    }))));
  }
});
$p.gr = (function() {
  this.dd = true;
  return requestAnimationFrame($m_sjs_js_Any$().bC(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
    this.eR((+v1$2));
  }))));
});
var $d_Ltrivalibs_utils_animation_Animator = new $TypeData().i($c_Ltrivalibs_utils_animation_Animator, "trivalibs.utils.animation.Animator", ({
  db: 1
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
$p.fm = (function(frame) {
  var animator = new $c_Ltrivalibs_utils_animation_Animator(frame, null);
  animator.gr();
  return animator;
});
var $d_Ltrivalibs_utils_animation_animate$package$ = new $TypeData().i($c_Ltrivalibs_utils_animation_animate$package$, "trivalibs.utils.animation.animate$package$", ({
  dc: 1
}));
var $n_Ltrivalibs_utils_animation_animate$package$;
function $m_Ltrivalibs_utils_animation_animate$package$() {
  if ((!$n_Ltrivalibs_utils_animation_animate$package$)) {
    $n_Ltrivalibs_utils_animation_animate$package$ = new $c_Ltrivalibs_utils_animation_animate$package$();
  }
  return $n_Ltrivalibs_utils_animation_animate$package$;
}
/** @constructor */
function $c_Ltrivalibs_utils_random_random$package$() {
}
$p = $c_Ltrivalibs_utils_random_random$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_random_random$package$;
/** @constructor */
function $h_Ltrivalibs_utils_random_random$package$() {
}
$h_Ltrivalibs_utils_random_random$package$.prototype = $p;
$p.Z = (function() {
  return (+Math.random());
});
$p.eO = (function(min, max) {
  return (((+Math.random()) * (max - min)) + min);
});
$p.dq = (function(max) {
  return $doubleToInt(((+Math.random()) * max));
});
$p.ga = (function() {
  return ((+Math.random()) < 0.5);
});
$p.eP = (function() {
  return ((((+Math.random()) + (+Math.random())) + (+Math.random())) / 3.0);
});
$p.gb = (function() {
  return ((2.0 * $m_Ltrivalibs_utils_random_random$package$().eP()) - 1.0);
});
$p.gc = (function() {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec2((+Math.random()), (+Math.random()));
});
$p.bF = (function(arr) {
  if (((arr.length | 0) === 0)) {
    throw new $c_sjs_js_JavaScriptException(Error("pick(): empty array")).ay;
  }
  return arr[$doubleToInt(((+Math.random()) * (arr.length | 0)))];
});
$p.gp = (function(arr) {
  var i = (((arr.length | 0) - 1) | 0);
  while ((i > 0)) {
    var j = $doubleToInt(((+Math.random()) * ((1 + i) | 0)));
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
    i = ((i - 1) | 0);
  }
});
$p.dt = (function(arr) {
  var out = Array.from(arr);
  $m_Ltrivalibs_utils_random_random$package$().gp(out);
  return out;
});
var $d_Ltrivalibs_utils_random_random$package$ = new $TypeData().i($c_Ltrivalibs_utils_random_random$package$, "trivalibs.utils.random.random$package$", ({
  df: 1
}));
var $n_Ltrivalibs_utils_random_random$package$;
function $m_Ltrivalibs_utils_random_random$package$() {
  if ((!$n_Ltrivalibs_utils_random_random$package$)) {
    $n_Ltrivalibs_utils_random_random$package$ = new $c_Ltrivalibs_utils_random_random$package$();
  }
  return $n_Ltrivalibs_utils_random_random$package$;
}
/** @constructor */
function $c_jl_Character$() {
  this.f4 = null;
  $n_jl_Character$ = this;
  this.f4 = new $ac_I(new Int32Array([1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3558, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43504, 43600, 44016, 65296, 66720, 68912, 69734, 69872, 69942, 70096, 70384, 70736, 70864, 71248, 71360, 71472, 71904, 72016, 72784, 73040, 73120, 73552, 92768, 92864, 93008, 120782, 120792, 120802, 120812, 120822, 123200, 123632, 124144, 125264, 130032]));
}
$p = $c_jl_Character$.prototype = new $h_O();
$p.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
}
$h_jl_Character$.prototype = $p;
$p.gy = (function(codePoint) {
  if (((codePoint >>> 0) > 1114111)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return String.fromCodePoint(codePoint);
});
var $d_jl_Character$ = new $TypeData().i($c_jl_Character$, "java.lang.Character$", ({
  ah: 1,
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
  $thiz.dz = s;
  if (writableStackTrace) {
    $thiz.fz();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.dz = null;
  }
  cq() {
    return this.dz;
  }
  fz() {
    var reference = ((this instanceof $c_sjs_js_JavaScriptException) ? this.ay : this);
    if ((Object.prototype.toString.call(reference) !== "[object Error]")) {
      if (((Error.captureStackTrace === (void 0)) || (!(!Object.isSealed(this))))) {
        new Error();
      } else {
        Error.captureStackTrace(this);
      }
    }
    return this;
  }
  m() {
    var className = $objectClassName(this);
    var message = this.cq();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  J() {
    return $c_O.prototype.J.call(this);
  }
  get "message"() {
    var m = this.cq();
    return ((m === null) ? "" : m);
  }
  get "name"() {
    return $objectClassName(this);
  }
  "toString"() {
    return this.m();
  }
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
$p.m = (function() {
  return "<function1>";
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
$p.eT = (function(start, end, step, isInclusive) {
  throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ($p_sci_Range$__description__I__I__I__Z__T(this, start, end, step, isInclusive) + ": seqs cannot contain more than Int.MaxValue elements."));
});
var $d_sci_Range$ = new $TypeData().i($c_sci_Range$, "scala.collection.immutable.Range$", ({
  b6: 1,
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
function $c_sr_AbstractFunction1() {
}
$p = $c_sr_AbstractFunction1.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction1;
/** @constructor */
function $h_sr_AbstractFunction1() {
}
$h_sr_AbstractFunction1.prototype = $p;
$p.m = (function() {
  return "<function1>";
});
/** @constructor */
function $c_sr_DoubleRef(elem) {
  this.E = 0.0;
  this.E = elem;
}
$p = $c_sr_DoubleRef.prototype = new $h_O();
$p.constructor = $c_sr_DoubleRef;
/** @constructor */
function $h_sr_DoubleRef() {
}
$h_sr_DoubleRef.prototype = $p;
$p.m = (function() {
  return ("" + this.E);
});
var $d_sr_DoubleRef = new $TypeData().i($c_sr_DoubleRef, "scala.runtime.DoubleRef", ({
  bo: 1,
  a: 1
}));
/** @constructor */
function $c_sr_IntRef(elem) {
  this.j = 0;
  this.j = elem;
}
$p = $c_sr_IntRef.prototype = new $h_O();
$p.constructor = $c_sr_IntRef;
/** @constructor */
function $h_sr_IntRef() {
}
$h_sr_IntRef.prototype = $p;
$p.m = (function() {
  return ("" + this.j);
});
var $d_sr_IntRef = new $TypeData().i($c_sr_IntRef, "scala.runtime.IntRef", ({
  bp: 1,
  a: 1
}));
/** @constructor */
function $c_sr_ObjectRef(elem) {
  this.L = null;
  this.L = elem;
}
$p = $c_sr_ObjectRef.prototype = new $h_O();
$p.constructor = $c_sr_ObjectRef;
/** @constructor */
function $h_sr_ObjectRef() {
}
$h_sr_ObjectRef.prototype = $p;
$p.m = (function() {
  return ("" + this.L);
});
var $d_sr_ObjectRef = new $TypeData().i($c_sr_ObjectRef, "scala.runtime.ObjectRef", ({
  br: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.aQ = 0;
  this.dK = 0;
  this.f5 = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.aQ = $f_T__hashCode__I("Seq");
  this.dK = $f_T__hashCode__I("Map");
  $f_T__hashCode__I("Set");
  this.f5 = this.gC($m_sci_Nil$(), this.dK);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.dr = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.fP(xs, this.aQ) : ((xs instanceof $c_sci_List) ? this.fV(xs, this.aQ) : this.g5(xs, this.aQ)));
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().i($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  bG: 1,
  bF: 1
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
  this.aV = null;
  this.aV = uv;
}
$p = $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT() {
}
$h_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT.prototype = $p;
var $d_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT, "trivalibs.graphics.buffers.UniformLayout$given_UniformLayout_T", ({
  bO: 1,
  bN: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$() {
}
$p = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$() {
}
$h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$.prototype = $p;
$p.b9 = (function(ref, value) {
  $f_Ltrivalibs_graphics_math_Vec2MutableOps__set__O__Ltrivalibs_graphics_math_Vec2Mutable__O__Ltrivalibs_graphics_math_Vec2Base__V($m_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$().gD(), ref, $m_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$(), value, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$());
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Vec2_Vec2Buffer$", ({
  bP: 1,
  a6: 1
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
$p.gG = (function(ref, value) {
  var value$proxy2 = value.cF;
  var value$proxy3 = Math.fround(value$proxy2);
  var offset$proxy5 = (ref.off | 0);
  ref.dv.setFloat32(offset$proxy5, value$proxy3, true);
  var value$proxy4 = value.cG;
  var value$proxy5 = Math.fround(value$proxy4);
  var offset$proxy6 = ((4 + (ref.off | 0)) | 0);
  ref.dv.setFloat32(offset$proxy6, value$proxy5, true);
  var value$proxy6 = value.cH;
  var value$proxy7 = Math.fround(value$proxy6);
  var offset$proxy7 = ((8 + (ref.off | 0)) | 0);
  ref.dv.setFloat32(offset$proxy7, value$proxy7, true);
});
$p.b9 = (function(ref, value) {
  this.gG(ref, value);
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Vec3_Vec4Buffer$", ({
  bQ: 1,
  a6: 1
}));
var $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$;
function $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$() {
  if ((!$n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$)) {
    $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$ = new $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$();
  }
  return $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_Lerp$vec2Lerp(x$1, x$2) {
  this.dO = null;
  this.dP = null;
  this.dO = x$1;
  this.dP = x$2;
}
$p = $c_Ltrivalibs_graphics_math_Lerp$vec2Lerp.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_Lerp$vec2Lerp;
/** @constructor */
function $h_Ltrivalibs_graphics_math_Lerp$vec2Lerp() {
}
$h_Ltrivalibs_graphics_math_Lerp$vec2Lerp.prototype = $p;
var $d_Ltrivalibs_graphics_math_Lerp$vec2Lerp = new $TypeData().i($c_Ltrivalibs_graphics_math_Lerp$vec2Lerp, "trivalibs.graphics.math.Lerp$vec2Lerp", ({
  bY: 1,
  bX: 1
}));
function $f_Ltrivalibs_graphics_math_Vec2Base__dot__O__O__D($thiz, v, other) {
  return (((+$thiz.x(v)) * (+$thiz.x(other))) + ((+$thiz.y(v)) * (+$thiz.y(other))));
}
function $f_Ltrivalibs_graphics_math_Vec2Base__length__O__D($thiz, v) {
  var p$proxy1 = $f_Ltrivalibs_graphics_math_Vec2Base__dot__O__O__D($thiz, v, v);
  return (+Math.sqrt(p$proxy1));
}
function $f_Ltrivalibs_graphics_math_Vec2Base__distance__O__O__D($thiz, v, other) {
  var dx = ((+$thiz.x(v)) - (+$thiz.x(other)));
  var dy = ((+$thiz.y(v)) - (+$thiz.y(other)));
  var p$proxy2 = ((dx * dx) + (dy * dy));
  return (+Math.sqrt(p$proxy2));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec2$() {
  this.dQ = null;
  this.dR = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec2$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec2$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec2$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec2$.prototype = $p;
$p.h = (function() {
  if ((!this.dR)) {
    this.dQ = $m_Ltrivalibs_graphics_math_cpu_Vec2$();
    this.dR = true;
  }
  return this.dQ;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec2$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec2$, "trivalibs.graphics.math.cpu.Vec2$", ({
  c9: 1,
  bZ: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Vec2$;
function $m_Ltrivalibs_graphics_math_cpu_Vec2$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Vec2$)) {
    $n_Ltrivalibs_graphics_math_cpu_Vec2$ = new $c_Ltrivalibs_graphics_math_cpu_Vec2$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Vec2$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec3$() {
  this.dS = null;
  this.dT = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec3$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec3$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec3$.prototype = $p;
$p.fL = (function() {
  if ((!this.dT)) {
    this.dS = $m_Ltrivalibs_graphics_math_cpu_Vec3$();
    this.dT = true;
  }
  return this.dS;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3$, "trivalibs.graphics.math.cpu.Vec3$", ({
  cc: 1,
  c3: 1
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
  this.dU = null;
  this.dV = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec4$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec4$.prototype = $p;
$p.fK = (function() {
  if ((!this.dV)) {
    this.dU = new $c_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3();
    this.dV = true;
  }
  return this.dU;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4$, "trivalibs.graphics.math.cpu.Vec4$", ({
  cf: 1,
  c7: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Vec4$;
function $m_Ltrivalibs_graphics_math_cpu_Vec4$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Vec4$)) {
    $n_Ltrivalibs_graphics_math_cpu_Vec4$ = new $c_Ltrivalibs_graphics_math_cpu_Vec4$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Vec4$;
}
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
  cj: 1,
  c1: 1
}));
function $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__($thiz, name) {
  $thiz.bl = name;
  $ct_Ltrivalibs_graphics_math_gpu_Expr__T__($thiz, name);
  return $thiz;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_LetExpr() {
  this.e = null;
  this.bl = null;
}
$p = $c_Ltrivalibs_graphics_math_gpu_LetExpr.prototype = new $h_Ltrivalibs_graphics_math_gpu_Expr();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_LetExpr;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_LetExpr() {
}
$h_Ltrivalibs_graphics_math_gpu_LetExpr.prototype = $p;
$p.ag = (function(value) {
  return (((("  let " + this.bl) + " = ") + value.e) + ";");
});
var $d_Ltrivalibs_graphics_math_gpu_LetExpr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LetExpr, "trivalibs.graphics.math.gpu.LetExpr", ({
  aa: 1,
  O: 1
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
$p.dp = (function(a, exp) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("pow(" + a.e) + ", ") + exp.e) + ")"));
});
$p.eA = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("abs(" + a.e) + ")"));
});
$p.fp = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("saturate(" + a.e) + ")"));
});
$p.eH = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(" + a.e) + " * 2.0 - 1.0)"));
});
$p.fD = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(" + a.e) + " * 0.5 + 0.5)"));
});
$p.eU = (function(a, edge0, edge1) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("smoothstep(" + edge0.e) + ", ") + edge1.e) + ", ") + a.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$, "trivalibs.graphics.math.gpu.float_expr$package$given_NumExt_FloatExpr$", ({
  cq: 1,
  dd: 1
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
$p.ey = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.e) + " + ") + b.e) + ")"));
});
$p.de = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.e) + " - ") + b.e) + ")"));
});
$p.ez = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.e) + " * ") + b.e) + ")"));
});
$p.fg = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.e) + " / ") + b.e) + ")"));
});
$p.gB = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(-" + a.e) + ")"));
});
$p.ex = (function(a, b) {
  return this.ey(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().H().g(b));
});
$p.fi = (function(a, b) {
  return this.de(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().H().g(b));
});
$p.ff = (function(a, b) {
  return this.fg(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().H().g(b));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$, "trivalibs.graphics.math.gpu.float_expr$package$given_NumOps_FloatExpr$", ({
  cr: 1,
  de: 1
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
$p.bK = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".x"));
});
$p.dy = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".y"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec2BaseG_FloatExpr_Vec2Expr$", ({
  cs: 1,
  N: 1
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
$p.fl = (function(v, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.e) + " + ") + other.e) + ")"));
});
$p.g1 = (function(v, x$2, scalar) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.e) + " * ") + scalar.e) + ")"));
});
$p.fj = (function(v, x$2, scalar) {
  return this.g1(v, x$2, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().H().g(scalar));
});
$p.ft = (function(v, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.e) + " / ") + other.e) + ")"));
});
$p.fC = (function(v, x$2) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(" + v.e) + " * 2.0 - 1.0)"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec2ImmutableOpsG_FloatExpr_Vec2Expr$", ({
  ct: 1,
  c0: 1
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
  cu: 1,
  a9: 1
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
$p.g0 = (function(v, x$2, b, t) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("mix(" + v.e) + ", ") + b.e) + ", ") + t.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec3ImmutableOpsG_FloatExpr_Vec3Expr$", ({
  cv: 1,
  c4: 1
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
$p.gE = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".w"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec4BaseG_FloatExpr_Vec4Expr$", ({
  cw: 1,
  c6: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Layer(painter, shade) {
  this.v = null;
  this.cO = null;
  this.c6 = 0;
  this.bo = 0;
  this.O = null;
  this.u = null;
  this.a6 = null;
  this.cP = null;
  this.v = shade;
  this.cO = null;
  this.c6 = (-1);
  this.bo = (-1);
  this.O = [];
  this.u = [];
  this.a6 = null;
  this.cP = new $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter);
}
$p = $c_Ltrivalibs_graphics_painter_Layer.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Layer;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Layer() {
}
$h_Ltrivalibs_graphics_painter_Layer.prototype = $p;
$p.eC = (function() {
  return ((this.v.ce !== null) && (((this.u.length | 0) === 0) || (this.u[0] === null)));
});
$p.gl = (function(blendState, mipSource, mipTarget) {
  if ((blendState !== (void 0))) {
    this.cO = blendState;
  }
  if ((mipSource !== (void 0))) {
    var v = (mipSource | 0);
    this.c6 = v;
  }
  if ((mipTarget !== (void 0))) {
    var v$1 = (mipTarget | 0);
    this.bo = v$1;
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Layer = new $TypeData().i($c_Ltrivalibs_graphics_painter_Layer, "trivalibs.graphics.painter.Layer", ({
  cD: 1,
  ab: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Shape(painter, form, shade) {
  this.by = null;
  this.M = null;
  this.cZ = null;
  this.cY = null;
  this.G = null;
  this.cg = null;
  this.d0 = null;
  this.by = form;
  this.M = shade;
  this.cZ = "none";
  this.cY = null;
  this.G = [];
  this.cg = [];
  this.d0 = new $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter);
}
$p = $c_Ltrivalibs_graphics_painter_Shape.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Shape;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Shape() {
}
$h_Ltrivalibs_graphics_painter_Shape.prototype = $p;
$p.gm = (function(cullMode, blendState) {
  if ((cullMode !== (void 0))) {
    this.cZ = cullMode;
  }
  if ((blendState !== (void 0))) {
    this.cY = blendState;
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Shape = new $TypeData().i($c_Ltrivalibs_graphics_painter_Shape, "trivalibs.graphics.painter.Shape", ({
  cJ: 1,
  ab: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform(inner) {
  this.ap = null;
  this.ap = inner;
}
$p = $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform() {
}
$h_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform.prototype = $p;
$p.R = (function() {
  return this.ap.R();
});
var $d_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform = new $TypeData().i($c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform, "trivalibs.graphics.shader.FragmentUniform$given_WGSLType_FragmentUniform", ({
  cN: 1,
  C: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform(inner) {
  this.d2 = null;
  this.d2 = inner;
}
$p = $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform() {
}
$h_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform.prototype = $p;
$p.R = (function() {
  return this.d2.R();
});
var $d_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform = new $TypeData().i($c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform, "trivalibs.graphics.shader.VertexUniform$given_WGSLType_VertexUniform", ({
  cP: 1,
  C: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor(prefix) {
  this.da = null;
  this.da = prefix;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor.prototype = $p;
$p.aM = (function(name) {
  return new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(((this.da === "") ? name : ((this.da + ".") + name)));
});
var $d_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor, "trivalibs.graphics.shader.dsl.TypedAssignAccessor", ({
  cX: 1,
  y: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(prefix) {
  this.db = null;
  this.db = prefix;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor.prototype = $p;
$p.p = (function(name) {
  return ((this.db === "") ? $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), name) : $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), ((this.db + ".") + name)));
});
var $d_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor, "trivalibs.graphics.shader.dsl.TypedExprAccessor", ({
  cY: 1,
  y: 1
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
  cZ: 1,
  y: 1
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
  d0: 1,
  y: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_VertexOut(prefix) {
  this.ep = null;
  this.eo = null;
  this.ep = prefix;
  this.eo = new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget((prefix + ".position"));
}
$p = $c_Ltrivalibs_graphics_shader_dsl_VertexOut.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_VertexOut;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_VertexOut() {
}
$h_Ltrivalibs_graphics_shader_dsl_VertexOut.prototype = $p;
$p.aM = (function(name) {
  return new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(((this.ep + ".") + name));
});
var $d_Ltrivalibs_graphics_shader_dsl_VertexOut = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_VertexOut, "trivalibs.graphics.shader.dsl.VertexOut", ({
  d2: 1,
  y: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$() {
}
$p = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$() {
}
$h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$.prototype = $p;
$p.R = (function() {
  return "sampler";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$, "trivalibs.graphics.shader.types$package$given_WGSLType_Sampler$", ({
  d8: 1,
  C: 1
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
$p.R = (function() {
  return "vec2<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$, "trivalibs.graphics.shader.types$package$given_WGSLType_Vec2$", ({
  d9: 1,
  C: 1
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
$p.R = (function() {
  return "vec3<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$, "trivalibs.graphics.shader.types$package$given_WGSLType_Vec3$", ({
  da: 1,
  C: 1
}));
var $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$;
function $m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$() {
  if ((!$n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$)) {
    $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$ = new $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$();
  }
  return $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$;
}
/** @constructor */
function $c_jl_Class($data) {
  this.cv = $data;
}
$p = $c_jl_Class.prototype = new $h_O();
$p.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
}
$h_jl_Class.prototype = $p;
$p.m = (function() {
  return ((this.cv.Y ? "interface " : (this.cv.X ? "" : "class ")) + this.cv.N);
});
var $d_jl_Class = new $TypeData().i($c_jl_Class, "java.lang.Class", ({
  ai: 1,
  a: 1,
  e: 1
}));
class $c_jl_Exception extends $c_jl_Throwable {
}
function $f_s_Product2__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.K;
      break;
    }
    case 1: {
      return $thiz.a2;
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
      return $thiz.bb;
      break;
    }
    case 1: {
      return $thiz.bc;
      break;
    }
    case 2: {
      return $thiz.bd;
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
      return $thiz.bM;
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
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 3)"));
    }
  }
}
/** @constructor */
function $c_sc_Iterator$() {
  this.be = null;
  $n_sc_Iterator$ = this;
  this.be = new $c_sc_Iterator$$anon$19();
}
$p = $c_sc_Iterator$.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
}
$h_sc_Iterator$.prototype = $p;
var $d_sc_Iterator$ = new $TypeData().i($c_sc_Iterator$, "scala.collection.Iterator$", ({
  aP: 1,
  a: 1,
  aO: 1
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
  this.dH = null;
  this.dH = f;
}
$p = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919;
/** @constructor */
function $h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919() {
}
$h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = $p;
$p.g = (function(x0) {
  return (0, this.dH)(x0);
});
var $d_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919 = new $TypeData().i($c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919, "scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919", ({
  bn: 1,
  bm: 1,
  f: 1
}));
var $d_sr_Nothing$ = new $TypeData().i(0, "scala.runtime.Nothing$", ({
  bq: 1,
  h: 1,
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
$p.bC = (function(f) {
  return ((arg1$2) => f.g(arg1$2));
});
var $d_sjs_js_Any$ = new $TypeData().i($c_sjs_js_Any$, "scala.scalajs.js.Any$", ({
  bv: 1,
  by: 1,
  bz: 1
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
$p.g = (function(x) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec4((+x.bM), (+x.bN), (+x.bO), (+x.bP));
});
var $d_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3, "trivalibs.graphics.math.cpu.Vec4$$anon$3", ({
  cg: 1,
  J: 1,
  f: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_VarExpr(name) {
  this.e = null;
  this.bl = null;
  this.cI = false;
  $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(this, name);
  this.cI = false;
}
$p = $c_Ltrivalibs_graphics_math_gpu_VarExpr.prototype = new $h_Ltrivalibs_graphics_math_gpu_LetExpr();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_VarExpr;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_VarExpr() {
}
$h_Ltrivalibs_graphics_math_gpu_VarExpr.prototype = $p;
$p.ag = (function(value) {
  if ((!this.cI)) {
    this.cI = true;
    return (((("  var " + this.bl) + " = ") + value.e) + ";");
  } else {
    return (((("  " + this.bl) + " = ") + value.e) + ";");
  }
});
var $d_Ltrivalibs_graphics_math_gpu_VarExpr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_VarExpr, "trivalibs.graphics.math.gpu.VarExpr", ({
  cl: 1,
  aa: 1,
  O: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2.prototype = new $h_s_Conversion();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2() {
}
$h_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2.prototype = $p;
$p.g = (function(x) {
  return x;
});
var $d_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2, "trivalibs.graphics.math.gpu.expr$package$$anon$2", ({
  cn: 1,
  J: 1,
  f: 1
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
$p.g = (function(x) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fE((+x)));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1, "trivalibs.graphics.math.gpu.float_expr$package$$anon$1", ({
  cp: 1,
  J: 1,
  f: 1
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
        deps = ((rest[0] === (void 0)) ? $m_Ltrivalibs_graphics_shader_dsl_WgslFnData$().fh() : rest[0]);
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
  d3: 1,
  bA: 1,
  a2: 1
}), ((x) => (x instanceof $a_Ltrivalibs_graphics_shader_dsl_WgslFnData())));
function $f_jl_Boolean__hashCode__I($thiz) {
  return ($thiz ? 1231 : 1237);
}
function $f_jl_Boolean__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Boolean = new $TypeData().i(0, "java.lang.Boolean", ({
  ae: 1,
  a: 1,
  g: 1,
  e: 1
}), ((x) => ((typeof x) === "boolean")));
function $f_jl_Character__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Character__toString__T($thiz) {
  return ("" + $cToS($thiz));
}
var $d_jl_Character = new $TypeData().i(0, "java.lang.Character", ({
  ag: 1,
  a: 1,
  g: 1,
  e: 1
}), ((x) => (x instanceof $Char)));
class $c_jl_RuntimeException extends $c_jl_Exception {
}
/** @constructor */
function $c_jl_StringBuilder() {
  this.D = null;
  this.D = "";
}
$p = $c_jl_StringBuilder.prototype = new $h_O();
$p.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
}
$h_jl_StringBuilder.prototype = $p;
$p.m = (function() {
  return this.D;
});
$p.t = (function() {
  return this.D.length;
});
$p.eF = (function(index) {
  return this.D.charCodeAt(index);
});
var $d_jl_StringBuilder = new $TypeData().i($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  aq: 1,
  I: 1,
  ac: 1,
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
$p.Y = (function() {
  return (-1);
});
$p.dg = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.X = (function() {
  return this;
});
$p.m = (function() {
  return "<iterator>";
});
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$.prototype = $p;
$p.x = (function(v) {
  return v.r;
});
$p.y = (function(v) {
  return v.s;
});
$p.eZ = (function(v, value) {
  v.r = value;
});
$p.f1 = (function(v, value) {
  v.s = value;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$, "trivalibs.graphics.math.cpu.Vec2$given_Vec2Mutable_Vec2$", ({
  ca: 1,
  N: 1,
  a7: 1,
  a8: 1
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
  cd: 1,
  a9: 1,
  c2: 1,
  c5: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$;
function $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$)) {
    $n_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$ = new $c_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$;
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
$p.gH = (function(v) {
  var offset$proxy1 = (v.off | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy1, true));
});
$p.gJ = (function(v) {
  var offset$proxy2 = ((4 + (v.off | 0)) | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy2, true));
});
$p.gI = (function(v, value) {
  var value$proxy1 = Math.fround(value);
  var offset$proxy3 = (v.off | 0);
  v.dv.setFloat32(offset$proxy3, value$proxy1, true);
});
$p.gK = (function(v, value) {
  var value$proxy2 = Math.fround(value);
  var offset$proxy4 = ((4 + (v.off | 0)) | 0);
  v.dv.setFloat32(offset$proxy4, value$proxy2, true);
});
$p.x = (function(v) {
  return this.gH(v);
});
$p.y = (function(v) {
  return this.gJ(v);
});
$p.eZ = (function(v, value) {
  this.gI(v, value);
});
$p.f1 = (function(v, value) {
  this.gK(v, value);
});
var $d_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$, "trivalibs.graphics.math.cpu.vec2$package$Vec2Buffer$vec2MutableBuffer$", ({
  ck: 1,
  N: 1,
  a7: 1,
  a8: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$;
function $m_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$ = new $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$;
}
function $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T($thiz, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, uniformDecls, vertexBody, fragmentBody, fragBuiltinParams) {
  var f$proxy1 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildVertexMain__T__T($thiz, vertexBody);
  var g$proxy1 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildFragmentMain__T__T__T($thiz, fragmentBody, fragBuiltinParams);
  var all = [vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, uniformDecls, $thiz.d1, f$proxy1, g$proxy1];
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
  this.b4 = null;
  this.b3 = null;
  this.d1 = null;
  this.b4 = vertexBody;
  this.b3 = fragmentBody;
  this.d1 = helperFns;
}
$p = $c_Ltrivalibs_graphics_shader_ShaderDef.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_ShaderDef;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_ShaderDef() {
}
$h_Ltrivalibs_graphics_shader_ShaderDef.prototype = $p;
$p.b8 = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.J = (function() {
  return $m_s_util_hashing_MurmurHash3$().bG(this, (-1488826029), true);
});
$p.m = (function() {
  return $m_sr_ScalaRunTime$().fk(this);
});
$p.as = (function() {
  return 3;
});
$p.au = (function() {
  return "ShaderDef";
});
$p.at = (function(n) {
  switch (n) {
    case 0: {
      return this.b4;
      break;
    }
    case 1: {
      return this.b3;
      break;
    }
    case 2: {
      return this.d1;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException(("" + n));
    }
  }
});
var $d_Ltrivalibs_graphics_shader_ShaderDef = new $TypeData().i($c_Ltrivalibs_graphics_shader_ShaderDef, "trivalibs.graphics.shader.ShaderDef", ({
  cO: 1,
  d: 1,
  r: 1,
  a: 1
}));
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ArithmeticException = new $TypeData().i($c_jl_ArithmeticException, "java.lang.ArithmeticException", ({
  ad: 1,
  j: 1,
  i: 1,
  h: 1,
  a: 1
}));
function $f_jl_Byte__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Byte__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Byte = new $TypeData().i(0, "java.lang.Byte", ({
  af: 1,
  p: 1,
  a: 1,
  g: 1,
  e: 1
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
  ak: 1,
  j: 1,
  i: 1,
  h: 1,
  a: 1
}));
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_IndexOutOfBoundsException = new $TypeData().i($c_jl_IndexOutOfBoundsException, "java.lang.IndexOutOfBoundsException", ({
  al: 1,
  j: 1,
  i: 1,
  h: 1,
  a: 1
}));
class $c_jl_NullPointerException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
var $d_jl_NullPointerException = new $TypeData().i($c_jl_NullPointerException, "java.lang.NullPointerException", ({
  an: 1,
  j: 1,
  i: 1,
  h: 1,
  a: 1
}));
function $f_jl_Short__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Short__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Short = new $TypeData().i(0, "java.lang.Short", ({
  ao: 1,
  p: 1,
  a: 1,
  g: 1,
  e: 1
}), ((x) => $isShort(x)));
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_UnsupportedOperationException = new $TypeData().i($c_jl_UnsupportedOperationException, "java.lang.UnsupportedOperationException", ({
  ar: 1,
  j: 1,
  i: 1,
  h: 1,
  a: 1
}));
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_ju_NoSuchElementException = new $TypeData().i($c_ju_NoSuchElementException, "java.util.NoSuchElementException", ({
  au: 1,
  j: 1,
  i: 1,
  h: 1,
  a: 1
}));
function $p_s_MatchError__objString__T($thiz) {
  if ((!$thiz.dB)) {
    if (($thiz.bL === null)) {
      var $x_1 = "null";
    } else {
      var this$1 = $thiz.bL;
      var cls = $objectGetClass(this$1);
      var ofClass = ((cls === null) ? "of a JS class" : ("of class " + cls.cv.N));
      try {
        var $x_1 = ((($thiz.bL + " (") + ofClass) + ")");
      } catch (e) {
        var $x_1 = ("an instance " + ofClass);
      }
    }
    $thiz.dA = $x_1;
    $thiz.dB = true;
  }
  return $thiz.dA;
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.bL = null;
    this.dA = null;
    this.dB = false;
    this.bL = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  cq() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().i($c_s_MatchError, "scala.MatchError", ({
  aw: 1,
  j: 1,
  i: 1,
  h: 1,
  a: 1
}));
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.ba = 0;
  this.dD = 0;
  this.dC = null;
  if ((outer === null)) {
    throw new $c_jl_NullPointerException();
  }
  this.dC = outer;
  this.ba = 0;
  this.dD = outer.as();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $p;
$p.N = (function() {
  return (this.ba < this.dD);
});
$p.C = (function() {
  var result = this.dC.at(this.ba);
  this.ba = ((1 + this.ba) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().i($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  ax: 1,
  t: 1,
  b: 1,
  c: 1,
  v: 1
}));
/** @constructor */
function $c_T2(_1, _2) {
  this.K = null;
  this.a2 = null;
  this.K = _1;
  this.a2 = _2;
}
$p = $c_T2.prototype = new $h_O();
$p.constructor = $c_T2;
/** @constructor */
function $h_T2() {
}
$h_T2.prototype = $p;
$p.as = (function() {
  return 2;
});
$p.at = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n);
});
$p.m = (function() {
  return (((("(" + this.K) + ",") + this.a2) + ")");
});
$p.au = (function() {
  return "Tuple2";
});
$p.b8 = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.J = (function() {
  return $m_s_util_hashing_MurmurHash3$().bG(this, (-116390334), true);
});
var $d_T2 = new $TypeData().i($c_T2, "scala.Tuple2", ({
  aB: 1,
  ay: 1,
  r: 1,
  d: 1,
  a: 1
}));
/** @constructor */
function $c_T3(_1, _2, _3) {
  this.bb = null;
  this.bc = null;
  this.bd = null;
  this.bb = _1;
  this.bc = _2;
  this.bd = _3;
}
$p = $c_T3.prototype = new $h_O();
$p.constructor = $c_T3;
/** @constructor */
function $h_T3() {
}
$h_T3.prototype = $p;
$p.b8 = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.as = (function() {
  return 3;
});
$p.at = (function(n) {
  return $f_s_Product3__productElement__I__O(this, n);
});
$p.J = (function() {
  return $m_s_util_hashing_MurmurHash3$().bG(this, (-192629203), true);
});
$p.au = (function() {
  return "Tuple3";
});
$p.m = (function() {
  return (((((("(" + this.bb) + ",") + this.bc) + ",") + this.bd) + ")");
});
var $d_T3 = new $TypeData().i($c_T3, "scala.Tuple3", ({
  aC: 1,
  d: 1,
  r: 1,
  az: 1,
  a: 1
}));
/** @constructor */
function $c_T4(_1, _2, _3, _4) {
  this.bM = null;
  this.bN = null;
  this.bO = null;
  this.bP = null;
  this.bM = _1;
  this.bN = _2;
  this.bO = _3;
  this.bP = _4;
}
$p = $c_T4.prototype = new $h_O();
$p.constructor = $c_T4;
/** @constructor */
function $h_T4() {
}
$h_T4.prototype = $p;
$p.b8 = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.as = (function() {
  return 4;
});
$p.at = (function(n) {
  return $f_s_Product4__productElement__I__O(this, n);
});
$p.J = (function() {
  return $m_s_util_hashing_MurmurHash3$().bG(this, (-1542739752), true);
});
$p.au = (function() {
  return "Tuple4";
});
$p.m = (function() {
  return (((((((("(" + this.bM) + ",") + this.bN) + ",") + this.bO) + ",") + this.bP) + ")");
});
var $d_T4 = new $TypeData().i($c_T4, "scala.Tuple4", ({
  aD: 1,
  d: 1,
  r: 1,
  aA: 1,
  a: 1
}));
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.b7() + "("), ", ", ")");
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
$p.N = (function() {
  return false;
});
$p.g3 = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
});
$p.Y = (function() {
  return 0;
});
$p.C = (function() {
  this.g3();
});
var $d_sc_Iterator$$anon$19 = new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  aQ: 1,
  t: 1,
  b: 1,
  c: 1,
  v: 1
}));
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw new $c_jl_IndexOutOfBoundsException(("" + n));
  }
  var skipped = $thiz.fx(n);
  if (skipped.bE()) {
    throw new $c_jl_IndexOutOfBoundsException(("" + n));
  }
  return skipped.fM();
}
/** @constructor */
function $c_sr_ScalaRunTime$$anon$1(x$1) {
  this.dJ = null;
  this.bg = 0;
  this.dI = 0;
  this.dJ = x$1;
  this.bg = 0;
  this.dI = x$1.as();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.N = (function() {
  return (this.bg < this.dI);
});
$p.C = (function() {
  var result = this.dJ.at(this.bg);
  this.bg = ((1 + this.bg) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().i($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  bt: 1,
  t: 1,
  b: 1,
  c: 1,
  v: 1
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.P)));
}
var $d_jl_Double = new $TypeData().i(0, "java.lang.Double", ({
  P: 1,
  p: 1,
  a: 1,
  g: 1,
  e: 1,
  x: 1
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
  aj: 1,
  p: 1,
  a: 1,
  g: 1,
  e: 1,
  x: 1
}), ((x) => $isFloat(x)));
function $f_jl_Integer__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Integer__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Integer = new $TypeData().i(0, "java.lang.Integer", ({
  am: 1,
  p: 1,
  a: 1,
  g: 1,
  e: 1,
  x: 1
}), ((x) => $isInt(x)));
function $f_jl_Long__hashCode__I($thiz, $thizhi) {
  return ($thiz ^ $thizhi);
}
function $f_jl_Long__toString__T($thiz, $thizhi) {
  return $m_RTLong$().eV($thiz, $thizhi);
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.Q)));
}
var $d_jl_Long = new $TypeData().i(0, "java.lang.Long", ({
  Q: 1,
  p: 1,
  a: 1,
  g: 1,
  e: 1,
  x: 1
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
  var str = $m_jl_Character$().gy(ch);
  return ($thiz.indexOf(str) | 0);
}
function $f_T__toString__T($thiz) {
  return $thiz;
}
var $d_T = new $TypeData().i(0, "java.lang.String", ({
  ap: 1,
  a: 1,
  g: 1,
  I: 1,
  e: 1,
  x: 1
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
$p.aK = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.dg = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.b7 = (function() {
  return this.aN();
});
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator(xs) {
  this.bQ = null;
  this.av = 0;
  this.cw = 0;
  this.bQ = xs;
  this.av = 0;
  this.cw = $m_jl_reflect_Array$().dk(this.bQ);
}
$p = $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $p;
$p.Y = (function() {
  return ((this.cw - this.av) | 0);
});
$p.N = (function() {
  return (this.av < this.cw);
});
$p.C = (function() {
  if ((this.av >= $m_jl_reflect_Array$().dk(this.bQ))) {
    $m_sc_Iterator$().be.C();
  }
  var r = $m_sr_ScalaRunTime$().b6(this.bQ, this.av);
  this.av = ((1 + this.av) | 0);
  return r;
});
var $d_sc_ArrayOps$ArrayIterator = new $TypeData().i($c_sc_ArrayOps$ArrayIterator, "scala.collection.ArrayOps$ArrayIterator", ({
  aG: 1,
  t: 1,
  b: 1,
  c: 1,
  v: 1,
  a: 1
}));
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator(self) {
  this.dE = null;
  this.bR = 0;
  this.aO = 0;
  this.dE = self;
  this.bR = 0;
  this.aO = self.t();
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $p;
$p.Y = (function() {
  return this.aO;
});
$p.N = (function() {
  return (this.aO > 0);
});
$p.C = (function() {
  if ((this.aO > 0)) {
    var r = this.dE.I(this.bR);
    this.bR = ((1 + this.bR) | 0);
    this.aO = ((this.aO - 1) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().be.C();
  }
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  aN: 1,
  t: 1,
  b: 1,
  c: 1,
  v: 1,
  a: 1
}));
function $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($thiz) {
  if ((!$thiz.dG)) {
    $thiz.dF = new $c_sci_ArraySeq$ofRef(new ($d_sr_Nothing$.r().C)(0));
    $thiz.dG = true;
  }
  return $thiz.dF;
}
/** @constructor */
function $c_sci_ArraySeq$() {
  this.dF = null;
  this.dG = false;
}
$p = $c_sci_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_sci_ArraySeq$;
/** @constructor */
function $h_sci_ArraySeq$() {
}
$h_sci_ArraySeq$.prototype = $p;
var $d_sci_ArraySeq$ = new $TypeData().i($c_sci_ArraySeq$, "scala.collection.immutable.ArraySeq$", ({
  b0: 1,
  a: 1,
  aJ: 1,
  aH: 1,
  aI: 1,
  aV: 1
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
  this.cy = 0;
  this.cx = 0;
  this.bf = false;
  this.bT = 0;
  this.cy = step;
  this.cx = lastElement;
  this.bf = (!initiallyEmpty);
  this.bT = start;
}
$p = $c_sci_RangeIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_RangeIterator;
/** @constructor */
function $h_sci_RangeIterator() {
}
$h_sci_RangeIterator.prototype = $p;
$p.Y = (function() {
  return (this.bf ? ((1 + ((((this.cx - this.bT) | 0) / $checkIntDivisor(this.cy)) | 0)) | 0) : 0);
});
$p.N = (function() {
  return this.bf;
});
$p.g4 = (function() {
  if ((!this.bf)) {
    $m_sc_Iterator$().be.C();
  }
  var value = this.bT;
  this.bf = (value !== this.cx);
  this.bT = ((value + this.cy) | 0);
  return value;
});
$p.C = (function() {
  return this.g4();
});
var $d_sci_RangeIterator = new $TypeData().i($c_sci_RangeIterator, "scala.collection.immutable.RangeIterator", ({
  b8: 1,
  t: 1,
  b: 1,
  c: 1,
  v: 1,
  a: 1
}));
function $f_sc_View__toString__T($thiz) {
  return ($thiz.aN() + "(<not computed>)");
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
    this.ay = null;
    this.ay = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  cq() {
    return $dp_toString__T(this.ay);
  }
  au() {
    return "JavaScriptException";
  }
  as() {
    return 1;
  }
  at(x$1) {
    return ((x$1 === 0) ? this.ay : $m_sr_Statics$().fS(x$1));
  }
  b8() {
    return new $c_sr_ScalaRunTime$$anon$1(this);
  }
  J() {
    return $m_s_util_hashing_MurmurHash3$().bG(this, 1744042595, true);
  }
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a3)));
}
var $d_sjs_js_JavaScriptException = new $TypeData().i($c_sjs_js_JavaScriptException, "scala.scalajs.js.JavaScriptException", ({
  a3: 1,
  j: 1,
  i: 1,
  h: 1,
  a: 1,
  r: 1,
  d: 1
}));
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  var s$tailLocal1 = s;
  var n$tailLocal1 = n;
  while (true) {
    if (((n$tailLocal1 <= 0) || s$tailLocal1.bE())) {
      return s$tailLocal1;
    } else {
      var n$tailLocal1$tmp1 = ((n$tailLocal1 - 1) | 0);
      var s$tailLocal1$tmp1 = s$tailLocal1.gt();
      n$tailLocal1 = n$tailLocal1$tmp1;
      s$tailLocal1 = s$tailLocal1$tmp1;
    }
  }
}
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.cz = null;
}
$p = $c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$p.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $p;
$p.m = (function() {
  return this.cz;
});
$p.J = (function() {
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
$p.m = (function() {
  return $f_sc_View__toString__T(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ObjectManifest$() {
  this.cz = null;
  this.cz = "Object";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ObjectManifest$, "scala.reflect.ManifestFactory$ObjectManifest$", ({
  bj: 1,
  bk: 1,
  bi: 1,
  a: 1,
  bl: 1,
  bf: 1,
  d: 1,
  bg: 1,
  bh: 1
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
$p.J = (function() {
  return $m_s_util_hashing_MurmurHash3$().dr(this);
});
$p.m = (function() {
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
  return (!(!((obj && obj.$classData) && obj.$classData.n.k)));
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.k)));
}
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.bS = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.bS = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $p;
$p.I = (function(idx) {
  return this.bS.I(idx);
});
$p.t = (function() {
  return this.bS.t();
});
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.bS = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$p.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $p;
$p.Y = (function() {
  return this.t();
});
$p.X = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this);
});
$p.aN = (function() {
  return "IndexedSeqView";
});
var $d_sc_IndexedSeqView$Id = new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  aM: 1,
  aU: 1,
  aE: 1,
  aF: 1,
  s: 1,
  b: 1,
  c: 1,
  n: 1,
  m: 1,
  l: 1,
  a: 1,
  aX: 1,
  o: 1,
  aT: 1,
  u: 1,
  aL: 1
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
  this.bU = null;
  this.bU = array;
}
$p = $c_sjsr_WrappedVarArgs.prototype = new $h_O();
$p.constructor = $c_sjsr_WrappedVarArgs;
/** @constructor */
function $h_sjsr_WrappedVarArgs() {
}
$h_sjsr_WrappedVarArgs.prototype = $p;
$p.X = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.Y = (function() {
  return this.t();
});
$p.J = (function() {
  return $m_s_util_hashing_MurmurHash3$().dr(this);
});
$p.m = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.aK = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.dg = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.t = (function() {
  return (this.bU.length | 0);
});
$p.I = (function(idx) {
  return this.bU[idx];
});
$p.b7 = (function() {
  return "WrappedVarArgs";
});
$p.g = (function(v1) {
  return this.I((v1 | 0));
});
function $isArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a4)));
}
var $d_sjsr_WrappedVarArgs = new $TypeData().i($c_sjsr_WrappedVarArgs, "scala.scalajs.runtime.WrappedVarArgs", ({
  a4: 1,
  L: 1,
  b: 1,
  c: 1,
  n: 1,
  m: 1,
  l: 1,
  E: 1,
  f: 1,
  q: 1,
  o: 1,
  d: 1,
  w: 1,
  G: 1,
  F: 1,
  u: 1,
  k: 1,
  M: 1,
  H: 1,
  A: 1,
  B: 1,
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
  return ($thiz.aL() ? ($thiz.ax !== $thiz.aw) : ((($thiz.ax + $thiz.S) | 0) !== $thiz.aw));
}
function $ct_sci_Range__I__I__I__($thiz, start, end, step) {
  $thiz.a3 = start;
  $thiz.aw = end;
  $thiz.S = step;
  $thiz.ac = ($thiz.aL() ? ((step >= 0) ? (start > end) : (start < end)) : ((step >= 0) ? (start >= end) : (start <= end)));
  if ((step === 0)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "step cannot be 0.");
  }
  var stepSign = (step >> 31);
  var gap = (((((end - start) | 0) ^ stepSign) - stepSign) | 0);
  var absStep = (((step ^ stepSign) - stepSign) | 0);
  var div = (((gap >>> 0) / ($checkIntDivisor(absStep) >>> 0)) | 0);
  $thiz.ai = (($thiz.aL() || (Math.imul(absStep, div) !== gap)) ? ((1 + div) | 0) : div);
  if ((((-3) & ((1 + step) | 0)) === 0)) {
    var $x_1 = ($thiz.aL() ? end : ((end - step) | 0));
  } else {
    var n = (($thiz.ai - 1) | 0);
    var $x_1 = (($thiz.a3 + Math.imul($thiz.S, n)) | 0);
  }
  $thiz.ax = $x_1;
  return $thiz;
}
/** @constructor */
function $c_sci_Range() {
  this.a3 = 0;
  this.aw = 0;
  this.S = 0;
  this.ac = false;
  this.ai = 0;
  this.ax = 0;
}
$p = $c_sci_Range.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_Range;
/** @constructor */
function $h_sci_Range() {
}
$h_sci_Range.prototype = $p;
$p.aN = (function() {
  return "IndexedSeq";
});
$p.Y = (function() {
  return this.t();
});
$p.X = (function() {
  return new $c_sci_RangeIterator(this.a3, this.S, this.ax, this.ac);
});
$p.t = (function() {
  return (this.ac ? 0 : ((this.ai > 0) ? this.ai : $m_sci_Range$().eT(this.a3, this.aw, this.S, this.aL())));
});
$p.gj = (function() {
  if (((this.ai <= 0) && (!this.ac))) {
    $m_sci_Range$().eT(this.a3, this.aw, this.S, this.aL());
  }
});
$p.aK = (function(f) {
  if ((!this.ac)) {
    var i = this.a3;
    while (true) {
      f.g(i);
      if ((i === this.ax)) {
        return (void 0);
      }
      i = ((i + this.S) | 0);
    }
  }
});
$p.J = (function() {
  if ((this.t() >= 2)) {
    var this$1 = $m_s_util_hashing_MurmurHash3$();
    return this$1.eQ(this.a3, this.S, this.ax, this$1.aQ);
  } else {
    return $m_s_util_hashing_MurmurHash3$().dr(this);
  }
});
$p.m = (function() {
  var preposition = (this.aL() ? "to" : "until");
  var stepped = ((this.S === 1) ? "" : (" by " + this.S));
  return ((((((((this.ac ? "empty " : ($p_sci_Range__isInexact$1__Z(this) ? "inexact " : "")) + "Range ") + this.a3) + " ") + preposition) + " ") + this.aw) + stepped);
});
$p.b7 = (function() {
  return "Range";
});
$p.eB = (function(idx) {
  if ((((idx < 0) || (idx >= this.ai)) || this.ac)) {
    this.gj();
    var max = (this.ac ? (-1) : ((this.ai - 1) | 0));
    throw new $c_jl_IndexOutOfBoundsException((((idx + " is out of bounds (min 0, max ") + max) + ")"));
  } else {
    return ((this.a3 + Math.imul(this.S, idx)) | 0);
  }
});
$p.g = (function(v1) {
  return this.eB((v1 | 0));
});
$p.I = (function(i) {
  return this.eB(i);
});
/** @constructor */
function $c_sci_ArraySeq() {
}
$p = $c_sci_ArraySeq.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_ArraySeq;
/** @constructor */
function $h_sci_ArraySeq() {
}
$h_sci_ArraySeq.prototype = $p;
$p.Y = (function() {
  return this.aP.b.length;
});
$p.aN = (function() {
  return "IndexedSeq";
});
$p.b7 = (function() {
  return "ArraySeq";
});
/** @constructor */
function $c_sci_Range$Exclusive(start, end, step) {
  this.a3 = 0;
  this.aw = 0;
  this.S = 0;
  this.ac = false;
  this.ai = 0;
  this.ax = 0;
  $ct_sci_Range__I__I__I__(this, start, end, step);
}
$p = $c_sci_Range$Exclusive.prototype = new $h_sci_Range();
$p.constructor = $c_sci_Range$Exclusive;
/** @constructor */
function $h_sci_Range$Exclusive() {
}
$h_sci_Range$Exclusive.prototype = $p;
$p.aL = (function() {
  return false;
});
var $d_sci_Range$Exclusive = new $TypeData().i($c_sci_Range$Exclusive, "scala.collection.immutable.Range$Exclusive", ({
  b7: 1,
  b5: 1,
  K: 1,
  z: 1,
  s: 1,
  b: 1,
  c: 1,
  n: 1,
  m: 1,
  l: 1,
  f: 1,
  q: 1,
  o: 1,
  d: 1,
  w: 1,
  E: 1,
  G: 1,
  F: 1,
  L: 1,
  u: 1,
  k: 1,
  M: 1,
  H: 1,
  A: 1,
  B: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofRef(unsafeArray) {
  this.aP = null;
  this.aP = unsafeArray;
}
$p = $c_sci_ArraySeq$ofRef.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofRef;
/** @constructor */
function $h_sci_ArraySeq$ofRef() {
}
$h_sci_ArraySeq$ofRef.prototype = $p;
$p.t = (function() {
  return this.aP.b.length;
});
$p.I = (function(i) {
  return this.aP.b[i];
});
$p.J = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.fo(this.aP, this$1.aQ);
});
$p.X = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.aP);
});
$p.g = (function(v1) {
  return this.I((v1 | 0));
});
var $d_sci_ArraySeq$ofRef = new $TypeData().i($c_sci_ArraySeq$ofRef, "scala.collection.immutable.ArraySeq$ofRef", ({
  b1: 1,
  aZ: 1,
  K: 1,
  z: 1,
  s: 1,
  b: 1,
  c: 1,
  n: 1,
  m: 1,
  l: 1,
  f: 1,
  q: 1,
  o: 1,
  d: 1,
  w: 1,
  E: 1,
  G: 1,
  F: 1,
  u: 1,
  k: 1,
  M: 1,
  L: 1,
  A: 1,
  B: 1,
  H: 1,
  aK: 1,
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
$p.I = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.aN = (function() {
  return "LinearSeq";
});
$p.bE = (function() {
  return (this === $m_sci_Nil$());
});
$p.aK = (function(f) {
  var these = this;
  while ((!these.bE())) {
    f.g(these.dl());
    these.dw();
  }
});
$p.t = (function() {
  var these = this;
  var len = 0;
  while ((!these.bE())) {
    len = ((1 + len) | 0);
    these.dw();
  }
  return len;
});
$p.b7 = (function() {
  return "List";
});
$p.fx = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$p.g = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.R)));
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
$p.b8 = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.as = (function() {
  return 0;
});
$p.au = (function() {
  return "Nil";
});
$p.at = (function(n) {
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
$p.dl = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list");
});
$p.dw = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$p.Y = (function() {
  return 0;
});
$p.X = (function() {
  return $m_sc_Iterator$().be;
});
$p.fM = (function() {
  this.dl();
});
$p.gt = (function() {
  this.dw();
});
var $d_sci_Nil$ = new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  b4: 1,
  R: 1,
  K: 1,
  z: 1,
  s: 1,
  b: 1,
  c: 1,
  n: 1,
  m: 1,
  l: 1,
  f: 1,
  q: 1,
  o: 1,
  d: 1,
  w: 1,
  E: 1,
  G: 1,
  F: 1,
  aS: 1,
  aR: 1,
  b3: 1,
  b2: 1,
  A: 1,
  B: 1,
  aW: 1,
  H: 1,
  a: 1,
  aY: 1,
  r: 1
}));
var $n_sci_Nil$;
function $m_sci_Nil$() {
  if ((!$n_sci_Nil$)) {
    $n_sci_Nil$ = new $c_sci_Nil$();
  }
  return $n_sci_Nil$;
}
function $ct_scm_StringBuilder__jl_StringBuilder__($thiz, underlying) {
  $thiz.aj = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, new $c_jl_StringBuilder());
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.aj = null;
}
$p = $c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
$h_scm_StringBuilder.prototype = $p;
$p.X = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.aN = (function() {
  return "IndexedSeq";
});
$p.t = (function() {
  return this.aj.t();
});
$p.Y = (function() {
  return this.aj.t();
});
$p.m = (function() {
  return this.aj.D;
});
$p.I = (function(i) {
  return $bC(this.aj.eF(i));
});
$p.g = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.aj.eF(i));
});
var $d_scm_StringBuilder = new $TypeData().i($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  be: 1,
  S: 1,
  z: 1,
  s: 1,
  b: 1,
  c: 1,
  n: 1,
  m: 1,
  l: 1,
  f: 1,
  q: 1,
  o: 1,
  d: 1,
  w: 1,
  Z: 1,
  D: 1,
  V: 1,
  a1: 1,
  a0: 1,
  U: 1,
  W: 1,
  T: 1,
  bc: 1,
  u: 1,
  k: 1,
  Y: 1,
  X: 1,
  I: 1,
  a: 1
}));
/** @constructor */
function $c_sjs_js_WrappedArray(array) {
  this.bh = null;
  this.bh = array;
}
$p = $c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
}
$h_sjs_js_WrappedArray.prototype = $p;
$p.aN = (function() {
  return "IndexedSeq";
});
$p.X = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.I = (function(index) {
  return this.bh[index];
});
$p.t = (function() {
  return (this.bh.length | 0);
});
$p.Y = (function() {
  return (this.bh.length | 0);
});
$p.b7 = (function() {
  return "WrappedArray";
});
$p.g = (function(v1) {
  var index = (v1 | 0);
  return this.bh[index];
});
var $d_sjs_js_WrappedArray = new $TypeData().i($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
  bB: 1,
  b9: 1,
  S: 1,
  z: 1,
  s: 1,
  b: 1,
  c: 1,
  n: 1,
  m: 1,
  l: 1,
  f: 1,
  q: 1,
  o: 1,
  d: 1,
  w: 1,
  Z: 1,
  D: 1,
  V: 1,
  a1: 1,
  a0: 1,
  U: 1,
  W: 1,
  bd: 1,
  ba: 1,
  B: 1,
  A: 1,
  X: 1,
  u: 1,
  k: 1,
  Y: 1,
  bb: 1,
  T: 1,
  a: 1
}));
let $e_sketch = (function(arg) {
  $m_Lsketches_strokes_tile\uff3fstrokes_TileStrokesSketch$package$().gv(arg);
});
export { $e_sketch as sketch };
