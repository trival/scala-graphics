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
  return (arg0.$classData.Z ? arg0.aT() : $objectClone(arg0));
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
        return null.oS();
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
        return instance.q(x0);
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__equals__O__Z(instance.l, instance.h, x0);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__equals__O__Z(instance.c, x0);
      } else {
        return $c_O.prototype.q.call(instance, x0);
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
        return instance.x();
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__hashCode__I(instance.l, instance.h);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I(instance.c);
      } else {
        return $c_O.prototype.x.call(instance);
      }
    }
  }
}
function $dp_indexOf__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__indexOf__I__I(instance, x0);
  } else {
    return instance.oT(x0);
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
$p.x = (function() {
  return $systemIdentityHashCode(this);
});
$p.q = (function(that) {
  return (this === that);
});
$p.m = (function() {
  var i = this.x();
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.toString = (function() {
  return this.m();
});
function $ac_O(arg) {
  if (((typeof arg) === "number")) {
    this.d = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.d[i] = null;
    }
  } else {
    this.d = arg;
  }
}
$p = $ac_O.prototype = new $h_O();
$p.constructor = $ac_O;
$p.aI = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.d, srcPos, dest.d, destPos, length);
});
$p.aT = (function() {
  return new $ac_O(this.d.slice());
});
function $ah_O() {
}
$ah_O.prototype = $p;
function $ac_Z(arg) {
  if (((typeof arg) === "number")) {
    this.d = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.d[i] = false;
    }
  } else {
    this.d = arg;
  }
}
$p = $ac_Z.prototype = new $h_O();
$p.constructor = $ac_Z;
$p.aI = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.d, srcPos, dest.d, destPos, length);
});
$p.aT = (function() {
  return new $ac_Z(this.d.slice());
});
function $ac_C(arg) {
  if (((typeof arg) === "number")) {
    this.d = new Uint16Array(arg);
  } else {
    this.d = arg;
  }
}
$p = $ac_C.prototype = new $h_O();
$p.constructor = $ac_C;
$p.aI = (function(srcPos, dest, destPos, length) {
  dest.d.set(this.d.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aT = (function() {
  return new $ac_C(this.d.slice());
});
function $ac_B(arg) {
  if (((typeof arg) === "number")) {
    this.d = new Int8Array(arg);
  } else {
    this.d = arg;
  }
}
$p = $ac_B.prototype = new $h_O();
$p.constructor = $ac_B;
$p.aI = (function(srcPos, dest, destPos, length) {
  dest.d.set(this.d.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aT = (function() {
  return new $ac_B(this.d.slice());
});
function $ac_S(arg) {
  if (((typeof arg) === "number")) {
    this.d = new Int16Array(arg);
  } else {
    this.d = arg;
  }
}
$p = $ac_S.prototype = new $h_O();
$p.constructor = $ac_S;
$p.aI = (function(srcPos, dest, destPos, length) {
  dest.d.set(this.d.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aT = (function() {
  return new $ac_S(this.d.slice());
});
function $ac_I(arg) {
  if (((typeof arg) === "number")) {
    this.d = new Int32Array(arg);
  } else {
    this.d = arg;
  }
}
$p = $ac_I.prototype = new $h_O();
$p.constructor = $ac_I;
$p.aI = (function(srcPos, dest, destPos, length) {
  dest.d.set(this.d.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aT = (function() {
  return new $ac_I(this.d.slice());
});
function $ac_J(arg) {
  if (((typeof arg) === "number")) {
    arg = (arg << 1);
    this.d = new Int32Array(arg);
  } else {
    this.d = arg;
  }
}
$p = $ac_J.prototype = new $h_O();
$p.constructor = $ac_J;
$p.aI = (function(srcPos, dest, destPos, length) {
  dest.d.set(this.d.subarray((srcPos << 1), (((srcPos + length) | 0) << 1)), (destPos << 1));
});
$p.aT = (function() {
  return new $ac_J(this.d.slice());
});
function $ac_F(arg) {
  if (((typeof arg) === "number")) {
    this.d = new Float32Array(arg);
  } else {
    this.d = arg;
  }
}
$p = $ac_F.prototype = new $h_O();
$p.constructor = $ac_F;
$p.aI = (function(srcPos, dest, destPos, length) {
  dest.d.set(this.d.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aT = (function() {
  return new $ac_F(this.d.slice());
});
function $ac_D(arg) {
  if (((typeof arg) === "number")) {
    this.d = new Float64Array(arg);
  } else {
    this.d = arg;
  }
}
$p = $ac_D.prototype = new $h_O();
$p.constructor = $ac_D;
$p.aI = (function(srcPos, dest, destPos, length) {
  dest.d.set(this.d.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aT = (function() {
  return new $ac_D(this.d.slice());
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
    var u = result.d;
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
      this.d = new Array(arg);
      for (var i = 0; (i < arg); (i++)) {
        this.d[i] = null;
      }
    } else {
      this.d = arg;
    }
  }
  var $p = ArrayClass.prototype = new $ah_O();
  $p.constructor = ArrayClass;
  $p.aI = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.d, srcPos, dest.d, destPos, length);
  });
  $p.aT = (function() {
    return new ArrayClass(this.d.slice());
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
  this.jg = null;
  this.m4 = null;
  $n_jl_System$Streams$ = this;
  this.jg = new $c_jl_JSConsoleBasedPrintStream(false);
  this.m4 = new $c_jl_JSConsoleBasedPrintStream(true);
}
$p = $c_jl_System$Streams$.prototype = new $h_O();
$p.constructor = $c_jl_System$Streams$;
/** @constructor */
function $h_jl_System$Streams$() {
}
$h_jl_System$Streams$.prototype = $p;
var $d_jl_System$Streams$ = new $TypeData().i($c_jl_System$Streams$, "java.lang.System$Streams$", ({
  bl: 1
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
  this.hS = null;
  this.jh = null;
  $n_jl_System$SystemProperties$ = this;
  this.hS = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
  this.jh = null;
}
$p = $c_jl_System$SystemProperties$.prototype = new $h_O();
$p.constructor = $c_jl_System$SystemProperties$;
/** @constructor */
function $h_jl_System$SystemProperties$() {
}
$h_jl_System$SystemProperties$.prototype = $p;
$p.ly = (function(key, default$1) {
  if ((this.hS !== null)) {
    var dict = this.hS;
    return ((!(!$m_jl_Utils$Cache$().jj.call(dict, key))) ? dict[key] : default$1);
  } else {
    return this.jh.ly(key, default$1);
  }
});
var $d_jl_System$SystemProperties$ = new $TypeData().i($c_jl_System$SystemProperties$, "java.lang.System$SystemProperties$", ({
  bm: 1
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
  this.jj = null;
  $n_jl_Utils$Cache$ = this;
  this.jj = Object.prototype.hasOwnProperty;
}
$p = $c_jl_Utils$Cache$.prototype = new $h_O();
$p.constructor = $c_jl_Utils$Cache$;
/** @constructor */
function $h_jl_Utils$Cache$() {
}
$h_jl_Utils$Cache$.prototype = $p;
var $d_jl_Utils$Cache$ = new $TypeData().i($c_jl_Utils$Cache$, "java.lang.Utils$Cache$", ({
  bo: 1
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
  bp: 1
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
$p.iY = (function(array) {
  return ((array instanceof $ac_O) ? array.d.length : ((array instanceof $ac_Z) ? array.d.length : ((array instanceof $ac_C) ? array.d.length : ((array instanceof $ac_B) ? array.d.length : ((array instanceof $ac_S) ? array.d.length : ((array instanceof $ac_I) ? array.d.length : ((array instanceof $ac_J) ? ((array.d.length >>> 1) | 0) : ((array instanceof $ac_F) ? array.d.length : ((array instanceof $ac_D) ? array.d.length : $p_jl_reflect_Array$__mismatch__O__E(this, array))))))))));
});
var $d_jl_reflect_Array$ = new $TypeData().i($c_jl_reflect_Array$, "java.lang.reflect.Array$", ({
  bq: 1
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
$p.mu = (function(a, key) {
  var startIndex = 0;
  var endIndex = a.d.length;
  while (true) {
    if ((startIndex === endIndex)) {
      return (~startIndex);
    } else {
      var mid = ((((startIndex + endIndex) | 0) >>> 1) | 0);
      var elem = a.d[mid];
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
  br: 1
}));
var $n_ju_Arrays$;
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$();
  }
  return $n_ju_Arrays$;
}
function $s_RTLong__remainderUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().od(alo, ahi, blo, bhi);
}
function $s_RTLong__remainder__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().oc(alo, ahi, blo, bhi);
}
function $s_RTLong__divideUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().mJ(alo, ahi, blo, bhi);
}
function $s_RTLong__divide__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().mI(alo, ahi, blo, bhi);
}
function $s_RTLong__fromDoubleBits__D__O__J(value, fpBitsDataView) {
  fpBitsDataView.setFloat64(0, value, true);
  var lo = (fpBitsDataView.getInt32(0, true) | 0);
  var hi = (fpBitsDataView.getInt32(4, true) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__fromDouble__D__J(value) {
  return $m_RTLong$().lv(value);
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
  return $m_RTLong$().lY(lo, hi);
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
$p.lY = (function(lo, hi) {
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
$p.lv = (function(value) {
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
$p.mI = (function(alo, ahi, blo, bhi) {
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
    var $x_1 = this.hJ(rlo, rhi, rlo$1, rhi$1, true);
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
$p.mJ = (function(alo, ahi, blo, bhi) {
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
    return this.hJ(alo, ahi, blo, bhi, true);
  }
});
$p.oc = (function(alo, ahi, blo, bhi) {
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
    var $x_1 = this.hJ(rlo, rhi, rlo$1, rhi$1, false);
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
$p.od = (function(alo, ahi, blo, bhi) {
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
    return this.hJ(alo, ahi, blo, bhi, false);
  }
});
$p.hJ = (function(alo, ahi, blo, bhi, askQuotient) {
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
  bt: 1
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
$p.lt = (function(xs, ys) {
  if ((xs === ys)) {
    return true;
  }
  if ((xs.d.length !== ys.d.length)) {
    return false;
  }
  var len = xs.d.length;
  var i = 0;
  while ((i < len)) {
    if ((!$m_sr_BoxesRunTime$().b(xs.d[i], ys.d[i]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
var $d_s_Array$ = new $TypeData().i($c_s_Array$, "scala.Array$", ({
  bu: 1
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
  var it = $thiz.a7();
  while (it.O()) {
    f.h(it.H());
  }
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  return (($thiz.al() === 0) ? (("" + start) + end) : $thiz.iS($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).aL.a9);
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.aL;
  if ((start.length !== 0)) {
    jsb.a9 = (("" + jsb.a9) + start);
  }
  var it = $thiz.a7();
  if (it.O()) {
    var obj = it.H();
    jsb.a9 = (("" + jsb.a9) + obj);
    while (it.O()) {
      if ((sep.length !== 0)) {
        jsb.a9 = (("" + jsb.a9) + sep);
      }
      var obj$1 = it.H();
      jsb.a9 = (("" + jsb.a9) + obj$1);
    }
  }
  if ((end.length !== 0)) {
    jsb.a9 = (("" + jsb.a9) + end);
  }
  return b;
}
/** @constructor */
function $c_sc_Iterator$ConcatIteratorCell(head, tail) {
  this.jq = null;
  this.g0 = null;
  this.jq = head;
  this.g0 = tail;
}
$p = $c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$ConcatIteratorCell;
/** @constructor */
function $h_sc_Iterator$ConcatIteratorCell() {
}
$h_sc_Iterator$ConcatIteratorCell.prototype = $p;
$p.n6 = (function() {
  return this.jq.fP().a7();
});
var $d_sc_Iterator$ConcatIteratorCell = new $TypeData().i($c_sc_Iterator$ConcatIteratorCell, "scala.collection.Iterator$ConcatIteratorCell", ({
  cb: 1
}));
/** @constructor */
function $c_sc_StringOps$() {
  this.jr = null;
  $n_sc_StringOps$ = this;
  this.jr = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => this.jr));
}
$p = $c_sc_StringOps$.prototype = new $h_O();
$p.constructor = $c_sc_StringOps$;
/** @constructor */
function $h_sc_StringOps$() {
}
$h_sc_StringOps$.prototype = $p;
var $d_sc_StringOps$ = new $TypeData().i($c_sc_StringOps$, "scala.collection.StringOps$", ({
  cj: 1
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
  this.ju = 0;
  $n_sci_IndexedSeqDefaults$ = this;
  try {
    $m_sc_StringOps$();
    var $x_1 = $m_jl_Integer$().nf($m_jl_System$SystemProperties$().ly("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64"), 10, 214748364);
  } catch (e) {
    if (false) {
      var $x_1 = 64;
    } else {
      var $x_1;
      throw e;
    }
  }
  this.ju = $x_1;
}
$p = $c_sci_IndexedSeqDefaults$.prototype = new $h_O();
$p.constructor = $c_sci_IndexedSeqDefaults$;
/** @constructor */
function $h_sci_IndexedSeqDefaults$() {
}
$h_sci_IndexedSeqDefaults$.prototype = $p;
var $d_sci_IndexedSeqDefaults$ = new $TypeData().i($c_sci_IndexedSeqDefaults$, "scala.collection.immutable.IndexedSeqDefaults$", ({
  co: 1
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
$p.b = (function(x, y) {
  return ((x === y) || ($is_jl_Number(x) ? this.mR(x, y) : ((x instanceof $Char) ? this.mP(x, y) : ((x === null) ? (y === null) : $dp_equals__O__Z(x, y)))));
});
$p.mR = (function(xn, y) {
  if ($is_jl_Number(y)) {
    return this.mQ(xn, y);
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
$p.mQ = (function(xn, yn) {
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
      return (false && yn.q(x2));
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
      return (false && yn.q($bL(x3$2_$_lo, x3$2_$_hi)));
    }
  } else {
    return ((xn === null) ? (yn === null) : $dp_equals__O__Z(xn, yn));
  }
});
$p.mP = (function(xc, y) {
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
  cX: 1
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
$p.ms = (function() {
  throw new $c_jl_AssertionError("assertion failed");
});
$p.hI = (function() {
  throw $ct_jl_NullPointerException__T__(new $c_jl_NullPointerException(), "tried to cast away nullability, but value is null");
});
var $d_sr_Scala3RunTime$ = new $TypeData().i($c_sr_Scala3RunTime$, "scala.runtime.Scala3RunTime$", ({
  d1: 1
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
$p.fQ = (function(xs, idx) {
  if ((xs instanceof $ac_O)) {
    return xs.d[idx];
  }
  if ((xs instanceof $ac_I)) {
    return xs.d[idx];
  }
  if ((xs instanceof $ac_D)) {
    return xs.d[idx];
  }
  if ((xs instanceof $ac_J)) {
    var $x_1 = xs.d;
    var $x_2 = (idx << 1);
    return $bL($x_1[$x_2], $x_1[(($x_2 + 1) | 0)]);
  }
  if ((xs instanceof $ac_F)) {
    return xs.d[idx];
  }
  if ((xs instanceof $ac_C)) {
    return $bC(xs.d[idx]);
  }
  if ((xs instanceof $ac_B)) {
    return xs.d[idx];
  }
  if ((xs instanceof $ac_S)) {
    return xs.d[idx];
  }
  if ((xs instanceof $ac_Z)) {
    return xs.d[idx];
  }
  if ((xs === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  throw new $c_s_MatchError(xs);
});
$p.li = (function(x) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(x.F(), (x.D() + "("), ",", ")");
});
$p.av = (function(xs) {
  if ((xs === null)) {
    return null;
  } else if ((xs.d.length === 0)) {
    var this$2 = $m_sci_ArraySeq$();
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    return $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef(this$2);
  } else {
    return new $c_sci_ArraySeq$ofRef(xs);
  }
});
var $d_sr_ScalaRunTime$ = new $TypeData().i($c_sr_ScalaRunTime$, "scala.runtime.ScalaRunTime$", ({
  d2: 1
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
$p.y = (function(hash, data) {
  var h = this.hG(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.hG = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.ai = (function(hash, length) {
  return this.mt((hash ^ length));
});
$p.mt = (function(h0) {
  var h = h0;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.nk = (function(lv_$_lo, lv_$_hi) {
  return ((lv_$_hi === (lv_$_lo >> 31)) ? lv_$_lo : (lv_$_lo ^ lv_$_hi));
});
$p.gz = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var $x_1 = $m_RTLong$().lv(dv);
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
$p.X = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    return this.gz((+x));
  } else if ((x instanceof $Long)) {
    var $x_1 = $uJ(x);
    return this.nk($x_1.l, $x_1.h);
  } else {
    return $dp_hashCode__I(x);
  }
});
$p.nd = (function(n) {
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
var $d_sr_Statics$ = new $TypeData().i($c_sr_Statics$, "scala.runtime.Statics$", ({
  d4: 1
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
    return new $c_T2(x, self.fc);
  }
  if ((self instanceof $c_T2)) {
    return new $c_T3(x, self.a2, self.ag);
  }
  if ((self instanceof $c_T3)) {
    return new $c_T4(x, self.aW, self.aJ, self.aK);
  }
  if ((self instanceof $c_T4)) {
    return new $c_T5(x, self.ew, self.b9, self.ba, self.bb);
  }
  if ((self instanceof $c_T5)) {
    return new $c_T6(x, self.fq, self.ex, self.ey, self.ez, self.eA);
  }
  if ((self instanceof $c_T6)) {
    return new $c_T7(x, self.fr, self.eB, self.eC, self.eD, self.eE, self.eF);
  }
  if ((self instanceof $c_T7)) {
    return new $c_T8(x, self.fs, self.eG, self.eH, self.eI, self.eJ, self.eK, self.eL);
  }
  if ((self instanceof $c_T8)) {
    return new $c_T9(x, self.ft, self.eM, self.eN, self.eO, self.eP, self.eQ, self.eR, self.eS);
  }
  if ((self instanceof $c_T9)) {
    return new $c_T10(x, self.fu, self.eT, self.eU, self.eV, self.eW, self.eX, self.eY, self.eZ, self.f0);
  }
  if ((self instanceof $c_T10)) {
    return new $c_T11(x, self.fd, self.bn, self.bo, self.bp, self.bq, self.br, self.bs, self.bt, self.bu, self.bm);
  }
  if ((self instanceof $c_T11)) {
    return new $c_T12(x, self.fe, self.bx, self.by, self.bz, self.bA, self.bB, self.bC, self.bD, self.bE, self.bv, self.bw);
  }
  if ((self instanceof $c_T12)) {
    return new $c_T13(x, self.ff, self.bI, self.bJ, self.bK, self.bL, self.bM, self.bN, self.bO, self.bP, self.bF, self.bG, self.bH);
  }
  if ((self instanceof $c_T13)) {
    return new $c_T14(x, self.fg, self.bU, self.bV, self.bW, self.bX, self.bY, self.bZ, self.c0, self.c1, self.bQ, self.bR, self.bS, self.bT);
  }
  if ((self instanceof $c_T14)) {
    return new $c_T15(x, self.fh, self.c7, self.c8, self.c9, self.ca, self.cb, self.cc, self.cd, self.ce, self.c2, self.c3, self.c4, self.c5, self.c6);
  }
  if ((self instanceof $c_T15)) {
    return new $c_T16(x, self.fi, self.cl, self.cm, self.cn, self.co, self.cp, self.cq, self.cr, self.cs, self.cf, self.cg, self.ch, self.ci, self.cj, self.ck);
  }
  if ((self instanceof $c_T16)) {
    return new $c_T17(x, self.fj, self.cA, self.cB, self.cC, self.cD, self.cE, self.cF, self.cG, self.cH, self.ct, self.cu, self.cv, self.cw, self.cx, self.cy, self.cz);
  }
  if ((self instanceof $c_T17)) {
    return new $c_T18(x, self.fk, self.cQ, self.cR, self.cS, self.cT, self.cU, self.cV, self.cW, self.cX, self.cI, self.cJ, self.cK, self.cL, self.cM, self.cN, self.cO, self.cP);
  }
  if ((self instanceof $c_T18)) {
    return new $c_T19(x, self.fl, self.d7, self.d8, self.d9, self.da, self.db, self.dc, self.dd, self.de, self.cY, self.cZ, self.d0, self.d1, self.d2, self.d3, self.d4, self.d5, self.d6);
  }
  if ((self instanceof $c_T19)) {
    return new $c_T20(x, self.fm, self.dq, self.dr, self.ds, self.dt, self.du, self.dv, self.dw, self.dx, self.df, self.dg, self.dh, self.di, self.dj, self.dk, self.dl, self.dm, self.dn, self.dp);
  }
  if ((self instanceof $c_T20)) {
    return new $c_T21(x, self.fn, self.dI, self.dK, self.dL, self.dM, self.dN, self.dO, self.dP, self.dQ, self.dy, self.dz, self.dA, self.dB, self.dC, self.dD, self.dE, self.dF, self.dG, self.dH, self.dJ);
  }
  if ((self instanceof $c_T21)) {
    return new $c_T22(x, self.fo, self.e1, self.e4, self.e5, self.e6, self.e7, self.e8, self.e9, self.ea, self.dR, self.dS, self.dT, self.dU, self.dV, self.dW, self.dX, self.dY, self.dZ, self.e0, self.e2, self.e3);
  }
  if ((self instanceof $c_T22)) {
    return new $c_sr_TupleXXL(new $ac_O([x, self.fp, self.el, self.ep, self.eq, self.er, self.es, self.et, self.eu, self.ev, self.eb, self.ec, self.ed, self.ee, self.ef, self.eg, self.eh, self.ei, self.ej, self.ek, self.em, self.en, self.eo]));
  }
  throw new $c_s_MatchError(self);
}
function $p_sr_Tuples$__xxlCons__O__sr_TupleXXL__sr_TupleXXL($thiz, x, xxl) {
  var arr = new $ac_O(((1 + xxl.z()) | 0));
  arr.d[0] = x;
  var src = xxl.aa;
  var length = xxl.z();
  src.aI(0, arr, 1, length);
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
      var $x_1 = new $c_T1(self.ag);
      break matchResult34$1;
    }
    if ((self instanceof $c_T3)) {
      var $x_1 = new $c_T2(self.aJ, self.aK);
      break matchResult34$1;
    }
    if ((self instanceof $c_T4)) {
      var $x_1 = new $c_T3(self.b9, self.ba, self.bb);
      break matchResult34$1;
    }
    if ((self instanceof $c_T5)) {
      var $x_1 = new $c_T4(self.ex, self.ey, self.ez, self.eA);
      break matchResult34$1;
    }
    if ((self instanceof $c_T6)) {
      var $x_1 = new $c_T5(self.eB, self.eC, self.eD, self.eE, self.eF);
      break matchResult34$1;
    }
    if ((self instanceof $c_T7)) {
      var $x_1 = new $c_T6(self.eG, self.eH, self.eI, self.eJ, self.eK, self.eL);
      break matchResult34$1;
    }
    if ((self instanceof $c_T8)) {
      var $x_1 = new $c_T7(self.eM, self.eN, self.eO, self.eP, self.eQ, self.eR, self.eS);
      break matchResult34$1;
    }
    if ((self instanceof $c_T9)) {
      var $x_1 = new $c_T8(self.eT, self.eU, self.eV, self.eW, self.eX, self.eY, self.eZ, self.f0);
      break matchResult34$1;
    }
    if ((self instanceof $c_T10)) {
      var $x_1 = new $c_T9(self.bn, self.bo, self.bp, self.bq, self.br, self.bs, self.bt, self.bu, self.bm);
      break matchResult34$1;
    }
    if ((self instanceof $c_T11)) {
      var $x_1 = new $c_T10(self.bx, self.by, self.bz, self.bA, self.bB, self.bC, self.bD, self.bE, self.bv, self.bw);
      break matchResult34$1;
    }
    if ((self instanceof $c_T12)) {
      var $x_1 = new $c_T11(self.bI, self.bJ, self.bK, self.bL, self.bM, self.bN, self.bO, self.bP, self.bF, self.bG, self.bH);
      break matchResult34$1;
    }
    if ((self instanceof $c_T13)) {
      var $x_1 = new $c_T12(self.bU, self.bV, self.bW, self.bX, self.bY, self.bZ, self.c0, self.c1, self.bQ, self.bR, self.bS, self.bT);
      break matchResult34$1;
    }
    if ((self instanceof $c_T14)) {
      var $x_1 = new $c_T13(self.c7, self.c8, self.c9, self.ca, self.cb, self.cc, self.cd, self.ce, self.c2, self.c3, self.c4, self.c5, self.c6);
      break matchResult34$1;
    }
    if ((self instanceof $c_T15)) {
      var $x_1 = new $c_T14(self.cl, self.cm, self.cn, self.co, self.cp, self.cq, self.cr, self.cs, self.cf, self.cg, self.ch, self.ci, self.cj, self.ck);
      break matchResult34$1;
    }
    if ((self instanceof $c_T16)) {
      var $x_1 = new $c_T15(self.cA, self.cB, self.cC, self.cD, self.cE, self.cF, self.cG, self.cH, self.ct, self.cu, self.cv, self.cw, self.cx, self.cy, self.cz);
      break matchResult34$1;
    }
    if ((self instanceof $c_T17)) {
      var $x_1 = new $c_T16(self.cQ, self.cR, self.cS, self.cT, self.cU, self.cV, self.cW, self.cX, self.cI, self.cJ, self.cK, self.cL, self.cM, self.cN, self.cO, self.cP);
      break matchResult34$1;
    }
    if ((self instanceof $c_T18)) {
      var $x_1 = new $c_T17(self.d7, self.d8, self.d9, self.da, self.db, self.dc, self.dd, self.de, self.cY, self.cZ, self.d0, self.d1, self.d2, self.d3, self.d4, self.d5, self.d6);
      break matchResult34$1;
    }
    if ((self instanceof $c_T19)) {
      var $x_1 = new $c_T18(self.dq, self.dr, self.ds, self.dt, self.du, self.dv, self.dw, self.dx, self.df, self.dg, self.dh, self.di, self.dj, self.dk, self.dl, self.dm, self.dn, self.dp);
      break matchResult34$1;
    }
    if ((self instanceof $c_T20)) {
      var $x_1 = new $c_T19(self.dI, self.dK, self.dL, self.dM, self.dN, self.dO, self.dP, self.dQ, self.dy, self.dz, self.dA, self.dB, self.dC, self.dD, self.dE, self.dF, self.dG, self.dH, self.dJ);
      break matchResult34$1;
    }
    if ((self instanceof $c_T21)) {
      var $x_1 = new $c_T20(self.e1, self.e4, self.e5, self.e6, self.e7, self.e8, self.e9, self.ea, self.dR, self.dS, self.dT, self.dU, self.dV, self.dW, self.dX, self.dY, self.dZ, self.e0, self.e2, self.e3);
      break matchResult34$1;
    }
    if ((self instanceof $c_T22)) {
      var $x_1 = new $c_T21(self.el, self.ep, self.eq, self.er, self.es, self.et, self.eu, self.ev, self.eb, self.ec, self.ed, self.ee, self.ef, self.eg, self.eh, self.ei, self.ej, self.ek, self.em, self.en, self.eo);
      break matchResult34$1;
    }
    throw new $c_s_MatchError(self);
  }
  return $x_1;
}
function $p_sr_Tuples$__xxlTail__sr_TupleXXL__s_Product($thiz, xxl) {
  if ((xxl.z() === 23)) {
    var elems = xxl.aa;
    return new $c_T22(elems.d[1], elems.d[2], elems.d[3], elems.d[4], elems.d[5], elems.d[6], elems.d[7], elems.d[8], elems.d[9], elems.d[10], elems.d[11], elems.d[12], elems.d[13], elems.d[14], elems.d[15], elems.d[16], elems.d[17], elems.d[18], elems.d[19], elems.d[20], elems.d[21], elems.d[22]);
  } else {
    var arr$1 = new $ac_O(((xxl.aa.d.length - 1) | 0));
    var src = xxl.aa;
    var length = ((xxl.aa.d.length - 1) | 0);
    src.aI(1, arr$1, 0, length);
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
$p.mB = (function(x, self) {
  return ((self instanceof $c_sr_TupleXXL) ? $p_sr_Tuples$__xxlCons__O__sr_TupleXXL__sr_TupleXXL(this, x, self) : $p_sr_Tuples$__specialCaseCons__O__s_Product__s_Product(this, x, self));
});
$p.ow = (function(self) {
  return ((self instanceof $c_sr_TupleXXL) ? $p_sr_Tuples$__xxlTail__sr_TupleXXL__s_Product(this, self) : $p_sr_Tuples$__specialCaseTail__s_Product__s_Product(this, self));
});
var $d_sr_Tuples$ = new $TypeData().i($c_sr_Tuples$, "scala.runtime.Tuples$", ({
  d5: 1
}));
var $n_sr_Tuples$;
function $m_sr_Tuples$() {
  if ((!$n_sr_Tuples$)) {
    $n_sr_Tuples$ = new $c_sr_Tuples$();
  }
  return $n_sr_Tuples$;
}
var $d_sjs_js_Any = new $TypeData().i(2, "scala.scalajs.js.Any", ({
  aL: 1
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
$p.n5 = (function(this$, o, p) {
  return (!(!(p in o)));
});
var $d_sjs_js_Any$ObjectCompanionOps$ = new $TypeData().i($c_sjs_js_Any$ObjectCompanionOps$, "scala.scalajs.js.Any$ObjectCompanionOps$", ({
  d7: 1
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
$p.n8 = (function(this$, elem, from) {
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
$p.m2 = (function(this$, that) {
  var b = [];
  var len = (this$.length | 0);
  var i = 0;
  var it = that.a7();
  while (((i < len) && it.O())) {
    b.push(new $c_T2(this$[i], it.H()));
    i = ((1 + i) | 0);
  }
  return b;
});
$p.m3 = (function(this$) {
  var len = (this$.length | 0);
  var b = new Array(len);
  var i = 0;
  while ((i < len)) {
    b[i] = new $c_T2(this$[i], i);
    i = ((1 + i) | 0);
  }
  return b;
});
$p.bj = (function(this$, f) {
  var len = (this$.length | 0);
  var i = 0;
  while ((i < len)) {
    f.h(this$[i]);
    i = ((1 + i) | 0);
  }
});
var $d_sjs_js_ArrayOps$ = new $TypeData().i($c_sjs_js_ArrayOps$, "scala.scalajs.js.ArrayOps$", ({
  d8: 1
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
  d9: 1
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
  this.jD = null;
  $n_sjs_js_WrappedDictionary$Cache$ = this;
  this.jD = Object.prototype.hasOwnProperty;
}
$p = $c_sjs_js_WrappedDictionary$Cache$.prototype = new $h_O();
$p.constructor = $c_sjs_js_WrappedDictionary$Cache$;
/** @constructor */
function $h_sjs_js_WrappedDictionary$Cache$() {
}
$h_sjs_js_WrappedDictionary$Cache$.prototype = $p;
var $d_sjs_js_WrappedDictionary$Cache$ = new $TypeData().i($c_sjs_js_WrappedDictionary$Cache$, "scala.scalajs.js.WrappedDictionary$Cache$", ({
  de: 1
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
$p.l = (function(properties) {
  var result = ({});
  properties.gA(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((pair$2$2) => {
    result[pair$2$2.a2] = pair$2$2.ag;
  })));
  return result;
});
var $d_sjs_js_special_package$ = new $TypeData().i($c_sjs_js_special_package$, "scala.scalajs.js.special.package$", ({
  df: 1
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
$p.op = (function(interval, body) {
  return setTimeout((() => {
    body.fP();
  }), interval);
});
$p.mz = (function(handle) {
  clearTimeout(handle);
});
var $d_sjs_js_timers_package$ = new $TypeData().i($c_sjs_js_timers_package$, "scala.scalajs.js.timers.package$", ({
  dg: 1
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
$p.au = (function(seq) {
  if ((seq instanceof $c_sjsr_WrappedVarArgs)) {
    return seq.h4;
  } else {
    var result = [];
    seq.gA(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2$2) => (result.push(x$2$2) | 0))));
    return result;
  }
});
var $d_sjsr_Compat$ = new $TypeData().i($c_sjsr_Compat$, "scala.scalajs.runtime.Compat$", ({
  dh: 1
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
$p.i = (function(array) {
  var len = array.d.length;
  var result = [];
  var i = 0;
  while ((i !== len)) {
    var x1 = i;
    result.push(array.d[x1]);
    i = ((1 + i) | 0);
  }
  return result;
});
var $d_sjsr_package$ = new $TypeData().i($c_sjsr_package$, "scala.scalajs.runtime.package$", ({
  di: 1
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
$p.os = (function(err) {
  var where = ((err.lz() === 0) ? "" : ((err.lz() === 1) ? " after first argument" : ((" after " + err.lz()) + " arguments")));
  var x = ((("Illegal command line" + where) + ": ") + err.oU());
  $m_s_Console$().o0().ng((x + "\n"));
});
var $d_s_util_CommandLineParser$ = new $TypeData().i($c_s_util_CommandLineParser$, "scala.util.CommandLineParser$", ({
  dj: 1
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
  this.hU = null;
  this.hU = init;
}
$p = $c_s_util_DynamicVariable.prototype = new $h_O();
$p.constructor = $c_s_util_DynamicVariable;
/** @constructor */
function $h_s_util_DynamicVariable() {
}
$h_s_util_DynamicVariable.prototype = $p;
$p.m = (function() {
  return (("DynamicVariable(" + this.hU) + ")");
});
var $d_s_util_DynamicVariable = new $TypeData().i($c_s_util_DynamicVariable, "scala.util.DynamicVariable", ({
  dl: 1
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
$p.y = (function(hash, data) {
  var h = this.hG(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.hG = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.ai = (function(hash, length) {
  return this.gW((hash ^ length));
});
$p.gW = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.P = (function(x, seed, ignorePrefix) {
  var arr = x.z();
  if ((arr === 0)) {
    return ((!ignorePrefix) ? $f_T__hashCode__I(x.D()) : seed);
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.y(h, $f_T__hashCode__I(x.D()));
    }
    var i = 0;
    while ((i < arr)) {
      h = this.y(h, $m_sr_Statics$().X(x.j(i)));
      i = ((1 + i) | 0);
    }
    return this.ai(h, arr);
  }
});
$p.mx = (function(x, seed, caseClassName) {
  var arr = x.z();
  var aye = $f_T__hashCode__I(((caseClassName !== null) ? caseClassName : x.D()));
  if ((arr === 0)) {
    return aye;
  } else {
    var h = seed;
    h = this.y(h, aye);
    var i = 0;
    while ((i < arr)) {
      h = this.y(h, $m_sr_Statics$().X(x.j(i)));
      i = ((1 + i) | 0);
    }
    return this.ai(h, arr);
  }
});
$p.oC = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.a7();
  while (iterator.O()) {
    var x = iterator.H();
    var h = $m_sr_Statics$().X(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.y(h$2, a);
  h$2 = this.y(h$2, b);
  h$2 = this.hG(h$2, c);
  return this.ai(h$2, n);
});
$p.nZ = (function(xs, seed) {
  var it = xs.a7();
  var h = seed;
  if ((!it.O())) {
    return this.ai(h, 0);
  }
  var x0 = it.H();
  if ((!it.O())) {
    return this.ai(this.y(h, $m_sr_Statics$().X(x0)), 1);
  }
  var x1 = it.H();
  var initial = $m_sr_Statics$().X(x0);
  h = this.y(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().X(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.O()) {
    h = this.y(h, prev);
    var hash = $m_sr_Statics$().X(it.H());
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.y(h, hash);
      i = ((1 + i) | 0);
      while (it.O()) {
        h = this.y(h, $m_sr_Statics$().X(it.H()));
        i = ((1 + i) | 0);
      }
      return this.ai(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.gW(this.y(this.y(h0, rangeDiff), prev));
});
$p.ln = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().iY(a);
  switch (l) {
    case 0: {
      return this.ai(h, 0);
      break;
    }
    case 1: {
      return this.ai(this.y(h, $m_sr_Statics$().X($m_sr_ScalaRunTime$().fQ(a, 0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().X($m_sr_ScalaRunTime$().fQ(a, 0));
      h = this.y(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().X($m_sr_ScalaRunTime$().fQ(a, 1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.y(h, prev);
        var hash = $m_sr_Statics$().X($m_sr_ScalaRunTime$().fQ(a, i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.y(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.y(h, $m_sr_Statics$().X($m_sr_ScalaRunTime$().fQ(a, i)));
            i = ((1 + i) | 0);
          }
          return this.ai(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.gW(this.y(this.y(h0, rangeDiff), prev));
    }
  }
});
$p.o8 = (function(start, step, last, seed) {
  return this.gW(this.y(this.y(this.y(seed, start), step), last));
});
$p.n9 = (function(a, seed) {
  var h = seed;
  var l = a.L();
  switch (l) {
    case 0: {
      return this.ai(h, 0);
      break;
    }
    case 1: {
      return this.ai(this.y(h, $m_sr_Statics$().X(a.Z(0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().X(a.Z(0));
      h = this.y(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().X(a.Z(1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.y(h, prev);
        var hash = $m_sr_Statics$().X(a.Z(i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.y(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.y(h, $m_sr_Statics$().X(a.Z(i)));
            i = ((1 + i) | 0);
          }
          return this.ai(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.gW(this.y(this.y(h0, rangeDiff), prev));
    }
  }
});
$p.ni = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.a0())) {
    elems.hF();
  }
  return ((rangeState === 2) ? this.o8(initial, rangeDiff, prev, seed) : this.ai(h, n));
});
function $p_Lsketches_rooms_canvases_Canvases$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2($thiz, c, u, v) {
  return new $c_T2(c, new $c_Ltrivalibs_graphics_math_cpu_Vec2(u, v));
}
function $p_Lsketches_rooms_canvases_Canvases$package$__form$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form($thiz, p$1, faces) {
  var mesh$proxy1 = $m_Ltrivalibs_graphics_geometry_Mesh$().iT(faces, null, 0, new $c_Ltrivalibs_graphics_geometry_package$package$$anon$1(0));
  var vl = new $c_Ltrivalibs_graphics_geometry_VertexLayout$named(new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$(), new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$(), $m_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$())));
  var f = ((v$3, ref$3) => {
    var values$proxy1 = vl.h8.bl(v$3);
    var baseOffset$proxy1 = (ref$3.off | 0);
    var nestedValues = values$proxy1.j(0);
    var value = nestedValues.j(0);
    ref$3.dv.setFloat32(baseOffset$proxy1, Math.fround(value), true);
    var tailOffset = ((4 + baseOffset$proxy1) | 0);
    var value$2 = nestedValues.j(1);
    ref$3.dv.setFloat32(tailOffset, Math.fround(value$2), true);
    var tailOffset$2 = ((4 + tailOffset) | 0);
    var value$3 = nestedValues.j(2);
    ref$3.dv.setFloat32(tailOffset$2, Math.fround(value$3), true);
    var tailOffset$4 = ((12 + baseOffset$proxy1) | 0);
    var nestedValues$2 = values$proxy1.j(1);
    var value$4 = nestedValues$2.j(0);
    ref$3.dv.setFloat32(tailOffset$4, Math.fround(value$4), true);
    var tailOffset$5 = ((4 + tailOffset$4) | 0);
    var value$5 = nestedValues$2.j(1);
    ref$3.dv.setFloat32(tailOffset$5, Math.fround(value$5), true);
  });
  var \u03b4proxy2 = $m_Ltrivalibs_graphics_geometry_buffers$package$();
  var vertexCount = 0;
  var hasQuads = false;
  var fi = 0;
  while ((fi < (mesh$proxy1.U.length | 0))) {
    var n = (mesh$proxy1.U[fi].length | 0);
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
    while ((fi < (mesh$proxy1.U.length | 0))) {
      var arr = mesh$proxy1.U[fi];
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
    while ((fi < (mesh$proxy1.U.length | 0))) {
      var arr$2 = mesh$proxy1.U[fi];
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
    var $x_1 = new $c_Ltrivalibs_graphics_geometry_BufferedGeometry(verts, \u03b4proxy2.j0(idxBuf, vertexCount));
  }
  return p$1.iX($x_1, (void 0), (void 0), (void 0));
}
function $p_Lsketches_rooms_canvases_Canvases$package$__texSize$1__D__D__T2($thiz, w, h) {
  return new $c_T2($doubleToInt((48.0 * w)), $doubleToInt((48.0 * h)));
}
function $p_Lsketches_rooms_canvases_Canvases$package$__roomTex$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_Form__T2__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T__Ltrivalibs_graphics_painter_Panel($thiz, p$2, noiseShade$1, f, size, tint, haloCount, haloStrength, format) {
  var Bindable_this = p$2.fT(f, noiseShade$1, "none", (void 0));
  var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("tint", tint);
  var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("haloCount", haloCount);
  var e3$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("haloStrength", haloStrength);
  var e4$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("shadowStrength", 0.0);
  var e5$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("shadowRect", new $c_Ltrivalibs_graphics_math_cpu_Vec4(0.0, 0.0, 0.0, 0.0));
  var e6$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("shadowFade", new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.01, 0.01));
  var \u03b4scrutinee118 = e1$proxy1.p;
  var idx = (Bindable_this.A.B.tint | 0);
  if (((idx < (Bindable_this.f.length | 0)) && (Bindable_this.f[idx] !== null))) {
    var BufferBinding_this = Bindable_this.f[idx];
    BufferBinding_this.v.r(BufferBinding_this.g, \u03b4scrutinee118);
    var $x_2 = BufferBinding_this.u.queue;
    var $x_1 = BufferBinding_this.s;
    var s$proxy2 = BufferBinding_this.g;
    $x_2.writeBuffer($x_1, 0.0, s$proxy2.dv.buffer);
  } else {
    var uv = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$();
    var device$proxy1 = Bindable_this.aq.e;
    var buffer = new ArrayBuffer(16);
    var arr$proxy4 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
    var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy4.dv, 0), device$proxy1, uv);
    b.v.r(b.g, \u03b4scrutinee118);
    var $x_4 = b.u.queue;
    var $x_3 = b.s;
    var s$proxy3 = b.g;
    $x_4.writeBuffer($x_3, 0.0, s$proxy3.dv.buffer);
    while (((Bindable_this.f.length | 0) <= idx)) {
      Bindable_this.f.push(null);
    }
    Bindable_this.f[idx] = b;
  }
  var \u03b4scrutinee129 = (+e2$proxy1.p);
  var idx$2 = (Bindable_this.A.B.haloCount | 0);
  if (((idx$2 < (Bindable_this.f.length | 0)) && (Bindable_this.f[idx$2] !== null))) {
    var BufferBinding_this$5 = Bindable_this.f[idx$2];
    BufferBinding_this$5.v.r(BufferBinding_this$5.g, \u03b4scrutinee129);
    var $x_6 = BufferBinding_this$5.u.queue;
    var $x_5 = BufferBinding_this$5.s;
    var s$proxy4 = BufferBinding_this$5.g;
    $x_6.writeBuffer($x_5, 0.0, s$proxy4.dv.buffer);
  } else {
    var uv$2 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var device$proxy2 = Bindable_this.aq.e;
    var buffer$2 = new ArrayBuffer(4);
    var arr$proxy5 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
    var b$2 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy5.dv, 0), device$proxy2, uv$2);
    b$2.v.r(b$2.g, \u03b4scrutinee129);
    var $x_8 = b$2.u.queue;
    var $x_7 = b$2.s;
    var s$proxy5 = b$2.g;
    $x_8.writeBuffer($x_7, 0.0, s$proxy5.dv.buffer);
    while (((Bindable_this.f.length | 0) <= idx$2)) {
      Bindable_this.f.push(null);
    }
    Bindable_this.f[idx$2] = b$2;
  }
  var \u03b4scrutinee146 = (+e3$proxy1.p);
  var idx$3 = (Bindable_this.A.B.haloStrength | 0);
  if (((idx$3 < (Bindable_this.f.length | 0)) && (Bindable_this.f[idx$3] !== null))) {
    var BufferBinding_this$9 = Bindable_this.f[idx$3];
    BufferBinding_this$9.v.r(BufferBinding_this$9.g, \u03b4scrutinee146);
    var $x_10 = BufferBinding_this$9.u.queue;
    var $x_9 = BufferBinding_this$9.s;
    var s$proxy6 = BufferBinding_this$9.g;
    $x_10.writeBuffer($x_9, 0.0, s$proxy6.dv.buffer);
  } else {
    var uv$3 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var device$proxy3 = Bindable_this.aq.e;
    var buffer$3 = new ArrayBuffer(4);
    var arr$proxy6 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$3), 1);
    var b$3 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy6.dv, 0), device$proxy3, uv$3);
    b$3.v.r(b$3.g, \u03b4scrutinee146);
    var $x_12 = b$3.u.queue;
    var $x_11 = b$3.s;
    var s$proxy7 = b$3.g;
    $x_12.writeBuffer($x_11, 0.0, s$proxy7.dv.buffer);
    while (((Bindable_this.f.length | 0) <= idx$3)) {
      Bindable_this.f.push(null);
    }
    Bindable_this.f[idx$3] = b$3;
  }
  var \u03b4scrutinee167 = (+e4$proxy1.p);
  var idx$4 = (Bindable_this.A.B.shadowStrength | 0);
  if (((idx$4 < (Bindable_this.f.length | 0)) && (Bindable_this.f[idx$4] !== null))) {
    var BufferBinding_this$13 = Bindable_this.f[idx$4];
    BufferBinding_this$13.v.r(BufferBinding_this$13.g, \u03b4scrutinee167);
    var $x_14 = BufferBinding_this$13.u.queue;
    var $x_13 = BufferBinding_this$13.s;
    var s$proxy8 = BufferBinding_this$13.g;
    $x_14.writeBuffer($x_13, 0.0, s$proxy8.dv.buffer);
  } else {
    var uv$4 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var device$proxy4 = Bindable_this.aq.e;
    var buffer$4 = new ArrayBuffer(4);
    var arr$proxy7 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$4), 1);
    var b$4 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy7.dv, 0), device$proxy4, uv$4);
    b$4.v.r(b$4.g, \u03b4scrutinee167);
    var $x_16 = b$4.u.queue;
    var $x_15 = b$4.s;
    var s$proxy9 = b$4.g;
    $x_16.writeBuffer($x_15, 0.0, s$proxy9.dv.buffer);
    while (((Bindable_this.f.length | 0) <= idx$4)) {
      Bindable_this.f.push(null);
    }
    Bindable_this.f[idx$4] = b$4;
  }
  var \u03b4scrutinee192 = e5$proxy1.p;
  var idx$5 = (Bindable_this.A.B.shadowRect | 0);
  if (((idx$5 < (Bindable_this.f.length | 0)) && (Bindable_this.f[idx$5] !== null))) {
    var BufferBinding_this$17 = Bindable_this.f[idx$5];
    BufferBinding_this$17.v.r(BufferBinding_this$17.g, \u03b4scrutinee192);
    var $x_18 = BufferBinding_this$17.u.queue;
    var $x_17 = BufferBinding_this$17.s;
    var s$proxy10 = BufferBinding_this$17.g;
    $x_18.writeBuffer($x_17, 0.0, s$proxy10.dv.buffer);
  } else {
    var uv$5 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$();
    var device$proxy5 = Bindable_this.aq.e;
    var buffer$5 = new ArrayBuffer(16);
    var arr$proxy8 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$5), 1);
    var b$5 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy8.dv, 0), device$proxy5, uv$5);
    b$5.v.r(b$5.g, \u03b4scrutinee192);
    var $x_20 = b$5.u.queue;
    var $x_19 = b$5.s;
    var s$proxy11 = b$5.g;
    $x_20.writeBuffer($x_19, 0.0, s$proxy11.dv.buffer);
    while (((Bindable_this.f.length | 0) <= idx$5)) {
      Bindable_this.f.push(null);
    }
    Bindable_this.f[idx$5] = b$5;
  }
  var \u03b4scrutinee219 = e6$proxy1.p;
  var idx$6 = (Bindable_this.A.B.shadowFade | 0);
  if (((idx$6 < (Bindable_this.f.length | 0)) && (Bindable_this.f[idx$6] !== null))) {
    var BufferBinding_this$21 = Bindable_this.f[idx$6];
    BufferBinding_this$21.v.r(BufferBinding_this$21.g, \u03b4scrutinee219);
    var $x_22 = BufferBinding_this$21.u.queue;
    var $x_21 = BufferBinding_this$21.s;
    var s$proxy12 = BufferBinding_this$21.g;
    $x_22.writeBuffer($x_21, 0.0, s$proxy12.dv.buffer);
  } else {
    var uv$6 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$();
    var device$proxy6 = Bindable_this.aq.e;
    var buffer$6 = new ArrayBuffer(8);
    var arr$proxy9 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$6), 1);
    var b$6 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy9.dv, 0), device$proxy6, uv$6);
    b$6.v.r(b$6.g, \u03b4scrutinee219);
    var $x_24 = b$6.u.queue;
    var $x_23 = b$6.s;
    var s$proxy13 = b$6.g;
    $x_24.writeBuffer($x_23, 0.0, s$proxy13.dv.buffer);
    while (((Bindable_this.f.length | 0) <= idx$6)) {
      Bindable_this.f.push(null);
    }
    Bindable_this.f[idx$6] = b$6;
  }
  return p$2.b8((size.a2 | 0), (size.ag | 0), (void 0), (void 0), (void 0), (void 0), true, format, (void 0), Bindable_this, (void 0), (void 0), (void 0));
}
function $p_Lsketches_rooms_canvases_Canvases$package$__wallTex$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_Form__D__D__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_math_cpu_Vec4__Ltrivalibs_graphics_math_cpu_Vec2__D__Ltrivalibs_graphics_painter_Panel($thiz, p$3, noiseShade$2, f, w, h, tint, shadowRect, shadowFade, shadowStrength) {
  var size = $p_Lsketches_rooms_canvases_Canvases$package$__texSize$1__D__D__T2($thiz, w, h);
  var Bindable_this = p$3.fT(f, noiseShade$2, "none", (void 0));
  var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("tint", tint);
  var e2$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("haloCount", 1.0);
  var e3$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("haloStrength", 0.0);
  var e4$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("shadowStrength", shadowStrength);
  var e5$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("shadowRect", shadowRect);
  var e6$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("shadowFade", shadowFade);
  var \u03b4scrutinee238 = e1$proxy2.p;
  var idx = (Bindable_this.A.B.tint | 0);
  if (((idx < (Bindable_this.f.length | 0)) && (Bindable_this.f[idx] !== null))) {
    var BufferBinding_this = Bindable_this.f[idx];
    BufferBinding_this.v.r(BufferBinding_this.g, \u03b4scrutinee238);
    var $x_2 = BufferBinding_this.u.queue;
    var $x_1 = BufferBinding_this.s;
    var s$proxy14 = BufferBinding_this.g;
    $x_2.writeBuffer($x_1, 0.0, s$proxy14.dv.buffer);
  } else {
    var uv = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$();
    var device$proxy7 = Bindable_this.aq.e;
    var buffer = new ArrayBuffer(16);
    var arr$proxy10 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
    var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy10.dv, 0), device$proxy7, uv);
    b.v.r(b.g, \u03b4scrutinee238);
    var $x_4 = b.u.queue;
    var $x_3 = b.s;
    var s$proxy15 = b.g;
    $x_4.writeBuffer($x_3, 0.0, s$proxy15.dv.buffer);
    while (((Bindable_this.f.length | 0) <= idx)) {
      Bindable_this.f.push(null);
    }
    Bindable_this.f[idx] = b;
  }
  var \u03b4scrutinee249 = (+e2$proxy2.p);
  var idx$2 = (Bindable_this.A.B.haloCount | 0);
  if (((idx$2 < (Bindable_this.f.length | 0)) && (Bindable_this.f[idx$2] !== null))) {
    var BufferBinding_this$5 = Bindable_this.f[idx$2];
    BufferBinding_this$5.v.r(BufferBinding_this$5.g, \u03b4scrutinee249);
    var $x_6 = BufferBinding_this$5.u.queue;
    var $x_5 = BufferBinding_this$5.s;
    var s$proxy16 = BufferBinding_this$5.g;
    $x_6.writeBuffer($x_5, 0.0, s$proxy16.dv.buffer);
  } else {
    var uv$2 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var device$proxy8 = Bindable_this.aq.e;
    var buffer$2 = new ArrayBuffer(4);
    var arr$proxy11 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
    var b$2 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy11.dv, 0), device$proxy8, uv$2);
    b$2.v.r(b$2.g, \u03b4scrutinee249);
    var $x_8 = b$2.u.queue;
    var $x_7 = b$2.s;
    var s$proxy17 = b$2.g;
    $x_8.writeBuffer($x_7, 0.0, s$proxy17.dv.buffer);
    while (((Bindable_this.f.length | 0) <= idx$2)) {
      Bindable_this.f.push(null);
    }
    Bindable_this.f[idx$2] = b$2;
  }
  var \u03b4scrutinee266 = (+e3$proxy2.p);
  var idx$3 = (Bindable_this.A.B.haloStrength | 0);
  if (((idx$3 < (Bindable_this.f.length | 0)) && (Bindable_this.f[idx$3] !== null))) {
    var BufferBinding_this$9 = Bindable_this.f[idx$3];
    BufferBinding_this$9.v.r(BufferBinding_this$9.g, \u03b4scrutinee266);
    var $x_10 = BufferBinding_this$9.u.queue;
    var $x_9 = BufferBinding_this$9.s;
    var s$proxy18 = BufferBinding_this$9.g;
    $x_10.writeBuffer($x_9, 0.0, s$proxy18.dv.buffer);
  } else {
    var uv$3 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var device$proxy9 = Bindable_this.aq.e;
    var buffer$3 = new ArrayBuffer(4);
    var arr$proxy12 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$3), 1);
    var b$3 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy12.dv, 0), device$proxy9, uv$3);
    b$3.v.r(b$3.g, \u03b4scrutinee266);
    var $x_12 = b$3.u.queue;
    var $x_11 = b$3.s;
    var s$proxy19 = b$3.g;
    $x_12.writeBuffer($x_11, 0.0, s$proxy19.dv.buffer);
    while (((Bindable_this.f.length | 0) <= idx$3)) {
      Bindable_this.f.push(null);
    }
    Bindable_this.f[idx$3] = b$3;
  }
  var \u03b4scrutinee287 = (+e4$proxy2.p);
  var idx$4 = (Bindable_this.A.B.shadowStrength | 0);
  if (((idx$4 < (Bindable_this.f.length | 0)) && (Bindable_this.f[idx$4] !== null))) {
    var BufferBinding_this$13 = Bindable_this.f[idx$4];
    BufferBinding_this$13.v.r(BufferBinding_this$13.g, \u03b4scrutinee287);
    var $x_14 = BufferBinding_this$13.u.queue;
    var $x_13 = BufferBinding_this$13.s;
    var s$proxy20 = BufferBinding_this$13.g;
    $x_14.writeBuffer($x_13, 0.0, s$proxy20.dv.buffer);
  } else {
    var uv$4 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var device$proxy10 = Bindable_this.aq.e;
    var buffer$4 = new ArrayBuffer(4);
    var arr$proxy13 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$4), 1);
    var b$4 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy13.dv, 0), device$proxy10, uv$4);
    b$4.v.r(b$4.g, \u03b4scrutinee287);
    var $x_16 = b$4.u.queue;
    var $x_15 = b$4.s;
    var s$proxy21 = b$4.g;
    $x_16.writeBuffer($x_15, 0.0, s$proxy21.dv.buffer);
    while (((Bindable_this.f.length | 0) <= idx$4)) {
      Bindable_this.f.push(null);
    }
    Bindable_this.f[idx$4] = b$4;
  }
  var \u03b4scrutinee312 = e5$proxy2.p;
  var idx$5 = (Bindable_this.A.B.shadowRect | 0);
  if (((idx$5 < (Bindable_this.f.length | 0)) && (Bindable_this.f[idx$5] !== null))) {
    var BufferBinding_this$17 = Bindable_this.f[idx$5];
    BufferBinding_this$17.v.r(BufferBinding_this$17.g, \u03b4scrutinee312);
    var $x_18 = BufferBinding_this$17.u.queue;
    var $x_17 = BufferBinding_this$17.s;
    var s$proxy22 = BufferBinding_this$17.g;
    $x_18.writeBuffer($x_17, 0.0, s$proxy22.dv.buffer);
  } else {
    var uv$5 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$();
    var device$proxy11 = Bindable_this.aq.e;
    var buffer$5 = new ArrayBuffer(16);
    var arr$proxy14 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$5), 1);
    var b$5 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy14.dv, 0), device$proxy11, uv$5);
    b$5.v.r(b$5.g, \u03b4scrutinee312);
    var $x_20 = b$5.u.queue;
    var $x_19 = b$5.s;
    var s$proxy23 = b$5.g;
    $x_20.writeBuffer($x_19, 0.0, s$proxy23.dv.buffer);
    while (((Bindable_this.f.length | 0) <= idx$5)) {
      Bindable_this.f.push(null);
    }
    Bindable_this.f[idx$5] = b$5;
  }
  var \u03b4scrutinee339 = e6$proxy2.p;
  var idx$6 = (Bindable_this.A.B.shadowFade | 0);
  if (((idx$6 < (Bindable_this.f.length | 0)) && (Bindable_this.f[idx$6] !== null))) {
    var BufferBinding_this$21 = Bindable_this.f[idx$6];
    BufferBinding_this$21.v.r(BufferBinding_this$21.g, \u03b4scrutinee339);
    var $x_22 = BufferBinding_this$21.u.queue;
    var $x_21 = BufferBinding_this$21.s;
    var s$proxy24 = BufferBinding_this$21.g;
    $x_22.writeBuffer($x_21, 0.0, s$proxy24.dv.buffer);
  } else {
    var uv$6 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$();
    var device$proxy12 = Bindable_this.aq.e;
    var buffer$6 = new ArrayBuffer(8);
    var arr$proxy15 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$6), 1);
    var b$6 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy15.dv, 0), device$proxy12, uv$6);
    b$6.v.r(b$6.g, \u03b4scrutinee339);
    var $x_24 = b$6.u.queue;
    var $x_23 = b$6.s;
    var s$proxy25 = b$6.g;
    $x_24.writeBuffer($x_23, 0.0, s$proxy25.dv.buffer);
    while (((Bindable_this.f.length | 0) <= idx$6)) {
      Bindable_this.f.push(null);
    }
    Bindable_this.f[idx$6] = b$6;
  }
  return p$3.b8((size.a2 | 0), (size.ag | 0), (void 0), (void 0), (void 0), (void 0), true, "rgba8unorm", (void 0), Bindable_this, (void 0), (void 0), (void 0));
}
function $p_Lsketches_rooms_canvases_Canvases$package$__lineMask$1__D__D__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr($thiz, GridN$1, HalfWidth$1, t) {
  var f = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().lu($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ah(t, GridN$1));
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().fa($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().lR(f, $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aU().aV((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aF(1.0)) + " - ") + f.c) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().t().h(HalfWidth$1), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().t().h(0.0));
}
function $p_Lsketches_rooms_canvases_Canvases$package$__patternPanel$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_painter_Panel($thiz, p$4, imgShade$1, c) {
  var Bindable_this = p$4.bk(imgShade$1, (void 0), (void 0), (void 0));
  var e1$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("color", c);
  var \u03b4scrutinee407 = e1$proxy3.p;
  var idx = (Bindable_this.E.B.color | 0);
  if (((idx < (Bindable_this.o.length | 0)) && (Bindable_this.o[idx] !== null))) {
    var BufferBinding_this = Bindable_this.o[idx];
    BufferBinding_this.v.r(BufferBinding_this.g, \u03b4scrutinee407);
    var $x_2 = BufferBinding_this.u.queue;
    var $x_1 = BufferBinding_this.s;
    var s$proxy26 = BufferBinding_this.g;
    $x_2.writeBuffer($x_1, 0.0, s$proxy26.dv.buffer);
  } else {
    var uv = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$();
    var device$proxy13 = Bindable_this.ix.e;
    var buffer = new ArrayBuffer(16);
    var arr$proxy16 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
    var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy16.dv, 0), device$proxy13, uv);
    b.v.r(b.g, \u03b4scrutinee407);
    var $x_4 = b.u.queue;
    var $x_3 = b.s;
    var s$proxy27 = b.g;
    $x_4.writeBuffer($x_3, 0.0, s$proxy27.dv.buffer);
    while (((Bindable_this.o.length | 0) <= idx)) {
      Bindable_this.o.push(null);
    }
    Bindable_this.o[idx] = b;
  }
  return p$4.b8(256, 256, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), Bindable_this, (void 0));
}
function $p_Lsketches_rooms_canvases_Canvases$package$__mkWall$1__Lsketches_rooms_canvases_Paintings__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__Ltrivalibs_graphics_math_cpu_Vec3__Lsketches_rooms_canvases_Paintings$Wall($thiz, paintings$1, WallTint$1, p$5, noiseShade$3, center, w, h, rotY, normal) {
  return new $c_Lsketches_rooms_canvases_Paintings$Wall(paintings$1, center, w, h, rotY, normal, new $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(((f$3, rect$3, fade$3, strength$3) => $p_Lsketches_rooms_canvases_Canvases$package$__wallTex$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_Form__D__D__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_math_cpu_Vec4__Ltrivalibs_graphics_math_cpu_Vec2__D__Ltrivalibs_graphics_painter_Panel($thiz, p$5, noiseShade$3, f$3, w, h, WallTint$1, rect$3, fade$3, (+strength$3)))));
}
/** @constructor */
function $c_Lsketches_rooms_canvases_Canvases$package$() {
  this.m8 = 0.0;
  this.m7 = 0.0;
  this.m6 = 0.0;
  this.m9 = 0.0;
  this.m8 = 6.5;
  this.m7 = 5.5;
  this.m6 = 10.0;
  this.m9 = 48.0;
}
$p = $c_Lsketches_rooms_canvases_Canvases$package$.prototype = new $h_O();
$p.constructor = $c_Lsketches_rooms_canvases_Canvases$package$;
/** @constructor */
function $h_Lsketches_rooms_canvases_Canvases$package$() {
}
$h_Lsketches_rooms_canvases_Canvases$package$.prototype = $p;
$p.og = (function() {
  $m_Ltrivalibs_graphics_painter_Painter$().na(document.getElementById("canvas"), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((p$6) => {
    var box = $m_Ltrivalibs_graphics_geometry_Box$().mn(new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 2.75, 0.0), 6.5, 5.5, 10.0);
    var floorForm = $p_Lsketches_rooms_canvases_Canvases$package$__form$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$6, [box.mw(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((c$2, uvw$2) => $p_Lsketches_rooms_canvases_Canvases$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2(this, c$2, uvw$2.J, uvw$2.K))))]);
    var ceilForm = $p_Lsketches_rooms_canvases_Canvases$package$__form$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$6, [box.oA(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((c$2$1, uvw$2$1) => $p_Lsketches_rooms_canvases_Canvases$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2(this, c$2$1, uvw$2$1.J, uvw$2$1.K))))]);
    var build$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3) => {
      var body$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2) => {
        var uv = ctx$2.b6.n("uv");
        var $x_9 = $m_sjsr_package$();
        var AssignTarget_this = ctx$2.aO.a1("worldPos");
        var value$proxy1 = ctx$2.b6.n("position");
        var $x_8 = AssignTarget_this.R;
        var $x_7 = value$proxy1.c;
        var $x_6 = ctx$2.aO.a1("uv").R;
        var $x_5 = uv.c;
        var AssignTarget_this$3 = ctx$2.aO.go;
        var $x_4 = $m_Ltrivalibs_graphics_math_gpu_vec4$();
        var $x_3 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$();
        var $x_2 = $m_Ltrivalibs_graphics_math_gpu_vec2$();
        var $x_1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a6().G(uv);
        var e$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a6().C(uv);
        var value$proxy2 = $x_4.aR($x_3.mW($x_2.aS($x_1, $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aU().aV((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aF(1.0)) + " - ") + e$proxy1.c) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a6()), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().t().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().t().h(1.0));
        return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_9.i(new ($d_T.r().C)([(((("  " + $x_8) + " = ") + $x_7) + ";"), (((("  " + $x_6) + " = ") + $x_5) + ";"), (((("  " + AssignTarget_this$3.R) + " = ") + value$proxy2.c) + ";")]))), "", "\n", "");
      }));
      var d = $m_sjs_js_special_package$().l(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_T2.r().C)([]))));
      var ctx = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().k;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().k = reg;
      try {
        var $x_10 = body$proxy1.h(ctx);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().k = prev;
      }
      program$3.b5 = $x_10;
      $m_sjs_js_ArrayOps$().bj(reg.Y, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$5) => ((data$3) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$5, data$3);
      }))(program$3)));
      var body$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$1) => {
        var n = new $c_Ltrivalibs_graphics_math_gpu_VarExpr("n");
        var col = new $c_Ltrivalibs_graphics_math_gpu_VarExpr("col");
        var s = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "s");
        var band = new $c_Ltrivalibs_graphics_math_gpu_VarExpr("band");
        var lf = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "lf");
        var halo = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "halo");
        var sm = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "sm");
        var wp = ctx$2$1.aA.n("worldPos");
        var uv$1 = ctx$2$1.aA.n("uv");
        var $x_25 = $m_sjsr_package$();
        var $x_24 = n.T($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().mX($m_Lsketchlib_shaders_Noise$().mT($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().lg($m_Ltrivalibs_graphics_math_gpu_vec3$().aR($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aP($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aj().G(wp), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ah($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aj().C(wp), 0.2)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ah($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aj().C(wp), 0.3), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aP($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ah($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aj().a8(wp), 0.8), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ah($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aj().C(wp), 0.2))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aj(), 0.15), 3, 3.6, 0.12, $m_Ltrivalibs_graphics_math_gpu_vec3$().bi($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().n2().h(140)))));
        var $x_23 = n.T($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().nT($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().t().h(0.68), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().t().h(1.0), n));
        var $x_22 = col.T($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().gU(ctx$2$1.S.n("tint"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aj(), n));
        var $x_21 = s.T($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().lu($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().iR($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aQ($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a6().G(uv$1), ctx$2$1.S.n("haloCount")), 0.5)));
        var $x_20 = band.T($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().fa($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().lj(s), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().t().h(0.05), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().t().h(0.02)));
        var $x_19 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
        var $x_18 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().fa($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a6().C(uv$1), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().t().h(0.05), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().t().h(0.15));
        var $x_17 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
        var e$proxy2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a6().C(uv$1);
        var $x_16 = lf.T($x_19.aQ($x_18, $x_17.fa($m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aU().aV((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aF(1.0)) + " - ") + e$proxy2.c) + ")")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().t().h(0.05), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().t().h(0.15))));
        var $x_15 = band.lh($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aQ(ctx$2$1.S.n("haloStrength"), lf));
        var $x_14 = halo.T($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().mS(band, $m_Ltrivalibs_graphics_math_gpu_vec3$().aR($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().t().h(8.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().t().h(7.6), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().t().h(6.8))));
        var $x_13 = col.mh(halo);
        var $x_12 = sm.T($m_Lsketches_rooms_canvases_Wall$package$().oq(uv$1, ctx$2$1.S.n("shadowRect"), ctx$2$1.S.n("shadowFade")));
        var e$proxy3 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aQ(ctx$2$1.S.n("shadowStrength"), sm);
        var $x_11 = col.lh($m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aU().aV((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aF(1.0)) + " - ") + e$proxy3.c) + ")")));
        var AssignTarget_this$1 = ctx$2$1.as.a1("color");
        var value$proxy3 = $m_Ltrivalibs_graphics_math_gpu_vec4$().aS(col, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().t().h(1.0));
        return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_25.i(new ($d_T.r().C)([$x_24, $x_23, $x_22, $x_21, $x_20, $x_16, $x_15, $x_14, $x_13, $x_12, $x_11, (((("  " + AssignTarget_this$1.R) + " = ") + value$proxy3.c) + ";")]))), "", "\n", "");
      }));
      var d$2 = $m_sjs_js_special_package$().l(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_T2.r().C)([]))));
      var ctx$2$2 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().k;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().k = reg$2;
      try {
        var $x_26 = body$proxy3.h(ctx$2$2);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().k = prev$2;
      }
      program$3.b4 = $x_26;
      $m_sjs_js_ArrayOps$().bj(reg$2.Y, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$6) => ((data$3$1) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$6, data$3$1);
      }))(program$3)));
    }));
    var program = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy1.h(program);
    var b$1 = program.b5;
    var b$2 = program.b4;
    var helperFns$proxy1 = program.at();
    var id = p$6.w;
    p$6.w = ((1 + p$6.w) | 0);
    var names = $m_sjs_js_ArrayOpsCommon$().a(["tint"], $m_sjs_js_ArrayOpsCommon$().a(["haloCount"], $m_sjs_js_ArrayOpsCommon$().a(["haloStrength"], $m_sjs_js_ArrayOpsCommon$().a(["shadowStrength"], $m_sjs_js_ArrayOpsCommon$().a(["shadowRect"], $m_sjs_js_ArrayOpsCommon$().a(["shadowFade"], []))))));
    var dict = $m_sjs_js_special_package$().l(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_T2.r().C)([]))));
    var i = 0;
    while ((i < (names.length | 0))) {
      dict[names[i]] = i;
      i = ((1 + i) | 0);
    }
    var names$2 = [];
    var dict$2 = $m_sjs_js_special_package$().l(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_T2.r().C)([]))));
    var i$2 = 0;
    while ((i$2 < (names$2.length | 0))) {
      dict$2[names$2[i$2]] = i$2;
      i$2 = ((1 + i$2) | 0);
    }
    var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$1, b$2, helperFns$proxy1);
    var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], [])), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["worldPos"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], [])), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["tint"], $m_sjs_js_ArrayOpsCommon$().a(["haloCount"], $m_sjs_js_ArrayOpsCommon$().a(["haloStrength"], $m_sjs_js_ArrayOpsCommon$().a(["shadowStrength"], $m_sjs_js_ArrayOpsCommon$().a(["shadowRect"], $m_sjs_js_ArrayOpsCommon$().a(["shadowFade"], [])))))), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], [])))))));
    var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.ad, sd.ac, fragBuiltinParams);
    var args$proxy1 = $m_sr_ScalaRunTime$().av(new ($d_sjs_js_Any.r().C)([baseWgsl]));
    console.log(...$m_sjsr_Compat$().au(args$proxy1));
    var module = p$6.e.createShaderModule($m_sjs_js_special_package$().l(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_T2.r().C)([new $c_T2("code", baseWgsl)])))));
    var formats = $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], []));
    var sizes = $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([8], []));
    var offsets = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes);
    var stride = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes);
    var attributes = [];
    var i$3 = 0;
    while ((i$3 < (formats.length | 0))) {
      attributes.push($m_sjs_js_special_package$().l(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_T2.r().C)([new $c_T2("shaderLocation", i$3), new $c_T2("offset", (offsets[i$3] | 0)), new $c_T2("format", formats[i$3])])))));
      i$3 = ((1 + i$3) | 0);
    }
    var vbl = $m_sjs_js_special_package$().l(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_T2.r().C)([new $c_T2("arrayStride", stride), new $c_T2("attributes", attributes)]))));
    var descriptors = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().l(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 3), new $c_T2("buffer", $m_sjs_js_special_package$().l(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().l(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 3), new $c_T2("buffer", $m_sjs_js_special_package$().l(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().l(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_T2.r().C)([new $c_T2("binding", 2), new $c_T2("visibility", 3), new $c_T2("buffer", $m_sjs_js_special_package$().l(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().l(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_T2.r().C)([new $c_T2("binding", 3), new $c_T2("visibility", 3), new $c_T2("buffer", $m_sjs_js_special_package$().l(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().l(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_T2.r().C)([new $c_T2("binding", 4), new $c_T2("visibility", 3), new $c_T2("buffer", $m_sjs_js_special_package$().l(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().l(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_T2.r().C)([new $c_T2("binding", 5), new $c_T2("visibility", 3), new $c_T2("buffer", $m_sjs_js_special_package$().l(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], []))))))], []);
    var result = [];
    $m_sjs_js_ArrayOps$().bj(descriptors, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$1) => ((entries$2) => (result.push(Painter_this$1.e.createBindGroupLayout($m_sjs_js_special_package$().l(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_T2.r().C)([new $c_T2("entries", entries$2)])))))) | 0)))(p$6)));
    var x1 = new $c_T2(result, $m_Ltrivalibs_graphics_shader_layouts$().N(p$6.e, result));
    var \u03b42$ = x1;
    var bgls$2 = \u03b42$.a2;
    var pl = $m_Ltrivalibs_graphics_shader_layouts$().N(p$6.e, bgls$2);
    var noiseShade = new $c_Ltrivalibs_graphics_painter_Shade(id, module, vbl, bgls$2[0], null, pl, false, dict, dict$2);
    var floorTex = $p_Lsketches_rooms_canvases_Canvases$package$__roomTex$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_Form__T2__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T__Ltrivalibs_graphics_painter_Panel(this, p$6, noiseShade, floorForm, $p_Lsketches_rooms_canvases_Canvases$package$__texSize$1__D__D__T2(this, 6.5, 10.0), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.8, 0.78, 0.75), 1.0, 0.0, "rgba8unorm");
    var ceilTex = $p_Lsketches_rooms_canvases_Canvases$package$__roomTex$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_Form__T2__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T__Ltrivalibs_graphics_painter_Panel(this, p$6, noiseShade, ceilForm, $p_Lsketches_rooms_canvases_Canvases$package$__texSize$1__D__D__T2(this, 6.5, 10.0), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.92, 0.92, 0.9), 6.0, 1.0, "rgba16float");
    var paintings = new $c_Lsketches_rooms_canvases_Paintings(p$6);
    var WallTint = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.96, 0.96, 0.95);
    var build$proxy2 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$1) => {
      var body$proxy5 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$3) => {
        var uv$2 = ctx$2$3.aA.n("uv");
        var m = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().lQ($p_Lsketches_rooms_canvases_Canvases$package$__lineMask$1__D__D__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr(this, 6.0, 0.016, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aP($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a6().G(uv$2), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a6().C(uv$2))), $p_Lsketches_rooms_canvases_Canvases$package$__lineMask$1__D__D__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr(this, 6.0, 0.016, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().gy($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a6().G(uv$2), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a6().C(uv$2))));
        var $x_27 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().f8();
        var AssignTarget_this$4 = ctx$2$3.as.a1("color");
        var value$proxy6 = $m_Ltrivalibs_graphics_math_gpu_vec4$().aS($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().gU(ctx$2$3.S.n("color"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aj(), $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aU().aV((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aF(1.0)) + " - ") + m.c) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().t().h(1.0));
        return $x_27.h((((("  " + AssignTarget_this$4.R) + " = ") + value$proxy6.c) + ";"));
      }));
      var d$1 = $m_sjs_js_special_package$().l(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_T2.r().C)([]))));
      var ctx$1 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$1), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().k;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().k = reg$1;
      try {
        var $x_28 = body$proxy5.h(ctx$1);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().k = prev$1;
      }
      program$3$1.a5 = $x_28;
      $m_sjs_js_ArrayOps$().bj(reg$1.Y, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$2) => ((data$3$2) => {
        $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$2, data$3$2);
      }))(program$3$1)));
    }));
    var program$2 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
    build$proxy2.h(program$2);
    var b$3 = program$2.a5;
    var helperFns$proxy2 = program$2.at();
    var id$2 = p$6.w;
    p$6.w = ((1 + p$6.w) | 0);
    var names$4 = $m_sjs_js_ArrayOpsCommon$().a(["color"], []);
    var dict$3 = $m_sjs_js_special_package$().l(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_T2.r().C)([]))));
    var i$4 = 0;
    while ((i$4 < (names$4.length | 0))) {
      dict$3[names$4[i$4]] = i$4;
      i$4 = ((1 + i$4) | 0);
    }
    var names$5 = [];
    var dict$4 = $m_sjs_js_special_package$().l(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_T2.r().C)([]))));
    var i$5 = 0;
    while ((i$5 < (names$5.length | 0))) {
      dict$4[names$5[i$5]] = i$5;
      i$5 = ((1 + i$5) | 0);
    }
    var sd$2 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$3, helperFns$proxy2);
    var vertexInputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
    var vertexOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$2 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$()).a4.I()], []));
    var fragBuiltinParams$2 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$2 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$2, vertexInputStruct$2, vertexOutputStruct$2, fragmentOutputStruct$2, groupDecls$2, sd$2.ad, sd$2.ac, fragBuiltinParams$2);
    var args$proxy2 = $m_sr_ScalaRunTime$().av(new ($d_sjs_js_Any.r().C)([baseWgsl$2]));
    console.log(...$m_sjsr_Compat$().au(args$proxy2));
    var module$2 = p$6.e.createShaderModule($m_sjs_js_special_package$().l(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_T2.r().C)([new $c_T2("code", baseWgsl$2)])))));
    var descriptors$2 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().l(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().l(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], [])], []);
    var result$2 = [];
    $m_sjs_js_ArrayOps$().bj(descriptors$2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$2) => ((entries$2$1) => (result$2.push(Painter_this$2.e.createBindGroupLayout($m_sjs_js_special_package$().l(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_T2.r().C)([new $c_T2("entries", entries$2$1)])))))) | 0)))(p$6)));
    var x4 = new $c_T2(result$2, $m_Ltrivalibs_graphics_shader_layouts$().N(p$6.e, result$2));
    var \u03b46$ = x4;
    var bgls$4 = \u03b46$.a2;
    var pl$2 = $m_Ltrivalibs_graphics_shader_layouts$().N(p$6.e, bgls$4);
    var imgShade = new $c_Ltrivalibs_graphics_painter_Shade(id$2, module$2, null, bgls$4[0], null, pl$2, false, dict$3, dict$4);
    var wallFront = $p_Lsketches_rooms_canvases_Canvases$package$__mkWall$1__Lsketches_rooms_canvases_Paintings__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__Ltrivalibs_graphics_math_cpu_Vec3__Lsketches_rooms_canvases_Paintings$Wall(this, paintings, WallTint, p$6, noiseShade, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 2.75, 5.0), 6.5, 5.5, 3.141592653589793, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, (-1.0)));
    var wallBack = $p_Lsketches_rooms_canvases_Canvases$package$__mkWall$1__Lsketches_rooms_canvases_Paintings__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__Ltrivalibs_graphics_math_cpu_Vec3__Lsketches_rooms_canvases_Paintings$Wall(this, paintings, WallTint, p$6, noiseShade, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 2.75, (-5.0)), 6.5, 5.5, 0.0, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0));
    var wallLeft = $p_Lsketches_rooms_canvases_Canvases$package$__mkWall$1__Lsketches_rooms_canvases_Paintings__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__Ltrivalibs_graphics_math_cpu_Vec3__Lsketches_rooms_canvases_Paintings$Wall(this, paintings, WallTint, p$6, noiseShade, new $c_Ltrivalibs_graphics_math_cpu_Vec3((-3.25), 2.75, 0.0), 10.0, 5.5, 1.5707963267948966, new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0));
    var wallRight = $p_Lsketches_rooms_canvases_Canvases$package$__mkWall$1__Lsketches_rooms_canvases_Paintings__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__Ltrivalibs_graphics_math_cpu_Vec3__Lsketches_rooms_canvases_Paintings$Wall(this, paintings, WallTint, p$6, noiseShade, new $c_Ltrivalibs_graphics_math_cpu_Vec3(3.25, 2.75, 0.0), 10.0, 5.5, (-1.5707963267948966), new $c_Ltrivalibs_graphics_math_cpu_Vec3((-1.0), 0.0, 0.0));
    var walls = [wallFront, wallBack, wallLeft, wallRight];
    var palette = [new $c_T3(0.78, 0.3, 0.28), new $c_T3(0.3, 0.45, 0.7), new $c_T3(0.4, 0.62, 0.42), new $c_T3(0.82, 0.7, 0.34)];
    var imagePanels = [];
    var wi = 0;
    while ((wi < (walls.length | 0))) {
      var wall = walls[wi];
      var pw = $m_Ltrivalibs_utils_random_random$package$().lV(0.9, 1.7);
      var ph = $m_Ltrivalibs_utils_random_random$package$().lV(0.7, 1.4);
      var c = palette[wi];
      var img = $p_Lsketches_rooms_canvases_Canvases$package$__patternPanel$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_painter_Panel(this, p$6, imgShade, new $c_Ltrivalibs_graphics_math_cpu_Vec3((+c.aW), (+c.aJ), (+c.aK)));
      imagePanels.push(img);
      wall.n4(new $c_Lsketches_rooms_canvases_PaintingSpec(pw, ph, 0.05, img, 3.0), (0.5 * wall.fA), 1.7);
      wi = ((1 + wi) | 0);
    }
    var texSampler = p$6.j2("linear", "linear", "linear", "clamp-to-edge", (void 0), (void 0));
    var Bindable_this = p$6.fT(ceilForm, paintings.hX, "none", (void 0));
    var e1$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", texSampler);
    var e2$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", ceilTex);
    var \u03b4scrutinee418 = e1$proxy4.p;
    var idx = (Bindable_this.A.B.samp | 0);
    while (((Bindable_this.f.length | 0) <= idx)) {
      Bindable_this.f.push(null);
    }
    Bindable_this.f[idx] = \u03b4scrutinee418;
    var \u03b4scrutinee434 = e2$proxy3.p;
    var idx$2 = (Bindable_this.A.an.tex | 0);
    while (((Bindable_this.W.length | 0) <= idx$2)) {
      Bindable_this.W.push(null);
    }
    Bindable_this.W[idx$2] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee434);
    var aboveGround = [Bindable_this];
    wi = 0;
    while ((wi < (walls.length | 0))) {
      var ss = walls[wi].oj();
      var j = 0;
      while ((j < (ss.length | 0))) {
        aboveGround.push(ss[j]);
        j = ((1 + j) | 0);
      }
      wi = ((1 + wi) | 0);
    }
    var mirror = $m_Lsketchlib_utils_mirror_MirrorReflection$().mp(p$6, aboveGround, "vp", 5.5, null, $m_Ltrivalibs_graphics_geometry_Plane$().kd, 62.0, 6, new $c_T4(0.0, 0.0, 0.0, 0.0));
    var build$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$2) => {
      var body$proxy7 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$4) => {
        var $x_31 = $m_sjsr_package$();
        var AssignTarget_this$5 = ctx$2$4.aO.a1("uv");
        var value$proxy7 = ctx$2$4.b6.n("uv");
        var $x_30 = AssignTarget_this$5.R;
        var $x_29 = value$proxy7.c;
        var AssignTarget_this$2$1 = ctx$2$4.aO.go;
        var value$proxy8 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().hO(ctx$2$4.gn.n("vp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gC(), $m_Ltrivalibs_graphics_math_gpu_vec4$().aS(ctx$2$4.b6.n("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().t().h(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ae(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$());
        return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_31.i(new ($d_T.r().C)([(((("  " + $x_30) + " = ") + $x_29) + ";"), (((("  " + AssignTarget_this$2$1.R) + " = ") + value$proxy8.c) + ";")]))), "", "\n", "");
      }));
      var d$3 = $m_sjs_js_special_package$().l(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_T2.r().C)([]))));
      var ctx$3 = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$3), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$3 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$3 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().k;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().k = reg$3;
      try {
        var $x_32 = body$proxy7.h(ctx$3);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().k = prev$3;
      }
      program$3$2.b5 = $x_32;
      $m_sjs_js_ArrayOps$().bj(reg$3.Y, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$7) => ((data$3$3) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$7, data$3$3);
      }))(program$3$2)));
      var body$proxy9 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$5) => {
        var base = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "base");
        var refl = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "refl");
        var mix = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "mix");
        var falloff = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "falloff");
        var $x_38 = $m_sjsr_package$();
        var $x_37 = base.T($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().hP($m_Ltrivalibs_graphics_math_gpu_expr$package$().aR($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), ctx$2$5.aA.n("uv"), ctx$2$5.S.n("samp"))));
        var $x_36 = refl.T($m_Ltrivalibs_graphics_math_gpu_expr$package$().fS($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "reflTex"), $m_Ltrivalibs_graphics_math_gpu_ivec2$().bi($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fU(ctx$2$5.f7))));
        var $x_35 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
        var e$proxy4 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ae().af(refl);
        var $x_34 = falloff.T($x_35.lQ($m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aU().aV((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aF(1.0)) + " - ") + e$proxy4.c) + ")")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().t().h(0.1)));
        var $x_33 = mix.T($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aQ(ctx$2$5.S.n("reflStrength"), falloff));
        var AssignTarget_this$6 = ctx$2$5.as.a1("color");
        var value$proxy9 = $m_Ltrivalibs_graphics_math_gpu_vec4$().aS($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().lk($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().gU(base, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aj(), $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aU().aV((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aF(1.0)) + " - ") + mix.c) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aj(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().gU($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().hP(refl), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aj(), mix)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().t().h(1.0));
        return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_38.i(new ($d_T.r().C)([$x_37, $x_36, $x_34, $x_33, (((("  " + AssignTarget_this$6.R) + " = ") + value$proxy9.c) + ";")]))), "", "\n", "");
      }));
      var d$2$1 = $m_sjs_js_special_package$().l(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_T2.r().C)([]))));
      var ctx$2$6 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2$1), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$2$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$2$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().k;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().k = reg$2$1;
      try {
        var $x_39 = body$proxy9.h(ctx$2$6);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().k = prev$2$1;
      }
      program$3$2.b4 = $x_39;
      $m_sjs_js_ArrayOps$().bj(reg$2$1.Y, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$8) => ((data$3$4) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$8, data$3$4);
      }))(program$3$2)));
    }));
    var program$3$3 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy3.h(program$3$3);
    var b$4 = program$3$3.b5;
    var b$5 = program$3$3.b4;
    var helperFns$proxy3 = program$3$3.at();
    var id$3 = p$6.w;
    p$6.w = ((1 + p$6.w) | 0);
    var names$7 = $m_sjs_js_ArrayOpsCommon$().a(["vp"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], $m_sjs_js_ArrayOpsCommon$().a(["reflStrength"], [])));
    var dict$5 = $m_sjs_js_special_package$().l(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_T2.r().C)([]))));
    var i$6 = 0;
    while ((i$6 < (names$7.length | 0))) {
      dict$5[names$7[i$6]] = i$6;
      i$6 = ((1 + i$6) | 0);
    }
    var names$8 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], $m_sjs_js_ArrayOpsCommon$().a(["reflTex"], []));
    var dict$6 = $m_sjs_js_special_package$().l(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_T2.r().C)([]))));
    var i$7 = 0;
    while ((i$7 < (names$8.length | 0))) {
      dict$6[names$8[i$7]] = i$7;
      i$7 = ((1 + i$7) | 0);
    }
    var sd$3 = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$4, b$5, helperFns$proxy3);
    var vertexInputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], [])), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$3 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["vp"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], $m_sjs_js_ArrayOpsCommon$().a(["reflStrength"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).fO.I()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).a4.I()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).a4.I()], []))));
    var fragBuiltinParams$3 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$3 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$3, vertexInputStruct$3, vertexOutputStruct$3, fragmentOutputStruct$3, groupDecls$3, sd$3.ad, sd$3.ac, fragBuiltinParams$3);
    var wgsl$3 = (baseWgsl$3 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;\n@group(1) @binding(1) var reflTex: texture_2d<f32>;");
    var args$proxy3 = $m_sr_ScalaRunTime$().av(new ($d_sjs_js_Any.r().C)([wgsl$3]));
    console.log(...$m_sjsr_Compat$().au(args$proxy3));
    var module$3 = p$6.e.createShaderModule($m_sjs_js_special_package$().l(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_T2.r().C)([new $c_T2("code", wgsl$3)])))));
    var formats$2 = $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], []));
    var sizes$2 = $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([8], []));
    var offsets$2 = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes$2);
    var stride$2 = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes$2);
    var attributes$2 = [];
    var i$8 = 0;
    while ((i$8 < (formats$2.length | 0))) {
      attributes$2.push($m_sjs_js_special_package$().l(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_T2.r().C)([new $c_T2("shaderLocation", i$8), new $c_T2("offset", (offsets$2[i$8] | 0)), new $c_T2("format", formats$2[i$8])])))));
      i$8 = ((1 + i$8) | 0);
    }
    var vbl$2 = $m_sjs_js_special_package$().l(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_T2.r().C)([new $c_T2("arrayStride", stride$2), new $c_T2("attributes", attributes$2)]))));
    var descriptors$3 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().l(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 1), new $c_T2("buffer", $m_sjs_js_special_package$().l(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().l(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().l(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_T2.r().C)([])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().l(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_T2.r().C)([new $c_T2("binding", 2), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().l(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], [])))], []);
    var result$3 = [];
    $m_sjs_js_ArrayOps$().bj(descriptors$3, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$3) => ((entries$2$2) => (result$3.push(Painter_this$3.e.createBindGroupLayout($m_sjs_js_special_package$().l(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_T2.r().C)([new $c_T2("entries", entries$2$2)])))))) | 0)))(p$6)));
    var x7 = new $c_T2(result$3, $m_Ltrivalibs_graphics_shader_layouts$().N(p$6.e, result$3));
    var \u03b42$$2 = x7;
    var bgls$6 = \u03b42$$2.a2;
    var entries = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().l(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().l(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_T2.r().C)([])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().l(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().l(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_T2.r().C)([])))))]))))], []));
    var panelBgl$3 = p$6.e.createBindGroupLayout($m_sjs_js_special_package$().l(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_T2.r().C)([new $c_T2("entries", entries)])))));
    var allBgls$3 = ((panelBgl$3 !== null) ? $m_sjs_js_ArrayOpsCommon$().a(bgls$6, [panelBgl$3]) : bgls$6);
    var pl$3 = $m_Ltrivalibs_graphics_shader_layouts$().N(p$6.e, allBgls$3);
    var floorShade = new $c_Ltrivalibs_graphics_painter_Shade(id$3, module$3, vbl$2, bgls$6[0], panelBgl$3, pl$3, false, dict$5, dict$6);
    var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
    var uv$proxy1 = ul$proxy1.b2;
    var buffer = new ArrayBuffer(4);
    var arr$proxy17 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
    var b$6 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy17.dv, 0), p$6.e, uv$proxy1);
    b$6.v.r(b$6.g, 0.35);
    var $x_41 = b$6.u.queue;
    var $x_40 = b$6.s;
    var s$proxy28 = b$6.g;
    $x_41.writeBuffer($x_40, 0.0, s$proxy28.dv.buffer);
    var Bindable_this$4 = p$6.fT(floorForm, floorShade, "front", (void 0));
    var e1$proxy5 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", texSampler);
    var e2$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("reflStrength", b$6);
    var e3$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", floorTex);
    var e4$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("reflTex", mirror.k0);
    var \u03b4scrutinee532 = e1$proxy5.p;
    var idx$3 = (Bindable_this$4.A.B.samp | 0);
    while (((Bindable_this$4.f.length | 0) <= idx$3)) {
      Bindable_this$4.f.push(null);
    }
    Bindable_this$4.f[idx$3] = \u03b4scrutinee532;
    var \u03b4scrutinee546 = e2$proxy4.p;
    var idx$4 = (Bindable_this$4.A.B.reflStrength | 0);
    while (((Bindable_this$4.f.length | 0) <= idx$4)) {
      Bindable_this$4.f.push(null);
    }
    Bindable_this$4.f[idx$4] = \u03b4scrutinee546;
    var \u03b4scrutinee568 = e3$proxy3.p;
    var idx$5 = (Bindable_this$4.A.an.tex | 0);
    while (((Bindable_this$4.W.length | 0) <= idx$5)) {
      Bindable_this$4.W.push(null);
    }
    Bindable_this$4.W[idx$5] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee568);
    var \u03b4scrutinee582 = e4$proxy3.p;
    var idx$6 = (Bindable_this$4.A.an.reflTex | 0);
    while (((Bindable_this$4.W.length | 0) <= idx$6)) {
      Bindable_this$4.W.push(null);
    }
    Bindable_this$4.W[idx$6] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee582);
    var ul$proxy2 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
    var uv$proxy2 = ul$proxy2.b2;
    var buffer$2 = new ArrayBuffer(64);
    var arr$proxy18 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
    var sceneVp = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy18.dv, 0), p$6.e, uv$proxy2);
    var sceneShapes = [Bindable_this$4];
    var ai = 0;
    while ((ai < (aboveGround.length | 0))) {
      sceneShapes.push(aboveGround[ai]);
      ai = ((1 + ai) | 0);
    }
    var clearColor$3 = new $c_T4(0.5, 0.6, 0.7, 1.0);
    var Panel_this = p$6.b8((void 0), (void 0), clearColor$3, true, true, (void 0), (void 0), "rgba16float", (void 0), (void 0), sceneShapes, (void 0), (void 0));
    var e1$proxy6 = new $c_Ltrivalibs_graphics_painter_BindPair("vp", sceneVp);
    var \u03b4scrutinee583 = e1$proxy6.p;
    var dict$proxy1 = Panel_this.gj;
    dict$proxy1.vp = \u03b4scrutinee583;
    var bloom = $m_Lsketchlib_utils_bloom_Bloom$().mq(p$6, Panel_this, 0.002, 1.0, 4.0, 5);
    var pi = 0;
    while ((pi < (imagePanels.length | 0))) {
      $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$6, imagePanels[pi]);
      pi = ((1 + pi) | 0);
    }
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$6, floorTex);
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$6, ceilTex);
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$6, wallFront.gY());
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$6, wallBack.gY());
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$6, wallLeft.gY());
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$6, wallRight.gY());
    var cam = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().mm(0.9, 1.0, 0.1, 100.0, 0.0, 0.0, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.7, 0.0));
    $m_Ltrivalibs_dev_devPreserve$().mr(cam, "camera");
    var input = $m_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$().nc(p$6.fD, true, 400.0, 5.0, true, (void 0));
    var controller = new $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController(2.0, 3.0);
    p$6.nY(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((v1$2, v2$2) => {
      var w = (+v1$2);
      var h = (+v2$2);
      var aspect$2 = (w / h);
      var fov$1 = cam.fM;
      var near$1 = cam.fN;
      var far$1 = cam.fL;
      var rotH$2 = cam.ar;
      var rotV$2 = cam.b3;
      var pos$3 = cam.ab;
      cam.j3(fov$1, aspect$2, near$1, far$1, rotH$2, rotV$2, pos$3);
    })));
    $m_Ltrivalibs_utils_animation_animate$package$().ml(((p$9) => ((arg1$2) => {
      controller.oE(cam, input, (+arg1$2));
      var vp = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().gD(), cam.hv, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), cam.m1());
      sceneVp.v.r(sceneVp.g, vp);
      var $x_43 = sceneVp.u.queue;
      var $x_42 = sceneVp.s;
      var s$proxy29 = sceneVp.g;
      $x_43.writeBuffer($x_42, 0.0, s$proxy29.dv.buffer);
      mirror.o2(vp);
      $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$9, Panel_this);
      bloom.o3();
      p$9.or(bloom.jU);
    }))(p$6));
  })));
});
var $d_Lsketches_rooms_canvases_Canvases$package$ = new $TypeData().i($c_Lsketches_rooms_canvases_Canvases$package$, "sketches.rooms.canvases.Canvases$package$", ({
  dp: 1
}));
var $n_Lsketches_rooms_canvases_Canvases$package$;
function $m_Lsketches_rooms_canvases_Canvases$package$() {
  if ((!$n_Lsketches_rooms_canvases_Canvases$package$)) {
    $n_Lsketches_rooms_canvases_Canvases$package$ = new $c_Lsketches_rooms_canvases_Canvases$package$();
  }
  return $n_Lsketches_rooms_canvases_Canvases$package$;
}
/** @constructor */
function $c_Lsketches_rooms_canvases_HungPainting(modelBinding, shape, shadowRect, shadowFade) {
  this.jH = null;
  this.jG = null;
  this.jF = null;
  this.jH = shape;
  this.jG = shadowRect;
  this.jF = shadowFade;
}
$p = $c_Lsketches_rooms_canvases_HungPainting.prototype = new $h_O();
$p.constructor = $c_Lsketches_rooms_canvases_HungPainting;
/** @constructor */
function $h_Lsketches_rooms_canvases_HungPainting() {
}
$h_Lsketches_rooms_canvases_HungPainting.prototype = $p;
var $d_Lsketches_rooms_canvases_HungPainting = new $TypeData().i($c_Lsketches_rooms_canvases_HungPainting, "sketches.rooms.canvases.HungPainting", ({
  dq: 1
}));
function $p_Lsketches_rooms_canvases_Paintings__v$1__D__D__D__D__D__T2($thiz, x, y, z, u, w) {
  return new $c_T2(new $c_Ltrivalibs_graphics_math_cpu_Vec3(x, y, z), new $c_Ltrivalibs_graphics_math_cpu_Vec2(u, w));
}
/** @constructor */
function $c_Lsketches_rooms_canvases_Paintings(p) {
  this.fz = null;
  this.hW = 0.0;
  this.jI = 0.0;
  this.hV = null;
  this.hX = null;
  this.jJ = null;
  this.fz = p;
  this.hW = 0.16;
  this.jI = 0.2;
  this.hV = p.j2("linear", "linear", "linear", "clamp-to-edge", (void 0), (void 0));
  var program = new $c_Ltrivalibs_graphics_shader_dsl_Program();
  var d = ({});
  var ctx = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().k;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().k = reg;
  try {
    var AssignTarget_this = ctx.aO.a1("uv");
    var value$proxy1 = ctx.b6.n("uv");
    var x0 = (((("  " + AssignTarget_this.R) + " = ") + value$proxy1.c) + ";");
    var AssignTarget_this$2 = ctx.aO.go;
    var value$proxy2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().hO(ctx.gn.n("vp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gC(), $m_Ltrivalibs_graphics_math_gpu_vec4$().aS(ctx.b6.n("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().t().h(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ae(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$());
    var $x_1 = $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs([x0, (((("  " + AssignTarget_this$2.R) + " = ") + value$proxy2.c) + ";")]), "", "\n", "");
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().k = prev;
  }
  program.b5 = $x_1;
  var array$1 = reg.Y;
  var len = (array$1.length | 0);
  var i = 0;
  while ((i < len)) {
    $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$1[i]);
    i = ((1 + i) | 0);
  }
  var d$2 = ({});
  var ctx$2 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().k;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().k = reg$2;
  try {
    var $x_3 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().f8();
    var AssignTarget_this$1 = ctx$2.as.a1("color");
    var value$proxy3 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().aR($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), ctx$2.aA.n("uv"), ctx$2.S.n("samp"));
    var $x_2 = $x_3.h((((("  " + AssignTarget_this$1.R) + " = ") + value$proxy3.c) + ";"));
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().k = prev$2;
  }
  program.b4 = $x_2;
  var array$2 = reg$2.Y;
  var len$1 = (array$2.length | 0);
  var i$1 = 0;
  while ((i$1 < len$1)) {
    $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$2[i$1]);
    i$1 = ((1 + i$1) | 0);
  }
  var b = program.b5;
  var b$1 = program.b4;
  var helperFns$proxy1 = program.at();
  var id = p.w;
  p.w = ((1 + p.w) | 0);
  var names = $m_sjs_js_ArrayOpsCommon$().a(["vp"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []));
  var dict = ({});
  var i$2 = 0;
  while ((i$2 < (names.length | 0))) {
    dict[names[i$2]] = i$2;
    i$2 = ((1 + i$2) | 0);
  }
  var names$2 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], []);
  var dict$2 = ({});
  var i$2$1 = 0;
  while ((i$2$1 < (names$2.length | 0))) {
    dict$2[names$2[i$2$1]] = i$2$1;
    i$2$1 = ((1 + i$2$1) | 0);
  }
  var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef(b, b$1, helperFns$proxy1);
  var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], [])), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
  var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["vp"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).fO.I()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).a4.I()], [])));
  var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.ad, sd.ac, fragBuiltinParams);
  var wgsl = (baseWgsl + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
  var args$proxy1 = $m_sr_ScalaRunTime$().av(new ($d_sjs_js_Any.r().C)([wgsl]));
  console.log(...$m_sjsr_Compat$().au(args$proxy1));
  var module = p.e.createShaderModule(({
    "code": wgsl
  }));
  var formats = $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], []));
  var sizes = $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([8], []));
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
  var $x_6 = $m_sjs_js_ArrayOpsCommon$();
  var $x_5 = $m_sjs_js_ArrayOpsCommon$();
  var _2 = ({
    "type": "uniform"
  });
  var $x_4 = $m_sjs_js_ArrayOpsCommon$();
  var _2$1 = ({});
  var descriptors = $x_6.a([$x_5.a([({
    "binding": 0,
    "visibility": 1,
    "buffer": _2
  })], $x_4.a([({
    "binding": 1,
    "visibility": 2,
    "sampler": _2$1
  })], []))], []);
  var result = [];
  var len$2 = (descriptors.length | 0);
  var i$4 = 0;
  while ((i$4 < len$2)) {
    var x0$3 = descriptors[i$4];
    (result.push(p.e.createBindGroupLayout(({
      "entries": x0$3
    }))) | 0);
    i$4 = ((1 + i$4) | 0);
  }
  var \u03b42$___1 = result;
  var \u03b42$___2 = $m_Ltrivalibs_graphics_shader_layouts$().N(p.e, result);
  var bgls$2 = \u03b42$___1;
  var $x_7 = $m_sjs_js_ArrayOpsCommon$();
  var _2$2 = ({});
  var entries = $x_7.a([({
    "binding": 0,
    "visibility": 2,
    "texture": _2$2
  })], []);
  var panelBgl = p.e.createBindGroupLayout(({
    "entries": entries
  }));
  var allBgls = ((panelBgl !== null) ? $m_sjs_js_ArrayOpsCommon$().a(bgls$2, [panelBgl]) : bgls$2);
  var pl = $m_Ltrivalibs_graphics_shader_layouts$().N(p.e, allBgls);
  this.hX = new $c_Ltrivalibs_graphics_painter_Shade(id, module, vbl, bgls$2[0], panelBgl, pl, false, dict, dict$2);
  var program$2 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
  var d$1 = ({});
  var ctx$1 = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$1), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().k;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().k = reg$1;
  try {
    var AssignTarget_this$3 = ctx$1.aO.a1("uv");
    var value$proxy4 = ctx$1.b6.n("uv");
    var x0$4 = (((("  " + AssignTarget_this$3.R) + " = ") + value$proxy4.c) + ";");
    var AssignTarget_this$2$1 = ctx$1.aO.go;
    var value$proxy5 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().hO($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().nR(ctx$1.gn.n("vp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gC(), ctx$1.gn.n("model")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gC(), $m_Ltrivalibs_graphics_math_gpu_vec4$().aS(ctx$1.b6.n("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().t().h(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ae(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$());
    var $x_8 = $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs([x0$4, (((("  " + AssignTarget_this$2$1.R) + " = ") + value$proxy5.c) + ";")]), "", "\n", "");
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().k = prev$1;
  }
  program$2.b5 = $x_8;
  var array$31 = reg$1.Y;
  var len$3 = (array$31.length | 0);
  var i$5 = 0;
  while ((i$5 < len$3)) {
    $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program$2, array$31[i$5]);
    i$5 = ((1 + i$5) | 0);
  }
  var d$2$1 = ({});
  var ctx$2$1 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2$1), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg$2$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev$2$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().k;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().k = reg$2$1;
  try {
    var $x_10 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().f8();
    var AssignTarget_this$4 = ctx$2$1.as.a1("color");
    var value$proxy6 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().aR($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "img"), ctx$2$1.aA.n("uv"), ctx$2$1.S.n("samp"));
    var $x_9 = $x_10.h((((("  " + AssignTarget_this$4.R) + " = ") + value$proxy6.c) + ";"));
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().k = prev$2$1;
  }
  program$2.b4 = $x_9;
  var array$32 = reg$2$1.Y;
  var len$4 = (array$32.length | 0);
  var i$6 = 0;
  while ((i$6 < len$4)) {
    $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program$2, array$32[i$6]);
    i$6 = ((1 + i$6) | 0);
  }
  var b$2 = program$2.b5;
  var b$3 = program$2.b4;
  var helperFns$proxy2 = program$2.at();
  var id$2 = p.w;
  p.w = ((1 + p.w) | 0);
  var names$4 = $m_sjs_js_ArrayOpsCommon$().a(["vp"], $m_sjs_js_ArrayOpsCommon$().a(["model"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])));
  var dict$3 = ({});
  var i$4$1 = 0;
  while ((i$4$1 < (names$4.length | 0))) {
    dict$3[names$4[i$4$1]] = i$4$1;
    i$4$1 = ((1 + i$4$1) | 0);
  }
  var names$5 = $m_sjs_js_ArrayOpsCommon$().a(["img"], []);
  var dict$4 = ({});
  var i$5$1 = 0;
  while ((i$5$1 < (names$5.length | 0))) {
    dict$4[names$5[i$5$1]] = i$5$1;
    i$5$1 = ((1 + i$5$1) | 0);
  }
  var sd$2 = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$2, b$3, helperFns$proxy2);
  var vertexInputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], [])), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
  var vertexOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls$2 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["vp"], $m_sjs_js_ArrayOpsCommon$().a(["model"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).fO.I()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).fO.I()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).a4.I()], []))));
  var fragBuiltinParams$2 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$2 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$2, vertexInputStruct$2, vertexOutputStruct$2, fragmentOutputStruct$2, groupDecls$2, sd$2.ad, sd$2.ac, fragBuiltinParams$2);
  var wgsl$2 = (baseWgsl$2 + "\n\n@group(1) @binding(0) var img: texture_2d<f32>;");
  var args$proxy2 = $m_sr_ScalaRunTime$().av(new ($d_sjs_js_Any.r().C)([wgsl$2]));
  console.log(...$m_sjsr_Compat$().au(args$proxy2));
  var module$2 = p.e.createShaderModule(({
    "code": wgsl$2
  }));
  var formats$2 = $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], []));
  var sizes$2 = $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([8], []));
  var offsets$2 = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes$2);
  var stride$2 = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes$2);
  var attributes$2 = [];
  var i$6$1 = 0;
  while ((i$6$1 < (formats$2.length | 0))) {
    var value$6 = i$6$1;
    var value$7 = (offsets$2[i$6$1] | 0);
    var s$1 = formats$2[i$6$1];
    attributes$2.push(({
      "shaderLocation": value$6,
      "offset": value$7,
      "format": s$1
    }));
    i$6$1 = ((1 + i$6$1) | 0);
  }
  var vbl$2 = ({
    "arrayStride": stride$2,
    "attributes": attributes$2
  });
  var $x_14 = $m_sjs_js_ArrayOpsCommon$();
  var $x_13 = $m_sjs_js_ArrayOpsCommon$();
  var _2$3 = ({
    "type": "uniform"
  });
  var $x_12 = $m_sjs_js_ArrayOpsCommon$();
  var _2$4 = ({
    "type": "uniform"
  });
  var $x_11 = $m_sjs_js_ArrayOpsCommon$();
  var _2$5 = ({});
  var descriptors$2 = $x_14.a([$x_13.a([({
    "binding": 0,
    "visibility": 1,
    "buffer": _2$3
  })], $x_12.a([({
    "binding": 1,
    "visibility": 1,
    "buffer": _2$4
  })], $x_11.a([({
    "binding": 2,
    "visibility": 2,
    "sampler": _2$5
  })], [])))], []);
  var result$2 = [];
  var len$5 = (descriptors$2.length | 0);
  var i$7 = 0;
  while ((i$7 < len$5)) {
    var x0$7 = descriptors$2[i$7];
    (result$2.push(p.e.createBindGroupLayout(({
      "entries": x0$7
    }))) | 0);
    i$7 = ((1 + i$7) | 0);
  }
  var \u03b42$$2___1 = result$2;
  var \u03b42$$2___2 = $m_Ltrivalibs_graphics_shader_layouts$().N(p.e, result$2);
  var bgls$4 = \u03b42$$2___1;
  var $x_15 = $m_sjs_js_ArrayOpsCommon$();
  var _2$6 = ({});
  var entries$2 = $x_15.a([({
    "binding": 0,
    "visibility": 2,
    "texture": _2$6
  })], []);
  var panelBgl$2 = p.e.createBindGroupLayout(({
    "entries": entries$2
  }));
  var allBgls$2 = ((panelBgl$2 !== null) ? $m_sjs_js_ArrayOpsCommon$().a(bgls$4, [panelBgl$2]) : bgls$4);
  var pl$2 = $m_Ltrivalibs_graphics_shader_layouts$().N(p.e, allBgls$2);
  this.jJ = new $c_Ltrivalibs_graphics_painter_Shade(id$2, module$2, vbl$2, bgls$4[0], panelBgl$2, pl$2, false, dict$3, dict$4);
}
$p = $c_Lsketches_rooms_canvases_Paintings.prototype = new $h_O();
$p.constructor = $c_Lsketches_rooms_canvases_Paintings;
/** @constructor */
function $h_Lsketches_rooms_canvases_Paintings() {
}
$h_Lsketches_rooms_canvases_Paintings.prototype = $p;
$p.ot = (function(spec) {
  var hw = (0.5 * spec.bg);
  var hh = (0.5 * spec.bf);
  var hd = (0.5 * spec.b1);
  var p$proxy1 = (spec.b1 / (spec.f2 * spec.bg));
  var mu = ((p$proxy1 < 0.0) ? 0.0 : ((p$proxy1 > 0.45) ? 0.45 : p$proxy1));
  var p$proxy2 = (spec.b1 / (spec.f2 * spec.bf));
  var mv = ((p$proxy2 < 0.0) ? 0.0 : ((p$proxy2 > 0.45) ? 0.45 : p$proxy2));
  var faces = [$m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().b7($p_Lsketches_rooms_canvases_Paintings__v$1__D__D__D__D__D__T2(this, (-hw), hh, hd, mu, mv), $p_Lsketches_rooms_canvases_Paintings__v$1__D__D__D__D__D__T2(this, (-hw), (-hh), hd, mu, (1.0 - mv)), $p_Lsketches_rooms_canvases_Paintings__v$1__D__D__D__D__D__T2(this, hw, (-hh), hd, (1.0 - mu), (1.0 - mv)), $p_Lsketches_rooms_canvases_Paintings__v$1__D__D__D__D__D__T2(this, hw, hh, hd, (1.0 - mu), mv)), $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().b7($p_Lsketches_rooms_canvases_Paintings__v$1__D__D__D__D__D__T2(this, hw, hh, hd, (1.0 - mu), mv), $p_Lsketches_rooms_canvases_Paintings__v$1__D__D__D__D__D__T2(this, hw, (-hh), hd, (1.0 - mu), (1.0 - mv)), $p_Lsketches_rooms_canvases_Paintings__v$1__D__D__D__D__D__T2(this, hw, (-hh), (-hd), 1.0, (1.0 - mv)), $p_Lsketches_rooms_canvases_Paintings__v$1__D__D__D__D__D__T2(this, hw, hh, (-hd), 1.0, mv)), $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().b7($p_Lsketches_rooms_canvases_Paintings__v$1__D__D__D__D__D__T2(this, (-hw), hh, hd, mu, mv), $p_Lsketches_rooms_canvases_Paintings__v$1__D__D__D__D__D__T2(this, (-hw), (-hh), hd, mu, (1.0 - mv)), $p_Lsketches_rooms_canvases_Paintings__v$1__D__D__D__D__D__T2(this, (-hw), (-hh), (-hd), 0.0, (1.0 - mv)), $p_Lsketches_rooms_canvases_Paintings__v$1__D__D__D__D__D__T2(this, (-hw), hh, (-hd), 0.0, mv)), $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().b7($p_Lsketches_rooms_canvases_Paintings__v$1__D__D__D__D__D__T2(this, (-hw), hh, hd, mu, mv), $p_Lsketches_rooms_canvases_Paintings__v$1__D__D__D__D__D__T2(this, hw, hh, hd, (1.0 - mu), mv), $p_Lsketches_rooms_canvases_Paintings__v$1__D__D__D__D__D__T2(this, hw, hh, (-hd), (1.0 - mu), 0.0), $p_Lsketches_rooms_canvases_Paintings__v$1__D__D__D__D__D__T2(this, (-hw), hh, (-hd), mu, 0.0)), $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().b7($p_Lsketches_rooms_canvases_Paintings__v$1__D__D__D__D__D__T2(this, (-hw), (-hh), hd, mu, (1.0 - mv)), $p_Lsketches_rooms_canvases_Paintings__v$1__D__D__D__D__D__T2(this, hw, (-hh), hd, (1.0 - mu), (1.0 - mv)), $p_Lsketches_rooms_canvases_Paintings__v$1__D__D__D__D__D__T2(this, hw, (-hh), (-hd), (1.0 - mu), 1.0), $p_Lsketches_rooms_canvases_Paintings__v$1__D__D__D__D__D__T2(this, (-hw), (-hh), (-hd), mu, 1.0)), $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().b7($p_Lsketches_rooms_canvases_Paintings__v$1__D__D__D__D__D__T2(this, (-hw), hh, (-hd), 0.0, 0.0), $p_Lsketches_rooms_canvases_Paintings__v$1__D__D__D__D__D__T2(this, (-hw), (-hh), (-hd), 0.0, 1.0), $p_Lsketches_rooms_canvases_Paintings__v$1__D__D__D__D__D__T2(this, hw, (-hh), (-hd), 1.0, 1.0), $p_Lsketches_rooms_canvases_Paintings__v$1__D__D__D__D__D__T2(this, hw, hh, (-hd), 1.0, 0.0))];
  var $x_2 = this.fz;
  var mesh$proxy1 = $m_Ltrivalibs_graphics_geometry_Mesh$().iT(faces, null, 0, new $c_Ltrivalibs_graphics_geometry_package$package$$anon$1(0));
  var vl = new $c_Ltrivalibs_graphics_geometry_VertexLayout$named(new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$(), new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$(), $m_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$())));
  var f = ((v$3, ref$3) => {
    var values$proxy1 = vl.h8.bl(v$3);
    var baseOffset$proxy1 = (ref$3.off | 0);
    var nestedValues = values$proxy1.j(0);
    var value = nestedValues.j(0);
    ref$3.dv.setFloat32(baseOffset$proxy1, Math.fround(value), true);
    var tailOffset = ((4 + baseOffset$proxy1) | 0);
    var value$2 = nestedValues.j(1);
    ref$3.dv.setFloat32(tailOffset, Math.fround(value$2), true);
    var tailOffset$2 = ((4 + tailOffset) | 0);
    var value$3 = nestedValues.j(2);
    ref$3.dv.setFloat32(tailOffset$2, Math.fround(value$3), true);
    var tailOffset$4 = ((12 + baseOffset$proxy1) | 0);
    var nestedValues$2 = values$proxy1.j(1);
    var value$4 = nestedValues$2.j(0);
    ref$3.dv.setFloat32(tailOffset$4, Math.fround(value$4), true);
    var tailOffset$5 = ((4 + tailOffset$4) | 0);
    var value$5 = nestedValues$2.j(1);
    ref$3.dv.setFloat32(tailOffset$5, Math.fround(value$5), true);
  });
  var \u03b4proxy2 = $m_Ltrivalibs_graphics_geometry_buffers$package$();
  var vertexCount = 0;
  var hasQuads = false;
  var fi = 0;
  while ((fi < (mesh$proxy1.U.length | 0))) {
    var n = (mesh$proxy1.U[fi].length | 0);
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
    while ((fi < (mesh$proxy1.U.length | 0))) {
      var arr = mesh$proxy1.U[fi];
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
    while ((fi < (mesh$proxy1.U.length | 0))) {
      var arr$2 = mesh$proxy1.U[fi];
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
    var $x_1 = new $c_Ltrivalibs_graphics_geometry_BufferedGeometry(verts, \u03b4proxy2.j0(idxBuf, vertexCount));
  }
  return $x_2.iX($x_1, (void 0), (void 0), (void 0));
});
var $d_Lsketches_rooms_canvases_Paintings = new $TypeData().i($c_Lsketches_rooms_canvases_Paintings, "sketches.rooms.canvases.Paintings", ({
  dr: 1
}));
function $p_Lsketches_rooms_canvases_Paintings$Wall__sceneShape__Ltrivalibs_graphics_painter_Shape($thiz) {
  if ((!$thiz.jO)) {
    var Bindable_this = $thiz.ay.fz.fT($thiz.i0, $thiz.ay.hX, "none", (void 0));
    var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", $thiz.ay.hV);
    var e2$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", $thiz.gY());
    var \u03b4scrutinee246 = e1$proxy2.p;
    var idx = (Bindable_this.A.B.samp | 0);
    while (((Bindable_this.f.length | 0) <= idx)) {
      Bindable_this.f.push(null);
    }
    Bindable_this.f[idx] = \u03b4scrutinee246;
    var \u03b4scrutinee262 = e2$proxy2.p;
    var idx$2 = (Bindable_this.A.an.tex | 0);
    while (((Bindable_this.W.length | 0) <= idx$2)) {
      Bindable_this.W.push(null);
    }
    Bindable_this.W[idx$2] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee262);
    $thiz.jN = Bindable_this;
    $thiz.jO = true;
  }
  return $thiz.jN;
}
function $p_Lsketches_rooms_canvases_Paintings$Wall__corner$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__D__D__D__T2($thiz, center$1, width$2, height$2, su, sv, u, w) {
  return new $c_T2($f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().ak(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().ak(), center$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().ak(), $thiz.hZ, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), (0.5 * (su * width$2)))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().ak(), $thiz.h5, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), (0.5 * (sv * height$2)))), new $c_Ltrivalibs_graphics_math_cpu_Vec2(u, w));
}
/** @constructor */
function $c_Lsketches_rooms_canvases_Paintings$Wall(outer, center, width, height, rotY, inwardNormal, mkTexPanel) {
  this.jK = null;
  this.fA = 0.0;
  this.g3 = 0.0;
  this.jL = null;
  this.hY = null;
  this.h5 = null;
  this.hZ = null;
  this.jM = null;
  this.f3 = null;
  this.i0 = null;
  this.jP = null;
  this.jQ = false;
  this.jN = null;
  this.jO = false;
  this.ay = null;
  this.jK = center;
  this.fA = width;
  this.g3 = height;
  this.jL = inwardNormal;
  this.hY = mkTexPanel;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.ay = outer;
  this.h5 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
  this.hZ = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().ak(), this.h5, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), inwardNormal);
  this.jM = $m_Ltrivalibs_graphics_math_cpu_Quat$().lw(rotY);
  this.f3 = [];
  var face = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().b7($p_Lsketches_rooms_canvases_Paintings$Wall__corner$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__D__D__D__T2(this, center, width, height, (-1.0), 1.0, 0.0, 0.0), $p_Lsketches_rooms_canvases_Paintings$Wall__corner$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__D__D__D__T2(this, center, width, height, (-1.0), (-1.0), 0.0, 1.0), $p_Lsketches_rooms_canvases_Paintings$Wall__corner$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__D__D__D__T2(this, center, width, height, 1.0, (-1.0), 1.0, 1.0), $p_Lsketches_rooms_canvases_Paintings$Wall__corner$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__D__D__D__T2(this, center, width, height, 1.0, 1.0, 1.0, 0.0));
  var $x_2 = outer.fz;
  var mesh$proxy2 = $m_Ltrivalibs_graphics_geometry_Mesh$().iT([face], null, 0, new $c_Ltrivalibs_graphics_geometry_package$package$$anon$1(0));
  var vl = new $c_Ltrivalibs_graphics_geometry_VertexLayout$named(new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$(), new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$(), $m_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$())));
  var f = ((v$3, ref$3) => {
    var values$proxy2 = vl.h8.bl(v$3);
    var baseOffset$proxy4 = (ref$3.off | 0);
    var nestedValues = values$proxy2.j(0);
    var value = nestedValues.j(0);
    ref$3.dv.setFloat32(baseOffset$proxy4, Math.fround(value), true);
    var tailOffset = ((4 + baseOffset$proxy4) | 0);
    var value$2 = nestedValues.j(1);
    ref$3.dv.setFloat32(tailOffset, Math.fround(value$2), true);
    var tailOffset$2 = ((4 + tailOffset) | 0);
    var value$3 = nestedValues.j(2);
    ref$3.dv.setFloat32(tailOffset$2, Math.fround(value$3), true);
    var tailOffset$4 = ((12 + baseOffset$proxy4) | 0);
    var nestedValues$2 = values$proxy2.j(1);
    var value$4 = nestedValues$2.j(0);
    ref$3.dv.setFloat32(tailOffset$4, Math.fround(value$4), true);
    var tailOffset$5 = ((4 + tailOffset$4) | 0);
    var value$5 = nestedValues$2.j(1);
    ref$3.dv.setFloat32(tailOffset$5, Math.fround(value$5), true);
  });
  var \u03b4proxy5 = $m_Ltrivalibs_graphics_geometry_buffers$package$();
  var vertexCount = 0;
  var hasQuads = false;
  var fi = 0;
  while ((fi < (mesh$proxy2.U.length | 0))) {
    var n = (mesh$proxy2.U[fi].length | 0);
    vertexCount = ((vertexCount + n) | 0);
    if ((n === 4)) {
      hasQuads = true;
    }
    fi = ((1 + fi) | 0);
  }
  var count$proxy2 = vertexCount;
  var buffer = new ArrayBuffer(Math.imul(20, count$proxy2));
  var verts = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), count$proxy2);
  var vi = 0;
  if ((!hasQuads)) {
    fi = 0;
    while ((fi < (mesh$proxy2.U.length | 0))) {
      var arr = mesh$proxy2.U[fi];
      var si = 0;
      while ((si < (arr.length | 0))) {
        var x0 = arr[si];
        var index$proxy4 = vi;
        var offset$proxy14 = Math.imul(20, index$proxy4);
        var x1 = new ($a_Ltrivalibs_bufferdata_BufferView())(verts.dv, offset$proxy14);
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
    while ((fi < (mesh$proxy2.U.length | 0))) {
      var arr$2 = mesh$proxy2.U[fi];
      var n$2 = (arr$2.length | 0);
      var si$2 = 0;
      while ((si$2 < n$2)) {
        var x0$1 = arr$2[si$2];
        var index$proxy5 = vi;
        var offset$proxy15 = Math.imul(20, index$proxy5);
        var x1$1 = new ($a_Ltrivalibs_bufferdata_BufferView())(verts.dv, offset$proxy15);
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
    var $x_1 = new $c_Ltrivalibs_graphics_geometry_BufferedGeometry(verts, \u03b4proxy5.j0(idxBuf, vertexCount));
  }
  this.i0 = $x_2.iX($x_1, (void 0), (void 0), (void 0));
}
$p = $c_Lsketches_rooms_canvases_Paintings$Wall.prototype = new $h_O();
$p.constructor = $c_Lsketches_rooms_canvases_Paintings$Wall;
/** @constructor */
function $h_Lsketches_rooms_canvases_Paintings$Wall() {
}
$h_Lsketches_rooms_canvases_Paintings$Wall.prototype = $p;
$p.n4 = (function(spec, u, v) {
  var hd = (0.5 * spec.b1);
  var pos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().ak(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().ak(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().ak(), this.jK, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().ak(), this.hZ, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), (u - (0.5 * this.fA)))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().ak(), this.h5, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), (v - (0.5 * this.g3)))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().ak(), this.jL, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), (hd + 0.02)));
  var m = $m_Ltrivalibs_graphics_math_cpu_Mat4$().lx(pos, this.jM, new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0));
  var Painter_this = this.ay.fz;
  var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
  var uv$proxy1 = ul$proxy1.b2;
  var buffer = new ArrayBuffer(64);
  var arr$proxy7 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
  var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy7.dv, 0), Painter_this.e, uv$proxy1);
  b.v.r(b.g, m);
  var $x_2 = b.u.queue;
  var $x_1 = b.s;
  var s$proxy4 = b.g;
  $x_2.writeBuffer($x_1, 0.0, s$proxy4.dv.buffer);
  var Bindable_this = this.ay.fz.fT(this.ay.ot(spec), this.ay.jJ, "none", (void 0));
  var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("model", b);
  var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", this.ay.hV);
  var e3$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("img", spec.fy);
  var \u03b4scrutinee206 = e1$proxy1.p;
  var idx = (Bindable_this.A.B.model | 0);
  while (((Bindable_this.f.length | 0) <= idx)) {
    Bindable_this.f.push(null);
  }
  Bindable_this.f[idx] = \u03b4scrutinee206;
  var \u03b4scrutinee220 = e2$proxy1.p;
  var idx$2 = (Bindable_this.A.B.samp | 0);
  while (((Bindable_this.f.length | 0) <= idx$2)) {
    Bindable_this.f.push(null);
  }
  Bindable_this.f[idx$2] = \u03b4scrutinee220;
  var \u03b4scrutinee240 = e3$proxy1.p;
  var idx$3 = (Bindable_this.A.an.img | 0);
  while (((Bindable_this.W.length | 0) <= idx$3)) {
    Bindable_this.W.push(null);
  }
  Bindable_this.W[idx$3] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee240);
  var rect = new $c_Ltrivalibs_graphics_math_cpu_Vec4((u / this.fA), (1.0 - (v / this.g3)), ((0.5 * spec.bg) / this.fA), ((0.5 * spec.bf) / this.g3));
  var fade = new $c_Ltrivalibs_graphics_math_cpu_Vec2((this.ay.hW / this.fA), (this.ay.hW / this.g3));
  var h = new $c_Lsketches_rooms_canvases_HungPainting(b, Bindable_this, rect, fade);
  this.f3.push(h);
  return h;
});
$p.gY = (function() {
  if ((!this.jQ)) {
    var has = ((this.f3.length | 0) > 0);
    var rect = (has ? this.f3[0].jG : new $c_Ltrivalibs_graphics_math_cpu_Vec4(0.0, 0.0, 0.0, 0.0));
    var fade = (has ? this.f3[0].jF : new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.01, 0.01));
    var strength = (has ? this.ay.jI : 0.0);
    this.jP = this.hY.ll(this.i0, rect, fade, strength);
    this.jQ = true;
    this.hY = null;
  }
  return this.jP;
});
$p.oj = (function() {
  var out = [$p_Lsketches_rooms_canvases_Paintings$Wall__sceneShape__Ltrivalibs_graphics_painter_Shape(this)];
  var i = 0;
  while ((i < (this.f3.length | 0))) {
    out.push(this.f3[i].jH);
    i = ((1 + i) | 0);
  }
  return out;
});
var $d_Lsketches_rooms_canvases_Paintings$Wall = new $TypeData().i($c_Lsketches_rooms_canvases_Paintings$Wall, "sketches.rooms.canvases.Paintings$Wall", ({
  ds: 1
}));
/** @constructor */
function $c_Lsketches_rooms_canvases_Wall$package$() {
  this.mc = 0.0;
  this.ma = 0.0;
  this.mb = 0.0;
  this.mc = 0.5;
  this.ma = 2.5;
  this.mb = 0.28;
}
$p = $c_Lsketches_rooms_canvases_Wall$package$.prototype = new $h_O();
$p.constructor = $c_Lsketches_rooms_canvases_Wall$package$;
/** @constructor */
function $h_Lsketches_rooms_canvases_Wall$package$() {
}
$h_Lsketches_rooms_canvases_Wall$package$.prototype = $p;
$p.oq = (function(uv, rect, fade) {
  var hx = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ae().a8(rect);
  var hy = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ae().af(rect);
  var dx = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().gy($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a6().G(uv), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ae().G(rect));
  var dy = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().gy($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a6().C(uv), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ae().C(rect));
  var hMask = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().fa($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().lj(dx), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aP(hx, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a6().G(fade)), hx);
  var upper = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().fa(dy, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().gy($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().lZ(hy), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ah($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a6().C(fade), 0.5)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().lZ(hy));
  var lower = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().fa(dy, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aP(hy, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ah($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a6().C(fade), 2.5)), hy);
  var grad = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().lq($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().le($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aP(dy, hy), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().iR($m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aU().aV((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aF(2.0)) + " * ") + hy.c) + ")")), 1.0E-4)));
  var vert = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().iR($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ah(grad, 0.72), 0.28);
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aQ($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aQ($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aQ(hMask, upper), lower), vert);
});
var $d_Lsketches_rooms_canvases_Wall$package$ = new $TypeData().i($c_Lsketches_rooms_canvases_Wall$package$, "sketches.rooms.canvases.Wall$package$", ({
  dt: 1
}));
var $n_Lsketches_rooms_canvases_Wall$package$;
function $m_Lsketches_rooms_canvases_Wall$package$() {
  if ((!$n_Lsketches_rooms_canvases_Wall$package$)) {
    $n_Lsketches_rooms_canvases_Wall$package$ = new $c_Lsketches_rooms_canvases_Wall$package$();
  }
  return $n_Lsketches_rooms_canvases_Wall$package$;
}
function $s_Lsketches_rooms_canvases_roomsCanvases__main__AT__V(args) {
  try {
    $m_Lsketches_rooms_canvases_Canvases$package$().og();
  } catch (e) {
    if (false) {
      $m_s_util_CommandLineParser$().os(e);
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
$p.mT = (function(pos, octaves, freqMul, ampMul, seed) {
  var acc = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().t().h(0.0);
  var freq = 1.0;
  var amp = 1.0;
  var total = 0.0;
  var i = 0;
  while ((i < octaves)) {
    var $x_3 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
    var $x_2 = acc;
    var $x_1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
    var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy1 = $m_Ltrivalibs_graphics_shader_lib_random_Simplex$().iM;
    var a1$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().lk($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().lg(pos, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aj(), freq), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aj(), seed);
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().hN(fn$proxy1);
    acc = $x_3.aP($x_2, $x_1.ah($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((WgslFn$_this.hH(fn$proxy1) + "(") + a1$proxy1) + ")")), amp));
    total = (total + amp);
    freq = (freq * freqMul);
    amp = (amp * ampMul);
    i = ((1 + i) | 0);
  }
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ld(acc, total);
});
var $d_Lsketchlib_shaders_Noise$ = new $TypeData().i($c_Lsketchlib_shaders_Noise$, "sketchlib.shaders.Noise$", ({
  du: 1
}));
var $n_Lsketchlib_shaders_Noise$;
function $m_Lsketchlib_shaders_Noise$() {
  if ((!$n_Lsketchlib_shaders_Noise$)) {
    $n_Lsketchlib_shaders_Noise$ = new $c_Lsketchlib_shaders_Noise$();
  }
  return $n_Lsketchlib_shaders_Noise$;
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
$p.mq = (function(p, scene, intensity, threshold, blurRadius, mipLevels) {
  if ((mipLevels < 2)) {
    var message$proxy1 = (("bloom mipLevels must be >= 2 (got " + mipLevels) + ")");
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy1)).aN;
  }
  var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy1 = ul$proxy1.b2;
  var buffer = new ArrayBuffer(4);
  var arr$proxy1 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
  var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy1.dv, 0), p.e, uv$proxy1);
  b.v.r(b.g, blurRadius);
  var $x_2 = b.u.queue;
  var $x_1 = b.s;
  var s$proxy1 = b.g;
  $x_2.writeBuffer($x_1, 0.0, s$proxy1.dv.buffer);
  var ul$proxy2 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy2 = ul$proxy2.b2;
  var buffer$2 = new ArrayBuffer(4);
  var arr$proxy2 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
  var b$2 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy2.dv, 0), p.e, uv$proxy2);
  b$2.v.r(b$2.g, intensity);
  var $x_4 = b$2.u.queue;
  var $x_3 = b$2.s;
  var s$proxy2 = b$2.g;
  $x_4.writeBuffer($x_3, 0.0, s$proxy2.dv.buffer);
  var sampler = p.oi();
  var program = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  var d = ({});
  var ctx = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().k;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().k = reg;
  try {
    var color = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "color");
    var brightness = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "brightness");
    var x0 = color.T($m_Ltrivalibs_graphics_math_gpu_expr$package$().fS($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "scene"), $m_Ltrivalibs_graphics_math_gpu_ivec2$().bi($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fU(ctx.f7))));
    var x1 = brightness.T($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aP($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aP($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ah($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ae().G(color), 0.2126), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ah($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ae().C(color), 0.7152)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ah($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ae().a8(color), 0.0722)));
    var AssignTarget_this = ctx.as.a1("color");
    var value$proxy1 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().ok($m_Ltrivalibs_graphics_math_gpu_vec4$().mo($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().t().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().t().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().t().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().t().h(1.0)), color, $m_Ltrivalibs_graphics_math_gpu_expr$package$().mY(brightness, ctx.S.n("threshold")));
    var $x_5 = $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs([x0, x1, (((("  " + AssignTarget_this.R) + " = ") + value$proxy1.c) + ";")]), "", "\n", "");
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().k = prev;
  }
  program.a5 = $x_5;
  var array$1 = reg.Y;
  var len = (array$1.length | 0);
  var i = 0;
  while ((i < len)) {
    $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$1[i]);
    i = ((1 + i) | 0);
  }
  var b$1 = program.a5;
  var helperFns$proxy1 = program.at();
  var id = p.w;
  p.w = ((1 + p.w) | 0);
  var names = $m_sjs_js_ArrayOpsCommon$().a(["threshold"], []);
  var dict = ({});
  var i$1 = 0;
  while ((i$1 < (names.length | 0))) {
    dict[names[i$1]] = i$1;
    i$1 = ((1 + i$1) | 0);
  }
  var names$2 = $m_sjs_js_ArrayOpsCommon$().a(["scene"], []);
  var dict$2 = ({});
  var i$2 = 0;
  while ((i$2 < (names$2.length | 0))) {
    dict$2[names$2[i$2]] = i$2;
    i$2 = ((1 + i$2) | 0);
  }
  var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$1, helperFns$proxy1);
  var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["threshold"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).a4.I()], []));
  var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.ad, sd.ac, fragBuiltinParams);
  var wgsl = (baseWgsl + "\n\n@group(1) @binding(0) var scene: texture_2d<f32>;");
  var args$proxy1 = $m_sr_ScalaRunTime$().av(new ($d_sjs_js_Any.r().C)([wgsl]));
  console.log(...$m_sjsr_Compat$().au(args$proxy1));
  var module = p.e.createShaderModule(({
    "code": wgsl
  }));
  var $x_7 = $m_sjs_js_ArrayOpsCommon$();
  var $x_6 = $m_sjs_js_ArrayOpsCommon$();
  var _2 = ({
    "type": "uniform"
  });
  var descriptors = $x_7.a([$x_6.a([({
    "binding": 0,
    "visibility": 2,
    "buffer": _2
  })], [])], []);
  var result = [];
  var len$1 = (descriptors.length | 0);
  var i$3 = 0;
  while ((i$3 < len$1)) {
    var x0$2 = descriptors[i$3];
    (result.push(p.e.createBindGroupLayout(({
      "entries": x0$2
    }))) | 0);
    i$3 = ((1 + i$3) | 0);
  }
  var \u03b46$___1 = result;
  var \u03b46$___2 = $m_Ltrivalibs_graphics_shader_layouts$().N(p.e, result);
  var bgls$2 = \u03b46$___1;
  var $x_8 = $m_sjs_js_ArrayOpsCommon$();
  var _2$1 = ({});
  var entries = $x_8.a([({
    "binding": 0,
    "visibility": 2,
    "texture": _2$1
  })], []);
  var panelBgl = p.e.createBindGroupLayout(({
    "entries": entries
  }));
  var allBgls = ((panelBgl !== null) ? $m_sjs_js_ArrayOpsCommon$().a(bgls$2, [panelBgl]) : bgls$2);
  var pl = $m_Ltrivalibs_graphics_shader_layouts$().N(p.e, allBgls);
  var thresholdShade = new $c_Ltrivalibs_graphics_painter_Shade(id, module, null, bgls$2[0], panelBgl, pl, false, dict, dict$2);
  var program$2 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  var d$1 = ({});
  var ctx$1 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$1), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().k;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().k = reg$1;
  try {
    var $x_10 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().f8();
    var AssignTarget_this$1 = ctx$1.as.a1("color");
    var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy1 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$().l4;
    var a1$proxy1 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex");
    var a2$proxy1 = ctx$1.S.n("samp");
    var a3$proxy1 = ctx$1.aA.n("uv");
    var a4$proxy1 = ctx$1.S.n("blurRadius");
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().hN(fn$proxy1);
    var value$proxy2 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((((((WgslFn$_this.hH(fn$proxy1) + "(") + a1$proxy1) + ", ") + a2$proxy1) + ", ") + a3$proxy1) + ", ") + a4$proxy1) + ")"));
    var $x_9 = $x_10.h((((("  " + AssignTarget_this$1.R) + " = ") + value$proxy2.c) + ";"));
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().k = prev$1;
  }
  program$2.a5 = $x_9;
  var array$16 = reg$1.Y;
  var len$2 = (array$16.length | 0);
  var i$4 = 0;
  while ((i$4 < len$2)) {
    $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program$2, array$16[i$4]);
    i$4 = ((1 + i$4) | 0);
  }
  var b$3 = program$2.a5;
  var helperFns$proxy2 = program$2.at();
  var id$2 = p.w;
  p.w = ((1 + p.w) | 0);
  var names$4 = $m_sjs_js_ArrayOpsCommon$().a(["blurRadius"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []));
  var dict$3 = ({});
  var i$3$1 = 0;
  while ((i$3$1 < (names$4.length | 0))) {
    dict$3[names$4[i$3$1]] = i$3$1;
    i$3$1 = ((1 + i$3$1) | 0);
  }
  var names$5 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], []);
  var dict$4 = ({});
  var i$4$1 = 0;
  while ((i$4$1 < (names$5.length | 0))) {
    dict$4[names$5[i$4$1]] = i$4$1;
    i$4$1 = ((1 + i$4$1) | 0);
  }
  var sd$2 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$3, helperFns$proxy2);
  var vertexInputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls$2 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["blurRadius"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).a4.I()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).a4.I()], [])));
  var fragBuiltinParams$2 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$2 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$2, vertexInputStruct$2, vertexOutputStruct$2, fragmentOutputStruct$2, groupDecls$2, sd$2.ad, sd$2.ac, fragBuiltinParams$2);
  var wgsl$2 = (baseWgsl$2 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
  var args$proxy2 = $m_sr_ScalaRunTime$().av(new ($d_sjs_js_Any.r().C)([wgsl$2]));
  console.log(...$m_sjsr_Compat$().au(args$proxy2));
  var module$2 = p.e.createShaderModule(({
    "code": wgsl$2
  }));
  var $x_13 = $m_sjs_js_ArrayOpsCommon$();
  var $x_12 = $m_sjs_js_ArrayOpsCommon$();
  var _2$2 = ({
    "type": "uniform"
  });
  var $x_11 = $m_sjs_js_ArrayOpsCommon$();
  var _2$3 = ({});
  var descriptors$2 = $x_13.a([$x_12.a([({
    "binding": 0,
    "visibility": 2,
    "buffer": _2$2
  })], $x_11.a([({
    "binding": 1,
    "visibility": 2,
    "sampler": _2$3
  })], []))], []);
  var result$2 = [];
  var len$3 = (descriptors$2.length | 0);
  var i$5 = 0;
  while ((i$5 < len$3)) {
    var x0$4 = descriptors$2[i$5];
    (result$2.push(p.e.createBindGroupLayout(({
      "entries": x0$4
    }))) | 0);
    i$5 = ((1 + i$5) | 0);
  }
  var \u03b46$$2___1 = result$2;
  var \u03b46$$2___2 = $m_Ltrivalibs_graphics_shader_layouts$().N(p.e, result$2);
  var bgls$4 = \u03b46$$2___1;
  var $x_14 = $m_sjs_js_ArrayOpsCommon$();
  var _2$4 = ({});
  var entries$2 = $x_14.a([({
    "binding": 0,
    "visibility": 2,
    "texture": _2$4
  })], []);
  var panelBgl$2 = p.e.createBindGroupLayout(({
    "entries": entries$2
  }));
  var allBgls$2 = ((panelBgl$2 !== null) ? $m_sjs_js_ArrayOpsCommon$().a(bgls$4, [panelBgl$2]) : bgls$4);
  var pl$2 = $m_Ltrivalibs_graphics_shader_layouts$().N(p.e, allBgls$2);
  var downsampleShade = new $c_Ltrivalibs_graphics_painter_Shade(id$2, module$2, null, bgls$4[0], panelBgl$2, pl$2, false, dict$3, dict$4);
  var program$3 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  var d$2 = ({});
  var ctx$2 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().k;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().k = reg$2;
  try {
    var $x_16 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().f8();
    var AssignTarget_this$2 = ctx$2.as.a1("color");
    var WgslFn$_this$1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy2 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$().iL;
    var a1$proxy2 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex");
    var a2$proxy2 = ctx$2.S.n("samp");
    var a3$proxy2 = ctx$2.aA.n("uv");
    var a4$proxy2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ah(ctx$2.S.n("blurRadius"), 0.5);
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().hN(fn$proxy2);
    var value$proxy3 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((((((WgslFn$_this$1.hH(fn$proxy2) + "(") + a1$proxy2) + ", ") + a2$proxy2) + ", ") + a3$proxy2) + ", ") + a4$proxy2) + ")"));
    var $x_15 = $x_16.h((((("  " + AssignTarget_this$2.R) + " = ") + value$proxy3.c) + ";"));
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().k = prev$2;
  }
  program$3.a5 = $x_15;
  var array$35 = reg$2.Y;
  var len$4 = (array$35.length | 0);
  var i$6 = 0;
  while ((i$6 < len$4)) {
    $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program$3, array$35[i$6]);
    i$6 = ((1 + i$6) | 0);
  }
  var b$4 = program$3.a5;
  var helperFns$proxy3 = program$3.at();
  var id$3 = p.w;
  p.w = ((1 + p.w) | 0);
  var names$7 = $m_sjs_js_ArrayOpsCommon$().a(["blurRadius"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []));
  var dict$5 = ({});
  var i$5$1 = 0;
  while ((i$5$1 < (names$7.length | 0))) {
    dict$5[names$7[i$5$1]] = i$5$1;
    i$5$1 = ((1 + i$5$1) | 0);
  }
  var names$8 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], []);
  var dict$6 = ({});
  var i$6$1 = 0;
  while ((i$6$1 < (names$8.length | 0))) {
    dict$6[names$8[i$6$1]] = i$6$1;
    i$6$1 = ((1 + i$6$1) | 0);
  }
  var sd$3 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$4, helperFns$proxy3);
  var vertexInputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls$3 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["blurRadius"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).a4.I()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).a4.I()], [])));
  var fragBuiltinParams$3 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$3 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$3, vertexInputStruct$3, vertexOutputStruct$3, fragmentOutputStruct$3, groupDecls$3, sd$3.ad, sd$3.ac, fragBuiltinParams$3);
  var wgsl$3 = (baseWgsl$3 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
  var args$proxy3 = $m_sr_ScalaRunTime$().av(new ($d_sjs_js_Any.r().C)([wgsl$3]));
  console.log(...$m_sjsr_Compat$().au(args$proxy3));
  var module$3 = p.e.createShaderModule(({
    "code": wgsl$3
  }));
  var $x_19 = $m_sjs_js_ArrayOpsCommon$();
  var $x_18 = $m_sjs_js_ArrayOpsCommon$();
  var _2$5 = ({
    "type": "uniform"
  });
  var $x_17 = $m_sjs_js_ArrayOpsCommon$();
  var _2$6 = ({});
  var descriptors$3 = $x_19.a([$x_18.a([({
    "binding": 0,
    "visibility": 2,
    "buffer": _2$5
  })], $x_17.a([({
    "binding": 1,
    "visibility": 2,
    "sampler": _2$6
  })], []))], []);
  var result$3 = [];
  var len$5 = (descriptors$3.length | 0);
  var i$7 = 0;
  while ((i$7 < len$5)) {
    var x0$6 = descriptors$3[i$7];
    (result$3.push(p.e.createBindGroupLayout(({
      "entries": x0$6
    }))) | 0);
    i$7 = ((1 + i$7) | 0);
  }
  var \u03b46$$3___1 = result$3;
  var \u03b46$$3___2 = $m_Ltrivalibs_graphics_shader_layouts$().N(p.e, result$3);
  var bgls$6 = \u03b46$$3___1;
  var $x_20 = $m_sjs_js_ArrayOpsCommon$();
  var _2$7 = ({});
  var entries$3 = $x_20.a([({
    "binding": 0,
    "visibility": 2,
    "texture": _2$7
  })], []);
  var panelBgl$3 = p.e.createBindGroupLayout(({
    "entries": entries$3
  }));
  var allBgls$3 = ((panelBgl$3 !== null) ? $m_sjs_js_ArrayOpsCommon$().a(bgls$6, [panelBgl$3]) : bgls$6);
  var pl$3 = $m_Ltrivalibs_graphics_shader_layouts$().N(p.e, allBgls$3);
  var upsampleShade = new $c_Ltrivalibs_graphics_painter_Shade(id$3, module$3, null, bgls$6[0], panelBgl$3, pl$3, false, dict$5, dict$6);
  var layers = [];
  var Bindable_this = p.bk(thresholdShade, (void 0), (void 0), (void 0));
  var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("scene", scene);
  var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("threshold", threshold);
  var \u03b4scrutinee197 = e1$proxy1.p;
  var idx = (Bindable_this.E.an.scene | 0);
  while (((Bindable_this.M.length | 0) <= idx)) {
    Bindable_this.M.push(null);
  }
  Bindable_this.M[idx] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee197);
  var \u03b4scrutinee201 = (+e2$proxy1.p);
  var idx$2 = (Bindable_this.E.B.threshold | 0);
  if (((idx$2 < (Bindable_this.o.length | 0)) && (Bindable_this.o[idx$2] !== null))) {
    var BufferBinding_this$5 = Bindable_this.o[idx$2];
    BufferBinding_this$5.v.r(BufferBinding_this$5.g, \u03b4scrutinee201);
    var $x_22 = BufferBinding_this$5.u.queue;
    var $x_21 = BufferBinding_this$5.s;
    var s$proxy5 = BufferBinding_this$5.g;
    $x_22.writeBuffer($x_21, 0.0, s$proxy5.dv.buffer);
  } else {
    var uv$2 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var device$proxy1 = Bindable_this.ix.e;
    var buffer$3 = new ArrayBuffer(4);
    var arr$proxy3 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$3), 1);
    var b$3$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy3.dv, 0), device$proxy1, uv$2);
    b$3$1.v.r(b$3$1.g, \u03b4scrutinee201);
    var $x_24 = b$3$1.u.queue;
    var $x_23 = b$3$1.s;
    var s$proxy6 = b$3$1.g;
    $x_24.writeBuffer($x_23, 0.0, s$proxy6.dv.buffer);
    while (((Bindable_this.o.length | 0) <= idx$2)) {
      Bindable_this.o.push(null);
    }
    Bindable_this.o[idx$2] = b$3$1;
  }
  layers.push(Bindable_this);
  var di = 0;
  while ((di < ((mipLevels - 1) | 0))) {
    var mipSource$1 = di;
    var mipTarget$1 = ((1 + di) | 0);
    var Bindable_this$5 = p.bk(downsampleShade, (void 0), mipSource$1, mipTarget$1);
    var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("blurRadius", b);
    var e2$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var \u03b4scrutinee212 = e1$proxy2.p;
    var idx$3 = (Bindable_this$5.E.B.blurRadius | 0);
    while (((Bindable_this$5.o.length | 0) <= idx$3)) {
      Bindable_this$5.o.push(null);
    }
    Bindable_this$5.o[idx$3] = \u03b4scrutinee212;
    var \u03b4scrutinee224 = e2$proxy2.p;
    var idx$4 = (Bindable_this$5.E.B.samp | 0);
    while (((Bindable_this$5.o.length | 0) <= idx$4)) {
      Bindable_this$5.o.push(null);
    }
    Bindable_this$5.o[idx$4] = \u03b4scrutinee224;
    layers.push(Bindable_this$5);
    di = ((1 + di) | 0);
  }
  var ui = ((mipLevels - 2) | 0);
  while ((ui >= 0)) {
    var Bindable_this$8 = p.bk(upsampleShade, $m_Ltrivalibs_graphics_painter_BlendState$().kH, ((1 + ui) | 0), ui);
    var e1$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("blurRadius", b);
    var e2$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var \u03b4scrutinee234 = e1$proxy3.p;
    var idx$5 = (Bindable_this$8.E.B.blurRadius | 0);
    while (((Bindable_this$8.o.length | 0) <= idx$5)) {
      Bindable_this$8.o.push(null);
    }
    Bindable_this$8.o[idx$5] = \u03b4scrutinee234;
    var \u03b4scrutinee246 = e2$proxy3.p;
    var idx$6 = (Bindable_this$8.E.B.samp | 0);
    while (((Bindable_this$8.o.length | 0) <= idx$6)) {
      Bindable_this$8.o.push(null);
    }
    Bindable_this$8.o[idx$6] = \u03b4scrutinee246;
    layers.push(Bindable_this$8);
    ui = ((ui - 1) | 0);
  }
  var bloomP = p.b8((void 0), (void 0), (void 0), (void 0), (void 0), mipLevels, (void 0), "rgba16float", (void 0), (void 0), (void 0), (void 0), layers);
  var program$4 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  var d$3 = ({});
  var ctx$3 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$3), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg$3 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev$3 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().k;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().k = reg$3;
  try {
    var coord = $m_Ltrivalibs_graphics_math_gpu_ivec2$().bi($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fU(ctx$3.f7));
    var $x_26 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().f8();
    var AssignTarget_this$3 = ctx$3.as.a1("color");
    var value$proxy4 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().mk($m_Ltrivalibs_graphics_math_gpu_expr$package$().fS($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "scene"), coord), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ae(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().nW($m_Ltrivalibs_graphics_math_gpu_expr$package$().fS($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "bloom"), coord), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ae(), ctx$3.S.n("intensity")));
    var $x_25 = $x_26.h((((("  " + AssignTarget_this$3.R) + " = ") + value$proxy4.c) + ";"));
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().k = prev$3;
  }
  program$4.a5 = $x_25;
  var array$54 = reg$3.Y;
  var len$6 = (array$54.length | 0);
  var i$8 = 0;
  while ((i$8 < len$6)) {
    $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program$4, array$54[i$8]);
    i$8 = ((1 + i$8) | 0);
  }
  var b$5 = program$4.a5;
  var helperFns$proxy4 = program$4.at();
  var id$4 = p.w;
  p.w = ((1 + p.w) | 0);
  var names$10 = $m_sjs_js_ArrayOpsCommon$().a(["intensity"], []);
  var dict$7 = ({});
  var i$7$1 = 0;
  while ((i$7$1 < (names$10.length | 0))) {
    dict$7[names$10[i$7$1]] = i$7$1;
    i$7$1 = ((1 + i$7$1) | 0);
  }
  var names$11 = $m_sjs_js_ArrayOpsCommon$().a(["scene"], $m_sjs_js_ArrayOpsCommon$().a(["bloom"], []));
  var dict$8 = ({});
  var i$8$1 = 0;
  while ((i$8$1 < (names$11.length | 0))) {
    dict$8[names$11[i$8$1]] = i$8$1;
    i$8$1 = ((1 + i$8$1) | 0);
  }
  var sd$4 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$5, helperFns$proxy4);
  var vertexInputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls$4 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["intensity"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).a4.I()], []));
  var fragBuiltinParams$4 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$4 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$4, vertexInputStruct$4, vertexOutputStruct$4, fragmentOutputStruct$4, groupDecls$4, sd$4.ad, sd$4.ac, fragBuiltinParams$4);
  var wgsl$4 = (baseWgsl$4 + "\n\n@group(1) @binding(0) var scene: texture_2d<f32>;\n@group(1) @binding(1) var bloom: texture_2d<f32>;");
  var args$proxy4 = $m_sr_ScalaRunTime$().av(new ($d_sjs_js_Any.r().C)([wgsl$4]));
  console.log(...$m_sjsr_Compat$().au(args$proxy4));
  var module$4 = p.e.createShaderModule(({
    "code": wgsl$4
  }));
  var $x_28 = $m_sjs_js_ArrayOpsCommon$();
  var $x_27 = $m_sjs_js_ArrayOpsCommon$();
  var _2$8 = ({
    "type": "uniform"
  });
  var descriptors$4 = $x_28.a([$x_27.a([({
    "binding": 0,
    "visibility": 2,
    "buffer": _2$8
  })], [])], []);
  var result$4 = [];
  var len$7 = (descriptors$4.length | 0);
  var i$9 = 0;
  while ((i$9 < len$7)) {
    var x0$8 = descriptors$4[i$9];
    (result$4.push(p.e.createBindGroupLayout(({
      "entries": x0$8
    }))) | 0);
    i$9 = ((1 + i$9) | 0);
  }
  var \u03b46$$4___1 = result$4;
  var \u03b46$$4___2 = $m_Ltrivalibs_graphics_shader_layouts$().N(p.e, result$4);
  var bgls$8 = \u03b46$$4___1;
  var $x_30 = $m_sjs_js_ArrayOpsCommon$();
  var _2$9 = ({});
  var $x_29 = $m_sjs_js_ArrayOpsCommon$();
  var _2$10 = ({});
  var entries$4 = $x_30.a([({
    "binding": 0,
    "visibility": 2,
    "texture": _2$9
  })], $x_29.a([({
    "binding": 1,
    "visibility": 2,
    "texture": _2$10
  })], []));
  var panelBgl$4 = p.e.createBindGroupLayout(({
    "entries": entries$4
  }));
  var allBgls$4 = ((panelBgl$4 !== null) ? $m_sjs_js_ArrayOpsCommon$().a(bgls$8, [panelBgl$4]) : bgls$8);
  var pl$4 = $m_Ltrivalibs_graphics_shader_layouts$().N(p.e, allBgls$4);
  var compositeShade = new $c_Ltrivalibs_graphics_painter_Shade(id$4, module$4, null, bgls$8[0], panelBgl$4, pl$4, false, dict$7, dict$8);
  var Bindable_this$11 = p.bk(compositeShade, (void 0), (void 0), (void 0));
  var e1$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("scene", scene);
  var e2$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("bloom", bloomP);
  var e3$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("intensity", b$2);
  var \u03b4scrutinee325 = e1$proxy4.p;
  var idx$7 = (Bindable_this$11.E.an.scene | 0);
  while (((Bindable_this$11.M.length | 0) <= idx$7)) {
    Bindable_this$11.M.push(null);
  }
  Bindable_this$11.M[idx$7] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee325);
  var \u03b4scrutinee335 = e2$proxy4.p;
  var idx$8 = (Bindable_this$11.E.an.bloom | 0);
  while (((Bindable_this$11.M.length | 0) <= idx$8)) {
    Bindable_this$11.M.push(null);
  }
  Bindable_this$11.M[idx$8] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee335);
  var \u03b4scrutinee339 = e3$proxy1.p;
  var idx$9 = (Bindable_this$11.E.B.intensity | 0);
  while (((Bindable_this$11.o.length | 0) <= idx$9)) {
    Bindable_this$11.o.push(null);
  }
  Bindable_this$11.o[idx$9] = \u03b4scrutinee339;
  return new $c_Lsketchlib_utils_bloom_Bloom$$anon$1(bloomP, p.b8((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), Bindable_this$11, (void 0)), p, b, b$2);
});
var $d_Lsketchlib_utils_bloom_Bloom$ = new $TypeData().i($c_Lsketchlib_utils_bloom_Bloom$, "sketchlib.utils.bloom.Bloom$", ({
  dw: 1
}));
var $n_Lsketchlib_utils_bloom_Bloom$;
function $m_Lsketchlib_utils_bloom_Bloom$() {
  if ((!$n_Lsketchlib_utils_bloom_Bloom$)) {
    $n_Lsketchlib_utils_bloom_Bloom$ = new $c_Lsketchlib_utils_bloom_Bloom$();
  }
  return $n_Lsketchlib_utils_bloom_Bloom$;
}
/** @constructor */
function $c_Lsketchlib_utils_mirror_MirrorReflection$() {
}
$p = $c_Lsketchlib_utils_mirror_MirrorReflection$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_mirror_MirrorReflection$;
/** @constructor */
function $h_Lsketchlib_utils_mirror_MirrorReflection$() {
}
$h_Lsketchlib_utils_mirror_MirrorReflection$.prototype = $p;
$p.mp = (function(p, shapes, vpName, alphaScale, camera, mirror, blurStrength, mipLevels, clearColor) {
  if ((mipLevels < 2)) {
    var message$proxy1 = (("MirrorReflection mipLevels must be >= 2 (got " + mipLevels) + ")");
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy1)).aN;
  }
  var reflMat = mirror.oa();
  var maxBlur = ((mipLevels - 1) | 0);
  var pn = mirror.g5;
  var pd = mirror.g4;
  var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
  var uv$proxy1 = ul$proxy1.b2;
  var buffer = new ArrayBuffer(64);
  var arr$proxy1 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
  var uVp = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy1.dv, 0), p.e, uv$proxy1);
  var ul$proxy2 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
  var uv$proxy2 = ul$proxy2.b2;
  var buffer$2 = new ArrayBuffer(64);
  var arr$proxy2 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
  var uInvVp = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy2.dv, 0), p.e, uv$proxy2);
  var ul$proxy3 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy3 = ul$proxy3.b2;
  var buffer$3 = new ArrayBuffer(4);
  var arr$proxy3 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$3), 1);
  var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy3.dv, 0), p.e, uv$proxy3);
  b.v.r(b.g, blurStrength);
  var $x_2 = b.u.queue;
  var $x_1 = b.s;
  var s$proxy1 = b.g;
  $x_2.writeBuffer($x_1, 0.0, s$proxy1.dv.buffer);
  var sampler = p.j2("linear", "linear", "linear", "clamp-to-edge", (void 0), (void 0));
  var mirrorPanel = p.b8((void 0), (void 0), clearColor, true, (void 0), (void 0), (void 0), "rgba16float", (void 0), (void 0), shapes, (void 0), (void 0));
  var dict$proxy1 = mirrorPanel.gj;
  dict$proxy1[vpName] = uVp;
  var program = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  var d = ({});
  var ctx = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().k;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().k = reg;
  try {
    var uv$3 = ctx.aA.n("uv");
    var d$1 = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "d");
    var ndc = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "ndc");
    var worldH = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "worldH");
    var worldPos = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "worldPos");
    var t = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "t");
    var x0 = d$1.T($m_Ltrivalibs_graphics_math_gpu_expr$package$().mE($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "depth"), $m_Ltrivalibs_graphics_math_gpu_ivec2$().bi($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fU(ctx.f7))));
    var $x_5 = $m_Ltrivalibs_graphics_math_gpu_vec3$();
    var $x_4 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().lf($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ah($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a6().G(uv$3), 2.0), 1.0);
    var e$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ah($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a6().C(uv$3), 2.0);
    var x1 = ndc.T($x_5.aR($x_4, $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aU().aV((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aF(1.0)) + " - ") + e$proxy1.c) + ")")), d$1));
    var x2 = worldH.T($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().hO(ctx.S.n("invVp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gC(), $m_Ltrivalibs_graphics_math_gpu_vec4$().aS(ndc, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().t().h(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ae(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$()));
    var x3 = worldPos.T($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().mH($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().hP(worldH), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aj(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ae().af(worldH)));
    var x4 = t.T($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().lq($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ld($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().lf($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aj().ls($m_Ltrivalibs_graphics_math_gpu_vec3$().aR($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().t().h(pn.J), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().t().h(pn.Q), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().t().h(pn.K)), worldPos), pd), alphaScale)));
    var AssignTarget_this = ctx.as.a1("color");
    var value$proxy1 = $m_Ltrivalibs_graphics_math_gpu_vec4$().aS($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().hP($m_Ltrivalibs_graphics_math_gpu_expr$package$().fS($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "col"), $m_Ltrivalibs_graphics_math_gpu_ivec2$().bi($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fU(ctx.f7)))), t);
    var $x_3 = $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs([x0, x1, x2, x3, x4, (((("  " + AssignTarget_this.R) + " = ") + value$proxy1.c) + ";")]), "", "\n", "");
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().k = prev;
  }
  program.a5 = $x_3;
  var array$1 = reg.Y;
  var len = (array$1.length | 0);
  var i = 0;
  while ((i < len)) {
    $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$1[i]);
    i = ((1 + i) | 0);
  }
  var b$1 = program.a5;
  var helperFns$proxy1 = program.at();
  var id = p.w;
  p.w = ((1 + p.w) | 0);
  var names = $m_sjs_js_ArrayOpsCommon$().a(["invVp"], []);
  var dict = ({});
  var i$1 = 0;
  while ((i$1 < (names.length | 0))) {
    dict[names[i$1]] = i$1;
    i$1 = ((1 + i$1) | 0);
  }
  var names$2 = $m_sjs_js_ArrayOpsCommon$().a(["col"], $m_sjs_js_ArrayOpsCommon$().a(["depth"], []));
  var dict$2 = ({});
  var i$2 = 0;
  while ((i$2 < (names$2.length | 0))) {
    dict$2[names$2[i$2]] = i$2;
    i$2 = ((1 + i$2) | 0);
  }
  var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$1, helperFns$proxy1);
  var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["invVp"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).a4.I()], []));
  var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.ad, sd.ac, fragBuiltinParams);
  var wgsl = (baseWgsl + "\n\n@group(1) @binding(0) var col: texture_2d<f32>;\n@group(1) @binding(1) var depth: texture_depth_2d;");
  var args$proxy1 = $m_sr_ScalaRunTime$().av(new ($d_sjs_js_Any.r().C)([wgsl]));
  console.log(...$m_sjsr_Compat$().au(args$proxy1));
  var module = p.e.createShaderModule(({
    "code": wgsl
  }));
  var $x_7 = $m_sjs_js_ArrayOpsCommon$();
  var $x_6 = $m_sjs_js_ArrayOpsCommon$();
  var _2 = ({
    "type": "uniform"
  });
  var descriptors = $x_7.a([$x_6.a([({
    "binding": 0,
    "visibility": 2,
    "buffer": _2
  })], [])], []);
  var result = [];
  var len$1 = (descriptors.length | 0);
  var i$3 = 0;
  while ((i$3 < len$1)) {
    var x0$2 = descriptors[i$3];
    (result.push(p.e.createBindGroupLayout(({
      "entries": x0$2
    }))) | 0);
    i$3 = ((1 + i$3) | 0);
  }
  var \u03b46$___1 = result;
  var \u03b46$___2 = $m_Ltrivalibs_graphics_shader_layouts$().N(p.e, result);
  var bgls$2 = \u03b46$___1;
  var $x_9 = $m_sjs_js_ArrayOpsCommon$();
  var _2$1 = ({});
  var $x_8 = $m_sjs_js_ArrayOpsCommon$();
  var _2$2 = ({
    "sampleType": "depth"
  });
  var entries = $x_9.a([({
    "binding": 0,
    "visibility": 2,
    "texture": _2$1
  })], $x_8.a([({
    "binding": 1,
    "visibility": 2,
    "texture": _2$2
  })], []));
  var panelBgl = p.e.createBindGroupLayout(({
    "entries": entries
  }));
  var allBgls = ((panelBgl !== null) ? $m_sjs_js_ArrayOpsCommon$().a(bgls$2, [panelBgl]) : bgls$2);
  var pl = $m_Ltrivalibs_graphics_shader_layouts$().N(p.e, allBgls);
  var bakeShade = new $c_Ltrivalibs_graphics_painter_Shade(id, module, null, bgls$2[0], panelBgl, pl, false, dict, dict$2);
  var program$2 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  var d$2 = ({});
  var ctx$1 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().k;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().k = reg$1;
  try {
    var $x_11 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().f8();
    var AssignTarget_this$1 = ctx$1.as.a1("color");
    var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy1 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$().iL;
    var a1$proxy1 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex");
    var a2$proxy1 = ctx$1.S.n("samp");
    var a3$proxy1 = ctx$1.aA.n("uv");
    var a4$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().t().h(4.0);
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().hN(fn$proxy1);
    var value$proxy2 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((((((WgslFn$_this.hH(fn$proxy1) + "(") + a1$proxy1) + ", ") + a2$proxy1) + ", ") + a3$proxy1) + ", ") + a4$proxy1) + ")"));
    var $x_10 = $x_11.h((((("  " + AssignTarget_this$1.R) + " = ") + value$proxy2.c) + ";"));
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().k = prev$1;
  }
  program$2.a5 = $x_10;
  var array$18 = reg$1.Y;
  var len$2 = (array$18.length | 0);
  var i$4 = 0;
  while ((i$4 < len$2)) {
    $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program$2, array$18[i$4]);
    i$4 = ((1 + i$4) | 0);
  }
  var b$2 = program$2.a5;
  var helperFns$proxy2 = program$2.at();
  var id$2 = p.w;
  p.w = ((1 + p.w) | 0);
  var names$4 = $m_sjs_js_ArrayOpsCommon$().a(["samp"], []);
  var dict$3 = ({});
  var i$3$1 = 0;
  while ((i$3$1 < (names$4.length | 0))) {
    dict$3[names$4[i$3$1]] = i$3$1;
    i$3$1 = ((1 + i$3$1) | 0);
  }
  var names$5 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], []);
  var dict$4 = ({});
  var i$4$1 = 0;
  while ((i$4$1 < (names$5.length | 0))) {
    dict$4[names$5[i$4$1]] = i$4$1;
    i$4$1 = ((1 + i$4$1) | 0);
  }
  var sd$2 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$2, helperFns$proxy2);
  var vertexInputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls$2 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["samp"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).a4.I()], []));
  var fragBuiltinParams$2 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$2 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$2, vertexInputStruct$2, vertexOutputStruct$2, fragmentOutputStruct$2, groupDecls$2, sd$2.ad, sd$2.ac, fragBuiltinParams$2);
  var wgsl$2 = (baseWgsl$2 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
  var args$proxy2 = $m_sr_ScalaRunTime$().av(new ($d_sjs_js_Any.r().C)([wgsl$2]));
  console.log(...$m_sjsr_Compat$().au(args$proxy2));
  var module$2 = p.e.createShaderModule(({
    "code": wgsl$2
  }));
  var $x_13 = $m_sjs_js_ArrayOpsCommon$();
  var $x_12 = $m_sjs_js_ArrayOpsCommon$();
  var _2$3 = ({});
  var descriptors$2 = $x_13.a([$x_12.a([({
    "binding": 0,
    "visibility": 2,
    "sampler": _2$3
  })], [])], []);
  var result$2 = [];
  var len$3 = (descriptors$2.length | 0);
  var i$5 = 0;
  while ((i$5 < len$3)) {
    var x0$4 = descriptors$2[i$5];
    (result$2.push(p.e.createBindGroupLayout(({
      "entries": x0$4
    }))) | 0);
    i$5 = ((1 + i$5) | 0);
  }
  var \u03b46$$2___1 = result$2;
  var \u03b46$$2___2 = $m_Ltrivalibs_graphics_shader_layouts$().N(p.e, result$2);
  var bgls$4 = \u03b46$$2___1;
  var $x_14 = $m_sjs_js_ArrayOpsCommon$();
  var _2$4 = ({});
  var entries$2 = $x_14.a([({
    "binding": 0,
    "visibility": 2,
    "texture": _2$4
  })], []);
  var panelBgl$2 = p.e.createBindGroupLayout(({
    "entries": entries$2
  }));
  var allBgls$2 = ((panelBgl$2 !== null) ? $m_sjs_js_ArrayOpsCommon$().a(bgls$4, [panelBgl$2]) : bgls$4);
  var pl$2 = $m_Ltrivalibs_graphics_shader_layouts$().N(p.e, allBgls$2);
  var downBlurShade = new $c_Ltrivalibs_graphics_painter_Shade(id$2, module$2, null, bgls$4[0], panelBgl$2, pl$2, false, dict$3, dict$4);
  var blurLayers = [];
  var Bindable_this = p.bk(bakeShade, (void 0), (void 0), (void 0));
  var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("col", mirrorPanel);
  var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("depth", mirrorPanel.mv(0, (-1), true));
  var e3$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("invVp", uInvVp);
  var \u03b4scrutinee132 = e1$proxy1.p;
  var idx = (Bindable_this.E.an.col | 0);
  while (((Bindable_this.M.length | 0) <= idx)) {
    Bindable_this.M.push(null);
  }
  Bindable_this.M[idx] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee132);
  var \u03b4scrutinee142 = e2$proxy1.p;
  var idx$2 = (Bindable_this.E.an.depth | 0);
  while (((Bindable_this.M.length | 0) <= idx$2)) {
    Bindable_this.M.push(null);
  }
  Bindable_this.M[idx$2] = \u03b4scrutinee142;
  var \u03b4scrutinee146 = e3$proxy1.p;
  var idx$3 = (Bindable_this.E.B.invVp | 0);
  while (((Bindable_this.o.length | 0) <= idx$3)) {
    Bindable_this.o.push(null);
  }
  Bindable_this.o[idx$3] = \u03b4scrutinee146;
  blurLayers.push(Bindable_this);
  var mi = 0;
  while ((mi < ((mipLevels - 1) | 0))) {
    var mipSource$1 = mi;
    var mipTarget$1 = ((1 + mi) | 0);
    var Bindable_this$5 = p.bk(downBlurShade, (void 0), mipSource$1, mipTarget$1);
    var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var \u03b4scrutinee154 = e1$proxy2.p;
    var idx$4 = (Bindable_this$5.E.B.samp | 0);
    while (((Bindable_this$5.o.length | 0) <= idx$4)) {
      Bindable_this$5.o.push(null);
    }
    Bindable_this$5.o[idx$4] = \u03b4scrutinee154;
    blurLayers.push(Bindable_this$5);
    mi = ((1 + mi) | 0);
  }
  var blurPanel = p.b8((void 0), (void 0), (void 0), (void 0), (void 0), mipLevels, (void 0), "rgba16float", (void 0), (void 0), (void 0), (void 0), blurLayers);
  var program$3 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  var d$3 = ({});
  var ctx$2 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$3), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().k;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().k = reg$2;
  try {
    var uv$4 = ctx$2.aA.n("uv");
    var t$1 = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "t");
    var lod = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "lod");
    var Vec4BaseG_this = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ae();
    var v$proxy1 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().fS($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "col"), $m_Ltrivalibs_graphics_math_gpu_ivec2$().bi($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fU(ctx$2.f7)));
    var x0$5 = t$1.T(Vec4BaseG_this.af(v$proxy1));
    var $x_17 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
    var $x_16 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
    var e$proxy2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aQ(t$1, ctx$2.S.n("blurStrength"));
    var x1$1 = lod.T($x_17.lR($x_16.nj($m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aU().aV((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aF(1.0)) + " + ") + e$proxy2.c) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().t().h(maxBlur)));
    var AssignTarget_this$2 = ctx$2.as.a1("color");
    var value$proxy4 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().oh($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "col"), uv$4, ctx$2.S.n("samp"), lod);
    var $x_15 = $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs([x0$5, x1$1, (((("  " + AssignTarget_this$2.R) + " = ") + value$proxy4.c) + ";")]), "", "\n", "");
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().k = prev$2;
  }
  program$3.a5 = $x_15;
  var array$34 = reg$2.Y;
  var len$4 = (array$34.length | 0);
  var i$6 = 0;
  while ((i$6 < len$4)) {
    $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program$3, array$34[i$6]);
    i$6 = ((1 + i$6) | 0);
  }
  var b$3 = program$3.a5;
  var helperFns$proxy3 = program$3.at();
  var id$3 = p.w;
  p.w = ((1 + p.w) | 0);
  var names$7 = $m_sjs_js_ArrayOpsCommon$().a(["blurStrength"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []));
  var dict$5 = ({});
  var i$5$1 = 0;
  while ((i$5$1 < (names$7.length | 0))) {
    dict$5[names$7[i$5$1]] = i$5$1;
    i$5$1 = ((1 + i$5$1) | 0);
  }
  var names$8 = $m_sjs_js_ArrayOpsCommon$().a(["col"], []);
  var dict$6 = ({});
  var i$6$1 = 0;
  while ((i$6$1 < (names$8.length | 0))) {
    dict$6[names$8[i$6$1]] = i$6$1;
    i$6$1 = ((1 + i$6$1) | 0);
  }
  var sd$3 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$3, helperFns$proxy3);
  var vertexInputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls$3 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["blurStrength"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).a4.I()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).a4.I()], [])));
  var fragBuiltinParams$3 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$3 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$3, vertexInputStruct$3, vertexOutputStruct$3, fragmentOutputStruct$3, groupDecls$3, sd$3.ad, sd$3.ac, fragBuiltinParams$3);
  var wgsl$3 = (baseWgsl$3 + "\n\n@group(1) @binding(0) var col: texture_2d<f32>;");
  var args$proxy3 = $m_sr_ScalaRunTime$().av(new ($d_sjs_js_Any.r().C)([wgsl$3]));
  console.log(...$m_sjsr_Compat$().au(args$proxy3));
  var module$3 = p.e.createShaderModule(({
    "code": wgsl$3
  }));
  var $x_20 = $m_sjs_js_ArrayOpsCommon$();
  var $x_19 = $m_sjs_js_ArrayOpsCommon$();
  var _2$5 = ({
    "type": "uniform"
  });
  var $x_18 = $m_sjs_js_ArrayOpsCommon$();
  var _2$6 = ({});
  var descriptors$3 = $x_20.a([$x_19.a([({
    "binding": 0,
    "visibility": 2,
    "buffer": _2$5
  })], $x_18.a([({
    "binding": 1,
    "visibility": 2,
    "sampler": _2$6
  })], []))], []);
  var result$3 = [];
  var len$5 = (descriptors$3.length | 0);
  var i$7 = 0;
  while ((i$7 < len$5)) {
    var x0$7 = descriptors$3[i$7];
    (result$3.push(p.e.createBindGroupLayout(({
      "entries": x0$7
    }))) | 0);
    i$7 = ((1 + i$7) | 0);
  }
  var \u03b46$$3___1 = result$3;
  var \u03b46$$3___2 = $m_Ltrivalibs_graphics_shader_layouts$().N(p.e, result$3);
  var bgls$6 = \u03b46$$3___1;
  var $x_21 = $m_sjs_js_ArrayOpsCommon$();
  var _2$7 = ({});
  var entries$3 = $x_21.a([({
    "binding": 0,
    "visibility": 2,
    "texture": _2$7
  })], []);
  var panelBgl$3 = p.e.createBindGroupLayout(({
    "entries": entries$3
  }));
  var allBgls$3 = ((panelBgl$3 !== null) ? $m_sjs_js_ArrayOpsCommon$().a(bgls$6, [panelBgl$3]) : bgls$6);
  var pl$3 = $m_Ltrivalibs_graphics_shader_layouts$().N(p.e, allBgls$3);
  var resolveShade = new $c_Ltrivalibs_graphics_painter_Shade(id$3, module$3, null, bgls$6[0], panelBgl$3, pl$3, false, dict$5, dict$6);
  var Bindable_this$7 = p.bk(resolveShade, (void 0), (void 0), (void 0));
  var e1$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("col", blurPanel);
  var e2$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("blurStrength", b);
  var e3$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
  var \u03b4scrutinee232 = e1$proxy3.p;
  var idx$5 = (Bindable_this$7.E.an.col | 0);
  while (((Bindable_this$7.M.length | 0) <= idx$5)) {
    Bindable_this$7.M.push(null);
  }
  Bindable_this$7.M[idx$5] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee232);
  var \u03b4scrutinee236 = e2$proxy2.p;
  var idx$6 = (Bindable_this$7.E.B.blurStrength | 0);
  while (((Bindable_this$7.o.length | 0) <= idx$6)) {
    Bindable_this$7.o.push(null);
  }
  Bindable_this$7.o[idx$6] = \u03b4scrutinee236;
  var \u03b4scrutinee248 = e3$proxy2.p;
  var idx$7 = (Bindable_this$7.E.B.samp | 0);
  while (((Bindable_this$7.o.length | 0) <= idx$7)) {
    Bindable_this$7.o.push(null);
  }
  Bindable_this$7.o[idx$7] = \u03b4scrutinee248;
  var layers$2 = [Bindable_this$7];
  return new $c_Lsketchlib_utils_mirror_MirrorReflection$$anon$1(mirrorPanel, p.b8((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), "rgba16float", (void 0), (void 0), (void 0), (void 0), layers$2), b, camera, reflMat, uVp, uInvVp, p, blurPanel);
});
var $d_Lsketchlib_utils_mirror_MirrorReflection$ = new $TypeData().i($c_Lsketchlib_utils_mirror_MirrorReflection$, "sketchlib.utils.mirror.MirrorReflection$", ({
  dz: 1
}));
var $n_Lsketchlib_utils_mirror_MirrorReflection$;
function $m_Lsketchlib_utils_mirror_MirrorReflection$() {
  if ((!$n_Lsketchlib_utils_mirror_MirrorReflection$)) {
    $n_Lsketchlib_utils_mirror_MirrorReflection$ = new $c_Lsketchlib_utils_mirror_MirrorReflection$();
  }
  return $n_Lsketchlib_utils_mirror_MirrorReflection$;
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
  dB: 1
}));
/** @constructor */
function $c_Ltrivalibs_dev_dev$package$() {
  this.fB = null;
  this.i2 = false;
  $n_Ltrivalibs_dev_dev$package$ = this;
  this.fB = [];
  this.i2 = false;
}
$p = $c_Ltrivalibs_dev_dev$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_dev_dev$package$;
/** @constructor */
function $h_Ltrivalibs_dev_dev$package$() {
}
$h_Ltrivalibs_dev_dev$package$.prototype = $p;
$p.mF = (function() {
  return (import.meta.hot !== (void 0));
});
$p.nS = (function() {
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
$p.ov = (function(label) {
  return ((("trivalibs:dev:" + $m_Ltrivalibs_dev_dev$package$().nS()) + ":") + label);
});
$p.j4 = (function() {
  return window.sessionStorage;
});
$p.o9 = (function(key) {
  var raw = $m_Ltrivalibs_dev_dev$package$().j4().getItem(key);
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
$p.oP = (function(key, json) {
  $m_Ltrivalibs_dev_dev$package$().j4().setItem(key, JSON.stringify(json));
});
$p.oe = (function(key) {
  $m_Ltrivalibs_dev_dev$package$().j4().removeItem(key);
});
$p.mN = (function() {
  if ((!$m_Ltrivalibs_dev_dev$package$().i2)) {
    $m_Ltrivalibs_dev_dev$package$().i2 = true;
    window.addEventListener("pagehide", ((_$1$2) => {
      var i = 0;
      while ((i < ($m_Ltrivalibs_dev_dev$package$().fB.length | 0))) {
        $m_Ltrivalibs_dev_dev$package$().fB[i].fP();
        i = ((1 + i) | 0);
      }
    }));
  }
});
$p.ob = (function(flush) {
  $m_Ltrivalibs_dev_dev$package$().mN();
  $m_Ltrivalibs_dev_dev$package$().fB.push(flush);
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    var idx = $m_sjs_js_ArrayOps$().n8($m_Ltrivalibs_dev_dev$package$().fB, flush, 0);
    if ((idx >= 0)) {
      $m_Ltrivalibs_dev_dev$package$().fB.splice(idx, 1);
    }
  }));
});
var $d_Ltrivalibs_dev_dev$package$ = new $TypeData().i($c_Ltrivalibs_dev_dev$package$, "trivalibs.dev.dev$package$", ({
  dC: 1
}));
var $n_Ltrivalibs_dev_dev$package$;
function $m_Ltrivalibs_dev_dev$package$() {
  if ((!$n_Ltrivalibs_dev_dev$package$)) {
    $n_Ltrivalibs_dev_dev$package$ = new $c_Ltrivalibs_dev_dev$package$();
  }
  return $n_Ltrivalibs_dev_dev$package$;
}
function $p_Ltrivalibs_dev_devPreserve$__encodeCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any($thiz, cam) {
  return [cam.ab.J, cam.ab.Q, cam.ab.K, cam.ar, cam.b3];
}
function $p_Ltrivalibs_dev_devPreserve$__applyCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any__V($thiz, cam, json) {
  if ((!(!Array.isArray(json)))) {
    if (((json.length | 0) >= 5)) {
      var pos$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((+json[0]), (+json[1]), (+json[2]));
      var rotH$1 = (+json[3]);
      var rotV$1 = (+json[4]);
      var fov$1 = cam.fM;
      var aspect$1 = cam.gl;
      var near$1 = cam.fN;
      var far$1 = cam.fL;
      cam.j3(fov$1, aspect$1, near$1, far$1, rotH$1, rotV$1, pos$1);
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
$p.mr = (function(cam, label) {
  if ((!$m_Ltrivalibs_dev_dev$package$().mF())) {
    return new $c_Ltrivalibs_dev_DevHandle(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => (void 0))));
  } else {
    var sk = $m_Ltrivalibs_dev_dev$package$().ov(label);
    var initPos = cam.ab;
    var initRotH = cam.ar;
    var initRotV = cam.b3;
    var stored = $m_Ltrivalibs_dev_dev$package$().o9(sk);
    if ((stored !== null)) {
      $p_Ltrivalibs_dev_devPreserve$__applyCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any__V(this, cam, stored);
    }
    return new $c_Ltrivalibs_dev_DevHandle(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(((unregister) => (() => {
      unregister.fP();
      $m_Ltrivalibs_dev_dev$package$().oe(sk);
      var fov$proxy1 = cam.fM;
      var aspect$proxy1 = cam.gl;
      var near$proxy1 = cam.fN;
      var far$proxy1 = cam.fL;
      cam.j3(fov$proxy1, aspect$proxy1, near$proxy1, far$proxy1, initRotH, initRotV, initPos);
    }))($m_Ltrivalibs_dev_dev$package$().ob(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
      $m_Ltrivalibs_dev_dev$package$().oP(sk, $p_Ltrivalibs_dev_devPreserve$__encodeCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any(this, cam));
    }))))));
  }
});
var $d_Ltrivalibs_dev_devPreserve$ = new $TypeData().i($c_Ltrivalibs_dev_devPreserve$, "trivalibs.dev.devPreserve$", ({
  dD: 1
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
  this.g = null;
  this.u = null;
  this.v = null;
  this.s = null;
  this.g = buffer;
  this.u = device;
  this.v = uv;
  var b = (buffer.dv.byteLength | 0);
  var value = ((b < 16) ? 16 : b);
  var $x_1 = device.createBuffer(({
    "size": value,
    "usage": 72
  }));
  this.s = $x_1;
}
$p = $c_Ltrivalibs_graphics_buffers_BufferBinding.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_BufferBinding;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_BufferBinding() {
}
$h_Ltrivalibs_graphics_buffers_BufferBinding.prototype = $p;
function $isArrayOf_Ltrivalibs_graphics_buffers_BufferBinding(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aP)));
}
var $d_Ltrivalibs_graphics_buffers_BufferBinding = new $TypeData().i($c_Ltrivalibs_graphics_buffers_BufferBinding, "trivalibs.graphics.buffers.BufferBinding", ({
  aP: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Box(center, size, frontTopLeft, frontTopRight, frontBottomLeft, frontBottomRight, backTopLeft, backTopRight, backBottomLeft, backBottomRight) {
  this.k9 = null;
  this.ka = null;
  this.k7 = null;
  this.k8 = null;
  this.k5 = null;
  this.k6 = null;
  this.k3 = null;
  this.k4 = null;
  this.k9 = frontTopLeft;
  this.ka = frontTopRight;
  this.k7 = frontBottomLeft;
  this.k8 = frontBottomRight;
  this.k5 = backTopLeft;
  this.k6 = backTopRight;
  this.k3 = backBottomLeft;
  this.k4 = backBottomRight;
}
$p = $c_Ltrivalibs_graphics_geometry_Box.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Box;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Box() {
}
$h_Ltrivalibs_graphics_geometry_Box.prototype = $p;
$p.oA = (function(f) {
  return $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().b7(f.aB(this.k5, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0)), f.aB(this.k9, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0)), f.aB(this.ka, new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0)), f.aB(this.k6, new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 1.0)));
});
$p.mw = (function(f) {
  return $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().b7(f.aB(this.k7, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0)), f.aB(this.k3, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0)), f.aB(this.k4, new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0)), f.aB(this.k8, new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0)));
});
var $d_Ltrivalibs_graphics_geometry_Box = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Box, "trivalibs.graphics.geometry.Box", ({
  dL: 1
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
$p.mn = (function(center, width, height, depth) {
  var hw = (0.5 * width);
  var hh = (0.5 * height);
  var hd = (0.5 * depth);
  var cx = center.J;
  var cy = center.Q;
  var cz = center.K;
  return new $c_Ltrivalibs_graphics_geometry_Box(center, new $c_Ltrivalibs_graphics_math_cpu_Vec3(width, height, depth), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy + hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy + hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy - hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy - hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy + hh), (cz - hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy + hh), (cz - hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy - hh), (cz - hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy - hh), (cz - hd)));
});
var $d_Ltrivalibs_graphics_geometry_Box$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Box$, "trivalibs.graphics.geometry.Box$", ({
  dM: 1
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
  this.kb = null;
  this.i3 = null;
  this.kb = vertices;
  this.i3 = indices;
}
$p = $c_Ltrivalibs_graphics_geometry_BufferedGeometry.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_BufferedGeometry;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_BufferedGeometry() {
}
$h_Ltrivalibs_graphics_geometry_BufferedGeometry.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_BufferedGeometry = new $TypeData().i($c_Ltrivalibs_graphics_geometry_BufferedGeometry, "trivalibs.graphics.geometry.BufferedGeometry", ({
  dN: 1
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
  dO: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Mesh(evidence$1) {
  this.i4 = null;
  this.U = null;
  this.kc = null;
  this.h7 = null;
  this.h6 = null;
  this.i4 = evidence$1;
  this.U = [];
  this.kc = [];
  this.h7 = [];
  this.h6 = ({});
}
$p = $c_Ltrivalibs_graphics_geometry_Mesh.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Mesh;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Mesh() {
}
$h_Ltrivalibs_graphics_geometry_Mesh.prototype = $p;
$p.mi = (function(face, normal, section) {
  var faceIdx = (this.U.length | 0);
  this.U.push(face);
  this.kc.push(new $c_Ltrivalibs_graphics_geometry_FaceData(normal, section));
  var n = (face.length | 0);
  var slot = 0;
  while ((slot < n)) {
    var v = face[slot];
    var key = $m_Ltrivalibs_graphics_geometry_package$package$().o7(this.i4.lU(v));
    if ($m_sjs_js_Any$ObjectCompanionOps$().n5(Object, this.h6, key)) {
      var $x_2 = this.h7;
      var dict = this.h6;
      if ((!(!(!$m_sjs_js_WrappedDictionary$Cache$().jD.call(dict, key))))) {
        throw new $c_ju_NoSuchElementException(("key not found: " + key));
      }
      var $x_1 = $x_2[(dict[key] | 0)];
      $x_1.kg.push(new $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIdx, slot));
    } else {
      var idx = (this.h7.length | 0);
      var dict$1 = this.h6;
      dict$1[key] = idx;
      this.h7.push(new $c_Ltrivalibs_graphics_geometry_VertexPosition(this.i4.lU(v), [new $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIdx, slot)]));
    }
    slot = ((1 + slot) | 0);
  }
});
var $d_Ltrivalibs_graphics_geometry_Mesh = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Mesh, "trivalibs.graphics.geometry.Mesh", ({
  dR: 1
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
$p.iT = (function(faces, normal, section, evidence$1) {
  var m = new $c_Ltrivalibs_graphics_geometry_Mesh(evidence$1);
  $m_Ltrivalibs_graphics_geometry_mesh$package$().mj(m, faces, normal, section, evidence$1);
  return m;
});
var $d_Ltrivalibs_graphics_geometry_Mesh$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Mesh$, "trivalibs.graphics.geometry.Mesh$", ({
  dS: 1
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
  this.g5 = null;
  this.g4 = 0.0;
  this.g5 = normal;
  this.g4 = d;
}
$p = $c_Ltrivalibs_graphics_geometry_Plane.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Plane;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Plane() {
}
$h_Ltrivalibs_graphics_geometry_Plane.prototype = $p;
$p.oa = (function() {
  var a = this.g5.J;
  var b = this.g5.Q;
  var c = this.g5.K;
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4((1.0 - ((2.0 * a) * a)), (((-2.0) * a) * b), (((-2.0) * a) * c), 0.0, (((-2.0) * a) * b), (1.0 - ((2.0 * b) * b)), (((-2.0) * b) * c), 0.0, (((-2.0) * a) * c), (((-2.0) * b) * c), (1.0 - ((2.0 * c) * c)), 0.0, ((2.0 * a) * this.g4), ((2.0 * b) * this.g4), ((2.0 * c) * this.g4), 1.0);
});
var $d_Ltrivalibs_graphics_geometry_Plane = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Plane, "trivalibs.graphics.geometry.Plane", ({
  dT: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Plane$() {
  this.kd = null;
  $n_Ltrivalibs_graphics_geometry_Plane$ = this;
  this.kd = new $c_Ltrivalibs_graphics_geometry_Plane(new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), 0.0);
}
$p = $c_Ltrivalibs_graphics_geometry_Plane$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Plane$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Plane$() {
}
$h_Ltrivalibs_graphics_geometry_Plane$.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_Plane$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Plane$, "trivalibs.graphics.geometry.Plane$", ({
  dU: 1
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
  this.md = 0;
  this.me = 0;
  this.md = faceIndex;
  this.me = vertexSlot;
}
$p = $c_Ltrivalibs_graphics_geometry_PositionFaceRef.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_PositionFaceRef;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_PositionFaceRef() {
}
$h_Ltrivalibs_graphics_geometry_PositionFaceRef.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_PositionFaceRef = new $TypeData().i($c_Ltrivalibs_graphics_geometry_PositionFaceRef, "trivalibs.graphics.geometry.PositionFaceRef", ({
  dW: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexPosition(position, faces) {
  this.kg = null;
  this.kg = faces;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexPosition.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexPosition;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexPosition() {
}
$h_Ltrivalibs_graphics_geometry_VertexPosition.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_VertexPosition = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexPosition, "trivalibs.graphics.geometry.VertexPosition", ({
  e1: 1
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
$p.j0 = (function(idxBuf, vertexCount) {
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
  e2: 1
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
$p.mj = (function(m, faces, normal, section, evidence$1) {
  var i = 0;
  while ((i < (faces.length | 0))) {
    m.mi(faces[i], normal, section);
    i = ((1 + i) | 0);
  }
});
var $d_Ltrivalibs_graphics_geometry_mesh$package$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_mesh$package$, "trivalibs.graphics.geometry.mesh$package$", ({
  e3: 1
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
$p.o7 = (function(v) {
  return (((($doubleToInt((10000.0 * v.J)) + ",") + $doubleToInt((10000.0 * v.Q))) + ",") + $doubleToInt((10000.0 * v.K)));
});
var $d_Ltrivalibs_graphics_geometry_package$package$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_package$package$, "trivalibs.graphics.geometry.package$package$", ({
  e4: 1
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
$p.b7 = (function(tl, bl, br, tr) {
  return [tl, bl, br, tr];
});
var $d_Ltrivalibs_graphics_geometry_polygon$package$Quad$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_polygon$package$Quad$, "trivalibs.graphics.geometry.polygon$package$Quad$", ({
  e6: 1
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
  var a00 = (+x$2.gE(m));
  var a01 = (+x$2.gF(m));
  var a02 = (+x$2.gG(m));
  var a03 = (+x$2.gH(m));
  var a10 = (+x$2.gI(m));
  var a11 = (+x$2.gJ(m));
  var a12 = (+x$2.gK(m));
  var a13 = (+x$2.gL(m));
  var a20 = (+x$2.gM(m));
  var a21 = (+x$2.gN(m));
  var a22 = (+x$2.gO(m));
  var a23 = (+x$2.gP(m));
  var a30 = (+x$2.gQ(m));
  var a31 = (+x$2.gR(m));
  var a32 = (+x$2.gS(m));
  var a33 = (+x$2.gT(m));
  var b00 = (+x$2.gE(other));
  var b01 = (+x$2.gF(other));
  var b02 = (+x$2.gG(other));
  var b03 = (+x$2.gH(other));
  var b10 = (+x$2.gI(other));
  var b11 = (+x$2.gJ(other));
  var b12 = (+x$2.gK(other));
  var b13 = (+x$2.gL(other));
  var b20 = (+x$2.gM(other));
  var b21 = (+x$2.gN(other));
  var b22 = (+x$2.gO(other));
  var b23 = (+x$2.gP(other));
  var b30 = (+x$2.gQ(other));
  var b31 = (+x$2.gR(other));
  var b32 = (+x$2.gS(other));
  var b33 = (+x$2.gT(other));
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4(((((a00 * b00) + (a10 * b01)) + (a20 * b02)) + (a30 * b03)), ((((a01 * b00) + (a11 * b01)) + (a21 * b02)) + (a31 * b03)), ((((a02 * b00) + (a12 * b01)) + (a22 * b02)) + (a32 * b03)), ((((a03 * b00) + (a13 * b01)) + (a23 * b02)) + (a33 * b03)), ((((a00 * b10) + (a10 * b11)) + (a20 * b12)) + (a30 * b13)), ((((a01 * b10) + (a11 * b11)) + (a21 * b12)) + (a31 * b13)), ((((a02 * b10) + (a12 * b11)) + (a22 * b12)) + (a32 * b13)), ((((a03 * b10) + (a13 * b11)) + (a23 * b12)) + (a33 * b13)), ((((a00 * b20) + (a10 * b21)) + (a20 * b22)) + (a30 * b23)), ((((a01 * b20) + (a11 * b21)) + (a21 * b22)) + (a31 * b23)), ((((a02 * b20) + (a12 * b21)) + (a22 * b22)) + (a32 * b23)), ((((a03 * b20) + (a13 * b21)) + (a23 * b22)) + (a33 * b23)), ((((a00 * b30) + (a10 * b31)) + (a20 * b32)) + (a30 * b33)), ((((a01 * b30) + (a11 * b31)) + (a21 * b32)) + (a31 * b33)), ((((a02 * b30) + (a12 * b31)) + (a22 * b32)) + (a32 * b33)), ((((a03 * b30) + (a13 * b31)) + (a23 * b32)) + (a33 * b33)));
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($thiz, m, x$2) {
  var a00 = (+x$2.gE(m));
  var a01 = (+x$2.gF(m));
  var a02 = (+x$2.gG(m));
  var a03 = (+x$2.gH(m));
  var a10 = (+x$2.gI(m));
  var a11 = (+x$2.gJ(m));
  var a12 = (+x$2.gK(m));
  var a13 = (+x$2.gL(m));
  var a20 = (+x$2.gM(m));
  var a21 = (+x$2.gN(m));
  var a22 = (+x$2.gO(m));
  var a23 = (+x$2.gP(m));
  var a30 = (+x$2.gQ(m));
  var a31 = (+x$2.gR(m));
  var a32 = (+x$2.gS(m));
  var a33 = (+x$2.gT(m));
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
  mb.lA(m, (+x$4.gE(other)));
  mb.lB(m, (+x$4.gF(other)));
  mb.lC(m, (+x$4.gG(other)));
  mb.lD(m, (+x$4.gH(other)));
  mb.lE(m, (+x$4.gI(other)));
  mb.lF(m, (+x$4.gJ(other)));
  mb.lG(m, (+x$4.gK(other)));
  mb.lH(m, (+x$4.gL(other)));
  mb.lI(m, (+x$4.gM(other)));
  mb.lJ(m, (+x$4.gN(other)));
  mb.lK(m, (+x$4.gO(other)));
  mb.lL(m, (+x$4.gP(other)));
  mb.lM(m, (+x$4.gQ(other)));
  mb.lN(m, (+x$4.gR(other)));
  mb.lO(m, (+x$4.gS(other)));
  mb.lP(m, (+x$4.gT(other)));
}
function $f_Ltrivalibs_graphics_math_Vec2MutableOps__set__O__Ltrivalibs_graphics_math_Vec2Mutable__O__Ltrivalibs_graphics_math_Vec2Base__V($thiz, v, x$2, other, x$4) {
  x$2.fV(v, (+x$4.G(other)));
  x$2.fW(v, (+x$4.C(other)));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.J + other.J), (v.Q + other.Q), (v.K + other.K));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, scalar) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.J * scalar), (v.Q * scalar), (v.K * scalar));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3(((v.Q * other.K) - (v.K * other.Q)), ((v.K * other.J) - (v.J * other.K)), ((v.J * other.Q) - (v.Q * other.J)));
}
function $f_Ltrivalibs_graphics_math_Vec4MutableOps__set__O__Ltrivalibs_graphics_math_Vec4Mutable__O__Ltrivalibs_graphics_math_Vec4Base__V($thiz, v, x$2, other, x$4) {
  x$2.fV(v, (+x$4.G(other)));
  x$2.fW(v, (+x$4.C(other)));
  x$2.je(v, (+x$4.a8(other)));
  x$2.j8(v, (+x$4.af(other)));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat4(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  this.i5 = 0.0;
  this.i6 = 0.0;
  this.i7 = 0.0;
  this.i8 = 0.0;
  this.i9 = 0.0;
  this.ia = 0.0;
  this.ib = 0.0;
  this.ic = 0.0;
  this.id = 0.0;
  this.ie = 0.0;
  this.ig = 0.0;
  this.ih = 0.0;
  this.ii = 0.0;
  this.ij = 0.0;
  this.ik = 0.0;
  this.il = 0.0;
  this.i5 = m00;
  this.i6 = m01;
  this.i7 = m02;
  this.i8 = m03;
  this.i9 = m10;
  this.ia = m11;
  this.ib = m12;
  this.ic = m13;
  this.id = m20;
  this.ie = m21;
  this.ig = m22;
  this.ih = m23;
  this.ii = m30;
  this.ij = m31;
  this.ik = m32;
  this.il = m33;
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
  this.ha = 0.0;
  this.hb = 0.0;
  this.hc = 0.0;
  this.h9 = 0.0;
  this.ha = x;
  this.hb = y;
  this.hc = z;
  this.h9 = w;
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
$p.mZ = (function(angle) {
  var h = (0.5 * angle);
  return new $c_Ltrivalibs_graphics_math_cpu_Quat((+Math.sin(h)), 0.0, 0.0, (+Math.cos(h)));
});
$p.lw = (function(angle) {
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
  return new $c_Ltrivalibs_graphics_math_cpu_Quat((((((+x$2.af(q)) * (+x$2.G(p))) + ((+x$2.G(q)) * (+x$2.af(p)))) + ((+x$2.C(q)) * (+x$2.a8(p)))) - ((+x$2.a8(q)) * (+x$2.C(p)))), (((((+x$2.af(q)) * (+x$2.C(p))) - ((+x$2.G(q)) * (+x$2.a8(p)))) + ((+x$2.C(q)) * (+x$2.af(p)))) + ((+x$2.a8(q)) * (+x$2.G(p)))), (((((+x$2.af(q)) * (+x$2.a8(p))) + ((+x$2.G(q)) * (+x$2.C(p)))) - ((+x$2.C(q)) * (+x$2.G(p)))) + ((+x$2.a8(q)) * (+x$2.af(p)))), (((((+x$2.af(q)) * (+x$2.af(p))) - ((+x$2.G(q)) * (+x$2.G(p)))) - ((+x$2.C(q)) * (+x$2.C(p)))) - ((+x$2.a8(q)) * (+x$2.a8(p)))));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec2(x, y) {
  this.hd = 0.0;
  this.he = 0.0;
  this.hd = x;
  this.he = y;
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
  this.J = 0.0;
  this.Q = 0.0;
  this.K = 0.0;
  this.J = x;
  this.Q = y;
  this.K = z;
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
  this.io = 0.0;
  this.ip = 0.0;
  this.iq = 0.0;
  this.im = 0.0;
  this.io = x;
  this.ip = y;
  this.iq = z;
  this.im = w;
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
  this.km = null;
  this.kn = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$.prototype = $p;
$p.n3 = (function() {
  if ((!this.kn)) {
    this.km = new $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18();
    this.kn = true;
  }
  return this.km;
});
var $d_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$, "trivalibs.graphics.math.cpu.mat4$package$Mat4Buffer$", ({
  ex: 1
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
  this.ko = null;
  this.kp = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$.prototype = $p;
$p.oG = (function() {
  if ((!this.kp)) {
    this.ko = new $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$4();
    this.kp = true;
  }
  return this.ko;
});
var $d_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$, "trivalibs.graphics.math.cpu.vec2$package$Vec2Buffer$", ({
  eA: 1
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
  this.kq = null;
  this.kr = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$.prototype = $p;
$p.oH = (function() {
  if ((!this.kr)) {
    this.kq = new $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$6();
    this.kr = true;
  }
  return this.kq;
});
var $d_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$, "trivalibs.graphics.math.cpu.vec4$package$Vec4Buffer$", ({
  eD: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$;
function $m_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$ = new $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$;
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
$p.m = (function() {
  return this.c;
});
var $d_Ltrivalibs_graphics_math_gpu_Expr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_Expr, "trivalibs.graphics.math.gpu.Expr", ({
  Z: 1
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
$p.aU = (function() {
  return new $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), _$1$2))));
});
var $d_Ltrivalibs_graphics_math_gpu_LeftScalar$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LeftScalar$, "trivalibs.graphics.math.gpu.LeftScalar$", ({
  eH: 1
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
  this.kt = null;
  this.ku = false;
}
$p = $c_Ltrivalibs_graphics_math_gpu_expr$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_expr$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_expr$package$() {
}
$h_Ltrivalibs_graphics_math_gpu_expr$package$.prototype = $p;
$p.aR = (function(tex, uv, sampler) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("textureSample(" + tex.c) + ", ") + sampler.c) + ", ") + uv.c) + ")"));
});
$p.oh = (function(tex, uv, sampler, level) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((((("textureSampleLevel(" + tex.c) + ", ") + sampler.c) + ", ") + uv.c) + ", ") + level.c) + ")"));
});
$p.fS = (function(tex, coord) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("textureLoad(" + tex.c) + ", ") + coord.c) + ", 0)"));
});
$p.mE = (function(tex, coord) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("textureLoad(" + tex.c) + ", ") + coord.c) + ", 0)"));
});
$p.f8 = (function() {
  if ((!this.ku)) {
    this.kt = new $c_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2();
    this.ku = true;
  }
  return this.kt;
});
$p.ok = (function(onFalse, onTrue, cond) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("select(" + onFalse.c) + ", ") + onTrue.c) + ", ") + cond.c) + ")"));
});
$p.mY = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.c) + " > ") + b.c) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_expr$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_expr$package$, "trivalibs.graphics.math.gpu.expr$package$", ({
  eK: 1
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
  this.kv = null;
  this.kw = false;
  this.kx = null;
  this.ky = false;
  this.kB = null;
  this.kC = false;
  this.kD = null;
  this.kE = false;
  this.kF = null;
  this.kG = false;
  this.kz = null;
  this.kA = false;
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$.prototype = $p;
$p.aF = (function(v) {
  var s = ("" + v);
  return (((($f_T__indexOf__I__I(s, 46) >= 0) || ($f_T__indexOf__I__I(s, 69) >= 0)) || ($f_T__indexOf__I__I(s, 101) >= 0)) ? s : (s + ".0"));
});
$p.t = (function() {
  if ((!this.kw)) {
    this.kv = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1();
    this.kw = true;
  }
  return this.kv;
});
$p.n2 = (function() {
  if ((!this.ky)) {
    this.kx = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3();
    this.ky = true;
  }
  return this.kx;
});
$p.a6 = (function() {
  if ((!this.kC)) {
    this.kB = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4();
    this.kC = true;
  }
  return this.kB;
});
$p.aj = (function() {
  if ((!this.kE)) {
    this.kD = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5();
    this.kE = true;
  }
  return this.kD;
});
$p.ae = (function() {
  if ((!this.kG)) {
    this.kF = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6();
    this.kG = true;
  }
  return this.kF;
});
$p.gC = (function() {
  if ((!this.kA)) {
    this.kz = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$9();
    this.kA = true;
  }
  return this.kz;
});
$p.fU = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.c + ".xy"));
});
$p.hP = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.c + ".xyz"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$, "trivalibs.graphics.math.gpu.float_expr$package$", ({
  eM: 1
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
$p.bi = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("vec2<i32>(" + v.c) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_ivec2$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_ivec2$, "trivalibs.graphics.math.gpu.ivec2$", ({
  eZ: 1
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
$p.aS = (function(x, y) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("vec2<f32>(" + x.c) + ", ") + y.c) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_vec2$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec2$, "trivalibs.graphics.math.gpu.vec2$", ({
  f0: 1
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
$p.aR = (function(x, y, z) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("vec3<f32>(" + x.c) + ", ") + y.c) + ", ") + z.c) + ")"));
});
$p.bi = (function(scalar) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("vec3<f32>(" + scalar.c) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_vec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec3$, "trivalibs.graphics.math.gpu.vec3$", ({
  f1: 1
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
$p.mo = (function(x, y, z, w) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((((("vec4<f32>(" + x.c) + ", ") + y.c) + ", ") + z.c) + ", ") + w.c) + ")"));
});
$p.aS = (function(xyz, w) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("vec4<f32>(" + xyz.c) + ", ") + w.c) + ")"));
});
$p.aR = (function(xy, z, w) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("vec4<f32>(" + xy.c) + ", ") + z.c) + ", ") + w.c) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_vec4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec4$, "trivalibs.graphics.math.gpu.vec4$", ({
  f2: 1
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
  this.p = null;
  this.p = value;
}
$p = $c_Ltrivalibs_graphics_painter_BindPair.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_BindPair;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_BindPair() {
}
$h_Ltrivalibs_graphics_painter_BindPair.prototype = $p;
var $d_Ltrivalibs_graphics_painter_BindPair = new $TypeData().i($c_Ltrivalibs_graphics_painter_BindPair, "trivalibs.graphics.painter.BindPair", ({
  f3: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_BlendState$() {
  this.kH = null;
  $n_Ltrivalibs_graphics_painter_BlendState$ = this;
  new ($a_Ltrivalibs_graphics_painter_BlendState())(new ($a_Ltrivalibs_graphics_painter_BlendFn())("src-alpha", "one-minus-src-alpha"), new ($a_Ltrivalibs_graphics_painter_BlendFn())("one", "one-minus-src-alpha"));
  this.kH = new ($a_Ltrivalibs_graphics_painter_BlendState())(new ($a_Ltrivalibs_graphics_painter_BlendFn())("src-alpha", "one"), new ($a_Ltrivalibs_graphics_painter_BlendFn())("one", "one"));
  new ($a_Ltrivalibs_graphics_painter_BlendState())(new ($a_Ltrivalibs_graphics_painter_BlendFn())("dst", "zero"), new ($a_Ltrivalibs_graphics_painter_BlendFn())("dst-alpha", "zero"));
}
$p = $c_Ltrivalibs_graphics_painter_BlendState$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_BlendState$;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_BlendState$() {
}
$h_Ltrivalibs_graphics_painter_BlendState$.prototype = $p;
var $d_Ltrivalibs_graphics_painter_BlendState$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_BlendState$, "trivalibs.graphics.painter.BlendState$", ({
  f4: 1
}));
var $n_Ltrivalibs_graphics_painter_BlendState$;
function $m_Ltrivalibs_graphics_painter_BlendState$() {
  if ((!$n_Ltrivalibs_graphics_painter_BlendState$)) {
    $n_Ltrivalibs_graphics_painter_BlendState$ = new $c_Ltrivalibs_graphics_painter_BlendState$();
  }
  return $n_Ltrivalibs_graphics_painter_BlendState$;
}
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
  var $x_1 = $thiz.g6.e;
  var value = (ab.byteLength | 0);
  var buf = $x_1.createBuffer(({
    "size": value,
    "usage": 24
  }));
  $thiz.g6.az.writeBuffer(buf, 0.0, ab);
  if (($thiz.fC !== null)) {
    var opt$proxy2 = $thiz.fC;
    opt$proxy2.destroy();
  }
  $thiz.fC = buf;
  $thiz.hf = count;
  $thiz.it = fmt;
}
function $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_bufferdata_BufferView__V($thiz, verts) {
  var $x_1 = $thiz.g6.e;
  var value = (verts.dv.buffer.byteLength | 0);
  var buf = $x_1.createBuffer(({
    "size": value,
    "usage": 40
  }));
  $thiz.g6.az.writeBuffer(buf, 0.0, verts.dv.buffer);
  if (($thiz.g7 !== null)) {
    var opt$proxy4 = $thiz.g7;
    opt$proxy4.destroy();
  }
  $thiz.g7 = buf;
  $thiz.hg = (verts.off | 0);
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Form(painter) {
  this.g6 = null;
  this.g7 = null;
  this.hg = 0;
  this.fC = null;
  this.hf = 0;
  this.it = null;
  this.iu = null;
  this.is = null;
  this.g6 = painter;
  this.g7 = null;
  this.hg = 0;
  this.fC = null;
  this.hf = 0;
  this.it = "uint16";
  this.iu = "triangle-list";
  this.is = "ccw";
}
$p = $c_Ltrivalibs_graphics_painter_Form.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Form;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Form() {
}
$h_Ltrivalibs_graphics_painter_Form.prototype = $p;
$p.om = (function(geometry, vertices, topology, frontFace) {
  if ((topology !== (void 0))) {
    this.iu = topology;
  }
  if ((frontFace !== (void 0))) {
    this.is = frontFace;
  }
  if ((geometry !== (void 0))) {
    $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_bufferdata_BufferView__V(this, geometry.kb);
    if ((geometry.i3 !== null)) {
      $p_Ltrivalibs_graphics_painter_Form__uploadIndices__sjs_js_typedarray_TypedArray__V(this, geometry.i3);
    }
  }
  if ((vertices !== (void 0))) {
    $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_bufferdata_BufferView__V(this, vertices);
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Form = new $TypeData().i($c_Ltrivalibs_graphics_painter_Form, "trivalibs.graphics.painter.Form", ({
  f5: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter) {
  this.hh = null;
  this.hh = [];
}
$p = $c_Ltrivalibs_graphics_painter_InstanceList.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_InstanceList;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_InstanceList() {
}
$h_Ltrivalibs_graphics_painter_InstanceList.prototype = $p;
$p.L = (function() {
  return (this.hh.length | 0);
});
var $d_Ltrivalibs_graphics_painter_InstanceList = new $TypeData().i($c_Ltrivalibs_graphics_painter_InstanceList, "trivalibs.graphics.painter.InstanceList", ({
  f6: 1
}));
function $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var w = $thiz.oL();
  var h = $thiz.n7();
  panel.mO(w, h);
  var msaa = panel.fK;
  var encoder = $thiz.e.createCommandEncoder();
  var panelFormats = panel.iW();
  var colorAttachments = [];
  var t = 0;
  while ((t < panel.ox())) {
    if ((panel.hq !== null)) {
      matchResult6: {
        var \u03b412$;
        var x18 = panel.hq;
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
      var r$2 = (+\u03b412$.ew);
      var g$2 = (+\u03b412$.b9);
      var b$2 = (+\u03b412$.ba);
      var a$2 = (+\u03b412$.bb);
      if (msaa) {
        var _2 = panel.lS(t);
        var _2$1 = panel.hK(t);
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
        var _2$3 = panel.hK(t);
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
      var _2$5 = panel.lS(t);
      var _2$6 = panel.hK(t);
      var attachment = ({
        "view": _2$5,
        "resolveTarget": _2$6,
        "loadOp": "load",
        "storeOp": "store"
      });
    } else {
      var _2$7 = panel.hK(t);
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
  if (panel.gh) {
    var _2$8 = panel.lr();
    passDesc.depthStencilAttachment = ({
      "view": _2$8,
      "depthLoadOp": "clear",
      "depthStoreOp": "store",
      "depthClearValue": 1.0
    });
  }
  var shapePass = encoder.beginRenderPass(passDesc);
  var i = 0;
  while ((i < (panel.hr.length | 0))) {
    $p_Ltrivalibs_graphics_painter_Painter__renderShapeOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shape__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_Panel__V($thiz, shapePass, panel.hr[i], panel.gh, msaa, panelFormats, panel);
    i = ((1 + i) | 0);
  }
  shapePass.end();
  $thiz.az.submit([encoder.finish()]);
  if (panel.gc) {
    $p_Ltrivalibs_graphics_painter_Painter__resolvePanelDepth__Ltrivalibs_graphics_painter_Panel__V($thiz, panel);
  }
  var srcView = panel.oy();
  var dstView = panel.o6();
  var hasPongLayers = false;
  var curEncoder = null;
  var curPass = null;
  var j = 0;
  while ((j < (panel.bh.length | 0))) {
    var layer = panel.bh[j];
    var hasPanelLayout = (layer.E.gk !== null);
    var slot0Manual = ((hasPanelLayout && ((layer.M.length | 0) > 0)) && (layer.M[0] !== null));
    var needsPingPong = (hasPanelLayout && (!slot0Manual));
    if ((layer.g8 >= 0)) {
      if ((curPass !== null)) {
        curPass.end();
        $thiz.az.submit([curEncoder.finish()]);
        curPass = null;
      }
      var mipDstView = panel.gZ(0, layer.g8);
      var mipSrcView = ((layer.hi >= 0) ? panel.gZ(0, layer.hi) : srcView);
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
      $thiz.az.submit([enc.finish()]);
    } else if (needsPingPong) {
      hasPongLayers = true;
      if ((curPass !== null)) {
        curPass.end();
        $thiz.az.submit([curEncoder.finish()]);
        curPass = null;
      }
      var enc$2 = $thiz.e.createCommandEncoder();
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
      $thiz.az.submit([enc$2.finish()]);
      var tmp = srcView;
      srcView = dstView;
      dstView = tmp;
    } else {
      if ((curPass === null)) {
        curEncoder = $thiz.e.createCommandEncoder();
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
    $thiz.az.submit([curEncoder.finish()]);
  }
  if (hasPongLayers) {
    panel.gd = srcView;
  } else {
    panel.gd = null;
  }
  var hasMipTargetLayers = false;
  var mi = 0;
  while ((mi < (panel.bh.length | 0))) {
    if ((panel.bh[mi].g8 >= 0)) {
      hasMipTargetLayers = true;
    }
    mi = ((1 + mi) | 0);
  }
  if (((panel.j1() > 1) && (!hasMipTargetLayers))) {
    $p_Ltrivalibs_graphics_painter_Painter__generateMipmaps__Ltrivalibs_graphics_painter_Panel__V($thiz, panel);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__blitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz) {
  if ((!$thiz.kN)) {
    $thiz.kM = $thiz.e.createSampler(({
      "magFilter": "nearest",
      "minFilter": "nearest"
    }));
    $thiz.kN = true;
  }
  return $thiz.kM;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz) {
  if ((!$thiz.kJ)) {
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
    $thiz.kI = $x_1;
    $thiz.kJ = true;
  }
  return $thiz.kI;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitPipeline__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz) {
  if ((!$thiz.kL)) {
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
    var f$proxy4 = $thiz.fE;
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
    $thiz.kK = $x_2;
    $thiz.kL = true;
  }
  return $thiz.kK;
}
function $p_Ltrivalibs_graphics_painter_Painter__depthResolveBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz) {
  if ((!$thiz.kQ)) {
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
    $thiz.kP = $x_1;
    $thiz.kQ = true;
  }
  return $thiz.kP;
}
function $p_Ltrivalibs_graphics_painter_Painter__depthResolvePipeline__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz) {
  if ((!$thiz.kS)) {
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
    $thiz.kR = $x_2;
    $thiz.kS = true;
  }
  return $thiz.kR;
}
function $p_Ltrivalibs_graphics_painter_Painter__resolvePanelDepth__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var encoder = $thiz.e.createCommandEncoder();
  var _2 = [];
  var _2$1 = panel.of();
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
  var _2$4 = panel.lr();
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
  $thiz.az.submit([encoder.finish()]);
}
function $p_Ltrivalibs_graphics_painter_Painter__mipBlitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz) {
  if ((!$thiz.kU)) {
    $thiz.kT = $thiz.e.createSampler(({
      "magFilter": "linear",
      "minFilter": "linear"
    }));
    $thiz.kU = true;
  }
  return $thiz.kT;
}
function $p_Ltrivalibs_graphics_painter_Painter__getMipBlitPipeline__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, format) {
  if ((!(!(!(!$thiz.hj.hasOwnProperty(format)))))) {
    return $thiz.hj[format];
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
    $thiz.hj[format] = p;
    return p;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__generateMipmaps__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var mipCount = panel.j1();
  if ((mipCount <= 1)) {
    return (void 0);
  }
  var fmt = (((panel.fJ.length | 0) > 0) ? panel.fJ[0] : $thiz.fE);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getMipBlitPipeline__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, fmt);
  var i = 1;
  while ((i < mipCount)) {
    var srcView = panel.gZ(0, ((i - 1) | 0));
    var dstView = panel.gZ(0, i);
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
    $thiz.az.submit([encoder.finish()]);
    i = ((1 + i) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, bindings, panelBindings) {
  $thiz.ap.length = (bindings.length | 0);
  var i = 0;
  while ((i < (bindings.length | 0))) {
    $thiz.ap[i] = bindings[i];
    i = ((1 + i) | 0);
  }
  $thiz.a3.length = (panelBindings.length | 0);
  var j = 0;
  while ((j < (panelBindings.length | 0))) {
    $thiz.a3[j] = panelBindings[j];
    j = ((1 + j) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shade, workBindings, workPanelBindings) {
  var dict = panel.gj;
  var keys = Object.keys(dict);
  var i = 0;
  while ((i < (keys.length | 0))) {
    var name = keys[i];
    var value = dict[name];
    if ((!(!(!(!shade.B.hasOwnProperty(name)))))) {
      var idx = (shade.B[name] | 0);
      if (((idx >= (workBindings.length | 0)) || (workBindings[idx] === null))) {
        while (((workBindings.length | 0) <= idx)) {
          workBindings.push(null);
        }
        workBindings[idx] = value;
      }
    } else if ((!(!(!(!shade.an.hasOwnProperty(name)))))) {
      var idx$2 = (shade.an[name] | 0);
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
  while ((i < (inst.lo().length | 0))) {
    if ((inst.lo()[i] !== null)) {
      while (((workBindings.length | 0) <= i)) {
        workBindings.push(null);
      }
      workBindings[i] = inst.lo()[i];
    }
    i = ((1 + i) | 0);
  }
  var j = 0;
  while ((j < (inst.lT().length | 0))) {
    if ((inst.lT()[j] !== null)) {
      while (((workPanelBindings.length | 0) <= j)) {
        workPanelBindings.push(null);
      }
      workPanelBindings[j] = inst.lT()[j];
    }
    j = ((1 + j) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel) {
  return ((panel !== null) && ((Object.keys(panel.gj).length | 0) > 0));
}
function $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shade, bindings) {
  if ((((bindings.length | 0) > 0) && (shade.iy !== null))) {
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
    var _2 = shade.iy;
    var bg = $x_1.createBindGroup(({
      "layout": _2,
      "entries": entries
    }));
    pass.setBindGroup(0, bg);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shade, panelBindings, srcView) {
  if ((shade.gk !== null)) {
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
        var view = ((!(!pb.depth)) ? pb.panel.mD() : pb.panel.gZ((pb.index | 0), (pb.mipLevel | 0)));
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
      var _2 = shade.gk;
      var pg = $x_1.createBindGroup(({
        "layout": _2,
        "entries": entries
      }));
      pass.setBindGroup(1, pg);
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__renderShapeOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shape__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_Panel__V($thiz, pass, shape, depthTest, multisample, formats, panel) {
  var fmts = ((formats !== null) ? formats : [$thiz.fE]);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, shape.A, shape.iA, fmts, depthTest, multisample, shape.aE.iu, shape.iB, shape.aE.is);
  pass.setPipeline(pipeline);
  pass.setVertexBuffer(0, shape.aE.g7);
  var opt$proxy9 = shape.aE.fC;
  var hasIndex = (opt$proxy9 !== null);
  if (hasIndex) {
    pass.setIndexBuffer(shape.aE.fC, shape.aE.it);
  }
  var instanceCount = shape.iC.L();
  var hasPanelBinds = $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel);
  if ((instanceCount === 0)) {
    if (hasPanelBinds) {
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, shape.f, shape.W);
      $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shape.A, $thiz.ap, $thiz.a3);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.A, $thiz.ap);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.A, $thiz.a3, null);
    } else {
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.A, shape.f);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.A, shape.W, null);
    }
    if (hasIndex) {
      pass.drawIndexed(shape.aE.hf);
    } else {
      pass.draw(shape.aE.hg);
    }
  } else {
    var i = 0;
    while ((i < instanceCount)) {
      var inst = shape.iC.hh[i];
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, shape.f, shape.W);
      if (hasPanelBinds) {
        $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shape.A, $thiz.ap, $thiz.a3);
      }
      $p_Ltrivalibs_graphics_painter_Painter__applyInstanceBindings__Ltrivalibs_graphics_painter_Instance__sjs_js_Array__sjs_js_Array__V($thiz, inst, $thiz.ap, $thiz.a3);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.A, $thiz.ap);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.A, $thiz.a3, null);
      if (hasIndex) {
        pass.drawIndexed(shape.aE.hf);
      } else {
        pass.draw(shape.aE.hg);
      }
      i = ((1 + i) | 0);
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V($thiz, pass, layer, depthTest, multisample, formats, srcView, panel) {
  var fmts = ((formats !== null) ? formats : [$thiz.fE]);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, layer.E, layer.iv, fmts, depthTest, multisample, "triangle-list", "none", "ccw");
  pass.setPipeline(pipeline);
  var instanceCount = layer.iw.L();
  var hasPanelBinds = $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel);
  if ((instanceCount === 0)) {
    if (hasPanelBinds) {
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, layer.o, layer.M);
      $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, layer.E, $thiz.ap, $thiz.a3);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, layer.E, $thiz.ap);
      var effectiveSrcView = (((($thiz.a3.length | 0) > 0) && ($thiz.a3[0] !== null)) ? null : srcView);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.E, $thiz.a3, effectiveSrcView);
    } else {
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, layer.E, layer.o);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.E, layer.M, srcView);
    }
    pass.draw(3);
  } else {
    var i = 0;
    while ((i < instanceCount)) {
      var inst = layer.iw.hh[i];
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, layer.o, layer.M);
      if (hasPanelBinds) {
        $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, layer.E, $thiz.ap, $thiz.a3);
      }
      $p_Ltrivalibs_graphics_painter_Painter__applyInstanceBindings__Ltrivalibs_graphics_painter_Instance__sjs_js_Array__sjs_js_Array__V($thiz, inst, $thiz.ap, $thiz.a3);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, layer.E, $thiz.ap);
      var effectiveSrcView$2 = (((($thiz.a3.length | 0) > 0) && ($thiz.a3[0] !== null)) ? null : srcView);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.E, $thiz.a3, effectiveSrcView$2);
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
  var key = ((((((((((((((shade.kX + "|") + $p_Ltrivalibs_graphics_painter_Painter__blendKeyStr__Ltrivalibs_graphics_painter_BlendState__T($thiz, blendState)) + "|") + formats.join(",")) + "|") + depthTest) + "|") + multisample) + "|") + topology) + "|") + cullMode) + "|") + frontFace);
  if ((!(!(!(!$thiz.hk.hasOwnProperty(key)))))) {
    return $thiz.hk[key];
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
    if ((shade.iz !== null)) {
      var _2 = shade.hu;
      var _2$1 = [shade.iz];
      var vertexDescriptor = ({
        "module": _2,
        "entryPoint": "vs_main",
        "buffers": _2$1
      });
    } else {
      var _2$2 = shade.hu;
      var vertexDescriptor = ({
        "module": _2$2,
        "entryPoint": "vs_main"
      });
    }
    var _2$3 = shade.kY;
    var _2$4 = shade.hu;
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
    var p = $thiz.e.createRenderPipeline(desc);
    $thiz.hk[key] = p;
    return p;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__bindingEntry__I__O__sjs_js_Dynamic($thiz, i, b) {
  if ((b instanceof $c_Ltrivalibs_graphics_buffers_BufferBinding)) {
    var _2 = b.s;
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
  this.az = null;
  this.fD = null;
  this.kO = null;
  this.fE = null;
  this.hk = null;
  this.w = 0;
  this.hl = null;
  this.kV = null;
  this.kW = false;
  this.kM = null;
  this.kN = false;
  this.kI = null;
  this.kJ = false;
  this.kK = null;
  this.kL = false;
  this.kP = null;
  this.kQ = false;
  this.kR = null;
  this.kS = false;
  this.kT = null;
  this.kU = false;
  this.hj = null;
  this.ap = null;
  this.a3 = null;
  this.e = device;
  this.az = queue;
  this.fD = canvas;
  this.kO = context;
  this.fE = preferredFormat;
  this.hk = ({});
  this.w = 0;
  this.hl = [];
  this.hj = ({});
  this.ap = [];
  this.a3 = [];
}
$p = $c_Ltrivalibs_graphics_painter_Painter.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Painter;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Painter() {
}
$h_Ltrivalibs_graphics_painter_Painter.prototype = $p;
$p.nY = (function(cb) {
  this.hl.push(cb);
  cb.aB((this.fD.width | 0), (this.fD.height | 0));
});
$p.mV = (function(w, h) {
  var k = 0;
  while ((k < (this.hl.length | 0))) {
    this.hl[k].aB(w, h);
    k = ((1 + k) | 0);
  }
});
$p.oL = (function() {
  return (this.fD.width | 0);
});
$p.n7 = (function() {
  return (this.fD.height | 0);
});
$p.oi = (function() {
  if ((!this.kW)) {
    this.kV = this.e.createSampler(({
      "magFilter": "linear",
      "minFilter": "linear"
    }));
    this.kW = true;
  }
  return this.kV;
});
$p.j2 = (function(magFilter, minFilter, mipmapFilter, addressMode, addressModeU, addressModeV) {
  var $x_1 = this.e;
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
$p.iX = (function(geometry, vertices, topology, frontFace) {
  return new $c_Ltrivalibs_graphics_painter_Form(this).om(geometry, vertices, topology, frontFace);
});
$p.fT = (function(form, shade, cullMode, blendState) {
  return new $c_Ltrivalibs_graphics_painter_Shape(this, form, shade).oo(cullMode, blendState);
});
$p.bk = (function(shade, blendState, mipSource, mipTarget) {
  return new $c_Ltrivalibs_graphics_painter_Layer(this, shade).on(blendState, mipSource, mipTarget);
});
$p.b8 = (function(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers) {
  return new $c_Ltrivalibs_graphics_painter_Panel(this).ol(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers);
});
$p.or = (function(panel) {
  var encoder = this.e.createCommandEncoder();
  var swapChainView = this.kO.getCurrentTexture().createView();
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
  var _2$2 = panel.o1();
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
  this.az.submit([encoder.finish()]);
});
var $d_Ltrivalibs_graphics_painter_Painter = new $TypeData().i($c_Ltrivalibs_graphics_painter_Painter, "trivalibs.graphics.painter.Painter", ({
  f8: 1
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
$p.nb = (function(canvas) {
  var maybeGpu = $m_Ltrivalibs_graphics_painter_WebGPU$().n1();
  if ((maybeGpu === (void 0))) {
    return Promise.reject(Error("WebGPU is not supported"));
  } else {
    var promise$proxy1 = maybeGpu.requestAdapter();
    var promise$proxy3 = promise$proxy1.then(((value$2) => {
      if ((value$2 === null)) {
        throw new $c_sjs_js_JavaScriptException(Error("Failed to get WebGPU adapter")).aN;
      } else {
        return value$2;
      }
    }));
    var f$proxy11 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((adapter$2) => {
      var promise$proxy2 = adapter$2.requestDevice();
      var f$proxy10 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((device$2) => {
        var queue = device$2.queue;
        var context = $m_Ltrivalibs_graphics_painter_WebGPU$().n0(canvas);
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
            painter.mV(rw, rh);
          }
        }));
        observer.observe(canvas);
        return painter;
      }));
      return promise$proxy2.then($m_sjs_js_Any$().gB(f$proxy10));
    }));
    return promise$proxy3.then($m_sjs_js_Any$().gB(f$proxy11));
  }
});
$p.na = (function(canvas, setup) {
  var promise$proxy4 = this.nb(canvas);
  return promise$proxy4.then($m_sjs_js_Any$().gB(setup));
});
var $d_Ltrivalibs_graphics_painter_Painter$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_Painter$, "trivalibs.graphics.painter.Painter$", ({
  f9: 1
}));
var $n_Ltrivalibs_graphics_painter_Painter$;
function $m_Ltrivalibs_graphics_painter_Painter$() {
  if ((!$n_Ltrivalibs_graphics_painter_Painter$)) {
    $n_Ltrivalibs_graphics_painter_Painter$ = new $c_Ltrivalibs_graphics_painter_Painter$();
  }
  return $n_Ltrivalibs_graphics_painter_Painter$;
}
function $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V($thiz) {
  if (($thiz.ga !== null)) {
    var opt$proxy6 = $thiz.ga;
    opt$proxy6.destroy();
  }
  if (($thiz.gf !== null)) {
    var opt$proxy8 = $thiz.gf;
    opt$proxy8.destroy();
  }
  var depthUsage = ($thiz.g9 ? 20 : 16);
  var $x_1 = $thiz.f6.e;
  var value = $thiz.fI;
  var value$1 = $thiz.fF;
  var _2 = ({
    "width": value,
    "height": value$1
  });
  var _2$1 = ($thiz.fK ? 4 : 1);
  var depthTex = $x_1.createTexture(({
    "size": _2,
    "format": "depth24plus",
    "usage": depthUsage,
    "sampleCount": _2$1
  }));
  $thiz.ga = depthTex;
  $thiz.hm = depthTex.createView();
  if (($thiz.g9 && $thiz.fK)) {
    var $x_2 = $thiz.f6.e;
    var value$2 = $thiz.fI;
    var value$3 = $thiz.fF;
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
    $thiz.gf = resTex;
    $thiz.gg = resTex.createView();
    $thiz.gc = true;
  } else {
    $thiz.gf = null;
    $thiz.gg = null;
    $thiz.gc = false;
  }
}
function $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z($thiz) {
  var i = 0;
  while ((i < ($thiz.bh.length | 0))) {
    if (($thiz.bh[i].E.gk !== null)) {
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
  this.f6 = null;
  this.ht = 0;
  this.hs = 0;
  this.hq = null;
  this.gh = false;
  this.fK = false;
  this.gi = 0;
  this.fJ = null;
  this.hr = null;
  this.bh = null;
  this.gj = null;
  this.fH = null;
  this.f5 = null;
  this.hp = null;
  this.ge = null;
  this.ho = null;
  this.ga = null;
  this.hm = null;
  this.g9 = false;
  this.gf = null;
  this.gg = null;
  this.gc = false;
  this.gb = null;
  this.hn = null;
  this.gd = null;
  this.fI = 0;
  this.fF = 0;
  this.fG = null;
  this.f6 = painter;
  this.ht = 0;
  this.hs = 0;
  this.hq = null;
  this.gh = false;
  this.fK = false;
  this.gi = 1;
  this.fJ = [];
  this.hr = [];
  this.bh = [];
  this.gj = ({});
  this.fH = [];
  this.f5 = [];
  this.hp = [];
  this.ge = [];
  this.ho = [];
  this.ga = null;
  this.hm = null;
  this.g9 = false;
  this.gf = null;
  this.gg = null;
  this.gc = false;
  this.gb = [];
  this.hn = [];
  this.gd = null;
  this.fI = 0;
  this.fF = 0;
  this.fG = ({});
}
$p = $c_Ltrivalibs_graphics_painter_Panel.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Panel;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Panel() {
}
$h_Ltrivalibs_graphics_painter_Panel.prototype = $p;
$p.j1 = (function() {
  if ((this.gi === 0)) {
    var a = this.fI;
    var b = this.fF;
    var maxDim = ((a > b) ? a : b);
    if ((maxDim <= 0)) {
      return 1;
    } else {
      var a$1 = maxDim;
      return ((1 + $doubleToInt(((+Math.log(a$1)) / (+Math.log(2.0))))) | 0);
    }
  } else {
    return this.gi;
  }
});
$p.iW = (function() {
  return (((this.fJ.length | 0) === 0) ? [this.f6.fE] : this.fJ);
});
$p.ox = (function() {
  return (this.iW().length | 0);
});
$p.oy = (function() {
  return this.f5[0];
});
$p.o6 = (function() {
  return this.ho[0];
});
$p.lr = (function() {
  return this.hm;
});
$p.of = (function() {
  return this.gg;
});
$p.o1 = (function() {
  return ((this.gd !== null) ? this.gd : this.f5[0]);
});
$p.gZ = (function(index, mipLevel) {
  if ((mipLevel < 0)) {
    var sv = this.hp[index];
    return ((sv !== null) ? sv : this.f5[index]);
  } else {
    var key = ((index + "|") + mipLevel);
    if ((!(!(!(!this.fG.hasOwnProperty(key)))))) {
      return this.fG[key];
    } else {
      var view = this.fH[index].createView(({
        "baseMipLevel": mipLevel,
        "mipLevelCount": 1
      }));
      this.fG[key] = view;
      return view;
    }
  }
});
$p.hK = (function(index) {
  return this.f5[index];
});
$p.lS = (function(index) {
  return this.hn[index];
});
$p.mD = (function() {
  if (((!this.g9) && (this.ga !== null))) {
    this.g9 = true;
    $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V(this);
  }
  return (this.gc ? this.gg : this.hm);
});
$p.mv = (function(index, mipLevel, depth) {
  return new ($a_Ltrivalibs_graphics_painter_PanelBinding())(this, index, mipLevel, depth);
});
$p.ol = (function(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers) {
  if ((width !== (void 0))) {
    var v = (width | 0);
    this.ht = v;
  }
  if ((height !== (void 0))) {
    var v$1 = (height | 0);
    this.hs = v$1;
  }
  if ((clearColor !== (void 0))) {
    this.hq = clearColor;
  }
  if ((depthTest !== (void 0))) {
    var v$2 = (!(!depthTest));
    this.gh = v$2;
  }
  if ((multisample !== (void 0))) {
    var v$3 = (!(!multisample));
    this.fK = v$3;
  }
  if ((mips !== (void 0))) {
    if ((!(!mips))) {
      this.gi = 0;
    }
  }
  if ((mipLevels !== (void 0))) {
    var v$5 = (mipLevels | 0);
    if ((v$5 > 0)) {
      this.gi = v$5;
    }
  }
  var x = ((formats === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy1$1__O__O(this, format) : formats);
  if ((x !== (void 0))) {
    this.fJ = x;
  }
  var x$1 = ((shapes === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy2$1__O__O(this, shape) : shapes);
  if ((x$1 !== (void 0))) {
    this.hr = x$1;
  }
  var x$2 = ((layers === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy3$1__O__O(this, layer) : layers);
  if ((x$2 !== (void 0))) {
    this.bh = x$2;
  }
  return this;
});
$p.mO = (function(canvasW, canvasH) {
  var targetW = ((this.ht === 0) ? canvasW : this.ht);
  var targetH = ((this.hs === 0) ? canvasH : this.hs);
  if (((targetW !== this.fI) || (targetH !== this.fF))) {
    var d = 0;
    while ((d < (this.fH.length | 0))) {
      this.fH[d].destroy();
      d = ((1 + d) | 0);
    }
    d = 0;
    while ((d < (this.ge.length | 0))) {
      this.ge[d].destroy();
      d = ((1 + d) | 0);
    }
    d = 0;
    while ((d < (this.gb.length | 0))) {
      this.gb[d].destroy();
      d = ((1 + d) | 0);
    }
    this.fI = targetW;
    this.fF = targetH;
    var mipKeys = Object.keys(this.fG);
    var mk = 0;
    while ((mk < (mipKeys.length | 0))) {
      delete this.fG[mipKeys[mk]];
      mk = ((1 + mk) | 0);
    }
    var mipCount = this.j1();
    var fmts = this.iW();
    var hasPong = $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z(this);
    this.fH = [];
    this.f5 = [];
    this.hp = [];
    this.ge = [];
    this.ho = [];
    this.gb = [];
    this.hn = [];
    var i = 0;
    while ((i < (fmts.length | 0))) {
      var fmt = fmts[i];
      var $x_1 = this.f6.e;
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
      this.fH.push(tex);
      this.f5.push(tex.createView(({
        "baseMipLevel": 0,
        "mipLevelCount": 1
      })));
      this.hp.push(((mipCount > 1) ? tex.createView() : null));
      if (hasPong) {
        var $x_2 = this.f6.e;
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
        this.ge.push(pongTex);
        this.ho.push(pongTex.createView(({
          "baseMipLevel": 0,
          "mipLevelCount": 1
        })));
      }
      if (this.fK) {
        var $x_3 = this.f6.e;
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
        this.gb.push(msaaTex);
        this.hn.push(msaaTex.createView());
      }
      i = ((1 + i) | 0);
    }
    if (this.gh) {
      $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V(this);
    }
  }
});
var $d_Ltrivalibs_graphics_painter_Panel = new $TypeData().i($c_Ltrivalibs_graphics_painter_Panel, "trivalibs.graphics.painter.Panel", ({
  fa: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Shade(id, shaderModule, vertexBufferLayout, valueBindGroupLayout, panelBindGroupLayout, pipelineLayout, isLayer, uniformIndices, panelIndices) {
  this.kX = 0;
  this.hu = null;
  this.iz = null;
  this.iy = null;
  this.gk = null;
  this.kY = null;
  this.B = null;
  this.an = null;
  this.kX = id;
  this.hu = shaderModule;
  this.iz = vertexBufferLayout;
  this.iy = valueBindGroupLayout;
  this.gk = panelBindGroupLayout;
  this.kY = pipelineLayout;
  this.B = uniformIndices;
  this.an = panelIndices;
}
$p = $c_Ltrivalibs_graphics_painter_Shade.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Shade;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Shade() {
}
$h_Ltrivalibs_graphics_painter_Shade.prototype = $p;
var $d_Ltrivalibs_graphics_painter_Shade = new $TypeData().i($c_Ltrivalibs_graphics_painter_Shade, "trivalibs.graphics.painter.Shade", ({
  fb: 1
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
$p.n1 = (function() {
  return window.navigator.gpu;
});
$p.n0 = (function(canvas) {
  return canvas.getContext("webgpu");
});
var $d_Ltrivalibs_graphics_painter_WebGPU$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_WebGPU$, "trivalibs.graphics.painter.WebGPU$", ({
  fd: 1
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
  this.iD = 0.0;
  this.kZ = 0.0;
  this.iD = sensitivity;
  this.kZ = speed;
}
$p = $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController() {
}
$h_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController.prototype = $p;
$p.oE = (function(cam, input, tpf) {
  var dist = ((this.kZ * tpf) / 1000.0);
  var forward = 0.0;
  if (((input.aG("KeyW") || input.aG("ArrowUp")) || input.hB)) {
    forward = (forward + dist);
  }
  if (((input.aG("KeyS") || input.aG("ArrowDown")) || input.ne(2))) {
    forward = (forward - dist);
  }
  var left = 0.0;
  if ((input.aG("KeyA") || input.aG("ArrowLeft"))) {
    left = (left + dist);
  }
  if ((input.aG("KeyD") || input.aG("ArrowRight"))) {
    left = (left - dist);
  }
  var up = 0.0;
  if (input.aG("Space")) {
    up = (up + dist);
  }
  if ((input.aG("ShiftLeft") || input.aG("ShiftRight"))) {
    up = (up - dist);
  }
  var drag = input.mC();
  var deltaH = (((-(+drag.a2)) * this.iD) / 1000.0);
  var deltaV = (((-(+drag.ag)) * this.iD) / 1000.0);
  cam.nU(forward, left, up, deltaH, deltaV);
});
var $d_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController = new $TypeData().i($c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController, "trivalibs.graphics.scene.BasicFirstPersonCameraController", ({
  fe: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_scene_PerspectiveCamera(fov, aspect, near, far, rotH, rotV, pos, proj) {
  this.fM = 0.0;
  this.gl = 0.0;
  this.fN = 0.0;
  this.fL = 0.0;
  this.ar = 0.0;
  this.b3 = 0.0;
  this.ab = null;
  this.hv = null;
  this.fM = fov;
  this.gl = aspect;
  this.fN = near;
  this.fL = far;
  this.ar = rotH;
  this.b3 = rotV;
  this.ab = pos;
  this.hv = proj;
}
$p = $c_Ltrivalibs_graphics_scene_PerspectiveCamera.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_PerspectiveCamera;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_PerspectiveCamera() {
}
$h_Ltrivalibs_graphics_scene_PerspectiveCamera.prototype = $p;
$p.j3 = (function(fov, aspect, near, far, rotH, rotV, pos) {
  var needsProj = ((((fov !== this.fM) || (aspect !== this.gl)) || (near !== this.fN)) || (far !== this.fL));
  this.fM = fov;
  this.gl = aspect;
  this.fN = near;
  this.fL = far;
  if ((rotH !== this.ar)) {
    this.ar = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().j7(rotH);
  }
  if ((rotV !== this.b3)) {
    this.b3 = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().j6(rotV);
  }
  this.ab = pos;
  if (needsProj) {
    this.hv = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($m_Ltrivalibs_graphics_math_cpu_Mat4$(), fov, aspect, near, far);
  }
});
$p.nU = (function(forward, left, up, deltaH, deltaV) {
  if ((deltaH !== 0.0)) {
    this.ar = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().j7((this.ar + deltaH));
  }
  if ((deltaV !== 0.0)) {
    this.b3 = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().j6((this.b3 + deltaV));
  }
  if ((up !== 0.0)) {
    this.ab = new $c_Ltrivalibs_graphics_math_cpu_Vec3(this.ab.J, (this.ab.Q + up), this.ab.K);
  }
  if ((forward !== 0.0)) {
    var $x_4 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().ak();
    var $x_3 = this.ab;
    var $x_2 = $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
    var $x_1 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().ak();
    var p$proxy1 = this.ar;
    var x$1 = (-(+Math.sin(p$proxy1)));
    var p$proxy2 = this.ar;
    this.ab = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($x_4, $x_3, $x_2, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($x_1, new $c_Ltrivalibs_graphics_math_cpu_Vec3(x$1, 0.0, (-(+Math.cos(p$proxy2)))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), forward));
  }
  if ((left !== 0.0)) {
    var $x_9 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().ak();
    var $x_8 = this.ab;
    var $x_7 = $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
    var $x_6 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().ak();
    var p$proxy3 = this.ar;
    var $x_5 = Math.cos(p$proxy3);
    var p$proxy4 = this.ar;
    this.ab = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($x_9, $x_8, $x_7, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($x_6, new $c_Ltrivalibs_graphics_math_cpu_Vec3((-(+$x_5)), 0.0, (+Math.sin(p$proxy4))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), left));
  }
});
$p.oB = (function() {
  return new $c_Ltrivalibs_graphics_scene_Transform(this.ab, $f_Ltrivalibs_graphics_math_cpu_QuatImmutableOps__quatMul__O__Ltrivalibs_graphics_math_Vec4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$(), $m_Ltrivalibs_graphics_math_cpu_Quat$().lw(this.ar), $m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$(), $m_Ltrivalibs_graphics_math_cpu_Quat$().mZ(this.b3)), new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0));
});
$p.m1 = (function() {
  var $x_1 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().gD();
  var t = this.oB();
  return $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($x_1, $m_Ltrivalibs_graphics_math_cpu_Mat4$().lx(t.l2, t.l0, t.l1), $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
});
var $d_Ltrivalibs_graphics_scene_PerspectiveCamera = new $TypeData().i($c_Ltrivalibs_graphics_scene_PerspectiveCamera, "trivalibs.graphics.scene.PerspectiveCamera", ({
  ff: 1
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
$p.j7 = (function(a) {
  var r = (a % 6.283185307179586);
  return ((r < 0.0) ? (r + 6.283185307179586) : r);
});
$p.j6 = (function(a) {
  return ((a < (-1.5707963267948966)) ? (-1.5707963267948966) : ((a > 1.5707963267948966) ? 1.5707963267948966 : a));
});
$p.mm = (function(fov, aspect, near, far, rotH, rotV, pos) {
  var proj = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($m_Ltrivalibs_graphics_math_cpu_Mat4$(), fov, aspect, near, far);
  return new $c_Ltrivalibs_graphics_scene_PerspectiveCamera(fov, aspect, near, far, this.j7(rotH), this.j6(rotV), pos, proj);
});
var $d_Ltrivalibs_graphics_scene_PerspectiveCamera$ = new $TypeData().i($c_Ltrivalibs_graphics_scene_PerspectiveCamera$, "trivalibs.graphics.scene.PerspectiveCamera$", ({
  fg: 1
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
  this.l2 = null;
  this.l0 = null;
  this.l1 = null;
  this.l2 = translation;
  this.l0 = rotation;
  this.l1 = scale;
}
$p = $c_Ltrivalibs_graphics_scene_Transform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_Transform;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_Transform() {
}
$h_Ltrivalibs_graphics_scene_Transform.prototype = $p;
var $d_Ltrivalibs_graphics_scene_Transform = new $TypeData().i($c_Ltrivalibs_graphics_scene_Transform, "trivalibs.graphics.scene.Transform", ({
  fh: 1
}));
function $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($thiz, builtins) {
  var s = "";
  var i = 0;
  while ((i < (builtins.length | 0))) {
    var b = builtins[i];
    s = ((s + ((((", @builtin(" + b.aJ) + ") ") + b.aW) + ": ")) + b.aK);
    i = ((1 + i) | 0);
  }
  return s;
}
function $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($thiz, structName, locNames, locTypes, builtins) {
  var array$1 = $m_sjs_js_ArrayOps$().m3($m_sjs_js_ArrayOps$().m2(locNames, new $c_sjs_js_WrappedArray(locTypes)));
  var len = (array$1.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    var $x_2 = i;
    var x0 = array$1[i];
    matchResult3: {
      var $x_1;
      if ((x0 !== null)) {
        var x11 = x0.a2;
        if ((x11 !== null)) {
          var name = x11.a2;
          var typ = x11.ag;
          var $x_1 = (((((("  @location(" + (x0.ag | 0)) + ") ") + name) + ": ") + typ) + ",");
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
        var name$1 = x0$1.aW;
        var builtin = x0$1.aJ;
        var typ$1 = x0$1.aK;
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
  var array$1 = $m_sjs_js_ArrayOps$().m3($m_sjs_js_ArrayOps$().m2(names, new $c_sjs_js_WrappedArray(types)));
  var len = (array$1.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    var $x_3 = i;
    var x0 = array$1[i];
    matchResult5: {
      var $x_2;
      if ((x0 !== null)) {
        var x20 = x0.a2;
        if ((x20 !== null)) {
          var name = x20.a2;
          var typ = x20.ag;
          var bindingIdx = (x0.ag | 0);
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
  fk: 1
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
  this.R = null;
  this.R = target;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_AssignTarget.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_AssignTarget;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_AssignTarget() {
}
$h_Ltrivalibs_graphics_shader_dsl_AssignTarget.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_AssignTarget = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_AssignTarget, "trivalibs.graphics.shader.dsl.AssignTarget", ({
  fl: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_FnRegistry() {
  this.iE = null;
  this.Y = null;
  this.iE = ({});
  this.Y = [];
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FnRegistry() {
}
$h_Ltrivalibs_graphics_shader_dsl_FnRegistry.prototype = $p;
$p.m0 = (function(d) {
  if ((!(!(!(!(!this.iE.hasOwnProperty(d.name))))))) {
    this.iE[d.name] = true;
    var array = d.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      this.m0(array[i]);
      i = ((1 + i) | 0);
    }
    this.Y.push(d);
  }
});
var $d_Ltrivalibs_graphics_shader_dsl_FnRegistry = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FnRegistry, "trivalibs.graphics.shader.dsl.FnRegistry", ({
  fm: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$() {
  this.k = null;
  this.k = null;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FnRegistry$() {
}
$h_Ltrivalibs_graphics_shader_dsl_FnRegistry$.prototype = $p;
$p.hN = (function(d) {
  var r = this.k;
  if ((r !== null)) {
    r.m0(d);
  }
});
var $d_Ltrivalibs_graphics_shader_dsl_FnRegistry$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FnRegistry$, "trivalibs.graphics.shader.dsl.FnRegistry$", ({
  fn: 1
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
  this.aA = null;
  this.as = null;
  this.S = null;
  this.mf = null;
  this.f7 = null;
  this.aA = in$1;
  this.as = out;
  this.S = bindings;
  this.mf = textures;
  this.f7 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "in.position");
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FragmentCtx() {
}
$h_Ltrivalibs_graphics_shader_dsl_FragmentCtx.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_FragmentCtx = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FragmentCtx, "trivalibs.graphics.shader.dsl.FragmentCtx", ({
  fo: 1
}));
function $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, data) {
  if ((!(!(!(!(!$thiz.iF.hasOwnProperty(data.name))))))) {
    var dict = $thiz.iF;
    var key = data.name;
    dict[key] = true;
    var array = data.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, array[i]);
      i = ((1 + i) | 0);
    }
    $thiz.iG.push(data.src);
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_LayerProgram() {
  this.a5 = null;
  this.iG = null;
  this.iF = null;
  this.a5 = "";
  this.iG = [];
  this.iF = ({});
}
$p = $c_Ltrivalibs_graphics_shader_dsl_LayerProgram.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_LayerProgram;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_LayerProgram() {
}
$h_Ltrivalibs_graphics_shader_dsl_LayerProgram.prototype = $p;
$p.at = (function() {
  return this.iG.join("\n\n");
});
var $d_Ltrivalibs_graphics_shader_dsl_LayerProgram = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_LayerProgram, "trivalibs.graphics.shader.dsl.LayerProgram", ({
  fp: 1
}));
function $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, data) {
  if ((!(!(!(!(!$thiz.iH.hasOwnProperty(data.name))))))) {
    var dict = $thiz.iH;
    var key = data.name;
    dict[key] = true;
    var array = data.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, array[i]);
      i = ((1 + i) | 0);
    }
    $thiz.iI.push(data.src);
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_Program() {
  this.b5 = null;
  this.b4 = null;
  this.iI = null;
  this.iH = null;
  this.b5 = "";
  this.b4 = "";
  this.iI = [];
  this.iH = ({});
}
$p = $c_Ltrivalibs_graphics_shader_dsl_Program.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_Program;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_Program() {
}
$h_Ltrivalibs_graphics_shader_dsl_Program.prototype = $p;
$p.at = (function() {
  return this.iI.join("\n\n");
});
var $d_Ltrivalibs_graphics_shader_dsl_Program = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_Program, "trivalibs.graphics.shader.dsl.Program", ({
  fq: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(in$1, out, bindings, locals, textures) {
  this.b6 = null;
  this.aO = null;
  this.gn = null;
  this.b6 = in$1;
  this.aO = out;
  this.gn = bindings;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_VertexCtx.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_VertexCtx;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_VertexCtx() {
}
$h_Ltrivalibs_graphics_shader_dsl_VertexCtx.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_VertexCtx = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_VertexCtx, "trivalibs.graphics.shader.dsl.VertexCtx", ({
  fv: 1
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
$p.mg = (function() {
  return [];
});
var $d_Ltrivalibs_graphics_shader_dsl_WgslFnData$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_WgslFnData$, "trivalibs.graphics.shader.dsl.WgslFnData$", ({
  fy: 1
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
$p.hH = (function(fn) {
  return fn.name;
});
$p.aH = (function(fn, ds) {
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
  ds.gA(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((d$3) => {
    if ((!(!(!(!(!seen.hasOwnProperty(d$3.name))))))) {
      seen[d$3.name] = true;
      merged.push(d$3);
    }
  })));
  return new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())(fn.name, fn.src, merged);
});
var $d_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$, "trivalibs.graphics.shader.dsl.fn$package$WgslFn$", ({
  fz: 1
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
$p.N = (function(device, bindGroupLayouts) {
  return device.createPipelineLayout(({
    "bindGroupLayouts": bindGroupLayouts
  }));
});
var $d_Ltrivalibs_graphics_shader_layouts$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_layouts$, "trivalibs.graphics.shader.layouts$", ({
  fA: 1
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
  this.l4 = null;
  this.iL = null;
  $n_Ltrivalibs_graphics_shader_lib_blur_Blur$ = this;
  var names = $m_sjs_js_ArrayOpsCommon$().a(["tex"], $m_sjs_js_ArrayOpsCommon$().a(["s"], $m_sjs_js_ArrayOpsCommon$().a(["diameter"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["res"], $m_sjs_js_ArrayOpsCommon$().a(["dir"], []))))));
  var types = $m_sjs_js_ArrayOpsCommon$().a(["texture_2d<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["sampler"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []))))));
  var parts = [];
  var i = 0;
  while ((i < (names.length | 0))) {
    parts.push(((names[i] + ": ") + types[i]));
    i = ((1 + i) | 0);
  }
  var paramList = parts.join(", ");
  var src = (("fn gaussian_blur(" + paramList) + ") -> vec4<f32> {\n  let sigma = diameter * 0.25;\n  let support: i32 = i32(ceil(sigma * 1.5));\n  let offset = dir / res;\n  let exp_factor = -1.0 / (2.0 * sigma * sigma);\n  var sum = textureSample(tex, s, uv);\n  var weight_sum = 1.0;\n  var i: i32 = 1;\n  while (i <= support) {\n    let j = f32(i);\n    let w0 = exp(exp_factor * j * j);\n    let w1 = exp(exp_factor * (j + 1.0) * (j + 1.0));\n    let uv_offset = offset * (j + w1 / (w0 + w1));\n    let weight = w0 + w1;\n    sum += (textureSample(tex, s, uv + uv_offset) + textureSample(tex, s, uv - uv_offset)) * weight;\n    weight_sum += weight * 2.0;\n    i = i + 2;\n  }\n  return sum / weight_sum;\n}");
  new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("gaussian_blur", src);
  var names$2 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], $m_sjs_js_ArrayOpsCommon$().a(["s"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["res"], $m_sjs_js_ArrayOpsCommon$().a(["dir"], [])))));
  var types$2 = $m_sjs_js_ArrayOpsCommon$().a(["texture_2d<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["sampler"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], [])))));
  var parts$2 = [];
  var i$2 = 0;
  while ((i$2 < (names$2.length | 0))) {
    parts$2.push(((names$2[i$2] + ": ") + types$2[i$2]));
    i$2 = ((1 + i$2) | 0);
  }
  var paramList$2 = parts$2.join(", ");
  var src$2 = (("fn gaussian_blur_5(" + paramList$2) + ") -> vec4<f32> {\n  let off1 = vec2<f32>(1.3333333333333333) * dir / res;\n  var color = textureSample(tex, s, uv) * 0.29411764705882354;\n  color += textureSample(tex, s, uv + off1) * 0.35294117647058826;\n  color += textureSample(tex, s, uv - off1) * 0.35294117647058826;\n  return color;\n}");
  new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("gaussian_blur_5", src$2);
  var names$3 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], $m_sjs_js_ArrayOpsCommon$().a(["s"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["res"], $m_sjs_js_ArrayOpsCommon$().a(["dir"], [])))));
  var types$3 = $m_sjs_js_ArrayOpsCommon$().a(["texture_2d<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["sampler"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], [])))));
  var parts$3 = [];
  var i$3 = 0;
  while ((i$3 < (names$3.length | 0))) {
    parts$3.push(((names$3[i$3] + ": ") + types$3[i$3]));
    i$3 = ((1 + i$3) | 0);
  }
  var paramList$3 = parts$3.join(", ");
  var src$3 = (("fn gaussian_blur_9(" + paramList$3) + ") -> vec4<f32> {\n  let off1 = vec2<f32>(1.3846153846) * dir / res;\n  let off2 = vec2<f32>(3.2307692308) * dir / res;\n  var color = textureSample(tex, s, uv) * 0.2270270270;\n  color += textureSample(tex, s, uv + off1) * 0.3162162162;\n  color += textureSample(tex, s, uv - off1) * 0.3162162162;\n  color += textureSample(tex, s, uv + off2) * 0.0702702703;\n  color += textureSample(tex, s, uv - off2) * 0.0702702703;\n  return color;\n}");
  new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("gaussian_blur_9", src$3);
  var names$4 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], $m_sjs_js_ArrayOpsCommon$().a(["s"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["res"], $m_sjs_js_ArrayOpsCommon$().a(["dir"], [])))));
  var types$4 = $m_sjs_js_ArrayOpsCommon$().a(["texture_2d<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["sampler"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], [])))));
  var parts$4 = [];
  var i$4 = 0;
  while ((i$4 < (names$4.length | 0))) {
    parts$4.push(((names$4[i$4] + ": ") + types$4[i$4]));
    i$4 = ((1 + i$4) | 0);
  }
  var paramList$4 = parts$4.join(", ");
  var src$4 = (("fn gaussian_blur_13(" + paramList$4) + ") -> vec4<f32> {\n  let off1 = vec2<f32>(1.411764705882353) * dir / res;\n  let off2 = vec2<f32>(3.2941176470588234) * dir / res;\n  let off3 = vec2<f32>(5.176470588235294) * dir / res;\n  var color = textureSample(tex, s, uv) * 0.1964825501511404;\n  color += textureSample(tex, s, uv + off1) * 0.2969069646728344;\n  color += textureSample(tex, s, uv - off1) * 0.2969069646728344;\n  color += textureSample(tex, s, uv + off2) * 0.09447039785044732;\n  color += textureSample(tex, s, uv - off2) * 0.09447039785044732;\n  color += textureSample(tex, s, uv + off3) * 0.010381362401148057;\n  color += textureSample(tex, s, uv - off3) * 0.010381362401148057;\n  return color;\n}");
  new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("gaussian_blur_13", src$4);
  var names$5 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], $m_sjs_js_ArrayOpsCommon$().a(["s"], $m_sjs_js_ArrayOpsCommon$().a(["diameter"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["res"], $m_sjs_js_ArrayOpsCommon$().a(["dir"], []))))));
  var types$5 = $m_sjs_js_ArrayOpsCommon$().a(["texture_2d<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["sampler"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []))))));
  var parts$5 = [];
  var i$5 = 0;
  while ((i$5 < (names$5.length | 0))) {
    parts$5.push(((names$5[i$5] + ": ") + types$5[i$5]));
    i$5 = ((1 + i$5) | 0);
  }
  var paramList$5 = parts$5.join(", ");
  var src$5 = (("fn box_blur(" + paramList$5) + ") -> vec4<f32> {\n  let support: i32 = i32(floor(diameter * 0.5));\n  let offset = dir / res;\n  var sum = textureSample(tex, s, uv);\n  var i: i32 = 1;\n  while (i <= support) {\n    sum += textureSample(tex, s, uv + offset * f32(i)) + textureSample(tex, s, uv - offset * f32(i));\n    i = i + 1;\n  }\n  return sum / (1.0 + f32(support) * 2.0);\n}");
  new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("box_blur", src$5);
  var names$6 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], $m_sjs_js_ArrayOpsCommon$().a(["s"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["res"], $m_sjs_js_ArrayOpsCommon$().a(["radius"], [])))));
  var types$6 = $m_sjs_js_ArrayOpsCommon$().a(["texture_2d<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["sampler"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], [])))));
  var parts$6 = [];
  var i$6 = 0;
  while ((i$6 < (names$6.length | 0))) {
    parts$6.push(((names$6[i$6] + ": ") + types$6[i$6]));
    i$6 = ((1 + i$6) | 0);
  }
  var paramList$6 = parts$6.join(", ");
  var src$6 = (("fn box_blur_2d(" + paramList$6) + ") -> vec4<f32> {\n  let o = vec2<f32>(radius) / res;\n  var color = textureSample(tex, s, uv - o);\n  color += textureSample(tex, s, uv + vec2<f32>(o.x, -o.y));\n  color += textureSample(tex, s, uv + vec2<f32>(-o.x, o.y));\n  color += textureSample(tex, s, uv + o);\n  return color * 0.25;\n}");
  new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("box_blur_2d", src$6);
  var names$7 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], $m_sjs_js_ArrayOpsCommon$().a(["s"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["res"], $m_sjs_js_ArrayOpsCommon$().a(["radius"], [])))));
  var types$7 = $m_sjs_js_ArrayOpsCommon$().a(["texture_2d<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["sampler"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], [])))));
  var parts$7 = [];
  var i$7 = 0;
  while ((i$7 < (names$7.length | 0))) {
    parts$7.push(((names$7[i$7] + ": ") + types$7[i$7]));
    i$7 = ((1 + i$7) | 0);
  }
  var paramList$7 = parts$7.join(", ");
  var src$7 = (("fn tent_blur_2d(" + paramList$7) + ") -> vec4<f32> {\n  let o = vec2<f32>(radius) / res;\n  var color = textureSample(tex, s, uv) * 0.25;\n  color += (textureSample(tex, s, uv + vec2<f32>(0.0, o.y)) + textureSample(tex, s, uv + vec2<f32>(0.0, -o.y)) + textureSample(tex, s, uv + vec2<f32>(o.x, 0.0)) + textureSample(tex, s, uv + vec2<f32>(-o.x, 0.0))) * 0.125;\n  color += (textureSample(tex, s, uv + o) + textureSample(tex, s, uv + vec2<f32>(-o.x, o.y)) + textureSample(tex, s, uv + vec2<f32>(o.x, -o.y)) + textureSample(tex, s, uv - o)) * 0.0625;\n  return color;\n}");
  new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("tent_blur_2d", src$7);
  var names$8 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], $m_sjs_js_ArrayOpsCommon$().a(["s"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["radius"], []))));
  var types$8 = $m_sjs_js_ArrayOpsCommon$().a(["texture_2d<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["sampler"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], []))));
  var parts$8 = [];
  var i$8 = 0;
  while ((i$8 < (names$8.length | 0))) {
    parts$8.push(((names$8[i$8] + ": ") + types$8[i$8]));
    i$8 = ((1 + i$8) | 0);
  }
  var paramList$8 = parts$8.join(", ");
  var src$8 = (("fn box_blur_2d_auto(" + paramList$8) + ") -> vec4<f32> {\n  let o = vec2<f32>(radius) / vec2<f32>(textureDimensions(tex));\n  var color = textureSample(tex, s, uv - o);\n  color += textureSample(tex, s, uv + vec2<f32>(o.x, -o.y));\n  color += textureSample(tex, s, uv + vec2<f32>(-o.x, o.y));\n  color += textureSample(tex, s, uv + o);\n  return color * 0.25;\n}");
  this.l4 = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("box_blur_2d_auto", src$8);
  var names$9 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], $m_sjs_js_ArrayOpsCommon$().a(["s"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["radius"], []))));
  var types$9 = $m_sjs_js_ArrayOpsCommon$().a(["texture_2d<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["sampler"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], []))));
  var parts$9 = [];
  var i$9 = 0;
  while ((i$9 < (names$9.length | 0))) {
    parts$9.push(((names$9[i$9] + ": ") + types$9[i$9]));
    i$9 = ((1 + i$9) | 0);
  }
  var paramList$9 = parts$9.join(", ");
  var src$9 = (("fn tent_blur_2d_auto(" + paramList$9) + ") -> vec4<f32> {\n  let o = vec2<f32>(radius) / vec2<f32>(textureDimensions(tex));\n  var color = textureSample(tex, s, uv) * 0.25;\n  color += (textureSample(tex, s, uv + vec2<f32>(0.0, o.y)) + textureSample(tex, s, uv + vec2<f32>(0.0, -o.y)) + textureSample(tex, s, uv + vec2<f32>(o.x, 0.0)) + textureSample(tex, s, uv + vec2<f32>(-o.x, 0.0))) * 0.125;\n  color += (textureSample(tex, s, uv + o) + textureSample(tex, s, uv + vec2<f32>(-o.x, o.y)) + textureSample(tex, s, uv + vec2<f32>(o.x, -o.y)) + textureSample(tex, s, uv - o)) * 0.0625;\n  return color;\n}");
  this.iL = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("tent_blur_2d_auto", src$9);
}
$p = $c_Ltrivalibs_graphics_shader_lib_blur_Blur$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_blur_Blur$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_blur_Blur$() {
}
$h_Ltrivalibs_graphics_shader_lib_blur_Blur$.prototype = $p;
var $d_Ltrivalibs_graphics_shader_lib_blur_Blur$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_blur_Blur$, "trivalibs.graphics.shader.lib.blur.Blur$", ({
  fB: 1
}));
var $n_Ltrivalibs_graphics_shader_lib_blur_Blur$;
function $m_Ltrivalibs_graphics_shader_lib_blur_Blur$() {
  if ((!$n_Ltrivalibs_graphics_shader_lib_blur_Blur$)) {
    $n_Ltrivalibs_graphics_shader_lib_blur_Blur$ = new $c_Ltrivalibs_graphics_shader_lib_blur_Blur$();
  }
  return $n_Ltrivalibs_graphics_shader_lib_blur_Blur$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_lib_random_Simplex$() {
  this.hw = null;
  this.hx = null;
  this.hy = null;
  this.l5 = null;
  this.l6 = null;
  this.iM = null;
  this.l7 = null;
  this.l8 = null;
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
  this.hw = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("permute_3_", src);
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
  this.hx = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("permute_4_", src$2);
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
  this.hy = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("taylor_inv_sqrt_4_", src$3);
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
  this.l5 = $x_1.aH(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_noise_2d", src$4), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.hw]))));
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
  this.l6 = $x_2.aH(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_noise_2d_seeded", src$5), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.hw]))));
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
  this.iM = $x_3.aH(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_noise_3d", src$6), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.hx, this.hy]))));
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
  this.l7 = $x_4.aH(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_noise_3d_seeded", src$7), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.hx, this.hy]))));
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
  $x_5.aH(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("fbm_simplex_2d", src$8), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.l5]))));
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
  $x_6.aH(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("fbm_simplex_2d_seeded", src$9), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.l6]))));
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
  $x_7.aH(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("fbm_simplex_3d", src$10), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.iM]))));
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
  $x_8.aH(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("fbm_simplex_3d_seeded", src$11), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.l7]))));
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
  $x_9.aH(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("worley_2d", src$12), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.hw]))));
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
  this.l8 = $x_10.aH(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_noise_4d", src$16), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([permute1, this.hx, taylorInvSqrt1, this.hy, grad4]))));
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
  $x_11.aH(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("tiling_simplex_noise_2d", src$17), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.l8]))));
}
$p = $c_Ltrivalibs_graphics_shader_lib_random_Simplex$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_random_Simplex$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_random_Simplex$() {
}
$h_Ltrivalibs_graphics_shader_lib_random_Simplex$.prototype = $p;
var $d_Ltrivalibs_graphics_shader_lib_random_Simplex$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_random_Simplex$, "trivalibs.graphics.shader.lib.random.Simplex$", ({
  fC: 1
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
  this.l9 = null;
  this.iN = null;
  this.gp = 0;
  this.gq = 0.0;
  this.hz = 0.0;
  this.hA = 0.0;
  this.iO = false;
  this.l9 = frame;
  this.iN = onFpsCallback;
  this.gp = 0;
  this.gq = 0.0;
  this.hz = 0.0;
  this.hA = (-1.0);
  this.iO = false;
}
$p = $c_Ltrivalibs_utils_animation_Animator.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_animation_Animator;
/** @constructor */
function $h_Ltrivalibs_utils_animation_Animator() {
}
$h_Ltrivalibs_utils_animation_Animator.prototype = $p;
$p.lW = (function(time) {
  this.gp = ((1 + this.gp) | 0);
  if ((this.gq === 0.0)) {
    this.gq = time;
    this.hz = time;
  }
  var fpsElapsed = (time - this.gq);
  if ((fpsElapsed >= 1000.0)) {
    var fps = ((1000.0 * this.gp) / fpsElapsed);
    if (((time - this.hz) >= 1000.0)) {
      var args$proxy1 = $m_sr_ScalaRunTime$().av(new ($d_sjs_js_Any.r().C)([(fps.toFixed(1) + " FPS")]));
      console.log(...$m_sjsr_Compat$().au(args$proxy1));
      this.hz = time;
      if ((this.iN !== null)) {
        (0, this.iN)(fps);
      }
    }
    this.gp = 0;
    this.gq = time;
  }
  var delta = ((this.hA < 0.0) ? 0.0 : (time - this.hA));
  this.hA = time;
  (0, this.l9)(delta);
  if (this.iO) {
    requestAnimationFrame($m_sjs_js_Any$().gB(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
      this.lW((+v1$2));
    }))));
  }
});
$p.ou = (function() {
  this.iO = true;
  return requestAnimationFrame($m_sjs_js_Any$().gB(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
    this.lW((+v1$2));
  }))));
});
var $d_Ltrivalibs_utils_animation_Animator = new $TypeData().i($c_Ltrivalibs_utils_animation_Animator, "trivalibs.utils.animation.Animator", ({
  fH: 1
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
$p.ml = (function(frame) {
  var animator = new $c_Ltrivalibs_utils_animation_Animator(frame, null);
  animator.ou();
  return animator;
});
var $d_Ltrivalibs_utils_animation_animate$package$ = new $TypeData().i($c_Ltrivalibs_utils_animation_animate$package$, "trivalibs.utils.animation.animate$package$", ({
  fI: 1
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
  this.V = null;
  this.gt = null;
  this.hC = null;
  this.gr = 0.0;
  this.gs = 0.0;
  this.hB = false;
  this.lb = null;
  this.la = null;
  this.V = onActivity;
  this.gt = $m_sjs_js_special_package$().l(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_T2.r().C)([]))));
  this.hC = $m_sjs_js_special_package$().l(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().i(new ($d_T2.r().C)([]))));
  this.gr = 0.0;
  this.gs = 0.0;
  this.hB = false;
  $m_Ltrivalibs_utils_events_keyboard$package$().nh(keyTarget, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((k$3) => {
    if ((!(!(!(!(!this.gt.hasOwnProperty(k$3))))))) {
      var value$proxy1 = (+Date.now());
      this.gt[k$3] = value$proxy1;
      if ((!(this.V === (void 0)))) {
        var m$proxy1 = this.V;
        m$proxy1();
      }
    }
  })), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((k$3$1) => {
    delete this.gt[k$3$1];
    if ((!(this.V === (void 0)))) {
      var m$proxy2 = this.V;
      m$proxy2();
    }
  })), false);
  $m_Ltrivalibs_utils_events_pointer$package$().o4(el, $m_Ltrivalibs_utils_events_pointer$package$().o5(), new $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(((v1$2, v2$2, v3$2) => {
    var b = (v1$2 | 0);
    if (focusOnPointerDown) {
      keyTarget.focus();
    }
    var key$proxy3 = ("" + b);
    this.hC[key$proxy3] = true;
    if ((!(this.V === (void 0)))) {
      var m$proxy3 = this.V;
      m$proxy3();
    }
  })), new $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(((v1$2$1, v2$2$1, v3$2$1) => {
    var b$1 = (v1$2$1 | 0);
    delete this.hC[("" + b$1)];
    if ((!(this.V === (void 0)))) {
      var m$proxy4 = this.V;
      m$proxy4();
    }
  })), new $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(((v1$2$2, v2$2$2, v3$2$2, v4$2) => (void 0))), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    if ((!(this.V === (void 0)))) {
      var m$proxy5 = this.V;
      m$proxy5();
    }
  })), new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((v1$2$3, v2$2$3) => {
    var dx = (+v1$2$3);
    var dy = (+v2$2$3);
    this.gr = (this.gr + dx);
    this.gs = (this.gs + dy);
    if ((!(this.V === (void 0)))) {
      var m$proxy6 = this.V;
      m$proxy6();
    }
  })), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    this.hB = false;
    if ((!(this.V === (void 0)))) {
      var m$proxy7 = this.V;
      m$proxy7();
    }
  })), new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((v1$2$4, v2$2$4) => {
    this.hB = true;
    if ((!(this.V === (void 0)))) {
      var m$proxy8 = this.V;
      m$proxy8();
    }
  })), holdDelay, holdRadius, suppressContextMenu);
  if ($m_sr_BoxesRunTime$().b(keyTarget, window)) {
    (!(!document.hasFocus()));
  } else {
    $m_sr_BoxesRunTime$().b(keyTarget, document.activeElement);
  }
  this.lb = ((_$5$3) => {
    if ((!(this.V === (void 0)))) {
      var m$proxy9 = this.V;
      m$proxy9();
    }
  });
  this.la = ((_$6$3) => {
    if ((!(this.V === (void 0)))) {
      var m$proxy10 = this.V;
      m$proxy10();
    }
  });
  keyTarget.addEventListener("focus", this.lb);
  keyTarget.addEventListener("blur", this.la);
}
$p = $c_Ltrivalibs_utils_events_InputState.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_InputState;
/** @constructor */
function $h_Ltrivalibs_utils_events_InputState() {
}
$h_Ltrivalibs_utils_events_InputState.prototype = $p;
$p.aG = (function(key) {
  return (!(!(!(!this.gt.hasOwnProperty(key)))));
});
$p.ne = (function(button) {
  var key$proxy7 = ("" + button);
  return (!(!(!(!this.hC.hasOwnProperty(key$proxy7)))));
});
$p.mC = (function() {
  var x$proxy1 = new $c_T2(this.gr, this.gs);
  this.gr = 0.0;
  this.gs = 0.0;
  return x$proxy1;
});
var $d_Ltrivalibs_utils_events_InputState = new $TypeData().i($c_Ltrivalibs_utils_events_InputState, "trivalibs.utils.events.InputState", ({
  fJ: 1
}));
/** @constructor */
function $c_Ltrivalibs_utils_events_PointerTracker(holdRadius) {
  this.lc = 0.0;
  this.gv = false;
  this.gw = false;
  this.gx = false;
  this.iP = 0.0;
  this.iQ = 0.0;
  this.gu = 0.0;
  this.lc = holdRadius;
  this.gv = false;
  this.gw = false;
  this.gx = false;
  this.iP = 0.0;
  this.iQ = 0.0;
  this.gu = 0.0;
}
$p = $c_Ltrivalibs_utils_events_PointerTracker.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_PointerTracker;
/** @constructor */
function $h_Ltrivalibs_utils_events_PointerTracker() {
}
$h_Ltrivalibs_utils_events_PointerTracker.prototype = $p;
$p.mL = (function(x, y) {
  this.gx = true;
  this.gv = true;
  this.gw = false;
  this.iP = x;
  this.iQ = y;
  this.gu = 0.0;
});
$p.nV = (function(x, y) {
  if (this.gx) {
    var ddx = (x - this.iP);
    var ddy = (y - this.iQ);
    var p$proxy1 = ((ddx * ddx) + (ddy * ddy));
    var d = (+Math.sqrt(p$proxy1));
    if ((d > this.gu)) {
      this.gu = d;
    }
  }
});
$p.oD = (function() {
  this.gx = false;
  this.gv = false;
  this.gw = false;
});
$p.my = (function() {
  if (((this.gx && (!this.gw)) && (this.gu <= this.lc))) {
    this.gw = true;
    return true;
  } else {
    return false;
  }
});
var $d_Ltrivalibs_utils_events_PointerTracker = new $TypeData().i($c_Ltrivalibs_utils_events_PointerTracker, "trivalibs.utils.events.PointerTracker", ({
  fK: 1
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
$p.nc = (function(canvas, initialFocus, holdDelay, holdRadius, suppressContextMenu, onActivity) {
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
  fL: 1
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
$p.nh = (function(el, onDown, onUp, keepDefault) {
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
  fM: 1
}));
var $n_Ltrivalibs_utils_events_keyboard$package$;
function $m_Ltrivalibs_utils_events_keyboard$package$() {
  if ((!$n_Ltrivalibs_utils_events_keyboard$package$)) {
    $n_Ltrivalibs_utils_events_keyboard$package$ = new $c_Ltrivalibs_utils_events_keyboard$package$();
  }
  return $n_Ltrivalibs_utils_events_keyboard$package$;
}
function $p_Ltrivalibs_utils_events_pointer$package$__clearHold$1__sr_ObjectRef__V($thiz, holdTimer$1) {
  if ((holdTimer$1.fv !== null)) {
    $m_sjs_js_timers_package$().mz(holdTimer$1.fv);
    holdTimer$1.fv = null;
  }
}
function $p_Ltrivalibs_utils_events_pointer$package$__endPrimary$1__Ltrivalibs_utils_events_PointerTracker__sr_BooleanRef__F0__sr_ObjectRef__V($thiz, tracker$1, primaryActive$1, onDragEnd$1, holdTimer$2) {
  var wasDragging = tracker$1.gv;
  tracker$1.oD();
  $p_Ltrivalibs_utils_events_pointer$package$__clearHold$1__sr_ObjectRef__V($thiz, holdTimer$2);
  primaryActive$1.f1 = false;
  if (wasDragging) {
    onDragEnd$1.fP();
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
$p.o4 = (function(el, moveTarget, onDown, onUp, onMove, onDragStart, onDrag, onDragEnd, onHold, holdDelay, holdRadius, suppressContextMenu) {
  var tracker = new $c_Ltrivalibs_utils_events_PointerTracker(holdRadius);
  var holdTimer = new $c_sr_ObjectRef(null);
  var lastX = new $c_sr_DoubleRef(0.0);
  var lastY = new $c_sr_DoubleRef(0.0);
  var primaryActive = new $c_sr_BooleanRef(false);
  var downFn = ((e$3) => {
    var btn = (e$3.button | 0);
    onDown.lm(btn, (+e$3.clientX), (+e$3.clientY));
    if (((!(!e$3.isPrimary)) && (btn === 0))) {
      lastX.aM = (+e$3.clientX);
      lastY.aM = (+e$3.clientY);
      primaryActive.f1 = true;
      tracker.mL((+e$3.clientX), (+e$3.clientY));
      onDragStart.fP();
      $p_Ltrivalibs_utils_events_pointer$package$__clearHold$1__sr_ObjectRef__V(this, holdTimer);
      holdTimer.fv = $m_sjs_js_timers_package$().op(holdDelay, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
        if (tracker.my()) {
          onHold.aB(lastX.aM, lastY.aM);
        }
      })));
    }
  });
  var moveFn = ((e$3$1) => {
    var dx = ((+e$3$1.clientX) - lastX.aM);
    var dy = ((+e$3$1.clientY) - lastY.aM);
    lastX.aM = (+e$3$1.clientX);
    lastY.aM = (+e$3$1.clientY);
    onMove.ll((+e$3$1.clientX), (+e$3$1.clientY), dx, dy);
    if (primaryActive.f1) {
      tracker.nV((+e$3$1.clientX), (+e$3$1.clientY));
      if (tracker.gv) {
        onDrag.aB(dx, dy);
      }
    }
  });
  var upFn = ((e$3$2) => {
    var btn$1 = (e$3$2.button | 0);
    onUp.lm(btn$1, (+e$3$2.clientX), (+e$3$2.clientY));
    if ((primaryActive.f1 && (btn$1 === 0))) {
      $p_Ltrivalibs_utils_events_pointer$package$__endPrimary$1__Ltrivalibs_utils_events_PointerTracker__sr_BooleanRef__F0__sr_ObjectRef__V(this, tracker, primaryActive, onDragEnd, holdTimer);
    }
  });
  var cancelFn = ((e$3$3) => {
    if (primaryActive.f1) {
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
$p.o5 = (function() {
  return window;
});
var $d_Ltrivalibs_utils_events_pointer$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_pointer$package$, "trivalibs.utils.events.pointer$package$", ({
  fN: 1
}));
var $n_Ltrivalibs_utils_events_pointer$package$;
function $m_Ltrivalibs_utils_events_pointer$package$() {
  if ((!$n_Ltrivalibs_utils_events_pointer$package$)) {
    $n_Ltrivalibs_utils_events_pointer$package$ = new $c_Ltrivalibs_utils_events_pointer$package$();
  }
  return $n_Ltrivalibs_utils_events_pointer$package$;
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
$p.lV = (function(min, max) {
  return (((+Math.random()) * (max - min)) + min);
});
var $d_Ltrivalibs_utils_random_random$package$ = new $TypeData().i($c_Ltrivalibs_utils_random_random$package$, "trivalibs.utils.random.random$package$", ({
  fQ: 1
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
  this.hR = null;
  $n_jl_Character$ = this;
  this.hR = new $ac_I(new Int32Array([1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3558, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43504, 43600, 44016, 65296, 66720, 68912, 69734, 69872, 69942, 70096, 70384, 70736, 70864, 71248, 71360, 71472, 71904, 72016, 72784, 73040, 73120, 73552, 92768, 92864, 93008, 120782, 120792, 120802, 120812, 120822, 123200, 123632, 124144, 125264, 130032]));
}
$p = $c_jl_Character$.prototype = new $h_O();
$p.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
}
$h_jl_Character$.prototype = $p;
$p.oz = (function(codePoint) {
  if (((codePoint >>> 0) > 1114111)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return String.fromCodePoint(codePoint);
});
$p.mG = (function(codePoint, radix) {
  if ((codePoint < 256)) {
    var value = (((((codePoint - 48) | 0) >>> 0) <= 9) ? ((codePoint - 48) | 0) : (((((codePoint - 65) | 0) >>> 0) <= 25) ? ((codePoint - 55) | 0) : (((((codePoint - 97) | 0) >>> 0) <= 25) ? ((codePoint - 87) | 0) : (-1))));
  } else if (((((codePoint - 65313) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65303) | 0);
  } else if (((((codePoint - 65345) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65335) | 0);
  } else {
    var p = $m_ju_Arrays$().mu(this.hR, codePoint);
    var zeroCodePointIndex = ((p < 0) ? (((-2) - p) | 0) : p);
    if ((zeroCodePointIndex < 0)) {
      var value = (-1);
    } else {
      var v = ((codePoint - this.hR.d[zeroCodePointIndex]) | 0);
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
$p.gV = (function(s) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s) + "\""));
});
$p.nf = (function(s, radix, overflowBarrier) {
  if ((s === null)) {
    $m_jl_Integer$().gV(s);
  }
  var len = s.length;
  if ((len === 0)) {
    $m_jl_Integer$().gV(s);
  }
  var character = $m_jl_Character$();
  var firstChar = s.charCodeAt(0);
  var negative = (firstChar === 45);
  var sign = (negative ? (-1) : 0);
  var i = ((negative || (firstChar === 43)) ? 1 : 0);
  if ((i >= len)) {
    $m_jl_Integer$().gV(s);
  }
  var java$lang$IntFloatBits$Int32Box$$value = 0;
  java$lang$IntFloatBits$Int32Box$$value = 0;
  while ((i !== len)) {
    var x = character.mG(s.charCodeAt(i), radix);
    if (((x < 0) || ((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (overflowBarrier >>> 0)))) {
      $m_jl_Integer$().gV(s);
    }
    var x$2 = java$lang$IntFloatBits$Int32Box$$value;
    var x$3 = Math.imul(x$2, radix);
    var v = ((x$3 + x) | 0);
    java$lang$IntFloatBits$Int32Box$$value = v;
    i = ((1 + i) | 0);
  }
  if (((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (((2147483647 - sign) | 0) >>> 0))) {
    $m_jl_Integer$().gV(s);
  }
  return (((java$lang$IntFloatBits$Int32Box$$value ^ sign) - sign) | 0);
});
var $d_jl_Integer$ = new $TypeData().i($c_jl_Integer$, "java.lang.Integer$", ({
  bc: 1,
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
  $thiz.ji = s;
  if (writableStackTrace) {
    $thiz.mU();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.ji = null;
  }
  hE() {
    return this.ji;
  }
  mU() {
    var reference = ((this instanceof $c_sjs_js_JavaScriptException) ? this.aN : this);
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
    var message = this.hE();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  x() {
    return $c_O.prototype.x.call(this);
  }
  q(that) {
    return $c_O.prototype.q.call(this, that);
  }
  get "message"() {
    var m = this.hE();
    return ((m === null) ? "" : m);
  }
  get "name"() {
    return $objectClassName(this);
  }
  "toString"() {
    return this.m();
  }
}
function $isArrayOf_jl_Throwable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.f)));
}
/** @constructor */
function $c_s_Console$() {
  this.jk = null;
  $n_s_Console$ = this;
  this.jk = new $c_s_util_DynamicVariable($m_jl_System$Streams$().jg);
}
$p = $c_s_Console$.prototype = new $h_O();
$p.constructor = $c_s_Console$;
/** @constructor */
function $h_s_Console$() {
}
$h_s_Console$.prototype = $p;
$p.o0 = (function() {
  return this.jk.hU;
});
var $d_s_Console$ = new $TypeData().i($c_s_Console$, "scala.Console$", ({
  bv: 1,
  cD: 1
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
$p.m = (function() {
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
$p.oM = (function(xs) {
  if ((xs === null)) {
    return null;
  } else if ((xs.d.length === 0)) {
    var this$2 = $m_scm_ArraySeq$();
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    return this$2.jv;
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
$p.m = (function() {
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
$p.m = (function() {
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
$p.m = (function() {
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
$p.m = (function() {
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
$p.m = (function() {
  return "<function4>";
});
/** @constructor */
function $c_sr_BooleanRef(elem) {
  this.f1 = false;
  this.f1 = elem;
}
$p = $c_sr_BooleanRef.prototype = new $h_O();
$p.constructor = $c_sr_BooleanRef;
/** @constructor */
function $h_sr_BooleanRef() {
}
$h_sr_BooleanRef.prototype = $p;
$p.m = (function() {
  return ("" + this.f1);
});
var $d_sr_BooleanRef = new $TypeData().i($c_sr_BooleanRef, "scala.runtime.BooleanRef", ({
  cW: 1,
  a: 1
}));
/** @constructor */
function $c_sr_DoubleRef(elem) {
  this.aM = 0.0;
  this.aM = elem;
}
$p = $c_sr_DoubleRef.prototype = new $h_O();
$p.constructor = $c_sr_DoubleRef;
/** @constructor */
function $h_sr_DoubleRef() {
}
$h_sr_DoubleRef.prototype = $p;
$p.m = (function() {
  return ("" + this.aM);
});
var $d_sr_DoubleRef = new $TypeData().i($c_sr_DoubleRef, "scala.runtime.DoubleRef", ({
  cY: 1,
  a: 1
}));
/** @constructor */
function $c_sr_ObjectRef(elem) {
  this.fv = null;
  this.fv = elem;
}
$p = $c_sr_ObjectRef.prototype = new $h_O();
$p.constructor = $c_sr_ObjectRef;
/** @constructor */
function $h_sr_ObjectRef() {
}
$h_sr_ObjectRef.prototype = $p;
$p.m = (function() {
  return ("" + this.fv);
});
var $d_sr_ObjectRef = new $TypeData().i($c_sr_ObjectRef, "scala.runtime.ObjectRef", ({
  d0: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.fx = 0;
  this.jE = 0;
  this.m5 = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.fx = $f_T__hashCode__I("Seq");
  this.jE = $f_T__hashCode__I("Map");
  $f_T__hashCode__I("Set");
  this.m5 = this.oC($m_sci_Nil$(), this.jE);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.lX = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.n9(xs, this.fx) : ((xs instanceof $c_sci_List) ? this.ni(xs, this.fx) : this.nZ(xs, this.fx)));
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().i($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  dn: 1,
  dm: 1
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
  this.jS = null;
  this.jR = null;
  this.jT = null;
  this.jU = null;
  this.jS = p$1;
  this.jR = bloomP$1;
  this.jT = resultP$1;
  this.jU = resultP$1;
}
$p = $c_Lsketchlib_utils_bloom_Bloom$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_bloom_Bloom$$anon$1;
/** @constructor */
function $h_Lsketchlib_utils_bloom_Bloom$$anon$1() {
}
$h_Lsketchlib_utils_bloom_Bloom$$anon$1.prototype = $p;
$p.o3 = (function() {
  var Painter_this = this.jS;
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.jR);
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.jT);
});
var $d_Lsketchlib_utils_bloom_Bloom$$anon$1 = new $TypeData().i($c_Lsketchlib_utils_bloom_Bloom$$anon$1, "sketchlib.utils.bloom.Bloom$$anon$1", ({
  dx: 1,
  dv: 1
}));
function $p_Lsketchlib_utils_mirror_MirrorReflection$$anon$1__default$proxy1$1__Ltrivalibs_graphics_scene_PerspectiveCamera($thiz) {
  throw new $c_sjs_js_JavaScriptException(Error("MirrorReflection.paint needs a camera (construct with `camera = \u2026`) or an explicit `vp` argument")).aN;
}
function $p_Lsketchlib_utils_mirror_MirrorReflection$$anon$1__default$proxy2$1__Ltrivalibs_graphics_math_cpu_Mat4($thiz) {
  var this$1 = (($thiz.i1 !== null) ? $thiz.i1 : $p_Lsketchlib_utils_mirror_MirrorReflection$$anon$1__default$proxy1$1__Ltrivalibs_graphics_scene_PerspectiveCamera($thiz));
  return $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().gD(), this$1.hv, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), this$1.m1());
}
/** @constructor */
function $c_Lsketchlib_utils_mirror_MirrorReflection$$anon$1(mirrorPanel$1, resolvePanel$1, uBlurStrength$1, camera$1, reflMat$1, uVp$1, uInvVp$1, p$1, blurPanel$1) {
  this.i1 = null;
  this.jY = null;
  this.k2 = null;
  this.k1 = null;
  this.jX = null;
  this.jW = null;
  this.jV = null;
  this.jZ = null;
  this.k0 = null;
  this.i1 = camera$1;
  this.jY = reflMat$1;
  this.k2 = uVp$1;
  this.k1 = uInvVp$1;
  this.jX = p$1;
  this.jW = mirrorPanel$1;
  this.jV = blurPanel$1;
  this.jZ = resolvePanel$1;
  this.k0 = resolvePanel$1;
}
$p = $c_Lsketchlib_utils_mirror_MirrorReflection$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_mirror_MirrorReflection$$anon$1;
/** @constructor */
function $h_Lsketchlib_utils_mirror_MirrorReflection$$anon$1() {
}
$h_Lsketchlib_utils_mirror_MirrorReflection$$anon$1.prototype = $p;
$p.o2 = (function(vp) {
  var cameraVP = ((vp === (void 0)) ? $p_Lsketchlib_utils_mirror_MirrorReflection$$anon$1__default$proxy2$1__Ltrivalibs_graphics_math_cpu_Mat4(this) : vp);
  var m = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().gD(), cameraVP, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), this.jY);
  var BufferBinding_this = this.k2;
  BufferBinding_this.v.r(BufferBinding_this.g, m);
  var $x_2 = BufferBinding_this.u.queue;
  var $x_1 = BufferBinding_this.s;
  var s$proxy4 = BufferBinding_this.g;
  $x_2.writeBuffer($x_1, 0.0, s$proxy4.dv.buffer);
  var BufferBinding_this$3 = this.k1;
  var value$proxy5 = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().gD(), m, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
  BufferBinding_this$3.v.r(BufferBinding_this$3.g, value$proxy5);
  var $x_4 = BufferBinding_this$3.u.queue;
  var $x_3 = BufferBinding_this$3.s;
  var s$proxy5 = BufferBinding_this$3.g;
  $x_4.writeBuffer($x_3, 0.0, s$proxy5.dv.buffer);
  var Painter_this = this.jX;
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.jW);
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.jV);
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.jZ);
});
var $d_Lsketchlib_utils_mirror_MirrorReflection$$anon$1 = new $TypeData().i($c_Lsketchlib_utils_mirror_MirrorReflection$$anon$1, "sketchlib.utils.mirror.MirrorReflection$$anon$1", ({
  dA: 1,
  dy: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT(uv) {
  this.b2 = null;
  this.b2 = uv;
}
$p = $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT() {
}
$h_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT.prototype = $p;
var $d_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT, "trivalibs.graphics.buffers.UniformLayout$given_UniformLayout_T", ({
  dF: 1,
  dE: 1
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
$p.oN = (function(ref, value) {
  var value$proxy1 = Math.fround(value);
  var offset$proxy3 = (ref.off | 0);
  ref.dv.setFloat32(offset$proxy3, value$proxy1, true);
});
$p.r = (function(ref, value) {
  this.oN(ref, (+value));
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Double_$times$colon$", ({
  dG: 1,
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
$p.r = (function(ref, value) {
  $f_Ltrivalibs_graphics_math_Mat4MutableOps__set__O__Ltrivalibs_graphics_math_Mat4Mutable__O__Ltrivalibs_graphics_math_Mat4Base__V($m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$().n3(), ref, $m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$(), value, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Mat4_Mat4Buffer$", ({
  dH: 1,
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
$p.r = (function(ref, value) {
  $f_Ltrivalibs_graphics_math_Vec2MutableOps__set__O__Ltrivalibs_graphics_math_Vec2Mutable__O__Ltrivalibs_graphics_math_Vec2Base__V($m_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$().oG(), ref, $m_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$(), value, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$());
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Vec2_Vec2Buffer$", ({
  dI: 1,
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
$p.oO = (function(ref, value) {
  var value$proxy2 = value.J;
  var value$proxy3 = Math.fround(value$proxy2);
  var offset$proxy5 = (ref.off | 0);
  ref.dv.setFloat32(offset$proxy5, value$proxy3, true);
  var value$proxy4 = value.Q;
  var value$proxy5 = Math.fround(value$proxy4);
  var offset$proxy6 = ((4 + (ref.off | 0)) | 0);
  ref.dv.setFloat32(offset$proxy6, value$proxy5, true);
  var value$proxy6 = value.K;
  var value$proxy7 = Math.fround(value$proxy6);
  var offset$proxy7 = ((8 + (ref.off | 0)) | 0);
  ref.dv.setFloat32(offset$proxy7, value$proxy7, true);
});
$p.r = (function(ref, value) {
  this.oO(ref, value);
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Vec3_Vec4Buffer$", ({
  dJ: 1,
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
$p.r = (function(ref, value) {
  $f_Ltrivalibs_graphics_math_Vec4MutableOps__set__O__Ltrivalibs_graphics_math_Vec4Mutable__O__Ltrivalibs_graphics_math_Vec4Base__V($m_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$().oH(), ref, $m_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$(), value, $m_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$());
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Vec4_Vec4Buffer$", ({
  dK: 1,
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
$p.bl = (function(t) {
  return new $c_T2(t.hd, t.he);
});
var $d_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$, "trivalibs.graphics.geometry.FieldWriter$vec2Writer$", ({
  dP: 1,
  aQ: 1
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
$p.bl = (function(t) {
  return new $c_T3(t.J, t.Q, t.K);
});
var $d_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$, "trivalibs.graphics.geometry.FieldWriter$vec3Writer$", ({
  dQ: 1,
  aQ: 1
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
  this.h8 = null;
  this.h8 = x$1;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexLayout$named.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexLayout$named;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexLayout$named() {
}
$h_Ltrivalibs_graphics_geometry_VertexLayout$named.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_VertexLayout$named = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayout$named, "trivalibs.graphics.geometry.VertexLayout$named", ({
  dY: 1,
  dX: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons(x$1, x$2) {
  this.ke = null;
  this.kf = null;
  this.ke = x$1;
  this.kf = x$2;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons() {
}
$h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons.prototype = $p;
$p.oF = (function(t) {
  return $m_sr_Tuples$().mB(this.ke.bl(t.j(0)), this.kf.bl($m_sr_Tuples$().ow(t)));
});
$p.bl = (function(t) {
  return this.oF(t);
});
var $d_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons, "trivalibs.graphics.geometry.VertexLayoutHelper$cons", ({
  dZ: 1,
  aR: 1
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
$p.bl = (function(t) {
  return $m_T$package$EmptyTuple$();
});
var $d_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$, "trivalibs.graphics.geometry.VertexLayoutHelper$nil$", ({
  e0: 1,
  aR: 1
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
  this.kh = 0;
  this.kh = idx$2;
}
$p = $c_Ltrivalibs_graphics_geometry_package$package$$anon$1.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_package$package$$anon$1;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_package$package$$anon$1() {
}
$h_Ltrivalibs_graphics_geometry_package$package$$anon$1.prototype = $p;
$p.lU = (function(t) {
  return t.j(this.kh);
});
var $d_Ltrivalibs_graphics_geometry_package$package$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_geometry_package$package$$anon$1, "trivalibs.graphics.geometry.package$package$$anon$1", ({
  e5: 1,
  dV: 1
}));
function $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D($thiz, v, other) {
  return (((v.J * other.J) + (v.Q * other.Q)) + (v.K * other.K));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat4$() {
  this.ki = null;
  this.kj = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4$() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4$.prototype = $p;
$p.gD = (function() {
  if ((!this.kj)) {
    this.ki = $m_Ltrivalibs_graphics_math_cpu_Mat4$();
    this.kj = true;
  }
  return this.ki;
});
$p.lx = (function(t, r, s) {
  var x = r.ha;
  var y = r.hb;
  var z = r.hc;
  var w = r.h9;
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
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4(((1.0 - (yy + zz)) * s.J), ((xy + wz) * s.J), ((xz - wy) * s.J), 0.0, ((xy - wz) * s.Q), ((1.0 - (xx + zz)) * s.Q), ((yz + wx) * s.Q), 0.0, ((xz + wy) * s.K), ((yz - wx) * s.K), ((1.0 - (xx + yy)) * s.K), 0.0, t.J, t.Q, t.K, 1.0);
});
var $d_Ltrivalibs_graphics_math_cpu_Mat4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4$, "trivalibs.graphics.math.cpu.Mat4$", ({
  ej: 1,
  e7: 1
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
  this.kk = null;
  this.kl = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec3$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec3$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec3$.prototype = $p;
$p.ak = (function() {
  if ((!this.kl)) {
    this.kk = $m_Ltrivalibs_graphics_math_cpu_Vec3$();
    this.kl = true;
  }
  return this.kk;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3$, "trivalibs.graphics.math.cpu.Vec3$", ({
  et: 1,
  ed: 1
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
  ey: 1,
  e9: 1
}));
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
  eB: 1,
  eb: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$6() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$6.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$6;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$6() {
}
$h_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$6.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$6 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$6, "trivalibs.graphics.math.cpu.vec4$package$Vec4Buffer$$anon$6", ({
  eE: 1,
  eh: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1(f$2) {
  this.ks = null;
  this.ks = f$2;
}
$p = $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1() {
}
$h_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1.prototype = $p;
$p.aV = (function(s) {
  return this.ks.h(s);
});
var $d_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1, "trivalibs.graphics.math.gpu.LeftScalar$$anon$1", ({
  eI: 1,
  eG: 1
}));
function $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__($thiz, name) {
  $thiz.f4 = name;
  $ct_Ltrivalibs_graphics_math_gpu_Expr__T__($thiz, name);
  return $thiz;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_LetExpr() {
  this.c = null;
  this.f4 = null;
}
$p = $c_Ltrivalibs_graphics_math_gpu_LetExpr.prototype = new $h_Ltrivalibs_graphics_math_gpu_Expr();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_LetExpr;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_LetExpr() {
}
$h_Ltrivalibs_graphics_math_gpu_LetExpr.prototype = $p;
$p.T = (function(value) {
  return (((("  let " + this.f4) + " = ") + value.c) + ";");
});
var $d_Ltrivalibs_graphics_math_gpu_LetExpr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LetExpr, "trivalibs.graphics.math.gpu.LetExpr", ({
  aX: 1,
  Z: 1
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
$p.h0 = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.c + ".x"));
});
$p.h1 = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.c + ".y"));
});
$p.G = (function(v) {
  return this.h0(v);
});
$p.C = (function(v) {
  return this.h1(v);
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4, "trivalibs.graphics.math.gpu.float_expr$package$$anon$4", ({
  eP: 1,
  W: 1
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
$p.h0 = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.c + ".x"));
});
$p.h1 = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.c + ".y"));
});
$p.jd = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.c + ".z"));
});
$p.mK = (function(v, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("dot(" + v.c) + ", ") + other.c) + ")"));
});
$p.G = (function(v) {
  return this.h0(v);
});
$p.C = (function(v) {
  return this.h1(v);
});
$p.a8 = (function(v) {
  return this.jd(v);
});
$p.ls = (function(v, other) {
  return this.mK(v, other);
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5, "trivalibs.graphics.math.gpu.float_expr$package$$anon$5", ({
  eQ: 1,
  aW: 1
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
$p.h0 = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.c + ".x"));
});
$p.h1 = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.c + ".y"));
});
$p.jd = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.c + ".z"));
});
$p.oJ = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.c + ".w"));
});
$p.G = (function(v) {
  return this.h0(v);
});
$p.C = (function(v) {
  return this.h1(v);
});
$p.a8 = (function(v) {
  return this.jd(v);
});
$p.af = (function(v) {
  return this.oJ(v);
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6, "trivalibs.graphics.math.gpu.float_expr$package$$anon$6", ({
  eR: 1,
  G: 1
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
  eS: 1,
  V: 1
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
$p.nR = (function(m, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + m.c) + " * ") + other.c) + ")"));
});
$p.hO = (function(m, x$2, v, x$4, x$5) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + m.c) + " * ") + v.c) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Mat4ImmutableOpsG_FloatExpr_Mat4Expr$", ({
  eT: 1,
  e8: 1
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
$p.lj = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("abs(" + a.c) + ")"));
});
$p.lu = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("fract(" + a.c) + ")"));
});
$p.nj = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("log2(" + a.c) + ")"));
});
$p.lR = (function(a, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("min(" + a.c) + ", ") + other.c) + ")"));
});
$p.lQ = (function(a, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("max(" + a.c) + ", ") + other.c) + ")"));
});
$p.lq = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("saturate(" + a.c) + ")"));
});
$p.mX = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(" + a.c) + " * 0.5 + 0.5)"));
});
$p.nT = (function(a, b, t) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("mix(" + a.c) + ", ") + b.c) + ", ") + t.c) + ")"));
});
$p.fa = (function(a, edge0, edge1) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("smoothstep(" + edge0.c) + ", ") + edge1.c) + ", ") + a.c) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$, "trivalibs.graphics.math.gpu.float_expr$package$given_NumExt_FloatExpr$", ({
  eU: 1,
  fO: 1
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
$p.aP = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.c) + " + ") + b.c) + ")"));
});
$p.gy = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.c) + " - ") + b.c) + ")"));
});
$p.aQ = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.c) + " * ") + b.c) + ")"));
});
$p.le = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.c) + " / ") + b.c) + ")"));
});
$p.lZ = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(-" + a.c) + ")"));
});
$p.iR = (function(a, b) {
  return this.aP(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().t().h(b));
});
$p.lf = (function(a, b) {
  return this.gy(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().t().h(b));
});
$p.ah = (function(a, b) {
  return this.aQ(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().t().h(b));
});
$p.ld = (function(a, b) {
  return this.le(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().t().h(b));
});
$p.mS = (function(a, v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.c) + " * ") + v.c) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$, "trivalibs.graphics.math.gpu.float_expr$package$given_NumOps_FloatExpr$", ({
  eV: 1,
  fP: 1
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
$p.mW = (function(v, x$2) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(" + v.c) + " * 2.0 - 1.0)"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec2ImmutableOpsG_FloatExpr_Vec2Expr$", ({
  eW: 1,
  ea: 1
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
$p.lk = (function(v, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.c) + " + ") + other.c) + ")"));
});
$p.gU = (function(v, x$2, scalar) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.c) + " * ") + scalar.c) + ")"));
});
$p.lg = (function(v, x$2, scalar) {
  return this.gU(v, x$2, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().t().h(scalar));
});
$p.mH = (function(v, x$2, scalar) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.c) + " / ") + scalar.c) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec3ImmutableOpsG_FloatExpr_Vec3Expr$", ({
  eX: 1,
  ee: 1
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
$p.mk = (function(v, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.c) + " + ") + other.c) + ")"));
});
$p.nW = (function(v, x$2, scalar) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.c) + " * ") + scalar.c) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec4ImmutableOpsG_FloatExpr_Vec4Expr$", ({
  eY: 1,
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
function $c_Ltrivalibs_graphics_painter_Layer(painter, shade) {
  this.ix = null;
  this.E = null;
  this.iv = null;
  this.hi = 0;
  this.g8 = 0;
  this.o = null;
  this.M = null;
  this.iw = null;
  this.ix = painter;
  this.E = shade;
  this.iv = null;
  this.hi = (-1);
  this.g8 = (-1);
  this.o = [];
  this.M = [];
  this.iw = new $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter);
}
$p = $c_Ltrivalibs_graphics_painter_Layer.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Layer;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Layer() {
}
$h_Ltrivalibs_graphics_painter_Layer.prototype = $p;
$p.on = (function(blendState, mipSource, mipTarget) {
  if ((blendState !== (void 0))) {
    this.iv = blendState;
  }
  if ((mipSource !== (void 0))) {
    var v = (mipSource | 0);
    this.hi = v;
  }
  if ((mipTarget !== (void 0))) {
    var v$1 = (mipTarget | 0);
    this.g8 = v$1;
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Layer = new $TypeData().i($c_Ltrivalibs_graphics_painter_Layer, "trivalibs.graphics.painter.Layer", ({
  f7: 1,
  aY: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Shape(painter, form, shade) {
  this.aq = null;
  this.aE = null;
  this.A = null;
  this.iB = null;
  this.iA = null;
  this.f = null;
  this.W = null;
  this.iC = null;
  this.aq = painter;
  this.aE = form;
  this.A = shade;
  this.iB = "none";
  this.iA = null;
  this.f = [];
  this.W = [];
  this.iC = new $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter);
}
$p = $c_Ltrivalibs_graphics_painter_Shape.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Shape;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Shape() {
}
$h_Ltrivalibs_graphics_painter_Shape.prototype = $p;
$p.oo = (function(cullMode, blendState) {
  if ((cullMode !== (void 0))) {
    this.iB = cullMode;
  }
  if ((blendState !== (void 0))) {
    this.iA = blendState;
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Shape = new $TypeData().i($c_Ltrivalibs_graphics_painter_Shape, "trivalibs.graphics.painter.Shape", ({
  fc: 1,
  aY: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform(inner) {
  this.a4 = null;
  this.a4 = inner;
}
$p = $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform() {
}
$h_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform.prototype = $p;
$p.I = (function() {
  return this.a4.I();
});
var $d_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform = new $TypeData().i($c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform, "trivalibs.graphics.shader.FragmentUniform$given_WGSLType_FragmentUniform", ({
  fi: 1,
  x: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform(inner) {
  this.fO = null;
  this.fO = inner;
}
$p = $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform() {
}
$h_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform.prototype = $p;
$p.I = (function() {
  return this.fO.I();
});
var $d_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform = new $TypeData().i($c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform, "trivalibs.graphics.shader.VertexUniform$given_WGSLType_VertexUniform", ({
  fj: 1,
  x: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor(prefix) {
  this.iJ = null;
  this.iJ = prefix;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor.prototype = $p;
$p.a1 = (function(name) {
  return new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(((this.iJ === "") ? name : ((this.iJ + ".") + name)));
});
var $d_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor, "trivalibs.graphics.shader.dsl.TypedAssignAccessor", ({
  fr: 1,
  A: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(prefix) {
  this.iK = null;
  this.iK = prefix;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor.prototype = $p;
$p.n = (function(name) {
  return ((this.iK === "") ? $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), name) : $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), ((this.iK + ".") + name)));
});
var $d_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor, "trivalibs.graphics.shader.dsl.TypedExprAccessor", ({
  fs: 1,
  A: 1
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
  ft: 1,
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
  fu: 1,
  A: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_VertexOut(prefix) {
  this.l3 = null;
  this.go = null;
  this.l3 = prefix;
  this.go = new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget((prefix + ".position"));
}
$p = $c_Ltrivalibs_graphics_shader_dsl_VertexOut.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_VertexOut;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_VertexOut() {
}
$h_Ltrivalibs_graphics_shader_dsl_VertexOut.prototype = $p;
$p.a1 = (function(name) {
  return new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(((this.l3 + ".") + name));
});
var $d_Ltrivalibs_graphics_shader_dsl_VertexOut = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_VertexOut, "trivalibs.graphics.shader.dsl.VertexOut", ({
  fw: 1,
  A: 1
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
$p.I = (function() {
  return "f32";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$, "trivalibs.graphics.shader.types$package$given_WGSLType_Float$", ({
  fD: 1,
  x: 1
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
$p.I = (function() {
  return "mat4x4<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$, "trivalibs.graphics.shader.types$package$given_WGSLType_Mat4$", ({
  fE: 1,
  x: 1
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
$p.I = (function() {
  return "sampler";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$, "trivalibs.graphics.shader.types$package$given_WGSLType_Sampler$", ({
  fF: 1,
  x: 1
}));
var $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$;
function $m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$() {
  if ((!$n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$)) {
    $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$ = new $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$();
  }
  return $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$;
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
$p.I = (function() {
  return "vec3<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$, "trivalibs.graphics.shader.types$package$given_WGSLType_Vec3$", ({
  fG: 1,
  x: 1
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
  this.hQ = $data;
}
$p = $c_jl_Class.prototype = new $h_O();
$p.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
}
$h_jl_Class.prototype = $p;
$p.m = (function() {
  return ((this.hQ.Y ? "interface " : (this.hQ.X ? "" : "class ")) + this.hQ.N);
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
  bD: 1,
  bA: 1,
  bB: 1
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
    return $thiz.fc;
  } else {
    throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 0)"));
  }
}
function $f_s_Product10__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fd;
      break;
    }
    case 1: {
      return $thiz.bn;
      break;
    }
    case 2: {
      return $thiz.bo;
      break;
    }
    case 3: {
      return $thiz.bp;
      break;
    }
    case 4: {
      return $thiz.bq;
      break;
    }
    case 5: {
      return $thiz.br;
      break;
    }
    case 6: {
      return $thiz.bs;
      break;
    }
    case 7: {
      return $thiz.bt;
      break;
    }
    case 8: {
      return $thiz.bu;
      break;
    }
    case 9: {
      return $thiz.bm;
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
      return $thiz.fe;
      break;
    }
    case 1: {
      return $thiz.bx;
      break;
    }
    case 2: {
      return $thiz.by;
      break;
    }
    case 3: {
      return $thiz.bz;
      break;
    }
    case 4: {
      return $thiz.bA;
      break;
    }
    case 5: {
      return $thiz.bB;
      break;
    }
    case 6: {
      return $thiz.bC;
      break;
    }
    case 7: {
      return $thiz.bD;
      break;
    }
    case 8: {
      return $thiz.bE;
      break;
    }
    case 9: {
      return $thiz.bv;
      break;
    }
    case 10: {
      return $thiz.bw;
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
      return $thiz.ff;
      break;
    }
    case 1: {
      return $thiz.bI;
      break;
    }
    case 2: {
      return $thiz.bJ;
      break;
    }
    case 3: {
      return $thiz.bK;
      break;
    }
    case 4: {
      return $thiz.bL;
      break;
    }
    case 5: {
      return $thiz.bM;
      break;
    }
    case 6: {
      return $thiz.bN;
      break;
    }
    case 7: {
      return $thiz.bO;
      break;
    }
    case 8: {
      return $thiz.bP;
      break;
    }
    case 9: {
      return $thiz.bF;
      break;
    }
    case 10: {
      return $thiz.bG;
      break;
    }
    case 11: {
      return $thiz.bH;
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
      return $thiz.fg;
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
      return $thiz.bQ;
      break;
    }
    case 10: {
      return $thiz.bR;
      break;
    }
    case 11: {
      return $thiz.bS;
      break;
    }
    case 12: {
      return $thiz.bT;
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
      return $thiz.fh;
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
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 13)"));
    }
  }
}
function $f_s_Product15__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fi;
      break;
    }
    case 1: {
      return $thiz.cl;
      break;
    }
    case 2: {
      return $thiz.cm;
      break;
    }
    case 3: {
      return $thiz.cn;
      break;
    }
    case 4: {
      return $thiz.co;
      break;
    }
    case 5: {
      return $thiz.cp;
      break;
    }
    case 6: {
      return $thiz.cq;
      break;
    }
    case 7: {
      return $thiz.cr;
      break;
    }
    case 8: {
      return $thiz.cs;
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
    case 12: {
      return $thiz.ci;
      break;
    }
    case 13: {
      return $thiz.cj;
      break;
    }
    case 14: {
      return $thiz.ck;
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
      return $thiz.fj;
      break;
    }
    case 1: {
      return $thiz.cA;
      break;
    }
    case 2: {
      return $thiz.cB;
      break;
    }
    case 3: {
      return $thiz.cC;
      break;
    }
    case 4: {
      return $thiz.cD;
      break;
    }
    case 5: {
      return $thiz.cE;
      break;
    }
    case 6: {
      return $thiz.cF;
      break;
    }
    case 7: {
      return $thiz.cG;
      break;
    }
    case 8: {
      return $thiz.cH;
      break;
    }
    case 9: {
      return $thiz.ct;
      break;
    }
    case 10: {
      return $thiz.cu;
      break;
    }
    case 11: {
      return $thiz.cv;
      break;
    }
    case 12: {
      return $thiz.cw;
      break;
    }
    case 13: {
      return $thiz.cx;
      break;
    }
    case 14: {
      return $thiz.cy;
      break;
    }
    case 15: {
      return $thiz.cz;
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
      return $thiz.fk;
      break;
    }
    case 1: {
      return $thiz.cQ;
      break;
    }
    case 2: {
      return $thiz.cR;
      break;
    }
    case 3: {
      return $thiz.cS;
      break;
    }
    case 4: {
      return $thiz.cT;
      break;
    }
    case 5: {
      return $thiz.cU;
      break;
    }
    case 6: {
      return $thiz.cV;
      break;
    }
    case 7: {
      return $thiz.cW;
      break;
    }
    case 8: {
      return $thiz.cX;
      break;
    }
    case 9: {
      return $thiz.cI;
      break;
    }
    case 10: {
      return $thiz.cJ;
      break;
    }
    case 11: {
      return $thiz.cK;
      break;
    }
    case 12: {
      return $thiz.cL;
      break;
    }
    case 13: {
      return $thiz.cM;
      break;
    }
    case 14: {
      return $thiz.cN;
      break;
    }
    case 15: {
      return $thiz.cO;
      break;
    }
    case 16: {
      return $thiz.cP;
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
      return $thiz.fl;
      break;
    }
    case 1: {
      return $thiz.d7;
      break;
    }
    case 2: {
      return $thiz.d8;
      break;
    }
    case 3: {
      return $thiz.d9;
      break;
    }
    case 4: {
      return $thiz.da;
      break;
    }
    case 5: {
      return $thiz.db;
      break;
    }
    case 6: {
      return $thiz.dc;
      break;
    }
    case 7: {
      return $thiz.dd;
      break;
    }
    case 8: {
      return $thiz.de;
      break;
    }
    case 9: {
      return $thiz.cY;
      break;
    }
    case 10: {
      return $thiz.cZ;
      break;
    }
    case 11: {
      return $thiz.d0;
      break;
    }
    case 12: {
      return $thiz.d1;
      break;
    }
    case 13: {
      return $thiz.d2;
      break;
    }
    case 14: {
      return $thiz.d3;
      break;
    }
    case 15: {
      return $thiz.d4;
      break;
    }
    case 16: {
      return $thiz.d5;
      break;
    }
    case 17: {
      return $thiz.d6;
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
      return $thiz.fm;
      break;
    }
    case 1: {
      return $thiz.dq;
      break;
    }
    case 2: {
      return $thiz.dr;
      break;
    }
    case 3: {
      return $thiz.ds;
      break;
    }
    case 4: {
      return $thiz.dt;
      break;
    }
    case 5: {
      return $thiz.du;
      break;
    }
    case 6: {
      return $thiz.dv;
      break;
    }
    case 7: {
      return $thiz.dw;
      break;
    }
    case 8: {
      return $thiz.dx;
      break;
    }
    case 9: {
      return $thiz.df;
      break;
    }
    case 10: {
      return $thiz.dg;
      break;
    }
    case 11: {
      return $thiz.dh;
      break;
    }
    case 12: {
      return $thiz.di;
      break;
    }
    case 13: {
      return $thiz.dj;
      break;
    }
    case 14: {
      return $thiz.dk;
      break;
    }
    case 15: {
      return $thiz.dl;
      break;
    }
    case 16: {
      return $thiz.dm;
      break;
    }
    case 17: {
      return $thiz.dn;
      break;
    }
    case 18: {
      return $thiz.dp;
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
      return $thiz.a2;
      break;
    }
    case 1: {
      return $thiz.ag;
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
      return $thiz.fn;
      break;
    }
    case 1: {
      return $thiz.dI;
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
      return $thiz.dy;
      break;
    }
    case 10: {
      return $thiz.dz;
      break;
    }
    case 11: {
      return $thiz.dA;
      break;
    }
    case 12: {
      return $thiz.dB;
      break;
    }
    case 13: {
      return $thiz.dC;
      break;
    }
    case 14: {
      return $thiz.dD;
      break;
    }
    case 15: {
      return $thiz.dE;
      break;
    }
    case 16: {
      return $thiz.dF;
      break;
    }
    case 17: {
      return $thiz.dG;
      break;
    }
    case 18: {
      return $thiz.dH;
      break;
    }
    case 19: {
      return $thiz.dJ;
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
      return $thiz.fo;
      break;
    }
    case 1: {
      return $thiz.e1;
      break;
    }
    case 2: {
      return $thiz.e4;
      break;
    }
    case 3: {
      return $thiz.e5;
      break;
    }
    case 4: {
      return $thiz.e6;
      break;
    }
    case 5: {
      return $thiz.e7;
      break;
    }
    case 6: {
      return $thiz.e8;
      break;
    }
    case 7: {
      return $thiz.e9;
      break;
    }
    case 8: {
      return $thiz.ea;
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
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 20)"));
    }
  }
}
function $f_s_Product22__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fp;
      break;
    }
    case 1: {
      return $thiz.el;
      break;
    }
    case 2: {
      return $thiz.ep;
      break;
    }
    case 3: {
      return $thiz.eq;
      break;
    }
    case 4: {
      return $thiz.er;
      break;
    }
    case 5: {
      return $thiz.es;
      break;
    }
    case 6: {
      return $thiz.et;
      break;
    }
    case 7: {
      return $thiz.eu;
      break;
    }
    case 8: {
      return $thiz.ev;
      break;
    }
    case 9: {
      return $thiz.eb;
      break;
    }
    case 10: {
      return $thiz.ec;
      break;
    }
    case 11: {
      return $thiz.ed;
      break;
    }
    case 12: {
      return $thiz.ee;
      break;
    }
    case 13: {
      return $thiz.ef;
      break;
    }
    case 14: {
      return $thiz.eg;
      break;
    }
    case 15: {
      return $thiz.eh;
      break;
    }
    case 16: {
      return $thiz.ei;
      break;
    }
    case 17: {
      return $thiz.ej;
      break;
    }
    case 18: {
      return $thiz.ek;
      break;
    }
    case 19: {
      return $thiz.em;
      break;
    }
    case 20: {
      return $thiz.en;
      break;
    }
    case 21: {
      return $thiz.eo;
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
      return $thiz.aW;
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
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 2)"));
    }
  }
}
function $f_s_Product4__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.ew;
      break;
    }
    case 1: {
      return $thiz.b9;
      break;
    }
    case 2: {
      return $thiz.ba;
      break;
    }
    case 3: {
      return $thiz.bb;
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
      return $thiz.fq;
      break;
    }
    case 1: {
      return $thiz.ex;
      break;
    }
    case 2: {
      return $thiz.ey;
      break;
    }
    case 3: {
      return $thiz.ez;
      break;
    }
    case 4: {
      return $thiz.eA;
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
      return $thiz.fr;
      break;
    }
    case 1: {
      return $thiz.eB;
      break;
    }
    case 2: {
      return $thiz.eC;
      break;
    }
    case 3: {
      return $thiz.eD;
      break;
    }
    case 4: {
      return $thiz.eE;
      break;
    }
    case 5: {
      return $thiz.eF;
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
      return $thiz.fs;
      break;
    }
    case 1: {
      return $thiz.eG;
      break;
    }
    case 2: {
      return $thiz.eH;
      break;
    }
    case 3: {
      return $thiz.eI;
      break;
    }
    case 4: {
      return $thiz.eJ;
      break;
    }
    case 5: {
      return $thiz.eK;
      break;
    }
    case 6: {
      return $thiz.eL;
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
      return $thiz.ft;
      break;
    }
    case 1: {
      return $thiz.eM;
      break;
    }
    case 2: {
      return $thiz.eN;
      break;
    }
    case 3: {
      return $thiz.eO;
      break;
    }
    case 4: {
      return $thiz.eP;
      break;
    }
    case 5: {
      return $thiz.eQ;
      break;
    }
    case 6: {
      return $thiz.eR;
      break;
    }
    case 7: {
      return $thiz.eS;
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
      return $thiz.fu;
      break;
    }
    case 1: {
      return $thiz.eT;
      break;
    }
    case 2: {
      return $thiz.eU;
      break;
    }
    case 3: {
      return $thiz.eV;
      break;
    }
    case 4: {
      return $thiz.eW;
      break;
    }
    case 5: {
      return $thiz.eX;
      break;
    }
    case 6: {
      return $thiz.eY;
      break;
    }
    case 7: {
      return $thiz.eZ;
      break;
    }
    case 8: {
      return $thiz.f0;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 8)"));
    }
  }
}
function $f_sc_Iterator__concat__F0__sc_Iterator($thiz, xs) {
  return new $c_sc_Iterator$ConcatIterator($thiz).mA(xs);
}
function $f_sc_Iterator__sliceIterator__I__I__sc_Iterator($thiz, from, until) {
  var lo = ((from > 0) ? from : 0);
  var rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
  return ((rest === 0) ? $m_sc_Iterator$().aY : new $c_sc_Iterator$SliceIterator($thiz, lo, rest));
}
function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
  var those = that.a7();
  while ($thiz.O()) {
    if ((!those.O())) {
      return false;
    }
    if ((!$m_sr_BoxesRunTime$().b($thiz.H(), those.H()))) {
      return false;
    }
  }
  return (!those.O());
}
/** @constructor */
function $c_sc_Iterator$() {
  this.aY = null;
  $n_sc_Iterator$ = this;
  this.aY = new $c_sc_Iterator$$anon$19();
}
$p = $c_sc_Iterator$.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
}
$h_sc_Iterator$.prototype = $p;
var $d_sc_Iterator$ = new $TypeData().i($c_sc_Iterator$, "scala.collection.Iterator$", ({
  c9: 1,
  a: 1,
  ay: 1
}));
var $n_sc_Iterator$;
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$();
  }
  return $n_sc_Iterator$;
}
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cE)));
}
/** @constructor */
function $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(f) {
  this.jw = null;
  this.jw = f;
}
$p = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = new $h_sr_AbstractFunction0();
$p.constructor = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c;
/** @constructor */
function $h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c() {
}
$h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = $p;
$p.fP = (function() {
  return (0, this.jw)();
});
var $d_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c = new $TypeData().i($c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c, "scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c", ({
  cN: 1,
  cM: 1,
  bw: 1
}));
/** @constructor */
function $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(f) {
  this.jx = null;
  this.jx = f;
}
$p = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919;
/** @constructor */
function $h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919() {
}
$h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = $p;
$p.h = (function(x0) {
  return (0, this.jx)(x0);
});
var $d_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919 = new $TypeData().i($c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919, "scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919", ({
  cP: 1,
  cO: 1,
  h: 1
}));
/** @constructor */
function $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(f) {
  this.jy = null;
  this.jy = f;
}
$p = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = new $h_sr_AbstractFunction2();
$p.constructor = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8;
/** @constructor */
function $h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8() {
}
$h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = $p;
$p.aB = (function(x0, x1) {
  return (0, this.jy)(x0, x1);
});
var $d_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8 = new $TypeData().i($c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8, "scala.runtime.AbstractFunction2.$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8", ({
  cR: 1,
  cQ: 1,
  bx: 1
}));
/** @constructor */
function $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(f) {
  this.jz = null;
  this.jz = f;
}
$p = $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825.prototype = new $h_sr_AbstractFunction3();
$p.constructor = $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825;
/** @constructor */
function $h_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825() {
}
$h_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825.prototype = $p;
$p.lm = (function(x0, x1, x2) {
  return (0, this.jz)(x0, x1, x2);
});
var $d_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825 = new $TypeData().i($c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825, "scala.runtime.AbstractFunction3.$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825", ({
  cT: 1,
  cS: 1,
  by: 1
}));
/** @constructor */
function $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(f) {
  this.jA = null;
  this.jA = f;
}
$p = $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a.prototype = new $h_sr_AbstractFunction4();
$p.constructor = $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a;
/** @constructor */
function $h_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a() {
}
$h_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a.prototype = $p;
$p.ll = (function(x0, x1, x2, x3) {
  return (0, this.jA)(x0, x1, x2, x3);
});
var $d_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a = new $TypeData().i($c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a, "scala.runtime.AbstractFunction4.$$Lambda$451042f443265710aa66de6985cba67480d9b00a", ({
  cV: 1,
  cU: 1,
  bz: 1
}));
var $d_sr_Nothing$ = new $TypeData().i(0, "scala.runtime.Nothing$", ({
  cZ: 1,
  f: 1,
  a: 1
}));
/** @constructor */
function $c_sr_TupleXXL(es) {
  this.aa = null;
  this.aa = es;
  if ((es.d.length <= 22)) {
    $m_sr_Scala3RunTime$().ms();
  }
}
$p = $c_sr_TupleXXL.prototype = new $h_O();
$p.constructor = $c_sr_TupleXXL;
/** @constructor */
function $h_sr_TupleXXL() {
}
$h_sr_TupleXXL.prototype = $p;
$p.F = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.j = (function(n) {
  return this.aa.d[n];
});
$p.z = (function() {
  return this.aa.d.length;
});
$p.D = (function() {
  return "Tuple";
});
$p.m = (function() {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($m_s_Predef$().oM(this.aa), "(", ",", ")");
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().mx(this, (-889275714), null);
});
$p.q = (function(that) {
  if ((that instanceof $c_sr_TupleXXL)) {
    if ((this.aa === that.aa)) {
      return true;
    } else {
      if ((this.aa.d.length !== that.aa.d.length)) {
        return false;
      }
      var i = 0;
      while ((i < this.aa.d.length)) {
        var $x_2 = $m_sr_BoxesRunTime$();
        var arr$3 = this.aa;
        var n = i;
        var $x_1 = arr$3.d[n];
        var arr$4 = that.aa;
        var n$1 = i;
        if ((!$x_2.b($x_1, arr$4.d[n$1]))) {
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aK)));
}
var $d_sr_TupleXXL = new $TypeData().i($c_sr_TupleXXL, "scala.runtime.TupleXXL", ({
  aK: 1,
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
$p.gB = (function(f) {
  return ((arg1$2) => f.h(arg1$2));
});
var $d_sjs_js_Any$ = new $TypeData().i($c_sjs_js_Any$, "scala.scalajs.js.Any$", ({
  d6: 1,
  da: 1,
  db: 1
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
  this.c = null;
  this.f4 = null;
  this.ir = false;
  $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(this, name);
  this.ir = false;
}
$p = $c_Ltrivalibs_graphics_math_gpu_VarExpr.prototype = new $h_Ltrivalibs_graphics_math_gpu_LetExpr();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_VarExpr;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_VarExpr() {
}
$h_Ltrivalibs_graphics_math_gpu_VarExpr.prototype = $p;
$p.T = (function(value) {
  if ((!this.ir)) {
    this.ir = true;
    return (((("  var " + this.f4) + " = ") + value.c) + ";");
  } else {
    return (((("  " + this.f4) + " = ") + value.c) + ";");
  }
});
$p.mh = (function(value) {
  return (((("  " + this.f4) + " += ") + value.c) + ";");
});
$p.lh = (function(value) {
  return (((("  " + this.f4) + " *= ") + value.c) + ";");
});
var $d_Ltrivalibs_graphics_math_gpu_VarExpr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_VarExpr, "trivalibs.graphics.math.gpu.VarExpr", ({
  eJ: 1,
  aX: 1,
  Z: 1
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
$p.h = (function(x) {
  return x;
});
var $d_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2, "trivalibs.graphics.math.gpu.expr$package$$anon$2", ({
  eL: 1,
  I: 1,
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
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aF((+x)));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1, "trivalibs.graphics.math.gpu.float_expr$package$$anon$1", ({
  eN: 1,
  I: 1,
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
$p.h = (function(x) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("f32(" + (x | 0)) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3, "trivalibs.graphics.math.gpu.float_expr$package$$anon$3", ({
  eO: 1,
  I: 1,
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
        deps = ((rest[0] === (void 0)) ? $m_Ltrivalibs_graphics_shader_dsl_WgslFnData$().mg() : rest[0]);
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
  fx: 1,
  dc: 1,
  aL: 1
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a5)));
}
var $d_jl_Character = new $TypeData().i(0, "java.lang.Character", ({
  a5: 1,
  a: 1,
  i: 1,
  g: 1
}), ((x) => (x instanceof $Char)));
class $c_jl_RuntimeException extends $c_jl_Exception {
}
/** @constructor */
function $c_jl_StringBuilder() {
  this.a9 = null;
  this.a9 = "";
}
$p = $c_jl_StringBuilder.prototype = new $h_O();
$p.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
}
$h_jl_StringBuilder.prototype = $p;
$p.m = (function() {
  return this.a9;
});
$p.L = (function() {
  return this.a9.length;
});
$p.lp = (function(index) {
  return this.a9.charCodeAt(index);
});
var $d_jl_StringBuilder = new $TypeData().i($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  bk: 1,
  H: 1,
  a3: 1,
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
$p.al = (function() {
  return (-1);
});
$p.iS = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.a7 = (function() {
  return this;
});
$p.hD = (function(n) {
  return this.hM(n, (-1));
});
$p.hM = (function(from, until) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until);
});
$p.m = (function() {
  return "<iterator>";
});
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.f9(0) === 0);
}
function $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  var thisKnownSize = $thiz.al();
  if ((thisKnownSize !== (-1))) {
    var thatKnownSize = that.al();
    if ((thatKnownSize !== (-1))) {
      if ((thisKnownSize !== thatKnownSize)) {
        return false;
      }
      if ((thisKnownSize === 0)) {
        return true;
      }
    }
  }
  return $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz.a7(), that);
}
function $isArrayOf_s_util_CommandLineParser$ParseError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.dk)));
}
/** @constructor */
function $c_Lsketches_rooms_canvases_PaintingSpec(width, height, depth, image, stretch) {
  this.bg = 0.0;
  this.bf = 0.0;
  this.b1 = 0.0;
  this.fy = null;
  this.f2 = 0.0;
  this.bg = width;
  this.bf = height;
  this.b1 = depth;
  this.fy = image;
  this.f2 = stretch;
}
$p = $c_Lsketches_rooms_canvases_PaintingSpec.prototype = new $h_O();
$p.constructor = $c_Lsketches_rooms_canvases_PaintingSpec;
/** @constructor */
function $h_Lsketches_rooms_canvases_PaintingSpec() {
}
$h_Lsketches_rooms_canvases_PaintingSpec.prototype = $p;
$p.F = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.x = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().y(acc, 1068570815);
  acc = $m_sr_Statics$().y(acc, $m_sr_Statics$().gz(this.bg));
  acc = $m_sr_Statics$().y(acc, $m_sr_Statics$().gz(this.bf));
  acc = $m_sr_Statics$().y(acc, $m_sr_Statics$().gz(this.b1));
  acc = $m_sr_Statics$().y(acc, $m_sr_Statics$().X(this.fy));
  acc = $m_sr_Statics$().y(acc, $m_sr_Statics$().gz(this.f2));
  return $m_sr_Statics$().ai(acc, 5);
});
$p.q = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lsketches_rooms_canvases_PaintingSpec)) {
    if (((((this.bg === x$0.bg) && (this.bf === x$0.bf)) && (this.b1 === x$0.b1)) && (this.f2 === x$0.f2))) {
      var x = this.fy;
      var x$2 = x$0.fy;
      return ((x === null) ? (x$2 === null) : (x === x$2));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.m = (function() {
  return $m_sr_ScalaRunTime$().li(this);
});
$p.z = (function() {
  return 5;
});
$p.D = (function() {
  return "PaintingSpec";
});
$p.j = (function(n) {
  switch (n) {
    case 0: {
      return this.bg;
      break;
    }
    case 1: {
      return this.bf;
      break;
    }
    case 2: {
      return this.b1;
      break;
    }
    case 3: {
      return this.fy;
      break;
    }
    case 4: {
      return this.f2;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException(("" + n));
    }
  }
});
function $isArrayOf_Lsketches_rooms_canvases_PaintingSpec(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aO)));
}
var $d_Lsketches_rooms_canvases_PaintingSpec = new $TypeData().i($c_Lsketches_rooms_canvases_PaintingSpec, "sketches.rooms.canvases.PaintingSpec", ({
  aO: 1,
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
$p.gE = (function(m) {
  return m.i5;
});
$p.gF = (function(m) {
  return m.i6;
});
$p.gG = (function(m) {
  return m.i7;
});
$p.gH = (function(m) {
  return m.i8;
});
$p.gI = (function(m) {
  return m.i9;
});
$p.gJ = (function(m) {
  return m.ia;
});
$p.gK = (function(m) {
  return m.ib;
});
$p.gL = (function(m) {
  return m.ic;
});
$p.gM = (function(m) {
  return m.id;
});
$p.gN = (function(m) {
  return m.ie;
});
$p.gO = (function(m) {
  return m.ig;
});
$p.gP = (function(m) {
  return m.ih;
});
$p.gQ = (function(m) {
  return m.ii;
});
$p.gR = (function(m) {
  return m.ij;
});
$p.gS = (function(m) {
  return m.ik;
});
$p.gT = (function(m) {
  return m.il;
});
$p.lA = (function(m, v) {
  m.i5 = v;
});
$p.lB = (function(m, v) {
  m.i6 = v;
});
$p.lC = (function(m, v) {
  m.i7 = v;
});
$p.lD = (function(m, v) {
  m.i8 = v;
});
$p.lE = (function(m, v) {
  m.i9 = v;
});
$p.lF = (function(m, v) {
  m.ia = v;
});
$p.lG = (function(m, v) {
  m.ib = v;
});
$p.lH = (function(m, v) {
  m.ic = v;
});
$p.lI = (function(m, v) {
  m.id = v;
});
$p.lJ = (function(m, v) {
  m.ie = v;
});
$p.lK = (function(m, v) {
  m.ig = v;
});
$p.lL = (function(m, v) {
  m.ih = v;
});
$p.lM = (function(m, v) {
  m.ii = v;
});
$p.lN = (function(m, v) {
  m.ij = v;
});
$p.lO = (function(m, v) {
  m.ik = v;
});
$p.lP = (function(m, v) {
  m.il = v;
});
var $d_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$, "trivalibs.graphics.math.cpu.Mat4$given_Mat4Mutable_Mat4$", ({
  ek: 1,
  V: 1,
  aS: 1,
  aT: 1
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
$p.G = (function(v) {
  return v.ha;
});
$p.C = (function(v) {
  return v.hb;
});
$p.a8 = (function(v) {
  return v.hc;
});
$p.af = (function(v) {
  return v.h9;
});
$p.fV = (function(v, value) {
  v.ha = value;
});
$p.fW = (function(v, value) {
  v.hb = value;
});
$p.je = (function(v, value) {
  v.hc = value;
});
$p.j8 = (function(v, value) {
  v.h9 = value;
});
var $d_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$, "trivalibs.graphics.math.cpu.Quat$given_Vec4Mutable_Quat$", ({
  eo: 1,
  G: 1,
  X: 1,
  Y: 1
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
$p.G = (function(v) {
  return v.hd;
});
$p.C = (function(v) {
  return v.he;
});
$p.fV = (function(v, value) {
  v.hd = value;
});
$p.fW = (function(v, value) {
  v.he = value;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$, "trivalibs.graphics.math.cpu.Vec2$given_Vec2Mutable_Vec2$", ({
  er: 1,
  W: 1,
  aU: 1,
  aV: 1
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
$p.G = (function(v) {
  return v.J;
});
$p.C = (function(v) {
  return v.Q;
});
$p.a8 = (function(v) {
  return v.K;
});
$p.ls = (function(v, other) {
  return $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D(this, v, other);
});
var $d_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$, "trivalibs.graphics.math.cpu.Vec3$given_Vec3Mutable_Vec3$", ({
  eu: 1,
  aW: 1,
  ec: 1,
  ef: 1
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
$p.G = (function(v) {
  return v.io;
});
$p.C = (function(v) {
  return v.ip;
});
$p.a8 = (function(v) {
  return v.iq;
});
$p.af = (function(v) {
  return v.im;
});
$p.fV = (function(v, value) {
  v.io = value;
});
$p.fW = (function(v, value) {
  v.ip = value;
});
$p.je = (function(v, value) {
  v.iq = value;
});
$p.j8 = (function(v, value) {
  v.im = value;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$, "trivalibs.graphics.math.cpu.Vec4$given_Vec4Mutable_Vec4$", ({
  ew: 1,
  G: 1,
  X: 1,
  Y: 1
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
$p.nl = (function(m) {
  var offset$proxy1 = (m.off | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy1, true));
});
$p.nn = (function(m) {
  var offset$proxy2 = ((4 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy2, true));
});
$p.np = (function(m) {
  var offset$proxy3 = ((8 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy3, true));
});
$p.nr = (function(m) {
  var offset$proxy4 = ((12 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy4, true));
});
$p.nt = (function(m) {
  var offset$proxy5 = ((16 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy5, true));
});
$p.nv = (function(m) {
  var offset$proxy6 = ((20 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy6, true));
});
$p.nx = (function(m) {
  var offset$proxy7 = ((24 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy7, true));
});
$p.nz = (function(m) {
  var offset$proxy8 = ((28 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy8, true));
});
$p.nB = (function(m) {
  var offset$proxy9 = ((32 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy9, true));
});
$p.nD = (function(m) {
  var offset$proxy10 = ((36 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy10, true));
});
$p.nF = (function(m) {
  var offset$proxy11 = ((40 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy11, true));
});
$p.nH = (function(m) {
  var offset$proxy12 = ((44 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy12, true));
});
$p.nJ = (function(m) {
  var offset$proxy13 = ((48 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy13, true));
});
$p.nL = (function(m) {
  var offset$proxy14 = ((52 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy14, true));
});
$p.nN = (function(m) {
  var offset$proxy15 = ((56 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy15, true));
});
$p.nP = (function(m) {
  var offset$proxy16 = ((60 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy16, true));
});
$p.nm = (function(m, v) {
  var value$proxy1 = Math.fround(v);
  var offset$proxy17 = (m.off | 0);
  m.dv.setFloat32(offset$proxy17, value$proxy1, true);
});
$p.no = (function(m, v) {
  var value$proxy2 = Math.fround(v);
  var offset$proxy18 = ((4 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy18, value$proxy2, true);
});
$p.nq = (function(m, v) {
  var value$proxy3 = Math.fround(v);
  var offset$proxy19 = ((8 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy19, value$proxy3, true);
});
$p.ns = (function(m, v) {
  var value$proxy4 = Math.fround(v);
  var offset$proxy20 = ((12 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy20, value$proxy4, true);
});
$p.nu = (function(m, v) {
  var value$proxy5 = Math.fround(v);
  var offset$proxy21 = ((16 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy21, value$proxy5, true);
});
$p.nw = (function(m, v) {
  var value$proxy6 = Math.fround(v);
  var offset$proxy22 = ((20 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy22, value$proxy6, true);
});
$p.ny = (function(m, v) {
  var value$proxy7 = Math.fround(v);
  var offset$proxy23 = ((24 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy23, value$proxy7, true);
});
$p.nA = (function(m, v) {
  var value$proxy8 = Math.fround(v);
  var offset$proxy24 = ((28 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy24, value$proxy8, true);
});
$p.nC = (function(m, v) {
  var value$proxy9 = Math.fround(v);
  var offset$proxy25 = ((32 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy25, value$proxy9, true);
});
$p.nE = (function(m, v) {
  var value$proxy10 = Math.fround(v);
  var offset$proxy26 = ((36 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy26, value$proxy10, true);
});
$p.nG = (function(m, v) {
  var value$proxy11 = Math.fround(v);
  var offset$proxy27 = ((40 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy27, value$proxy11, true);
});
$p.nI = (function(m, v) {
  var value$proxy12 = Math.fround(v);
  var offset$proxy28 = ((44 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy28, value$proxy12, true);
});
$p.nK = (function(m, v) {
  var value$proxy13 = Math.fround(v);
  var offset$proxy29 = ((48 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy29, value$proxy13, true);
});
$p.nM = (function(m, v) {
  var value$proxy14 = Math.fround(v);
  var offset$proxy30 = ((52 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy30, value$proxy14, true);
});
$p.nO = (function(m, v) {
  var value$proxy15 = Math.fround(v);
  var offset$proxy31 = ((56 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy31, value$proxy15, true);
});
$p.nQ = (function(m, v) {
  var value$proxy16 = Math.fround(v);
  var offset$proxy32 = ((60 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy32, value$proxy16, true);
});
$p.gE = (function(m) {
  return this.nl(m);
});
$p.gF = (function(m) {
  return this.nn(m);
});
$p.gG = (function(m) {
  return this.np(m);
});
$p.gH = (function(m) {
  return this.nr(m);
});
$p.gI = (function(m) {
  return this.nt(m);
});
$p.gJ = (function(m) {
  return this.nv(m);
});
$p.gK = (function(m) {
  return this.nx(m);
});
$p.gL = (function(m) {
  return this.nz(m);
});
$p.gM = (function(m) {
  return this.nB(m);
});
$p.gN = (function(m) {
  return this.nD(m);
});
$p.gO = (function(m) {
  return this.nF(m);
});
$p.gP = (function(m) {
  return this.nH(m);
});
$p.gQ = (function(m) {
  return this.nJ(m);
});
$p.gR = (function(m) {
  return this.nL(m);
});
$p.gS = (function(m) {
  return this.nN(m);
});
$p.gT = (function(m) {
  return this.nP(m);
});
$p.lA = (function(m, v) {
  this.nm(m, v);
});
$p.lB = (function(m, v) {
  this.no(m, v);
});
$p.lC = (function(m, v) {
  this.nq(m, v);
});
$p.lD = (function(m, v) {
  this.ns(m, v);
});
$p.lE = (function(m, v) {
  this.nu(m, v);
});
$p.lF = (function(m, v) {
  this.nw(m, v);
});
$p.lG = (function(m, v) {
  this.ny(m, v);
});
$p.lH = (function(m, v) {
  this.nA(m, v);
});
$p.lI = (function(m, v) {
  this.nC(m, v);
});
$p.lJ = (function(m, v) {
  this.nE(m, v);
});
$p.lK = (function(m, v) {
  this.nG(m, v);
});
$p.lL = (function(m, v) {
  this.nI(m, v);
});
$p.lM = (function(m, v) {
  this.nK(m, v);
});
$p.lN = (function(m, v) {
  this.nM(m, v);
});
$p.lO = (function(m, v) {
  this.nO(m, v);
});
$p.lP = (function(m, v) {
  this.nQ(m, v);
});
var $d_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$, "trivalibs.graphics.math.cpu.mat4$package$Mat4Buffer$given_Mat4Mutable_StructRef$", ({
  ez: 1,
  V: 1,
  aS: 1,
  aT: 1
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
$p.j9 = (function(v) {
  var offset$proxy1 = (v.off | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy1, true));
});
$p.jb = (function(v) {
  var offset$proxy2 = ((4 + (v.off | 0)) | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy2, true));
});
$p.ja = (function(v, value) {
  var value$proxy1 = Math.fround(value);
  var offset$proxy3 = (v.off | 0);
  v.dv.setFloat32(offset$proxy3, value$proxy1, true);
});
$p.jc = (function(v, value) {
  var value$proxy2 = Math.fround(value);
  var offset$proxy4 = ((4 + (v.off | 0)) | 0);
  v.dv.setFloat32(offset$proxy4, value$proxy2, true);
});
$p.G = (function(v) {
  return this.j9(v);
});
$p.C = (function(v) {
  return this.jb(v);
});
$p.fV = (function(v, value) {
  this.ja(v, value);
});
$p.fW = (function(v, value) {
  this.jc(v, value);
});
var $d_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$, "trivalibs.graphics.math.cpu.vec2$package$Vec2Buffer$vec2MutableBuffer$", ({
  eC: 1,
  W: 1,
  aU: 1,
  aV: 1
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
$p.j9 = (function(v) {
  var offset$proxy1 = (v.off | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy1, true));
});
$p.jb = (function(v) {
  var offset$proxy2 = ((4 + (v.off | 0)) | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy2, true));
});
$p.oQ = (function(v) {
  var offset$proxy3 = ((8 + (v.off | 0)) | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy3, true));
});
$p.oI = (function(v) {
  var offset$proxy4 = ((12 + (v.off | 0)) | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy4, true));
});
$p.ja = (function(v, value) {
  var value$proxy1 = Math.fround(value);
  var offset$proxy5 = (v.off | 0);
  v.dv.setFloat32(offset$proxy5, value$proxy1, true);
});
$p.jc = (function(v, value) {
  var value$proxy2 = Math.fround(value);
  var offset$proxy6 = ((4 + (v.off | 0)) | 0);
  v.dv.setFloat32(offset$proxy6, value$proxy2, true);
});
$p.oR = (function(v, value) {
  var value$proxy3 = Math.fround(value);
  var offset$proxy7 = ((8 + (v.off | 0)) | 0);
  v.dv.setFloat32(offset$proxy7, value$proxy3, true);
});
$p.oK = (function(v, value) {
  var value$proxy4 = Math.fround(value);
  var offset$proxy8 = ((12 + (v.off | 0)) | 0);
  v.dv.setFloat32(offset$proxy8, value$proxy4, true);
});
$p.G = (function(v) {
  return this.j9(v);
});
$p.C = (function(v) {
  return this.jb(v);
});
$p.a8 = (function(v) {
  return this.oQ(v);
});
$p.af = (function(v) {
  return this.oI(v);
});
$p.fV = (function(v, value) {
  this.ja(v, value);
});
$p.fW = (function(v, value) {
  this.jc(v, value);
});
$p.je = (function(v, value) {
  this.oR(v, value);
});
$p.j8 = (function(v, value) {
  this.oK(v, value);
});
var $d_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$, "trivalibs.graphics.math.cpu.vec4$package$Vec4Buffer$vec4MutableBuffer$", ({
  eF: 1,
  G: 1,
  X: 1,
  Y: 1
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
  var all = [vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, uniformDecls, $thiz.gm, f$proxy1, g$proxy1];
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
  this.ad = null;
  this.ac = null;
  this.gm = null;
  this.ad = vertexBody;
  this.ac = fragmentBody;
  this.gm = helperFns;
}
$p = $c_Ltrivalibs_graphics_shader_ShaderDef.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_ShaderDef;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_ShaderDef() {
}
$h_Ltrivalibs_graphics_shader_ShaderDef.prototype = $p;
$p.F = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().P(this, (-1488826029), true);
});
$p.q = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_Ltrivalibs_graphics_shader_ShaderDef) && (((this.ad === x$0.ad) && (this.ac === x$0.ac)) && (this.gm === x$0.gm))));
});
$p.m = (function() {
  return $m_sr_ScalaRunTime$().li(this);
});
$p.z = (function() {
  return 3;
});
$p.D = (function() {
  return "ShaderDef";
});
$p.j = (function(n) {
  switch (n) {
    case 0: {
      return this.ad;
      break;
    }
    case 1: {
      return this.ac;
      break;
    }
    case 2: {
      return this.gm;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException(("" + n));
    }
  }
});
function $isArrayOf_Ltrivalibs_graphics_shader_ShaderDef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aZ)));
}
var $d_Ltrivalibs_graphics_shader_ShaderDef = new $TypeData().i($c_Ltrivalibs_graphics_shader_ShaderDef, "trivalibs.graphics.shader.ShaderDef", ({
  aZ: 1,
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
  m: 1,
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
  a7: 1,
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
  ba: 1,
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
  be: 1,
  a2: 1,
  a0: 1,
  a4: 1,
  a1: 1
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
  bf: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
function $isArrayOf_jl_SecurityException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bh)));
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
  bi: 1,
  m: 1,
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
  bn: 1,
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
  bs: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
function $p_s_MatchError__objString__T($thiz) {
  if ((!$thiz.jm)) {
    if (($thiz.h2 === null)) {
      var $x_1 = "null";
    } else {
      var this$1 = $thiz.h2;
      var cls = $objectGetClass(this$1);
      var ofClass = ((cls === null) ? "of a JS class" : ("of class " + cls.hQ.N));
      try {
        var $x_1 = ((($thiz.h2 + " (") + ofClass) + ")");
      } catch (e) {
        var $x_1 = ("an instance " + ofClass);
      }
    }
    $thiz.jl = $x_1;
    $thiz.jm = true;
  }
  return $thiz.jl;
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.h2 = null;
    this.jl = null;
    this.jm = false;
    this.h2 = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  hE() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().i($c_s_MatchError, "scala.MatchError", ({
  bC: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.fY = 0;
  this.jo = 0;
  this.jn = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.jn = outer;
  this.fY = 0;
  this.jo = outer.z();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $p;
$p.O = (function() {
  return (this.fY < this.jo);
});
$p.H = (function() {
  var result = this.jn.j(this.fY);
  this.fY = ((1 + this.fY) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().i($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  bE: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1
}));
/** @constructor */
function $c_T1(_1) {
  this.fc = null;
  this.fc = _1;
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
$p.j = (function(n) {
  return $f_s_Product1__productElement__I__O(this, n);
});
$p.m = (function() {
  return (("(" + this.fc) + ")");
});
$p.D = (function() {
  return "Tuple1";
});
$p.F = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().P(this, 1228477340, true);
});
$p.q = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T1) && $m_sr_BoxesRunTime$().b(this.fc, x$1.fc)));
});
function $isArrayOf_T1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a9)));
}
var $d_T1 = new $TypeData().i($c_T1, "scala.Tuple1", ({
  a9: 1,
  bF: 1,
  c: 1,
  b: 1,
  a: 1
}));
/** @constructor */
function $c_T10(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10) {
  this.fd = null;
  this.bn = null;
  this.bo = null;
  this.bp = null;
  this.bq = null;
  this.br = null;
  this.bs = null;
  this.bt = null;
  this.bu = null;
  this.bm = null;
  this.fd = _1;
  this.bn = _2;
  this.bo = _3;
  this.bp = _4;
  this.bq = _5;
  this.br = _6;
  this.bs = _7;
  this.bt = _8;
  this.bu = _9;
  this.bm = _10;
}
$p = $c_T10.prototype = new $h_O();
$p.constructor = $c_T10;
/** @constructor */
function $h_T10() {
}
$h_T10.prototype = $p;
$p.F = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 10;
});
$p.j = (function(n) {
  return $f_s_Product10__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().P(this, 2104595240, true);
});
$p.q = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T10) && ((((((((($m_sr_BoxesRunTime$().b(this.fd, x$0.fd) && $m_sr_BoxesRunTime$().b(this.bn, x$0.bn)) && $m_sr_BoxesRunTime$().b(this.bo, x$0.bo)) && $m_sr_BoxesRunTime$().b(this.bp, x$0.bp)) && $m_sr_BoxesRunTime$().b(this.bq, x$0.bq)) && $m_sr_BoxesRunTime$().b(this.br, x$0.br)) && $m_sr_BoxesRunTime$().b(this.bs, x$0.bs)) && $m_sr_BoxesRunTime$().b(this.bt, x$0.bt)) && $m_sr_BoxesRunTime$().b(this.bu, x$0.bu)) && $m_sr_BoxesRunTime$().b(this.bm, x$0.bm))));
});
$p.D = (function() {
  return "Tuple10";
});
$p.m = (function() {
  return (((((((((((((((((((("(" + this.fd) + ",") + this.bn) + ",") + this.bo) + ",") + this.bp) + ",") + this.bq) + ",") + this.br) + ",") + this.bs) + ",") + this.bt) + ",") + this.bu) + ",") + this.bm) + ")");
});
function $isArrayOf_T10(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aa)));
}
var $d_T10 = new $TypeData().i($c_T10, "scala.Tuple10", ({
  aa: 1,
  b: 1,
  c: 1,
  bG: 1,
  a: 1
}));
/** @constructor */
function $c_T11(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11) {
  this.fe = null;
  this.bx = null;
  this.by = null;
  this.bz = null;
  this.bA = null;
  this.bB = null;
  this.bC = null;
  this.bD = null;
  this.bE = null;
  this.bv = null;
  this.bw = null;
  this.fe = _1;
  this.bx = _2;
  this.by = _3;
  this.bz = _4;
  this.bA = _5;
  this.bB = _6;
  this.bC = _7;
  this.bD = _8;
  this.bE = _9;
  this.bv = _10;
  this.bw = _11;
}
$p = $c_T11.prototype = new $h_O();
$p.constructor = $c_T11;
/** @constructor */
function $h_T11() {
}
$h_T11.prototype = $p;
$p.F = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 11;
});
$p.j = (function(n) {
  return $f_s_Product11__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().P(this, 838406606, true);
});
$p.q = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T11) && (((((((((($m_sr_BoxesRunTime$().b(this.fe, x$0.fe) && $m_sr_BoxesRunTime$().b(this.bx, x$0.bx)) && $m_sr_BoxesRunTime$().b(this.by, x$0.by)) && $m_sr_BoxesRunTime$().b(this.bz, x$0.bz)) && $m_sr_BoxesRunTime$().b(this.bA, x$0.bA)) && $m_sr_BoxesRunTime$().b(this.bB, x$0.bB)) && $m_sr_BoxesRunTime$().b(this.bC, x$0.bC)) && $m_sr_BoxesRunTime$().b(this.bD, x$0.bD)) && $m_sr_BoxesRunTime$().b(this.bE, x$0.bE)) && $m_sr_BoxesRunTime$().b(this.bv, x$0.bv)) && $m_sr_BoxesRunTime$().b(this.bw, x$0.bw))));
});
$p.D = (function() {
  return "Tuple11";
});
$p.m = (function() {
  return (((((((((((((((((((((("(" + this.fe) + ",") + this.bx) + ",") + this.by) + ",") + this.bz) + ",") + this.bA) + ",") + this.bB) + ",") + this.bC) + ",") + this.bD) + ",") + this.bE) + ",") + this.bv) + ",") + this.bw) + ")");
});
function $isArrayOf_T11(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ab)));
}
var $d_T11 = new $TypeData().i($c_T11, "scala.Tuple11", ({
  ab: 1,
  b: 1,
  c: 1,
  bH: 1,
  a: 1
}));
/** @constructor */
function $c_T12(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12) {
  this.ff = null;
  this.bI = null;
  this.bJ = null;
  this.bK = null;
  this.bL = null;
  this.bM = null;
  this.bN = null;
  this.bO = null;
  this.bP = null;
  this.bF = null;
  this.bG = null;
  this.bH = null;
  this.ff = _1;
  this.bI = _2;
  this.bJ = _3;
  this.bK = _4;
  this.bL = _5;
  this.bM = _6;
  this.bN = _7;
  this.bO = _8;
  this.bP = _9;
  this.bF = _10;
  this.bG = _11;
  this.bH = _12;
}
$p = $c_T12.prototype = new $h_O();
$p.constructor = $c_T12;
/** @constructor */
function $h_T12() {
}
$h_T12.prototype = $p;
$p.F = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 12;
});
$p.j = (function(n) {
  return $f_s_Product12__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().P(this, (-1964145863), true);
});
$p.q = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T12) && ((((((((((($m_sr_BoxesRunTime$().b(this.ff, x$0.ff) && $m_sr_BoxesRunTime$().b(this.bI, x$0.bI)) && $m_sr_BoxesRunTime$().b(this.bJ, x$0.bJ)) && $m_sr_BoxesRunTime$().b(this.bK, x$0.bK)) && $m_sr_BoxesRunTime$().b(this.bL, x$0.bL)) && $m_sr_BoxesRunTime$().b(this.bM, x$0.bM)) && $m_sr_BoxesRunTime$().b(this.bN, x$0.bN)) && $m_sr_BoxesRunTime$().b(this.bO, x$0.bO)) && $m_sr_BoxesRunTime$().b(this.bP, x$0.bP)) && $m_sr_BoxesRunTime$().b(this.bF, x$0.bF)) && $m_sr_BoxesRunTime$().b(this.bG, x$0.bG)) && $m_sr_BoxesRunTime$().b(this.bH, x$0.bH))));
});
$p.D = (function() {
  return "Tuple12";
});
$p.m = (function() {
  return (((((((((((((((((((((((("(" + this.ff) + ",") + this.bI) + ",") + this.bJ) + ",") + this.bK) + ",") + this.bL) + ",") + this.bM) + ",") + this.bN) + ",") + this.bO) + ",") + this.bP) + ",") + this.bF) + ",") + this.bG) + ",") + this.bH) + ")");
});
function $isArrayOf_T12(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ac)));
}
var $d_T12 = new $TypeData().i($c_T12, "scala.Tuple12", ({
  ac: 1,
  b: 1,
  c: 1,
  bI: 1,
  a: 1
}));
/** @constructor */
function $c_T13(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13) {
  this.fg = null;
  this.bU = null;
  this.bV = null;
  this.bW = null;
  this.bX = null;
  this.bY = null;
  this.bZ = null;
  this.c0 = null;
  this.c1 = null;
  this.bQ = null;
  this.bR = null;
  this.bS = null;
  this.bT = null;
  this.fg = _1;
  this.bU = _2;
  this.bV = _3;
  this.bW = _4;
  this.bX = _5;
  this.bY = _6;
  this.bZ = _7;
  this.c0 = _8;
  this.c1 = _9;
  this.bQ = _10;
  this.bR = _11;
  this.bS = _12;
  this.bT = _13;
}
$p = $c_T13.prototype = new $h_O();
$p.constructor = $c_T13;
/** @constructor */
function $h_T13() {
}
$h_T13.prototype = $p;
$p.F = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 13;
});
$p.j = (function(n) {
  return $f_s_Product13__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().P(this, 1224168367, true);
});
$p.q = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T13) && (((((((((((($m_sr_BoxesRunTime$().b(this.fg, x$0.fg) && $m_sr_BoxesRunTime$().b(this.bU, x$0.bU)) && $m_sr_BoxesRunTime$().b(this.bV, x$0.bV)) && $m_sr_BoxesRunTime$().b(this.bW, x$0.bW)) && $m_sr_BoxesRunTime$().b(this.bX, x$0.bX)) && $m_sr_BoxesRunTime$().b(this.bY, x$0.bY)) && $m_sr_BoxesRunTime$().b(this.bZ, x$0.bZ)) && $m_sr_BoxesRunTime$().b(this.c0, x$0.c0)) && $m_sr_BoxesRunTime$().b(this.c1, x$0.c1)) && $m_sr_BoxesRunTime$().b(this.bQ, x$0.bQ)) && $m_sr_BoxesRunTime$().b(this.bR, x$0.bR)) && $m_sr_BoxesRunTime$().b(this.bS, x$0.bS)) && $m_sr_BoxesRunTime$().b(this.bT, x$0.bT))));
});
$p.D = (function() {
  return "Tuple13";
});
$p.m = (function() {
  return (((((((((((((((((((((((((("(" + this.fg) + ",") + this.bU) + ",") + this.bV) + ",") + this.bW) + ",") + this.bX) + ",") + this.bY) + ",") + this.bZ) + ",") + this.c0) + ",") + this.c1) + ",") + this.bQ) + ",") + this.bR) + ",") + this.bS) + ",") + this.bT) + ")");
});
function $isArrayOf_T13(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ad)));
}
var $d_T13 = new $TypeData().i($c_T13, "scala.Tuple13", ({
  ad: 1,
  b: 1,
  c: 1,
  bJ: 1,
  a: 1
}));
/** @constructor */
function $c_T14(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14) {
  this.fh = null;
  this.c7 = null;
  this.c8 = null;
  this.c9 = null;
  this.ca = null;
  this.cb = null;
  this.cc = null;
  this.cd = null;
  this.ce = null;
  this.c2 = null;
  this.c3 = null;
  this.c4 = null;
  this.c5 = null;
  this.c6 = null;
  this.fh = _1;
  this.c7 = _2;
  this.c8 = _3;
  this.c9 = _4;
  this.ca = _5;
  this.cb = _6;
  this.cc = _7;
  this.cd = _8;
  this.ce = _9;
  this.c2 = _10;
  this.c3 = _11;
  this.c4 = _12;
  this.c5 = _13;
  this.c6 = _14;
}
$p = $c_T14.prototype = new $h_O();
$p.constructor = $c_T14;
/** @constructor */
function $h_T14() {
}
$h_T14.prototype = $p;
$p.F = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 14;
});
$p.j = (function(n) {
  return $f_s_Product14__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().P(this, 147759069, true);
});
$p.q = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T14) && ((((((((((((($m_sr_BoxesRunTime$().b(this.fh, x$0.fh) && $m_sr_BoxesRunTime$().b(this.c7, x$0.c7)) && $m_sr_BoxesRunTime$().b(this.c8, x$0.c8)) && $m_sr_BoxesRunTime$().b(this.c9, x$0.c9)) && $m_sr_BoxesRunTime$().b(this.ca, x$0.ca)) && $m_sr_BoxesRunTime$().b(this.cb, x$0.cb)) && $m_sr_BoxesRunTime$().b(this.cc, x$0.cc)) && $m_sr_BoxesRunTime$().b(this.cd, x$0.cd)) && $m_sr_BoxesRunTime$().b(this.ce, x$0.ce)) && $m_sr_BoxesRunTime$().b(this.c2, x$0.c2)) && $m_sr_BoxesRunTime$().b(this.c3, x$0.c3)) && $m_sr_BoxesRunTime$().b(this.c4, x$0.c4)) && $m_sr_BoxesRunTime$().b(this.c5, x$0.c5)) && $m_sr_BoxesRunTime$().b(this.c6, x$0.c6))));
});
$p.D = (function() {
  return "Tuple14";
});
$p.m = (function() {
  return (((((((((((((((((((((((((((("(" + this.fh) + ",") + this.c7) + ",") + this.c8) + ",") + this.c9) + ",") + this.ca) + ",") + this.cb) + ",") + this.cc) + ",") + this.cd) + ",") + this.ce) + ",") + this.c2) + ",") + this.c3) + ",") + this.c4) + ",") + this.c5) + ",") + this.c6) + ")");
});
function $isArrayOf_T14(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ae)));
}
var $d_T14 = new $TypeData().i($c_T14, "scala.Tuple14", ({
  ae: 1,
  b: 1,
  c: 1,
  bK: 1,
  a: 1
}));
/** @constructor */
function $c_T15(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15) {
  this.fi = null;
  this.cl = null;
  this.cm = null;
  this.cn = null;
  this.co = null;
  this.cp = null;
  this.cq = null;
  this.cr = null;
  this.cs = null;
  this.cf = null;
  this.cg = null;
  this.ch = null;
  this.ci = null;
  this.cj = null;
  this.ck = null;
  this.fi = _1;
  this.cl = _2;
  this.cm = _3;
  this.cn = _4;
  this.co = _5;
  this.cp = _6;
  this.cq = _7;
  this.cr = _8;
  this.cs = _9;
  this.cf = _10;
  this.cg = _11;
  this.ch = _12;
  this.ci = _13;
  this.cj = _14;
  this.ck = _15;
}
$p = $c_T15.prototype = new $h_O();
$p.constructor = $c_T15;
/** @constructor */
function $h_T15() {
}
$h_T15.prototype = $p;
$p.F = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 15;
});
$p.j = (function(n) {
  return $f_s_Product15__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().P(this, 1834180931, true);
});
$p.q = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T15) && (((((((((((((($m_sr_BoxesRunTime$().b(this.fi, x$0.fi) && $m_sr_BoxesRunTime$().b(this.cl, x$0.cl)) && $m_sr_BoxesRunTime$().b(this.cm, x$0.cm)) && $m_sr_BoxesRunTime$().b(this.cn, x$0.cn)) && $m_sr_BoxesRunTime$().b(this.co, x$0.co)) && $m_sr_BoxesRunTime$().b(this.cp, x$0.cp)) && $m_sr_BoxesRunTime$().b(this.cq, x$0.cq)) && $m_sr_BoxesRunTime$().b(this.cr, x$0.cr)) && $m_sr_BoxesRunTime$().b(this.cs, x$0.cs)) && $m_sr_BoxesRunTime$().b(this.cf, x$0.cf)) && $m_sr_BoxesRunTime$().b(this.cg, x$0.cg)) && $m_sr_BoxesRunTime$().b(this.ch, x$0.ch)) && $m_sr_BoxesRunTime$().b(this.ci, x$0.ci)) && $m_sr_BoxesRunTime$().b(this.cj, x$0.cj)) && $m_sr_BoxesRunTime$().b(this.ck, x$0.ck))));
});
$p.D = (function() {
  return "Tuple15";
});
$p.m = (function() {
  return (((((((((((((((((((((((((((((("(" + this.fi) + ",") + this.cl) + ",") + this.cm) + ",") + this.cn) + ",") + this.co) + ",") + this.cp) + ",") + this.cq) + ",") + this.cr) + ",") + this.cs) + ",") + this.cf) + ",") + this.cg) + ",") + this.ch) + ",") + this.ci) + ",") + this.cj) + ",") + this.ck) + ")");
});
function $isArrayOf_T15(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.af)));
}
var $d_T15 = new $TypeData().i($c_T15, "scala.Tuple15", ({
  af: 1,
  b: 1,
  c: 1,
  bL: 1,
  a: 1
}));
/** @constructor */
function $c_T16(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16) {
  this.fj = null;
  this.cA = null;
  this.cB = null;
  this.cC = null;
  this.cD = null;
  this.cE = null;
  this.cF = null;
  this.cG = null;
  this.cH = null;
  this.ct = null;
  this.cu = null;
  this.cv = null;
  this.cw = null;
  this.cx = null;
  this.cy = null;
  this.cz = null;
  this.fj = _1;
  this.cA = _2;
  this.cB = _3;
  this.cC = _4;
  this.cD = _5;
  this.cE = _6;
  this.cF = _7;
  this.cG = _8;
  this.cH = _9;
  this.ct = _10;
  this.cu = _11;
  this.cv = _12;
  this.cw = _13;
  this.cx = _14;
  this.cy = _15;
  this.cz = _16;
}
$p = $c_T16.prototype = new $h_O();
$p.constructor = $c_T16;
/** @constructor */
function $h_T16() {
}
$h_T16.prototype = $p;
$p.F = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 16;
});
$p.j = (function(n) {
  return $f_s_Product16__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().P(this, 499793902, true);
});
$p.q = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T16) && ((((((((((((((($m_sr_BoxesRunTime$().b(this.fj, x$0.fj) && $m_sr_BoxesRunTime$().b(this.cA, x$0.cA)) && $m_sr_BoxesRunTime$().b(this.cB, x$0.cB)) && $m_sr_BoxesRunTime$().b(this.cC, x$0.cC)) && $m_sr_BoxesRunTime$().b(this.cD, x$0.cD)) && $m_sr_BoxesRunTime$().b(this.cE, x$0.cE)) && $m_sr_BoxesRunTime$().b(this.cF, x$0.cF)) && $m_sr_BoxesRunTime$().b(this.cG, x$0.cG)) && $m_sr_BoxesRunTime$().b(this.cH, x$0.cH)) && $m_sr_BoxesRunTime$().b(this.ct, x$0.ct)) && $m_sr_BoxesRunTime$().b(this.cu, x$0.cu)) && $m_sr_BoxesRunTime$().b(this.cv, x$0.cv)) && $m_sr_BoxesRunTime$().b(this.cw, x$0.cw)) && $m_sr_BoxesRunTime$().b(this.cx, x$0.cx)) && $m_sr_BoxesRunTime$().b(this.cy, x$0.cy)) && $m_sr_BoxesRunTime$().b(this.cz, x$0.cz))));
});
$p.D = (function() {
  return "Tuple16";
});
$p.m = (function() {
  return (((((((((((((((((((((((((((((((("(" + this.fj) + ",") + this.cA) + ",") + this.cB) + ",") + this.cC) + ",") + this.cD) + ",") + this.cE) + ",") + this.cF) + ",") + this.cG) + ",") + this.cH) + ",") + this.ct) + ",") + this.cu) + ",") + this.cv) + ",") + this.cw) + ",") + this.cx) + ",") + this.cy) + ",") + this.cz) + ")");
});
function $isArrayOf_T16(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ag)));
}
var $d_T16 = new $TypeData().i($c_T16, "scala.Tuple16", ({
  ag: 1,
  b: 1,
  c: 1,
  bM: 1,
  a: 1
}));
/** @constructor */
function $c_T17(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17) {
  this.fk = null;
  this.cQ = null;
  this.cR = null;
  this.cS = null;
  this.cT = null;
  this.cU = null;
  this.cV = null;
  this.cW = null;
  this.cX = null;
  this.cI = null;
  this.cJ = null;
  this.cK = null;
  this.cL = null;
  this.cM = null;
  this.cN = null;
  this.cO = null;
  this.cP = null;
  this.fk = _1;
  this.cQ = _2;
  this.cR = _3;
  this.cS = _4;
  this.cT = _5;
  this.cU = _6;
  this.cV = _7;
  this.cW = _8;
  this.cX = _9;
  this.cI = _10;
  this.cJ = _11;
  this.cK = _12;
  this.cL = _13;
  this.cM = _14;
  this.cN = _15;
  this.cO = _16;
  this.cP = _17;
}
$p = $c_T17.prototype = new $h_O();
$p.constructor = $c_T17;
/** @constructor */
function $h_T17() {
}
$h_T17.prototype = $p;
$p.F = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 17;
});
$p.j = (function(n) {
  return $f_s_Product17__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().P(this, (-934366247), true);
});
$p.q = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T17) && (((((((((((((((($m_sr_BoxesRunTime$().b(this.fk, x$0.fk) && $m_sr_BoxesRunTime$().b(this.cQ, x$0.cQ)) && $m_sr_BoxesRunTime$().b(this.cR, x$0.cR)) && $m_sr_BoxesRunTime$().b(this.cS, x$0.cS)) && $m_sr_BoxesRunTime$().b(this.cT, x$0.cT)) && $m_sr_BoxesRunTime$().b(this.cU, x$0.cU)) && $m_sr_BoxesRunTime$().b(this.cV, x$0.cV)) && $m_sr_BoxesRunTime$().b(this.cW, x$0.cW)) && $m_sr_BoxesRunTime$().b(this.cX, x$0.cX)) && $m_sr_BoxesRunTime$().b(this.cI, x$0.cI)) && $m_sr_BoxesRunTime$().b(this.cJ, x$0.cJ)) && $m_sr_BoxesRunTime$().b(this.cK, x$0.cK)) && $m_sr_BoxesRunTime$().b(this.cL, x$0.cL)) && $m_sr_BoxesRunTime$().b(this.cM, x$0.cM)) && $m_sr_BoxesRunTime$().b(this.cN, x$0.cN)) && $m_sr_BoxesRunTime$().b(this.cO, x$0.cO)) && $m_sr_BoxesRunTime$().b(this.cP, x$0.cP))));
});
$p.D = (function() {
  return "Tuple17";
});
$p.m = (function() {
  return (((((((((((((((((((((((((((((((((("(" + this.fk) + ",") + this.cQ) + ",") + this.cR) + ",") + this.cS) + ",") + this.cT) + ",") + this.cU) + ",") + this.cV) + ",") + this.cW) + ",") + this.cX) + ",") + this.cI) + ",") + this.cJ) + ",") + this.cK) + ",") + this.cL) + ",") + this.cM) + ",") + this.cN) + ",") + this.cO) + ",") + this.cP) + ")");
});
function $isArrayOf_T17(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ah)));
}
var $d_T17 = new $TypeData().i($c_T17, "scala.Tuple17", ({
  ah: 1,
  b: 1,
  c: 1,
  bN: 1,
  a: 1
}));
/** @constructor */
function $c_T18(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18) {
  this.fl = null;
  this.d7 = null;
  this.d8 = null;
  this.d9 = null;
  this.da = null;
  this.db = null;
  this.dc = null;
  this.dd = null;
  this.de = null;
  this.cY = null;
  this.cZ = null;
  this.d0 = null;
  this.d1 = null;
  this.d2 = null;
  this.d3 = null;
  this.d4 = null;
  this.d5 = null;
  this.d6 = null;
  this.fl = _1;
  this.d7 = _2;
  this.d8 = _3;
  this.d9 = _4;
  this.da = _5;
  this.db = _6;
  this.dc = _7;
  this.dd = _8;
  this.de = _9;
  this.cY = _10;
  this.cZ = _11;
  this.d0 = _12;
  this.d1 = _13;
  this.d2 = _14;
  this.d3 = _15;
  this.d4 = _16;
  this.d5 = _17;
  this.d6 = _18;
}
$p = $c_T18.prototype = new $h_O();
$p.constructor = $c_T18;
/** @constructor */
function $h_T18() {
}
$h_T18.prototype = $p;
$p.F = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 18;
});
$p.j = (function(n) {
  return $f_s_Product18__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().P(this, (-937041276), true);
});
$p.q = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T18) && ((((((((((((((((($m_sr_BoxesRunTime$().b(this.fl, x$0.fl) && $m_sr_BoxesRunTime$().b(this.d7, x$0.d7)) && $m_sr_BoxesRunTime$().b(this.d8, x$0.d8)) && $m_sr_BoxesRunTime$().b(this.d9, x$0.d9)) && $m_sr_BoxesRunTime$().b(this.da, x$0.da)) && $m_sr_BoxesRunTime$().b(this.db, x$0.db)) && $m_sr_BoxesRunTime$().b(this.dc, x$0.dc)) && $m_sr_BoxesRunTime$().b(this.dd, x$0.dd)) && $m_sr_BoxesRunTime$().b(this.de, x$0.de)) && $m_sr_BoxesRunTime$().b(this.cY, x$0.cY)) && $m_sr_BoxesRunTime$().b(this.cZ, x$0.cZ)) && $m_sr_BoxesRunTime$().b(this.d0, x$0.d0)) && $m_sr_BoxesRunTime$().b(this.d1, x$0.d1)) && $m_sr_BoxesRunTime$().b(this.d2, x$0.d2)) && $m_sr_BoxesRunTime$().b(this.d3, x$0.d3)) && $m_sr_BoxesRunTime$().b(this.d4, x$0.d4)) && $m_sr_BoxesRunTime$().b(this.d5, x$0.d5)) && $m_sr_BoxesRunTime$().b(this.d6, x$0.d6))));
});
$p.D = (function() {
  return "Tuple18";
});
$p.m = (function() {
  return (((((((((((((((((((((((((((((((((((("(" + this.fl) + ",") + this.d7) + ",") + this.d8) + ",") + this.d9) + ",") + this.da) + ",") + this.db) + ",") + this.dc) + ",") + this.dd) + ",") + this.de) + ",") + this.cY) + ",") + this.cZ) + ",") + this.d0) + ",") + this.d1) + ",") + this.d2) + ",") + this.d3) + ",") + this.d4) + ",") + this.d5) + ",") + this.d6) + ")");
});
function $isArrayOf_T18(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ai)));
}
var $d_T18 = new $TypeData().i($c_T18, "scala.Tuple18", ({
  ai: 1,
  b: 1,
  c: 1,
  bO: 1,
  a: 1
}));
/** @constructor */
function $c_T19(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19) {
  this.fm = null;
  this.dq = null;
  this.dr = null;
  this.ds = null;
  this.dt = null;
  this.du = null;
  this.dv = null;
  this.dw = null;
  this.dx = null;
  this.df = null;
  this.dg = null;
  this.dh = null;
  this.di = null;
  this.dj = null;
  this.dk = null;
  this.dl = null;
  this.dm = null;
  this.dn = null;
  this.dp = null;
  this.fm = _1;
  this.dq = _2;
  this.dr = _3;
  this.ds = _4;
  this.dt = _5;
  this.du = _6;
  this.dv = _7;
  this.dw = _8;
  this.dx = _9;
  this.df = _10;
  this.dg = _11;
  this.dh = _12;
  this.di = _13;
  this.dj = _14;
  this.dk = _15;
  this.dl = _16;
  this.dm = _17;
  this.dn = _18;
  this.dp = _19;
}
$p = $c_T19.prototype = new $h_O();
$p.constructor = $c_T19;
/** @constructor */
function $h_T19() {
}
$h_T19.prototype = $p;
$p.F = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 19;
});
$p.j = (function(n) {
  return $f_s_Product19__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().P(this, (-1955940499), true);
});
$p.q = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T19) && (((((((((((((((((($m_sr_BoxesRunTime$().b(this.fm, x$0.fm) && $m_sr_BoxesRunTime$().b(this.dq, x$0.dq)) && $m_sr_BoxesRunTime$().b(this.dr, x$0.dr)) && $m_sr_BoxesRunTime$().b(this.ds, x$0.ds)) && $m_sr_BoxesRunTime$().b(this.dt, x$0.dt)) && $m_sr_BoxesRunTime$().b(this.du, x$0.du)) && $m_sr_BoxesRunTime$().b(this.dv, x$0.dv)) && $m_sr_BoxesRunTime$().b(this.dw, x$0.dw)) && $m_sr_BoxesRunTime$().b(this.dx, x$0.dx)) && $m_sr_BoxesRunTime$().b(this.df, x$0.df)) && $m_sr_BoxesRunTime$().b(this.dg, x$0.dg)) && $m_sr_BoxesRunTime$().b(this.dh, x$0.dh)) && $m_sr_BoxesRunTime$().b(this.di, x$0.di)) && $m_sr_BoxesRunTime$().b(this.dj, x$0.dj)) && $m_sr_BoxesRunTime$().b(this.dk, x$0.dk)) && $m_sr_BoxesRunTime$().b(this.dl, x$0.dl)) && $m_sr_BoxesRunTime$().b(this.dm, x$0.dm)) && $m_sr_BoxesRunTime$().b(this.dn, x$0.dn)) && $m_sr_BoxesRunTime$().b(this.dp, x$0.dp))));
});
$p.D = (function() {
  return "Tuple19";
});
$p.m = (function() {
  return (((((((((((((((((((((((((((((((((((((("(" + this.fm) + ",") + this.dq) + ",") + this.dr) + ",") + this.ds) + ",") + this.dt) + ",") + this.du) + ",") + this.dv) + ",") + this.dw) + ",") + this.dx) + ",") + this.df) + ",") + this.dg) + ",") + this.dh) + ",") + this.di) + ",") + this.dj) + ",") + this.dk) + ",") + this.dl) + ",") + this.dm) + ",") + this.dn) + ",") + this.dp) + ")");
});
function $isArrayOf_T19(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aj)));
}
var $d_T19 = new $TypeData().i($c_T19, "scala.Tuple19", ({
  aj: 1,
  b: 1,
  c: 1,
  bP: 1,
  a: 1
}));
/** @constructor */
function $c_T2(_1, _2) {
  this.a2 = null;
  this.ag = null;
  this.a2 = _1;
  this.ag = _2;
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
$p.j = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n);
});
$p.m = (function() {
  return (((("(" + this.a2) + ",") + this.ag) + ")");
});
$p.D = (function() {
  return "Tuple2";
});
$p.F = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().P(this, (-116390334), true);
});
$p.q = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T2) && ($m_sr_BoxesRunTime$().b(this.a2, x$1.a2) && $m_sr_BoxesRunTime$().b(this.ag, x$1.ag))));
});
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ak)));
}
var $d_T2 = new $TypeData().i($c_T2, "scala.Tuple2", ({
  ak: 1,
  bQ: 1,
  c: 1,
  b: 1,
  a: 1
}));
/** @constructor */
function $c_T20(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20) {
  this.fn = null;
  this.dI = null;
  this.dK = null;
  this.dL = null;
  this.dM = null;
  this.dN = null;
  this.dO = null;
  this.dP = null;
  this.dQ = null;
  this.dy = null;
  this.dz = null;
  this.dA = null;
  this.dB = null;
  this.dC = null;
  this.dD = null;
  this.dE = null;
  this.dF = null;
  this.dG = null;
  this.dH = null;
  this.dJ = null;
  this.fn = _1;
  this.dI = _2;
  this.dK = _3;
  this.dL = _4;
  this.dM = _5;
  this.dN = _6;
  this.dO = _7;
  this.dP = _8;
  this.dQ = _9;
  this.dy = _10;
  this.dz = _11;
  this.dA = _12;
  this.dB = _13;
  this.dC = _14;
  this.dD = _15;
  this.dE = _16;
  this.dF = _17;
  this.dG = _18;
  this.dH = _19;
  this.dJ = _20;
}
$p = $c_T20.prototype = new $h_O();
$p.constructor = $c_T20;
/** @constructor */
function $h_T20() {
}
$h_T20.prototype = $p;
$p.F = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 20;
});
$p.j = (function(n) {
  return $f_s_Product20__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().P(this, 1328807075, true);
});
$p.q = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T20) && ((((((((((((((((((($m_sr_BoxesRunTime$().b(this.fn, x$0.fn) && $m_sr_BoxesRunTime$().b(this.dI, x$0.dI)) && $m_sr_BoxesRunTime$().b(this.dK, x$0.dK)) && $m_sr_BoxesRunTime$().b(this.dL, x$0.dL)) && $m_sr_BoxesRunTime$().b(this.dM, x$0.dM)) && $m_sr_BoxesRunTime$().b(this.dN, x$0.dN)) && $m_sr_BoxesRunTime$().b(this.dO, x$0.dO)) && $m_sr_BoxesRunTime$().b(this.dP, x$0.dP)) && $m_sr_BoxesRunTime$().b(this.dQ, x$0.dQ)) && $m_sr_BoxesRunTime$().b(this.dy, x$0.dy)) && $m_sr_BoxesRunTime$().b(this.dz, x$0.dz)) && $m_sr_BoxesRunTime$().b(this.dA, x$0.dA)) && $m_sr_BoxesRunTime$().b(this.dB, x$0.dB)) && $m_sr_BoxesRunTime$().b(this.dC, x$0.dC)) && $m_sr_BoxesRunTime$().b(this.dD, x$0.dD)) && $m_sr_BoxesRunTime$().b(this.dE, x$0.dE)) && $m_sr_BoxesRunTime$().b(this.dF, x$0.dF)) && $m_sr_BoxesRunTime$().b(this.dG, x$0.dG)) && $m_sr_BoxesRunTime$().b(this.dH, x$0.dH)) && $m_sr_BoxesRunTime$().b(this.dJ, x$0.dJ))));
});
$p.D = (function() {
  return "Tuple20";
});
$p.m = (function() {
  return (((((((((((((((((((((((((((((((((((((((("(" + this.fn) + ",") + this.dI) + ",") + this.dK) + ",") + this.dL) + ",") + this.dM) + ",") + this.dN) + ",") + this.dO) + ",") + this.dP) + ",") + this.dQ) + ",") + this.dy) + ",") + this.dz) + ",") + this.dA) + ",") + this.dB) + ",") + this.dC) + ",") + this.dD) + ",") + this.dE) + ",") + this.dF) + ",") + this.dG) + ",") + this.dH) + ",") + this.dJ) + ")");
});
function $isArrayOf_T20(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.al)));
}
var $d_T20 = new $TypeData().i($c_T20, "scala.Tuple20", ({
  al: 1,
  b: 1,
  c: 1,
  bR: 1,
  a: 1
}));
/** @constructor */
function $c_T21(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21) {
  this.fo = null;
  this.e1 = null;
  this.e4 = null;
  this.e5 = null;
  this.e6 = null;
  this.e7 = null;
  this.e8 = null;
  this.e9 = null;
  this.ea = null;
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
  this.fo = _1;
  this.e1 = _2;
  this.e4 = _3;
  this.e5 = _4;
  this.e6 = _5;
  this.e7 = _6;
  this.e8 = _7;
  this.e9 = _8;
  this.ea = _9;
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
}
$p = $c_T21.prototype = new $h_O();
$p.constructor = $c_T21;
/** @constructor */
function $h_T21() {
}
$h_T21.prototype = $p;
$p.F = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 21;
});
$p.j = (function(n) {
  return $f_s_Product21__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().P(this, (-21288119), true);
});
$p.q = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T21) && (((((((((((((((((((($m_sr_BoxesRunTime$().b(this.fo, x$0.fo) && $m_sr_BoxesRunTime$().b(this.e1, x$0.e1)) && $m_sr_BoxesRunTime$().b(this.e4, x$0.e4)) && $m_sr_BoxesRunTime$().b(this.e5, x$0.e5)) && $m_sr_BoxesRunTime$().b(this.e6, x$0.e6)) && $m_sr_BoxesRunTime$().b(this.e7, x$0.e7)) && $m_sr_BoxesRunTime$().b(this.e8, x$0.e8)) && $m_sr_BoxesRunTime$().b(this.e9, x$0.e9)) && $m_sr_BoxesRunTime$().b(this.ea, x$0.ea)) && $m_sr_BoxesRunTime$().b(this.dR, x$0.dR)) && $m_sr_BoxesRunTime$().b(this.dS, x$0.dS)) && $m_sr_BoxesRunTime$().b(this.dT, x$0.dT)) && $m_sr_BoxesRunTime$().b(this.dU, x$0.dU)) && $m_sr_BoxesRunTime$().b(this.dV, x$0.dV)) && $m_sr_BoxesRunTime$().b(this.dW, x$0.dW)) && $m_sr_BoxesRunTime$().b(this.dX, x$0.dX)) && $m_sr_BoxesRunTime$().b(this.dY, x$0.dY)) && $m_sr_BoxesRunTime$().b(this.dZ, x$0.dZ)) && $m_sr_BoxesRunTime$().b(this.e0, x$0.e0)) && $m_sr_BoxesRunTime$().b(this.e2, x$0.e2)) && $m_sr_BoxesRunTime$().b(this.e3, x$0.e3))));
});
$p.D = (function() {
  return "Tuple21";
});
$p.m = (function() {
  return (((((((((((((((((((((((((((((((((((((((((("(" + this.fo) + ",") + this.e1) + ",") + this.e4) + ",") + this.e5) + ",") + this.e6) + ",") + this.e7) + ",") + this.e8) + ",") + this.e9) + ",") + this.ea) + ",") + this.dR) + ",") + this.dS) + ",") + this.dT) + ",") + this.dU) + ",") + this.dV) + ",") + this.dW) + ",") + this.dX) + ",") + this.dY) + ",") + this.dZ) + ",") + this.e0) + ",") + this.e2) + ",") + this.e3) + ")");
});
function $isArrayOf_T21(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.am)));
}
var $d_T21 = new $TypeData().i($c_T21, "scala.Tuple21", ({
  am: 1,
  b: 1,
  c: 1,
  bS: 1,
  a: 1
}));
/** @constructor */
function $c_T22(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22) {
  this.fp = null;
  this.el = null;
  this.ep = null;
  this.eq = null;
  this.er = null;
  this.es = null;
  this.et = null;
  this.eu = null;
  this.ev = null;
  this.eb = null;
  this.ec = null;
  this.ed = null;
  this.ee = null;
  this.ef = null;
  this.eg = null;
  this.eh = null;
  this.ei = null;
  this.ej = null;
  this.ek = null;
  this.em = null;
  this.en = null;
  this.eo = null;
  this.fp = _1;
  this.el = _2;
  this.ep = _3;
  this.eq = _4;
  this.er = _5;
  this.es = _6;
  this.et = _7;
  this.eu = _8;
  this.ev = _9;
  this.eb = _10;
  this.ec = _11;
  this.ed = _12;
  this.ee = _13;
  this.ef = _14;
  this.eg = _15;
  this.eh = _16;
  this.ei = _17;
  this.ej = _18;
  this.ek = _19;
  this.em = _20;
  this.en = _21;
  this.eo = _22;
}
$p = $c_T22.prototype = new $h_O();
$p.constructor = $c_T22;
/** @constructor */
function $h_T22() {
}
$h_T22.prototype = $p;
$p.F = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 22;
});
$p.j = (function(n) {
  return $f_s_Product22__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().P(this, (-139445068), true);
});
$p.q = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T22) && ((((((((((((((((((((($m_sr_BoxesRunTime$().b(this.fp, x$0.fp) && $m_sr_BoxesRunTime$().b(this.el, x$0.el)) && $m_sr_BoxesRunTime$().b(this.ep, x$0.ep)) && $m_sr_BoxesRunTime$().b(this.eq, x$0.eq)) && $m_sr_BoxesRunTime$().b(this.er, x$0.er)) && $m_sr_BoxesRunTime$().b(this.es, x$0.es)) && $m_sr_BoxesRunTime$().b(this.et, x$0.et)) && $m_sr_BoxesRunTime$().b(this.eu, x$0.eu)) && $m_sr_BoxesRunTime$().b(this.ev, x$0.ev)) && $m_sr_BoxesRunTime$().b(this.eb, x$0.eb)) && $m_sr_BoxesRunTime$().b(this.ec, x$0.ec)) && $m_sr_BoxesRunTime$().b(this.ed, x$0.ed)) && $m_sr_BoxesRunTime$().b(this.ee, x$0.ee)) && $m_sr_BoxesRunTime$().b(this.ef, x$0.ef)) && $m_sr_BoxesRunTime$().b(this.eg, x$0.eg)) && $m_sr_BoxesRunTime$().b(this.eh, x$0.eh)) && $m_sr_BoxesRunTime$().b(this.ei, x$0.ei)) && $m_sr_BoxesRunTime$().b(this.ej, x$0.ej)) && $m_sr_BoxesRunTime$().b(this.ek, x$0.ek)) && $m_sr_BoxesRunTime$().b(this.em, x$0.em)) && $m_sr_BoxesRunTime$().b(this.en, x$0.en)) && $m_sr_BoxesRunTime$().b(this.eo, x$0.eo))));
});
$p.D = (function() {
  return "Tuple22";
});
$p.m = (function() {
  return (((((((((((((((((((((((((((((((((((((((((((("(" + this.fp) + ",") + this.el) + ",") + this.ep) + ",") + this.eq) + ",") + this.er) + ",") + this.es) + ",") + this.et) + ",") + this.eu) + ",") + this.ev) + ",") + this.eb) + ",") + this.ec) + ",") + this.ed) + ",") + this.ee) + ",") + this.ef) + ",") + this.eg) + ",") + this.eh) + ",") + this.ei) + ",") + this.ej) + ",") + this.ek) + ",") + this.em) + ",") + this.en) + ",") + this.eo) + ")");
});
function $isArrayOf_T22(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.an)));
}
var $d_T22 = new $TypeData().i($c_T22, "scala.Tuple22", ({
  an: 1,
  b: 1,
  c: 1,
  bT: 1,
  a: 1
}));
/** @constructor */
function $c_T3(_1, _2, _3) {
  this.aW = null;
  this.aJ = null;
  this.aK = null;
  this.aW = _1;
  this.aJ = _2;
  this.aK = _3;
}
$p = $c_T3.prototype = new $h_O();
$p.constructor = $c_T3;
/** @constructor */
function $h_T3() {
}
$h_T3.prototype = $p;
$p.F = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 3;
});
$p.j = (function(n) {
  return $f_s_Product3__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().P(this, (-192629203), true);
});
$p.q = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T3) && (($m_sr_BoxesRunTime$().b(this.aW, x$0.aW) && $m_sr_BoxesRunTime$().b(this.aJ, x$0.aJ)) && $m_sr_BoxesRunTime$().b(this.aK, x$0.aK))));
});
$p.D = (function() {
  return "Tuple3";
});
$p.m = (function() {
  return (((((("(" + this.aW) + ",") + this.aJ) + ",") + this.aK) + ")");
});
function $isArrayOf_T3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ao)));
}
var $d_T3 = new $TypeData().i($c_T3, "scala.Tuple3", ({
  ao: 1,
  b: 1,
  c: 1,
  bU: 1,
  a: 1
}));
/** @constructor */
function $c_T4(_1, _2, _3, _4) {
  this.ew = null;
  this.b9 = null;
  this.ba = null;
  this.bb = null;
  this.ew = _1;
  this.b9 = _2;
  this.ba = _3;
  this.bb = _4;
}
$p = $c_T4.prototype = new $h_O();
$p.constructor = $c_T4;
/** @constructor */
function $h_T4() {
}
$h_T4.prototype = $p;
$p.F = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 4;
});
$p.j = (function(n) {
  return $f_s_Product4__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().P(this, (-1542739752), true);
});
$p.q = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T4) && ((($m_sr_BoxesRunTime$().b(this.ew, x$0.ew) && $m_sr_BoxesRunTime$().b(this.b9, x$0.b9)) && $m_sr_BoxesRunTime$().b(this.ba, x$0.ba)) && $m_sr_BoxesRunTime$().b(this.bb, x$0.bb))));
});
$p.D = (function() {
  return "Tuple4";
});
$p.m = (function() {
  return (((((((("(" + this.ew) + ",") + this.b9) + ",") + this.ba) + ",") + this.bb) + ")");
});
function $isArrayOf_T4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ap)));
}
var $d_T4 = new $TypeData().i($c_T4, "scala.Tuple4", ({
  ap: 1,
  b: 1,
  c: 1,
  bV: 1,
  a: 1
}));
/** @constructor */
function $c_T5(_1, _2, _3, _4, _5) {
  this.fq = null;
  this.ex = null;
  this.ey = null;
  this.ez = null;
  this.eA = null;
  this.fq = _1;
  this.ex = _2;
  this.ey = _3;
  this.ez = _4;
  this.eA = _5;
}
$p = $c_T5.prototype = new $h_O();
$p.constructor = $c_T5;
/** @constructor */
function $h_T5() {
}
$h_T5.prototype = $p;
$p.F = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 5;
});
$p.j = (function(n) {
  return $f_s_Product5__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().P(this, 417360321, true);
});
$p.q = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T5) && (((($m_sr_BoxesRunTime$().b(this.fq, x$0.fq) && $m_sr_BoxesRunTime$().b(this.ex, x$0.ex)) && $m_sr_BoxesRunTime$().b(this.ey, x$0.ey)) && $m_sr_BoxesRunTime$().b(this.ez, x$0.ez)) && $m_sr_BoxesRunTime$().b(this.eA, x$0.eA))));
});
$p.D = (function() {
  return "Tuple5";
});
$p.m = (function() {
  return (((((((((("(" + this.fq) + ",") + this.ex) + ",") + this.ey) + ",") + this.ez) + ",") + this.eA) + ")");
});
function $isArrayOf_T5(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aq)));
}
var $d_T5 = new $TypeData().i($c_T5, "scala.Tuple5", ({
  aq: 1,
  b: 1,
  c: 1,
  bW: 1,
  a: 1
}));
/** @constructor */
function $c_T6(_1, _2, _3, _4, _5, _6) {
  this.fr = null;
  this.eB = null;
  this.eC = null;
  this.eD = null;
  this.eE = null;
  this.eF = null;
  this.fr = _1;
  this.eB = _2;
  this.eC = _3;
  this.eD = _4;
  this.eE = _5;
  this.eF = _6;
}
$p = $c_T6.prototype = new $h_O();
$p.constructor = $c_T6;
/** @constructor */
function $h_T6() {
}
$h_T6.prototype = $p;
$p.F = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 6;
});
$p.j = (function(n) {
  return $f_s_Product6__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().P(this, (-1037607828), true);
});
$p.q = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T6) && ((((($m_sr_BoxesRunTime$().b(this.fr, x$0.fr) && $m_sr_BoxesRunTime$().b(this.eB, x$0.eB)) && $m_sr_BoxesRunTime$().b(this.eC, x$0.eC)) && $m_sr_BoxesRunTime$().b(this.eD, x$0.eD)) && $m_sr_BoxesRunTime$().b(this.eE, x$0.eE)) && $m_sr_BoxesRunTime$().b(this.eF, x$0.eF))));
});
$p.D = (function() {
  return "Tuple6";
});
$p.m = (function() {
  return (((((((((((("(" + this.fr) + ",") + this.eB) + ",") + this.eC) + ",") + this.eD) + ",") + this.eE) + ",") + this.eF) + ")");
});
function $isArrayOf_T6(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ar)));
}
var $d_T6 = new $TypeData().i($c_T6, "scala.Tuple6", ({
  ar: 1,
  b: 1,
  c: 1,
  bX: 1,
  a: 1
}));
/** @constructor */
function $c_T7(_1, _2, _3, _4, _5, _6, _7) {
  this.fs = null;
  this.eG = null;
  this.eH = null;
  this.eI = null;
  this.eJ = null;
  this.eK = null;
  this.eL = null;
  this.fs = _1;
  this.eG = _2;
  this.eH = _3;
  this.eI = _4;
  this.eJ = _5;
  this.eK = _6;
  this.eL = _7;
}
$p = $c_T7.prototype = new $h_O();
$p.constructor = $c_T7;
/** @constructor */
function $h_T7() {
}
$h_T7.prototype = $p;
$p.F = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 7;
});
$p.j = (function(n) {
  return $f_s_Product7__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().P(this, (-1050932777), true);
});
$p.q = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T7) && (((((($m_sr_BoxesRunTime$().b(this.fs, x$0.fs) && $m_sr_BoxesRunTime$().b(this.eG, x$0.eG)) && $m_sr_BoxesRunTime$().b(this.eH, x$0.eH)) && $m_sr_BoxesRunTime$().b(this.eI, x$0.eI)) && $m_sr_BoxesRunTime$().b(this.eJ, x$0.eJ)) && $m_sr_BoxesRunTime$().b(this.eK, x$0.eK)) && $m_sr_BoxesRunTime$().b(this.eL, x$0.eL))));
});
$p.D = (function() {
  return "Tuple7";
});
$p.m = (function() {
  return (((((((((((((("(" + this.fs) + ",") + this.eG) + ",") + this.eH) + ",") + this.eI) + ",") + this.eJ) + ",") + this.eK) + ",") + this.eL) + ")");
});
function $isArrayOf_T7(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.as)));
}
var $d_T7 = new $TypeData().i($c_T7, "scala.Tuple7", ({
  as: 1,
  b: 1,
  c: 1,
  bY: 1,
  a: 1
}));
/** @constructor */
function $c_T8(_1, _2, _3, _4, _5, _6, _7, _8) {
  this.ft = null;
  this.eM = null;
  this.eN = null;
  this.eO = null;
  this.eP = null;
  this.eQ = null;
  this.eR = null;
  this.eS = null;
  this.ft = _1;
  this.eM = _2;
  this.eN = _3;
  this.eO = _4;
  this.eP = _5;
  this.eQ = _6;
  this.eR = _7;
  this.eS = _8;
}
$p = $c_T8.prototype = new $h_O();
$p.constructor = $c_T8;
/** @constructor */
function $h_T8() {
}
$h_T8.prototype = $p;
$p.F = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 8;
});
$p.j = (function(n) {
  return $f_s_Product8__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().P(this, 1998822530, true);
});
$p.q = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T8) && ((((((($m_sr_BoxesRunTime$().b(this.ft, x$0.ft) && $m_sr_BoxesRunTime$().b(this.eM, x$0.eM)) && $m_sr_BoxesRunTime$().b(this.eN, x$0.eN)) && $m_sr_BoxesRunTime$().b(this.eO, x$0.eO)) && $m_sr_BoxesRunTime$().b(this.eP, x$0.eP)) && $m_sr_BoxesRunTime$().b(this.eQ, x$0.eQ)) && $m_sr_BoxesRunTime$().b(this.eR, x$0.eR)) && $m_sr_BoxesRunTime$().b(this.eS, x$0.eS))));
});
$p.D = (function() {
  return "Tuple8";
});
$p.m = (function() {
  return (((((((((((((((("(" + this.ft) + ",") + this.eM) + ",") + this.eN) + ",") + this.eO) + ",") + this.eP) + ",") + this.eQ) + ",") + this.eR) + ",") + this.eS) + ")");
});
function $isArrayOf_T8(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.at)));
}
var $d_T8 = new $TypeData().i($c_T8, "scala.Tuple8", ({
  at: 1,
  b: 1,
  c: 1,
  bZ: 1,
  a: 1
}));
/** @constructor */
function $c_T9(_1, _2, _3, _4, _5, _6, _7, _8, _9) {
  this.fu = null;
  this.eT = null;
  this.eU = null;
  this.eV = null;
  this.eW = null;
  this.eX = null;
  this.eY = null;
  this.eZ = null;
  this.f0 = null;
  this.fu = _1;
  this.eT = _2;
  this.eU = _3;
  this.eV = _4;
  this.eW = _5;
  this.eX = _6;
  this.eY = _7;
  this.eZ = _8;
  this.f0 = _9;
}
$p = $c_T9.prototype = new $h_O();
$p.constructor = $c_T9;
/** @constructor */
function $h_T9() {
}
$h_T9.prototype = $p;
$p.F = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 9;
});
$p.j = (function(n) {
  return $f_s_Product9__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().P(this, (-1807911176), true);
});
$p.q = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T9) && (((((((($m_sr_BoxesRunTime$().b(this.fu, x$0.fu) && $m_sr_BoxesRunTime$().b(this.eT, x$0.eT)) && $m_sr_BoxesRunTime$().b(this.eU, x$0.eU)) && $m_sr_BoxesRunTime$().b(this.eV, x$0.eV)) && $m_sr_BoxesRunTime$().b(this.eW, x$0.eW)) && $m_sr_BoxesRunTime$().b(this.eX, x$0.eX)) && $m_sr_BoxesRunTime$().b(this.eY, x$0.eY)) && $m_sr_BoxesRunTime$().b(this.eZ, x$0.eZ)) && $m_sr_BoxesRunTime$().b(this.f0, x$0.f0))));
});
$p.D = (function() {
  return "Tuple9";
});
$p.m = (function() {
  return (((((((((((((((((("(" + this.fu) + ",") + this.eT) + ",") + this.eU) + ",") + this.eV) + ",") + this.eW) + ",") + this.eX) + ",") + this.eY) + ",") + this.eZ) + ",") + this.f0) + ")");
});
function $isArrayOf_T9(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.au)));
}
var $d_T9 = new $TypeData().i($c_T9, "scala.Tuple9", ({
  au: 1,
  b: 1,
  c: 1,
  c0: 1,
  a: 1
}));
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.fR() + "("), ", ", ")");
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
$p.O = (function() {
  return false;
});
$p.nX = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
});
$p.al = (function() {
  return 0;
});
$p.H = (function() {
  this.nX();
});
$p.hM = (function(from, until) {
  return this;
});
var $d_sc_Iterator$$anon$19 = new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  ca: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1
}));
function $p_sc_Iterator$ConcatIterator__merge$1__V($thiz) {
  while (true) {
    if (($thiz.am instanceof $c_sc_Iterator$ConcatIterator)) {
      var c = $thiz.am;
      $thiz.am = c.am;
      $thiz.bd = c.bd;
      if ((c.ax !== null)) {
        if (($thiz.aw === null)) {
          $thiz.aw = c.aw;
        }
        var x$proxy10 = c.aw;
        if ((x$proxy10 === null)) {
          $m_sr_Scala3RunTime$().hI();
        }
        x$proxy10.g0 = $thiz.ax;
        $thiz.ax = c.ax;
      }
    } else {
      return (void 0);
    }
  }
}
function $p_sc_Iterator$ConcatIterator__advance$1__Z($thiz) {
  while (true) {
    if (($thiz.ax === null)) {
      $thiz.am = null;
      $thiz.aw = null;
      return false;
    } else {
      $thiz.am = $thiz.ax.n6();
      if (($thiz.aw === $thiz.ax)) {
        var x$proxy12 = $thiz.aw;
        if ((x$proxy12 === null)) {
          $m_sr_Scala3RunTime$().hI();
        }
        $thiz.aw = x$proxy12.g0;
      }
      $thiz.ax = $thiz.ax.g0;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.bd) {
        return true;
      } else {
        if ((!(($thiz.am !== null) && $thiz.am.O()))) {
          continue;
        }
        $thiz.bd = true;
        return true;
      }
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIterator(from) {
  this.am = null;
  this.ax = null;
  this.aw = null;
  this.bd = false;
  this.am = from;
  this.ax = null;
  this.aw = null;
  this.bd = false;
}
$p = $c_sc_Iterator$ConcatIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$ConcatIterator;
/** @constructor */
function $h_sc_Iterator$ConcatIterator() {
}
$h_sc_Iterator$ConcatIterator.prototype = $p;
$p.O = (function() {
  if (this.bd) {
    return true;
  } else if ((this.am !== null)) {
    if (this.am.O()) {
      this.bd = true;
      return true;
    } else {
      return $p_sc_Iterator$ConcatIterator__advance$1__Z(this);
    }
  } else {
    return false;
  }
});
$p.H = (function() {
  if (this.O()) {
    this.bd = false;
    var x$proxy13 = this.am;
    if ((x$proxy13 === null)) {
      $m_sr_Scala3RunTime$().hI();
    }
    return x$proxy13.H();
  } else {
    return $m_sc_Iterator$().aY.H();
  }
});
$p.mA = (function(that) {
  var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
  if ((this.ax === null)) {
    this.ax = c;
    this.aw = c;
  } else {
    var x$proxy14 = this.aw;
    if ((x$proxy14 === null)) {
      $m_sr_Scala3RunTime$().hI();
    }
    x$proxy14.g0 = c;
    this.aw = c;
  }
  if ((this.am === null)) {
    this.am = $m_sc_Iterator$().aY;
  }
  return this;
});
function $isArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.az)));
}
var $d_sc_Iterator$ConcatIterator = new $TypeData().i($c_sc_Iterator$ConcatIterator, "scala.collection.Iterator$ConcatIterator", ({
  az: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1
}));
function $p_sc_Iterator$SliceIterator__skip__V($thiz) {
  while (($thiz.aZ > 0)) {
    if ($thiz.be.O()) {
      $thiz.be.H();
      $thiz.aZ = (($thiz.aZ - 1) | 0);
    } else {
      $thiz.aZ = 0;
    }
  }
}
function $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I($thiz, lo$1) {
  if (($thiz.ao < 0)) {
    return (-1);
  } else {
    var that = (($thiz.ao - lo$1) | 0);
    return ((that < 0) ? 0 : that);
  }
}
/** @constructor */
function $c_sc_Iterator$SliceIterator(underlying, start, limit) {
  this.be = null;
  this.ao = 0;
  this.aZ = 0;
  this.be = underlying;
  this.ao = limit;
  this.aZ = start;
}
$p = $c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$SliceIterator;
/** @constructor */
function $h_sc_Iterator$SliceIterator() {
}
$h_sc_Iterator$SliceIterator.prototype = $p;
$p.al = (function() {
  var size = this.be.al();
  if ((size < 0)) {
    return (-1);
  } else {
    var that = ((size - this.aZ) | 0);
    var dropSize = ((that < 0) ? 0 : that);
    if ((this.ao < 0)) {
      return dropSize;
    } else {
      var x = this.ao;
      return ((x < dropSize) ? x : dropSize);
    }
  }
});
$p.O = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  return ((this.ao !== 0) && this.be.O());
});
$p.H = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.ao > 0)) {
    this.ao = ((this.ao - 1) | 0);
    return this.be.H();
  } else {
    return ((this.ao < 0) ? this.be.H() : $m_sc_Iterator$().aY.H());
  }
});
$p.hM = (function(from, until) {
  var lo = ((from > 0) ? from : 0);
  if ((until < 0)) {
    var rest = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
  } else if ((until <= lo)) {
    var rest = 0;
  } else if ((this.ao < 0)) {
    var rest = ((until - lo) | 0);
  } else {
    var x = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
    var that = ((until - lo) | 0);
    var rest = ((x < that) ? x : that);
  }
  var sum = ((this.aZ + lo) | 0);
  if ((rest === 0)) {
    return $m_sc_Iterator$().aY;
  } else if ((sum < 0)) {
    this.aZ = 2147483647;
    this.ao = 0;
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => new $c_sc_Iterator$SliceIterator(this.be, ((sum - 2147483647) | 0), rest))));
  } else {
    this.aZ = sum;
    this.ao = rest;
    return this;
  }
});
var $d_sc_Iterator$SliceIterator = new $TypeData().i($c_sc_Iterator$SliceIterator, "scala.collection.Iterator$SliceIterator", ({
  cc: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1
}));
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw new $c_jl_IndexOutOfBoundsException(("" + n));
  }
  var skipped = $thiz.mM(n);
  if (skipped.a0()) {
    throw new $c_jl_IndexOutOfBoundsException(("" + n));
  }
  return skipped.iZ();
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
      if ((((!a$tailLocal1.a0()) && (!b$tailLocal1.a0())) && $m_sr_BoxesRunTime$().b(a$tailLocal1.iZ(), b$tailLocal1.iZ()))) {
        var a$tailLocal1$tmp1 = a$tailLocal1.j5();
        var b$tailLocal1$tmp1 = b$tailLocal1.j5();
        a$tailLocal1 = a$tailLocal1$tmp1;
        b$tailLocal1 = b$tailLocal1$tmp1;
        continue;
      }
      return (a$tailLocal1.a0() && b$tailLocal1.a0());
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
  cr: 1,
  a: 1,
  ay: 1,
  ce: 1,
  ci: 1
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
  this.jC = null;
  this.g2 = 0;
  this.jB = 0;
  this.jC = x$1;
  this.g2 = 0;
  this.jB = x$1.z();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.O = (function() {
  return (this.g2 < this.jB);
});
$p.H = (function() {
  var result = this.jC.j(this.g2);
  this.g2 = ((1 + this.g2) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().i($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  d3: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a6)));
}
var $d_jl_Double = new $TypeData().i(0, "java.lang.Double", ({
  a6: 1,
  m: 1,
  a: 1,
  i: 1,
  g: 1,
  z: 1
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
  m: 1,
  a: 1,
  i: 1,
  g: 1,
  z: 1
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
  bb: 1,
  m: 1,
  a: 1,
  i: 1,
  g: 1,
  z: 1
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
  return $m_RTLong$().lY($thiz, $thizhi);
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a8)));
}
var $d_jl_Long = new $TypeData().i(0, "java.lang.Long", ({
  a8: 1,
  m: 1,
  a: 1,
  i: 1,
  g: 1,
  z: 1
}), ((x) => (x instanceof $Long)));
class $c_jl_NumberFormatException extends $c_jl_IllegalArgumentException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_NumberFormatException = new $TypeData().i($c_jl_NumberFormatException, "java.lang.NumberFormatException", ({
  bg: 1,
  a7: 1,
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
  var str = $m_jl_Character$().oz(ch);
  return ($thiz.indexOf(str) | 0);
}
function $f_T__toString__T($thiz) {
  return $thiz;
}
var $d_T = new $TypeData().i(0, "java.lang.String", ({
  bj: 1,
  a: 1,
  i: 1,
  H: 1,
  g: 1,
  z: 1
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
$p.gA = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.iS = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.fR = (function() {
  return this.fb();
});
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator(xs) {
  this.h3 = null;
  this.aX = 0;
  this.fZ = 0;
  this.h3 = xs;
  this.aX = 0;
  this.fZ = $m_jl_reflect_Array$().iY(this.h3);
}
$p = $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $p;
$p.al = (function() {
  return ((this.fZ - this.aX) | 0);
});
$p.O = (function() {
  return (this.aX < this.fZ);
});
$p.H = (function() {
  if ((this.aX >= $m_jl_reflect_Array$().iY(this.h3))) {
    $m_sc_Iterator$().aY.H();
  }
  var r = $m_sr_ScalaRunTime$().fQ(this.h3, this.aX);
  this.aX = ((1 + this.aX) | 0);
  return r;
});
$p.hD = (function(n) {
  if ((n > 0)) {
    var newPos = ((this.aX + n) | 0);
    if ((newPos < 0)) {
      var $x_1 = this.fZ;
    } else {
      var a = this.fZ;
      var $x_1 = ((a < newPos) ? a : newPos);
    }
    this.aX = $x_1;
  }
  return this;
});
var $d_sc_ArrayOps$ArrayIterator = new $TypeData().i($c_sc_ArrayOps$ArrayIterator, "scala.collection.ArrayOps$ArrayIterator", ({
  c4: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1,
  a: 1
}));
function $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I($thiz, value) {
  return ((value < 0) ? 0 : ((value > $thiz.aC) ? $thiz.aC : value));
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator(self) {
  this.jp = null;
  this.bc = 0;
  this.aC = 0;
  this.jp = self;
  this.bc = 0;
  this.aC = self.L();
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $p;
$p.al = (function() {
  return this.aC;
});
$p.O = (function() {
  return (this.aC > 0);
});
$p.H = (function() {
  if ((this.aC > 0)) {
    var r = this.jp.Z(this.bc);
    this.bc = ((1 + this.bc) | 0);
    this.aC = ((this.aC - 1) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().aY.H();
  }
});
$p.hD = (function(n) {
  if ((n > 0)) {
    this.bc = ((this.bc + n) | 0);
    var b = ((this.aC - n) | 0);
    this.aC = ((b < 0) ? 0 : b);
  }
  return this;
});
$p.hM = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.aC = ((b < 0) ? 0 : b);
  this.bc = ((this.bc + formatFrom) | 0);
  return this;
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  c8: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1,
  a: 1
}));
function $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($thiz) {
  if ((!$thiz.jt)) {
    $thiz.js = new $c_sci_ArraySeq$ofRef(new ($d_sr_Nothing$.r().C)(0));
    $thiz.jt = true;
  }
  return $thiz.js;
}
/** @constructor */
function $c_sci_ArraySeq$() {
  this.js = null;
  this.jt = false;
}
$p = $c_sci_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_sci_ArraySeq$;
/** @constructor */
function $h_sci_ArraySeq$() {
}
$h_sci_ArraySeq$.prototype = $p;
var $d_sci_ArraySeq$ = new $TypeData().i($c_sci_ArraySeq$, "scala.collection.immutable.ArraySeq$", ({
  cn: 1,
  a: 1,
  ax: 1,
  av: 1,
  aw: 1,
  aA: 1
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
  this.jv = null;
  $n_scm_ArraySeq$ = this;
  this.jv = new $c_scm_ArraySeq$ofRef(new $ac_O(0));
}
$p = $c_scm_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_scm_ArraySeq$;
/** @constructor */
function $h_scm_ArraySeq$() {
}
$h_scm_ArraySeq$.prototype = $p;
var $d_scm_ArraySeq$ = new $TypeData().i($c_scm_ArraySeq$, "scala.collection.mutable.ArraySeq$", ({
  cu: 1,
  a: 1,
  ax: 1,
  av: 1,
  aw: 1,
  aA: 1
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
$p.F = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.x = (function() {
  return 924202651;
});
$p.z = (function() {
  return 0;
});
$p.D = (function() {
  return "EmptyTuple";
});
$p.j = (function(n) {
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
$p.m = (function() {
  return "()";
});
var $d_T$package$EmptyTuple$ = new $TypeData().i($c_T$package$EmptyTuple$, "scala.Tuple$package$EmptyTuple$", ({
  c1: 1,
  b: 1,
  c: 1,
  a: 1,
  cA: 1,
  cB: 1,
  cC: 1
}));
var $n_T$package$EmptyTuple$;
function $m_T$package$EmptyTuple$() {
  if ((!$n_T$package$EmptyTuple$)) {
    $n_T$package$EmptyTuple$ = new $c_T$package$EmptyTuple$();
  }
  return $n_T$package$EmptyTuple$;
}
function $f_sc_View__toString__T($thiz) {
  return ($thiz.fb() + "(<not computed>)");
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
    this.aN = null;
    this.aN = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  hE() {
    return $dp_toString__T(this.aN);
  }
  D() {
    return "JavaScriptException";
  }
  z() {
    return 1;
  }
  j(x$1) {
    return ((x$1 === 0) ? this.aN : $m_sr_Statics$().nd(x$1));
  }
  F() {
    return new $c_sr_ScalaRunTime$$anon$1(this);
  }
  x() {
    return $m_s_util_hashing_MurmurHash3$().P(this, 1744042595, true);
  }
  q(x$1) {
    return ((this === x$1) || ((x$1 instanceof $c_sjs_js_JavaScriptException) && $m_sr_BoxesRunTime$().b(this.aN, x$1.aN)));
  }
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aM)));
}
var $d_sjs_js_JavaScriptException = new $TypeData().i($c_sjs_js_JavaScriptException, "scala.scalajs.js.JavaScriptException", ({
  aM: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1,
  c: 1,
  b: 1
}));
function $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V($thiz, line) {
  if (((typeof console) !== "undefined")) {
    if (($thiz.jf && (!(!(!(!console.error)))))) {
      console.error(line);
    } else {
      console.log(line);
    }
  }
}
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream(isErr) {
  this.jf = false;
  this.fX = null;
  this.jf = isErr;
  $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__(this, new $c_jl_JSConsoleBasedPrintStream$DummyOutputStream(), false, null);
  this.fX = "";
}
$p = $c_jl_JSConsoleBasedPrintStream.prototype = new $h_Ljava_io_PrintStream();
$p.constructor = $c_jl_JSConsoleBasedPrintStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream() {
}
$h_jl_JSConsoleBasedPrintStream.prototype = $p;
$p.ng = (function(s) {
  var rest = s;
  while ((rest !== "")) {
    var this$1 = rest;
    var nlPos = (this$1.indexOf("\n") | 0);
    if ((nlPos < 0)) {
      this.fX = (("" + this.fX) + rest);
      rest = "";
    } else {
      var $x_1 = this.fX;
      var this$2 = rest;
      $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V(this, (("" + $x_1) + this$2.substring(0, nlPos)));
      this.fX = "";
      var this$3 = rest;
      var beginIndex = ((1 + nlPos) | 0);
      rest = this$3.substring(beginIndex);
    }
  }
});
var $d_jl_JSConsoleBasedPrintStream = new $TypeData().i($c_jl_JSConsoleBasedPrintStream, "java.lang.JSConsoleBasedPrintStream", ({
  bd: 1,
  b1: 1,
  b0: 1,
  a2: 1,
  a0: 1,
  a4: 1,
  a1: 1,
  a3: 1
}));
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  var s$tailLocal1 = s;
  var n$tailLocal1 = n;
  while (true) {
    if (((n$tailLocal1 <= 0) || s$tailLocal1.a0())) {
      return s$tailLocal1;
    } else {
      var n$tailLocal1$tmp1 = ((n$tailLocal1 - 1) | 0);
      var s$tailLocal1$tmp1 = s$tailLocal1.j5();
      n$tailLocal1 = n$tailLocal1$tmp1;
      s$tailLocal1 = s$tailLocal1$tmp1;
    }
  }
}
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.hT = null;
}
$p = $c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$p.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $p;
$p.m = (function() {
  return this.hT;
});
$p.q = (function(that) {
  return (this === that);
});
$p.x = (function() {
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
  this.hT = null;
  this.hT = "Object";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ObjectManifest$, "scala.reflect.ManifestFactory$ObjectManifest$", ({
  cJ: 1,
  cK: 1,
  cI: 1,
  a: 1,
  cL: 1,
  cF: 1,
  b: 1,
  cG: 1,
  cH: 1
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
      if (o.iV($thiz)) {
        return $thiz.hL(o);
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
$p.a0 = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.hL = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.iV = (function(that) {
  return true;
});
$p.q = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().lX(this);
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
  return (!(!((obj && obj.$classData) && obj.$classData.n.o)));
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.o)));
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.J)));
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.J)));
}
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.g1 = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.g1 = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $p;
$p.Z = (function(idx) {
  return this.g1.Z(idx);
});
$p.L = (function() {
  return this.g1.L();
});
$p.a0 = (function() {
  return this.g1.a0();
});
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.g1 = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$p.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $p;
$p.f9 = (function(len) {
  var x = this.L();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.al = (function() {
  return this.L();
});
$p.a7 = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this);
});
$p.fb = (function() {
  return "IndexedSeqView";
});
var $d_sc_IndexedSeqView$Id = new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  c7: 1,
  cg: 1,
  c2: 1,
  c3: 1,
  v: 1,
  d: 1,
  e: 1,
  r: 1,
  q: 1,
  p: 1,
  a: 1,
  ck: 1,
  t: 1,
  cf: 1,
  w: 1,
  c6: 1
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
  return ($is_sci_IndexedSeq(that) ? ($thiz.L() === that.L()) : true);
}
function $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z($thiz, o) {
  if ($is_sci_IndexedSeq(o)) {
    if (($thiz === o)) {
      return true;
    } else {
      var length = $thiz.L();
      var equal = (length === o.L());
      if (equal) {
        var index = 0;
        var a = $thiz.iU();
        var b = o.iU();
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
          equal = $m_sr_BoxesRunTime$().b($thiz.Z(index), o.Z(index));
          index = ((1 + index) | 0);
        }
        if (((index < length) && equal)) {
          var thisIt = $thiz.a7().hD(index);
          var thatIt = o.a7().hD(index);
          while ((equal && thisIt.O())) {
            equal = $m_sr_BoxesRunTime$().b(thisIt.H(), thatIt.H());
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
/** @constructor */
function $c_sjsr_WrappedVarArgs(array) {
  this.h4 = null;
  this.h4 = array;
}
$p = $c_sjsr_WrappedVarArgs.prototype = new $h_O();
$p.constructor = $c_sjsr_WrappedVarArgs;
/** @constructor */
function $h_sjsr_WrappedVarArgs() {
}
$h_sjsr_WrappedVarArgs.prototype = $p;
$p.iV = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.hL = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.iU = (function() {
  return $m_sci_IndexedSeqDefaults$().ju;
});
$p.a7 = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.f9 = (function(len) {
  var x = this.L();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.al = (function() {
  return this.L();
});
$p.q = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().lX(this);
});
$p.m = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.a0 = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.gA = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.iS = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.L = (function() {
  return (this.h4.length | 0);
});
$p.Z = (function(idx) {
  return this.h4[idx];
});
$p.fR = (function() {
  return "WrappedVarArgs";
});
$p.h = (function(v1) {
  return this.Z((v1 | 0));
});
function $isArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aN)));
}
var $d_sjsr_WrappedVarArgs = new $TypeData().i($c_sjsr_WrappedVarArgs, "scala.scalajs.runtime.WrappedVarArgs", ({
  aN: 1,
  F: 1,
  d: 1,
  e: 1,
  r: 1,
  q: 1,
  p: 1,
  K: 1,
  h: 1,
  u: 1,
  t: 1,
  b: 1,
  l: 1,
  M: 1,
  L: 1,
  w: 1,
  o: 1,
  aD: 1,
  N: 1,
  C: 1,
  D: 1,
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
$p.f9 = (function(len) {
  var x = this.b0.d.length;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.al = (function() {
  return this.b0.d.length;
});
$p.fb = (function() {
  return "IndexedSeq";
});
$p.iV = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.hL = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.fR = (function() {
  return "ArraySeq";
});
$p.iU = (function() {
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
$p.f9 = (function(len) {
  var x = this.aD.d.length;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.al = (function() {
  return this.aD.d.length;
});
$p.fb = (function() {
  return "IndexedSeq";
});
$p.fR = (function() {
  return "ArraySeq";
});
$p.q = (function(other) {
  if ((other instanceof $c_scm_ArraySeq)) {
    if ((this.aD.d.length !== other.aD.d.length)) {
      return false;
    }
  }
  return $f_sc_Seq__equals__O__Z(this, other);
});
function $isArrayOf_scm_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aF)));
}
/** @constructor */
function $c_sci_ArraySeq$ofRef(unsafeArray) {
  this.b0 = null;
  this.b0 = unsafeArray;
}
$p = $c_sci_ArraySeq$ofRef.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofRef;
/** @constructor */
function $h_sci_ArraySeq$ofRef() {
}
$h_sci_ArraySeq$ofRef.prototype = $p;
$p.L = (function() {
  return this.b0.d.length;
});
$p.Z = (function(i) {
  return this.b0.d[i];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.ln(this.b0, this$1.fx);
});
$p.q = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofRef) ? $m_s_Array$().lt(this.b0, that.b0) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.a7 = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.b0);
});
$p.h = (function(v1) {
  return this.Z((v1 | 0));
});
function $isArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aC)));
}
var $d_sci_ArraySeq$ofRef = new $TypeData().i($c_sci_ArraySeq$ofRef, "scala.collection.immutable.ArraySeq$ofRef", ({
  aC: 1,
  cm: 1,
  aB: 1,
  B: 1,
  v: 1,
  d: 1,
  e: 1,
  r: 1,
  q: 1,
  p: 1,
  h: 1,
  u: 1,
  t: 1,
  b: 1,
  l: 1,
  K: 1,
  M: 1,
  L: 1,
  w: 1,
  o: 1,
  aD: 1,
  F: 1,
  C: 1,
  D: 1,
  N: 1,
  c5: 1,
  a: 1
}));
function $p_sci_List__loop$2__I__I__sci_List__I($thiz, len$1, i, xs) {
  var xs$tailLocal1 = xs;
  var i$tailLocal1 = i;
  while (true) {
    return ((i$tailLocal1 === len$1) ? (xs$tailLocal1.a0() ? 0 : 1) : (xs$tailLocal1.a0() ? (-1) : xs$tailLocal1.gX()));
  }
}
function $p_sci_List__listEq$1__sci_List__sci_List__Z($thiz, a, b) {
  var b$tailLocal1 = b;
  var a$tailLocal1 = a;
  while (true) {
    if ((a$tailLocal1 === b$tailLocal1)) {
      return true;
    } else {
      var aEmpty = a$tailLocal1.a0();
      var bEmpty = b$tailLocal1.a0();
      if ((!(aEmpty || bEmpty))) {
        a$tailLocal1.hF();
      }
      if (false) {
        a$tailLocal1.gX();
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
$p.Z = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.hL = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.fb = (function() {
  return "LinearSeq";
});
$p.a0 = (function() {
  return (this === $m_sci_Nil$());
});
$p.gA = (function(f) {
  var these = this;
  while ((!these.a0())) {
    f.h(these.hF());
    these.gX();
  }
});
$p.L = (function() {
  var these = this;
  var len = 0;
  while ((!these.a0())) {
    len = ((1 + len) | 0);
    these.gX();
  }
  return len;
});
$p.f9 = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__I__sci_List__I(this, len, 0, this));
});
$p.fR = (function() {
  return "List";
});
$p.q = (function(o) {
  return ((o instanceof $c_sci_List) ? $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, o) : $f_sc_Seq__equals__O__Z(this, o));
});
$p.mM = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$p.h = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aE)));
}
/** @constructor */
function $c_scm_ArraySeq$ofRef(array) {
  this.aD = null;
  this.aD = array;
}
$p = $c_scm_ArraySeq$ofRef.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofRef;
/** @constructor */
function $h_scm_ArraySeq$ofRef() {
}
$h_scm_ArraySeq$ofRef.prototype = $p;
$p.L = (function() {
  return this.aD.d.length;
});
$p.Z = (function(index) {
  return this.aD.d[index];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.ln(this.aD, this$1.fx);
});
$p.q = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofRef) ? $m_s_Array$().lt(this.aD, that.aD) : $c_scm_ArraySeq.prototype.q.call(this, that));
});
$p.a7 = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.aD);
});
$p.h = (function(v1) {
  return this.Z((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aG)));
}
var $d_scm_ArraySeq$ofRef = new $TypeData().i($c_scm_ArraySeq$ofRef, "scala.collection.mutable.ArraySeq$ofRef", ({
  aG: 1,
  aF: 1,
  O: 1,
  B: 1,
  v: 1,
  d: 1,
  e: 1,
  r: 1,
  q: 1,
  p: 1,
  h: 1,
  u: 1,
  t: 1,
  b: 1,
  l: 1,
  S: 1,
  y: 1,
  P: 1,
  U: 1,
  T: 1,
  w: 1,
  o: 1,
  R: 1,
  Q: 1,
  C: 1,
  D: 1,
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
$p.F = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 0;
});
$p.D = (function() {
  return "Nil";
});
$p.j = (function(n) {
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
$p.hF = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list");
});
$p.gX = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$p.al = (function() {
  return 0;
});
$p.a7 = (function() {
  return $m_sc_Iterator$().aY;
});
$p.iZ = (function() {
  this.hF();
});
$p.j5 = (function() {
  this.gX();
});
var $d_sci_Nil$ = new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  cs: 1,
  aE: 1,
  aB: 1,
  B: 1,
  v: 1,
  d: 1,
  e: 1,
  r: 1,
  q: 1,
  p: 1,
  h: 1,
  u: 1,
  t: 1,
  b: 1,
  l: 1,
  K: 1,
  M: 1,
  L: 1,
  cd: 1,
  J: 1,
  cq: 1,
  cp: 1,
  C: 1,
  D: 1,
  ch: 1,
  N: 1,
  a: 1,
  cl: 1,
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
  $thiz.aL = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, new $c_jl_StringBuilder());
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.aL = null;
}
$p = $c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
$h_scm_StringBuilder.prototype = $p;
$p.a7 = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.f9 = (function(len) {
  var x = this.aL.L();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.fb = (function() {
  return "IndexedSeq";
});
$p.L = (function() {
  return this.aL.L();
});
$p.al = (function() {
  return this.aL.L();
});
$p.m = (function() {
  return this.aL.a9;
});
$p.a0 = (function() {
  return (this.aL.L() === 0);
});
$p.Z = (function(i) {
  return $bC(this.aL.lp(i));
});
$p.h = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.aL.lp(i));
});
var $d_scm_StringBuilder = new $TypeData().i($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  cz: 1,
  O: 1,
  B: 1,
  v: 1,
  d: 1,
  e: 1,
  r: 1,
  q: 1,
  p: 1,
  h: 1,
  u: 1,
  t: 1,
  b: 1,
  l: 1,
  S: 1,
  y: 1,
  P: 1,
  U: 1,
  T: 1,
  aI: 1,
  aJ: 1,
  aH: 1,
  cx: 1,
  w: 1,
  o: 1,
  R: 1,
  Q: 1,
  H: 1,
  a: 1
}));
/** @constructor */
function $c_sjs_js_WrappedArray(array) {
  this.fw = null;
  this.fw = array;
}
$p = $c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
}
$h_sjs_js_WrappedArray.prototype = $p;
$p.fb = (function() {
  return "IndexedSeq";
});
$p.a7 = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.f9 = (function(len) {
  var x = (this.fw.length | 0);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.Z = (function(index) {
  return this.fw[index];
});
$p.L = (function() {
  return (this.fw.length | 0);
});
$p.al = (function() {
  return (this.fw.length | 0);
});
$p.fR = (function() {
  return "WrappedArray";
});
$p.h = (function(v1) {
  var index = (v1 | 0);
  return this.fw[index];
});
var $d_sjs_js_WrappedArray = new $TypeData().i($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
  dd: 1,
  ct: 1,
  O: 1,
  B: 1,
  v: 1,
  d: 1,
  e: 1,
  r: 1,
  q: 1,
  p: 1,
  h: 1,
  u: 1,
  t: 1,
  b: 1,
  l: 1,
  S: 1,
  y: 1,
  P: 1,
  U: 1,
  T: 1,
  aI: 1,
  aJ: 1,
  cy: 1,
  cv: 1,
  D: 1,
  C: 1,
  Q: 1,
  w: 1,
  o: 1,
  R: 1,
  cw: 1,
  aH: 1,
  a: 1
}));
$s_Lsketches_rooms_canvases_roomsCanvases__main__AT__V(new ($d_T.r().C)([]));
