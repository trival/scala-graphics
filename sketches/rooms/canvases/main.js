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
  return (arg0.$classData.Z ? arg0.aO() : $objectClone(arg0));
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
        return null.pz();
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
        return instance.o(x0);
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__equals__O__Z(instance.l, instance.h, x0);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__equals__O__Z(instance.c, x0);
      } else {
        return $c_O.prototype.o.call(instance, x0);
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
    return instance.pA(x0);
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
$p.o = (function(that) {
  return (this === that);
});
$p.m = (function() {
  var i = this.r();
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
$p.aC = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.b, srcPos, dest.b, destPos, length);
});
$p.aO = (function() {
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
$p.aC = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.b, srcPos, dest.b, destPos, length);
});
$p.aO = (function() {
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
$p.aC = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aO = (function() {
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
$p.aC = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aO = (function() {
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
$p.aC = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aO = (function() {
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
$p.aC = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aO = (function() {
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
$p.aC = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray((srcPos << 1), (((srcPos + length) | 0) << 1)), (destPos << 1));
});
$p.aO = (function() {
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
$p.aC = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aO = (function() {
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
$p.aC = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aO = (function() {
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
  $p.aC = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.b, srcPos, dest.b, destPos, length);
  });
  $p.aO = (function() {
    return new ArrayClass(this.b.slice());
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
  this.ju = null;
  this.mx = null;
  $n_jl_System$Streams$ = this;
  this.ju = new $c_jl_JSConsoleBasedPrintStream(false);
  this.mx = new $c_jl_JSConsoleBasedPrintStream(true);
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
  this.i1 = null;
  this.jv = null;
  $n_jl_System$SystemProperties$ = this;
  this.i1 = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
  this.jv = null;
}
$p = $c_jl_System$SystemProperties$.prototype = new $h_O();
$p.constructor = $c_jl_System$SystemProperties$;
/** @constructor */
function $h_jl_System$SystemProperties$() {
}
$h_jl_System$SystemProperties$.prototype = $p;
$p.lW = (function(key, default$1) {
  if ((this.i1 !== null)) {
    var dict = this.i1;
    return ((!(!$m_jl_Utils$Cache$().jx.call(dict, key))) ? dict[key] : default$1);
  } else {
    return this.jv.lW(key, default$1);
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
  this.jx = null;
  $n_jl_Utils$Cache$ = this;
  this.jx = Object.prototype.hasOwnProperty;
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
$p.gP = (function(array) {
  return ((array instanceof $ac_O) ? array.b.length : ((array instanceof $ac_Z) ? array.b.length : ((array instanceof $ac_C) ? array.b.length : ((array instanceof $ac_B) ? array.b.length : ((array instanceof $ac_S) ? array.b.length : ((array instanceof $ac_I) ? array.b.length : ((array instanceof $ac_J) ? ((array.b.length >>> 1) | 0) : ((array instanceof $ac_F) ? array.b.length : ((array instanceof $ac_D) ? array.b.length : $p_jl_reflect_Array$__mismatch__O__E(this, array))))))))));
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
$p.n7 = (function(a, key) {
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
  return $m_RTLong$().oS(alo, ahi, blo, bhi);
}
function $s_RTLong__remainder__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().oR(alo, ahi, blo, bhi);
}
function $s_RTLong__divideUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().no(alo, ahi, blo, bhi);
}
function $s_RTLong__divide__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().nn(alo, ahi, blo, bhi);
}
function $s_RTLong__fromDoubleBits__D__O__J(value, fpBitsDataView) {
  fpBitsDataView.setFloat64(0, value, true);
  var lo = (fpBitsDataView.getInt32(0, true) | 0);
  var hi = (fpBitsDataView.getInt32(4, true) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__fromDouble__D__J(value) {
  return $m_RTLong$().lT(value);
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
  return $m_RTLong$().mr(lo, hi);
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
$p.mr = (function(lo, hi) {
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
$p.lT = (function(value) {
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
$p.nn = (function(alo, ahi, blo, bhi) {
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
    var $x_1 = this.hV(rlo, rhi, rlo$1, rhi$1, true);
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
$p.no = (function(alo, ahi, blo, bhi) {
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
    return this.hV(alo, ahi, blo, bhi, true);
  }
});
$p.oR = (function(alo, ahi, blo, bhi) {
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
    var $x_1 = this.hV(rlo, rhi, rlo$1, rhi$1, false);
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
$p.oS = (function(alo, ahi, blo, bhi) {
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
    return this.hV(alo, ahi, blo, bhi, false);
  }
});
$p.hV = (function(alo, ahi, blo, bhi, askQuotient) {
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
$p.lQ = (function(xs, ys) {
  if ((xs === ys)) {
    return true;
  }
  if ((xs.b.length !== ys.b.length)) {
    return false;
  }
  var len = xs.b.length;
  var i = 0;
  while ((i < len)) {
    if ((!$m_sr_BoxesRunTime$().c(xs.b[i], ys.b[i]))) {
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
  var it = $thiz.a9();
  while (it.J()) {
    f.f(it.E());
  }
}
function $f_sc_IterableOnceOps__copyToArray__O__I__I__I($thiz, dest, start, n) {
  var it = $thiz.a9();
  var i = start;
  matchResult18: {
    var srclen;
    var x31 = $thiz.al();
    if ((x31 === (-1))) {
      var srclen = $m_jl_reflect_Array$().gP(dest);
      break matchResult18;
    }
    var srclen = x31;
  }
  var destLen = $m_jl_reflect_Array$().gP(dest);
  var limit = ((n < srclen) ? n : srclen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var end = ((start + ((total < 0) ? 0 : total)) | 0);
  while (((i < end) && it.J())) {
    $m_sr_ScalaRunTime$().n1(dest, i, it.E());
    i = ((1 + i) | 0);
  }
  return ((i - start) | 0);
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  return (($thiz.al() === 0) ? (("" + start) + end) : $thiz.j5($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).aU.aj);
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.aU;
  if ((start.length !== 0)) {
    jsb.aj = (("" + jsb.aj) + start);
  }
  var it = $thiz.a9();
  if (it.J()) {
    var obj = it.E();
    jsb.aj = (("" + jsb.aj) + obj);
    while (it.J()) {
      if ((sep.length !== 0)) {
        jsb.aj = (("" + jsb.aj) + sep);
      }
      var obj$1 = it.E();
      jsb.aj = (("" + jsb.aj) + obj$1);
    }
  }
  if ((end.length !== 0)) {
    jsb.aj = (("" + jsb.aj) + end);
  }
  return b;
}
/** @constructor */
function $c_sc_Iterator$ConcatIteratorCell(head, tail) {
  this.jE = null;
  this.ge = null;
  this.jE = head;
  this.ge = tail;
}
$p = $c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$ConcatIteratorCell;
/** @constructor */
function $h_sc_Iterator$ConcatIteratorCell() {
}
$h_sc_Iterator$ConcatIteratorCell.prototype = $p;
$p.nK = (function() {
  return this.jE.gL().a9();
});
var $d_sc_Iterator$ConcatIteratorCell = new $TypeData().i($c_sc_Iterator$ConcatIteratorCell, "scala.collection.Iterator$ConcatIteratorCell", ({
  cc: 1
}));
/** @constructor */
function $c_sc_StringOps$() {
  this.jF = null;
  $n_sc_StringOps$ = this;
  this.jF = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => this.jF));
}
$p = $c_sc_StringOps$.prototype = new $h_O();
$p.constructor = $c_sc_StringOps$;
/** @constructor */
function $h_sc_StringOps$() {
}
$h_sc_StringOps$.prototype = $p;
var $d_sc_StringOps$ = new $TypeData().i($c_sc_StringOps$, "scala.collection.StringOps$", ({
  ck: 1
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
  this.jI = 0;
  $n_sci_IndexedSeqDefaults$ = this;
  try {
    $m_sc_StringOps$();
    var $x_1 = $m_jl_Integer$().nS($m_jl_System$SystemProperties$().lW("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64"), 10, 214748364);
  } catch (e) {
    if (false) {
      var $x_1 = 64;
    } else {
      var $x_1;
      throw e;
    }
  }
  this.jI = $x_1;
}
$p = $c_sci_IndexedSeqDefaults$.prototype = new $h_O();
$p.constructor = $c_sci_IndexedSeqDefaults$;
/** @constructor */
function $h_sci_IndexedSeqDefaults$() {
}
$h_sci_IndexedSeqDefaults$.prototype = $p;
var $d_sci_IndexedSeqDefaults$ = new $TypeData().i($c_sci_IndexedSeqDefaults$, "scala.collection.immutable.IndexedSeqDefaults$", ({
  cp: 1
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
  return ((x === y) || ($is_jl_Number(x) ? this.nv(x, y) : ((x instanceof $Char) ? this.nt(x, y) : ((x === null) ? (y === null) : $dp_equals__O__Z(x, y)))));
});
$p.nv = (function(xn, y) {
  if ($is_jl_Number(y)) {
    return this.nu(xn, y);
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
$p.nu = (function(xn, yn) {
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
      return (false && yn.o(x2));
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
      return (false && yn.o($bL(x3$2_$_lo, x3$2_$_hi)));
    }
  } else {
    return ((xn === null) ? (yn === null) : $dp_equals__O__Z(xn, yn));
  }
});
$p.nt = (function(xc, y) {
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
  cZ: 1
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
$p.n2 = (function() {
  throw new $c_jl_AssertionError("assertion failed");
});
$p.hU = (function() {
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
$p.g6 = (function(xs, idx) {
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
$p.n1 = (function(xs, idx, value) {
  if ((xs instanceof $ac_O)) {
    xs.b[idx] = value;
    return (void 0);
  }
  if ((xs instanceof $ac_I)) {
    xs.b[idx] = (value | 0);
    return (void 0);
  }
  if ((xs instanceof $ac_D)) {
    xs.b[idx] = (+value);
    return (void 0);
  }
  if ((xs instanceof $ac_J)) {
    var $x_1 = $uJ(value);
    var $x_2 = xs.b;
    var $x_3 = (idx << 1);
    $x_2[$x_3] = $x_1.l;
    $x_2[(($x_3 + 1) | 0)] = $x_1.h;
    return (void 0);
  }
  if ((xs instanceof $ac_F)) {
    xs.b[idx] = Math.fround(value);
    return (void 0);
  }
  if ((xs instanceof $ac_C)) {
    xs.b[idx] = $uC(value);
    return (void 0);
  }
  if ((xs instanceof $ac_B)) {
    xs.b[idx] = (value | 0);
    return (void 0);
  }
  if ((xs instanceof $ac_S)) {
    xs.b[idx] = (value | 0);
    return (void 0);
  }
  if ((xs instanceof $ac_Z)) {
    xs.b[idx] = (!(!value));
    return (void 0);
  }
  if ((xs === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  throw new $c_s_MatchError(xs);
});
$p.lz = (function(x) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(x.C(), (x.B() + "("), ",", ")");
});
$p.au = (function(xs) {
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
$p.s = (function(hash, data) {
  var h = this.hS(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.hS = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.ar = (function(hash, length) {
  return this.n3((hash ^ length));
});
$p.n3 = (function(h0) {
  var h = h0;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.nX = (function(lv_$_lo, lv_$_hi) {
  return ((lv_$_hi === (lv_$_lo >> 31)) ? lv_$_lo : (lv_$_lo ^ lv_$_hi));
});
$p.gM = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var $x_1 = $m_RTLong$().lT(dv);
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
$p.a1 = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    return this.gM((+x));
  } else if ((x instanceof $Long)) {
    var $x_1 = $uJ(x);
    return this.nX($x_1.l, $x_1.h);
  } else {
    return $dp_hashCode__I(x);
  }
});
$p.nQ = (function(n) {
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
    return new $c_T2(x, self.ft);
  }
  if ((self instanceof $c_T2)) {
    return new $c_T3(x, self.aa, self.am);
  }
  if ((self instanceof $c_T3)) {
    return new $c_T4(x, self.b4, self.aS, self.aT);
  }
  if ((self instanceof $c_T4)) {
    return new $c_T5(x, self.eG, self.bf, self.bg, self.bh);
  }
  if ((self instanceof $c_T5)) {
    return new $c_T6(x, self.fH, self.eH, self.eI, self.eJ, self.eK);
  }
  if ((self instanceof $c_T6)) {
    return new $c_T7(x, self.fI, self.eL, self.eM, self.eN, self.eO, self.eP);
  }
  if ((self instanceof $c_T7)) {
    return new $c_T8(x, self.fJ, self.eQ, self.eR, self.eS, self.eT, self.eU, self.eV);
  }
  if ((self instanceof $c_T8)) {
    return new $c_T9(x, self.fK, self.eW, self.eX, self.eY, self.eZ, self.f0, self.f1, self.f2);
  }
  if ((self instanceof $c_T9)) {
    return new $c_T10(x, self.fL, self.f3, self.f4, self.f5, self.f6, self.f7, self.f8, self.f9, self.fa);
  }
  if ((self instanceof $c_T10)) {
    return new $c_T11(x, self.fu, self.bx, self.by, self.bz, self.bA, self.bB, self.bC, self.bD, self.bE, self.bw);
  }
  if ((self instanceof $c_T11)) {
    return new $c_T12(x, self.fv, self.bH, self.bI, self.bJ, self.bK, self.bL, self.bM, self.bN, self.bO, self.bF, self.bG);
  }
  if ((self instanceof $c_T12)) {
    return new $c_T13(x, self.fw, self.bS, self.bT, self.bU, self.bV, self.bW, self.bX, self.bY, self.bZ, self.bP, self.bQ, self.bR);
  }
  if ((self instanceof $c_T13)) {
    return new $c_T14(x, self.fx, self.c4, self.c5, self.c6, self.c7, self.c8, self.c9, self.ca, self.cb, self.c0, self.c1, self.c2, self.c3);
  }
  if ((self instanceof $c_T14)) {
    return new $c_T15(x, self.fy, self.ch, self.ci, self.cj, self.ck, self.cl, self.cm, self.cn, self.co, self.cc, self.cd, self.ce, self.cf, self.cg);
  }
  if ((self instanceof $c_T15)) {
    return new $c_T16(x, self.fz, self.cv, self.cw, self.cx, self.cy, self.cz, self.cA, self.cB, self.cC, self.cp, self.cq, self.cr, self.cs, self.ct, self.cu);
  }
  if ((self instanceof $c_T16)) {
    return new $c_T17(x, self.fA, self.cK, self.cL, self.cM, self.cN, self.cO, self.cP, self.cQ, self.cR, self.cD, self.cE, self.cF, self.cG, self.cH, self.cI, self.cJ);
  }
  if ((self instanceof $c_T17)) {
    return new $c_T18(x, self.fB, self.d0, self.d1, self.d2, self.d3, self.d4, self.d5, self.d6, self.d7, self.cS, self.cT, self.cU, self.cV, self.cW, self.cX, self.cY, self.cZ);
  }
  if ((self instanceof $c_T18)) {
    return new $c_T19(x, self.fC, self.dh, self.di, self.dj, self.dk, self.dl, self.dm, self.dn, self.dp, self.d8, self.d9, self.da, self.db, self.dc, self.dd, self.de, self.df, self.dg);
  }
  if ((self instanceof $c_T19)) {
    return new $c_T20(x, self.fD, self.dA, self.dB, self.dC, self.dD, self.dE, self.dF, self.dG, self.dH, self.dq, self.dr, self.ds, self.dt, self.du, self.dv, self.dw, self.dx, self.dy, self.dz);
  }
  if ((self instanceof $c_T20)) {
    return new $c_T21(x, self.fE, self.dS, self.dU, self.dV, self.dW, self.dX, self.dY, self.dZ, self.e0, self.dI, self.dJ, self.dK, self.dL, self.dM, self.dN, self.dO, self.dP, self.dQ, self.dR, self.dT);
  }
  if ((self instanceof $c_T21)) {
    return new $c_T22(x, self.fF, self.eb, self.ee, self.ef, self.eg, self.eh, self.ei, self.ej, self.ek, self.e1, self.e2, self.e3, self.e4, self.e5, self.e6, self.e7, self.e8, self.e9, self.ea, self.ec, self.ed);
  }
  if ((self instanceof $c_T22)) {
    return new $c_sr_TupleXXL(new $ac_O([x, self.fG, self.ev, self.ez, self.eA, self.eB, self.eC, self.eD, self.eE, self.eF, self.el, self.em, self.en, self.eo, self.ep, self.eq, self.er, self.es, self.et, self.eu, self.ew, self.ex, self.ey]));
  }
  throw new $c_s_MatchError(self);
}
function $p_sr_Tuples$__xxlCons__O__sr_TupleXXL__sr_TupleXXL($thiz, x, xxl) {
  var arr = new $ac_O(((1 + xxl.v()) | 0));
  arr.b[0] = x;
  var src = xxl.a4;
  var length = xxl.v();
  src.aC(0, arr, 1, length);
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
      var $x_1 = new $c_T1(self.am);
      break matchResult34$1;
    }
    if ((self instanceof $c_T3)) {
      var $x_1 = new $c_T2(self.aS, self.aT);
      break matchResult34$1;
    }
    if ((self instanceof $c_T4)) {
      var $x_1 = new $c_T3(self.bf, self.bg, self.bh);
      break matchResult34$1;
    }
    if ((self instanceof $c_T5)) {
      var $x_1 = new $c_T4(self.eH, self.eI, self.eJ, self.eK);
      break matchResult34$1;
    }
    if ((self instanceof $c_T6)) {
      var $x_1 = new $c_T5(self.eL, self.eM, self.eN, self.eO, self.eP);
      break matchResult34$1;
    }
    if ((self instanceof $c_T7)) {
      var $x_1 = new $c_T6(self.eQ, self.eR, self.eS, self.eT, self.eU, self.eV);
      break matchResult34$1;
    }
    if ((self instanceof $c_T8)) {
      var $x_1 = new $c_T7(self.eW, self.eX, self.eY, self.eZ, self.f0, self.f1, self.f2);
      break matchResult34$1;
    }
    if ((self instanceof $c_T9)) {
      var $x_1 = new $c_T8(self.f3, self.f4, self.f5, self.f6, self.f7, self.f8, self.f9, self.fa);
      break matchResult34$1;
    }
    if ((self instanceof $c_T10)) {
      var $x_1 = new $c_T9(self.bx, self.by, self.bz, self.bA, self.bB, self.bC, self.bD, self.bE, self.bw);
      break matchResult34$1;
    }
    if ((self instanceof $c_T11)) {
      var $x_1 = new $c_T10(self.bH, self.bI, self.bJ, self.bK, self.bL, self.bM, self.bN, self.bO, self.bF, self.bG);
      break matchResult34$1;
    }
    if ((self instanceof $c_T12)) {
      var $x_1 = new $c_T11(self.bS, self.bT, self.bU, self.bV, self.bW, self.bX, self.bY, self.bZ, self.bP, self.bQ, self.bR);
      break matchResult34$1;
    }
    if ((self instanceof $c_T13)) {
      var $x_1 = new $c_T12(self.c4, self.c5, self.c6, self.c7, self.c8, self.c9, self.ca, self.cb, self.c0, self.c1, self.c2, self.c3);
      break matchResult34$1;
    }
    if ((self instanceof $c_T14)) {
      var $x_1 = new $c_T13(self.ch, self.ci, self.cj, self.ck, self.cl, self.cm, self.cn, self.co, self.cc, self.cd, self.ce, self.cf, self.cg);
      break matchResult34$1;
    }
    if ((self instanceof $c_T15)) {
      var $x_1 = new $c_T14(self.cv, self.cw, self.cx, self.cy, self.cz, self.cA, self.cB, self.cC, self.cp, self.cq, self.cr, self.cs, self.ct, self.cu);
      break matchResult34$1;
    }
    if ((self instanceof $c_T16)) {
      var $x_1 = new $c_T15(self.cK, self.cL, self.cM, self.cN, self.cO, self.cP, self.cQ, self.cR, self.cD, self.cE, self.cF, self.cG, self.cH, self.cI, self.cJ);
      break matchResult34$1;
    }
    if ((self instanceof $c_T17)) {
      var $x_1 = new $c_T16(self.d0, self.d1, self.d2, self.d3, self.d4, self.d5, self.d6, self.d7, self.cS, self.cT, self.cU, self.cV, self.cW, self.cX, self.cY, self.cZ);
      break matchResult34$1;
    }
    if ((self instanceof $c_T18)) {
      var $x_1 = new $c_T17(self.dh, self.di, self.dj, self.dk, self.dl, self.dm, self.dn, self.dp, self.d8, self.d9, self.da, self.db, self.dc, self.dd, self.de, self.df, self.dg);
      break matchResult34$1;
    }
    if ((self instanceof $c_T19)) {
      var $x_1 = new $c_T18(self.dA, self.dB, self.dC, self.dD, self.dE, self.dF, self.dG, self.dH, self.dq, self.dr, self.ds, self.dt, self.du, self.dv, self.dw, self.dx, self.dy, self.dz);
      break matchResult34$1;
    }
    if ((self instanceof $c_T20)) {
      var $x_1 = new $c_T19(self.dS, self.dU, self.dV, self.dW, self.dX, self.dY, self.dZ, self.e0, self.dI, self.dJ, self.dK, self.dL, self.dM, self.dN, self.dO, self.dP, self.dQ, self.dR, self.dT);
      break matchResult34$1;
    }
    if ((self instanceof $c_T21)) {
      var $x_1 = new $c_T20(self.eb, self.ee, self.ef, self.eg, self.eh, self.ei, self.ej, self.ek, self.e1, self.e2, self.e3, self.e4, self.e5, self.e6, self.e7, self.e8, self.e9, self.ea, self.ec, self.ed);
      break matchResult34$1;
    }
    if ((self instanceof $c_T22)) {
      var $x_1 = new $c_T21(self.ev, self.ez, self.eA, self.eB, self.eC, self.eD, self.eE, self.eF, self.el, self.em, self.en, self.eo, self.ep, self.eq, self.er, self.es, self.et, self.eu, self.ew, self.ex, self.ey);
      break matchResult34$1;
    }
    throw new $c_s_MatchError(self);
  }
  return $x_1;
}
function $p_sr_Tuples$__xxlTail__sr_TupleXXL__s_Product($thiz, xxl) {
  if ((xxl.v() === 23)) {
    var elems = xxl.a4;
    return new $c_T22(elems.b[1], elems.b[2], elems.b[3], elems.b[4], elems.b[5], elems.b[6], elems.b[7], elems.b[8], elems.b[9], elems.b[10], elems.b[11], elems.b[12], elems.b[13], elems.b[14], elems.b[15], elems.b[16], elems.b[17], elems.b[18], elems.b[19], elems.b[20], elems.b[21], elems.b[22]);
  } else {
    var arr$1 = new $ac_O(((xxl.a4.b.length - 1) | 0));
    var src = xxl.a4;
    var length = ((xxl.a4.b.length - 1) | 0);
    src.aC(1, arr$1, 0, length);
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
$p.nC = (function(xs) {
  switch (xs.b.length) {
    case 0: {
      return $m_T$package$EmptyTuple$();
      break;
    }
    case 1: {
      return new $c_T1(xs.b[0]);
      break;
    }
    case 2: {
      return new $c_T2(xs.b[0], xs.b[1]);
      break;
    }
    case 3: {
      return new $c_T3(xs.b[0], xs.b[1], xs.b[2]);
      break;
    }
    case 4: {
      return new $c_T4(xs.b[0], xs.b[1], xs.b[2], xs.b[3]);
      break;
    }
    case 5: {
      return new $c_T5(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4]);
      break;
    }
    case 6: {
      return new $c_T6(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5]);
      break;
    }
    case 7: {
      return new $c_T7(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6]);
      break;
    }
    case 8: {
      return new $c_T8(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7]);
      break;
    }
    case 9: {
      return new $c_T9(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8]);
      break;
    }
    case 10: {
      return new $c_T10(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9]);
      break;
    }
    case 11: {
      return new $c_T11(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10]);
      break;
    }
    case 12: {
      return new $c_T12(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11]);
      break;
    }
    case 13: {
      return new $c_T13(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11], xs.b[12]);
      break;
    }
    case 14: {
      return new $c_T14(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11], xs.b[12], xs.b[13]);
      break;
    }
    case 15: {
      return new $c_T15(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11], xs.b[12], xs.b[13], xs.b[14]);
      break;
    }
    case 16: {
      return new $c_T16(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11], xs.b[12], xs.b[13], xs.b[14], xs.b[15]);
      break;
    }
    case 17: {
      return new $c_T17(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11], xs.b[12], xs.b[13], xs.b[14], xs.b[15], xs.b[16]);
      break;
    }
    case 18: {
      return new $c_T18(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11], xs.b[12], xs.b[13], xs.b[14], xs.b[15], xs.b[16], xs.b[17]);
      break;
    }
    case 19: {
      return new $c_T19(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11], xs.b[12], xs.b[13], xs.b[14], xs.b[15], xs.b[16], xs.b[17], xs.b[18]);
      break;
    }
    case 20: {
      return new $c_T20(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11], xs.b[12], xs.b[13], xs.b[14], xs.b[15], xs.b[16], xs.b[17], xs.b[18], xs.b[19]);
      break;
    }
    case 21: {
      return new $c_T21(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11], xs.b[12], xs.b[13], xs.b[14], xs.b[15], xs.b[16], xs.b[17], xs.b[18], xs.b[19], xs.b[20]);
      break;
    }
    case 22: {
      return new $c_T22(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11], xs.b[12], xs.b[13], xs.b[14], xs.b[15], xs.b[16], xs.b[17], xs.b[18], xs.b[19], xs.b[20], xs.b[21]);
      break;
    }
    default: {
      return new $c_sr_TupleXXL(xs.aO());
    }
  }
});
$p.nD = (function(xs) {
  return ((xs.b.length <= 22) ? this.nC(xs) : new $c_sr_TupleXXL(xs));
});
$p.j9 = (function(x, self) {
  return ((self instanceof $c_sr_TupleXXL) ? $p_sr_Tuples$__xxlCons__O__sr_TupleXXL__sr_TupleXXL(this, x, self) : $p_sr_Tuples$__specialCaseCons__O__s_Product__s_Product(this, x, self));
});
$p.lK = (function(self, that) {
  var selfSize = $m_sr_Tuples$().mq(self);
  if ((selfSize === 0)) {
    return that;
  }
  var thatSize = $m_sr_Tuples$().mq(that);
  if ((thatSize === 0)) {
    return self;
  }
  var arr = new $ac_O(((selfSize + thatSize) | 0));
  if ((self instanceof $c_sr_TupleXXL)) {
    var src = self.a4;
    src.aC(0, arr, 0, selfSize);
  } else {
    self.C().lL(arr, 0, selfSize);
  }
  if ((that instanceof $c_sr_TupleXXL)) {
    var src$1 = that.a4;
    src$1.aC(0, arr, selfSize, thatSize);
  } else {
    that.C().lL(arr, selfSize, thatSize);
  }
  return this.nD(arr);
});
$p.mq = (function(self) {
  if (($m_T$package$EmptyTuple$() === self)) {
    return 0;
  }
  if ((self !== null)) {
    return self.v();
  }
  throw new $c_s_MatchError(self);
});
$p.pc = (function(self) {
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
$p.nJ = (function(this$, o, p) {
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
$p.lZ = (function(this$, elem, from) {
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
$p.mv = (function(this$, that) {
  var b = [];
  var len = (this$.length | 0);
  var i = 0;
  var it = that.a9();
  while (((i < len) && it.J())) {
    b.push(new $c_T2(this$[i], it.E()));
    i = ((1 + i) | 0);
  }
  return b;
});
$p.mw = (function(this$) {
  var len = (this$.length | 0);
  var b = new Array(len);
  var i = 0;
  while ((i < len)) {
    b[i] = new $c_T2(this$[i], i);
    i = ((1 + i) | 0);
  }
  return b;
});
$p.fl = (function(this$, f) {
  var len = (this$.length | 0);
  var i = 0;
  while ((i < len)) {
    f.f(this$[i]);
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
  this.jS = null;
  $n_sjs_js_WrappedDictionary$Cache$ = this;
  this.jS = Object.prototype.hasOwnProperty;
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
$p.p = (function(properties) {
  var result = ({});
  properties.gN(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((pair$2$2) => {
    result[pair$2$2.aa] = pair$2$2.am;
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
function $c_sjsr_Compat$() {
}
$p = $c_sjsr_Compat$.prototype = new $h_O();
$p.constructor = $c_sjsr_Compat$;
/** @constructor */
function $h_sjsr_Compat$() {
}
$h_sjsr_Compat$.prototype = $p;
$p.at = (function(seq) {
  if ((seq instanceof $c_sjsr_WrappedVarArgs)) {
    return seq.hg;
  } else {
    var result = [];
    seq.gN(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2$2) => (result.push(x$2$2) | 0))));
    return result;
  }
});
var $d_sjsr_Compat$ = new $TypeData().i($c_sjsr_Compat$, "scala.scalajs.runtime.Compat$", ({
  dg: 1
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
$p.k = (function(array) {
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
  dh: 1
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
$p.p7 = (function(err) {
  var where = ((err.lY() === 0) ? "" : ((err.lY() === 1) ? " after first argument" : ((" after " + err.lY()) + " arguments")));
  var x = ((("Illegal command line" + where) + ": ") + err.pB());
  $m_s_Console$().oE().nT((x + "\n"));
});
var $d_s_util_CommandLineParser$ = new $TypeData().i($c_s_util_CommandLineParser$, "scala.util.CommandLineParser$", ({
  di: 1
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
  this.i3 = null;
  this.i3 = init;
}
$p = $c_s_util_DynamicVariable.prototype = new $h_O();
$p.constructor = $c_s_util_DynamicVariable;
/** @constructor */
function $h_s_util_DynamicVariable() {
}
$h_s_util_DynamicVariable.prototype = $p;
$p.m = (function() {
  return (("DynamicVariable(" + this.i3) + ")");
});
var $d_s_util_DynamicVariable = new $TypeData().i($c_s_util_DynamicVariable, "scala.util.DynamicVariable", ({
  dk: 1
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
$p.s = (function(hash, data) {
  var h = this.hS(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.hS = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.ar = (function(hash, length) {
  return this.h8((hash ^ length));
});
$p.h8 = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.N = (function(x, seed, ignorePrefix) {
  var arr = x.v();
  if ((arr === 0)) {
    return ((!ignorePrefix) ? $f_T__hashCode__I(x.B()) : seed);
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.s(h, $f_T__hashCode__I(x.B()));
    }
    var i = 0;
    while ((i < arr)) {
      h = this.s(h, $m_sr_Statics$().a1(x.g(i)));
      i = ((1 + i) | 0);
    }
    return this.ar(h, arr);
  }
});
$p.nd = (function(x, seed, caseClassName) {
  var arr = x.v();
  var aye = $f_T__hashCode__I(((caseClassName !== null) ? caseClassName : x.B()));
  if ((arr === 0)) {
    return aye;
  } else {
    var h = seed;
    h = this.s(h, aye);
    var i = 0;
    while ((i < arr)) {
      h = this.s(h, $m_sr_Statics$().a1(x.g(i)));
      i = ((1 + i) | 0);
    }
    return this.ar(h, arr);
  }
});
$p.pk = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.a9();
  while (iterator.J()) {
    var x = iterator.E();
    var h = $m_sr_Statics$().a1(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.s(h$2, a);
  h$2 = this.s(h$2, b);
  h$2 = this.hS(h$2, c);
  return this.ar(h$2, n);
});
$p.oD = (function(xs, seed) {
  var it = xs.a9();
  var h = seed;
  if ((!it.J())) {
    return this.ar(h, 0);
  }
  var x0 = it.E();
  if ((!it.J())) {
    return this.ar(this.s(h, $m_sr_Statics$().a1(x0)), 1);
  }
  var x1 = it.E();
  var initial = $m_sr_Statics$().a1(x0);
  h = this.s(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().a1(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.J()) {
    h = this.s(h, prev);
    var hash = $m_sr_Statics$().a1(it.E());
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.s(h, hash);
      i = ((1 + i) | 0);
      while (it.J()) {
        h = this.s(h, $m_sr_Statics$().a1(it.E()));
        i = ((1 + i) | 0);
      }
      return this.ar(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.h8(this.s(this.s(h0, rangeDiff), prev));
});
$p.lG = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().gP(a);
  switch (l) {
    case 0: {
      return this.ar(h, 0);
      break;
    }
    case 1: {
      return this.ar(this.s(h, $m_sr_Statics$().a1($m_sr_ScalaRunTime$().g6(a, 0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().a1($m_sr_ScalaRunTime$().g6(a, 0));
      h = this.s(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().a1($m_sr_ScalaRunTime$().g6(a, 1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.s(h, prev);
        var hash = $m_sr_Statics$().a1($m_sr_ScalaRunTime$().g6(a, i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.s(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.s(h, $m_sr_Statics$().a1($m_sr_ScalaRunTime$().g6(a, i)));
            i = ((1 + i) | 0);
          }
          return this.ar(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.h8(this.s(this.s(h0, rangeDiff), prev));
    }
  }
});
$p.oN = (function(start, step, last, seed) {
  return this.h8(this.s(this.s(this.s(seed, start), step), last));
});
$p.nM = (function(a, seed) {
  var h = seed;
  var l = a.K();
  switch (l) {
    case 0: {
      return this.ar(h, 0);
      break;
    }
    case 1: {
      return this.ar(this.s(h, $m_sr_Statics$().a1(a.a7(0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().a1(a.a7(0));
      h = this.s(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().a1(a.a7(1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.s(h, prev);
        var hash = $m_sr_Statics$().a1(a.a7(i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.s(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.s(h, $m_sr_Statics$().a1(a.a7(i)));
            i = ((1 + i) | 0);
          }
          return this.ar(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.h8(this.s(this.s(h0, rangeDiff), prev));
    }
  }
});
$p.nV = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.a8())) {
    elems.hR();
  }
  return ((rangeState === 2) ? this.oN(initial, rangeDiff, prev, seed) : this.ar(h, n));
});
function $p_Lsketches_rooms_canvases_Canvases$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2($thiz, c, u, v) {
  return new $c_T2(c, new $c_Ltrivalibs_graphics_math_cpu_Vec2(u, v));
}
function $p_Lsketches_rooms_canvases_Canvases$package$__form$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form($thiz, p$1, faces) {
  var mesh$proxy1 = $m_Ltrivalibs_graphics_geometry_Mesh$().j6(faces, null, 0, new $c_Ltrivalibs_graphics_geometry_package$package$$anon$1(0));
  var vl = new $c_Ltrivalibs_graphics_geometry_VertexLayout$named(new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$(), new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$(), $m_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$())));
  var f = ((v$3, n$3, ref$3) => {
    var nVal = new $c_T3(n$3.t, n$3.w, n$3.u);
    var values$proxy1 = $m_sr_Tuples$().lK(vl.hk.bv(v$3), $m_sr_Tuples$().j9(nVal, $m_T$package$EmptyTuple$()));
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
    var tailOffset$7 = ((8 + tailOffset$4) | 0);
    var nestedValues$3 = values$proxy1.g(2);
    var value$6 = nestedValues$3.g(0);
    ref$3.dv.setFloat32(tailOffset$7, Math.fround(value$6), true);
    var tailOffset$8 = ((4 + tailOffset$7) | 0);
    var value$7 = nestedValues$3.g(1);
    ref$3.dv.setFloat32(tailOffset$8, Math.fround(value$7), true);
    var tailOffset$9 = ((4 + tailOffset$8) | 0);
    var value$8 = nestedValues$3.g(2);
    ref$3.dv.setFloat32(tailOffset$9, Math.fround(value$8), true);
  });
  var \u03b4proxy2 = $m_Ltrivalibs_graphics_geometry_buffers$package$();
  mesh$proxy1.lP();
  var vertexCount = 0;
  var hasQuads = false;
  var fi = 0;
  while ((fi < (mesh$proxy1.G.length | 0))) {
    var n = (mesh$proxy1.G[fi].length | 0);
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
    while ((fi < (mesh$proxy1.G.length | 0))) {
      var arr = mesh$proxy1.G[fi];
      var opt$proxy1 = mesh$proxy1.bn[fi].fd;
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
    while ((fi < (mesh$proxy1.G.length | 0))) {
      var arr$2 = mesh$proxy1.G[fi];
      var n$2 = (arr$2.length | 0);
      var opt$proxy2 = mesh$proxy1.bn[fi].fd;
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
    var $x_1 = new $c_Ltrivalibs_graphics_geometry_BufferedGeometry(verts, \u03b4proxy2.jd(idxBuf, vertexCount));
  }
  return p$1.jb($x_1, (void 0), (void 0), (void 0));
}
function $p_Lsketches_rooms_canvases_Canvases$package$__roomNoise$1__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr($thiz, wp, normal) {
  var scaledWp = $m_Ltrivalibs_graphics_math_gpu_vec3$().ax($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aN($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().O().F(wp), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().af($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().O().z(wp), 0.2)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().af($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().O().z(wp), 0.3), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aN($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().af($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().O().ai(wp), 0.8), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().af($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().O().z(wp), 0.2)));
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().ow($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(0.68), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(1.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().nA($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().j2($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aN($m_Lsketchlib_shaders_Noise$().lR($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().j4(scaledWp, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().O(), 0.15), 3, 3.6, 0.12, $m_Ltrivalibs_graphics_math_gpu_vec3$().b1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().lX().f(140))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().af($m_Lsketchlib_shaders_Noise$().lR($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().j4($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().ng(scaledWp, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().O(), normal), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().O(), 0.2), 3, 2.1, 0.25, $m_Ltrivalibs_graphics_math_gpu_vec3$().b1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().lX().f(70))), 0.3)), 1.3)));
}
function $p_Lsketches_rooms_canvases_Canvases$package$__texSize$1__D__D__T2($thiz, w, h) {
  return new $c_T2($doubleToInt((48.0 * w)), $doubleToInt((48.0 * h)));
}
function $p_Lsketches_rooms_canvases_Canvases$package$__bakeWallTex$1__Lsketchlib_utils_bake_TextureBaker__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Shade__Lsketches_rooms_canvases_Paintings$Wall__Ltrivalibs_graphics_painter_Panel($thiz, wallBaker$1, p$2, shadowLayerShade$1, wall) {
  matchResult3: {
    var \u03b44$;
    var x7 = $p_Lsketches_rooms_canvases_Canvases$package$__texSize$1__D__D__T2($thiz, wall.fc, wall.fQ);
    if ((x7 !== null)) {
      var \u03b44$ = x7;
      break matchResult3;
    }
    throw new $c_s_MatchError(x7);
  }
  var ww$2 = (\u03b44$.aa | 0);
  var wh$2 = (\u03b44$.am | 0);
  var panel = wallBaker$1.ml(wall.i7, ww$2, wh$2, (void 0), (void 0), true);
  var Bindable_this = p$2.bd(shadowLayerShade$1, (void 0), (void 0), (void 0));
  var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("rect", wall.p4());
  var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("fade", wall.p2());
  var e3$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("strength", wall.p5());
  var \u03b4scrutinee100 = e1$proxy1.x;
  var idx = (Bindable_this.A.M.rect | 0);
  if (((idx < (Bindable_this.h.length | 0)) && (Bindable_this.h[idx] !== null))) {
    var BufferBinding_this = Bindable_this.h[idx];
    BufferBinding_this.V.P(BufferBinding_this.q, \u03b4scrutinee100);
    var $x_2 = BufferBinding_this.U.queue;
    var $x_1 = BufferBinding_this.R;
    var s$proxy2 = BufferBinding_this.q;
    $x_2.writeBuffer($x_1, 0.0, s$proxy2.dv.buffer);
  } else {
    var uv = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$();
    var device$proxy1 = Bindable_this.fT.e;
    var buffer = new ArrayBuffer(16);
    var arr$proxy6 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
    var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy6.dv, 0), device$proxy1, uv);
    b.V.P(b.q, \u03b4scrutinee100);
    var $x_4 = b.U.queue;
    var $x_3 = b.R;
    var s$proxy3 = b.q;
    $x_4.writeBuffer($x_3, 0.0, s$proxy3.dv.buffer);
    while (((Bindable_this.h.length | 0) <= idx)) {
      Bindable_this.h.push(null);
    }
    Bindable_this.h[idx] = b;
  }
  var \u03b4scrutinee111 = e2$proxy1.x;
  var idx$2 = (Bindable_this.A.M.fade | 0);
  if (((idx$2 < (Bindable_this.h.length | 0)) && (Bindable_this.h[idx$2] !== null))) {
    var BufferBinding_this$5 = Bindable_this.h[idx$2];
    BufferBinding_this$5.V.P(BufferBinding_this$5.q, \u03b4scrutinee111);
    var $x_6 = BufferBinding_this$5.U.queue;
    var $x_5 = BufferBinding_this$5.R;
    var s$proxy4 = BufferBinding_this$5.q;
    $x_6.writeBuffer($x_5, 0.0, s$proxy4.dv.buffer);
  } else {
    var uv$2 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$();
    var device$proxy2 = Bindable_this.fT.e;
    var buffer$2 = new ArrayBuffer(8);
    var arr$proxy7 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
    var b$2 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy7.dv, 0), device$proxy2, uv$2);
    b$2.V.P(b$2.q, \u03b4scrutinee111);
    var $x_8 = b$2.U.queue;
    var $x_7 = b$2.R;
    var s$proxy5 = b$2.q;
    $x_8.writeBuffer($x_7, 0.0, s$proxy5.dv.buffer);
    while (((Bindable_this.h.length | 0) <= idx$2)) {
      Bindable_this.h.push(null);
    }
    Bindable_this.h[idx$2] = b$2;
  }
  var \u03b4scrutinee126 = (+e3$proxy1.x);
  var idx$3 = (Bindable_this.A.M.strength | 0);
  if (((idx$3 < (Bindable_this.h.length | 0)) && (Bindable_this.h[idx$3] !== null))) {
    var BufferBinding_this$9 = Bindable_this.h[idx$3];
    BufferBinding_this$9.V.P(BufferBinding_this$9.q, \u03b4scrutinee126);
    var $x_10 = BufferBinding_this$9.U.queue;
    var $x_9 = BufferBinding_this$9.R;
    var s$proxy6 = BufferBinding_this$9.q;
    $x_10.writeBuffer($x_9, 0.0, s$proxy6.dv.buffer);
  } else {
    var uv$3 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var device$proxy3 = Bindable_this.fT.e;
    var buffer$3 = new ArrayBuffer(4);
    var arr$proxy8 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$3), 1);
    var b$3 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy8.dv, 0), device$proxy3, uv$3);
    b$3.V.P(b$3.q, \u03b4scrutinee126);
    var $x_12 = b$3.U.queue;
    var $x_11 = b$3.R;
    var s$proxy7 = b$3.q;
    $x_12.writeBuffer($x_11, 0.0, s$proxy7.dv.buffer);
    while (((Bindable_this.h.length | 0) <= idx$3)) {
      Bindable_this.h.push(null);
    }
    Bindable_this.h[idx$3] = b$3;
  }
  panel.mp((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), Bindable_this, (void 0));
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$2, panel);
  return panel;
}
function $p_Lsketches_rooms_canvases_Canvases$package$__lineMask$1__D__D__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr($thiz, GridN$1, HalfWidth$1, t) {
  var f = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().lS($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().af(t, GridN$1));
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().bu($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().mh(f, $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().b2().b3((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aP(1.0)) + " - ") + f.d) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(HalfWidth$1), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(0.0));
}
function $p_Lsketches_rooms_canvases_Canvases$package$__patternPanel$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_painter_Panel($thiz, p$3, imgShade$1, c) {
  var Bindable_this = p$3.bd(imgShade$1, (void 0), (void 0), (void 0));
  var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("color", c);
  var \u03b4scrutinee190 = e1$proxy2.x;
  var idx = (Bindable_this.A.M.color | 0);
  if (((idx < (Bindable_this.h.length | 0)) && (Bindable_this.h[idx] !== null))) {
    var BufferBinding_this = Bindable_this.h[idx];
    BufferBinding_this.V.P(BufferBinding_this.q, \u03b4scrutinee190);
    var $x_2 = BufferBinding_this.U.queue;
    var $x_1 = BufferBinding_this.R;
    var s$proxy8 = BufferBinding_this.q;
    $x_2.writeBuffer($x_1, 0.0, s$proxy8.dv.buffer);
  } else {
    var uv = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$();
    var device$proxy4 = Bindable_this.fT.e;
    var buffer = new ArrayBuffer(16);
    var arr$proxy9 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
    var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy9.dv, 0), device$proxy4, uv);
    b.V.P(b.q, \u03b4scrutinee190);
    var $x_4 = b.U.queue;
    var $x_3 = b.R;
    var s$proxy9 = b.q;
    $x_4.writeBuffer($x_3, 0.0, s$proxy9.dv.buffer);
    while (((Bindable_this.h.length | 0) <= idx)) {
      Bindable_this.h.push(null);
    }
    Bindable_this.h[idx] = b;
  }
  return p$3.bt(256, 256, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), Bindable_this, (void 0));
}
/** @constructor */
function $c_Lsketches_rooms_canvases_Canvases$package$() {
  this.mB = 0.0;
  this.mA = 0.0;
  this.mz = 0.0;
  this.mC = 0.0;
  this.mB = 6.5;
  this.mA = 5.5;
  this.mz = 10.0;
  this.mC = 48.0;
}
$p = $c_Lsketches_rooms_canvases_Canvases$package$.prototype = new $h_O();
$p.constructor = $c_Lsketches_rooms_canvases_Canvases$package$;
/** @constructor */
function $h_Lsketches_rooms_canvases_Canvases$package$() {
}
$h_Lsketches_rooms_canvases_Canvases$package$.prototype = $p;
$p.oV = (function() {
  $m_Ltrivalibs_graphics_painter_Painter$().nN(document.getElementById("canvas"), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((p$6) => {
    var box = $m_Ltrivalibs_graphics_geometry_Box$().mV(new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 2.75, 0.0), 6.5, 5.5, 10.0);
    var floorForm = $p_Lsketches_rooms_canvases_Canvases$package$__form$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$6, [box.na(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((c$2, uvw$2) => $p_Lsketches_rooms_canvases_Canvases$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2(this, c$2, uvw$2.t, uvw$2.u))))]);
    var ceilForm = $p_Lsketches_rooms_canvases_Canvases$package$__form$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$6, [box.ph(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((c$2$1, uvw$2$1) => $p_Lsketches_rooms_canvases_Canvases$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2(this, c$2$1, uvw$2$1.t, uvw$2$1.u))))]);
    matchResult1$1: {
      var \u03b42$;
      var x1 = $p_Lsketches_rooms_canvases_Canvases$package$__texSize$1__D__D__T2(this, 6.5, 10.0);
      if ((x1 !== null)) {
        var \u03b42$ = x1;
        break matchResult1$1;
      }
      throw new $c_s_MatchError(x1);
    }
    var rfw$2 = (\u03b42$.aa | 0);
    var rfh$2 = (\u03b42$.am | 0);
    var floorTex = $m_Lsketchlib_utils_bake_TextureBaker$().n5(p$6, floorForm, rfw$2, rfh$2, (void 0), (void 0), true, new $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(((wp$2, normal$2, _$1$2) => $m_Ltrivalibs_graphics_math_gpu_vec4$().aq($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().bs($m_Ltrivalibs_graphics_math_gpu_vec3$().ax($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(0.8), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(0.78), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(0.75)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().O(), $p_Lsketches_rooms_canvases_Canvases$package$__roomNoise$1__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr(this, wp$2, normal$2)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(1.0)))));
    var ceilTex = $m_Lsketchlib_utils_bake_TextureBaker$().n6(p$6, ceilForm, rfw$2, rfh$2, (void 0), "rgba16float", true, new $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(((wp$2$1, normal$2$1, uv$2, color$2) => {
      var col = new $c_Ltrivalibs_graphics_math_gpu_VarExpr("col");
      var s = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "s");
      var band = new $c_Ltrivalibs_graphics_math_gpu_VarExpr("band");
      var lf = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "lf");
      var halo = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "halo");
      var $x_11 = $m_sjsr_package$();
      var $x_10 = col.S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().bs($m_Ltrivalibs_graphics_math_gpu_vec3$().ax($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(0.92), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(0.92), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(0.9)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().O(), $p_Lsketches_rooms_canvases_Canvases$package$__roomNoise$1__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr(this, wp$2$1, normal$2$1)));
      var $x_9 = s.S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().lS($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().j3($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().af($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ag().F(uv$2), 6.0), 0.5)));
      var $x_8 = band.S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().bu($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().lA(s), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(0.05), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(0.02)));
      var $x_7 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
      var $x_6 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().bu($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ag().z(uv$2), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(0.05), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(0.15));
      var $x_5 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
      var e$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ag().z(uv$2);
      var $x_4 = lf.S($x_7.br($x_6, $x_5.bu($m_Ltrivalibs_graphics_math_gpu_LeftScalar$().b2().b3((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aP(1.0)) + " - ") + e$proxy1.d) + ")")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(0.05), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(0.15))));
      var $x_3 = band.mN(lf);
      var $x_2 = halo.S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().nw(band, $m_Ltrivalibs_graphics_math_gpu_vec3$().ax($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(8.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(7.6), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(6.8))));
      var $x_1 = col.mM(halo);
      var value$proxy1 = $m_Ltrivalibs_graphics_math_gpu_vec4$().aq(col, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(1.0));
      return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_11.k(new ($d_T.r().C)([$x_10, $x_9, $x_8, $x_4, $x_3, $x_2, $x_1, (((("  " + color$2.I) + " = ") + value$proxy1.d) + ";")]))), "", "\n", "");
    })));
    var wallBaker = $m_Lsketchlib_utils_bake_TextureBaker$().lF(p$6, new $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(((wp$2$2, normal$2$2, _$2$2) => {
      var $x_13 = $m_Ltrivalibs_graphics_math_gpu_vec4$();
      var $x_12 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$();
      var Vec3ImmutableOpsG_this = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$();
      var v$proxy1 = $m_Ltrivalibs_graphics_math_gpu_vec3$().ax($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(0.96), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(0.96), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(0.95));
      var b$proxy1 = $m_Ltrivalibs_graphics_math_gpu_vec3$().ax($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(0.86), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(0.86), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(0.85));
      var t$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().bu($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().O().z(wp$2$2), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(4.9), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(5.5));
      return $x_13.aq($x_12.bs(Vec3ImmutableOpsG_this.ox(v$proxy1, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().O(), b$proxy1, t$proxy1), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().O(), $p_Lsketches_rooms_canvases_Canvases$package$__roomNoise$1__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr(this, wp$2$2, normal$2$2)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(1.0));
    })));
    var build$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3) => {
      var body$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2) => {
        var base = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "base");
        var sm = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "sm");
        var $x_20 = $m_sjsr_package$();
        var $x_19 = base.S($m_Ltrivalibs_graphics_math_gpu_expr$package$().fp($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "prev"), $m_Ltrivalibs_graphics_math_gpu_ivec2$().b1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fr(ctx$2.bq))));
        var $x_18 = sm.S($m_Lsketches_rooms_canvases_Wall$package$().p3(ctx$2.ae.l("uv"), ctx$2.Z.l("rect"), ctx$2.Z.l("fade")));
        var AssignTarget_this = ctx$2.an.T("color");
        var $x_17 = $m_Ltrivalibs_graphics_math_gpu_vec4$();
        var $x_16 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$();
        var $x_15 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fs(base);
        var $x_14 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().O();
        var e$proxy2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().br(ctx$2.Z.l("strength"), sm);
        var value$proxy2 = $x_17.aq($x_16.bs($x_15, $x_14, $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().b2().b3((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aP(1.0)) + " - ") + e$proxy2.d) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a3().ah(base));
        return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_20.k(new ($d_T.r().C)([$x_19, $x_18, (((("  " + AssignTarget_this.I) + " = ") + value$proxy2.d) + ";")]))), "", "\n", "");
      }));
      var d = $m_sjs_js_special_package$().p(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().k(new ($d_T2.r().C)([]))));
      var ctx = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = reg;
      try {
        var $x_21 = body$proxy1.f(ctx);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = prev;
      }
      program$3.a0 = $x_21;
      $m_sjs_js_ArrayOps$().fl(reg.X, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$3) => ((data$3) => {
        $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$3, data$3);
      }))(program$3)));
    }));
    var program = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
    build$proxy1.f(program);
    var b = program.a0;
    var helperFns$proxy1 = program.as();
    var id = p$6.n;
    p$6.n = ((1 + p$6.n) | 0);
    var names = $m_sjs_js_ArrayOpsCommon$().a(["rect"], $m_sjs_js_ArrayOpsCommon$().a(["fade"], $m_sjs_js_ArrayOpsCommon$().a(["strength"], [])));
    var dict = $m_sjs_js_special_package$().p(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().k(new ($d_T2.r().C)([]))));
    var i = 0;
    while ((i < (names.length | 0))) {
      dict[names[i]] = i;
      i = ((1 + i) | 0);
    }
    var names$2 = $m_sjs_js_ArrayOpsCommon$().a(["prev"], []);
    var dict$2 = $m_sjs_js_special_package$().p(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().k(new ($d_T2.r().C)([]))));
    var i$2 = 0;
    while ((i$2 < (names$2.length | 0))) {
      dict$2[names$2[i$2]] = i$2;
      i$2 = ((1 + i$2) | 0);
    }
    var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b, helperFns$proxy1);
    var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
    var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["rect"], $m_sjs_js_ArrayOpsCommon$().a(["fade"], $m_sjs_js_ArrayOpsCommon$().a(["strength"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$()).W.y()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$()).W.y()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).W.y()], []))));
    var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.a6, sd.a5, fragBuiltinParams);
    var wgsl = (baseWgsl + "\n\n@group(1) @binding(0) var prev: texture_2d<f32>;");
    var args$proxy1 = $m_sr_ScalaRunTime$().au(new ($d_sjs_js_Any.r().C)([wgsl]));
    console.log(...$m_sjsr_Compat$().at(args$proxy1));
    var module = p$6.e.createShaderModule($m_sjs_js_special_package$().p(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().k(new ($d_T2.r().C)([new $c_T2("code", wgsl)])))));
    var descriptors = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().p(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().k(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().p(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().k(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().p(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().k(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().p(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().k(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().p(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().k(new ($d_T2.r().C)([new $c_T2("binding", 2), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().p(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().k(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], [])))], []);
    var result = [];
    $m_sjs_js_ArrayOps$().fl(descriptors, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$1) => ((entries$2) => (result.push(Painter_this$1.e.createBindGroupLayout($m_sjs_js_special_package$().p(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().k(new ($d_T2.r().C)([new $c_T2("entries", entries$2)])))))) | 0)))(p$6)));
    var x4 = new $c_T2(result, $m_Ltrivalibs_graphics_shader_layouts$().D(p$6.e, result));
    var \u03b46$ = x4;
    var bgls$2 = \u03b46$.aa;
    var entries = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().p(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().k(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().p(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().k(new ($d_T2.r().C)([])))))]))))], []);
    var panelBgl = p$6.e.createBindGroupLayout($m_sjs_js_special_package$().p(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().k(new ($d_T2.r().C)([new $c_T2("entries", entries)])))));
    var allBgls = ((panelBgl !== null) ? $m_sjs_js_ArrayOpsCommon$().a(bgls$2, [panelBgl]) : bgls$2);
    var pl = $m_Ltrivalibs_graphics_shader_layouts$().D(p$6.e, allBgls);
    var shadowLayerShade = new $c_Ltrivalibs_graphics_painter_Shade(id, module, null, bgls$2[0], panelBgl, pl, false, dict, dict$2);
    var paintings = new $c_Lsketches_rooms_canvases_Paintings(p$6);
    var build$proxy2 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$1) => {
      var body$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$1) => {
        var uv = ctx$2$1.ae.l("uv");
        var m = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().mg($p_Lsketches_rooms_canvases_Canvases$package$__lineMask$1__D__D__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr(this, 6.0, 0.016, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aN($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ag().F(uv), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ag().z(uv))), $p_Lsketches_rooms_canvases_Canvases$package$__lineMask$1__D__D__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr(this, 6.0, 0.016, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().gK($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ag().F(uv), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ag().z(uv))));
        var $x_22 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().fm();
        var AssignTarget_this$1 = ctx$2$1.an.T("color");
        var value$proxy6 = $m_Ltrivalibs_graphics_math_gpu_vec4$().aq($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().bs(ctx$2$1.Z.l("color"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().O(), $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().b2().b3((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aP(1.0)) + " - ") + m.d) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(1.0));
        return $x_22.f((((("  " + AssignTarget_this$1.I) + " = ") + value$proxy6.d) + ";"));
      }));
      var d$1 = $m_sjs_js_special_package$().p(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().k(new ($d_T2.r().C)([]))));
      var ctx$1 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$1), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = reg$1;
      try {
        var $x_23 = body$proxy3.f(ctx$1);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = prev$1;
      }
      program$3$1.a0 = $x_23;
      $m_sjs_js_ArrayOps$().fl(reg$1.X, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$4) => ((data$3$1) => {
        $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$4, data$3$1);
      }))(program$3$1)));
    }));
    var program$2 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
    build$proxy2.f(program$2);
    var b$1 = program$2.a0;
    var helperFns$proxy2 = program$2.as();
    var id$2 = p$6.n;
    p$6.n = ((1 + p$6.n) | 0);
    var names$4 = $m_sjs_js_ArrayOpsCommon$().a(["color"], []);
    var dict$3 = $m_sjs_js_special_package$().p(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().k(new ($d_T2.r().C)([]))));
    var i$3 = 0;
    while ((i$3 < (names$4.length | 0))) {
      dict$3[names$4[i$3]] = i$3;
      i$3 = ((1 + i$3) | 0);
    }
    var names$5 = [];
    var dict$4 = $m_sjs_js_special_package$().p(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().k(new ($d_T2.r().C)([]))));
    var i$4 = 0;
    while ((i$4 < (names$5.length | 0))) {
      dict$4[names$5[i$4]] = i$4;
      i$4 = ((1 + i$4) | 0);
    }
    var sd$2 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$1, helperFns$proxy2);
    var vertexInputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
    var vertexOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$2 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$()).W.y()], []));
    var fragBuiltinParams$2 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$2 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$2, vertexInputStruct$2, vertexOutputStruct$2, fragmentOutputStruct$2, groupDecls$2, sd$2.a6, sd$2.a5, fragBuiltinParams$2);
    var args$proxy2 = $m_sr_ScalaRunTime$().au(new ($d_sjs_js_Any.r().C)([baseWgsl$2]));
    console.log(...$m_sjsr_Compat$().at(args$proxy2));
    var module$2 = p$6.e.createShaderModule($m_sjs_js_special_package$().p(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().k(new ($d_T2.r().C)([new $c_T2("code", baseWgsl$2)])))));
    var descriptors$2 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().p(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().k(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().p(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().k(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], [])], []);
    var result$2 = [];
    $m_sjs_js_ArrayOps$().fl(descriptors$2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$2) => ((entries$2$1) => (result$2.push(Painter_this$2.e.createBindGroupLayout($m_sjs_js_special_package$().p(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().k(new ($d_T2.r().C)([new $c_T2("entries", entries$2$1)])))))) | 0)))(p$6)));
    var x10 = new $c_T2(result$2, $m_Ltrivalibs_graphics_shader_layouts$().D(p$6.e, result$2));
    var \u03b46$$2 = x10;
    var bgls$4 = \u03b46$$2.aa;
    var pl$2 = $m_Ltrivalibs_graphics_shader_layouts$().D(p$6.e, bgls$4);
    var imgShade = new $c_Ltrivalibs_graphics_painter_Shade(id$2, module$2, null, bgls$4[0], null, pl$2, false, dict$3, dict$4);
    var wallFront = new $c_Lsketches_rooms_canvases_Paintings$Wall(paintings, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 2.75, 5.0), 6.5, 5.5, 3.141592653589793, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, (-1.0)));
    var wallBack = new $c_Lsketches_rooms_canvases_Paintings$Wall(paintings, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 2.75, (-5.0)), 6.5, 5.5, 0.0, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0));
    var wallLeft = new $c_Lsketches_rooms_canvases_Paintings$Wall(paintings, new $c_Ltrivalibs_graphics_math_cpu_Vec3((-3.25), 2.75, 0.0), 10.0, 5.5, 1.5707963267948966, new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0));
    var wallRight = new $c_Lsketches_rooms_canvases_Paintings$Wall(paintings, new $c_Ltrivalibs_graphics_math_cpu_Vec3(3.25, 2.75, 0.0), 10.0, 5.5, (-1.5707963267948966), new $c_Ltrivalibs_graphics_math_cpu_Vec3((-1.0), 0.0, 0.0));
    var walls = [wallFront, wallBack, wallLeft, wallRight];
    var palette = [new $c_T3(0.78, 0.3, 0.28), new $c_T3(0.3, 0.45, 0.7), new $c_T3(0.4, 0.62, 0.42), new $c_T3(0.82, 0.7, 0.34)];
    var imagePanels = [];
    var wi = 0;
    while ((wi < (walls.length | 0))) {
      var wall = walls[wi];
      var pw = $m_Ltrivalibs_utils_random_random$package$().mm(0.9, 1.7);
      var ph = $m_Ltrivalibs_utils_random_random$package$().mm(0.7, 1.4);
      var c = palette[wi];
      var img = $p_Lsketches_rooms_canvases_Canvases$package$__patternPanel$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_painter_Panel(this, p$6, imgShade, new $c_Ltrivalibs_graphics_math_cpu_Vec3((+c.b4), (+c.aS), (+c.aT)));
      imagePanels.push(img);
      wall.nI(new $c_Lsketches_rooms_canvases_PaintingSpec(pw, ph, 0.05, img, 3.0), (0.5 * wall.fc), 1.7);
      wi = ((1 + wi) | 0);
    }
    var texSampler = p$6.jg("linear", "linear", "linear", "clamp-to-edge", (void 0), (void 0));
    var Bindable_this = p$6.h9(ceilForm, paintings.i6, "none", (void 0));
    var e1$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", texSampler);
    var e2$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", ceilTex);
    var \u03b4scrutinee201 = e1$proxy3.x;
    var idx = (Bindable_this.Q.M.samp | 0);
    while (((Bindable_this.H.length | 0) <= idx)) {
      Bindable_this.H.push(null);
    }
    Bindable_this.H[idx] = \u03b4scrutinee201;
    var \u03b4scrutinee217 = e2$proxy2.x;
    var idx$2 = (Bindable_this.Q.aw.tex | 0);
    while (((Bindable_this.Y.length | 0) <= idx$2)) {
      Bindable_this.Y.push(null);
    }
    Bindable_this.Y[idx$2] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee217);
    var aboveGround = [Bindable_this];
    wi = 0;
    while ((wi < (walls.length | 0))) {
      var wall$2 = walls[wi];
      var wallTex = $p_Lsketches_rooms_canvases_Canvases$package$__bakeWallTex$1__Lsketchlib_utils_bake_TextureBaker__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Shade__Lsketches_rooms_canvases_Paintings$Wall__Ltrivalibs_graphics_painter_Panel(this, wallBaker, p$6, shadowLayerShade, wall$2);
      aboveGround.push(wall$2.nf(wallTex));
      var ps = wall$2.oI();
      var j = 0;
      while ((j < (ps.length | 0))) {
        aboveGround.push(ps[j]);
        j = ((1 + j) | 0);
      }
      wi = ((1 + wi) | 0);
    }
    var mirror = $m_Lsketchlib_utils_mirror_MirrorReflection$().mY(p$6, aboveGround, "vp", 5.5, null, $m_Ltrivalibs_graphics_geometry_Plane$().ko, 62.0, 6, new $c_T4(0.0, 0.0, 0.0, 0.0));
    var build$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$2) => {
      var body$proxy5 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$2) => {
        var $x_26 = $m_sjsr_package$();
        var AssignTarget_this$2 = ctx$2$2.aM.T("uv");
        var value$proxy7 = ctx$2$2.aY.l("uv");
        var $x_25 = AssignTarget_this$2.I;
        var $x_24 = value$proxy7.d;
        var AssignTarget_this$2$1 = ctx$2$2.aM.gA;
        var value$proxy8 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().g8(ctx$2$2.fj.l("vp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fn(), $m_Ltrivalibs_graphics_math_gpu_vec4$().aq(ctx$2$2.aY.l("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a3(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$());
        return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_26.k(new ($d_T.r().C)([(((("  " + $x_25) + " = ") + $x_24) + ";"), (((("  " + AssignTarget_this$2$1.I) + " = ") + value$proxy8.d) + ";")]))), "", "\n", "");
      }));
      var d$2 = $m_sjs_js_special_package$().p(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().k(new ($d_T2.r().C)([]))));
      var ctx$3 = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = reg$2;
      try {
        var $x_27 = body$proxy5.f(ctx$3);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = prev$2;
      }
      program$3$2.aX = $x_27;
      $m_sjs_js_ArrayOps$().fl(reg$2.X, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$3) => ((data$3$2) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$3, data$3$2);
      }))(program$3$2)));
      var body$proxy7 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$3) => {
        var base$1 = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "base");
        var refl = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "refl");
        var mix = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "mix");
        var falloff = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "falloff");
        var $x_33 = $m_sjsr_package$();
        var $x_32 = base$1.S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fs($m_Ltrivalibs_graphics_math_gpu_expr$package$().ax($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), ctx$2$3.ae.l("uv"), ctx$2$3.Z.l("samp"))));
        var $x_31 = refl.S($m_Ltrivalibs_graphics_math_gpu_expr$package$().fp($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "reflTex"), $m_Ltrivalibs_graphics_math_gpu_ivec2$().b1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fr(ctx$2$3.bq))));
        var $x_30 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
        var e$proxy3 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a3().ah(refl);
        var $x_29 = falloff.S($x_30.mg($m_Ltrivalibs_graphics_math_gpu_LeftScalar$().b2().b3((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aP(1.0)) + " - ") + e$proxy3.d) + ")")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(0.1)));
        var $x_28 = mix.S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().br(ctx$2$3.Z.l("reflStrength"), falloff));
        var AssignTarget_this$3 = ctx$2$3.an.T("color");
        var value$proxy9 = $m_Ltrivalibs_graphics_math_gpu_vec4$().aq($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().lB($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().bs(base$1, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().O(), $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().b2().b3((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aP(1.0)) + " - ") + mix.d) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().O(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().bs($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fs(refl), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().O(), mix)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(1.0));
        return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_33.k(new ($d_T.r().C)([$x_32, $x_31, $x_29, $x_28, (((("  " + AssignTarget_this$3.I) + " = ") + value$proxy9.d) + ";")]))), "", "\n", "");
      }));
      var d$2$1 = $m_sjs_js_special_package$().p(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().k(new ($d_T2.r().C)([]))));
      var ctx$2$4 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2$1), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$2$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$2$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = reg$2$1;
      try {
        var $x_34 = body$proxy7.f(ctx$2$4);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = prev$2$1;
      }
      program$3$2.aL = $x_34;
      $m_sjs_js_ArrayOps$().fl(reg$2$1.X, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$4) => ((data$3$3) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$4, data$3$3);
      }))(program$3$2)));
    }));
    var program$3$3 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy3.f(program$3$3);
    var b$2 = program$3$3.aX;
    var b$3 = program$3$3.aL;
    var helperFns$proxy3 = program$3$3.as();
    var id$3 = p$6.n;
    p$6.n = ((1 + p$6.n) | 0);
    var names$7 = $m_sjs_js_ArrayOpsCommon$().a(["vp"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], $m_sjs_js_ArrayOpsCommon$().a(["reflStrength"], [])));
    var dict$5 = $m_sjs_js_special_package$().p(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().k(new ($d_T2.r().C)([]))));
    var i$5 = 0;
    while ((i$5 < (names$7.length | 0))) {
      dict$5[names$7[i$5]] = i$5;
      i$5 = ((1 + i$5) | 0);
    }
    var names$8 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], $m_sjs_js_ArrayOpsCommon$().a(["reflTex"], []));
    var dict$6 = $m_sjs_js_special_package$().p(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().k(new ($d_T2.r().C)([]))));
    var i$6 = 0;
    while ((i$6 < (names$8.length | 0))) {
      dict$6[names$8[i$6]] = i$6;
      i$6 = ((1 + i$6) | 0);
    }
    var sd$3 = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$2, b$3, helperFns$proxy3);
    var vertexInputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["normal"], []))), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$3 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["vp"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], $m_sjs_js_ArrayOpsCommon$().a(["reflStrength"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).bp.y()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).W.y()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).W.y()], []))));
    var fragBuiltinParams$3 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$3 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$3, vertexInputStruct$3, vertexOutputStruct$3, fragmentOutputStruct$3, groupDecls$3, sd$3.a6, sd$3.a5, fragBuiltinParams$3);
    var wgsl$3 = (baseWgsl$3 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;\n@group(1) @binding(1) var reflTex: texture_2d<f32>;");
    var args$proxy3 = $m_sr_ScalaRunTime$().au(new ($d_sjs_js_Any.r().C)([wgsl$3]));
    console.log(...$m_sjsr_Compat$().at(args$proxy3));
    var module$3 = p$6.e.createShaderModule($m_sjs_js_special_package$().p(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().k(new ($d_T2.r().C)([new $c_T2("code", wgsl$3)])))));
    var formats = $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], [])));
    var sizes = $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([8], $m_sjs_js_ArrayOpsCommon$().a([12], [])));
    var offsets = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes);
    var stride = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes);
    var attributes = [];
    var i$7 = 0;
    while ((i$7 < (formats.length | 0))) {
      attributes.push($m_sjs_js_special_package$().p(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().k(new ($d_T2.r().C)([new $c_T2("shaderLocation", i$7), new $c_T2("offset", (offsets[i$7] | 0)), new $c_T2("format", formats[i$7])])))));
      i$7 = ((1 + i$7) | 0);
    }
    var vbl = $m_sjs_js_special_package$().p(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().k(new ($d_T2.r().C)([new $c_T2("arrayStride", stride), new $c_T2("attributes", attributes)]))));
    var descriptors$3 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().p(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().k(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 1), new $c_T2("buffer", $m_sjs_js_special_package$().p(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().k(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().p(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().k(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().p(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().k(new ($d_T2.r().C)([])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().p(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().k(new ($d_T2.r().C)([new $c_T2("binding", 2), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().p(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().k(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], [])))], []);
    var result$3 = [];
    $m_sjs_js_ArrayOps$().fl(descriptors$3, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$3) => ((entries$2$2) => (result$3.push(Painter_this$3.e.createBindGroupLayout($m_sjs_js_special_package$().p(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().k(new ($d_T2.r().C)([new $c_T2("entries", entries$2$2)])))))) | 0)))(p$6)));
    var x13 = new $c_T2(result$3, $m_Ltrivalibs_graphics_shader_layouts$().D(p$6.e, result$3));
    var \u03b42$$2 = x13;
    var bgls$6 = \u03b42$$2.aa;
    var entries$2$3 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().p(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().k(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().p(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().k(new ($d_T2.r().C)([])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().p(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().k(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().p(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().k(new ($d_T2.r().C)([])))))]))))], []));
    var panelBgl$3 = p$6.e.createBindGroupLayout($m_sjs_js_special_package$().p(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().k(new ($d_T2.r().C)([new $c_T2("entries", entries$2$3)])))));
    var allBgls$3 = ((panelBgl$3 !== null) ? $m_sjs_js_ArrayOpsCommon$().a(bgls$6, [panelBgl$3]) : bgls$6);
    var pl$3 = $m_Ltrivalibs_graphics_shader_layouts$().D(p$6.e, allBgls$3);
    var floorShade = new $c_Ltrivalibs_graphics_painter_Shade(id$3, module$3, vbl, bgls$6[0], panelBgl$3, pl$3, false, dict$5, dict$6);
    var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
    var uv$proxy1 = ul$proxy1.aW;
    var buffer = new ArrayBuffer(4);
    var arr$proxy10 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
    var b$4 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy10.dv, 0), p$6.e, uv$proxy1);
    b$4.V.P(b$4.q, 0.35);
    var $x_36 = b$4.U.queue;
    var $x_35 = b$4.R;
    var s$proxy10 = b$4.q;
    $x_36.writeBuffer($x_35, 0.0, s$proxy10.dv.buffer);
    var Bindable_this$4 = p$6.h9(floorForm, floorShade, "front", (void 0));
    var e1$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", texSampler);
    var e2$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("reflStrength", b$4);
    var e3$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", floorTex);
    var e4$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("reflTex", mirror.kc);
    var \u03b4scrutinee319 = e1$proxy4.x;
    var idx$3 = (Bindable_this$4.Q.M.samp | 0);
    while (((Bindable_this$4.H.length | 0) <= idx$3)) {
      Bindable_this$4.H.push(null);
    }
    Bindable_this$4.H[idx$3] = \u03b4scrutinee319;
    var \u03b4scrutinee333 = e2$proxy3.x;
    var idx$4 = (Bindable_this$4.Q.M.reflStrength | 0);
    while (((Bindable_this$4.H.length | 0) <= idx$4)) {
      Bindable_this$4.H.push(null);
    }
    Bindable_this$4.H[idx$4] = \u03b4scrutinee333;
    var \u03b4scrutinee355 = e3$proxy2.x;
    var idx$5 = (Bindable_this$4.Q.aw.tex | 0);
    while (((Bindable_this$4.Y.length | 0) <= idx$5)) {
      Bindable_this$4.Y.push(null);
    }
    Bindable_this$4.Y[idx$5] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee355);
    var \u03b4scrutinee369 = e4$proxy1.x;
    var idx$6 = (Bindable_this$4.Q.aw.reflTex | 0);
    while (((Bindable_this$4.Y.length | 0) <= idx$6)) {
      Bindable_this$4.Y.push(null);
    }
    Bindable_this$4.Y[idx$6] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee369);
    var ul$proxy2 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
    var uv$proxy2 = ul$proxy2.aW;
    var buffer$2 = new ArrayBuffer(64);
    var arr$proxy11 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
    var sceneVp = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy11.dv, 0), p$6.e, uv$proxy2);
    var sceneShapes = [Bindable_this$4];
    var ai = 0;
    while ((ai < (aboveGround.length | 0))) {
      sceneShapes.push(aboveGround[ai]);
      ai = ((1 + ai) | 0);
    }
    var clearColor$2 = new $c_T4(0.5, 0.6, 0.7, 1.0);
    var Panel_this = p$6.bt((void 0), (void 0), clearColor$2, true, true, (void 0), (void 0), "rgba16float", (void 0), (void 0), sceneShapes, (void 0), (void 0));
    var e1$proxy5 = new $c_Ltrivalibs_graphics_painter_BindPair("vp", sceneVp);
    var \u03b4scrutinee370 = e1$proxy5.x;
    var dict$proxy1 = Panel_this.gw;
    dict$proxy1.vp = \u03b4scrutinee370;
    var bloom = $m_Lsketchlib_utils_bloom_Bloom$().mZ(p$6, Panel_this, 0.002, 1.0, 4.0, 5);
    var pi = 0;
    while ((pi < (imagePanels.length | 0))) {
      $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$6, imagePanels[pi]);
      pi = ((1 + pi) | 0);
    }
    var cam = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().mT(0.9, 1.0, 0.1, 100.0, 0.0, 0.0, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.7, 0.0));
    $m_Ltrivalibs_dev_devPreserve$().n0(cam, "camera");
    var input = $m_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$().nP(p$6.fU, true, 400.0, 5.0, true, (void 0));
    var controller = new $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController(cam, input, 2.0, 3.0);
    p$6.oC(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((v1$2, v2$2) => {
      var w = (+v1$2);
      var h = (+v2$2);
      var aspect$2 = (w / h);
      var fov$1 = cam.g1;
      var near$1 = cam.g2;
      var far$1 = cam.g0;
      var rotH$2 = cam.aB;
      var rotV$2 = cam.bb;
      var pos$4 = cam.ak;
      cam.jh(fov$1, aspect$2, near$1, far$1, rotH$2, rotV$2, pos$4);
    })));
    $m_Ltrivalibs_utils_animation_animate$package$().mS(((p$5) => ((arg1$2) => {
      var tpf = (+arg1$2);
      input.hb(tpf);
      controller.hb(tpf);
      var vp = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().gQ(), cam.hG, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), cam.mu());
      sceneVp.V.P(sceneVp.q, vp);
      var $x_38 = sceneVp.U.queue;
      var $x_37 = sceneVp.R;
      var s$proxy11 = sceneVp.q;
      $x_38.writeBuffer($x_37, 0.0, s$proxy11.dv.buffer);
      mirror.oG(vp);
      $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$5, Panel_this);
      bloom.oH();
      p$5.p6(bloom.k6);
    }))(p$6));
  })));
});
var $d_Lsketches_rooms_canvases_Canvases$package$ = new $TypeData().i($c_Lsketches_rooms_canvases_Canvases$package$, "sketches.rooms.canvases.Canvases$package$", ({
  dn: 1
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
  this.jW = null;
  this.jV = null;
  this.jU = null;
  this.jW = shape;
  this.jV = shadowRect;
  this.jU = shadowFade;
}
$p = $c_Lsketches_rooms_canvases_HungPainting.prototype = new $h_O();
$p.constructor = $c_Lsketches_rooms_canvases_HungPainting;
/** @constructor */
function $h_Lsketches_rooms_canvases_HungPainting() {
}
$h_Lsketches_rooms_canvases_HungPainting.prototype = $p;
var $d_Lsketches_rooms_canvases_HungPainting = new $TypeData().i($c_Lsketches_rooms_canvases_HungPainting, "sketches.rooms.canvases.HungPainting", ({
  dp: 1
}));
function $p_Lsketches_rooms_canvases_Paintings__v$1__D__D__D__D__D__T2($thiz, x, y, z, u, w) {
  return new $c_T2(new $c_Ltrivalibs_graphics_math_cpu_Vec3(x, y, z), new $c_Ltrivalibs_graphics_math_cpu_Vec2(u, w));
}
/** @constructor */
function $c_Lsketches_rooms_canvases_Paintings(p) {
  this.fP = null;
  this.i5 = 0.0;
  this.jX = 0.0;
  this.i4 = null;
  this.i6 = null;
  this.jY = null;
  this.fP = p;
  this.i5 = 0.16;
  this.jX = 0.2;
  this.i4 = p.jg("linear", "linear", "linear", "clamp-to-edge", (void 0), (void 0));
  var program = new $c_Ltrivalibs_graphics_shader_dsl_Program();
  var d = ({});
  var ctx = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = reg;
  try {
    var AssignTarget_this = ctx.aM.T("uv");
    var value$proxy1 = ctx.aY.l("uv");
    var x0 = (((("  " + AssignTarget_this.I) + " = ") + value$proxy1.d) + ";");
    var AssignTarget_this$2 = ctx.aM.gA;
    var value$proxy2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().g8(ctx.fj.l("vp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fn(), $m_Ltrivalibs_graphics_math_gpu_vec4$().aq(ctx.aY.l("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a3(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$());
    var $x_1 = $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs([x0, (((("  " + AssignTarget_this$2.I) + " = ") + value$proxy2.d) + ";")]), "", "\n", "");
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = prev;
  }
  program.aX = $x_1;
  var array$1 = reg.X;
  var len = (array$1.length | 0);
  var i = 0;
  while ((i < len)) {
    $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$1[i]);
    i = ((1 + i) | 0);
  }
  var d$2 = ({});
  var ctx$2 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = reg$2;
  try {
    var $x_3 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().fm();
    var AssignTarget_this$1 = ctx$2.an.T("color");
    var value$proxy3 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().ax($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), ctx$2.ae.l("uv"), ctx$2.Z.l("samp"));
    var $x_2 = $x_3.f((((("  " + AssignTarget_this$1.I) + " = ") + value$proxy3.d) + ";"));
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = prev$2;
  }
  program.aL = $x_2;
  var array$2 = reg$2.X;
  var len$1 = (array$2.length | 0);
  var i$1 = 0;
  while ((i$1 < len$1)) {
    $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$2[i$1]);
    i$1 = ((1 + i$1) | 0);
  }
  var b = program.aX;
  var b$1 = program.aL;
  var helperFns$proxy1 = program.as();
  var id = p.n;
  p.n = ((1 + p.n) | 0);
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
  var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["normal"], []))), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
  var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["vp"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).bp.y()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).W.y()], [])));
  var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.a6, sd.a5, fragBuiltinParams);
  var wgsl = (baseWgsl + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
  var args$proxy1 = $m_sr_ScalaRunTime$().au(new ($d_sjs_js_Any.r().C)([wgsl]));
  console.log(...$m_sjsr_Compat$().at(args$proxy1));
  var module = p.e.createShaderModule(({
    "code": wgsl
  }));
  var formats = $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], [])));
  var sizes = $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([8], $m_sjs_js_ArrayOpsCommon$().a([12], [])));
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
  var \u03b42$___2 = $m_Ltrivalibs_graphics_shader_layouts$().D(p.e, result);
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
  var pl = $m_Ltrivalibs_graphics_shader_layouts$().D(p.e, allBgls);
  this.i6 = new $c_Ltrivalibs_graphics_painter_Shade(id, module, vbl, bgls$2[0], panelBgl, pl, false, dict, dict$2);
  var program$2 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
  var d$1 = ({});
  var ctx$1 = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$1), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = reg$1;
  try {
    var AssignTarget_this$3 = ctx$1.aM.T("uv");
    var value$proxy4 = ctx$1.aY.l("uv");
    var x0$4 = (((("  " + AssignTarget_this$3.I) + " = ") + value$proxy4.d) + ";");
    var AssignTarget_this$2$1 = ctx$1.aM.gA;
    var value$proxy5 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().g8($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().ou(ctx$1.fj.l("vp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fn(), ctx$1.fj.l("model")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fn(), $m_Ltrivalibs_graphics_math_gpu_vec4$().aq(ctx$1.aY.l("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a3(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$());
    var $x_8 = $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs([x0$4, (((("  " + AssignTarget_this$2$1.I) + " = ") + value$proxy5.d) + ";")]), "", "\n", "");
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = prev$1;
  }
  program$2.aX = $x_8;
  var array$35 = reg$1.X;
  var len$3 = (array$35.length | 0);
  var i$5 = 0;
  while ((i$5 < len$3)) {
    $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program$2, array$35[i$5]);
    i$5 = ((1 + i$5) | 0);
  }
  var d$2$1 = ({});
  var ctx$2$1 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2$1), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg$2$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev$2$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = reg$2$1;
  try {
    var $x_10 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().fm();
    var AssignTarget_this$4 = ctx$2$1.an.T("color");
    var value$proxy6 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().ax($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "img"), ctx$2$1.ae.l("uv"), ctx$2$1.Z.l("samp"));
    var $x_9 = $x_10.f((((("  " + AssignTarget_this$4.I) + " = ") + value$proxy6.d) + ";"));
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = prev$2$1;
  }
  program$2.aL = $x_9;
  var array$36 = reg$2$1.X;
  var len$4 = (array$36.length | 0);
  var i$6 = 0;
  while ((i$6 < len$4)) {
    $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program$2, array$36[i$6]);
    i$6 = ((1 + i$6) | 0);
  }
  var b$2 = program$2.aX;
  var b$3 = program$2.aL;
  var helperFns$proxy2 = program$2.as();
  var id$2 = p.n;
  p.n = ((1 + p.n) | 0);
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
  var groupDecls$2 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["vp"], $m_sjs_js_ArrayOpsCommon$().a(["model"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).bp.y()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).bp.y()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).W.y()], []))));
  var fragBuiltinParams$2 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$2 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$2, vertexInputStruct$2, vertexOutputStruct$2, fragmentOutputStruct$2, groupDecls$2, sd$2.a6, sd$2.a5, fragBuiltinParams$2);
  var wgsl$2 = (baseWgsl$2 + "\n\n@group(1) @binding(0) var img: texture_2d<f32>;");
  var args$proxy2 = $m_sr_ScalaRunTime$().au(new ($d_sjs_js_Any.r().C)([wgsl$2]));
  console.log(...$m_sjsr_Compat$().at(args$proxy2));
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
  var \u03b42$$2___2 = $m_Ltrivalibs_graphics_shader_layouts$().D(p.e, result$2);
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
  var pl$2 = $m_Ltrivalibs_graphics_shader_layouts$().D(p.e, allBgls$2);
  this.jY = new $c_Ltrivalibs_graphics_painter_Shade(id$2, module$2, vbl$2, bgls$4[0], panelBgl$2, pl$2, false, dict$3, dict$4);
}
$p = $c_Lsketches_rooms_canvases_Paintings.prototype = new $h_O();
$p.constructor = $c_Lsketches_rooms_canvases_Paintings;
/** @constructor */
function $h_Lsketches_rooms_canvases_Paintings() {
}
$h_Lsketches_rooms_canvases_Paintings.prototype = $p;
$p.p8 = (function(spec) {
  var hw = (0.5 * spec.bm);
  var hh = (0.5 * spec.bl);
  var hd = (0.5 * spec.b9);
  var p$proxy1 = (spec.b9 / (spec.fb * spec.bm));
  var mu = ((p$proxy1 < 0.0) ? 0.0 : ((p$proxy1 > 0.45) ? 0.45 : p$proxy1));
  var p$proxy2 = (spec.b9 / (spec.fb * spec.bl));
  var mv = ((p$proxy2 < 0.0) ? 0.0 : ((p$proxy2 > 0.45) ? 0.45 : p$proxy2));
  var faces = [$m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bc($p_Lsketches_rooms_canvases_Paintings__v$1__D__D__D__D__D__T2(this, (-hw), hh, hd, mu, mv), $p_Lsketches_rooms_canvases_Paintings__v$1__D__D__D__D__D__T2(this, (-hw), (-hh), hd, mu, (1.0 - mv)), $p_Lsketches_rooms_canvases_Paintings__v$1__D__D__D__D__D__T2(this, hw, (-hh), hd, (1.0 - mu), (1.0 - mv)), $p_Lsketches_rooms_canvases_Paintings__v$1__D__D__D__D__D__T2(this, hw, hh, hd, (1.0 - mu), mv)), $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bc($p_Lsketches_rooms_canvases_Paintings__v$1__D__D__D__D__D__T2(this, hw, hh, hd, (1.0 - mu), mv), $p_Lsketches_rooms_canvases_Paintings__v$1__D__D__D__D__D__T2(this, hw, (-hh), hd, (1.0 - mu), (1.0 - mv)), $p_Lsketches_rooms_canvases_Paintings__v$1__D__D__D__D__D__T2(this, hw, (-hh), (-hd), 1.0, (1.0 - mv)), $p_Lsketches_rooms_canvases_Paintings__v$1__D__D__D__D__D__T2(this, hw, hh, (-hd), 1.0, mv)), $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bc($p_Lsketches_rooms_canvases_Paintings__v$1__D__D__D__D__D__T2(this, (-hw), hh, hd, mu, mv), $p_Lsketches_rooms_canvases_Paintings__v$1__D__D__D__D__D__T2(this, (-hw), (-hh), hd, mu, (1.0 - mv)), $p_Lsketches_rooms_canvases_Paintings__v$1__D__D__D__D__D__T2(this, (-hw), (-hh), (-hd), 0.0, (1.0 - mv)), $p_Lsketches_rooms_canvases_Paintings__v$1__D__D__D__D__D__T2(this, (-hw), hh, (-hd), 0.0, mv)), $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bc($p_Lsketches_rooms_canvases_Paintings__v$1__D__D__D__D__D__T2(this, (-hw), hh, hd, mu, mv), $p_Lsketches_rooms_canvases_Paintings__v$1__D__D__D__D__D__T2(this, hw, hh, hd, (1.0 - mu), mv), $p_Lsketches_rooms_canvases_Paintings__v$1__D__D__D__D__D__T2(this, hw, hh, (-hd), (1.0 - mu), 0.0), $p_Lsketches_rooms_canvases_Paintings__v$1__D__D__D__D__D__T2(this, (-hw), hh, (-hd), mu, 0.0)), $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bc($p_Lsketches_rooms_canvases_Paintings__v$1__D__D__D__D__D__T2(this, (-hw), (-hh), hd, mu, (1.0 - mv)), $p_Lsketches_rooms_canvases_Paintings__v$1__D__D__D__D__D__T2(this, hw, (-hh), hd, (1.0 - mu), (1.0 - mv)), $p_Lsketches_rooms_canvases_Paintings__v$1__D__D__D__D__D__T2(this, hw, (-hh), (-hd), (1.0 - mu), 1.0), $p_Lsketches_rooms_canvases_Paintings__v$1__D__D__D__D__D__T2(this, (-hw), (-hh), (-hd), mu, 1.0)), $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bc($p_Lsketches_rooms_canvases_Paintings__v$1__D__D__D__D__D__T2(this, (-hw), hh, (-hd), 0.0, 0.0), $p_Lsketches_rooms_canvases_Paintings__v$1__D__D__D__D__D__T2(this, (-hw), (-hh), (-hd), 0.0, 1.0), $p_Lsketches_rooms_canvases_Paintings__v$1__D__D__D__D__D__T2(this, hw, (-hh), (-hd), 1.0, 1.0), $p_Lsketches_rooms_canvases_Paintings__v$1__D__D__D__D__D__T2(this, hw, hh, (-hd), 1.0, 0.0))];
  var $x_2 = this.fP;
  var mesh$proxy1 = $m_Ltrivalibs_graphics_geometry_Mesh$().j6(faces, null, 0, new $c_Ltrivalibs_graphics_geometry_package$package$$anon$1(0));
  var vl = new $c_Ltrivalibs_graphics_geometry_VertexLayout$named(new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$(), new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$(), $m_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$())));
  var f = ((v$3, ref$3) => {
    var values$proxy1 = vl.hk.bv(v$3);
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
  while ((fi < (mesh$proxy1.G.length | 0))) {
    var n = (mesh$proxy1.G[fi].length | 0);
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
    while ((fi < (mesh$proxy1.G.length | 0))) {
      var arr = mesh$proxy1.G[fi];
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
    while ((fi < (mesh$proxy1.G.length | 0))) {
      var arr$2 = mesh$proxy1.G[fi];
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
    var $x_1 = new $c_Ltrivalibs_graphics_geometry_BufferedGeometry(verts, \u03b4proxy2.jd(idxBuf, vertexCount));
  }
  return $x_2.jb($x_1, (void 0), (void 0), (void 0));
});
var $d_Lsketches_rooms_canvases_Paintings = new $TypeData().i($c_Lsketches_rooms_canvases_Paintings, "sketches.rooms.canvases.Paintings", ({
  dq: 1
}));
function $p_Lsketches_rooms_canvases_Paintings$Wall__corner$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__D__D__D__T2($thiz, center$1, width$2, height$2, su, sv, u, w) {
  return new $c_T2($f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a2(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a2(), center$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a2(), $thiz.i8, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), (0.5 * (su * width$2)))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a2(), $thiz.hh, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), (0.5 * (sv * height$2)))), new $c_Ltrivalibs_graphics_math_cpu_Vec2(u, w));
}
/** @constructor */
function $c_Lsketches_rooms_canvases_Paintings$Wall(outer, center, width, height, rotY, inwardNormal) {
  this.jZ = null;
  this.fc = 0.0;
  this.fQ = 0.0;
  this.k0 = null;
  this.hh = null;
  this.i8 = null;
  this.k1 = null;
  this.ba = null;
  this.i7 = null;
  this.aF = null;
  this.jZ = center;
  this.fc = width;
  this.fQ = height;
  this.k0 = inwardNormal;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.aF = outer;
  this.hh = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
  this.i8 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a2(), this.hh, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), inwardNormal);
  this.k1 = $m_Ltrivalibs_graphics_math_cpu_Quat$().lU(rotY);
  this.ba = [];
  var face = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bc($p_Lsketches_rooms_canvases_Paintings$Wall__corner$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__D__D__D__T2(this, center, width, height, (-1.0), 1.0, 0.0, 0.0), $p_Lsketches_rooms_canvases_Paintings$Wall__corner$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__D__D__D__T2(this, center, width, height, (-1.0), (-1.0), 0.0, 1.0), $p_Lsketches_rooms_canvases_Paintings$Wall__corner$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__D__D__D__T2(this, center, width, height, 1.0, (-1.0), 1.0, 1.0), $p_Lsketches_rooms_canvases_Paintings$Wall__corner$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__D__D__D__T2(this, center, width, height, 1.0, 1.0, 1.0, 0.0));
  var $x_2 = outer.fP;
  var mesh$proxy2 = $m_Ltrivalibs_graphics_geometry_Mesh$().j6([face], null, 0, new $c_Ltrivalibs_graphics_geometry_package$package$$anon$1(0));
  var vl = new $c_Ltrivalibs_graphics_geometry_VertexLayout$named(new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$(), new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$(), $m_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$())));
  var f = ((v$3, n$3, ref$3) => {
    var nVal = new $c_T3(n$3.t, n$3.w, n$3.u);
    var values$proxy2 = $m_sr_Tuples$().lK(vl.hk.bv(v$3), $m_sr_Tuples$().j9(nVal, $m_T$package$EmptyTuple$()));
    var baseOffset$proxy4 = (ref$3.off | 0);
    var nestedValues = values$proxy2.g(0);
    var value = nestedValues.g(0);
    ref$3.dv.setFloat32(baseOffset$proxy4, Math.fround(value), true);
    var tailOffset = ((4 + baseOffset$proxy4) | 0);
    var value$2 = nestedValues.g(1);
    ref$3.dv.setFloat32(tailOffset, Math.fround(value$2), true);
    var tailOffset$2 = ((4 + tailOffset) | 0);
    var value$3 = nestedValues.g(2);
    ref$3.dv.setFloat32(tailOffset$2, Math.fround(value$3), true);
    var tailOffset$4 = ((12 + baseOffset$proxy4) | 0);
    var nestedValues$2 = values$proxy2.g(1);
    var value$4 = nestedValues$2.g(0);
    ref$3.dv.setFloat32(tailOffset$4, Math.fround(value$4), true);
    var tailOffset$5 = ((4 + tailOffset$4) | 0);
    var value$5 = nestedValues$2.g(1);
    ref$3.dv.setFloat32(tailOffset$5, Math.fround(value$5), true);
    var tailOffset$7 = ((8 + tailOffset$4) | 0);
    var nestedValues$3 = values$proxy2.g(2);
    var value$6 = nestedValues$3.g(0);
    ref$3.dv.setFloat32(tailOffset$7, Math.fround(value$6), true);
    var tailOffset$8 = ((4 + tailOffset$7) | 0);
    var value$7 = nestedValues$3.g(1);
    ref$3.dv.setFloat32(tailOffset$8, Math.fround(value$7), true);
    var tailOffset$9 = ((4 + tailOffset$8) | 0);
    var value$8 = nestedValues$3.g(2);
    ref$3.dv.setFloat32(tailOffset$9, Math.fround(value$8), true);
  });
  var \u03b4proxy5 = $m_Ltrivalibs_graphics_geometry_buffers$package$();
  mesh$proxy2.lP();
  var vertexCount = 0;
  var hasQuads = false;
  var fi = 0;
  while ((fi < (mesh$proxy2.G.length | 0))) {
    var n = (mesh$proxy2.G[fi].length | 0);
    vertexCount = ((vertexCount + n) | 0);
    if ((n === 4)) {
      hasQuads = true;
    }
    fi = ((1 + fi) | 0);
  }
  var count$proxy2 = vertexCount;
  var buffer = new ArrayBuffer((count$proxy2 << 5));
  var verts = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), count$proxy2);
  var vi = 0;
  if ((!hasQuads)) {
    fi = 0;
    while ((fi < (mesh$proxy2.G.length | 0))) {
      var arr = mesh$proxy2.G[fi];
      var opt$proxy1 = mesh$proxy2.bn[fi].fd;
      var si = 0;
      while ((si < (arr.length | 0))) {
        var x0 = arr[si];
        var index$proxy4 = vi;
        var offset$proxy17 = (index$proxy4 << 5);
        var x2 = new ($a_Ltrivalibs_bufferdata_BufferView())(verts.dv, offset$proxy17);
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
    while ((fi < (mesh$proxy2.G.length | 0))) {
      var arr$2 = mesh$proxy2.G[fi];
      var n$2 = (arr$2.length | 0);
      var opt$proxy2 = mesh$proxy2.bn[fi].fd;
      var si$2 = 0;
      while ((si$2 < n$2)) {
        var x0$1 = arr$2[si$2];
        var index$proxy5 = vi;
        var offset$proxy18 = (index$proxy5 << 5);
        var x2$1 = new ($a_Ltrivalibs_bufferdata_BufferView())(verts.dv, offset$proxy18);
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
    var $x_1 = new $c_Ltrivalibs_graphics_geometry_BufferedGeometry(verts, \u03b4proxy5.jd(idxBuf, vertexCount));
  }
  this.i7 = $x_2.jb($x_1, (void 0), (void 0), (void 0));
}
$p = $c_Lsketches_rooms_canvases_Paintings$Wall.prototype = new $h_O();
$p.constructor = $c_Lsketches_rooms_canvases_Paintings$Wall;
/** @constructor */
function $h_Lsketches_rooms_canvases_Paintings$Wall() {
}
$h_Lsketches_rooms_canvases_Paintings$Wall.prototype = $p;
$p.nI = (function(spec, u, v) {
  var hd = (0.5 * spec.b9);
  var pos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a2(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a2(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a2(), this.jZ, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a2(), this.i8, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), (u - (0.5 * this.fc)))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a2(), this.hh, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), (v - (0.5 * this.fQ)))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a2(), this.k0, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), (hd + 0.02)));
  var m = $m_Ltrivalibs_graphics_math_cpu_Mat4$().lV(pos, this.k1, new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0));
  var Painter_this = this.aF.fP;
  var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
  var uv$proxy1 = ul$proxy1.aW;
  var buffer = new ArrayBuffer(64);
  var arr$proxy9 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
  var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy9.dv, 0), Painter_this.e, uv$proxy1);
  b.V.P(b.q, m);
  var $x_2 = b.U.queue;
  var $x_1 = b.R;
  var s$proxy4 = b.q;
  $x_2.writeBuffer($x_1, 0.0, s$proxy4.dv.buffer);
  var Bindable_this = this.aF.fP.h9(this.aF.p8(spec), this.aF.jY, "none", (void 0));
  var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("model", b);
  var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", this.aF.i4);
  var e3$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("img", spec.fO);
  var \u03b4scrutinee218 = e1$proxy1.x;
  var idx = (Bindable_this.Q.M.model | 0);
  while (((Bindable_this.H.length | 0) <= idx)) {
    Bindable_this.H.push(null);
  }
  Bindable_this.H[idx] = \u03b4scrutinee218;
  var \u03b4scrutinee232 = e2$proxy1.x;
  var idx$2 = (Bindable_this.Q.M.samp | 0);
  while (((Bindable_this.H.length | 0) <= idx$2)) {
    Bindable_this.H.push(null);
  }
  Bindable_this.H[idx$2] = \u03b4scrutinee232;
  var \u03b4scrutinee252 = e3$proxy1.x;
  var idx$3 = (Bindable_this.Q.aw.img | 0);
  while (((Bindable_this.Y.length | 0) <= idx$3)) {
    Bindable_this.Y.push(null);
  }
  Bindable_this.Y[idx$3] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee252);
  var rect = new $c_Ltrivalibs_graphics_math_cpu_Vec4((u / this.fc), (1.0 - (v / this.fQ)), ((0.5 * spec.bm) / this.fc), ((0.5 * spec.bl) / this.fQ));
  var fade = new $c_Ltrivalibs_graphics_math_cpu_Vec2((this.aF.i5 / this.fc), (this.aF.i5 / this.fQ));
  var h = new $c_Lsketches_rooms_canvases_HungPainting(b, Bindable_this, rect, fade);
  this.ba.push(h);
  return h;
});
$p.p4 = (function() {
  return (((this.ba.length | 0) > 0) ? this.ba[0].jV : new $c_Ltrivalibs_graphics_math_cpu_Vec4(0.0, 0.0, 0.0, 0.0));
});
$p.p2 = (function() {
  return (((this.ba.length | 0) > 0) ? this.ba[0].jU : new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.01, 0.01));
});
$p.p5 = (function() {
  return (((this.ba.length | 0) > 0) ? this.aF.jX : 0.0);
});
$p.nf = (function(texPanel) {
  var Bindable_this = this.aF.fP.h9(this.i7, this.aF.i6, "none", (void 0));
  var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", this.aF.i4);
  var e2$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", texPanel);
  var \u03b4scrutinee258 = e1$proxy2.x;
  var idx = (Bindable_this.Q.M.samp | 0);
  while (((Bindable_this.H.length | 0) <= idx)) {
    Bindable_this.H.push(null);
  }
  Bindable_this.H[idx] = \u03b4scrutinee258;
  var \u03b4scrutinee274 = e2$proxy2.x;
  var idx$2 = (Bindable_this.Q.aw.tex | 0);
  while (((Bindable_this.Y.length | 0) <= idx$2)) {
    Bindable_this.Y.push(null);
  }
  Bindable_this.Y[idx$2] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee274);
  return Bindable_this;
});
$p.oI = (function() {
  var out = [];
  var i = 0;
  while ((i < (this.ba.length | 0))) {
    out.push(this.ba[i].jW);
    i = ((1 + i) | 0);
  }
  return out;
});
var $d_Lsketches_rooms_canvases_Paintings$Wall = new $TypeData().i($c_Lsketches_rooms_canvases_Paintings$Wall, "sketches.rooms.canvases.Paintings$Wall", ({
  dr: 1
}));
/** @constructor */
function $c_Lsketches_rooms_canvases_Wall$package$() {
  this.mF = 0.0;
  this.mD = 0.0;
  this.mE = 0.0;
  this.mF = 0.5;
  this.mD = 2.5;
  this.mE = 0.28;
}
$p = $c_Lsketches_rooms_canvases_Wall$package$.prototype = new $h_O();
$p.constructor = $c_Lsketches_rooms_canvases_Wall$package$;
/** @constructor */
function $h_Lsketches_rooms_canvases_Wall$package$() {
}
$h_Lsketches_rooms_canvases_Wall$package$.prototype = $p;
$p.p3 = (function(uv, rect, fade) {
  var hx = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a3().ai(rect);
  var hy = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a3().ah(rect);
  var dx = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().gK($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ag().F(uv), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a3().F(rect));
  var dy = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().gK($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ag().z(uv), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a3().z(rect));
  var hMask = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().bu($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().lA(dx), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aN(hx, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ag().F(fade)), hx);
  var upper = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().bu(dy, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().gK($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ms(hy), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().af($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ag().z(fade), 0.5)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ms(hy));
  var lower = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().bu(dy, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aN(hy, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().af($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ag().z(fade), 2.5)), hy);
  var grad = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().lJ($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().lx($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aN(dy, hy), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().j3($m_Ltrivalibs_graphics_math_gpu_LeftScalar$().b2().b3((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aP(2.0)) + " * ") + hy.d) + ")")), 1.0E-4)));
  var vert = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().j3($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().af(grad, 0.72), 0.28);
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().br($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().br($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().br(hMask, upper), lower), vert);
});
var $d_Lsketches_rooms_canvases_Wall$package$ = new $TypeData().i($c_Lsketches_rooms_canvases_Wall$package$, "sketches.rooms.canvases.Wall$package$", ({
  ds: 1
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
    $m_Lsketches_rooms_canvases_Canvases$package$().oV();
  } catch (e) {
    if (false) {
      $m_s_util_CommandLineParser$().p7(e);
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
$p.lR = (function(pos, octaves, freqMul, ampMul, seed) {
  var acc = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(0.0);
  var freq = 1.0;
  var amp = 1.0;
  var total = 0.0;
  var i = 0;
  while ((i < octaves)) {
    var $x_3 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
    var $x_2 = acc;
    var $x_1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
    var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy1 = $m_Ltrivalibs_graphics_shader_lib_random_Simplex$().iS;
    var a1$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().lB($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().j4(pos, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().O(), freq), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().O(), seed);
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().hY(fn$proxy1);
    acc = $x_3.aN($x_2, $x_1.af($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((WgslFn$_this.hT(fn$proxy1) + "(") + a1$proxy1) + ")")), amp));
    total = (total + amp);
    freq = (freq * freqMul);
    amp = (amp * ampMul);
    i = ((1 + i) | 0);
  }
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().j2(acc, total);
});
var $d_Lsketchlib_shaders_Noise$ = new $TypeData().i($c_Lsketchlib_shaders_Noise$, "sketchlib.shaders.Noise$", ({
  dt: 1
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
  this.gh = null;
  this.k2 = null;
  this.gh = p;
  this.k2 = shade;
}
$p = $c_Lsketchlib_utils_bake_TextureBaker.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_bake_TextureBaker;
/** @constructor */
function $h_Lsketchlib_utils_bake_TextureBaker() {
}
$h_Lsketchlib_utils_bake_TextureBaker.prototype = $p;
$p.ml = (function(form, width, height, transform, format, mips) {
  var Painter_this = this.gh;
  var value$proxy1 = ((transform === (void 0)) ? new $c_Ltrivalibs_graphics_math_cpu_Mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0) : transform);
  var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
  var uv$proxy1 = ul$proxy1.aW;
  var buffer = new ArrayBuffer(64);
  var arr$proxy1 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
  var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy1.dv, 0), Painter_this.e, uv$proxy1);
  b.V.P(b.q, value$proxy1);
  var $x_2 = b.U.queue;
  var $x_1 = b.R;
  var s$proxy1 = b.q;
  $x_2.writeBuffer($x_1, 0.0, s$proxy1.dv.buffer);
  var Bindable_this = this.gh.h9(form, this.k2, "none", (void 0));
  var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("model", b);
  var \u03b4scrutinee4 = e1$proxy1.x;
  var idx = (Bindable_this.Q.M.model | 0);
  while (((Bindable_this.H.length | 0) <= idx)) {
    Bindable_this.H.push(null);
  }
  Bindable_this.H[idx] = \u03b4scrutinee4;
  var format$1 = ((format === (void 0)) ? "rgba8unorm" : format);
  return this.gh.bt(width, height, (void 0), (void 0), (void 0), (void 0), mips, format$1, (void 0), Bindable_this, (void 0), (void 0), (void 0));
});
$p.lE = (function(form, width, height, transform, format, mips) {
  var panel = this.ml(form, width, height, transform, format, mips);
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(this.gh, panel);
  return panel;
});
var $d_Lsketchlib_utils_bake_TextureBaker = new $TypeData().i($c_Lsketchlib_utils_bake_TextureBaker, "sketchlib.utils.bake.TextureBaker", ({
  du: 1
}));
function $p_Lsketchlib_utils_bake_TextureBaker$__buildVert__Ltrivalibs_graphics_shader_dsl_Program__V($thiz, program) {
  var d = ({});
  var ctx = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = reg;
  try {
    var uv = ctx.aY.l("uv");
    var AssignTarget_this = ctx.aM.T("worldPos");
    var value$proxy2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fs($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().g8(ctx.fj.l("model"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fn(), $m_Ltrivalibs_graphics_math_gpu_vec4$().aq(ctx.aY.l("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a3(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$()));
    var x0 = (((("  " + AssignTarget_this.I) + " = ") + value$proxy2.d) + ";");
    var AssignTarget_this$2 = ctx.aM.T("normal");
    var value$proxy3 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().oB($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fs($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().g8(ctx.fj.l("model"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fn(), $m_Ltrivalibs_graphics_math_gpu_vec4$().aq(ctx.aY.l("normal"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(0.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a3(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$())), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().O());
    var x1 = (((("  " + AssignTarget_this$2.I) + " = ") + value$proxy3.d) + ";");
    var AssignTarget_this$3 = ctx.aM.T("uv");
    var x2 = (((("  " + AssignTarget_this$3.I) + " = ") + uv.d) + ";");
    var AssignTarget_this$4 = ctx.aM.gA;
    var $x_5 = $m_Ltrivalibs_graphics_math_gpu_vec4$();
    var $x_4 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$();
    var $x_3 = $m_Ltrivalibs_graphics_math_gpu_vec2$();
    var $x_2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ag().F(uv);
    var e$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ag().z(uv);
    var value$proxy4 = $x_5.ax($x_4.nz($x_3.aq($x_2, $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().b2().b3((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aP(1.0)) + " - ") + e$proxy1.d) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ag()), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(1.0));
    var $x_1 = $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs([x0, x1, x2, (((("  " + AssignTarget_this$4.I) + " = ") + value$proxy4.d) + ";")]), "", "\n", "");
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = prev;
  }
  program.aX = $x_1;
  var array$1 = reg.X;
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
$p.lF = (function(p, frag) {
  var program = new $c_Ltrivalibs_graphics_shader_dsl_Program();
  $p_Lsketchlib_utils_bake_TextureBaker$__buildVert__Ltrivalibs_graphics_shader_dsl_Program__V(this, program);
  var d = ({});
  var ctx = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = reg;
  try {
    var AssignTarget_this = ctx.an.T("color");
    var value$proxy5 = frag.lD(ctx.ae.l("worldPos"), ctx.ae.l("normal"), ctx.ae.l("uv"));
    var $x_1 = $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs([(((("  " + AssignTarget_this.I) + " = ") + value$proxy5.d) + ";")]), "", "\n", "");
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = prev;
  }
  program.aL = $x_1;
  var array$1 = reg.X;
  var len = (array$1.length | 0);
  var i = 0;
  while ((i < len)) {
    $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$1[i]);
    i = ((1 + i) | 0);
  }
  var b = program.aX;
  var b$1 = program.aL;
  var helperFns$proxy1 = program.as();
  var id = p.n;
  p.n = ((1 + p.n) | 0);
  var names = $m_sjs_js_ArrayOpsCommon$().a(["model"], []);
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
  var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef(b, b$1, helperFns$proxy1);
  var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["normal"], []))), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
  var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["worldPos"], $m_sjs_js_ArrayOpsCommon$().a(["normal"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], []))), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["model"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).bp.y()], []));
  var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.a6, sd.a5, fragBuiltinParams);
  var args$proxy1 = $m_sr_ScalaRunTime$().au(new ($d_sjs_js_Any.r().C)([baseWgsl]));
  console.log(...$m_sjsr_Compat$().at(args$proxy1));
  var module = p.e.createShaderModule(({
    "code": baseWgsl
  }));
  var formats = $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], [])));
  var sizes = $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([8], $m_sjs_js_ArrayOpsCommon$().a([12], [])));
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
  var descriptors = $x_3.a([$x_2.a([({
    "binding": 0,
    "visibility": 1,
    "buffer": _2
  })], [])], []);
  var result = [];
  var len$1 = (descriptors.length | 0);
  var i$4 = 0;
  while ((i$4 < len$1)) {
    var x0$2 = descriptors[i$4];
    (result.push(p.e.createBindGroupLayout(({
      "entries": x0$2
    }))) | 0);
    i$4 = ((1 + i$4) | 0);
  }
  var \u03b42$___1 = result;
  var \u03b42$___2 = $m_Ltrivalibs_graphics_shader_layouts$().D(p.e, result);
  var bgls$2 = \u03b42$___1;
  var pl = $m_Ltrivalibs_graphics_shader_layouts$().D(p.e, bgls$2);
  return new $c_Lsketchlib_utils_bake_TextureBaker(p, new $c_Ltrivalibs_graphics_painter_Shade(id, module, vbl, bgls$2[0], null, pl, false, dict, dict$2));
});
$p.mX = (function(p, frag) {
  var program = new $c_Ltrivalibs_graphics_shader_dsl_Program();
  $p_Lsketchlib_utils_bake_TextureBaker$__buildVert__Ltrivalibs_graphics_shader_dsl_Program__V(this, program);
  var d = ({});
  var ctx = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = reg;
  try {
    var $x_1 = frag.lC(ctx.ae.l("worldPos"), ctx.ae.l("normal"), ctx.ae.l("uv"), ctx.an.T("color"));
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = prev;
  }
  program.aL = $x_1;
  var array = reg.X;
  var len = (array.length | 0);
  var i = 0;
  while ((i < len)) {
    $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array[i]);
    i = ((1 + i) | 0);
  }
  var b = program.aX;
  var b$1 = program.aL;
  var helperFns$proxy2 = program.as();
  var id = p.n;
  p.n = ((1 + p.n) | 0);
  var names = $m_sjs_js_ArrayOpsCommon$().a(["model"], []);
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
  var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef(b, b$1, helperFns$proxy2);
  var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["normal"], []))), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
  var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["worldPos"], $m_sjs_js_ArrayOpsCommon$().a(["normal"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], []))), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["model"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).bp.y()], []));
  var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.a6, sd.a5, fragBuiltinParams);
  var args$proxy2 = $m_sr_ScalaRunTime$().au(new ($d_sjs_js_Any.r().C)([baseWgsl]));
  console.log(...$m_sjsr_Compat$().at(args$proxy2));
  var module = p.e.createShaderModule(({
    "code": baseWgsl
  }));
  var formats = $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], [])));
  var sizes = $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([8], $m_sjs_js_ArrayOpsCommon$().a([12], [])));
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
  var descriptors = $x_3.a([$x_2.a([({
    "binding": 0,
    "visibility": 1,
    "buffer": _2
  })], [])], []);
  var result = [];
  var len$1 = (descriptors.length | 0);
  var i$4 = 0;
  while ((i$4 < len$1)) {
    var x0$1 = descriptors[i$4];
    (result.push(p.e.createBindGroupLayout(({
      "entries": x0$1
    }))) | 0);
    i$4 = ((1 + i$4) | 0);
  }
  var \u03b42$___1 = result;
  var \u03b42$___2 = $m_Ltrivalibs_graphics_shader_layouts$().D(p.e, result);
  var bgls$2 = \u03b42$___1;
  var pl = $m_Ltrivalibs_graphics_shader_layouts$().D(p.e, bgls$2);
  return new $c_Lsketchlib_utils_bake_TextureBaker(p, new $c_Ltrivalibs_graphics_painter_Shade(id, module, vbl, bgls$2[0], null, pl, false, dict, dict$2));
});
$p.n5 = (function(p, form, width, height, transform, format, mips, frag) {
  return $m_Lsketchlib_utils_bake_TextureBaker$().lF(p, frag).lE(form, width, height, transform, format, mips);
});
$p.n6 = (function(p, form, width, height, transform, format, mips, frag) {
  return $m_Lsketchlib_utils_bake_TextureBaker$().mX(p, frag).lE(form, width, height, transform, format, mips);
});
var $d_Lsketchlib_utils_bake_TextureBaker$ = new $TypeData().i($c_Lsketchlib_utils_bake_TextureBaker$, "sketchlib.utils.bake.TextureBaker$", ({
  dv: 1
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
$p.mZ = (function(p, scene, intensity, threshold, blurRadius, mipLevels) {
  if ((mipLevels < 2)) {
    var message$proxy1 = (("bloom mipLevels must be >= 2 (got " + mipLevels) + ")");
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy1)).aV;
  }
  var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy1 = ul$proxy1.aW;
  var buffer = new ArrayBuffer(4);
  var arr$proxy1 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
  var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy1.dv, 0), p.e, uv$proxy1);
  b.V.P(b.q, blurRadius);
  var $x_2 = b.U.queue;
  var $x_1 = b.R;
  var s$proxy1 = b.q;
  $x_2.writeBuffer($x_1, 0.0, s$proxy1.dv.buffer);
  var ul$proxy2 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy2 = ul$proxy2.aW;
  var buffer$2 = new ArrayBuffer(4);
  var arr$proxy2 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
  var b$2 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy2.dv, 0), p.e, uv$proxy2);
  b$2.V.P(b$2.q, intensity);
  var $x_4 = b$2.U.queue;
  var $x_3 = b$2.R;
  var s$proxy2 = b$2.q;
  $x_4.writeBuffer($x_3, 0.0, s$proxy2.dv.buffer);
  var sampler = p.oX();
  var program = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  var d = ({});
  var ctx = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = reg;
  try {
    var color = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "color");
    var brightness = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "brightness");
    var x0 = color.S($m_Ltrivalibs_graphics_math_gpu_expr$package$().fp($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "scene"), $m_Ltrivalibs_graphics_math_gpu_ivec2$().b1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fr(ctx.bq))));
    var x1 = brightness.S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aN($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().aN($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().af($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a3().F(color), 0.2126), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().af($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a3().z(color), 0.7152)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().af($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a3().ai(color), 0.0722)));
    var AssignTarget_this = ctx.an.T("color");
    var value$proxy1 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().oY($m_Ltrivalibs_graphics_math_gpu_vec4$().mW($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(1.0)), color, $m_Ltrivalibs_graphics_math_gpu_expr$package$().nB(brightness, ctx.Z.l("threshold")));
    var $x_5 = $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs([x0, x1, (((("  " + AssignTarget_this.I) + " = ") + value$proxy1.d) + ";")]), "", "\n", "");
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = prev;
  }
  program.a0 = $x_5;
  var array$1 = reg.X;
  var len = (array$1.length | 0);
  var i = 0;
  while ((i < len)) {
    $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$1[i]);
    i = ((1 + i) | 0);
  }
  var b$1 = program.a0;
  var helperFns$proxy1 = program.as();
  var id = p.n;
  p.n = ((1 + p.n) | 0);
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
  var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["threshold"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).W.y()], []));
  var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.a6, sd.a5, fragBuiltinParams);
  var wgsl = (baseWgsl + "\n\n@group(1) @binding(0) var scene: texture_2d<f32>;");
  var args$proxy1 = $m_sr_ScalaRunTime$().au(new ($d_sjs_js_Any.r().C)([wgsl]));
  console.log(...$m_sjsr_Compat$().at(args$proxy1));
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
  var \u03b46$___2 = $m_Ltrivalibs_graphics_shader_layouts$().D(p.e, result);
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
  var pl = $m_Ltrivalibs_graphics_shader_layouts$().D(p.e, allBgls);
  var thresholdShade = new $c_Ltrivalibs_graphics_painter_Shade(id, module, null, bgls$2[0], panelBgl, pl, false, dict, dict$2);
  var program$2 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  var d$1 = ({});
  var ctx$1 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$1), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = reg$1;
  try {
    var $x_10 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().fm();
    var AssignTarget_this$1 = ctx$1.an.T("color");
    var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy1 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$().lh;
    var a1$proxy1 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex");
    var a2$proxy1 = ctx$1.Z.l("samp");
    var a3$proxy1 = ctx$1.ae.l("uv");
    var a4$proxy1 = ctx$1.Z.l("blurRadius");
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().hY(fn$proxy1);
    var value$proxy2 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((((((WgslFn$_this.hT(fn$proxy1) + "(") + a1$proxy1) + ", ") + a2$proxy1) + ", ") + a3$proxy1) + ", ") + a4$proxy1) + ")"));
    var $x_9 = $x_10.f((((("  " + AssignTarget_this$1.I) + " = ") + value$proxy2.d) + ";"));
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = prev$1;
  }
  program$2.a0 = $x_9;
  var array$16 = reg$1.X;
  var len$2 = (array$16.length | 0);
  var i$4 = 0;
  while ((i$4 < len$2)) {
    $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program$2, array$16[i$4]);
    i$4 = ((1 + i$4) | 0);
  }
  var b$3 = program$2.a0;
  var helperFns$proxy2 = program$2.as();
  var id$2 = p.n;
  p.n = ((1 + p.n) | 0);
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
  var groupDecls$2 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["blurRadius"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).W.y()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).W.y()], [])));
  var fragBuiltinParams$2 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$2 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$2, vertexInputStruct$2, vertexOutputStruct$2, fragmentOutputStruct$2, groupDecls$2, sd$2.a6, sd$2.a5, fragBuiltinParams$2);
  var wgsl$2 = (baseWgsl$2 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
  var args$proxy2 = $m_sr_ScalaRunTime$().au(new ($d_sjs_js_Any.r().C)([wgsl$2]));
  console.log(...$m_sjsr_Compat$().at(args$proxy2));
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
  var \u03b46$$2___2 = $m_Ltrivalibs_graphics_shader_layouts$().D(p.e, result$2);
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
  var pl$2 = $m_Ltrivalibs_graphics_shader_layouts$().D(p.e, allBgls$2);
  var downsampleShade = new $c_Ltrivalibs_graphics_painter_Shade(id$2, module$2, null, bgls$4[0], panelBgl$2, pl$2, false, dict$3, dict$4);
  var program$3 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  var d$2 = ({});
  var ctx$2 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = reg$2;
  try {
    var $x_16 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().fm();
    var AssignTarget_this$2 = ctx$2.an.T("color");
    var WgslFn$_this$1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy2 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$().iR;
    var a1$proxy2 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex");
    var a2$proxy2 = ctx$2.Z.l("samp");
    var a3$proxy2 = ctx$2.ae.l("uv");
    var a4$proxy2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().af(ctx$2.Z.l("blurRadius"), 0.5);
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().hY(fn$proxy2);
    var value$proxy3 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((((((WgslFn$_this$1.hT(fn$proxy2) + "(") + a1$proxy2) + ", ") + a2$proxy2) + ", ") + a3$proxy2) + ", ") + a4$proxy2) + ")"));
    var $x_15 = $x_16.f((((("  " + AssignTarget_this$2.I) + " = ") + value$proxy3.d) + ";"));
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = prev$2;
  }
  program$3.a0 = $x_15;
  var array$35 = reg$2.X;
  var len$4 = (array$35.length | 0);
  var i$6 = 0;
  while ((i$6 < len$4)) {
    $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program$3, array$35[i$6]);
    i$6 = ((1 + i$6) | 0);
  }
  var b$4 = program$3.a0;
  var helperFns$proxy3 = program$3.as();
  var id$3 = p.n;
  p.n = ((1 + p.n) | 0);
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
  var groupDecls$3 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["blurRadius"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).W.y()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).W.y()], [])));
  var fragBuiltinParams$3 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$3 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$3, vertexInputStruct$3, vertexOutputStruct$3, fragmentOutputStruct$3, groupDecls$3, sd$3.a6, sd$3.a5, fragBuiltinParams$3);
  var wgsl$3 = (baseWgsl$3 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
  var args$proxy3 = $m_sr_ScalaRunTime$().au(new ($d_sjs_js_Any.r().C)([wgsl$3]));
  console.log(...$m_sjsr_Compat$().at(args$proxy3));
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
  var \u03b46$$3___2 = $m_Ltrivalibs_graphics_shader_layouts$().D(p.e, result$3);
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
  var pl$3 = $m_Ltrivalibs_graphics_shader_layouts$().D(p.e, allBgls$3);
  var upsampleShade = new $c_Ltrivalibs_graphics_painter_Shade(id$3, module$3, null, bgls$6[0], panelBgl$3, pl$3, false, dict$5, dict$6);
  var layers = [];
  var Bindable_this = p.bd(thresholdShade, (void 0), (void 0), (void 0));
  var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("scene", scene);
  var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("threshold", threshold);
  var \u03b4scrutinee197 = e1$proxy1.x;
  var idx = (Bindable_this.A.aw.scene | 0);
  while (((Bindable_this.L.length | 0) <= idx)) {
    Bindable_this.L.push(null);
  }
  Bindable_this.L[idx] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee197);
  var \u03b4scrutinee201 = (+e2$proxy1.x);
  var idx$2 = (Bindable_this.A.M.threshold | 0);
  if (((idx$2 < (Bindable_this.h.length | 0)) && (Bindable_this.h[idx$2] !== null))) {
    var BufferBinding_this$5 = Bindable_this.h[idx$2];
    BufferBinding_this$5.V.P(BufferBinding_this$5.q, \u03b4scrutinee201);
    var $x_22 = BufferBinding_this$5.U.queue;
    var $x_21 = BufferBinding_this$5.R;
    var s$proxy5 = BufferBinding_this$5.q;
    $x_22.writeBuffer($x_21, 0.0, s$proxy5.dv.buffer);
  } else {
    var uv$2 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var device$proxy1 = Bindable_this.fT.e;
    var buffer$3 = new ArrayBuffer(4);
    var arr$proxy3 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$3), 1);
    var b$3$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy3.dv, 0), device$proxy1, uv$2);
    b$3$1.V.P(b$3$1.q, \u03b4scrutinee201);
    var $x_24 = b$3$1.U.queue;
    var $x_23 = b$3$1.R;
    var s$proxy6 = b$3$1.q;
    $x_24.writeBuffer($x_23, 0.0, s$proxy6.dv.buffer);
    while (((Bindable_this.h.length | 0) <= idx$2)) {
      Bindable_this.h.push(null);
    }
    Bindable_this.h[idx$2] = b$3$1;
  }
  layers.push(Bindable_this);
  var di = 0;
  while ((di < ((mipLevels - 1) | 0))) {
    var mipSource$1 = di;
    var mipTarget$1 = ((1 + di) | 0);
    var Bindable_this$5 = p.bd(downsampleShade, (void 0), mipSource$1, mipTarget$1);
    var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("blurRadius", b);
    var e2$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var \u03b4scrutinee212 = e1$proxy2.x;
    var idx$3 = (Bindable_this$5.A.M.blurRadius | 0);
    while (((Bindable_this$5.h.length | 0) <= idx$3)) {
      Bindable_this$5.h.push(null);
    }
    Bindable_this$5.h[idx$3] = \u03b4scrutinee212;
    var \u03b4scrutinee224 = e2$proxy2.x;
    var idx$4 = (Bindable_this$5.A.M.samp | 0);
    while (((Bindable_this$5.h.length | 0) <= idx$4)) {
      Bindable_this$5.h.push(null);
    }
    Bindable_this$5.h[idx$4] = \u03b4scrutinee224;
    layers.push(Bindable_this$5);
    di = ((1 + di) | 0);
  }
  var ui = ((mipLevels - 2) | 0);
  while ((ui >= 0)) {
    var Bindable_this$8 = p.bd(upsampleShade, $m_Ltrivalibs_graphics_painter_BlendState$().kS, ((1 + ui) | 0), ui);
    var e1$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("blurRadius", b);
    var e2$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var \u03b4scrutinee234 = e1$proxy3.x;
    var idx$5 = (Bindable_this$8.A.M.blurRadius | 0);
    while (((Bindable_this$8.h.length | 0) <= idx$5)) {
      Bindable_this$8.h.push(null);
    }
    Bindable_this$8.h[idx$5] = \u03b4scrutinee234;
    var \u03b4scrutinee246 = e2$proxy3.x;
    var idx$6 = (Bindable_this$8.A.M.samp | 0);
    while (((Bindable_this$8.h.length | 0) <= idx$6)) {
      Bindable_this$8.h.push(null);
    }
    Bindable_this$8.h[idx$6] = \u03b4scrutinee246;
    layers.push(Bindable_this$8);
    ui = ((ui - 1) | 0);
  }
  var bloomP = p.bt((void 0), (void 0), (void 0), (void 0), (void 0), mipLevels, (void 0), "rgba16float", (void 0), (void 0), (void 0), (void 0), layers);
  var program$4 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  var d$3 = ({});
  var ctx$3 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$3), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg$3 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev$3 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = reg$3;
  try {
    var coord = $m_Ltrivalibs_graphics_math_gpu_ivec2$().b1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fr(ctx$3.bq));
    var $x_26 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().fm();
    var AssignTarget_this$3 = ctx$3.an.T("color");
    var value$proxy4 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().mR($m_Ltrivalibs_graphics_math_gpu_expr$package$().fp($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "scene"), coord), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a3(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().oz($m_Ltrivalibs_graphics_math_gpu_expr$package$().fp($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "bloom"), coord), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a3(), ctx$3.Z.l("intensity")));
    var $x_25 = $x_26.f((((("  " + AssignTarget_this$3.I) + " = ") + value$proxy4.d) + ";"));
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = prev$3;
  }
  program$4.a0 = $x_25;
  var array$54 = reg$3.X;
  var len$6 = (array$54.length | 0);
  var i$8 = 0;
  while ((i$8 < len$6)) {
    $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program$4, array$54[i$8]);
    i$8 = ((1 + i$8) | 0);
  }
  var b$5 = program$4.a0;
  var helperFns$proxy4 = program$4.as();
  var id$4 = p.n;
  p.n = ((1 + p.n) | 0);
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
  var groupDecls$4 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["intensity"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).W.y()], []));
  var fragBuiltinParams$4 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$4 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$4, vertexInputStruct$4, vertexOutputStruct$4, fragmentOutputStruct$4, groupDecls$4, sd$4.a6, sd$4.a5, fragBuiltinParams$4);
  var wgsl$4 = (baseWgsl$4 + "\n\n@group(1) @binding(0) var scene: texture_2d<f32>;\n@group(1) @binding(1) var bloom: texture_2d<f32>;");
  var args$proxy4 = $m_sr_ScalaRunTime$().au(new ($d_sjs_js_Any.r().C)([wgsl$4]));
  console.log(...$m_sjsr_Compat$().at(args$proxy4));
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
  var \u03b46$$4___2 = $m_Ltrivalibs_graphics_shader_layouts$().D(p.e, result$4);
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
  var pl$4 = $m_Ltrivalibs_graphics_shader_layouts$().D(p.e, allBgls$4);
  var compositeShade = new $c_Ltrivalibs_graphics_painter_Shade(id$4, module$4, null, bgls$8[0], panelBgl$4, pl$4, false, dict$7, dict$8);
  var Bindable_this$11 = p.bd(compositeShade, (void 0), (void 0), (void 0));
  var e1$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("scene", scene);
  var e2$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("bloom", bloomP);
  var e3$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("intensity", b$2);
  var \u03b4scrutinee325 = e1$proxy4.x;
  var idx$7 = (Bindable_this$11.A.aw.scene | 0);
  while (((Bindable_this$11.L.length | 0) <= idx$7)) {
    Bindable_this$11.L.push(null);
  }
  Bindable_this$11.L[idx$7] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee325);
  var \u03b4scrutinee335 = e2$proxy4.x;
  var idx$8 = (Bindable_this$11.A.aw.bloom | 0);
  while (((Bindable_this$11.L.length | 0) <= idx$8)) {
    Bindable_this$11.L.push(null);
  }
  Bindable_this$11.L[idx$8] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee335);
  var \u03b4scrutinee339 = e3$proxy1.x;
  var idx$9 = (Bindable_this$11.A.M.intensity | 0);
  while (((Bindable_this$11.h.length | 0) <= idx$9)) {
    Bindable_this$11.h.push(null);
  }
  Bindable_this$11.h[idx$9] = \u03b4scrutinee339;
  return new $c_Lsketchlib_utils_bloom_Bloom$$anon$1(bloomP, p.bt((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), Bindable_this$11, (void 0)), p, b, b$2);
});
var $d_Lsketchlib_utils_bloom_Bloom$ = new $TypeData().i($c_Lsketchlib_utils_bloom_Bloom$, "sketchlib.utils.bloom.Bloom$", ({
  dx: 1
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
$p.mY = (function(p, shapes, vpName, alphaScale, camera, mirror, blurStrength, mipLevels, clearColor) {
  if ((mipLevels < 2)) {
    var message$proxy1 = (("MirrorReflection mipLevels must be >= 2 (got " + mipLevels) + ")");
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy1)).aV;
  }
  var reflMat = mirror.oP();
  var maxBlur = ((mipLevels - 1) | 0);
  var pn = mirror.gk;
  var pd = mirror.gj;
  var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
  var uv$proxy1 = ul$proxy1.aW;
  var buffer = new ArrayBuffer(64);
  var arr$proxy1 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
  var uVp = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy1.dv, 0), p.e, uv$proxy1);
  var ul$proxy2 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
  var uv$proxy2 = ul$proxy2.aW;
  var buffer$2 = new ArrayBuffer(64);
  var arr$proxy2 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
  var uInvVp = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy2.dv, 0), p.e, uv$proxy2);
  var ul$proxy3 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy3 = ul$proxy3.aW;
  var buffer$3 = new ArrayBuffer(4);
  var arr$proxy3 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$3), 1);
  var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy3.dv, 0), p.e, uv$proxy3);
  b.V.P(b.q, blurStrength);
  var $x_2 = b.U.queue;
  var $x_1 = b.R;
  var s$proxy1 = b.q;
  $x_2.writeBuffer($x_1, 0.0, s$proxy1.dv.buffer);
  var sampler = p.jg("linear", "linear", "linear", "clamp-to-edge", (void 0), (void 0));
  var mirrorPanel = p.bt((void 0), (void 0), clearColor, true, (void 0), (void 0), (void 0), "rgba16float", (void 0), (void 0), shapes, (void 0), (void 0));
  var dict$proxy1 = mirrorPanel.gw;
  dict$proxy1[vpName] = uVp;
  var program = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  var d = ({});
  var ctx = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = reg;
  try {
    var uv$3 = ctx.ae.l("uv");
    var d$1 = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "d");
    var ndc = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "ndc");
    var worldH = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "worldH");
    var worldPos = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "worldPos");
    var t = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "t");
    var x0 = d$1.S($m_Ltrivalibs_graphics_math_gpu_expr$package$().nj($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "depth"), $m_Ltrivalibs_graphics_math_gpu_ivec2$().b1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fr(ctx.bq))));
    var $x_5 = $m_Ltrivalibs_graphics_math_gpu_vec3$();
    var $x_4 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ly($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().af($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ag().F(uv$3), 2.0), 1.0);
    var e$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().af($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ag().z(uv$3), 2.0);
    var x1 = ndc.S($x_5.ax($x_4, $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().b2().b3((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aP(1.0)) + " - ") + e$proxy1.d) + ")")), d$1));
    var x2 = worldH.S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().g8(ctx.Z.l("invVp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fn(), $m_Ltrivalibs_graphics_math_gpu_vec4$().aq(ndc, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a3(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$()));
    var x3 = worldPos.S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().nm($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fs(worldH), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().O(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a3().ah(worldH)));
    var x4 = t.S($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().lJ($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().j2($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ly($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().O().lN($m_Ltrivalibs_graphics_math_gpu_vec3$().ax($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(pn.t), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(pn.w), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(pn.u)), worldPos), pd), alphaScale)));
    var AssignTarget_this = ctx.an.T("color");
    var value$proxy1 = $m_Ltrivalibs_graphics_math_gpu_vec4$().aq($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fs($m_Ltrivalibs_graphics_math_gpu_expr$package$().fp($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "col"), $m_Ltrivalibs_graphics_math_gpu_ivec2$().b1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fr(ctx.bq)))), t);
    var $x_3 = $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs([x0, x1, x2, x3, x4, (((("  " + AssignTarget_this.I) + " = ") + value$proxy1.d) + ";")]), "", "\n", "");
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = prev;
  }
  program.a0 = $x_3;
  var array$1 = reg.X;
  var len = (array$1.length | 0);
  var i = 0;
  while ((i < len)) {
    $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$1[i]);
    i = ((1 + i) | 0);
  }
  var b$1 = program.a0;
  var helperFns$proxy1 = program.as();
  var id = p.n;
  p.n = ((1 + p.n) | 0);
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
  var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["invVp"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).W.y()], []));
  var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.a6, sd.a5, fragBuiltinParams);
  var wgsl = (baseWgsl + "\n\n@group(1) @binding(0) var col: texture_2d<f32>;\n@group(1) @binding(1) var depth: texture_depth_2d;");
  var args$proxy1 = $m_sr_ScalaRunTime$().au(new ($d_sjs_js_Any.r().C)([wgsl]));
  console.log(...$m_sjsr_Compat$().at(args$proxy1));
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
  var \u03b46$___2 = $m_Ltrivalibs_graphics_shader_layouts$().D(p.e, result);
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
  var pl = $m_Ltrivalibs_graphics_shader_layouts$().D(p.e, allBgls);
  var bakeShade = new $c_Ltrivalibs_graphics_painter_Shade(id, module, null, bgls$2[0], panelBgl, pl, false, dict, dict$2);
  var program$2 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  var d$2 = ({});
  var ctx$1 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = reg$1;
  try {
    var $x_11 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().fm();
    var AssignTarget_this$1 = ctx$1.an.T("color");
    var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy1 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$().iR;
    var a1$proxy1 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex");
    var a2$proxy1 = ctx$1.Z.l("samp");
    var a3$proxy1 = ctx$1.ae.l("uv");
    var a4$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(4.0);
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().hY(fn$proxy1);
    var value$proxy2 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((((((WgslFn$_this.hT(fn$proxy1) + "(") + a1$proxy1) + ", ") + a2$proxy1) + ", ") + a3$proxy1) + ", ") + a4$proxy1) + ")"));
    var $x_10 = $x_11.f((((("  " + AssignTarget_this$1.I) + " = ") + value$proxy2.d) + ";"));
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = prev$1;
  }
  program$2.a0 = $x_10;
  var array$18 = reg$1.X;
  var len$2 = (array$18.length | 0);
  var i$4 = 0;
  while ((i$4 < len$2)) {
    $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program$2, array$18[i$4]);
    i$4 = ((1 + i$4) | 0);
  }
  var b$2 = program$2.a0;
  var helperFns$proxy2 = program$2.as();
  var id$2 = p.n;
  p.n = ((1 + p.n) | 0);
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
  var groupDecls$2 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["samp"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).W.y()], []));
  var fragBuiltinParams$2 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$2 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$2, vertexInputStruct$2, vertexOutputStruct$2, fragmentOutputStruct$2, groupDecls$2, sd$2.a6, sd$2.a5, fragBuiltinParams$2);
  var wgsl$2 = (baseWgsl$2 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
  var args$proxy2 = $m_sr_ScalaRunTime$().au(new ($d_sjs_js_Any.r().C)([wgsl$2]));
  console.log(...$m_sjsr_Compat$().at(args$proxy2));
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
  var \u03b46$$2___2 = $m_Ltrivalibs_graphics_shader_layouts$().D(p.e, result$2);
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
  var pl$2 = $m_Ltrivalibs_graphics_shader_layouts$().D(p.e, allBgls$2);
  var downBlurShade = new $c_Ltrivalibs_graphics_painter_Shade(id$2, module$2, null, bgls$4[0], panelBgl$2, pl$2, false, dict$3, dict$4);
  var blurLayers = [];
  var Bindable_this = p.bd(bakeShade, (void 0), (void 0), (void 0));
  var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("col", mirrorPanel);
  var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("depth", mirrorPanel.n8(0, (-1), true));
  var e3$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("invVp", uInvVp);
  var \u03b4scrutinee132 = e1$proxy1.x;
  var idx = (Bindable_this.A.aw.col | 0);
  while (((Bindable_this.L.length | 0) <= idx)) {
    Bindable_this.L.push(null);
  }
  Bindable_this.L[idx] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee132);
  var \u03b4scrutinee142 = e2$proxy1.x;
  var idx$2 = (Bindable_this.A.aw.depth | 0);
  while (((Bindable_this.L.length | 0) <= idx$2)) {
    Bindable_this.L.push(null);
  }
  Bindable_this.L[idx$2] = \u03b4scrutinee142;
  var \u03b4scrutinee146 = e3$proxy1.x;
  var idx$3 = (Bindable_this.A.M.invVp | 0);
  while (((Bindable_this.h.length | 0) <= idx$3)) {
    Bindable_this.h.push(null);
  }
  Bindable_this.h[idx$3] = \u03b4scrutinee146;
  blurLayers.push(Bindable_this);
  var mi = 0;
  while ((mi < ((mipLevels - 1) | 0))) {
    var mipSource$1 = mi;
    var mipTarget$1 = ((1 + mi) | 0);
    var Bindable_this$5 = p.bd(downBlurShade, (void 0), mipSource$1, mipTarget$1);
    var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var \u03b4scrutinee154 = e1$proxy2.x;
    var idx$4 = (Bindable_this$5.A.M.samp | 0);
    while (((Bindable_this$5.h.length | 0) <= idx$4)) {
      Bindable_this$5.h.push(null);
    }
    Bindable_this$5.h[idx$4] = \u03b4scrutinee154;
    blurLayers.push(Bindable_this$5);
    mi = ((1 + mi) | 0);
  }
  var blurPanel = p.bt((void 0), (void 0), (void 0), (void 0), (void 0), mipLevels, (void 0), "rgba16float", (void 0), (void 0), (void 0), (void 0), blurLayers);
  var program$3 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  var d$3 = ({});
  var ctx$2 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$3), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = reg$2;
  try {
    var uv$4 = ctx$2.ae.l("uv");
    var t$1 = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "t");
    var lod = $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(new $c_Ltrivalibs_graphics_math_gpu_LetExpr(), "lod");
    var Vec4BaseG_this = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a3();
    var v$proxy1 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().fp($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "col"), $m_Ltrivalibs_graphics_math_gpu_ivec2$().b1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fr(ctx$2.bq)));
    var x0$5 = t$1.S(Vec4BaseG_this.ah(v$proxy1));
    var $x_17 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
    var $x_16 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
    var e$proxy2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().br(t$1, ctx$2.Z.l("blurStrength"));
    var x1$1 = lod.S($x_17.mh($x_16.nW($m_Ltrivalibs_graphics_math_gpu_LeftScalar$().b2().b3((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aP(1.0)) + " + ") + e$proxy2.d) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(maxBlur)));
    var AssignTarget_this$2 = ctx$2.an.T("color");
    var value$proxy4 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().oW($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "col"), uv$4, ctx$2.Z.l("samp"), lod);
    var $x_15 = $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs([x0$5, x1$1, (((("  " + AssignTarget_this$2.I) + " = ") + value$proxy4.d) + ";")]), "", "\n", "");
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = prev$2;
  }
  program$3.a0 = $x_15;
  var array$34 = reg$2.X;
  var len$4 = (array$34.length | 0);
  var i$6 = 0;
  while ((i$6 < len$4)) {
    $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program$3, array$34[i$6]);
    i$6 = ((1 + i$6) | 0);
  }
  var b$3 = program$3.a0;
  var helperFns$proxy3 = program$3.as();
  var id$3 = p.n;
  p.n = ((1 + p.n) | 0);
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
  var groupDecls$3 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["blurStrength"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).W.y()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).W.y()], [])));
  var fragBuiltinParams$3 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$3 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$3, vertexInputStruct$3, vertexOutputStruct$3, fragmentOutputStruct$3, groupDecls$3, sd$3.a6, sd$3.a5, fragBuiltinParams$3);
  var wgsl$3 = (baseWgsl$3 + "\n\n@group(1) @binding(0) var col: texture_2d<f32>;");
  var args$proxy3 = $m_sr_ScalaRunTime$().au(new ($d_sjs_js_Any.r().C)([wgsl$3]));
  console.log(...$m_sjsr_Compat$().at(args$proxy3));
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
  var \u03b46$$3___2 = $m_Ltrivalibs_graphics_shader_layouts$().D(p.e, result$3);
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
  var pl$3 = $m_Ltrivalibs_graphics_shader_layouts$().D(p.e, allBgls$3);
  var resolveShade = new $c_Ltrivalibs_graphics_painter_Shade(id$3, module$3, null, bgls$6[0], panelBgl$3, pl$3, false, dict$5, dict$6);
  var Bindable_this$7 = p.bd(resolveShade, (void 0), (void 0), (void 0));
  var e1$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("col", blurPanel);
  var e2$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("blurStrength", b);
  var e3$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
  var \u03b4scrutinee232 = e1$proxy3.x;
  var idx$5 = (Bindable_this$7.A.aw.col | 0);
  while (((Bindable_this$7.L.length | 0) <= idx$5)) {
    Bindable_this$7.L.push(null);
  }
  Bindable_this$7.L[idx$5] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee232);
  var \u03b4scrutinee236 = e2$proxy2.x;
  var idx$6 = (Bindable_this$7.A.M.blurStrength | 0);
  while (((Bindable_this$7.h.length | 0) <= idx$6)) {
    Bindable_this$7.h.push(null);
  }
  Bindable_this$7.h[idx$6] = \u03b4scrutinee236;
  var \u03b4scrutinee248 = e3$proxy2.x;
  var idx$7 = (Bindable_this$7.A.M.samp | 0);
  while (((Bindable_this$7.h.length | 0) <= idx$7)) {
    Bindable_this$7.h.push(null);
  }
  Bindable_this$7.h[idx$7] = \u03b4scrutinee248;
  var layers$2 = [Bindable_this$7];
  return new $c_Lsketchlib_utils_mirror_MirrorReflection$$anon$1(mirrorPanel, p.bt((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), "rgba16float", (void 0), (void 0), (void 0), (void 0), layers$2), b, camera, reflMat, uVp, uInvVp, p, blurPanel);
});
var $d_Lsketchlib_utils_mirror_MirrorReflection$ = new $TypeData().i($c_Lsketchlib_utils_mirror_MirrorReflection$, "sketchlib.utils.mirror.MirrorReflection$", ({
  dA: 1
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
  dC: 1
}));
/** @constructor */
function $c_Ltrivalibs_dev_dev$package$() {
  this.fR = null;
  this.ia = false;
  $n_Ltrivalibs_dev_dev$package$ = this;
  this.fR = [];
  this.ia = false;
}
$p = $c_Ltrivalibs_dev_dev$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_dev_dev$package$;
/** @constructor */
function $h_Ltrivalibs_dev_dev$package$() {
}
$h_Ltrivalibs_dev_dev$package$.prototype = $p;
$p.nk = (function() {
  return (import.meta.hot !== (void 0));
});
$p.ov = (function() {
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
$p.pa = (function(label) {
  return ((("trivalibs:dev:" + $m_Ltrivalibs_dev_dev$package$().ov()) + ":") + label);
});
$p.ji = (function() {
  return window.sessionStorage;
});
$p.oO = (function(key) {
  var raw = $m_Ltrivalibs_dev_dev$package$().ji().getItem(key);
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
$p.pw = (function(key, json) {
  $m_Ltrivalibs_dev_dev$package$().ji().setItem(key, JSON.stringify(json));
});
$p.oT = (function(key) {
  $m_Ltrivalibs_dev_dev$package$().ji().removeItem(key);
});
$p.nr = (function() {
  if ((!$m_Ltrivalibs_dev_dev$package$().ia)) {
    $m_Ltrivalibs_dev_dev$package$().ia = true;
    window.addEventListener("pagehide", ((_$1$2) => {
      var i = 0;
      while ((i < ($m_Ltrivalibs_dev_dev$package$().fR.length | 0))) {
        $m_Ltrivalibs_dev_dev$package$().fR[i].gL();
        i = ((1 + i) | 0);
      }
    }));
  }
});
$p.oQ = (function(flush) {
  $m_Ltrivalibs_dev_dev$package$().nr();
  $m_Ltrivalibs_dev_dev$package$().fR.push(flush);
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    var idx = $m_sjs_js_ArrayOps$().lZ($m_Ltrivalibs_dev_dev$package$().fR, flush, 0);
    if ((idx >= 0)) {
      $m_Ltrivalibs_dev_dev$package$().fR.splice(idx, 1);
    }
  }));
});
var $d_Ltrivalibs_dev_dev$package$ = new $TypeData().i($c_Ltrivalibs_dev_dev$package$, "trivalibs.dev.dev$package$", ({
  dD: 1
}));
var $n_Ltrivalibs_dev_dev$package$;
function $m_Ltrivalibs_dev_dev$package$() {
  if ((!$n_Ltrivalibs_dev_dev$package$)) {
    $n_Ltrivalibs_dev_dev$package$ = new $c_Ltrivalibs_dev_dev$package$();
  }
  return $n_Ltrivalibs_dev_dev$package$;
}
function $p_Ltrivalibs_dev_devPreserve$__encodeCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any($thiz, cam) {
  return [cam.ak.t, cam.ak.w, cam.ak.u, cam.aB, cam.bb];
}
function $p_Ltrivalibs_dev_devPreserve$__applyCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any__V($thiz, cam, json) {
  if ((!(!Array.isArray(json)))) {
    if (((json.length | 0) >= 5)) {
      var pos$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((+json[0]), (+json[1]), (+json[2]));
      var rotH$1 = (+json[3]);
      var rotV$1 = (+json[4]);
      var fov$1 = cam.g1;
      var aspect$1 = cam.gy;
      var near$1 = cam.g2;
      var far$1 = cam.g0;
      cam.jh(fov$1, aspect$1, near$1, far$1, rotH$1, rotV$1, pos$1);
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
$p.n0 = (function(cam, label) {
  if ((!$m_Ltrivalibs_dev_dev$package$().nk())) {
    return new $c_Ltrivalibs_dev_DevHandle(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => (void 0))));
  } else {
    var sk = $m_Ltrivalibs_dev_dev$package$().pa(label);
    var initPos = cam.ak;
    var initRotH = cam.aB;
    var initRotV = cam.bb;
    var stored = $m_Ltrivalibs_dev_dev$package$().oO(sk);
    if ((stored !== null)) {
      $p_Ltrivalibs_dev_devPreserve$__applyCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any__V(this, cam, stored);
    }
    return new $c_Ltrivalibs_dev_DevHandle(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(((unregister) => (() => {
      unregister.gL();
      $m_Ltrivalibs_dev_dev$package$().oT(sk);
      var fov$proxy1 = cam.g1;
      var aspect$proxy1 = cam.gy;
      var near$proxy1 = cam.g2;
      var far$proxy1 = cam.g0;
      cam.jh(fov$proxy1, aspect$proxy1, near$proxy1, far$proxy1, initRotH, initRotV, initPos);
    }))($m_Ltrivalibs_dev_dev$package$().oQ(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
      $m_Ltrivalibs_dev_dev$package$().pw(sk, $p_Ltrivalibs_dev_devPreserve$__encodeCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any(this, cam));
    }))))));
  }
});
var $d_Ltrivalibs_dev_devPreserve$ = new $TypeData().i($c_Ltrivalibs_dev_devPreserve$, "trivalibs.dev.devPreserve$", ({
  dE: 1
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
  this.q = null;
  this.U = null;
  this.V = null;
  this.R = null;
  this.q = buffer;
  this.U = device;
  this.V = uv;
  var b = (buffer.dv.byteLength | 0);
  var value = ((b < 16) ? 16 : b);
  var $x_1 = device.createBuffer(({
    "size": value,
    "usage": 72
  }));
  this.R = $x_1;
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
  this.kl = null;
  this.km = null;
  this.kj = null;
  this.kk = null;
  this.kh = null;
  this.ki = null;
  this.kf = null;
  this.kg = null;
  this.kl = frontTopLeft;
  this.km = frontTopRight;
  this.kj = frontBottomLeft;
  this.kk = frontBottomRight;
  this.kh = backTopLeft;
  this.ki = backTopRight;
  this.kf = backBottomLeft;
  this.kg = backBottomRight;
}
$p = $c_Ltrivalibs_graphics_geometry_Box.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Box;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Box() {
}
$h_Ltrivalibs_graphics_geometry_Box.prototype = $p;
$p.ph = (function(f) {
  return $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bc(f.b0(this.kh, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0)), f.b0(this.kl, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0)), f.b0(this.km, new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0)), f.b0(this.ki, new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 1.0)));
});
$p.na = (function(f) {
  return $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bc(f.b0(this.kj, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0)), f.b0(this.kf, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0)), f.b0(this.kg, new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0)), f.b0(this.kk, new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0)));
});
var $d_Ltrivalibs_graphics_geometry_Box = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Box, "trivalibs.graphics.geometry.Box", ({
  dM: 1
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
$p.mV = (function(center, width, height, depth) {
  var hw = (0.5 * width);
  var hh = (0.5 * height);
  var hd = (0.5 * depth);
  var cx = center.t;
  var cy = center.w;
  var cz = center.u;
  return new $c_Ltrivalibs_graphics_geometry_Box(center, new $c_Ltrivalibs_graphics_math_cpu_Vec3(width, height, depth), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy + hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy + hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy - hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy - hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy + hh), (cz - hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy + hh), (cz - hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy - hh), (cz - hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy - hh), (cz - hd)));
});
var $d_Ltrivalibs_graphics_geometry_Box$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Box$, "trivalibs.graphics.geometry.Box$", ({
  dN: 1
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
  this.kn = null;
  this.ib = null;
  this.kn = vertices;
  this.ib = indices;
}
$p = $c_Ltrivalibs_graphics_geometry_BufferedGeometry.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_BufferedGeometry;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_BufferedGeometry() {
}
$h_Ltrivalibs_graphics_geometry_BufferedGeometry.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_BufferedGeometry = new $TypeData().i($c_Ltrivalibs_graphics_geometry_BufferedGeometry, "trivalibs.graphics.geometry.BufferedGeometry", ({
  dO: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_FaceData(normal, section) {
  this.fd = null;
  this.mG = 0;
  this.fd = normal;
  this.mG = section;
}
$p = $c_Ltrivalibs_graphics_geometry_FaceData.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_FaceData;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_FaceData() {
}
$h_Ltrivalibs_graphics_geometry_FaceData.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_FaceData = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FaceData, "trivalibs.graphics.geometry.FaceData", ({
  dP: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Mesh(evidence$1) {
  this.gi = null;
  this.G = null;
  this.bn = null;
  this.hj = null;
  this.hi = null;
  this.gi = evidence$1;
  this.G = [];
  this.bn = [];
  this.hj = [];
  this.hi = ({});
}
$p = $c_Ltrivalibs_graphics_geometry_Mesh.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Mesh;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Mesh() {
}
$h_Ltrivalibs_graphics_geometry_Mesh.prototype = $p;
$p.mP = (function(face, normal, section) {
  var faceIdx = (this.G.length | 0);
  this.G.push(face);
  this.bn.push(new $c_Ltrivalibs_graphics_geometry_FaceData(normal, section));
  var n = (face.length | 0);
  var slot = 0;
  while ((slot < n)) {
    var v = face[slot];
    var key = $m_Ltrivalibs_graphics_geometry_package$package$().oM(this.gi.be(v));
    if ($m_sjs_js_Any$ObjectCompanionOps$().nJ(Object, this.hi, key)) {
      var $x_2 = this.hj;
      var dict = this.hi;
      if ((!(!(!$m_sjs_js_WrappedDictionary$Cache$().jS.call(dict, key))))) {
        throw new $c_ju_NoSuchElementException(("key not found: " + key));
      }
      var $x_1 = $x_2[(dict[key] | 0)];
      $x_1.kr.push(new $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIdx, slot));
    } else {
      var idx = (this.hj.length | 0);
      var dict$1 = this.hi;
      dict$1[key] = idx;
      this.hj.push(new $c_Ltrivalibs_graphics_geometry_VertexPosition(this.gi.be(v), [new $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIdx, slot)]));
    }
    slot = ((1 + slot) | 0);
  }
});
$p.lP = (function() {
  var hasQuads = false;
  var i = 0;
  while ((i < (this.G.length | 0))) {
    var arr = this.G[i];
    if ((this.bn[i].fd === null)) {
      var $x_2 = this.bn[i];
      if (((arr.length | 0) === 3)) {
        var $x_1 = $m_Ltrivalibs_graphics_geometry_polygon$package$Triangle$().jf(this.G[i], this.gi);
      } else {
        hasQuads = true;
        var $x_1 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().jf(this.G[i], this.gi);
      }
      $x_2.fd = $x_1;
    }
    i = ((1 + i) | 0);
  }
  return hasQuads;
});
var $d_Ltrivalibs_graphics_geometry_Mesh = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Mesh, "trivalibs.graphics.geometry.Mesh", ({
  dS: 1
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
$p.j6 = (function(faces, normal, section, evidence$1) {
  var m = new $c_Ltrivalibs_graphics_geometry_Mesh(evidence$1);
  $m_Ltrivalibs_graphics_geometry_mesh$package$().mQ(m, faces, normal, section, evidence$1);
  return m;
});
var $d_Ltrivalibs_graphics_geometry_Mesh$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Mesh$, "trivalibs.graphics.geometry.Mesh$", ({
  dT: 1
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
  this.gk = null;
  this.gj = 0.0;
  this.gk = normal;
  this.gj = d;
}
$p = $c_Ltrivalibs_graphics_geometry_Plane.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Plane;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Plane() {
}
$h_Ltrivalibs_graphics_geometry_Plane.prototype = $p;
$p.oP = (function() {
  var a = this.gk.t;
  var b = this.gk.w;
  var c = this.gk.u;
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4((1.0 - ((2.0 * a) * a)), (((-2.0) * a) * b), (((-2.0) * a) * c), 0.0, (((-2.0) * a) * b), (1.0 - ((2.0 * b) * b)), (((-2.0) * b) * c), 0.0, (((-2.0) * a) * c), (((-2.0) * b) * c), (1.0 - ((2.0 * c) * c)), 0.0, ((2.0 * a) * this.gj), ((2.0 * b) * this.gj), ((2.0 * c) * this.gj), 1.0);
});
var $d_Ltrivalibs_graphics_geometry_Plane = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Plane, "trivalibs.graphics.geometry.Plane", ({
  dU: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Plane$() {
  this.ko = null;
  $n_Ltrivalibs_graphics_geometry_Plane$ = this;
  this.ko = new $c_Ltrivalibs_graphics_geometry_Plane(new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), 0.0);
}
$p = $c_Ltrivalibs_graphics_geometry_Plane$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Plane$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Plane$() {
}
$h_Ltrivalibs_graphics_geometry_Plane$.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_Plane$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Plane$, "trivalibs.graphics.geometry.Plane$", ({
  dV: 1
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
  this.mH = 0;
  this.mI = 0;
  this.mH = faceIndex;
  this.mI = vertexSlot;
}
$p = $c_Ltrivalibs_graphics_geometry_PositionFaceRef.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_PositionFaceRef;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_PositionFaceRef() {
}
$h_Ltrivalibs_graphics_geometry_PositionFaceRef.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_PositionFaceRef = new $TypeData().i($c_Ltrivalibs_graphics_geometry_PositionFaceRef, "trivalibs.graphics.geometry.PositionFaceRef", ({
  dX: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexPosition(position, faces) {
  this.mJ = null;
  this.kr = null;
  this.mJ = position;
  this.kr = faces;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexPosition.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexPosition;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexPosition() {
}
$h_Ltrivalibs_graphics_geometry_VertexPosition.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_VertexPosition = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexPosition, "trivalibs.graphics.geometry.VertexPosition", ({
  e2: 1
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
$p.jd = (function(idxBuf, vertexCount) {
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
  e3: 1
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
$p.mQ = (function(m, faces, normal, section, evidence$1) {
  var i = 0;
  while ((i < (faces.length | 0))) {
    m.mP(faces[i], normal, section);
    i = ((1 + i) | 0);
  }
});
var $d_Ltrivalibs_graphics_geometry_mesh$package$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_mesh$package$, "trivalibs.graphics.geometry.mesh$package$", ({
  e4: 1
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
$p.oM = (function(v) {
  return (((($doubleToInt((10000.0 * v.t)) + ",") + $doubleToInt((10000.0 * v.w))) + ",") + $doubleToInt((10000.0 * v.u)));
});
var $d_Ltrivalibs_graphics_geometry_package$package$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_package$package$, "trivalibs.graphics.geometry.package$package$", ({
  e5: 1
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
$p.bc = (function(tl, bl, br, tr) {
  return [tl, bl, br, tr];
});
$p.pf = (function(q, evidence$1) {
  return q[0];
});
$p.n9 = (function(q, evidence$1) {
  return q[1];
});
$p.nb = (function(q, evidence$1) {
  return q[2];
});
$p.pi = (function(q, evidence$1) {
  return q[3];
});
$p.jf = (function(q, evidence$1) {
  var a = evidence$1.be(this.pf(q, evidence$1));
  var b = evidence$1.be(this.n9(q, evidence$1));
  var c = evidence$1.be(this.nb(q, evidence$1));
  var d = evidence$1.be(this.pi(q, evidence$1));
  var d1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((c.t - a.t), (c.w - a.w), (c.u - a.u));
  var d2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((d.t - b.t), (d.w - b.w), (d.u - b.u));
  return $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a2(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a2(), d1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), d2), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
});
var $d_Ltrivalibs_graphics_geometry_polygon$package$Quad$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_polygon$package$Quad$, "trivalibs.graphics.geometry.polygon$package$Quad$", ({
  e7: 1
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
$p.mO = (function(tri, evidence$1) {
  return tri[0];
});
$p.n4 = (function(tri, evidence$1) {
  return tri[1];
});
$p.nc = (function(tri, evidence$1) {
  return tri[2];
});
$p.jf = (function(tri, evidence$1) {
  var pa = evidence$1.be(this.mO(tri, evidence$1));
  var pb = evidence$1.be(this.n4(tri, evidence$1));
  var pc = evidence$1.be(this.nc(tri, evidence$1));
  var e1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((pb.t - pa.t), (pb.w - pa.w), (pb.u - pa.u));
  var e2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((pc.t - pa.t), (pc.w - pa.w), (pc.u - pa.u));
  return $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a2(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().a2(), e1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), e2), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
});
var $d_Ltrivalibs_graphics_geometry_polygon$package$Triangle$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_polygon$package$Triangle$, "trivalibs.graphics.geometry.polygon$package$Triangle$", ({
  e8: 1
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
  var a00 = (+x$2.gR(m));
  var a01 = (+x$2.gS(m));
  var a02 = (+x$2.gT(m));
  var a03 = (+x$2.gU(m));
  var a10 = (+x$2.gV(m));
  var a11 = (+x$2.gW(m));
  var a12 = (+x$2.gX(m));
  var a13 = (+x$2.gY(m));
  var a20 = (+x$2.gZ(m));
  var a21 = (+x$2.h0(m));
  var a22 = (+x$2.h1(m));
  var a23 = (+x$2.h2(m));
  var a30 = (+x$2.h3(m));
  var a31 = (+x$2.h4(m));
  var a32 = (+x$2.h5(m));
  var a33 = (+x$2.h6(m));
  var b00 = (+x$2.gR(other));
  var b01 = (+x$2.gS(other));
  var b02 = (+x$2.gT(other));
  var b03 = (+x$2.gU(other));
  var b10 = (+x$2.gV(other));
  var b11 = (+x$2.gW(other));
  var b12 = (+x$2.gX(other));
  var b13 = (+x$2.gY(other));
  var b20 = (+x$2.gZ(other));
  var b21 = (+x$2.h0(other));
  var b22 = (+x$2.h1(other));
  var b23 = (+x$2.h2(other));
  var b30 = (+x$2.h3(other));
  var b31 = (+x$2.h4(other));
  var b32 = (+x$2.h5(other));
  var b33 = (+x$2.h6(other));
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4(((((a00 * b00) + (a10 * b01)) + (a20 * b02)) + (a30 * b03)), ((((a01 * b00) + (a11 * b01)) + (a21 * b02)) + (a31 * b03)), ((((a02 * b00) + (a12 * b01)) + (a22 * b02)) + (a32 * b03)), ((((a03 * b00) + (a13 * b01)) + (a23 * b02)) + (a33 * b03)), ((((a00 * b10) + (a10 * b11)) + (a20 * b12)) + (a30 * b13)), ((((a01 * b10) + (a11 * b11)) + (a21 * b12)) + (a31 * b13)), ((((a02 * b10) + (a12 * b11)) + (a22 * b12)) + (a32 * b13)), ((((a03 * b10) + (a13 * b11)) + (a23 * b12)) + (a33 * b13)), ((((a00 * b20) + (a10 * b21)) + (a20 * b22)) + (a30 * b23)), ((((a01 * b20) + (a11 * b21)) + (a21 * b22)) + (a31 * b23)), ((((a02 * b20) + (a12 * b21)) + (a22 * b22)) + (a32 * b23)), ((((a03 * b20) + (a13 * b21)) + (a23 * b22)) + (a33 * b23)), ((((a00 * b30) + (a10 * b31)) + (a20 * b32)) + (a30 * b33)), ((((a01 * b30) + (a11 * b31)) + (a21 * b32)) + (a31 * b33)), ((((a02 * b30) + (a12 * b31)) + (a22 * b32)) + (a32 * b33)), ((((a03 * b30) + (a13 * b31)) + (a23 * b32)) + (a33 * b33)));
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($thiz, m, x$2) {
  var a00 = (+x$2.gR(m));
  var a01 = (+x$2.gS(m));
  var a02 = (+x$2.gT(m));
  var a03 = (+x$2.gU(m));
  var a10 = (+x$2.gV(m));
  var a11 = (+x$2.gW(m));
  var a12 = (+x$2.gX(m));
  var a13 = (+x$2.gY(m));
  var a20 = (+x$2.gZ(m));
  var a21 = (+x$2.h0(m));
  var a22 = (+x$2.h1(m));
  var a23 = (+x$2.h2(m));
  var a30 = (+x$2.h3(m));
  var a31 = (+x$2.h4(m));
  var a32 = (+x$2.h5(m));
  var a33 = (+x$2.h6(m));
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
  mb.m0(m, (+x$4.gR(other)));
  mb.m1(m, (+x$4.gS(other)));
  mb.m2(m, (+x$4.gT(other)));
  mb.m3(m, (+x$4.gU(other)));
  mb.m4(m, (+x$4.gV(other)));
  mb.m5(m, (+x$4.gW(other)));
  mb.m6(m, (+x$4.gX(other)));
  mb.m7(m, (+x$4.gY(other)));
  mb.m8(m, (+x$4.gZ(other)));
  mb.m9(m, (+x$4.h0(other)));
  mb.ma(m, (+x$4.h1(other)));
  mb.mb(m, (+x$4.h2(other)));
  mb.mc(m, (+x$4.h3(other)));
  mb.md(m, (+x$4.h4(other)));
  mb.me(m, (+x$4.h5(other)));
  mb.mf(m, (+x$4.h6(other)));
}
function $f_Ltrivalibs_graphics_math_Vec2MutableOps__set__O__Ltrivalibs_graphics_math_Vec2Mutable__O__Ltrivalibs_graphics_math_Vec2Base__V($thiz, v, x$2, other, x$4) {
  x$2.g9(v, (+x$4.F(other)));
  x$2.ga(v, (+x$4.z(other)));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.t + other.t), (v.w + other.w), (v.u + other.u));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, scalar) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.t * scalar), (v.w * scalar), (v.u * scalar));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__divScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, scalar) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.t / scalar), (v.w / scalar), (v.u / scalar));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3(((v.w * other.u) - (v.u * other.w)), ((v.u * other.t) - (v.t * other.u)), ((v.t * other.w) - (v.w * other.t)));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($thiz, v, x$2) {
  return $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__divScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, $f_Ltrivalibs_graphics_math_Vec3Base__length__O__D(x$2, v));
}
function $f_Ltrivalibs_graphics_math_Vec4MutableOps__set__O__Ltrivalibs_graphics_math_Vec4Mutable__O__Ltrivalibs_graphics_math_Vec4Base__V($thiz, v, x$2, other, x$4) {
  x$2.g9(v, (+x$4.F(other)));
  x$2.ga(v, (+x$4.z(other)));
  x$2.js(v, (+x$4.ai(other)));
  x$2.jm(v, (+x$4.ah(other)));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat4(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  this.ic = 0.0;
  this.id = 0.0;
  this.ie = 0.0;
  this.ig = 0.0;
  this.ih = 0.0;
  this.ii = 0.0;
  this.ij = 0.0;
  this.ik = 0.0;
  this.il = 0.0;
  this.im = 0.0;
  this.io = 0.0;
  this.ip = 0.0;
  this.iq = 0.0;
  this.ir = 0.0;
  this.is = 0.0;
  this.it = 0.0;
  this.ic = m00;
  this.id = m01;
  this.ie = m02;
  this.ig = m03;
  this.ih = m10;
  this.ii = m11;
  this.ij = m12;
  this.ik = m13;
  this.il = m20;
  this.im = m21;
  this.io = m22;
  this.ip = m23;
  this.iq = m30;
  this.ir = m31;
  this.is = m32;
  this.it = m33;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Mat4 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4, "trivalibs.graphics.math.cpu.Mat4", ({
  ek: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Quat(x, y, z, w) {
  this.hm = 0.0;
  this.hn = 0.0;
  this.ho = 0.0;
  this.hl = 0.0;
  this.hm = x;
  this.hn = y;
  this.ho = z;
  this.hl = w;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Quat.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Quat;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Quat() {
}
$h_Ltrivalibs_graphics_math_cpu_Quat.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Quat = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat, "trivalibs.graphics.math.cpu.Quat", ({
  en: 1
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
$p.nE = (function(angle) {
  var h = (0.5 * angle);
  return new $c_Ltrivalibs_graphics_math_cpu_Quat((+Math.sin(h)), 0.0, 0.0, (+Math.cos(h)));
});
$p.lU = (function(angle) {
  var h = (0.5 * angle);
  return new $c_Ltrivalibs_graphics_math_cpu_Quat(0.0, (+Math.sin(h)), 0.0, (+Math.cos(h)));
});
var $d_Ltrivalibs_graphics_math_cpu_Quat$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat$, "trivalibs.graphics.math.cpu.Quat$", ({
  eo: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Quat$;
function $m_Ltrivalibs_graphics_math_cpu_Quat$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Quat$)) {
    $n_Ltrivalibs_graphics_math_cpu_Quat$ = new $c_Ltrivalibs_graphics_math_cpu_Quat$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Quat$;
}
function $f_Ltrivalibs_graphics_math_cpu_QuatImmutableOps__quatMul__O__Ltrivalibs_graphics_math_Vec4Base__O__O($thiz, q, x$2, p) {
  return new $c_Ltrivalibs_graphics_math_cpu_Quat((((((+x$2.ah(q)) * (+x$2.F(p))) + ((+x$2.F(q)) * (+x$2.ah(p)))) + ((+x$2.z(q)) * (+x$2.ai(p)))) - ((+x$2.ai(q)) * (+x$2.z(p)))), (((((+x$2.ah(q)) * (+x$2.z(p))) - ((+x$2.F(q)) * (+x$2.ai(p)))) + ((+x$2.z(q)) * (+x$2.ah(p)))) + ((+x$2.ai(q)) * (+x$2.F(p)))), (((((+x$2.ah(q)) * (+x$2.ai(p))) + ((+x$2.F(q)) * (+x$2.z(p)))) - ((+x$2.z(q)) * (+x$2.F(p)))) + ((+x$2.ai(q)) * (+x$2.ah(p)))), (((((+x$2.ah(q)) * (+x$2.ah(p))) - ((+x$2.F(q)) * (+x$2.F(p)))) - ((+x$2.z(q)) * (+x$2.z(p)))) - ((+x$2.ai(q)) * (+x$2.ai(p)))));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec2(x, y) {
  this.hp = 0.0;
  this.hq = 0.0;
  this.hp = x;
  this.hq = y;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec2.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec2;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec2() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec2.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec2 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec2, "trivalibs.graphics.math.cpu.Vec2", ({
  es: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec3(x, y, z) {
  this.t = 0.0;
  this.w = 0.0;
  this.u = 0.0;
  this.t = x;
  this.w = y;
  this.u = z;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec3.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec3;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec3() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec3.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec3 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3, "trivalibs.graphics.math.cpu.Vec3", ({
  eu: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec4(x, y, z, w) {
  this.iv = 0.0;
  this.iw = 0.0;
  this.ix = 0.0;
  this.iu = 0.0;
  this.iv = x;
  this.iw = y;
  this.ix = z;
  this.iu = w;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec4.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec4;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec4() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec4.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec4 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4, "trivalibs.graphics.math.cpu.Vec4", ({
  ex: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
  this.kx = null;
  this.ky = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$.prototype = $p;
$p.nH = (function() {
  if ((!this.ky)) {
    this.kx = new $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18();
    this.ky = true;
  }
  return this.kx;
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
  this.kz = null;
  this.kA = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$.prototype = $p;
$p.pn = (function() {
  if ((!this.kA)) {
    this.kz = new $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$4();
    this.kA = true;
  }
  return this.kz;
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
  this.kB = null;
  this.kC = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$.prototype = $p;
$p.po = (function() {
  if ((!this.kC)) {
    this.kB = new $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$6();
    this.kC = true;
  }
  return this.kB;
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
$p.m = (function() {
  return this.d;
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
$p.b2 = (function() {
  return new $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), _$1$2))));
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
function $c_Ltrivalibs_graphics_math_gpu_expr$package$() {
  this.kE = null;
  this.kF = false;
}
$p = $c_Ltrivalibs_graphics_math_gpu_expr$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_expr$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_expr$package$() {
}
$h_Ltrivalibs_graphics_math_gpu_expr$package$.prototype = $p;
$p.ax = (function(tex, uv, sampler) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("textureSample(" + tex.d) + ", ") + sampler.d) + ", ") + uv.d) + ")"));
});
$p.oW = (function(tex, uv, sampler, level) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((((("textureSampleLevel(" + tex.d) + ", ") + sampler.d) + ", ") + uv.d) + ", ") + level.d) + ")"));
});
$p.fp = (function(tex, coord) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("textureLoad(" + tex.d) + ", ") + coord.d) + ", 0)"));
});
$p.nj = (function(tex, coord) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("textureLoad(" + tex.d) + ", ") + coord.d) + ", 0)"));
});
$p.fm = (function() {
  if ((!this.kF)) {
    this.kE = new $c_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2();
    this.kF = true;
  }
  return this.kE;
});
$p.oY = (function(onFalse, onTrue, cond) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("select(" + onFalse.d) + ", ") + onTrue.d) + ", ") + cond.d) + ")"));
});
$p.nB = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.d) + " > ") + b.d) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_expr$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_expr$package$, "trivalibs.graphics.math.gpu.expr$package$", ({
  eM: 1
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
  this.kG = null;
  this.kH = false;
  this.kI = null;
  this.kJ = false;
  this.kM = null;
  this.kN = false;
  this.kO = null;
  this.kP = false;
  this.kQ = null;
  this.kR = false;
  this.kK = null;
  this.kL = false;
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$.prototype = $p;
$p.aP = (function(v) {
  var s = ("" + v);
  return (((($f_T__indexOf__I__I(s, 46) >= 0) || ($f_T__indexOf__I__I(s, 69) >= 0)) || ($f_T__indexOf__I__I(s, 101) >= 0)) ? s : (s + ".0"));
});
$p.j = (function() {
  if ((!this.kH)) {
    this.kG = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1();
    this.kH = true;
  }
  return this.kG;
});
$p.lX = (function() {
  if ((!this.kJ)) {
    this.kI = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3();
    this.kJ = true;
  }
  return this.kI;
});
$p.ag = (function() {
  if ((!this.kN)) {
    this.kM = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4();
    this.kN = true;
  }
  return this.kM;
});
$p.O = (function() {
  if ((!this.kP)) {
    this.kO = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5();
    this.kP = true;
  }
  return this.kO;
});
$p.a3 = (function() {
  if ((!this.kR)) {
    this.kQ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6();
    this.kR = true;
  }
  return this.kQ;
});
$p.fn = (function() {
  if ((!this.kL)) {
    this.kK = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$9();
    this.kL = true;
  }
  return this.kK;
});
$p.fr = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".xy"));
});
$p.fs = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".xyz"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$, "trivalibs.graphics.math.gpu.float_expr$package$", ({
  eO: 1
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
$p.b1 = (function(v) {
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
$p.aq = (function(x, y) {
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
$p.ax = (function(x, y, z) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("vec3<f32>(" + x.d) + ", ") + y.d) + ", ") + z.d) + ")"));
});
$p.b1 = (function(scalar) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("vec3<f32>(" + scalar.d) + ")"));
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
$p.mW = (function(x, y, z, w) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((((("vec4<f32>(" + x.d) + ", ") + y.d) + ", ") + z.d) + ", ") + w.d) + ")"));
});
$p.aq = (function(xyz, w) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("vec4<f32>(" + xyz.d) + ", ") + w.d) + ")"));
});
$p.ax = (function(xy, z, w) {
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
  this.x = null;
  this.x = value;
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
  this.kS = null;
  $n_Ltrivalibs_graphics_painter_BlendState$ = this;
  new ($a_Ltrivalibs_graphics_painter_BlendState())(new ($a_Ltrivalibs_graphics_painter_BlendFn())("src-alpha", "one-minus-src-alpha"), new ($a_Ltrivalibs_graphics_painter_BlendFn())("one", "one-minus-src-alpha"));
  this.kS = new ($a_Ltrivalibs_graphics_painter_BlendState())(new ($a_Ltrivalibs_graphics_painter_BlendFn())("src-alpha", "one"), new ($a_Ltrivalibs_graphics_painter_BlendFn())("one", "one"));
  new ($a_Ltrivalibs_graphics_painter_BlendState())(new ($a_Ltrivalibs_graphics_painter_BlendFn())("dst", "zero"), new ($a_Ltrivalibs_graphics_painter_BlendFn())("dst-alpha", "zero"));
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
  var $x_1 = $thiz.gl.e;
  var value = (ab.byteLength | 0);
  var buf = $x_1.createBuffer(({
    "size": value,
    "usage": 24
  }));
  $thiz.gl.aG.writeBuffer(buf, 0.0, ab);
  if (($thiz.fS !== null)) {
    var opt$proxy2 = $thiz.fS;
    opt$proxy2.destroy();
  }
  $thiz.fS = buf;
  $thiz.hr = count;
  $thiz.iA = fmt;
}
function $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_bufferdata_BufferView__V($thiz, verts) {
  var $x_1 = $thiz.gl.e;
  var value = (verts.dv.buffer.byteLength | 0);
  var buf = $x_1.createBuffer(({
    "size": value,
    "usage": 40
  }));
  $thiz.gl.aG.writeBuffer(buf, 0.0, verts.dv.buffer);
  if (($thiz.gm !== null)) {
    var opt$proxy4 = $thiz.gm;
    opt$proxy4.destroy();
  }
  $thiz.gm = buf;
  $thiz.hs = (verts.off | 0);
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Form(painter) {
  this.gl = null;
  this.gm = null;
  this.hs = 0;
  this.fS = null;
  this.hr = 0;
  this.iA = null;
  this.iB = null;
  this.iz = null;
  this.gl = painter;
  this.gm = null;
  this.hs = 0;
  this.fS = null;
  this.hr = 0;
  this.iA = "uint16";
  this.iB = "triangle-list";
  this.iz = "ccw";
}
$p = $c_Ltrivalibs_graphics_painter_Form.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Form;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Form() {
}
$h_Ltrivalibs_graphics_painter_Form.prototype = $p;
$p.oZ = (function(geometry, vertices, topology, frontFace) {
  if ((topology !== (void 0))) {
    this.iB = topology;
  }
  if ((frontFace !== (void 0))) {
    this.iz = frontFace;
  }
  if ((geometry !== (void 0))) {
    $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_bufferdata_BufferView__V(this, geometry.kn);
    if ((geometry.ib !== null)) {
      $p_Ltrivalibs_graphics_painter_Form__uploadIndices__sjs_js_typedarray_TypedArray__V(this, geometry.ib);
    }
  }
  if ((vertices !== (void 0))) {
    $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_bufferdata_BufferView__V(this, vertices);
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Form = new $TypeData().i($c_Ltrivalibs_graphics_painter_Form, "trivalibs.graphics.painter.Form", ({
  f7: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter) {
  this.ht = null;
  this.ht = [];
}
$p = $c_Ltrivalibs_graphics_painter_InstanceList.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_InstanceList;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_InstanceList() {
}
$h_Ltrivalibs_graphics_painter_InstanceList.prototype = $p;
$p.K = (function() {
  return (this.ht.length | 0);
});
var $d_Ltrivalibs_graphics_painter_InstanceList = new $TypeData().i($c_Ltrivalibs_graphics_painter_InstanceList, "trivalibs.graphics.painter.InstanceList", ({
  f8: 1
}));
function $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var w = $thiz.ps();
  var h = $thiz.nL();
  panel.ns(w, h);
  var msaa = panel.fZ;
  var encoder = $thiz.e.createCommandEncoder();
  var panelFormats = panel.ja();
  var colorAttachments = [];
  var t = 0;
  while ((t < panel.pd())) {
    if ((panel.hB !== null)) {
      matchResult6: {
        var \u03b412$;
        var x18 = panel.hB;
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
      var r$2 = (+\u03b412$.eG);
      var g$2 = (+\u03b412$.bf);
      var b$2 = (+\u03b412$.bg);
      var a$2 = (+\u03b412$.bh);
      if (msaa) {
        var _2 = panel.mi(t);
        var SlotViews_this = panel.ac[t];
        var _2$1 = SlotViews_this.aA[0];
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
        var SlotViews_this$2 = panel.ac[t];
        var _2$3 = SlotViews_this$2.aA[0];
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
      var _2$5 = panel.mi(t);
      var SlotViews_this$3 = panel.ac[t];
      var _2$6 = SlotViews_this$3.aA[0];
      var attachment = ({
        "view": _2$5,
        "resolveTarget": _2$6,
        "loadOp": "load",
        "storeOp": "store"
      });
    } else {
      var SlotViews_this$4 = panel.ac[t];
      var _2$7 = SlotViews_this$4.aA[0];
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
  if (panel.gu) {
    var _2$8 = panel.lM();
    passDesc.depthStencilAttachment = ({
      "view": _2$8,
      "depthLoadOp": "clear",
      "depthStoreOp": "store",
      "depthClearValue": 1.0
    });
  }
  var shapePass = encoder.beginRenderPass(passDesc);
  var i = 0;
  while ((i < (panel.hC.length | 0))) {
    $p_Ltrivalibs_graphics_painter_Painter__renderShapeOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shape__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_Panel__V($thiz, shapePass, panel.hC[i], panel.gu, msaa, panelFormats, panel);
    i = ((1 + i) | 0);
  }
  shapePass.end();
  $thiz.aG.submit([encoder.finish()]);
  if (panel.gr) {
    $p_Ltrivalibs_graphics_painter_Painter__resolvePanelDepth__Ltrivalibs_graphics_painter_Panel__V($thiz, panel);
  }
  var srcView = panel.pe();
  var dstView = panel.oL();
  var hasPongLayers = false;
  var curEncoder = null;
  var curPass = null;
  var j = 0;
  while ((j < (panel.bo.length | 0))) {
    var layer = panel.bo[j];
    var hasPanelLayout = (layer.A.gx !== null);
    var slot0Manual = ((hasPanelLayout && ((layer.L.length | 0) > 0)) && (layer.L[0] !== null));
    var needsPingPong = (hasPanelLayout && (!slot0Manual));
    if ((layer.gn >= 0)) {
      if ((curPass !== null)) {
        curPass.end();
        $thiz.aG.submit([curEncoder.finish()]);
        curPass = null;
      }
      var mipDstView = panel.ac[0].aA[layer.gn];
      var mipSrcView = ((layer.hu >= 0) ? panel.ac[0].aA[layer.hu] : srcView);
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
      $thiz.aG.submit([enc.finish()]);
    } else if (needsPingPong) {
      hasPongLayers = true;
      if ((curPass !== null)) {
        curPass.end();
        $thiz.aG.submit([curEncoder.finish()]);
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
      $thiz.aG.submit([enc$2.finish()]);
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
    $thiz.aG.submit([curEncoder.finish()]);
  }
  if (hasPongLayers) {
    panel.pb();
  }
  panel.hA = null;
  var hasMipTargetLayers = false;
  var mi = 0;
  while ((mi < (panel.bo.length | 0))) {
    if ((panel.bo[mi].gn >= 0)) {
      hasMipTargetLayers = true;
    }
    mi = ((1 + mi) | 0);
  }
  if (((panel.je() > 1) && (!hasMipTargetLayers))) {
    $p_Ltrivalibs_graphics_painter_Painter__generateMipmaps__Ltrivalibs_graphics_painter_Panel__V($thiz, panel);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__blitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz) {
  if ((!$thiz.kY)) {
    $thiz.kX = $thiz.e.createSampler(({
      "magFilter": "nearest",
      "minFilter": "nearest"
    }));
    $thiz.kY = true;
  }
  return $thiz.kX;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz) {
  if ((!$thiz.kU)) {
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
    $thiz.kT = $x_1;
    $thiz.kU = true;
  }
  return $thiz.kT;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitPipeline__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz) {
  if ((!$thiz.kW)) {
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
    var f$proxy4 = $thiz.fV;
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
    $thiz.kV = $x_2;
    $thiz.kW = true;
  }
  return $thiz.kV;
}
function $p_Ltrivalibs_graphics_painter_Painter__depthResolveBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz) {
  if ((!$thiz.l1)) {
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
    $thiz.l0 = $x_1;
    $thiz.l1 = true;
  }
  return $thiz.l0;
}
function $p_Ltrivalibs_graphics_painter_Painter__depthResolvePipeline__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz) {
  if ((!$thiz.l3)) {
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
    $thiz.l2 = $x_2;
    $thiz.l3 = true;
  }
  return $thiz.l2;
}
function $p_Ltrivalibs_graphics_painter_Painter__resolvePanelDepth__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var encoder = $thiz.e.createCommandEncoder();
  var _2 = [];
  var _2$1 = panel.oU();
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
  var _2$4 = panel.lM();
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
  $thiz.aG.submit([encoder.finish()]);
}
function $p_Ltrivalibs_graphics_painter_Painter__mipBlitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz) {
  if ((!$thiz.l5)) {
    $thiz.l4 = $thiz.e.createSampler(({
      "magFilter": "linear",
      "minFilter": "linear"
    }));
    $thiz.l5 = true;
  }
  return $thiz.l4;
}
function $p_Ltrivalibs_graphics_painter_Painter__getMipBlitPipeline__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, format) {
  if ((!(!(!(!$thiz.hv.hasOwnProperty(format)))))) {
    return $thiz.hv[format];
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
    $thiz.hv[format] = p;
    return p;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__generateMipmaps__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var mipCount = panel.je();
  if ((mipCount <= 1)) {
    return (void 0);
  }
  var fmt = (((panel.fY.length | 0) > 0) ? panel.fY[0] : $thiz.fV);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getMipBlitPipeline__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, fmt);
  var i = 1;
  while ((i < mipCount)) {
    var srcView = panel.ac[0].aA[((i - 1) | 0)];
    var dstView = panel.ac[0].aA[i];
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
    $thiz.aG.submit([encoder.finish()]);
    i = ((1 + i) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, bindings, panelBindings) {
  $thiz.az.length = (bindings.length | 0);
  var i = 0;
  while ((i < (bindings.length | 0))) {
    $thiz.az[i] = bindings[i];
    i = ((1 + i) | 0);
  }
  $thiz.ab.length = (panelBindings.length | 0);
  var j = 0;
  while ((j < (panelBindings.length | 0))) {
    $thiz.ab[j] = panelBindings[j];
    j = ((1 + j) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shade, workBindings, workPanelBindings) {
  var dict = panel.gw;
  var keys = Object.keys(dict);
  var i = 0;
  while ((i < (keys.length | 0))) {
    var name = keys[i];
    var value = dict[name];
    if ((!(!(!(!shade.M.hasOwnProperty(name)))))) {
      var idx = (shade.M[name] | 0);
      if (((idx >= (workBindings.length | 0)) || (workBindings[idx] === null))) {
        while (((workBindings.length | 0) <= idx)) {
          workBindings.push(null);
        }
        workBindings[idx] = value;
      }
    } else if ((!(!(!(!shade.aw.hasOwnProperty(name)))))) {
      var idx$2 = (shade.aw[name] | 0);
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
  while ((i < (inst.lH().length | 0))) {
    if ((inst.lH()[i] !== null)) {
      while (((workBindings.length | 0) <= i)) {
        workBindings.push(null);
      }
      workBindings[i] = inst.lH()[i];
    }
    i = ((1 + i) | 0);
  }
  var j = 0;
  while ((j < (inst.mj().length | 0))) {
    if ((inst.mj()[j] !== null)) {
      while (((workPanelBindings.length | 0) <= j)) {
        workPanelBindings.push(null);
      }
      workPanelBindings[j] = inst.mj()[j];
    }
    j = ((1 + j) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel) {
  return ((panel !== null) && ((Object.keys(panel.gw).length | 0) > 0));
}
function $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shade, bindings) {
  if ((((bindings.length | 0) > 0) && (shade.iE !== null))) {
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
    var _2 = shade.iE;
    var bg = $x_1.createBindGroup(({
      "layout": _2,
      "entries": entries
    }));
    pass.setBindGroup(0, bg);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shade, panelBindings, srcView) {
  if ((shade.gx !== null)) {
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
        var view = ((!(!pb.depth)) ? pb.panel.ni() : (((pb.mipLevel | 0) < 0) ? pb.panel.ac[(pb.index | 0)].la : pb.panel.ac[(pb.index | 0)].aA[(pb.mipLevel | 0)]));
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
      var _2 = shade.gx;
      var pg = $x_1.createBindGroup(({
        "layout": _2,
        "entries": entries
      }));
      pass.setBindGroup(1, pg);
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__renderShapeOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shape__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_Panel__V($thiz, pass, shape, depthTest, multisample, formats, panel) {
  var fmts = ((formats !== null) ? formats : [$thiz.fV]);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, shape.Q, shape.iG, fmts, depthTest, multisample, shape.aK.iB, shape.iH, shape.aK.iz);
  pass.setPipeline(pipeline);
  pass.setVertexBuffer(0, shape.aK.gm);
  var opt$proxy9 = shape.aK.fS;
  var hasIndex = (opt$proxy9 !== null);
  if (hasIndex) {
    pass.setIndexBuffer(shape.aK.fS, shape.aK.iA);
  }
  var instanceCount = shape.iI.K();
  var hasPanelBinds = $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel);
  if ((instanceCount === 0)) {
    if (hasPanelBinds) {
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, shape.H, shape.Y);
      $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shape.Q, $thiz.az, $thiz.ab);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.Q, $thiz.az);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.Q, $thiz.ab, null);
    } else {
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.Q, shape.H);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.Q, shape.Y, null);
    }
    if (hasIndex) {
      pass.drawIndexed(shape.aK.hr);
    } else {
      pass.draw(shape.aK.hs);
    }
  } else {
    var i = 0;
    while ((i < instanceCount)) {
      var inst = shape.iI.ht[i];
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, shape.H, shape.Y);
      if (hasPanelBinds) {
        $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shape.Q, $thiz.az, $thiz.ab);
      }
      $p_Ltrivalibs_graphics_painter_Painter__applyInstanceBindings__Ltrivalibs_graphics_painter_Instance__sjs_js_Array__sjs_js_Array__V($thiz, inst, $thiz.az, $thiz.ab);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.Q, $thiz.az);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.Q, $thiz.ab, null);
      if (hasIndex) {
        pass.drawIndexed(shape.aK.hr);
      } else {
        pass.draw(shape.aK.hs);
      }
      i = ((1 + i) | 0);
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V($thiz, pass, layer, depthTest, multisample, formats, srcView, panel) {
  var fmts = ((formats !== null) ? formats : [$thiz.fV]);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, layer.A, layer.iC, fmts, depthTest, multisample, "triangle-list", "none", "ccw");
  pass.setPipeline(pipeline);
  var instanceCount = layer.iD.K();
  var hasPanelBinds = $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel);
  if ((instanceCount === 0)) {
    if (hasPanelBinds) {
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, layer.h, layer.L);
      $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, layer.A, $thiz.az, $thiz.ab);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, layer.A, $thiz.az);
      var effectiveSrcView = (((($thiz.ab.length | 0) > 0) && ($thiz.ab[0] !== null)) ? null : srcView);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.A, $thiz.ab, effectiveSrcView);
    } else {
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, layer.A, layer.h);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.A, layer.L, srcView);
    }
    pass.draw(3);
  } else {
    var i = 0;
    while ((i < instanceCount)) {
      var inst = layer.iD.ht[i];
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, layer.h, layer.L);
      if (hasPanelBinds) {
        $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, layer.A, $thiz.az, $thiz.ab);
      }
      $p_Ltrivalibs_graphics_painter_Painter__applyInstanceBindings__Ltrivalibs_graphics_painter_Instance__sjs_js_Array__sjs_js_Array__V($thiz, inst, $thiz.az, $thiz.ab);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, layer.A, $thiz.az);
      var effectiveSrcView$2 = (((($thiz.ab.length | 0) > 0) && ($thiz.ab[0] !== null)) ? null : srcView);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.A, $thiz.ab, effectiveSrcView$2);
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
  var key = ((((((((((((((shade.l8 + "|") + $p_Ltrivalibs_graphics_painter_Painter__blendKeyStr__Ltrivalibs_graphics_painter_BlendState__T($thiz, blendState)) + "|") + formats.join(",")) + "|") + depthTest) + "|") + multisample) + "|") + topology) + "|") + cullMode) + "|") + frontFace);
  if ((!(!(!(!$thiz.hw.hasOwnProperty(key)))))) {
    return $thiz.hw[key];
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
    if ((shade.iF !== null)) {
      var _2 = shade.hF;
      var _2$1 = [shade.iF];
      var vertexDescriptor = ({
        "module": _2,
        "entryPoint": "vs_main",
        "buffers": _2$1
      });
    } else {
      var _2$2 = shade.hF;
      var vertexDescriptor = ({
        "module": _2$2,
        "entryPoint": "vs_main"
      });
    }
    var _2$3 = shade.l9;
    var _2$4 = shade.hF;
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
    $thiz.hw[key] = p;
    return p;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__bindingEntry__I__O__sjs_js_Dynamic($thiz, i, b) {
  if ((b instanceof $c_Ltrivalibs_graphics_buffers_BufferBinding)) {
    var _2 = b.R;
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
  this.aG = null;
  this.fU = null;
  this.kZ = null;
  this.fV = null;
  this.hw = null;
  this.n = 0;
  this.hx = null;
  this.l6 = null;
  this.l7 = false;
  this.kX = null;
  this.kY = false;
  this.kT = null;
  this.kU = false;
  this.kV = null;
  this.kW = false;
  this.l0 = null;
  this.l1 = false;
  this.l2 = null;
  this.l3 = false;
  this.l4 = null;
  this.l5 = false;
  this.hv = null;
  this.az = null;
  this.ab = null;
  this.e = device;
  this.aG = queue;
  this.fU = canvas;
  this.kZ = context;
  this.fV = preferredFormat;
  this.hw = ({});
  this.n = 0;
  this.hx = [];
  this.hv = ({});
  this.az = [];
  this.ab = [];
}
$p = $c_Ltrivalibs_graphics_painter_Painter.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Painter;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Painter() {
}
$h_Ltrivalibs_graphics_painter_Painter.prototype = $p;
$p.oC = (function(cb) {
  this.hx.push(cb);
  cb.b0((this.fU.width | 0), (this.fU.height | 0));
});
$p.ny = (function(w, h) {
  var k = 0;
  while ((k < (this.hx.length | 0))) {
    this.hx[k].b0(w, h);
    k = ((1 + k) | 0);
  }
});
$p.ps = (function() {
  return (this.fU.width | 0);
});
$p.nL = (function() {
  return (this.fU.height | 0);
});
$p.oX = (function() {
  if ((!this.l7)) {
    this.l6 = this.e.createSampler(({
      "magFilter": "linear",
      "minFilter": "linear"
    }));
    this.l7 = true;
  }
  return this.l6;
});
$p.jg = (function(magFilter, minFilter, mipmapFilter, addressMode, addressModeU, addressModeV) {
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
$p.jb = (function(geometry, vertices, topology, frontFace) {
  return new $c_Ltrivalibs_graphics_painter_Form(this).oZ(geometry, vertices, topology, frontFace);
});
$p.h9 = (function(form, shade, cullMode, blendState) {
  return new $c_Ltrivalibs_graphics_painter_Shape(this, form, shade).p1(cullMode, blendState);
});
$p.bd = (function(shade, blendState, mipSource, mipTarget) {
  return new $c_Ltrivalibs_graphics_painter_Layer(this, shade).p0(blendState, mipSource, mipTarget);
});
$p.bt = (function(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers) {
  return new $c_Ltrivalibs_graphics_painter_Panel(this).mp(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers);
});
$p.p6 = (function(panel) {
  var encoder = this.e.createCommandEncoder();
  var swapChainView = this.kZ.getCurrentTexture().createView();
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
  var _2$2 = panel.oF();
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
  this.aG.submit([encoder.finish()]);
});
var $d_Ltrivalibs_graphics_painter_Painter = new $TypeData().i($c_Ltrivalibs_graphics_painter_Painter, "trivalibs.graphics.painter.Painter", ({
  fa: 1
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
$p.nO = (function(canvas) {
  var maybeGpu = $m_Ltrivalibs_graphics_painter_WebGPU$().nG();
  if ((maybeGpu === (void 0))) {
    return Promise.reject(Error("WebGPU is not supported"));
  } else {
    var promise$proxy1 = maybeGpu.requestAdapter();
    var promise$proxy3 = promise$proxy1.then(((value$2) => {
      if ((value$2 === null)) {
        throw new $c_sjs_js_JavaScriptException(Error("Failed to get WebGPU adapter")).aV;
      } else {
        return value$2;
      }
    }));
    var f$proxy11 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((adapter$2) => {
      var promise$proxy2 = adapter$2.requestDevice();
      var f$proxy10 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((device$2) => {
        var queue = device$2.queue;
        var context = $m_Ltrivalibs_graphics_painter_WebGPU$().nF(canvas);
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
            painter.ny(rw, rh);
          }
        }));
        observer.observe(canvas);
        return painter;
      }));
      return promise$proxy2.then($m_sjs_js_Any$().gO(f$proxy10));
    }));
    return promise$proxy3.then($m_sjs_js_Any$().gO(f$proxy11));
  }
});
$p.nN = (function(canvas, setup) {
  var promise$proxy4 = this.nO(canvas);
  return promise$proxy4.then($m_sjs_js_Any$().gO(setup));
});
var $d_Ltrivalibs_graphics_painter_Painter$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_Painter$, "trivalibs.graphics.painter.Painter$", ({
  fb: 1
}));
var $n_Ltrivalibs_graphics_painter_Painter$;
function $m_Ltrivalibs_graphics_painter_Painter$() {
  if ((!$n_Ltrivalibs_graphics_painter_Painter$)) {
    $n_Ltrivalibs_graphics_painter_Painter$ = new $c_Ltrivalibs_graphics_painter_Painter$();
  }
  return $n_Ltrivalibs_graphics_painter_Painter$;
}
function $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V($thiz) {
  if (($thiz.gp !== null)) {
    var opt$proxy6 = $thiz.gp;
    opt$proxy6.destroy();
  }
  if (($thiz.gs !== null)) {
    var opt$proxy8 = $thiz.gs;
    opt$proxy8.destroy();
  }
  var depthUsage = ($thiz.go ? 20 : 16);
  var $x_1 = $thiz.fi.e;
  var value = $thiz.fX;
  var value$1 = $thiz.fW;
  var _2 = ({
    "width": value,
    "height": value$1
  });
  var _2$1 = ($thiz.fZ ? 4 : 1);
  var depthTex = $x_1.createTexture(({
    "size": _2,
    "format": "depth24plus",
    "usage": depthUsage,
    "sampleCount": _2$1
  }));
  $thiz.gp = depthTex;
  $thiz.hy = depthTex.createView();
  if (($thiz.go && $thiz.fZ)) {
    var $x_2 = $thiz.fi.e;
    var value$2 = $thiz.fX;
    var value$3 = $thiz.fW;
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
    $thiz.gs = resTex;
    $thiz.gt = resTex.createView();
    $thiz.gr = true;
  } else {
    $thiz.gs = null;
    $thiz.gt = null;
    $thiz.gr = false;
  }
}
function $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z($thiz) {
  var i = 0;
  while ((i < ($thiz.bo.length | 0))) {
    if (($thiz.bo[i].A.gx !== null)) {
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
  this.fi = null;
  this.hE = 0;
  this.hD = 0;
  this.hB = null;
  this.gu = false;
  this.fZ = false;
  this.gv = 0;
  this.fY = null;
  this.hC = null;
  this.bo = null;
  this.gw = null;
  this.fh = null;
  this.ac = null;
  this.fg = null;
  this.ff = null;
  this.gp = null;
  this.hy = null;
  this.go = false;
  this.gs = null;
  this.gt = null;
  this.gr = false;
  this.gq = null;
  this.hz = null;
  this.hA = null;
  this.fX = 0;
  this.fW = 0;
  this.fi = painter;
  this.hE = 0;
  this.hD = 0;
  this.hB = null;
  this.gu = false;
  this.fZ = false;
  this.gv = 1;
  this.fY = [];
  this.hC = [];
  this.bo = [];
  this.gw = ({});
  this.fh = [];
  this.ac = [];
  this.fg = [];
  this.ff = [];
  this.gp = null;
  this.hy = null;
  this.go = false;
  this.gs = null;
  this.gt = null;
  this.gr = false;
  this.gq = [];
  this.hz = [];
  this.hA = null;
  this.fX = 0;
  this.fW = 0;
}
$p = $c_Ltrivalibs_graphics_painter_Panel.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Panel;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Panel() {
}
$h_Ltrivalibs_graphics_painter_Panel.prototype = $p;
$p.je = (function() {
  if ((this.gv === 0)) {
    var a = this.fX;
    var b = this.fW;
    var maxDim = ((a > b) ? a : b);
    if ((maxDim <= 0)) {
      return 1;
    } else {
      var a$1 = maxDim;
      return ((1 + $doubleToInt(((+Math.log(a$1)) / (+Math.log(2.0))))) | 0);
    }
  } else {
    return this.gv;
  }
});
$p.ja = (function() {
  return (((this.fY.length | 0) === 0) ? [this.fi.fV] : this.fY);
});
$p.pd = (function() {
  return (this.ja().length | 0);
});
$p.pe = (function() {
  var SlotViews_this = this.ac[0];
  return SlotViews_this.aA[0];
});
$p.oL = (function() {
  if (((this.ff.length | 0) > 0)) {
    var SlotViews_this = this.ff[0];
    return SlotViews_this.aA[0];
  } else {
    return null;
  }
});
$p.lM = (function() {
  return this.hy;
});
$p.oU = (function() {
  return this.gt;
});
$p.oF = (function() {
  if ((this.hA !== null)) {
    return this.hA;
  } else {
    var SlotViews_this = this.ac[0];
    return SlotViews_this.aA[0];
  }
});
$p.pb = (function() {
  var t = this.fh[0];
  this.fh[0] = this.fg[0];
  this.fg[0] = t;
  var sv = this.ac[0];
  this.ac[0] = this.ff[0];
  this.ff[0] = sv;
});
$p.mi = (function(index) {
  return this.hz[index];
});
$p.ni = (function() {
  if (((!this.go) && (this.gp !== null))) {
    this.go = true;
    $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V(this);
  }
  return (this.gr ? this.gt : this.hy);
});
$p.n8 = (function(index, mipLevel, depth) {
  return new ($a_Ltrivalibs_graphics_painter_PanelBinding())(this, index, mipLevel, depth);
});
$p.mp = (function(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers) {
  if ((width !== (void 0))) {
    var v = (width | 0);
    this.hE = v;
  }
  if ((height !== (void 0))) {
    var v$1 = (height | 0);
    this.hD = v$1;
  }
  if ((clearColor !== (void 0))) {
    this.hB = clearColor;
  }
  if ((depthTest !== (void 0))) {
    var v$2 = (!(!depthTest));
    this.gu = v$2;
  }
  if ((multisample !== (void 0))) {
    var v$3 = (!(!multisample));
    this.fZ = v$3;
  }
  if ((mips !== (void 0))) {
    if ((!(!mips))) {
      this.gv = 0;
    }
  }
  if ((mipLevels !== (void 0))) {
    var v$5 = (mipLevels | 0);
    if ((v$5 > 0)) {
      this.gv = v$5;
    }
  }
  var x = ((formats === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy1$1__O__O(this, format) : formats);
  if ((x !== (void 0))) {
    this.fY = x;
  }
  var x$1 = ((shapes === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy2$1__O__O(this, shape) : shapes);
  if ((x$1 !== (void 0))) {
    this.hC = x$1;
  }
  var x$2 = ((layers === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy3$1__O__O(this, layer) : layers);
  if ((x$2 !== (void 0))) {
    this.bo = x$2;
  }
  return this;
});
$p.ns = (function(canvasW, canvasH) {
  var targetW = ((this.hE === 0) ? canvasW : this.hE);
  var targetH = ((this.hD === 0) ? canvasH : this.hD);
  if (((targetW !== this.fX) || (targetH !== this.fW))) {
    var d = 0;
    while ((d < (this.fh.length | 0))) {
      this.fh[d].destroy();
      d = ((1 + d) | 0);
    }
    d = 0;
    while ((d < (this.fg.length | 0))) {
      this.fg[d].destroy();
      d = ((1 + d) | 0);
    }
    d = 0;
    while ((d < (this.gq.length | 0))) {
      this.gq[d].destroy();
      d = ((1 + d) | 0);
    }
    this.fX = targetW;
    this.fW = targetH;
    var mipCount = this.je();
    var fmts = this.ja();
    var hasPong = $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z(this);
    this.fh = [];
    this.ac = [];
    this.fg = [];
    this.ff = [];
    this.gq = [];
    this.hz = [];
    var i = 0;
    while ((i < (fmts.length | 0))) {
      var fmt = fmts[i];
      var $x_1 = this.fi.e;
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
      this.fh.push(tex);
      this.ac.push($p_Ltrivalibs_graphics_painter_Panel__buildSlotViews__Ltrivalibs_graphics_painter_GPUTexture__I__Ltrivalibs_graphics_painter_SlotViews(this, tex, mipCount));
      if (hasPong) {
        var $x_2 = this.fi.e;
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
        this.fg.push(pongTex);
        this.ff.push($p_Ltrivalibs_graphics_painter_Panel__buildSlotViews__Ltrivalibs_graphics_painter_GPUTexture__I__Ltrivalibs_graphics_painter_SlotViews(this, pongTex, mipCount));
      }
      if (this.fZ) {
        var $x_3 = this.fi.e;
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
        this.gq.push(msaaTex);
        this.hz.push(msaaTex.createView());
      }
      i = ((1 + i) | 0);
    }
    if (this.gu) {
      $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V(this);
    }
  }
});
var $d_Ltrivalibs_graphics_painter_Panel = new $TypeData().i($c_Ltrivalibs_graphics_painter_Panel, "trivalibs.graphics.painter.Panel", ({
  fc: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Shade(id, shaderModule, vertexBufferLayout, valueBindGroupLayout, panelBindGroupLayout, pipelineLayout, isLayer, uniformIndices, panelIndices) {
  this.l8 = 0;
  this.hF = null;
  this.iF = null;
  this.iE = null;
  this.gx = null;
  this.l9 = null;
  this.M = null;
  this.aw = null;
  this.l8 = id;
  this.hF = shaderModule;
  this.iF = vertexBufferLayout;
  this.iE = valueBindGroupLayout;
  this.gx = panelBindGroupLayout;
  this.l9 = pipelineLayout;
  this.M = uniformIndices;
  this.aw = panelIndices;
}
$p = $c_Ltrivalibs_graphics_painter_Shade.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Shade;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Shade() {
}
$h_Ltrivalibs_graphics_painter_Shade.prototype = $p;
var $d_Ltrivalibs_graphics_painter_Shade = new $TypeData().i($c_Ltrivalibs_graphics_painter_Shade, "trivalibs.graphics.painter.Shade", ({
  fd: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_SlotViews(perMip, sampling) {
  this.aA = null;
  this.la = null;
  this.aA = perMip;
  this.la = sampling;
}
$p = $c_Ltrivalibs_graphics_painter_SlotViews.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_SlotViews;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_SlotViews() {
}
$h_Ltrivalibs_graphics_painter_SlotViews.prototype = $p;
var $d_Ltrivalibs_graphics_painter_SlotViews = new $TypeData().i($c_Ltrivalibs_graphics_painter_SlotViews, "trivalibs.graphics.painter.SlotViews", ({
  ff: 1
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
$p.nG = (function() {
  return window.navigator.gpu;
});
$p.nF = (function(canvas) {
  return canvas.getContext("webgpu");
});
var $d_Ltrivalibs_graphics_painter_WebGPU$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_WebGPU$, "trivalibs.graphics.painter.WebGPU$", ({
  fg: 1
}));
var $n_Ltrivalibs_graphics_painter_WebGPU$;
function $m_Ltrivalibs_graphics_painter_WebGPU$() {
  if ((!$n_Ltrivalibs_graphics_painter_WebGPU$)) {
    $n_Ltrivalibs_graphics_painter_WebGPU$ = new $c_Ltrivalibs_graphics_painter_WebGPU$();
  }
  return $n_Ltrivalibs_graphics_painter_WebGPU$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController(cam, in$1, sensitivity, speed) {
  this.lb = null;
  this.ad = null;
  this.iJ = 0.0;
  this.lc = 0.0;
  this.lb = cam;
  this.ad = in$1;
  this.iJ = sensitivity;
  this.lc = speed;
}
$p = $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController() {
}
$h_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController.prototype = $p;
$p.hb = (function(tpf) {
  var dist = ((this.lc * tpf) / 1000.0);
  var forward = 0.0;
  if (((this.ad.ao.aQ("KeyW") || this.ad.ao.aQ("ArrowUp")) || (this.ad.iW.fk && (this.ad.ao.mk() === 1)))) {
    forward = (forward + dist);
  }
  if ((((this.ad.ao.aQ("KeyS") || this.ad.ao.aQ("ArrowDown")) || this.ad.ao.nR(2)) || (this.ad.ao.mk() >= 2))) {
    forward = (forward - dist);
  }
  var left = 0.0;
  if ((this.ad.ao.aQ("KeyA") || this.ad.ao.aQ("ArrowLeft"))) {
    left = (left + dist);
  }
  if ((this.ad.ao.aQ("KeyD") || this.ad.ao.aQ("ArrowRight"))) {
    left = (left - dist);
  }
  var up = 0.0;
  if (this.ad.ao.aQ("Space")) {
    up = (up + dist);
  }
  if ((this.ad.ao.aQ("ShiftLeft") || this.ad.ao.aQ("ShiftRight"))) {
    up = (up - dist);
  }
  var drag = this.ad.iV.nh();
  var deltaH = (((-(+drag.aa)) * this.iJ) / 1000.0);
  var deltaV = (((-(+drag.am)) * this.iJ) / 1000.0);
  this.lb.oy(forward, left, up, deltaH, deltaV);
});
var $d_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController = new $TypeData().i($c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController, "trivalibs.graphics.scene.BasicFirstPersonCameraController", ({
  fh: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_scene_PerspectiveCamera(fov, aspect, near, far, rotH, rotV, pos, proj) {
  this.g1 = 0.0;
  this.gy = 0.0;
  this.g2 = 0.0;
  this.g0 = 0.0;
  this.aB = 0.0;
  this.bb = 0.0;
  this.ak = null;
  this.hG = null;
  this.g1 = fov;
  this.gy = aspect;
  this.g2 = near;
  this.g0 = far;
  this.aB = rotH;
  this.bb = rotV;
  this.ak = pos;
  this.hG = proj;
}
$p = $c_Ltrivalibs_graphics_scene_PerspectiveCamera.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_PerspectiveCamera;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_PerspectiveCamera() {
}
$h_Ltrivalibs_graphics_scene_PerspectiveCamera.prototype = $p;
$p.jh = (function(fov, aspect, near, far, rotH, rotV, pos) {
  var needsProj = ((((fov !== this.g1) || (aspect !== this.gy)) || (near !== this.g2)) || (far !== this.g0));
  this.g1 = fov;
  this.gy = aspect;
  this.g2 = near;
  this.g0 = far;
  if ((rotH !== this.aB)) {
    this.aB = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().jl(rotH);
  }
  if ((rotV !== this.bb)) {
    this.bb = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().jk(rotV);
  }
  this.ak = pos;
  if (needsProj) {
    this.hG = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($m_Ltrivalibs_graphics_math_cpu_Mat4$(), fov, aspect, near, far);
  }
});
$p.oy = (function(forward, left, up, deltaH, deltaV) {
  if ((deltaH !== 0.0)) {
    this.aB = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().jl((this.aB + deltaH));
  }
  if ((deltaV !== 0.0)) {
    this.bb = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().jk((this.bb + deltaV));
  }
  if ((up !== 0.0)) {
    this.ak = new $c_Ltrivalibs_graphics_math_cpu_Vec3(this.ak.t, (this.ak.w + up), this.ak.u);
  }
  if ((forward !== 0.0)) {
    var $x_4 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().a2();
    var $x_3 = this.ak;
    var $x_2 = $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
    var $x_1 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().a2();
    var p$proxy1 = this.aB;
    var x$1 = (-(+Math.sin(p$proxy1)));
    var p$proxy2 = this.aB;
    this.ak = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($x_4, $x_3, $x_2, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($x_1, new $c_Ltrivalibs_graphics_math_cpu_Vec3(x$1, 0.0, (-(+Math.cos(p$proxy2)))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), forward));
  }
  if ((left !== 0.0)) {
    var $x_9 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().a2();
    var $x_8 = this.ak;
    var $x_7 = $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
    var $x_6 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().a2();
    var p$proxy3 = this.aB;
    var $x_5 = Math.cos(p$proxy3);
    var p$proxy4 = this.aB;
    this.ak = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($x_9, $x_8, $x_7, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($x_6, new $c_Ltrivalibs_graphics_math_cpu_Vec3((-(+$x_5)), 0.0, (+Math.sin(p$proxy4))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), left));
  }
});
$p.pj = (function() {
  return new $c_Ltrivalibs_graphics_scene_Transform(this.ak, $f_Ltrivalibs_graphics_math_cpu_QuatImmutableOps__quatMul__O__Ltrivalibs_graphics_math_Vec4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$(), $m_Ltrivalibs_graphics_math_cpu_Quat$().lU(this.aB), $m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$(), $m_Ltrivalibs_graphics_math_cpu_Quat$().nE(this.bb)), new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0));
});
$p.mu = (function() {
  var $x_1 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().gQ();
  var t = this.pj();
  return $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($x_1, $m_Ltrivalibs_graphics_math_cpu_Mat4$().lV(t.lf, t.ld, t.le), $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
});
var $d_Ltrivalibs_graphics_scene_PerspectiveCamera = new $TypeData().i($c_Ltrivalibs_graphics_scene_PerspectiveCamera, "trivalibs.graphics.scene.PerspectiveCamera", ({
  fi: 1
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
$p.jl = (function(a) {
  var r = (a % 6.283185307179586);
  return ((r < 0.0) ? (r + 6.283185307179586) : r);
});
$p.jk = (function(a) {
  return ((a < (-1.5707963267948966)) ? (-1.5707963267948966) : ((a > 1.5707963267948966) ? 1.5707963267948966 : a));
});
$p.mT = (function(fov, aspect, near, far, rotH, rotV, pos) {
  var proj = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($m_Ltrivalibs_graphics_math_cpu_Mat4$(), fov, aspect, near, far);
  return new $c_Ltrivalibs_graphics_scene_PerspectiveCamera(fov, aspect, near, far, this.jl(rotH), this.jk(rotV), pos, proj);
});
var $d_Ltrivalibs_graphics_scene_PerspectiveCamera$ = new $TypeData().i($c_Ltrivalibs_graphics_scene_PerspectiveCamera$, "trivalibs.graphics.scene.PerspectiveCamera$", ({
  fj: 1
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
  this.lf = null;
  this.ld = null;
  this.le = null;
  this.lf = translation;
  this.ld = rotation;
  this.le = scale;
}
$p = $c_Ltrivalibs_graphics_scene_Transform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_Transform;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_Transform() {
}
$h_Ltrivalibs_graphics_scene_Transform.prototype = $p;
var $d_Ltrivalibs_graphics_scene_Transform = new $TypeData().i($c_Ltrivalibs_graphics_scene_Transform, "trivalibs.graphics.scene.Transform", ({
  fk: 1
}));
function $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($thiz, builtins) {
  var s = "";
  var i = 0;
  while ((i < (builtins.length | 0))) {
    var b = builtins[i];
    s = ((s + ((((", @builtin(" + b.aS) + ") ") + b.b4) + ": ")) + b.aT);
    i = ((1 + i) | 0);
  }
  return s;
}
function $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($thiz, structName, locNames, locTypes, builtins) {
  var array$1 = $m_sjs_js_ArrayOps$().mw($m_sjs_js_ArrayOps$().mv(locNames, new $c_sjs_js_WrappedArray(locTypes)));
  var len = (array$1.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    var $x_2 = i;
    var x0 = array$1[i];
    matchResult3: {
      var $x_1;
      if ((x0 !== null)) {
        var x11 = x0.aa;
        if ((x11 !== null)) {
          var name = x11.aa;
          var typ = x11.am;
          var $x_1 = (((((("  @location(" + (x0.am | 0)) + ") ") + name) + ": ") + typ) + ",");
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
        var name$1 = x0$1.b4;
        var builtin = x0$1.aS;
        var typ$1 = x0$1.aT;
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
  var array$1 = $m_sjs_js_ArrayOps$().mw($m_sjs_js_ArrayOps$().mv(names, new $c_sjs_js_WrappedArray(types)));
  var len = (array$1.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    var $x_3 = i;
    var x0 = array$1[i];
    matchResult5: {
      var $x_2;
      if ((x0 !== null)) {
        var x20 = x0.aa;
        if ((x20 !== null)) {
          var name = x20.aa;
          var typ = x20.am;
          var bindingIdx = (x0.am | 0);
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
  fn: 1
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
  this.I = null;
  this.I = target;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_AssignTarget.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_AssignTarget;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_AssignTarget() {
}
$h_Ltrivalibs_graphics_shader_dsl_AssignTarget.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_AssignTarget = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_AssignTarget, "trivalibs.graphics.shader.dsl.AssignTarget", ({
  fo: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_FnRegistry() {
  this.iK = null;
  this.X = null;
  this.iK = ({});
  this.X = [];
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FnRegistry() {
}
$h_Ltrivalibs_graphics_shader_dsl_FnRegistry.prototype = $p;
$p.mt = (function(d) {
  if ((!(!(!(!(!this.iK.hasOwnProperty(d.name))))))) {
    this.iK[d.name] = true;
    var array = d.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      this.mt(array[i]);
      i = ((1 + i) | 0);
    }
    this.X.push(d);
  }
});
var $d_Ltrivalibs_graphics_shader_dsl_FnRegistry = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FnRegistry, "trivalibs.graphics.shader.dsl.FnRegistry", ({
  fp: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$() {
  this.i = null;
  this.i = null;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FnRegistry$() {
}
$h_Ltrivalibs_graphics_shader_dsl_FnRegistry$.prototype = $p;
$p.hY = (function(d) {
  var r = this.i;
  if ((r !== null)) {
    r.mt(d);
  }
});
var $d_Ltrivalibs_graphics_shader_dsl_FnRegistry$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FnRegistry$, "trivalibs.graphics.shader.dsl.FnRegistry$", ({
  fq: 1
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
  this.ae = null;
  this.an = null;
  this.Z = null;
  this.mK = null;
  this.bq = null;
  this.ae = in$1;
  this.an = out;
  this.Z = bindings;
  this.mK = textures;
  this.bq = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "in.position");
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FragmentCtx() {
}
$h_Ltrivalibs_graphics_shader_dsl_FragmentCtx.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_FragmentCtx = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FragmentCtx, "trivalibs.graphics.shader.dsl.FragmentCtx", ({
  fr: 1
}));
function $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, data) {
  if ((!(!(!(!(!$thiz.iL.hasOwnProperty(data.name))))))) {
    var dict = $thiz.iL;
    var key = data.name;
    dict[key] = true;
    var array = data.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, array[i]);
      i = ((1 + i) | 0);
    }
    $thiz.iM.push(data.src);
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_LayerProgram() {
  this.a0 = null;
  this.iM = null;
  this.iL = null;
  this.a0 = "";
  this.iM = [];
  this.iL = ({});
}
$p = $c_Ltrivalibs_graphics_shader_dsl_LayerProgram.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_LayerProgram;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_LayerProgram() {
}
$h_Ltrivalibs_graphics_shader_dsl_LayerProgram.prototype = $p;
$p.as = (function() {
  return this.iM.join("\n\n");
});
var $d_Ltrivalibs_graphics_shader_dsl_LayerProgram = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_LayerProgram, "trivalibs.graphics.shader.dsl.LayerProgram", ({
  fs: 1
}));
function $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, data) {
  if ((!(!(!(!(!$thiz.iN.hasOwnProperty(data.name))))))) {
    var dict = $thiz.iN;
    var key = data.name;
    dict[key] = true;
    var array = data.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, array[i]);
      i = ((1 + i) | 0);
    }
    $thiz.iO.push(data.src);
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_Program() {
  this.aX = null;
  this.aL = null;
  this.iO = null;
  this.iN = null;
  this.aX = "";
  this.aL = "";
  this.iO = [];
  this.iN = ({});
}
$p = $c_Ltrivalibs_graphics_shader_dsl_Program.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_Program;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_Program() {
}
$h_Ltrivalibs_graphics_shader_dsl_Program.prototype = $p;
$p.as = (function() {
  return this.iO.join("\n\n");
});
var $d_Ltrivalibs_graphics_shader_dsl_Program = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_Program, "trivalibs.graphics.shader.dsl.Program", ({
  ft: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(in$1, out, bindings, locals, textures) {
  this.aY = null;
  this.aM = null;
  this.fj = null;
  this.aY = in$1;
  this.aM = out;
  this.fj = bindings;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_VertexCtx.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_VertexCtx;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_VertexCtx() {
}
$h_Ltrivalibs_graphics_shader_dsl_VertexCtx.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_VertexCtx = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_VertexCtx, "trivalibs.graphics.shader.dsl.VertexCtx", ({
  fy: 1
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
$p.mL = (function() {
  return [];
});
var $d_Ltrivalibs_graphics_shader_dsl_WgslFnData$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_WgslFnData$, "trivalibs.graphics.shader.dsl.WgslFnData$", ({
  fB: 1
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
$p.hT = (function(fn) {
  return fn.name;
});
$p.aR = (function(fn, ds) {
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
  ds.gN(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((d$3) => {
    if ((!(!(!(!(!seen.hasOwnProperty(d$3.name))))))) {
      seen[d$3.name] = true;
      merged.push(d$3);
    }
  })));
  return new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())(fn.name, fn.src, merged);
});
var $d_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$, "trivalibs.graphics.shader.dsl.fn$package$WgslFn$", ({
  fC: 1
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
$p.D = (function(device, bindGroupLayouts) {
  return device.createPipelineLayout(({
    "bindGroupLayouts": bindGroupLayouts
  }));
});
var $d_Ltrivalibs_graphics_shader_layouts$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_layouts$, "trivalibs.graphics.shader.layouts$", ({
  fD: 1
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
  this.lh = null;
  this.iR = null;
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
  this.lh = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("box_blur_2d_auto", src$8);
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
  this.iR = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("tent_blur_2d_auto", src$9);
}
$p = $c_Ltrivalibs_graphics_shader_lib_blur_Blur$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_blur_Blur$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_blur_Blur$() {
}
$h_Ltrivalibs_graphics_shader_lib_blur_Blur$.prototype = $p;
var $d_Ltrivalibs_graphics_shader_lib_blur_Blur$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_blur_Blur$, "trivalibs.graphics.shader.lib.blur.Blur$", ({
  fE: 1
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
  this.hH = null;
  this.hI = null;
  this.hJ = null;
  this.li = null;
  this.lj = null;
  this.iS = null;
  this.lk = null;
  this.ll = null;
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
  this.hH = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("permute_3_", src);
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
  this.hI = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("permute_4_", src$2);
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
  this.hJ = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("taylor_inv_sqrt_4_", src$3);
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
  this.li = $x_1.aR(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_noise_2d", src$4), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().k(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.hH]))));
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
  this.lj = $x_2.aR(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_noise_2d_seeded", src$5), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().k(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.hH]))));
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
  this.iS = $x_3.aR(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_noise_3d", src$6), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().k(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.hI, this.hJ]))));
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
  this.lk = $x_4.aR(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_noise_3d_seeded", src$7), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().k(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.hI, this.hJ]))));
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
  $x_5.aR(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("fbm_simplex_2d", src$8), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().k(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.li]))));
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
  $x_6.aR(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("fbm_simplex_2d_seeded", src$9), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().k(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.lj]))));
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
  $x_7.aR(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("fbm_simplex_3d", src$10), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().k(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.iS]))));
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
  $x_8.aR(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("fbm_simplex_3d_seeded", src$11), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().k(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.lk]))));
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
  $x_9.aR(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("worley_2d", src$12), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().k(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.hH]))));
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
  this.ll = $x_10.aR(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_noise_4d", src$16), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().k(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([permute1, this.hI, taylorInvSqrt1, this.hJ, grad4]))));
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
  $x_11.aR(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("tiling_simplex_noise_2d", src$17), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().k(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.ll]))));
}
$p = $c_Ltrivalibs_graphics_shader_lib_random_Simplex$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_random_Simplex$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_random_Simplex$() {
}
$h_Ltrivalibs_graphics_shader_lib_random_Simplex$.prototype = $p;
var $d_Ltrivalibs_graphics_shader_lib_random_Simplex$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_random_Simplex$, "trivalibs.graphics.shader.lib.random.Simplex$", ({
  fF: 1
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
  this.lm = null;
  this.iT = null;
  this.gB = 0;
  this.gC = 0.0;
  this.hK = 0.0;
  this.hL = 0.0;
  this.iU = false;
  this.lm = frame;
  this.iT = onFpsCallback;
  this.gB = 0;
  this.gC = 0.0;
  this.hK = 0.0;
  this.hL = (-1.0);
  this.iU = false;
}
$p = $c_Ltrivalibs_utils_animation_Animator.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_animation_Animator;
/** @constructor */
function $h_Ltrivalibs_utils_animation_Animator() {
}
$h_Ltrivalibs_utils_animation_Animator.prototype = $p;
$p.mn = (function(time) {
  this.gB = ((1 + this.gB) | 0);
  if ((this.gC === 0.0)) {
    this.gC = time;
    this.hK = time;
  }
  var fpsElapsed = (time - this.gC);
  if ((fpsElapsed >= 1000.0)) {
    var fps = ((1000.0 * this.gB) / fpsElapsed);
    if (((time - this.hK) >= 1000.0)) {
      var args$proxy1 = $m_sr_ScalaRunTime$().au(new ($d_sjs_js_Any.r().C)([(fps.toFixed(1) + " FPS")]));
      console.log(...$m_sjsr_Compat$().at(args$proxy1));
      this.hK = time;
      if ((this.iT !== null)) {
        (0, this.iT)(fps);
      }
    }
    this.gB = 0;
    this.gC = time;
  }
  var delta = ((this.hL < 0.0) ? 0.0 : (time - this.hL));
  this.hL = time;
  (0, this.lm)(delta);
  if (this.iU) {
    requestAnimationFrame($m_sjs_js_Any$().gO(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
      this.mn((+v1$2));
    }))));
  }
});
$p.p9 = (function() {
  this.iU = true;
  return requestAnimationFrame($m_sjs_js_Any$().gO(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
    this.mn((+v1$2));
  }))));
});
var $d_Ltrivalibs_utils_animation_Animator = new $TypeData().i($c_Ltrivalibs_utils_animation_Animator, "trivalibs.utils.animation.Animator", ({
  fM: 1
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
$p.mS = (function(frame) {
  var animator = new $c_Ltrivalibs_utils_animation_Animator(frame, null);
  animator.p9();
  return animator;
});
var $d_Ltrivalibs_utils_animation_animate$package$ = new $TypeData().i($c_Ltrivalibs_utils_animation_animate$package$, "trivalibs.utils.animation.animate$package$", ({
  fN: 1
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
  this.ao = null;
  this.iV = null;
  this.iW = null;
  this.ao = input;
  this.iV = drag;
  this.iW = hold;
}
$p = $c_Ltrivalibs_utils_events_CanvasInput.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_CanvasInput;
/** @constructor */
function $h_Ltrivalibs_utils_events_CanvasInput() {
}
$h_Ltrivalibs_utils_events_CanvasInput.prototype = $p;
$p.hb = (function(tpf) {
  this.iV.pl();
  this.iW.hb(tpf);
});
var $d_Ltrivalibs_utils_events_CanvasInput = new $TypeData().i($c_Ltrivalibs_utils_events_CanvasInput, "trivalibs.utils.events.CanvasInput", ({
  fO: 1
}));
function $ct_Ltrivalibs_utils_events_DragGesture__F0__($thiz, pointersOf) {
  $thiz.ln = pointersOf;
  $thiz.gD = null;
  $thiz.iX = 0.0;
  $thiz.iY = 0.0;
  $thiz.hM = 0.0;
  $thiz.hN = 0.0;
  return $thiz;
}
function $ct_Ltrivalibs_utils_events_DragGesture__Ltrivalibs_utils_events_InputState__($thiz, input) {
  $ct_Ltrivalibs_utils_events_DragGesture__F0__($thiz, $ps_Ltrivalibs_utils_events_DragGesture__DragGesture$superArg$1__Ltrivalibs_utils_events_InputState__F0(input));
  return $thiz;
}
function $ps_Ltrivalibs_utils_events_DragGesture__DragGesture$superArg$1__Ltrivalibs_utils_events_InputState__F0(input) {
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => input.aH));
}
/** @constructor */
function $c_Ltrivalibs_utils_events_DragGesture() {
  this.ln = null;
  this.gD = null;
  this.iX = 0.0;
  this.iY = 0.0;
  this.hM = 0.0;
  this.hN = 0.0;
}
$p = $c_Ltrivalibs_utils_events_DragGesture.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_DragGesture;
/** @constructor */
function $h_Ltrivalibs_utils_events_DragGesture() {
}
$h_Ltrivalibs_utils_events_DragGesture.prototype = $p;
$p.nh = (function() {
  return new $c_T2(this.hM, this.hN);
});
$p.pl = (function() {
  var d = $m_Ltrivalibs_utils_events_gestures$package$().lO(this.ln.gL());
  if ((d === null)) {
    this.gD = null;
    this.hM = 0.0;
    this.hN = 0.0;
  } else {
    var opt$proxy2 = this.gD;
    var sameDriver = (((opt$proxy2 !== null) && (d.aZ !== null)) && ((+this.gD) === (+d.aZ)));
    this.hM = (sameDriver ? (d.g4 - this.iX) : 0.0);
    this.hN = (sameDriver ? (d.g5 - this.iY) : 0.0);
    this.gD = d.aZ;
    this.iX = d.g4;
    this.iY = d.g5;
  }
});
var $d_Ltrivalibs_utils_events_DragGesture = new $TypeData().i($c_Ltrivalibs_utils_events_DragGesture, "trivalibs.utils.events.DragGesture", ({
  fP: 1
}));
function $ct_Ltrivalibs_utils_events_HoldGesture__F0__D__D__($thiz, pointersOf, holdDelay, holdRadius) {
  $thiz.lq = pointersOf;
  $thiz.lo = holdDelay;
  $thiz.lp = holdRadius;
  $thiz.gF = null;
  $thiz.g3 = 0.0;
  $thiz.gG = false;
  $thiz.gE = false;
  $thiz.fk = false;
  return $thiz;
}
function $ct_Ltrivalibs_utils_events_HoldGesture__Ltrivalibs_utils_events_InputState__D__D__($thiz, input, holdDelay, holdRadius) {
  $ct_Ltrivalibs_utils_events_HoldGesture__F0__D__D__($thiz, $ps_Ltrivalibs_utils_events_HoldGesture__HoldGesture$superArg$1__Ltrivalibs_utils_events_InputState__D__D__F0(input, holdDelay, holdRadius), holdDelay, holdRadius);
  return $thiz;
}
function $ps_Ltrivalibs_utils_events_HoldGesture__HoldGesture$superArg$1__Ltrivalibs_utils_events_InputState__D__D__F0(input, holdDelay, holdRadius) {
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => input.aH));
}
/** @constructor */
function $c_Ltrivalibs_utils_events_HoldGesture() {
  this.lq = null;
  this.lo = 0.0;
  this.lp = 0.0;
  this.gF = null;
  this.g3 = 0.0;
  this.gG = false;
  this.gE = false;
  this.fk = false;
}
$p = $c_Ltrivalibs_utils_events_HoldGesture.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_HoldGesture;
/** @constructor */
function $h_Ltrivalibs_utils_events_HoldGesture() {
}
$h_Ltrivalibs_utils_events_HoldGesture.prototype = $p;
$p.hb = (function(tpf) {
  var d = $m_Ltrivalibs_utils_events_gestures$package$().lO(this.lq.gL());
  if ((d === null)) {
    this.gF = null;
    this.g3 = 0.0;
    this.gG = false;
    this.gE = false;
    this.fk = false;
  } else {
    var pid = d.aZ;
    if ((!(((this.gF !== null) && (pid !== null)) && ((+this.gF) === (+pid))))) {
      this.gF = pid;
      this.g3 = 0.0;
      this.gG = false;
      this.gE = false;
    }
    this.g3 = (this.g3 + tpf);
    if (this.gE) {
      this.fk = true;
    } else if ((this.g3 < this.lo)) {
      var dx = (d.g4 - d.j0);
      var dy = (d.g5 - d.j1);
      var p$proxy1 = ((dx * dx) + (dy * dy));
      if (((+Math.sqrt(p$proxy1)) > this.lp)) {
        this.gG = true;
      }
      this.fk = false;
    } else if (this.gG) {
      this.fk = false;
    } else {
      this.gE = true;
      this.fk = true;
    }
  }
});
var $d_Ltrivalibs_utils_events_HoldGesture = new $TypeData().i($c_Ltrivalibs_utils_events_HoldGesture, "trivalibs.utils.events.HoldGesture", ({
  fQ: 1
}));
function $p_Ltrivalibs_utils_events_InputState__freeSlot__Ltrivalibs_utils_events_Pointer($thiz) {
  var i = 0;
  while ((i < ($thiz.gJ.length | 0))) {
    if (($thiz.gJ[i].aZ === null)) {
      return $thiz.gJ[i];
    }
    i = ((1 + i) | 0);
  }
  return null;
}
function $p_Ltrivalibs_utils_events_InputState__slotById__D__Ltrivalibs_utils_events_Pointer($thiz, id) {
  var i = 0;
  while ((i < ($thiz.aH.length | 0))) {
    var p = $thiz.aH[i];
    if (((p.aZ !== null) && ((+p.aZ) === id))) {
      return p;
    }
    i = ((1 + i) | 0);
  }
  return null;
}
function $p_Ltrivalibs_utils_events_InputState__removePointer__D__V($thiz, id) {
  var p = $p_Ltrivalibs_utils_events_InputState__slotById__D__Ltrivalibs_utils_events_Pointer($thiz, id);
  if ((p !== null)) {
    p.aZ = null;
    var idx = $m_sjs_js_ArrayOps$().lZ($thiz.aH, p, 0);
    if ((idx >= 0)) {
      $thiz.aH.splice(idx, 1);
    }
  }
}
function $p_Ltrivalibs_utils_events_InputState__install__V($thiz) {
  var i = 0;
  while ((i < $thiz.lv)) {
    $thiz.gJ.push(new $c_Ltrivalibs_utils_events_Pointer());
    i = ((1 + i) | 0);
  }
  $m_Ltrivalibs_utils_events_keyboard$package$().nU($thiz.gH, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((k$3) => {
    if ((!(!(!(!(!$thiz.gI.hasOwnProperty(k$3))))))) {
      var value$proxy1 = (+Date.now());
      $thiz.gI[k$3] = value$proxy1;
      if ((!($thiz.ap === (void 0)))) {
        var m$proxy3 = $thiz.ap;
        m$proxy3();
      }
    }
  })), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((k$3$1) => {
    delete $thiz.gI[k$3$1];
    if ((!($thiz.ap === (void 0)))) {
      var m$proxy4 = $thiz.ap;
      m$proxy4();
    }
  })), false);
  $m_Ltrivalibs_utils_events_pointer$package$().oJ($thiz.ls, $m_Ltrivalibs_utils_events_pointer$package$().oK(), new $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078(((v1$2, v2$2, v3$2, v4$2, v5$2) => {
    var button = (v1$2 | 0);
    var id = (+v2$2);
    var x$1 = (+v3$2);
    var y = (+v4$2);
    if ($thiz.lu) {
      $thiz.gH.focus();
    }
    var key$proxy3 = ("" + button);
    var value$proxy2 = (+Date.now());
    $thiz.hO[key$proxy3] = value$proxy2;
    var slot = $p_Ltrivalibs_utils_events_InputState__freeSlot__Ltrivalibs_utils_events_Pointer($thiz);
    if ((slot !== null)) {
      slot.aZ = id;
      slot.iZ = button;
      (+Date.now());
      slot.j0 = x$1;
      slot.j1 = y;
      slot.g4 = x$1;
      slot.g5 = y;
      $thiz.aH.push(slot);
      ($thiz.aH.length | 0);
    }
    if ((!($thiz.ap === (void 0)))) {
      var m$proxy5 = $thiz.ap;
      m$proxy5();
    }
  })), new $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(((v1$2$1, v2$2$1, v3$2$1) => {
    var id$1 = (+v1$2$1);
    var x$2 = (+v2$2$1);
    var y$1 = (+v3$2$1);
    var p = $p_Ltrivalibs_utils_events_InputState__slotById__D__Ltrivalibs_utils_events_Pointer($thiz, id$1);
    if ((p !== null)) {
      p.g4 = x$2;
      p.g5 = y$1;
      if ((($thiz.aH.length | 0) > 0)) {
        $thiz.aH[0];
      }
    }
  })), new $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(((v1$2$2, v2$2$2, v3$2$2, v4$2$1) => {
    var button$1 = (v1$2$2 | 0);
    var id$2 = (+v2$2$2);
    delete $thiz.hO[("" + button$1)];
    $p_Ltrivalibs_utils_events_InputState__removePointer__D__V($thiz, id$2);
    if ((!($thiz.ap === (void 0)))) {
      var m$proxy6 = $thiz.ap;
      m$proxy6();
    }
  })), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2$3) => {
    $p_Ltrivalibs_utils_events_InputState__removePointer__D__V($thiz, (+v1$2$3));
    if ((!($thiz.ap === (void 0)))) {
      var m$proxy7 = $thiz.ap;
      m$proxy7();
    }
  })), $thiz.lw);
  $thiz.gH.addEventListener("focus", $thiz.lt);
  $thiz.gH.addEventListener("blur", $thiz.lr);
}
/** @constructor */
function $c_Ltrivalibs_utils_events_InputState(el, keyTarget, suppressContextMenu, onActivity, focusOnPointerDown, maxPointers) {
  this.ls = null;
  this.gH = null;
  this.lw = false;
  this.ap = null;
  this.lu = false;
  this.lv = 0;
  this.gI = null;
  this.hO = null;
  this.gJ = null;
  this.aH = null;
  this.lt = null;
  this.lr = null;
  this.ls = el;
  this.gH = keyTarget;
  this.lw = suppressContextMenu;
  this.ap = onActivity;
  this.lu = focusOnPointerDown;
  this.lv = maxPointers;
  this.gI = ({});
  this.hO = ({});
  this.gJ = [];
  this.aH = [];
  if ($m_sr_BoxesRunTime$().c(keyTarget, window)) {
    (!(!document.hasFocus()));
  } else {
    $m_sr_BoxesRunTime$().c(keyTarget, document.activeElement);
  }
  this.lt = ((_$1$3) => {
    if ((!(this.ap === (void 0)))) {
      var m$proxy1 = this.ap;
      m$proxy1();
    }
  });
  this.lr = ((_$2$3) => {
    if ((!(this.ap === (void 0)))) {
      var m$proxy2 = this.ap;
      m$proxy2();
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
$p.aQ = (function(key) {
  return (!(!(!(!this.gI.hasOwnProperty(key)))));
});
$p.nR = (function(button) {
  var key$proxy7 = ("" + button);
  return (!(!(!(!this.hO.hasOwnProperty(key$proxy7)))));
});
$p.mk = (function() {
  return (this.aH.length | 0);
});
var $d_Ltrivalibs_utils_events_InputState = new $TypeData().i($c_Ltrivalibs_utils_events_InputState, "trivalibs.utils.events.InputState", ({
  fR: 1
}));
/** @constructor */
function $c_Ltrivalibs_utils_events_Pointer() {
  this.aZ = null;
  this.iZ = 0;
  this.j0 = 0.0;
  this.j1 = 0.0;
  this.g4 = 0.0;
  this.g5 = 0.0;
  this.aZ = null;
  this.iZ = 0;
  this.j0 = 0.0;
  this.j1 = 0.0;
  this.g4 = 0.0;
  this.g5 = 0.0;
}
$p = $c_Ltrivalibs_utils_events_Pointer.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_Pointer;
/** @constructor */
function $h_Ltrivalibs_utils_events_Pointer() {
}
$h_Ltrivalibs_utils_events_Pointer.prototype = $p;
var $d_Ltrivalibs_utils_events_Pointer = new $TypeData().i($c_Ltrivalibs_utils_events_Pointer, "trivalibs.utils.events.Pointer", ({
  fS: 1
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
$p.lO = (function(pointers) {
  var i = 0;
  while ((i < (pointers.length | 0))) {
    var p = pointers[i];
    if ((p.iZ === 0)) {
      return p;
    }
    i = ((1 + i) | 0);
  }
  return null;
});
var $d_Ltrivalibs_utils_events_gestures$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_gestures$package$, "trivalibs.utils.events.gestures$package$", ({
  fT: 1
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
$p.nP = (function(canvas, initialFocus, holdDelay, holdRadius, suppressContextMenu, onActivity) {
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
  return new $c_Ltrivalibs_utils_events_CanvasInput(input, $ct_Ltrivalibs_utils_events_DragGesture__Ltrivalibs_utils_events_InputState__(new $c_Ltrivalibs_utils_events_DragGesture(), input), $ct_Ltrivalibs_utils_events_HoldGesture__Ltrivalibs_utils_events_InputState__D__D__(new $c_Ltrivalibs_utils_events_HoldGesture(), input, holdDelay, holdRadius));
});
var $d_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$, "trivalibs.utils.events.interactive_canvas$package$", ({
  fU: 1
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
$p.nU = (function(el, onDown, onUp, keepDefault) {
  var down = ((e$3) => {
    var isTab = (e$3.code === "Tab");
    if (((!keepDefault) && (!isTab))) {
      e$3.preventDefault();
    }
    if ((!(!(!e$3.repeat)))) {
      onDown.f(e$3.code);
    }
  });
  var up = ((e$3$1) => {
    onUp.f(e$3$1.code);
  });
  el.addEventListener("keydown", down);
  el.addEventListener("keyup", up);
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    el.removeEventListener("keydown", down);
    el.removeEventListener("keyup", up);
  }));
});
var $d_Ltrivalibs_utils_events_keyboard$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_keyboard$package$, "trivalibs.utils.events.keyboard$package$", ({
  fV: 1
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
$p.oJ = (function(el, moveTarget, onDown, onMove, onUp, onCancel, suppressContextMenu) {
  var downFn = ((e$3) => {
    onDown.mU((e$3.button | 0), (+e$3.pointerId), (+e$3.clientX), (+e$3.clientY), (!(!e$3.isPrimary)));
  });
  var moveFn = ((e$3$1) => {
    onMove.lD((+e$3$1.pointerId), (+e$3$1.clientX), (+e$3$1.clientY));
  });
  var upFn = ((e$3$2) => {
    onUp.lC((e$3$2.button | 0), (+e$3$2.pointerId), (+e$3$2.clientX), (+e$3$2.clientY));
  });
  var cancelFn = ((e$3$3) => {
    onCancel.f((+e$3$3.pointerId));
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
$p.oK = (function() {
  return window;
});
var $d_Ltrivalibs_utils_events_pointer$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_pointer$package$, "trivalibs.utils.events.pointer$package$", ({
  fW: 1
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
$p.mm = (function(min, max) {
  return (((+Math.random()) * (max - min)) + min);
});
var $d_Ltrivalibs_utils_random_random$package$ = new $TypeData().i($c_Ltrivalibs_utils_random_random$package$, "trivalibs.utils.random.random$package$", ({
  fZ: 1
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
  this.i0 = null;
  $n_jl_Character$ = this;
  this.i0 = new $ac_I(new Int32Array([1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3558, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43504, 43600, 44016, 65296, 66720, 68912, 69734, 69872, 69942, 70096, 70384, 70736, 70864, 71248, 71360, 71472, 71904, 72016, 72784, 73040, 73120, 73552, 92768, 92864, 93008, 120782, 120792, 120802, 120812, 120822, 123200, 123632, 124144, 125264, 130032]));
}
$p = $c_jl_Character$.prototype = new $h_O();
$p.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
}
$h_jl_Character$.prototype = $p;
$p.pg = (function(codePoint) {
  if (((codePoint >>> 0) > 1114111)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return String.fromCodePoint(codePoint);
});
$p.nl = (function(codePoint, radix) {
  if ((codePoint < 256)) {
    var value = (((((codePoint - 48) | 0) >>> 0) <= 9) ? ((codePoint - 48) | 0) : (((((codePoint - 65) | 0) >>> 0) <= 25) ? ((codePoint - 55) | 0) : (((((codePoint - 97) | 0) >>> 0) <= 25) ? ((codePoint - 87) | 0) : (-1))));
  } else if (((((codePoint - 65313) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65303) | 0);
  } else if (((((codePoint - 65345) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65335) | 0);
  } else {
    var p = $m_ju_Arrays$().n7(this.i0, codePoint);
    var zeroCodePointIndex = ((p < 0) ? (((-2) - p) | 0) : p);
    if ((zeroCodePointIndex < 0)) {
      var value = (-1);
    } else {
      var v = ((codePoint - this.i0.b[zeroCodePointIndex]) | 0);
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
$p.h7 = (function(s) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s) + "\""));
});
$p.nS = (function(s, radix, overflowBarrier) {
  if ((s === null)) {
    $m_jl_Integer$().h7(s);
  }
  var len = s.length;
  if ((len === 0)) {
    $m_jl_Integer$().h7(s);
  }
  var character = $m_jl_Character$();
  var firstChar = s.charCodeAt(0);
  var negative = (firstChar === 45);
  var sign = (negative ? (-1) : 0);
  var i = ((negative || (firstChar === 43)) ? 1 : 0);
  if ((i >= len)) {
    $m_jl_Integer$().h7(s);
  }
  var java$lang$IntFloatBits$Int32Box$$value = 0;
  java$lang$IntFloatBits$Int32Box$$value = 0;
  while ((i !== len)) {
    var x = character.nl(s.charCodeAt(i), radix);
    if (((x < 0) || ((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (overflowBarrier >>> 0)))) {
      $m_jl_Integer$().h7(s);
    }
    var x$2 = java$lang$IntFloatBits$Int32Box$$value;
    var x$3 = Math.imul(x$2, radix);
    var v = ((x$3 + x) | 0);
    java$lang$IntFloatBits$Int32Box$$value = v;
    i = ((1 + i) | 0);
  }
  if (((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (((2147483647 - sign) | 0) >>> 0))) {
    $m_jl_Integer$().h7(s);
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.n)));
}
function $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.jw = s;
  if (writableStackTrace) {
    $thiz.nx();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.jw = null;
  }
  hQ() {
    return this.jw;
  }
  nx() {
    var reference = ((this instanceof $c_sjs_js_JavaScriptException) ? this.aV : this);
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
    var message = this.hQ();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  r() {
    return $c_O.prototype.r.call(this);
  }
  o(that) {
    return $c_O.prototype.o.call(this, that);
  }
  get "message"() {
    var m = this.hQ();
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
  this.jy = null;
  $n_s_Console$ = this;
  this.jy = new $c_s_util_DynamicVariable($m_jl_System$Streams$().ju);
}
$p = $c_s_Console$.prototype = new $h_O();
$p.constructor = $c_s_Console$;
/** @constructor */
function $h_s_Console$() {
}
$h_s_Console$.prototype = $p;
$p.oE = (function() {
  return this.jy.i3;
});
var $d_s_Console$ = new $TypeData().i($c_s_Console$, "scala.Console$", ({
  bv: 1,
  cE: 1
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
$p.pt = (function(xs) {
  if ((xs === null)) {
    return null;
  } else if ((xs.b.length === 0)) {
    var this$2 = $m_scm_ArraySeq$();
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    return this$2.jJ;
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
function $c_sr_AbstractFunction5() {
}
$p = $c_sr_AbstractFunction5.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction5;
/** @constructor */
function $h_sr_AbstractFunction5() {
}
$h_sr_AbstractFunction5.prototype = $p;
$p.m = (function() {
  return "<function5>";
});
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.fN = 0;
  this.jT = 0;
  this.my = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.fN = $f_T__hashCode__I("Seq");
  this.jT = $f_T__hashCode__I("Map");
  $f_T__hashCode__I("Set");
  this.my = this.pk($m_sci_Nil$(), this.jT);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.mo = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.nM(xs, this.fN) : ((xs instanceof $c_sci_List) ? this.nV(xs, this.fN) : this.oD(xs, this.fN)));
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().i($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  dm: 1,
  dl: 1
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
  this.k4 = null;
  this.k3 = null;
  this.k5 = null;
  this.k6 = null;
  this.k4 = p$1;
  this.k3 = bloomP$1;
  this.k5 = resultP$1;
  this.k6 = resultP$1;
}
$p = $c_Lsketchlib_utils_bloom_Bloom$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_bloom_Bloom$$anon$1;
/** @constructor */
function $h_Lsketchlib_utils_bloom_Bloom$$anon$1() {
}
$h_Lsketchlib_utils_bloom_Bloom$$anon$1.prototype = $p;
$p.oH = (function() {
  var Painter_this = this.k4;
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.k3);
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.k5);
});
var $d_Lsketchlib_utils_bloom_Bloom$$anon$1 = new $TypeData().i($c_Lsketchlib_utils_bloom_Bloom$$anon$1, "sketchlib.utils.bloom.Bloom$$anon$1", ({
  dy: 1,
  dw: 1
}));
function $p_Lsketchlib_utils_mirror_MirrorReflection$$anon$1__default$proxy1$1__Ltrivalibs_graphics_scene_PerspectiveCamera($thiz) {
  throw new $c_sjs_js_JavaScriptException(Error("MirrorReflection.paint needs a camera (construct with `camera = \u2026`) or an explicit `vp` argument")).aV;
}
function $p_Lsketchlib_utils_mirror_MirrorReflection$$anon$1__default$proxy2$1__Ltrivalibs_graphics_math_cpu_Mat4($thiz) {
  var this$1 = (($thiz.i9 !== null) ? $thiz.i9 : $p_Lsketchlib_utils_mirror_MirrorReflection$$anon$1__default$proxy1$1__Ltrivalibs_graphics_scene_PerspectiveCamera($thiz));
  return $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().gQ(), this$1.hG, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), this$1.mu());
}
/** @constructor */
function $c_Lsketchlib_utils_mirror_MirrorReflection$$anon$1(mirrorPanel$1, resolvePanel$1, uBlurStrength$1, camera$1, reflMat$1, uVp$1, uInvVp$1, p$1, blurPanel$1) {
  this.i9 = null;
  this.ka = null;
  this.ke = null;
  this.kd = null;
  this.k9 = null;
  this.k8 = null;
  this.k7 = null;
  this.kb = null;
  this.kc = null;
  this.i9 = camera$1;
  this.ka = reflMat$1;
  this.ke = uVp$1;
  this.kd = uInvVp$1;
  this.k9 = p$1;
  this.k8 = mirrorPanel$1;
  this.k7 = blurPanel$1;
  this.kb = resolvePanel$1;
  this.kc = resolvePanel$1;
}
$p = $c_Lsketchlib_utils_mirror_MirrorReflection$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_mirror_MirrorReflection$$anon$1;
/** @constructor */
function $h_Lsketchlib_utils_mirror_MirrorReflection$$anon$1() {
}
$h_Lsketchlib_utils_mirror_MirrorReflection$$anon$1.prototype = $p;
$p.oG = (function(vp) {
  var cameraVP = ((vp === (void 0)) ? $p_Lsketchlib_utils_mirror_MirrorReflection$$anon$1__default$proxy2$1__Ltrivalibs_graphics_math_cpu_Mat4(this) : vp);
  var m = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().gQ(), cameraVP, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), this.ka);
  var BufferBinding_this = this.ke;
  BufferBinding_this.V.P(BufferBinding_this.q, m);
  var $x_2 = BufferBinding_this.U.queue;
  var $x_1 = BufferBinding_this.R;
  var s$proxy4 = BufferBinding_this.q;
  $x_2.writeBuffer($x_1, 0.0, s$proxy4.dv.buffer);
  var BufferBinding_this$3 = this.kd;
  var value$proxy5 = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().gQ(), m, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
  BufferBinding_this$3.V.P(BufferBinding_this$3.q, value$proxy5);
  var $x_4 = BufferBinding_this$3.U.queue;
  var $x_3 = BufferBinding_this$3.R;
  var s$proxy5 = BufferBinding_this$3.q;
  $x_4.writeBuffer($x_3, 0.0, s$proxy5.dv.buffer);
  var Painter_this = this.k9;
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.k8);
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.k7);
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.kb);
});
var $d_Lsketchlib_utils_mirror_MirrorReflection$$anon$1 = new $TypeData().i($c_Lsketchlib_utils_mirror_MirrorReflection$$anon$1, "sketchlib.utils.mirror.MirrorReflection$$anon$1", ({
  dB: 1,
  dz: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT(uv) {
  this.aW = null;
  this.aW = uv;
}
$p = $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT() {
}
$h_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT.prototype = $p;
var $d_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT, "trivalibs.graphics.buffers.UniformLayout$given_UniformLayout_T", ({
  dG: 1,
  dF: 1
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
$p.pu = (function(ref, value) {
  var value$proxy1 = Math.fround(value);
  var offset$proxy3 = (ref.off | 0);
  ref.dv.setFloat32(offset$proxy3, value$proxy1, true);
});
$p.P = (function(ref, value) {
  this.pu(ref, (+value));
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Double_$times$colon$", ({
  dH: 1,
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
$p.P = (function(ref, value) {
  $f_Ltrivalibs_graphics_math_Mat4MutableOps__set__O__Ltrivalibs_graphics_math_Mat4Mutable__O__Ltrivalibs_graphics_math_Mat4Base__V($m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$().nH(), ref, $m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$(), value, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Mat4_Mat4Buffer$", ({
  dI: 1,
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
$p.P = (function(ref, value) {
  $f_Ltrivalibs_graphics_math_Vec2MutableOps__set__O__Ltrivalibs_graphics_math_Vec2Mutable__O__Ltrivalibs_graphics_math_Vec2Base__V($m_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$().pn(), ref, $m_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$(), value, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$());
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Vec2_Vec2Buffer$", ({
  dJ: 1,
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
$p.pv = (function(ref, value) {
  var value$proxy2 = value.t;
  var value$proxy3 = Math.fround(value$proxy2);
  var offset$proxy5 = (ref.off | 0);
  ref.dv.setFloat32(offset$proxy5, value$proxy3, true);
  var value$proxy4 = value.w;
  var value$proxy5 = Math.fround(value$proxy4);
  var offset$proxy6 = ((4 + (ref.off | 0)) | 0);
  ref.dv.setFloat32(offset$proxy6, value$proxy5, true);
  var value$proxy6 = value.u;
  var value$proxy7 = Math.fround(value$proxy6);
  var offset$proxy7 = ((8 + (ref.off | 0)) | 0);
  ref.dv.setFloat32(offset$proxy7, value$proxy7, true);
});
$p.P = (function(ref, value) {
  this.pv(ref, value);
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Vec3_Vec4Buffer$", ({
  dK: 1,
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
$p.P = (function(ref, value) {
  $f_Ltrivalibs_graphics_math_Vec4MutableOps__set__O__Ltrivalibs_graphics_math_Vec4Mutable__O__Ltrivalibs_graphics_math_Vec4Base__V($m_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$().po(), ref, $m_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$(), value, $m_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$());
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Vec4_Vec4Buffer$", ({
  dL: 1,
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
$p.bv = (function(t) {
  return new $c_T2(t.hp, t.hq);
});
var $d_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$, "trivalibs.graphics.geometry.FieldWriter$vec2Writer$", ({
  dQ: 1,
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
$p.bv = (function(t) {
  return new $c_T3(t.t, t.w, t.u);
});
var $d_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$, "trivalibs.graphics.geometry.FieldWriter$vec3Writer$", ({
  dR: 1,
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
  this.hk = null;
  this.hk = x$1;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexLayout$named.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexLayout$named;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexLayout$named() {
}
$h_Ltrivalibs_graphics_geometry_VertexLayout$named.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_VertexLayout$named = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayout$named, "trivalibs.graphics.geometry.VertexLayout$named", ({
  dZ: 1,
  dY: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons(x$1, x$2) {
  this.kp = null;
  this.kq = null;
  this.kp = x$1;
  this.kq = x$2;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons() {
}
$h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons.prototype = $p;
$p.pm = (function(t) {
  return $m_sr_Tuples$().j9(this.kp.bv(t.g(0)), this.kq.bv($m_sr_Tuples$().pc(t)));
});
$p.bv = (function(t) {
  return this.pm(t);
});
var $d_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons, "trivalibs.graphics.geometry.VertexLayoutHelper$cons", ({
  e0: 1,
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
$p.bv = (function(t) {
  return $m_T$package$EmptyTuple$();
});
var $d_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$, "trivalibs.graphics.geometry.VertexLayoutHelper$nil$", ({
  e1: 1,
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
  this.ks = 0;
  this.ks = idx$2;
}
$p = $c_Ltrivalibs_graphics_geometry_package$package$$anon$1.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_package$package$$anon$1;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_package$package$$anon$1() {
}
$h_Ltrivalibs_graphics_geometry_package$package$$anon$1.prototype = $p;
$p.be = (function(t) {
  return t.g(this.ks);
});
var $d_Ltrivalibs_graphics_geometry_package$package$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_geometry_package$package$$anon$1, "trivalibs.graphics.geometry.package$package$$anon$1", ({
  e6: 1,
  dW: 1
}));
function $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D($thiz, v, other) {
  return (((v.t * other.t) + (v.w * other.w)) + (v.u * other.u));
}
function $f_Ltrivalibs_graphics_math_Vec3Base__length__O__D($thiz, v) {
  var p$proxy1 = $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D($thiz, v, v);
  return (+Math.sqrt(p$proxy1));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat4$() {
  this.kt = null;
  this.ku = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4$() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4$.prototype = $p;
$p.gQ = (function() {
  if ((!this.ku)) {
    this.kt = $m_Ltrivalibs_graphics_math_cpu_Mat4$();
    this.ku = true;
  }
  return this.kt;
});
$p.lV = (function(t, r, s) {
  var x = r.hm;
  var y = r.hn;
  var z = r.ho;
  var w = r.hl;
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
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4(((1.0 - (yy + zz)) * s.t), ((xy + wz) * s.t), ((xz - wy) * s.t), 0.0, ((xy - wz) * s.w), ((1.0 - (xx + zz)) * s.w), ((yz + wx) * s.w), 0.0, ((xz + wy) * s.u), ((yz - wx) * s.u), ((1.0 - (xx + yy)) * s.u), 0.0, t.t, t.w, t.u, 1.0);
});
var $d_Ltrivalibs_graphics_math_cpu_Mat4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4$, "trivalibs.graphics.math.cpu.Mat4$", ({
  el: 1,
  e9: 1
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
  ep: 1,
  er: 1
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
  this.kv = null;
  this.kw = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec3$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec3$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec3$.prototype = $p;
$p.a2 = (function() {
  if ((!this.kw)) {
    this.kv = $m_Ltrivalibs_graphics_math_cpu_Vec3$();
    this.kw = true;
  }
  return this.kv;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3$, "trivalibs.graphics.math.cpu.Vec3$", ({
  ev: 1,
  ef: 1
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
  eA: 1,
  eb: 1
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
  eD: 1,
  ed: 1
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
  eG: 1,
  ej: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1(f$2) {
  this.kD = null;
  this.kD = f$2;
}
$p = $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1() {
}
$h_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1.prototype = $p;
$p.b3 = (function(s) {
  return this.kD.f(s);
});
var $d_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1, "trivalibs.graphics.math.gpu.LeftScalar$$anon$1", ({
  eK: 1,
  eI: 1
}));
function $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__($thiz, name) {
  $thiz.fe = name;
  $ct_Ltrivalibs_graphics_math_gpu_Expr__T__($thiz, name);
  return $thiz;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_LetExpr() {
  this.d = null;
  this.fe = null;
}
$p = $c_Ltrivalibs_graphics_math_gpu_LetExpr.prototype = new $h_Ltrivalibs_graphics_math_gpu_Expr();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_LetExpr;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_LetExpr() {
}
$h_Ltrivalibs_graphics_math_gpu_LetExpr.prototype = $p;
$p.S = (function(value) {
  return (((("  let " + this.fe) + " = ") + value.d) + ";");
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
$p.hc = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".x"));
});
$p.hd = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".y"));
});
$p.F = (function(v) {
  return this.hc(v);
});
$p.z = (function(v) {
  return this.hd(v);
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4, "trivalibs.graphics.math.gpu.float_expr$package$$anon$4", ({
  eR: 1,
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
$p.hc = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".x"));
});
$p.hd = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".y"));
});
$p.jr = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".z"));
});
$p.np = (function(v, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("dot(" + v.d) + ", ") + other.d) + ")"));
});
$p.F = (function(v) {
  return this.hc(v);
});
$p.z = (function(v) {
  return this.hd(v);
});
$p.ai = (function(v) {
  return this.jr(v);
});
$p.lN = (function(v, other) {
  return this.np(v, other);
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5, "trivalibs.graphics.math.gpu.float_expr$package$$anon$5", ({
  eS: 1,
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
$p.hc = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".x"));
});
$p.hd = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".y"));
});
$p.jr = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".z"));
});
$p.pq = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.d + ".w"));
});
$p.F = (function(v) {
  return this.hc(v);
});
$p.z = (function(v) {
  return this.hd(v);
});
$p.ai = (function(v) {
  return this.jr(v);
});
$p.ah = (function(v) {
  return this.pq(v);
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6, "trivalibs.graphics.math.gpu.float_expr$package$$anon$6", ({
  eT: 1,
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
  eU: 1,
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
$p.ou = (function(m, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + m.d) + " * ") + other.d) + ")"));
});
$p.g8 = (function(m, x$2, v, x$4, x$5) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + m.d) + " * ") + v.d) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Mat4ImmutableOpsG_FloatExpr_Mat4Expr$", ({
  eV: 1,
  ea: 1
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
$p.lA = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("abs(" + a.d) + ")"));
});
$p.lS = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("fract(" + a.d) + ")"));
});
$p.nW = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("log2(" + a.d) + ")"));
});
$p.mh = (function(a, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("min(" + a.d) + ", ") + other.d) + ")"));
});
$p.mg = (function(a, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("max(" + a.d) + ", ") + other.d) + ")"));
});
$p.lJ = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("saturate(" + a.d) + ")"));
});
$p.nA = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(" + a.d) + " * 0.5 + 0.5)"));
});
$p.ow = (function(a, b, t) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("mix(" + a.d) + ", ") + b.d) + ", ") + t.d) + ")"));
});
$p.bu = (function(a, edge0, edge1) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("smoothstep(" + edge0.d) + ", ") + edge1.d) + ", ") + a.d) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$, "trivalibs.graphics.math.gpu.float_expr$package$given_NumExt_FloatExpr$", ({
  eW: 1,
  fX: 1
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
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.d) + " + ") + b.d) + ")"));
});
$p.gK = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.d) + " - ") + b.d) + ")"));
});
$p.br = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.d) + " * ") + b.d) + ")"));
});
$p.lx = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.d) + " / ") + b.d) + ")"));
});
$p.ms = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(-" + a.d) + ")"));
});
$p.j3 = (function(a, b) {
  return this.aN(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(b));
});
$p.ly = (function(a, b) {
  return this.gK(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(b));
});
$p.af = (function(a, b) {
  return this.br(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(b));
});
$p.j2 = (function(a, b) {
  return this.lx(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(b));
});
$p.nw = (function(a, v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.d) + " * ") + v.d) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$, "trivalibs.graphics.math.gpu.float_expr$package$given_NumOps_FloatExpr$", ({
  eX: 1,
  fY: 1
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
$p.nz = (function(v, x$2) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(" + v.d) + " * 2.0 - 1.0)"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec2ImmutableOpsG_FloatExpr_Vec2Expr$", ({
  eY: 1,
  ec: 1
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
$p.lB = (function(v, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.d) + " + ") + other.d) + ")"));
});
$p.bs = (function(v, x$2, scalar) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.d) + " * ") + scalar.d) + ")"));
});
$p.j4 = (function(v, x$2, scalar) {
  return this.bs(v, x$2, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().j().f(scalar));
});
$p.nm = (function(v, x$2, scalar) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.d) + " / ") + scalar.d) + ")"));
});
$p.ng = (function(v, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("cross(" + v.d) + ", ") + other.d) + ")"));
});
$p.oB = (function(v, x$2) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("normalize(" + v.d) + ")"));
});
$p.ox = (function(v, x$2, b, t) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("mix(" + v.d) + ", ") + b.d) + ", ") + t.d) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec3ImmutableOpsG_FloatExpr_Vec3Expr$", ({
  eZ: 1,
  eg: 1
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
$p.mR = (function(v, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.d) + " + ") + other.d) + ")"));
});
$p.oz = (function(v, x$2, scalar) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.d) + " * ") + scalar.d) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec4ImmutableOpsG_FloatExpr_Vec4Expr$", ({
  f0: 1,
  ei: 1
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
  this.fT = null;
  this.A = null;
  this.iC = null;
  this.hu = 0;
  this.gn = 0;
  this.h = null;
  this.L = null;
  this.iD = null;
  this.fT = painter;
  this.A = shade;
  this.iC = null;
  this.hu = (-1);
  this.gn = (-1);
  this.h = [];
  this.L = [];
  this.iD = new $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter);
}
$p = $c_Ltrivalibs_graphics_painter_Layer.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Layer;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Layer() {
}
$h_Ltrivalibs_graphics_painter_Layer.prototype = $p;
$p.p0 = (function(blendState, mipSource, mipTarget) {
  if ((blendState !== (void 0))) {
    this.iC = blendState;
  }
  if ((mipSource !== (void 0))) {
    var v = (mipSource | 0);
    this.hu = v;
  }
  if ((mipTarget !== (void 0))) {
    var v$1 = (mipTarget | 0);
    this.gn = v$1;
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Layer = new $TypeData().i($c_Ltrivalibs_graphics_painter_Layer, "trivalibs.graphics.painter.Layer", ({
  f9: 1,
  aY: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Shape(painter, form, shade) {
  this.aK = null;
  this.Q = null;
  this.iH = null;
  this.iG = null;
  this.H = null;
  this.Y = null;
  this.iI = null;
  this.aK = form;
  this.Q = shade;
  this.iH = "none";
  this.iG = null;
  this.H = [];
  this.Y = [];
  this.iI = new $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter);
}
$p = $c_Ltrivalibs_graphics_painter_Shape.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Shape;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Shape() {
}
$h_Ltrivalibs_graphics_painter_Shape.prototype = $p;
$p.p1 = (function(cullMode, blendState) {
  if ((cullMode !== (void 0))) {
    this.iH = cullMode;
  }
  if ((blendState !== (void 0))) {
    this.iG = blendState;
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Shape = new $TypeData().i($c_Ltrivalibs_graphics_painter_Shape, "trivalibs.graphics.painter.Shape", ({
  fe: 1,
  aY: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform(inner) {
  this.W = null;
  this.W = inner;
}
$p = $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform() {
}
$h_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform.prototype = $p;
$p.y = (function() {
  return this.W.y();
});
var $d_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform = new $TypeData().i($c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform, "trivalibs.graphics.shader.FragmentUniform$given_WGSLType_FragmentUniform", ({
  fl: 1,
  m: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform(inner) {
  this.bp = null;
  this.bp = inner;
}
$p = $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform() {
}
$h_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform.prototype = $p;
$p.y = (function() {
  return this.bp.y();
});
var $d_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform = new $TypeData().i($c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform, "trivalibs.graphics.shader.VertexUniform$given_WGSLType_VertexUniform", ({
  fm: 1,
  m: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor(prefix) {
  this.iP = null;
  this.iP = prefix;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor.prototype = $p;
$p.T = (function(name) {
  return new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(((this.iP === "") ? name : ((this.iP + ".") + name)));
});
var $d_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor, "trivalibs.graphics.shader.dsl.TypedAssignAccessor", ({
  fu: 1,
  A: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(prefix) {
  this.iQ = null;
  this.iQ = prefix;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor.prototype = $p;
$p.l = (function(name) {
  return ((this.iQ === "") ? $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), name) : $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), ((this.iQ + ".") + name)));
});
var $d_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor, "trivalibs.graphics.shader.dsl.TypedExprAccessor", ({
  fv: 1,
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
  fw: 1,
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
  fx: 1,
  A: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_VertexOut(prefix) {
  this.lg = null;
  this.gA = null;
  this.lg = prefix;
  this.gA = new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget((prefix + ".position"));
}
$p = $c_Ltrivalibs_graphics_shader_dsl_VertexOut.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_VertexOut;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_VertexOut() {
}
$h_Ltrivalibs_graphics_shader_dsl_VertexOut.prototype = $p;
$p.T = (function(name) {
  return new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(((this.lg + ".") + name));
});
var $d_Ltrivalibs_graphics_shader_dsl_VertexOut = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_VertexOut, "trivalibs.graphics.shader.dsl.VertexOut", ({
  fz: 1,
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
$p.y = (function() {
  return "f32";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$, "trivalibs.graphics.shader.types$package$given_WGSLType_Float$", ({
  fG: 1,
  m: 1
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
$p.y = (function() {
  return "mat4x4<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$, "trivalibs.graphics.shader.types$package$given_WGSLType_Mat4$", ({
  fH: 1,
  m: 1
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
$p.y = (function() {
  return "sampler";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$, "trivalibs.graphics.shader.types$package$given_WGSLType_Sampler$", ({
  fI: 1,
  m: 1
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
$p.y = (function() {
  return "vec2<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$, "trivalibs.graphics.shader.types$package$given_WGSLType_Vec2$", ({
  fJ: 1,
  m: 1
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
$p.y = (function() {
  return "vec3<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$, "trivalibs.graphics.shader.types$package$given_WGSLType_Vec3$", ({
  fK: 1,
  m: 1
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
$p.y = (function() {
  return "vec4<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$, "trivalibs.graphics.shader.types$package$given_WGSLType_Vec4$", ({
  fL: 1,
  m: 1
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
  this.hZ = $data;
}
$p = $c_jl_Class.prototype = new $h_O();
$p.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
}
$h_jl_Class.prototype = $p;
$p.m = (function() {
  return ((this.hZ.Y ? "interface " : (this.hZ.X ? "" : "class ")) + this.hZ.N);
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
  bE: 1,
  bB: 1,
  bC: 1
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
    return $thiz.ft;
  } else {
    throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 0)"));
  }
}
function $f_s_Product10__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fu;
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
      return $thiz.bw;
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
      return $thiz.fv;
      break;
    }
    case 1: {
      return $thiz.bH;
      break;
    }
    case 2: {
      return $thiz.bI;
      break;
    }
    case 3: {
      return $thiz.bJ;
      break;
    }
    case 4: {
      return $thiz.bK;
      break;
    }
    case 5: {
      return $thiz.bL;
      break;
    }
    case 6: {
      return $thiz.bM;
      break;
    }
    case 7: {
      return $thiz.bN;
      break;
    }
    case 8: {
      return $thiz.bO;
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
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 10)"));
    }
  }
}
function $f_s_Product12__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fw;
      break;
    }
    case 1: {
      return $thiz.bS;
      break;
    }
    case 2: {
      return $thiz.bT;
      break;
    }
    case 3: {
      return $thiz.bU;
      break;
    }
    case 4: {
      return $thiz.bV;
      break;
    }
    case 5: {
      return $thiz.bW;
      break;
    }
    case 6: {
      return $thiz.bX;
      break;
    }
    case 7: {
      return $thiz.bY;
      break;
    }
    case 8: {
      return $thiz.bZ;
      break;
    }
    case 9: {
      return $thiz.bP;
      break;
    }
    case 10: {
      return $thiz.bQ;
      break;
    }
    case 11: {
      return $thiz.bR;
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
      return $thiz.fx;
      break;
    }
    case 1: {
      return $thiz.c4;
      break;
    }
    case 2: {
      return $thiz.c5;
      break;
    }
    case 3: {
      return $thiz.c6;
      break;
    }
    case 4: {
      return $thiz.c7;
      break;
    }
    case 5: {
      return $thiz.c8;
      break;
    }
    case 6: {
      return $thiz.c9;
      break;
    }
    case 7: {
      return $thiz.ca;
      break;
    }
    case 8: {
      return $thiz.cb;
      break;
    }
    case 9: {
      return $thiz.c0;
      break;
    }
    case 10: {
      return $thiz.c1;
      break;
    }
    case 11: {
      return $thiz.c2;
      break;
    }
    case 12: {
      return $thiz.c3;
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
      return $thiz.fy;
      break;
    }
    case 1: {
      return $thiz.ch;
      break;
    }
    case 2: {
      return $thiz.ci;
      break;
    }
    case 3: {
      return $thiz.cj;
      break;
    }
    case 4: {
      return $thiz.ck;
      break;
    }
    case 5: {
      return $thiz.cl;
      break;
    }
    case 6: {
      return $thiz.cm;
      break;
    }
    case 7: {
      return $thiz.cn;
      break;
    }
    case 8: {
      return $thiz.co;
      break;
    }
    case 9: {
      return $thiz.cc;
      break;
    }
    case 10: {
      return $thiz.cd;
      break;
    }
    case 11: {
      return $thiz.ce;
      break;
    }
    case 12: {
      return $thiz.cf;
      break;
    }
    case 13: {
      return $thiz.cg;
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
      return $thiz.fz;
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
      return $thiz.cp;
      break;
    }
    case 10: {
      return $thiz.cq;
      break;
    }
    case 11: {
      return $thiz.cr;
      break;
    }
    case 12: {
      return $thiz.cs;
      break;
    }
    case 13: {
      return $thiz.ct;
      break;
    }
    case 14: {
      return $thiz.cu;
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
      return $thiz.fA;
      break;
    }
    case 1: {
      return $thiz.cK;
      break;
    }
    case 2: {
      return $thiz.cL;
      break;
    }
    case 3: {
      return $thiz.cM;
      break;
    }
    case 4: {
      return $thiz.cN;
      break;
    }
    case 5: {
      return $thiz.cO;
      break;
    }
    case 6: {
      return $thiz.cP;
      break;
    }
    case 7: {
      return $thiz.cQ;
      break;
    }
    case 8: {
      return $thiz.cR;
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
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 15)"));
    }
  }
}
function $f_s_Product17__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.fB;
      break;
    }
    case 1: {
      return $thiz.d0;
      break;
    }
    case 2: {
      return $thiz.d1;
      break;
    }
    case 3: {
      return $thiz.d2;
      break;
    }
    case 4: {
      return $thiz.d3;
      break;
    }
    case 5: {
      return $thiz.d4;
      break;
    }
    case 6: {
      return $thiz.d5;
      break;
    }
    case 7: {
      return $thiz.d6;
      break;
    }
    case 8: {
      return $thiz.d7;
      break;
    }
    case 9: {
      return $thiz.cS;
      break;
    }
    case 10: {
      return $thiz.cT;
      break;
    }
    case 11: {
      return $thiz.cU;
      break;
    }
    case 12: {
      return $thiz.cV;
      break;
    }
    case 13: {
      return $thiz.cW;
      break;
    }
    case 14: {
      return $thiz.cX;
      break;
    }
    case 15: {
      return $thiz.cY;
      break;
    }
    case 16: {
      return $thiz.cZ;
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
      return $thiz.fC;
      break;
    }
    case 1: {
      return $thiz.dh;
      break;
    }
    case 2: {
      return $thiz.di;
      break;
    }
    case 3: {
      return $thiz.dj;
      break;
    }
    case 4: {
      return $thiz.dk;
      break;
    }
    case 5: {
      return $thiz.dl;
      break;
    }
    case 6: {
      return $thiz.dm;
      break;
    }
    case 7: {
      return $thiz.dn;
      break;
    }
    case 8: {
      return $thiz.dp;
      break;
    }
    case 9: {
      return $thiz.d8;
      break;
    }
    case 10: {
      return $thiz.d9;
      break;
    }
    case 11: {
      return $thiz.da;
      break;
    }
    case 12: {
      return $thiz.db;
      break;
    }
    case 13: {
      return $thiz.dc;
      break;
    }
    case 14: {
      return $thiz.dd;
      break;
    }
    case 15: {
      return $thiz.de;
      break;
    }
    case 16: {
      return $thiz.df;
      break;
    }
    case 17: {
      return $thiz.dg;
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
      return $thiz.fD;
      break;
    }
    case 1: {
      return $thiz.dA;
      break;
    }
    case 2: {
      return $thiz.dB;
      break;
    }
    case 3: {
      return $thiz.dC;
      break;
    }
    case 4: {
      return $thiz.dD;
      break;
    }
    case 5: {
      return $thiz.dE;
      break;
    }
    case 6: {
      return $thiz.dF;
      break;
    }
    case 7: {
      return $thiz.dG;
      break;
    }
    case 8: {
      return $thiz.dH;
      break;
    }
    case 9: {
      return $thiz.dq;
      break;
    }
    case 10: {
      return $thiz.dr;
      break;
    }
    case 11: {
      return $thiz.ds;
      break;
    }
    case 12: {
      return $thiz.dt;
      break;
    }
    case 13: {
      return $thiz.du;
      break;
    }
    case 14: {
      return $thiz.dv;
      break;
    }
    case 15: {
      return $thiz.dw;
      break;
    }
    case 16: {
      return $thiz.dx;
      break;
    }
    case 17: {
      return $thiz.dy;
      break;
    }
    case 18: {
      return $thiz.dz;
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
      return $thiz.aa;
      break;
    }
    case 1: {
      return $thiz.am;
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
      return $thiz.fE;
      break;
    }
    case 1: {
      return $thiz.dS;
      break;
    }
    case 2: {
      return $thiz.dU;
      break;
    }
    case 3: {
      return $thiz.dV;
      break;
    }
    case 4: {
      return $thiz.dW;
      break;
    }
    case 5: {
      return $thiz.dX;
      break;
    }
    case 6: {
      return $thiz.dY;
      break;
    }
    case 7: {
      return $thiz.dZ;
      break;
    }
    case 8: {
      return $thiz.e0;
      break;
    }
    case 9: {
      return $thiz.dI;
      break;
    }
    case 10: {
      return $thiz.dJ;
      break;
    }
    case 11: {
      return $thiz.dK;
      break;
    }
    case 12: {
      return $thiz.dL;
      break;
    }
    case 13: {
      return $thiz.dM;
      break;
    }
    case 14: {
      return $thiz.dN;
      break;
    }
    case 15: {
      return $thiz.dO;
      break;
    }
    case 16: {
      return $thiz.dP;
      break;
    }
    case 17: {
      return $thiz.dQ;
      break;
    }
    case 18: {
      return $thiz.dR;
      break;
    }
    case 19: {
      return $thiz.dT;
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
      return $thiz.fF;
      break;
    }
    case 1: {
      return $thiz.eb;
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
    case 9: {
      return $thiz.e1;
      break;
    }
    case 10: {
      return $thiz.e2;
      break;
    }
    case 11: {
      return $thiz.e3;
      break;
    }
    case 12: {
      return $thiz.e4;
      break;
    }
    case 13: {
      return $thiz.e5;
      break;
    }
    case 14: {
      return $thiz.e6;
      break;
    }
    case 15: {
      return $thiz.e7;
      break;
    }
    case 16: {
      return $thiz.e8;
      break;
    }
    case 17: {
      return $thiz.e9;
      break;
    }
    case 18: {
      return $thiz.ea;
      break;
    }
    case 19: {
      return $thiz.ec;
      break;
    }
    case 20: {
      return $thiz.ed;
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
      return $thiz.fG;
      break;
    }
    case 1: {
      return $thiz.ev;
      break;
    }
    case 2: {
      return $thiz.ez;
      break;
    }
    case 3: {
      return $thiz.eA;
      break;
    }
    case 4: {
      return $thiz.eB;
      break;
    }
    case 5: {
      return $thiz.eC;
      break;
    }
    case 6: {
      return $thiz.eD;
      break;
    }
    case 7: {
      return $thiz.eE;
      break;
    }
    case 8: {
      return $thiz.eF;
      break;
    }
    case 9: {
      return $thiz.el;
      break;
    }
    case 10: {
      return $thiz.em;
      break;
    }
    case 11: {
      return $thiz.en;
      break;
    }
    case 12: {
      return $thiz.eo;
      break;
    }
    case 13: {
      return $thiz.ep;
      break;
    }
    case 14: {
      return $thiz.eq;
      break;
    }
    case 15: {
      return $thiz.er;
      break;
    }
    case 16: {
      return $thiz.es;
      break;
    }
    case 17: {
      return $thiz.et;
      break;
    }
    case 18: {
      return $thiz.eu;
      break;
    }
    case 19: {
      return $thiz.ew;
      break;
    }
    case 20: {
      return $thiz.ex;
      break;
    }
    case 21: {
      return $thiz.ey;
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
      return $thiz.b4;
      break;
    }
    case 1: {
      return $thiz.aS;
      break;
    }
    case 2: {
      return $thiz.aT;
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
      return $thiz.eG;
      break;
    }
    case 1: {
      return $thiz.bf;
      break;
    }
    case 2: {
      return $thiz.bg;
      break;
    }
    case 3: {
      return $thiz.bh;
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
      return $thiz.fH;
      break;
    }
    case 1: {
      return $thiz.eH;
      break;
    }
    case 2: {
      return $thiz.eI;
      break;
    }
    case 3: {
      return $thiz.eJ;
      break;
    }
    case 4: {
      return $thiz.eK;
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
      return $thiz.fI;
      break;
    }
    case 1: {
      return $thiz.eL;
      break;
    }
    case 2: {
      return $thiz.eM;
      break;
    }
    case 3: {
      return $thiz.eN;
      break;
    }
    case 4: {
      return $thiz.eO;
      break;
    }
    case 5: {
      return $thiz.eP;
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
      return $thiz.fJ;
      break;
    }
    case 1: {
      return $thiz.eQ;
      break;
    }
    case 2: {
      return $thiz.eR;
      break;
    }
    case 3: {
      return $thiz.eS;
      break;
    }
    case 4: {
      return $thiz.eT;
      break;
    }
    case 5: {
      return $thiz.eU;
      break;
    }
    case 6: {
      return $thiz.eV;
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
      return $thiz.fK;
      break;
    }
    case 1: {
      return $thiz.eW;
      break;
    }
    case 2: {
      return $thiz.eX;
      break;
    }
    case 3: {
      return $thiz.eY;
      break;
    }
    case 4: {
      return $thiz.eZ;
      break;
    }
    case 5: {
      return $thiz.f0;
      break;
    }
    case 6: {
      return $thiz.f1;
      break;
    }
    case 7: {
      return $thiz.f2;
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
      return $thiz.fL;
      break;
    }
    case 1: {
      return $thiz.f3;
      break;
    }
    case 2: {
      return $thiz.f4;
      break;
    }
    case 3: {
      return $thiz.f5;
      break;
    }
    case 4: {
      return $thiz.f6;
      break;
    }
    case 5: {
      return $thiz.f7;
      break;
    }
    case 6: {
      return $thiz.f8;
      break;
    }
    case 7: {
      return $thiz.f9;
      break;
    }
    case 8: {
      return $thiz.fa;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 8)"));
    }
  }
}
function $f_sc_Iterator__concat__F0__sc_Iterator($thiz, xs) {
  return new $c_sc_Iterator$ConcatIterator($thiz).ne(xs);
}
function $f_sc_Iterator__sliceIterator__I__I__sc_Iterator($thiz, from, until) {
  var lo = ((from > 0) ? from : 0);
  var rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
  return ((rest === 0) ? $m_sc_Iterator$().b6 : new $c_sc_Iterator$SliceIterator($thiz, lo, rest));
}
function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
  var those = that.a9();
  while ($thiz.J()) {
    if ((!those.J())) {
      return false;
    }
    if ((!$m_sr_BoxesRunTime$().c($thiz.E(), those.E()))) {
      return false;
    }
  }
  return (!those.J());
}
/** @constructor */
function $c_sc_Iterator$() {
  this.b6 = null;
  $n_sc_Iterator$ = this;
  this.b6 = new $c_sc_Iterator$$anon$19();
}
$p = $c_sc_Iterator$.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
}
$h_sc_Iterator$.prototype = $p;
var $d_sc_Iterator$ = new $TypeData().i($c_sc_Iterator$, "scala.collection.Iterator$", ({
  ca: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cF)));
}
/** @constructor */
function $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(f) {
  this.jK = null;
  this.jK = f;
}
$p = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = new $h_sr_AbstractFunction0();
$p.constructor = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c;
/** @constructor */
function $h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c() {
}
$h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = $p;
$p.gL = (function() {
  return (0, this.jK)();
});
var $d_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c = new $TypeData().i($c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c, "scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c", ({
  cO: 1,
  cN: 1,
  bw: 1
}));
/** @constructor */
function $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(f) {
  this.jL = null;
  this.jL = f;
}
$p = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919;
/** @constructor */
function $h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919() {
}
$h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = $p;
$p.f = (function(x0) {
  return (0, this.jL)(x0);
});
var $d_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919 = new $TypeData().i($c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919, "scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919", ({
  cQ: 1,
  cP: 1,
  h: 1
}));
/** @constructor */
function $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(f) {
  this.jM = null;
  this.jM = f;
}
$p = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = new $h_sr_AbstractFunction2();
$p.constructor = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8;
/** @constructor */
function $h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8() {
}
$h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = $p;
$p.b0 = (function(x0, x1) {
  return (0, this.jM)(x0, x1);
});
var $d_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8 = new $TypeData().i($c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8, "scala.runtime.AbstractFunction2.$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8", ({
  cS: 1,
  cR: 1,
  bx: 1
}));
/** @constructor */
function $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(f) {
  this.jN = null;
  this.jN = f;
}
$p = $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825.prototype = new $h_sr_AbstractFunction3();
$p.constructor = $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825;
/** @constructor */
function $h_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825() {
}
$h_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825.prototype = $p;
$p.lD = (function(x0, x1, x2) {
  return (0, this.jN)(x0, x1, x2);
});
var $d_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825 = new $TypeData().i($c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825, "scala.runtime.AbstractFunction3.$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825", ({
  cU: 1,
  cT: 1,
  by: 1
}));
/** @constructor */
function $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(f) {
  this.jO = null;
  this.jO = f;
}
$p = $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a.prototype = new $h_sr_AbstractFunction4();
$p.constructor = $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a;
/** @constructor */
function $h_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a() {
}
$h_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a.prototype = $p;
$p.lC = (function(x0, x1, x2, x3) {
  return (0, this.jO)(x0, x1, x2, x3);
});
var $d_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a = new $TypeData().i($c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a, "scala.runtime.AbstractFunction4.$$Lambda$451042f443265710aa66de6985cba67480d9b00a", ({
  cW: 1,
  cV: 1,
  bz: 1
}));
/** @constructor */
function $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078(f) {
  this.jP = null;
  this.jP = f;
}
$p = $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078.prototype = new $h_sr_AbstractFunction5();
$p.constructor = $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078;
/** @constructor */
function $h_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078() {
}
$h_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078.prototype = $p;
$p.mU = (function(x0, x1, x2, x3, x4) {
  return (0, this.jP)(x0, x1, x2, x3, x4);
});
var $d_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078 = new $TypeData().i($c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078, "scala.runtime.AbstractFunction5.$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078", ({
  cY: 1,
  cX: 1,
  bA: 1
}));
var $d_sr_Nothing$ = new $TypeData().i(0, "scala.runtime.Nothing$", ({
  d0: 1,
  f: 1,
  a: 1
}));
/** @constructor */
function $c_sr_TupleXXL(es) {
  this.a4 = null;
  this.a4 = es;
  if ((es.b.length <= 22)) {
    $m_sr_Scala3RunTime$().n2();
  }
}
$p = $c_sr_TupleXXL.prototype = new $h_O();
$p.constructor = $c_sr_TupleXXL;
/** @constructor */
function $h_sr_TupleXXL() {
}
$h_sr_TupleXXL.prototype = $p;
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.g = (function(n) {
  return this.a4.b[n];
});
$p.v = (function() {
  return this.a4.b.length;
});
$p.B = (function() {
  return "Tuple";
});
$p.m = (function() {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($m_s_Predef$().pt(this.a4), "(", ",", ")");
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().nd(this, (-889275714), null);
});
$p.o = (function(that) {
  if ((that instanceof $c_sr_TupleXXL)) {
    if ((this.a4 === that.a4)) {
      return true;
    } else {
      if ((this.a4.b.length !== that.a4.b.length)) {
        return false;
      }
      var i = 0;
      while ((i < this.a4.b.length)) {
        var $x_2 = $m_sr_BoxesRunTime$();
        var arr$3 = this.a4;
        var n = i;
        var $x_1 = arr$3.b[n];
        var arr$4 = that.a4;
        var n$1 = i;
        if ((!$x_2.c($x_1, arr$4.b[n$1]))) {
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
$p.gO = (function(f) {
  return ((arg1$2) => f.f(arg1$2));
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
  this.d = null;
  this.fe = null;
  this.iy = false;
  $ct_Ltrivalibs_graphics_math_gpu_LetExpr__T__(this, name);
  this.iy = false;
}
$p = $c_Ltrivalibs_graphics_math_gpu_VarExpr.prototype = new $h_Ltrivalibs_graphics_math_gpu_LetExpr();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_VarExpr;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_VarExpr() {
}
$h_Ltrivalibs_graphics_math_gpu_VarExpr.prototype = $p;
$p.S = (function(value) {
  if ((!this.iy)) {
    this.iy = true;
    return (((("  var " + this.fe) + " = ") + value.d) + ";");
  } else {
    return (((("  " + this.fe) + " = ") + value.d) + ";");
  }
});
$p.mM = (function(value) {
  return (((("  " + this.fe) + " += ") + value.d) + ";");
});
$p.mN = (function(value) {
  return (((("  " + this.fe) + " *= ") + value.d) + ";");
});
var $d_Ltrivalibs_graphics_math_gpu_VarExpr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_VarExpr, "trivalibs.graphics.math.gpu.VarExpr", ({
  eL: 1,
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
$p.f = (function(x) {
  return x;
});
var $d_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2, "trivalibs.graphics.math.gpu.expr$package$$anon$2", ({
  eN: 1,
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
$p.f = (function(x) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aP((+x)));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1, "trivalibs.graphics.math.gpu.float_expr$package$$anon$1", ({
  eP: 1,
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
$p.f = (function(x) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("f32(" + (x | 0)) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3, "trivalibs.graphics.math.gpu.float_expr$package$$anon$3", ({
  eQ: 1,
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
        deps = ((rest[0] === (void 0)) ? $m_Ltrivalibs_graphics_shader_dsl_WgslFnData$().mL() : rest[0]);
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
  fA: 1,
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
  this.aj = null;
  this.aj = "";
}
$p = $c_jl_StringBuilder.prototype = new $h_O();
$p.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
}
$h_jl_StringBuilder.prototype = $p;
$p.m = (function() {
  return this.aj;
});
$p.K = (function() {
  return this.aj.length;
});
$p.lI = (function(index) {
  return this.aj.charCodeAt(index);
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
$p.lL = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.j5 = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.a9 = (function() {
  return this;
});
$p.hP = (function(n) {
  return this.hX(n, (-1));
});
$p.hX = (function(from, until) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until);
});
$p.m = (function() {
  return "<iterator>";
});
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.fo(0) === 0);
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
  return $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz.a9(), that);
}
function $isArrayOf_s_util_CommandLineParser$ParseError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.dj)));
}
/** @constructor */
function $c_Lsketches_rooms_canvases_PaintingSpec(width, height, depth, image, stretch) {
  this.bm = 0.0;
  this.bl = 0.0;
  this.b9 = 0.0;
  this.fO = null;
  this.fb = 0.0;
  this.bm = width;
  this.bl = height;
  this.b9 = depth;
  this.fO = image;
  this.fb = stretch;
}
$p = $c_Lsketches_rooms_canvases_PaintingSpec.prototype = new $h_O();
$p.constructor = $c_Lsketches_rooms_canvases_PaintingSpec;
/** @constructor */
function $h_Lsketches_rooms_canvases_PaintingSpec() {
}
$h_Lsketches_rooms_canvases_PaintingSpec.prototype = $p;
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.r = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().s(acc, 1068570815);
  acc = $m_sr_Statics$().s(acc, $m_sr_Statics$().gM(this.bm));
  acc = $m_sr_Statics$().s(acc, $m_sr_Statics$().gM(this.bl));
  acc = $m_sr_Statics$().s(acc, $m_sr_Statics$().gM(this.b9));
  acc = $m_sr_Statics$().s(acc, $m_sr_Statics$().a1(this.fO));
  acc = $m_sr_Statics$().s(acc, $m_sr_Statics$().gM(this.fb));
  return $m_sr_Statics$().ar(acc, 5);
});
$p.o = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lsketches_rooms_canvases_PaintingSpec)) {
    if (((((this.bm === x$0.bm) && (this.bl === x$0.bl)) && (this.b9 === x$0.b9)) && (this.fb === x$0.fb))) {
      var x = this.fO;
      var x$2 = x$0.fO;
      return ((x === null) ? (x$2 === null) : (x === x$2));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.m = (function() {
  return $m_sr_ScalaRunTime$().lz(this);
});
$p.v = (function() {
  return 5;
});
$p.B = (function() {
  return "PaintingSpec";
});
$p.g = (function(n) {
  switch (n) {
    case 0: {
      return this.bm;
      break;
    }
    case 1: {
      return this.bl;
      break;
    }
    case 2: {
      return this.b9;
      break;
    }
    case 3: {
      return this.fO;
      break;
    }
    case 4: {
      return this.fb;
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
$p.gR = (function(m) {
  return m.ic;
});
$p.gS = (function(m) {
  return m.id;
});
$p.gT = (function(m) {
  return m.ie;
});
$p.gU = (function(m) {
  return m.ig;
});
$p.gV = (function(m) {
  return m.ih;
});
$p.gW = (function(m) {
  return m.ii;
});
$p.gX = (function(m) {
  return m.ij;
});
$p.gY = (function(m) {
  return m.ik;
});
$p.gZ = (function(m) {
  return m.il;
});
$p.h0 = (function(m) {
  return m.im;
});
$p.h1 = (function(m) {
  return m.io;
});
$p.h2 = (function(m) {
  return m.ip;
});
$p.h3 = (function(m) {
  return m.iq;
});
$p.h4 = (function(m) {
  return m.ir;
});
$p.h5 = (function(m) {
  return m.is;
});
$p.h6 = (function(m) {
  return m.it;
});
$p.m0 = (function(m, v) {
  m.ic = v;
});
$p.m1 = (function(m, v) {
  m.id = v;
});
$p.m2 = (function(m, v) {
  m.ie = v;
});
$p.m3 = (function(m, v) {
  m.ig = v;
});
$p.m4 = (function(m, v) {
  m.ih = v;
});
$p.m5 = (function(m, v) {
  m.ii = v;
});
$p.m6 = (function(m, v) {
  m.ij = v;
});
$p.m7 = (function(m, v) {
  m.ik = v;
});
$p.m8 = (function(m, v) {
  m.il = v;
});
$p.m9 = (function(m, v) {
  m.im = v;
});
$p.ma = (function(m, v) {
  m.io = v;
});
$p.mb = (function(m, v) {
  m.ip = v;
});
$p.mc = (function(m, v) {
  m.iq = v;
});
$p.md = (function(m, v) {
  m.ir = v;
});
$p.me = (function(m, v) {
  m.is = v;
});
$p.mf = (function(m, v) {
  m.it = v;
});
var $d_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$, "trivalibs.graphics.math.cpu.Mat4$given_Mat4Mutable_Mat4$", ({
  em: 1,
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
$p.F = (function(v) {
  return v.hm;
});
$p.z = (function(v) {
  return v.hn;
});
$p.ai = (function(v) {
  return v.ho;
});
$p.ah = (function(v) {
  return v.hl;
});
$p.g9 = (function(v, value) {
  v.hm = value;
});
$p.ga = (function(v, value) {
  v.hn = value;
});
$p.js = (function(v, value) {
  v.ho = value;
});
$p.jm = (function(v, value) {
  v.hl = value;
});
var $d_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$, "trivalibs.graphics.math.cpu.Quat$given_Vec4Mutable_Quat$", ({
  eq: 1,
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
$p.F = (function(v) {
  return v.hp;
});
$p.z = (function(v) {
  return v.hq;
});
$p.g9 = (function(v, value) {
  v.hp = value;
});
$p.ga = (function(v, value) {
  v.hq = value;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$, "trivalibs.graphics.math.cpu.Vec2$given_Vec2Mutable_Vec2$", ({
  et: 1,
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
$p.F = (function(v) {
  return v.t;
});
$p.z = (function(v) {
  return v.w;
});
$p.ai = (function(v) {
  return v.u;
});
$p.lN = (function(v, other) {
  return $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D(this, v, other);
});
var $d_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$, "trivalibs.graphics.math.cpu.Vec3$given_Vec3Mutable_Vec3$", ({
  ew: 1,
  aW: 1,
  ee: 1,
  eh: 1
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
$p.F = (function(v) {
  return v.iv;
});
$p.z = (function(v) {
  return v.iw;
});
$p.ai = (function(v) {
  return v.ix;
});
$p.ah = (function(v) {
  return v.iu;
});
$p.g9 = (function(v, value) {
  v.iv = value;
});
$p.ga = (function(v, value) {
  v.iw = value;
});
$p.js = (function(v, value) {
  v.ix = value;
});
$p.jm = (function(v, value) {
  v.iu = value;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$, "trivalibs.graphics.math.cpu.Vec4$given_Vec4Mutable_Vec4$", ({
  ey: 1,
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
$p.nY = (function(m) {
  var offset$proxy1 = (m.off | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy1, true));
});
$p.o0 = (function(m) {
  var offset$proxy2 = ((4 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy2, true));
});
$p.o2 = (function(m) {
  var offset$proxy3 = ((8 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy3, true));
});
$p.o4 = (function(m) {
  var offset$proxy4 = ((12 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy4, true));
});
$p.o6 = (function(m) {
  var offset$proxy5 = ((16 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy5, true));
});
$p.o8 = (function(m) {
  var offset$proxy6 = ((20 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy6, true));
});
$p.oa = (function(m) {
  var offset$proxy7 = ((24 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy7, true));
});
$p.oc = (function(m) {
  var offset$proxy8 = ((28 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy8, true));
});
$p.oe = (function(m) {
  var offset$proxy9 = ((32 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy9, true));
});
$p.og = (function(m) {
  var offset$proxy10 = ((36 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy10, true));
});
$p.oi = (function(m) {
  var offset$proxy11 = ((40 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy11, true));
});
$p.ok = (function(m) {
  var offset$proxy12 = ((44 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy12, true));
});
$p.om = (function(m) {
  var offset$proxy13 = ((48 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy13, true));
});
$p.oo = (function(m) {
  var offset$proxy14 = ((52 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy14, true));
});
$p.oq = (function(m) {
  var offset$proxy15 = ((56 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy15, true));
});
$p.os = (function(m) {
  var offset$proxy16 = ((60 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy16, true));
});
$p.nZ = (function(m, v) {
  var value$proxy1 = Math.fround(v);
  var offset$proxy17 = (m.off | 0);
  m.dv.setFloat32(offset$proxy17, value$proxy1, true);
});
$p.o1 = (function(m, v) {
  var value$proxy2 = Math.fround(v);
  var offset$proxy18 = ((4 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy18, value$proxy2, true);
});
$p.o3 = (function(m, v) {
  var value$proxy3 = Math.fround(v);
  var offset$proxy19 = ((8 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy19, value$proxy3, true);
});
$p.o5 = (function(m, v) {
  var value$proxy4 = Math.fround(v);
  var offset$proxy20 = ((12 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy20, value$proxy4, true);
});
$p.o7 = (function(m, v) {
  var value$proxy5 = Math.fround(v);
  var offset$proxy21 = ((16 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy21, value$proxy5, true);
});
$p.o9 = (function(m, v) {
  var value$proxy6 = Math.fround(v);
  var offset$proxy22 = ((20 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy22, value$proxy6, true);
});
$p.ob = (function(m, v) {
  var value$proxy7 = Math.fround(v);
  var offset$proxy23 = ((24 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy23, value$proxy7, true);
});
$p.od = (function(m, v) {
  var value$proxy8 = Math.fround(v);
  var offset$proxy24 = ((28 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy24, value$proxy8, true);
});
$p.of = (function(m, v) {
  var value$proxy9 = Math.fround(v);
  var offset$proxy25 = ((32 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy25, value$proxy9, true);
});
$p.oh = (function(m, v) {
  var value$proxy10 = Math.fround(v);
  var offset$proxy26 = ((36 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy26, value$proxy10, true);
});
$p.oj = (function(m, v) {
  var value$proxy11 = Math.fround(v);
  var offset$proxy27 = ((40 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy27, value$proxy11, true);
});
$p.ol = (function(m, v) {
  var value$proxy12 = Math.fround(v);
  var offset$proxy28 = ((44 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy28, value$proxy12, true);
});
$p.on = (function(m, v) {
  var value$proxy13 = Math.fround(v);
  var offset$proxy29 = ((48 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy29, value$proxy13, true);
});
$p.op = (function(m, v) {
  var value$proxy14 = Math.fround(v);
  var offset$proxy30 = ((52 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy30, value$proxy14, true);
});
$p.or = (function(m, v) {
  var value$proxy15 = Math.fround(v);
  var offset$proxy31 = ((56 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy31, value$proxy15, true);
});
$p.ot = (function(m, v) {
  var value$proxy16 = Math.fround(v);
  var offset$proxy32 = ((60 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy32, value$proxy16, true);
});
$p.gR = (function(m) {
  return this.nY(m);
});
$p.gS = (function(m) {
  return this.o0(m);
});
$p.gT = (function(m) {
  return this.o2(m);
});
$p.gU = (function(m) {
  return this.o4(m);
});
$p.gV = (function(m) {
  return this.o6(m);
});
$p.gW = (function(m) {
  return this.o8(m);
});
$p.gX = (function(m) {
  return this.oa(m);
});
$p.gY = (function(m) {
  return this.oc(m);
});
$p.gZ = (function(m) {
  return this.oe(m);
});
$p.h0 = (function(m) {
  return this.og(m);
});
$p.h1 = (function(m) {
  return this.oi(m);
});
$p.h2 = (function(m) {
  return this.ok(m);
});
$p.h3 = (function(m) {
  return this.om(m);
});
$p.h4 = (function(m) {
  return this.oo(m);
});
$p.h5 = (function(m) {
  return this.oq(m);
});
$p.h6 = (function(m) {
  return this.os(m);
});
$p.m0 = (function(m, v) {
  this.nZ(m, v);
});
$p.m1 = (function(m, v) {
  this.o1(m, v);
});
$p.m2 = (function(m, v) {
  this.o3(m, v);
});
$p.m3 = (function(m, v) {
  this.o5(m, v);
});
$p.m4 = (function(m, v) {
  this.o7(m, v);
});
$p.m5 = (function(m, v) {
  this.o9(m, v);
});
$p.m6 = (function(m, v) {
  this.ob(m, v);
});
$p.m7 = (function(m, v) {
  this.od(m, v);
});
$p.m8 = (function(m, v) {
  this.of(m, v);
});
$p.m9 = (function(m, v) {
  this.oh(m, v);
});
$p.ma = (function(m, v) {
  this.oj(m, v);
});
$p.mb = (function(m, v) {
  this.ol(m, v);
});
$p.mc = (function(m, v) {
  this.on(m, v);
});
$p.md = (function(m, v) {
  this.op(m, v);
});
$p.me = (function(m, v) {
  this.or(m, v);
});
$p.mf = (function(m, v) {
  this.ot(m, v);
});
var $d_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$, "trivalibs.graphics.math.cpu.mat4$package$Mat4Buffer$given_Mat4Mutable_StructRef$", ({
  eB: 1,
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
$p.jn = (function(v) {
  var offset$proxy1 = (v.off | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy1, true));
});
$p.jp = (function(v) {
  var offset$proxy2 = ((4 + (v.off | 0)) | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy2, true));
});
$p.jo = (function(v, value) {
  var value$proxy1 = Math.fround(value);
  var offset$proxy3 = (v.off | 0);
  v.dv.setFloat32(offset$proxy3, value$proxy1, true);
});
$p.jq = (function(v, value) {
  var value$proxy2 = Math.fround(value);
  var offset$proxy4 = ((4 + (v.off | 0)) | 0);
  v.dv.setFloat32(offset$proxy4, value$proxy2, true);
});
$p.F = (function(v) {
  return this.jn(v);
});
$p.z = (function(v) {
  return this.jp(v);
});
$p.g9 = (function(v, value) {
  this.jo(v, value);
});
$p.ga = (function(v, value) {
  this.jq(v, value);
});
var $d_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$, "trivalibs.graphics.math.cpu.vec2$package$Vec2Buffer$vec2MutableBuffer$", ({
  eE: 1,
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
$p.jn = (function(v) {
  var offset$proxy1 = (v.off | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy1, true));
});
$p.jp = (function(v) {
  var offset$proxy2 = ((4 + (v.off | 0)) | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy2, true));
});
$p.px = (function(v) {
  var offset$proxy3 = ((8 + (v.off | 0)) | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy3, true));
});
$p.pp = (function(v) {
  var offset$proxy4 = ((12 + (v.off | 0)) | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy4, true));
});
$p.jo = (function(v, value) {
  var value$proxy1 = Math.fround(value);
  var offset$proxy5 = (v.off | 0);
  v.dv.setFloat32(offset$proxy5, value$proxy1, true);
});
$p.jq = (function(v, value) {
  var value$proxy2 = Math.fround(value);
  var offset$proxy6 = ((4 + (v.off | 0)) | 0);
  v.dv.setFloat32(offset$proxy6, value$proxy2, true);
});
$p.py = (function(v, value) {
  var value$proxy3 = Math.fround(value);
  var offset$proxy7 = ((8 + (v.off | 0)) | 0);
  v.dv.setFloat32(offset$proxy7, value$proxy3, true);
});
$p.pr = (function(v, value) {
  var value$proxy4 = Math.fround(value);
  var offset$proxy8 = ((12 + (v.off | 0)) | 0);
  v.dv.setFloat32(offset$proxy8, value$proxy4, true);
});
$p.F = (function(v) {
  return this.jn(v);
});
$p.z = (function(v) {
  return this.jp(v);
});
$p.ai = (function(v) {
  return this.px(v);
});
$p.ah = (function(v) {
  return this.pp(v);
});
$p.g9 = (function(v, value) {
  this.jo(v, value);
});
$p.ga = (function(v, value) {
  this.jq(v, value);
});
$p.js = (function(v, value) {
  this.py(v, value);
});
$p.jm = (function(v, value) {
  this.pr(v, value);
});
var $d_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$, "trivalibs.graphics.math.cpu.vec4$package$Vec4Buffer$vec4MutableBuffer$", ({
  eH: 1,
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
  var all = [vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, uniformDecls, $thiz.gz, f$proxy1, g$proxy1];
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
  this.a6 = null;
  this.a5 = null;
  this.gz = null;
  this.a6 = vertexBody;
  this.a5 = fragmentBody;
  this.gz = helperFns;
}
$p = $c_Ltrivalibs_graphics_shader_ShaderDef.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_ShaderDef;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_ShaderDef() {
}
$h_Ltrivalibs_graphics_shader_ShaderDef.prototype = $p;
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().N(this, (-1488826029), true);
});
$p.o = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_Ltrivalibs_graphics_shader_ShaderDef) && (((this.a6 === x$0.a6) && (this.a5 === x$0.a5)) && (this.gz === x$0.gz))));
});
$p.m = (function() {
  return $m_sr_ScalaRunTime$().lz(this);
});
$p.v = (function() {
  return 3;
});
$p.B = (function() {
  return "ShaderDef";
});
$p.g = (function(n) {
  switch (n) {
    case 0: {
      return this.a6;
      break;
    }
    case 1: {
      return this.a5;
      break;
    }
    case 2: {
      return this.gz;
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
  n: 1,
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
  n: 1,
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
  if ((!$thiz.jA)) {
    if (($thiz.he === null)) {
      var $x_1 = "null";
    } else {
      var this$1 = $thiz.he;
      var cls = $objectGetClass(this$1);
      var ofClass = ((cls === null) ? "of a JS class" : ("of class " + cls.hZ.N));
      try {
        var $x_1 = ((($thiz.he + " (") + ofClass) + ")");
      } catch (e) {
        var $x_1 = ("an instance " + ofClass);
      }
    }
    $thiz.jz = $x_1;
    $thiz.jA = true;
  }
  return $thiz.jz;
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.he = null;
    this.jz = null;
    this.jA = false;
    this.he = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  hQ() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().i($c_s_MatchError, "scala.MatchError", ({
  bD: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.gc = 0;
  this.jC = 0;
  this.jB = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.jB = outer;
  this.gc = 0;
  this.jC = outer.v();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $p;
$p.J = (function() {
  return (this.gc < this.jC);
});
$p.E = (function() {
  var result = this.jB.g(this.gc);
  this.gc = ((1 + this.gc) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().i($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  bF: 1,
  o: 1,
  d: 1,
  e: 1,
  t: 1
}));
/** @constructor */
function $c_T1(_1) {
  this.ft = null;
  this.ft = _1;
}
$p = $c_T1.prototype = new $h_O();
$p.constructor = $c_T1;
/** @constructor */
function $h_T1() {
}
$h_T1.prototype = $p;
$p.v = (function() {
  return 1;
});
$p.g = (function(n) {
  return $f_s_Product1__productElement__I__O(this, n);
});
$p.m = (function() {
  return (("(" + this.ft) + ")");
});
$p.B = (function() {
  return "Tuple1";
});
$p.C = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().N(this, 1228477340, true);
});
$p.o = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T1) && $m_sr_BoxesRunTime$().c(this.ft, x$1.ft)));
});
function $isArrayOf_T1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a9)));
}
var $d_T1 = new $TypeData().i($c_T1, "scala.Tuple1", ({
  a9: 1,
  bG: 1,
  c: 1,
  b: 1,
  a: 1
}));
/** @constructor */
function $c_T10(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10) {
  this.fu = null;
  this.bx = null;
  this.by = null;
  this.bz = null;
  this.bA = null;
  this.bB = null;
  this.bC = null;
  this.bD = null;
  this.bE = null;
  this.bw = null;
  this.fu = _1;
  this.bx = _2;
  this.by = _3;
  this.bz = _4;
  this.bA = _5;
  this.bB = _6;
  this.bC = _7;
  this.bD = _8;
  this.bE = _9;
  this.bw = _10;
}
$p = $c_T10.prototype = new $h_O();
$p.constructor = $c_T10;
/** @constructor */
function $h_T10() {
}
$h_T10.prototype = $p;
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.v = (function() {
  return 10;
});
$p.g = (function(n) {
  return $f_s_Product10__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().N(this, 2104595240, true);
});
$p.o = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T10) && ((((((((($m_sr_BoxesRunTime$().c(this.fu, x$0.fu) && $m_sr_BoxesRunTime$().c(this.bx, x$0.bx)) && $m_sr_BoxesRunTime$().c(this.by, x$0.by)) && $m_sr_BoxesRunTime$().c(this.bz, x$0.bz)) && $m_sr_BoxesRunTime$().c(this.bA, x$0.bA)) && $m_sr_BoxesRunTime$().c(this.bB, x$0.bB)) && $m_sr_BoxesRunTime$().c(this.bC, x$0.bC)) && $m_sr_BoxesRunTime$().c(this.bD, x$0.bD)) && $m_sr_BoxesRunTime$().c(this.bE, x$0.bE)) && $m_sr_BoxesRunTime$().c(this.bw, x$0.bw))));
});
$p.B = (function() {
  return "Tuple10";
});
$p.m = (function() {
  return (((((((((((((((((((("(" + this.fu) + ",") + this.bx) + ",") + this.by) + ",") + this.bz) + ",") + this.bA) + ",") + this.bB) + ",") + this.bC) + ",") + this.bD) + ",") + this.bE) + ",") + this.bw) + ")");
});
function $isArrayOf_T10(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aa)));
}
var $d_T10 = new $TypeData().i($c_T10, "scala.Tuple10", ({
  aa: 1,
  b: 1,
  c: 1,
  bH: 1,
  a: 1
}));
/** @constructor */
function $c_T11(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11) {
  this.fv = null;
  this.bH = null;
  this.bI = null;
  this.bJ = null;
  this.bK = null;
  this.bL = null;
  this.bM = null;
  this.bN = null;
  this.bO = null;
  this.bF = null;
  this.bG = null;
  this.fv = _1;
  this.bH = _2;
  this.bI = _3;
  this.bJ = _4;
  this.bK = _5;
  this.bL = _6;
  this.bM = _7;
  this.bN = _8;
  this.bO = _9;
  this.bF = _10;
  this.bG = _11;
}
$p = $c_T11.prototype = new $h_O();
$p.constructor = $c_T11;
/** @constructor */
function $h_T11() {
}
$h_T11.prototype = $p;
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.v = (function() {
  return 11;
});
$p.g = (function(n) {
  return $f_s_Product11__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().N(this, 838406606, true);
});
$p.o = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T11) && (((((((((($m_sr_BoxesRunTime$().c(this.fv, x$0.fv) && $m_sr_BoxesRunTime$().c(this.bH, x$0.bH)) && $m_sr_BoxesRunTime$().c(this.bI, x$0.bI)) && $m_sr_BoxesRunTime$().c(this.bJ, x$0.bJ)) && $m_sr_BoxesRunTime$().c(this.bK, x$0.bK)) && $m_sr_BoxesRunTime$().c(this.bL, x$0.bL)) && $m_sr_BoxesRunTime$().c(this.bM, x$0.bM)) && $m_sr_BoxesRunTime$().c(this.bN, x$0.bN)) && $m_sr_BoxesRunTime$().c(this.bO, x$0.bO)) && $m_sr_BoxesRunTime$().c(this.bF, x$0.bF)) && $m_sr_BoxesRunTime$().c(this.bG, x$0.bG))));
});
$p.B = (function() {
  return "Tuple11";
});
$p.m = (function() {
  return (((((((((((((((((((((("(" + this.fv) + ",") + this.bH) + ",") + this.bI) + ",") + this.bJ) + ",") + this.bK) + ",") + this.bL) + ",") + this.bM) + ",") + this.bN) + ",") + this.bO) + ",") + this.bF) + ",") + this.bG) + ")");
});
function $isArrayOf_T11(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ab)));
}
var $d_T11 = new $TypeData().i($c_T11, "scala.Tuple11", ({
  ab: 1,
  b: 1,
  c: 1,
  bI: 1,
  a: 1
}));
/** @constructor */
function $c_T12(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12) {
  this.fw = null;
  this.bS = null;
  this.bT = null;
  this.bU = null;
  this.bV = null;
  this.bW = null;
  this.bX = null;
  this.bY = null;
  this.bZ = null;
  this.bP = null;
  this.bQ = null;
  this.bR = null;
  this.fw = _1;
  this.bS = _2;
  this.bT = _3;
  this.bU = _4;
  this.bV = _5;
  this.bW = _6;
  this.bX = _7;
  this.bY = _8;
  this.bZ = _9;
  this.bP = _10;
  this.bQ = _11;
  this.bR = _12;
}
$p = $c_T12.prototype = new $h_O();
$p.constructor = $c_T12;
/** @constructor */
function $h_T12() {
}
$h_T12.prototype = $p;
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.v = (function() {
  return 12;
});
$p.g = (function(n) {
  return $f_s_Product12__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().N(this, (-1964145863), true);
});
$p.o = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T12) && ((((((((((($m_sr_BoxesRunTime$().c(this.fw, x$0.fw) && $m_sr_BoxesRunTime$().c(this.bS, x$0.bS)) && $m_sr_BoxesRunTime$().c(this.bT, x$0.bT)) && $m_sr_BoxesRunTime$().c(this.bU, x$0.bU)) && $m_sr_BoxesRunTime$().c(this.bV, x$0.bV)) && $m_sr_BoxesRunTime$().c(this.bW, x$0.bW)) && $m_sr_BoxesRunTime$().c(this.bX, x$0.bX)) && $m_sr_BoxesRunTime$().c(this.bY, x$0.bY)) && $m_sr_BoxesRunTime$().c(this.bZ, x$0.bZ)) && $m_sr_BoxesRunTime$().c(this.bP, x$0.bP)) && $m_sr_BoxesRunTime$().c(this.bQ, x$0.bQ)) && $m_sr_BoxesRunTime$().c(this.bR, x$0.bR))));
});
$p.B = (function() {
  return "Tuple12";
});
$p.m = (function() {
  return (((((((((((((((((((((((("(" + this.fw) + ",") + this.bS) + ",") + this.bT) + ",") + this.bU) + ",") + this.bV) + ",") + this.bW) + ",") + this.bX) + ",") + this.bY) + ",") + this.bZ) + ",") + this.bP) + ",") + this.bQ) + ",") + this.bR) + ")");
});
function $isArrayOf_T12(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ac)));
}
var $d_T12 = new $TypeData().i($c_T12, "scala.Tuple12", ({
  ac: 1,
  b: 1,
  c: 1,
  bJ: 1,
  a: 1
}));
/** @constructor */
function $c_T13(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13) {
  this.fx = null;
  this.c4 = null;
  this.c5 = null;
  this.c6 = null;
  this.c7 = null;
  this.c8 = null;
  this.c9 = null;
  this.ca = null;
  this.cb = null;
  this.c0 = null;
  this.c1 = null;
  this.c2 = null;
  this.c3 = null;
  this.fx = _1;
  this.c4 = _2;
  this.c5 = _3;
  this.c6 = _4;
  this.c7 = _5;
  this.c8 = _6;
  this.c9 = _7;
  this.ca = _8;
  this.cb = _9;
  this.c0 = _10;
  this.c1 = _11;
  this.c2 = _12;
  this.c3 = _13;
}
$p = $c_T13.prototype = new $h_O();
$p.constructor = $c_T13;
/** @constructor */
function $h_T13() {
}
$h_T13.prototype = $p;
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.v = (function() {
  return 13;
});
$p.g = (function(n) {
  return $f_s_Product13__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().N(this, 1224168367, true);
});
$p.o = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T13) && (((((((((((($m_sr_BoxesRunTime$().c(this.fx, x$0.fx) && $m_sr_BoxesRunTime$().c(this.c4, x$0.c4)) && $m_sr_BoxesRunTime$().c(this.c5, x$0.c5)) && $m_sr_BoxesRunTime$().c(this.c6, x$0.c6)) && $m_sr_BoxesRunTime$().c(this.c7, x$0.c7)) && $m_sr_BoxesRunTime$().c(this.c8, x$0.c8)) && $m_sr_BoxesRunTime$().c(this.c9, x$0.c9)) && $m_sr_BoxesRunTime$().c(this.ca, x$0.ca)) && $m_sr_BoxesRunTime$().c(this.cb, x$0.cb)) && $m_sr_BoxesRunTime$().c(this.c0, x$0.c0)) && $m_sr_BoxesRunTime$().c(this.c1, x$0.c1)) && $m_sr_BoxesRunTime$().c(this.c2, x$0.c2)) && $m_sr_BoxesRunTime$().c(this.c3, x$0.c3))));
});
$p.B = (function() {
  return "Tuple13";
});
$p.m = (function() {
  return (((((((((((((((((((((((((("(" + this.fx) + ",") + this.c4) + ",") + this.c5) + ",") + this.c6) + ",") + this.c7) + ",") + this.c8) + ",") + this.c9) + ",") + this.ca) + ",") + this.cb) + ",") + this.c0) + ",") + this.c1) + ",") + this.c2) + ",") + this.c3) + ")");
});
function $isArrayOf_T13(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ad)));
}
var $d_T13 = new $TypeData().i($c_T13, "scala.Tuple13", ({
  ad: 1,
  b: 1,
  c: 1,
  bK: 1,
  a: 1
}));
/** @constructor */
function $c_T14(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14) {
  this.fy = null;
  this.ch = null;
  this.ci = null;
  this.cj = null;
  this.ck = null;
  this.cl = null;
  this.cm = null;
  this.cn = null;
  this.co = null;
  this.cc = null;
  this.cd = null;
  this.ce = null;
  this.cf = null;
  this.cg = null;
  this.fy = _1;
  this.ch = _2;
  this.ci = _3;
  this.cj = _4;
  this.ck = _5;
  this.cl = _6;
  this.cm = _7;
  this.cn = _8;
  this.co = _9;
  this.cc = _10;
  this.cd = _11;
  this.ce = _12;
  this.cf = _13;
  this.cg = _14;
}
$p = $c_T14.prototype = new $h_O();
$p.constructor = $c_T14;
/** @constructor */
function $h_T14() {
}
$h_T14.prototype = $p;
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.v = (function() {
  return 14;
});
$p.g = (function(n) {
  return $f_s_Product14__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().N(this, 147759069, true);
});
$p.o = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T14) && ((((((((((((($m_sr_BoxesRunTime$().c(this.fy, x$0.fy) && $m_sr_BoxesRunTime$().c(this.ch, x$0.ch)) && $m_sr_BoxesRunTime$().c(this.ci, x$0.ci)) && $m_sr_BoxesRunTime$().c(this.cj, x$0.cj)) && $m_sr_BoxesRunTime$().c(this.ck, x$0.ck)) && $m_sr_BoxesRunTime$().c(this.cl, x$0.cl)) && $m_sr_BoxesRunTime$().c(this.cm, x$0.cm)) && $m_sr_BoxesRunTime$().c(this.cn, x$0.cn)) && $m_sr_BoxesRunTime$().c(this.co, x$0.co)) && $m_sr_BoxesRunTime$().c(this.cc, x$0.cc)) && $m_sr_BoxesRunTime$().c(this.cd, x$0.cd)) && $m_sr_BoxesRunTime$().c(this.ce, x$0.ce)) && $m_sr_BoxesRunTime$().c(this.cf, x$0.cf)) && $m_sr_BoxesRunTime$().c(this.cg, x$0.cg))));
});
$p.B = (function() {
  return "Tuple14";
});
$p.m = (function() {
  return (((((((((((((((((((((((((((("(" + this.fy) + ",") + this.ch) + ",") + this.ci) + ",") + this.cj) + ",") + this.ck) + ",") + this.cl) + ",") + this.cm) + ",") + this.cn) + ",") + this.co) + ",") + this.cc) + ",") + this.cd) + ",") + this.ce) + ",") + this.cf) + ",") + this.cg) + ")");
});
function $isArrayOf_T14(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ae)));
}
var $d_T14 = new $TypeData().i($c_T14, "scala.Tuple14", ({
  ae: 1,
  b: 1,
  c: 1,
  bL: 1,
  a: 1
}));
/** @constructor */
function $c_T15(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15) {
  this.fz = null;
  this.cv = null;
  this.cw = null;
  this.cx = null;
  this.cy = null;
  this.cz = null;
  this.cA = null;
  this.cB = null;
  this.cC = null;
  this.cp = null;
  this.cq = null;
  this.cr = null;
  this.cs = null;
  this.ct = null;
  this.cu = null;
  this.fz = _1;
  this.cv = _2;
  this.cw = _3;
  this.cx = _4;
  this.cy = _5;
  this.cz = _6;
  this.cA = _7;
  this.cB = _8;
  this.cC = _9;
  this.cp = _10;
  this.cq = _11;
  this.cr = _12;
  this.cs = _13;
  this.ct = _14;
  this.cu = _15;
}
$p = $c_T15.prototype = new $h_O();
$p.constructor = $c_T15;
/** @constructor */
function $h_T15() {
}
$h_T15.prototype = $p;
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.v = (function() {
  return 15;
});
$p.g = (function(n) {
  return $f_s_Product15__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().N(this, 1834180931, true);
});
$p.o = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T15) && (((((((((((((($m_sr_BoxesRunTime$().c(this.fz, x$0.fz) && $m_sr_BoxesRunTime$().c(this.cv, x$0.cv)) && $m_sr_BoxesRunTime$().c(this.cw, x$0.cw)) && $m_sr_BoxesRunTime$().c(this.cx, x$0.cx)) && $m_sr_BoxesRunTime$().c(this.cy, x$0.cy)) && $m_sr_BoxesRunTime$().c(this.cz, x$0.cz)) && $m_sr_BoxesRunTime$().c(this.cA, x$0.cA)) && $m_sr_BoxesRunTime$().c(this.cB, x$0.cB)) && $m_sr_BoxesRunTime$().c(this.cC, x$0.cC)) && $m_sr_BoxesRunTime$().c(this.cp, x$0.cp)) && $m_sr_BoxesRunTime$().c(this.cq, x$0.cq)) && $m_sr_BoxesRunTime$().c(this.cr, x$0.cr)) && $m_sr_BoxesRunTime$().c(this.cs, x$0.cs)) && $m_sr_BoxesRunTime$().c(this.ct, x$0.ct)) && $m_sr_BoxesRunTime$().c(this.cu, x$0.cu))));
});
$p.B = (function() {
  return "Tuple15";
});
$p.m = (function() {
  return (((((((((((((((((((((((((((((("(" + this.fz) + ",") + this.cv) + ",") + this.cw) + ",") + this.cx) + ",") + this.cy) + ",") + this.cz) + ",") + this.cA) + ",") + this.cB) + ",") + this.cC) + ",") + this.cp) + ",") + this.cq) + ",") + this.cr) + ",") + this.cs) + ",") + this.ct) + ",") + this.cu) + ")");
});
function $isArrayOf_T15(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.af)));
}
var $d_T15 = new $TypeData().i($c_T15, "scala.Tuple15", ({
  af: 1,
  b: 1,
  c: 1,
  bM: 1,
  a: 1
}));
/** @constructor */
function $c_T16(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16) {
  this.fA = null;
  this.cK = null;
  this.cL = null;
  this.cM = null;
  this.cN = null;
  this.cO = null;
  this.cP = null;
  this.cQ = null;
  this.cR = null;
  this.cD = null;
  this.cE = null;
  this.cF = null;
  this.cG = null;
  this.cH = null;
  this.cI = null;
  this.cJ = null;
  this.fA = _1;
  this.cK = _2;
  this.cL = _3;
  this.cM = _4;
  this.cN = _5;
  this.cO = _6;
  this.cP = _7;
  this.cQ = _8;
  this.cR = _9;
  this.cD = _10;
  this.cE = _11;
  this.cF = _12;
  this.cG = _13;
  this.cH = _14;
  this.cI = _15;
  this.cJ = _16;
}
$p = $c_T16.prototype = new $h_O();
$p.constructor = $c_T16;
/** @constructor */
function $h_T16() {
}
$h_T16.prototype = $p;
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.v = (function() {
  return 16;
});
$p.g = (function(n) {
  return $f_s_Product16__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().N(this, 499793902, true);
});
$p.o = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T16) && ((((((((((((((($m_sr_BoxesRunTime$().c(this.fA, x$0.fA) && $m_sr_BoxesRunTime$().c(this.cK, x$0.cK)) && $m_sr_BoxesRunTime$().c(this.cL, x$0.cL)) && $m_sr_BoxesRunTime$().c(this.cM, x$0.cM)) && $m_sr_BoxesRunTime$().c(this.cN, x$0.cN)) && $m_sr_BoxesRunTime$().c(this.cO, x$0.cO)) && $m_sr_BoxesRunTime$().c(this.cP, x$0.cP)) && $m_sr_BoxesRunTime$().c(this.cQ, x$0.cQ)) && $m_sr_BoxesRunTime$().c(this.cR, x$0.cR)) && $m_sr_BoxesRunTime$().c(this.cD, x$0.cD)) && $m_sr_BoxesRunTime$().c(this.cE, x$0.cE)) && $m_sr_BoxesRunTime$().c(this.cF, x$0.cF)) && $m_sr_BoxesRunTime$().c(this.cG, x$0.cG)) && $m_sr_BoxesRunTime$().c(this.cH, x$0.cH)) && $m_sr_BoxesRunTime$().c(this.cI, x$0.cI)) && $m_sr_BoxesRunTime$().c(this.cJ, x$0.cJ))));
});
$p.B = (function() {
  return "Tuple16";
});
$p.m = (function() {
  return (((((((((((((((((((((((((((((((("(" + this.fA) + ",") + this.cK) + ",") + this.cL) + ",") + this.cM) + ",") + this.cN) + ",") + this.cO) + ",") + this.cP) + ",") + this.cQ) + ",") + this.cR) + ",") + this.cD) + ",") + this.cE) + ",") + this.cF) + ",") + this.cG) + ",") + this.cH) + ",") + this.cI) + ",") + this.cJ) + ")");
});
function $isArrayOf_T16(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ag)));
}
var $d_T16 = new $TypeData().i($c_T16, "scala.Tuple16", ({
  ag: 1,
  b: 1,
  c: 1,
  bN: 1,
  a: 1
}));
/** @constructor */
function $c_T17(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17) {
  this.fB = null;
  this.d0 = null;
  this.d1 = null;
  this.d2 = null;
  this.d3 = null;
  this.d4 = null;
  this.d5 = null;
  this.d6 = null;
  this.d7 = null;
  this.cS = null;
  this.cT = null;
  this.cU = null;
  this.cV = null;
  this.cW = null;
  this.cX = null;
  this.cY = null;
  this.cZ = null;
  this.fB = _1;
  this.d0 = _2;
  this.d1 = _3;
  this.d2 = _4;
  this.d3 = _5;
  this.d4 = _6;
  this.d5 = _7;
  this.d6 = _8;
  this.d7 = _9;
  this.cS = _10;
  this.cT = _11;
  this.cU = _12;
  this.cV = _13;
  this.cW = _14;
  this.cX = _15;
  this.cY = _16;
  this.cZ = _17;
}
$p = $c_T17.prototype = new $h_O();
$p.constructor = $c_T17;
/** @constructor */
function $h_T17() {
}
$h_T17.prototype = $p;
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.v = (function() {
  return 17;
});
$p.g = (function(n) {
  return $f_s_Product17__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().N(this, (-934366247), true);
});
$p.o = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T17) && (((((((((((((((($m_sr_BoxesRunTime$().c(this.fB, x$0.fB) && $m_sr_BoxesRunTime$().c(this.d0, x$0.d0)) && $m_sr_BoxesRunTime$().c(this.d1, x$0.d1)) && $m_sr_BoxesRunTime$().c(this.d2, x$0.d2)) && $m_sr_BoxesRunTime$().c(this.d3, x$0.d3)) && $m_sr_BoxesRunTime$().c(this.d4, x$0.d4)) && $m_sr_BoxesRunTime$().c(this.d5, x$0.d5)) && $m_sr_BoxesRunTime$().c(this.d6, x$0.d6)) && $m_sr_BoxesRunTime$().c(this.d7, x$0.d7)) && $m_sr_BoxesRunTime$().c(this.cS, x$0.cS)) && $m_sr_BoxesRunTime$().c(this.cT, x$0.cT)) && $m_sr_BoxesRunTime$().c(this.cU, x$0.cU)) && $m_sr_BoxesRunTime$().c(this.cV, x$0.cV)) && $m_sr_BoxesRunTime$().c(this.cW, x$0.cW)) && $m_sr_BoxesRunTime$().c(this.cX, x$0.cX)) && $m_sr_BoxesRunTime$().c(this.cY, x$0.cY)) && $m_sr_BoxesRunTime$().c(this.cZ, x$0.cZ))));
});
$p.B = (function() {
  return "Tuple17";
});
$p.m = (function() {
  return (((((((((((((((((((((((((((((((((("(" + this.fB) + ",") + this.d0) + ",") + this.d1) + ",") + this.d2) + ",") + this.d3) + ",") + this.d4) + ",") + this.d5) + ",") + this.d6) + ",") + this.d7) + ",") + this.cS) + ",") + this.cT) + ",") + this.cU) + ",") + this.cV) + ",") + this.cW) + ",") + this.cX) + ",") + this.cY) + ",") + this.cZ) + ")");
});
function $isArrayOf_T17(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ah)));
}
var $d_T17 = new $TypeData().i($c_T17, "scala.Tuple17", ({
  ah: 1,
  b: 1,
  c: 1,
  bO: 1,
  a: 1
}));
/** @constructor */
function $c_T18(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18) {
  this.fC = null;
  this.dh = null;
  this.di = null;
  this.dj = null;
  this.dk = null;
  this.dl = null;
  this.dm = null;
  this.dn = null;
  this.dp = null;
  this.d8 = null;
  this.d9 = null;
  this.da = null;
  this.db = null;
  this.dc = null;
  this.dd = null;
  this.de = null;
  this.df = null;
  this.dg = null;
  this.fC = _1;
  this.dh = _2;
  this.di = _3;
  this.dj = _4;
  this.dk = _5;
  this.dl = _6;
  this.dm = _7;
  this.dn = _8;
  this.dp = _9;
  this.d8 = _10;
  this.d9 = _11;
  this.da = _12;
  this.db = _13;
  this.dc = _14;
  this.dd = _15;
  this.de = _16;
  this.df = _17;
  this.dg = _18;
}
$p = $c_T18.prototype = new $h_O();
$p.constructor = $c_T18;
/** @constructor */
function $h_T18() {
}
$h_T18.prototype = $p;
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.v = (function() {
  return 18;
});
$p.g = (function(n) {
  return $f_s_Product18__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().N(this, (-937041276), true);
});
$p.o = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T18) && ((((((((((((((((($m_sr_BoxesRunTime$().c(this.fC, x$0.fC) && $m_sr_BoxesRunTime$().c(this.dh, x$0.dh)) && $m_sr_BoxesRunTime$().c(this.di, x$0.di)) && $m_sr_BoxesRunTime$().c(this.dj, x$0.dj)) && $m_sr_BoxesRunTime$().c(this.dk, x$0.dk)) && $m_sr_BoxesRunTime$().c(this.dl, x$0.dl)) && $m_sr_BoxesRunTime$().c(this.dm, x$0.dm)) && $m_sr_BoxesRunTime$().c(this.dn, x$0.dn)) && $m_sr_BoxesRunTime$().c(this.dp, x$0.dp)) && $m_sr_BoxesRunTime$().c(this.d8, x$0.d8)) && $m_sr_BoxesRunTime$().c(this.d9, x$0.d9)) && $m_sr_BoxesRunTime$().c(this.da, x$0.da)) && $m_sr_BoxesRunTime$().c(this.db, x$0.db)) && $m_sr_BoxesRunTime$().c(this.dc, x$0.dc)) && $m_sr_BoxesRunTime$().c(this.dd, x$0.dd)) && $m_sr_BoxesRunTime$().c(this.de, x$0.de)) && $m_sr_BoxesRunTime$().c(this.df, x$0.df)) && $m_sr_BoxesRunTime$().c(this.dg, x$0.dg))));
});
$p.B = (function() {
  return "Tuple18";
});
$p.m = (function() {
  return (((((((((((((((((((((((((((((((((((("(" + this.fC) + ",") + this.dh) + ",") + this.di) + ",") + this.dj) + ",") + this.dk) + ",") + this.dl) + ",") + this.dm) + ",") + this.dn) + ",") + this.dp) + ",") + this.d8) + ",") + this.d9) + ",") + this.da) + ",") + this.db) + ",") + this.dc) + ",") + this.dd) + ",") + this.de) + ",") + this.df) + ",") + this.dg) + ")");
});
function $isArrayOf_T18(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ai)));
}
var $d_T18 = new $TypeData().i($c_T18, "scala.Tuple18", ({
  ai: 1,
  b: 1,
  c: 1,
  bP: 1,
  a: 1
}));
/** @constructor */
function $c_T19(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19) {
  this.fD = null;
  this.dA = null;
  this.dB = null;
  this.dC = null;
  this.dD = null;
  this.dE = null;
  this.dF = null;
  this.dG = null;
  this.dH = null;
  this.dq = null;
  this.dr = null;
  this.ds = null;
  this.dt = null;
  this.du = null;
  this.dv = null;
  this.dw = null;
  this.dx = null;
  this.dy = null;
  this.dz = null;
  this.fD = _1;
  this.dA = _2;
  this.dB = _3;
  this.dC = _4;
  this.dD = _5;
  this.dE = _6;
  this.dF = _7;
  this.dG = _8;
  this.dH = _9;
  this.dq = _10;
  this.dr = _11;
  this.ds = _12;
  this.dt = _13;
  this.du = _14;
  this.dv = _15;
  this.dw = _16;
  this.dx = _17;
  this.dy = _18;
  this.dz = _19;
}
$p = $c_T19.prototype = new $h_O();
$p.constructor = $c_T19;
/** @constructor */
function $h_T19() {
}
$h_T19.prototype = $p;
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.v = (function() {
  return 19;
});
$p.g = (function(n) {
  return $f_s_Product19__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().N(this, (-1955940499), true);
});
$p.o = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T19) && (((((((((((((((((($m_sr_BoxesRunTime$().c(this.fD, x$0.fD) && $m_sr_BoxesRunTime$().c(this.dA, x$0.dA)) && $m_sr_BoxesRunTime$().c(this.dB, x$0.dB)) && $m_sr_BoxesRunTime$().c(this.dC, x$0.dC)) && $m_sr_BoxesRunTime$().c(this.dD, x$0.dD)) && $m_sr_BoxesRunTime$().c(this.dE, x$0.dE)) && $m_sr_BoxesRunTime$().c(this.dF, x$0.dF)) && $m_sr_BoxesRunTime$().c(this.dG, x$0.dG)) && $m_sr_BoxesRunTime$().c(this.dH, x$0.dH)) && $m_sr_BoxesRunTime$().c(this.dq, x$0.dq)) && $m_sr_BoxesRunTime$().c(this.dr, x$0.dr)) && $m_sr_BoxesRunTime$().c(this.ds, x$0.ds)) && $m_sr_BoxesRunTime$().c(this.dt, x$0.dt)) && $m_sr_BoxesRunTime$().c(this.du, x$0.du)) && $m_sr_BoxesRunTime$().c(this.dv, x$0.dv)) && $m_sr_BoxesRunTime$().c(this.dw, x$0.dw)) && $m_sr_BoxesRunTime$().c(this.dx, x$0.dx)) && $m_sr_BoxesRunTime$().c(this.dy, x$0.dy)) && $m_sr_BoxesRunTime$().c(this.dz, x$0.dz))));
});
$p.B = (function() {
  return "Tuple19";
});
$p.m = (function() {
  return (((((((((((((((((((((((((((((((((((((("(" + this.fD) + ",") + this.dA) + ",") + this.dB) + ",") + this.dC) + ",") + this.dD) + ",") + this.dE) + ",") + this.dF) + ",") + this.dG) + ",") + this.dH) + ",") + this.dq) + ",") + this.dr) + ",") + this.ds) + ",") + this.dt) + ",") + this.du) + ",") + this.dv) + ",") + this.dw) + ",") + this.dx) + ",") + this.dy) + ",") + this.dz) + ")");
});
function $isArrayOf_T19(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aj)));
}
var $d_T19 = new $TypeData().i($c_T19, "scala.Tuple19", ({
  aj: 1,
  b: 1,
  c: 1,
  bQ: 1,
  a: 1
}));
/** @constructor */
function $c_T2(_1, _2) {
  this.aa = null;
  this.am = null;
  this.aa = _1;
  this.am = _2;
}
$p = $c_T2.prototype = new $h_O();
$p.constructor = $c_T2;
/** @constructor */
function $h_T2() {
}
$h_T2.prototype = $p;
$p.v = (function() {
  return 2;
});
$p.g = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n);
});
$p.m = (function() {
  return (((("(" + this.aa) + ",") + this.am) + ")");
});
$p.B = (function() {
  return "Tuple2";
});
$p.C = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().N(this, (-116390334), true);
});
$p.o = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T2) && ($m_sr_BoxesRunTime$().c(this.aa, x$1.aa) && $m_sr_BoxesRunTime$().c(this.am, x$1.am))));
});
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ak)));
}
var $d_T2 = new $TypeData().i($c_T2, "scala.Tuple2", ({
  ak: 1,
  bR: 1,
  c: 1,
  b: 1,
  a: 1
}));
/** @constructor */
function $c_T20(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20) {
  this.fE = null;
  this.dS = null;
  this.dU = null;
  this.dV = null;
  this.dW = null;
  this.dX = null;
  this.dY = null;
  this.dZ = null;
  this.e0 = null;
  this.dI = null;
  this.dJ = null;
  this.dK = null;
  this.dL = null;
  this.dM = null;
  this.dN = null;
  this.dO = null;
  this.dP = null;
  this.dQ = null;
  this.dR = null;
  this.dT = null;
  this.fE = _1;
  this.dS = _2;
  this.dU = _3;
  this.dV = _4;
  this.dW = _5;
  this.dX = _6;
  this.dY = _7;
  this.dZ = _8;
  this.e0 = _9;
  this.dI = _10;
  this.dJ = _11;
  this.dK = _12;
  this.dL = _13;
  this.dM = _14;
  this.dN = _15;
  this.dO = _16;
  this.dP = _17;
  this.dQ = _18;
  this.dR = _19;
  this.dT = _20;
}
$p = $c_T20.prototype = new $h_O();
$p.constructor = $c_T20;
/** @constructor */
function $h_T20() {
}
$h_T20.prototype = $p;
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.v = (function() {
  return 20;
});
$p.g = (function(n) {
  return $f_s_Product20__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().N(this, 1328807075, true);
});
$p.o = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T20) && ((((((((((((((((((($m_sr_BoxesRunTime$().c(this.fE, x$0.fE) && $m_sr_BoxesRunTime$().c(this.dS, x$0.dS)) && $m_sr_BoxesRunTime$().c(this.dU, x$0.dU)) && $m_sr_BoxesRunTime$().c(this.dV, x$0.dV)) && $m_sr_BoxesRunTime$().c(this.dW, x$0.dW)) && $m_sr_BoxesRunTime$().c(this.dX, x$0.dX)) && $m_sr_BoxesRunTime$().c(this.dY, x$0.dY)) && $m_sr_BoxesRunTime$().c(this.dZ, x$0.dZ)) && $m_sr_BoxesRunTime$().c(this.e0, x$0.e0)) && $m_sr_BoxesRunTime$().c(this.dI, x$0.dI)) && $m_sr_BoxesRunTime$().c(this.dJ, x$0.dJ)) && $m_sr_BoxesRunTime$().c(this.dK, x$0.dK)) && $m_sr_BoxesRunTime$().c(this.dL, x$0.dL)) && $m_sr_BoxesRunTime$().c(this.dM, x$0.dM)) && $m_sr_BoxesRunTime$().c(this.dN, x$0.dN)) && $m_sr_BoxesRunTime$().c(this.dO, x$0.dO)) && $m_sr_BoxesRunTime$().c(this.dP, x$0.dP)) && $m_sr_BoxesRunTime$().c(this.dQ, x$0.dQ)) && $m_sr_BoxesRunTime$().c(this.dR, x$0.dR)) && $m_sr_BoxesRunTime$().c(this.dT, x$0.dT))));
});
$p.B = (function() {
  return "Tuple20";
});
$p.m = (function() {
  return (((((((((((((((((((((((((((((((((((((((("(" + this.fE) + ",") + this.dS) + ",") + this.dU) + ",") + this.dV) + ",") + this.dW) + ",") + this.dX) + ",") + this.dY) + ",") + this.dZ) + ",") + this.e0) + ",") + this.dI) + ",") + this.dJ) + ",") + this.dK) + ",") + this.dL) + ",") + this.dM) + ",") + this.dN) + ",") + this.dO) + ",") + this.dP) + ",") + this.dQ) + ",") + this.dR) + ",") + this.dT) + ")");
});
function $isArrayOf_T20(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.al)));
}
var $d_T20 = new $TypeData().i($c_T20, "scala.Tuple20", ({
  al: 1,
  b: 1,
  c: 1,
  bS: 1,
  a: 1
}));
/** @constructor */
function $c_T21(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21) {
  this.fF = null;
  this.eb = null;
  this.ee = null;
  this.ef = null;
  this.eg = null;
  this.eh = null;
  this.ei = null;
  this.ej = null;
  this.ek = null;
  this.e1 = null;
  this.e2 = null;
  this.e3 = null;
  this.e4 = null;
  this.e5 = null;
  this.e6 = null;
  this.e7 = null;
  this.e8 = null;
  this.e9 = null;
  this.ea = null;
  this.ec = null;
  this.ed = null;
  this.fF = _1;
  this.eb = _2;
  this.ee = _3;
  this.ef = _4;
  this.eg = _5;
  this.eh = _6;
  this.ei = _7;
  this.ej = _8;
  this.ek = _9;
  this.e1 = _10;
  this.e2 = _11;
  this.e3 = _12;
  this.e4 = _13;
  this.e5 = _14;
  this.e6 = _15;
  this.e7 = _16;
  this.e8 = _17;
  this.e9 = _18;
  this.ea = _19;
  this.ec = _20;
  this.ed = _21;
}
$p = $c_T21.prototype = new $h_O();
$p.constructor = $c_T21;
/** @constructor */
function $h_T21() {
}
$h_T21.prototype = $p;
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.v = (function() {
  return 21;
});
$p.g = (function(n) {
  return $f_s_Product21__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().N(this, (-21288119), true);
});
$p.o = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T21) && (((((((((((((((((((($m_sr_BoxesRunTime$().c(this.fF, x$0.fF) && $m_sr_BoxesRunTime$().c(this.eb, x$0.eb)) && $m_sr_BoxesRunTime$().c(this.ee, x$0.ee)) && $m_sr_BoxesRunTime$().c(this.ef, x$0.ef)) && $m_sr_BoxesRunTime$().c(this.eg, x$0.eg)) && $m_sr_BoxesRunTime$().c(this.eh, x$0.eh)) && $m_sr_BoxesRunTime$().c(this.ei, x$0.ei)) && $m_sr_BoxesRunTime$().c(this.ej, x$0.ej)) && $m_sr_BoxesRunTime$().c(this.ek, x$0.ek)) && $m_sr_BoxesRunTime$().c(this.e1, x$0.e1)) && $m_sr_BoxesRunTime$().c(this.e2, x$0.e2)) && $m_sr_BoxesRunTime$().c(this.e3, x$0.e3)) && $m_sr_BoxesRunTime$().c(this.e4, x$0.e4)) && $m_sr_BoxesRunTime$().c(this.e5, x$0.e5)) && $m_sr_BoxesRunTime$().c(this.e6, x$0.e6)) && $m_sr_BoxesRunTime$().c(this.e7, x$0.e7)) && $m_sr_BoxesRunTime$().c(this.e8, x$0.e8)) && $m_sr_BoxesRunTime$().c(this.e9, x$0.e9)) && $m_sr_BoxesRunTime$().c(this.ea, x$0.ea)) && $m_sr_BoxesRunTime$().c(this.ec, x$0.ec)) && $m_sr_BoxesRunTime$().c(this.ed, x$0.ed))));
});
$p.B = (function() {
  return "Tuple21";
});
$p.m = (function() {
  return (((((((((((((((((((((((((((((((((((((((((("(" + this.fF) + ",") + this.eb) + ",") + this.ee) + ",") + this.ef) + ",") + this.eg) + ",") + this.eh) + ",") + this.ei) + ",") + this.ej) + ",") + this.ek) + ",") + this.e1) + ",") + this.e2) + ",") + this.e3) + ",") + this.e4) + ",") + this.e5) + ",") + this.e6) + ",") + this.e7) + ",") + this.e8) + ",") + this.e9) + ",") + this.ea) + ",") + this.ec) + ",") + this.ed) + ")");
});
function $isArrayOf_T21(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.am)));
}
var $d_T21 = new $TypeData().i($c_T21, "scala.Tuple21", ({
  am: 1,
  b: 1,
  c: 1,
  bT: 1,
  a: 1
}));
/** @constructor */
function $c_T22(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22) {
  this.fG = null;
  this.ev = null;
  this.ez = null;
  this.eA = null;
  this.eB = null;
  this.eC = null;
  this.eD = null;
  this.eE = null;
  this.eF = null;
  this.el = null;
  this.em = null;
  this.en = null;
  this.eo = null;
  this.ep = null;
  this.eq = null;
  this.er = null;
  this.es = null;
  this.et = null;
  this.eu = null;
  this.ew = null;
  this.ex = null;
  this.ey = null;
  this.fG = _1;
  this.ev = _2;
  this.ez = _3;
  this.eA = _4;
  this.eB = _5;
  this.eC = _6;
  this.eD = _7;
  this.eE = _8;
  this.eF = _9;
  this.el = _10;
  this.em = _11;
  this.en = _12;
  this.eo = _13;
  this.ep = _14;
  this.eq = _15;
  this.er = _16;
  this.es = _17;
  this.et = _18;
  this.eu = _19;
  this.ew = _20;
  this.ex = _21;
  this.ey = _22;
}
$p = $c_T22.prototype = new $h_O();
$p.constructor = $c_T22;
/** @constructor */
function $h_T22() {
}
$h_T22.prototype = $p;
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.v = (function() {
  return 22;
});
$p.g = (function(n) {
  return $f_s_Product22__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().N(this, (-139445068), true);
});
$p.o = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T22) && ((((((((((((((((((((($m_sr_BoxesRunTime$().c(this.fG, x$0.fG) && $m_sr_BoxesRunTime$().c(this.ev, x$0.ev)) && $m_sr_BoxesRunTime$().c(this.ez, x$0.ez)) && $m_sr_BoxesRunTime$().c(this.eA, x$0.eA)) && $m_sr_BoxesRunTime$().c(this.eB, x$0.eB)) && $m_sr_BoxesRunTime$().c(this.eC, x$0.eC)) && $m_sr_BoxesRunTime$().c(this.eD, x$0.eD)) && $m_sr_BoxesRunTime$().c(this.eE, x$0.eE)) && $m_sr_BoxesRunTime$().c(this.eF, x$0.eF)) && $m_sr_BoxesRunTime$().c(this.el, x$0.el)) && $m_sr_BoxesRunTime$().c(this.em, x$0.em)) && $m_sr_BoxesRunTime$().c(this.en, x$0.en)) && $m_sr_BoxesRunTime$().c(this.eo, x$0.eo)) && $m_sr_BoxesRunTime$().c(this.ep, x$0.ep)) && $m_sr_BoxesRunTime$().c(this.eq, x$0.eq)) && $m_sr_BoxesRunTime$().c(this.er, x$0.er)) && $m_sr_BoxesRunTime$().c(this.es, x$0.es)) && $m_sr_BoxesRunTime$().c(this.et, x$0.et)) && $m_sr_BoxesRunTime$().c(this.eu, x$0.eu)) && $m_sr_BoxesRunTime$().c(this.ew, x$0.ew)) && $m_sr_BoxesRunTime$().c(this.ex, x$0.ex)) && $m_sr_BoxesRunTime$().c(this.ey, x$0.ey))));
});
$p.B = (function() {
  return "Tuple22";
});
$p.m = (function() {
  return (((((((((((((((((((((((((((((((((((((((((((("(" + this.fG) + ",") + this.ev) + ",") + this.ez) + ",") + this.eA) + ",") + this.eB) + ",") + this.eC) + ",") + this.eD) + ",") + this.eE) + ",") + this.eF) + ",") + this.el) + ",") + this.em) + ",") + this.en) + ",") + this.eo) + ",") + this.ep) + ",") + this.eq) + ",") + this.er) + ",") + this.es) + ",") + this.et) + ",") + this.eu) + ",") + this.ew) + ",") + this.ex) + ",") + this.ey) + ")");
});
function $isArrayOf_T22(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.an)));
}
var $d_T22 = new $TypeData().i($c_T22, "scala.Tuple22", ({
  an: 1,
  b: 1,
  c: 1,
  bU: 1,
  a: 1
}));
/** @constructor */
function $c_T3(_1, _2, _3) {
  this.b4 = null;
  this.aS = null;
  this.aT = null;
  this.b4 = _1;
  this.aS = _2;
  this.aT = _3;
}
$p = $c_T3.prototype = new $h_O();
$p.constructor = $c_T3;
/** @constructor */
function $h_T3() {
}
$h_T3.prototype = $p;
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.v = (function() {
  return 3;
});
$p.g = (function(n) {
  return $f_s_Product3__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().N(this, (-192629203), true);
});
$p.o = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T3) && (($m_sr_BoxesRunTime$().c(this.b4, x$0.b4) && $m_sr_BoxesRunTime$().c(this.aS, x$0.aS)) && $m_sr_BoxesRunTime$().c(this.aT, x$0.aT))));
});
$p.B = (function() {
  return "Tuple3";
});
$p.m = (function() {
  return (((((("(" + this.b4) + ",") + this.aS) + ",") + this.aT) + ")");
});
function $isArrayOf_T3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ao)));
}
var $d_T3 = new $TypeData().i($c_T3, "scala.Tuple3", ({
  ao: 1,
  b: 1,
  c: 1,
  bV: 1,
  a: 1
}));
/** @constructor */
function $c_T4(_1, _2, _3, _4) {
  this.eG = null;
  this.bf = null;
  this.bg = null;
  this.bh = null;
  this.eG = _1;
  this.bf = _2;
  this.bg = _3;
  this.bh = _4;
}
$p = $c_T4.prototype = new $h_O();
$p.constructor = $c_T4;
/** @constructor */
function $h_T4() {
}
$h_T4.prototype = $p;
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.v = (function() {
  return 4;
});
$p.g = (function(n) {
  return $f_s_Product4__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().N(this, (-1542739752), true);
});
$p.o = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T4) && ((($m_sr_BoxesRunTime$().c(this.eG, x$0.eG) && $m_sr_BoxesRunTime$().c(this.bf, x$0.bf)) && $m_sr_BoxesRunTime$().c(this.bg, x$0.bg)) && $m_sr_BoxesRunTime$().c(this.bh, x$0.bh))));
});
$p.B = (function() {
  return "Tuple4";
});
$p.m = (function() {
  return (((((((("(" + this.eG) + ",") + this.bf) + ",") + this.bg) + ",") + this.bh) + ")");
});
function $isArrayOf_T4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ap)));
}
var $d_T4 = new $TypeData().i($c_T4, "scala.Tuple4", ({
  ap: 1,
  b: 1,
  c: 1,
  bW: 1,
  a: 1
}));
/** @constructor */
function $c_T5(_1, _2, _3, _4, _5) {
  this.fH = null;
  this.eH = null;
  this.eI = null;
  this.eJ = null;
  this.eK = null;
  this.fH = _1;
  this.eH = _2;
  this.eI = _3;
  this.eJ = _4;
  this.eK = _5;
}
$p = $c_T5.prototype = new $h_O();
$p.constructor = $c_T5;
/** @constructor */
function $h_T5() {
}
$h_T5.prototype = $p;
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.v = (function() {
  return 5;
});
$p.g = (function(n) {
  return $f_s_Product5__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().N(this, 417360321, true);
});
$p.o = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T5) && (((($m_sr_BoxesRunTime$().c(this.fH, x$0.fH) && $m_sr_BoxesRunTime$().c(this.eH, x$0.eH)) && $m_sr_BoxesRunTime$().c(this.eI, x$0.eI)) && $m_sr_BoxesRunTime$().c(this.eJ, x$0.eJ)) && $m_sr_BoxesRunTime$().c(this.eK, x$0.eK))));
});
$p.B = (function() {
  return "Tuple5";
});
$p.m = (function() {
  return (((((((((("(" + this.fH) + ",") + this.eH) + ",") + this.eI) + ",") + this.eJ) + ",") + this.eK) + ")");
});
function $isArrayOf_T5(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aq)));
}
var $d_T5 = new $TypeData().i($c_T5, "scala.Tuple5", ({
  aq: 1,
  b: 1,
  c: 1,
  bX: 1,
  a: 1
}));
/** @constructor */
function $c_T6(_1, _2, _3, _4, _5, _6) {
  this.fI = null;
  this.eL = null;
  this.eM = null;
  this.eN = null;
  this.eO = null;
  this.eP = null;
  this.fI = _1;
  this.eL = _2;
  this.eM = _3;
  this.eN = _4;
  this.eO = _5;
  this.eP = _6;
}
$p = $c_T6.prototype = new $h_O();
$p.constructor = $c_T6;
/** @constructor */
function $h_T6() {
}
$h_T6.prototype = $p;
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.v = (function() {
  return 6;
});
$p.g = (function(n) {
  return $f_s_Product6__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().N(this, (-1037607828), true);
});
$p.o = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T6) && ((((($m_sr_BoxesRunTime$().c(this.fI, x$0.fI) && $m_sr_BoxesRunTime$().c(this.eL, x$0.eL)) && $m_sr_BoxesRunTime$().c(this.eM, x$0.eM)) && $m_sr_BoxesRunTime$().c(this.eN, x$0.eN)) && $m_sr_BoxesRunTime$().c(this.eO, x$0.eO)) && $m_sr_BoxesRunTime$().c(this.eP, x$0.eP))));
});
$p.B = (function() {
  return "Tuple6";
});
$p.m = (function() {
  return (((((((((((("(" + this.fI) + ",") + this.eL) + ",") + this.eM) + ",") + this.eN) + ",") + this.eO) + ",") + this.eP) + ")");
});
function $isArrayOf_T6(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ar)));
}
var $d_T6 = new $TypeData().i($c_T6, "scala.Tuple6", ({
  ar: 1,
  b: 1,
  c: 1,
  bY: 1,
  a: 1
}));
/** @constructor */
function $c_T7(_1, _2, _3, _4, _5, _6, _7) {
  this.fJ = null;
  this.eQ = null;
  this.eR = null;
  this.eS = null;
  this.eT = null;
  this.eU = null;
  this.eV = null;
  this.fJ = _1;
  this.eQ = _2;
  this.eR = _3;
  this.eS = _4;
  this.eT = _5;
  this.eU = _6;
  this.eV = _7;
}
$p = $c_T7.prototype = new $h_O();
$p.constructor = $c_T7;
/** @constructor */
function $h_T7() {
}
$h_T7.prototype = $p;
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.v = (function() {
  return 7;
});
$p.g = (function(n) {
  return $f_s_Product7__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().N(this, (-1050932777), true);
});
$p.o = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T7) && (((((($m_sr_BoxesRunTime$().c(this.fJ, x$0.fJ) && $m_sr_BoxesRunTime$().c(this.eQ, x$0.eQ)) && $m_sr_BoxesRunTime$().c(this.eR, x$0.eR)) && $m_sr_BoxesRunTime$().c(this.eS, x$0.eS)) && $m_sr_BoxesRunTime$().c(this.eT, x$0.eT)) && $m_sr_BoxesRunTime$().c(this.eU, x$0.eU)) && $m_sr_BoxesRunTime$().c(this.eV, x$0.eV))));
});
$p.B = (function() {
  return "Tuple7";
});
$p.m = (function() {
  return (((((((((((((("(" + this.fJ) + ",") + this.eQ) + ",") + this.eR) + ",") + this.eS) + ",") + this.eT) + ",") + this.eU) + ",") + this.eV) + ")");
});
function $isArrayOf_T7(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.as)));
}
var $d_T7 = new $TypeData().i($c_T7, "scala.Tuple7", ({
  as: 1,
  b: 1,
  c: 1,
  bZ: 1,
  a: 1
}));
/** @constructor */
function $c_T8(_1, _2, _3, _4, _5, _6, _7, _8) {
  this.fK = null;
  this.eW = null;
  this.eX = null;
  this.eY = null;
  this.eZ = null;
  this.f0 = null;
  this.f1 = null;
  this.f2 = null;
  this.fK = _1;
  this.eW = _2;
  this.eX = _3;
  this.eY = _4;
  this.eZ = _5;
  this.f0 = _6;
  this.f1 = _7;
  this.f2 = _8;
}
$p = $c_T8.prototype = new $h_O();
$p.constructor = $c_T8;
/** @constructor */
function $h_T8() {
}
$h_T8.prototype = $p;
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.v = (function() {
  return 8;
});
$p.g = (function(n) {
  return $f_s_Product8__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().N(this, 1998822530, true);
});
$p.o = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T8) && ((((((($m_sr_BoxesRunTime$().c(this.fK, x$0.fK) && $m_sr_BoxesRunTime$().c(this.eW, x$0.eW)) && $m_sr_BoxesRunTime$().c(this.eX, x$0.eX)) && $m_sr_BoxesRunTime$().c(this.eY, x$0.eY)) && $m_sr_BoxesRunTime$().c(this.eZ, x$0.eZ)) && $m_sr_BoxesRunTime$().c(this.f0, x$0.f0)) && $m_sr_BoxesRunTime$().c(this.f1, x$0.f1)) && $m_sr_BoxesRunTime$().c(this.f2, x$0.f2))));
});
$p.B = (function() {
  return "Tuple8";
});
$p.m = (function() {
  return (((((((((((((((("(" + this.fK) + ",") + this.eW) + ",") + this.eX) + ",") + this.eY) + ",") + this.eZ) + ",") + this.f0) + ",") + this.f1) + ",") + this.f2) + ")");
});
function $isArrayOf_T8(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.at)));
}
var $d_T8 = new $TypeData().i($c_T8, "scala.Tuple8", ({
  at: 1,
  b: 1,
  c: 1,
  c0: 1,
  a: 1
}));
/** @constructor */
function $c_T9(_1, _2, _3, _4, _5, _6, _7, _8, _9) {
  this.fL = null;
  this.f3 = null;
  this.f4 = null;
  this.f5 = null;
  this.f6 = null;
  this.f7 = null;
  this.f8 = null;
  this.f9 = null;
  this.fa = null;
  this.fL = _1;
  this.f3 = _2;
  this.f4 = _3;
  this.f5 = _4;
  this.f6 = _5;
  this.f7 = _6;
  this.f8 = _7;
  this.f9 = _8;
  this.fa = _9;
}
$p = $c_T9.prototype = new $h_O();
$p.constructor = $c_T9;
/** @constructor */
function $h_T9() {
}
$h_T9.prototype = $p;
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.v = (function() {
  return 9;
});
$p.g = (function(n) {
  return $f_s_Product9__productElement__I__O(this, n);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().N(this, (-1807911176), true);
});
$p.o = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T9) && (((((((($m_sr_BoxesRunTime$().c(this.fL, x$0.fL) && $m_sr_BoxesRunTime$().c(this.f3, x$0.f3)) && $m_sr_BoxesRunTime$().c(this.f4, x$0.f4)) && $m_sr_BoxesRunTime$().c(this.f5, x$0.f5)) && $m_sr_BoxesRunTime$().c(this.f6, x$0.f6)) && $m_sr_BoxesRunTime$().c(this.f7, x$0.f7)) && $m_sr_BoxesRunTime$().c(this.f8, x$0.f8)) && $m_sr_BoxesRunTime$().c(this.f9, x$0.f9)) && $m_sr_BoxesRunTime$().c(this.fa, x$0.fa))));
});
$p.B = (function() {
  return "Tuple9";
});
$p.m = (function() {
  return (((((((((((((((((("(" + this.fL) + ",") + this.f3) + ",") + this.f4) + ",") + this.f5) + ",") + this.f6) + ",") + this.f7) + ",") + this.f8) + ",") + this.f9) + ",") + this.fa) + ")");
});
function $isArrayOf_T9(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.au)));
}
var $d_T9 = new $TypeData().i($c_T9, "scala.Tuple9", ({
  au: 1,
  b: 1,
  c: 1,
  c1: 1,
  a: 1
}));
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.g7() + "("), ", ", ")");
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
$p.J = (function() {
  return false;
});
$p.oA = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
});
$p.al = (function() {
  return 0;
});
$p.E = (function() {
  this.oA();
});
$p.hX = (function(from, until) {
  return this;
});
var $d_sc_Iterator$$anon$19 = new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  cb: 1,
  o: 1,
  d: 1,
  e: 1,
  t: 1
}));
function $p_sc_Iterator$ConcatIterator__merge$1__V($thiz) {
  while (true) {
    if (($thiz.av instanceof $c_sc_Iterator$ConcatIterator)) {
      var c = $thiz.av;
      $thiz.av = c.av;
      $thiz.bj = c.bj;
      if ((c.aE !== null)) {
        if (($thiz.aD === null)) {
          $thiz.aD = c.aD;
        }
        var x$proxy10 = c.aD;
        if ((x$proxy10 === null)) {
          $m_sr_Scala3RunTime$().hU();
        }
        x$proxy10.ge = $thiz.aE;
        $thiz.aE = c.aE;
      }
    } else {
      return (void 0);
    }
  }
}
function $p_sc_Iterator$ConcatIterator__advance$1__Z($thiz) {
  while (true) {
    if (($thiz.aE === null)) {
      $thiz.av = null;
      $thiz.aD = null;
      return false;
    } else {
      $thiz.av = $thiz.aE.nK();
      if (($thiz.aD === $thiz.aE)) {
        var x$proxy12 = $thiz.aD;
        if ((x$proxy12 === null)) {
          $m_sr_Scala3RunTime$().hU();
        }
        $thiz.aD = x$proxy12.ge;
      }
      $thiz.aE = $thiz.aE.ge;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.bj) {
        return true;
      } else {
        if ((!(($thiz.av !== null) && $thiz.av.J()))) {
          continue;
        }
        $thiz.bj = true;
        return true;
      }
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIterator(from) {
  this.av = null;
  this.aE = null;
  this.aD = null;
  this.bj = false;
  this.av = from;
  this.aE = null;
  this.aD = null;
  this.bj = false;
}
$p = $c_sc_Iterator$ConcatIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$ConcatIterator;
/** @constructor */
function $h_sc_Iterator$ConcatIterator() {
}
$h_sc_Iterator$ConcatIterator.prototype = $p;
$p.J = (function() {
  if (this.bj) {
    return true;
  } else if ((this.av !== null)) {
    if (this.av.J()) {
      this.bj = true;
      return true;
    } else {
      return $p_sc_Iterator$ConcatIterator__advance$1__Z(this);
    }
  } else {
    return false;
  }
});
$p.E = (function() {
  if (this.J()) {
    this.bj = false;
    var x$proxy13 = this.av;
    if ((x$proxy13 === null)) {
      $m_sr_Scala3RunTime$().hU();
    }
    return x$proxy13.E();
  } else {
    return $m_sc_Iterator$().b6.E();
  }
});
$p.ne = (function(that) {
  var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
  if ((this.aE === null)) {
    this.aE = c;
    this.aD = c;
  } else {
    var x$proxy14 = this.aD;
    if ((x$proxy14 === null)) {
      $m_sr_Scala3RunTime$().hU();
    }
    x$proxy14.ge = c;
    this.aD = c;
  }
  if ((this.av === null)) {
    this.av = $m_sc_Iterator$().b6;
  }
  return this;
});
function $isArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.az)));
}
var $d_sc_Iterator$ConcatIterator = new $TypeData().i($c_sc_Iterator$ConcatIterator, "scala.collection.Iterator$ConcatIterator", ({
  az: 1,
  o: 1,
  d: 1,
  e: 1,
  t: 1
}));
function $p_sc_Iterator$SliceIterator__skip__V($thiz) {
  while (($thiz.b7 > 0)) {
    if ($thiz.bk.J()) {
      $thiz.bk.E();
      $thiz.b7 = (($thiz.b7 - 1) | 0);
    } else {
      $thiz.b7 = 0;
    }
  }
}
function $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I($thiz, lo$1) {
  if (($thiz.ay < 0)) {
    return (-1);
  } else {
    var that = (($thiz.ay - lo$1) | 0);
    return ((that < 0) ? 0 : that);
  }
}
/** @constructor */
function $c_sc_Iterator$SliceIterator(underlying, start, limit) {
  this.bk = null;
  this.ay = 0;
  this.b7 = 0;
  this.bk = underlying;
  this.ay = limit;
  this.b7 = start;
}
$p = $c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$SliceIterator;
/** @constructor */
function $h_sc_Iterator$SliceIterator() {
}
$h_sc_Iterator$SliceIterator.prototype = $p;
$p.al = (function() {
  var size = this.bk.al();
  if ((size < 0)) {
    return (-1);
  } else {
    var that = ((size - this.b7) | 0);
    var dropSize = ((that < 0) ? 0 : that);
    if ((this.ay < 0)) {
      return dropSize;
    } else {
      var x = this.ay;
      return ((x < dropSize) ? x : dropSize);
    }
  }
});
$p.J = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  return ((this.ay !== 0) && this.bk.J());
});
$p.E = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.ay > 0)) {
    this.ay = ((this.ay - 1) | 0);
    return this.bk.E();
  } else {
    return ((this.ay < 0) ? this.bk.E() : $m_sc_Iterator$().b6.E());
  }
});
$p.hX = (function(from, until) {
  var lo = ((from > 0) ? from : 0);
  if ((until < 0)) {
    var rest = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
  } else if ((until <= lo)) {
    var rest = 0;
  } else if ((this.ay < 0)) {
    var rest = ((until - lo) | 0);
  } else {
    var x = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
    var that = ((until - lo) | 0);
    var rest = ((x < that) ? x : that);
  }
  var sum = ((this.b7 + lo) | 0);
  if ((rest === 0)) {
    return $m_sc_Iterator$().b6;
  } else if ((sum < 0)) {
    this.b7 = 2147483647;
    this.ay = 0;
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => new $c_sc_Iterator$SliceIterator(this.bk, ((sum - 2147483647) | 0), rest))));
  } else {
    this.b7 = sum;
    this.ay = rest;
    return this;
  }
});
var $d_sc_Iterator$SliceIterator = new $TypeData().i($c_sc_Iterator$SliceIterator, "scala.collection.Iterator$SliceIterator", ({
  cd: 1,
  o: 1,
  d: 1,
  e: 1,
  t: 1
}));
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw new $c_jl_IndexOutOfBoundsException(("" + n));
  }
  var skipped = $thiz.nq(n);
  if (skipped.a8()) {
    throw new $c_jl_IndexOutOfBoundsException(("" + n));
  }
  return skipped.jc();
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
      if ((((!a$tailLocal1.a8()) && (!b$tailLocal1.a8())) && $m_sr_BoxesRunTime$().c(a$tailLocal1.jc(), b$tailLocal1.jc()))) {
        var a$tailLocal1$tmp1 = a$tailLocal1.jj();
        var b$tailLocal1$tmp1 = b$tailLocal1.jj();
        a$tailLocal1 = a$tailLocal1$tmp1;
        b$tailLocal1 = b$tailLocal1$tmp1;
        continue;
      }
      return (a$tailLocal1.a8() && b$tailLocal1.a8());
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
  cs: 1,
  a: 1,
  ay: 1,
  cf: 1,
  cj: 1
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
  this.jR = null;
  this.gg = 0;
  this.jQ = 0;
  this.jR = x$1;
  this.gg = 0;
  this.jQ = x$1.v();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.J = (function() {
  return (this.gg < this.jQ);
});
$p.E = (function() {
  var result = this.jR.g(this.gg);
  this.gg = ((1 + this.gg) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().i($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  d3: 1,
  o: 1,
  d: 1,
  e: 1,
  t: 1
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
  n: 1,
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
  n: 1,
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
  n: 1,
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
  return $m_RTLong$().mr($thiz, $thizhi);
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a8)));
}
var $d_jl_Long = new $TypeData().i(0, "java.lang.Long", ({
  a8: 1,
  n: 1,
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
  var str = $m_jl_Character$().pg(ch);
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
$p.gN = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.j5 = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.g7 = (function() {
  return this.fq();
});
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator(xs) {
  this.hf = null;
  this.b5 = 0;
  this.gd = 0;
  this.hf = xs;
  this.b5 = 0;
  this.gd = $m_jl_reflect_Array$().gP(this.hf);
}
$p = $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $p;
$p.al = (function() {
  return ((this.gd - this.b5) | 0);
});
$p.J = (function() {
  return (this.b5 < this.gd);
});
$p.E = (function() {
  if ((this.b5 >= $m_jl_reflect_Array$().gP(this.hf))) {
    $m_sc_Iterator$().b6.E();
  }
  var r = $m_sr_ScalaRunTime$().g6(this.hf, this.b5);
  this.b5 = ((1 + this.b5) | 0);
  return r;
});
$p.hP = (function(n) {
  if ((n > 0)) {
    var newPos = ((this.b5 + n) | 0);
    if ((newPos < 0)) {
      var $x_1 = this.gd;
    } else {
      var a = this.gd;
      var $x_1 = ((a < newPos) ? a : newPos);
    }
    this.b5 = $x_1;
  }
  return this;
});
var $d_sc_ArrayOps$ArrayIterator = new $TypeData().i($c_sc_ArrayOps$ArrayIterator, "scala.collection.ArrayOps$ArrayIterator", ({
  c5: 1,
  o: 1,
  d: 1,
  e: 1,
  t: 1,
  a: 1
}));
function $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I($thiz, value) {
  return ((value < 0) ? 0 : ((value > $thiz.aI) ? $thiz.aI : value));
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator(self) {
  this.jD = null;
  this.bi = 0;
  this.aI = 0;
  this.jD = self;
  this.bi = 0;
  this.aI = self.K();
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $p;
$p.al = (function() {
  return this.aI;
});
$p.J = (function() {
  return (this.aI > 0);
});
$p.E = (function() {
  if ((this.aI > 0)) {
    var r = this.jD.a7(this.bi);
    this.bi = ((1 + this.bi) | 0);
    this.aI = ((this.aI - 1) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().b6.E();
  }
});
$p.hP = (function(n) {
  if ((n > 0)) {
    this.bi = ((this.bi + n) | 0);
    var b = ((this.aI - n) | 0);
    this.aI = ((b < 0) ? 0 : b);
  }
  return this;
});
$p.hX = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.aI = ((b < 0) ? 0 : b);
  this.bi = ((this.bi + formatFrom) | 0);
  return this;
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  c9: 1,
  o: 1,
  d: 1,
  e: 1,
  t: 1,
  a: 1
}));
function $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($thiz) {
  if ((!$thiz.jH)) {
    $thiz.jG = new $c_sci_ArraySeq$ofRef(new ($d_sr_Nothing$.r().C)(0));
    $thiz.jH = true;
  }
  return $thiz.jG;
}
/** @constructor */
function $c_sci_ArraySeq$() {
  this.jG = null;
  this.jH = false;
}
$p = $c_sci_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_sci_ArraySeq$;
/** @constructor */
function $h_sci_ArraySeq$() {
}
$h_sci_ArraySeq$.prototype = $p;
var $d_sci_ArraySeq$ = new $TypeData().i($c_sci_ArraySeq$, "scala.collection.immutable.ArraySeq$", ({
  co: 1,
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
  this.jJ = null;
  $n_scm_ArraySeq$ = this;
  this.jJ = new $c_scm_ArraySeq$ofRef(new $ac_O(0));
}
$p = $c_scm_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_scm_ArraySeq$;
/** @constructor */
function $h_scm_ArraySeq$() {
}
$h_scm_ArraySeq$.prototype = $p;
var $d_scm_ArraySeq$ = new $TypeData().i($c_scm_ArraySeq$, "scala.collection.mutable.ArraySeq$", ({
  cv: 1,
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
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.r = (function() {
  return 924202651;
});
$p.v = (function() {
  return 0;
});
$p.B = (function() {
  return "EmptyTuple";
});
$p.g = (function(n) {
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
$p.m = (function() {
  return "()";
});
var $d_T$package$EmptyTuple$ = new $TypeData().i($c_T$package$EmptyTuple$, "scala.Tuple$package$EmptyTuple$", ({
  c2: 1,
  b: 1,
  c: 1,
  a: 1,
  cB: 1,
  cC: 1,
  cD: 1
}));
var $n_T$package$EmptyTuple$;
function $m_T$package$EmptyTuple$() {
  if ((!$n_T$package$EmptyTuple$)) {
    $n_T$package$EmptyTuple$ = new $c_T$package$EmptyTuple$();
  }
  return $n_T$package$EmptyTuple$;
}
function $f_sc_View__toString__T($thiz) {
  return ($thiz.fq() + "(<not computed>)");
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
    this.aV = null;
    this.aV = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  hQ() {
    return $dp_toString__T(this.aV);
  }
  B() {
    return "JavaScriptException";
  }
  v() {
    return 1;
  }
  g(x$1) {
    return ((x$1 === 0) ? this.aV : $m_sr_Statics$().nQ(x$1));
  }
  C() {
    return new $c_sr_ScalaRunTime$$anon$1(this);
  }
  r() {
    return $m_s_util_hashing_MurmurHash3$().N(this, 1744042595, true);
  }
  o(x$1) {
    return ((this === x$1) || ((x$1 instanceof $c_sjs_js_JavaScriptException) && $m_sr_BoxesRunTime$().c(this.aV, x$1.aV)));
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
    if (($thiz.jt && (!(!(!(!console.error)))))) {
      console.error(line);
    } else {
      console.log(line);
    }
  }
}
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream(isErr) {
  this.jt = false;
  this.gb = null;
  this.jt = isErr;
  $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__(this, new $c_jl_JSConsoleBasedPrintStream$DummyOutputStream(), false, null);
  this.gb = "";
}
$p = $c_jl_JSConsoleBasedPrintStream.prototype = new $h_Ljava_io_PrintStream();
$p.constructor = $c_jl_JSConsoleBasedPrintStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream() {
}
$h_jl_JSConsoleBasedPrintStream.prototype = $p;
$p.nT = (function(s) {
  var rest = s;
  while ((rest !== "")) {
    var this$1 = rest;
    var nlPos = (this$1.indexOf("\n") | 0);
    if ((nlPos < 0)) {
      this.gb = (("" + this.gb) + rest);
      rest = "";
    } else {
      var $x_1 = this.gb;
      var this$2 = rest;
      $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V(this, (("" + $x_1) + this$2.substring(0, nlPos)));
      this.gb = "";
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
    if (((n$tailLocal1 <= 0) || s$tailLocal1.a8())) {
      return s$tailLocal1;
    } else {
      var n$tailLocal1$tmp1 = ((n$tailLocal1 - 1) | 0);
      var s$tailLocal1$tmp1 = s$tailLocal1.jj();
      n$tailLocal1 = n$tailLocal1$tmp1;
      s$tailLocal1 = s$tailLocal1$tmp1;
    }
  }
}
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.i2 = null;
}
$p = $c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$p.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $p;
$p.m = (function() {
  return this.i2;
});
$p.o = (function(that) {
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
$p.m = (function() {
  return $f_sc_View__toString__T(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ObjectManifest$() {
  this.i2 = null;
  this.i2 = "Object";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ObjectManifest$, "scala.reflect.ManifestFactory$ObjectManifest$", ({
  cK: 1,
  cL: 1,
  cJ: 1,
  a: 1,
  cM: 1,
  cG: 1,
  b: 1,
  cH: 1,
  cI: 1
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
      if (o.j8($thiz)) {
        return $thiz.hW(o);
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
$p.a8 = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.hW = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.j8 = (function(that) {
  return true;
});
$p.o = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().mo(this);
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
  return (!(!((obj && obj.$classData) && obj.$classData.n.p)));
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.p)));
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.J)));
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.J)));
}
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.gf = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.gf = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $p;
$p.a7 = (function(idx) {
  return this.gf.a7(idx);
});
$p.K = (function() {
  return this.gf.K();
});
$p.a8 = (function() {
  return this.gf.a8();
});
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.gf = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$p.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $p;
$p.fo = (function(len) {
  var x = this.K();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.al = (function() {
  return this.K();
});
$p.a9 = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this);
});
$p.fq = (function() {
  return "IndexedSeqView";
});
var $d_sc_IndexedSeqView$Id = new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  c8: 1,
  ch: 1,
  c3: 1,
  c4: 1,
  w: 1,
  d: 1,
  e: 1,
  s: 1,
  r: 1,
  q: 1,
  a: 1,
  cl: 1,
  u: 1,
  cg: 1,
  x: 1,
  c7: 1
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
  return ($is_sci_IndexedSeq(that) ? ($thiz.K() === that.K()) : true);
}
function $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z($thiz, o) {
  if ($is_sci_IndexedSeq(o)) {
    if (($thiz === o)) {
      return true;
    } else {
      var length = $thiz.K();
      var equal = (length === o.K());
      if (equal) {
        var index = 0;
        var a = $thiz.j7();
        var b = o.j7();
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
          equal = $m_sr_BoxesRunTime$().c($thiz.a7(index), o.a7(index));
          index = ((1 + index) | 0);
        }
        if (((index < length) && equal)) {
          var thisIt = $thiz.a9().hP(index);
          var thatIt = o.a9().hP(index);
          while ((equal && thisIt.J())) {
            equal = $m_sr_BoxesRunTime$().c(thisIt.E(), thatIt.E());
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
  this.hg = null;
  this.hg = array;
}
$p = $c_sjsr_WrappedVarArgs.prototype = new $h_O();
$p.constructor = $c_sjsr_WrappedVarArgs;
/** @constructor */
function $h_sjsr_WrappedVarArgs() {
}
$h_sjsr_WrappedVarArgs.prototype = $p;
$p.j8 = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.hW = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.j7 = (function() {
  return $m_sci_IndexedSeqDefaults$().jI;
});
$p.a9 = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.fo = (function(len) {
  var x = this.K();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.al = (function() {
  return this.K();
});
$p.o = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.r = (function() {
  return $m_s_util_hashing_MurmurHash3$().mo(this);
});
$p.m = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.a8 = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.gN = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.j5 = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.K = (function() {
  return (this.hg.length | 0);
});
$p.a7 = (function(idx) {
  return this.hg[idx];
});
$p.g7 = (function() {
  return "WrappedVarArgs";
});
$p.f = (function(v1) {
  return this.a7((v1 | 0));
});
function $isArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aN)));
}
var $d_sjsr_WrappedVarArgs = new $TypeData().i($c_sjsr_WrappedVarArgs, "scala.scalajs.runtime.WrappedVarArgs", ({
  aN: 1,
  F: 1,
  d: 1,
  e: 1,
  s: 1,
  r: 1,
  q: 1,
  K: 1,
  h: 1,
  v: 1,
  u: 1,
  b: 1,
  l: 1,
  M: 1,
  L: 1,
  x: 1,
  p: 1,
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
$p.fo = (function(len) {
  var x = this.b8.b.length;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.al = (function() {
  return this.b8.b.length;
});
$p.fq = (function() {
  return "IndexedSeq";
});
$p.j8 = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.hW = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.g7 = (function() {
  return "ArraySeq";
});
$p.j7 = (function() {
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
$p.fo = (function(len) {
  var x = this.aJ.b.length;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.al = (function() {
  return this.aJ.b.length;
});
$p.fq = (function() {
  return "IndexedSeq";
});
$p.g7 = (function() {
  return "ArraySeq";
});
$p.o = (function(other) {
  if ((other instanceof $c_scm_ArraySeq)) {
    if ((this.aJ.b.length !== other.aJ.b.length)) {
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
  this.b8 = null;
  this.b8 = unsafeArray;
}
$p = $c_sci_ArraySeq$ofRef.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofRef;
/** @constructor */
function $h_sci_ArraySeq$ofRef() {
}
$h_sci_ArraySeq$ofRef.prototype = $p;
$p.K = (function() {
  return this.b8.b.length;
});
$p.a7 = (function(i) {
  return this.b8.b[i];
});
$p.r = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.lG(this.b8, this$1.fN);
});
$p.o = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofRef) ? $m_s_Array$().lQ(this.b8, that.b8) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.a9 = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.b8);
});
$p.f = (function(v1) {
  return this.a7((v1 | 0));
});
function $isArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aC)));
}
var $d_sci_ArraySeq$ofRef = new $TypeData().i($c_sci_ArraySeq$ofRef, "scala.collection.immutable.ArraySeq$ofRef", ({
  aC: 1,
  cn: 1,
  aB: 1,
  B: 1,
  w: 1,
  d: 1,
  e: 1,
  s: 1,
  r: 1,
  q: 1,
  h: 1,
  v: 1,
  u: 1,
  b: 1,
  l: 1,
  K: 1,
  M: 1,
  L: 1,
  x: 1,
  p: 1,
  aD: 1,
  F: 1,
  C: 1,
  D: 1,
  N: 1,
  c6: 1,
  a: 1
}));
function $p_sci_List__loop$2__I__I__sci_List__I($thiz, len$1, i, xs) {
  var xs$tailLocal1 = xs;
  var i$tailLocal1 = i;
  while (true) {
    return ((i$tailLocal1 === len$1) ? (xs$tailLocal1.a8() ? 0 : 1) : (xs$tailLocal1.a8() ? (-1) : xs$tailLocal1.ha()));
  }
}
function $p_sci_List__listEq$1__sci_List__sci_List__Z($thiz, a, b) {
  var b$tailLocal1 = b;
  var a$tailLocal1 = a;
  while (true) {
    if ((a$tailLocal1 === b$tailLocal1)) {
      return true;
    } else {
      var aEmpty = a$tailLocal1.a8();
      var bEmpty = b$tailLocal1.a8();
      if ((!(aEmpty || bEmpty))) {
        a$tailLocal1.hR();
      }
      if (false) {
        a$tailLocal1.ha();
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
$p.a7 = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.hW = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.fq = (function() {
  return "LinearSeq";
});
$p.a8 = (function() {
  return (this === $m_sci_Nil$());
});
$p.gN = (function(f) {
  var these = this;
  while ((!these.a8())) {
    f.f(these.hR());
    these.ha();
  }
});
$p.K = (function() {
  var these = this;
  var len = 0;
  while ((!these.a8())) {
    len = ((1 + len) | 0);
    these.ha();
  }
  return len;
});
$p.fo = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__I__sci_List__I(this, len, 0, this));
});
$p.g7 = (function() {
  return "List";
});
$p.o = (function(o) {
  return ((o instanceof $c_sci_List) ? $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, o) : $f_sc_Seq__equals__O__Z(this, o));
});
$p.nq = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$p.f = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aE)));
}
/** @constructor */
function $c_scm_ArraySeq$ofRef(array) {
  this.aJ = null;
  this.aJ = array;
}
$p = $c_scm_ArraySeq$ofRef.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofRef;
/** @constructor */
function $h_scm_ArraySeq$ofRef() {
}
$h_scm_ArraySeq$ofRef.prototype = $p;
$p.K = (function() {
  return this.aJ.b.length;
});
$p.a7 = (function(index) {
  return this.aJ.b[index];
});
$p.r = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.lG(this.aJ, this$1.fN);
});
$p.o = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofRef) ? $m_s_Array$().lQ(this.aJ, that.aJ) : $c_scm_ArraySeq.prototype.o.call(this, that));
});
$p.a9 = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.aJ);
});
$p.f = (function(v1) {
  return this.a7((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aG)));
}
var $d_scm_ArraySeq$ofRef = new $TypeData().i($c_scm_ArraySeq$ofRef, "scala.collection.mutable.ArraySeq$ofRef", ({
  aG: 1,
  aF: 1,
  O: 1,
  B: 1,
  w: 1,
  d: 1,
  e: 1,
  s: 1,
  r: 1,
  q: 1,
  h: 1,
  v: 1,
  u: 1,
  b: 1,
  l: 1,
  S: 1,
  y: 1,
  P: 1,
  U: 1,
  T: 1,
  x: 1,
  p: 1,
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
$p.C = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.v = (function() {
  return 0;
});
$p.B = (function() {
  return "Nil";
});
$p.g = (function(n) {
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
$p.hR = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list");
});
$p.ha = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$p.al = (function() {
  return 0;
});
$p.a9 = (function() {
  return $m_sc_Iterator$().b6;
});
$p.jc = (function() {
  this.hR();
});
$p.jj = (function() {
  this.ha();
});
var $d_sci_Nil$ = new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  ct: 1,
  aE: 1,
  aB: 1,
  B: 1,
  w: 1,
  d: 1,
  e: 1,
  s: 1,
  r: 1,
  q: 1,
  h: 1,
  v: 1,
  u: 1,
  b: 1,
  l: 1,
  K: 1,
  M: 1,
  L: 1,
  ce: 1,
  J: 1,
  cr: 1,
  cq: 1,
  C: 1,
  D: 1,
  ci: 1,
  N: 1,
  a: 1,
  cm: 1,
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
  $thiz.aU = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, new $c_jl_StringBuilder());
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.aU = null;
}
$p = $c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
$h_scm_StringBuilder.prototype = $p;
$p.a9 = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.fo = (function(len) {
  var x = this.aU.K();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.fq = (function() {
  return "IndexedSeq";
});
$p.K = (function() {
  return this.aU.K();
});
$p.al = (function() {
  return this.aU.K();
});
$p.m = (function() {
  return this.aU.aj;
});
$p.a8 = (function() {
  return (this.aU.K() === 0);
});
$p.a7 = (function(i) {
  return $bC(this.aU.lI(i));
});
$p.f = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.aU.lI(i));
});
var $d_scm_StringBuilder = new $TypeData().i($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  cA: 1,
  O: 1,
  B: 1,
  w: 1,
  d: 1,
  e: 1,
  s: 1,
  r: 1,
  q: 1,
  h: 1,
  v: 1,
  u: 1,
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
  cy: 1,
  x: 1,
  p: 1,
  R: 1,
  Q: 1,
  H: 1,
  a: 1
}));
/** @constructor */
function $c_sjs_js_WrappedArray(array) {
  this.fM = null;
  this.fM = array;
}
$p = $c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
}
$h_sjs_js_WrappedArray.prototype = $p;
$p.fq = (function() {
  return "IndexedSeq";
});
$p.a9 = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.fo = (function(len) {
  var x = (this.fM.length | 0);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.a7 = (function(index) {
  return this.fM[index];
});
$p.K = (function() {
  return (this.fM.length | 0);
});
$p.al = (function() {
  return (this.fM.length | 0);
});
$p.g7 = (function() {
  return "WrappedArray";
});
$p.f = (function(v1) {
  var index = (v1 | 0);
  return this.fM[index];
});
var $d_sjs_js_WrappedArray = new $TypeData().i($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
  dd: 1,
  cu: 1,
  O: 1,
  B: 1,
  w: 1,
  d: 1,
  e: 1,
  s: 1,
  r: 1,
  q: 1,
  h: 1,
  v: 1,
  u: 1,
  b: 1,
  l: 1,
  S: 1,
  y: 1,
  P: 1,
  U: 1,
  T: 1,
  aI: 1,
  aJ: 1,
  cz: 1,
  cw: 1,
  D: 1,
  C: 1,
  Q: 1,
  x: 1,
  p: 1,
  R: 1,
  cx: 1,
  aH: 1,
  a: 1
}));
$s_Lsketches_rooms_canvases_roomsCanvases__main__AT__V(new ($d_T.r().C)([]));
