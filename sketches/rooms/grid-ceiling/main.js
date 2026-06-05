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
  return (arg0.$classData.Z ? arg0.a7() : $objectClone(arg0));
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
        return null.mq();
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
        return instance.f(x0);
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__equals__O__Z(instance.l, instance.h, x0);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__equals__O__Z(instance.c, x0);
      } else {
        return $c_O.prototype.f.call(instance, x0);
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
        return instance.i();
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__hashCode__I(instance.l, instance.h);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I(instance.c);
      } else {
        return $c_O.prototype.i.call(instance);
      }
    }
  }
}
function $dp_indexOf__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__indexOf__I__I(instance, x0);
  } else {
    return instance.mr(x0);
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
$p.i = (function() {
  return $systemIdentityHashCode(this);
});
$p.f = (function(that) {
  return (this === that);
});
$p.d = (function() {
  var i = this.i();
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.toString = (function() {
  return this.d();
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
$p.a1 = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.b, srcPos, dest.b, destPos, length);
});
$p.a7 = (function() {
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
$p.a1 = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.b, srcPos, dest.b, destPos, length);
});
$p.a7 = (function() {
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
$p.a1 = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.a7 = (function() {
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
$p.a1 = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.a7 = (function() {
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
$p.a1 = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.a7 = (function() {
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
$p.a1 = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.a7 = (function() {
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
$p.a1 = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray((srcPos << 1), (((srcPos + length) | 0) << 1)), (destPos << 1));
});
$p.a7 = (function() {
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
$p.a1 = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.a7 = (function() {
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
$p.a1 = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.a7 = (function() {
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
    x: 1,
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
  $p.a1 = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.b, srcPos, dest.b, destPos, length);
  });
  $p.a7 = (function() {
    return new ArrayClass(this.b.slice());
  });
  $p.$classData = this;
  var arrayBase = (componentData.B || componentData);
  var arrayDepth = (componentData.D + 1);
  var name = ("[" + componentData.E);
  this.C = ArrayClass;
  this.n = ({
    x: 1,
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
  this.hR = null;
  this.jX = null;
  $n_jl_System$Streams$ = this;
  this.hR = new $c_jl_JSConsoleBasedPrintStream(false);
  this.jX = new $c_jl_JSConsoleBasedPrintStream(true);
}
$p = $c_jl_System$Streams$.prototype = new $h_O();
$p.constructor = $c_jl_System$Streams$;
/** @constructor */
function $h_jl_System$Streams$() {
}
$h_jl_System$Streams$.prototype = $p;
var $d_jl_System$Streams$ = new $TypeData().i($c_jl_System$Streams$, "java.lang.System$Streams$", ({
  ba: 1
}));
var $n_jl_System$Streams$;
function $m_jl_System$Streams$() {
  if ((!$n_jl_System$Streams$)) {
    $n_jl_System$Streams$ = new $c_jl_System$Streams$();
  }
  return $n_jl_System$Streams$;
}
function $p_jl_System$SystemProperties$__loadSystemProperties__O($thiz) {
  var result = ({});
  result["java.version"] = "1.8";
  result["java.vm.specification.version"] = "1.8";
  result["java.vm.specification.vendor"] = "Oracle Corporation";
  result["java.vm.specification.name"] = "Java Virtual Machine Specification";
  result["java.vm.name"] = "Scala.js";
  result["java.vm.version"] = "1.21.0";
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
  this.gE = null;
  this.hS = null;
  $n_jl_System$SystemProperties$ = this;
  this.gE = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
  this.hS = null;
}
$p = $c_jl_System$SystemProperties$.prototype = new $h_O();
$p.constructor = $c_jl_System$SystemProperties$;
/** @constructor */
function $h_jl_System$SystemProperties$() {
}
$h_jl_System$SystemProperties$.prototype = $p;
$p.jm = (function(key, default$1) {
  if ((this.gE !== null)) {
    var dict = this.gE;
    return ((!(!$m_jl_Utils$Cache$().hU.call(dict, key))) ? dict[key] : default$1);
  } else {
    return this.hS.jm(key, default$1);
  }
});
var $d_jl_System$SystemProperties$ = new $TypeData().i($c_jl_System$SystemProperties$, "java.lang.System$SystemProperties$", ({
  bb: 1
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
  this.hU = null;
  $n_jl_Utils$Cache$ = this;
  this.hU = Object.prototype.hasOwnProperty;
}
$p = $c_jl_Utils$Cache$.prototype = new $h_O();
$p.constructor = $c_jl_Utils$Cache$;
/** @constructor */
function $h_jl_Utils$Cache$() {
}
$h_jl_Utils$Cache$.prototype = $p;
var $d_jl_Utils$Cache$ = new $TypeData().i($c_jl_Utils$Cache$, "java.lang.Utils$Cache$", ({
  bd: 1
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
  be: 1
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
$p.hD = (function(array) {
  return ((array instanceof $ac_O) ? array.b.length : ((array instanceof $ac_Z) ? array.b.length : ((array instanceof $ac_C) ? array.b.length : ((array instanceof $ac_B) ? array.b.length : ((array instanceof $ac_S) ? array.b.length : ((array instanceof $ac_I) ? array.b.length : ((array instanceof $ac_J) ? ((array.b.length >>> 1) | 0) : ((array instanceof $ac_F) ? array.b.length : ((array instanceof $ac_D) ? array.b.length : $p_jl_reflect_Array$__mismatch__O__E(this, array))))))))));
});
var $d_jl_reflect_Array$ = new $TypeData().i($c_jl_reflect_Array$, "java.lang.reflect.Array$", ({
  bf: 1
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
$p.kk = (function(a, key) {
  var startIndex = 0;
  var endIndex = a.b.length;
  while (true) {
    if ((startIndex === endIndex)) {
      return (~startIndex);
    } else {
      var mid = ((((startIndex + endIndex) | 0) >>> 1) | 0);
      var elem = a.b[mid];
      var cmp = ((key === elem) ? 0 : ((key < elem) ? (-1) : 1));
      if ((cmp < 0)) {
        endIndex = mid;
      } else if ((cmp === 0)) {
        return mid;
      } else {
        startIndex = ((1 + mid) | 0);
      }
    }
  }
});
var $d_ju_Arrays$ = new $TypeData().i($c_ju_Arrays$, "java.util.Arrays$", ({
  bg: 1
}));
var $n_ju_Arrays$;
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$();
  }
  return $n_ju_Arrays$;
}
function $s_RTLong__remainderUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().lX(alo, ahi, blo, bhi);
}
function $s_RTLong__remainder__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().lW(alo, ahi, blo, bhi);
}
function $s_RTLong__divideUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().kw(alo, ahi, blo, bhi);
}
function $s_RTLong__divide__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().kv(alo, ahi, blo, bhi);
}
function $s_RTLong__fromDoubleBits__D__O__J(value, fpBitsDataView) {
  fpBitsDataView.setFloat64(0, value, true);
  var lo = (fpBitsDataView.getInt32(0, true) | 0);
  var hi = (fpBitsDataView.getInt32(4, true) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__fromDouble__D__J(value) {
  return $m_RTLong$().gt(value);
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
  return $m_RTLong$().jT(lo, hi);
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
$p.jT = (function(lo, hi) {
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
$p.gt = (function(value) {
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
$p.kv = (function(alo, ahi, blo, bhi) {
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
    var $x_1 = this.gx(rlo, rhi, rlo$1, rhi$1, true);
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
$p.kw = (function(alo, ahi, blo, bhi) {
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
    return this.gx(alo, ahi, blo, bhi, true);
  }
});
$p.lW = (function(alo, ahi, blo, bhi) {
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
    var $x_1 = this.gx(rlo, rhi, rlo$1, rhi$1, false);
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
$p.lX = (function(alo, ahi, blo, bhi) {
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
    return this.gx(alo, ahi, blo, bhi, false);
  }
});
$p.gx = (function(alo, ahi, blo, bhi, askQuotient) {
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
  bi: 1
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
$p.jj = (function(xs, ys) {
  if ((xs === ys)) {
    return true;
  }
  if ((xs.b.length !== ys.b.length)) {
    return false;
  }
  var len = xs.b.length;
  var i = 0;
  while ((i < len)) {
    if ((!$m_sr_BoxesRunTime$().a(xs.b[i], ys.b[i]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
var $d_s_Array$ = new $TypeData().i($c_s_Array$, "scala.Array$", ({
  bj: 1
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
  var it = $thiz.C();
  while (it.t()) {
    f.p(it.q());
  }
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  return (($thiz.H() === 0) ? (("" + start) + end) : $thiz.hv($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).a2.D);
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.a2;
  if ((start.length !== 0)) {
    jsb.D = (("" + jsb.D) + start);
  }
  var it = $thiz.C();
  if (it.t()) {
    var obj = it.q();
    jsb.D = (("" + jsb.D) + obj);
    while (it.t()) {
      if ((sep.length !== 0)) {
        jsb.D = (("" + jsb.D) + sep);
      }
      var obj$1 = it.q();
      jsb.D = (("" + jsb.D) + obj$1);
    }
  }
  if ((end.length !== 0)) {
    jsb.D = (("" + jsb.D) + end);
  }
  return b;
}
/** @constructor */
function $c_sc_Iterator$ConcatIteratorCell(head, tail) {
  this.i1 = null;
  this.fa = null;
  this.i1 = head;
  this.fa = tail;
}
$p = $c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$ConcatIteratorCell;
/** @constructor */
function $h_sc_Iterator$ConcatIteratorCell() {
}
$h_sc_Iterator$ConcatIteratorCell.prototype = $p;
$p.kS = (function() {
  return this.i1.f2().C();
});
var $d_sc_Iterator$ConcatIteratorCell = new $TypeData().i($c_sc_Iterator$ConcatIteratorCell, "scala.collection.Iterator$ConcatIteratorCell", ({
  c1: 1
}));
/** @constructor */
function $c_sc_StringOps$() {
  this.i2 = null;
  $n_sc_StringOps$ = this;
  this.i2 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => this.i2));
}
$p = $c_sc_StringOps$.prototype = new $h_O();
$p.constructor = $c_sc_StringOps$;
/** @constructor */
function $h_sc_StringOps$() {
}
$h_sc_StringOps$.prototype = $p;
var $d_sc_StringOps$ = new $TypeData().i($c_sc_StringOps$, "scala.collection.StringOps$", ({
  c9: 1
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
  this.i5 = 0;
  $n_sci_IndexedSeqDefaults$ = this;
  try {
    $m_sc_StringOps$();
    var $x_1 = $m_jl_Integer$().l2($m_jl_System$SystemProperties$().jm("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64"), 10, 214748364);
  } catch (e) {
    if (false) {
      var $x_1 = 64;
    } else {
      var $x_1;
      throw e;
    }
  }
  this.i5 = $x_1;
}
$p = $c_sci_IndexedSeqDefaults$.prototype = new $h_O();
$p.constructor = $c_sci_IndexedSeqDefaults$;
/** @constructor */
function $h_sci_IndexedSeqDefaults$() {
}
$h_sci_IndexedSeqDefaults$.prototype = $p;
var $d_sci_IndexedSeqDefaults$ = new $TypeData().i($c_sci_IndexedSeqDefaults$, "scala.collection.immutable.IndexedSeqDefaults$", ({
  ce: 1
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
$p.a = (function(x, y) {
  return ((x === y) || ($is_jl_Number(x) ? this.kE(x, y) : ((x instanceof $Char) ? this.kC(x, y) : ((x === null) ? (y === null) : $dp_equals__O__Z(x, y)))));
});
$p.kE = (function(xn, y) {
  if ($is_jl_Number(y)) {
    return this.kD(xn, y);
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
$p.kD = (function(xn, yn) {
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
      return (false && yn.f(x2));
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
      return (false && yn.f($bL(x3$2_$_lo, x3$2_$_hi)));
    }
  } else {
    return ((xn === null) ? (yn === null) : $dp_equals__O__Z(xn, yn));
  }
});
$p.kC = (function(xc, y) {
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
  cN: 1
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
$p.kj = (function() {
  throw new $c_jl_AssertionError("assertion failed");
});
$p.gw = (function() {
  throw $ct_jl_NullPointerException__T__(new $c_jl_NullPointerException(), "tried to cast away nullability, but value is null");
});
var $d_sr_Scala3RunTime$ = new $TypeData().i($c_sr_Scala3RunTime$, "scala.runtime.Scala3RunTime$", ({
  cR: 1
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
$p.f3 = (function(xs, idx) {
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
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  throw new $c_s_MatchError(xs);
});
$p.ka = (function(x) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(x.r(), (x.o() + "("), ",", ")");
});
$p.hN = (function(xs) {
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
  cS: 1
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
$p.l6 = (function(lv_$_lo, lv_$_hi) {
  return ((lv_$_hi === (lv_$_lo >> 31)) ? lv_$_lo : (lv_$_lo ^ lv_$_hi));
});
$p.kx = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var $x_1 = $m_RTLong$().gt(dv);
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
$p.y = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    return this.kx((+x));
  } else if ((x instanceof $Long)) {
    var $x_1 = $uJ(x);
    return this.l6($x_1.l, $x_1.h);
  } else {
    return $dp_hashCode__I(x);
  }
});
$p.l0 = (function(n) {
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
var $d_sr_Statics$ = new $TypeData().i($c_sr_Statics$, "scala.runtime.Statics$", ({
  cU: 1
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
    return new $c_T2(x, self.eo);
  }
  if ((self instanceof $c_T2)) {
    return new $c_T3(x, self.Q, self.L);
  }
  if ((self instanceof $c_T3)) {
    return new $c_T4(x, self.ai, self.a9, self.aa);
  }
  if ((self instanceof $c_T4)) {
    return new $c_T5(x, self.dC, self.aj, self.ak, self.al);
  }
  if ((self instanceof $c_T5)) {
    return new $c_T6(x, self.eC, self.dD, self.dE, self.dF, self.dG);
  }
  if ((self instanceof $c_T6)) {
    return new $c_T7(x, self.eD, self.dH, self.dI, self.dJ, self.dK, self.dL);
  }
  if ((self instanceof $c_T7)) {
    return new $c_T8(x, self.eE, self.dM, self.dN, self.dO, self.dP, self.dQ, self.dR);
  }
  if ((self instanceof $c_T8)) {
    return new $c_T9(x, self.eF, self.dS, self.dT, self.dU, self.dV, self.dW, self.dX, self.dY);
  }
  if ((self instanceof $c_T9)) {
    return new $c_T10(x, self.eG, self.dZ, self.e0, self.e1, self.e2, self.e3, self.e4, self.e5, self.e6);
  }
  if ((self instanceof $c_T10)) {
    return new $c_T11(x, self.ep, self.at, self.au, self.av, self.aw, self.ax, self.ay, self.az, self.aA, self.as);
  }
  if ((self instanceof $c_T11)) {
    return new $c_T12(x, self.eq, self.aD, self.aE, self.aF, self.aG, self.aH, self.aI, self.aJ, self.aK, self.aB, self.aC);
  }
  if ((self instanceof $c_T12)) {
    return new $c_T13(x, self.er, self.aO, self.aP, self.aQ, self.aR, self.aS, self.aT, self.aU, self.aV, self.aL, self.aM, self.aN);
  }
  if ((self instanceof $c_T13)) {
    return new $c_T14(x, self.es, self.b0, self.b1, self.b2, self.b3, self.b4, self.b5, self.b6, self.b7, self.aW, self.aX, self.aY, self.aZ);
  }
  if ((self instanceof $c_T14)) {
    return new $c_T15(x, self.et, self.bd, self.be, self.bf, self.bg, self.bh, self.bi, self.bj, self.bk, self.b8, self.b9, self.ba, self.bb, self.bc);
  }
  if ((self instanceof $c_T15)) {
    return new $c_T16(x, self.eu, self.br, self.bs, self.bt, self.bu, self.bv, self.bw, self.bx, self.by, self.bl, self.bm, self.bn, self.bo, self.bp, self.bq);
  }
  if ((self instanceof $c_T16)) {
    return new $c_T17(x, self.ev, self.bG, self.bH, self.bI, self.bJ, self.bK, self.bL, self.bM, self.bN, self.bz, self.bA, self.bB, self.bC, self.bD, self.bE, self.bF);
  }
  if ((self instanceof $c_T17)) {
    return new $c_T18(x, self.ew, self.bW, self.bX, self.bY, self.bZ, self.c0, self.c1, self.c2, self.c3, self.bO, self.bP, self.bQ, self.bR, self.bS, self.bT, self.bU, self.bV);
  }
  if ((self instanceof $c_T18)) {
    return new $c_T19(x, self.ex, self.cd, self.ce, self.cf, self.cg, self.ch, self.ci, self.cj, self.ck, self.c4, self.c5, self.c6, self.c7, self.c8, self.c9, self.ca, self.cb, self.cc);
  }
  if ((self instanceof $c_T19)) {
    return new $c_T20(x, self.ey, self.cv, self.cw, self.cx, self.cy, self.cz, self.cA, self.cB, self.cC, self.cl, self.cm, self.cn, self.co, self.cp, self.cq, self.cr, self.cs, self.ct, self.cu);
  }
  if ((self instanceof $c_T20)) {
    return new $c_T21(x, self.ez, self.cN, self.cP, self.cQ, self.cR, self.cS, self.cT, self.cU, self.cV, self.cD, self.cE, self.cF, self.cG, self.cH, self.cI, self.cJ, self.cK, self.cL, self.cM, self.cO);
  }
  if ((self instanceof $c_T21)) {
    return new $c_T22(x, self.eA, self.d6, self.d9, self.da, self.db, self.dc, self.dd, self.de, self.df, self.cW, self.cX, self.cY, self.cZ, self.d0, self.d1, self.d2, self.d3, self.d4, self.d5, self.d7, self.d8);
  }
  if ((self instanceof $c_T22)) {
    return new $c_sr_TupleXXL(new $ac_O([x, self.eB, self.dr, self.dv, self.dw, self.dx, self.dy, self.dz, self.dA, self.dB, self.dg, self.dh, self.di, self.dj, self.dk, self.dl, self.dm, self.dn, self.dp, self.dq, self.ds, self.dt, self.du]));
  }
  throw new $c_s_MatchError(self);
}
function $p_sr_Tuples$__xxlCons__O__sr_TupleXXL__sr_TupleXXL($thiz, x, xxl) {
  var arr = new $ac_O(((1 + xxl.j()) | 0));
  arr.b[0] = x;
  var src = xxl.E;
  var length = xxl.j();
  src.a1(0, arr, 1, length);
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
      var $x_1 = new $c_T1(self.L);
      break matchResult34$1;
    }
    if ((self instanceof $c_T3)) {
      var $x_1 = new $c_T2(self.a9, self.aa);
      break matchResult34$1;
    }
    if ((self instanceof $c_T4)) {
      var $x_1 = new $c_T3(self.aj, self.ak, self.al);
      break matchResult34$1;
    }
    if ((self instanceof $c_T5)) {
      var $x_1 = new $c_T4(self.dD, self.dE, self.dF, self.dG);
      break matchResult34$1;
    }
    if ((self instanceof $c_T6)) {
      var $x_1 = new $c_T5(self.dH, self.dI, self.dJ, self.dK, self.dL);
      break matchResult34$1;
    }
    if ((self instanceof $c_T7)) {
      var $x_1 = new $c_T6(self.dM, self.dN, self.dO, self.dP, self.dQ, self.dR);
      break matchResult34$1;
    }
    if ((self instanceof $c_T8)) {
      var $x_1 = new $c_T7(self.dS, self.dT, self.dU, self.dV, self.dW, self.dX, self.dY);
      break matchResult34$1;
    }
    if ((self instanceof $c_T9)) {
      var $x_1 = new $c_T8(self.dZ, self.e0, self.e1, self.e2, self.e3, self.e4, self.e5, self.e6);
      break matchResult34$1;
    }
    if ((self instanceof $c_T10)) {
      var $x_1 = new $c_T9(self.at, self.au, self.av, self.aw, self.ax, self.ay, self.az, self.aA, self.as);
      break matchResult34$1;
    }
    if ((self instanceof $c_T11)) {
      var $x_1 = new $c_T10(self.aD, self.aE, self.aF, self.aG, self.aH, self.aI, self.aJ, self.aK, self.aB, self.aC);
      break matchResult34$1;
    }
    if ((self instanceof $c_T12)) {
      var $x_1 = new $c_T11(self.aO, self.aP, self.aQ, self.aR, self.aS, self.aT, self.aU, self.aV, self.aL, self.aM, self.aN);
      break matchResult34$1;
    }
    if ((self instanceof $c_T13)) {
      var $x_1 = new $c_T12(self.b0, self.b1, self.b2, self.b3, self.b4, self.b5, self.b6, self.b7, self.aW, self.aX, self.aY, self.aZ);
      break matchResult34$1;
    }
    if ((self instanceof $c_T14)) {
      var $x_1 = new $c_T13(self.bd, self.be, self.bf, self.bg, self.bh, self.bi, self.bj, self.bk, self.b8, self.b9, self.ba, self.bb, self.bc);
      break matchResult34$1;
    }
    if ((self instanceof $c_T15)) {
      var $x_1 = new $c_T14(self.br, self.bs, self.bt, self.bu, self.bv, self.bw, self.bx, self.by, self.bl, self.bm, self.bn, self.bo, self.bp, self.bq);
      break matchResult34$1;
    }
    if ((self instanceof $c_T16)) {
      var $x_1 = new $c_T15(self.bG, self.bH, self.bI, self.bJ, self.bK, self.bL, self.bM, self.bN, self.bz, self.bA, self.bB, self.bC, self.bD, self.bE, self.bF);
      break matchResult34$1;
    }
    if ((self instanceof $c_T17)) {
      var $x_1 = new $c_T16(self.bW, self.bX, self.bY, self.bZ, self.c0, self.c1, self.c2, self.c3, self.bO, self.bP, self.bQ, self.bR, self.bS, self.bT, self.bU, self.bV);
      break matchResult34$1;
    }
    if ((self instanceof $c_T18)) {
      var $x_1 = new $c_T17(self.cd, self.ce, self.cf, self.cg, self.ch, self.ci, self.cj, self.ck, self.c4, self.c5, self.c6, self.c7, self.c8, self.c9, self.ca, self.cb, self.cc);
      break matchResult34$1;
    }
    if ((self instanceof $c_T19)) {
      var $x_1 = new $c_T18(self.cv, self.cw, self.cx, self.cy, self.cz, self.cA, self.cB, self.cC, self.cl, self.cm, self.cn, self.co, self.cp, self.cq, self.cr, self.cs, self.ct, self.cu);
      break matchResult34$1;
    }
    if ((self instanceof $c_T20)) {
      var $x_1 = new $c_T19(self.cN, self.cP, self.cQ, self.cR, self.cS, self.cT, self.cU, self.cV, self.cD, self.cE, self.cF, self.cG, self.cH, self.cI, self.cJ, self.cK, self.cL, self.cM, self.cO);
      break matchResult34$1;
    }
    if ((self instanceof $c_T21)) {
      var $x_1 = new $c_T20(self.d6, self.d9, self.da, self.db, self.dc, self.dd, self.de, self.df, self.cW, self.cX, self.cY, self.cZ, self.d0, self.d1, self.d2, self.d3, self.d4, self.d5, self.d7, self.d8);
      break matchResult34$1;
    }
    if ((self instanceof $c_T22)) {
      var $x_1 = new $c_T21(self.dr, self.dv, self.dw, self.dx, self.dy, self.dz, self.dA, self.dB, self.dg, self.dh, self.di, self.dj, self.dk, self.dl, self.dm, self.dn, self.dp, self.dq, self.ds, self.dt, self.du);
      break matchResult34$1;
    }
    throw new $c_s_MatchError(self);
  }
  return $x_1;
}
function $p_sr_Tuples$__xxlTail__sr_TupleXXL__s_Product($thiz, xxl) {
  if ((xxl.j() === 23)) {
    var elems = xxl.E;
    return new $c_T22(elems.b[1], elems.b[2], elems.b[3], elems.b[4], elems.b[5], elems.b[6], elems.b[7], elems.b[8], elems.b[9], elems.b[10], elems.b[11], elems.b[12], elems.b[13], elems.b[14], elems.b[15], elems.b[16], elems.b[17], elems.b[18], elems.b[19], elems.b[20], elems.b[21], elems.b[22]);
  } else {
    var arr$1 = new $ac_O(((xxl.E.b.length - 1) | 0));
    var src = xxl.E;
    var length = ((xxl.E.b.length - 1) | 0);
    src.a1(1, arr$1, 0, length);
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
$p.kp = (function(x, self) {
  return ((self instanceof $c_sr_TupleXXL) ? $p_sr_Tuples$__xxlCons__O__sr_TupleXXL__sr_TupleXXL(this, x, self) : $p_sr_Tuples$__specialCaseCons__O__s_Product__s_Product(this, x, self));
});
$p.m8 = (function(self) {
  return ((self instanceof $c_sr_TupleXXL) ? $p_sr_Tuples$__xxlTail__sr_TupleXXL__s_Product(this, self) : $p_sr_Tuples$__specialCaseTail__s_Product__s_Product(this, self));
});
var $d_sr_Tuples$ = new $TypeData().i($c_sr_Tuples$, "scala.runtime.Tuples$", ({
  cV: 1
}));
var $n_sr_Tuples$;
function $m_sr_Tuples$() {
  if ((!$n_sr_Tuples$)) {
    $n_sr_Tuples$ = new $c_sr_Tuples$();
  }
  return $n_sr_Tuples$;
}
var $d_sjs_js_Any = new $TypeData().i(2, "scala.scalajs.js.Any", ({
  cW: 1
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
$p.kR = (function(this$, o, p) {
  return (!(!(p in o)));
});
var $d_sjs_js_Any$ObjectCompanionOps$ = new $TypeData().i($c_sjs_js_Any$ObjectCompanionOps$, "scala.scalajs.js.Any$ObjectCompanionOps$", ({
  cY: 1
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
$p.kU = (function(this$, elem, from) {
  var len = (this$.length | 0);
  var i = from;
  while ((i < len)) {
    if ($m_sr_BoxesRunTime$().a(elem, this$[i])) {
      return i;
    }
    i = ((1 + i) | 0);
  }
  return (-1);
});
$p.jV = (function(this$, that) {
  var b = [];
  var len = (this$.length | 0);
  var i = 0;
  var it = that.C();
  while (((i < len) && it.t())) {
    b.push(new $c_T2(this$[i], it.q()));
    i = ((1 + i) | 0);
  }
  return b;
});
$p.jW = (function(this$) {
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
  cZ: 1
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
$p.c = (function(left, right) {
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
  d0: 1
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
  this.ie = null;
  $n_sjs_js_WrappedDictionary$Cache$ = this;
  this.ie = Object.prototype.hasOwnProperty;
}
$p = $c_sjs_js_WrappedDictionary$Cache$.prototype = new $h_O();
$p.constructor = $c_sjs_js_WrappedDictionary$Cache$;
/** @constructor */
function $h_sjs_js_WrappedDictionary$Cache$() {
}
$h_sjs_js_WrappedDictionary$Cache$.prototype = $p;
var $d_sjs_js_WrappedDictionary$Cache$ = new $TypeData().i($c_sjs_js_WrappedDictionary$Cache$, "scala.scalajs.js.WrappedDictionary$Cache$", ({
  d4: 1
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
$p.jL = (function(properties) {
  var result = ({});
  properties.fF(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((pair$2$2) => {
    result[pair$2$2.Q] = pair$2$2.L;
  })));
  return result;
});
var $d_sjs_js_special_package$ = new $TypeData().i($c_sjs_js_special_package$, "scala.scalajs.js.special.package$", ({
  d5: 1
}));
var $n_sjs_js_special_package$;
function $m_sjs_js_special_package$() {
  if ((!$n_sjs_js_special_package$)) {
    $n_sjs_js_special_package$ = new $c_sjs_js_special_package$();
  }
  return $n_sjs_js_special_package$;
}
/** @constructor */
function $c_sjs_js_timers_package$() {
}
$p = $c_sjs_js_timers_package$.prototype = new $h_O();
$p.constructor = $c_sjs_js_timers_package$;
/** @constructor */
function $h_sjs_js_timers_package$() {
}
$h_sjs_js_timers_package$.prototype = $p;
$p.m3 = (function(interval, body) {
  return setTimeout((() => {
    body.f2();
  }), interval);
});
$p.kn = (function(handle) {
  clearTimeout(handle);
});
var $d_sjs_js_timers_package$ = new $TypeData().i($c_sjs_js_timers_package$, "scala.scalajs.js.timers.package$", ({
  d6: 1
}));
var $n_sjs_js_timers_package$;
function $m_sjs_js_timers_package$() {
  if ((!$n_sjs_js_timers_package$)) {
    $n_sjs_js_timers_package$ = new $c_sjs_js_timers_package$();
  }
  return $n_sjs_js_timers_package$;
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
$p.hK = (function(seq) {
  if ((seq instanceof $c_sjsr_WrappedVarArgs)) {
    return seq.g4;
  } else {
    var result = [];
    seq.fF(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2$2) => (result.push(x$2$2) | 0))));
    return result;
  }
});
var $d_sjsr_Compat$ = new $TypeData().i($c_sjsr_Compat$, "scala.scalajs.runtime.Compat$", ({
  d7: 1
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
$p.jO = (function(array) {
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
  d8: 1
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
$p.m5 = (function(err) {
  var where = ((err.jr() === 0) ? "" : ((err.jr() === 1) ? " after first argument" : ((" after " + err.jr()) + " arguments")));
  var x = ((("Illegal command line" + where) + ": ") + err.ms());
  $m_s_Console$().lN().l3((x + "\n"));
});
var $d_s_util_CommandLineParser$ = new $TypeData().i($c_s_util_CommandLineParser$, "scala.util.CommandLineParser$", ({
  d9: 1
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
  this.gG = null;
  this.gG = init;
}
$p = $c_s_util_DynamicVariable.prototype = new $h_O();
$p.constructor = $c_s_util_DynamicVariable;
/** @constructor */
function $h_s_util_DynamicVariable() {
}
$h_s_util_DynamicVariable.prototype = $p;
$p.d = (function() {
  return (("DynamicVariable(" + this.gG) + ")");
});
var $d_s_util_DynamicVariable = new $TypeData().i($c_s_util_DynamicVariable, "scala.util.DynamicVariable", ({
  db: 1
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
$p.n = (function(hash, data) {
  var h = this.jJ(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.jJ = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.P = (function(hash, length) {
  return this.fY((hash ^ length));
});
$p.fY = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.u = (function(x, seed, ignorePrefix) {
  var arr = x.j();
  if ((arr === 0)) {
    return ((!ignorePrefix) ? $f_T__hashCode__I(x.o()) : seed);
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.n(h, $f_T__hashCode__I(x.o()));
    }
    var i = 0;
    while ((i < arr)) {
      h = this.n(h, $m_sr_Statics$().y(x.g(i)));
      i = ((1 + i) | 0);
    }
    return this.P(h, arr);
  }
});
$p.kl = (function(x, seed, caseClassName) {
  var arr = x.j();
  var aye = $f_T__hashCode__I(((caseClassName !== null) ? caseClassName : x.o()));
  if ((arr === 0)) {
    return aye;
  } else {
    var h = seed;
    h = this.n(h, aye);
    var i = 0;
    while ((i < arr)) {
      h = this.n(h, $m_sr_Statics$().y(x.g(i)));
      i = ((1 + i) | 0);
    }
    return this.P(h, arr);
  }
});
$p.me = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.C();
  while (iterator.t()) {
    var x = iterator.q();
    var h = $m_sr_Statics$().y(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.n(h$2, a);
  h$2 = this.n(h$2, b);
  h$2 = this.jJ(h$2, c);
  return this.P(h$2, n);
});
$p.lM = (function(xs, seed) {
  var it = xs.C();
  var h = seed;
  if ((!it.t())) {
    return this.P(h, 0);
  }
  var x0 = it.q();
  if ((!it.t())) {
    return this.P(this.n(h, $m_sr_Statics$().y(x0)), 1);
  }
  var x1 = it.q();
  var initial = $m_sr_Statics$().y(x0);
  h = this.n(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().y(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.t()) {
    h = this.n(h, prev);
    var hash = $m_sr_Statics$().y(it.q());
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.n(h, hash);
      i = ((1 + i) | 0);
      while (it.t()) {
        h = this.n(h, $m_sr_Statics$().y(it.q()));
        i = ((1 + i) | 0);
      }
      return this.P(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.fY(this.n(this.n(h0, rangeDiff), prev));
});
$p.je = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().hD(a);
  switch (l) {
    case 0: {
      return this.P(h, 0);
      break;
    }
    case 1: {
      return this.P(this.n(h, $m_sr_Statics$().y($m_sr_ScalaRunTime$().f3(a, 0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().y($m_sr_ScalaRunTime$().f3(a, 0));
      h = this.n(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().y($m_sr_ScalaRunTime$().f3(a, 1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.n(h, prev);
        var hash = $m_sr_Statics$().y($m_sr_ScalaRunTime$().f3(a, i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.n(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.n(h, $m_sr_Statics$().y($m_sr_ScalaRunTime$().f3(a, i)));
            i = ((1 + i) | 0);
          }
          return this.P(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.fY(this.n(this.n(h0, rangeDiff), prev));
    }
  }
});
$p.lT = (function(start, step, last, seed) {
  return this.fY(this.n(this.n(this.n(seed, start), step), last));
});
$p.kV = (function(a, seed) {
  var h = seed;
  var l = a.s();
  switch (l) {
    case 0: {
      return this.P(h, 0);
      break;
    }
    case 1: {
      return this.P(this.n(h, $m_sr_Statics$().y(a.z(0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().y(a.z(0));
      h = this.n(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().y(a.z(1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.n(h, prev);
        var hash = $m_sr_Statics$().y(a.z(i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.n(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.n(h, $m_sr_Statics$().y(a.z(i)));
            i = ((1 + i) | 0);
          }
          return this.P(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.fY(this.n(this.n(h0, rangeDiff), prev));
    }
  }
});
$p.l5 = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.A())) {
    elems.gv();
  }
  return ((rangeState === 2) ? this.lT(initial, rangeDiff, prev, seed) : this.P(h, n));
});
function $p_Lsketches_rooms_gridceiling_GridCeiling$package$__fbm$1__I__I__D__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr($thiz, FbmOctaves$2, domainPeriod$1, FbmGain$2, domainPos) {
  var acc = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().K().p(0.0);
  var freq = 1;
  var amp = 1.0;
  var totalAmp = 0.0;
  var o = 0;
  while ((o < FbmOctaves$2)) {
    var pd = Math.imul(domainPeriod$1, freq);
    var $x_4 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
    var $x_3 = acc;
    var $x_2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
    var $x_1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().hE();
    var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy1 = $m_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$().j4;
    var a1$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().jb(domainPos, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().jp(), freq);
    var a2$proxy1 = $m_Ltrivalibs_graphics_math_gpu_vec3$().hx($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().K().p(pd), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().K().p(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().K().p(pd));
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().mc(fn$proxy1);
    acc = $x_4.j9($x_3, $x_2.ja($x_1.hO($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((WgslFn$_this.lJ(fn$proxy1) + "(") + a1$proxy1) + ", ") + a2$proxy1) + ")"))), amp));
    totalAmp = (totalAmp + amp);
    freq = (freq << 1);
    amp = (amp * FbmGain$2);
    o = ((1 + o) | 0);
  }
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().jh($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().kH($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().k3(acc, totalAmp)));
}
function $p_Lsketches_rooms_gridceiling_GridCeiling$package$__bakeShade$1__I__D__Ltrivalibs_graphics_painter_Painter__D__I__Ltrivalibs_graphics_painter_Shade($thiz, FbmOctaves$1, FbmGain$1, p$1, NoiseScale$1, domainPeriod) {
  var program = new $c_Ltrivalibs_graphics_shader_dsl_Program();
  var d = ({});
  var ctx = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().J;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().J = reg;
  try {
    var uv = ctx.ft.ar("uv");
    var AssignTarget_this = ctx.fu.fZ("worldPos");
    var value$proxy1 = ctx.ft.ar("position");
    var x0 = (((("  " + AssignTarget_this.ei) + " = ") + value$proxy1.e) + ";");
    var AssignTarget_this$2 = ctx.fu.hn;
    var $x_4 = $m_Ltrivalibs_graphics_math_gpu_vec4$();
    var $x_3 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().jk($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().jo().hP(uv));
    var $x_2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
    var e$proxy2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().jo().mo(uv);
    var value$proxy2 = $x_4.kh($x_3, $x_2.jk($m_Ltrivalibs_graphics_math_gpu_LeftScalar$().kO().ml((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().jl(1.0)) + " - ") + e$proxy2.e) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().K().p(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().K().p(1.0));
    var $x_1 = $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs([x0, (((("  " + AssignTarget_this$2.ei) + " = ") + value$proxy2.e) + ";")]), "", "\n", "");
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().J = prev;
  }
  program.fs = $x_1;
  var array$1 = reg.f1;
  var len = (array$1.length | 0);
  var i = 0;
  while ((i < len)) {
    $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$1[i]);
    i = ((1 + i) | 0);
  }
  var d$2 = ({});
  var ctx$2 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().J;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().J = reg$2;
  try {
    var n = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("n");
    var x0$2 = n.hu($p_Lsketches_rooms_gridceiling_GridCeiling$package$__fbm$1__I__I__D__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr($thiz, FbmOctaves$1, domainPeriod, FbmGain$1, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().jb(ctx$2.hh.ar("worldPos"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().jp(), NoiseScale$1)));
    var AssignTarget_this$1 = ctx$2.hi.fZ("color");
    var value$proxy3 = $m_Ltrivalibs_graphics_math_gpu_vec4$().hy($m_Ltrivalibs_graphics_math_gpu_vec3$().jd(n), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().K().p(1.0));
    var $x_5 = $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs([x0$2, (((("  " + AssignTarget_this$1.ei) + " = ") + value$proxy3.e) + ";")]), "", "\n", "");
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().J = prev$2;
  }
  program.fr = $x_5;
  var array$3 = reg$2.f1;
  var len$1 = (array$3.length | 0);
  var i$1 = 0;
  while ((i$1 < len$1)) {
    $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$3[i$1]);
    i$1 = ((1 + i$1) | 0);
  }
  var b = program.fs;
  var b$1 = program.fr;
  var helperFns$proxy1 = program.jq();
  var id = p$1.ed;
  p$1.ed = ((1 + p$1.ed) | 0);
  var names = [];
  var dict = ({});
  var i$2 = 0;
  while ((i$2 < (names.length | 0))) {
    dict[names[i$2]] = i$2;
    i$2 = ((1 + i$2) | 0);
  }
  var names$2 = [];
  var dict$2 = ({});
  var i$2$1 = 0;
  while ((i$2$1 < (names$2.length | 0))) {
    dict$2[names$2[i$2$1]] = i$2$1;
    i$2$1 = ((1 + i$2$1) | 0);
  }
  var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef(b, b$1, helperFns$proxy1);
  var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().c(["position"], $m_sjs_js_ArrayOpsCommon$().c(["uv"], [])), $m_sjs_js_ArrayOpsCommon$().c(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().c(["vec2<f32>"], [])), $m_sjs_js_ArrayOpsCommon$().c([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().c([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
  var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().c(["worldPos"], []), $m_sjs_js_ArrayOpsCommon$().c(["vec3<f32>"], []), $m_sjs_js_ArrayOpsCommon$().c([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().c(["color"], []), $m_sjs_js_ArrayOpsCommon$().c(["vec4<f32>"], []), []);
  var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().c([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, "", sd.f0, sd.eZ, fragBuiltinParams);
  var args$proxy1 = $m_sr_ScalaRunTime$().hN(new ($d_sjs_js_Any.r().C)([baseWgsl]));
  console.log(...$m_sjsr_Compat$().hK(args$proxy1));
  var module = p$1.h.createShaderModule(({
    "code": baseWgsl
  }));
  var formats = $m_sjs_js_ArrayOpsCommon$().c(["float32x3"], $m_sjs_js_ArrayOpsCommon$().c(["float32x2"], []));
  var sizes = $m_sjs_js_ArrayOpsCommon$().c([12], $m_sjs_js_ArrayOpsCommon$().c([8], []));
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
  var bgls = [];
  return new $c_Ltrivalibs_graphics_painter_Shade(id, module, vbl, null, null, $m_Ltrivalibs_graphics_shader_layouts$().hB(p$1.h, bgls), false, dict, dict$2);
}
function $p_Lsketches_rooms_gridceiling_GridCeiling$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form($thiz, p$2, faces) {
  var mesh$proxy1 = $m_Ltrivalibs_graphics_geometry_Mesh$().kg(faces, null, 0, new $c_Ltrivalibs_graphics_geometry_package$package$$anon$1(0));
  var vl = new $c_Ltrivalibs_graphics_geometry_VertexLayout$named(new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$(), new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$(), $m_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$())));
  var f = ((v$3, ref$3) => {
    var values$proxy1 = vl.il.f6(v$3);
    var baseOffset$proxy1 = (ref$3.off | 0);
    var nestedValues = values$proxy1.g(0);
    var value = nestedValues.g(0);
    ref$3.dv.setFloat32(baseOffset$proxy1, Math.fround(value), true);
    var tailOffset = ((4 + baseOffset$proxy1) | 0);
    var value$2 = nestedValues.g(1);
    ref$3.dv.setFloat32(tailOffset, Math.fround(value$2), true);
    var tailOffset$2 = ((4 + tailOffset) | 0);
    var value$3 = nestedValues.g(2);
    ref$3.dv.setFloat32(tailOffset$2, Math.fround(value$3), true);
    var tailOffset$4 = ((12 + baseOffset$proxy1) | 0);
    var nestedValues$2 = values$proxy1.g(1);
    var value$4 = nestedValues$2.g(0);
    ref$3.dv.setFloat32(tailOffset$4, Math.fround(value$4), true);
    var tailOffset$5 = ((4 + tailOffset$4) | 0);
    var value$5 = nestedValues$2.g(1);
    ref$3.dv.setFloat32(tailOffset$5, Math.fround(value$5), true);
  });
  var \u03b4proxy2 = $m_Ltrivalibs_graphics_geometry_buffers$package$();
  var vertexCount = 0;
  var hasQuads = false;
  var fi = 0;
  while ((fi < (mesh$proxy1.af.length | 0))) {
    var n = (mesh$proxy1.af[fi].length | 0);
    vertexCount = ((vertexCount + n) | 0);
    if ((n === 4)) {
      hasQuads = true;
    }
    fi = ((1 + fi) | 0);
  }
  var count$proxy1 = vertexCount;
  var buffer = new ArrayBuffer(Math.imul(20, count$proxy1));
  var verts = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), count$proxy1);
  var vi = 0;
  if ((!hasQuads)) {
    fi = 0;
    while ((fi < (mesh$proxy1.af.length | 0))) {
      var arr = mesh$proxy1.af[fi];
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
    while ((fi < (mesh$proxy1.af.length | 0))) {
      var arr$2 = mesh$proxy1.af[fi];
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
    var $x_1 = new $c_Ltrivalibs_graphics_geometry_BufferedGeometry(verts, \u03b4proxy2.lD(idxBuf, vertexCount));
  }
  return p$2.kI($x_1, (void 0), (void 0), (void 0));
}
function $p_Lsketches_rooms_gridceiling_GridCeiling$package$__bakeTile$1__Ltrivalibs_graphics_painter_Painter__I__I__sjs_js_Array__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_Panel($thiz, p$3, w, h, faces, shade) {
  var shape$1 = p$3.f5($p_Lsketches_rooms_gridceiling_GridCeiling$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form($thiz, p$3, faces), shade, "none", (void 0));
  return p$3.jM(w, h, (void 0), (void 0), (void 0), (void 0), true, (void 0), (void 0), shape$1, (void 0), (void 0), (void 0));
}
/** @constructor */
function $c_Lsketches_rooms_gridceiling_GridCeiling$package$() {
}
$p = $c_Lsketches_rooms_gridceiling_GridCeiling$package$.prototype = new $h_O();
$p.constructor = $c_Lsketches_rooms_gridceiling_GridCeiling$package$;
/** @constructor */
function $h_Lsketches_rooms_gridceiling_GridCeiling$package$() {
}
$h_Lsketches_rooms_gridceiling_GridCeiling$package$.prototype = $p;
$p.U = (function(c, u, v) {
  return new $c_T2(c, new $c_Ltrivalibs_graphics_math_cpu_Vec2(u, v));
});
$p.jQ = (function(n, length, xCenter, startZ, step, gridY, sw, sh, tileWorld, vTileCount) {
  var perStripV = ((2.0 * sh) + sw);
  var vFull = (vTileCount * perStripV);
  var vH = (sh / vFull);
  var vB = (sw / vFull);
  var perStripVn = (perStripV / vFull);
  var faces = [];
  var i = 0;
  while ((i < n)) {
    var box = $m_Ltrivalibs_graphics_geometry_Box$().hw(new $c_Ltrivalibs_graphics_math_cpu_Vec3(xCenter, gridY, (startZ + (i * step))), length, sh, sw);
    var vb = (i * perStripVn);
    var f = ((tileWorld, vb, vH) => ((c$2, uvw$2) => $m_Lsketches_rooms_gridceiling_GridCeiling$package$().U(c$2, (c$2.l / tileWorld), (vb + (uvw$2.k * vH)))))(tileWorld, vb, vH);
    var $x_4 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
    var x0 = box.eN;
    var x1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0);
    var $x_3 = f(x0, x1);
    var x0$1 = box.eb;
    var x1$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
    var $x_2 = f(x0$1, x1$1);
    var x0$2 = box.ec;
    var x1$2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
    var $x_1 = f(x0$2, x1$2);
    var x0$3 = box.eO;
    var x1$3 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0);
    faces.push($x_4.T($x_3, $x_2, $x_1, f(x0$3, x1$3)));
    var f$1 = ((tileWorld, vb, vH) => ((c$2$1, uvw$2$1) => $m_Lsketches_rooms_gridceiling_GridCeiling$package$().U(c$2$1, (c$2$1.l / tileWorld), ((vb + vH) + (uvw$2$1.k * vH)))))(tileWorld, vb, vH);
    var $x_8 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
    var x0$4 = box.eM;
    var x1$4 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 1.0);
    var $x_7 = f$1(x0$4, x1$4);
    var x0$5 = box.ea;
    var x1$5 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
    var $x_6 = f$1(x0$5, x1$5);
    var x0$6 = box.e9;
    var x1$6 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
    var $x_5 = f$1(x0$6, x1$6);
    var x0$7 = box.eL;
    var x1$7 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0);
    faces.push($x_8.T($x_7, $x_6, $x_5, f$1(x0$7, x1$7)));
    var f$2 = ((tileWorld, vb, vH, vB) => ((c$2$2, uvw$2$2) => $m_Lsketches_rooms_gridceiling_GridCeiling$package$().U(c$2$2, (c$2$2.l / tileWorld), ((vb + (2.0 * vH)) + (uvw$2$2.m * vB)))))(tileWorld, vb, vH, vB);
    var $x_12 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
    var x0$8 = box.eb;
    var x1$8 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
    var $x_11 = f$2(x0$8, x1$8);
    var x0$9 = box.e9;
    var x1$9 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
    var $x_10 = f$2(x0$9, x1$9);
    var x0$10 = box.ea;
    var x1$10 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
    var $x_9 = f$2(x0$10, x1$10);
    var x0$11 = box.ec;
    var x1$11 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
    faces.push($x_12.T($x_11, $x_10, $x_9, f$2(x0$11, x1$11)));
    i = ((1 + i) | 0);
  }
  return faces;
});
$p.ji = (function(n, length, zCenter, startX, step, gridY, sw, sh, tileWorld, vTileCount) {
  var perStripV = ((2.0 * sh) + sw);
  var vFull = (vTileCount * perStripV);
  var vH = (sh / vFull);
  var vB = (sw / vFull);
  var perStripVn = (perStripV / vFull);
  var faces = [];
  var i = 0;
  while ((i < n)) {
    var box = $m_Ltrivalibs_graphics_geometry_Box$().hw(new $c_Ltrivalibs_graphics_math_cpu_Vec3((startX + (i * step)), gridY, zCenter), sw, sh, length);
    var vb = (i * perStripVn);
    var f = ((tileWorld, vb, vH) => ((c$2, uvw$2) => $m_Lsketches_rooms_gridceiling_GridCeiling$package$().U(c$2, (c$2.m / tileWorld), (vb + (uvw$2.k * vH)))))(tileWorld, vb, vH);
    var $x_4 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
    var x0 = box.eL;
    var x1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0);
    var $x_3 = f(x0, x1);
    var x0$1 = box.e9;
    var x1$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
    var $x_2 = f(x0$1, x1$1);
    var x0$2 = box.eb;
    var x1$2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
    var $x_1 = f(x0$2, x1$2);
    var x0$3 = box.eN;
    var x1$3 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0);
    faces.push($x_4.T($x_3, $x_2, $x_1, f(x0$3, x1$3)));
    var f$1 = ((tileWorld, vb, vH) => ((c$2$1, uvw$2$1) => $m_Lsketches_rooms_gridceiling_GridCeiling$package$().U(c$2$1, (c$2$1.m / tileWorld), ((vb + vH) + (uvw$2$1.k * vH)))))(tileWorld, vb, vH);
    var $x_8 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
    var x0$4 = box.eO;
    var x1$4 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0);
    var $x_7 = f$1(x0$4, x1$4);
    var x0$5 = box.ec;
    var x1$5 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
    var $x_6 = f$1(x0$5, x1$5);
    var x0$6 = box.ea;
    var x1$6 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
    var $x_5 = f$1(x0$6, x1$6);
    var x0$7 = box.eM;
    var x1$7 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 1.0);
    faces.push($x_8.T($x_7, $x_6, $x_5, f$1(x0$7, x1$7)));
    var f$2 = ((tileWorld, vb, vH, vB) => ((c$2$2, uvw$2$2) => $m_Lsketches_rooms_gridceiling_GridCeiling$package$().U(c$2$2, (c$2$2.m / tileWorld), ((vb + (2.0 * vH)) + (uvw$2$2.l * vB)))))(tileWorld, vb, vH, vB);
    var $x_12 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
    var x0$8 = box.eb;
    var x1$8 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
    var $x_11 = f$2(x0$8, x1$8);
    var x0$9 = box.e9;
    var x1$9 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
    var $x_10 = f$2(x0$9, x1$9);
    var x0$10 = box.ea;
    var x1$10 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
    var $x_9 = f$2(x0$10, x1$10);
    var x0$11 = box.ec;
    var x1$11 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
    faces.push($x_12.T($x_11, $x_10, $x_9, f$2(x0$11, x1$11)));
    i = ((1 + i) | 0);
  }
  return faces;
});
$p.gy = (function(size, centerXZ, y, normal, tileWorld) {
  var center$proxy1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(centerXZ, y, centerXZ);
  var f = ((pos$2, _$1$2) => $m_Lsketches_rooms_gridceiling_GridCeiling$package$().U(pos$2, (pos$2.l / tileWorld), (pos$2.m / tileWorld)));
  var uvAtPivot = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.5, 0.5);
  var n = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().w(), normal, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
  var x = n.k;
  if (((+Math.abs(x)) > 0.999)) {
    var up = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().w(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
  } else {
    var up = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
  }
  var uDir = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().w(), up, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), n);
  var uVec = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().w(), uDir, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), size);
  var vVec = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().w(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().w(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().w(), n, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uDir), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$()), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), size);
  var tlPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().w(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().w(), center$proxy1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().w(), uVec, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uvAtPivot.h2)), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().w(), vVec, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uvAtPivot.h3));
  var trPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().w(), tlPos, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uVec);
  var blPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().w(), tlPos, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), vVec);
  var brPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().w(), blPos, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uVec);
  var $x_4 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x1 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 0.0);
  var $x_3 = f(tlPos, x1);
  var x1$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 1.0);
  var $x_2 = f(blPos, x1$1);
  var x1$2 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 1.0);
  var $x_1 = f(brPos, x1$2);
  var x1$3 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 0.0);
  return [$x_4.T($x_3, $x_2, $x_1, f(trPos, x1$3))];
});
$p.jf = (function(size, height) {
  var box = $m_Ltrivalibs_graphics_geometry_Box$().hw(new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, (0.5 * height), 0.0), size, height, size);
  var f = ((c$2, uvw$2) => $m_Lsketches_rooms_gridceiling_GridCeiling$package$().U(c$2, uvw$2.l, (0.0 + (0.2 * uvw$2.m))));
  var $x_24 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0 = box.eL;
  var x1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0);
  var $x_23 = f(x0, x1);
  var x0$1 = box.eN;
  var x1$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0);
  var $x_22 = f(x0$1, x1$1);
  var x0$2 = box.eO;
  var x1$2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0);
  var $x_21 = f(x0$2, x1$2);
  var x0$3 = box.eM;
  var x1$3 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 1.0);
  var $x_20 = $x_24.T($x_23, $x_22, $x_21, f(x0$3, x1$3));
  var f$1 = ((c$2$1, uvw$2$1) => $m_Lsketches_rooms_gridceiling_GridCeiling$package$().U(c$2$1, uvw$2$1.l, (0.2 + (0.2 * uvw$2$1.k))));
  var $x_19 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0$4 = box.eN;
  var x1$4 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0);
  var $x_18 = f$1(x0$4, x1$4);
  var x0$5 = box.eb;
  var x1$5 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
  var $x_17 = f$1(x0$5, x1$5);
  var x0$6 = box.ec;
  var x1$6 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
  var $x_16 = f$1(x0$6, x1$6);
  var x0$7 = box.eO;
  var x1$7 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0);
  var $x_15 = $x_19.T($x_18, $x_17, $x_16, f$1(x0$7, x1$7));
  var f$2 = ((c$2$2, uvw$2$2) => $m_Lsketches_rooms_gridceiling_GridCeiling$package$().U(c$2$2, uvw$2$2.l, (0.4 + (0.2 * uvw$2$2.k))));
  var $x_14 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0$8 = box.eM;
  var x1$8 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 1.0);
  var $x_13 = f$2(x0$8, x1$8);
  var x0$9 = box.ea;
  var x1$9 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
  var $x_12 = f$2(x0$9, x1$9);
  var x0$10 = box.e9;
  var x1$10 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
  var $x_11 = f$2(x0$10, x1$10);
  var x0$11 = box.eL;
  var x1$11 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0);
  var $x_10 = $x_14.T($x_13, $x_12, $x_11, f$2(x0$11, x1$11));
  var f$3 = ((c$2$3, uvw$2$3) => $m_Lsketches_rooms_gridceiling_GridCeiling$package$().U(c$2$3, uvw$2$3.m, (0.6000000000000001 + (0.2 * uvw$2$3.k))));
  var $x_9 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0$12 = box.eL;
  var x1$12 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0);
  var $x_8 = f$3(x0$12, x1$12);
  var x0$13 = box.e9;
  var x1$13 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
  var $x_7 = f$3(x0$13, x1$13);
  var x0$14 = box.eb;
  var x1$14 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
  var $x_6 = f$3(x0$14, x1$14);
  var x0$15 = box.eN;
  var x1$15 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0);
  var $x_5 = $x_9.T($x_8, $x_7, $x_6, f$3(x0$15, x1$15));
  var f$4 = ((c$2$4, uvw$2$4) => $m_Lsketches_rooms_gridceiling_GridCeiling$package$().U(c$2$4, uvw$2$4.m, (0.8 + (0.2 * uvw$2$4.k))));
  var $x_4 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0$16 = box.eO;
  var x1$16 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0);
  var $x_3 = f$4(x0$16, x1$16);
  var x0$17 = box.ec;
  var x1$17 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
  var $x_2 = f$4(x0$17, x1$17);
  var x0$18 = box.ea;
  var x1$18 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
  var $x_1 = f$4(x0$18, x1$18);
  var x0$19 = box.eM;
  var x1$19 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 1.0);
  return [$x_20, $x_15, $x_10, $x_5, $x_4.T($x_3, $x_2, $x_1, f$4(x0$19, x1$19))];
});
$p.lZ = (function() {
  var canvas = document.getElementById("canvas");
  $m_Ltrivalibs_graphics_painter_Painter$().kW(canvas, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((p$8) => {
    var rowCount = $doubleToInt((+Math.floor(170.0)));
    var colCount = $doubleToInt((+Math.floor(170.0)));
    var gridStep = (340.0 / rowCount);
    var gridStart = ((-170.0) + (0.5 * gridStep));
    var p$proxy3 = (28.0 / gridStep);
    var $x_1 = $m_RTLong$().gt((+Math.round(p$proxy3)));
    var x_$_lo = $x_1.l;
    var x_$_hi = $x_1.h;
    var x$1 = $doubleToInt(((4.294967296E9 * x_$_hi) + (x_$_lo >>> 0.0)));
    var TileCells = ((x$1 > 1) ? x$1 : 1);
    var tileWorld = (TileCells * gridStep);
    var p$proxy4 = (0.125 * tileWorld);
    var $x_2 = $m_RTLong$().gt((+Math.round(p$proxy4)));
    var x$2_$_lo = $x_2.l;
    var x$2_$_hi = $x_2.h;
    var x$3 = $doubleToInt(((4.294967296E9 * x$2_$_hi) + (x$2_$_lo >>> 0.0)));
    var noisePeriod = ((x$3 > 1) ? x$3 : 1);
    var NoiseScale = (noisePeriod / tileWorld);
    var noiseBakeShade = $p_Lsketches_rooms_gridceiling_GridCeiling$package$__bakeShade$1__I__D__Ltrivalibs_graphics_painter_Painter__D__I__Ltrivalibs_graphics_painter_Shade(this, 4, 0.3, p$8, NoiseScale, noisePeriod);
    var gridTileU = $doubleToInt((24.0 * tileWorld));
    var gridTileV = $doubleToInt((24.0 * (1.75 * TileCells)));
    var planeTilePx = $doubleToInt((24.0 * tileWorld));
    var rowTile = $p_Lsketches_rooms_gridceiling_GridCeiling$package$__bakeTile$1__Ltrivalibs_graphics_painter_Painter__I__I__sjs_js_Array__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_Panel(this, p$8, gridTileU, gridTileV, $m_Lsketches_rooms_gridceiling_GridCeiling$package$().jQ(TileCells, tileWorld, (0.5 * tileWorld), gridStart, gridStep, 19.0, 0.15, 0.8, tileWorld, TileCells), noiseBakeShade);
    var colTile = $p_Lsketches_rooms_gridceiling_GridCeiling$package$__bakeTile$1__Ltrivalibs_graphics_painter_Painter__I__I__sjs_js_Array__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_Panel(this, p$8, gridTileU, gridTileV, $m_Lsketches_rooms_gridceiling_GridCeiling$package$().ji(TileCells, tileWorld, (0.5 * tileWorld), gridStart, gridStep, 19.0, 0.15, 0.8, tileWorld, TileCells), noiseBakeShade);
    var groundTile = $p_Lsketches_rooms_gridceiling_GridCeiling$package$__bakeTile$1__Ltrivalibs_graphics_painter_Painter__I__I__sjs_js_Array__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_Panel(this, p$8, planeTilePx, planeTilePx, $m_Lsketches_rooms_gridceiling_GridCeiling$package$().gy(tileWorld, (0.5 * tileWorld), 0.0, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), tileWorld), noiseBakeShade);
    var ceilTile = $p_Lsketches_rooms_gridceiling_GridCeiling$package$__bakeTile$1__Ltrivalibs_graphics_painter_Painter__I__I__sjs_js_Array__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_Panel(this, p$8, planeTilePx, planeTilePx, $m_Lsketches_rooms_gridceiling_GridCeiling$package$().gy(tileWorld, (0.5 * tileWorld), 20.0, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().w(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$()), tileWorld), noiseBakeShade);
    var boxTile = $p_Lsketches_rooms_gridceiling_GridCeiling$package$__bakeTile$1__Ltrivalibs_graphics_painter_Painter__I__I__sjs_js_Array__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_Panel(this, p$8, 1024, 1024, $m_Lsketches_rooms_gridceiling_GridCeiling$package$().jf(7.0, 20.5), noiseBakeShade);
    var rowForm = $p_Lsketches_rooms_gridceiling_GridCeiling$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$8, $m_Lsketches_rooms_gridceiling_GridCeiling$package$().jQ(rowCount, 340.0, 0.0, gridStart, gridStep, 19.0, 0.15, 0.8, tileWorld, TileCells));
    var colForm = $p_Lsketches_rooms_gridceiling_GridCeiling$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$8, $m_Lsketches_rooms_gridceiling_GridCeiling$package$().ji(colCount, 340.0, 0.0, gridStart, gridStep, 19.0, 0.15, 0.8, tileWorld, TileCells));
    var groundForm = $p_Lsketches_rooms_gridceiling_GridCeiling$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$8, $m_Lsketches_rooms_gridceiling_GridCeiling$package$().gy(340.0, 0.0, 0.0, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), tileWorld));
    var ceilForm = $p_Lsketches_rooms_gridceiling_GridCeiling$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$8, $m_Lsketches_rooms_gridceiling_GridCeiling$package$().gy(340.0, 0.0, 20.0, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().w(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$()), tileWorld));
    var boxForm = $p_Lsketches_rooms_gridceiling_GridCeiling$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$8, $m_Lsketches_rooms_gridceiling_GridCeiling$package$().jf(7.0, 20.5));
    var program = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    var d = ({});
    var ctx = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().J;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().J = reg;
    try {
      var AssignTarget_this = ctx.fu.hn;
      var value$proxy4 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().mi(ctx.iZ.ar("mvp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().kP(), $m_Ltrivalibs_graphics_math_gpu_vec4$().hy(ctx.ft.ar("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().K().p(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().hE(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$());
      var x0 = (((("  " + AssignTarget_this.ei) + " = ") + value$proxy4.e) + ";");
      var AssignTarget_this$2 = ctx.fu.fZ("uv");
      var value$proxy5 = ctx.ft.ar("uv");
      var $x_3 = $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs([x0, (((("  " + AssignTarget_this$2.ei) + " = ") + value$proxy5.e) + ";")]), "", "\n", "");
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().J = prev;
    }
    program.fs = $x_3;
    var array$1 = reg.f1;
    var len = (array$1.length | 0);
    var i = 0;
    while ((i < len)) {
      $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$1[i]);
      i = ((1 + i) | 0);
    }
    var d$2 = ({});
    var ctx$2 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().J;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().J = reg$2;
    try {
      var n = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("n");
      var c = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("c");
      var x0$2 = n.hu($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().hE().hO($m_Ltrivalibs_graphics_math_gpu_expr$package$().hx($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), ctx$2.hh.ar("uv"), ctx$2.iY.ar("samp"))));
      var x1$1 = c.hu($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().jh($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().k8($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ja($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().k6(n, 0.5), 1.0), 0.5)));
      var AssignTarget_this$1 = ctx$2.hi.fZ("color");
      var value$proxy6 = $m_Ltrivalibs_graphics_math_gpu_vec4$().hy($m_Ltrivalibs_graphics_math_gpu_vec3$().jd(c), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().K().p(1.0));
      var $x_4 = $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs([x0$2, x1$1, (((("  " + AssignTarget_this$1.ei) + " = ") + value$proxy6.e) + ";")]), "", "\n", "");
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().J = prev$2;
    }
    program.fr = $x_4;
    var array$3 = reg$2.f1;
    var len$1 = (array$3.length | 0);
    var i$1 = 0;
    while ((i$1 < len$1)) {
      $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$3[i$1]);
      i$1 = ((1 + i$1) | 0);
    }
    var b = program.fs;
    var b$1 = program.fr;
    var helperFns$proxy2 = program.jq();
    var id = p$8.ed;
    p$8.ed = ((1 + p$8.ed) | 0);
    var names = $m_sjs_js_ArrayOpsCommon$().c(["mvp"], $m_sjs_js_ArrayOpsCommon$().c(["samp"], []));
    var dict = ({});
    var i$2 = 0;
    while ((i$2 < (names.length | 0))) {
      dict[names[i$2]] = i$2;
      i$2 = ((1 + i$2) | 0);
    }
    var names$2 = $m_sjs_js_ArrayOpsCommon$().c(["tex"], []);
    var dict$2 = ({});
    var i$2$1 = 0;
    while ((i$2$1 < (names$2.length | 0))) {
      dict$2[names$2[i$2$1]] = i$2$1;
      i$2$1 = ((1 + i$2$1) | 0);
    }
    var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef(b, b$1, helperFns$proxy2);
    var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().c(["position"], $m_sjs_js_ArrayOpsCommon$().c(["uv"], [])), $m_sjs_js_ArrayOpsCommon$().c(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().c(["vec2<f32>"], [])), $m_sjs_js_ArrayOpsCommon$().c([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().c([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().c(["uv"], []), $m_sjs_js_ArrayOpsCommon$().c(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().c([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().c(["color"], []), $m_sjs_js_ArrayOpsCommon$().c(["vec4<f32>"], []), []);
    var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().c(["mvp"], $m_sjs_js_ArrayOpsCommon$().c(["samp"], [])), $m_sjs_js_ArrayOpsCommon$().c([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).hf.em()], $m_sjs_js_ArrayOpsCommon$().c([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).he.em()], [])));
    var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().c([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.f0, sd.eZ, fragBuiltinParams);
    var wgsl = (baseWgsl + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
    var args$proxy2 = $m_sr_ScalaRunTime$().hN(new ($d_sjs_js_Any.r().C)([wgsl]));
    console.log(...$m_sjsr_Compat$().hK(args$proxy2));
    var module = p$8.h.createShaderModule(({
      "code": wgsl
    }));
    var formats = $m_sjs_js_ArrayOpsCommon$().c(["float32x3"], $m_sjs_js_ArrayOpsCommon$().c(["float32x2"], []));
    var sizes = $m_sjs_js_ArrayOpsCommon$().c([12], $m_sjs_js_ArrayOpsCommon$().c([8], []));
    var offsets = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes);
    var stride = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes);
    var attributes = [];
    var i$3 = 0;
    while ((i$3 < (formats.length | 0))) {
      var value$4 = i$3;
      var value$5 = (offsets[i$3] | 0);
      var s = formats[i$3];
      attributes.push(({
        "shaderLocation": value$4,
        "offset": value$5,
        "format": s
      }));
      i$3 = ((1 + i$3) | 0);
    }
    var vbl = ({
      "arrayStride": stride,
      "attributes": attributes
    });
    var $x_7 = $m_sjs_js_ArrayOpsCommon$();
    var $x_6 = $m_sjs_js_ArrayOpsCommon$();
    var _2 = ({
      "type": "uniform"
    });
    var $x_5 = $m_sjs_js_ArrayOpsCommon$();
    var _2$1 = ({});
    var descriptors = $x_7.c([$x_6.c([({
      "binding": 0,
      "visibility": 1,
      "buffer": _2
    })], $x_5.c([({
      "binding": 1,
      "visibility": 2,
      "sampler": _2$1
    })], []))], []);
    var result = [];
    var len$2 = (descriptors.length | 0);
    var i$4 = 0;
    while ((i$4 < len$2)) {
      var x0$4 = descriptors[i$4];
      (result.push(p$8.h.createBindGroupLayout(({
        "entries": x0$4
      }))) | 0);
      i$4 = ((1 + i$4) | 0);
    }
    var \u03b42$___1 = result;
    var \u03b42$___2 = $m_Ltrivalibs_graphics_shader_layouts$().hB(p$8.h, result);
    var bgls$2 = \u03b42$___1;
    var $x_8 = $m_sjs_js_ArrayOpsCommon$();
    var _2$2 = ({});
    var entries = $x_8.c([({
      "binding": 0,
      "visibility": 2,
      "texture": _2$2
    })], []);
    var panelBgl = p$8.h.createBindGroupLayout(({
      "entries": entries
    }));
    var allBgls = ((panelBgl !== null) ? $m_sjs_js_ArrayOpsCommon$().c(bgls$2, [panelBgl]) : bgls$2);
    var pl = $m_Ltrivalibs_graphics_shader_layouts$().hB(p$8.h, allBgls);
    var renderShade = new $c_Ltrivalibs_graphics_painter_Shade(id, module, vbl, bgls$2[0], panelBgl, pl, false, dict, dict$2);
    var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
    var uv$proxy1 = ul$proxy1.ii;
    var buffer = new ArrayBuffer(64);
    var arr$proxy4 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
    var mvp = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy4.dv, 0), p$8.h, uv$proxy1);
    var samp = p$8.jR("linear", "linear", "linear", "repeat", (void 0), (void 0));
    var clampSamp = p$8.jR("linear", "linear", "linear", "clamp-to-edge", (void 0), (void 0));
    var Bindable_this = p$8.f5(groundForm, renderShade, "none", (void 0));
    var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", groundTile);
    var \u03b4scrutinee155 = e1$proxy1.ag;
    var idx = (Bindable_this.F.aq.tex | 0);
    while (((Bindable_this.x.length | 0) <= idx)) {
      Bindable_this.x.push(null);
    }
    Bindable_this.x[idx] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee155);
    var Bindable_this$3 = p$8.f5(ceilForm, renderShade, "none", (void 0));
    var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", ceilTile);
    var \u03b4scrutinee165 = e1$proxy2.ag;
    var idx$2 = (Bindable_this$3.F.aq.tex | 0);
    while (((Bindable_this$3.x.length | 0) <= idx$2)) {
      Bindable_this$3.x.push(null);
    }
    Bindable_this$3.x[idx$2] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee165);
    var Bindable_this$5 = p$8.f5(rowForm, renderShade, "none", (void 0));
    var e1$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", rowTile);
    var \u03b4scrutinee175 = e1$proxy3.ag;
    var idx$3 = (Bindable_this$5.F.aq.tex | 0);
    while (((Bindable_this$5.x.length | 0) <= idx$3)) {
      Bindable_this$5.x.push(null);
    }
    Bindable_this$5.x[idx$3] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee175);
    var Bindable_this$7 = p$8.f5(colForm, renderShade, "none", (void 0));
    var e1$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", colTile);
    var \u03b4scrutinee185 = e1$proxy4.ag;
    var idx$4 = (Bindable_this$7.F.aq.tex | 0);
    while (((Bindable_this$7.x.length | 0) <= idx$4)) {
      Bindable_this$7.x.push(null);
    }
    Bindable_this$7.x[idx$4] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee185);
    var Bindable_this$9 = p$8.f5(boxForm, renderShade, "none", (void 0));
    var e1$proxy5 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", boxTile);
    var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", clampSamp);
    var \u03b4scrutinee195 = e1$proxy5.ag;
    var idx$5 = (Bindable_this$9.F.aq.tex | 0);
    while (((Bindable_this$9.x.length | 0) <= idx$5)) {
      Bindable_this$9.x.push(null);
    }
    Bindable_this$9.x[idx$5] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee195);
    var \u03b4scrutinee201 = e2$proxy1.ag;
    var idx$6 = (Bindable_this$9.F.gm.samp | 0);
    while (((Bindable_this$9.eh.length | 0) <= idx$6)) {
      Bindable_this$9.eh.push(null);
    }
    Bindable_this$9.eh[idx$6] = \u03b4scrutinee201;
    var clearColor$2 = new $c_T4(0.08, 0.1, 0.13, 1.0);
    var shapes$2 = [Bindable_this, Bindable_this$3, Bindable_this$5, Bindable_this$7, Bindable_this$9];
    var Panel_this = p$8.jM((void 0), (void 0), clearColor$2, true, true, (void 0), (void 0), (void 0), (void 0), (void 0), shapes$2, (void 0), (void 0));
    var e1$proxy6 = new $c_Ltrivalibs_graphics_painter_BindPair("mvp", mvp);
    var e2$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", samp);
    var \u03b4scrutinee208 = e1$proxy6.ag;
    var dict$proxy1 = Panel_this.fn;
    dict$proxy1.mvp = \u03b4scrutinee208;
    var \u03b4scrutinee209 = e2$proxy2.ag;
    var dict$proxy2 = Panel_this.fn;
    dict$proxy2.samp = \u03b4scrutinee209;
    var cam = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().ke(0.6, ((canvas.width | 0) / (canvas.height | 0)), 0.1, 340.0, 0.0, 0.0, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 3.0, 15.0));
    $m_Ltrivalibs_dev_devPreserve$().ki(cam, "camera");
    var input = $m_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$().kZ(p$8.eQ, true, 400.0, 5.0, true, (void 0));
    var controller = new $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController(1.0, 3.0);
    p$8.lL(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((v1$2, v2$2) => {
      var cw = (+v1$2);
      var ch = (+v2$2);
      var aspect$2 = (cw / ch);
      var fov$1 = cam.eX;
      var near$1 = cam.eY;
      var far$1 = cam.eW;
      var rotH$2 = cam.O;
      var rotV$2 = cam.ah;
      var pos$2 = cam.G;
      cam.hH(fov$1, aspect$2, near$1, far$1, rotH$2, rotV$2, pos$2);
    })));
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$8, rowTile);
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$8, colTile);
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$8, groundTile);
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$8, ceilTile);
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$8, boxTile);
    $m_Ltrivalibs_utils_animation_animate$package$().kd(((p$5) => ((arg1$2) => {
      controller.mg(cam, input, (+arg1$2));
      var value$proxy7 = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().jn(), cam.hd, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), cam.mj());
      var ref = mvp.gI;
      $f_Ltrivalibs_graphics_math_Mat4MutableOps__set__O__Ltrivalibs_graphics_math_Mat4Mutable__O__Ltrivalibs_graphics_math_Mat4Base__V($m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$().kQ(), ref, $m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$(), value$proxy7, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
      var $x_10 = mvp.ih.queue;
      var $x_9 = mvp.gJ;
      var s$proxy3 = mvp.gI;
      $x_10.writeBuffer($x_9, 0.0, s$proxy3.dv.buffer);
      $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$5, Panel_this);
      p$5.m4(Panel_this);
    }))(p$8));
  })));
});
var $d_Lsketches_rooms_gridceiling_GridCeiling$package$ = new $TypeData().i($c_Lsketches_rooms_gridceiling_GridCeiling$package$, "sketches.rooms.gridceiling.GridCeiling$package$", ({
  de: 1
}));
var $n_Lsketches_rooms_gridceiling_GridCeiling$package$;
function $m_Lsketches_rooms_gridceiling_GridCeiling$package$() {
  if ((!$n_Lsketches_rooms_gridceiling_GridCeiling$package$)) {
    $n_Lsketches_rooms_gridceiling_GridCeiling$package$ = new $c_Lsketches_rooms_gridceiling_GridCeiling$package$();
  }
  return $n_Lsketches_rooms_gridceiling_GridCeiling$package$;
}
function $s_Lsketches_rooms_gridceiling_roomsGridCeiling__main__AT__V(args) {
  try {
    $m_Lsketches_rooms_gridceiling_GridCeiling$package$().lZ();
  } catch (e) {
    if (false) {
      $m_s_util_CommandLineParser$().m5(e);
    } else {
      throw e;
    }
  }
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
  df: 1
}));
/** @constructor */
function $c_Ltrivalibs_dev_dev$package$() {
  this.eK = null;
  this.gH = false;
  $n_Ltrivalibs_dev_dev$package$ = this;
  this.eK = [];
  this.gH = false;
}
$p = $c_Ltrivalibs_dev_dev$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_dev_dev$package$;
/** @constructor */
function $h_Ltrivalibs_dev_dev$package$() {
}
$h_Ltrivalibs_dev_dev$package$.prototype = $p;
$p.kt = (function() {
  return (import.meta.hot !== (void 0));
});
$p.lE = (function() {
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
$p.m7 = (function(label) {
  return ((("trivalibs:dev:" + $m_Ltrivalibs_dev_dev$package$().lE()) + ":") + label);
});
$p.hI = (function() {
  return window.sessionStorage;
});
$p.lU = (function(key) {
  var raw = $m_Ltrivalibs_dev_dev$package$().hI().getItem(key);
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
$p.mn = (function(key, json) {
  $m_Ltrivalibs_dev_dev$package$().hI().setItem(key, JSON.stringify(json));
});
$p.lY = (function(key) {
  $m_Ltrivalibs_dev_dev$package$().hI().removeItem(key);
});
$p.kA = (function() {
  if ((!$m_Ltrivalibs_dev_dev$package$().gH)) {
    $m_Ltrivalibs_dev_dev$package$().gH = true;
    window.addEventListener("pagehide", ((_$1$2) => {
      var i = 0;
      while ((i < ($m_Ltrivalibs_dev_dev$package$().eK.length | 0))) {
        $m_Ltrivalibs_dev_dev$package$().eK[i].f2();
        i = ((1 + i) | 0);
      }
    }));
  }
});
$p.lV = (function(flush) {
  $m_Ltrivalibs_dev_dev$package$().kA();
  $m_Ltrivalibs_dev_dev$package$().eK.push(flush);
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    var idx = $m_sjs_js_ArrayOps$().kU($m_Ltrivalibs_dev_dev$package$().eK, flush, 0);
    if ((idx >= 0)) {
      $m_Ltrivalibs_dev_dev$package$().eK.splice(idx, 1);
    }
  }));
});
var $d_Ltrivalibs_dev_dev$package$ = new $TypeData().i($c_Ltrivalibs_dev_dev$package$, "trivalibs.dev.dev$package$", ({
  dg: 1
}));
var $n_Ltrivalibs_dev_dev$package$;
function $m_Ltrivalibs_dev_dev$package$() {
  if ((!$n_Ltrivalibs_dev_dev$package$)) {
    $n_Ltrivalibs_dev_dev$package$ = new $c_Ltrivalibs_dev_dev$package$();
  }
  return $n_Ltrivalibs_dev_dev$package$;
}
function $p_Ltrivalibs_dev_devPreserve$__encodeCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any($thiz, cam) {
  return [cam.G.l, cam.G.k, cam.G.m, cam.O, cam.ah];
}
function $p_Ltrivalibs_dev_devPreserve$__applyCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any__V($thiz, cam, json) {
  if ((!(!Array.isArray(json)))) {
    if (((json.length | 0) >= 5)) {
      var pos$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((+json[0]), (+json[1]), (+json[2]));
      var rotH$1 = (+json[3]);
      var rotV$1 = (+json[4]);
      var fov$1 = cam.eX;
      var aspect$1 = cam.fp;
      var near$1 = cam.eY;
      var far$1 = cam.eW;
      cam.hH(fov$1, aspect$1, near$1, far$1, rotH$1, rotV$1, pos$1);
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
$p.ki = (function(cam, label) {
  if ((!$m_Ltrivalibs_dev_dev$package$().kt())) {
    return new $c_Ltrivalibs_dev_DevHandle(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => (void 0))));
  } else {
    var sk = $m_Ltrivalibs_dev_dev$package$().m7(label);
    var initPos = cam.G;
    var initRotH = cam.O;
    var initRotV = cam.ah;
    var stored = $m_Ltrivalibs_dev_dev$package$().lU(sk);
    if ((stored !== null)) {
      $p_Ltrivalibs_dev_devPreserve$__applyCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any__V(this, cam, stored);
    }
    return new $c_Ltrivalibs_dev_DevHandle(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(((unregister) => (() => {
      unregister.f2();
      $m_Ltrivalibs_dev_dev$package$().lY(sk);
      var fov$proxy1 = cam.eX;
      var aspect$proxy1 = cam.fp;
      var near$proxy1 = cam.eY;
      var far$proxy1 = cam.eW;
      cam.hH(fov$proxy1, aspect$proxy1, near$proxy1, far$proxy1, initRotH, initRotV, initPos);
    }))($m_Ltrivalibs_dev_dev$package$().lV(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
      $m_Ltrivalibs_dev_dev$package$().mn(sk, $p_Ltrivalibs_dev_devPreserve$__encodeCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any(this, cam));
    }))))));
  }
});
var $d_Ltrivalibs_dev_devPreserve$ = new $TypeData().i($c_Ltrivalibs_dev_devPreserve$, "trivalibs.dev.devPreserve$", ({
  dh: 1
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
  this.gI = null;
  this.ih = null;
  this.jZ = null;
  this.gJ = null;
  this.gI = buffer;
  this.ih = device;
  this.jZ = uv;
  var b = (buffer.dv.byteLength | 0);
  var value = ((b < 16) ? 16 : b);
  var $x_1 = device.createBuffer(({
    "size": value,
    "usage": 72
  }));
  this.gJ = $x_1;
}
$p = $c_Ltrivalibs_graphics_buffers_BufferBinding.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_BufferBinding;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_BufferBinding() {
}
$h_Ltrivalibs_graphics_buffers_BufferBinding.prototype = $p;
function $isArrayOf_Ltrivalibs_graphics_buffers_BufferBinding(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aG)));
}
var $d_Ltrivalibs_graphics_buffers_BufferBinding = new $TypeData().i($c_Ltrivalibs_graphics_buffers_BufferBinding, "trivalibs.graphics.buffers.BufferBinding", ({
  aG: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Box(center, size, frontTopLeft, frontTopRight, frontBottomLeft, frontBottomRight, backTopLeft, backTopRight, backBottomLeft, backBottomRight) {
  this.eN = null;
  this.eO = null;
  this.eb = null;
  this.ec = null;
  this.eL = null;
  this.eM = null;
  this.e9 = null;
  this.ea = null;
  this.eN = frontTopLeft;
  this.eO = frontTopRight;
  this.eb = frontBottomLeft;
  this.ec = frontBottomRight;
  this.eL = backTopLeft;
  this.eM = backTopRight;
  this.e9 = backBottomLeft;
  this.ea = backBottomRight;
}
$p = $c_Ltrivalibs_graphics_geometry_Box.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Box;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Box() {
}
$h_Ltrivalibs_graphics_geometry_Box.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_Box = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Box, "trivalibs.graphics.geometry.Box", ({
  dm: 1
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
$p.hw = (function(center, width, height, depth) {
  var hw = (0.5 * width);
  var hh = (0.5 * height);
  var hd = (0.5 * depth);
  var cx = center.l;
  var cy = center.k;
  var cz = center.m;
  return new $c_Ltrivalibs_graphics_geometry_Box(center, new $c_Ltrivalibs_graphics_math_cpu_Vec3(width, height, depth), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy + hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy + hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy - hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy - hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy + hh), (cz - hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy + hh), (cz - hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy - hh), (cz - hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy - hh), (cz - hd)));
});
var $d_Ltrivalibs_graphics_geometry_Box$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Box$, "trivalibs.graphics.geometry.Box$", ({
  dn: 1
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
  this.ij = null;
  this.gK = null;
  this.ij = vertices;
  this.gK = indices;
}
$p = $c_Ltrivalibs_graphics_geometry_BufferedGeometry.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_BufferedGeometry;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_BufferedGeometry() {
}
$h_Ltrivalibs_graphics_geometry_BufferedGeometry.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_BufferedGeometry = new $TypeData().i($c_Ltrivalibs_graphics_geometry_BufferedGeometry, "trivalibs.graphics.geometry.BufferedGeometry", ({
  dp: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_FaceData(normal, section) {
}
$p = $c_Ltrivalibs_graphics_geometry_FaceData.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_FaceData;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_FaceData() {
}
$h_Ltrivalibs_graphics_geometry_FaceData.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_FaceData = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FaceData, "trivalibs.graphics.geometry.FaceData", ({
  dq: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Mesh(evidence$1) {
  this.gL = null;
  this.af = null;
  this.ik = null;
  this.g6 = null;
  this.g5 = null;
  this.gL = evidence$1;
  this.af = [];
  this.ik = [];
  this.g6 = [];
  this.g5 = ({});
}
$p = $c_Ltrivalibs_graphics_geometry_Mesh.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Mesh;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Mesh() {
}
$h_Ltrivalibs_graphics_geometry_Mesh.prototype = $p;
$p.kb = (function(face, normal, section) {
  var faceIdx = (this.af.length | 0);
  this.af.push(face);
  this.ik.push(new $c_Ltrivalibs_graphics_geometry_FaceData(normal, section));
  var n = (face.length | 0);
  var slot = 0;
  while ((slot < n)) {
    var v = face[slot];
    var key = $m_Ltrivalibs_graphics_geometry_package$package$().lS(this.gL.jN(v));
    if ($m_sjs_js_Any$ObjectCompanionOps$().kR(Object, this.g5, key)) {
      var $x_2 = this.g6;
      var dict = this.g5;
      if ((!(!(!$m_sjs_js_WrappedDictionary$Cache$().ie.call(dict, key))))) {
        throw new $c_ju_NoSuchElementException(("key not found: " + key));
      }
      var $x_1 = $x_2[(dict[key] | 0)];
      $x_1.ip.push(new $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIdx, slot));
    } else {
      var idx = (this.g6.length | 0);
      var dict$1 = this.g5;
      dict$1[key] = idx;
      this.g6.push(new $c_Ltrivalibs_graphics_geometry_VertexPosition(this.gL.jN(v), [new $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIdx, slot)]));
    }
    slot = ((1 + slot) | 0);
  }
});
var $d_Ltrivalibs_graphics_geometry_Mesh = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Mesh, "trivalibs.graphics.geometry.Mesh", ({
  dt: 1
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
$p.kg = (function(faces, normal, section, evidence$1) {
  var m = new $c_Ltrivalibs_graphics_geometry_Mesh(evidence$1);
  $m_Ltrivalibs_graphics_geometry_mesh$package$().kc(m, faces, normal, section, evidence$1);
  return m;
});
var $d_Ltrivalibs_graphics_geometry_Mesh$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Mesh$, "trivalibs.graphics.geometry.Mesh$", ({
  du: 1
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
  this.k0 = 0;
  this.k1 = 0;
  this.k0 = faceIndex;
  this.k1 = vertexSlot;
}
$p = $c_Ltrivalibs_graphics_geometry_PositionFaceRef.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_PositionFaceRef;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_PositionFaceRef() {
}
$h_Ltrivalibs_graphics_geometry_PositionFaceRef.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_PositionFaceRef = new $TypeData().i($c_Ltrivalibs_graphics_geometry_PositionFaceRef, "trivalibs.graphics.geometry.PositionFaceRef", ({
  dw: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexPosition(position, faces) {
  this.ip = null;
  this.ip = faces;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexPosition.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexPosition;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexPosition() {
}
$h_Ltrivalibs_graphics_geometry_VertexPosition.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_VertexPosition = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexPosition, "trivalibs.graphics.geometry.VertexPosition", ({
  dB: 1
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
$p.lD = (function(idxBuf, vertexCount) {
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
  dC: 1
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
$p.kc = (function(m, faces, normal, section, evidence$1) {
  var i = 0;
  while ((i < (faces.length | 0))) {
    m.kb(faces[i], normal, section);
    i = ((1 + i) | 0);
  }
});
var $d_Ltrivalibs_graphics_geometry_mesh$package$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_mesh$package$, "trivalibs.graphics.geometry.mesh$package$", ({
  dD: 1
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
$p.lS = (function(v) {
  return (((($doubleToInt((10000.0 * v.l)) + ",") + $doubleToInt((10000.0 * v.k))) + ",") + $doubleToInt((10000.0 * v.m)));
});
var $d_Ltrivalibs_graphics_geometry_package$package$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_package$package$, "trivalibs.graphics.geometry.package$package$", ({
  dE: 1
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
$p.T = (function(tl, bl, br, tr) {
  return [tl, bl, br, tr];
});
var $d_Ltrivalibs_graphics_geometry_polygon$package$Quad$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_polygon$package$Quad$, "trivalibs.graphics.geometry.polygon$package$Quad$", ({
  dG: 1
}));
var $n_Ltrivalibs_graphics_geometry_polygon$package$Quad$;
function $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$() {
  if ((!$n_Ltrivalibs_graphics_geometry_polygon$package$Quad$)) {
    $n_Ltrivalibs_graphics_geometry_polygon$package$Quad$ = new $c_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  }
  return $n_Ltrivalibs_graphics_geometry_polygon$package$Quad$;
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($thiz, fovY, aspect, near, far) {
  var x = (0.5 * fovY);
  var f = (1.0 / (+Math.tan(x)));
  var rInv = (1.0 / (near - far));
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4((f / aspect), 0.0, 0.0, 0.0, 0.0, f, 0.0, 0.0, 0.0, 0.0, (far * rInv), (-1.0), 0.0, 0.0, ((near * far) * rInv), 0.0);
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($thiz, m, x$2, other) {
  var a00 = (+x$2.fH(m));
  var a01 = (+x$2.fI(m));
  var a02 = (+x$2.fJ(m));
  var a03 = (+x$2.fK(m));
  var a10 = (+x$2.fL(m));
  var a11 = (+x$2.fM(m));
  var a12 = (+x$2.fN(m));
  var a13 = (+x$2.fO(m));
  var a20 = (+x$2.fP(m));
  var a21 = (+x$2.fQ(m));
  var a22 = (+x$2.fR(m));
  var a23 = (+x$2.fS(m));
  var a30 = (+x$2.fT(m));
  var a31 = (+x$2.fU(m));
  var a32 = (+x$2.fV(m));
  var a33 = (+x$2.fW(m));
  var b00 = (+x$2.fH(other));
  var b01 = (+x$2.fI(other));
  var b02 = (+x$2.fJ(other));
  var b03 = (+x$2.fK(other));
  var b10 = (+x$2.fL(other));
  var b11 = (+x$2.fM(other));
  var b12 = (+x$2.fN(other));
  var b13 = (+x$2.fO(other));
  var b20 = (+x$2.fP(other));
  var b21 = (+x$2.fQ(other));
  var b22 = (+x$2.fR(other));
  var b23 = (+x$2.fS(other));
  var b30 = (+x$2.fT(other));
  var b31 = (+x$2.fU(other));
  var b32 = (+x$2.fV(other));
  var b33 = (+x$2.fW(other));
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4(((((a00 * b00) + (a10 * b01)) + (a20 * b02)) + (a30 * b03)), ((((a01 * b00) + (a11 * b01)) + (a21 * b02)) + (a31 * b03)), ((((a02 * b00) + (a12 * b01)) + (a22 * b02)) + (a32 * b03)), ((((a03 * b00) + (a13 * b01)) + (a23 * b02)) + (a33 * b03)), ((((a00 * b10) + (a10 * b11)) + (a20 * b12)) + (a30 * b13)), ((((a01 * b10) + (a11 * b11)) + (a21 * b12)) + (a31 * b13)), ((((a02 * b10) + (a12 * b11)) + (a22 * b12)) + (a32 * b13)), ((((a03 * b10) + (a13 * b11)) + (a23 * b12)) + (a33 * b13)), ((((a00 * b20) + (a10 * b21)) + (a20 * b22)) + (a30 * b23)), ((((a01 * b20) + (a11 * b21)) + (a21 * b22)) + (a31 * b23)), ((((a02 * b20) + (a12 * b21)) + (a22 * b22)) + (a32 * b23)), ((((a03 * b20) + (a13 * b21)) + (a23 * b22)) + (a33 * b23)), ((((a00 * b30) + (a10 * b31)) + (a20 * b32)) + (a30 * b33)), ((((a01 * b30) + (a11 * b31)) + (a21 * b32)) + (a31 * b33)), ((((a02 * b30) + (a12 * b31)) + (a22 * b32)) + (a32 * b33)), ((((a03 * b30) + (a13 * b31)) + (a23 * b32)) + (a33 * b33)));
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($thiz, m, x$2) {
  var a00 = (+x$2.fH(m));
  var a01 = (+x$2.fI(m));
  var a02 = (+x$2.fJ(m));
  var a03 = (+x$2.fK(m));
  var a10 = (+x$2.fL(m));
  var a11 = (+x$2.fM(m));
  var a12 = (+x$2.fN(m));
  var a13 = (+x$2.fO(m));
  var a20 = (+x$2.fP(m));
  var a21 = (+x$2.fQ(m));
  var a22 = (+x$2.fR(m));
  var a23 = (+x$2.fS(m));
  var a30 = (+x$2.fT(m));
  var a31 = (+x$2.fU(m));
  var a32 = (+x$2.fV(m));
  var a33 = (+x$2.fW(m));
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
  mb.js(m, (+x$4.fH(other)));
  mb.jt(m, (+x$4.fI(other)));
  mb.ju(m, (+x$4.fJ(other)));
  mb.jv(m, (+x$4.fK(other)));
  mb.jw(m, (+x$4.fL(other)));
  mb.jx(m, (+x$4.fM(other)));
  mb.jy(m, (+x$4.fN(other)));
  mb.jz(m, (+x$4.fO(other)));
  mb.jA(m, (+x$4.fP(other)));
  mb.jB(m, (+x$4.fQ(other)));
  mb.jC(m, (+x$4.fR(other)));
  mb.jD(m, (+x$4.fS(other)));
  mb.jE(m, (+x$4.fT(other)));
  mb.jF(m, (+x$4.fU(other)));
  mb.jG(m, (+x$4.fV(other)));
  mb.jH(m, (+x$4.fW(other)));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.l + other.l), (v.k + other.k), (v.m + other.m));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($thiz, v, x$2) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((-v.l), (-v.k), (-v.m));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.l - other.l), (v.k - other.k), (v.m - other.m));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, scalar) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.l * scalar), (v.k * scalar), (v.m * scalar));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__divScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, scalar) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.l / scalar), (v.k / scalar), (v.m / scalar));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3(((v.k * other.m) - (v.m * other.k)), ((v.m * other.l) - (v.l * other.m)), ((v.l * other.k) - (v.k * other.l)));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($thiz, v, x$2) {
  return $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__divScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, $f_Ltrivalibs_graphics_math_Vec3Base__length__O__D(x$2, v));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat4(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  this.gM = 0.0;
  this.gN = 0.0;
  this.gO = 0.0;
  this.gP = 0.0;
  this.gQ = 0.0;
  this.gR = 0.0;
  this.gS = 0.0;
  this.gT = 0.0;
  this.gU = 0.0;
  this.gV = 0.0;
  this.gW = 0.0;
  this.gX = 0.0;
  this.gY = 0.0;
  this.gZ = 0.0;
  this.h0 = 0.0;
  this.h1 = 0.0;
  this.gM = m00;
  this.gN = m01;
  this.gO = m02;
  this.gP = m03;
  this.gQ = m10;
  this.gR = m11;
  this.gS = m12;
  this.gT = m13;
  this.gU = m20;
  this.gV = m21;
  this.gW = m22;
  this.gX = m23;
  this.gY = m30;
  this.gZ = m31;
  this.h0 = m32;
  this.h1 = m33;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Mat4 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4, "trivalibs.graphics.math.cpu.Mat4", ({
  dS: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Quat(x, y, z, w) {
  this.X = 0.0;
  this.a5 = 0.0;
  this.a6 = 0.0;
  this.a4 = 0.0;
  this.X = x;
  this.a5 = y;
  this.a6 = z;
  this.a4 = w;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Quat.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Quat;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Quat() {
}
$h_Ltrivalibs_graphics_math_cpu_Quat.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Quat = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat, "trivalibs.graphics.math.cpu.Quat", ({
  dV: 1
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
$p.kJ = (function(angle) {
  var h = (0.5 * angle);
  return new $c_Ltrivalibs_graphics_math_cpu_Quat((+Math.sin(h)), 0.0, 0.0, (+Math.cos(h)));
});
$p.kK = (function(angle) {
  var h = (0.5 * angle);
  return new $c_Ltrivalibs_graphics_math_cpu_Quat(0.0, (+Math.sin(h)), 0.0, (+Math.cos(h)));
});
var $d_Ltrivalibs_graphics_math_cpu_Quat$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat$, "trivalibs.graphics.math.cpu.Quat$", ({
  dW: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Quat$;
function $m_Ltrivalibs_graphics_math_cpu_Quat$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Quat$)) {
    $n_Ltrivalibs_graphics_math_cpu_Quat$ = new $c_Ltrivalibs_graphics_math_cpu_Quat$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Quat$;
}
function $f_Ltrivalibs_graphics_math_cpu_QuatImmutableOps__quatMul__O__Ltrivalibs_graphics_math_Vec4Base__O__O($thiz, q, x$2, p) {
  return new $c_Ltrivalibs_graphics_math_cpu_Quat(((((q.a4 * p.X) + (q.X * p.a4)) + (q.a5 * p.a6)) - (q.a6 * p.a5)), ((((q.a4 * p.a5) - (q.X * p.a6)) + (q.a5 * p.a4)) + (q.a6 * p.X)), ((((q.a4 * p.a6) + (q.X * p.a5)) - (q.a5 * p.X)) + (q.a6 * p.a4)), ((((q.a4 * p.a4) - (q.X * p.X)) - (q.a5 * p.a5)) - (q.a6 * p.a6)));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec2(x, y) {
  this.h2 = 0.0;
  this.h3 = 0.0;
  this.h2 = x;
  this.h3 = y;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec2.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec2;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec2() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec2.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec2 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec2, "trivalibs.graphics.math.cpu.Vec2", ({
  e0: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec3(x, y, z) {
  this.l = 0.0;
  this.k = 0.0;
  this.m = 0.0;
  this.l = x;
  this.k = y;
  this.m = z;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec3.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec3;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec3() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec3.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec3 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3, "trivalibs.graphics.math.cpu.Vec3", ({
  e1: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
  this.iv = null;
  this.iw = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$.prototype = $p;
$p.kQ = (function() {
  if ((!this.iw)) {
    this.iv = new $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18();
    this.iw = true;
  }
  return this.iv;
});
var $d_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$, "trivalibs.graphics.math.cpu.mat4$package$Mat4Buffer$", ({
  e4: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
function $m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$ = new $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
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
$p.d = (function() {
  return this.e;
});
var $d_Ltrivalibs_graphics_math_gpu_Expr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_Expr, "trivalibs.graphics.math.gpu.Expr", ({
  aN: 1
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
$p.kO = (function() {
  return new $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), _$1$2))));
});
var $d_Ltrivalibs_graphics_math_gpu_LeftScalar$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LeftScalar$, "trivalibs.graphics.math.gpu.LeftScalar$", ({
  e8: 1
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
}
$p = $c_Ltrivalibs_graphics_math_gpu_expr$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_expr$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_expr$package$() {
}
$h_Ltrivalibs_graphics_math_gpu_expr$package$.prototype = $p;
$p.hx = (function(tex, uv, sampler) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("textureSample(" + tex.e) + ", ") + sampler.e) + ", ") + uv.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_expr$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_expr$package$, "trivalibs.graphics.math.gpu.expr$package$", ({
  eb: 1
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
  this.iz = null;
  this.iA = false;
  this.iD = null;
  this.iE = false;
  this.iF = null;
  this.iG = false;
  this.iH = null;
  this.iI = false;
  this.iB = null;
  this.iC = false;
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$.prototype = $p;
$p.jl = (function(v) {
  var s = ("" + v);
  return (((($f_T__indexOf__I__I(s, 46) >= 0) || ($f_T__indexOf__I__I(s, 69) >= 0)) || ($f_T__indexOf__I__I(s, 101) >= 0)) ? s : (s + ".0"));
});
$p.K = (function() {
  if ((!this.iA)) {
    this.iz = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1();
    this.iA = true;
  }
  return this.iz;
});
$p.jo = (function() {
  if ((!this.iE)) {
    this.iD = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4();
    this.iE = true;
  }
  return this.iD;
});
$p.jp = (function() {
  if ((!this.iG)) {
    this.iF = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5();
    this.iG = true;
  }
  return this.iF;
});
$p.hE = (function() {
  if ((!this.iI)) {
    this.iH = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6();
    this.iI = true;
  }
  return this.iH;
});
$p.kP = (function() {
  if ((!this.iC)) {
    this.iB = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$9();
    this.iC = true;
  }
  return this.iB;
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$, "trivalibs.graphics.math.gpu.float_expr$package$", ({
  ec: 1
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
$p.hx = (function(x, y, z) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("vec3<f32>(" + x.e) + ", ") + y.e) + ", ") + z.e) + ")"));
});
$p.jd = (function(scalar) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("vec3<f32>(" + scalar.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_vec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec3$, "trivalibs.graphics.math.gpu.vec3$", ({
  en: 1
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
$p.kh = (function(x, y, z, w) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((((("vec4<f32>(" + x.e) + ", ") + y.e) + ", ") + z.e) + ", ") + w.e) + ")"));
});
$p.hy = (function(xyz, w) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("vec4<f32>(" + xyz.e) + ", ") + w.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_vec4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec4$, "trivalibs.graphics.math.gpu.vec4$", ({
  eo: 1
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
  this.ag = null;
  this.ag = value;
}
$p = $c_Ltrivalibs_graphics_painter_BindPair.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_BindPair;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_BindPair() {
}
$h_Ltrivalibs_graphics_painter_BindPair.prototype = $p;
var $d_Ltrivalibs_graphics_painter_BindPair = new $TypeData().i($c_Ltrivalibs_graphics_painter_BindPair, "trivalibs.graphics.painter.BindPair", ({
  ep: 1
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
  var $x_1 = $thiz.fd.h;
  var value = (ab.byteLength | 0);
  var buf = $x_1.createBuffer(({
    "size": value,
    "usage": 24
  }));
  $thiz.fd.Y.writeBuffer(buf, 0.0, ab);
  if (($thiz.eP !== null)) {
    var opt$proxy2 = $thiz.eP;
    opt$proxy2.destroy();
  }
  $thiz.eP = buf;
  $thiz.g7 = count;
  $thiz.h5 = fmt;
}
function $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_bufferdata_BufferView__V($thiz, verts) {
  var $x_1 = $thiz.fd.h;
  var value = (verts.dv.buffer.byteLength | 0);
  var buf = $x_1.createBuffer(({
    "size": value,
    "usage": 40
  }));
  $thiz.fd.Y.writeBuffer(buf, 0.0, verts.dv.buffer);
  if (($thiz.fe !== null)) {
    var opt$proxy4 = $thiz.fe;
    opt$proxy4.destroy();
  }
  $thiz.fe = buf;
  $thiz.g8 = (verts.off | 0);
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Form(painter) {
  this.fd = null;
  this.fe = null;
  this.g8 = 0;
  this.eP = null;
  this.g7 = 0;
  this.h5 = null;
  this.h6 = null;
  this.h4 = null;
  this.fd = painter;
  this.fe = null;
  this.g8 = 0;
  this.eP = null;
  this.g7 = 0;
  this.h5 = "uint16";
  this.h6 = "triangle-list";
  this.h4 = "ccw";
}
$p = $c_Ltrivalibs_graphics_painter_Form.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Form;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Form() {
}
$h_Ltrivalibs_graphics_painter_Form.prototype = $p;
$p.m1 = (function(geometry, vertices, topology, frontFace) {
  if ((topology !== (void 0))) {
    this.h6 = topology;
  }
  if ((frontFace !== (void 0))) {
    this.h4 = frontFace;
  }
  if ((geometry !== (void 0))) {
    $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_bufferdata_BufferView__V(this, geometry.ij);
    if ((geometry.gK !== null)) {
      $p_Ltrivalibs_graphics_painter_Form__uploadIndices__sjs_js_typedarray_TypedArray__V(this, geometry.gK);
    }
  }
  if ((vertices !== (void 0))) {
    $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_bufferdata_BufferView__V(this, vertices);
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Form = new $TypeData().i($c_Ltrivalibs_graphics_painter_Form, "trivalibs.graphics.painter.Form", ({
  er: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter) {
  this.g9 = null;
  this.g9 = [];
}
$p = $c_Ltrivalibs_graphics_painter_InstanceList.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_InstanceList;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_InstanceList() {
}
$h_Ltrivalibs_graphics_painter_InstanceList.prototype = $p;
$p.s = (function() {
  return (this.g9.length | 0);
});
var $d_Ltrivalibs_graphics_painter_InstanceList = new $TypeData().i($c_Ltrivalibs_graphics_painter_InstanceList, "trivalibs.graphics.painter.InstanceList", ({
  es: 1
}));
function $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var w = $thiz.mk();
  var h = $thiz.kT();
  panel.kB(w, h);
  var msaa = panel.eV;
  var encoder = $thiz.h.createCommandEncoder();
  var panelFormats = panel.hC();
  var colorAttachments = [];
  var t = 0;
  while ((t < panel.m9())) {
    if ((panel.gh !== null)) {
      matchResult6: {
        var \u03b412$;
        var x18 = panel.gh;
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
      var r$2 = (+\u03b412$.dC);
      var g$2 = (+\u03b412$.aj);
      var b$2 = (+\u03b412$.ak);
      var a$2 = (+\u03b412$.al);
      if (msaa) {
        var _2 = panel.jK(t);
        var _2$1 = panel.gz(t);
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
        var _2$3 = panel.gz(t);
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
      var _2$5 = panel.jK(t);
      var _2$6 = panel.gz(t);
      var attachment = ({
        "view": _2$5,
        "resolveTarget": _2$6,
        "loadOp": "load",
        "storeOp": "store"
      });
    } else {
      var _2$7 = panel.gz(t);
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
  if (panel.fl) {
    var _2$8 = panel.ks();
    passDesc.depthStencilAttachment = ({
      "view": _2$8,
      "depthLoadOp": "clear",
      "depthStoreOp": "store",
      "depthClearValue": 1.0
    });
  }
  var shapePass = encoder.beginRenderPass(passDesc);
  var i = 0;
  while ((i < (panel.gi.length | 0))) {
    $p_Ltrivalibs_graphics_painter_Painter__renderShapeOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shape__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_Panel__V($thiz, shapePass, panel.gi[i], panel.fl, msaa, panelFormats, panel);
    i = ((1 + i) | 0);
  }
  shapePass.end();
  $thiz.Y.submit([encoder.finish()]);
  var srcView = panel.ma();
  var dstView = panel.lR();
  var hasPongLayers = false;
  var curEncoder = null;
  var curPass = null;
  var j = 0;
  while ((j < (panel.ap.length | 0))) {
    var layer = panel.ap[j];
    var hasPanelLayout = (layer.a8().fo !== null);
    var slot0Manual = ((hasPanelLayout && ((layer.ek().length | 0) > 0)) && (layer.ek()[0] !== null));
    var needsPingPong = (hasPanelLayout && (!slot0Manual));
    if ((layer.jI() >= 0)) {
      if ((curPass !== null)) {
        curPass.end();
        $thiz.Y.submit([curEncoder.finish()]);
        curPass = null;
      }
      var mipDstView = panel.g1(0, layer.jI());
      var mipSrcView = ((layer.lF() >= 0) ? panel.g1(0, layer.lF()) : srcView);
      var enc = $thiz.h.createCommandEncoder();
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
      $thiz.Y.submit([enc.finish()]);
    } else if (needsPingPong) {
      hasPongLayers = true;
      if ((curPass !== null)) {
        curPass.end();
        $thiz.Y.submit([curEncoder.finish()]);
        curPass = null;
      }
      var enc$2 = $thiz.h.createCommandEncoder();
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
      $thiz.Y.submit([enc$2.finish()]);
      var tmp = srcView;
      srcView = dstView;
      dstView = tmp;
    } else {
      if ((curPass === null)) {
        curEncoder = $thiz.h.createCommandEncoder();
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
    $thiz.Y.submit([curEncoder.finish()]);
  }
  if (hasPongLayers) {
    panel.fi = srcView;
  } else {
    panel.fi = null;
  }
  var hasMipTargetLayers = false;
  var mi = 0;
  while ((mi < (panel.ap.length | 0))) {
    if ((panel.ap[mi].jI() >= 0)) {
      hasMipTargetLayers = true;
    }
    mi = ((1 + mi) | 0);
  }
  if (((panel.hG() > 1) && (!hasMipTargetLayers))) {
    $p_Ltrivalibs_graphics_painter_Painter__generateMipmaps__Ltrivalibs_graphics_painter_Panel__V($thiz, panel);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__blitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz) {
  if ((!$thiz.iO)) {
    $thiz.iN = $thiz.h.createSampler(({
      "magFilter": "nearest",
      "minFilter": "nearest"
    }));
    $thiz.iO = true;
  }
  return $thiz.iN;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz) {
  if ((!$thiz.iK)) {
    var $x_2 = $thiz.h;
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
    $thiz.iJ = $x_1;
    $thiz.iK = true;
  }
  return $thiz.iJ;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitPipeline__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz) {
  if ((!$thiz.iM)) {
    var module = $thiz.h.createShaderModule(({
      "code": "\nstruct VsOut {\n  @builtin(position) pos: vec4f,\n  @location(0) uv: vec2f,\n}\n\n@vertex\nfn vs_main(@builtin(vertex_index) vi: u32) -> VsOut {\n  let x = f32((vi << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(vi & 2u) * 2.0 - 1.0;\n  var out: VsOut;\n  out.pos = vec4f(x, y, 0.0, 1.0);\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  return out;\n}\n\n@group(0) @binding(0) var blit_texture: texture_2d<f32>;\n@group(0) @binding(1) var blit_sampler: sampler;\n\n@fragment\nfn fs_main(in: VsOut) -> @location(0) vec4f {\n  return textureSample(blit_texture, blit_sampler, in.uv);\n}\n"
    }));
    var $x_1 = $thiz.h;
    var _2 = [$p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz)];
    var pipelineLayout = $x_1.createPipelineLayout(({
      "bindGroupLayouts": _2
    }));
    var $x_3 = $thiz.h;
    var _2$1 = ({
      "module": module,
      "entryPoint": "vs_main"
    });
    var f$proxy4 = $thiz.eR;
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
    $thiz.iL = $x_2;
    $thiz.iM = true;
  }
  return $thiz.iL;
}
function $p_Ltrivalibs_graphics_painter_Painter__mipBlitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz) {
  if ((!$thiz.iR)) {
    $thiz.iQ = $thiz.h.createSampler(({
      "magFilter": "linear",
      "minFilter": "linear"
    }));
    $thiz.iR = true;
  }
  return $thiz.iQ;
}
function $p_Ltrivalibs_graphics_painter_Painter__getMipBlitPipeline__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, format) {
  if ((!(!(!(!$thiz.ga.hasOwnProperty(format)))))) {
    return $thiz.ga[format];
  } else {
    var module = $thiz.h.createShaderModule(({
      "code": "\nstruct VsOut {\n  @builtin(position) pos: vec4f,\n  @location(0) uv: vec2f,\n}\n\n@vertex\nfn vs_main(@builtin(vertex_index) vi: u32) -> VsOut {\n  let x = f32((vi << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(vi & 2u) * 2.0 - 1.0;\n  var out: VsOut;\n  out.pos = vec4f(x, y, 0.0, 1.0);\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  return out;\n}\n\n@group(0) @binding(0) var blit_texture: texture_2d<f32>;\n@group(0) @binding(1) var blit_sampler: sampler;\n\n@fragment\nfn fs_main(in: VsOut) -> @location(0) vec4f {\n  return textureSample(blit_texture, blit_sampler, in.uv);\n}\n"
    }));
    var $x_1 = $thiz.h;
    var _2 = [$p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz)];
    var pl = $x_1.createPipelineLayout(({
      "bindGroupLayouts": _2
    }));
    var $x_2 = $thiz.h;
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
    $thiz.ga[format] = p;
    return p;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__generateMipmaps__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var mipCount = panel.hG();
  if ((mipCount <= 1)) {
    return (void 0);
  }
  var fmt = (((panel.eU.length | 0) > 0) ? panel.eU[0] : $thiz.eR);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getMipBlitPipeline__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, fmt);
  var i = 1;
  while ((i < mipCount)) {
    var srcView = panel.g1(0, ((i - 1) | 0));
    var dstView = panel.g1(0, i);
    var encoder = $thiz.h.createCommandEncoder();
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
    var $x_1 = $thiz.h;
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
    $thiz.Y.submit([encoder.finish()]);
    i = ((1 + i) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, bindings, panelBindings) {
  $thiz.N.length = (bindings.length | 0);
  var i = 0;
  while ((i < (bindings.length | 0))) {
    $thiz.N[i] = bindings[i];
    i = ((1 + i) | 0);
  }
  $thiz.B.length = (panelBindings.length | 0);
  var j = 0;
  while ((j < (panelBindings.length | 0))) {
    $thiz.B[j] = panelBindings[j];
    j = ((1 + j) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shade, workBindings, workPanelBindings) {
  var dict = panel.fn;
  var keys = Object.keys(dict);
  var i = 0;
  while ((i < (keys.length | 0))) {
    var name = keys[i];
    var value = dict[name];
    if ((!(!(!(!shade.gm.hasOwnProperty(name)))))) {
      var idx = (shade.gm[name] | 0);
      if (((idx >= (workBindings.length | 0)) || (workBindings[idx] === null))) {
        while (((workBindings.length | 0) <= idx)) {
          workBindings.push(null);
        }
        workBindings[idx] = value;
      }
    } else if ((!(!(!(!shade.aq.hasOwnProperty(name)))))) {
      var idx$2 = (shade.aq[name] | 0);
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
  while ((i < (inst.fE().length | 0))) {
    if ((inst.fE()[i] !== null)) {
      while (((workBindings.length | 0) <= i)) {
        workBindings.push(null);
      }
      workBindings[i] = inst.fE()[i];
    }
    i = ((1 + i) | 0);
  }
  var j = 0;
  while ((j < (inst.ek().length | 0))) {
    if ((inst.ek()[j] !== null)) {
      while (((workPanelBindings.length | 0) <= j)) {
        workPanelBindings.push(null);
      }
      workPanelBindings[j] = inst.ek()[j];
    }
    j = ((1 + j) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel) {
  return ((panel !== null) && ((Object.keys(panel.fn).length | 0) > 0));
}
function $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shade, bindings) {
  if ((((bindings.length | 0) > 0) && (shade.h7 !== null))) {
    var entries = [];
    var i = 0;
    while ((i < (bindings.length | 0))) {
      var b = bindings[i];
      if ((b !== null)) {
        entries.push($p_Ltrivalibs_graphics_painter_Painter__bindingEntry__I__O__sjs_js_Dynamic($thiz, i, b));
      }
      i = ((1 + i) | 0);
    }
    var $x_1 = $thiz.h;
    var _2 = shade.h7;
    var bg = $x_1.createBindGroup(({
      "layout": _2,
      "entries": entries
    }));
    pass.setBindGroup(0, bg);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shade, panelBindings, srcView) {
  if ((shade.fo !== null)) {
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
        var view = ((!(!pb.depth)) ? pb.panel.kr() : pb.panel.g1((pb.index | 0), (pb.mipLevel | 0)));
        var value = k;
        entries.push(({
          "binding": value,
          "resource": view
        }));
      }
      k = ((1 + k) | 0);
    }
    if (((entries.length | 0) > 0)) {
      var $x_1 = $thiz.h;
      var _2 = shade.fo;
      var pg = $x_1.createBindGroup(({
        "layout": _2,
        "entries": entries
      }));
      pass.setBindGroup(1, pg);
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__renderShapeOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shape__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_Panel__V($thiz, pass, shape, depthTest, multisample, formats, panel) {
  var fmts = ((formats !== null) ? formats : [$thiz.eR]);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, shape.F, shape.h9, fmts, depthTest, multisample, shape.Z.h6, shape.ha, shape.Z.h4);
  pass.setPipeline(pipeline);
  pass.setVertexBuffer(0, shape.Z.fe);
  var opt$proxy9 = shape.Z.eP;
  var hasIndex = (opt$proxy9 !== null);
  if (hasIndex) {
    pass.setIndexBuffer(shape.Z.eP, shape.Z.h5);
  }
  var instanceCount = shape.hb.s();
  var hasPanelBinds = $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel);
  if ((instanceCount === 0)) {
    if (hasPanelBinds) {
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, shape.eh, shape.x);
      $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shape.F, $thiz.N, $thiz.B);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.F, $thiz.N);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.F, $thiz.B, null);
    } else {
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.F, shape.eh);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.F, shape.x, null);
    }
    if (hasIndex) {
      pass.drawIndexed(shape.Z.g7);
    } else {
      pass.draw(shape.Z.g8);
    }
  } else {
    var i = 0;
    while ((i < instanceCount)) {
      var inst = shape.hb.g9[i];
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, shape.eh, shape.x);
      if (hasPanelBinds) {
        $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shape.F, $thiz.N, $thiz.B);
      }
      $p_Ltrivalibs_graphics_painter_Painter__applyInstanceBindings__Ltrivalibs_graphics_painter_Instance__sjs_js_Array__sjs_js_Array__V($thiz, inst, $thiz.N, $thiz.B);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.F, $thiz.N);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.F, $thiz.B, null);
      if (hasIndex) {
        pass.drawIndexed(shape.Z.g7);
      } else {
        pass.draw(shape.Z.g8);
      }
      i = ((1 + i) | 0);
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V($thiz, pass, layer, depthTest, multisample, formats, srcView, panel) {
  var fmts = ((formats !== null) ? formats : [$thiz.eR]);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, layer.a8(), layer.mp(), fmts, depthTest, multisample, "triangle-list", "none", "ccw");
  pass.setPipeline(pipeline);
  var instanceCount = layer.kY().s();
  var hasPanelBinds = $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel);
  if ((instanceCount === 0)) {
    if (hasPanelBinds) {
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, layer.fE(), layer.ek());
      $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, layer.a8(), $thiz.N, $thiz.B);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, layer.a8(), $thiz.N);
      var effectiveSrcView = (((($thiz.B.length | 0) > 0) && ($thiz.B[0] !== null)) ? null : srcView);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.a8(), $thiz.B, effectiveSrcView);
    } else {
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, layer.a8(), layer.fE());
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.a8(), layer.ek(), srcView);
    }
    pass.draw(3);
  } else {
    var i = 0;
    while ((i < instanceCount)) {
      var inst = layer.kY().g9[i];
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, layer.fE(), layer.ek());
      if (hasPanelBinds) {
        $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, layer.a8(), $thiz.N, $thiz.B);
      }
      $p_Ltrivalibs_graphics_painter_Painter__applyInstanceBindings__Ltrivalibs_graphics_painter_Instance__sjs_js_Array__sjs_js_Array__V($thiz, inst, $thiz.N, $thiz.B);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, layer.a8(), $thiz.N);
      var effectiveSrcView$2 = (((($thiz.B.length | 0) > 0) && ($thiz.B[0] !== null)) ? null : srcView);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.a8(), $thiz.B, effectiveSrcView$2);
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
  var key = ((((((((((((((shade.iS + "|") + $p_Ltrivalibs_graphics_painter_Painter__blendKeyStr__Ltrivalibs_graphics_painter_BlendState__T($thiz, blendState)) + "|") + formats.join(",")) + "|") + depthTest) + "|") + multisample) + "|") + topology) + "|") + cullMode) + "|") + frontFace);
  if ((!(!(!(!$thiz.gb.hasOwnProperty(key)))))) {
    return $thiz.gb[key];
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
    if ((shade.h8 !== null)) {
      var _2 = shade.gl;
      var _2$1 = [shade.h8];
      var vertexDescriptor = ({
        "module": _2,
        "entryPoint": "vs_main",
        "buffers": _2$1
      });
    } else {
      var _2$2 = shade.gl;
      var vertexDescriptor = ({
        "module": _2$2,
        "entryPoint": "vs_main"
      });
    }
    var _2$3 = shade.iT;
    var _2$4 = shade.gl;
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
    var p = $thiz.h.createRenderPipeline(desc);
    $thiz.gb[key] = p;
    return p;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__bindingEntry__I__O__sjs_js_Dynamic($thiz, i, b) {
  if ((b instanceof $c_Ltrivalibs_graphics_buffers_BufferBinding)) {
    var _2 = b.gJ;
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
  this.h = null;
  this.Y = null;
  this.eQ = null;
  this.iP = null;
  this.eR = null;
  this.gb = null;
  this.ed = 0;
  this.gc = null;
  this.iN = null;
  this.iO = false;
  this.iJ = null;
  this.iK = false;
  this.iL = null;
  this.iM = false;
  this.iQ = null;
  this.iR = false;
  this.ga = null;
  this.N = null;
  this.B = null;
  this.h = device;
  this.Y = queue;
  this.eQ = canvas;
  this.iP = context;
  this.eR = preferredFormat;
  this.gb = ({});
  this.ed = 0;
  this.gc = [];
  this.ga = ({});
  this.N = [];
  this.B = [];
}
$p = $c_Ltrivalibs_graphics_painter_Painter.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Painter;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Painter() {
}
$h_Ltrivalibs_graphics_painter_Painter.prototype = $p;
$p.lL = (function(cb) {
  this.gc.push(cb);
  cb.gr((this.eQ.width | 0), (this.eQ.height | 0));
});
$p.kG = (function(w, h) {
  var k = 0;
  while ((k < (this.gc.length | 0))) {
    this.gc[k].gr(w, h);
    k = ((1 + k) | 0);
  }
});
$p.mk = (function() {
  return (this.eQ.width | 0);
});
$p.kT = (function() {
  return (this.eQ.height | 0);
});
$p.jR = (function(magFilter, minFilter, mipmapFilter, addressMode, addressModeU, addressModeV) {
  var $x_1 = this.h;
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
$p.kI = (function(geometry, vertices, topology, frontFace) {
  return new $c_Ltrivalibs_graphics_painter_Form(this).m1(geometry, vertices, topology, frontFace);
});
$p.f5 = (function(form, shade, cullMode, blendState) {
  return new $c_Ltrivalibs_graphics_painter_Shape(this, form, shade).m2(cullMode, blendState);
});
$p.jM = (function(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers) {
  return new $c_Ltrivalibs_graphics_painter_Panel(this).m0(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers);
});
$p.m4 = (function(panel) {
  var encoder = this.h.createCommandEncoder();
  var swapChainView = this.iP.getCurrentTexture().createView();
  var _2 = [({
    "view": swapChainView,
    "loadOp": "load",
    "storeOp": "store"
  })];
  var pass = encoder.beginRenderPass(({
    "colorAttachments": _2
  }));
  var $x_1 = this.h;
  var _2$1 = $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout(this);
  var _2$2 = panel.lO();
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
  this.Y.submit([encoder.finish()]);
});
var $d_Ltrivalibs_graphics_painter_Painter = new $TypeData().i($c_Ltrivalibs_graphics_painter_Painter, "trivalibs.graphics.painter.Painter", ({
  et: 1
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
$p.kX = (function(canvas) {
  var maybeGpu = $m_Ltrivalibs_graphics_painter_WebGPU$().kN();
  if ((maybeGpu === (void 0))) {
    return Promise.reject(Error("WebGPU is not supported"));
  } else {
    var promise$proxy1 = maybeGpu.requestAdapter();
    var promise$proxy3 = promise$proxy1.then(((value$2) => {
      if ((value$2 === null)) {
        throw new $c_sjs_js_JavaScriptException(Error("Failed to get WebGPU adapter")).e8;
      } else {
        return value$2;
      }
    }));
    var f$proxy11 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((adapter$2) => {
      var promise$proxy2 = adapter$2.requestDevice();
      var f$proxy10 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((device$2) => {
        var queue = device$2.queue;
        var context = $m_Ltrivalibs_graphics_painter_WebGPU$().kM(canvas);
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
            painter.kG(rw, rh);
          }
        }));
        observer.observe(canvas);
        return painter;
      }));
      return promise$proxy2.then($m_sjs_js_Any$().fG(f$proxy10));
    }));
    return promise$proxy3.then($m_sjs_js_Any$().fG(f$proxy11));
  }
});
$p.kW = (function(canvas, setup) {
  var promise$proxy4 = this.kX(canvas);
  return promise$proxy4.then($m_sjs_js_Any$().fG(setup));
});
var $d_Ltrivalibs_graphics_painter_Painter$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_Painter$, "trivalibs.graphics.painter.Painter$", ({
  eu: 1
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
  while ((i < ($thiz.ap.length | 0))) {
    if (($thiz.ap[i].a8().fo !== null)) {
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
  this.eg = null;
  this.gk = 0;
  this.gj = 0;
  this.gh = null;
  this.fl = false;
  this.eV = false;
  this.fm = 0;
  this.eU = null;
  this.gi = null;
  this.ap = null;
  this.fn = null;
  this.eT = null;
  this.ef = null;
  this.gg = null;
  this.fj = null;
  this.gf = null;
  this.ee = null;
  this.ff = null;
  this.gd = false;
  this.fh = null;
  this.ge = null;
  this.fi = null;
  this.fk = 0;
  this.fg = 0;
  this.eS = null;
  this.eg = painter;
  this.gk = 0;
  this.gj = 0;
  this.gh = null;
  this.fl = false;
  this.eV = false;
  this.fm = 1;
  this.eU = [];
  this.gi = [];
  this.ap = [];
  this.fn = ({});
  this.eT = [];
  this.ef = [];
  this.gg = [];
  this.fj = [];
  this.gf = [];
  this.ee = null;
  this.ff = null;
  this.gd = false;
  this.fh = [];
  this.ge = [];
  this.fi = null;
  this.fk = 0;
  this.fg = 0;
  this.eS = ({});
}
$p = $c_Ltrivalibs_graphics_painter_Panel.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Panel;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Panel() {
}
$h_Ltrivalibs_graphics_painter_Panel.prototype = $p;
$p.hG = (function() {
  if ((this.fm === 0)) {
    var a = this.fk;
    var b = this.fg;
    var maxDim = ((a > b) ? a : b);
    if ((maxDim <= 0)) {
      return 1;
    } else {
      var a$1 = maxDim;
      return ((1 + $doubleToInt(((+Math.log(a$1)) / (+Math.log(2.0))))) | 0);
    }
  } else {
    return this.fm;
  }
});
$p.hC = (function() {
  return (((this.eU.length | 0) === 0) ? [this.eg.eR] : this.eU);
});
$p.m9 = (function() {
  return (this.hC().length | 0);
});
$p.ma = (function() {
  return this.ef[0];
});
$p.lR = (function() {
  return this.gf[0];
});
$p.ks = (function() {
  return this.ff;
});
$p.lO = (function() {
  return ((this.fi !== null) ? this.fi : this.ef[0]);
});
$p.g1 = (function(index, mipLevel) {
  if ((mipLevel < 0)) {
    var sv = this.gg[index];
    return ((sv !== null) ? sv : this.ef[index]);
  } else {
    var key = ((index + "|") + mipLevel);
    if ((!(!(!(!this.eS.hasOwnProperty(key)))))) {
      return this.eS[key];
    } else {
      var view = this.eT[index].createView(({
        "baseMipLevel": mipLevel,
        "mipLevelCount": 1
      }));
      this.eS[key] = view;
      return view;
    }
  }
});
$p.gz = (function(index) {
  return this.ef[index];
});
$p.jK = (function(index) {
  return this.ge[index];
});
$p.kr = (function() {
  if (((!this.gd) && (this.ee !== null))) {
    var opt$proxy5 = this.ee;
    opt$proxy5.destroy();
    var $x_1 = this.eg.h;
    var value = this.fk;
    var value$1 = this.fg;
    var _2 = ({
      "width": value,
      "height": value$1
    });
    var _2$1 = (this.eV ? 4 : 1);
    var depthTex = $x_1.createTexture(({
      "size": _2,
      "format": "depth24plus",
      "usage": 20,
      "sampleCount": _2$1
    }));
    this.ee = depthTex;
    this.ff = depthTex.createView();
    this.gd = true;
  }
  return this.ff;
});
$p.m0 = (function(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers) {
  if ((width !== (void 0))) {
    var v = (width | 0);
    this.gk = v;
  }
  if ((height !== (void 0))) {
    var v$1 = (height | 0);
    this.gj = v$1;
  }
  if ((clearColor !== (void 0))) {
    this.gh = clearColor;
  }
  if ((depthTest !== (void 0))) {
    var v$2 = (!(!depthTest));
    this.fl = v$2;
  }
  if ((multisample !== (void 0))) {
    var v$3 = (!(!multisample));
    this.eV = v$3;
  }
  if ((mips !== (void 0))) {
    if ((!(!mips))) {
      this.fm = 0;
    }
  }
  if ((mipLevels !== (void 0))) {
    var v$5 = (mipLevels | 0);
    if ((v$5 > 0)) {
      this.fm = v$5;
    }
  }
  var x = ((formats === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy1$1__O__O(this, format) : formats);
  if ((x !== (void 0))) {
    this.eU = x;
  }
  var x$1 = ((shapes === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy2$1__O__O(this, shape) : shapes);
  if ((x$1 !== (void 0))) {
    this.gi = x$1;
  }
  var x$2 = ((layers === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy3$1__O__O(this, layer) : layers);
  if ((x$2 !== (void 0))) {
    this.ap = x$2;
  }
  return this;
});
$p.kB = (function(canvasW, canvasH) {
  var targetW = ((this.gk === 0) ? canvasW : this.gk);
  var targetH = ((this.gj === 0) ? canvasH : this.gj);
  if (((targetW !== this.fk) || (targetH !== this.fg))) {
    var d = 0;
    while ((d < (this.eT.length | 0))) {
      this.eT[d].destroy();
      d = ((1 + d) | 0);
    }
    d = 0;
    while ((d < (this.fj.length | 0))) {
      this.fj[d].destroy();
      d = ((1 + d) | 0);
    }
    d = 0;
    while ((d < (this.fh.length | 0))) {
      this.fh[d].destroy();
      d = ((1 + d) | 0);
    }
    if ((this.ee !== null)) {
      var opt$proxy7 = this.ee;
      opt$proxy7.destroy();
    }
    this.fk = targetW;
    this.fg = targetH;
    var mipKeys = Object.keys(this.eS);
    var mk = 0;
    while ((mk < (mipKeys.length | 0))) {
      delete this.eS[mipKeys[mk]];
      mk = ((1 + mk) | 0);
    }
    var mipCount = this.hG();
    var fmts = this.hC();
    var hasPong = $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z(this);
    this.eT = [];
    this.ef = [];
    this.gg = [];
    this.fj = [];
    this.gf = [];
    this.fh = [];
    this.ge = [];
    var i = 0;
    while ((i < (fmts.length | 0))) {
      var fmt = fmts[i];
      var $x_1 = this.eg.h;
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
      this.eT.push(tex);
      this.ef.push(tex.createView(({
        "baseMipLevel": 0,
        "mipLevelCount": 1
      })));
      this.gg.push(((mipCount > 1) ? tex.createView() : null));
      if (hasPong) {
        var $x_2 = this.eg.h;
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
        this.fj.push(pongTex);
        this.gf.push(pongTex.createView(({
          "baseMipLevel": 0,
          "mipLevelCount": 1
        })));
      }
      if (this.eV) {
        var $x_3 = this.eg.h;
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
        this.fh.push(msaaTex);
        this.ge.push(msaaTex.createView());
      }
      i = ((1 + i) | 0);
    }
    if (this.fl) {
      var depthUsage = (this.gd ? 20 : 16);
      var $x_4 = this.eg.h;
      var _2$3 = ({
        "width": targetW,
        "height": targetH
      });
      var _2$4 = (this.eV ? 4 : 1);
      var depthTex = $x_4.createTexture(({
        "size": _2$3,
        "format": "depth24plus",
        "usage": depthUsage,
        "sampleCount": _2$4
      }));
      this.ee = depthTex;
      this.ff = depthTex.createView();
    }
  }
});
var $d_Ltrivalibs_graphics_painter_Panel = new $TypeData().i($c_Ltrivalibs_graphics_painter_Panel, "trivalibs.graphics.painter.Panel", ({
  ev: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Shade(id, shaderModule, vertexBufferLayout, valueBindGroupLayout, panelBindGroupLayout, pipelineLayout, isLayer, uniformIndices, panelIndices) {
  this.iS = 0;
  this.gl = null;
  this.h8 = null;
  this.h7 = null;
  this.fo = null;
  this.iT = null;
  this.gm = null;
  this.aq = null;
  this.iS = id;
  this.gl = shaderModule;
  this.h8 = vertexBufferLayout;
  this.h7 = valueBindGroupLayout;
  this.fo = panelBindGroupLayout;
  this.iT = pipelineLayout;
  this.gm = uniformIndices;
  this.aq = panelIndices;
}
$p = $c_Ltrivalibs_graphics_painter_Shade.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Shade;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Shade() {
}
$h_Ltrivalibs_graphics_painter_Shade.prototype = $p;
var $d_Ltrivalibs_graphics_painter_Shade = new $TypeData().i($c_Ltrivalibs_graphics_painter_Shade, "trivalibs.graphics.painter.Shade", ({
  ew: 1
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
$p.kN = (function() {
  return window.navigator.gpu;
});
$p.kM = (function(canvas) {
  return canvas.getContext("webgpu");
});
var $d_Ltrivalibs_graphics_painter_WebGPU$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_WebGPU$, "trivalibs.graphics.painter.WebGPU$", ({
  ey: 1
}));
var $n_Ltrivalibs_graphics_painter_WebGPU$;
function $m_Ltrivalibs_graphics_painter_WebGPU$() {
  if ((!$n_Ltrivalibs_graphics_painter_WebGPU$)) {
    $n_Ltrivalibs_graphics_painter_WebGPU$ = new $c_Ltrivalibs_graphics_painter_WebGPU$();
  }
  return $n_Ltrivalibs_graphics_painter_WebGPU$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController(sensitivity, speed) {
  this.hc = 0.0;
  this.iU = 0.0;
  this.hc = sensitivity;
  this.iU = speed;
}
$p = $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController() {
}
$h_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController.prototype = $p;
$p.mg = (function(cam, input, tpf) {
  var dist = ((this.iU * tpf) / 1000.0);
  var forward = 0.0;
  if (((input.a0("KeyW") || input.a0("ArrowUp")) || input.gp)) {
    forward = (forward + dist);
  }
  if (((input.a0("KeyS") || input.a0("ArrowDown")) || input.l1(2))) {
    forward = (forward - dist);
  }
  var left = 0.0;
  if ((input.a0("KeyA") || input.a0("ArrowLeft"))) {
    left = (left + dist);
  }
  if ((input.a0("KeyD") || input.a0("ArrowRight"))) {
    left = (left - dist);
  }
  var up = 0.0;
  if (input.a0("Space")) {
    up = (up + dist);
  }
  if ((input.a0("ShiftLeft") || input.a0("ShiftRight"))) {
    up = (up - dist);
  }
  var drag = input.kq();
  var deltaH = (((-(+drag.Q)) * this.hc) / 1000.0);
  var deltaV = (((-(+drag.L)) * this.hc) / 1000.0);
  cam.lG(forward, left, up, deltaH, deltaV);
});
var $d_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController = new $TypeData().i($c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController, "trivalibs.graphics.scene.BasicFirstPersonCameraController", ({
  ez: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_scene_PerspectiveCamera(fov, aspect, near, far, rotH, rotV, pos, proj) {
  this.eX = 0.0;
  this.fp = 0.0;
  this.eY = 0.0;
  this.eW = 0.0;
  this.O = 0.0;
  this.ah = 0.0;
  this.G = null;
  this.hd = null;
  this.eX = fov;
  this.fp = aspect;
  this.eY = near;
  this.eW = far;
  this.O = rotH;
  this.ah = rotV;
  this.G = pos;
  this.hd = proj;
}
$p = $c_Ltrivalibs_graphics_scene_PerspectiveCamera.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_PerspectiveCamera;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_PerspectiveCamera() {
}
$h_Ltrivalibs_graphics_scene_PerspectiveCamera.prototype = $p;
$p.hH = (function(fov, aspect, near, far, rotH, rotV, pos) {
  var needsProj = ((((fov !== this.eX) || (aspect !== this.fp)) || (near !== this.eY)) || (far !== this.eW));
  this.eX = fov;
  this.fp = aspect;
  this.eY = near;
  this.eW = far;
  if ((rotH !== this.O)) {
    this.O = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().hM(rotH);
  }
  if ((rotV !== this.ah)) {
    this.ah = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().hL(rotV);
  }
  this.G = pos;
  if (needsProj) {
    this.hd = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($m_Ltrivalibs_graphics_math_cpu_Mat4$(), fov, aspect, near, far);
  }
});
$p.lG = (function(forward, left, up, deltaH, deltaV) {
  if ((deltaH !== 0.0)) {
    this.O = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().hM((this.O + deltaH));
  }
  if ((deltaV !== 0.0)) {
    this.ah = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().hL((this.ah + deltaV));
  }
  if ((up !== 0.0)) {
    this.G = new $c_Ltrivalibs_graphics_math_cpu_Vec3(this.G.l, (this.G.k + up), this.G.m);
  }
  if ((forward !== 0.0)) {
    var $x_4 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().w();
    var $x_3 = this.G;
    var $x_2 = $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
    var $x_1 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().w();
    var p$proxy1 = this.O;
    var x$1 = (-(+Math.sin(p$proxy1)));
    var p$proxy2 = this.O;
    this.G = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($x_4, $x_3, $x_2, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($x_1, new $c_Ltrivalibs_graphics_math_cpu_Vec3(x$1, 0.0, (-(+Math.cos(p$proxy2)))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), forward));
  }
  if ((left !== 0.0)) {
    var $x_9 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().w();
    var $x_8 = this.G;
    var $x_7 = $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
    var $x_6 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().w();
    var p$proxy3 = this.O;
    var $x_5 = Math.cos(p$proxy3);
    var p$proxy4 = this.O;
    this.G = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($x_9, $x_8, $x_7, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($x_6, new $c_Ltrivalibs_graphics_math_cpu_Vec3((-(+$x_5)), 0.0, (+Math.sin(p$proxy4))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), left));
  }
});
$p.md = (function() {
  return new $c_Ltrivalibs_graphics_scene_Transform(this.G, $f_Ltrivalibs_graphics_math_cpu_QuatImmutableOps__quatMul__O__Ltrivalibs_graphics_math_Vec4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$(), $m_Ltrivalibs_graphics_math_cpu_Quat$().kK(this.O), $m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$(), $m_Ltrivalibs_graphics_math_cpu_Quat$().kJ(this.ah)), new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0));
});
$p.mj = (function() {
  var $x_1 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().jn();
  var t = this.md();
  return $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($x_1, $m_Ltrivalibs_graphics_math_cpu_Mat4$().kL(t.iX, t.iV, t.iW), $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
});
var $d_Ltrivalibs_graphics_scene_PerspectiveCamera = new $TypeData().i($c_Ltrivalibs_graphics_scene_PerspectiveCamera, "trivalibs.graphics.scene.PerspectiveCamera", ({
  eA: 1
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
$p.hM = (function(a) {
  var r = (a % 6.283185307179586);
  return ((r < 0.0) ? (r + 6.283185307179586) : r);
});
$p.hL = (function(a) {
  return ((a < (-1.5707963267948966)) ? (-1.5707963267948966) : ((a > 1.5707963267948966) ? 1.5707963267948966 : a));
});
$p.ke = (function(fov, aspect, near, far, rotH, rotV, pos) {
  var proj = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($m_Ltrivalibs_graphics_math_cpu_Mat4$(), fov, aspect, near, far);
  return new $c_Ltrivalibs_graphics_scene_PerspectiveCamera(fov, aspect, near, far, this.hM(rotH), this.hL(rotV), pos, proj);
});
var $d_Ltrivalibs_graphics_scene_PerspectiveCamera$ = new $TypeData().i($c_Ltrivalibs_graphics_scene_PerspectiveCamera$, "trivalibs.graphics.scene.PerspectiveCamera$", ({
  eB: 1
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
  this.iX = null;
  this.iV = null;
  this.iW = null;
  this.iX = translation;
  this.iV = rotation;
  this.iW = scale;
}
$p = $c_Ltrivalibs_graphics_scene_Transform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_Transform;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_Transform() {
}
$h_Ltrivalibs_graphics_scene_Transform.prototype = $p;
var $d_Ltrivalibs_graphics_scene_Transform = new $TypeData().i($c_Ltrivalibs_graphics_scene_Transform, "trivalibs.graphics.scene.Transform", ({
  eC: 1
}));
function $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($thiz, builtins) {
  var s = "";
  var i = 0;
  while ((i < (builtins.length | 0))) {
    var b = builtins[i];
    s = ((s + ((((", @builtin(" + b.a9) + ") ") + b.ai) + ": ")) + b.aa);
    i = ((1 + i) | 0);
  }
  return s;
}
function $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($thiz, structName, locNames, locTypes, builtins) {
  var array$1 = $m_sjs_js_ArrayOps$().jW($m_sjs_js_ArrayOps$().jV(locNames, new $c_sjs_js_WrappedArray(locTypes)));
  var len = (array$1.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    var $x_2 = i;
    var x0 = array$1[i];
    matchResult3: {
      var $x_1;
      if ((x0 !== null)) {
        var x11 = x0.Q;
        if ((x11 !== null)) {
          var name = x11.Q;
          var typ = x11.L;
          var $x_1 = (((((("  @location(" + (x0.L | 0)) + ") ") + name) + ": ") + typ) + ",");
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
        var name$1 = x0$1.ai;
        var builtin = x0$1.a9;
        var typ$1 = x0$1.aa;
        var $x_3 = (((((("  @builtin(" + builtin) + ") ") + name$1) + ": ") + typ$1) + ",");
        break matchResult4;
      }
      throw new $c_s_MatchError(x0$1);
    }
    res$1[$x_4] = $x_3;
    i$1 = ((1 + i$1) | 0);
  }
  var allFields = $m_sjs_js_ArrayOpsCommon$().c(res, res$1);
  return (((allFields.length | 0) === 0) ? "" : (((("struct " + structName) + " {\n") + allFields.join("\n")) + "\n}"));
}
function $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($thiz, groupIdx, names, types) {
  var array$1 = $m_sjs_js_ArrayOps$().jW($m_sjs_js_ArrayOps$().jV(names, new $c_sjs_js_WrappedArray(types)));
  var len = (array$1.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    var $x_3 = i;
    var x0 = array$1[i];
    matchResult5: {
      var $x_2;
      if ((x0 !== null)) {
        var x20 = x0.Q;
        if ((x20 !== null)) {
          var name = x20.Q;
          var typ = x20.L;
          var bindingIdx = (x0.L | 0);
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
  eF: 1
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
  this.ei = null;
  this.ei = target;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_AssignTarget.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_AssignTarget;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_AssignTarget() {
}
$h_Ltrivalibs_graphics_shader_dsl_AssignTarget.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_AssignTarget = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_AssignTarget, "trivalibs.graphics.shader.dsl.AssignTarget", ({
  eG: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_FnRegistry() {
  this.hg = null;
  this.f1 = null;
  this.hg = ({});
  this.f1 = [];
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FnRegistry() {
}
$h_Ltrivalibs_graphics_shader_dsl_FnRegistry.prototype = $p;
$p.jU = (function(d) {
  if ((!(!(!(!(!this.hg.hasOwnProperty(d.name))))))) {
    this.hg[d.name] = true;
    var array = d.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      this.jU(array[i]);
      i = ((1 + i) | 0);
    }
    this.f1.push(d);
  }
});
var $d_Ltrivalibs_graphics_shader_dsl_FnRegistry = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FnRegistry, "trivalibs.graphics.shader.dsl.FnRegistry", ({
  eH: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$() {
  this.J = null;
  this.J = null;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FnRegistry$() {
}
$h_Ltrivalibs_graphics_shader_dsl_FnRegistry$.prototype = $p;
$p.mc = (function(d) {
  var r = this.J;
  if ((r !== null)) {
    r.jU(d);
  }
});
var $d_Ltrivalibs_graphics_shader_dsl_FnRegistry$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FnRegistry$, "trivalibs.graphics.shader.dsl.FnRegistry$", ({
  eI: 1
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
  this.hh = null;
  this.hi = null;
  this.iY = null;
  this.k2 = null;
  this.hh = in$1;
  this.hi = out;
  this.iY = bindings;
  this.k2 = textures;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FragmentCtx() {
}
$h_Ltrivalibs_graphics_shader_dsl_FragmentCtx.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_FragmentCtx = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FragmentCtx, "trivalibs.graphics.shader.dsl.FragmentCtx", ({
  eJ: 1
}));
function $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, data) {
  if ((!(!(!(!(!$thiz.hj.hasOwnProperty(data.name))))))) {
    var dict = $thiz.hj;
    var key = data.name;
    dict[key] = true;
    var array = data.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, array[i]);
      i = ((1 + i) | 0);
    }
    $thiz.hk.push(data.src);
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_Program() {
  this.fs = null;
  this.fr = null;
  this.hk = null;
  this.hj = null;
  this.fs = "";
  this.fr = "";
  this.hk = [];
  this.hj = ({});
}
$p = $c_Ltrivalibs_graphics_shader_dsl_Program.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_Program;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_Program() {
}
$h_Ltrivalibs_graphics_shader_dsl_Program.prototype = $p;
$p.jq = (function() {
  return this.hk.join("\n\n");
});
var $d_Ltrivalibs_graphics_shader_dsl_Program = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_Program, "trivalibs.graphics.shader.dsl.Program", ({
  eK: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(in$1, out, bindings, locals, textures) {
  this.ft = null;
  this.fu = null;
  this.iZ = null;
  this.ft = in$1;
  this.fu = out;
  this.iZ = bindings;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_VertexCtx.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_VertexCtx;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_VertexCtx() {
}
$h_Ltrivalibs_graphics_shader_dsl_VertexCtx.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_VertexCtx = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_VertexCtx, "trivalibs.graphics.shader.dsl.VertexCtx", ({
  eP: 1
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
$p.k5 = (function() {
  return [];
});
var $d_Ltrivalibs_graphics_shader_dsl_WgslFnData$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_WgslFnData$, "trivalibs.graphics.shader.dsl.WgslFnData$", ({
  eR: 1
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
$p.lJ = (function(fn) {
  return fn.name;
});
$p.en = (function(fn, ds) {
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
  ds.fF(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((d$3) => {
    if ((!(!(!(!(!seen.hasOwnProperty(d$3.name))))))) {
      seen[d$3.name] = true;
      merged.push(d$3);
    }
  })));
  return new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())(fn.name, fn.src, merged);
});
var $d_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$, "trivalibs.graphics.shader.dsl.fn$package$WgslFn$", ({
  eS: 1
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
$p.hB = (function(device, bindGroupLayouts) {
  return device.createPipelineLayout(({
    "bindGroupLayouts": bindGroupLayouts
  }));
});
var $d_Ltrivalibs_graphics_shader_layouts$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_layouts$, "trivalibs.graphics.shader.layouts$", ({
  eT: 1
}));
var $n_Ltrivalibs_graphics_shader_layouts$;
function $m_Ltrivalibs_graphics_shader_layouts$() {
  if ((!$n_Ltrivalibs_graphics_shader_layouts$)) {
    $n_Ltrivalibs_graphics_shader_layouts$ = new $c_Ltrivalibs_graphics_shader_layouts$();
  }
  return $n_Ltrivalibs_graphics_shader_layouts$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$() {
  this.j1 = null;
  this.j2 = null;
  this.j3 = null;
  this.ho = null;
  this.hp = null;
  this.j4 = null;
  $n_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$ = this;
  var names = $m_sjs_js_ArrayOpsCommon$().c(["x"], []);
  var types = $m_sjs_js_ArrayOpsCommon$().c(["vec3<f32>"], []);
  var parts = [];
  var i = 0;
  while ((i < (names.length | 0))) {
    parts.push(((names[i] + ": ") + types[i]));
    i = ((1 + i) | 0);
  }
  var paramList = parts.join(", ");
  var src = (("fn mod289v3f(" + paramList) + ") -> vec3<f32> {\n  return x - floor(x / 289.0) * 289.0;\n}");
  this.j1 = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("mod289v3f", src);
  var names$2 = $m_sjs_js_ArrayOpsCommon$().c(["x"], []);
  var types$2 = $m_sjs_js_ArrayOpsCommon$().c(["vec4<f32>"], []);
  var parts$2 = [];
  var i$2 = 0;
  while ((i$2 < (names$2.length | 0))) {
    parts$2.push(((names$2[i$2] + ": ") + types$2[i$2]));
    i$2 = ((1 + i$2) | 0);
  }
  var paramList$2 = parts$2.join(", ");
  var src$2 = (("fn mod289v4f(" + paramList$2) + ") -> vec4<f32> {\n  return x - floor(x / 289.0) * 289.0;\n}");
  this.j2 = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("mod289v4f", src$2);
  var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$3 = $m_sjs_js_ArrayOpsCommon$().c(["i"], []);
  var types$3 = $m_sjs_js_ArrayOpsCommon$().c(["vec4<f32>"], []);
  var parts$3 = [];
  var i$3 = 0;
  while ((i$3 < (names$3.length | 0))) {
    parts$3.push(((names$3[i$3] + ": ") + types$3[i$3]));
    i$3 = ((1 + i$3) | 0);
  }
  var paramList$3 = parts$3.join(", ");
  var src$3 = (("fn permute289v4f(" + paramList$3) + ") -> vec4<f32> {\n\n  var im: vec4<f32> = mod289v4f(i);\n  return mod289v4f((im*34.0 + 10.0)*im);\n}");
  this.j3 = $x_1.en(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("permute289v4f", src$3), new $c_sjsr_WrappedVarArgs([this.j2]));
  var $x_2 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$4 = $m_sjs_js_ArrayOpsCommon$().c(["pos"], $m_sjs_js_ArrayOpsCommon$().c(["period"], $m_sjs_js_ArrayOpsCommon$().c(["normRot"], [])));
  var types$4 = $m_sjs_js_ArrayOpsCommon$().c(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().c(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().c(["f32"], [])));
  var parts$4 = [];
  var i$4 = 0;
  while ((i$4 < (names$4.length | 0))) {
    parts$4.push(((names$4[i$4] + ": ") + types$4[i$4]));
    i$4 = ((1 + i$4) | 0);
  }
  var paramList$4 = parts$4.join(", ");
  var src$4 = (("fn tiling_rot_noise_2d(" + paramList$4) + ") -> vec3<f32> {\n\n  let alpha = normRot * 6.28318530718;\n  var uv: vec2<f32>;\n  var f0: vec2<f32>;\n  var i0: vec2<f32>;\n  var i1: vec2<f32>;\n  var i2: vec2<f32>;\n  var o1: vec2<f32>;\n  var v0: vec2<f32>;\n  var v1: vec2<f32>;\n  var v2: vec2<f32>;\n  var x0: vec2<f32>;\n  var x1: vec2<f32>;\n  var x2: vec2<f32>;\n  uv = vec2<f32>(pos.x+pos.y*0.5, pos.y);\n  i0 = floor(uv);\n  f0 = uv - i0;\n  o1 = select(vec2<f32>(0.0,1.0), vec2<f32>(1.0, 0.0), f0.x > f0.y);\n  i1 = i0 + o1;\n  i2 = i0 + vec2<f32>(1.0, 1.0);\n  v0 = vec2<f32>(i0.x - i0.y*0.5, i0.y);\n  v1 = vec2<f32>(v0.x + o1.x - o1.y*0.5, v0.y + o1.y);\n  v2 = vec2<f32>(v0.x + 0.5, v0.y + 1.0);\n  x0 = pos - v0;\n  x1 = pos - v1;\n  x2 = pos - v2;\n  var iu: vec3<f32>;\n  var iv: vec3<f32>;\n  var xw: vec3<f32>;\n  var yw: vec3<f32>;\n  if(any(period > vec2<f32>(0.0, 0.0))) {\n    xw = vec3<f32>(v0.x, v1.x, v2.x);\n    yw = vec3<f32>(v0.y, v1.y, v2.y);\n    if(period.x > 0.0) {\n      xw = xw - floor(vec3<f32>(v0.x, v1.x, v2.x) / period.x) * period.x;\n    }\n    if(period.y > 0.0) {\n      yw = yw - floor(vec3<f32>(v0.y, v1.y, v2.y) / period.y) * period.y;\n    }\n    iu = floor(xw + 0.5*yw + 0.5);\n    iv = floor(yw + 0.5);\n  } else {\n    iu = vec3<f32>(i0.x, i1.x, i2.x);\n    iv = vec3<f32>(i0.y, i1.y, i2.y);\n  }\n  var hash: vec3<f32>;\n  var psi: vec3<f32>;\n  var gx: vec3<f32>;\n  var gy: vec3<f32>;\n  var g0: vec2<f32>;\n  var g1: vec2<f32>;\n  var g2: vec2<f32>;\n  hash = mod289v3f(iu);\n  hash = mod289v3f((hash*51.0 + 2.0)*hash + iv);\n  hash = mod289v3f((hash*34.0 + 10.0)*hash);\n  psi = hash*0.07482 + alpha;\n  gx = cos(psi);\n  gy = sin(psi);\n  g0 = vec2<f32>(gx.x, gy.x);\n  g1 = vec2<f32>(gx.y, gy.y);\n  g2 = vec2<f32>(gx.z, gy.z);\n  var w: vec3<f32>;\n  var w2: vec3<f32>;\n  var w4: vec3<f32>;\n  var gdotx: vec3<f32>;\n  var n: f32;\n  w = 0.8 - vec3<f32>(dot(x0, x0), dot(x1, x1), dot(x2, x2));\n  w = max(w, vec3<f32>(0.0, 0.0, 0.0));\n  w2 = w*w;\n  w4 = w2*w2;\n  gdotx = vec3<f32>(dot(g0, x0), dot(g1, x1), dot(g2, x2));\n  n = 10.9*dot(w4, gdotx);\n  var w3: vec3<f32>;\n  var dw: vec3<f32>;\n  var dn0: vec2<f32>;\n  var dn1: vec2<f32>;\n  var dn2: vec2<f32>;\n  var grad: vec2<f32>;\n  w3 = w2*w;\n  dw = -8.0*w3*gdotx;\n  dn0 = w4.x*g0 + dw.x*x0;\n  dn1 = w4.y*g1 + dw.y*x1;\n  dn2 = w4.z*g2 + dw.z*x2;\n  grad = 10.9*(dn0 + dn1 + dn2);\n  return vec3<f32>(n, grad.x, grad.y);\n}");
  this.ho = $x_2.en(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("tiling_rot_noise_2d", src$4), new $c_sjsr_WrappedVarArgs([this.j1]));
  var $x_3 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$5 = $m_sjs_js_ArrayOpsCommon$().c(["pos"], $m_sjs_js_ArrayOpsCommon$().c(["period"], []));
  var types$5 = $m_sjs_js_ArrayOpsCommon$().c(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().c(["vec2<f32>"], []));
  var parts$5 = [];
  var i$5 = 0;
  while ((i$5 < (names$5.length | 0))) {
    parts$5.push(((names$5[i$5] + ": ") + types$5[i$5]));
    i$5 = ((1 + i$5) | 0);
  }
  var paramList$5 = parts$5.join(", ");
  var src$5 = (("fn tiling_noise_2d(" + paramList$5) + ") -> vec3<f32> {\n  return tiling_rot_noise_2d(pos, period, 0.0);\n}");
  $x_3.en(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("tiling_noise_2d", src$5), new $c_sjsr_WrappedVarArgs([this.ho]));
  var $x_4 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$6 = $m_sjs_js_ArrayOpsCommon$().c(["pos"], $m_sjs_js_ArrayOpsCommon$().c(["normRot"], []));
  var types$6 = $m_sjs_js_ArrayOpsCommon$().c(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().c(["f32"], []));
  var parts$6 = [];
  var i$6 = 0;
  while ((i$6 < (names$6.length | 0))) {
    parts$6.push(((names$6[i$6] + ": ") + types$6[i$6]));
    i$6 = ((1 + i$6) | 0);
  }
  var paramList$6 = parts$6.join(", ");
  var src$6 = (("fn rot_noise_2d(" + paramList$6) + ") -> vec3<f32> {\n  return tiling_rot_noise_2d(pos, vec2<f32>(0.0, 0.0), normRot);\n}");
  $x_4.en(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("rot_noise_2d", src$6), new $c_sjsr_WrappedVarArgs([this.ho]));
  var $x_5 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$7 = $m_sjs_js_ArrayOpsCommon$().c(["pos"], $m_sjs_js_ArrayOpsCommon$().c(["period"], $m_sjs_js_ArrayOpsCommon$().c(["normRot"], [])));
  var types$7 = $m_sjs_js_ArrayOpsCommon$().c(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().c(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().c(["f32"], [])));
  var parts$7 = [];
  var i$7 = 0;
  while ((i$7 < (names$7.length | 0))) {
    parts$7.push(((names$7[i$7] + ": ") + types$7[i$7]));
    i$7 = ((1 + i$7) | 0);
  }
  var paramList$7 = parts$7.join(", ");
  var src$7 = (("fn tiling_rot_noise_3d(" + paramList$7) + ") -> vec4<f32> {\n\n  let alpha = normRot * 6.28318530718;\n  let M = mat3x3<f32>(0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0);\n  let Mi = mat3x3<f32>(-0.5, 0.5, 0.5, 0.5,-0.5, 0.5, 0.5, 0.5,-0.5);\n  var uvw: vec3<f32>;\n  var i0: vec3<f32>;\n  var i1: vec3<f32>;\n  var i2: vec3<f32>;\n  var i3: vec3<f32>;\n  var f0: vec3<f32>;\n  var gt_: vec3<f32>;\n  var lt_: vec3<f32>;\n  var gt: vec3<f32>;\n  var lt: vec3<f32>;\n  var o1: vec3<f32>;\n  var o2: vec3<f32>;\n  var v0: vec3<f32>;\n  var v1: vec3<f32>;\n  var v2: vec3<f32>;\n  var v3: vec3<f32>;\n  var x0: vec3<f32>;\n  var x1: vec3<f32>;\n  var x2: vec3<f32>;\n  var x3: vec3<f32>;\n  uvw = M * pos;\n  i0 = floor(uvw);\n  f0 = uvw - i0;\n  gt_ = step(f0.xyx, f0.yzz);\n  lt_ = 1.0 - gt_;\n  gt = vec3<f32>(lt_.z, gt_.xy);\n  lt = vec3<f32>(lt_.xy, gt_.z);\n  o1 = min(gt, lt);\n  o2 = max(gt, lt);\n  i1 = i0 + o1;\n  i2 = i0 + o2;\n  i3 = i0 + vec3<f32>(1.0, 1.0, 1.0);\n  v0 = Mi * i0;\n  v1 = Mi * i1;\n  v2 = Mi * i2;\n  v3 = Mi * i3;\n  x0 = pos - v0;\n  x1 = pos - v1;\n  x2 = pos - v2;\n  x3 = pos - v3;\n  var vx: vec4<f32>;\n  var vy: vec4<f32>;\n  var vz: vec4<f32>;\n  if(any(period > vec3<f32>(0.0))) {\n    vx = vec4<f32>(v0.x, v1.x, v2.x, v3.x);\n    vy = vec4<f32>(v0.y, v1.y, v2.y, v3.y);\n    vz = vec4<f32>(v0.z, v1.z, v2.z, v3.z);\n    if(period.x > 0.0) {\n      vx = vx - floor(vx / period.x) * period.x;\n    }\n    if(period.y > 0.0) {\n      vy = vy - floor(vy / period.y) * period.y;\n    }\n    if(period.z > 0.0) {\n      vz = vz - floor(vz / period.z) * period.z;\n    }\n    i0 = floor(M * vec3<f32>(vx.x, vy.x, vz.x) + 0.5);\n    i1 = floor(M * vec3<f32>(vx.y, vy.y, vz.y) + 0.5);\n    i2 = floor(M * vec3<f32>(vx.z, vy.z, vz.z) + 0.5);\n    i3 = floor(M * vec3<f32>(vx.w, vy.w, vz.w) + 0.5);\n  }\n  var hash: vec4<f32>;\n  var theta: vec4<f32>;\n  var sz: vec4<f32>;\n  var psi: vec4<f32>;\n  var St: vec4<f32>;\n  var Ct: vec4<f32>;\n  var sz_: vec4<f32>;\n  hash = permute289v4f(permute289v4f(permute289v4f(\n    vec4<f32>(i0.z, i1.z, i2.z, i3.z))\n    + vec4<f32>(i0.y, i1.y, i2.y, i3.y))\n    + vec4<f32>(i0.x, i1.x, i2.x, i3.x));\n  theta = hash * 3.883222077;\n  sz = hash * -0.006920415 + 0.996539792;\n  psi = hash * 0.108705628;\n  Ct = cos(theta);\n  St = sin(theta);\n  sz_ = sqrt(1.0 - sz*sz);\n  var gx: vec4<f32>;\n  var gy: vec4<f32>;\n  var gz: vec4<f32>;\n  var px: vec4<f32>;\n  var py: vec4<f32>;\n  var pz: vec4<f32>;\n  var Sp: vec4<f32>;\n  var Cp: vec4<f32>;\n  var Ctp: vec4<f32>;\n  var qx: vec4<f32>;\n  var qy: vec4<f32>;\n  var qz: vec4<f32>;\n  var Sa: vec4<f32>;\n  var Ca: vec4<f32>;\n  if(alpha != 0.0) {\n    px = Ct * sz_;\n    py = St * sz_;\n    pz = sz;\n    Sp = sin(psi);\n    Cp = cos(psi);\n    Ctp = St*Sp - Ct*Cp;\n    qx = mix(Ctp*St, Sp, sz);\n    qy = mix(-Ctp*Ct, Cp, sz);\n    qz = -(py*Cp + px*Sp);\n    Sa = vec4<f32>(sin(alpha));\n    Ca = vec4<f32>(cos(alpha));\n    gx = Ca*px + Sa*qx;\n    gy = Ca*py + Sa*qy;\n    gz = Ca*pz + Sa*qz;\n  } else {\n    gx = Ct * sz_;\n    gy = St * sz_;\n    gz = sz;\n  }\n  var g0: vec3<f32>;\n  var g1: vec3<f32>;\n  var g2: vec3<f32>;\n  var g3: vec3<f32>;\n  var w: vec4<f32>;\n  var w2: vec4<f32>;\n  var w3: vec4<f32>;\n  var gdotx: vec4<f32>;\n  var n: f32;\n  g0 = vec3<f32>(gx.x, gy.x, gz.x);\n  g1 = vec3<f32>(gx.y, gy.y, gz.y);\n  g2 = vec3<f32>(gx.z, gy.z, gz.z);\n  g3 = vec3<f32>(gx.w, gy.w, gz.w);\n  w = 0.5 - vec4<f32>(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3));\n  w = max(w, vec4<f32>(0.0, 0.0, 0.0, 0.0));\n  w2 = w * w;\n  w3 = w2 * w;\n  gdotx = vec4<f32>(dot(g0,x0), dot(g1,x1), dot(g2,x2), dot(g3,x3));\n  n = 39.5 * dot(w3, gdotx);\n  var dw: vec4<f32> = -6.0 * w2 * gdotx;\n  var dn0: vec3<f32> = w3.x * g0 + dw.x * x0;\n  var dn1: vec3<f32> = w3.y * g1 + dw.y * x1;\n  var dn2: vec3<f32> = w3.z * g2 + dw.z * x2;\n  var dn3: vec3<f32> = w3.w * g3 + dw.w * x3;\n  var grad: vec3<f32> = 39.5 * (dn0 + dn1 + dn2 + dn3);\n  return vec4<f32>(n, grad.x, grad.y, grad.z);\n}");
  this.hp = $x_5.en(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("tiling_rot_noise_3d", src$7), new $c_sjsr_WrappedVarArgs([this.j3]));
  var $x_6 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$8 = $m_sjs_js_ArrayOpsCommon$().c(["pos"], $m_sjs_js_ArrayOpsCommon$().c(["period"], []));
  var types$8 = $m_sjs_js_ArrayOpsCommon$().c(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().c(["vec3<f32>"], []));
  var parts$8 = [];
  var i$8 = 0;
  while ((i$8 < (names$8.length | 0))) {
    parts$8.push(((names$8[i$8] + ": ") + types$8[i$8]));
    i$8 = ((1 + i$8) | 0);
  }
  var paramList$8 = parts$8.join(", ");
  var src$8 = (("fn tiling_noise_3d(" + paramList$8) + ") -> vec4<f32> {\n  return tiling_rot_noise_3d(pos, period, 0.0);\n}");
  this.j4 = $x_6.en(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("tiling_noise_3d", src$8), new $c_sjsr_WrappedVarArgs([this.hp]));
  var $x_7 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$9 = $m_sjs_js_ArrayOpsCommon$().c(["pos"], $m_sjs_js_ArrayOpsCommon$().c(["normRot"], []));
  var types$9 = $m_sjs_js_ArrayOpsCommon$().c(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().c(["f32"], []));
  var parts$9 = [];
  var i$9 = 0;
  while ((i$9 < (names$9.length | 0))) {
    parts$9.push(((names$9[i$9] + ": ") + types$9[i$9]));
    i$9 = ((1 + i$9) | 0);
  }
  var paramList$9 = parts$9.join(", ");
  var src$9 = (("fn rot_noise_3d(" + paramList$9) + ") -> vec4<f32> {\n  return tiling_rot_noise_3d(pos, vec3<f32>(0.0, 0.0, 0.0), normRot);\n}");
  $x_7.en(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("rot_noise_3d", src$9), new $c_sjsr_WrappedVarArgs([this.hp]));
}
$p = $c_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$() {
}
$h_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$.prototype = $p;
var $d_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$, "trivalibs.graphics.shader.lib.random.Psrdnoise$", ({
  eU: 1
}));
var $n_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$;
function $m_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$() {
  if ((!$n_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$)) {
    $n_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$ = new $c_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$();
  }
  return $n_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$;
}
/** @constructor */
function $c_Ltrivalibs_utils_animation_Animator(frame, onFpsCallback) {
  this.j5 = null;
  this.hq = null;
  this.fv = 0;
  this.fw = 0.0;
  this.gn = 0.0;
  this.go = 0.0;
  this.hr = false;
  this.j5 = frame;
  this.hq = onFpsCallback;
  this.fv = 0;
  this.fw = 0.0;
  this.gn = 0.0;
  this.go = (-1.0);
  this.hr = false;
}
$p = $c_Ltrivalibs_utils_animation_Animator.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_animation_Animator;
/** @constructor */
function $h_Ltrivalibs_utils_animation_Animator() {
}
$h_Ltrivalibs_utils_animation_Animator.prototype = $p;
$p.jP = (function(time) {
  this.fv = ((1 + this.fv) | 0);
  if ((this.fw === 0.0)) {
    this.fw = time;
    this.gn = time;
  }
  var fpsElapsed = (time - this.fw);
  if ((fpsElapsed >= 1000.0)) {
    var fps = ((1000.0 * this.fv) / fpsElapsed);
    if (((time - this.gn) >= 1000.0)) {
      var args$proxy1 = $m_sr_ScalaRunTime$().hN(new ($d_sjs_js_Any.r().C)([(fps.toFixed(1) + " FPS")]));
      console.log(...$m_sjsr_Compat$().hK(args$proxy1));
      this.gn = time;
      if ((this.hq !== null)) {
        (0, this.hq)(fps);
      }
    }
    this.fv = 0;
    this.fw = time;
  }
  var delta = ((this.go < 0.0) ? 0.0 : (time - this.go));
  this.go = time;
  (0, this.j5)(delta);
  if (this.hr) {
    requestAnimationFrame($m_sjs_js_Any$().fG(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
      this.jP((+v1$2));
    }))));
  }
});
$p.m6 = (function() {
  this.hr = true;
  return requestAnimationFrame($m_sjs_js_Any$().fG(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
    this.jP((+v1$2));
  }))));
});
var $d_Ltrivalibs_utils_animation_Animator = new $TypeData().i($c_Ltrivalibs_utils_animation_Animator, "trivalibs.utils.animation.Animator", ({
  eX: 1
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
$p.kd = (function(frame) {
  var animator = new $c_Ltrivalibs_utils_animation_Animator(frame, null);
  animator.m6();
  return animator;
});
var $d_Ltrivalibs_utils_animation_animate$package$ = new $TypeData().i($c_Ltrivalibs_utils_animation_animate$package$, "trivalibs.utils.animation.animate$package$", ({
  eY: 1
}));
var $n_Ltrivalibs_utils_animation_animate$package$;
function $m_Ltrivalibs_utils_animation_animate$package$() {
  if ((!$n_Ltrivalibs_utils_animation_animate$package$)) {
    $n_Ltrivalibs_utils_animation_animate$package$ = new $c_Ltrivalibs_utils_animation_animate$package$();
  }
  return $n_Ltrivalibs_utils_animation_animate$package$;
}
/** @constructor */
function $c_Ltrivalibs_utils_events_InputState(el, keyTarget, holdDelay, holdRadius, suppressContextMenu, onActivity, focusOnPointerDown) {
  this.v = null;
  this.fz = null;
  this.gq = null;
  this.fx = 0.0;
  this.fy = 0.0;
  this.gp = false;
  this.j7 = null;
  this.j6 = null;
  this.v = onActivity;
  this.fz = $m_sjs_js_special_package$().jL(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().jO(new ($d_T2.r().C)([]))));
  this.gq = $m_sjs_js_special_package$().jL(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().jO(new ($d_T2.r().C)([]))));
  this.fx = 0.0;
  this.fy = 0.0;
  this.gp = false;
  $m_Ltrivalibs_utils_events_keyboard$package$().l4(keyTarget, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((k$3) => {
    if ((!(!(!(!(!this.fz.hasOwnProperty(k$3))))))) {
      var value$proxy1 = (+Date.now());
      this.fz[k$3] = value$proxy1;
      if ((!(this.v === (void 0)))) {
        var m$proxy1 = this.v;
        m$proxy1();
      }
    }
  })), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((k$3$1) => {
    delete this.fz[k$3$1];
    if ((!(this.v === (void 0)))) {
      var m$proxy2 = this.v;
      m$proxy2();
    }
  })), false);
  $m_Ltrivalibs_utils_events_pointer$package$().lP(el, $m_Ltrivalibs_utils_events_pointer$package$().lQ(), new $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(((v1$2, v2$2, v3$2) => {
    var b = (v1$2 | 0);
    if (focusOnPointerDown) {
      keyTarget.focus();
    }
    var key$proxy3 = ("" + b);
    this.gq[key$proxy3] = true;
    if ((!(this.v === (void 0)))) {
      var m$proxy3 = this.v;
      m$proxy3();
    }
  })), new $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(((v1$2$1, v2$2$1, v3$2$1) => {
    var b$1 = (v1$2$1 | 0);
    delete this.gq[("" + b$1)];
    if ((!(this.v === (void 0)))) {
      var m$proxy4 = this.v;
      m$proxy4();
    }
  })), new $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(((v1$2$2, v2$2$2, v3$2$2, v4$2) => (void 0))), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    if ((!(this.v === (void 0)))) {
      var m$proxy5 = this.v;
      m$proxy5();
    }
  })), new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((v1$2$3, v2$2$3) => {
    var dx = (+v1$2$3);
    var dy = (+v2$2$3);
    this.fx = (this.fx + dx);
    this.fy = (this.fy + dy);
    if ((!(this.v === (void 0)))) {
      var m$proxy6 = this.v;
      m$proxy6();
    }
  })), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    this.gp = false;
    if ((!(this.v === (void 0)))) {
      var m$proxy7 = this.v;
      m$proxy7();
    }
  })), new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((v1$2$4, v2$2$4) => {
    this.gp = true;
    if ((!(this.v === (void 0)))) {
      var m$proxy8 = this.v;
      m$proxy8();
    }
  })), holdDelay, holdRadius, suppressContextMenu);
  if ($m_sr_BoxesRunTime$().a(keyTarget, window)) {
    (!(!document.hasFocus()));
  } else {
    $m_sr_BoxesRunTime$().a(keyTarget, document.activeElement);
  }
  this.j7 = ((_$5$3) => {
    if ((!(this.v === (void 0)))) {
      var m$proxy9 = this.v;
      m$proxy9();
    }
  });
  this.j6 = ((_$6$3) => {
    if ((!(this.v === (void 0)))) {
      var m$proxy10 = this.v;
      m$proxy10();
    }
  });
  keyTarget.addEventListener("focus", this.j7);
  keyTarget.addEventListener("blur", this.j6);
}
$p = $c_Ltrivalibs_utils_events_InputState.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_InputState;
/** @constructor */
function $h_Ltrivalibs_utils_events_InputState() {
}
$h_Ltrivalibs_utils_events_InputState.prototype = $p;
$p.a0 = (function(key) {
  return (!(!(!(!this.fz.hasOwnProperty(key)))));
});
$p.l1 = (function(button) {
  var key$proxy7 = ("" + button);
  return (!(!(!(!this.gq.hasOwnProperty(key$proxy7)))));
});
$p.kq = (function() {
  var x$proxy1 = new $c_T2(this.fx, this.fy);
  this.fx = 0.0;
  this.fy = 0.0;
  return x$proxy1;
});
var $d_Ltrivalibs_utils_events_InputState = new $TypeData().i($c_Ltrivalibs_utils_events_InputState, "trivalibs.utils.events.InputState", ({
  eZ: 1
}));
/** @constructor */
function $c_Ltrivalibs_utils_events_PointerTracker(holdRadius) {
  this.j8 = 0.0;
  this.fB = false;
  this.fC = false;
  this.fD = false;
  this.hs = 0.0;
  this.ht = 0.0;
  this.fA = 0.0;
  this.j8 = holdRadius;
  this.fB = false;
  this.fC = false;
  this.fD = false;
  this.hs = 0.0;
  this.ht = 0.0;
  this.fA = 0.0;
}
$p = $c_Ltrivalibs_utils_events_PointerTracker.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_PointerTracker;
/** @constructor */
function $h_Ltrivalibs_utils_events_PointerTracker() {
}
$h_Ltrivalibs_utils_events_PointerTracker.prototype = $p;
$p.ky = (function(x, y) {
  this.fD = true;
  this.fB = true;
  this.fC = false;
  this.hs = x;
  this.ht = y;
  this.fA = 0.0;
});
$p.lH = (function(x, y) {
  if (this.fD) {
    var ddx = (x - this.hs);
    var ddy = (y - this.ht);
    var p$proxy1 = ((ddx * ddx) + (ddy * ddy));
    var d = (+Math.sqrt(p$proxy1));
    if ((d > this.fA)) {
      this.fA = d;
    }
  }
});
$p.mf = (function() {
  this.fD = false;
  this.fB = false;
  this.fC = false;
});
$p.km = (function() {
  if (((this.fD && (!this.fC)) && (this.fA <= this.j8))) {
    this.fC = true;
    return true;
  } else {
    return false;
  }
});
var $d_Ltrivalibs_utils_events_PointerTracker = new $TypeData().i($c_Ltrivalibs_utils_events_PointerTracker, "trivalibs.utils.events.PointerTracker", ({
  f0: 1
}));
/** @constructor */
function $c_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$() {
}
$p = $c_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$;
/** @constructor */
function $h_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$() {
}
$h_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$.prototype = $p;
$p.kZ = (function(canvas, initialFocus, holdDelay, holdRadius, suppressContextMenu, onActivity) {
  canvas.setAttribute("tabindex", "0");
  var \u03b41$ = canvas.style;
  \u03b41$.setProperty("outline", "none");
  var input = new $c_Ltrivalibs_utils_events_InputState(canvas, canvas, holdDelay, holdRadius, suppressContextMenu, onActivity, true);
  if (initialFocus) {
    canvas.focus();
  }
  return input;
});
var $d_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$, "trivalibs.utils.events.interactive_canvas$package$", ({
  f1: 1
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
$p.l4 = (function(el, onDown, onUp, keepDefault) {
  var down = ((e$3) => {
    var isTab = (e$3.code === "Tab");
    if (((!keepDefault) && (!isTab))) {
      e$3.preventDefault();
    }
    if ((!(!(!e$3.repeat)))) {
      onDown.p(e$3.code);
    }
  });
  var up = ((e$3$1) => {
    onUp.p(e$3$1.code);
  });
  el.addEventListener("keydown", down);
  el.addEventListener("keyup", up);
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    el.removeEventListener("keydown", down);
    el.removeEventListener("keyup", up);
  }));
});
var $d_Ltrivalibs_utils_events_keyboard$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_keyboard$package$, "trivalibs.utils.events.keyboard$package$", ({
  f2: 1
}));
var $n_Ltrivalibs_utils_events_keyboard$package$;
function $m_Ltrivalibs_utils_events_keyboard$package$() {
  if ((!$n_Ltrivalibs_utils_events_keyboard$package$)) {
    $n_Ltrivalibs_utils_events_keyboard$package$ = new $c_Ltrivalibs_utils_events_keyboard$package$();
  }
  return $n_Ltrivalibs_utils_events_keyboard$package$;
}
function $p_Ltrivalibs_utils_events_pointer$package$__clearHold$1__sr_ObjectRef__V($thiz, holdTimer$1) {
  if ((holdTimer$1.eH !== null)) {
    $m_sjs_js_timers_package$().kn(holdTimer$1.eH);
    holdTimer$1.eH = null;
  }
}
function $p_Ltrivalibs_utils_events_pointer$package$__endPrimary$1__Ltrivalibs_utils_events_PointerTracker__sr_BooleanRef__F0__sr_ObjectRef__V($thiz, tracker$1, primaryActive$1, onDragEnd$1, holdTimer$2) {
  var wasDragging = tracker$1.fB;
  tracker$1.mf();
  $p_Ltrivalibs_utils_events_pointer$package$__clearHold$1__sr_ObjectRef__V($thiz, holdTimer$2);
  primaryActive$1.e7 = false;
  if (wasDragging) {
    onDragEnd$1.f2();
  }
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
$p.lP = (function(el, moveTarget, onDown, onUp, onMove, onDragStart, onDrag, onDragEnd, onHold, holdDelay, holdRadius, suppressContextMenu) {
  var tracker = new $c_Ltrivalibs_utils_events_PointerTracker(holdRadius);
  var holdTimer = new $c_sr_ObjectRef(null);
  var lastX = new $c_sr_DoubleRef(0.0);
  var lastY = new $c_sr_DoubleRef(0.0);
  var primaryActive = new $c_sr_BooleanRef(false);
  var downFn = ((e$3) => {
    var btn = (e$3.button | 0);
    onDown.jc(btn, (+e$3.clientX), (+e$3.clientY));
    if (((!(!e$3.isPrimary)) && (btn === 0))) {
      lastX.a3 = (+e$3.clientX);
      lastY.a3 = (+e$3.clientY);
      primaryActive.e7 = true;
      tracker.ky((+e$3.clientX), (+e$3.clientY));
      onDragStart.f2();
      $p_Ltrivalibs_utils_events_pointer$package$__clearHold$1__sr_ObjectRef__V(this, holdTimer);
      holdTimer.eH = $m_sjs_js_timers_package$().m3(holdDelay, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
        if (tracker.km()) {
          onHold.gr(lastX.a3, lastY.a3);
        }
      })));
    }
  });
  var moveFn = ((e$3$1) => {
    var dx = ((+e$3$1.clientX) - lastX.a3);
    var dy = ((+e$3$1.clientY) - lastY.a3);
    lastX.a3 = (+e$3$1.clientX);
    lastY.a3 = (+e$3$1.clientY);
    onMove.kf((+e$3$1.clientX), (+e$3$1.clientY), dx, dy);
    if (primaryActive.e7) {
      tracker.lH((+e$3$1.clientX), (+e$3$1.clientY));
      if (tracker.fB) {
        onDrag.gr(dx, dy);
      }
    }
  });
  var upFn = ((e$3$2) => {
    var btn$1 = (e$3$2.button | 0);
    onUp.jc(btn$1, (+e$3$2.clientX), (+e$3$2.clientY));
    if ((primaryActive.e7 && (btn$1 === 0))) {
      $p_Ltrivalibs_utils_events_pointer$package$__endPrimary$1__Ltrivalibs_utils_events_PointerTracker__sr_BooleanRef__F0__sr_ObjectRef__V(this, tracker, primaryActive, onDragEnd, holdTimer);
    }
  });
  var cancelFn = ((e$3$3) => {
    if (primaryActive.e7) {
      $p_Ltrivalibs_utils_events_pointer$package$__endPrimary$1__Ltrivalibs_utils_events_PointerTracker__sr_BooleanRef__F0__sr_ObjectRef__V(this, tracker, primaryActive, onDragEnd, holdTimer);
    }
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
    $p_Ltrivalibs_utils_events_pointer$package$__clearHold$1__sr_ObjectRef__V(this, holdTimer);
    el.removeEventListener("pointerdown", downFn);
    moveTarget.removeEventListener("pointermove", moveFn);
    moveTarget.removeEventListener("pointerup", upFn);
    moveTarget.removeEventListener("pointercancel", cancelFn);
    if (suppressContextMenu) {
      el.removeEventListener("contextmenu", ctxFn);
    }
  }));
});
$p.lQ = (function() {
  return window;
});
var $d_Ltrivalibs_utils_events_pointer$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_pointer$package$, "trivalibs.utils.events.pointer$package$", ({
  f3: 1
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
  this.gD = null;
  $n_jl_Character$ = this;
  this.gD = new $ac_I(new Int32Array([1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3558, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43504, 43600, 44016, 65296, 66720, 68912, 69734, 69872, 69942, 70096, 70384, 70736, 70864, 71248, 71360, 71472, 71904, 72016, 72784, 73040, 73120, 73552, 92768, 92864, 93008, 120782, 120792, 120802, 120812, 120822, 123200, 123632, 124144, 125264, 130032]));
}
$p = $c_jl_Character$.prototype = new $h_O();
$p.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
}
$h_jl_Character$.prototype = $p;
$p.mb = (function(codePoint) {
  if (((codePoint >>> 0) > 1114111)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return String.fromCodePoint(codePoint);
});
$p.ku = (function(codePoint, radix) {
  if ((codePoint < 256)) {
    var value = (((((codePoint - 48) | 0) >>> 0) <= 9) ? ((codePoint - 48) | 0) : (((((codePoint - 65) | 0) >>> 0) <= 25) ? ((codePoint - 55) | 0) : (((((codePoint - 97) | 0) >>> 0) <= 25) ? ((codePoint - 87) | 0) : (-1))));
  } else if (((((codePoint - 65313) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65303) | 0);
  } else if (((((codePoint - 65345) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65335) | 0);
  } else {
    var p = $m_ju_Arrays$().kk(this.gD, codePoint);
    var zeroCodePointIndex = ((p < 0) ? (((-2) - p) | 0) : p);
    if ((zeroCodePointIndex < 0)) {
      var value = (-1);
    } else {
      var v = ((codePoint - this.gD.b[zeroCodePointIndex]) | 0);
      var value = ((v > 9) ? (-1) : v);
    }
  }
  return ((value < radix) ? value : (-1));
});
var $d_jl_Character$ = new $TypeData().i($c_jl_Character$, "java.lang.Character$", ({
  aV: 1,
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
$p.fX = (function(s) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s) + "\""));
});
$p.l2 = (function(s, radix, overflowBarrier) {
  if ((s === null)) {
    $m_jl_Integer$().fX(s);
  }
  var len = s.length;
  if ((len === 0)) {
    $m_jl_Integer$().fX(s);
  }
  var character = $m_jl_Character$();
  var firstChar = s.charCodeAt(0);
  var negative = (firstChar === 45);
  var sign = (negative ? (-1) : 0);
  var i = ((negative || (firstChar === 43)) ? 1 : 0);
  if ((i >= len)) {
    $m_jl_Integer$().fX(s);
  }
  var java$lang$IntFloatBits$Int32Box$$value = 0;
  java$lang$IntFloatBits$Int32Box$$value = 0;
  while ((i !== len)) {
    var x = character.ku(s.charCodeAt(i), radix);
    if (((x < 0) || ((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (overflowBarrier >>> 0)))) {
      $m_jl_Integer$().fX(s);
    }
    var x$2 = java$lang$IntFloatBits$Int32Box$$value;
    var x$3 = Math.imul(x$2, radix);
    var v = ((x$3 + x) | 0);
    java$lang$IntFloatBits$Int32Box$$value = v;
    i = ((1 + i) | 0);
  }
  if (((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (((2147483647 - sign) | 0) >>> 0))) {
    $m_jl_Integer$().fX(s);
  }
  return (((java$lang$IntFloatBits$Int32Box$$value ^ sign) - sign) | 0);
});
var $d_jl_Integer$ = new $TypeData().i($c_jl_Integer$, "java.lang.Integer$", ({
  b1: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.m)));
}
function $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.hT = s;
  if (writableStackTrace) {
    $thiz.kF();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.hT = null;
  }
  gu() {
    return this.hT;
  }
  kF() {
    var reference = ((this instanceof $c_sjs_js_JavaScriptException) ? this.e8 : this);
    if ((Object.prototype.toString.call(reference) !== "[object Error]")) {
      if (((Error.captureStackTrace === (void 0)) || (!(!Object.isSealed(this))))) {
        new Error();
      } else {
        Error.captureStackTrace(this);
      }
    }
    return this;
  }
  d() {
    var className = $objectClassName(this);
    var message = this.gu();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  i() {
    return $c_O.prototype.i.call(this);
  }
  f(that) {
    return $c_O.prototype.f.call(this, that);
  }
  get "message"() {
    var m = this.gu();
    return ((m === null) ? "" : m);
  }
  get "name"() {
    return $objectClassName(this);
  }
  "toString"() {
    return this.d();
  }
}
function $isArrayOf_jl_Throwable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.f)));
}
/** @constructor */
function $c_s_Console$() {
  this.hV = null;
  $n_s_Console$ = this;
  this.hV = new $c_s_util_DynamicVariable($m_jl_System$Streams$().hR);
}
$p = $c_s_Console$.prototype = new $h_O();
$p.constructor = $c_s_Console$;
/** @constructor */
function $h_s_Console$() {
}
$h_s_Console$.prototype = $p;
$p.lN = (function() {
  return this.hV.gG;
});
var $d_s_Console$ = new $TypeData().i($c_s_Console$, "scala.Console$", ({
  bk: 1,
  ct: 1
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
$p.d = (function() {
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
$p.mm = (function(xs) {
  if ((xs === null)) {
    return null;
  } else if ((xs.b.length === 0)) {
    var this$2 = $m_scm_ArraySeq$();
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    return this$2.i6;
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
$p.d = (function() {
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
$p.d = (function() {
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
$p.d = (function() {
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
$p.d = (function() {
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
$p.d = (function() {
  return "<function4>";
});
/** @constructor */
function $c_sr_BooleanRef(elem) {
  this.e7 = false;
  this.e7 = elem;
}
$p = $c_sr_BooleanRef.prototype = new $h_O();
$p.constructor = $c_sr_BooleanRef;
/** @constructor */
function $h_sr_BooleanRef() {
}
$h_sr_BooleanRef.prototype = $p;
$p.d = (function() {
  return ("" + this.e7);
});
var $d_sr_BooleanRef = new $TypeData().i($c_sr_BooleanRef, "scala.runtime.BooleanRef", ({
  cM: 1,
  a: 1
}));
/** @constructor */
function $c_sr_DoubleRef(elem) {
  this.a3 = 0.0;
  this.a3 = elem;
}
$p = $c_sr_DoubleRef.prototype = new $h_O();
$p.constructor = $c_sr_DoubleRef;
/** @constructor */
function $h_sr_DoubleRef() {
}
$h_sr_DoubleRef.prototype = $p;
$p.d = (function() {
  return ("" + this.a3);
});
var $d_sr_DoubleRef = new $TypeData().i($c_sr_DoubleRef, "scala.runtime.DoubleRef", ({
  cO: 1,
  a: 1
}));
/** @constructor */
function $c_sr_ObjectRef(elem) {
  this.eH = null;
  this.eH = elem;
}
$p = $c_sr_ObjectRef.prototype = new $h_O();
$p.constructor = $c_sr_ObjectRef;
/** @constructor */
function $h_sr_ObjectRef() {
}
$h_sr_ObjectRef.prototype = $p;
$p.d = (function() {
  return ("" + this.eH);
});
var $d_sr_ObjectRef = new $TypeData().i($c_sr_ObjectRef, "scala.runtime.ObjectRef", ({
  cQ: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.eJ = 0;
  this.ig = 0;
  this.jY = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.eJ = $f_T__hashCode__I("Seq");
  this.ig = $f_T__hashCode__I("Map");
  $f_T__hashCode__I("Set");
  this.jY = this.me($m_sci_Nil$(), this.ig);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.jS = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.kV(xs, this.eJ) : ((xs instanceof $c_sci_List) ? this.l5(xs, this.eJ) : this.lM(xs, this.eJ)));
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().i($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  dd: 1,
  dc: 1
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
  this.ii = null;
  this.ii = uv;
}
$p = $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT() {
}
$h_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT.prototype = $p;
var $d_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT, "trivalibs.graphics.buffers.UniformLayout$given_UniformLayout_T", ({
  dj: 1,
  di: 1
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
  dl: 1,
  dk: 1
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
$p.f6 = (function(t) {
  return new $c_T2(t.h2, t.h3);
});
var $d_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$, "trivalibs.graphics.geometry.FieldWriter$vec2Writer$", ({
  dr: 1,
  aH: 1
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
$p.f6 = (function(t) {
  return new $c_T3(t.l, t.k, t.m);
});
var $d_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$, "trivalibs.graphics.geometry.FieldWriter$vec3Writer$", ({
  ds: 1,
  aH: 1
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
  this.il = null;
  this.il = x$1;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexLayout$named.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexLayout$named;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexLayout$named() {
}
$h_Ltrivalibs_graphics_geometry_VertexLayout$named.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_VertexLayout$named = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayout$named, "trivalibs.graphics.geometry.VertexLayout$named", ({
  dy: 1,
  dx: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons(x$1, x$2) {
  this.im = null;
  this.io = null;
  this.im = x$1;
  this.io = x$2;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons() {
}
$h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons.prototype = $p;
$p.mh = (function(t) {
  return $m_sr_Tuples$().kp(this.im.f6(t.g(0)), this.io.f6($m_sr_Tuples$().m8(t)));
});
$p.f6 = (function(t) {
  return this.mh(t);
});
var $d_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons, "trivalibs.graphics.geometry.VertexLayoutHelper$cons", ({
  dz: 1,
  aI: 1
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
$p.f6 = (function(t) {
  return $m_T$package$EmptyTuple$();
});
var $d_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$, "trivalibs.graphics.geometry.VertexLayoutHelper$nil$", ({
  dA: 1,
  aI: 1
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
  this.iq = 0;
  this.iq = idx$2;
}
$p = $c_Ltrivalibs_graphics_geometry_package$package$$anon$1.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_package$package$$anon$1;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_package$package$$anon$1() {
}
$h_Ltrivalibs_graphics_geometry_package$package$$anon$1.prototype = $p;
$p.jN = (function(t) {
  return t.g(this.iq);
});
var $d_Ltrivalibs_graphics_geometry_package$package$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_geometry_package$package$$anon$1, "trivalibs.graphics.geometry.package$package$$anon$1", ({
  dF: 1,
  dv: 1
}));
function $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D($thiz, v, other) {
  return (((v.l * other.l) + (v.k * other.k)) + (v.m * other.m));
}
function $f_Ltrivalibs_graphics_math_Vec3Base__length__O__D($thiz, v) {
  var p$proxy1 = $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D($thiz, v, v);
  return (+Math.sqrt(p$proxy1));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat4$() {
  this.ir = null;
  this.is = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4$() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4$.prototype = $p;
$p.jn = (function() {
  if ((!this.is)) {
    this.ir = $m_Ltrivalibs_graphics_math_cpu_Mat4$();
    this.is = true;
  }
  return this.ir;
});
$p.kL = (function(t, r, s) {
  var x = r.X;
  var y = r.a5;
  var z = r.a6;
  var w = r.a4;
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
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4(((1.0 - (yy + zz)) * s.l), ((xy + wz) * s.l), ((xz - wy) * s.l), 0.0, ((xy - wz) * s.k), ((1.0 - (xx + zz)) * s.k), ((yz + wx) * s.k), 0.0, ((xz + wy) * s.m), ((yz - wx) * s.m), ((1.0 - (xx + yy)) * s.m), 0.0, t.l, t.k, t.m, 1.0);
});
var $d_Ltrivalibs_graphics_math_cpu_Mat4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4$, "trivalibs.graphics.math.cpu.Mat4$", ({
  dT: 1,
  dH: 1
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
  dX: 1,
  dZ: 1
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
  this.it = null;
  this.iu = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec3$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec3$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec3$.prototype = $p;
$p.w = (function() {
  if ((!this.iu)) {
    this.it = $m_Ltrivalibs_graphics_math_cpu_Vec3$();
    this.iu = true;
  }
  return this.it;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3$, "trivalibs.graphics.math.cpu.Vec3$", ({
  e2: 1,
  dM: 1
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
  e5: 1,
  dJ: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1(f$2) {
  this.ix = null;
  this.ix = f$2;
}
$p = $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1() {
}
$h_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1.prototype = $p;
$p.ml = (function(s) {
  return this.ix.p(s);
});
var $d_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1, "trivalibs.graphics.math.gpu.LeftScalar$$anon$1", ({
  e9: 1,
  e7: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_LetExpr(name) {
  this.e = null;
  this.iy = null;
  this.iy = name;
  $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(this, name);
}
$p = $c_Ltrivalibs_graphics_math_gpu_LetExpr.prototype = new $h_Ltrivalibs_graphics_math_gpu_Expr();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_LetExpr;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_LetExpr() {
}
$h_Ltrivalibs_graphics_math_gpu_LetExpr.prototype = $p;
$p.hu = (function(value) {
  return (((("  let " + this.iy) + " = ") + value.e) + ";");
});
var $d_Ltrivalibs_graphics_math_gpu_LetExpr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LetExpr, "trivalibs.graphics.math.gpu.LetExpr", ({
  ea: 1,
  aN: 1
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
$p.hP = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".x"));
});
$p.mo = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".y"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4, "trivalibs.graphics.math.gpu.float_expr$package$$anon$4", ({
  ee: 1,
  dK: 1
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
  ef: 1,
  aL: 1
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
$p.hP = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".x"));
});
$p.hO = (function(v) {
  return this.hP(v);
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6, "trivalibs.graphics.math.gpu.float_expr$package$$anon$6", ({
  eg: 1,
  aM: 1
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
  eh: 1,
  S: 1
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
$p.mi = (function(m, x$2, v, x$4, x$5) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + m.e) + " * ") + v.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Mat4ImmutableOpsG_FloatExpr_Mat4Expr$", ({
  ei: 1,
  dI: 1
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
$p.jh = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("saturate(" + a.e) + ")"));
});
$p.jk = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(" + a.e) + " * 2.0 - 1.0)"));
});
$p.kH = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(" + a.e) + " * 0.5 + 0.5)"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$, "trivalibs.graphics.math.gpu.float_expr$package$given_NumExt_FloatExpr$", ({
  ej: 1,
  f4: 1
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
$p.j9 = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.e) + " + ") + b.e) + ")"));
});
$p.k7 = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.e) + " - ") + b.e) + ")"));
});
$p.k9 = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.e) + " * ") + b.e) + ")"));
});
$p.k4 = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.e) + " / ") + b.e) + ")"));
});
$p.k8 = (function(a, b) {
  return this.j9(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().K().p(b));
});
$p.k6 = (function(a, b) {
  return this.k7(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().K().p(b));
});
$p.ja = (function(a, b) {
  return this.k9(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().K().p(b));
});
$p.k3 = (function(a, b) {
  return this.k4(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().K().p(b));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$, "trivalibs.graphics.math.gpu.float_expr$package$given_NumOps_FloatExpr$", ({
  ek: 1,
  f5: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$;
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
$p.lI = (function(v, x$2, scalar) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.e) + " * ") + scalar.e) + ")"));
});
$p.jb = (function(v, x$2, scalar) {
  return this.lI(v, x$2, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().K().p(scalar));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec3ImmutableOpsG_FloatExpr_Vec3Expr$", ({
  el: 1,
  dN: 1
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
  em: 1,
  dQ: 1
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
  this.Z = null;
  this.F = null;
  this.ha = null;
  this.h9 = null;
  this.eh = null;
  this.x = null;
  this.hb = null;
  this.Z = form;
  this.F = shade;
  this.ha = "none";
  this.h9 = null;
  this.eh = [];
  this.x = [];
  this.hb = new $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter);
}
$p = $c_Ltrivalibs_graphics_painter_Shape.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Shape;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Shape() {
}
$h_Ltrivalibs_graphics_painter_Shape.prototype = $p;
$p.m2 = (function(cullMode, blendState) {
  if ((cullMode !== (void 0))) {
    this.ha = cullMode;
  }
  if ((blendState !== (void 0))) {
    this.h9 = blendState;
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Shape = new $TypeData().i($c_Ltrivalibs_graphics_painter_Shape, "trivalibs.graphics.painter.Shape", ({
  ex: 1,
  eq: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform(inner) {
  this.he = null;
  this.he = inner;
}
$p = $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform() {
}
$h_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform.prototype = $p;
$p.em = (function() {
  return this.he.em();
});
var $d_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform = new $TypeData().i($c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform, "trivalibs.graphics.shader.FragmentUniform$given_WGSLType_FragmentUniform", ({
  eD: 1,
  E: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform(inner) {
  this.hf = null;
  this.hf = inner;
}
$p = $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform() {
}
$h_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform.prototype = $p;
$p.em = (function() {
  return this.hf.em();
});
var $d_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform = new $TypeData().i($c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform, "trivalibs.graphics.shader.VertexUniform$given_WGSLType_VertexUniform", ({
  eE: 1,
  E: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor(prefix) {
  this.hl = null;
  this.hl = prefix;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor.prototype = $p;
$p.fZ = (function(name) {
  return new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(((this.hl === "") ? name : ((this.hl + ".") + name)));
});
var $d_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor, "trivalibs.graphics.shader.dsl.TypedAssignAccessor", ({
  eL: 1,
  z: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(prefix) {
  this.hm = null;
  this.hm = prefix;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor.prototype = $p;
$p.ar = (function(name) {
  return ((this.hm === "") ? $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), name) : $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), ((this.hm + ".") + name)));
});
var $d_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor, "trivalibs.graphics.shader.dsl.TypedExprAccessor", ({
  eM: 1,
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
  eN: 1,
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
  eO: 1,
  z: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_VertexOut(prefix) {
  this.j0 = null;
  this.hn = null;
  this.j0 = prefix;
  this.hn = new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget((prefix + ".position"));
}
$p = $c_Ltrivalibs_graphics_shader_dsl_VertexOut.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_VertexOut;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_VertexOut() {
}
$h_Ltrivalibs_graphics_shader_dsl_VertexOut.prototype = $p;
$p.fZ = (function(name) {
  return new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(((this.j0 + ".") + name));
});
var $d_Ltrivalibs_graphics_shader_dsl_VertexOut = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_VertexOut, "trivalibs.graphics.shader.dsl.VertexOut", ({
  eQ: 1,
  z: 1
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
$p.em = (function() {
  return "mat4x4<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$, "trivalibs.graphics.shader.types$package$given_WGSLType_Mat4$", ({
  eV: 1,
  E: 1
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
$p.em = (function() {
  return "sampler";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$, "trivalibs.graphics.shader.types$package$given_WGSLType_Sampler$", ({
  eW: 1,
  E: 1
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
  this.gC = $data;
}
$p = $c_jl_Class.prototype = new $h_O();
$p.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
}
$h_jl_Class.prototype = $p;
$p.d = (function() {
  return ((this.gC.Y ? "interface " : (this.gC.X ? "" : "class ")) + this.gC.N);
});
var $d_jl_Class = new $TypeData().i($c_jl_Class, "java.lang.Class", ({
  aW: 1,
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
  bt: 1,
  bq: 1,
  br: 1
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
    return $thiz.eo;
  } else {
    throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 0)"));
  }
}
function $f_s_Product10__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.ep;
      break;
    }
    case 1: {
      return $thiz.at;
      break;
    }
    case 2: {
      return $thiz.au;
      break;
    }
    case 3: {
      return $thiz.av;
      break;
    }
    case 4: {
      return $thiz.aw;
      break;
    }
    case 5: {
      return $thiz.ax;
      break;
    }
    case 6: {
      return $thiz.ay;
      break;
    }
    case 7: {
      return $thiz.az;
      break;
    }
    case 8: {
      return $thiz.aA;
      break;
    }
    case 9: {
      return $thiz.as;
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
      return $thiz.eq;
      break;
    }
    case 1: {
      return $thiz.aD;
      break;
    }
    case 2: {
      return $thiz.aE;
      break;
    }
    case 3: {
      return $thiz.aF;
      break;
    }
    case 4: {
      return $thiz.aG;
      break;
    }
    case 5: {
      return $thiz.aH;
      break;
    }
    case 6: {
      return $thiz.aI;
      break;
    }
    case 7: {
      return $thiz.aJ;
      break;
    }
    case 8: {
      return $thiz.aK;
      break;
    }
    case 9: {
      return $thiz.aB;
      break;
    }
    case 10: {
      return $thiz.aC;
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
      return $thiz.er;
      break;
    }
    case 1: {
      return $thiz.aO;
      break;
    }
    case 2: {
      return $thiz.aP;
      break;
    }
    case 3: {
      return $thiz.aQ;
      break;
    }
    case 4: {
      return $thiz.aR;
      break;
    }
    case 5: {
      return $thiz.aS;
      break;
    }
    case 6: {
      return $thiz.aT;
      break;
    }
    case 7: {
      return $thiz.aU;
      break;
    }
    case 8: {
      return $thiz.aV;
      break;
    }
    case 9: {
      return $thiz.aL;
      break;
    }
    case 10: {
      return $thiz.aM;
      break;
    }
    case 11: {
      return $thiz.aN;
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
      return $thiz.es;
      break;
    }
    case 1: {
      return $thiz.b0;
      break;
    }
    case 2: {
      return $thiz.b1;
      break;
    }
    case 3: {
      return $thiz.b2;
      break;
    }
    case 4: {
      return $thiz.b3;
      break;
    }
    case 5: {
      return $thiz.b4;
      break;
    }
    case 6: {
      return $thiz.b5;
      break;
    }
    case 7: {
      return $thiz.b6;
      break;
    }
    case 8: {
      return $thiz.b7;
      break;
    }
    case 9: {
      return $thiz.aW;
      break;
    }
    case 10: {
      return $thiz.aX;
      break;
    }
    case 11: {
      return $thiz.aY;
      break;
    }
    case 12: {
      return $thiz.aZ;
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
      return $thiz.et;
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
      return $thiz.b8;
      break;
    }
    case 10: {
      return $thiz.b9;
      break;
    }
    case 11: {
      return $thiz.ba;
      break;
    }
    case 12: {
      return $thiz.bb;
      break;
    }
    case 13: {
      return $thiz.bc;
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
      return $thiz.eu;
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
    case 12: {
      return $thiz.bo;
      break;
    }
    case 13: {
      return $thiz.bp;
      break;
    }
    case 14: {
      return $thiz.bq;
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
      return $thiz.ev;
      break;
    }
    case 1: {
      return $thiz.bG;
      break;
    }
    case 2: {
      return $thiz.bH;
      break;
    }
    case 3: {
      return $thiz.bI;
      break;
    }
    case 4: {
      return $thiz.bJ;
      break;
    }
    case 5: {
      return $thiz.bK;
      break;
    }
    case 6: {
      return $thiz.bL;
      break;
    }
    case 7: {
      return $thiz.bM;
      break;
    }
    case 8: {
      return $thiz.bN;
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
    case 15: {
      return $thiz.bF;
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
      return $thiz.ew;
      break;
    }
    case 1: {
      return $thiz.bW;
      break;
    }
    case 2: {
      return $thiz.bX;
      break;
    }
    case 3: {
      return $thiz.bY;
      break;
    }
    case 4: {
      return $thiz.bZ;
      break;
    }
    case 5: {
      return $thiz.c0;
      break;
    }
    case 6: {
      return $thiz.c1;
      break;
    }
    case 7: {
      return $thiz.c2;
      break;
    }
    case 8: {
      return $thiz.c3;
      break;
    }
    case 9: {
      return $thiz.bO;
      break;
    }
    case 10: {
      return $thiz.bP;
      break;
    }
    case 11: {
      return $thiz.bQ;
      break;
    }
    case 12: {
      return $thiz.bR;
      break;
    }
    case 13: {
      return $thiz.bS;
      break;
    }
    case 14: {
      return $thiz.bT;
      break;
    }
    case 15: {
      return $thiz.bU;
      break;
    }
    case 16: {
      return $thiz.bV;
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
      return $thiz.ex;
      break;
    }
    case 1: {
      return $thiz.cd;
      break;
    }
    case 2: {
      return $thiz.ce;
      break;
    }
    case 3: {
      return $thiz.cf;
      break;
    }
    case 4: {
      return $thiz.cg;
      break;
    }
    case 5: {
      return $thiz.ch;
      break;
    }
    case 6: {
      return $thiz.ci;
      break;
    }
    case 7: {
      return $thiz.cj;
      break;
    }
    case 8: {
      return $thiz.ck;
      break;
    }
    case 9: {
      return $thiz.c4;
      break;
    }
    case 10: {
      return $thiz.c5;
      break;
    }
    case 11: {
      return $thiz.c6;
      break;
    }
    case 12: {
      return $thiz.c7;
      break;
    }
    case 13: {
      return $thiz.c8;
      break;
    }
    case 14: {
      return $thiz.c9;
      break;
    }
    case 15: {
      return $thiz.ca;
      break;
    }
    case 16: {
      return $thiz.cb;
      break;
    }
    case 17: {
      return $thiz.cc;
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
      return $thiz.ey;
      break;
    }
    case 1: {
      return $thiz.cv;
      break;
    }
    case 2: {
      return $thiz.cw;
      break;
    }
    case 3: {
      return $thiz.cx;
      break;
    }
    case 4: {
      return $thiz.cy;
      break;
    }
    case 5: {
      return $thiz.cz;
      break;
    }
    case 6: {
      return $thiz.cA;
      break;
    }
    case 7: {
      return $thiz.cB;
      break;
    }
    case 8: {
      return $thiz.cC;
      break;
    }
    case 9: {
      return $thiz.cl;
      break;
    }
    case 10: {
      return $thiz.cm;
      break;
    }
    case 11: {
      return $thiz.cn;
      break;
    }
    case 12: {
      return $thiz.co;
      break;
    }
    case 13: {
      return $thiz.cp;
      break;
    }
    case 14: {
      return $thiz.cq;
      break;
    }
    case 15: {
      return $thiz.cr;
      break;
    }
    case 16: {
      return $thiz.cs;
      break;
    }
    case 17: {
      return $thiz.ct;
      break;
    }
    case 18: {
      return $thiz.cu;
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
      return $thiz.Q;
      break;
    }
    case 1: {
      return $thiz.L;
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
      return $thiz.ez;
      break;
    }
    case 1: {
      return $thiz.cN;
      break;
    }
    case 2: {
      return $thiz.cP;
      break;
    }
    case 3: {
      return $thiz.cQ;
      break;
    }
    case 4: {
      return $thiz.cR;
      break;
    }
    case 5: {
      return $thiz.cS;
      break;
    }
    case 6: {
      return $thiz.cT;
      break;
    }
    case 7: {
      return $thiz.cU;
      break;
    }
    case 8: {
      return $thiz.cV;
      break;
    }
    case 9: {
      return $thiz.cD;
      break;
    }
    case 10: {
      return $thiz.cE;
      break;
    }
    case 11: {
      return $thiz.cF;
      break;
    }
    case 12: {
      return $thiz.cG;
      break;
    }
    case 13: {
      return $thiz.cH;
      break;
    }
    case 14: {
      return $thiz.cI;
      break;
    }
    case 15: {
      return $thiz.cJ;
      break;
    }
    case 16: {
      return $thiz.cK;
      break;
    }
    case 17: {
      return $thiz.cL;
      break;
    }
    case 18: {
      return $thiz.cM;
      break;
    }
    case 19: {
      return $thiz.cO;
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
      return $thiz.eA;
      break;
    }
    case 1: {
      return $thiz.d6;
      break;
    }
    case 2: {
      return $thiz.d9;
      break;
    }
    case 3: {
      return $thiz.da;
      break;
    }
    case 4: {
      return $thiz.db;
      break;
    }
    case 5: {
      return $thiz.dc;
      break;
    }
    case 6: {
      return $thiz.dd;
      break;
    }
    case 7: {
      return $thiz.de;
      break;
    }
    case 8: {
      return $thiz.df;
      break;
    }
    case 9: {
      return $thiz.cW;
      break;
    }
    case 10: {
      return $thiz.cX;
      break;
    }
    case 11: {
      return $thiz.cY;
      break;
    }
    case 12: {
      return $thiz.cZ;
      break;
    }
    case 13: {
      return $thiz.d0;
      break;
    }
    case 14: {
      return $thiz.d1;
      break;
    }
    case 15: {
      return $thiz.d2;
      break;
    }
    case 16: {
      return $thiz.d3;
      break;
    }
    case 17: {
      return $thiz.d4;
      break;
    }
    case 18: {
      return $thiz.d5;
      break;
    }
    case 19: {
      return $thiz.d7;
      break;
    }
    case 20: {
      return $thiz.d8;
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
      return $thiz.eB;
      break;
    }
    case 1: {
      return $thiz.dr;
      break;
    }
    case 2: {
      return $thiz.dv;
      break;
    }
    case 3: {
      return $thiz.dw;
      break;
    }
    case 4: {
      return $thiz.dx;
      break;
    }
    case 5: {
      return $thiz.dy;
      break;
    }
    case 6: {
      return $thiz.dz;
      break;
    }
    case 7: {
      return $thiz.dA;
      break;
    }
    case 8: {
      return $thiz.dB;
      break;
    }
    case 9: {
      return $thiz.dg;
      break;
    }
    case 10: {
      return $thiz.dh;
      break;
    }
    case 11: {
      return $thiz.di;
      break;
    }
    case 12: {
      return $thiz.dj;
      break;
    }
    case 13: {
      return $thiz.dk;
      break;
    }
    case 14: {
      return $thiz.dl;
      break;
    }
    case 15: {
      return $thiz.dm;
      break;
    }
    case 16: {
      return $thiz.dn;
      break;
    }
    case 17: {
      return $thiz.dp;
      break;
    }
    case 18: {
      return $thiz.dq;
      break;
    }
    case 19: {
      return $thiz.ds;
      break;
    }
    case 20: {
      return $thiz.dt;
      break;
    }
    case 21: {
      return $thiz.du;
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
      return $thiz.ai;
      break;
    }
    case 1: {
      return $thiz.a9;
      break;
    }
    case 2: {
      return $thiz.aa;
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
      return $thiz.dC;
      break;
    }
    case 1: {
      return $thiz.aj;
      break;
    }
    case 2: {
      return $thiz.ak;
      break;
    }
    case 3: {
      return $thiz.al;
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
      return $thiz.eC;
      break;
    }
    case 1: {
      return $thiz.dD;
      break;
    }
    case 2: {
      return $thiz.dE;
      break;
    }
    case 3: {
      return $thiz.dF;
      break;
    }
    case 4: {
      return $thiz.dG;
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
      return $thiz.eD;
      break;
    }
    case 1: {
      return $thiz.dH;
      break;
    }
    case 2: {
      return $thiz.dI;
      break;
    }
    case 3: {
      return $thiz.dJ;
      break;
    }
    case 4: {
      return $thiz.dK;
      break;
    }
    case 5: {
      return $thiz.dL;
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
      return $thiz.eE;
      break;
    }
    case 1: {
      return $thiz.dM;
      break;
    }
    case 2: {
      return $thiz.dN;
      break;
    }
    case 3: {
      return $thiz.dO;
      break;
    }
    case 4: {
      return $thiz.dP;
      break;
    }
    case 5: {
      return $thiz.dQ;
      break;
    }
    case 6: {
      return $thiz.dR;
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
      return $thiz.eF;
      break;
    }
    case 1: {
      return $thiz.dS;
      break;
    }
    case 2: {
      return $thiz.dT;
      break;
    }
    case 3: {
      return $thiz.dU;
      break;
    }
    case 4: {
      return $thiz.dV;
      break;
    }
    case 5: {
      return $thiz.dW;
      break;
    }
    case 6: {
      return $thiz.dX;
      break;
    }
    case 7: {
      return $thiz.dY;
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
      return $thiz.eG;
      break;
    }
    case 1: {
      return $thiz.dZ;
      break;
    }
    case 2: {
      return $thiz.e0;
      break;
    }
    case 3: {
      return $thiz.e1;
      break;
    }
    case 4: {
      return $thiz.e2;
      break;
    }
    case 5: {
      return $thiz.e3;
      break;
    }
    case 6: {
      return $thiz.e4;
      break;
    }
    case 7: {
      return $thiz.e5;
      break;
    }
    case 8: {
      return $thiz.e6;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 8)"));
    }
  }
}
function $f_sc_Iterator__concat__F0__sc_Iterator($thiz, xs) {
  return new $c_sc_Iterator$ConcatIterator($thiz).ko(xs);
}
function $f_sc_Iterator__sliceIterator__I__I__sc_Iterator($thiz, from, until) {
  var lo = ((from > 0) ? from : 0);
  var rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
  return ((rest === 0) ? $m_sc_Iterator$().ac : new $c_sc_Iterator$SliceIterator($thiz, lo, rest));
}
function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
  var those = that.C();
  while ($thiz.t()) {
    if ((!those.t())) {
      return false;
    }
    if ((!$m_sr_BoxesRunTime$().a($thiz.q(), those.q()))) {
      return false;
    }
  }
  return (!those.t());
}
/** @constructor */
function $c_sc_Iterator$() {
  this.ac = null;
  $n_sc_Iterator$ = this;
  this.ac = new $c_sc_Iterator$$anon$19();
}
$p = $c_sc_Iterator$.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
}
$h_sc_Iterator$.prototype = $p;
var $d_sc_Iterator$ = new $TypeData().i($c_sc_Iterator$, "scala.collection.Iterator$", ({
  bZ: 1,
  a: 1,
  ar: 1
}));
var $n_sc_Iterator$;
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$();
  }
  return $n_sc_Iterator$;
}
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cu)));
}
/** @constructor */
function $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(f) {
  this.i7 = null;
  this.i7 = f;
}
$p = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = new $h_sr_AbstractFunction0();
$p.constructor = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c;
/** @constructor */
function $h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c() {
}
$h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = $p;
$p.f2 = (function() {
  return (0, this.i7)();
});
var $d_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c = new $TypeData().i($c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c, "scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c", ({
  cD: 1,
  cC: 1,
  bm: 1
}));
/** @constructor */
function $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(f) {
  this.i8 = null;
  this.i8 = f;
}
$p = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919;
/** @constructor */
function $h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919() {
}
$h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = $p;
$p.p = (function(x0) {
  return (0, this.i8)(x0);
});
var $d_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919 = new $TypeData().i($c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919, "scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919", ({
  cF: 1,
  cE: 1,
  k: 1
}));
/** @constructor */
function $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(f) {
  this.i9 = null;
  this.i9 = f;
}
$p = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = new $h_sr_AbstractFunction2();
$p.constructor = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8;
/** @constructor */
function $h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8() {
}
$h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = $p;
$p.gr = (function(x0, x1) {
  return (0, this.i9)(x0, x1);
});
var $d_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8 = new $TypeData().i($c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8, "scala.runtime.AbstractFunction2.$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8", ({
  cH: 1,
  cG: 1,
  bn: 1
}));
/** @constructor */
function $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(f) {
  this.ia = null;
  this.ia = f;
}
$p = $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825.prototype = new $h_sr_AbstractFunction3();
$p.constructor = $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825;
/** @constructor */
function $h_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825() {
}
$h_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825.prototype = $p;
$p.jc = (function(x0, x1, x2) {
  return (0, this.ia)(x0, x1, x2);
});
var $d_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825 = new $TypeData().i($c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825, "scala.runtime.AbstractFunction3.$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825", ({
  cJ: 1,
  cI: 1,
  bo: 1
}));
/** @constructor */
function $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(f) {
  this.ib = null;
  this.ib = f;
}
$p = $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a.prototype = new $h_sr_AbstractFunction4();
$p.constructor = $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a;
/** @constructor */
function $h_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a() {
}
$h_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a.prototype = $p;
$p.kf = (function(x0, x1, x2, x3) {
  return (0, this.ib)(x0, x1, x2, x3);
});
var $d_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a = new $TypeData().i($c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a, "scala.runtime.AbstractFunction4.$$Lambda$451042f443265710aa66de6985cba67480d9b00a", ({
  cL: 1,
  cK: 1,
  bp: 1
}));
var $d_sr_Nothing$ = new $TypeData().i(0, "scala.runtime.Nothing$", ({
  cP: 1,
  f: 1,
  a: 1
}));
/** @constructor */
function $c_sr_TupleXXL(es) {
  this.E = null;
  this.E = es;
  if ((es.b.length <= 22)) {
    $m_sr_Scala3RunTime$().kj();
  }
}
$p = $c_sr_TupleXXL.prototype = new $h_O();
$p.constructor = $c_sr_TupleXXL;
/** @constructor */
function $h_sr_TupleXXL() {
}
$h_sr_TupleXXL.prototype = $p;
$p.r = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.g = (function(n) {
  return this.E.b[n];
});
$p.j = (function() {
  return this.E.b.length;
});
$p.o = (function() {
  return "Tuple";
});
$p.d = (function() {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($m_s_Predef$().mm(this.E), "(", ",", ")");
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().kl(this, (-889275714), null);
});
$p.f = (function(that) {
  if ((that instanceof $c_sr_TupleXXL)) {
    if ((this.E === that.E)) {
      return true;
    } else {
      if ((this.E.b.length !== that.E.b.length)) {
        return false;
      }
      var i = 0;
      while ((i < this.E.b.length)) {
        var $x_2 = $m_sr_BoxesRunTime$();
        var arr$3 = this.E;
        var n = i;
        var $x_1 = arr$3.b[n];
        var arr$4 = that.E;
        var n$1 = i;
        if ((!$x_2.a($x_1, arr$4.b[n$1]))) {
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aD)));
}
var $d_sr_TupleXXL = new $TypeData().i($c_sr_TupleXXL, "scala.runtime.TupleXXL", ({
  aD: 1,
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
$p.fG = (function(f) {
  return ((arg1$2) => f.p(arg1$2));
});
var $d_sjs_js_Any$ = new $TypeData().i($c_sjs_js_Any$, "scala.scalajs.js.Any$", ({
  cX: 1,
  d1: 1,
  d2: 1
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
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1.prototype = new $h_s_Conversion();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1.prototype = $p;
$p.p = (function(x) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().jl((+x)));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1, "trivalibs.graphics.math.gpu.float_expr$package$$anon$1", ({
  ed: 1,
  bl: 1,
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
        deps = ((rest[0] === (void 0)) ? $m_Ltrivalibs_graphics_shader_dsl_WgslFnData$().k5() : rest[0]);
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
  aS: 1,
  aX: 1,
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
  aT: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.Y)));
}
var $d_jl_Character = new $TypeData().i(0, "java.lang.Character", ({
  Y: 1,
  a: 1,
  h: 1,
  g: 1
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
$p.d = (function() {
  return this.D;
});
$p.s = (function() {
  return this.D.length;
});
$p.jg = (function(index) {
  return this.D.charCodeAt(index);
});
var $d_jl_StringBuilder = new $TypeData().i($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  b9: 1,
  F: 1,
  W: 1,
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
$p.H = (function() {
  return (-1);
});
$p.hv = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.C = (function() {
  return this;
});
$p.gs = (function(n) {
  return this.gB(n, (-1));
});
$p.gB = (function(from, until) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until);
});
$p.d = (function() {
  return "<iterator>";
});
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.ej(0) === 0);
}
function $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  var thisKnownSize = $thiz.H();
  if ((thisKnownSize !== (-1))) {
    var thatKnownSize = that.H();
    if ((thatKnownSize !== (-1))) {
      if ((thisKnownSize !== thatKnownSize)) {
        return false;
      }
      if ((thisKnownSize === 0)) {
        return true;
      }
    }
  }
  return $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz.C(), that);
}
function $isArrayOf_s_util_CommandLineParser$ParseError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.da)));
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
$p.fH = (function(m) {
  return m.gM;
});
$p.fI = (function(m) {
  return m.gN;
});
$p.fJ = (function(m) {
  return m.gO;
});
$p.fK = (function(m) {
  return m.gP;
});
$p.fL = (function(m) {
  return m.gQ;
});
$p.fM = (function(m) {
  return m.gR;
});
$p.fN = (function(m) {
  return m.gS;
});
$p.fO = (function(m) {
  return m.gT;
});
$p.fP = (function(m) {
  return m.gU;
});
$p.fQ = (function(m) {
  return m.gV;
});
$p.fR = (function(m) {
  return m.gW;
});
$p.fS = (function(m) {
  return m.gX;
});
$p.fT = (function(m) {
  return m.gY;
});
$p.fU = (function(m) {
  return m.gZ;
});
$p.fV = (function(m) {
  return m.h0;
});
$p.fW = (function(m) {
  return m.h1;
});
$p.js = (function(m, v) {
  m.gM = v;
});
$p.jt = (function(m, v) {
  m.gN = v;
});
$p.ju = (function(m, v) {
  m.gO = v;
});
$p.jv = (function(m, v) {
  m.gP = v;
});
$p.jw = (function(m, v) {
  m.gQ = v;
});
$p.jx = (function(m, v) {
  m.gR = v;
});
$p.jy = (function(m, v) {
  m.gS = v;
});
$p.jz = (function(m, v) {
  m.gT = v;
});
$p.jA = (function(m, v) {
  m.gU = v;
});
$p.jB = (function(m, v) {
  m.gV = v;
});
$p.jC = (function(m, v) {
  m.gW = v;
});
$p.jD = (function(m, v) {
  m.gX = v;
});
$p.jE = (function(m, v) {
  m.gY = v;
});
$p.jF = (function(m, v) {
  m.gZ = v;
});
$p.jG = (function(m, v) {
  m.h0 = v;
});
$p.jH = (function(m, v) {
  m.h1 = v;
});
var $d_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$, "trivalibs.graphics.math.cpu.Mat4$given_Mat4Mutable_Mat4$", ({
  dU: 1,
  S: 1,
  aJ: 1,
  aK: 1
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
$p.hO = (function(v) {
  return v.X;
});
var $d_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$, "trivalibs.graphics.math.cpu.Quat$given_Vec4Mutable_Quat$", ({
  dY: 1,
  aM: 1,
  dP: 1,
  dR: 1
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
  e3: 1,
  aL: 1,
  dL: 1,
  dO: 1
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
$p.l7 = (function(m) {
  var offset$proxy1 = (m.off | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy1, true));
});
$p.l9 = (function(m) {
  var offset$proxy2 = ((4 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy2, true));
});
$p.lb = (function(m) {
  var offset$proxy3 = ((8 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy3, true));
});
$p.ld = (function(m) {
  var offset$proxy4 = ((12 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy4, true));
});
$p.lf = (function(m) {
  var offset$proxy5 = ((16 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy5, true));
});
$p.lh = (function(m) {
  var offset$proxy6 = ((20 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy6, true));
});
$p.lj = (function(m) {
  var offset$proxy7 = ((24 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy7, true));
});
$p.ll = (function(m) {
  var offset$proxy8 = ((28 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy8, true));
});
$p.ln = (function(m) {
  var offset$proxy9 = ((32 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy9, true));
});
$p.lp = (function(m) {
  var offset$proxy10 = ((36 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy10, true));
});
$p.lr = (function(m) {
  var offset$proxy11 = ((40 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy11, true));
});
$p.lt = (function(m) {
  var offset$proxy12 = ((44 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy12, true));
});
$p.lv = (function(m) {
  var offset$proxy13 = ((48 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy13, true));
});
$p.lx = (function(m) {
  var offset$proxy14 = ((52 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy14, true));
});
$p.lz = (function(m) {
  var offset$proxy15 = ((56 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy15, true));
});
$p.lB = (function(m) {
  var offset$proxy16 = ((60 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy16, true));
});
$p.l8 = (function(m, v) {
  var value$proxy1 = Math.fround(v);
  var offset$proxy17 = (m.off | 0);
  m.dv.setFloat32(offset$proxy17, value$proxy1, true);
});
$p.la = (function(m, v) {
  var value$proxy2 = Math.fround(v);
  var offset$proxy18 = ((4 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy18, value$proxy2, true);
});
$p.lc = (function(m, v) {
  var value$proxy3 = Math.fround(v);
  var offset$proxy19 = ((8 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy19, value$proxy3, true);
});
$p.le = (function(m, v) {
  var value$proxy4 = Math.fround(v);
  var offset$proxy20 = ((12 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy20, value$proxy4, true);
});
$p.lg = (function(m, v) {
  var value$proxy5 = Math.fround(v);
  var offset$proxy21 = ((16 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy21, value$proxy5, true);
});
$p.li = (function(m, v) {
  var value$proxy6 = Math.fround(v);
  var offset$proxy22 = ((20 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy22, value$proxy6, true);
});
$p.lk = (function(m, v) {
  var value$proxy7 = Math.fround(v);
  var offset$proxy23 = ((24 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy23, value$proxy7, true);
});
$p.lm = (function(m, v) {
  var value$proxy8 = Math.fround(v);
  var offset$proxy24 = ((28 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy24, value$proxy8, true);
});
$p.lo = (function(m, v) {
  var value$proxy9 = Math.fround(v);
  var offset$proxy25 = ((32 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy25, value$proxy9, true);
});
$p.lq = (function(m, v) {
  var value$proxy10 = Math.fround(v);
  var offset$proxy26 = ((36 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy26, value$proxy10, true);
});
$p.ls = (function(m, v) {
  var value$proxy11 = Math.fround(v);
  var offset$proxy27 = ((40 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy27, value$proxy11, true);
});
$p.lu = (function(m, v) {
  var value$proxy12 = Math.fround(v);
  var offset$proxy28 = ((44 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy28, value$proxy12, true);
});
$p.lw = (function(m, v) {
  var value$proxy13 = Math.fround(v);
  var offset$proxy29 = ((48 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy29, value$proxy13, true);
});
$p.ly = (function(m, v) {
  var value$proxy14 = Math.fround(v);
  var offset$proxy30 = ((52 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy30, value$proxy14, true);
});
$p.lA = (function(m, v) {
  var value$proxy15 = Math.fround(v);
  var offset$proxy31 = ((56 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy31, value$proxy15, true);
});
$p.lC = (function(m, v) {
  var value$proxy16 = Math.fround(v);
  var offset$proxy32 = ((60 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy32, value$proxy16, true);
});
$p.fH = (function(m) {
  return this.l7(m);
});
$p.fI = (function(m) {
  return this.l9(m);
});
$p.fJ = (function(m) {
  return this.lb(m);
});
$p.fK = (function(m) {
  return this.ld(m);
});
$p.fL = (function(m) {
  return this.lf(m);
});
$p.fM = (function(m) {
  return this.lh(m);
});
$p.fN = (function(m) {
  return this.lj(m);
});
$p.fO = (function(m) {
  return this.ll(m);
});
$p.fP = (function(m) {
  return this.ln(m);
});
$p.fQ = (function(m) {
  return this.lp(m);
});
$p.fR = (function(m) {
  return this.lr(m);
});
$p.fS = (function(m) {
  return this.lt(m);
});
$p.fT = (function(m) {
  return this.lv(m);
});
$p.fU = (function(m) {
  return this.lx(m);
});
$p.fV = (function(m) {
  return this.lz(m);
});
$p.fW = (function(m) {
  return this.lB(m);
});
$p.js = (function(m, v) {
  this.l8(m, v);
});
$p.jt = (function(m, v) {
  this.la(m, v);
});
$p.ju = (function(m, v) {
  this.lc(m, v);
});
$p.jv = (function(m, v) {
  this.le(m, v);
});
$p.jw = (function(m, v) {
  this.lg(m, v);
});
$p.jx = (function(m, v) {
  this.li(m, v);
});
$p.jy = (function(m, v) {
  this.lk(m, v);
});
$p.jz = (function(m, v) {
  this.lm(m, v);
});
$p.jA = (function(m, v) {
  this.lo(m, v);
});
$p.jB = (function(m, v) {
  this.lq(m, v);
});
$p.jC = (function(m, v) {
  this.ls(m, v);
});
$p.jD = (function(m, v) {
  this.lu(m, v);
});
$p.jE = (function(m, v) {
  this.lw(m, v);
});
$p.jF = (function(m, v) {
  this.ly(m, v);
});
$p.jG = (function(m, v) {
  this.lA(m, v);
});
$p.jH = (function(m, v) {
  this.lC(m, v);
});
var $d_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$, "trivalibs.graphics.math.cpu.mat4$package$Mat4Buffer$given_Mat4Mutable_StructRef$", ({
  e6: 1,
  S: 1,
  aJ: 1,
  aK: 1
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
  var all = [vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, uniformDecls, $thiz.fq, f$proxy1, g$proxy1];
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
  this.f0 = null;
  this.eZ = null;
  this.fq = null;
  this.f0 = vertexBody;
  this.eZ = fragmentBody;
  this.fq = helperFns;
}
$p = $c_Ltrivalibs_graphics_shader_ShaderDef.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_ShaderDef;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_ShaderDef() {
}
$h_Ltrivalibs_graphics_shader_ShaderDef.prototype = $p;
$p.r = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().u(this, (-1488826029), true);
});
$p.f = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_Ltrivalibs_graphics_shader_ShaderDef) && (((this.f0 === x$0.f0) && (this.eZ === x$0.eZ)) && (this.fq === x$0.fq))));
});
$p.d = (function() {
  return $m_sr_ScalaRunTime$().ka(this);
});
$p.j = (function() {
  return 3;
});
$p.o = (function() {
  return "ShaderDef";
});
$p.g = (function(n) {
  switch (n) {
    case 0: {
      return this.f0;
      break;
    }
    case 1: {
      return this.eZ;
      break;
    }
    case 2: {
      return this.fq;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException(("" + n));
    }
  }
});
function $isArrayOf_Ltrivalibs_graphics_shader_ShaderDef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aO)));
}
var $d_Ltrivalibs_graphics_shader_ShaderDef = new $TypeData().i($c_Ltrivalibs_graphics_shader_ShaderDef, "trivalibs.graphics.shader.ShaderDef", ({
  aO: 1,
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
  aR: 1,
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
  aU: 1,
  m: 1,
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
  a0: 1,
  j: 1,
  i: 1,
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
  aZ: 1,
  j: 1,
  i: 1,
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
  b3: 1,
  V: 1,
  T: 1,
  X: 1,
  U: 1
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
  b4: 1,
  j: 1,
  i: 1,
  f: 1,
  a: 1
}));
function $isArrayOf_jl_SecurityException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.b6)));
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
  b7: 1,
  m: 1,
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
  bc: 1,
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
  bh: 1,
  j: 1,
  i: 1,
  f: 1,
  a: 1
}));
function $p_s_MatchError__objString__T($thiz) {
  if ((!$thiz.hX)) {
    if (($thiz.g2 === null)) {
      var $x_1 = "null";
    } else {
      var this$1 = $thiz.g2;
      var cls = $objectGetClass(this$1);
      var ofClass = ((cls === null) ? "of a JS class" : ("of class " + cls.gC.N));
      try {
        var $x_1 = ((($thiz.g2 + " (") + ofClass) + ")");
      } catch (e) {
        var $x_1 = ("an instance " + ofClass);
      }
    }
    $thiz.hW = $x_1;
    $thiz.hX = true;
  }
  return $thiz.hW;
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.g2 = null;
    this.hW = null;
    this.hX = false;
    this.g2 = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  gu() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().i($c_s_MatchError, "scala.MatchError", ({
  bs: 1,
  j: 1,
  i: 1,
  f: 1,
  a: 1
}));
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.f8 = 0;
  this.hZ = 0;
  this.hY = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.hY = outer;
  this.f8 = 0;
  this.hZ = outer.j();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $p;
$p.t = (function() {
  return (this.f8 < this.hZ);
});
$p.q = (function() {
  var result = this.hY.g(this.f8);
  this.f8 = ((1 + this.f8) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().i($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  bu: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1
}));
/** @constructor */
function $c_T1(_1) {
  this.eo = null;
  this.eo = _1;
}
$p = $c_T1.prototype = new $h_O();
$p.constructor = $c_T1;
/** @constructor */
function $h_T1() {
}
$h_T1.prototype = $p;
$p.j = (function() {
  return 1;
});
$p.g = (function(n) {
  return $f_s_Product1__productElement__I__O(this, n);
});
$p.d = (function() {
  return (("(" + this.eo) + ")");
});
$p.o = (function() {
  return "Tuple1";
});
$p.r = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().u(this, 1228477340, true);
});
$p.f = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T1) && $m_sr_BoxesRunTime$().a(this.eo, x$1.eo)));
});
function $isArrayOf_T1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a2)));
}
var $d_T1 = new $TypeData().i($c_T1, "scala.Tuple1", ({
  a2: 1,
  bv: 1,
  c: 1,
  b: 1,
  a: 1
}));
/** @constructor */
function $c_T10(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10) {
  this.ep = null;
  this.at = null;
  this.au = null;
  this.av = null;
  this.aw = null;
  this.ax = null;
  this.ay = null;
  this.az = null;
  this.aA = null;
  this.as = null;
  this.ep = _1;
  this.at = _2;
  this.au = _3;
  this.av = _4;
  this.aw = _5;
  this.ax = _6;
  this.ay = _7;
  this.az = _8;
  this.aA = _9;
  this.as = _10;
}
$p = $c_T10.prototype = new $h_O();
$p.constructor = $c_T10;
/** @constructor */
function $h_T10() {
}
$h_T10.prototype = $p;
$p.r = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.j = (function() {
  return 10;
});
$p.g = (function(n) {
  return $f_s_Product10__productElement__I__O(this, n);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().u(this, 2104595240, true);
});
$p.f = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T10) && ((((((((($m_sr_BoxesRunTime$().a(this.ep, x$0.ep) && $m_sr_BoxesRunTime$().a(this.at, x$0.at)) && $m_sr_BoxesRunTime$().a(this.au, x$0.au)) && $m_sr_BoxesRunTime$().a(this.av, x$0.av)) && $m_sr_BoxesRunTime$().a(this.aw, x$0.aw)) && $m_sr_BoxesRunTime$().a(this.ax, x$0.ax)) && $m_sr_BoxesRunTime$().a(this.ay, x$0.ay)) && $m_sr_BoxesRunTime$().a(this.az, x$0.az)) && $m_sr_BoxesRunTime$().a(this.aA, x$0.aA)) && $m_sr_BoxesRunTime$().a(this.as, x$0.as))));
});
$p.o = (function() {
  return "Tuple10";
});
$p.d = (function() {
  return (((((((((((((((((((("(" + this.ep) + ",") + this.at) + ",") + this.au) + ",") + this.av) + ",") + this.aw) + ",") + this.ax) + ",") + this.ay) + ",") + this.az) + ",") + this.aA) + ",") + this.as) + ")");
});
function $isArrayOf_T10(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a3)));
}
var $d_T10 = new $TypeData().i($c_T10, "scala.Tuple10", ({
  a3: 1,
  b: 1,
  c: 1,
  bw: 1,
  a: 1
}));
/** @constructor */
function $c_T11(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11) {
  this.eq = null;
  this.aD = null;
  this.aE = null;
  this.aF = null;
  this.aG = null;
  this.aH = null;
  this.aI = null;
  this.aJ = null;
  this.aK = null;
  this.aB = null;
  this.aC = null;
  this.eq = _1;
  this.aD = _2;
  this.aE = _3;
  this.aF = _4;
  this.aG = _5;
  this.aH = _6;
  this.aI = _7;
  this.aJ = _8;
  this.aK = _9;
  this.aB = _10;
  this.aC = _11;
}
$p = $c_T11.prototype = new $h_O();
$p.constructor = $c_T11;
/** @constructor */
function $h_T11() {
}
$h_T11.prototype = $p;
$p.r = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.j = (function() {
  return 11;
});
$p.g = (function(n) {
  return $f_s_Product11__productElement__I__O(this, n);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().u(this, 838406606, true);
});
$p.f = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T11) && (((((((((($m_sr_BoxesRunTime$().a(this.eq, x$0.eq) && $m_sr_BoxesRunTime$().a(this.aD, x$0.aD)) && $m_sr_BoxesRunTime$().a(this.aE, x$0.aE)) && $m_sr_BoxesRunTime$().a(this.aF, x$0.aF)) && $m_sr_BoxesRunTime$().a(this.aG, x$0.aG)) && $m_sr_BoxesRunTime$().a(this.aH, x$0.aH)) && $m_sr_BoxesRunTime$().a(this.aI, x$0.aI)) && $m_sr_BoxesRunTime$().a(this.aJ, x$0.aJ)) && $m_sr_BoxesRunTime$().a(this.aK, x$0.aK)) && $m_sr_BoxesRunTime$().a(this.aB, x$0.aB)) && $m_sr_BoxesRunTime$().a(this.aC, x$0.aC))));
});
$p.o = (function() {
  return "Tuple11";
});
$p.d = (function() {
  return (((((((((((((((((((((("(" + this.eq) + ",") + this.aD) + ",") + this.aE) + ",") + this.aF) + ",") + this.aG) + ",") + this.aH) + ",") + this.aI) + ",") + this.aJ) + ",") + this.aK) + ",") + this.aB) + ",") + this.aC) + ")");
});
function $isArrayOf_T11(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a4)));
}
var $d_T11 = new $TypeData().i($c_T11, "scala.Tuple11", ({
  a4: 1,
  b: 1,
  c: 1,
  bx: 1,
  a: 1
}));
/** @constructor */
function $c_T12(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12) {
  this.er = null;
  this.aO = null;
  this.aP = null;
  this.aQ = null;
  this.aR = null;
  this.aS = null;
  this.aT = null;
  this.aU = null;
  this.aV = null;
  this.aL = null;
  this.aM = null;
  this.aN = null;
  this.er = _1;
  this.aO = _2;
  this.aP = _3;
  this.aQ = _4;
  this.aR = _5;
  this.aS = _6;
  this.aT = _7;
  this.aU = _8;
  this.aV = _9;
  this.aL = _10;
  this.aM = _11;
  this.aN = _12;
}
$p = $c_T12.prototype = new $h_O();
$p.constructor = $c_T12;
/** @constructor */
function $h_T12() {
}
$h_T12.prototype = $p;
$p.r = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.j = (function() {
  return 12;
});
$p.g = (function(n) {
  return $f_s_Product12__productElement__I__O(this, n);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().u(this, (-1964145863), true);
});
$p.f = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T12) && ((((((((((($m_sr_BoxesRunTime$().a(this.er, x$0.er) && $m_sr_BoxesRunTime$().a(this.aO, x$0.aO)) && $m_sr_BoxesRunTime$().a(this.aP, x$0.aP)) && $m_sr_BoxesRunTime$().a(this.aQ, x$0.aQ)) && $m_sr_BoxesRunTime$().a(this.aR, x$0.aR)) && $m_sr_BoxesRunTime$().a(this.aS, x$0.aS)) && $m_sr_BoxesRunTime$().a(this.aT, x$0.aT)) && $m_sr_BoxesRunTime$().a(this.aU, x$0.aU)) && $m_sr_BoxesRunTime$().a(this.aV, x$0.aV)) && $m_sr_BoxesRunTime$().a(this.aL, x$0.aL)) && $m_sr_BoxesRunTime$().a(this.aM, x$0.aM)) && $m_sr_BoxesRunTime$().a(this.aN, x$0.aN))));
});
$p.o = (function() {
  return "Tuple12";
});
$p.d = (function() {
  return (((((((((((((((((((((((("(" + this.er) + ",") + this.aO) + ",") + this.aP) + ",") + this.aQ) + ",") + this.aR) + ",") + this.aS) + ",") + this.aT) + ",") + this.aU) + ",") + this.aV) + ",") + this.aL) + ",") + this.aM) + ",") + this.aN) + ")");
});
function $isArrayOf_T12(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a5)));
}
var $d_T12 = new $TypeData().i($c_T12, "scala.Tuple12", ({
  a5: 1,
  b: 1,
  c: 1,
  by: 1,
  a: 1
}));
/** @constructor */
function $c_T13(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13) {
  this.es = null;
  this.b0 = null;
  this.b1 = null;
  this.b2 = null;
  this.b3 = null;
  this.b4 = null;
  this.b5 = null;
  this.b6 = null;
  this.b7 = null;
  this.aW = null;
  this.aX = null;
  this.aY = null;
  this.aZ = null;
  this.es = _1;
  this.b0 = _2;
  this.b1 = _3;
  this.b2 = _4;
  this.b3 = _5;
  this.b4 = _6;
  this.b5 = _7;
  this.b6 = _8;
  this.b7 = _9;
  this.aW = _10;
  this.aX = _11;
  this.aY = _12;
  this.aZ = _13;
}
$p = $c_T13.prototype = new $h_O();
$p.constructor = $c_T13;
/** @constructor */
function $h_T13() {
}
$h_T13.prototype = $p;
$p.r = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.j = (function() {
  return 13;
});
$p.g = (function(n) {
  return $f_s_Product13__productElement__I__O(this, n);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().u(this, 1224168367, true);
});
$p.f = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T13) && (((((((((((($m_sr_BoxesRunTime$().a(this.es, x$0.es) && $m_sr_BoxesRunTime$().a(this.b0, x$0.b0)) && $m_sr_BoxesRunTime$().a(this.b1, x$0.b1)) && $m_sr_BoxesRunTime$().a(this.b2, x$0.b2)) && $m_sr_BoxesRunTime$().a(this.b3, x$0.b3)) && $m_sr_BoxesRunTime$().a(this.b4, x$0.b4)) && $m_sr_BoxesRunTime$().a(this.b5, x$0.b5)) && $m_sr_BoxesRunTime$().a(this.b6, x$0.b6)) && $m_sr_BoxesRunTime$().a(this.b7, x$0.b7)) && $m_sr_BoxesRunTime$().a(this.aW, x$0.aW)) && $m_sr_BoxesRunTime$().a(this.aX, x$0.aX)) && $m_sr_BoxesRunTime$().a(this.aY, x$0.aY)) && $m_sr_BoxesRunTime$().a(this.aZ, x$0.aZ))));
});
$p.o = (function() {
  return "Tuple13";
});
$p.d = (function() {
  return (((((((((((((((((((((((((("(" + this.es) + ",") + this.b0) + ",") + this.b1) + ",") + this.b2) + ",") + this.b3) + ",") + this.b4) + ",") + this.b5) + ",") + this.b6) + ",") + this.b7) + ",") + this.aW) + ",") + this.aX) + ",") + this.aY) + ",") + this.aZ) + ")");
});
function $isArrayOf_T13(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a6)));
}
var $d_T13 = new $TypeData().i($c_T13, "scala.Tuple13", ({
  a6: 1,
  b: 1,
  c: 1,
  bz: 1,
  a: 1
}));
/** @constructor */
function $c_T14(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14) {
  this.et = null;
  this.bd = null;
  this.be = null;
  this.bf = null;
  this.bg = null;
  this.bh = null;
  this.bi = null;
  this.bj = null;
  this.bk = null;
  this.b8 = null;
  this.b9 = null;
  this.ba = null;
  this.bb = null;
  this.bc = null;
  this.et = _1;
  this.bd = _2;
  this.be = _3;
  this.bf = _4;
  this.bg = _5;
  this.bh = _6;
  this.bi = _7;
  this.bj = _8;
  this.bk = _9;
  this.b8 = _10;
  this.b9 = _11;
  this.ba = _12;
  this.bb = _13;
  this.bc = _14;
}
$p = $c_T14.prototype = new $h_O();
$p.constructor = $c_T14;
/** @constructor */
function $h_T14() {
}
$h_T14.prototype = $p;
$p.r = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.j = (function() {
  return 14;
});
$p.g = (function(n) {
  return $f_s_Product14__productElement__I__O(this, n);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().u(this, 147759069, true);
});
$p.f = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T14) && ((((((((((((($m_sr_BoxesRunTime$().a(this.et, x$0.et) && $m_sr_BoxesRunTime$().a(this.bd, x$0.bd)) && $m_sr_BoxesRunTime$().a(this.be, x$0.be)) && $m_sr_BoxesRunTime$().a(this.bf, x$0.bf)) && $m_sr_BoxesRunTime$().a(this.bg, x$0.bg)) && $m_sr_BoxesRunTime$().a(this.bh, x$0.bh)) && $m_sr_BoxesRunTime$().a(this.bi, x$0.bi)) && $m_sr_BoxesRunTime$().a(this.bj, x$0.bj)) && $m_sr_BoxesRunTime$().a(this.bk, x$0.bk)) && $m_sr_BoxesRunTime$().a(this.b8, x$0.b8)) && $m_sr_BoxesRunTime$().a(this.b9, x$0.b9)) && $m_sr_BoxesRunTime$().a(this.ba, x$0.ba)) && $m_sr_BoxesRunTime$().a(this.bb, x$0.bb)) && $m_sr_BoxesRunTime$().a(this.bc, x$0.bc))));
});
$p.o = (function() {
  return "Tuple14";
});
$p.d = (function() {
  return (((((((((((((((((((((((((((("(" + this.et) + ",") + this.bd) + ",") + this.be) + ",") + this.bf) + ",") + this.bg) + ",") + this.bh) + ",") + this.bi) + ",") + this.bj) + ",") + this.bk) + ",") + this.b8) + ",") + this.b9) + ",") + this.ba) + ",") + this.bb) + ",") + this.bc) + ")");
});
function $isArrayOf_T14(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a7)));
}
var $d_T14 = new $TypeData().i($c_T14, "scala.Tuple14", ({
  a7: 1,
  b: 1,
  c: 1,
  bA: 1,
  a: 1
}));
/** @constructor */
function $c_T15(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15) {
  this.eu = null;
  this.br = null;
  this.bs = null;
  this.bt = null;
  this.bu = null;
  this.bv = null;
  this.bw = null;
  this.bx = null;
  this.by = null;
  this.bl = null;
  this.bm = null;
  this.bn = null;
  this.bo = null;
  this.bp = null;
  this.bq = null;
  this.eu = _1;
  this.br = _2;
  this.bs = _3;
  this.bt = _4;
  this.bu = _5;
  this.bv = _6;
  this.bw = _7;
  this.bx = _8;
  this.by = _9;
  this.bl = _10;
  this.bm = _11;
  this.bn = _12;
  this.bo = _13;
  this.bp = _14;
  this.bq = _15;
}
$p = $c_T15.prototype = new $h_O();
$p.constructor = $c_T15;
/** @constructor */
function $h_T15() {
}
$h_T15.prototype = $p;
$p.r = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.j = (function() {
  return 15;
});
$p.g = (function(n) {
  return $f_s_Product15__productElement__I__O(this, n);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().u(this, 1834180931, true);
});
$p.f = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T15) && (((((((((((((($m_sr_BoxesRunTime$().a(this.eu, x$0.eu) && $m_sr_BoxesRunTime$().a(this.br, x$0.br)) && $m_sr_BoxesRunTime$().a(this.bs, x$0.bs)) && $m_sr_BoxesRunTime$().a(this.bt, x$0.bt)) && $m_sr_BoxesRunTime$().a(this.bu, x$0.bu)) && $m_sr_BoxesRunTime$().a(this.bv, x$0.bv)) && $m_sr_BoxesRunTime$().a(this.bw, x$0.bw)) && $m_sr_BoxesRunTime$().a(this.bx, x$0.bx)) && $m_sr_BoxesRunTime$().a(this.by, x$0.by)) && $m_sr_BoxesRunTime$().a(this.bl, x$0.bl)) && $m_sr_BoxesRunTime$().a(this.bm, x$0.bm)) && $m_sr_BoxesRunTime$().a(this.bn, x$0.bn)) && $m_sr_BoxesRunTime$().a(this.bo, x$0.bo)) && $m_sr_BoxesRunTime$().a(this.bp, x$0.bp)) && $m_sr_BoxesRunTime$().a(this.bq, x$0.bq))));
});
$p.o = (function() {
  return "Tuple15";
});
$p.d = (function() {
  return (((((((((((((((((((((((((((((("(" + this.eu) + ",") + this.br) + ",") + this.bs) + ",") + this.bt) + ",") + this.bu) + ",") + this.bv) + ",") + this.bw) + ",") + this.bx) + ",") + this.by) + ",") + this.bl) + ",") + this.bm) + ",") + this.bn) + ",") + this.bo) + ",") + this.bp) + ",") + this.bq) + ")");
});
function $isArrayOf_T15(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a8)));
}
var $d_T15 = new $TypeData().i($c_T15, "scala.Tuple15", ({
  a8: 1,
  b: 1,
  c: 1,
  bB: 1,
  a: 1
}));
/** @constructor */
function $c_T16(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16) {
  this.ev = null;
  this.bG = null;
  this.bH = null;
  this.bI = null;
  this.bJ = null;
  this.bK = null;
  this.bL = null;
  this.bM = null;
  this.bN = null;
  this.bz = null;
  this.bA = null;
  this.bB = null;
  this.bC = null;
  this.bD = null;
  this.bE = null;
  this.bF = null;
  this.ev = _1;
  this.bG = _2;
  this.bH = _3;
  this.bI = _4;
  this.bJ = _5;
  this.bK = _6;
  this.bL = _7;
  this.bM = _8;
  this.bN = _9;
  this.bz = _10;
  this.bA = _11;
  this.bB = _12;
  this.bC = _13;
  this.bD = _14;
  this.bE = _15;
  this.bF = _16;
}
$p = $c_T16.prototype = new $h_O();
$p.constructor = $c_T16;
/** @constructor */
function $h_T16() {
}
$h_T16.prototype = $p;
$p.r = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.j = (function() {
  return 16;
});
$p.g = (function(n) {
  return $f_s_Product16__productElement__I__O(this, n);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().u(this, 499793902, true);
});
$p.f = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T16) && ((((((((((((((($m_sr_BoxesRunTime$().a(this.ev, x$0.ev) && $m_sr_BoxesRunTime$().a(this.bG, x$0.bG)) && $m_sr_BoxesRunTime$().a(this.bH, x$0.bH)) && $m_sr_BoxesRunTime$().a(this.bI, x$0.bI)) && $m_sr_BoxesRunTime$().a(this.bJ, x$0.bJ)) && $m_sr_BoxesRunTime$().a(this.bK, x$0.bK)) && $m_sr_BoxesRunTime$().a(this.bL, x$0.bL)) && $m_sr_BoxesRunTime$().a(this.bM, x$0.bM)) && $m_sr_BoxesRunTime$().a(this.bN, x$0.bN)) && $m_sr_BoxesRunTime$().a(this.bz, x$0.bz)) && $m_sr_BoxesRunTime$().a(this.bA, x$0.bA)) && $m_sr_BoxesRunTime$().a(this.bB, x$0.bB)) && $m_sr_BoxesRunTime$().a(this.bC, x$0.bC)) && $m_sr_BoxesRunTime$().a(this.bD, x$0.bD)) && $m_sr_BoxesRunTime$().a(this.bE, x$0.bE)) && $m_sr_BoxesRunTime$().a(this.bF, x$0.bF))));
});
$p.o = (function() {
  return "Tuple16";
});
$p.d = (function() {
  return (((((((((((((((((((((((((((((((("(" + this.ev) + ",") + this.bG) + ",") + this.bH) + ",") + this.bI) + ",") + this.bJ) + ",") + this.bK) + ",") + this.bL) + ",") + this.bM) + ",") + this.bN) + ",") + this.bz) + ",") + this.bA) + ",") + this.bB) + ",") + this.bC) + ",") + this.bD) + ",") + this.bE) + ",") + this.bF) + ")");
});
function $isArrayOf_T16(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a9)));
}
var $d_T16 = new $TypeData().i($c_T16, "scala.Tuple16", ({
  a9: 1,
  b: 1,
  c: 1,
  bC: 1,
  a: 1
}));
/** @constructor */
function $c_T17(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17) {
  this.ew = null;
  this.bW = null;
  this.bX = null;
  this.bY = null;
  this.bZ = null;
  this.c0 = null;
  this.c1 = null;
  this.c2 = null;
  this.c3 = null;
  this.bO = null;
  this.bP = null;
  this.bQ = null;
  this.bR = null;
  this.bS = null;
  this.bT = null;
  this.bU = null;
  this.bV = null;
  this.ew = _1;
  this.bW = _2;
  this.bX = _3;
  this.bY = _4;
  this.bZ = _5;
  this.c0 = _6;
  this.c1 = _7;
  this.c2 = _8;
  this.c3 = _9;
  this.bO = _10;
  this.bP = _11;
  this.bQ = _12;
  this.bR = _13;
  this.bS = _14;
  this.bT = _15;
  this.bU = _16;
  this.bV = _17;
}
$p = $c_T17.prototype = new $h_O();
$p.constructor = $c_T17;
/** @constructor */
function $h_T17() {
}
$h_T17.prototype = $p;
$p.r = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.j = (function() {
  return 17;
});
$p.g = (function(n) {
  return $f_s_Product17__productElement__I__O(this, n);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().u(this, (-934366247), true);
});
$p.f = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T17) && (((((((((((((((($m_sr_BoxesRunTime$().a(this.ew, x$0.ew) && $m_sr_BoxesRunTime$().a(this.bW, x$0.bW)) && $m_sr_BoxesRunTime$().a(this.bX, x$0.bX)) && $m_sr_BoxesRunTime$().a(this.bY, x$0.bY)) && $m_sr_BoxesRunTime$().a(this.bZ, x$0.bZ)) && $m_sr_BoxesRunTime$().a(this.c0, x$0.c0)) && $m_sr_BoxesRunTime$().a(this.c1, x$0.c1)) && $m_sr_BoxesRunTime$().a(this.c2, x$0.c2)) && $m_sr_BoxesRunTime$().a(this.c3, x$0.c3)) && $m_sr_BoxesRunTime$().a(this.bO, x$0.bO)) && $m_sr_BoxesRunTime$().a(this.bP, x$0.bP)) && $m_sr_BoxesRunTime$().a(this.bQ, x$0.bQ)) && $m_sr_BoxesRunTime$().a(this.bR, x$0.bR)) && $m_sr_BoxesRunTime$().a(this.bS, x$0.bS)) && $m_sr_BoxesRunTime$().a(this.bT, x$0.bT)) && $m_sr_BoxesRunTime$().a(this.bU, x$0.bU)) && $m_sr_BoxesRunTime$().a(this.bV, x$0.bV))));
});
$p.o = (function() {
  return "Tuple17";
});
$p.d = (function() {
  return (((((((((((((((((((((((((((((((((("(" + this.ew) + ",") + this.bW) + ",") + this.bX) + ",") + this.bY) + ",") + this.bZ) + ",") + this.c0) + ",") + this.c1) + ",") + this.c2) + ",") + this.c3) + ",") + this.bO) + ",") + this.bP) + ",") + this.bQ) + ",") + this.bR) + ",") + this.bS) + ",") + this.bT) + ",") + this.bU) + ",") + this.bV) + ")");
});
function $isArrayOf_T17(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aa)));
}
var $d_T17 = new $TypeData().i($c_T17, "scala.Tuple17", ({
  aa: 1,
  b: 1,
  c: 1,
  bD: 1,
  a: 1
}));
/** @constructor */
function $c_T18(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18) {
  this.ex = null;
  this.cd = null;
  this.ce = null;
  this.cf = null;
  this.cg = null;
  this.ch = null;
  this.ci = null;
  this.cj = null;
  this.ck = null;
  this.c4 = null;
  this.c5 = null;
  this.c6 = null;
  this.c7 = null;
  this.c8 = null;
  this.c9 = null;
  this.ca = null;
  this.cb = null;
  this.cc = null;
  this.ex = _1;
  this.cd = _2;
  this.ce = _3;
  this.cf = _4;
  this.cg = _5;
  this.ch = _6;
  this.ci = _7;
  this.cj = _8;
  this.ck = _9;
  this.c4 = _10;
  this.c5 = _11;
  this.c6 = _12;
  this.c7 = _13;
  this.c8 = _14;
  this.c9 = _15;
  this.ca = _16;
  this.cb = _17;
  this.cc = _18;
}
$p = $c_T18.prototype = new $h_O();
$p.constructor = $c_T18;
/** @constructor */
function $h_T18() {
}
$h_T18.prototype = $p;
$p.r = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.j = (function() {
  return 18;
});
$p.g = (function(n) {
  return $f_s_Product18__productElement__I__O(this, n);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().u(this, (-937041276), true);
});
$p.f = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T18) && ((((((((((((((((($m_sr_BoxesRunTime$().a(this.ex, x$0.ex) && $m_sr_BoxesRunTime$().a(this.cd, x$0.cd)) && $m_sr_BoxesRunTime$().a(this.ce, x$0.ce)) && $m_sr_BoxesRunTime$().a(this.cf, x$0.cf)) && $m_sr_BoxesRunTime$().a(this.cg, x$0.cg)) && $m_sr_BoxesRunTime$().a(this.ch, x$0.ch)) && $m_sr_BoxesRunTime$().a(this.ci, x$0.ci)) && $m_sr_BoxesRunTime$().a(this.cj, x$0.cj)) && $m_sr_BoxesRunTime$().a(this.ck, x$0.ck)) && $m_sr_BoxesRunTime$().a(this.c4, x$0.c4)) && $m_sr_BoxesRunTime$().a(this.c5, x$0.c5)) && $m_sr_BoxesRunTime$().a(this.c6, x$0.c6)) && $m_sr_BoxesRunTime$().a(this.c7, x$0.c7)) && $m_sr_BoxesRunTime$().a(this.c8, x$0.c8)) && $m_sr_BoxesRunTime$().a(this.c9, x$0.c9)) && $m_sr_BoxesRunTime$().a(this.ca, x$0.ca)) && $m_sr_BoxesRunTime$().a(this.cb, x$0.cb)) && $m_sr_BoxesRunTime$().a(this.cc, x$0.cc))));
});
$p.o = (function() {
  return "Tuple18";
});
$p.d = (function() {
  return (((((((((((((((((((((((((((((((((((("(" + this.ex) + ",") + this.cd) + ",") + this.ce) + ",") + this.cf) + ",") + this.cg) + ",") + this.ch) + ",") + this.ci) + ",") + this.cj) + ",") + this.ck) + ",") + this.c4) + ",") + this.c5) + ",") + this.c6) + ",") + this.c7) + ",") + this.c8) + ",") + this.c9) + ",") + this.ca) + ",") + this.cb) + ",") + this.cc) + ")");
});
function $isArrayOf_T18(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ab)));
}
var $d_T18 = new $TypeData().i($c_T18, "scala.Tuple18", ({
  ab: 1,
  b: 1,
  c: 1,
  bE: 1,
  a: 1
}));
/** @constructor */
function $c_T19(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19) {
  this.ey = null;
  this.cv = null;
  this.cw = null;
  this.cx = null;
  this.cy = null;
  this.cz = null;
  this.cA = null;
  this.cB = null;
  this.cC = null;
  this.cl = null;
  this.cm = null;
  this.cn = null;
  this.co = null;
  this.cp = null;
  this.cq = null;
  this.cr = null;
  this.cs = null;
  this.ct = null;
  this.cu = null;
  this.ey = _1;
  this.cv = _2;
  this.cw = _3;
  this.cx = _4;
  this.cy = _5;
  this.cz = _6;
  this.cA = _7;
  this.cB = _8;
  this.cC = _9;
  this.cl = _10;
  this.cm = _11;
  this.cn = _12;
  this.co = _13;
  this.cp = _14;
  this.cq = _15;
  this.cr = _16;
  this.cs = _17;
  this.ct = _18;
  this.cu = _19;
}
$p = $c_T19.prototype = new $h_O();
$p.constructor = $c_T19;
/** @constructor */
function $h_T19() {
}
$h_T19.prototype = $p;
$p.r = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.j = (function() {
  return 19;
});
$p.g = (function(n) {
  return $f_s_Product19__productElement__I__O(this, n);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().u(this, (-1955940499), true);
});
$p.f = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T19) && (((((((((((((((((($m_sr_BoxesRunTime$().a(this.ey, x$0.ey) && $m_sr_BoxesRunTime$().a(this.cv, x$0.cv)) && $m_sr_BoxesRunTime$().a(this.cw, x$0.cw)) && $m_sr_BoxesRunTime$().a(this.cx, x$0.cx)) && $m_sr_BoxesRunTime$().a(this.cy, x$0.cy)) && $m_sr_BoxesRunTime$().a(this.cz, x$0.cz)) && $m_sr_BoxesRunTime$().a(this.cA, x$0.cA)) && $m_sr_BoxesRunTime$().a(this.cB, x$0.cB)) && $m_sr_BoxesRunTime$().a(this.cC, x$0.cC)) && $m_sr_BoxesRunTime$().a(this.cl, x$0.cl)) && $m_sr_BoxesRunTime$().a(this.cm, x$0.cm)) && $m_sr_BoxesRunTime$().a(this.cn, x$0.cn)) && $m_sr_BoxesRunTime$().a(this.co, x$0.co)) && $m_sr_BoxesRunTime$().a(this.cp, x$0.cp)) && $m_sr_BoxesRunTime$().a(this.cq, x$0.cq)) && $m_sr_BoxesRunTime$().a(this.cr, x$0.cr)) && $m_sr_BoxesRunTime$().a(this.cs, x$0.cs)) && $m_sr_BoxesRunTime$().a(this.ct, x$0.ct)) && $m_sr_BoxesRunTime$().a(this.cu, x$0.cu))));
});
$p.o = (function() {
  return "Tuple19";
});
$p.d = (function() {
  return (((((((((((((((((((((((((((((((((((((("(" + this.ey) + ",") + this.cv) + ",") + this.cw) + ",") + this.cx) + ",") + this.cy) + ",") + this.cz) + ",") + this.cA) + ",") + this.cB) + ",") + this.cC) + ",") + this.cl) + ",") + this.cm) + ",") + this.cn) + ",") + this.co) + ",") + this.cp) + ",") + this.cq) + ",") + this.cr) + ",") + this.cs) + ",") + this.ct) + ",") + this.cu) + ")");
});
function $isArrayOf_T19(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ac)));
}
var $d_T19 = new $TypeData().i($c_T19, "scala.Tuple19", ({
  ac: 1,
  b: 1,
  c: 1,
  bF: 1,
  a: 1
}));
/** @constructor */
function $c_T2(_1, _2) {
  this.Q = null;
  this.L = null;
  this.Q = _1;
  this.L = _2;
}
$p = $c_T2.prototype = new $h_O();
$p.constructor = $c_T2;
/** @constructor */
function $h_T2() {
}
$h_T2.prototype = $p;
$p.j = (function() {
  return 2;
});
$p.g = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n);
});
$p.d = (function() {
  return (((("(" + this.Q) + ",") + this.L) + ")");
});
$p.o = (function() {
  return "Tuple2";
});
$p.r = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().u(this, (-116390334), true);
});
$p.f = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T2) && ($m_sr_BoxesRunTime$().a(this.Q, x$1.Q) && $m_sr_BoxesRunTime$().a(this.L, x$1.L))));
});
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ad)));
}
var $d_T2 = new $TypeData().i($c_T2, "scala.Tuple2", ({
  ad: 1,
  bG: 1,
  c: 1,
  b: 1,
  a: 1
}));
/** @constructor */
function $c_T20(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20) {
  this.ez = null;
  this.cN = null;
  this.cP = null;
  this.cQ = null;
  this.cR = null;
  this.cS = null;
  this.cT = null;
  this.cU = null;
  this.cV = null;
  this.cD = null;
  this.cE = null;
  this.cF = null;
  this.cG = null;
  this.cH = null;
  this.cI = null;
  this.cJ = null;
  this.cK = null;
  this.cL = null;
  this.cM = null;
  this.cO = null;
  this.ez = _1;
  this.cN = _2;
  this.cP = _3;
  this.cQ = _4;
  this.cR = _5;
  this.cS = _6;
  this.cT = _7;
  this.cU = _8;
  this.cV = _9;
  this.cD = _10;
  this.cE = _11;
  this.cF = _12;
  this.cG = _13;
  this.cH = _14;
  this.cI = _15;
  this.cJ = _16;
  this.cK = _17;
  this.cL = _18;
  this.cM = _19;
  this.cO = _20;
}
$p = $c_T20.prototype = new $h_O();
$p.constructor = $c_T20;
/** @constructor */
function $h_T20() {
}
$h_T20.prototype = $p;
$p.r = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.j = (function() {
  return 20;
});
$p.g = (function(n) {
  return $f_s_Product20__productElement__I__O(this, n);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().u(this, 1328807075, true);
});
$p.f = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T20) && ((((((((((((((((((($m_sr_BoxesRunTime$().a(this.ez, x$0.ez) && $m_sr_BoxesRunTime$().a(this.cN, x$0.cN)) && $m_sr_BoxesRunTime$().a(this.cP, x$0.cP)) && $m_sr_BoxesRunTime$().a(this.cQ, x$0.cQ)) && $m_sr_BoxesRunTime$().a(this.cR, x$0.cR)) && $m_sr_BoxesRunTime$().a(this.cS, x$0.cS)) && $m_sr_BoxesRunTime$().a(this.cT, x$0.cT)) && $m_sr_BoxesRunTime$().a(this.cU, x$0.cU)) && $m_sr_BoxesRunTime$().a(this.cV, x$0.cV)) && $m_sr_BoxesRunTime$().a(this.cD, x$0.cD)) && $m_sr_BoxesRunTime$().a(this.cE, x$0.cE)) && $m_sr_BoxesRunTime$().a(this.cF, x$0.cF)) && $m_sr_BoxesRunTime$().a(this.cG, x$0.cG)) && $m_sr_BoxesRunTime$().a(this.cH, x$0.cH)) && $m_sr_BoxesRunTime$().a(this.cI, x$0.cI)) && $m_sr_BoxesRunTime$().a(this.cJ, x$0.cJ)) && $m_sr_BoxesRunTime$().a(this.cK, x$0.cK)) && $m_sr_BoxesRunTime$().a(this.cL, x$0.cL)) && $m_sr_BoxesRunTime$().a(this.cM, x$0.cM)) && $m_sr_BoxesRunTime$().a(this.cO, x$0.cO))));
});
$p.o = (function() {
  return "Tuple20";
});
$p.d = (function() {
  return (((((((((((((((((((((((((((((((((((((((("(" + this.ez) + ",") + this.cN) + ",") + this.cP) + ",") + this.cQ) + ",") + this.cR) + ",") + this.cS) + ",") + this.cT) + ",") + this.cU) + ",") + this.cV) + ",") + this.cD) + ",") + this.cE) + ",") + this.cF) + ",") + this.cG) + ",") + this.cH) + ",") + this.cI) + ",") + this.cJ) + ",") + this.cK) + ",") + this.cL) + ",") + this.cM) + ",") + this.cO) + ")");
});
function $isArrayOf_T20(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ae)));
}
var $d_T20 = new $TypeData().i($c_T20, "scala.Tuple20", ({
  ae: 1,
  b: 1,
  c: 1,
  bH: 1,
  a: 1
}));
/** @constructor */
function $c_T21(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21) {
  this.eA = null;
  this.d6 = null;
  this.d9 = null;
  this.da = null;
  this.db = null;
  this.dc = null;
  this.dd = null;
  this.de = null;
  this.df = null;
  this.cW = null;
  this.cX = null;
  this.cY = null;
  this.cZ = null;
  this.d0 = null;
  this.d1 = null;
  this.d2 = null;
  this.d3 = null;
  this.d4 = null;
  this.d5 = null;
  this.d7 = null;
  this.d8 = null;
  this.eA = _1;
  this.d6 = _2;
  this.d9 = _3;
  this.da = _4;
  this.db = _5;
  this.dc = _6;
  this.dd = _7;
  this.de = _8;
  this.df = _9;
  this.cW = _10;
  this.cX = _11;
  this.cY = _12;
  this.cZ = _13;
  this.d0 = _14;
  this.d1 = _15;
  this.d2 = _16;
  this.d3 = _17;
  this.d4 = _18;
  this.d5 = _19;
  this.d7 = _20;
  this.d8 = _21;
}
$p = $c_T21.prototype = new $h_O();
$p.constructor = $c_T21;
/** @constructor */
function $h_T21() {
}
$h_T21.prototype = $p;
$p.r = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.j = (function() {
  return 21;
});
$p.g = (function(n) {
  return $f_s_Product21__productElement__I__O(this, n);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().u(this, (-21288119), true);
});
$p.f = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T21) && (((((((((((((((((((($m_sr_BoxesRunTime$().a(this.eA, x$0.eA) && $m_sr_BoxesRunTime$().a(this.d6, x$0.d6)) && $m_sr_BoxesRunTime$().a(this.d9, x$0.d9)) && $m_sr_BoxesRunTime$().a(this.da, x$0.da)) && $m_sr_BoxesRunTime$().a(this.db, x$0.db)) && $m_sr_BoxesRunTime$().a(this.dc, x$0.dc)) && $m_sr_BoxesRunTime$().a(this.dd, x$0.dd)) && $m_sr_BoxesRunTime$().a(this.de, x$0.de)) && $m_sr_BoxesRunTime$().a(this.df, x$0.df)) && $m_sr_BoxesRunTime$().a(this.cW, x$0.cW)) && $m_sr_BoxesRunTime$().a(this.cX, x$0.cX)) && $m_sr_BoxesRunTime$().a(this.cY, x$0.cY)) && $m_sr_BoxesRunTime$().a(this.cZ, x$0.cZ)) && $m_sr_BoxesRunTime$().a(this.d0, x$0.d0)) && $m_sr_BoxesRunTime$().a(this.d1, x$0.d1)) && $m_sr_BoxesRunTime$().a(this.d2, x$0.d2)) && $m_sr_BoxesRunTime$().a(this.d3, x$0.d3)) && $m_sr_BoxesRunTime$().a(this.d4, x$0.d4)) && $m_sr_BoxesRunTime$().a(this.d5, x$0.d5)) && $m_sr_BoxesRunTime$().a(this.d7, x$0.d7)) && $m_sr_BoxesRunTime$().a(this.d8, x$0.d8))));
});
$p.o = (function() {
  return "Tuple21";
});
$p.d = (function() {
  return (((((((((((((((((((((((((((((((((((((((((("(" + this.eA) + ",") + this.d6) + ",") + this.d9) + ",") + this.da) + ",") + this.db) + ",") + this.dc) + ",") + this.dd) + ",") + this.de) + ",") + this.df) + ",") + this.cW) + ",") + this.cX) + ",") + this.cY) + ",") + this.cZ) + ",") + this.d0) + ",") + this.d1) + ",") + this.d2) + ",") + this.d3) + ",") + this.d4) + ",") + this.d5) + ",") + this.d7) + ",") + this.d8) + ")");
});
function $isArrayOf_T21(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.af)));
}
var $d_T21 = new $TypeData().i($c_T21, "scala.Tuple21", ({
  af: 1,
  b: 1,
  c: 1,
  bI: 1,
  a: 1
}));
/** @constructor */
function $c_T22(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22) {
  this.eB = null;
  this.dr = null;
  this.dv = null;
  this.dw = null;
  this.dx = null;
  this.dy = null;
  this.dz = null;
  this.dA = null;
  this.dB = null;
  this.dg = null;
  this.dh = null;
  this.di = null;
  this.dj = null;
  this.dk = null;
  this.dl = null;
  this.dm = null;
  this.dn = null;
  this.dp = null;
  this.dq = null;
  this.ds = null;
  this.dt = null;
  this.du = null;
  this.eB = _1;
  this.dr = _2;
  this.dv = _3;
  this.dw = _4;
  this.dx = _5;
  this.dy = _6;
  this.dz = _7;
  this.dA = _8;
  this.dB = _9;
  this.dg = _10;
  this.dh = _11;
  this.di = _12;
  this.dj = _13;
  this.dk = _14;
  this.dl = _15;
  this.dm = _16;
  this.dn = _17;
  this.dp = _18;
  this.dq = _19;
  this.ds = _20;
  this.dt = _21;
  this.du = _22;
}
$p = $c_T22.prototype = new $h_O();
$p.constructor = $c_T22;
/** @constructor */
function $h_T22() {
}
$h_T22.prototype = $p;
$p.r = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.j = (function() {
  return 22;
});
$p.g = (function(n) {
  return $f_s_Product22__productElement__I__O(this, n);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().u(this, (-139445068), true);
});
$p.f = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T22) && ((((((((((((((((((((($m_sr_BoxesRunTime$().a(this.eB, x$0.eB) && $m_sr_BoxesRunTime$().a(this.dr, x$0.dr)) && $m_sr_BoxesRunTime$().a(this.dv, x$0.dv)) && $m_sr_BoxesRunTime$().a(this.dw, x$0.dw)) && $m_sr_BoxesRunTime$().a(this.dx, x$0.dx)) && $m_sr_BoxesRunTime$().a(this.dy, x$0.dy)) && $m_sr_BoxesRunTime$().a(this.dz, x$0.dz)) && $m_sr_BoxesRunTime$().a(this.dA, x$0.dA)) && $m_sr_BoxesRunTime$().a(this.dB, x$0.dB)) && $m_sr_BoxesRunTime$().a(this.dg, x$0.dg)) && $m_sr_BoxesRunTime$().a(this.dh, x$0.dh)) && $m_sr_BoxesRunTime$().a(this.di, x$0.di)) && $m_sr_BoxesRunTime$().a(this.dj, x$0.dj)) && $m_sr_BoxesRunTime$().a(this.dk, x$0.dk)) && $m_sr_BoxesRunTime$().a(this.dl, x$0.dl)) && $m_sr_BoxesRunTime$().a(this.dm, x$0.dm)) && $m_sr_BoxesRunTime$().a(this.dn, x$0.dn)) && $m_sr_BoxesRunTime$().a(this.dp, x$0.dp)) && $m_sr_BoxesRunTime$().a(this.dq, x$0.dq)) && $m_sr_BoxesRunTime$().a(this.ds, x$0.ds)) && $m_sr_BoxesRunTime$().a(this.dt, x$0.dt)) && $m_sr_BoxesRunTime$().a(this.du, x$0.du))));
});
$p.o = (function() {
  return "Tuple22";
});
$p.d = (function() {
  return (((((((((((((((((((((((((((((((((((((((((((("(" + this.eB) + ",") + this.dr) + ",") + this.dv) + ",") + this.dw) + ",") + this.dx) + ",") + this.dy) + ",") + this.dz) + ",") + this.dA) + ",") + this.dB) + ",") + this.dg) + ",") + this.dh) + ",") + this.di) + ",") + this.dj) + ",") + this.dk) + ",") + this.dl) + ",") + this.dm) + ",") + this.dn) + ",") + this.dp) + ",") + this.dq) + ",") + this.ds) + ",") + this.dt) + ",") + this.du) + ")");
});
function $isArrayOf_T22(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ag)));
}
var $d_T22 = new $TypeData().i($c_T22, "scala.Tuple22", ({
  ag: 1,
  b: 1,
  c: 1,
  bJ: 1,
  a: 1
}));
/** @constructor */
function $c_T3(_1, _2, _3) {
  this.ai = null;
  this.a9 = null;
  this.aa = null;
  this.ai = _1;
  this.a9 = _2;
  this.aa = _3;
}
$p = $c_T3.prototype = new $h_O();
$p.constructor = $c_T3;
/** @constructor */
function $h_T3() {
}
$h_T3.prototype = $p;
$p.r = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.j = (function() {
  return 3;
});
$p.g = (function(n) {
  return $f_s_Product3__productElement__I__O(this, n);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().u(this, (-192629203), true);
});
$p.f = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T3) && (($m_sr_BoxesRunTime$().a(this.ai, x$0.ai) && $m_sr_BoxesRunTime$().a(this.a9, x$0.a9)) && $m_sr_BoxesRunTime$().a(this.aa, x$0.aa))));
});
$p.o = (function() {
  return "Tuple3";
});
$p.d = (function() {
  return (((((("(" + this.ai) + ",") + this.a9) + ",") + this.aa) + ")");
});
function $isArrayOf_T3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ah)));
}
var $d_T3 = new $TypeData().i($c_T3, "scala.Tuple3", ({
  ah: 1,
  b: 1,
  c: 1,
  bK: 1,
  a: 1
}));
/** @constructor */
function $c_T4(_1, _2, _3, _4) {
  this.dC = null;
  this.aj = null;
  this.ak = null;
  this.al = null;
  this.dC = _1;
  this.aj = _2;
  this.ak = _3;
  this.al = _4;
}
$p = $c_T4.prototype = new $h_O();
$p.constructor = $c_T4;
/** @constructor */
function $h_T4() {
}
$h_T4.prototype = $p;
$p.r = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.j = (function() {
  return 4;
});
$p.g = (function(n) {
  return $f_s_Product4__productElement__I__O(this, n);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().u(this, (-1542739752), true);
});
$p.f = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T4) && ((($m_sr_BoxesRunTime$().a(this.dC, x$0.dC) && $m_sr_BoxesRunTime$().a(this.aj, x$0.aj)) && $m_sr_BoxesRunTime$().a(this.ak, x$0.ak)) && $m_sr_BoxesRunTime$().a(this.al, x$0.al))));
});
$p.o = (function() {
  return "Tuple4";
});
$p.d = (function() {
  return (((((((("(" + this.dC) + ",") + this.aj) + ",") + this.ak) + ",") + this.al) + ")");
});
function $isArrayOf_T4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ai)));
}
var $d_T4 = new $TypeData().i($c_T4, "scala.Tuple4", ({
  ai: 1,
  b: 1,
  c: 1,
  bL: 1,
  a: 1
}));
/** @constructor */
function $c_T5(_1, _2, _3, _4, _5) {
  this.eC = null;
  this.dD = null;
  this.dE = null;
  this.dF = null;
  this.dG = null;
  this.eC = _1;
  this.dD = _2;
  this.dE = _3;
  this.dF = _4;
  this.dG = _5;
}
$p = $c_T5.prototype = new $h_O();
$p.constructor = $c_T5;
/** @constructor */
function $h_T5() {
}
$h_T5.prototype = $p;
$p.r = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.j = (function() {
  return 5;
});
$p.g = (function(n) {
  return $f_s_Product5__productElement__I__O(this, n);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().u(this, 417360321, true);
});
$p.f = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T5) && (((($m_sr_BoxesRunTime$().a(this.eC, x$0.eC) && $m_sr_BoxesRunTime$().a(this.dD, x$0.dD)) && $m_sr_BoxesRunTime$().a(this.dE, x$0.dE)) && $m_sr_BoxesRunTime$().a(this.dF, x$0.dF)) && $m_sr_BoxesRunTime$().a(this.dG, x$0.dG))));
});
$p.o = (function() {
  return "Tuple5";
});
$p.d = (function() {
  return (((((((((("(" + this.eC) + ",") + this.dD) + ",") + this.dE) + ",") + this.dF) + ",") + this.dG) + ")");
});
function $isArrayOf_T5(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aj)));
}
var $d_T5 = new $TypeData().i($c_T5, "scala.Tuple5", ({
  aj: 1,
  b: 1,
  c: 1,
  bM: 1,
  a: 1
}));
/** @constructor */
function $c_T6(_1, _2, _3, _4, _5, _6) {
  this.eD = null;
  this.dH = null;
  this.dI = null;
  this.dJ = null;
  this.dK = null;
  this.dL = null;
  this.eD = _1;
  this.dH = _2;
  this.dI = _3;
  this.dJ = _4;
  this.dK = _5;
  this.dL = _6;
}
$p = $c_T6.prototype = new $h_O();
$p.constructor = $c_T6;
/** @constructor */
function $h_T6() {
}
$h_T6.prototype = $p;
$p.r = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.j = (function() {
  return 6;
});
$p.g = (function(n) {
  return $f_s_Product6__productElement__I__O(this, n);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().u(this, (-1037607828), true);
});
$p.f = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T6) && ((((($m_sr_BoxesRunTime$().a(this.eD, x$0.eD) && $m_sr_BoxesRunTime$().a(this.dH, x$0.dH)) && $m_sr_BoxesRunTime$().a(this.dI, x$0.dI)) && $m_sr_BoxesRunTime$().a(this.dJ, x$0.dJ)) && $m_sr_BoxesRunTime$().a(this.dK, x$0.dK)) && $m_sr_BoxesRunTime$().a(this.dL, x$0.dL))));
});
$p.o = (function() {
  return "Tuple6";
});
$p.d = (function() {
  return (((((((((((("(" + this.eD) + ",") + this.dH) + ",") + this.dI) + ",") + this.dJ) + ",") + this.dK) + ",") + this.dL) + ")");
});
function $isArrayOf_T6(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ak)));
}
var $d_T6 = new $TypeData().i($c_T6, "scala.Tuple6", ({
  ak: 1,
  b: 1,
  c: 1,
  bN: 1,
  a: 1
}));
/** @constructor */
function $c_T7(_1, _2, _3, _4, _5, _6, _7) {
  this.eE = null;
  this.dM = null;
  this.dN = null;
  this.dO = null;
  this.dP = null;
  this.dQ = null;
  this.dR = null;
  this.eE = _1;
  this.dM = _2;
  this.dN = _3;
  this.dO = _4;
  this.dP = _5;
  this.dQ = _6;
  this.dR = _7;
}
$p = $c_T7.prototype = new $h_O();
$p.constructor = $c_T7;
/** @constructor */
function $h_T7() {
}
$h_T7.prototype = $p;
$p.r = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.j = (function() {
  return 7;
});
$p.g = (function(n) {
  return $f_s_Product7__productElement__I__O(this, n);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().u(this, (-1050932777), true);
});
$p.f = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T7) && (((((($m_sr_BoxesRunTime$().a(this.eE, x$0.eE) && $m_sr_BoxesRunTime$().a(this.dM, x$0.dM)) && $m_sr_BoxesRunTime$().a(this.dN, x$0.dN)) && $m_sr_BoxesRunTime$().a(this.dO, x$0.dO)) && $m_sr_BoxesRunTime$().a(this.dP, x$0.dP)) && $m_sr_BoxesRunTime$().a(this.dQ, x$0.dQ)) && $m_sr_BoxesRunTime$().a(this.dR, x$0.dR))));
});
$p.o = (function() {
  return "Tuple7";
});
$p.d = (function() {
  return (((((((((((((("(" + this.eE) + ",") + this.dM) + ",") + this.dN) + ",") + this.dO) + ",") + this.dP) + ",") + this.dQ) + ",") + this.dR) + ")");
});
function $isArrayOf_T7(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.al)));
}
var $d_T7 = new $TypeData().i($c_T7, "scala.Tuple7", ({
  al: 1,
  b: 1,
  c: 1,
  bO: 1,
  a: 1
}));
/** @constructor */
function $c_T8(_1, _2, _3, _4, _5, _6, _7, _8) {
  this.eF = null;
  this.dS = null;
  this.dT = null;
  this.dU = null;
  this.dV = null;
  this.dW = null;
  this.dX = null;
  this.dY = null;
  this.eF = _1;
  this.dS = _2;
  this.dT = _3;
  this.dU = _4;
  this.dV = _5;
  this.dW = _6;
  this.dX = _7;
  this.dY = _8;
}
$p = $c_T8.prototype = new $h_O();
$p.constructor = $c_T8;
/** @constructor */
function $h_T8() {
}
$h_T8.prototype = $p;
$p.r = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.j = (function() {
  return 8;
});
$p.g = (function(n) {
  return $f_s_Product8__productElement__I__O(this, n);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().u(this, 1998822530, true);
});
$p.f = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T8) && ((((((($m_sr_BoxesRunTime$().a(this.eF, x$0.eF) && $m_sr_BoxesRunTime$().a(this.dS, x$0.dS)) && $m_sr_BoxesRunTime$().a(this.dT, x$0.dT)) && $m_sr_BoxesRunTime$().a(this.dU, x$0.dU)) && $m_sr_BoxesRunTime$().a(this.dV, x$0.dV)) && $m_sr_BoxesRunTime$().a(this.dW, x$0.dW)) && $m_sr_BoxesRunTime$().a(this.dX, x$0.dX)) && $m_sr_BoxesRunTime$().a(this.dY, x$0.dY))));
});
$p.o = (function() {
  return "Tuple8";
});
$p.d = (function() {
  return (((((((((((((((("(" + this.eF) + ",") + this.dS) + ",") + this.dT) + ",") + this.dU) + ",") + this.dV) + ",") + this.dW) + ",") + this.dX) + ",") + this.dY) + ")");
});
function $isArrayOf_T8(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.am)));
}
var $d_T8 = new $TypeData().i($c_T8, "scala.Tuple8", ({
  am: 1,
  b: 1,
  c: 1,
  bP: 1,
  a: 1
}));
/** @constructor */
function $c_T9(_1, _2, _3, _4, _5, _6, _7, _8, _9) {
  this.eG = null;
  this.dZ = null;
  this.e0 = null;
  this.e1 = null;
  this.e2 = null;
  this.e3 = null;
  this.e4 = null;
  this.e5 = null;
  this.e6 = null;
  this.eG = _1;
  this.dZ = _2;
  this.e0 = _3;
  this.e1 = _4;
  this.e2 = _5;
  this.e3 = _6;
  this.e4 = _7;
  this.e5 = _8;
  this.e6 = _9;
}
$p = $c_T9.prototype = new $h_O();
$p.constructor = $c_T9;
/** @constructor */
function $h_T9() {
}
$h_T9.prototype = $p;
$p.r = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.j = (function() {
  return 9;
});
$p.g = (function(n) {
  return $f_s_Product9__productElement__I__O(this, n);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().u(this, (-1807911176), true);
});
$p.f = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T9) && (((((((($m_sr_BoxesRunTime$().a(this.eG, x$0.eG) && $m_sr_BoxesRunTime$().a(this.dZ, x$0.dZ)) && $m_sr_BoxesRunTime$().a(this.e0, x$0.e0)) && $m_sr_BoxesRunTime$().a(this.e1, x$0.e1)) && $m_sr_BoxesRunTime$().a(this.e2, x$0.e2)) && $m_sr_BoxesRunTime$().a(this.e3, x$0.e3)) && $m_sr_BoxesRunTime$().a(this.e4, x$0.e4)) && $m_sr_BoxesRunTime$().a(this.e5, x$0.e5)) && $m_sr_BoxesRunTime$().a(this.e6, x$0.e6))));
});
$p.o = (function() {
  return "Tuple9";
});
$p.d = (function() {
  return (((((((((((((((((("(" + this.eG) + ",") + this.dZ) + ",") + this.e0) + ",") + this.e1) + ",") + this.e2) + ",") + this.e3) + ",") + this.e4) + ",") + this.e5) + ",") + this.e6) + ")");
});
function $isArrayOf_T9(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.an)));
}
var $d_T9 = new $TypeData().i($c_T9, "scala.Tuple9", ({
  an: 1,
  b: 1,
  c: 1,
  bQ: 1,
  a: 1
}));
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.f4() + "("), ", ", ")");
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
$p.t = (function() {
  return false;
});
$p.lK = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
});
$p.H = (function() {
  return 0;
});
$p.q = (function() {
  this.lK();
});
$p.gB = (function(from, until) {
  return this;
});
var $d_sc_Iterator$$anon$19 = new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  c0: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1
}));
function $p_sc_Iterator$ConcatIterator__merge$1__V($thiz) {
  while (true) {
    if (($thiz.I instanceof $c_sc_Iterator$ConcatIterator)) {
      var c = $thiz.I;
      $thiz.I = c.I;
      $thiz.an = c.an;
      if ((c.S !== null)) {
        if (($thiz.R === null)) {
          $thiz.R = c.R;
        }
        var x$proxy10 = c.R;
        if ((x$proxy10 === null)) {
          $m_sr_Scala3RunTime$().gw();
        }
        x$proxy10.fa = $thiz.S;
        $thiz.S = c.S;
      }
    } else {
      return (void 0);
    }
  }
}
function $p_sc_Iterator$ConcatIterator__advance$1__Z($thiz) {
  while (true) {
    if (($thiz.S === null)) {
      $thiz.I = null;
      $thiz.R = null;
      return false;
    } else {
      $thiz.I = $thiz.S.kS();
      if (($thiz.R === $thiz.S)) {
        var x$proxy12 = $thiz.R;
        if ((x$proxy12 === null)) {
          $m_sr_Scala3RunTime$().gw();
        }
        $thiz.R = x$proxy12.fa;
      }
      $thiz.S = $thiz.S.fa;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.an) {
        return true;
      } else {
        if ((!(($thiz.I !== null) && $thiz.I.t()))) {
          continue;
        }
        $thiz.an = true;
        return true;
      }
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIterator(from) {
  this.I = null;
  this.S = null;
  this.R = null;
  this.an = false;
  this.I = from;
  this.S = null;
  this.R = null;
  this.an = false;
}
$p = $c_sc_Iterator$ConcatIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$ConcatIterator;
/** @constructor */
function $h_sc_Iterator$ConcatIterator() {
}
$h_sc_Iterator$ConcatIterator.prototype = $p;
$p.t = (function() {
  if (this.an) {
    return true;
  } else if ((this.I !== null)) {
    if (this.I.t()) {
      this.an = true;
      return true;
    } else {
      return $p_sc_Iterator$ConcatIterator__advance$1__Z(this);
    }
  } else {
    return false;
  }
});
$p.q = (function() {
  if (this.t()) {
    this.an = false;
    var x$proxy13 = this.I;
    if ((x$proxy13 === null)) {
      $m_sr_Scala3RunTime$().gw();
    }
    return x$proxy13.q();
  } else {
    return $m_sc_Iterator$().ac.q();
  }
});
$p.ko = (function(that) {
  var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
  if ((this.S === null)) {
    this.S = c;
    this.R = c;
  } else {
    var x$proxy14 = this.R;
    if ((x$proxy14 === null)) {
      $m_sr_Scala3RunTime$().gw();
    }
    x$proxy14.fa = c;
    this.R = c;
  }
  if ((this.I === null)) {
    this.I = $m_sc_Iterator$().ac;
  }
  return this;
});
function $isArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.as)));
}
var $d_sc_Iterator$ConcatIterator = new $TypeData().i($c_sc_Iterator$ConcatIterator, "scala.collection.Iterator$ConcatIterator", ({
  as: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1
}));
function $p_sc_Iterator$SliceIterator__skip__V($thiz) {
  while (($thiz.ad > 0)) {
    if ($thiz.ao.t()) {
      $thiz.ao.q();
      $thiz.ad = (($thiz.ad - 1) | 0);
    } else {
      $thiz.ad = 0;
    }
  }
}
function $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I($thiz, lo$1) {
  if (($thiz.M < 0)) {
    return (-1);
  } else {
    var that = (($thiz.M - lo$1) | 0);
    return ((that < 0) ? 0 : that);
  }
}
/** @constructor */
function $c_sc_Iterator$SliceIterator(underlying, start, limit) {
  this.ao = null;
  this.M = 0;
  this.ad = 0;
  this.ao = underlying;
  this.M = limit;
  this.ad = start;
}
$p = $c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$SliceIterator;
/** @constructor */
function $h_sc_Iterator$SliceIterator() {
}
$h_sc_Iterator$SliceIterator.prototype = $p;
$p.H = (function() {
  var size = this.ao.H();
  if ((size < 0)) {
    return (-1);
  } else {
    var that = ((size - this.ad) | 0);
    var dropSize = ((that < 0) ? 0 : that);
    if ((this.M < 0)) {
      return dropSize;
    } else {
      var x = this.M;
      return ((x < dropSize) ? x : dropSize);
    }
  }
});
$p.t = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  return ((this.M !== 0) && this.ao.t());
});
$p.q = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.M > 0)) {
    this.M = ((this.M - 1) | 0);
    return this.ao.q();
  } else {
    return ((this.M < 0) ? this.ao.q() : $m_sc_Iterator$().ac.q());
  }
});
$p.gB = (function(from, until) {
  var lo = ((from > 0) ? from : 0);
  if ((until < 0)) {
    var rest = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
  } else if ((until <= lo)) {
    var rest = 0;
  } else if ((this.M < 0)) {
    var rest = ((until - lo) | 0);
  } else {
    var x = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
    var that = ((until - lo) | 0);
    var rest = ((x < that) ? x : that);
  }
  var sum = ((this.ad + lo) | 0);
  if ((rest === 0)) {
    return $m_sc_Iterator$().ac;
  } else if ((sum < 0)) {
    this.ad = 2147483647;
    this.M = 0;
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => new $c_sc_Iterator$SliceIterator(this.ao, ((sum - 2147483647) | 0), rest))));
  } else {
    this.ad = sum;
    this.M = rest;
    return this;
  }
});
var $d_sc_Iterator$SliceIterator = new $TypeData().i($c_sc_Iterator$SliceIterator, "scala.collection.Iterator$SliceIterator", ({
  c2: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1
}));
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw new $c_jl_IndexOutOfBoundsException(("" + n));
  }
  var skipped = $thiz.kz(n);
  if (skipped.A()) {
    throw new $c_jl_IndexOutOfBoundsException(("" + n));
  }
  return skipped.hF();
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
      if ((((!a$tailLocal1.A()) && (!b$tailLocal1.A())) && $m_sr_BoxesRunTime$().a(a$tailLocal1.hF(), b$tailLocal1.hF()))) {
        var a$tailLocal1$tmp1 = a$tailLocal1.hJ();
        var b$tailLocal1$tmp1 = b$tailLocal1.hJ();
        a$tailLocal1 = a$tailLocal1$tmp1;
        b$tailLocal1 = b$tailLocal1$tmp1;
        continue;
      }
      return (a$tailLocal1.A() && b$tailLocal1.A());
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
  ch: 1,
  a: 1,
  ar: 1,
  c4: 1,
  c8: 1
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
  this.id = null;
  this.fc = 0;
  this.ic = 0;
  this.id = x$1;
  this.fc = 0;
  this.ic = x$1.j();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.t = (function() {
  return (this.fc < this.ic);
});
$p.q = (function() {
  var result = this.id.g(this.fc);
  this.fc = ((1 + this.fc) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().i($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  cT: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.Z)));
}
var $d_jl_Double = new $TypeData().i(0, "java.lang.Double", ({
  Z: 1,
  m: 1,
  a: 1,
  h: 1,
  g: 1,
  y: 1
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
  aY: 1,
  m: 1,
  a: 1,
  h: 1,
  g: 1,
  y: 1
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
  b0: 1,
  m: 1,
  a: 1,
  h: 1,
  g: 1,
  y: 1
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
  return $m_RTLong$().jT($thiz, $thizhi);
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a1)));
}
var $d_jl_Long = new $TypeData().i(0, "java.lang.Long", ({
  a1: 1,
  m: 1,
  a: 1,
  h: 1,
  g: 1,
  y: 1
}), ((x) => (x instanceof $Long)));
class $c_jl_NumberFormatException extends $c_jl_IllegalArgumentException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_NumberFormatException = new $TypeData().i($c_jl_NumberFormatException, "java.lang.NumberFormatException", ({
  b5: 1,
  a0: 1,
  j: 1,
  i: 1,
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
  var str = $m_jl_Character$().mb(ch);
  return ($thiz.indexOf(str) | 0);
}
function $f_T__toString__T($thiz) {
  return $thiz;
}
var $d_T = new $TypeData().i(0, "java.lang.String", ({
  b8: 1,
  a: 1,
  h: 1,
  F: 1,
  g: 1,
  y: 1
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
$p.fF = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.hv = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.f4 = (function() {
  return this.el();
});
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator(xs) {
  this.g3 = null;
  this.ab = 0;
  this.f9 = 0;
  this.g3 = xs;
  this.ab = 0;
  this.f9 = $m_jl_reflect_Array$().hD(this.g3);
}
$p = $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $p;
$p.H = (function() {
  return ((this.f9 - this.ab) | 0);
});
$p.t = (function() {
  return (this.ab < this.f9);
});
$p.q = (function() {
  if ((this.ab >= $m_jl_reflect_Array$().hD(this.g3))) {
    $m_sc_Iterator$().ac.q();
  }
  var r = $m_sr_ScalaRunTime$().f3(this.g3, this.ab);
  this.ab = ((1 + this.ab) | 0);
  return r;
});
$p.gs = (function(n) {
  if ((n > 0)) {
    var newPos = ((this.ab + n) | 0);
    if ((newPos < 0)) {
      var $x_1 = this.f9;
    } else {
      var a = this.f9;
      var $x_1 = ((a < newPos) ? a : newPos);
    }
    this.ab = $x_1;
  }
  return this;
});
var $d_sc_ArrayOps$ArrayIterator = new $TypeData().i($c_sc_ArrayOps$ArrayIterator, "scala.collection.ArrayOps$ArrayIterator", ({
  bU: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1,
  a: 1
}));
function $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I($thiz, value) {
  return ((value < 0) ? 0 : ((value > $thiz.V) ? $thiz.V : value));
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator(self) {
  this.i0 = null;
  this.am = 0;
  this.V = 0;
  this.i0 = self;
  this.am = 0;
  this.V = self.s();
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $p;
$p.H = (function() {
  return this.V;
});
$p.t = (function() {
  return (this.V > 0);
});
$p.q = (function() {
  if ((this.V > 0)) {
    var r = this.i0.z(this.am);
    this.am = ((1 + this.am) | 0);
    this.V = ((this.V - 1) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().ac.q();
  }
});
$p.gs = (function(n) {
  if ((n > 0)) {
    this.am = ((this.am + n) | 0);
    var b = ((this.V - n) | 0);
    this.V = ((b < 0) ? 0 : b);
  }
  return this;
});
$p.gB = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.V = ((b < 0) ? 0 : b);
  this.am = ((this.am + formatFrom) | 0);
  return this;
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  bY: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1,
  a: 1
}));
function $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($thiz) {
  if ((!$thiz.i4)) {
    $thiz.i3 = new $c_sci_ArraySeq$ofRef(new ($d_sr_Nothing$.r().C)(0));
    $thiz.i4 = true;
  }
  return $thiz.i3;
}
/** @constructor */
function $c_sci_ArraySeq$() {
  this.i3 = null;
  this.i4 = false;
}
$p = $c_sci_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_sci_ArraySeq$;
/** @constructor */
function $h_sci_ArraySeq$() {
}
$h_sci_ArraySeq$.prototype = $p;
var $d_sci_ArraySeq$ = new $TypeData().i($c_sci_ArraySeq$, "scala.collection.immutable.ArraySeq$", ({
  cd: 1,
  a: 1,
  aq: 1,
  ao: 1,
  ap: 1,
  at: 1
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
  this.i6 = null;
  $n_scm_ArraySeq$ = this;
  this.i6 = new $c_scm_ArraySeq$ofRef(new $ac_O(0));
}
$p = $c_scm_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_scm_ArraySeq$;
/** @constructor */
function $h_scm_ArraySeq$() {
}
$h_scm_ArraySeq$.prototype = $p;
var $d_scm_ArraySeq$ = new $TypeData().i($c_scm_ArraySeq$, "scala.collection.mutable.ArraySeq$", ({
  ck: 1,
  a: 1,
  aq: 1,
  ao: 1,
  ap: 1,
  at: 1
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
$p.r = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.i = (function() {
  return 924202651;
});
$p.j = (function() {
  return 0;
});
$p.o = (function() {
  return "EmptyTuple";
});
$p.g = (function(n) {
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
$p.d = (function() {
  return "()";
});
var $d_T$package$EmptyTuple$ = new $TypeData().i($c_T$package$EmptyTuple$, "scala.Tuple$package$EmptyTuple$", ({
  bR: 1,
  b: 1,
  c: 1,
  a: 1,
  cq: 1,
  cr: 1,
  cs: 1
}));
var $n_T$package$EmptyTuple$;
function $m_T$package$EmptyTuple$() {
  if ((!$n_T$package$EmptyTuple$)) {
    $n_T$package$EmptyTuple$ = new $c_T$package$EmptyTuple$();
  }
  return $n_T$package$EmptyTuple$;
}
function $f_sc_View__toString__T($thiz) {
  return ($thiz.el() + "(<not computed>)");
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
    this.e8 = null;
    this.e8 = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  gu() {
    return $dp_toString__T(this.e8);
  }
  o() {
    return "JavaScriptException";
  }
  j() {
    return 1;
  }
  g(x$1) {
    return ((x$1 === 0) ? this.e8 : $m_sr_Statics$().l0(x$1));
  }
  r() {
    return new $c_sr_ScalaRunTime$$anon$1(this);
  }
  i() {
    return $m_s_util_hashing_MurmurHash3$().u(this, 1744042595, true);
  }
  f(x$1) {
    return ((this === x$1) || ((x$1 instanceof $c_sjs_js_JavaScriptException) && $m_sr_BoxesRunTime$().a(this.e8, x$1.e8)));
  }
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aE)));
}
var $d_sjs_js_JavaScriptException = new $TypeData().i($c_sjs_js_JavaScriptException, "scala.scalajs.js.JavaScriptException", ({
  aE: 1,
  j: 1,
  i: 1,
  f: 1,
  a: 1,
  c: 1,
  b: 1
}));
function $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V($thiz, line) {
  if (((typeof console) !== "undefined")) {
    if (($thiz.hQ && (!(!(!(!console.error)))))) {
      console.error(line);
    } else {
      console.log(line);
    }
  }
}
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream(isErr) {
  this.hQ = false;
  this.f7 = null;
  this.hQ = isErr;
  $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__(this, new $c_jl_JSConsoleBasedPrintStream$DummyOutputStream(), false, null);
  this.f7 = "";
}
$p = $c_jl_JSConsoleBasedPrintStream.prototype = new $h_Ljava_io_PrintStream();
$p.constructor = $c_jl_JSConsoleBasedPrintStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream() {
}
$h_jl_JSConsoleBasedPrintStream.prototype = $p;
$p.l3 = (function(s) {
  var rest = s;
  while ((rest !== "")) {
    var this$1 = rest;
    var nlPos = (this$1.indexOf("\n") | 0);
    if ((nlPos < 0)) {
      this.f7 = (("" + this.f7) + rest);
      rest = "";
    } else {
      var $x_1 = this.f7;
      var this$2 = rest;
      $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V(this, (("" + $x_1) + this$2.substring(0, nlPos)));
      this.f7 = "";
      var this$3 = rest;
      var beginIndex = ((1 + nlPos) | 0);
      rest = this$3.substring(beginIndex);
    }
  }
});
var $d_jl_JSConsoleBasedPrintStream = new $TypeData().i($c_jl_JSConsoleBasedPrintStream, "java.lang.JSConsoleBasedPrintStream", ({
  b2: 1,
  aQ: 1,
  aP: 1,
  V: 1,
  T: 1,
  X: 1,
  U: 1,
  W: 1
}));
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  var s$tailLocal1 = s;
  var n$tailLocal1 = n;
  while (true) {
    if (((n$tailLocal1 <= 0) || s$tailLocal1.A())) {
      return s$tailLocal1;
    } else {
      var n$tailLocal1$tmp1 = ((n$tailLocal1 - 1) | 0);
      var s$tailLocal1$tmp1 = s$tailLocal1.hJ();
      n$tailLocal1 = n$tailLocal1$tmp1;
      s$tailLocal1 = s$tailLocal1$tmp1;
    }
  }
}
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.gF = null;
}
$p = $c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$p.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $p;
$p.d = (function() {
  return this.gF;
});
$p.f = (function(that) {
  return (this === that);
});
$p.i = (function() {
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
$p.d = (function() {
  return $f_sc_View__toString__T(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ObjectManifest$() {
  this.gF = null;
  this.gF = "Object";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ObjectManifest$, "scala.reflect.ManifestFactory$ObjectManifest$", ({
  cz: 1,
  cA: 1,
  cy: 1,
  a: 1,
  cB: 1,
  cv: 1,
  b: 1,
  cw: 1,
  cx: 1
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
      if (o.hA($thiz)) {
        return $thiz.gA(o);
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
$p.A = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.gA = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.hA = (function(that) {
  return true;
});
$p.f = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().jS(this);
});
$p.d = (function() {
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
  return (!(!((obj && obj.$classData) && obj.$classData.n.o)));
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.o)));
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.G)));
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.G)));
}
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.fb = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.fb = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $p;
$p.z = (function(idx) {
  return this.fb.z(idx);
});
$p.s = (function() {
  return this.fb.s();
});
$p.A = (function() {
  return this.fb.A();
});
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.fb = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$p.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $p;
$p.ej = (function(len) {
  var x = this.s();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.H = (function() {
  return this.s();
});
$p.C = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this);
});
$p.el = (function() {
  return "IndexedSeqView";
});
var $d_sc_IndexedSeqView$Id = new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  bX: 1,
  c6: 1,
  bS: 1,
  bT: 1,
  v: 1,
  d: 1,
  e: 1,
  r: 1,
  q: 1,
  p: 1,
  a: 1,
  ca: 1,
  t: 1,
  c5: 1,
  w: 1,
  bW: 1
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
  return ($is_sci_IndexedSeq(that) ? ($thiz.s() === that.s()) : true);
}
function $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z($thiz, o) {
  if ($is_sci_IndexedSeq(o)) {
    if (($thiz === o)) {
      return true;
    } else {
      var length = $thiz.s();
      var equal = (length === o.s());
      if (equal) {
        var index = 0;
        var a = $thiz.hz();
        var b = o.hz();
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
          equal = $m_sr_BoxesRunTime$().a($thiz.z(index), o.z(index));
          index = ((1 + index) | 0);
        }
        if (((index < length) && equal)) {
          var thisIt = $thiz.C().gs(index);
          var thatIt = o.C().gs(index);
          while ((equal && thisIt.t())) {
            equal = $m_sr_BoxesRunTime$().a(thisIt.q(), thatIt.q());
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
  this.g4 = null;
  this.g4 = array;
}
$p = $c_sjsr_WrappedVarArgs.prototype = new $h_O();
$p.constructor = $c_sjsr_WrappedVarArgs;
/** @constructor */
function $h_sjsr_WrappedVarArgs() {
}
$h_sjsr_WrappedVarArgs.prototype = $p;
$p.hA = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.gA = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.hz = (function() {
  return $m_sci_IndexedSeqDefaults$().i5;
});
$p.C = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.ej = (function(len) {
  var x = this.s();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.H = (function() {
  return this.s();
});
$p.f = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().jS(this);
});
$p.d = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.A = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.fF = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.hv = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.s = (function() {
  return (this.g4.length | 0);
});
$p.z = (function(idx) {
  return this.g4[idx];
});
$p.f4 = (function() {
  return "WrappedVarArgs";
});
$p.p = (function(v1) {
  return this.z((v1 | 0));
});
function $isArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aF)));
}
var $d_sjsr_WrappedVarArgs = new $TypeData().i($c_sjsr_WrappedVarArgs, "scala.scalajs.runtime.WrappedVarArgs", ({
  aF: 1,
  D: 1,
  d: 1,
  e: 1,
  r: 1,
  q: 1,
  p: 1,
  H: 1,
  k: 1,
  u: 1,
  t: 1,
  b: 1,
  l: 1,
  J: 1,
  I: 1,
  w: 1,
  o: 1,
  aw: 1,
  K: 1,
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
$p.ej = (function(len) {
  var x = this.ae.b.length;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.H = (function() {
  return this.ae.b.length;
});
$p.el = (function() {
  return "IndexedSeq";
});
$p.hA = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.gA = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.f4 = (function() {
  return "ArraySeq";
});
$p.hz = (function() {
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
$p.ej = (function(len) {
  var x = this.W.b.length;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.H = (function() {
  return this.W.b.length;
});
$p.el = (function() {
  return "IndexedSeq";
});
$p.f4 = (function() {
  return "ArraySeq";
});
$p.f = (function(other) {
  if ((other instanceof $c_scm_ArraySeq)) {
    if ((this.W.b.length !== other.W.b.length)) {
      return false;
    }
  }
  return $f_sc_Seq__equals__O__Z(this, other);
});
function $isArrayOf_scm_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ay)));
}
/** @constructor */
function $c_sci_ArraySeq$ofRef(unsafeArray) {
  this.ae = null;
  this.ae = unsafeArray;
}
$p = $c_sci_ArraySeq$ofRef.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofRef;
/** @constructor */
function $h_sci_ArraySeq$ofRef() {
}
$h_sci_ArraySeq$ofRef.prototype = $p;
$p.s = (function() {
  return this.ae.b.length;
});
$p.z = (function(i) {
  return this.ae.b[i];
});
$p.i = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.je(this.ae, this$1.eJ);
});
$p.f = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofRef) ? $m_s_Array$().jj(this.ae, that.ae) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.C = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.ae);
});
$p.p = (function(v1) {
  return this.z((v1 | 0));
});
function $isArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.av)));
}
var $d_sci_ArraySeq$ofRef = new $TypeData().i($c_sci_ArraySeq$ofRef, "scala.collection.immutable.ArraySeq$ofRef", ({
  av: 1,
  cc: 1,
  au: 1,
  A: 1,
  v: 1,
  d: 1,
  e: 1,
  r: 1,
  q: 1,
  p: 1,
  k: 1,
  u: 1,
  t: 1,
  b: 1,
  l: 1,
  H: 1,
  J: 1,
  I: 1,
  w: 1,
  o: 1,
  aw: 1,
  D: 1,
  B: 1,
  C: 1,
  K: 1,
  bV: 1,
  a: 1
}));
function $p_sci_List__loop$2__I__I__sci_List__I($thiz, len$1, i, xs) {
  var xs$tailLocal1 = xs;
  var i$tailLocal1 = i;
  while (true) {
    return ((i$tailLocal1 === len$1) ? (xs$tailLocal1.A() ? 0 : 1) : (xs$tailLocal1.A() ? (-1) : xs$tailLocal1.g0()));
  }
}
function $p_sci_List__listEq$1__sci_List__sci_List__Z($thiz, a, b) {
  var b$tailLocal1 = b;
  var a$tailLocal1 = a;
  while (true) {
    if ((a$tailLocal1 === b$tailLocal1)) {
      return true;
    } else {
      var aEmpty = a$tailLocal1.A();
      var bEmpty = b$tailLocal1.A();
      if ((!(aEmpty || bEmpty))) {
        a$tailLocal1.gv();
      }
      if (false) {
        a$tailLocal1.g0();
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
$p.z = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.gA = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.el = (function() {
  return "LinearSeq";
});
$p.A = (function() {
  return (this === $m_sci_Nil$());
});
$p.fF = (function(f) {
  var these = this;
  while ((!these.A())) {
    f.p(these.gv());
    these.g0();
  }
});
$p.s = (function() {
  var these = this;
  var len = 0;
  while ((!these.A())) {
    len = ((1 + len) | 0);
    these.g0();
  }
  return len;
});
$p.ej = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__I__sci_List__I(this, len, 0, this));
});
$p.f4 = (function() {
  return "List";
});
$p.f = (function(o) {
  return ((o instanceof $c_sci_List) ? $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, o) : $f_sc_Seq__equals__O__Z(this, o));
});
$p.kz = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$p.p = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ax)));
}
/** @constructor */
function $c_scm_ArraySeq$ofRef(array) {
  this.W = null;
  this.W = array;
}
$p = $c_scm_ArraySeq$ofRef.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofRef;
/** @constructor */
function $h_scm_ArraySeq$ofRef() {
}
$h_scm_ArraySeq$ofRef.prototype = $p;
$p.s = (function() {
  return this.W.b.length;
});
$p.z = (function(index) {
  return this.W.b[index];
});
$p.i = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.je(this.W, this$1.eJ);
});
$p.f = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofRef) ? $m_s_Array$().jj(this.W, that.W) : $c_scm_ArraySeq.prototype.f.call(this, that));
});
$p.C = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.W);
});
$p.p = (function(v1) {
  return this.z((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.az)));
}
var $d_scm_ArraySeq$ofRef = new $TypeData().i($c_scm_ArraySeq$ofRef, "scala.collection.mutable.ArraySeq$ofRef", ({
  az: 1,
  ay: 1,
  L: 1,
  A: 1,
  v: 1,
  d: 1,
  e: 1,
  r: 1,
  q: 1,
  p: 1,
  k: 1,
  u: 1,
  t: 1,
  b: 1,
  l: 1,
  P: 1,
  x: 1,
  M: 1,
  R: 1,
  Q: 1,
  w: 1,
  o: 1,
  O: 1,
  N: 1,
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
$p.r = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.j = (function() {
  return 0;
});
$p.o = (function() {
  return "Nil";
});
$p.g = (function(n) {
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
$p.gv = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list");
});
$p.g0 = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$p.H = (function() {
  return 0;
});
$p.C = (function() {
  return $m_sc_Iterator$().ac;
});
$p.hF = (function() {
  this.gv();
});
$p.hJ = (function() {
  this.g0();
});
var $d_sci_Nil$ = new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  ci: 1,
  ax: 1,
  au: 1,
  A: 1,
  v: 1,
  d: 1,
  e: 1,
  r: 1,
  q: 1,
  p: 1,
  k: 1,
  u: 1,
  t: 1,
  b: 1,
  l: 1,
  H: 1,
  J: 1,
  I: 1,
  c3: 1,
  G: 1,
  cg: 1,
  cf: 1,
  B: 1,
  C: 1,
  c7: 1,
  K: 1,
  a: 1,
  cb: 1,
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
  $thiz.a2 = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, new $c_jl_StringBuilder());
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.a2 = null;
}
$p = $c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
$h_scm_StringBuilder.prototype = $p;
$p.C = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.ej = (function(len) {
  var x = this.a2.s();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.el = (function() {
  return "IndexedSeq";
});
$p.s = (function() {
  return this.a2.s();
});
$p.H = (function() {
  return this.a2.s();
});
$p.d = (function() {
  return this.a2.D;
});
$p.A = (function() {
  return (this.a2.s() === 0);
});
$p.z = (function(i) {
  return $bC(this.a2.jg(i));
});
$p.p = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.a2.jg(i));
});
var $d_scm_StringBuilder = new $TypeData().i($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  cp: 1,
  L: 1,
  A: 1,
  v: 1,
  d: 1,
  e: 1,
  r: 1,
  q: 1,
  p: 1,
  k: 1,
  u: 1,
  t: 1,
  b: 1,
  l: 1,
  P: 1,
  x: 1,
  M: 1,
  R: 1,
  Q: 1,
  aB: 1,
  aC: 1,
  aA: 1,
  cn: 1,
  w: 1,
  o: 1,
  O: 1,
  N: 1,
  F: 1,
  a: 1
}));
/** @constructor */
function $c_sjs_js_WrappedArray(array) {
  this.eI = null;
  this.eI = array;
}
$p = $c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
}
$h_sjs_js_WrappedArray.prototype = $p;
$p.el = (function() {
  return "IndexedSeq";
});
$p.C = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.ej = (function(len) {
  var x = (this.eI.length | 0);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.z = (function(index) {
  return this.eI[index];
});
$p.s = (function() {
  return (this.eI.length | 0);
});
$p.H = (function() {
  return (this.eI.length | 0);
});
$p.f4 = (function() {
  return "WrappedArray";
});
$p.p = (function(v1) {
  var index = (v1 | 0);
  return this.eI[index];
});
var $d_sjs_js_WrappedArray = new $TypeData().i($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
  d3: 1,
  cj: 1,
  L: 1,
  A: 1,
  v: 1,
  d: 1,
  e: 1,
  r: 1,
  q: 1,
  p: 1,
  k: 1,
  u: 1,
  t: 1,
  b: 1,
  l: 1,
  P: 1,
  x: 1,
  M: 1,
  R: 1,
  Q: 1,
  aB: 1,
  aC: 1,
  co: 1,
  cl: 1,
  C: 1,
  B: 1,
  N: 1,
  w: 1,
  o: 1,
  O: 1,
  cm: 1,
  aA: 1,
  a: 1
}));
$s_Lsketches_rooms_gridceiling_roomsGridCeiling__main__AT__V(new ($d_T.r().C)([]));
